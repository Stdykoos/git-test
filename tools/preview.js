#!/usr/bin/env node
/**
 * Apps Script 코드를 로컬에서 검증하고 메일 미리보기 HTML을 만든다.
 *
 *   node tools/preview.js          # 검증 + Day 1 미리보기
 *   node tools/preview.js 12       # Day 12 미리보기
 *
 * Google Apps Script 런타임 전역(GmailApp, Utilities 등)은 최소한으로 스텁 처리한다.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'apps-script');
const FILES = ['Content_Theory.gs', 'Content_Negotiation.gs', 'Content_Meeting.gs', 'Code.gs'];

const DAY_NAMES = ['일', '월', '화', '수', '목', '금', '토'];

const sandbox = {
  console,
  PropertiesService: {
    getScriptProperties: () => ({
      getProperties: () => ({ RECIPIENT_EMAIL: 'you@company.com' }),
      getProperty: () => null,
      setProperty: () => {}
    })
  },
  Session: { getScriptTimeZone: () => 'Asia/Seoul' },
  Logger: { log: (...a) => console.log('[Logger]', ...a) },
  GmailApp: { sendEmail: () => { throw new Error('preview mode: no mail sent'); } },
  ScriptApp: { getProjectTriggers: () => [], newTrigger: () => { throw new Error('preview mode'); } },
  Utilities: {
    formatDate(date, tz, fmt) {
      if (fmt === 'u') return String(date.getDay() === 0 ? 7 : date.getDay());
      return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 (${DAY_NAMES[date.getDay()]})`;
    }
  }
};

const source = FILES.map((f) => fs.readFileSync(path.join(SRC_DIR, f), 'utf8')).join('\n;\n');
vm.createContext(sandbox);
vm.runInContext(source, sandbox, { filename: 'bundle.gs' });

/* ----------------------------- 검증 ----------------------------- */
const lib = sandbox.library_();
let errors = 0;
const fail = (msg) => { console.error('  ✗ ' + msg); errors++; };

Object.keys(lib).forEach((key) => {
  const entries = lib[key];
  const focuses = new Set();
  const terms = new Set();
  entries.forEach((entry, i) => {
    const at = `${key}[${i}] (${entry && entry.focus})`;
    if (!entry.focus) fail(`${at}: focus 누락`);
    if (focuses.has(entry.focus)) fail(`${at}: focus 중복`);
    focuses.add(entry.focus);
    if (!Array.isArray(entry.sentences) || entry.sentences.length !== 2) fail(`${at}: 문장은 2개여야 함`);
    if (!Array.isArray(entry.words) || entry.words.length !== 2) fail(`${at}: 단어는 2개여야 함`);
    (entry.sentences || []).forEach((s, j) => {
      if (!s.en || !s.ko) fail(`${at} 문장${j + 1}: en/ko 누락`);
      if (s.en && !/[.?!]$/.test(s.en.trim())) fail(`${at} 문장${j + 1}: 마침표 없음`);
    });
    (entry.words || []).forEach((w, j) => {
      if (!w.term || !w.ko || !w.def) fail(`${at} 단어${j + 1}: term/ko/def 누락`);
      const k = w.term.toLowerCase();
      if (terms.has(k)) fail(`${at} 단어${j + 1}: "${w.term}" 중복`);
      terms.add(k);
    });
  });
  console.log(`  ${key.padEnd(12)} ${entries.length}일치 · 문장 ${entries.length * 2}개 · 단어 ${terms.size}개`);
});

/* --------------------------- 미리보기 --------------------------- */
const day = Math.max(1, parseInt(process.argv[2], 10) || 1);
const lesson = sandbox.buildLesson_(day - 1);
const html = sandbox.renderHtml_(lesson, new Date());
const cfg = { SUBJECT_PREFIX: sandbox.DEFAULT_CONFIG.SUBJECT_PREFIX };
const out = path.join(ROOT, 'preview.html');
fs.writeFileSync(out, html, 'utf8');

console.log('');
console.log('  제목: ' + sandbox.buildSubject_(cfg, lesson));
console.log('  미리보기: ' + path.relative(ROOT, out));
console.log('');
if (errors) {
  console.error(`검증 실패: ${errors}건`);
  process.exit(1);
}
console.log('검증 통과 ✓');

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
const FILES = ['Content_Theory.gs', 'Content_Negotiation.gs', 'Content_Meeting.gs', 'Sources.gs', 'Code.gs', 'Quiz.gs', 'QuizDoc.gs'];

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
  DocumentApp: { ParagraphHeading: { TITLE: 'TITLE', HEADING2: 'H2', NORMAL: 'NORMAL' } },
  DriveApp: {}, UrlFetchApp: {},
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
// 며칠째인지 → 몇 회차 학습인지 (4일 주기: 3일 학습 + 1일 퀴즈)
const day = Math.max(1, parseInt(process.argv[2], 10) || 1);
let lessonIdx = 0;
let quizAt = 0;
for (let d = 1; d < day; d++) {
  if (lessonIdx - quizAt >= 3) quizAt = lessonIdx;
  else lessonIdx++;
}
const isQuizDay = lessonIdx - quizAt >= 3;
const lesson = sandbox.buildLesson_(lessonIdx, day);
const html = sandbox.renderHtml_(lesson, new Date());
const cfg = { SUBJECT_PREFIX: sandbox.DEFAULT_CONFIG.SUBJECT_PREFIX };
const out = path.join(ROOT, 'preview.html');
fs.writeFileSync(out, html, 'utf8');

// 출처: 존재하지 않는 주제에 붙은 항목이 없는지, 카테고리별 커버리지는 얼마인지
const allFocuses = new Set();
Object.keys(lib).forEach((k) => lib[k].forEach((e) => allFocuses.add(e.focus)));
Object.keys(sandbox.SOURCES).forEach((k) => {
  if (!allFocuses.has(k)) fail(`출처 "${k}": 같은 이름의 학습 주제가 없습니다 (오타 확인)`);
  const src = sandbox.SOURCES[k];
  ['author', 'work', 'year'].forEach((f) => { if (!src[f]) fail(`출처 "${k}": ${f} 누락`); });
  if (!/^https:\/\/scholar\.google\.com\/scholar\?q=/.test(sandbox.sourceUrl_(src))) fail(`출처 "${k}": 링크 생성 실패`);
});
Object.keys(lib).forEach((k) => {
  const n = lib[k].filter((e) => sandbox.SOURCES[e.focus]).length;
  console.log(`  출처 ${k.padEnd(8)} ${n}/${lib[k].length}개 주제`);
});

// 퀴즈 문서 구조 검증
const specQuiz = sandbox.buildQuiz_(3, 4, []);
const spec = sandbox.buildQuizDocSpec_(specQuiz, '복습 퀴즈 Day 1~3');
const boxes = spec.filter((x) => x.kind === 'answerbox').length;
if (boxes !== specQuiz.questions.length) fail(`문서: 답 칸 ${boxes}개 (문항 ${specQuiz.questions.length}개와 불일치)`);
if (spec.filter((x) => x.kind === 'pagebreak').length !== 1) fail('문서: 정답 페이지 구분이 없습니다');
if (!spec.some((x) => x.kind === 'h2' && x.text === '푸는 방법')) fail('문서: 지시문 섹션 누락');
if (!spec.some((x) => x.kind === 'h2' && x.text === '정답')) fail('문서: 정답 섹션 누락');
specQuiz.questions.forEach((q, i) => {
  if (!spec.some((x) => x.text === `${i + 1}. ${q.answer}  (${q.day}회차)`)) fail(`문서: ${i + 1}번 정답 누락`);
});
console.log(`  문서         ${spec.length}개 블록 · 답 칸 ${boxes}개 · 정답 페이지 분리`);

// 발송 일정 + 중복 없는 누적 출제 시뮬레이션 (주말 무시, 60일)
const EVERY = 3;
let lessonIndex = 0;   // 학습 회차
let lastQuizAt = 0;    // 마지막 퀴즈 시점의 학습 회차
let askedAll = [];
const fired = [];
let dupCount = 0;
let recycledAt = null;
for (let dayNo = 1; dayNo <= 60; dayNo++) {
  const due = lessonIndex - lastQuizAt >= EVERY;
  if (due) {
    const q = sandbox.buildQuiz_(lessonIndex, dayNo, askedAll);
    if (q.questions.length !== 10) fail(`Day ${dayNo}: 문항 ${q.questions.length}개`);
    const ids = new Set(q.ids);
    if (ids.size !== q.ids.length) fail(`Day ${dayNo}: 한 회차 안에서 문항 중복`);
    q.ids.forEach((id) => { if (askedAll.includes(id)) dupCount++; });
    if (q.recycled && recycledAt === null) recycledAt = dayNo;
    if (q.toDay !== dayNo - 1) fail(`Day ${dayNo}: 범위 표기가 Day 1~${q.toDay} (기대 Day 1~${dayNo - 1})`);
    askedAll = askedAll.concat(q.ids);
    fired.push(`Day ${dayNo}→1~${q.toDay}`);
    lastQuizAt = lessonIndex;
  } else {
    lessonIndex++;     // 학습일
  }
}
if (dupCount) fail(`누적 ${dupCount}개 문항이 재출제되었습니다`);
const head = fired.slice(0, 3).join(', ');
if (head !== 'Day 4→1~3, Day 8→1~7, Day 12→1~11') fail(`일정 불일치: ${head}`);
console.log(`  일정         ${head} … (총 ${fired.length}회, 중복 0건${recycledAt ? `, 재출제 시작 Day ${recycledAt}` : ''})`);

const quiz = sandbox.buildQuiz_(Math.max(1, lessonIdx), day, []);
const quizOut = path.join(ROOT, 'preview-quiz.html');
fs.writeFileSync(quizOut, sandbox.renderQuizHtml_(quiz, new Date(),
  { url: 'https://docs.google.com/document/d/PREVIEW/edit', shared: true, docx: true }), 'utf8');

const planned = sandbox.QUIZ_PLAN.reduce((n, p) => n + p.count, 0);
console.log(`  quiz         회차당 ${planned}문항 · 누적 범위에서 중복 없이 출제`);

console.log('');
console.log('  Day ' + day + (isQuizDay ? ' — 복습 퀴즈 날 (학습 메일 없음)' : ' — ' + lesson.lesson + '회차 학습'));
console.log('  제목: ' + sandbox.buildSubject_(cfg, lesson));
console.log('  미리보기: ' + path.relative(ROOT, out) + ', ' + path.relative(ROOT, quizOut));
console.log('');
if (errors) {
  console.error(`검증 실패: ${errors}건`);
  process.exit(1);
}
console.log('검증 통과 ✓');

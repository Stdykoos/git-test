/**
 * Daily Business English Mailer
 * ------------------------------------------------------------------
 * 매일 정해진 시각에 3개 카테고리(영어교육이론 / 비즈니스 협상 / 미팅 표현)의
 * 문장 2개 + 단어 2개를 내 Gmail 계정에서 회사 메일로 보내 준다.
 *
 * 최초 1회 setup() 실행 → 이후 트리거가 sendDailyLesson()을 자동 호출.
 */

var DEFAULT_CONFIG = {
  RECIPIENT_EMAIL: '',          // 필수: 회사 메일 주소
  CC_EMAIL: '',                 // 선택: 참조 (여러 개면 콤마로 구분)
  SEND_HOUR: '7',               // 0~23 (Asia/Seoul 기준)
  WEEKDAYS_ONLY: 'true',        // 'true'면 토/일 발송 안 함
  SENDER_NAME: 'Daily Business English',
  SUBJECT_PREFIX: '[Daily Biz English]',
  LESSON_INDEX: '0'             // 진도(자동 관리). 수동으로 건드리지 않아도 됨.
};

var CATEGORIES = [
  { key: 'theory',      label: '영어교육이론',      badge: 'ELT THEORY',  color: '#2563eb' },
  { key: 'negotiation', label: '비즈니스 협상 표현', color: '#0f766e', badge: 'NEGOTIATION' },
  { key: 'meeting',     label: '미팅 표현',         color: '#b45309', badge: 'MEETING' }
];

/* ------------------------------------------------------------------ */
/* 설정                                                                */
/* ------------------------------------------------------------------ */

function props_() {
  return PropertiesService.getScriptProperties();
}

function getConfig_() {
  var p = props_().getProperties();
  var cfg = {};
  for (var k in DEFAULT_CONFIG) {
    cfg[k] = (p[k] === undefined || p[k] === '') ? DEFAULT_CONFIG[k] : p[k];
  }
  cfg.SEND_HOUR = Math.max(0, Math.min(23, parseInt(cfg.SEND_HOUR, 10) || 7));
  cfg.WEEKDAYS_ONLY = String(cfg.WEEKDAYS_ONLY).toLowerCase() === 'true';
  cfg.LESSON_INDEX = Math.max(0, parseInt(cfg.LESSON_INDEX, 10) || 0);
  return cfg;
}

/**
 * 최초 1회 실행. 스크립트 속성에 기본값을 채우고 매일 발송 트리거를 건다.
 * 수신 메일 주소는 스크립트 속성(RECIPIENT_EMAIL)에 먼저 넣어 두거나,
 * 아래 setRecipient('me@company.com') 로 지정한다.
 */
function setup() {
  var store = props_();
  var current = store.getProperties();
  for (var k in DEFAULT_CONFIG) {
    if (current[k] === undefined) store.setProperty(k, DEFAULT_CONFIG[k]);
  }
  var cfg = getConfig_();
  if (!cfg.RECIPIENT_EMAIL) {
    throw new Error('RECIPIENT_EMAIL이 비어 있습니다. setRecipient("회사메일주소") 를 먼저 실행하세요.');
  }
  installTrigger_(cfg.SEND_HOUR);
  Logger.log('설정 완료: 매일 %s시에 %s 로 발송합니다.', cfg.SEND_HOUR, cfg.RECIPIENT_EMAIL);
  return '설정 완료';
}

/** 회사 메일 주소 지정 (setup 전에 1회 실행) */
function setRecipient(email) {
  var value = email || DEFAULT_CONFIG.RECIPIENT_EMAIL;
  if (!value) throw new Error('setRecipient("you@company.com") 형태로 주소를 넣어 주세요.');
  props_().setProperty('RECIPIENT_EMAIL', String(value).trim());
  Logger.log('수신 주소: %s', value);
  return value;
}

/** 발송 시각 변경 (0~23시, 한국 시간) */
function setSendHour(hour) {
  var h = Math.max(0, Math.min(23, parseInt(hour, 10)));
  props_().setProperty('SEND_HOUR', String(h));
  installTrigger_(h);
  Logger.log('발송 시각: 매일 %s시', h);
  return h;
}

function installTrigger_(hour) {
  removeTriggers_();
  ScriptApp.newTrigger('sendDailyLesson')
    .timeBased()
    .everyDays(1)
    .atHour(hour)
    .nearMinute(0)
    .create();
}

function removeTriggers_() {
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === 'sendDailyLesson') {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
}

/** 발송 중단 (트리거만 삭제, 진도는 유지) */
function stopDailyLesson() {
  removeTriggers_();
  Logger.log('매일 발송 트리거를 제거했습니다.');
}

/** 진도 초기화 (Day 1부터 다시) */
function resetProgress() {
  props_().setProperty('LESSON_INDEX', '0');
  Logger.log('진도를 Day 1로 초기화했습니다.');
}

/** 특정 Day로 진도 이동 (예: goToDay(15)) */
function goToDay(day) {
  var d = Math.max(1, parseInt(day, 10) || 1);
  props_().setProperty('LESSON_INDEX', String(d - 1));
  Logger.log('진도를 Day %s로 옮겼습니다.', d);
  return d;
}

/* ------------------------------------------------------------------ */
/* 발송                                                                */
/* ------------------------------------------------------------------ */

/** 트리거가 매일 호출하는 함수 */
function sendDailyLesson() {
  var cfg = getConfig_();
  if (!cfg.RECIPIENT_EMAIL) throw new Error('RECIPIENT_EMAIL이 설정되어 있지 않습니다.');

  var now = new Date();
  if (cfg.WEEKDAYS_ONLY) {
    var dow = parseInt(Utilities.formatDate(now, timeZone_(), 'u'), 10); // 1=월 ... 7=일
    if (dow === 6 || dow === 7) {
      Logger.log('주말이므로 발송을 건너뜁니다.');
      return;
    }
  }

  var index = cfg.LESSON_INDEX;
  deliver_(cfg, index, now);
  props_().setProperty('LESSON_INDEX', String(index + 1));
  Logger.log('Day %s 발송 완료', index + 1);
}

/** 테스트 발송: 지금 바로 보내되 진도는 올리지 않는다. */
function sendTestEmail() {
  var cfg = getConfig_();
  if (!cfg.RECIPIENT_EMAIL) throw new Error('RECIPIENT_EMAIL이 설정되어 있지 않습니다.');
  deliver_(cfg, cfg.LESSON_INDEX, new Date());
  Logger.log('테스트 메일을 %s 로 보냈습니다.', cfg.RECIPIENT_EMAIL);
}

function deliver_(cfg, index, now) {
  var lesson = buildLesson_(index);
  var options = {
    htmlBody: renderHtml_(lesson, now),
    name: cfg.SENDER_NAME
  };
  if (cfg.CC_EMAIL) options.cc = cfg.CC_EMAIL;
  GmailApp.sendEmail(cfg.RECIPIENT_EMAIL, buildSubject_(cfg, lesson), renderText_(lesson, now), options);
}

function timeZone_() {
  return Session.getScriptTimeZone() || 'Asia/Seoul';
}

/* ------------------------------------------------------------------ */
/* 콘텐츠 조립                                                          */
/* ------------------------------------------------------------------ */

function library_() {
  return {
    theory: LESSONS_THEORY,
    negotiation: LESSONS_NEGOTIATION,
    meeting: LESSONS_MEETING
  };
}

/**
 * index(0부터)에 해당하는 하루치 학습을 조립한다.
 * 라이브러리를 다 돌면 자동으로 2회독, 3회독으로 순환한다.
 */
function buildLesson_(index) {
  var lib = library_();
  var blocks = [];
  for (var i = 0; i < CATEGORIES.length; i++) {
    var cat = CATEGORIES[i];
    var items = lib[cat.key];
    blocks.push({
      key: cat.key,
      label: cat.label,
      badge: cat.badge,
      color: cat.color,
      entry: items[index % items.length]
    });
  }
  var shortest = Math.min(lib.theory.length, lib.negotiation.length, lib.meeting.length);
  return {
    day: index + 1,
    round: Math.floor(index / shortest) + 1,
    blocks: blocks,
    review: index > 0 ? buildReview_(lib, index - 1) : null
  };
}

/** 어제 배운 단어만 뽑아 복습 퀴즈용으로 만든다. */
function buildReview_(lib, prevIndex) {
  var out = [];
  for (var i = 0; i < CATEGORIES.length; i++) {
    var items = lib[CATEGORIES[i].key];
    var entry = items[prevIndex % items.length];
    for (var j = 0; j < entry.words.length; j++) {
      out.push({ term: entry.words[j].term, ko: entry.words[j].ko });
    }
  }
  return { day: prevIndex + 1, words: out };
}

function buildSubject_(cfg, lesson) {
  var focuses = lesson.blocks.map(function (b) { return b.entry.focus; }).join(' · ');
  var round = lesson.round > 1 ? ' (' + lesson.round + '회독)' : '';
  return cfg.SUBJECT_PREFIX + ' Day ' + lesson.day + round + ' — ' + focuses;
}

/* ------------------------------------------------------------------ */
/* 렌더링                                                              */
/* ------------------------------------------------------------------ */

function esc_(s) {
  return String(s === undefined || s === null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function formatDate_(now) {
  return Utilities.formatDate(now, timeZone_(), 'yyyy년 M월 d일 (E)');
}

function renderHtml_(lesson, now) {
  var h = [];
  h.push('<div style="margin:0;padding:0;background:#f4f5f7;">');
  h.push('<div style="max-width:640px;margin:0 auto;padding:24px 16px;font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',\'Apple SD Gothic Neo\',\'Malgun Gothic\',Roboto,sans-serif;color:#1f2937;">');

  // Header
  h.push('<div style="background:#111827;border-radius:14px;padding:22px 24px;color:#ffffff;">');
  h.push('<div style="font-size:12px;letter-spacing:.14em;color:#9ca3af;">DAILY BUSINESS ENGLISH</div>');
  h.push('<div style="font-size:24px;font-weight:700;margin-top:6px;">Day ' + lesson.day +
    (lesson.round > 1 ? ' <span style="font-size:13px;font-weight:500;color:#9ca3af;">· ' + lesson.round + '회독</span>' : '') + '</div>');
  h.push('<div style="font-size:13px;color:#d1d5db;margin-top:4px;">' + esc_(formatDate_(now)) + ' · 문장 6개 + 단어 6개 · 5분</div>');
  h.push('</div>');

  // Category blocks
  for (var i = 0; i < lesson.blocks.length; i++) {
    h.push(renderBlockHtml_(lesson.blocks[i], i + 1));
  }

  // Review
  if (lesson.review && lesson.review.words.length) {
    h.push('<div style="background:#ffffff;border:1px dashed #cbd5e1;border-radius:14px;padding:18px 20px;margin-top:16px;">');
    h.push('<div style="font-size:13px;font-weight:700;color:#475569;">🔁 어제(Day ' + lesson.review.day + ') 복습 — 영어로 말해 보기</div>');
    h.push('<div style="font-size:14px;color:#334155;line-height:1.9;margin-top:8px;">');
    for (var r = 0; r < lesson.review.words.length; r++) {
      h.push('<div>· ' + esc_(lesson.review.words[r].ko) + '　<span style="color:#cbd5e1;">→ ' + esc_(lesson.review.words[r].term) + '</span></div>');
    }
    h.push('</div></div>');
  }

  // Footer
  h.push('<div style="text-align:center;color:#94a3b8;font-size:12px;margin-top:20px;line-height:1.7;">');
  h.push('오늘 문장 중 1개만 골라 실제 메일·미팅에서 써 보세요.<br>');
  h.push('발송 시각·수신 주소 변경은 Apps Script 프로젝트에서 설정할 수 있습니다.');
  h.push('</div>');

  h.push('</div></div>');
  return h.join('');
}

function renderBlockHtml_(block, n) {
  var e = block.entry;
  var h = [];
  h.push('<div style="background:#ffffff;border-radius:14px;padding:20px;margin-top:16px;border-top:4px solid ' + block.color + ';">');
  h.push('<div style="font-size:11px;letter-spacing:.12em;color:' + block.color + ';font-weight:700;">' + block.badge + '</div>');
  h.push('<div style="font-size:17px;font-weight:700;margin-top:4px;">' + n + '. ' + esc_(block.label) +
    ' <span style="font-size:13px;font-weight:500;color:#6b7280;">— ' + esc_(e.focus) + '</span></div>');

  h.push('<div style="margin-top:14px;">');
  for (var i = 0; i < e.sentences.length; i++) {
    var s = e.sentences[i];
    h.push('<div style="background:#f8fafc;border-left:3px solid ' + block.color + ';border-radius:0 8px 8px 0;padding:12px 14px;margin-bottom:10px;">');
    h.push('<div style="font-size:15px;font-weight:600;line-height:1.6;color:#111827;">' + esc_(s.en) + '</div>');
    h.push('<div style="font-size:13px;color:#475569;margin-top:5px;line-height:1.6;">' + esc_(s.ko) + '</div>');
    if (s.use) h.push('<div style="font-size:12px;color:#94a3b8;margin-top:6px;">💡 ' + esc_(s.use) + '</div>');
    h.push('</div>');
  }
  h.push('</div>');

  h.push('<div style="border-top:1px solid #e5e7eb;padding-top:12px;margin-top:4px;">');
  h.push('<div style="font-size:12px;font-weight:700;color:#64748b;margin-bottom:8px;">오늘의 단어</div>');
  for (var w = 0; w < e.words.length; w++) {
    var word = e.words[w];
    h.push('<div style="margin-bottom:10px;">');
    h.push('<div style="font-size:14px;"><b>' + esc_(word.term) + '</b>' +
      (word.pos ? ' <span style="color:#94a3b8;font-size:12px;">' + esc_(word.pos) + '</span>' : '') +
      ' <span style="color:#334155;">' + esc_(word.ko) + '</span></div>');
    h.push('<div style="font-size:12.5px;color:#64748b;line-height:1.6;margin-top:2px;">' + esc_(word.def) + '</div>');
    if (word.ex) h.push('<div style="font-size:12.5px;color:#0f172a;background:#f1f5f9;border-radius:6px;padding:6px 8px;margin-top:4px;">e.g. ' + esc_(word.ex) + '</div>');
    h.push('</div>');
  }
  h.push('</div>');

  h.push('</div>');
  return h.join('');
}

function renderText_(lesson, now) {
  var t = [];
  t.push('DAILY BUSINESS ENGLISH — Day ' + lesson.day + (lesson.round > 1 ? ' (' + lesson.round + '회독)' : ''));
  t.push(formatDate_(now));
  t.push('');
  for (var i = 0; i < lesson.blocks.length; i++) {
    var b = lesson.blocks[i];
    t.push('[' + (i + 1) + '] ' + b.label + ' — ' + b.entry.focus);
    for (var s = 0; s < b.entry.sentences.length; s++) {
      t.push('  · ' + b.entry.sentences[s].en);
      t.push('    ' + b.entry.sentences[s].ko);
      if (b.entry.sentences[s].use) t.push('    (' + b.entry.sentences[s].use + ')');
    }
    t.push('  [단어]');
    for (var w = 0; w < b.entry.words.length; w++) {
      var word = b.entry.words[w];
      t.push('  · ' + word.term + ' — ' + word.ko + ' : ' + word.def);
      if (word.ex) t.push('    e.g. ' + word.ex);
    }
    t.push('');
  }
  if (lesson.review && lesson.review.words.length) {
    t.push('[복습] Day ' + lesson.review.day);
    for (var r = 0; r < lesson.review.words.length; r++) {
      t.push('  · ' + lesson.review.words[r].ko + ' → ' + lesson.review.words[r].term);
    }
  }
  return t.join('\n');
}

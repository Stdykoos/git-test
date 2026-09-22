/**
 * 3일 주기 복습 퀴즈
 * ------------------------------------------------------------------
 * 학습 메일 3회분이 쌓이면, 그 3일치에서 랜덤으로 10문항을 뽑아 보낸다.
 * 정답은 메일 하단에 따로 모아 두어 먼저 풀어 본 뒤 확인할 수 있다.
 *
 * 문항 유형
 *   A. 단어 영작   — 한국어 뜻과 영문 정의를 보고 단어 쓰기 (첫 글자 힌트)
 *   B. 빈칸 채우기 — 예문에서 빠진 단어 채우기
 *   C. 문장 영작   — 한국어 문장을 영어로 말해 보기 (상황 힌트)
 */

/** 메일과 문서 양쪽에서 함께 쓰는 안내 문구 */
var QUIZ_HOWTO = [
  '정답을 보기 전에 먼저 풀어 보세요. 정답은 맨 뒤에 따로 모아 두었습니다.',
  '첨부된 Word 파일이나 구글 문서에 직접 답을 적을 수 있습니다.',
  '문장 영작은 글로 쓰는 대신 소리 내어 말해 보셔도 됩니다.'
];

var QUIZ_TYPE_HOWTO = {
  word: '한국어 뜻과 영문 정의를 보고 영어 단어를 쓰세요. 밑줄은 글자 수이고 맨 앞 글자가 힌트입니다.',
  cloze: '문장의 빈칸(______)에 들어갈 단어를 쓰세요.',
  sentence: '한국어 문장을 영어로 옮겨 보세요. 괄호 안은 이 문장을 쓰는 상황입니다.'
};

var QUIZ_PLAN = [
  { type: 'word', count: 4 },
  { type: 'cloze', count: 3 },
  { type: 'sentence', count: 3 }
];

var QUIZ_TYPE_LABEL = {
  word: { badge: '단어 영작', color: '#2563eb' },
  cloze: { badge: '빈칸 채우기', color: '#0f766e' },
  sentence: { badge: '문장 영작', color: '#b45309' }
};

/* ------------------------------------------------------------------ */
/* 발송                                                                */
/* ------------------------------------------------------------------ */

/** 오늘이 복습 퀴즈 날인지 (학습 3일치를 마쳤는지) */
function isQuizDue_(cfg) {
  return cfg.QUIZ_ENABLED && (cfg.LESSON_INDEX - cfg.QUIZ_LAST_INDEX) >= cfg.QUIZ_EVERY;
}

/** 이미 출제한 문항 목록 */
function loadAsked_() {
  var raw = props_().getProperty('QUIZ_ASKED') || '';
  return raw ? raw.split(',') : [];
}

/**
 * 출제 기록 저장. 스크립트 속성 한 칸은 9KB까지라 오래된 것부터 버린다.
 * 버려진 문항은 아주 먼 훗날 다시 나올 수 있지만, 그때쯤이면 복습이 필요한 시점이다.
 */
function saveAsked_(list) {
  var text = list.join(',');
  while (text.length > 7000 && list.length > 1) {
    list.shift();
    text = list.join(',');
  }
  props_().setProperty('QUIZ_ASKED', text);
}

/** 트리거가 매일 저녁 호출한다. 퀴즈 날에만 실제로 발송한다. */
function sendQuizEmail() {
  var cfg = getConfig_();
  if (!cfg.QUIZ_ENABLED) {
    Logger.log('퀴즈 기능이 꺼져 있습니다 (QUIZ_ENABLED).');
    return;
  }
  if (!cfg.RECIPIENT_EMAIL) throw new Error('RECIPIENT_EMAIL이 설정되어 있지 않습니다.');

  var now = new Date();
  if (cfg.WEEKDAYS_ONLY) {
    var dow = parseInt(Utilities.formatDate(now, timeZone_(), 'u'), 10);
    if (dow === 6 || dow === 7) {
      Logger.log('주말이므로 퀴즈를 건너뜁니다.');
      return;
    }
  }
  if (!isQuizDue_(cfg)) {
    Logger.log('오늘은 퀴즈 날이 아닙니다. 학습 %s일 완료 / %s일마다 출제합니다.',
      cfg.LESSON_INDEX - cfg.QUIZ_LAST_INDEX, cfg.QUIZ_EVERY);
    return;
  }

  var result = deliverQuiz_(cfg, cfg.LESSON_INDEX, cfg.DAY_NUMBER, now, loadAsked_());
  props_().setProperty('QUIZ_LAST_INDEX', String(cfg.LESSON_INDEX));
  saveAsked_(loadAsked_().concat(result.ids));
  Logger.log('Day 1~%s 누적 복습 퀴즈를 발송했습니다 (신규 문항 %s개, 누적 출제 %s개).',
    result.toDay, result.ids.length, loadAsked_().length);
}

/** 테스트 발송: 지금 한 통 보낸다. 진도와 출제 기록은 바뀌지 않는다. */
function sendTestQuiz() {
  var cfg = getConfig_();
  if (!cfg.RECIPIENT_EMAIL) throw new Error('RECIPIENT_EMAIL이 설정되어 있지 않습니다.');
  var lessons = Math.max(1, cfg.LESSON_INDEX);
  var day = Math.max(lessons + 1, cfg.DAY_NUMBER);
  deliverQuiz_(cfg, lessons, day, new Date(), loadAsked_());
  Logger.log('테스트 퀴즈(Day 1~%s)를 %s 로 보냈습니다. 출제 기록은 변경하지 않았습니다.',
    day - 1, cfg.RECIPIENT_EMAIL);
}

/**
 * @param lessonCount 지금까지 학습한 회차 수 (출제 범위: 1회차 ~ 이 숫자)
 * @param dayNumber   오늘이 며칠째인지 (제목 표기용)
 * @param asked       이미 출제한 문항 id 목록
 */
function deliverQuiz_(cfg, lessonCount, dayNumber, now, asked) {
  var quiz = buildQuiz_(lessonCount, dayNumber, asked);
  var title = '복습 퀴즈 Day 1~' + quiz.toDay +
    ' (' + Utilities.formatDate(now, timeZone_(), 'yyyy-MM-dd') + ')';

  // 문서 생성은 실패해도 메일 발송 자체를 막지 않는다.
  var docInfo = null;
  if (cfg.QUIZ_DOC) {
    try {
      docInfo = createQuizDoc_(cfg, quiz, title);
    } catch (e) {
      Logger.log('퀴즈 문서를 만들지 못했습니다 (메일은 그대로 발송): %s', e.message);
    }
  }

  var subject = cfg.SUBJECT_PREFIX + ' 복습 퀴즈 — Day 1~' + quiz.toDay +
    ' 누적 (' + quiz.questions.length + '문항)';
  var options = { htmlBody: renderQuizHtml_(quiz, now, docInfo), name: cfg.SENDER_NAME };
  if (cfg.CC_EMAIL) options.cc = cfg.CC_EMAIL;
  if (docInfo && docInfo.docx) options.attachments = [docInfo.docx];
  GmailApp.sendEmail(cfg.RECIPIENT_EMAIL, subject, renderQuizText_(quiz, now, docInfo), options);
  return quiz;
}

/* ------------------------------------------------------------------ */
/* 문항 생성                                                            */
/* ------------------------------------------------------------------ */

function shuffle_(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

/**
 * 정답 텍스트를 문항 id로 바꾼다 (djb2 해시 → 36진수).
 * 대소문자·구두점 차이는 무시하므로 같은 정답이면 같은 id가 나온다.
 */
function answerId_(text) {
  var t = String(text).toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
  var h = 5381;
  for (var i = 0; i < t.length; i++) {
    h = (((h * 33) ^ t.charCodeAt(i)) >>> 0);
  }
  return h.toString(36);
}

/** 'MOQ (minimum order quantity)' → 'MOQ' 처럼 괄호 앞부분만 정답으로 쓴다. */
function quizTerm_(term) {
  return String(term).split('(')[0].trim();
}

/** 'comprehensible input' → 'c____________ i_____' */
function quizHint_(term) {
  return quizTerm_(term).split(/\s+/).map(function (w) {
    return w.charAt(0) + new Array(Math.max(w.length, 1)).join('_');
  }).join(' ');
}

/** 예문에서 정답 단어를 ______ 로 가린다. 예문에 단어가 없으면 null. */
function makeCloze_(example, term) {
  var answer = quizTerm_(term);
  var lower = String(example).toLowerCase();
  var pos = lower.indexOf(answer.toLowerCase());
  if (pos < 0) return null;
  return example.substring(0, pos) + '______' + example.substring(pos + answer.length);
}

/**
 * 1회차부터 lessonCount회차까지 배운 내용 전체에서 랜덤 문항을 만든다.
 * asked에 들어 있는 문항은 다시 내지 않는다.
 */
function buildQuiz_(lessonCount, dayNumber, asked) {
  var askedMap = {};
  var askedList = asked || [];
  for (var a = 0; a < askedList.length; a++) askedMap[askedList[a]] = true;

  var pools = collectPools_(lessonCount, askedMap);

  // 낼 수 있는 문항이 모자라면 기록을 비우고 처음부터 다시 낸다 (새 회독).
  var needed = QUIZ_PLAN.reduce(function (n, p) { return n + p.count; }, 0);
  var recycled = false;
  if (pools.words.length + pools.sentences.length < needed) {
    pools = collectPools_(lessonCount, {});
    recycled = true;
  }

  var questions = pickQuestions_(pools, needed);
  return {
    fromDay: 1,
    toDay: Math.max(1, (dayNumber || lessonCount + 1) - 1),
    lessonCount: lessonCount,
    recycled: recycled,
    questions: shuffle_(questions),
    ids: questions.map(function (q) { return q.id; })
  };
}

/** 학습 범위 전체에서 아직 출제하지 않은 단어·문장을 모은다. */
function collectPools_(lessonCount, askedMap) {
  var words = [];
  var sentences = [];
  var seen = {};
  for (var i = 0; i < lessonCount; i++) {
    var lesson = buildLesson_(i);
    for (var b = 0; b < lesson.blocks.length; b++) {
      var block = lesson.blocks[b];
      var entry = block.entry;
      // id는 "정답 텍스트"로 만든다. 그래야
      //   · 라이브러리가 한 바퀴 돌아 같은 내용이 다시 와도
      //   · 다른 카테고리에 같은 표현이 들어 있어도
      //   · 같은 단어를 단어 영작과 빈칸 채우기로 각각 내려 해도
      // 모두 같은 문항으로 보고 다시 내지 않는다.
      for (var w = 0; w < entry.words.length; w++) {
        var wid = answerId_(quizTerm_(entry.words[w].term));
        if (!askedMap[wid] && !seen[wid]) {
          seen[wid] = true;
          words.push({ id: wid, day: i + 1, label: block.label, word: entry.words[w] });
        }
      }
      for (var s = 0; s < entry.sentences.length; s++) {
        var sid = answerId_(entry.sentences[s].en);
        if (!askedMap[sid] && !seen[sid]) {
          seen[sid] = true;
          sentences.push({ id: sid, day: i + 1, label: block.label, focus: entry.focus, sentence: entry.sentences[s] });
        }
      }
    }
  }
  return { words: shuffle_(words), sentences: shuffle_(sentences) };
}

/** 유형별 계획대로 뽑되, 한 유형이 모자라면 남은 재료로 채운다. */
function pickQuestions_(pools, needed) {
  var used = {};
  var questions = [];

  function takeWord(item) {
    used[item.id] = true;
    return {
      id: item.id, type: 'word', day: item.day, label: item.label,
      prompt: item.word.ko, hint: item.word.def,
      blank: quizHint_(item.word.term), answer: quizTerm_(item.word.term)
    };
  }

  function takeCloze(item) {
    var text = makeCloze_(item.word.ex, item.word.term);
    if (!text) return null;
    used[item.id] = true;
    return {
      id: item.id, type: 'cloze', day: item.day, label: item.label,
      prompt: text, hint: item.word.ko + ' — ' + item.word.def,
      answer: quizTerm_(item.word.term)
    };
  }

  function takeSentence(item) {
    used[item.id] = true;
    return {
      id: item.id, type: 'sentence', day: item.day, label: item.label,
      prompt: item.sentence.ko, hint: item.sentence.use || item.focus,
      answer: item.sentence.en
    };
  }

  for (var p = 0; p < QUIZ_PLAN.length; p++) {
    var plan = QUIZ_PLAN[p];
    var picked = 0;
    if (plan.type === 'sentence') {
      for (var i = 0; i < pools.sentences.length && picked < plan.count; i++) {
        if (used[pools.sentences[i].id]) continue;
        questions.push(takeSentence(pools.sentences[i]));
        picked++;
      }
    } else {
      for (var j = 0; j < pools.words.length && picked < plan.count; j++) {
        var item = pools.words[j];
        if (used[item.id]) continue;
        if (plan.type === 'cloze') {
          if (!item.word.ex) continue;
          var q = takeCloze(item);
          if (!q) continue;
          questions.push(q);
        } else {
          questions.push(takeWord(item));
        }
        picked++;
      }
    }
  }

  // 모자란 만큼 남은 재료로 채운다.
  for (var k = 0; questions.length < needed && k < pools.words.length; k++) {
    if (!used[pools.words[k].id]) questions.push(takeWord(pools.words[k]));
  }
  for (var m = 0; questions.length < needed && m < pools.sentences.length; m++) {
    if (!used[pools.sentences[m].id]) questions.push(takeSentence(pools.sentences[m]));
  }
  return questions;
}

/* ------------------------------------------------------------------ */
/* 렌더링                                                              */
/* ------------------------------------------------------------------ */

function renderQuizHtml_(quiz, now, docInfo) {
  var h = [];
  h.push('<div style="margin:0;padding:0;background:#f4f5f7;">');
  h.push('<div style="max-width:640px;margin:0 auto;padding:24px 16px;font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',\'Apple SD Gothic Neo\',\'Malgun Gothic\',Roboto,sans-serif;color:#1f2937;">');

  h.push('<div style="background:#4c1d95;border-radius:14px;padding:22px 24px;color:#ffffff;">');
  h.push('<div style="font-size:12px;letter-spacing:.14em;color:#c4b5fd;">REVIEW QUIZ</div>');
  h.push('<div style="font-size:24px;font-weight:700;margin-top:6px;">Day 1~' + quiz.toDay + ' 누적 복습</div>');
  h.push('<div style="font-size:13px;color:#ddd6fe;margin-top:4px;">' + esc_(formatDate_(now)) +
    ' · ' + quiz.questions.length + '문항 · 지금까지 배운 ' + quiz.lessonCount + '회차 전체에서 출제 · 정답은 맨 아래</div>');
  if (quiz.recycled) {
    h.push('<div style="font-size:12px;color:#c4b5fd;margin-top:6px;">새 문항이 소진되어 이번 회차부터 다시 출제합니다.</div>');
  }
  h.push('</div>');

  // 푸는 방법
  h.push('<div style="background:#ffffff;border-radius:14px;padding:18px 20px;margin-top:16px;">');
  h.push('<div style="font-size:13px;font-weight:700;color:#4c1d95;">푸는 방법</div>');
  h.push('<div style="font-size:13px;color:#475569;line-height:1.8;margin-top:6px;">');
  for (var g = 0; g < QUIZ_HOWTO.length; g++) {
    h.push('<div>' + (g + 1) + '. ' + esc_(QUIZ_HOWTO[g]) + '</div>');
  }
  h.push('</div>');

  if (docInfo && (docInfo.url || docInfo.docx)) {
    h.push('<div style="margin-top:14px;padding-top:14px;border-top:1px solid #f1f5f9;">');
    if (docInfo.url && docInfo.shared) {
      h.push('<a href="' + docInfo.url + '" style="display:inline-block;background:#4c1d95;color:#ffffff;' +
        'text-decoration:none;font-size:14px;font-weight:600;padding:11px 18px;border-radius:8px;">' +
        '구글 문서에서 답 쓰기 →</a>');
    }
    h.push('<div style="font-size:12px;color:#94a3b8;margin-top:8px;line-height:1.6;">' +
      (docInfo.docx ? '첨부된 Word 파일에 적으셔도 됩니다. ' : '') +
      (docInfo.url && !docInfo.shared
        ? '구글 문서 공유가 조직 정책으로 제한되어 링크 대신 첨부 파일을 이용해 주세요.'
        : '문서는 내 드라이브의 “Daily Business English” 폴더에 쌓입니다.') +
      '</div>');
    h.push('</div>');
  }
  h.push('</div>');

  h.push('<div style="background:#ffffff;border-radius:14px;padding:20px;margin-top:16px;">');
  for (var i = 0; i < quiz.questions.length; i++) {
    h.push(renderQuestionHtml_(quiz.questions[i], i + 1));
  }
  h.push('</div>');

  h.push('<div style="text-align:center;color:#94a3b8;font-size:12px;margin:22px 0 10px;">↓ 정답 ↓</div>');

  h.push('<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:18px 20px;">');
  h.push('<div style="font-size:13px;font-weight:700;color:#475569;margin-bottom:10px;">정답</div>');
  for (var a = 0; a < quiz.questions.length; a++) {
    var q = quiz.questions[a];
    h.push('<div style="font-size:13.5px;color:#0f172a;line-height:1.7;margin-bottom:8px;">' +
      '<b style="color:#64748b;">' + (a + 1) + '.</b> ' + esc_(q.answer) +
      ' <span style="color:#94a3b8;font-size:12px;">(' + q.day + '회차)</span></div>');
  }
  h.push('</div>');

  h.push('<div style="text-align:center;color:#94a3b8;font-size:12px;margin-top:20px;line-height:1.7;">');
  h.push('틀린 문항은 해당 회차의 학습 메일을 다시 열어 문장째로 소리 내어 읽어 보세요.');
  h.push('</div>');

  h.push('</div></div>');
  return h.join('');
}

function renderQuestionHtml_(q, n) {
  var meta = QUIZ_TYPE_LABEL[q.type];
  var h = [];
  h.push('<div style="padding:14px 0;border-bottom:1px solid #f1f5f9;">');
  h.push('<div style="font-size:11px;color:' + meta.color + ';font-weight:700;letter-spacing:.06em;">' +
    n + '. ' + meta.badge + ' <span style="color:#cbd5e1;font-weight:500;">· ' + esc_(q.label) + ' · ' + q.day + '회차</span></div>');
  h.push('<div style="font-size:11.5px;color:#94a3b8;margin-top:3px;line-height:1.5;">' + esc_(QUIZ_TYPE_HOWTO[q.type]) + '</div>');
  h.push('<div style="font-size:15px;font-weight:600;color:#111827;line-height:1.6;margin-top:6px;">' + esc_(q.prompt) + '</div>');
  if (q.blank) {
    h.push('<div style="font-size:15px;color:#334155;letter-spacing:.08em;margin-top:6px;font-family:monospace;">' + esc_(q.blank) + '</div>');
  }
  if (q.hint) {
    h.push('<div style="font-size:12.5px;color:#94a3b8;margin-top:6px;line-height:1.6;">💡 ' + esc_(q.hint) + '</div>');
  }
  h.push('</div>');
  return h.join('');
}

function renderQuizText_(quiz, now, docInfo) {
  var t = [];
  t.push('복습 퀴즈 — Day 1~' + quiz.toDay + ' 누적 (' + quiz.lessonCount + '회차 전체에서 출제)');
  t.push(formatDate_(now));
  t.push('');
  t.push('[푸는 방법]');
  for (var g = 0; g < QUIZ_HOWTO.length; g++) t.push('  ' + (g + 1) + '. ' + QUIZ_HOWTO[g]);
  if (docInfo && docInfo.url && docInfo.shared) {
    t.push('  구글 문서: ' + docInfo.url);
  }
  t.push('');
  for (var i = 0; i < quiz.questions.length; i++) {
    var q = quiz.questions[i];
    t.push((i + 1) + '. [' + QUIZ_TYPE_LABEL[q.type].badge + '] ' + q.prompt);
    t.push('   (' + QUIZ_TYPE_HOWTO[q.type] + ')');
    if (q.blank) t.push('   ' + q.blank);
    if (q.hint) t.push('   힌트: ' + q.hint);
  }
  t.push('');
  t.push('--- 정답 ---');
  for (var a = 0; a < quiz.questions.length; a++) {
    t.push((a + 1) + '. ' + quiz.questions[a].answer + ' (' + quiz.questions[a].day + '회차)');
  }
  return t.join('\n');
}

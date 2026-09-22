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

/** 트리거가 매일 저녁 호출한다. 3일치가 쌓였을 때만 실제로 발송한다. */
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

  var done = cfg.LESSON_INDEX;          // 지금까지 발송한 학습 메일 수
  var last = cfg.QUIZ_LAST_INDEX;       // 마지막으로 퀴즈를 낸 지점

  // 3일치를 배우고 "그다음 날"에 보낸다. 즉 Day 4에 Day 1~3 퀴즈가 나간다.
  if (done - last <= cfg.QUIZ_EVERY) {
    Logger.log('아직 퀴즈 차례가 아닙니다. 학습 %s일 완료 / %s일치가 쌓인 다음 날 발송합니다.',
      done - last, cfg.QUIZ_EVERY);
    return;
  }

  deliverQuiz_(cfg, last, cfg.QUIZ_EVERY, now);
  props_().setProperty('QUIZ_LAST_INDEX', String(last + cfg.QUIZ_EVERY));
  Logger.log('Day %s~%s 복습 퀴즈를 발송했습니다.', last + 1, last + cfg.QUIZ_EVERY);
}

/** 테스트 발송: 최근 3일치로 퀴즈를 지금 보낸다 (진도·퀴즈 기록은 바뀌지 않음). */
function sendTestQuiz() {
  var cfg = getConfig_();
  if (!cfg.RECIPIENT_EMAIL) throw new Error('RECIPIENT_EMAIL이 설정되어 있지 않습니다.');
  var days = cfg.QUIZ_EVERY;
  var from = Math.max(0, cfg.LESSON_INDEX - days);
  deliverQuiz_(cfg, from, days, new Date());
  Logger.log('테스트 퀴즈(Day %s~%s)를 %s 로 보냈습니다.', from + 1, from + days, cfg.RECIPIENT_EMAIL);
}

function deliverQuiz_(cfg, fromIndex, days, now) {
  var quiz = buildQuiz_(fromIndex, days);
  var title = '복습 퀴즈 Day ' + quiz.fromDay + '~' + quiz.toDay +
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

  var subject = cfg.SUBJECT_PREFIX + ' 복습 퀴즈 — Day ' + quiz.fromDay + '~' + quiz.toDay +
    ' (' + quiz.questions.length + '문항)';
  var options = { htmlBody: renderQuizHtml_(quiz, now, docInfo), name: cfg.SENDER_NAME };
  if (cfg.CC_EMAIL) options.cc = cfg.CC_EMAIL;
  if (docInfo && docInfo.docx) options.attachments = [docInfo.docx];
  GmailApp.sendEmail(cfg.RECIPIENT_EMAIL, subject, renderQuizText_(quiz, now, docInfo), options);
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

/** fromIndex(0부터)부터 days일치 학습 내용에서 랜덤 문항을 만든다. */
function buildQuiz_(fromIndex, days) {
  var wordPool = [];
  var sentencePool = [];
  var dayNumbers = [];

  for (var d = 0; d < days; d++) {
    var lesson = buildLesson_(fromIndex + d);
    dayNumbers.push(lesson.day);
    for (var b = 0; b < lesson.blocks.length; b++) {
      var block = lesson.blocks[b];
      var entry = block.entry;
      for (var w = 0; w < entry.words.length; w++) {
        wordPool.push({ day: lesson.day, label: block.label, word: entry.words[w] });
      }
      for (var s = 0; s < entry.sentences.length; s++) {
        sentencePool.push({ day: lesson.day, label: block.label, focus: entry.focus, sentence: entry.sentences[s] });
      }
    }
  }

  var words = shuffle_(wordPool);
  var sentences = shuffle_(sentencePool);
  var used = {};
  var questions = [];

  for (var p = 0; p < QUIZ_PLAN.length; p++) {
    var plan = QUIZ_PLAN[p];
    var picked = 0;

    if (plan.type === 'word') {
      for (var i = 0; i < words.length && picked < plan.count; i++) {
        if (used[words[i].word.term]) continue;
        used[words[i].word.term] = true;
        picked++;
        questions.push({
          type: 'word',
          day: words[i].day,
          label: words[i].label,
          prompt: words[i].word.ko,
          hint: words[i].word.def,
          blank: quizHint_(words[i].word.term),
          answer: quizTerm_(words[i].word.term)
        });
      }
    } else if (plan.type === 'cloze') {
      for (var j = 0; j < words.length && picked < plan.count; j++) {
        var cand = words[j];
        if (used[cand.word.term] || !cand.word.ex) continue;
        var text = makeCloze_(cand.word.ex, cand.word.term);
        if (!text) continue;
        used[cand.word.term] = true;
        picked++;
        questions.push({
          type: 'cloze',
          day: cand.day,
          label: cand.label,
          prompt: text,
          hint: cand.word.ko + ' — ' + cand.word.def,
          answer: quizTerm_(cand.word.term)
        });
      }
    } else {
      for (var k = 0; k < sentences.length && picked < plan.count; k++) {
        var item = sentences[k];
        picked++;
        questions.push({
          type: 'sentence',
          day: item.day,
          label: item.label,
          prompt: item.sentence.ko,
          hint: item.sentence.use || item.focus,
          answer: item.sentence.en
        });
      }
    }
  }

  return {
    fromDay: Math.min.apply(null, dayNumbers),
    toDay: Math.max.apply(null, dayNumbers),
    questions: shuffle_(questions)
  };
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
  h.push('<div style="font-size:24px;font-weight:700;margin-top:6px;">Day ' + quiz.fromDay + '~' + quiz.toDay + ' 복습</div>');
  h.push('<div style="font-size:13px;color:#ddd6fe;margin-top:4px;">' + esc_(formatDate_(now)) +
    ' · ' + quiz.questions.length + '문항 · 정답은 맨 아래</div>');
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
      ' <span style="color:#94a3b8;font-size:12px;">(Day ' + q.day + ')</span></div>');
  }
  h.push('</div>');

  h.push('<div style="text-align:center;color:#94a3b8;font-size:12px;margin-top:20px;line-height:1.7;">');
  h.push('틀린 문항은 해당 Day 메일을 다시 열어 문장째로 소리 내어 읽어 보세요.');
  h.push('</div>');

  h.push('</div></div>');
  return h.join('');
}

function renderQuestionHtml_(q, n) {
  var meta = QUIZ_TYPE_LABEL[q.type];
  var h = [];
  h.push('<div style="padding:14px 0;border-bottom:1px solid #f1f5f9;">');
  h.push('<div style="font-size:11px;color:' + meta.color + ';font-weight:700;letter-spacing:.06em;">' +
    n + '. ' + meta.badge + ' <span style="color:#cbd5e1;font-weight:500;">· ' + esc_(q.label) + ' · Day ' + q.day + '</span></div>');
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
  t.push('복습 퀴즈 — Day ' + quiz.fromDay + '~' + quiz.toDay);
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
    t.push((a + 1) + '. ' + quiz.questions[a].answer + ' (Day ' + quiz.questions[a].day + ')');
  }
  return t.join('\n');
}

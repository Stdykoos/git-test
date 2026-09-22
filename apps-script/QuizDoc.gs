/**
 * 복습 퀴즈 — 구글 문서 생성 & Word 첨부
 * ------------------------------------------------------------------
 * 메일 본문에는 답을 쓸 수 없으므로, 같은 퀴즈를 답 칸이 있는
 * 구글 문서로 만들어 링크를 보내고, 같은 내용을 .docx로 첨부한다.
 *
 * 문서의 "구조"를 먼저 배열(spec)로 만들고, 그 배열을 DocumentApp이
 * 그려 내는 구조다. 이렇게 하면 구글 API 없이도 문서 내용을 검증할 수 있다.
 *
 * spec 항목
 *   title      문서 제목        h2  중간 제목
 *   p          본문 문단         note  회색 보조 설명
 *   q          문항 제목 줄      mono  밑줄 힌트(고정폭)
 *   answerbox  답 쓰는 빈 칸     pagebreak  페이지 나누기
 */

/** 퀴즈 → 문서 구조 배열 */
function buildQuizDocSpec_(quiz, title) {
  var spec = [];
  spec.push({ kind: 'title', text: title });
  spec.push({ kind: 'note', text: '이 문서에 바로 답을 적을 수 있습니다. 자동 저장됩니다.' });

  spec.push({ kind: 'h2', text: '푸는 방법' });
  for (var i = 0; i < QUIZ_HOWTO.length; i++) {
    spec.push({ kind: 'p', text: (i + 1) + '. ' + QUIZ_HOWTO[i] });
  }
  spec.push({ kind: 'note', text: '유형별 안내 — ' +
    '단어 영작: ' + QUIZ_TYPE_HOWTO.word + ' / ' +
    '빈칸 채우기: ' + QUIZ_TYPE_HOWTO.cloze + ' / ' +
    '문장 영작: ' + QUIZ_TYPE_HOWTO.sentence });

  spec.push({ kind: 'h2', text: '문제 (' + quiz.questions.length + '문항)' });
  for (var n = 0; n < quiz.questions.length; n++) {
    var q = quiz.questions[n];
    spec.push({ kind: 'q', text: (n + 1) + '. [' + QUIZ_TYPE_LABEL[q.type].badge + '] ' +
      q.label + ' · Day ' + q.day });
    spec.push({ kind: 'p', text: q.prompt });
    if (q.blank) spec.push({ kind: 'mono', text: q.blank });
    if (q.hint) spec.push({ kind: 'note', text: '힌트: ' + q.hint });
    spec.push({ kind: 'answerbox' });
  }

  spec.push({ kind: 'p', text: '맞은 개수:        / ' + quiz.questions.length });
  spec.push({ kind: 'pagebreak' });

  spec.push({ kind: 'h2', text: '정답' });
  spec.push({ kind: 'note', text: '틀린 문항은 해당 Day 학습 메일을 열어 문장째로 다시 읽어 보세요.' });
  for (var a = 0; a < quiz.questions.length; a++) {
    spec.push({ kind: 'p', text: (a + 1) + '. ' + quiz.questions[a].answer +
      '  (Day ' + quiz.questions[a].day + ')' });
  }
  return spec;
}

/** 구조 배열을 실제 구글 문서에 그린다. */
function writeQuizDoc_(body, spec) {
  body.clear();
  for (var i = 0; i < spec.length; i++) {
    var item = spec[i];
    if (item.kind === 'title') {
      body.appendParagraph(item.text).setHeading(DocumentApp.ParagraphHeading.TITLE);
    } else if (item.kind === 'h2') {
      body.appendParagraph(item.text).setHeading(DocumentApp.ParagraphHeading.HEADING2);
    } else if (item.kind === 'q') {
      body.appendParagraph(item.text)
        .setHeading(DocumentApp.ParagraphHeading.NORMAL)
        .setBold(true).setFontSize(11).setForegroundColor('#334155');
    } else if (item.kind === 'note') {
      body.appendParagraph(item.text).setFontSize(9).setForegroundColor('#64748b').setBold(false);
    } else if (item.kind === 'mono') {
      body.appendParagraph(item.text).setFontFamily('Courier New').setFontSize(11).setBold(false);
    } else if (item.kind === 'answerbox') {
      var table = body.appendTable([['']]);
      table.setBorderColor('#cbd5e1');
      var cell = table.getCell(0, 0);
      cell.setPaddingTop(8).setPaddingBottom(8);
      cell.getChild(0).asParagraph().setFontSize(11).setForegroundColor('#111827').setBold(false);
    } else if (item.kind === 'pagebreak') {
      body.appendPageBreak();
    } else {
      body.appendParagraph(item.text).setFontSize(11).setBold(false).setForegroundColor('#111827');
    }
  }
}

/** 문서를 만들고, 수신자에게 편집 권한을 주고, .docx로도 내보낸다. */
function createQuizDoc_(cfg, quiz, title) {
  var doc = DocumentApp.create(title);
  writeQuizDoc_(doc.getBody(), buildQuizDocSpec_(quiz, title));
  doc.saveAndClose();

  var file = DriveApp.getFileById(doc.getId());
  try {
    var folder = quizFolder_();
    if (folder) file.moveTo(folder);
  } catch (e) {
    Logger.log('폴더 이동 실패(문서는 정상): %s', e.message);
  }

  var shared = shareQuizDoc_(file, cfg);
  var docx = null;
  if (cfg.QUIZ_ATTACH_DOCX) {
    try {
      docx = exportDocx_(doc.getId(), title);
    } catch (e) {
      Logger.log('Word 파일 변환 실패(링크는 정상): %s', e.message);
    }
  }
  return { url: doc.getUrl(), docx: docx, shared: shared };
}

/** 퀴즈 문서를 모아 둘 드라이브 폴더 */
function quizFolder_() {
  var name = 'Daily Business English';
  var found = DriveApp.getFoldersByName(name);
  return found.hasNext() ? found.next() : DriveApp.createFolder(name);
}

/**
 * 회사 메일 계정은 개인 Gmail과 다른 계정이므로, 편집자로 추가해야 문서가 열린다.
 * 조직 정책으로 외부 공유가 막혀 있으면 첨부된 Word 파일을 쓰면 된다.
 */
function shareQuizDoc_(file, cfg) {
  var targets = [cfg.RECIPIENT_EMAIL];
  if (cfg.CC_EMAIL) {
    targets = targets.concat(String(cfg.CC_EMAIL).split(',').map(function (x) { return x.trim(); }));
  }
  var ok = false;
  for (var i = 0; i < targets.length; i++) {
    if (!targets[i]) continue;
    try {
      file.addEditor(targets[i]);
      ok = true;
    } catch (e) {
      Logger.log('문서 공유 실패 (%s): %s', targets[i], e.message);
    }
  }
  return ok;
}

/** 구글 문서를 .docx 파일로 변환한다. */
function exportDocx_(fileId, title) {
  var url = 'https://www.googleapis.com/drive/v3/files/' + fileId +
    '/export?mimeType=application%2Fvnd.openxmlformats-officedocument.wordprocessingml.document';
  var res = UrlFetchApp.fetch(url, {
    headers: { Authorization: 'Bearer ' + ScriptApp.getOAuthToken() },
    muteHttpExceptions: true
  });
  if (res.getResponseCode() !== 200) {
    throw new Error('Drive export ' + res.getResponseCode());
  }
  return res.getBlob().setName(title + '.docx');
}

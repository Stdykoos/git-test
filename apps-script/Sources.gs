/**
 * 출처(참고문헌) 데이터
 * ------------------------------------------------------------------
 * 각 학습 주제(focus)에 대응하는 대표 문헌을 담는다.
 * 문장 자체는 이 시스템에서 새로 작성한 것이고, 여기 적힌 문헌은
 * 그 개념의 출처다. 즉 "인용문"이 아니라 "개념의 근거"다.
 *
 * 링크는 저자·서명으로 Google Scholar 검색 주소를 만들어 쓴다.
 * 특정 페이지 주소를 박아 두면 시간이 지나 깨지지만, 검색 링크는
 * 원문·인용 횟수·다른 판본까지 함께 보여 주고 사라지지 않는다.
 *
 * 출처가 없는 주제(실무 관행에 가까운 협상·미팅 표현)는 비워 둔다.
 * 확인되지 않은 문헌을 지어내지 않는 것이 이 파일의 원칙이다.
 */

var SOURCES = {
  /* ---------------- 영어교육이론 ---------------- */
  'Comprehensible Input': { author: 'Stephen Krashen', work: 'The Input Hypothesis: Issues and Implications', year: 1985, note: '입력이 현재 수준보다 약간 위(i+1)일 때 습득이 일어난다는 가설' },
  'Affective Filter': { author: 'Stephen Krashen', work: 'Principles and Practice in Second Language Acquisition', year: 1982, note: '정의적 여과기 개념은 Dulay & Burt(1977)에서 나와 Krashen이 체계화' },
  'Scaffolding & ZPD': { author: 'Wood, Bruner & Ross', work: 'The Role of Tutoring in Problem Solving (Journal of Child Psychology and Psychiatry)', year: 1976, note: '스캐폴딩의 최초 정의. 근접발달영역(ZPD)은 Vygotsky, Mind in Society(1978)' },
  'Communicative Language Teaching': { author: 'Canale & Swain', work: 'Theoretical Bases of Communicative Approaches to Second Language Teaching and Testing (Applied Linguistics)', year: 1980, note: '의사소통 능력 개념의 출발은 Hymes(1972)' },
  'Task-Based Learning': { author: 'Jane Willis', work: 'A Framework for Task-Based Learning', year: 1996, note: 'Rod Ellis, Task-based Language Learning and Teaching(2003)도 표준 참고서' },
  'Extensive Reading': { author: 'Richard Day & Julian Bamford', work: 'Extensive Reading in the Second Language Classroom', year: 1998, note: '다독 지도의 10원칙을 제시한 표준 문헌' },
  'Graded Readers & Leveling': { author: 'Waring & Takaki', work: 'At What Rate Do Learners Learn and Retain New Vocabulary from Reading a Graded Reader? (Reading in a Foreign Language)', year: 2003, note: '단계별 독본의 어휘 습득 효과를 측정한 실증 연구' },
  'Phonemic Awareness': { author: 'National Reading Panel', work: 'Teaching Children to Read', year: 2000, note: '음소 인식·파닉스 교육 효과에 대한 메타분석' },
  'Phonics & Decoding': { author: 'Linnea Ehri', work: 'Learning to Read Words: Theory, Findings, and Issues (Scientific Studies of Reading)', year: 2005, note: '단어 읽기 발달 단계 이론' },
  'Fluency & Sight Words': { author: 'LaBerge & Samuels', work: 'Toward a Theory of Automatic Information Processing in Reading (Cognitive Psychology)', year: 1974, note: '자동화 이론. 해독이 자동화되어야 이해에 주의를 쓸 수 있다' },
  'Reading Comprehension & Schema': { author: 'Anderson & Pearson', work: 'A Schema-Theoretic View of Basic Processes in Reading Comprehension', year: 1984, note: '배경지식(스키마)이 독해를 좌우한다는 이론' },
  'Formative vs Summative Assessment': { author: 'Black & Wiliam', work: 'Inside the Black Box: Raising Standards Through Classroom Assessment', year: 1998, note: '형성평가의 학습 효과를 입증한 대표 연구' },
  'Rubrics & Descriptors': { author: 'Heidi Goodrich Andrade', work: 'Using Rubrics to Promote Thinking and Learning (Educational Leadership)', year: 2000, note: '루브릭을 채점표가 아닌 학습 도구로 쓰는 법' },
  'CEFR Alignment': { author: 'Council of Europe', work: 'Common European Framework of Reference for Languages (CEFR)', year: 2001, note: '2020년 Companion Volume에서 매개 활동·온라인 상호작용 기술어가 추가됨' },
  'Backward Design': { author: 'Wiggins & McTighe', work: 'Understanding by Design', year: 1998, note: '목표 → 평가 → 활동 순으로 설계하는 백워드 설계' },
  'Needs Analysis': { author: 'Hutchinson & Waters', work: 'English for Specific Purposes: A Learning-Centred Approach', year: 1987, note: 'ESP 요구 분석의 표준 틀' },
  'Spaced Repetition & Recycling': { author: 'Hermann Ebbinghaus', work: 'Memory: A Contribution to Experimental Psychology', year: 1885, note: '망각 곡선의 원전. 어휘의 7~12회 노출 기준은 Nation(2001)' },
  'Output Hypothesis': { author: 'Merrill Swain', work: 'Communicative Competence: Some Roles of Comprehensible Input and Comprehensible Output in Its Development', year: 1985, note: '입력만으로는 부족하며 산출이 필요하다는 가설' },
  'Error Correction': { author: 'Lyster & Ranta', work: 'Corrective Feedback and Learner Uptake (Studies in Second Language Acquisition)', year: 1997, note: '리캐스트 등 6가지 피드백 유형과 학습자 반응을 분류' },
  'Learner Autonomy': { author: 'Henri Holec', work: 'Autonomy and Foreign Language Learning', year: 1981, note: '학습자 자율성 개념을 정의한 원전' },
  'Differentiated Instruction': { author: 'Carol Ann Tomlinson', work: 'The Differentiated Classroom: Responding to the Needs of All Learners', year: 1999, note: '내용·과정·결과물을 학습자에 맞게 조정하는 틀' },
  'Blended Learning': { author: 'Garrison & Vaughan', work: 'Blended Learning in Higher Education', year: 2008, note: '온·오프라인의 역할 분담 설계 원칙' },
  'Flipped Classroom': { author: 'Bergmann & Sams', work: 'Flip Your Classroom: Reach Every Student in Every Class Every Day', year: 2012, note: '플립러닝을 대중화한 실천서' },
  'CLIL': { author: 'Coyle, Hood & Marsh', work: 'CLIL: Content and Language Integrated Learning', year: 2010, note: '내용·의사소통·인지·문화의 4C 틀' },
  'L1 Use & Translanguaging': { author: 'Ofelia García', work: 'Bilingual Education in the 21st Century: A Global Perspective', year: 2009, note: 'translanguaging 용어 자체는 Cen Williams(1994)의 웨일스어 연구에서 유래' },
  'BICS vs CALP': { author: 'Jim Cummins', work: 'Cognitive/Academic Language Proficiency, Linguistic Interdependence (Working Papers on Bilingualism)', year: 1979, note: '일상 회화 능력과 학문적 언어 능력의 구분' },
  'Interlanguage & Fossilization': { author: 'Larry Selinker', work: 'Interlanguage (IRAL)', year: 1972, note: '중간언어와 화석화 개념의 원전' },
  'Lexical Approach & Collocation': { author: 'Michael Lewis', work: 'The Lexical Approach', year: 1993, note: '언어는 문법화된 어휘이지 어휘화된 문법이 아니라는 관점' },
  'Receptive vs Productive Vocabulary': { author: 'I.S.P. Nation', work: 'Learning Vocabulary in Another Language', year: 2001, note: '어휘 지식의 수용·표현 구분과 학습 부담 분석' },
  'Word Frequency': { author: 'Michael West', work: 'A General Service List of English Words', year: 1953, note: '고빈도 어휘 목록의 원전. 현대판은 Nation의 BNC/COCA 목록' },
  'Process Writing': { author: 'Flower & Hayes', work: 'A Cognitive Process Theory of Writing (College Composition and Communication)', year: 1981, note: '쓰기를 선형 절차가 아닌 순환적 인지 과정으로 본 연구' },
  'Accuracy vs Fluency': { author: 'Peter Skehan', work: 'A Cognitive Approach to Language Learning', year: 1998, note: '정확성·유창성·복잡성 사이의 주의 자원 경쟁. 구분의 출발은 Brumfit(1984)' },
  'Young Learners & TPR': { author: 'James Asher', work: 'The Total Physical Response Approach to Second Language Learning (Modern Language Journal)', year: 1969, note: '신체 반응을 통한 초기 언어 학습' },
  'Teacher Talking Time': { author: 'Steve Walsh', work: 'Investigating Classroom Discourse', year: 2006, note: '교사 발화가 학습 기회를 열기도 닫기도 한다는 분석' },
  'Washback & Test Design': { author: 'Alderson & Wall', work: 'Does Washback Exist? (Applied Linguistics)', year: 1993, note: '시험이 수업에 미치는 영향을 검증한 대표 논문' },
  'Placement Testing': { author: 'Bachman & Palmer', work: 'Language Testing in Practice', year: 1996, note: '평가의 유용성(타당도·신뢰도·실용성) 틀' },
  'Motivation': { author: 'Zoltán Dörnyei', work: 'The L2 Motivational Self System (in Motivation, Language Identity and the L2 Self)', year: 2009, note: '이상적 L2 자아·의무적 L2 자아·학습 경험의 3요소' },
  'Multimodal Input': { author: 'Richard Mayer', work: 'Multimedia Learning', year: 2009, note: '이중 경로 처리와 인지 부하. 인지부하 이론은 Sweller(1988)' },
  'Teacher Training & Observation': { author: 'Joyce & Showers', work: 'Student Achievement Through Staff Development', year: 2002, note: '연수만으로는 현장 적용률이 낮고, 코칭이 붙어야 크게 오른다는 연구' },
  'Learning Analytics': { author: 'George Siemens', work: 'Learning Analytics: The Emergence of a Discipline (American Behavioral Scientist)', year: 2013, note: '학습 데이터를 교육적 의사결정으로 연결하는 분야의 정의' },

  /* ---------------- 비즈니스 협상 ---------------- */
  'BATNA & Walk-away': { author: 'Fisher & Ury', work: 'Getting to Yes: Negotiating Agreement Without Giving In', year: 1981, note: 'BATNA 개념의 원전. 하버드 협상 프로젝트' },
  'Making a Concession': { author: 'Fisher & Ury', work: 'Getting to Yes: Negotiating Agreement Without Giving In', year: 1981, note: '입장이 아니라 이해관계를 놓고 협상하라는 원칙' },
  'Breaking a Deadlock': { author: 'Walton & McKersie', work: 'A Behavioral Theory of Labor Negotiations', year: 1965, note: '분배적 협상과 통합적 협상의 구분' },
  'Holding Firm': { author: 'Howard Raiffa', work: 'The Art and Science of Negotiation', year: 1982, note: '유보가격(reservation price)과 협상 여지(ZOPA) 개념' },
  'Shipping Terms': { author: 'International Chamber of Commerce', work: 'Incoterms 2020', year: 2020, note: 'FOB·CIF 등 무역 조건의 공식 규정' },
  'IP & Piracy': { author: 'WIPO', work: 'Berne Convention for the Protection of Literary and Artistic Works', year: 1886, note: '국제 저작권 보호의 기본 협약. 현재 180개국 이상 가입' },

  /* ---------------- 미팅 ---------------- */
  'Cross-cultural Etiquette': { author: 'Erin Meyer', work: 'The Culture Map: Breaking Through the Invisible Boundaries of Global Business', year: 2014, note: '의사소통·이견 표명·의사결정 방식의 문화별 차이 8축' },
  'Building Consensus': { author: 'Erin Meyer', work: 'The Culture Map: Breaking Through the Invisible Boundaries of Global Business', year: 2014, note: '합의형(consensual)과 하향식(top-down) 의사결정 문화의 차이' }
};

/** 저자·서명으로 Google Scholar 검색 주소를 만든다. 깨질 일이 없는 링크. */
function sourceUrl_(src) {
  var q = src.author + ' ' + String(src.work).split('(')[0].trim();
  return 'https://scholar.google.com/scholar?q=' + encodeURIComponent(q);
}

/** 'Fisher & Ury (1981)' 형태의 짧은 표기 */
function sourceLabel_(src) {
  return src.author + ' (' + src.year + ')';
}

function sourceFor_(focus) {
  return SOURCES[focus] || null;
}

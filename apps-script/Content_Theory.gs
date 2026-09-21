/**
 * 카테고리 1 — 영어교육이론 (ELT Theory)
 * 교사 트레이닝, 총판 대상 제품 설명, 교재 개발 회의에서 바로 쓰는 표현 중심.
 */
var LESSONS_THEORY = [
  {
    focus: 'Comprehensible Input',
    sentences: [
      { en: 'Learners acquire language most efficiently when the input is just one step beyond their current level.', ko: '학습자는 입력이 현재 수준보다 딱 한 단계 위일 때 가장 효율적으로 언어를 습득합니다.', use: '교사 트레이닝에서 레벨 선정 원리를 설명할 때' },
      { en: 'Our reading levels are designed to keep students in that "i+1" zone rather than overwhelming them.', ko: '저희 리딩 레벨은 학생을 압도하지 않고 바로 그 "i+1" 구간에 머물게 하도록 설계되었습니다.', use: '총판에 레벨링 근거를 설명할 때' }
    ],
    words: [
      { term: 'comprehensible input', pos: 'n.', ko: '이해 가능한 입력', def: 'language slightly above the learner\'s level that can still be understood', ex: 'Graded readers are a reliable source of comprehensible input.' },
      { term: 'acquisition', pos: 'n.', ko: '습득', def: 'picking up language naturally through exposure, as opposed to conscious study', ex: 'Acquisition happens through meaningful exposure, not memorization drills.' }
    ]
  },
  {
    focus: 'Affective Filter',
    sentences: [
      { en: 'When anxiety is high, the affective filter goes up and very little input gets through.', ko: '불안이 높으면 정의적 여과기가 올라가 입력이 거의 통과하지 못합니다.', use: '교실 분위기 조성의 중요성을 설명할 때' },
      { en: 'A low-stress classroom is not a soft option; it is a condition for learning.', ko: '스트레스가 낮은 교실은 무른 선택이 아니라 학습의 전제 조건입니다.', use: '교사 워크숍 도입부 메시지로' }
    ],
    words: [
      { term: 'affective filter', pos: 'n.', ko: '정의적 여과기', def: 'the emotional barrier that blocks input when learners feel anxious or unmotivated', ex: 'Pair work lowers the affective filter for shy students.' },
      { term: 'risk-taking', pos: 'n.', ko: '(발화) 모험 시도', def: 'the willingness to try language even at the risk of making mistakes', ex: 'Reward risk-taking, not just correct answers.' }
    ]
  },
  {
    focus: 'Scaffolding & ZPD',
    sentences: [
      { en: 'Scaffolding means giving just enough support for learners to do what they cannot yet do alone.', ko: '스캐폴딩이란 학습자가 아직 혼자 못 하는 것을 해내도록 딱 필요한 만큼만 지원하는 것입니다.', use: '트레이닝에서 교사 역할을 정의할 때' },
      { en: 'The support should be gradually removed as learners gain confidence.', ko: '학습자가 자신감을 얻으면 지원은 점차 걷어 내야 합니다.', use: '단계별 활동 설계를 설명할 때' }
    ],
    words: [
      { term: 'scaffolding', pos: 'n.', ko: '비계 설정, 단계적 지원', def: 'temporary teacher support that is removed as the learner becomes independent', ex: 'Sentence frames are a simple form of scaffolding for writing.' },
      { term: 'gradual release', pos: 'n.', ko: '점진적 책임 이양', def: 'the I do – we do – you do sequence of handing responsibility to learners', ex: 'Each unit follows a gradual release model.' }
    ]
  },
  {
    focus: 'Communicative Language Teaching',
    sentences: [
      { en: 'CLT puts meaningful communication, not grammar drills, at the center of the lesson.', ko: 'CLT는 문법 반복 연습이 아니라 유의미한 의사소통을 수업의 중심에 둡니다.', use: '교수법 철학을 소개할 때' },
      { en: 'Grammar is still taught, but it is taught in service of communication.', ko: '문법도 가르치지만, 어디까지나 의사소통을 위한 수단으로 가르칩니다.', use: '문법 중시 시장의 우려를 해소할 때' }
    ],
    words: [
      { term: 'communicative competence', pos: 'n.', ko: '의사소통 능력', def: 'the ability to use language appropriately in real situations, not just correctly', ex: 'Tests should measure communicative competence, not only accuracy.' },
      { term: 'information gap', pos: 'n.', ko: '정보 차 활동', def: 'an activity where each learner holds information the other needs', ex: 'Information gap tasks force students to actually speak.' }
    ]
  },
  {
    focus: 'Task-Based Learning',
    sentences: [
      { en: 'In a task-based lesson, students complete a real outcome and the language emerges from the task.', ko: '과제 중심 수업에서는 학생이 실제 결과물을 완성하고, 언어는 그 과제에서 자연스럽게 나옵니다.', use: '프로젝트형 단원을 설명할 때' },
      { en: 'The teacher provides feedback on form after the task, not in the middle of it.', ko: '교사는 과제 도중이 아니라 과제 이후에 형태에 대한 피드백을 줍니다.', use: '오류 수정 타이밍을 훈련할 때' }
    ],
    words: [
      { term: 'task-based', pos: 'adj.', ko: '과제 중심의', def: 'organized around completing real-world tasks rather than presenting grammar points', ex: 'The speaking strand is task-based from level 3 onward.' },
      { term: 'outcome', pos: 'n.', ko: '결과물, 산출물', def: 'the concrete product learners produce by the end of an activity', ex: 'Every unit ends with a visible outcome such as a poster or a short talk.' }
    ]
  },
  {
    focus: 'Extensive Reading',
    sentences: [
      { en: 'Extensive reading works when students read a large volume of easy, self-selected books.', ko: '다독은 학생이 쉬운 책을 스스로 골라 많은 양을 읽을 때 효과가 있습니다.', use: 'Reading Ocean 등 전자도서관을 소개할 때' },
      { en: 'If students need a dictionary on every page, the book is too hard for extensive reading.', ko: '페이지마다 사전이 필요하다면 그 책은 다독용으로는 너무 어렵습니다.', use: '교사에게 책 선정 기준을 알려줄 때' }
    ],
    words: [
      { term: 'extensive reading', pos: 'n.', ko: '다독', def: 'reading large amounts of easy material for pleasure and fluency', ex: 'Our library supports extensive reading with over 1,000 leveled titles.' },
      { term: 'reading mileage', pos: 'n.', ko: '독서량', def: 'the accumulated amount of text a learner has read', ex: 'The dashboard tracks each student\'s reading mileage weekly.' }
    ]
  },
  {
    focus: 'Graded Readers & Leveling',
    sentences: [
      { en: 'Graded readers control vocabulary and structures so that reading stays fluent and enjoyable.', ko: '단계별 독본은 어휘와 구문을 통제해 읽기가 유창하고 즐겁게 유지되도록 합니다.', use: '제품 구조를 설명할 때' },
      { en: 'We can map our levels to Lexile bands so schools can compare them with local standards.', ko: '저희 레벨을 Lexile 지수에 대응시켜 학교가 현지 기준과 비교할 수 있게 해 드릴 수 있습니다.', use: '입찰·채택 심사 대응 시' }
    ],
    words: [
      { term: 'graded reader', pos: 'n.', ko: '단계별 독본', def: 'a book written within a controlled vocabulary and grammar range', ex: 'Each graded reader lists its headword count on the back cover.' },
      { term: 'readability', pos: 'n.', ko: '가독성, 난이도 지수', def: 'how easy a text is to read, often expressed as a numeric level', ex: 'Readability is measured by sentence length and word frequency.' }
    ]
  },
  {
    focus: 'Phonemic Awareness',
    sentences: [
      { en: 'Phonemic awareness is an oral skill; students can practice it with their eyes closed.', ko: '음소 인식은 구어 기술이어서 눈을 감고도 연습할 수 있습니다.', use: '파닉스와의 차이를 구분해 줄 때' },
      { en: 'Children who can blend and segment sounds learn to decode much faster.', ko: '소리를 합치고 분리할 수 있는 아이는 해독을 훨씬 빨리 익힙니다.', use: '유아 교재의 근거를 설명할 때' }
    ],
    words: [
      { term: 'phonemic awareness', pos: 'n.', ko: '음소 인식', def: 'the ability to hear and manipulate individual sounds in spoken words', ex: 'Level 1 opens with ten phonemic awareness games.' },
      { term: 'blend', pos: 'v.', ko: '(소리를) 합치다', def: 'to push separate sounds together into a word', ex: 'Ask students to blend /k/ /a/ /t/ into "cat".' }
    ]
  },
  {
    focus: 'Phonics & Decoding',
    sentences: [
      { en: 'Systematic phonics teaches letter-sound relationships in a planned sequence, not at random.', ko: '체계적 파닉스는 자소-음소 관계를 무작위가 아니라 계획된 순서로 가르칩니다.', use: '커리큘럼 설계 원칙 설명 시' },
      { en: 'Decodable texts let students apply the sounds they have just learned.', ko: '해독 가능 텍스트는 학생이 방금 배운 소리를 바로 적용하게 해 줍니다.', use: '부교재 필요성을 설득할 때' }
    ],
    words: [
      { term: 'decoding', pos: 'n.', ko: '해독', def: 'turning written letters into the sounds they represent', ex: 'Decoding must become automatic before comprehension can grow.' },
      { term: 'decodable text', pos: 'n.', ko: '해독 가능 텍스트', def: 'a text built mainly from phonics patterns the learner already knows', ex: 'Each phonics unit comes with two decodable texts.' }
    ]
  },
  {
    focus: 'Fluency & Sight Words',
    sentences: [
      { en: 'Fluency is the bridge between decoding and comprehension.', ko: '유창성은 해독과 이해를 잇는 다리입니다.', use: '읽기 지도 단계를 설명할 때' },
      { en: 'High-frequency words should be recognized instantly, without sounding them out.', ko: '고빈도 단어는 소리 내어 분석하지 않고 즉시 인식해야 합니다.', use: '사이트워드 학습 이유를 설명할 때' }
    ],
    words: [
      { term: 'sight word', pos: 'n.', ko: '일견 단어', def: 'a common word recognized instantly on sight', ex: 'The app drills 220 sight words across three levels.' },
      { term: 'automaticity', pos: 'n.', ko: '자동화', def: 'performing a skill quickly without conscious effort', ex: 'Repeated reading builds automaticity.' }
    ]
  },
  {
    focus: 'Reading Comprehension & Schema',
    sentences: [
      { en: 'Activating prior knowledge before reading improves comprehension more than pre-teaching every word.', ko: '읽기 전 배경지식을 활성화하는 것이 모든 단어를 미리 가르치는 것보다 이해에 더 효과적입니다.', use: '교사 연수에서 수업 흐름을 설계할 때' },
      { en: 'Comprehension questions should move from literal to inferential to critical.', ko: '이해 질문은 사실적 → 추론적 → 비판적 순으로 올라가야 합니다.', use: '교재의 질문 구성을 설명할 때' }
    ],
    words: [
      { term: 'prior knowledge', pos: 'n.', ko: '배경지식', def: 'what a learner already knows about a topic before reading', ex: 'A quick photo discussion activates prior knowledge.' },
      { term: 'inference', pos: 'n.', ko: '추론', def: 'a conclusion drawn from clues in the text rather than stated facts', ex: 'Level 4 introduces inference questions systematically.' }
    ]
  },
  {
    focus: 'Formative vs Summative Assessment',
    sentences: [
      { en: 'Formative assessment informs teaching while learning is still happening.', ko: '형성평가는 학습이 진행되는 중에 수업을 조정하도록 정보를 줍니다.', use: '평가 체계를 설명할 때' },
      { en: 'Summative tests report results; formative checks change what you do tomorrow.', ko: '총괄평가는 결과를 보고하고, 형성평가는 내일의 수업을 바꿉니다.', use: '교사에게 차이를 각인시킬 때' }
    ],
    words: [
      { term: 'formative assessment', pos: 'n.', ko: '형성평가', def: 'ongoing checks used to adjust instruction during a course', ex: 'Exit tickets are a cheap form of formative assessment.' },
      { term: 'benchmark', pos: 'n./v.', ko: '기준점, 기준 대비 측정하다', def: 'a reference point used to judge progress', ex: 'We benchmark students three times a year.' }
    ]
  },
  {
    focus: 'Rubrics & Descriptors',
    sentences: [
      { en: 'A good rubric describes what success looks like in language students can understand.', ko: '좋은 루브릭은 성공의 모습을 학생이 이해할 수 있는 말로 기술합니다.', use: '말하기·쓰기 평가 연수에서' },
      { en: 'Share the rubric before the task, not after the grade.', ko: '루브릭은 점수를 준 뒤가 아니라 과제 전에 공유하세요.', use: '실행 팁을 줄 때' }
    ],
    words: [
      { term: 'rubric', pos: 'n.', ko: '평가 기준표', def: 'a scoring guide listing criteria and levels of performance', ex: 'The writing rubric has four criteria and five bands.' },
      { term: 'descriptor', pos: 'n.', ko: '수준 기술문', def: 'a sentence describing what a learner can do at a given level', ex: 'Each CEFR level comes with can-do descriptors.' }
    ]
  },
  {
    focus: 'CEFR Alignment',
    sentences: [
      { en: 'Our series is aligned to CEFR levels from pre-A1 through B1.', ko: '저희 시리즈는 pre-A1부터 B1까지 CEFR 레벨에 정렬되어 있습니다.', use: '해외 채택 심사 자료 설명 시' },
      { en: 'Alignment means the can-do statements, not just the vocabulary count, match the level.', ko: '정렬이란 어휘 수뿐 아니라 can-do 진술문이 레벨과 일치한다는 뜻입니다.', use: '경쟁사와 차별화할 때' }
    ],
    words: [
      { term: 'alignment', pos: 'n.', ko: '정렬, 연계', def: 'the degree to which materials match an external standard or framework', ex: 'We can provide an alignment chart for the ministry.' },
      { term: 'can-do statement', pos: 'n.', ko: 'can-do 진술문', def: 'a description of what a learner is able to do at a level', ex: 'Each unit opens with two can-do statements.' }
    ]
  },
  {
    focus: 'Backward Design',
    sentences: [
      { en: 'Backward design starts from the desired outcome and works back to the activities.', ko: '백워드 설계는 목표 성취에서 출발해 활동으로 거슬러 내려옵니다.', use: '교재 개발 회의에서 개발 원칙 설명 시' },
      { en: 'We decide how success will be measured before we write a single lesson.', ko: '저희는 수업을 한 차시도 쓰기 전에 성공을 어떻게 측정할지부터 정합니다.', use: '개발 프로세스를 설명할 때' }
    ],
    words: [
      { term: 'backward design', pos: 'n.', ko: '백워드 설계', def: 'planning from learning goals and assessment back to daily activities', ex: 'The new series was built on backward design.' },
      { term: 'learning objective', pos: 'n.', ko: '학습 목표', def: 'a specific, observable result a lesson aims to produce', ex: 'Keep each objective to one measurable verb.' }
    ]
  },
  {
    focus: 'Needs Analysis',
    sentences: [
      { en: 'Before recommending a series, we run a short needs analysis with the school.', ko: '시리즈를 추천하기 전에 학교와 함께 간단한 요구 분석을 진행합니다.', use: '총판 대상 컨설팅형 영업 시' },
      { en: 'What matters is the gap between where learners are now and what the exam demands.', ko: '핵심은 현재 학습자 수준과 시험이 요구하는 수준 사이의 격차입니다.', use: '채택 제안서에서' }
    ],
    words: [
      { term: 'needs analysis', pos: 'n.', ko: '요구 분석', def: 'a study of what learners actually need before designing a course', ex: 'The needs analysis takes one class period.' },
      { term: 'learning gap', pos: 'n.', ko: '학습 격차', def: 'the distance between current performance and the target', ex: 'Our placement test makes the learning gap visible.' }
    ]
  },
  {
    focus: 'Spaced Repetition & Recycling',
    sentences: [
      { en: 'Vocabulary is recycled across units so that words return before they are forgotten.', ko: '어휘는 단원을 넘나들며 재등장해 잊히기 전에 다시 나옵니다.', use: '교재의 어휘 설계 강점을 설명할 때' },
      { en: 'Learners typically need seven to twelve meaningful encounters with a word.', ko: '학습자는 보통 한 단어를 7~12회 유의미하게 만나야 합니다.', use: '근거 수치를 제시할 때' }
    ],
    words: [
      { term: 'spaced repetition', pos: 'n.', ko: '간격 반복', def: 'reviewing material at increasing intervals to fight forgetting', ex: 'The app schedules reviews using spaced repetition.' },
      { term: 'recycle', pos: 'v.', ko: '재사용하다, 반복 노출시키다', def: 'to bring previously taught language back into later lessons', ex: 'Unit 6 recycles the vocabulary from Units 1 to 3.' }
    ]
  },
  {
    focus: 'Output Hypothesis',
    sentences: [
      { en: 'Pushed output forces learners to notice the gaps in their own language.', ko: '압박된 산출은 학습자가 자기 언어의 빈틈을 자각하게 만듭니다.', use: '말하기 활동 필요성을 설명할 때' },
      { en: 'Input alone builds understanding; output builds control.', ko: '입력만으로는 이해가 자라고, 산출을 통해 구사력이 자랍니다.', use: '강의 중 한 줄 요약으로' }
    ],
    words: [
      { term: 'pushed output', pos: 'n.', ko: '압박된 산출', def: 'speaking or writing that stretches the learner beyond automatic phrases', ex: 'Timed retelling is a simple pushed output task.' },
      { term: 'noticing', pos: 'n.', ko: '알아차림', def: 'becoming consciously aware of a language feature', ex: 'Noticing is the first step toward accuracy.' }
    ]
  },
  {
    focus: 'Error Correction',
    sentences: [
      { en: 'Correct errors that block meaning immediately, and save the rest for delayed feedback.', ko: '의미 전달을 막는 오류는 즉시 고치고, 나머지는 지연 피드백으로 미루세요.', use: '교사 트레이닝 실전 팁' },
      { en: 'A recast repeats the student\'s sentence correctly without breaking the flow.', ko: '리캐스트는 흐름을 끊지 않고 학생 문장을 올바르게 되풀이해 주는 것입니다.', use: '기법을 시연할 때' }
    ],
    words: [
      { term: 'recast', pos: 'n./v.', ko: '리캐스트, 고쳐 되말하기', def: 'reformulating a learner\'s incorrect utterance correctly', ex: 'Recasts work best for pronunciation and small grammar slips.' },
      { term: 'delayed feedback', pos: 'n.', ko: '지연 피드백', def: 'error correction given after the activity rather than during it', ex: 'Note three errors on the board for delayed feedback.' }
    ]
  },
  {
    focus: 'Learner Autonomy',
    sentences: [
      { en: 'Learner autonomy grows when students choose what to read and track their own progress.', ko: '학습자 자율성은 학생이 읽을 것을 고르고 스스로 진도를 관리할 때 자랍니다.', use: '학생용 앱의 가치를 설명할 때' },
      { en: 'Self-assessment checklists turn the goal into something students can own.', ko: '자기평가 체크리스트는 목표를 학생이 스스로 책임지는 것으로 바꿔 줍니다.', use: '학습 습관 형성 설명 시' }
    ],
    words: [
      { term: 'learner autonomy', pos: 'n.', ko: '학습자 자율성', def: 'the learner\'s capacity to take charge of their own learning', ex: 'Reading logs are a practical step toward learner autonomy.' },
      { term: 'metacognition', pos: 'n.', ko: '메타인지', def: 'awareness and control of one\'s own thinking and learning', ex: 'Metacognition improves when students plan before they write.' }
    ]
  },
  {
    focus: 'Differentiated Instruction',
    sentences: [
      { en: 'Differentiation is not making twenty lesson plans; it is offering different routes to the same goal.', ko: '차별화 수업은 스무 개의 지도안을 만드는 게 아니라 같은 목표로 가는 여러 경로를 주는 것입니다.', use: '대형 학급 교사의 부담을 덜어 줄 때' },
      { en: 'Our worktexts include support and extension tasks on the same page.', ko: '저희 워크텍스트는 같은 페이지에 보충 과제와 심화 과제를 함께 담고 있습니다.', use: '제품 기능을 강조할 때' }
    ],
    words: [
      { term: 'differentiation', pos: 'n.', ko: '수준별 맞춤 수업', def: 'adapting tasks so learners of different levels can all progress', ex: 'Mixed-level classes need built-in differentiation.' },
      { term: 'extension task', pos: 'n.', ko: '심화 과제', def: 'an extra activity for learners who finish early or need a challenge', ex: 'The extension task is marked with a star.' }
    ]
  },
  {
    focus: 'Blended Learning',
    sentences: [
      { en: 'Blended learning works only when the online and offline parts have different jobs.', ko: '블렌디드 러닝은 온라인과 오프라인이 서로 다른 역할을 맡을 때에만 작동합니다.', use: 'LMS 도입 제안 시' },
      { en: 'Use class time for interaction and leave drilling and review to the app.', ko: '수업 시간은 상호작용에 쓰고, 반복 연습과 복습은 앱에 맡기세요.', use: '실행 가이드로' }
    ],
    words: [
      { term: 'blended learning', pos: 'n.', ko: '블렌디드 러닝', def: 'combining face-to-face teaching with online study', ex: 'Our LMS was built for blended learning from the start.' },
      { term: 'seat time', pos: 'n.', ko: '수업 시간(대면 시간)', def: 'the hours students spend physically in class', ex: 'Don\'t waste seat time on what the app can do better.' }
    ]
  },
  {
    focus: 'Flipped Classroom',
    sentences: [
      { en: 'In a flipped model, students meet the new content at home and practice it in class.', ko: '플립러닝에서는 학생이 새 내용을 집에서 만나고 교실에서 연습합니다.', use: '모델을 소개할 때' },
      { en: 'Flipping fails without a short accountability check at the start of class.', ko: '수업 시작 시 짧은 확인 절차가 없으면 플립러닝은 실패합니다.', use: '현실적인 조언을 줄 때' }
    ],
    words: [
      { term: 'flipped classroom', pos: 'n.', ko: '거꾸로 교실', def: 'a model where input happens before class and practice happens in class', ex: 'The e-book makes a flipped classroom practical.' },
      { term: 'accountability', pos: 'n.', ko: '책임 확인', def: 'a mechanism that makes learners answerable for preparation', ex: 'A two-minute quiz provides accountability.' }
    ]
  },
  {
    focus: 'CLIL',
    sentences: [
      { en: 'CLIL teaches subject content and English at the same time.', ko: 'CLIL은 교과 내용과 영어를 동시에 가르칩니다.', use: '내용 통합 교재를 소개할 때' },
      { en: 'The language load must be controlled, or the subject content gets lost.', ko: '언어 부담을 통제하지 않으면 교과 내용이 묻혀 버립니다.', use: '설계 주의점을 설명할 때' }
    ],
    words: [
      { term: 'CLIL', pos: 'n.', ko: '내용 언어 통합 학습', def: 'Content and Language Integrated Learning', ex: 'Our science readers follow CLIL principles.' },
      { term: 'content-based', pos: 'adj.', ko: '내용 중심의', def: 'organized around subject matter rather than language structures', ex: 'Content-based units raise motivation in upper grades.' }
    ]
  },
  {
    focus: 'L1 Use & Translanguaging',
    sentences: [
      { en: 'Strategic use of the first language can save time and reduce confusion.', ko: '모국어를 전략적으로 쓰면 시간을 아끼고 혼란을 줄일 수 있습니다.', use: 'EFL 현지 교사의 현실을 인정할 때' },
      { en: 'The goal is not to ban the L1 but to make English the default.', ko: '목표는 모국어 금지가 아니라 영어를 기본값으로 만드는 것입니다.', use: '영어 전용 정책 논쟁에서' }
    ],
    words: [
      { term: 'L1', pos: 'n.', ko: '모국어', def: 'the learner\'s first language', ex: 'A quick L1 gloss can be faster than a long explanation.' },
      { term: 'translanguaging', pos: 'n.', ko: '언어 횡단 사용', def: 'the planned use of both languages as a single resource', ex: 'Translanguaging is common in bilingual programs.' }
    ]
  },
  {
    focus: 'BICS vs CALP',
    sentences: [
      { en: 'Students often sound fluent in conversation long before they can handle academic texts.', ko: '학생은 학술 텍스트를 다루기 훨씬 전부터 대화에서는 유창해 보이곤 합니다.', use: '학부모/교사 오해를 바로잡을 때' },
      { en: 'Academic language takes five to seven years to develop, and it must be taught explicitly.', ko: '학문적 언어는 5~7년이 걸리며 명시적으로 가르쳐야 합니다.', use: '장기 커리큘럼을 정당화할 때' }
    ],
    words: [
      { term: 'academic language', pos: 'n.', ko: '학문적 언어', def: 'the formal vocabulary and structures used in school subjects', ex: 'Academic language needs direct instruction.' },
      { term: 'conversational fluency', pos: 'n.', ko: '일상 회화 유창성', def: 'ease in everyday spoken interaction', ex: 'Conversational fluency can mask academic gaps.' }
    ]
  },
  {
    focus: 'Interlanguage & Fossilization',
    sentences: [
      { en: 'Errors are evidence of a developing system, not of careless learning.', ko: '오류는 부주의한 학습이 아니라 발달 중인 체계의 증거입니다.', use: '교사 인식을 전환시킬 때' },
      { en: 'Without feedback, some errors harden and become very difficult to change.', ko: '피드백이 없으면 일부 오류는 굳어져 바꾸기 매우 어려워집니다.', use: '피드백의 중요성을 강조할 때' }
    ],
    words: [
      { term: 'interlanguage', pos: 'n.', ko: '중간언어', def: 'the learner\'s own evolving language system between L1 and target language', ex: 'Interlanguage errors follow predictable stages.' },
      { term: 'fossilization', pos: 'n.', ko: '화석화', def: 'when an incorrect form becomes permanent in a learner\'s speech', ex: 'Early correction helps prevent fossilization.' }
    ]
  },
  {
    focus: 'Lexical Approach & Collocation',
    sentences: [
      { en: 'Fluent speakers rely on chunks, not on building every sentence word by word.', ko: '유창한 화자는 모든 문장을 단어 단위로 조립하지 않고 덩어리 표현에 의존합니다.', use: '어휘 지도 방향을 제시할 때' },
      { en: 'Teach "make a decision", not "make" and "decision" separately.', ko: '"make"와 "decision"을 따로 가르치지 말고 "make a decision"으로 가르치세요.', use: '실전 예시로' }
    ],
    words: [
      { term: 'collocation', pos: 'n.', ko: '연어', def: 'words that naturally occur together', ex: 'Each unit lists ten target collocations.' },
      { term: 'lexical chunk', pos: 'n.', ko: '어휘 덩어리', def: 'a fixed or semi-fixed multi-word phrase stored as a unit', ex: 'Lexical chunks speed up spoken fluency.' }
    ]
  },
  {
    focus: 'Receptive vs Productive Vocabulary',
    sentences: [
      { en: 'Students recognize far more words than they can actually use.', ko: '학생은 실제로 쓸 수 있는 것보다 훨씬 많은 단어를 인지합니다.', use: '어휘 평가 설계를 설명할 때' },
      { en: 'Moving a word from receptive to productive knowledge requires using it in output.', ko: '단어를 수용 어휘에서 표현 어휘로 옮기려면 산출에서 써 봐야 합니다.', use: '활동 설계 논리로' }
    ],
    words: [
      { term: 'receptive vocabulary', pos: 'n.', ko: '수용 어휘', def: 'words a learner understands when reading or listening', ex: 'Reading builds receptive vocabulary fastest.' },
      { term: 'productive vocabulary', pos: 'n.', ko: '표현 어휘', def: 'words a learner can use in speaking or writing', ex: 'Writing tasks target productive vocabulary.' }
    ]
  },
  {
    focus: 'Word Frequency',
    sentences: [
      { en: 'The first 2,000 word families cover around 80 percent of most texts.', ko: '상위 2,000개 단어군이 대부분 텍스트의 약 80%를 차지합니다.', use: '어휘 선정 기준을 설명할 때' },
      { en: 'We select vocabulary from frequency lists and then check it against the local curriculum.', ko: '저희는 빈도 목록에서 어휘를 선정한 뒤 현지 교육과정과 대조합니다.', use: '현지화 작업을 설명할 때' }
    ],
    words: [
      { term: 'high-frequency word', pos: 'n.', ko: '고빈도 어휘', def: 'a word that appears very often in everyday language', ex: 'High-frequency words are taught first in every level.' },
      { term: 'word family', pos: 'n.', ko: '단어군', def: 'a base word plus its inflections and derivations', ex: 'We count word families rather than individual words.' }
    ]
  },
  {
    focus: 'Process Writing',
    sentences: [
      { en: 'Process writing moves through planning, drafting, revising, and editing.', ko: '과정 중심 쓰기는 계획, 초고, 수정, 교정의 단계를 거칩니다.', use: '쓰기 교재 구조를 설명할 때' },
      { en: 'Revising is about ideas; editing is about grammar. Students confuse the two.', ko: '수정은 내용에 관한 것이고 교정은 문법에 관한 것인데, 학생들은 이 둘을 혼동합니다.', use: '교사 연수의 핵심 포인트로' }
    ],
    words: [
      { term: 'draft', pos: 'n./v.', ko: '초고, 초안을 쓰다', def: 'an early version of a piece of writing', ex: 'The first draft should not be graded.' },
      { term: 'model text', pos: 'n.', ko: '모범 글', def: 'a sample piece showing the target structure and style', ex: 'Every writing unit opens with a model text.' }
    ]
  },
  {
    focus: 'Accuracy vs Fluency',
    sentences: [
      { en: 'Fluency activities should not be interrupted for grammar corrections.', ko: '유창성 활동은 문법 교정을 위해 중단해서는 안 됩니다.', use: '말하기 수업 운영 원칙' },
      { en: 'Plan separate stages: one for getting it right, one for getting it out.', ko: '정확하게 만드는 단계와 밖으로 내뱉는 단계를 나누어 설계하세요.', use: '수업 설계 조언으로' }
    ],
    words: [
      { term: 'accuracy', pos: 'n.', ko: '정확성', def: 'producing language with few errors', ex: 'Controlled practice targets accuracy.' },
      { term: 'fluency', pos: 'n.', ko: '유창성', def: 'producing language smoothly and at a natural speed', ex: 'Timed pair talks develop fluency.' }
    ]
  },
  {
    focus: 'Young Learners & TPR',
    sentences: [
      { en: 'Young learners respond to language physically before they respond verbally.', ko: '유아 학습자는 말로 반응하기 전에 몸으로 먼저 반응합니다.', use: '유아 교재 설계를 설명할 때' },
      { en: 'Keep activities short: attention span in minutes is roughly the child\'s age.', ko: '활동은 짧게 하세요. 집중 시간(분)은 대략 아이의 나이 정도입니다.', use: '현지 교사에게 실전 팁을 줄 때' }
    ],
    words: [
      { term: 'TPR', pos: 'n.', ko: '전신 반응 교수법', def: 'Total Physical Response — learning through physical movement', ex: 'TPR works well for classroom instructions.' },
      { term: 'attention span', pos: 'n.', ko: '집중 지속 시간', def: 'how long a learner can stay focused on one activity', ex: 'Rotate activities to match their attention span.' }
    ]
  },
  {
    focus: 'Teacher Talking Time',
    sentences: [
      { en: 'If the teacher is speaking for forty minutes, the students are not practicing.', ko: '교사가 40분 동안 말하고 있다면 학생은 연습하고 있지 않은 것입니다.', use: '수업 관찰 피드백에서' },
      { en: 'Aim to cut teacher talking time in half and replace it with pair work.', ko: '교사 발화 시간을 절반으로 줄이고 그 자리를 짝 활동으로 채우는 것을 목표로 하세요.', use: '개선 과제를 줄 때' }
    ],
    words: [
      { term: 'teacher talking time (TTT)', pos: 'n.', ko: '교사 발화 시간', def: 'the proportion of class time the teacher spends speaking', ex: 'Lower TTT usually means higher engagement.' },
      { term: 'student talking time (STT)', pos: 'n.', ko: '학생 발화 시간', def: 'the amount of class time learners spend speaking', ex: 'Pair work triples student talking time.' }
    ]
  },
  {
    focus: 'Washback & Test Design',
    sentences: [
      { en: 'Tests change teaching, so a badly designed test damages the whole course.', ko: '시험은 수업을 바꾸므로, 잘못 설계된 시험은 과정 전체를 망칩니다.', use: '평가 설계 컨설팅 시' },
      { en: 'If we test only multiple choice, teachers will stop teaching speaking.', ko: '객관식만 평가하면 교사는 말하기를 가르치지 않게 됩니다.', use: '평가 방식 개선을 설득할 때' }
    ],
    words: [
      { term: 'washback', pos: 'n.', ko: '환류 효과', def: 'the effect a test has on how teachers teach and students study', ex: 'Positive washback is a design goal, not an accident.' },
      { term: 'construct validity', pos: 'n.', ko: '구인 타당도', def: 'whether a test truly measures the ability it claims to measure', ex: 'A reading test with heavy vocabulary load has weak construct validity.' }
    ]
  },
  {
    focus: 'Placement Testing',
    sentences: [
      { en: 'A placement test should be short, adaptive, and easy for local staff to administer.', ko: '배치고사는 짧고 적응형이며 현지 직원이 시행하기 쉬워야 합니다.', use: '온라인 배치고사 기능을 소개할 때' },
      { en: 'Misplacement is the number one cause of dropout in the first month.', ko: '레벨 오배치는 첫 달 이탈의 가장 큰 원인입니다.', use: '학원 원장 설득 포인트' }
    ],
    words: [
      { term: 'placement test', pos: 'n.', ko: '배치고사', def: 'a test used to assign learners to the right level', ex: 'The online placement test takes 20 minutes.' },
      { term: 'cut score', pos: 'n.', ko: '커트라인 점수', def: 'the score boundary between one level and the next', ex: 'We can adjust cut scores for your market.' }
    ]
  },
  {
    focus: 'Motivation',
    sentences: [
      { en: 'Extrinsic rewards start the habit; intrinsic interest sustains it.', ko: '외적 보상은 습관을 시작시키고, 내적 흥미가 그것을 지속시킵니다.', use: '앱의 보상 시스템을 설명할 때' },
      { en: 'Visible progress is the strongest motivator we can design into a product.', ko: '눈에 보이는 성장은 제품에 설계해 넣을 수 있는 가장 강력한 동기 요인입니다.', use: '대시보드 가치를 강조할 때' }
    ],
    words: [
      { term: 'intrinsic motivation', pos: 'n.', ko: '내적 동기', def: 'the drive to learn for its own interest or enjoyment', ex: 'Choice of books raises intrinsic motivation.' },
      { term: 'engagement', pos: 'n.', ko: '몰입도, 참여도', def: 'the level of attention and involvement learners show', ex: 'Engagement metrics rise after the gamification update.' }
    ]
  },
  {
    focus: 'Multimodal Input',
    sentences: [
      { en: 'Pairing audio with images helps learners store meaning in two channels at once.', ko: '음성과 이미지를 함께 제시하면 학습자가 의미를 두 경로로 동시에 저장하게 됩니다.', use: '멀티미디어 컨텐츠 강점을 설명할 때' },
      { en: 'Too many effects, however, split attention rather than support it.', ko: '다만 효과가 지나치면 주의를 돕는 게 아니라 분산시킵니다.', use: '디자인 원칙을 말할 때' }
    ],
    words: [
      { term: 'multimodal', pos: 'adj.', ko: '다중 양식의', def: 'using several channels such as text, audio, and image together', ex: 'Multimodal input suits mixed-ability classes.' },
      { term: 'cognitive load', pos: 'n.', ko: '인지 부하', def: 'the amount of mental effort a task demands', ex: 'Clean page design lowers cognitive load.' }
    ]
  },
  {
    focus: 'Teacher Training & Observation',
    sentences: [
      { en: 'Effective training is not a one-day workshop; it needs follow-up observation and coaching.', ko: '효과적인 연수는 하루짜리 워크숍이 아니라 후속 관찰과 코칭이 필요합니다.', use: '총판에 연수 패키지를 제안할 때' },
      { en: 'Start feedback with what worked, then agree on one change to try next week.', ko: '피드백은 잘된 점으로 시작하고, 다음 주에 시도할 변화 한 가지에 합의하세요.', use: '현지 트레이너를 교육할 때' }
    ],
    words: [
      { term: 'peer observation', pos: 'n.', ko: '동료 수업 관찰', def: 'teachers watching each other\'s lessons to learn and give feedback', ex: 'Peer observation costs nothing and changes practice.' },
      { term: 'action point', pos: 'n.', ko: '실행 과제', def: 'one specific change agreed after feedback', ex: 'Leave every observation with a single action point.' }
    ]
  },
  {
    focus: 'Learning Analytics',
    sentences: [
      { en: 'The dashboard shows which students are falling behind before the exam does.', ko: '대시보드는 시험이 알려 주기 전에 어떤 학생이 뒤처지는지 보여 줍니다.', use: 'LMS 데모의 핵심 메시지' },
      { en: 'Data is only useful if a teacher can act on it in under five minutes.', ko: '데이터는 교사가 5분 안에 행동으로 옮길 수 있을 때에만 유용합니다.', use: '제품 철학을 설명할 때' }
    ],
    words: [
      { term: 'learning analytics', pos: 'n.', ko: '학습 분석', def: 'using learner data to improve teaching decisions', ex: 'Learning analytics turn usage logs into teaching actions.' },
      { term: 'at-risk student', pos: 'n.', ko: '학습 위험군 학생', def: 'a learner whose data suggests they may fail or drop out', ex: 'The system flags at-risk students every Monday.' }
    ]
  }
];

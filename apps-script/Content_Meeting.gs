/**
 * 카테고리 3 — 미팅 표현 (Meetings)
 * 화상회의, 총판 비즈니스 리뷰, 팀 회의, 교사 연수 진행 상황 중심.
 */
var LESSONS_MEETING = [
  {
    focus: 'Opening a Meeting',
    sentences: [
      { en: 'Thanks for making the time — I know it\'s early where you are.', ko: '시간 내 주셔서 감사합니다. 그쪽은 이른 시간인 걸로 압니다.', use: '시차가 있는 화상회의 첫머리에' },
      { en: 'We have 45 minutes, and I\'d like to keep 10 at the end for next steps.', ko: '45분이 있고, 마지막 10분은 다음 단계 논의로 남겨 두고 싶습니다.', use: '시간 배분을 미리 알릴 때' }
    ],
    words: [
      { term: 'agenda', pos: 'n.', ko: '회의 안건', def: 'the list of items to be discussed', ex: 'I circulated the agenda yesterday.' },
      { term: 'circulate', pos: 'v.', ko: '(문서를) 회람·배포하다', def: 'to send a document to all participants', ex: 'I\'ll circulate the deck after the call.' }
    ]
  },
  {
    focus: 'Stating the Purpose',
    sentences: [
      { en: 'The purpose of today\'s call is to agree on the Q4 order volume.', ko: '오늘 통화의 목적은 4분기 발주 물량에 합의하는 것입니다.', use: '목적을 한 문장으로 못 박을 때' },
      { en: 'By the end of this meeting, I\'d like a decision, not just a discussion.', ko: '이 회의가 끝날 때는 논의가 아니라 결정이 나왔으면 합니다.', use: '결론을 요구할 때' }
    ],
    words: [
      { term: 'objective', pos: 'n.', ko: '회의 목표', def: 'what the meeting aims to achieve', ex: 'Let\'s restate the objective before we continue.' },
      { term: 'decision point', pos: 'n.', ko: '결정 사항', def: 'an item that requires a yes or no today', ex: 'There are two decision points on the agenda.' }
    ]
  },
  {
    focus: 'Roles & Timekeeping',
    sentences: [
      { en: 'Minh, could you take the minutes today?', ko: '민 씨, 오늘 회의록을 맡아 주시겠어요?', use: '역할을 배정할 때' },
      { en: 'I\'ll keep an eye on the clock so we finish on time.', ko: '제시간에 끝나도록 제가 시간을 보겠습니다.', use: '진행자 역할을 선언할 때' }
    ],
    words: [
      { term: 'minutes', pos: 'n.', ko: '회의록', def: 'the written record of a meeting', ex: 'The minutes go out the same day.' },
      { term: 'chair', pos: 'v./n.', ko: '회의를 주재하다, 의장', def: 'to lead and manage a meeting', ex: 'I\'ll chair the session and Pedro will present.' }
    ]
  },
  {
    focus: 'Giving a Status Update',
    sentences: [
      { en: 'We\'re on track for the October shipment; printing starts next Monday.', ko: '10월 선적은 일정대로 진행 중이며, 인쇄는 다음 주 월요일에 시작합니다.', use: '진행 상황을 간결히 보고할 때' },
      { en: 'One thing is slipping: the artwork approval from the Cairo office.', ko: '한 가지가 지연되고 있습니다. 카이로 사무소의 디자인 승인 건입니다.', use: '지연 사항을 투명하게 알릴 때' }
    ],
    words: [
      { term: 'on track', pos: 'idiom', ko: '일정대로 진행 중인', def: 'progressing as planned', ex: 'Everything else is on track.' },
      { term: 'slip', pos: 'v.', ko: '(일정이) 밀리다', def: 'to fall behind schedule', ex: 'The launch date has slipped by two weeks.' }
    ]
  },
  {
    focus: 'Handing Over the Floor',
    sentences: [
      { en: 'I\'ll hand over to Sara, who\'ll walk us through the Indonesian numbers.', ko: '인도네시아 실적은 사라 씨가 설명해 드리겠습니다.', use: '발표자를 넘길 때' },
      { en: 'Sara, over to you.', ko: '사라 씨, 부탁드립니다.', use: '짧게 넘길 때' }
    ],
    words: [
      { term: 'hand over', pos: 'v.', ko: '(발언권을) 넘기다', def: 'to pass the speaking turn to someone else', ex: 'Let me hand over to our regional manager.' },
      { term: 'walk through', pos: 'v.', ko: '차근차근 설명하다', def: 'to explain something step by step', ex: 'She\'ll walk you through the forecast.' }
    ]
  },
  {
    focus: 'Interrupting Politely',
    sentences: [
      { en: 'Sorry to jump in — can I add one thing before we move on?', ko: '끼어들어 죄송합니다. 넘어가기 전에 한 가지만 덧붙여도 될까요?', use: '자연스럽게 끼어들 때' },
      { en: 'Can I stop you there for a second? I want to make sure I follow.', ko: '잠시만 멈춰도 될까요? 제가 제대로 따라가고 있는지 확인하고 싶습니다.', use: '이해 확인을 위해 끊을 때' }
    ],
    words: [
      { term: 'jump in', pos: 'v.', ko: '대화에 끼어들다', def: 'to join a conversation already in progress', ex: 'Feel free to jump in at any point.' },
      { term: 'follow', pos: 'v.', ko: '(말을) 이해하다', def: 'to understand what is being said', ex: 'I didn\'t quite follow that last part.' }
    ]
  },
  {
    focus: 'Asking for Clarification',
    sentences: [
      { en: 'Could you expand on that? I\'m not sure I understood the second point.', ko: '조금 더 설명해 주시겠어요? 두 번째 부분이 잘 이해되지 않았습니다.', use: '설명을 더 요청할 때' },
      { en: 'When you say "soon", do you mean this month or this quarter?', ko: '"곧"이라고 하셨는데, 이번 달인가요 이번 분기인가요?', use: '모호함을 구체화할 때' }
    ],
    words: [
      { term: 'expand on', pos: 'v.', ko: '부연 설명하다', def: 'to give more detail about something', ex: 'Could you expand on the pricing issue?' },
      { term: 'rephrase', pos: 'v.', ko: '다시 표현하다', def: 'to say the same thing in different words', ex: 'Let me rephrase that more simply.' }
    ]
  },
  {
    focus: 'Agreeing & Supporting',
    sentences: [
      { en: 'That makes sense, and it matches what we\'re seeing in Vietnam.', ko: '타당한 말씀입니다. 베트남에서 저희가 보는 상황과도 일치합니다.', use: '동의에 근거를 더할 때' },
      { en: 'I\'d support that, provided we can keep the delivery date.', ko: '납기만 지킬 수 있다면 저는 찬성입니다.', use: '조건부 동의를 표할 때' }
    ],
    words: [
      { term: 'be on board with', pos: 'idiom', ko: '~에 동의하다', def: 'to agree with and support a plan', ex: 'Our team is on board with the new structure.' },
      { term: 'provided that', pos: 'conj.', ko: '~라는 조건이라면', def: 'only if a certain condition is met', ex: 'Provided that the budget holds, we can start in May.' }
    ]
  },
  {
    focus: 'Disagreeing Diplomatically',
    sentences: [
      { en: 'I see it a little differently, and here\'s why.', ko: '저는 조금 다르게 보는데, 이유를 말씀드리겠습니다.', use: '정면 충돌을 피하며 반대할 때' },
      { en: 'I\'m not against the idea, but the timing worries me.', ko: '아이디어에 반대하는 건 아니지만 시기가 걱정됩니다.', use: '부분적으로 반대할 때' }
    ],
    words: [
      { term: 'with respect', pos: 'phr.', ko: '외람되지만', def: 'a polite marker before disagreeing', ex: 'With respect, that assumption may be too optimistic.' },
      { term: 'reservation', pos: 'n.', ko: '우려, 유보적 입장', def: 'a doubt about a proposal', ex: 'I have one reservation about the schedule.' }
    ]
  },
  {
    focus: 'Parking a Topic',
    sentences: [
      { en: 'Let\'s park that and take it offline after the call.', ko: '그건 보류하고 통화 후에 따로 논의하시죠.', use: '주제를 미룰 때' },
      { en: 'I\'ll put it in the parking lot so we don\'t lose it.', ko: '잊지 않도록 보류 목록에 적어 두겠습니다.', use: '미룬 주제를 챙길 때' }
    ],
    words: [
      { term: 'take it offline', pos: 'idiom', ko: '따로 논의하다', def: 'to discuss separately outside the meeting', ex: 'Let\'s take the pricing detail offline.' },
      { term: 'parking lot', pos: 'n.', ko: '보류 안건 목록', def: 'a list of topics postponed to a later discussion', ex: 'Two items went to the parking lot.' }
    ]
  },
  {
    focus: 'Connection Problems',
    sentences: [
      { en: 'You\'re breaking up a little — could you repeat the last sentence?', ko: '소리가 조금 끊깁니다. 마지막 문장을 다시 말씀해 주시겠어요?', use: '화상회의 음질 문제 시' },
      { en: 'I\'ll turn off my camera to save bandwidth.', ko: '대역폭 절약을 위해 카메라를 끄겠습니다.', use: '연결이 불안정할 때' }
    ],
    words: [
      { term: 'break up', pos: 'v.', ko: '(소리가) 끊기다', def: 'when audio becomes intermittent', ex: 'Your audio is breaking up.' },
      { term: 'lag', pos: 'n.', ko: '지연', def: 'a delay between speaking and being heard', ex: 'There\'s a two-second lag on the line.' }
    ]
  },
  {
    focus: 'Managing Time',
    sentences: [
      { en: 'We\'re running over, so let\'s cover the last item in two minutes.', ko: '시간이 초과되고 있으니 마지막 항목은 2분 안에 정리하겠습니다.', use: '회의가 길어질 때' },
      { en: 'In the interest of time, I\'ll send the details by email instead.', ko: '시간 관계상 세부 내용은 이메일로 보내 드리겠습니다.', use: '설명을 생략할 때' }
    ],
    words: [
      { term: 'run over', pos: 'v.', ko: '시간을 초과하다', def: 'to continue past the scheduled end time', ex: 'The review ran over by 20 minutes.' },
      { term: 'in the interest of time', pos: 'phr.', ko: '시간 관계상', def: 'to save time', ex: 'In the interest of time, let\'s skip the background.' }
    ]
  },
  {
    focus: 'Summarizing',
    sentences: [
      { en: 'So to recap: you\'ll confirm the volume, and we\'ll hold the price until the 15th.', ko: '정리하면, 귀사는 물량을 확정하시고 저희는 15일까지 가격을 유지합니다.', use: '회의 말미 요약' },
      { en: 'Have I captured everything, or is there anything missing?', ko: '제가 빠짐없이 정리했을까요, 아니면 빠진 게 있을까요?', use: '요약 후 확인할 때' }
    ],
    words: [
      { term: 'recap', pos: 'v./n.', ko: '요약하다, 요약', def: 'to restate the main points briefly', ex: 'Let me recap the three decisions.' },
      { term: 'capture', pos: 'v.', ko: '(내용을) 담아내다', def: 'to record or express something completely', ex: 'The minutes capture all action items.' }
    ]
  },
  {
    focus: 'Action Items',
    sentences: [
      { en: 'Let\'s be clear on owners: who is doing what by when?', ko: '담당자를 명확히 하시죠. 누가 무엇을 언제까지 합니까?', use: '실행 책임을 확정할 때' },
      { en: 'I\'ll take the quotation, and Ahmed will confirm the school list by Thursday.', ko: '견적은 제가 맡고, 아흐메드가 목요일까지 학교 명단을 확인하겠습니다.', use: '업무를 분담할 때' }
    ],
    words: [
      { term: 'action item', pos: 'n.', ko: '실행 과제', def: 'a task assigned during a meeting', ex: 'We closed with five action items.' },
      { term: 'owner', pos: 'n.', ko: '담당자', def: 'the person responsible for completing a task', ex: 'Every action item needs an owner.' }
    ]
  },
  {
    focus: 'Setting Deadlines',
    sentences: [
      { en: 'Can you get that to me by close of business Wednesday?', ko: '수요일 업무 종료 시간까지 보내 주실 수 있을까요?', use: '기한을 구체적으로 요청할 때' },
      { en: 'If Wednesday is tight, tell me now and we\'ll re-plan.', ko: '수요일이 빠듯하면 지금 말씀해 주세요. 계획을 다시 짜겠습니다.', use: '현실적 일정을 끌어낼 때' }
    ],
    words: [
      { term: 'COB (close of business)', pos: 'n.', ko: '업무 종료 시각', def: 'the end of the working day', ex: 'I need it by COB Friday your time.' },
      { term: 'tight', pos: 'adj.', ko: '빠듯한', def: 'leaving very little time or margin', ex: 'That timeline is tight but doable.' }
    ]
  },
  {
    focus: 'Follow-up Email',
    sentences: [
      { en: 'Following up on our call, I\'ve attached the summary and the revised quotation.', ko: '통화 관련 후속으로 요약본과 수정 견적을 첨부합니다.', use: '회의 후 메일 첫 문장' },
      { en: 'Please let me know if anything below doesn\'t match your understanding.', ko: '아래 내용 중 이해하신 바와 다른 부분이 있으면 알려 주세요.', use: '합의 내용 확인을 요청할 때' }
    ],
    words: [
      { term: 'as discussed', pos: 'phr.', ko: '논의한 바와 같이', def: 'referring back to an earlier conversation', ex: 'As discussed, the samples ship on Monday.' },
      { term: 'action required', pos: 'phr.', ko: '조치 필요', def: 'a marker showing the reader must do something', ex: 'Subject: Q4 order — action required by Friday.' }
    ]
  },
  {
    focus: 'Presenting Numbers',
    sentences: [
      { en: 'Revenue came in at 2.4 million dollars, which is 12 percent above target.', ko: '매출은 240만 달러로 목표 대비 12% 초과 달성했습니다.', use: '실적 보고 기본 문형' },
      { en: 'The figures on this slide exclude the Egypt orders booked in January.', ko: '이 슬라이드 수치에는 1월에 계상된 이집트 주문이 빠져 있습니다.', use: '수치 기준을 명확히 할 때' }
    ],
    words: [
      { term: 'come in at', pos: 'v.', ko: '(실적이) ~로 집계되다', def: 'to reach a particular final figure', ex: 'Q3 came in at 98 percent of plan.' },
      { term: 'year on year (YoY)', pos: 'adv.', ko: '전년 동기 대비', def: 'compared with the same period last year', ex: 'Sales grew 18 percent year on year.' }
    ]
  },
  {
    focus: 'Explaining Trends',
    sentences: [
      { en: 'Sales dipped in the second quarter and then recovered strongly after the training program.', ko: '2분기에 매출이 주춤했다가 연수 프로그램 이후 강하게 회복했습니다.', use: '그래프를 설명할 때' },
      { en: 'The growth is driven mainly by the digital subscription, not the print list.', ko: '성장은 주로 디지털 구독에서 나온 것이지 인쇄 교재에서 온 것이 아닙니다.', use: '원인을 짚을 때' }
    ],
    words: [
      { term: 'driven by', pos: 'phr.', ko: '~에 의해 견인된', def: 'caused mainly by a particular factor', ex: 'Growth is driven by two markets.' },
      { term: 'flatten out', pos: 'v.', ko: '정체되다', def: 'to stop rising or falling and stay level', ex: 'Renewals flattened out in the third year.' }
    ]
  },
  {
    focus: 'Handling Tough Questions',
    sentences: [
      { en: 'That\'s a fair question, and I don\'t have the exact figure with me — I\'ll confirm today.', ko: '타당한 질문이신데 정확한 수치를 지금 갖고 있지 않습니다. 오늘 중 확인해 드리겠습니다.', use: '모를 때 신뢰를 지키며 답할 때' },
      { en: 'Let me answer the part I\'m sure about first.', ko: '제가 확실히 아는 부분부터 답변드리겠습니다.', use: '질문을 분해해 대응할 때' }
    ],
    words: [
      { term: 'get back to someone', pos: 'v.', ko: '추후 답변하다', def: 'to reply later with an answer', ex: 'Let me get back to you by tomorrow.' },
      { term: 'off the top of my head', pos: 'idiom', ko: '지금 당장 기억으로는', def: 'from memory, without checking', ex: 'Off the top of my head, about 3,000 copies.' }
    ]
  },
  {
    focus: 'Making a Proposal',
    sentences: [
      { en: 'My suggestion would be to run a pilot in five schools before the full launch.', ko: '제 제안은 전면 도입 전에 5개 학교에서 파일럿을 운영하는 것입니다.', use: '제안을 부드럽게 내놓을 때' },
      { en: 'What if we split the launch into two phases?', ko: '론칭을 두 단계로 나누면 어떨까요?', use: '아이디어를 던질 때' }
    ],
    words: [
      { term: 'pilot', pos: 'n./v.', ko: '시범 운영(하다)', def: 'a small-scale trial before full rollout', ex: 'The pilot runs for one semester.' },
      { term: 'phased rollout', pos: 'n.', ko: '단계적 도입', def: 'introducing something in stages', ex: 'A phased rollout reduces risk.' }
    ]
  },
  {
    focus: 'Building Consensus',
    sentences: [
      { en: 'Before we decide, I\'d like to hear from everyone who hasn\'t spoken yet.', ko: '결정 전에 아직 말씀하지 않은 분들의 의견을 듣고 싶습니다.', use: '참여를 끌어낼 때' },
      { en: 'Can we all live with option B?', ko: '모두 B안을 받아들일 수 있을까요?', use: '완전 합의 대신 수용 가능성을 물을 때' }
    ],
    words: [
      { term: 'buy-in', pos: 'n.', ko: '동의, 지지 확보', def: 'agreement and commitment from stakeholders', ex: 'We need buy-in from the local team first.' },
      { term: 'live with', pos: 'v.', ko: '받아들이고 감수하다', def: 'to accept something that is not ideal', ex: 'I can live with a two-week delay.' }
    ]
  },
  {
    focus: 'Brainstorming',
    sentences: [
      { en: 'Let\'s get everything on the table first and evaluate afterwards.', ko: '먼저 모든 아이디어를 꺼내 놓고 평가는 나중에 하시죠.', use: '아이디어 회의 규칙을 정할 때' },
      { en: 'Building on Pedro\'s idea, we could bundle the training with the first order.', ko: '페드로 아이디어에 덧붙이자면, 첫 주문에 연수를 묶을 수 있겠습니다.', use: '남의 의견 위에 쌓을 때' }
    ],
    words: [
      { term: 'build on', pos: 'v.', ko: '(의견에) 덧붙여 발전시키다', def: 'to develop someone else\'s idea further', ex: 'Let me build on that point.' },
      { term: 'on the table', pos: 'idiom', ko: '논의 대상인', def: 'available for discussion or consideration', ex: 'All three options are on the table.' }
    ]
  },
  {
    focus: 'Prioritizing',
    sentences: [
      { en: 'If we can only do two of these this quarter, which two matter most?', ko: '이번 분기에 두 개만 할 수 있다면 어느 둘이 가장 중요할까요?', use: '우선순위를 강제로 정할 때' },
      { en: 'Let\'s rank them by impact and effort before we commit.', ko: '확정하기 전에 효과와 투입 노력 기준으로 순위를 매겨 봅시다.', use: '기준을 제시할 때' }
    ],
    words: [
      { term: 'prioritize', pos: 'v.', ko: '우선순위를 정하다', def: 'to decide the order of importance', ex: 'We prioritized the three largest markets.' },
      { term: 'quick win', pos: 'n.', ko: '단기 성과', def: 'a small result achieved fast to build momentum', ex: 'Teacher training is our quick win here.' }
    ]
  },
  {
    focus: 'Raising a Risk',
    sentences: [
      { en: 'One risk I want to flag: the Ramadan period overlaps with our shipping window.', ko: '한 가지 리스크를 말씀드리면, 라마단 기간이 저희 선적 시기와 겹칩니다.', use: '위험 요인을 공유할 때' },
      { en: 'If that happens, our fallback is to ship from the Singapore stock.', ko: '그런 상황이 오면 대비책은 싱가포르 재고에서 출고하는 것입니다.', use: '대응책을 함께 제시할 때' }
    ],
    words: [
      { term: 'flag', pos: 'v.', ko: '주의를 환기하다', def: 'to point out something that needs attention', ex: 'I want to flag a possible delay.' },
      { term: 'contingency plan', pos: 'n.', ko: '비상 대응 계획', def: 'a backup plan if things go wrong', ex: 'What\'s our contingency plan for customs delays?' }
    ]
  },
  {
    focus: 'Apologizing for a Delay',
    sentences: [
      { en: 'I apologize for the delay — the revised files took longer than expected.', ko: '지연되어 죄송합니다. 수정 파일 작업이 예상보다 오래 걸렸습니다.', use: '사과와 이유를 간결히 붙일 때' },
      { en: 'To make up for it, we\'ll cover the express shipping.', ko: '보완 차원에서 특송 운임은 저희가 부담하겠습니다.', use: '보상 조치를 제시할 때' }
    ],
    words: [
      { term: 'make up for', pos: 'v.', ko: '보상하다, 만회하다', def: 'to compensate for something that went wrong', ex: 'We\'ll make up for the delay with free samples.' },
      { term: 'unforeseen', pos: 'adj.', ko: '예기치 못한', def: 'not predicted or expected', ex: 'An unforeseen customs issue held the container.' }
    ]
  },
  {
    focus: 'Delegating',
    sentences: [
      { en: 'Could you own this one and keep me posted weekly?', ko: '이 건을 맡아 주시고 주간으로 공유해 주시겠어요?', use: '팀원에게 업무를 위임할 때' },
      { en: 'You have full authority up to 5,000 dollars; beyond that, check with me.', ko: '5천 달러까지는 전결로 처리하시고, 그 이상은 저와 상의해 주세요.', use: '권한 범위를 명확히 할 때' }
    ],
    words: [
      { term: 'keep someone posted', pos: 'idiom', ko: '계속 알려 주다', def: 'to give regular updates', ex: 'Keep me posted on the Cairo negotiation.' },
      { term: 'take the lead', pos: 'v.', ko: '주도하다', def: 'to become the main person responsible', ex: 'Ratna will take the lead on the Jakarta fair.' }
    ]
  },
  {
    focus: 'One-on-One Feedback',
    sentences: [
      { en: 'What went well this month, and what would you do differently?', ko: '이번 달에 잘된 점은 무엇이고, 다시 한다면 무엇을 바꾸시겠어요?', use: '1on1 코칭 질문' },
      { en: 'I want to give you one piece of feedback that I think will help you.', ko: '도움이 될 거라 생각하는 피드백을 한 가지 드리고 싶습니다.', use: '피드백을 부드럽게 열 때' }
    ],
    words: [
      { term: 'one-on-one', pos: 'n.', ko: '1대1 면담', def: 'a private meeting between a manager and a team member', ex: 'We hold one-on-ones every other week.' },
      { term: 'actionable', pos: 'adj.', ko: '실행 가능한', def: 'specific enough to act on', ex: 'Make the feedback actionable, not vague.' }
    ]
  },
  {
    focus: 'Project Kick-off',
    sentences: [
      { en: 'Let\'s start by making sure we all agree on the scope and the deadline.', ko: '우선 범위와 마감일에 모두가 동의하는지부터 확인합시다.', use: '킥오프 미팅 도입' },
      { en: 'Who needs to approve before we can move to production?', ko: '제작 단계로 넘어가려면 누구의 승인이 필요합니까?', use: '승인 경로를 확인할 때' }
    ],
    words: [
      { term: 'kick-off', pos: 'n.', ko: '착수 회의', def: 'the first meeting that starts a project', ex: 'The kick-off is scheduled for Monday.' },
      { term: 'milestone', pos: 'n.', ko: '중간 목표 지점', def: 'a key checkpoint in a project schedule', ex: 'The first milestone is manuscript delivery.' }
    ]
  },
  {
    focus: 'Weekly Sales Review',
    sentences: [
      { en: 'Let\'s go region by region and keep each update to two minutes.', ko: '지역별로 돌아가며 각 보고는 2분 이내로 부탁드립니다.', use: '주간 회의 운영 규칙' },
      { en: 'Any deal that slipped this week — tell me the reason, not just the status.', ko: '이번 주에 밀린 건은 상태만 말고 이유를 말씀해 주세요.', use: '원인 파악을 요구할 때' }
    ],
    words: [
      { term: 'pipeline', pos: 'n.', ko: '영업 파이프라인', def: 'the set of deals in progress', ex: 'Our pipeline for Q4 looks thin.' },
      { term: 'blocker', pos: 'n.', ko: '진행 장애 요인', def: 'something preventing progress', ex: 'What\'s the blocker on the Peru order?' }
    ]
  },
  {
    focus: 'Cross-cultural Etiquette',
    sentences: [
      { en: 'I want to make sure we\'re not rushing you — please take the time you need.', ko: '재촉하는 것처럼 되지 않았으면 합니다. 필요한 시간을 충분히 쓰세요.', use: '의사결정 속도가 다른 파트너와' },
      { en: 'Silence on this call may just mean people are thinking, so I\'ll ask each of you directly.', ko: '통화 중 침묵은 생각 중이라는 뜻일 수 있으니, 제가 한 분씩 직접 여쭙겠습니다.', use: '발언이 적은 회의를 운영할 때' }
    ],
    words: [
      { term: 'turn-taking', pos: 'n.', ko: '발언 순서 주고받기', def: 'how speakers share speaking turns', ex: 'Turn-taking norms differ across cultures.' },
      { term: 'save face', pos: 'idiom', ko: '체면을 지키다', def: 'to avoid public embarrassment', ex: 'Give them a way to save face when correcting an error.' }
    ]
  },
  {
    focus: 'Scheduling Across Time Zones',
    sentences: [
      { en: 'Would 3 p.m. Seoul time work, which is 1 p.m. in Jakarta?', ko: '서울 기준 오후 3시, 자카르타 기준 오후 1시가 괜찮으실까요?', use: '시차를 함께 제시할 때' },
      { en: 'I\'ve sent a calendar invite with a dial-in link; please accept so I can confirm.', ko: '접속 링크가 포함된 캘린더 초대를 보냈습니다. 확인차 수락해 주세요.', use: '일정 확정 요청' }
    ],
    words: [
      { term: 'calendar invite', pos: 'n.', ko: '일정 초대', def: 'a meeting request sent through a calendar app', ex: 'Did you get my calendar invite?' },
      { term: 'reschedule', pos: 'v.', ko: '일정을 변경하다', def: 'to move a meeting to another time', ex: 'Can we reschedule to Thursday?' }
    ]
  },
  {
    focus: 'Small Talk & Rapport',
    sentences: [
      { en: 'How did the new semester start on your side?', ko: '그쪽은 새 학기 시작이 어떠셨나요?', use: '업무와 연결되는 스몰토크' },
      { en: 'Last time we met at the book fair — that was a busy week for both of us.', ko: '지난번 도서전에서 뵈었죠. 서로 정신없는 한 주였습니다.', use: '관계를 상기시킬 때' }
    ],
    words: [
      { term: 'rapport', pos: 'n.', ko: '친밀한 관계', def: 'a comfortable, trusting relationship', ex: 'Two minutes of small talk builds rapport.' },
      { term: 'catch up', pos: 'v.', ko: '근황을 나누다', def: 'to exchange news after time apart', ex: 'It was good to catch up in Bangkok.' }
    ]
  },
  {
    focus: 'Introducing Your Company',
    sentences: [
      { en: 'We publish English learning materials for EFL classrooms and support them with digital platforms.', ko: '저희는 EFL 교실을 위한 영어 학습 교재를 출판하고 디지털 플랫폼으로 지원합니다.', use: '회사 소개 한 문장' },
      { en: 'We currently work with partners in more than fifteen countries.', ko: '현재 15개국 이상의 파트너와 협업하고 있습니다.', use: '신뢰를 주는 규모 언급' }
    ],
    words: [
      { term: 'portfolio', pos: 'n.', ko: '제품군', def: 'the full range of products a company offers', ex: 'Our portfolio spans phonics to exam prep.' },
      { term: 'footprint', pos: 'n.', ko: '진출 범위', def: 'the geographic reach of a business', ex: 'Our footprint covers Southeast Asia and the Middle East.' }
    ]
  },
  {
    focus: 'Closing the Meeting',
    sentences: [
      { en: 'That covers everything on the agenda — thank you all.', ko: '안건은 모두 다뤘습니다. 모두 감사합니다.', use: '회의를 마무리할 때' },
      { en: 'I\'ll send the notes today, and let\'s reconvene in two weeks.', ko: '오늘 중 회의록을 보내 드리고, 2주 후에 다시 모이시죠.', use: '다음 일정을 확정할 때' }
    ],
    words: [
      { term: 'reconvene', pos: 'v.', ko: '다시 모이다', def: 'to meet again after a break', ex: 'We\'ll reconvene after the holiday.' },
      { term: 'wrap up', pos: 'v.', ko: '마무리하다', def: 'to bring something to an end', ex: 'Let\'s wrap up in the next five minutes.' }
    ]
  },
  {
    focus: 'Quarterly Business Review',
    sentences: [
      { en: 'Today I\'d like to review last quarter\'s performance and align on the plan for next quarter.', ko: '오늘은 지난 분기 실적을 리뷰하고 다음 분기 계획에 대해 합의하고자 합니다.', use: '총판 QBR 도입부' },
      { en: 'Where we missed the target, I want to understand the cause together rather than assign blame.', ko: '목표에 미달한 부분은 책임을 묻기보다 원인을 함께 이해하고 싶습니다.', use: '건설적 분위기를 만들 때' }
    ],
    words: [
      { term: 'QBR', pos: 'n.', ko: '분기 사업 리뷰', def: 'Quarterly Business Review with a partner or client', ex: 'The QBR deck is due next Wednesday.' },
      { term: 'align on', pos: 'v.', ko: '~에 합의하다', def: 'to reach a shared position on something', ex: 'Let\'s align on the Q1 target today.' }
    ]
  },
  {
    focus: 'Facilitating a Training Session',
    sentences: [
      { en: 'Before we start, I\'d like to know how many of you have used the platform in class.', ko: '시작 전에, 수업에서 플랫폼을 사용해 보신 분이 얼마나 되는지 알고 싶습니다.', use: '연수 도입부 참여 유도' },
      { en: 'Turn to the person next to you and share one thing you\'d try tomorrow.', ko: '옆 분과 마주 보고, 내일 시도해 볼 한 가지를 나눠 보세요.', use: '참여형 활동 지시' }
    ],
    words: [
      { term: 'facilitate', pos: 'v.', ko: '(세션을) 진행·촉진하다', def: 'to guide a group session so participants contribute', ex: 'She facilitated the workshop in Jakarta.' },
      { term: 'hands-on', pos: 'adj.', ko: '실습 중심의', def: 'involving active practice rather than listening', ex: 'The afternoon session is hands-on.' }
    ]
  },
  {
    focus: 'Handling Complaints',
    sentences: [
      { en: 'I understand why that was frustrating, and I\'d like to fix it today.', ko: '왜 불편하셨는지 이해합니다. 오늘 중으로 해결하고 싶습니다.', use: '불만에 먼저 공감할 때' },
      { en: 'Can you walk me through exactly what happened so I can escalate it properly?', ko: '제대로 상부에 보고할 수 있도록 어떤 일이 있었는지 정확히 말씀해 주시겠어요?', use: '사실 확인 요청' }
    ],
    words: [
      { term: 'acknowledge', pos: 'v.', ko: '인정하고 받아들이다', def: 'to accept that a problem exists', ex: 'Acknowledge the issue before offering a fix.' },
      { term: 'root cause', pos: 'n.', ko: '근본 원인', def: 'the underlying reason a problem occurred', ex: 'We traced the root cause to the packing line.' }
    ]
  },
  {
    focus: 'Rescheduling & Scope',
    sentences: [
      { en: 'This has grown beyond our original agenda; shall we split it into two sessions?', ko: '원래 안건보다 논의가 커졌습니다. 두 번의 회의로 나눌까요?', use: '회의 범위가 넘칠 때' },
      { en: 'I\'d rather postpone than have half the decision-makers missing.', ko: '결정권자 절반이 빠진 채 진행하느니 연기하는 편이 낫겠습니다.', use: '연기를 제안할 때' }
    ],
    words: [
      { term: 'scope creep', pos: 'n.', ko: '범위 확장(과잉)', def: 'gradual expansion beyond the original plan', ex: 'Watch for scope creep in the adaptation project.' },
      { term: 'postpone', pos: 'v.', ko: '연기하다', def: 'to move to a later time', ex: 'We postponed the review to next month.' }
    ]
  },
  {
    focus: 'Delivering Bad News',
    sentences: [
      { en: 'I have some difficult news about the delivery date, and I want you to hear it from me first.', ko: '납기에 관해 좋지 않은 소식이 있는데, 제가 먼저 직접 말씀드리고 싶습니다.', use: '나쁜 소식을 먼저 알릴 때' },
      { en: 'Here\'s what happened, here\'s the impact, and here\'s what we\'re doing about it.', ko: '무슨 일이 있었는지, 어떤 영향이 있는지, 저희가 무엇을 하고 있는지 말씀드리겠습니다.', use: '3단 구조로 보고할 때' }
    ],
    words: [
      { term: 'impact', pos: 'n.', ko: '영향', def: 'the practical effect of a problem', ex: 'The impact is a three-week delay for two titles.' },
      { term: 'mitigate', pos: 'v.', ko: '(피해를) 완화하다', def: 'to make a negative effect less severe', ex: 'We\'re airfreighting part of the order to mitigate the delay.' }
    ]
  },
  {
    focus: 'Year-end Review & Planning',
    sentences: [
      { en: 'Looking back at this year, what made the biggest difference in your market?', ko: '올 한 해를 돌아볼 때, 귀사 시장에서 가장 큰 차이를 만든 것은 무엇이었나요?', use: '연말 리뷰 질문' },
      { en: 'For next year, I\'d like to set three priorities rather than ten.', ko: '내년에는 열 개가 아니라 세 개의 우선순위를 정하고 싶습니다.', use: '계획 수립 방향을 제시할 때' }
    ],
    words: [
      { term: 'takeaway', pos: 'n.', ko: '핵심 교훈', def: 'the main lesson or conclusion', ex: 'My main takeaway is that training drives reorders.' },
      { term: 'headwind', pos: 'n.', ko: '역풍, 불리한 여건', def: 'a force making progress harder', ex: 'Currency was the biggest headwind this year.' }
    ]
  }
];

/**
 * 카테고리 2 — 비즈니스 협상 표현 (Negotiation)
 * 총판 계약, 가격·결제조건, 채권, 라이선스, 전시회 상담 상황 중심.
 */
var LESSONS_NEGOTIATION = [
  {
    focus: 'Opening a Negotiation',
    sentences: [
      { en: 'Before we get into numbers, let\'s agree on what a good outcome looks like for both sides.', ko: '숫자로 들어가기 전에, 양측에 좋은 결과가 무엇인지부터 합의하시죠.', use: '협상 첫머리에서 분위기를 잡을 때' },
      { en: 'I\'d like to cover three points today: volume, pricing, and payment terms.', ko: '오늘은 물량, 가격, 결제조건 세 가지를 다루고 싶습니다.', use: '의제를 먼저 제시할 때' }
    ],
    words: [
      { term: 'framework', pos: 'n.', ko: '기본 틀, 골격', def: 'the basic structure of an agreement agreed before details', ex: 'Let\'s settle the framework first and fill in details later.' },
      { term: 'scope', pos: 'n.', ko: '범위', def: 'what is and is not included in the deal', ex: 'Can we define the scope of this agreement?' }
    ]
  },
  {
    focus: 'Exclusive Distribution',
    sentences: [
      { en: 'We can offer exclusivity, but it has to be tied to an annual volume commitment.', ko: '독점권을 드릴 수는 있지만, 연간 물량 약정과 연동되어야 합니다.', use: '독점 요청을 조건부로 수락할 때' },
      { en: 'If the target is missed two years in a row, the agreement reverts to non-exclusive.', ko: '2년 연속 목표 미달 시 계약은 비독점으로 전환됩니다.', use: '성과 조건을 못 박을 때' }
    ],
    words: [
      { term: 'exclusivity', pos: 'n.', ko: '독점권', def: 'the sole right to sell a product in a defined market', ex: 'Exclusivity is conditional on performance.' },
      { term: 'revert to', pos: 'v.', ko: '~로 되돌아가다', def: 'to return to a previous state or condition', ex: 'The rights revert to us upon termination.' }
    ]
  },
  {
    focus: 'Territory & Channel',
    sentences: [
      { en: 'The territory covers the whole country, but online sales outside it are not permitted.', ko: '판매 지역은 전국이지만, 지역 밖 온라인 판매는 허용되지 않습니다.', use: '지역 침범을 사전에 차단할 때' },
      { en: 'We need to keep direct institutional deals carved out from the exclusive scope.', ko: '기관 직거래 건은 독점 범위에서 제외해 두어야 합니다.', use: '본사 직판 여지를 확보할 때' }
    ],
    words: [
      { term: 'territory', pos: 'n.', ko: '판매 지역', def: 'the geographic area a distributor is allowed to sell in', ex: 'Their territory is limited to the northern region.' },
      { term: 'carve out', pos: 'v.', ko: '(범위에서) 제외하다', def: 'to exclude something specific from a general agreement', ex: 'We carved out government tenders from the contract.' }
    ]
  },
  {
    focus: 'Minimum Order Quantity',
    sentences: [
      { en: 'Our standard MOQ is 500 copies per title, but we can mix titles within one shipment.', ko: '저희 표준 MOQ는 타이틀당 500부이지만, 한 선적 안에서 타이틀을 섞을 수 있습니다.', use: '소량 주문 요구에 유연성을 보일 때' },
      { en: 'Lowering the MOQ would mean giving up the current price tier.', ko: 'MOQ를 낮추면 현재 가격 등급은 포기하셔야 합니다.', use: '조건 교환을 제시할 때' }
    ],
    words: [
      { term: 'MOQ (minimum order quantity)', pos: 'n.', ko: '최소 주문 수량', def: 'the smallest order a supplier will accept', ex: 'The MOQ applies per title, not per order.' },
      { term: 'consolidate', pos: 'v.', ko: '통합하다, 한데 묶다', def: 'to combine several orders or shipments into one', ex: 'We can consolidate the two orders into one container.' }
    ]
  },
  {
    focus: 'Pricing Tiers',
    sentences: [
      { en: 'The discount moves from 45 to 50 percent once you pass 10,000 units a year.', ko: '연간 1만 부를 넘기면 할인율이 45%에서 50%로 올라갑니다.', use: '물량 인센티브를 설명할 때' },
      { en: 'I can apply next year\'s tier now if you commit to the volume in writing.', ko: '물량을 서면으로 약정해 주시면 내년 등급을 지금 적용해 드릴 수 있습니다.', use: '선제적 양보로 약정을 끌어낼 때' }
    ],
    words: [
      { term: 'tier', pos: 'n.', ko: '등급, 단계', def: 'a level in a structured discount or pricing scheme', ex: 'Which tier are they in this year?' },
      { term: 'volume commitment', pos: 'n.', ko: '물량 약정', def: 'a promise to buy a set quantity over a period', ex: 'The price assumes a volume commitment of 8,000 copies.' }
    ]
  },
  {
    focus: 'List Price vs Net Price',
    sentences: [
      { en: 'That figure is the net price to you, excluding freight and local duties.', ko: '그 금액은 운임과 현지 관세를 제외한 귀사 공급가입니다.', use: '가격 오해를 방지할 때' },
      { en: 'Please keep the local retail price within the range we agreed, or the market gets distorted.', ko: '합의한 범위 내에서 현지 소비자가를 유지해 주세요. 그렇지 않으면 시장이 왜곡됩니다.', use: '가격 정책을 통제할 때' }
    ],
    words: [
      { term: 'net price', pos: 'n.', ko: '공급가, 순가격', def: 'the actual price after all discounts', ex: 'Quote them the net price, not the list price.' },
      { term: 'margin', pos: 'n.', ko: '마진, 이윤', def: 'the difference between cost and selling price', ex: 'Their margin is protected by the territory clause.' }
    ]
  },
  {
    focus: 'Payment Terms',
    sentences: [
      { en: 'Our standard terms are 30 percent deposit and the balance before shipment.', ko: '저희 표준 조건은 계약금 30%, 잔금은 선적 전 지급입니다.', use: '기본 조건을 제시할 때' },
      { en: 'We could move to 60 days net once we have a two-year payment record.', ko: '2년간의 결제 이력이 쌓이면 60일 외상 조건으로 전환할 수 있습니다.', use: '신뢰 구축 후 조건 완화를 약속할 때' }
    ],
    words: [
      { term: 'T/T in advance', pos: 'n.', ko: '사전 전신환 송금', def: 'telegraphic transfer paid before shipment', ex: 'First orders are T/T in advance.' },
      { term: 'net 60', pos: 'n.', ko: '60일 후 결제', def: 'payment due 60 days after the invoice date', ex: 'They asked for net 60 instead of net 30.' }
    ]
  },
  {
    focus: 'Credit Limit',
    sentences: [
      { en: 'We can extend the credit limit to 100,000 dollars once the overdue balance is cleared.', ko: '연체 잔액이 정리되면 여신 한도를 10만 달러까지 늘려 드릴 수 있습니다.', use: '조건부 여신 확대를 제시할 때' },
      { en: 'New shipments are on hold until the account is brought current.', ko: '계정이 정상화될 때까지 신규 선적은 보류됩니다.', use: '단호하게 선을 그을 때' }
    ],
    words: [
      { term: 'credit limit', pos: 'n.', ko: '여신 한도', def: 'the maximum unpaid balance a customer may carry', ex: 'They have already hit their credit limit.' },
      { term: 'bring current', pos: 'v.', ko: '(연체를) 정상화하다', def: 'to pay overdue amounts so the account is up to date', ex: 'Please bring the account current before the next order.' }
    ]
  },
  {
    focus: 'Overdue Receivables',
    sentences: [
      { en: 'The invoice from March is now 90 days past due; could you share a payment schedule?', ko: '3월 인보이스가 90일 연체 상태입니다. 지급 일정을 공유해 주시겠습니까?', use: '정중하지만 분명하게 독촉할 때' },
      { en: 'I\'d rather agree on a realistic installment plan than keep chasing the full amount.', ko: '전액을 계속 독촉하기보다 현실적인 분할 상환에 합의하고 싶습니다.', use: '해결 지향적으로 전환할 때' }
    ],
    words: [
      { term: 'past due', pos: 'adj.', ko: '지급 기한이 지난', def: 'not paid by the agreed date', ex: 'Two invoices are past due.' },
      { term: 'installment plan', pos: 'n.', ko: '분할 상환 계획', def: 'an agreement to pay a debt in parts over time', ex: 'We settled on a three-month installment plan.' }
    ]
  },
  {
    focus: 'Shipping Terms',
    sentences: [
      { en: 'The quotation is FOB Busan; freight and insurance are on your side.', ko: '견적은 FOB 부산 기준이며, 운임과 보험은 귀사 부담입니다.', use: '인코텀즈를 명확히 할 때' },
      { en: 'Production takes four weeks and sea freight another five, so please order by August.', ko: '제작에 4주, 해상 운송에 5주가 걸리므로 8월까지는 발주해 주셔야 합니다.', use: '리드타임을 근거로 조기 발주를 유도할 때' }
    ],
    words: [
      { term: 'lead time', pos: 'n.', ko: '납기 소요 기간', def: 'the time between placing an order and receiving it', ex: 'Lead time is nine weeks door to door.' },
      { term: 'FOB', pos: 'n.', ko: '본선 인도 조건', def: 'Free On Board — risk passes to the buyer at the port of loading', ex: 'All prices are quoted FOB Busan.' }
    ]
  },
  {
    focus: 'Annual Target',
    sentences: [
      { en: 'Let\'s set a target we both believe in rather than a number that looks good on paper.', ko: '서류상 보기 좋은 숫자 말고, 양측이 정말 믿는 목표를 정합시다.', use: '현실적인 목표 설정을 유도할 때' },
      { en: 'Based on last year\'s sell-through, 12,000 copies looks achievable.', ko: '작년 실판매 실적으로 보면 1만 2천 부는 달성 가능해 보입니다.', use: '데이터로 목표를 정당화할 때' }
    ],
    words: [
      { term: 'sell-through', pos: 'n.', ko: '실판매율', def: 'how much of the stock a distributor actually sold to end users', ex: 'Sell-through matters more than sell-in.' },
      { term: 'achievable', pos: 'adj.', ko: '달성 가능한', def: 'realistic to reach with available resources', ex: 'Is that target achievable in this market?' }
    ]
  },
  {
    focus: 'Forecasting',
    sentences: [
      { en: 'Could you send a rolling three-month forecast so we can reserve printing slots?', ko: '인쇄 일정을 확보할 수 있도록 3개월 롤링 포캐스트를 보내 주시겠어요?', use: '생산 계획 협조를 요청할 때' },
      { en: 'A forecast is not an order, but it protects you from stock-outs in peak season.', ko: '포캐스트는 발주가 아니지만, 성수기 재고 부족으로부터 귀사를 보호해 줍니다.', use: '부담을 덜어 주며 설득할 때' }
    ],
    words: [
      { term: 'rolling forecast', pos: 'n.', ko: '롤링 포캐스트', def: 'a forecast updated regularly for the next fixed period', ex: 'We review the rolling forecast every month.' },
      { term: 'stock-out', pos: 'n.', ko: '재고 소진, 품절', def: 'running out of inventory when demand exists', ex: 'Last year\'s stock-out cost us two schools.' }
    ]
  },
  {
    focus: 'Contract Renewal',
    sentences: [
      { en: 'The agreement renews automatically unless either party gives 90 days\' notice.', ko: '어느 한쪽이 90일 전에 통지하지 않는 한 계약은 자동 갱신됩니다.', use: '갱신 조항을 설명할 때' },
      { en: 'Before we renew, I\'d like to revisit the performance conditions.', ko: '갱신 전에 실적 조건을 다시 검토하고 싶습니다.', use: '조건 재협상을 꺼낼 때' }
    ],
    words: [
      { term: 'auto-renewal', pos: 'n.', ko: '자동 갱신', def: 'a clause extending a contract unless notice is given', ex: 'The auto-renewal clause is in Article 12.' },
      { term: 'revisit', pos: 'v.', ko: '재검토하다', def: 'to look at a previously agreed point again', ex: 'Can we revisit the discount structure?' }
    ]
  },
  {
    focus: 'Price Increase',
    sentences: [
      { en: 'Paper and freight costs have risen sharply, so we need a 7 percent adjustment from January.', ko: '용지와 운임 비용이 크게 올라 1월부터 7% 조정이 필요합니다.', use: '가격 인상을 통보할 때' },
      { en: 'Orders placed before December will be honored at the current price.', ko: '12월 이전 발주 건은 현재 가격으로 처리해 드리겠습니다.', use: '완충 장치를 제시할 때' }
    ],
    words: [
      { term: 'price adjustment', pos: 'n.', ko: '가격 조정', def: 'a formal change to agreed prices', ex: 'The price adjustment takes effect on January 1.' },
      { term: 'honor', pos: 'v.', ko: '(조건을) 그대로 인정하다', def: 'to accept and fulfill a previously agreed condition', ex: 'We will honor the old price for pending orders.' }
    ]
  },
  {
    focus: 'Licensing & Royalty',
    sentences: [
      { en: 'The royalty is 8 percent of net receipts, paid semi-annually.', ko: '로열티는 순수입의 8%이며 반기별로 지급됩니다.', use: '라이선스 조건을 제시할 때' },
      { en: 'We\'d need an advance against royalties to cover the adaptation cost.', ko: '현지화 비용을 충당하려면 선인세가 필요합니다.', use: '선급금을 요구할 때' }
    ],
    words: [
      { term: 'royalty', pos: 'n.', ko: '로열티, 인세', def: 'a payment based on sales of licensed content', ex: 'Royalty statements are due each June and December.' },
      { term: 'advance', pos: 'n.', ko: '선급금, 선인세', def: 'money paid up front and recovered from future royalties', ex: 'The advance is recoupable against royalties.' }
    ]
  },
  {
    focus: 'Local Adaptation',
    sentences: [
      { en: 'We can localize the cultural references, but the pedagogical structure stays the same.', ko: '문화적 요소는 현지화할 수 있지만 교수법적 구조는 그대로 유지됩니다.', use: '현지화 범위를 규정할 때' },
      { en: 'Any adaptation cost will be shared, with your team handling translation.', ko: '현지화 비용은 분담하되, 번역은 귀사 팀이 맡는 조건입니다.', use: '비용 분담을 제안할 때' }
    ],
    words: [
      { term: 'localize', pos: 'v.', ko: '현지화하다', def: 'to adapt content for a specific market', ex: 'We localized the workbook for Indonesia.' },
      { term: 'turnaround', pos: 'n.', ko: '처리 소요 시간', def: 'the time needed to complete a requested job', ex: 'The turnaround for artwork changes is two weeks.' }
    ]
  },
  {
    focus: 'Co-branding',
    sentences: [
      { en: 'We\'re open to a co-branded edition if the order covers a full print run.', ko: '한 차례 인쇄 물량 전체를 채우는 주문이라면 공동 브랜드 판본도 가능합니다.', use: '커스텀 요구에 조건을 붙일 때' },
      { en: 'Your logo would appear on the cover alongside ours, not instead of it.', ko: '귀사 로고는 저희 로고를 대체하는 게 아니라 나란히 표지에 들어갑니다.', use: '브랜드 원칙을 지킬 때' }
    ],
    words: [
      { term: 'print run', pos: 'n.', ko: '인쇄 부수(1회 제작 물량)', def: 'the number of copies produced in one printing', ex: 'The minimum print run for a custom edition is 3,000.' },
      { term: 'imprint', pos: 'n.', ko: '브랜드명, 출판 브랜드', def: 'a publishing brand name shown on a book', ex: 'It will be published under a joint imprint.' }
    ]
  },
  {
    focus: 'Currency Risk',
    sentences: [
      { en: 'All invoices are in US dollars, so exchange fluctuations are on the buyer\'s side.', ko: '모든 인보이스는 미 달러 기준이므로 환변동은 구매자 측 부담입니다.', use: '환리스크 부담 주체를 명확히 할 때' },
      { en: 'If the local currency drops more than 10 percent, let\'s review the price together.', ko: '현지 통화가 10% 이상 하락하면 가격을 함께 재검토하시죠.', use: '유연한 안전장치를 제시할 때' }
    ],
    words: [
      { term: 'exchange rate exposure', pos: 'n.', ko: '환 노출(위험)', def: 'the risk created by currency movements', ex: 'Dollar invoicing shifts exchange rate exposure to the buyer.' },
      { term: 'fluctuation', pos: 'n.', ko: '변동', def: 'irregular rising and falling of a value', ex: 'Currency fluctuation hit their margin hard.' }
    ]
  },
  {
    focus: 'Making a Concession',
    sentences: [
      { en: 'I can move on freight, but only if the order size goes up.', ko: '운임은 조정할 수 있습니다만, 주문 규모가 늘어난다는 전제에서입니다.', use: '조건부 양보를 할 때' },
      { en: 'That\'s something I can offer once, not as a standing condition.', ko: '그건 한 번은 드릴 수 있지만 상시 조건은 아닙니다.', use: '양보의 선례화를 막을 때' }
    ],
    words: [
      { term: 'concession', pos: 'n.', ko: '양보', def: 'something you give up to reach agreement', ex: 'Never make a concession without asking for one back.' },
      { term: 'trade-off', pos: 'n.', ko: '교환 조건', def: 'giving up one thing in return for another', ex: 'The trade-off is a longer contract term.' }
    ]
  },
  {
    focus: 'Holding Firm',
    sentences: [
      { en: 'I understand the pressure you\'re under, but that price is below our floor.', ko: '어떤 압박을 받고 계신지 이해합니다만, 그 가격은 저희 하한선 아래입니다.', use: '공감하면서도 거절할 때' },
      { en: 'I\'d rather find another way to support you than cut the price further.', ko: '가격을 더 내리기보다 다른 방식으로 지원할 방법을 찾고 싶습니다.', use: '대안을 제시하며 버틸 때' }
    ],
    words: [
      { term: 'price floor', pos: 'n.', ko: '최저 수용 가격', def: 'the lowest price a seller will accept', ex: 'We are already at our price floor.' },
      { term: 'push back', pos: 'v.', ko: '반대하다, 밀어내다', def: 'to politely resist a request or demand', ex: 'I had to push back on the payment terms.' }
    ]
  },
  {
    focus: 'BATNA & Walk-away',
    sentences: [
      { en: 'If we can\'t agree on exclusivity, we\'ll have to keep the market open to other partners.', ko: '독점권에 합의하지 못하면 저희는 시장을 다른 파트너에게도 열어 둘 수밖에 없습니다.', use: '대안을 암시하며 압박할 때' },
      { en: 'Let\'s be honest about where each of us walks away.', ko: '각자 어디서 협상을 접을지 솔직하게 얘기해 봅시다.', use: '교착 상태를 정리할 때' }
    ],
    words: [
      { term: 'BATNA', pos: 'n.', ko: '최선의 대안', def: 'Best Alternative To a Negotiated Agreement', ex: 'Know your BATNA before you enter the room.' },
      { term: 'walk-away point', pos: 'n.', ko: '협상 결렬 기준점', def: 'the condition at which you will end the negotiation', ex: 'Our walk-away point is 40 percent discount.' }
    ]
  },
  {
    focus: 'Counteroffer',
    sentences: [
      { en: 'Instead of a 5 percent discount, let me propose free freight on the first container.', ko: '5% 할인 대신 첫 컨테이너 운임 무료를 제안드리겠습니다.', use: '대안 제시로 방향을 틀 때' },
      { en: 'Here\'s a counterproposal that protects your margin and our price structure.', ko: '귀사 마진과 저희 가격 구조를 모두 지키는 역제안을 드립니다.', use: '상대 이익을 함께 언급할 때' }
    ],
    words: [
      { term: 'counteroffer', pos: 'n.', ko: '역제안', def: 'an alternative proposal made in response to an offer', ex: 'Their counteroffer arrived this morning.' },
      { term: 'in lieu of', pos: 'prep.', ko: '~대신에', def: 'instead of', ex: 'Marketing support in lieu of a price cut.' }
    ]
  },
  {
    focus: 'Breaking a Deadlock',
    sentences: [
      { en: 'We seem to be going in circles; shall we park this point and come back to it?', ko: '논의가 제자리를 도는 것 같은데, 이 항목은 잠시 보류하고 나중에 다시 볼까요?', use: '교착을 우회할 때' },
      { en: 'Let\'s look at the total package instead of arguing item by item.', ko: '항목별로 다투기보다 전체 패키지로 봅시다.', use: '시각을 전환시킬 때' }
    ],
    words: [
      { term: 'deadlock', pos: 'n.', ko: '교착 상태', def: 'a situation where neither side will move', ex: 'We broke the deadlock by splitting the shipment.' },
      { term: 'package deal', pos: 'n.', ko: '일괄 타결안', def: 'an agreement covering several issues together', ex: 'Treat it as a package deal, not separate items.' }
    ]
  },
  {
    focus: 'Buying Time',
    sentences: [
      { en: 'That\'s beyond my authority, so let me check internally and come back to you tomorrow.', ko: '그건 제 권한 밖이라 내부 확인 후 내일 답변드리겠습니다.', use: '즉답을 피하고 시간을 벌 때' },
      { en: 'I don\'t want to give you a quick yes that I can\'t keep.', ko: '지키지 못할 성급한 승낙은 드리고 싶지 않습니다.', use: '신뢰를 지키며 지연할 때' }
    ],
    words: [
      { term: 'authority', pos: 'n.', ko: '결정 권한', def: 'the power to approve or decide', ex: 'I don\'t have the authority to waive the MOQ.' },
      { term: 'escalate', pos: 'v.', ko: '상부에 보고하다', def: 'to refer a decision to a higher level', ex: 'I\'ll escalate it to our management team.' }
    ]
  },
  {
    focus: 'Clarifying & Summarizing',
    sentences: [
      { en: 'Just so we\'re on the same page: 50 percent discount, net 45, and FOB Busan. Correct?', ko: '확인차 정리하면 할인 50%, 45일 결제, FOB 부산입니다. 맞습니까?', use: '합의 내용을 확정할 때' },
      { en: 'When you say "flexible", what exactly would that look like?', ko: '"유연하게"라고 하셨는데, 구체적으로 어떤 모습일까요?', use: '모호한 표현을 구체화할 때' }
    ],
    words: [
      { term: 'on the same page', pos: 'idiom', ko: '같은 이해를 공유한', def: 'having the same understanding', ex: 'Let\'s make sure we\'re on the same page before signing.' },
      { term: 'specifically', pos: 'adv.', ko: '구체적으로', def: 'in a precise and detailed way', ex: 'Specifically, which titles are affected?' }
    ]
  },
  {
    focus: 'Conditional Offers',
    sentences: [
      { en: 'If you take the full series, then we can include teacher training at no cost.', ko: '전 시리즈를 채택하신다면 교사 연수를 무상으로 포함해 드릴 수 있습니다.', use: '조건부 제안의 기본형' },
      { en: 'That offer is valid only if the contract is signed this quarter.', ko: '해당 제안은 이번 분기에 계약이 체결되는 경우에만 유효합니다.', use: '마감 효과를 만들 때' }
    ],
    words: [
      { term: 'contingent on', pos: 'adj.', ko: '~을 조건으로 하는', def: 'depending on something else happening', ex: 'The discount is contingent on prepayment.' },
      { term: 'valid through', pos: 'phr.', ko: '~까지 유효한', def: 'remaining in effect until a stated date', ex: 'The quotation is valid through March 31.' }
    ]
  },
  {
    focus: 'Bundling Print & Digital',
    sentences: [
      { en: 'The e-book access code comes bundled with the printed student book at no extra charge.', ko: '전자책 접속 코드는 인쇄 학생용 교재에 추가 비용 없이 번들로 제공됩니다.', use: '디지털 결합 판매를 설명할 때' },
      { en: 'Bundling raises the perceived value without touching the list price.', ko: '번들링은 정가를 건드리지 않으면서 체감 가치를 높여 줍니다.', use: '총판에 판매 전략을 조언할 때' }
    ],
    words: [
      { term: 'bundle', pos: 'v./n.', ko: '묶음 판매하다, 번들', def: 'to sell products together as one package', ex: 'We bundle the app license with every workbook.' },
      { term: 'perceived value', pos: 'n.', ko: '체감 가치', def: 'what the customer feels the offer is worth', ex: 'Free training raises perceived value cheaply.' }
    ]
  },
  {
    focus: 'Marketing Support',
    sentences: [
      { en: 'We can contribute to a co-op fund of 2 percent of net sales for local promotion.', ko: '현지 프로모션을 위해 순매출의 2%를 공동 마케팅 기금으로 지원할 수 있습니다.', use: '마케팅 지원을 수치로 제시할 때' },
      { en: 'Support is reimbursed against receipts, not paid in advance.', ko: '지원금은 선지급이 아니라 영수증에 근거해 정산됩니다.', use: '집행 방식을 못 박을 때' }
    ],
    words: [
      { term: 'co-op fund', pos: 'n.', ko: '공동 마케팅 기금', def: 'shared money set aside for joint promotion', ex: 'The co-op fund covers booth costs at the local fair.' },
      { term: 'reimburse', pos: 'v.', ko: '정산·환급하다', def: 'to pay back money that has been spent', ex: 'We reimburse approved expenses within 30 days.' }
    ]
  },
  {
    focus: 'Samples & Specimens',
    sentences: [
      { en: 'We\'ll send 20 specimen copies free of charge; additional samples are billed at 50 percent.', ko: '견본 20부는 무상 제공하며, 추가 샘플은 50% 가격으로 청구됩니다.', use: '샘플 정책을 정리할 때' },
      { en: 'Please confirm the shipping address and who will handle customs clearance.', ko: '배송 주소와 통관 담당자를 확인해 주세요.', use: '실무 확인을 요청할 때' }
    ],
    words: [
      { term: 'specimen copy', pos: 'n.', ko: '견본 도서', def: 'a free sample book given for evaluation', ex: 'Specimen copies are stamped "not for resale".' },
      { term: 'customs clearance', pos: 'n.', ko: '통관', def: 'the process of getting goods through customs', ex: 'Customs clearance took ten days last time.' }
    ]
  },
  {
    focus: 'Returns & Claims',
    sentences: [
      { en: 'Damage claims must be filed within 14 days of arrival with photos of the packaging.', ko: '파손 클레임은 도착 후 14일 이내에 포장 사진과 함께 접수되어야 합니다.', use: '클레임 절차를 안내할 때' },
      { en: 'We don\'t accept returns of unsold stock, but we can offer a credit note on the next order.', ko: '미판매 재고 반품은 받지 않지만, 다음 주문에 크레딧으로 처리해 드릴 수 있습니다.', use: '거절하되 대안을 줄 때' }
    ],
    words: [
      { term: 'credit note', pos: 'n.', ko: '대변표, 크레딧 노트', def: 'a document reducing what a customer owes', ex: 'We issued a credit note for the damaged cartons.' },
      { term: 'file a claim', pos: 'v.', ko: '클레임을 제기하다', def: 'to formally report damage or a shortage', ex: 'They filed a claim for 30 damaged copies.' }
    ]
  },
  {
    focus: 'IP & Piracy',
    sentences: [
      { en: 'Photocopied editions in that region are cutting into your sales as much as ours.', ko: '그 지역의 불법 복사본은 저희만큼이나 귀사 매출도 갉아먹고 있습니다.', use: '공동 이해관계를 강조할 때' },
      { en: 'We\'d like your help reporting infringements, and we\'ll cover the legal costs.', ko: '침해 사례 신고에 협조해 주시면 법률 비용은 저희가 부담하겠습니다.', use: '협력을 요청할 때' }
    ],
    words: [
      { term: 'infringement', pos: 'n.', ko: '(저작권) 침해', def: 'illegal use of protected content', ex: 'We found three cases of copyright infringement.' },
      { term: 'unauthorized', pos: 'adj.', ko: '무단의', def: 'done without permission', ex: 'Unauthorized reproduction is a breach of contract.' }
    ]
  },
  {
    focus: 'Handling a Price Objection',
    sentences: [
      { en: 'I hear you on price, but let\'s compare the full package, not just the cover price.', ko: '가격에 대한 말씀은 이해합니다. 다만 표지 가격만이 아니라 전체 패키지를 비교해 보시죠.', use: '가격 공격을 가치 비교로 돌릴 때' },
      { en: 'Their book is cheaper because it comes without digital access or training.', ko: '그쪽 교재가 싼 것은 디지털 이용권과 연수가 포함되지 않았기 때문입니다.', use: '경쟁사 비교에 대응할 때' }
    ],
    words: [
      { term: 'objection', pos: 'n.', ko: '이의, 반대 의견', def: 'a reason a customer gives for not buying', ex: 'Price is the easiest objection to answer with value.' },
      { term: 'apples to apples', pos: 'idiom', ko: '동일 조건 비교', def: 'comparing things on the same terms', ex: 'Let\'s compare apples to apples.' }
    ]
  },
  {
    focus: 'Value-Based Selling',
    sentences: [
      { en: 'If retention improves by 5 percent, the program pays for itself in one semester.', ko: '재등록률이 5%만 올라도 이 프로그램은 한 학기 만에 본전을 뽑습니다.', use: 'ROI로 설득할 때' },
      { en: 'Let me show you what this costs per student per month.', ko: '학생 1인당 월 비용으로 보여 드리겠습니다.', use: '큰 금액을 작게 분해할 때' }
    ],
    words: [
      { term: 'ROI', pos: 'n.', ko: '투자 수익률', def: 'Return On Investment', ex: 'Show the ROI in their own numbers.' },
      { term: 'retention', pos: 'n.', ko: '재등록률, 유지율', def: 'the rate at which students continue enrolling', ex: 'Retention is the school owner\'s main worry.' }
    ]
  },
  {
    focus: 'Digital License Pricing',
    sentences: [
      { en: 'The platform is priced per active student per year, with a 100-seat minimum.', ko: '플랫폼은 연간 활성 학생 1인 기준으로 과금되며 최소 100석부터입니다.', use: '온라인 서비스 과금 구조 설명 시' },
      { en: 'Unused seats don\'t roll over, so let\'s size the first year conservatively.', ko: '미사용 좌석은 이월되지 않으니 첫해는 보수적으로 잡으시죠.', use: '과도한 구매를 막고 신뢰를 얻을 때' }
    ],
    words: [
      { term: 'seat', pos: 'n.', ko: '이용 좌석(계정)', def: 'one user license in a subscription', ex: 'They bought 300 seats for the pilot.' },
      { term: 'roll over', pos: 'v.', ko: '이월되다', def: 'to carry unused value into the next period', ex: 'Unused seats do not roll over.' }
    ]
  },
  {
    focus: 'Renewal & Churn',
    sentences: [
      { en: 'Our renewal rate in similar markets is above 80 percent after the first year.', ko: '유사 시장에서 저희 첫해 이후 갱신율은 80%를 넘습니다.', use: '실적 근거로 신뢰를 줄 때' },
      { en: 'Schools that use the dashboard weekly almost never churn.', ko: '대시보드를 주 단위로 쓰는 학교는 거의 이탈하지 않습니다.', use: '사용 습관 정착을 독려할 때' }
    ],
    words: [
      { term: 'churn', pos: 'n./v.', ko: '이탈(률)', def: 'customers leaving or not renewing', ex: 'Churn is highest in the second semester.' },
      { term: 'onboarding', pos: 'n.', ko: '초기 정착 지원', def: 'the process of getting a new customer started successfully', ex: 'Good onboarding cuts churn in half.' }
    ]
  },
  {
    focus: 'Negotiating a Payment Delay',
    sentences: [
      { en: 'I can hold the shipment for two weeks, but I need a firm payment date in writing.', ko: '선적을 2주 보류할 수는 있지만 확정 지급일을 서면으로 받아야 합니다.', use: '유예를 주되 조건을 붙일 때' },
      { en: 'Let\'s split the invoice: half now to release the goods, half in 30 days.', ko: '인보이스를 나누시죠. 절반은 지금 지급해 물건을 내보내고, 나머지는 30일 후에 주십시오.', use: '실무적 절충안을 낼 때' }
    ],
    words: [
      { term: 'grace period', pos: 'n.', ko: '유예 기간', def: 'extra time allowed before a payment is treated as late', ex: 'We gave them a two-week grace period.' },
      { term: 'release the goods', pos: 'v.', ko: '물품을 출고하다', def: 'to allow shipment to proceed', ex: 'We release the goods once the deposit clears.' }
    ]
  },
  {
    focus: 'Closing the Deal',
    sentences: [
      { en: 'If everything on this sheet works for you, I can have the contract ready by Friday.', ko: '이 시트의 내용이 모두 괜찮으시다면 금요일까지 계약서를 준비하겠습니다.', use: '클로징을 시도할 때' },
      { en: 'What would need to be true for you to sign this month?', ko: '이번 달 안에 서명하시려면 무엇이 충족되어야 할까요?', use: '남은 장애물을 끌어낼 때' }
    ],
    words: [
      { term: 'close', pos: 'v.', ko: '계약을 성사시키다', def: 'to finalize a sale or agreement', ex: 'We closed the deal at the Bangkok fair.' },
      { term: 'sticking point', pos: 'n.', ko: '걸림돌', def: 'the issue preventing agreement', ex: 'The only sticking point is payment terms.' }
    ]
  },
  {
    focus: 'MOU & Next Steps',
    sentences: [
      { en: 'Let\'s sign an MOU now and finalize the definitive agreement after the legal review.', ko: '우선 MOU를 체결하고 법무 검토 후 본계약을 확정하시죠.', use: '단계적 합의를 제안할 때' },
      { en: 'I\'ll send the summary of what we agreed today by tomorrow morning.', ko: '오늘 합의한 내용을 내일 오전까지 정리해 보내 드리겠습니다.', use: '합의를 문서로 굳힐 때' }
    ],
    words: [
      { term: 'MOU', pos: 'n.', ko: '양해각서', def: 'Memorandum of Understanding — a non-binding statement of intent', ex: 'The MOU covers the pilot phase only.' },
      { term: 'binding', pos: 'adj.', ko: '법적 구속력이 있는', def: 'legally enforceable', ex: 'Only the final contract is binding.' }
    ]
  },
  {
    focus: 'Repairing a Relationship',
    sentences: [
      { en: 'We got the delivery wrong last quarter, and I want to tell you how we\'ve fixed it.', ko: '지난 분기 납품에서 저희가 실수했고, 어떻게 바로잡았는지 말씀드리고 싶습니다.', use: '신뢰 회복의 출발점' },
      { en: 'I value this partnership more than any single order, so let\'s reset.', ko: '저는 이 파트너십을 어떤 개별 주문보다 중요하게 생각합니다. 다시 시작하시죠.', use: '관계를 재정립할 때' }
    ],
    words: [
      { term: 'goodwill', pos: 'n.', ko: '신뢰, 호의', def: 'the trust built up between partners', ex: 'We offered free freight as a goodwill gesture.' },
      { term: 'reset', pos: 'v./n.', ko: '관계를 재설정하다', def: 'to start the relationship again on new terms', ex: 'Both sides wanted a reset after the dispute.' }
    ]
  },
  {
    focus: 'Exhibition & Lead Follow-up',
    sentences: [
      { en: 'It was good to meet you at our booth; here is the quotation we discussed.', ko: '저희 부스에서 뵈어 반가웠습니다. 논의했던 견적을 보내 드립니다.', use: '전시회 후 첫 팔로업 메일' },
      { en: 'Shall we set up a 30-minute call next week to go through the samples?', ko: '다음 주에 30분 통화로 샘플을 함께 검토할까요?', use: '다음 단계를 제안할 때' }
    ],
    words: [
      { term: 'lead', pos: 'n.', ko: '잠재 고객', def: 'a potential customer contact', ex: 'We collected 60 leads at the fair.' },
      { term: 'follow up', pos: 'v.', ko: '후속 조치하다', def: 'to contact again after an initial meeting', ex: 'Follow up within 48 hours while they remember you.' }
    ]
  }
];

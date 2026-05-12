// ═══════════════════════════════════════════════════════════════════════════
//  山上山下 — 深濃咖喱飯
//  完整渲染格式 (四語言展開) — 由 menu-raw.js 自動展開
//  此檔案會由頁面直接讀取,請勿手動編輯
// ═══════════════════════════════════════════════════════════════════════════

export const store = {
  name: { zh: '山上山下', en: 'Sanshang Sanxia', ja: '山上山下', ko: '산상산하' },
  subtitle: {
    zh: '深濃咖喱飯',
    en: 'Rich Curry Rice',
    ja: '濃厚カレーライス',
    ko: '진한 카레라이스',
  },
  tagline: {
    zh: '嚴選辛香料 · 先大火快炒 · 再慢火細熬',
    en: 'Premium spices · Seared on high heat · Slow-simmered to depth',
    ja: '厳選スパイス · 強火で香り出し · 弱火でじっくり煮込み',
    ko: '엄선한 향신료 · 센 불에 볶고 · 약불에 진하게 끓이다',
  },
  address: {
    zh: '545 南投縣埔里鎮桃米里桃米路 33-1 號',
    en: 'No. 33-1, Taomi Rd., Taomi Vil., Puli, Nantou 545, Taiwan',
    ja: '台湾 545 南投県埔里鎮桃米里桃米路 33-1 号',
    ko: '대만 545 난터우현 푸리진 타오미리 타오미로 33-1',
  },
  phone: '0974-032-894',
  dining: [
    {
      zh: '內用免費享 極嫩仙草 ｜ 暖心味噌湯',
      en: 'Dine-in complimentary: Grass Jelly & Warm Miso Soup',
      ja: '店内ご利用無料：極嫩仙草・温かい味噌汁',
      ko: '매장 이용 시 무료: 선초·따뜻한 미소국',
    },
    {
      zh: '餐點現做，請耐心等候',
      en: 'All dishes made to order — please be patient',
      ja: '料理は一品一品作りたて。少々お待ちください',
      ko: '모든 요리는 주문 후 조리됩니다',
    },
    {
      zh: '每人基本消費一份主餐',
      en: 'One main per person minimum',
      ja: 'お一人様メイン一品オーダー',
      ko: '1인당 메인 메뉴 1개 주문',
    },
    {
      zh: '未點主餐 低消 NT$150',
      en: 'Min. spend NT$150 without main',
      ja: 'メイン未注文の場合 NT$150',
      ko: '메인 미주문 시 최소 NT$150',
    },
    {
      zh: '連假期間加收 10% 清潔費',
      en: '10% surcharge on long-weekend holidays',
      ja: '連休期間中は10%加算',
      ko: '연휴 기간 10% 추가',
    },
    {
      zh: '身高未滿 120 cm 孩童免基本消費',
      en: 'Children under 120 cm exempt from minimum',
      ja: '身長120cm未満のお子様は基本料金免除',
      ko: '키 120cm 미만 어린이 기본 주문 면제',
    },
  ],
}

export const categories = [
  { id: 'set',     names: { zh: '咖哩定食套餐', en: 'Curry Set Meals',  ja: 'カレー定食セット', ko: '카레 정식 세트' } },
  { id: 'topping', names: { zh: '套餐加料',     en: 'Set Add-ons',      ja: 'セット追加',       ko: '세트 추가' } },
  { id: 'side',    names: { zh: '配菜加購',     en: 'Side Dishes',      ja: 'サイドメニュー',   ko: '사이드 메뉴' } },
  { id: 'snack',   names: { zh: '單點小食',     en: 'À la Carte',       ja: '単品',             ko: '단품' } },
  { id: 'tea',     names: { zh: '在地茶飲',     en: 'Local Tea',        ja: '地元のお茶',       ko: '로컬 차' } },
  { id: 'beer',    names: { zh: '穀釀麥酒',     en: 'Craft Brew',       ja: '地ビール',         ko: '수제 맥주' } },
]

export const tagDefs = {
  R:  { icon: '⭐',    names: { zh: '本店推薦',     en: 'Recommended',                ja: 'おすすめ',           ko: '추천' } },
  '1':{ icon: '🌶️',   names: { zh: '小辣',         en: 'Mild Spicy',                 ja: '少し辛い',           ko: '약간 매운' } },
  '2':{ icon: '🌶️🌶️', names: { zh: '中辣',         en: 'Medium Spicy',               ja: '中辛',               ko: '보통 매운' } },
  '3':{ icon: '🔥',    names: { zh: '大辣',         en: 'Very Spicy',                 ja: '激辛',               ko: '매우 매운' } },
  P:  { icon: '🐷',    names: { zh: '含豬肉',       en: 'Contains Pork',              ja: '豚肉入り',           ko: '돼지고기 포함' } },
  B:  { icon: '🐂',    names: { zh: '含牛肉',       en: 'Contains Beef',              ja: '牛肉入り',           ko: '소고기 포함' } },
  L:  { icon: '🐑',    names: { zh: '含羊肉',       en: 'Contains Lamb',              ja: 'ラム入り',           ko: '양고기 포함' } },
  V:  { icon: '🥬',    names: { zh: '素食',         en: 'Vegetarian',                 ja: 'ベジタリアン',       ko: '채식' } },
  V5: { icon: '🧄',    names: { zh: '五辛素',       en: 'Plant-based with Allium',    ja: '五葷あり精進',       ko: '오신채 포함 채식' } },
  H:  { icon: '☪️',    names: { zh: '清真認證',     en: 'Halal Certified',            ja: 'ハラール認証',       ko: '할랄 인증' } },
}

export const ui = {
  langs: [
    { code: 'zh', label: '繁中' },
    { code: 'en', label: 'EN' },
    { code: 'ja', label: '日本語' },
    { code: 'ko', label: '한국어' },
  ],
  address:    { zh: '地址',     en: 'Address',  ja: '住所',         ko: '주소' },
  phone:      { zh: '電話',     en: 'Phone',    ja: '電話',         ko: '전화' },
  dining:     { zh: '用餐須知', en: 'Dine-in',  ja: '店内ご案内',   ko: '매장 이용 안내' },
  description:{ zh: '介紹',     en: 'About',    ja: '紹介',         ko: '소개' },
  note:       { zh: '備註',     en: 'Note',     ja: '備考',         ko: '비고' },
  market:     { zh: '時價',     en: 'Market Price', ja: '時価',     ko: '시가' },
  close:      { zh: '關閉',     en: 'Close',    ja: '閉じる',       ko: '닫기' },
  open:       { zh: '查看',     en: 'View',     ja: '詳細',         ko: '자세히' },
}

export const menuItems = [
  // ═══ 咖哩定食套餐 ═══
  {
    id: 'set-001', category: 'set',
    names: {
      zh: '山上祕滷牛腱套餐',
      en: 'Signature Braised Beef Shank Set',
      ja: '山上特製煮込み牛スネ肉セット',
      ko: '산상 비법 소고기 정강이 세트',
    },
    price: [{ label: null, value: 295 }],
    image: null, emoji: '🥩',
    tags: ['B'],
    desc: {
      zh: '本店招牌冷盤式套餐，慢滷牛腱心搭配多樣鮮蔬與山上甜點。',
      en: 'Signature cold-plate set: slow-braised beef shank with assorted fresh sides and house dessert.',
      ja: '看板の冷製セット。じっくり煮込んだ牛スネ肉と多彩なお惣菜、自家製デザート付き。',
      ko: '대표 차림 세트. 천천히 조린 소고기 정강이와 다양한 사이드, 디저트 포함.',
    },
    note: {
      zh: '附胡麻鮮蔬、滷牛腱心、黎麥毛豆、韓式泡菜、炸洋蔥圈、黃金蒜片、鮮炸南瓜、山上甜點',
      en: 'Includes sesame veggies, beef shank, edamame quinoa, kimchi, onion rings, garlic chips, fried pumpkin, house dessert',
      ja: 'ゴマ野菜、煮込み牛スネ、キヌア枝豆、韓国キムチ、オニオンリング、ガーリックチップ、南瓜揚げ、自家製デザート付き',
      ko: '깨소스 채소, 소고기 정강이, 퀴노아 풋콩, 김치, 어니언링, 마늘 칩, 호박튀김, 디저트 포함',
    },
  },
  {
    id: 'set-002', category: 'set',
    names: {
      zh: '黃金炸豬排咖哩定食',
      en: 'Golden Pork Cutlet Curry Set',
      ja: '黄金トンカツカレー定食',
      ko: '황금 돈가스 카레 정식',
    },
    price: [{ label: null, value: 325 }],
    image: null, emoji: '🍛',
    tags: ['P'],
    desc: {
      zh: '自製香料咖哩搭配整片香酥炸豬排。',
      en: 'House-blend spice curry with a whole golden-fried pork cutlet.',
      ja: '自家製スパイスカレーに、まるごと一枚のサクサクトンカツを合わせて。',
      ko: '하우스 향신료 카레와 통째 바삭한 돈가스의 조합.',
    },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'set-003', category: 'set',
    names: {
      zh: '招牌唐揚雞咖哩定食',
      en: 'Signature Karaage Chicken Curry Set',
      ja: '看板唐揚げチキンカレー定食',
      ko: '시그니처 가라아게 치킨 카레 정식',
    },
    price: [{ label: null, value: 345 }],
    image: null, emoji: '🍛',
    tags: [],
    desc: {
      zh: '自製香料咖哩與秘製鮮嫩雞腿丁，外酥內嫩。',
      en: 'House curry with our secret-recipe juicy karaage chicken thigh chunks.',
      ja: '自家製カレーと秘伝のジューシー唐揚げモモ肉。',
      ko: '하우스 카레와 비법 부드러운 닭다리 가라아게.',
    },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'set-004', category: 'set',
    names: {
      zh: '大阪燒豬排咖哩定食',
      en: 'Osaka-Style Thick-Cut Pork Curry Set',
      ja: '大阪風厚切り豚カツカレー定食',
      ko: '오사카풍 두툼 돈가스 카레 정식',
    },
    price: [{ label: null, value: 360 }],
    image: null, emoji: '🍛',
    tags: ['P'],
    desc: {
      zh: '自製香料咖哩與厚切炸豬里肌，份量紮實。',
      en: 'House curry topped with a thick-cut fried pork loin — generous and satisfying.',
      ja: '自家製カレーに分厚い豚ロースカツを乗せた、食べ応え抜群の一皿。',
      ko: '하우스 카레에 두툼한 돈안심 가스를 올린 든든한 한 그릇.',
    },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'set-005', category: 'set',
    names: {
      zh: '豬雞雙拼咖哩定食',
      en: 'Pork & Chicken Combo Curry Set',
      ja: '豚＆チキン ダブルカレー定食',
      ko: '돼지＆치킨 더블 카레 정식',
    },
    price: [{ label: null, value: 375 }],
    image: null, emoji: '🍛',
    tags: ['P'],
    desc: {
      zh: '自製香料咖哩配上黃金炸豬排與唐揚雞，雙主菜一次擁有。',
      en: 'House curry served with both golden pork cutlet and karaage chicken — two mains, one bowl.',
      ja: '自家製カレーに黄金トンカツと唐揚げをWで。メイン二品を一皿で。',
      ko: '하우스 카레에 황금 돈가스와 가라아게를 함께. 메인 두 가지를 한 그릇에.',
    },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'set-006', category: 'set',
    names: {
      zh: '炸蝦天婦羅咖哩定食',
      en: 'Shrimp Tempura Curry Set',
      ja: '海老天ぷらカレー定食',
      ko: '새우 튀김 카레 정식',
    },
    price: [{ label: null, value: 390 }],
    image: null, emoji: '🍤',
    tags: [],
    desc: {
      zh: '自製香料咖哩與四隻裹粉黃金炸白蝦，外殼酥脆、蝦肉Q彈。',
      en: 'House curry with four crisp golden-fried white shrimp — crunchy outside, springy inside.',
      ja: '自家製カレーに白海老の天ぷら4本。サクサクの衣にプリプリの身。',
      ko: '하우스 카레와 황금 새우 튀김 4마리. 바삭한 옷에 탱글한 식감.',
    },
    note: { zh: '', en: '', ja: '', ko: '' },
  },

  // ═══ 套餐加料 ═══
  {
    id: 'topping-001', category: 'topping',
    names: {
      zh: '北海道醬油漬鮭魚卵',
      en: 'Hokkaido Soy-Cured Salmon Roe',
      ja: '北海道産いくら醤油漬け',
      ko: '홋카이도 간장 절임 연어알',
    },
    price: [{ label: null, value: '+50' }],
    image: null, emoji: '🍣',
    tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'topping-002', category: 'topping',
    names: {
      zh: '炙燒半黃金切達起司',
      en: 'Seared Cheddar Half',
      ja: '炙りチェダーチーズ',
      ko: '토치 체다 치즈',
    },
    price: [{ label: null, value: '+15' }],
    image: null, emoji: '🧀',
    tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },

  // ═══ 配菜加購 ═══
  {
    id: 'side-001', category: 'side',
    names: { zh: '半溏心蛋', en: 'Half Soft-Boiled Egg', ja: '半熟卵', ko: '반숙 계란' },
    price: [{ label: null, value: 15 }],
    image: null, emoji: '🥚', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' }, note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'side-002', category: 'side',
    names: { zh: '黃金蒜片', en: 'Golden Garlic Chips', ja: 'ガーリックチップ', ko: '황금 마늘 칩' },
    price: [{ label: null, value: 15 }],
    image: null, emoji: '🧄', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' }, note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'side-003', category: 'side',
    names: { zh: '鮮炸南瓜', en: 'Fried Pumpkin', ja: '南瓜の素揚げ', ko: '단호박 튀김' },
    price: [{ label: null, value: 35 }],
    image: null, emoji: '🎃', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' }, note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'side-004', category: 'side',
    names: { zh: '胡麻鮮蔬', en: 'Sesame Fresh Veggies', ja: 'ゴマ野菜サラダ', ko: '깨소스 채소' },
    price: [{ label: null, value: 50 }],
    image: null, emoji: '🥬', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' }, note: { zh: '', en: '', ja: '', ko: '' },
  },

  // ═══ 單點小食 ═══
  {
    id: 'snack-001', category: 'snack',
    names: { zh: '厚切豬排', en: 'Thick-Cut Pork Cutlet', ja: '厚切り豚カツ', ko: '두툼 돈가스' },
    price: [{ label: null, value: 120 }],
    image: null, emoji: '🍖', tags: ['P'],
    desc: { zh: '', en: '', ja: '', ko: '' }, note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'snack-002', category: 'snack',
    names: { zh: '唐揚嫩雞', en: 'Karaage Chicken', ja: '唐揚げチキン', ko: '가라아게 치킨' },
    price: [{ label: null, value: 120 }],
    image: null, emoji: '🍗', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' }, note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'snack-003', category: 'snack',
    names: { zh: '黃金炸蝦', en: 'Golden Fried Shrimp', ja: '海老フライ', ko: '황금 새우 튀김' },
    price: [{ label: null, value: 65 }],
    image: null, emoji: '🍤', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' }, note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'snack-004', category: 'snack',
    names: { zh: '黃金脆薯', en: 'Golden Crispy Fries', ja: 'クリスピーポテト', ko: '바삭 감자튀김' },
    price: [{ label: null, value: 50 }],
    image: null, emoji: '🍟', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' }, note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'snack-005', category: 'snack',
    names: { zh: '炸洋蔥圈', en: 'Onion Rings', ja: 'オニオンリング', ko: '어니언링' },
    price: [{ label: null, value: 50 }],
    image: null, emoji: '🧅', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' }, note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'snack-006', category: 'snack',
    names: { zh: '韓式泡菜', en: 'Korean Kimchi', ja: '韓国キムチ', ko: '김치' },
    price: [{ label: null, value: 40 }],
    image: null, emoji: '🌶️', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' }, note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'snack-007', category: 'snack',
    names: { zh: '黎麥毛豆', en: 'Quinoa Edamame', ja: 'キヌア枝豆', ko: '퀴노아 풋콩' },
    price: [{ label: null, value: 40 }],
    image: null, emoji: '🫛', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' }, note: { zh: '', en: '', ja: '', ko: '' },
  },

  // ═══ 在地茶飲 ═══
  {
    id: 'tea-001', category: 'tea',
    names: {
      zh: '紅玉紅茶',
      en: 'Ruby Black Tea (Cold Brew)',
      ja: '紅玉紅茶 (水出し)',
      ko: '루비 홍차 (콜드브루)',
    },
    price: [{ label: null, value: 90 }],
    image: null, emoji: '🍵', tags: [],
    desc: {
      zh: '在地茶葉甘泉冷泡，香氣甘潤、回韻深長。',
      en: 'Local leaves cold-brewed in spring water — fragrant, smooth, with a deep finish.',
      ja: '地元の茶葉を湧水で水出し。香り高く甘やか、深い余韻。',
      ko: '현지 찻잎을 샘물로 콜드브루. 향이 깊고 부드러운 여운.',
    },
    note: {
      zh: '點選主餐加購飲品折價 NT$20',
      en: 'NT$20 off when ordered with a main',
      ja: 'メインとご一緒で NT$20 引き',
      ko: '메인 주문 시 NT$20 할인',
    },
  },

  // ═══ 穀釀麥酒 ═══
  {
    id: 'beer-001', category: 'beer',
    names: {
      zh: '黃金蕎麥',
      en: 'Golden Buckwheat Brew',
      ja: 'ゴールデン蕎麦ビール',
      ko: '골든 메밀 브루',
    },
    price: [{ label: null, value: 80 }],
    image: null, emoji: '🍺', tags: [],
    desc: {
      zh: '日月潭原生種青蓮蕎麥釀，天然麥釀香、不含咖啡因，沁涼回甘。',
      en: 'Brewed from Sun Moon Lake native buckwheat — naturally malty, caffeine-free, with a clean cool finish.',
      ja: '日月潭原生種の青蓮蕎麦を使用。麦の自然な香り、カフェインゼロ、爽やかな後味。',
      ko: '르웨탄 원종 청련 메밀로 양조. 자연스러운 맥주 향, 무카페인, 깔끔한 뒷맛.',
    },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
]

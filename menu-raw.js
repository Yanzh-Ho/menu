// ═══════════════════════════════════════════════════════════════════════════
//  山上山下 — 深濃咖喱飯
//  菜單原始資料 (中文輸入格式) — 餐廳業者在此編輯
//
//  欄位說明:
//    category  分類代碼: set / topping / side / snack / tea / beer
//    name      品項中文名稱
//    options   價格選項,字串陣列:
//                不分規格 → ['270']
//                分規格   → ['烤雞腿 270', '牛肉 340']
//                加料     → ['+50'] (在 topping 類別使用)
//                時價     → ['時價']
//    tags      標記代碼陣列:
//                R 推薦 / 1 小辣 / 2 中辣 / 3 大辣
//                P 含豬 / B 含牛 / L 含羊 / V 素食 / V5 五辛素 / H 清真
//    image     圖片檔名 (放在 images/),尚無填 null
//    emoji     無圖片時的替代圖示
//    note      中文備註,不需要填 ''
//
//  ★ 新增品項時,只要複製一個 { } 區塊,改掉內容即可
// ═══════════════════════════════════════════════════════════════════════════

export const menuRaw = [
  // ───── 咖哩定食套餐 ─────
  {
    category: 'set',
    name: '山上祕滷牛腱套餐',
    options: ['295'],
    tags: ['B'],
    image: null,
    emoji: '🥩',
    note: '附胡麻鮮蔬、滷牛腱心、黎麥毛豆、韓式泡菜、炸洋蔥圈、黃金蒜片、鮮炸南瓜、山上甜點',
  },
  {
    category: 'set',
    name: '黃金炸豬排咖哩定食',
    options: ['325'],
    tags: ['P'],
    image: null,
    emoji: '🍛',
    note: '自製香料咖哩與整片香酥炸豬排',
  },
  {
    category: 'set',
    name: '招牌唐揚雞咖哩定食',
    options: ['345'],
    tags: [],
    image: null,
    emoji: '🍛',
    note: '自製香料咖哩與秘製鮮嫩雞腿丁',
  },
  {
    category: 'set',
    name: '大阪燒豬排咖哩定食',
    options: ['360'],
    tags: ['P'],
    image: null,
    emoji: '🍛',
    note: '自製香料咖哩與厚切炸豬里肌',
  },
  {
    category: 'set',
    name: '豬雞雙拼咖哩定食',
    options: ['375'],
    tags: ['P'],
    image: null,
    emoji: '🍛',
    note: '自製香料咖哩與黃金炸豬排尬唐揚雞',
  },
  {
    category: 'set',
    name: '炸蝦天婦羅咖哩定食',
    options: ['390'],
    tags: [],
    image: null,
    emoji: '🍤',
    note: '自製香料咖哩與四隻裹粉黃金炸白蝦',
  },

  // ───── 套餐加料 ─────
  {
    category: 'topping',
    name: '北海道醬油漬鮭魚卵',
    options: ['+50'],
    tags: [],
    image: null,
    emoji: '🍣',
    note: '',
  },
  {
    category: 'topping',
    name: '炙燒半黃金切達起司',
    options: ['+15'],
    tags: [],
    image: null,
    emoji: '🧀',
    note: '',
  },

  // ───── 配菜加購 ─────
  { category: 'side', name: '半溏心蛋', options: ['15'], tags: [], image: null, emoji: '🥚', note: '' },
  { category: 'side', name: '黃金蒜片', options: ['15'], tags: [], image: null, emoji: '🧄', note: '' },
  { category: 'side', name: '鮮炸南瓜', options: ['35'], tags: [], image: null, emoji: '🎃', note: '' },
  { category: 'side', name: '胡麻鮮蔬', options: ['50'], tags: [], image: null, emoji: '🥬', note: '' },

  // ───── 單點小食 ─────
  { category: 'snack', name: '厚切豬排',  options: ['120'], tags: ['P'], image: null, emoji: '🍖', note: '' },
  { category: 'snack', name: '唐揚嫩雞',  options: ['120'], tags: [], image: null, emoji: '🍗', note: '' },
  { category: 'snack', name: '黃金炸蝦',  options: ['65'],  tags: [], image: null, emoji: '🍤', note: '' },
  { category: 'snack', name: '黃金脆薯',  options: ['50'],  tags: [], image: null, emoji: '🍟', note: '' },
  { category: 'snack', name: '炸洋蔥圈',  options: ['50'],  tags: [], image: null, emoji: '🧅', note: '' },
  { category: 'snack', name: '韓式泡菜',  options: ['40'],  tags: [], image: null, emoji: '🌶️', note: '' },
  { category: 'snack', name: '黎麥毛豆',  options: ['40'],  tags: [], image: null, emoji: '🫛', note: '' },

  // ───── 在地茶飲 (甘泉冷泡) ─────
  {
    category: 'tea',
    name: '紅玉紅茶',
    options: ['90'],
    tags: [],
    image: null,
    emoji: '🍵',
    note: '點選主餐加購飲品折價 20 元',
  },

  // ───── 穀釀麥酒 ─────
  {
    category: 'beer',
    name: '黃金蕎麥',
    options: ['80'],
    tags: [],
    image: null,
    emoji: '🍺',
    note: '天然麥釀香、不含咖啡因，日月潭原生種青蓮蕎麥釀，沁涼回甘',
  },
]

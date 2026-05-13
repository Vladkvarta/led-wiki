export const matrices = [
  // ─── INDOOR ─────────────────────────────────────────────
  {
    id:'p15_in',  manufacturer:'Generic',  model:'P1.5 Indoor COB',
    pitch:1.5,    technology:'COB',        location:'indoor',
    brightness:800, ip:'IP40',
    moduleW:240,  moduleH:120,
    cabinetW:480, cabinetH:480,
    maxPowerPerSqm: 550,
    pricePerSqm:680,
    fps:60, refreshHz:3840, hdr:true, wire:'Au',
    notes:'Fine pitch, конференц-залы, командные центры'
  },
  {
    id:'p2_in',   manufacturer:'Generic',  model:'P2 Indoor SMD',
    pitch:2.0,    technology:'SMD',        location:'indoor',
    brightness:1000, ip:'IP30',
    moduleW:256,  moduleH:128,
    cabinetW:512, cabinetH:512,
    maxPowerPerSqm: 450,
    pricePerSqm:520,
    fps:60, refreshHz:1920, hdr:false, wire:'Au',
    notes:'Стандартный indoor, ТЦ, корпоративные экраны'
  },
  {
    id:'p25_in',  manufacturer:'Generic',  model:'P2.5 Indoor SMD',
    pitch:2.5,    technology:'SMD',        location:'indoor',
    brightness:1200, ip:'IP30',
    moduleW:320,  moduleH:160,
    cabinetW:640, cabinetH:640,
    maxPowerPerSqm: 380,
    pricePerSqm:380,
    fps:60, refreshHz:1920, hdr:false, wire:'Au',
    notes:'Оптимальное соотношение цена/качество для indoor'
  },
  {
    id:'p3_in',   manufacturer:'Generic',  model:'P3 Indoor SMD',
    pitch:3.0,    technology:'SMD',        location:'indoor',
    brightness:1500, ip:'IP30',
    moduleW:192,  moduleH:192,
    cabinetW:576, cabinetH:576,
    maxPowerPerSqm: 320,
    pricePerSqm:280,
    fps:60, refreshHz:1920, hdr:false, wire:'Cu',
    notes:'Бюджетный indoor, залы с дистанцией 3+ м'
  },
  {
    id:'p4_in',   manufacturer:'Generic',  model:'P4 Indoor SMD',
    pitch:4.0,    technology:'SMD',        location:'indoor',
    brightness:2000, ip:'IP30',
    moduleW:256,  moduleH:128,
    cabinetW:512, cabinetH:512,
    maxPowerPerSqm: 260,
    pricePerSqm:210,
    fps:60, refreshHz:960, hdr:false, wire:'Cu',
    notes:'Экономичный indoor, большие залы 4+ м'
  },
  // ─── OUTDOOR ────────────────────────────────────────────
  {
    id:'p25_out', manufacturer:'Generic',  model:'P2.5 Outdoor SMD',
    pitch:2.5,    technology:'SMD',        location:'outdoor',
    brightness:6000, ip:'IP65',
    moduleW:320,  moduleH:160,
    cabinetW:640, cabinetH:640,
    maxPowerPerSqm: 600,
    pricePerSqm:460,
    fps:60, refreshHz:1920, hdr:false, wire:'Au',
    notes:'Outdoor fine pitch, близкие дистанции'
  },
  {
    id:'p4_out',  manufacturer:'Generic',  model:'P4 Outdoor SMD',
    pitch:4.0,    technology:'SMD',        location:'outdoor',
    brightness:7000, ip:'IP65',
    moduleW:256,  moduleH:128,
    cabinetW:768, cabinetH:768,
    maxPowerPerSqm: 500,
    pricePerSqm:340,
    fps:60, refreshHz:1920, hdr:false, wire:'Au',
    notes:'Наружная реклама, фасады зданий'
  },
  {
    id:'p5_out',  manufacturer:'Generic',  model:'P5 Outdoor SMD',
    pitch:5.0,    technology:'SMD',        location:'outdoor',
    brightness:7500, ip:'IP65',
    moduleW:320,  moduleH:160,
    cabinetW:960, cabinetH:960,
    maxPowerPerSqm: 420,
    pricePerSqm:260,
    fps:60, refreshHz:1920, hdr:false, wire:'Au',
    notes:'Стандарт outdoor, улицы, парковки'
  },
  {
    id:'p6_out',  manufacturer:'Generic',  model:'P6 Outdoor SMD',
    pitch:6.0,    technology:'SMD',        location:'outdoor',
    brightness:8000, ip:'IP65',
    moduleW:192,  moduleH:192,
    cabinetW:960, cabinetH:960,
    maxPowerPerSqm: 350,
    pricePerSqm:210,
    fps:60, refreshHz:1920, hdr:false, wire:'Au',
    notes:'Оптимум outdoor по цене, 6–25 м дистанция'
  },
  {
    id:'p8_out',  manufacturer:'Generic',  model:'P8 Outdoor SMD',
    pitch:8.0,    technology:'SMD',        location:'outdoor',
    brightness:8500, ip:'IP65',
    moduleW:320,  moduleH:160,
    cabinetW:960, cabinetH:960,
    maxPowerPerSqm: 280,
    pricePerSqm:165,
    fps:60, refreshHz:1920, hdr:false, wire:'Au',
    notes:'Дорожные билборды, стадионы'
  },
  {
    id:'p10_out', manufacturer:'Generic',  model:'P10 Outdoor SMD',
    pitch:10.0,   technology:'SMD',        location:'outdoor',
    brightness:9000, ip:'IP65',
    moduleW:320,  moduleH:160,
    cabinetW:960, cabinetH:960,
    maxPowerPerSqm: 230,
    pricePerSqm:130,
    fps:60, refreshHz:1920, hdr:false, wire:'Au',
    notes:'Крупные outdoor, >10 м дистанция'
  },
  // ─── RENTAL ─────────────────────────────────────────────
  {
    id:'p25_rent',manufacturer:'Generic',  model:'P2.5 Rental SMD',
    pitch:2.5,    technology:'SMD',        location:'rental',
    brightness:2500, ip:'IP40',
    moduleW:250,  moduleH:250,
    cabinetW:500, cabinetH:500,
    maxPowerPerSqm: 500,
    pricePerSqm:450,
    fps:60, refreshHz:3840, hdr:true, wire:'Au',
    notes:'Аренда, концерты, die-cast cabinet'
  },
  {
    id:'p391_rent',manufacturer:'Generic', model:'P3.91 Rental SMD',
    pitch:3.91,   technology:'SMD',        location:'rental',
    brightness:3000, ip:'IP54',
    moduleW:250,  moduleH:250,
    cabinetW:500, cabinetH:500,
    maxPowerPerSqm: 420,
    pricePerSqm:320,
    fps:60, refreshHz:3840, hdr:false, wire:'Au',
    notes:'Популярный аренда-формат, outdoor/indoor'
  },
];

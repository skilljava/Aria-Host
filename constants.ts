import { NavLink, Product } from './types';

// Using the user provided logo file
export const LOGO_URL = "sitelogo.png"; 

// Simplified Nav Links - "Services" will now be a dropdown containing most items
export const NAV_LINKS: NavLink[] = [
  { label: 'خانه', path: '/' },
  { label: 'خدمات', path: '/services' }, // This will be the dropdown trigger
  { label: 'بلاگ', path: '#blog' },
  { label: 'تماس با ما', path: '/contact' },
];

// Dropdown Menu Items
export const SERVICE_MENU_ITEMS = [
  { label: 'سرور مجازی', path: '/vps', icon: 'server' },
  { label: 'سرور گیم', path: '/game', icon: 'gamepad' },
  { label: 'میزبانی ابری', path: '/cloud', icon: 'cloud' },
  { label: 'سرور اختصاصی', path: '/dedicated', icon: 'shield' },
  { label: 'ثبت دامنه', path: '/domain', icon: 'globe' },
  { label: 'خدمات دیگر', path: '/services', icon: 'more' },
];

// Reliable Public Lottie URLs
export const ANIMATION_URLS = {
  // Hero / Existing
  hero: "https://lottie.host/b251479a-83a1-4b35-9b92-378a5b7e8196/iD8MPP7k6b.lottie", 
  loading: "https://lottie.host/2297766c-ba1d-4a51-992c-cafd441343f9/c9njoWgiqO.lottie",
  whyUs: "https://lottie.host/86d9f36a-ba0d-4909-9fb4-bba97eaee46f/sqAPjjPM4B.lottie",
  
  // New Additions
  serverRack: "https://assets5.lottiefiles.com/packages/lf20_jmBauI.json",
  connectivity: "https://assets5.lottiefiles.com/packages/lf20_JCozmR.json",
  security: "https://assets2.lottiefiles.com/packages/lf20_tutvdkg0.json",
  support: "https://assets4.lottiefiles.com/packages/lf20_8wi5xtmj.json",
  speed: "https://assets7.lottiefiles.com/packages/lf20_tV3prG.json",
  uptimeChart: "https://lottie.host/40ed8554-5529-497b-9f8e-9a5848c47f1b/y7fhQidTXT.lottie",
  domainSearch: "https://assets1.lottiefiles.com/packages/lf20_syqtjodg.json",
};

export const MOCK_PRODUCTS: Product[] = [
  // --- VPS CATEGORY ---
  {
    id: 'gaming-vps-proline',
    category: 'vps',
    title: 'VPS Gaming - Gen 4',
    description: 'عملکرد فوق‌العاده با پردازنده رایزن',
    price: '۸۹۹,۰۰۰ / ماهانه',
    specs: ['8 Core AMD EPYC', '16 GB RAM DDR4'],
    flag: '🇩🇪',
    image: 'https://picsum.photos/400/300?random=101',
    isBestSeller: true
  },
  {
    id: 'respina-cloud-vps-xt',
    category: 'vps',
    title: 'VPS Iran - Respina',
    description: 'اتصال مستقیم به شبکه زیرساخت',
    price: '۵۹۹,۰۰۰ / ماهانه',
    specs: ['4 Core Intel Xeon', '8 GB RAM DDR4'],
    flag: '🇮🇷',
    image: 'https://picsum.photos/400/300?random=102'
  },
  {
    id: 'fanava-hyper-vps',
    category: 'vps',
    title: 'VPS Iran - FanAva',
    description: 'ترافیک نامحدود داخلی',
    price: '۶۹۹,۰۰۰ / ماهانه',
    specs: ['6 Core', '12 GB RAM DDR4'],
    flag: '🇮🇷',
    image: 'https://picsum.photos/400/300?random=103'
  },
  {
    id: 'economy-game-vps-plus',
    category: 'vps',
    title: 'VPS Eco - Europe',
    description: 'مقرون به صرفه برای شروع',
    price: '۱۹۹,۰۰۰ / ماهانه',
    specs: ['2 Core', '4 GB RAM DDR4'],
    flag: '🇩🇪',
    image: 'https://picsum.photos/400/300?random=104'
  },
  {
    id: 'turkey-speedvps-turbo',
    category: 'vps',
    title: 'VPS Istanbul - NVMe',
    description: 'پینگ عالی به ایران',
    price: '۴۴۹,۰۰۰ / ماهانه',
    specs: ['4 Core AMD Ryzen', '8 GB RAM DDR4'],
    flag: '🇹🇷',
    image: 'https://picsum.photos/400/300?random=105',
    isBestSeller: true
  },
  {
    id: 'asiatech-cloudcore-vps',
    category: 'vps',
    title: 'VPS Iran - Asiatech',
    description: 'میزبانی در دیتاسنتر آسیاتک',
    price: '۵۴۹,۰۰۰ / ماهانه',
    specs: ['4 Core', '8 GB RAM DDR4'],
    flag: '🇮🇷',
    image: 'https://picsum.photos/400/300?random=106'
  },
  {
    id: 'shatel-ultravps-series',
    category: 'vps',
    title: 'VPS Iran - Shatel',
    description: 'پهنای باند اختصاصی',
    price: '۷۴۹,۰۰۰ / ماهانه',
    specs: ['6 Core', '16 GB RAM DDR4'],
    flag: '🇮🇷',
    image: 'https://picsum.photos/400/300?random=107'
  },
  {
    id: 'pishgaman-highpower-vps',
    category: 'vps',
    title: 'VPS Iran - Pishgaman',
    description: 'مناسب برای سرورهای دانلود',
    price: '۱,۲۹۹,۰۰۰ / ماهانه',
    specs: ['8 Core', '32 GB RAM DDR4'],
    flag: '🇮🇷',
    image: 'https://picsum.photos/400/300?random=108'
  },
  {
    id: 'germany-titanvps',
    category: 'vps',
    title: 'VPS Germany - AX Series',
    description: 'قدرت پردازشی بالا',
    price: '۸۴۹,۰۰۰ / ماهانه',
    specs: ['6 Core Intel Xeon', '16 GB RAM DDR4'],
    flag: '🇩🇪',
    image: 'https://picsum.photos/400/300?random=109',
    isBestSeller: true
  },
  {
    id: 'premium-ryzen-vps-boost',
    category: 'vps',
    title: 'VPS Netherlands - Ryzen 9',
    description: 'نسل جدید DDR5',
    price: '۱,۴۹۹,۰۰۰ / ماهانه',
    specs: ['8 Core AMD Ryzen 9', '32 GB RAM DDR5'],
    flag: '🇳🇱',
    image: 'https://picsum.photos/400/300?random=110',
    isBestSeller: true
  },
  {
    id: 'europe-cloudedge-vps',
    category: 'vps',
    title: 'VPS Europe - Edge',
    description: 'پایداری شبکه ۹۹.۹٪',
    price: '۵۹۹,۰۰۰ / ماهانه',
    specs: ['4 Core', '8 GB RAM DDR4'],
    flag: '🇪🇺',
    image: 'https://picsum.photos/400/300?random=111'
  },
  {
    id: 'iran-turbocompute-vps',
    category: 'vps',
    title: 'VPS Iran - Turbo',
    description: 'محاسباتی و پردازشی',
    price: '۴۹۹,۰۰۰ / ماهانه',
    specs: ['4 Core', '8 GB RAM DDR4'],
    flag: '🇮🇷',
    image: 'https://picsum.photos/400/300?random=112'
  },
  {
    id: 'global-novavps-enterprise',
    category: 'vps',
    title: 'VPS Enterprise - Global',
    description: 'راهکار سازمانی',
    price: '۳,۹۹۹,۰۰۰ / ماهانه',
    specs: ['16 Core', '64 GB RAM DDR4'],
    flag: '🌐',
    image: 'https://picsum.photos/400/300?random=113'
  },
  {
    id: 'gamerx-lowlatency-vps',
    category: 'vps',
    title: 'VPS Gaming - Low Latency',
    description: 'بهینه‌سازی شده برای گیم',
    price: '۷۹۹,۰۰۰ / ماهانه',
    specs: ['6 Core AMD Ryzen', '16 GB RAM DDR4'],
    flag: '🇩🇪',
    image: 'https://picsum.photos/400/300?random=114',
    isBestSeller: true
  },
  {
    id: 'ryzen-vps-ultracore',
    category: 'vps',
    title: 'VPS Ultra - Ryzen 7950X',
    description: 'نهایت قدرت سخت‌افزاری',
    price: '۲,۴۹۹,۰۰۰ / ماهانه',
    specs: ['12 Core AMD Ryzen', '64 GB RAM DDR5'],
    flag: '🇳🇱',
    image: 'https://picsum.photos/400/300?random=128',
    isBestSeller: true
  },

  // --- GAME CATEGORY ---
  {
    id: 'minecraft-prime-edition',
    category: 'game',
    title: 'Minecraft - Java Edition',
    description: 'نسخه جاوا با رم بالا',
    price: '۲۹۹,۰۰۰ / ماهانه',
    specs: ['4 Core', '8 GB RAM DDR4'],
    flag: '🇩🇪',
    image: 'https://picsum.photos/400/300?random=115',
    isBestSeller: true
  },
  {
    id: 'rust-dedicated-forge',
    category: 'game',
    title: 'Rust - Performance',
    description: 'بدون لگ و تاخیر',
    price: '۵۹۹,۰۰۰ / ماهانه',
    specs: ['6 Core', '16 GB RAM DDR4'],
    flag: '🇳🇱',
    image: 'https://picsum.photos/400/300?random=116',
    isBestSeller: true
  },
  {
    id: 'mta-reactor',
    category: 'game',
    title: 'MTA:SA - Dedicated',
    description: 'منابع تضمینی',
    price: '۳۴۹,۰۰۰ / ماهانه',
    specs: ['4 Core', '8 GB RAM DDR4'],
    flag: '🇩🇪',
    image: 'https://picsum.photos/400/300?random=117'
  },
  {
    id: 'cs-go-tactical-pro',
    category: 'game',
    title: 'CS:GO - 128 Tick',
    description: 'مناسب مچ‌میکینگ',
    price: '۲۴۹,۰۰۰ / ماهانه',
    specs: ['4 Core', '8 GB RAM DDR4'],
    flag: '🇩🇪',
    image: 'https://picsum.photos/400/300?random=118'
  },
  {
    id: 'fivem-roleplay-core',
    category: 'game',
    title: 'FiveM - Roleplay Elite',
    description: 'پشتیبانی از اسکریپت‌های سنگین',
    price: '۸۹۹,۰۰۰ / ماهانه',
    specs: ['8 Core', '32 GB RAM DDR4'],
    flag: '🇳🇱',
    image: 'https://picsum.photos/400/300?random=119',
    isBestSeller: true
  },
  {
    id: 'samp-ultimate-pack',
    category: 'game',
    title: 'SAMP - High Slots',
    description: 'ظرفیت تا ۱۰۰۰ نفر',
    price: '۱۹۹,۰۰۰ / ماهانه',
    specs: ['2 Core', '4 GB RAM DDR4'],
    flag: '🇩🇪',
    image: 'https://picsum.photos/400/300?random=120'
  },
  {
    id: 'cs-16-classic-edition',
    category: 'game',
    title: 'CS 1.6 - Classic',
    description: 'پینگ پایین داخلی',
    price: '۹۹,۰۰۰ / ماهانه',
    specs: ['2 Core', '2 GB RAM DDR4'],
    flag: '🇩🇪',
    image: 'https://picsum.photos/400/300?random=121'
  },
  {
    id: 'cs-source-elite',
    category: 'game',
    title: 'CS: Source - Public',
    description: 'کانفیگ مسابقاتی',
    price: '۱۴۹,۰۰۰ / ماهانه',
    specs: ['2 Core', '4 GB RAM DDR4'],
    flag: '🇩🇪',
    image: 'https://picsum.photos/400/300?random=122'
  },
  {
    id: 'ark-survival-nexus',
    category: 'game',
    title: 'ARK - Survival Evolved',
    description: 'پشتیبانی از ماد',
    price: '۶۹۹,۰۰۰ / ماهانه',
    specs: ['6 Core', '24 GB RAM DDR4'],
    flag: '🇳🇱',
    image: 'https://picsum.photos/400/300?random=123'
  },
  {
    id: 'valheim-viking-shield',
    category: 'game',
    title: 'Valheim - Co-op',
    description: 'بازی بدون وقفه',
    price: '۱۹۹,۰۰۰ / ماهانه',
    specs: ['4 Core', '8 GB RAM DDR4'],
    flag: '🇩🇪',
    image: 'https://picsum.photos/400/300?random=124'
  },
  {
    id: 'gta-online-modded',
    category: 'game',
    title: 'GTA Online - Private',
    description: 'سرور خصوصی',
    price: '۵۹۹,۰۰۰ / ماهانه',
    specs: ['6 Core', '16 GB RAM DDR4'],
    flag: '🇳🇱',
    image: 'https://picsum.photos/400/300?random=125'
  },
  {
    id: 'minecraft-bedrock-pulse',
    category: 'game',
    title: 'Minecraft - Bedrock',
    description: 'مخصوص موبایل و کنسول',
    price: '۱۹۹,۰۰۰ / ماهانه',
    specs: ['2 Core', '4 GB RAM DDR4'],
    flag: '🇩🇪',
    image: 'https://picsum.photos/400/300?random=126'
  },
  {
    id: 'team-fortress-2-max',
    category: 'game',
    title: 'Team Fortress 2',
    description: 'سرور کامیونیتی',
    price: '۱۴۹,۰۰۰ / ماهانه',
    specs: ['2 Core', '4 GB RAM DDR4'],
    flag: '🇩🇪',
    image: 'https://picsum.photos/400/300?random=127'
  },

  // --- CLOUD / HOSTING ---
  {
    id: 'germany-hosting-deluxe',
    category: 'cloud',
    title: 'Web Hosting - cPanel NVMe',
    description: 'هاست پرسرعت آلمان',
    price: '۱۹۹,۰۰۰ / ماهانه',
    specs: ['cPanel', 'NVMe', 'LiteSpeed'],
    flag: '🇩🇪',
    image: 'https://picsum.photos/400/300?random=131',
    isBestSeller: true
  },
  {
    id: 'iran-linux-hosting-premium',
    category: 'cloud',
    title: 'Web Hosting - Iran Pro',
    description: 'هاست لینوکس ایران',
    price: '۹۹,۰۰۰ / ماهانه',
    specs: ['DirectAdmin', 'SSD', 'Iran'],
    flag: '🇮🇷',
    image: 'https://picsum.photos/400/300?random=135'
  },
  {
    id: 'cloud-backup-vault',
    category: 'cloud',
    title: 'Cloud Storage - S3',
    description: 'فضای ذخیره‌سازی ابری',
    price: '۹۹,۰۰۰ / ماهانه',
    specs: ['FTP/SFTP', 'Raid 10', 'Germany'],
    flag: '🇩🇪',
    image: 'https://picsum.photos/400/300?random=137'
  },
  {
    id: 'promail-email-hosting',
    category: 'cloud',
    title: 'Email Hosting - Business',
    description: 'سرویس ایمیل سازمانی',
    price: '۷۹,۰۰۰ / ماهانه',
    specs: ['Unlimited Alias', 'Spam Filter', 'Webmail'],
    flag: '🇩🇪',
    image: 'https://picsum.photos/400/300?random=139'
  },

  // --- DEDICATED / COLOCATION ---
  {
    id: 'colocation-prorack',
    category: 'dedicated',
    title: 'Colocation - Tier 3 DC',
    description: 'میزبانی سرور سخت‌افزاری',
    price: '۹۹۹,۰۰۰ / ماهانه',
    specs: ['1U Rack', '1Gbps Uplink', 'Power Included'],
    flag: '🇮🇷',
    image: 'https://picsum.photos/400/300?random=132'
  },

  // --- SERVICES ---
  {
    id: 'ip-rental-pro-service',
    category: 'services',
    title: 'Dedicated IP V4',
    description: 'آی‌پی اختصاصی تمیز',
    price: '۴۹,۰۰۰ / ماهانه',
    specs: ['Clean IP', 'Static', 'Global'],
    flag: '🌐',
    image: 'https://picsum.photos/400/300?random=129'
  },
  {
    id: 'teamspeak-botx-automation',
    category: 'services',
    title: 'TeamSpeak AudioBot',
    description: 'ربات موزیک ۲۴ ساعته',
    price: '۹۹,۰۰۰ / ماهانه',
    specs: ['24/7 Music', 'Management', 'Web Panel'],
    flag: '🇩🇪',
    image: 'https://picsum.photos/400/300?random=130'
  },
  {
    id: 'teamspeak-titan-server',
    category: 'services',
    title: 'TeamSpeak 3 Server',
    description: 'کیفیت صدای عالی',
    price: '۱۴۹,۰۰۰ / ماهانه',
    specs: ['Unlimited Slots', 'DDoS Prot', 'Low Ping'],
    flag: '🇩🇪',
    image: 'https://picsum.photos/400/300?random=133'
  },
  {
    id: 'teamspeak-reseller-plus',
    category: 'services',
    title: 'TeamSpeak Reseller',
    description: 'فروش سرویس تیم‌اسپیک',
    price: '۴۹۹,۰۰۰ / ماهانه',
    specs: ['YatQA Access', 'WhiteLabel', 'API'],
    flag: '🇩🇪',
    image: 'https://picsum.photos/400/300?random=134'
  },
  {
    id: 'firewall-protection-shield',
    category: 'services',
    title: 'WAF - Firewall',
    description: 'فایروال لایه ۷',
    price: '۱۹۹,۰۰۰ / ماهانه',
    specs: ['L7 Protection', 'WAF', 'Analytics'],
    flag: '🌐',
    image: 'https://picsum.photos/400/300?random=136'
  },
  {
    id: 'anti-ddos-maxguard',
    category: 'services',
    title: 'Anti-DDoS Enterprise',
    description: 'محافظت در برابر حملات',
    price: '۲۹۹,۰۰۰ / ماهانه',
    specs: ['Anycast', 'Inline Mitigation', '2Tbps+'],
    flag: '🌐',
    image: 'https://picsum.photos/400/300?random=138',
    isBestSeller: true
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'راهنمای جامع خرید سرور مجازی برای ترید',
    desc: 'چگونه بهترین IP ثابت را برای صرافی‌ها انتخاب کنیم؟',
    image: 'https://picsum.photos/400/250?random=201',
    date: '۱۰ بهمن ۱۴۰۲'
  },
  {
    id: 2,
    title: 'مقایسه NVMe و SSD در سرعت لود سایت',
    desc: 'تست سرعت واقعی در سرورهای لینوکسی',
    image: 'https://picsum.photos/400/250?random=202',
    date: '۵ بهمن ۱۴۰۲'
  },
  {
    id: 3,
    title: 'جلوگیری از حملات DDoS در سرور گیم',
    desc: 'معرفی بهترین فایروال‌ها برای MTA و FiveM',
    image: 'https://picsum.photos/400/250?random=203',
    date: '۱ بهمن ۱۴۰۲'
  }
];

export const TESTIMONIALS = [
  { name: 'علی محمدی', role: 'مدیر فنی استارتاپ', text: 'پشتیبانی آریاهاست واقعاً عالیه. ساعت ۳ صبح تیکت زدم و زیر ۱۰ دقیقه جواب گرفتم. کیفیت سرورهای آلمان هم برای بات تلگرام فوق‌العاده‌ست.' },
  { name: 'سارا کریمی', role: 'توسعه‌دهنده وب', text: 'سرعت هارد NVMe سرورهاشون رو تو هیچ شرکت ایرانی دیگه‌ای ندیدم. برای پروژه فروشگاهی سنگین ما خیلی خوب جواب داد.' },
  { name: 'رضا کاظمی', role: 'گیم سرور منیجر', text: 'پینگ سرورهای ایرانشون برای گیم عالیه. ما سرور MTA داریم و با ۳۰۰ تا پلیر اصلا لگ نداریم. دمشون گرم.' },
];

export const FAQS = [
  { q: 'تفاوت سرور مجازی و اختصاصی چیست؟', a: 'سرور مجازی (VPS) بخشی از یک سرور فیزیکی است که منابع آن اختصاصی شده اما هزینه کمتری دارد. سرور اختصاصی کل سخت‌افزار در اختیار شماست و برای پروژه‌های بزرگ مناسب است.' },
  { q: 'آیا امکان ارتقای سرویس وجود دارد؟', a: 'بله، شما در هر زمان می‌توانید از طریق پنل کاربری منابع سرور خود (رم، سی‌پی‌یو، هارد) را به صورت آنی ارتقا دهید.' },
  { q: 'آیا آی‌پی ثابت برای ترید ارائه می‌دهید؟', a: 'بله، سرورهای مجازی ما با آی‌پی ثابت و تمیز ارائه می‌شوند که برای فعالیت در بازارهای مالی و ترید کاملاً مناسب هستند.' },
  { q: 'گارانتی بازگشت وجه دارید؟', a: 'بله، در صورت عدم رضایت از کیفیت سرویس تا ۷ روز امکان بازگشت وجه طبق قوانین سایت وجود دارد.' },
];

export const DATACENTERS = [
  { name: 'Hetzner', country: 'Germany', flag: '🇩🇪' },
  { name: 'OVH', country: 'France', flag: '🇫🇷' },
  { name: 'Asiatech', country: 'Iran', flag: '🇮🇷' },
  { name: 'Pars Online', country: 'Iran', flag: '🇮🇷' },
  { name: 'Respina', country: 'Iran', flag: '🇮🇷' },
  { name: 'WorldStream', country: 'Netherlands', flag: '🇳🇱' },
];
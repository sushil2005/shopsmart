export const products = [
  {
    id: "samsung-galaxy-s25-ultra",
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    price: 1199,
    previousPrice: 1299,
    rating: 4.8,
    reviewCount: 342,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Next-generation titanium flagship with 200MP camera and Snapdragon 8 Elite.",
    description: "The Galaxy S25 Ultra combines aerospace-grade titanium with an advanced 200MP quad-telephoto camera array, an integrated S Pen, and the ultra-efficient Snapdragon 8 Elite processor. Features a dynamic AMOLED 2X display with anti-reflective glass.",
    features: [
      "Snapdragon 8 Elite 3nm mobile platform",
      "200MP main camera with 5x optical periscope zoom",
      "6.8-inch Dynamic AMOLED 2X 120Hz display",
      "Embedded S Pen with air gestures",
      "5000 mAh battery with 45W super fast charging"
    ],
    specifications: {
      processor: "Snapdragon 8 Elite",
      display: "6.8-inch QHD+ AMOLED 120Hz",
      battery: "5000 mAh",
      storage: "256GB / 512GB / 1TB",
      ram: "12GB / 16GB",
      camera: "200MP + 50MP + 50MP + 10MP",
      weight: "219 g",
      os: "Android 15 with One UI 7",
      connectivity: "5G, Wi-Fi 7, Bluetooth 5.4, UWB"
    },
    colors: [
      { name: "Titanium Black", hex: "#222222" },
      { name: "Titanium Silver", hex: "#C0C0C0" },
      { name: "Titanium Blue", hex: "#3B5998" }
    ],
    storage: ["256GB", "512GB", "1TB"],
    tags: ["flagship", "5G", "AMOLED", "S-Pen", "200MP"],
    availability: "In Stock",
    releaseDate: "2025-01-22",
    popularity: 98,
    seller: "Samsung Direct",
    priceHistory: [
      { month: "May", price: 1299 },
      { month: "Jun", price: 1299 },
      { month: "Jul", price: 1249 },
      { month: "Aug", price: 1249 },
      { month: "Sep", price: 1219 },
      { month: "Oct", price: 1199 }
    ],
    reviews: [
      { id: 1, user: "Marcus Vance", rating: 5, date: "2026-08-14", title: "Remarkable camera zoom and battery life", comment: "The telephoto sharpness is unmatched. The anti-reflective screen coating makes outdoor usage seamless." },
      { id: 2, user: "Elena Rostova", rating: 4, date: "2026-09-02", title: "Top-tier performance, slightly hefty", comment: "Speed and productivity with S Pen are unparalleled, though one-handed use takes some adjustment." },
      { id: 3, user: "David K.", rating: 5, date: "2026-09-24", title: "Exceptional day-to-day workhorse", comment: "Battery easily delivers 1.5 days of heavy mixed use. Fast charging is reliable." }
    ]
  },
  {
    id: "google-pixel-10-pro",
    name: "Google Pixel 10 Pro",
    brand: "Google",
    category: "Smartphones",
    price: 999,
    previousPrice: 1099,
    rating: 4.7,
    reviewCount: 285,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Clean Android experience powered by Google Tensor G5 and computational photography.",
    description: "Google Pixel 10 Pro delivers unadulterated Android 16 with the custom Tensor G5 chip, studio-grade triple camera system, and industry-leading computational image processing. Built with recycled aluminum and matte glass.",
    features: [
      "Custom Google Tensor G5 silicon",
      "Super Actua LTPO OLED with 3000 nits peak brightness",
      "Triple rear cameras with 5x optical telephoto",
      "7 years of OS upgrades and monthly feature drops",
      "Titan M3 security coprocessor"
    ],
    specifications: {
      processor: "Google Tensor G5",
      display: "6.7-inch Super Actua OLED 1-120Hz",
      battery: "5050 mAh",
      storage: "128GB / 256GB / 512GB",
      ram: "16GB",
      camera: "50MP + 48MP Ultrawide + 48MP Telephoto",
      weight: "213 g",
      os: "Stock Android 16",
      connectivity: "5G, Wi-Fi 7, Bluetooth 5.4"
    },
    colors: [
      { name: "Obsidian", hex: "#1A1A1A" },
      { name: "Porcelain", hex: "#F5F5F0" },
      { name: "Hazel", hex: "#8A9488" }
    ],
    storage: ["128GB", "256GB", "512GB"],
    tags: ["clean-android", "5G", "computational-photo", "OLED"],
    availability: "In Stock",
    releaseDate: "2025-08-15",
    popularity: 94,
    seller: "Google Store",
    priceHistory: [
      { month: "May", price: 1099 },
      { month: "Jun", price: 1099 },
      { month: "Jul", price: 1049 },
      { month: "Aug", price: 1029 },
      { month: "Sep", price: 999 },
      { month: "Oct", price: 999 }
    ],
    reviews: [
      { id: 1, user: "Sarah Jenkins", rating: 5, date: "2026-07-29", title: "Natural skin tones and night sight", comment: "The Pixel camera remains the king of candid family shots. Zero shutter lag." },
      { id: 2, user: "Liam Patel", rating: 4, date: "2026-08-18", title: "Clean software without bloatware", comment: "Zero third party duplicate apps. Smooth animations and crisp haptics." }
    ]
  },
  {
    id: "apple-iphone-17-pro",
    name: "Apple iPhone 17 Pro",
    brand: "Apple",
    category: "Smartphones",
    price: 1099,
    previousPrice: 1199,
    rating: 4.9,
    reviewCount: 420,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
    shortDescription: "A19 Pro silicon with titanium enclosure, ProMotion, and 48MP Fusion camera system.",
    description: "Engineered with forged grade 5 titanium, an ultra-fast A19 Pro chip, customizable Action button, and Camera Control sensor. The Super Retina XDR display offers always-on fluid scrolling up to 120Hz.",
    features: [
      "A19 Pro 2nm chip with 6-core GPU",
      "Camera Control capacitive touch sensor",
      "48MP Fusion and 48MP Ultra Wide lenses",
      "All-day battery life with Qi2 wireless charging",
      "Crash Detection and Emergency Satellite SOS"
    ],
    specifications: {
      processor: "Apple A19 Pro",
      display: "6.3-inch Super Retina XDR OLED 120Hz",
      battery: "3580 mAh",
      storage: "128GB / 256GB / 512GB / 1TB",
      ram: "8GB",
      camera: "48MP Main + 48MP Ultrawide + 12MP 5x Tele",
      weight: "199 g",
      os: "iOS 19",
      connectivity: "5G, Wi-Fi 7, Bluetooth 5.3, Thread"
    },
    colors: [
      { name: "Natural Titanium", hex: "#9F9D96" },
      { name: "Black Titanium", hex: "#2E2D2C" },
      { name: "Desert Titanium", hex: "#C7B299" }
    ],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    tags: ["apple", "iOS", "A19", "titanium", "ProMotion"],
    availability: "In Stock",
    releaseDate: "2025-09-20",
    popularity: 99,
    seller: "Apple Authorized",
    priceHistory: [
      { month: "May", price: 1199 },
      { month: "Jun", price: 1199 },
      { month: "Jul", price: 1149 },
      { month: "Aug", price: 1129 },
      { month: "Sep", price: 1099 },
      { month: "Oct", price: 1099 }
    ],
    reviews: [
      { id: 1, user: "Jessica Wong", rating: 5, date: "2026-08-11", title: "Incredible video recording capabilities", comment: "ProRes 4K at 120fps direct to external SSD is a game changer for content creators." },
      { id: 2, user: "Anthony Rossi", rating: 5, date: "2026-09-08", title: "Flawless ecosystem integration", comment: "Pairs seamlessly with Mac and Apple Watch. Titanium feel in hand is premium." }
    ]
  },
  {
    id: "oneplus-13",
    name: "OnePlus 13",
    brand: "OnePlus",
    category: "Smartphones",
    price: 799,
    previousPrice: 899,
    rating: 4.6,
    reviewCount: 198,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Ultra-fast charging flagship with Hasselblad camera tuning and massive 6000mAh battery.",
    description: "The OnePlus 13 pairs Qualcomm's flagship silicon with a staggering 6000mAh silicon-carbon battery and 100W SuperVOOC wired fast charging. Features Hasselblad Master Camera styling and an IP68/69 water resistance rating.",
    features: [
      "Snapdragon 8 Elite chipset",
      "6000mAh silicon-carbon dual-cell battery",
      "100W wired and 50W wireless charging",
      "Hasselblad Color Calibration generation 5",
      "Ultra-fluid 2K Oriental LTPO AMOLED screen"
    ],
    specifications: {
      processor: "Snapdragon 8 Elite",
      display: "6.82-inch 2K LTPO OLED 120Hz",
      battery: "6000 mAh",
      storage: "256GB / 512GB",
      ram: "12GB / 16GB / 24GB",
      camera: "50MP Sony LYT-808 + 50MP Ultra + 50MP Periscope",
      weight: "213 g",
      os: "OxygenOS 15 based on Android 15",
      connectivity: "5G, Wi-Fi 7, Bluetooth 5.4"
    },
    colors: [
      { name: "Midnight Ocean", hex: "#1C2D37" },
      { name: "Arctic Dawn", hex: "#EAEAEA" },
      { name: "Black Eclipse", hex: "#191919" }
    ],
    storage: ["256GB", "512GB"],
    tags: ["fast-charging", "5G", "Hasselblad", "6000mAh", "value-flagship"],
    availability: "In Stock",
    releaseDate: "2025-01-10",
    popularity: 91,
    seller: "OnePlus Direct",
    priceHistory: [
      { month: "May", price: 899 },
      { month: "Jun", price: 879 },
      { month: "Jul", price: 849 },
      { month: "Aug", price: 829 },
      { month: "Sep", price: 799 },
      { month: "Oct", price: 799 }
    ],
    reviews: [
      { id: 1, user: "Carlos Diaz", rating: 5, date: "2026-07-15", title: "Battery life that refuses to die", comment: "Easily gets 8-9 hours of active screen on time. Charges from 1% to 100% in under 30 minutes." },
      { id: 2, user: "Emily Clark", rating: 4, date: "2026-08-20", title: "Tremendous flagship value", comment: "Competes head-to-head with $1200 flagships for hundreds of dollars less." }
    ]
  },
  {
    id: "macbook-air-m3",
    name: "MacBook Air 15-inch M3",
    brand: "Apple",
    category: "Laptops",
    price: 1299,
    previousPrice: 1499,
    rating: 4.9,
    reviewCount: 512,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Impossibly thin design with Apple M3 silicon and up to 18 hours of silent battery life.",
    description: "The 15-inch MacBook Air gives you more room for what you love with a spacious Liquid Retina display. Powered by the M3 chip with hardware-accelerated ray tracing in a completely fanless, silent aluminum unibody.",
    features: [
      "Apple M3 8-core CPU with 10-core GPU",
      "Silent, completely fanless thermal design",
      "15.3-inch Liquid Retina display with True Tone",
      "Six-speaker sound system with Spatial Audio",
      "Up to 18 hours of real-world battery life"
    ],
    specifications: {
      processor: "Apple M3 (8-core CPU, 10-core GPU)",
      display: "15.3-inch Liquid Retina IPS (2880x1864)",
      battery: "66.5 Wh (Up to 18 hrs)",
      storage: "512GB SSD (Up to 2TB)",
      ram: "16GB Unified Memory",
      camera: "1080p FaceTime HD",
      weight: "1.51 kg (3.3 lbs)",
      os: "macOS Sonoma / Sequoia",
      connectivity: "Wi-Fi 6E, MagSafe 3, 2x Thunderbolt 4"
    },
    colors: [
      { name: "Midnight", hex: "#1C2430" },
      { name: "Starlight", hex: "#E5DEC9" },
      { name: "Space Gray", hex: "#75777B" },
      { name: "Silver", hex: "#E2E4E5" }
    ],
    storage: ["512GB", "1TB", "2TB"],
    tags: ["laptop", "macOS", "M3", "fanless", "ultrabook", "student"],
    availability: "In Stock",
    releaseDate: "2024-03-08",
    popularity: 97,
    seller: "Apple Store",
    priceHistory: [
      { month: "May", price: 1499 },
      { month: "Jun", price: 1449 },
      { month: "Jul", price: 1399 },
      { month: "Aug", price: 1349 },
      { month: "Sep", price: 1299 },
      { month: "Oct", price: 1299 }
    ],
    reviews: [
      { id: 1, user: "Daniel Sterling", rating: 5, date: "2026-06-18", title: "Best student and developer laptop", comment: "Compiles code quickly, battery lasts through two full university days without bringing a charger." },
      { id: 2, user: "Rachel Chen", rating: 5, date: "2026-07-22", title: "Dead silent and great speakers", comment: "No fan noise ever. The six speakers blow away almost any Windows laptop." }
    ]
  },
  {
    id: "dell-xps-15",
    name: "Dell XPS 15 9530",
    brand: "Dell",
    category: "Laptops",
    price: 1549,
    previousPrice: 1799,
    rating: 4.6,
    reviewCount: 230,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Premium creator workstation with 3.5K OLED touchscreen and NVIDIA RTX 4060 graphics.",
    description: "Crafted with CNC machined aluminum and aerospace carbon fiber palm rest. The Dell XPS 15 balances powerhouse performance with an immersive 16:10 OLED InfinityEdge display and dedicated RTX studio graphics.",
    features: [
      "Intel Core i7-13700H 14-core processor",
      "NVIDIA GeForce RTX 4060 8GB GDDR6",
      "15.6-inch 3.5K OLED 400-nit InfinityEdge touch",
      "Carbon fiber composite keyboard deck",
      "Quad-speaker design with Waves Nx 3D audio"
    ],
    specifications: {
      processor: "Intel Core i7-13700H (14 cores)",
      display: "15.6-inch 3.5K (3456x2160) OLED Touch",
      battery: "86 Wh (Up to 9 hrs)",
      storage: "1TB PCIe NVMe Gen 4 SSD",
      ram: "32GB DDR5 4800MHz",
      camera: "720p with dual-array mics",
      weight: "1.92 kg (4.23 lbs)",
      os: "Windows 11 Pro",
      connectivity: "Wi-Fi 6E, 2x Thunderbolt 4, SD card slot"
    },
    colors: [
      { name: "Platinum Silver", hex: "#D4D5D9" }
    ],
    storage: ["1TB", "2TB"],
    tags: ["creator", "OLED", "RTX-4060", "workstation", "Intel"],
    availability: "In Stock",
    releaseDate: "2024-05-15",
    popularity: 88,
    seller: "Dell Direct",
    priceHistory: [
      { month: "May", price: 1799 },
      { month: "Jun", price: 1749 },
      { month: "Jul", price: 1699 },
      { month: "Aug", price: 1599 },
      { month: "Sep", price: 1549 },
      { month: "Oct", price: 1549 }
    ],
    reviews: [
      { id: 1, user: "Nathan Drake", rating: 5, date: "2026-08-04", title: "Color precision is breathtaking", comment: "The 3.5K OLED covers 100% DCI-P3. Perfect for color grading in Premiere and DaVinci." },
      { id: 2, user: "Hannah Moore", rating: 4, date: "2026-09-12", title: "Solid machine, webcam could be 1080p", comment: "Build quality is top notch. Fans kick on during heavy renders, but stays cool." }
    ]
  },
  {
    id: "lenovo-yoga-9i",
    name: "Lenovo Yoga 9i 2-in-1",
    brand: "Lenovo",
    category: "Laptops",
    price: 1199,
    previousPrice: 1399,
    rating: 4.7,
    reviewCount: 174,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Versatile convertible laptop featuring rotating Bowers & Wilkins soundbar and PureSight OLED.",
    description: "The Lenovo Yoga 9i features a comfort-edge gem-cut contour, 360-degree rotating soundbar hinge engineered with Bowers & Wilkins speakers, and a dazzling 4K PureSight OLED touchscreen. Includes Lenovo Precision Pen 2.",
    features: [
      "Intel Core Ultra 7 155H Meteor Lake processor",
      "360-degree rotating soundbar with Dolby Atmos",
      "14-inch 2.8K 120Hz PureSight OLED touch display",
      "Included magnetic stylus with 4096 pressure levels",
      "Military-grade MIL-STD-810H durability"
    ],
    specifications: {
      processor: "Intel Core Ultra 7 155H",
      display: "14-inch 2.8K (2880x1800) OLED 120Hz Touch",
      battery: "75 Wh (Up to 11 hrs)",
      storage: "1TB M.2 NVMe SSD",
      ram: "16GB LPDDR5X",
      camera: "5MP IR webcam with privacy shutter",
      weight: "1.32 kg (2.91 lbs)",
      os: "Windows 11 Home",
      connectivity: "Wi-Fi 6E, 2x Thunderbolt 4, 1x USB-A"
    },
    colors: [
      { name: "Cosmic Blue", hex: "#1A2838" },
      { name: "Luna Grey", hex: "#87888C" }
    ],
    storage: ["512GB", "1TB"],
    tags: ["2-in-1", "touchscreen", "OLED", "stylus", "Intel-Core-Ultra"],
    availability: "In Stock",
    releaseDate: "2024-04-10",
    popularity: 87,
    seller: "Lenovo Direct",
    priceHistory: [
      { month: "May", price: 1399 },
      { month: "Jun", price: 1349 },
      { month: "Jul", price: 1299 },
      { month: "Aug", price: 1249 },
      { month: "Sep", price: 1199 },
      { month: "Oct", price: 1199 }
    ],
    reviews: [
      { id: 1, user: "Chloe Becker", rating: 5, date: "2026-08-01", title: "The soundbar hinge is pure genius", comment: "No matter whether you use it in tent mode or laptop mode, sound points straight at you." },
      { id: 2, user: "Zachary King", rating: 4, date: "2026-09-19", title: "Great digital sketching canvas", comment: "OLED display brings digital drawings to life. Precision pen glides effortlessly." }
    ]
  },
  {
    id: "asus-zenbook-14-oled",
    name: "ASUS Zenbook 14 OLED",
    brand: "ASUS",
    category: "Laptops",
    price: 899,
    previousPrice: 1049,
    rating: 4.8,
    reviewCount: 310,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Ultra-portable 1.2kg chassis with 3K 120Hz Lumina OLED and 15+ hour battery endurance.",
    description: "Sleek, lightweight, and durable, the Zenbook 14 OLED packs an Intel Core Ultra 7 processor and a 16:10 3K ASUS Lumina OLED panel into an all-metal chassis weighing only 1.2 kg. Excellent value for students and mobile professionals.",
    features: [
      "Intel Core Ultra 7 155H with Intel Arc Graphics",
      "14-inch 3K (2880x1800) Lumina OLED 120Hz 0.2ms",
      "Ultra-slim 14.9mm thickness, 1.2kg weight",
      "75Wh high-capacity battery with fast charge",
      "Harman Kardon certified audio with Smart Amplifier"
    ],
    specifications: {
      processor: "Intel Core Ultra 7 155H",
      display: "14.0-inch 3K OLED 120Hz 16:10",
      battery: "75 Wh (Up to 15 hrs)",
      storage: "1TB M.2 PCIe 4.0 SSD",
      ram: "16GB LPDDR5X",
      camera: "FHD IR camera with ambient light sensor",
      weight: "1.20 kg (2.65 lbs)",
      os: "Windows 11 Home",
      connectivity: "Wi-Fi 6E, 2x Thunderbolt 4, HDMI 2.1, USB-A"
    },
    colors: [
      { name: "Ponder Blue", hex: "#223140" },
      { name: "Foggy Silver", hex: "#C7CBD1" }
    ],
    storage: ["512GB", "1TB"],
    tags: ["ultrabook", "budget-flagship", "OLED", "portable", "student"],
    availability: "In Stock",
    releaseDate: "2024-02-18",
    popularity: 92,
    seller: "ASUS Official",
    priceHistory: [
      { month: "May", price: 1049 },
      { month: "Jun", price: 999 },
      { month: "Jul", price: 949 },
      { month: "Aug", price: 929 },
      { month: "Sep", price: 899 },
      { month: "Oct", price: 899 }
    ],
    reviews: [
      { id: 1, user: "Vikram Sen", rating: 5, date: "2026-07-10", title: "Unbeatable value for an OLED laptop", comment: "Under $1000 for this gorgeous screen and full day battery is unheard of. Keyboard is a joy to type on." },
      { id: 2, user: "Megan Foster", rating: 5, date: "2026-08-25", title: "Lightweight and fast", comment: "Carries in backpack without noticing the weight. HDMI port is super convenient for presentations." }
    ]
  },
  {
    id: "sony-wh-1000xm6",
    name: "Sony WH-1000XM6",
    brand: "Sony",
    category: "Headphones",
    price: 398,
    previousPrice: 449,
    rating: 4.9,
    reviewCount: 680,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Industry-defining noise cancellation with carbon-fiber dome drivers and 40-hour battery life.",
    description: "The Sony WH-1000XM6 sets a new benchmark in active noise cancellation with dual dedicated QN2 audio processors, 12 precision microphones, and custom carbon-composite 30mm drivers delivering studio-quality sound.",
    features: [
      "Dual HD Noise Cancelling Processor QN2",
      "Up to 40 hours of playback with ANC on",
      "Multipoint connection for two devices simultaneously",
      "Speak-to-Chat auto-pauses music during conversations",
      "LDAC high-resolution wireless audio codec"
    ],
    specifications: {
      driver: "30mm Carbon Composite Precision Dome",
      frequency: "4 Hz - 40,000 Hz",
      battery: "40 hours (ANC on) / 50 hours (ANC off)",
      charging: "USB-C quick charge (3 min for 3 hrs playback)",
      microphones: "12 beamforming mics with AI noise suppression",
      weight: "248 g",
      connectivity: "Bluetooth 5.4, Multipoint, 3.5mm jack",
      anc: "Adaptive Auto NC Optimizer"
    },
    colors: [
      { name: "Obsidian Black", hex: "#1C1C1C" },
      { name: "Silver Sand", hex: "#D3D0C9" },
      { name: "Midnight Navy", hex: "#1D2A44" }
    ],
    storage: ["N/A"],
    tags: ["ANC", "wireless", "audiophile", "travel", "LDAC"],
    availability: "In Stock",
    releaseDate: "2025-05-12",
    popularity: 98,
    seller: "Sony Direct",
    priceHistory: [
      { month: "May", price: 449 },
      { month: "Jun", price: 449 },
      { month: "Jul", price: 429 },
      { month: "Aug", price: 419 },
      { month: "Sep", price: 398 },
      { month: "Oct", price: 398 }
    ],
    reviews: [
      { id: 1, user: "Trevor Hall", rating: 5, date: "2026-08-03", title: "Complete silence on cross-country flights", comment: "Engine rumble simply disappears. Ear cushions are plusher than the XM5." },
      { id: 2, user: "Sophia Lin", rating: 5, date: "2026-08-28", title: "Call quality in noisy cafes is pristine", comment: "People on Zoom thought I was in a quiet recording studio." }
    ]
  },
  {
    id: "bose-quietcomfort-ultra",
    name: "Bose QuietComfort Ultra",
    brand: "Bose",
    category: "Headphones",
    price: 379,
    previousPrice: 429,
    rating: 4.8,
    reviewCount: 415,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Spatial audio with Bose Immersive Audio, world-class quiet, and plush ergonomic comfort.",
    description: "Bose QuietComfort Ultra headphones transform what you hear by taking sound out of your head and placing it in front of you. Features CustomTune sound calibration tailored to your ear shape and ultra-soft synthetic leather cushions.",
    features: [
      "Bose Immersive Audio spatial sound technology",
      "CustomTune technology adapts audio to ear shape",
      "Quiet Mode, Aware Mode, and Immersion Mode",
      "Up to 24 hours of playback (18 hrs with Immersive)",
      "Fold-flat travel design with protective hardshell case"
    ],
    specifications: {
      driver: "Custom Bose Acoustic Transducer",
      frequency: "10 Hz - 20,000 Hz",
      battery: "24 hours (18 hours with Immersive Audio)",
      charging: "USB-C (15 min for 2.5 hrs playback)",
      microphones: "Advanced array with voice pickup",
      weight: "253 g",
      connectivity: "Bluetooth 5.3, Snapdragon Sound, 2.5 to 3.5mm",
      anc: "Bose CustomTune Active Noise Cancelling"
    },
    colors: [
      { name: "Black", hex: "#1A1A1A" },
      { name: "White Smoke", hex: "#E6E6E6" },
      { name: "Sandstone", hex: "#D6C6B2" }
    ],
    storage: ["N/A"],
    tags: ["ANC", "Bose", "comfort", "spatial-audio", "travel"],
    availability: "In Stock",
    releaseDate: "2023-10-15",
    popularity: 93,
    seller: "Bose Official",
    priceHistory: [
      { month: "May", price: 429 },
      { month: "Jun", price: 419 },
      { month: "Jul", price: 399 },
      { month: "Aug", price: 389 },
      { month: "Sep", price: 379 },
      { month: "Oct", price: 379 }
    ],
    reviews: [
      { id: 1, user: "Benjamin Cox", rating: 5, date: "2026-07-21", title: "Unrivaled headband comfort", comment: "I wear these 8 hours a day for work without any head pinching or ear fatigue." },
      { id: 2, user: "Olivia Taylor", rating: 4, date: "2026-08-30", title: "Spatial audio is mesmerizing", comment: "Live concert albums feel like you are standing in the tenth row center." }
    ]
  },
  {
    id: "apple-airpods-pro-2",
    name: "Apple AirPods Pro 2 (USB-C)",
    brand: "Apple",
    category: "Headphones",
    price: 219,
    previousPrice: 249,
    rating: 4.8,
    reviewCount: 920,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Pro-level Active Noise Cancellation with Adaptive Audio, USB-C MagSafe case, and H2 chip.",
    description: "Up to 2x more Active Noise Cancellation than the previous generation, plus Adaptive Audio that tailors noise control to your environment. Features clinical-grade Hearing Aid capabilities and Personalized Spatial Audio.",
    features: [
      "Apple H2 headphone chip and custom low-distortion driver",
      "Adaptive Audio dynamically blends ANC and Transparency",
      "Lanyard loop, built-in speaker, and Precision Finding case",
      "Up to 6 hours listening on single charge (30 hrs with case)",
      "IP54 dust, sweat, and water resistance"
    ],
    specifications: {
      driver: "Custom high-excursion Apple driver",
      frequency: "20 Hz - 20,000 Hz",
      battery: "6 hours earbuds / 30 hours with case",
      charging: "USB-C, MagSafe, Apple Watch charger, Qi",
      microphones: "Dual beamforming + inward-facing mic",
      weight: "5.3 g per bud, 50.8 g case",
      connectivity: "Bluetooth 5.3",
      anc: "H2 Computational Noise Cancelling"
    },
    colors: [
      { name: "White", hex: "#FFFFFF" }
    ],
    storage: ["N/A"],
    tags: ["earbuds", "wireless", "ANC", "Apple", "pocketable"],
    availability: "In Stock",
    releaseDate: "2023-09-22",
    popularity: 99,
    seller: "Apple Direct",
    priceHistory: [
      { month: "May", price: 249 },
      { month: "Jun", price: 239 },
      { month: "Jul", price: 229 },
      { month: "Aug", price: 229 },
      { month: "Sep", price: 219 },
      { month: "Oct", price: 219 }
    ],
    reviews: [
      { id: 1, user: "Lucas Scott", rating: 5, date: "2026-08-16", title: "Transparency mode sounds like nothing is in your ear", comment: "No other in-ear earbuds come close to Apple's natural transparency sound." },
      { id: 2, user: "Amara Okonkwo", rating: 5, date: "2026-09-05", title: "Pocket-sized everyday companion", comment: "Fits in the coin pocket of jeans. Case speaker makes locating it via Find My easy." }
    ]
  },
  {
    id: "sennheiser-momentum-4",
    name: "Sennheiser Momentum 4 Wireless",
    brand: "Sennheiser",
    category: "Headphones",
    price: 299,
    previousPrice: 379,
    rating: 4.7,
    reviewCount: 312,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Audiophile-inspired 42mm sound signature with unmatched 60-hour marathon battery life.",
    description: "Enjoy best-in-class audio dynamics with Sennheiser's audiophile-inspired 42mm transducer system. The Momentum 4 delivers deep musicality with an astounding 60 hours of playtime on a single charge.",
    features: [
      "42mm audiophile transducer system",
      "Unbelievable 60-hour battery life with ANC enabled",
      "Adaptive Noise Cancellation with Transparency Mode",
      "Customizable sound zones and built-in 5-band EQ",
      "Smart Pause and Auto On/Off convenience"
    ],
    specifications: {
      driver: "42mm Dynamic Transducer",
      frequency: "6 Hz - 22,000 Hz",
      battery: "60 hours (Bluetooth and ANC)",
      charging: "USB-C (10 min for 6 hrs playback)",
      microphones: "2x2 digital beamforming array",
      weight: "293 g",
      connectivity: "Bluetooth 5.2, aptX Adaptive, AAC, SBC",
      anc: "Hybrid Adaptive ANC"
    },
    colors: [
      { name: "Black / Copper", hex: "#1A1A1A" },
      { name: "White / Silver", hex: "#F0F0EE" },
      { name: "Denim Blue", hex: "#2C3E50" }
    ],
    storage: ["N/A"],
    tags: ["audiophile", "60hr-battery", "Sennheiser", "ANC", "wireless"],
    availability: "In Stock",
    releaseDate: "2023-08-25",
    popularity: 90,
    seller: "AudioDirect",
    priceHistory: [
      { month: "May", price: 379 },
      { month: "Jun", price: 349 },
      { month: "Jul", price: 329 },
      { month: "Aug", price: 319 },
      { month: "Sep", price: 299 },
      { month: "Oct", price: 299 }
    ],
    reviews: [
      { id: 1, user: "Gary Thorne", rating: 5, date: "2026-07-19", title: "I only charge these once a month", comment: "The 60 hour battery claim is 100% genuine. Sound clarity in the acoustic mids is glorious." },
      { id: 2, user: "Mia Lindqvist", rating: 4, date: "2026-08-27", title: "Warm, rich musical bass", comment: "Very musical tuning compared to clinical competitors. Ear cups seal nicely." }
    ]
  },
  {
    id: "apple-watch-series-10",
    name: "Apple Watch Series 10",
    brand: "Apple",
    category: "Smartwatches",
    price: 399,
    previousPrice: 429,
    rating: 4.8,
    reviewCount: 388,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Thinnest Apple Watch ever with larger wide-angle OLED display and sleep apnea detection.",
    description: "Featuring a 10% thinner chassis, titanium or polished aluminum finishes, and a wide-angle OLED screen that is up to 40% brighter when viewed from an angle. Comprehensive ECG, blood oxygen, water depth gauge, and sleep apnea metrics.",
    features: [
      "Wide-angle Always-On Retina OLED display",
      "S10 SiP with 4-core Neural Engine",
      "Depth and water temperature sensor down to 6m",
      "Faster charging: 0 to 80% in about 30 minutes",
      "Sleep apnea notifications and vital signs tracking"
    ],
    specifications: {
      caseSize: "42mm / 46mm",
      display: "Wide-Angle OLED with LTPO3",
      battery: "18 hours normal / 36 hours Low Power",
      charging: "Magnetic Fast Charger USB-C (80% in 30 min)",
      sensors: "Electrical heart (ECG), optical heart, temp, depth",
      weight: "30.0 g (42mm Aluminum)",
      os: "watchOS 11",
      waterResistance: "50 meters (Swimproof)"
    },
    colors: [
      { name: "Jet Black", hex: "#0E0E0E" },
      { name: "Rose Gold", hex: "#B76E79" },
      { name: "Silver", hex: "#D6D6D6" }
    ],
    storage: ["64GB"],
    tags: ["smartwatch", "fitness", "ECG", "Apple", "swimproof"],
    availability: "In Stock",
    releaseDate: "2024-09-20",
    popularity: 96,
    seller: "Apple Store",
    priceHistory: [
      { month: "May", price: 429 },
      { month: "Jun", price: 429 },
      { month: "Jul", price: 419 },
      { month: "Aug", price: 409 },
      { month: "Sep", price: 399 },
      { month: "Oct", price: 399 }
    ],
    reviews: [
      { id: 1, user: "Jason Perez", rating: 5, date: "2026-08-09", title: "Noticeably thinner on the wrist", comment: "Slides under dress shirt cuffs effortlessly. The black polished mirror finish is gorgeous." },
      { id: 2, user: "Zoe Campbell", rating: 5, date: "2026-09-14", title: "Charging speed makes sleep tracking easy", comment: "Throw it on the puck while showering in the morning and it is fully charged." }
    ]
  },
  {
    id: "samsung-galaxy-watch-7",
    name: "Samsung Galaxy Watch 7",
    brand: "Samsung",
    category: "Smartwatches",
    price: 299,
    previousPrice: 349,
    rating: 4.6,
    reviewCount: 224,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
    shortDescription: "3nm Exynos processor with dual-frequency GPS and advanced metabolic index monitoring.",
    description: "The Galaxy Watch 7 introduces the 3nm Exynos W1000 chipset for 3x faster app launching, precision dual-frequency L1+L5 GPS for outdoor running, and the upgraded BioActive Sensor tracking AGEs metabolic index.",
    features: [
      "Exynos W1000 3nm 5-core processor",
      "Dual-frequency L1 + L5 precision GPS",
      "Enhanced BioActive Sensor with metabolic index",
      "Energy Score calculated from sleep and HRV",
      "Sapphire crystal glass screen protection"
    ],
    specifications: {
      caseSize: "40mm / 44mm",
      display: "1.5-inch Super AMOLED (480x480) Sapphire",
      battery: "425 mAh (Up to 40 hours)",
      charging: "Fast Wireless Charging (WPC-based)",
      sensors: "BioActive (ECG, BIA, HR), temp, Barometer",
      weight: "33.8 g",
      os: "Wear OS 5 with One UI 6 Watch",
      waterResistance: "5ATM + IP68 / MIL-STD-810H"
    },
    colors: [
      { name: "Green", hex: "#354A3B" },
      { name: "Silver", hex: "#D2D6DC" },
      { name: "Cream", hex: "#F3EDE2" }
    ],
    storage: ["32GB"],
    tags: ["smartwatch", "WearOS", "GPS", "body-composition", "Samsung"],
    availability: "In Stock",
    releaseDate: "2024-07-24",
    popularity: 89,
    seller: "Samsung Direct",
    priceHistory: [
      { month: "May", price: 349 },
      { month: "Jun", price: 339 },
      { month: "Jul", price: 329 },
      { month: "Aug", price: 309 },
      { month: "Sep", price: 299 },
      { month: "Oct", price: 299 }
    ],
    reviews: [
      { id: 1, user: "Darren Boyd", rating: 5, date: "2026-07-27", title: "Dual GPS is dead accurate on forest trails", comment: "Pacing and distance match dedicated Garmin watches on my 10k routes." },
      { id: 2, user: "Samantha Lee", rating: 4, date: "2026-08-31", title: "Body composition analysis is insightful", comment: "Quick 15-second impedance test on side buttons gives skeletal muscle and body fat estimates." }
    ]
  },
  {
    id: "google-pixel-watch-3",
    name: "Google Pixel Watch 3",
    brand: "Google",
    category: "Smartwatches",
    price: 349,
    previousPrice: 399,
    rating: 4.7,
    reviewCount: 195,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Actua dome display with 2000 nits, Loss of Pulse Detection, and deep Fitbit readiness.",
    description: "Available in both 41mm and 45mm sizes, Pixel Watch 3 features a bezel 16% smaller and peak brightness of 2000 nits. Deep integration with Fitbit premium guidance, cardio load metrics, and emergency Loss of Pulse detection.",
    features: [
      "Actua AMOLED display peaking at 2000 nits (drops to 1 nit)",
      "Cardio Load, Target Load, and Morning Readiness",
      "Loss of Pulse automatic emergency alerting",
      "Real-time running cadence and stride analysis",
      "Nest Cam and Pixel camera remote integration"
    ],
    specifications: {
      caseSize: "41mm / 45mm",
      display: "Custom 3D Corning Gorilla Glass Actua AMOLED",
      battery: "307 mAh (Up to 24 hrs Always-On / 36 hrs Saver)",
      charging: "USB-C fast charging magnetic dock",
      sensors: "cEDA stress, ECG, SpO2, Skin Temp, Altimeter",
      weight: "37 g (45mm without band)",
      os: "Wear OS 5.0",
      waterResistance: "50 meters (5 ATM)"
    },
    colors: [
      { name: "Matte Black", hex: "#1C1C1C" },
      { name: "Polished Silver", hex: "#E0E0E0" },
      { name: "Champagne Gold", hex: "#D8C6A5" }
    ],
    storage: ["32GB eMMC"],
    tags: ["Fitbit", "Pixel", "health", "smartwatch", "running"],
    availability: "In Stock",
    releaseDate: "2024-09-10",
    popularity: 91,
    seller: "Google Store",
    priceHistory: [
      { month: "May", price: 399 },
      { month: "Jun", price: 389 },
      { month: "Jul", price: 369 },
      { month: "Aug", price: 359 },
      { month: "Sep", price: 349 },
      { month: "Oct", price: 349 }
    ],
    reviews: [
      { id: 1, user: "Julian Weber", rating: 5, date: "2026-08-14", title: "The 45mm size is finally what Pixel Watch needed", comment: "Text is much more readable. The curved glass feels like a smooth river pebble." },
      { id: 2, user: "Kaitlyn Ross", rating: 4, date: "2026-09-22", title: "Target cardio load keeps me on track", comment: "Morning readiness score prevents overtraining on sore days." }
    ]
  },
  {
    id: "garmin-venu-3",
    name: "Garmin Venu 3 GPS Smartwatch",
    brand: "Garmin",
    category: "Smartwatches",
    price: 449,
    previousPrice: 499,
    rating: 4.9,
    reviewCount: 360,
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Purpose-built GPS fitness smartwatch with 14-day battery life, sleep coaching, and speaker.",
    description: "Engineered for active lifestyles, the Garmin Venu 3 features up to 14 days of battery life without daily charging anxiety. Includes built-in speaker and microphone for phone calls, nap tracking, wheelchair mode, and Garmin Body Battery.",
    features: [
      "Up to 14 days battery life in smartwatch mode",
      "Bright 1.4-inch AMOLED touchscreen with Corning Gorilla Glass 3",
      "Built-in speaker and mic for wrist calls and voice assistant",
      "Sleep Coach, nap detection, and Body Battery energy monitoring",
      "30+ preloaded GPS indoor and outdoor sports apps"
    ],
    specifications: {
      caseSize: "45mm",
      display: "1.4-inch AMOLED (454x454) Always-On",
      battery: "Up to 14 days smartwatch / 26 hrs GPS",
      charging: "Garmin proprietary clip charger",
      sensors: "Elevate Gen 5 HR, Pulse Ox, Compass, Gyro, Barometer",
      weight: "46 g with silicone band",
      os: "Garmin OS",
      waterResistance: "5 ATM (Swim, shower, dive-resistant)"
    },
    colors: [
      { name: "Slate / Black", hex: "#222222" },
      { name: "Silver / Whitestone", hex: "#EAEAEA" }
    ],
    storage: ["8GB Music storage"],
    tags: ["Garmin", "14-day-battery", "fitness", "triathlon", "endurance"],
    availability: "In Stock",
    releaseDate: "2023-08-30",
    popularity: 95,
    seller: "Garmin Official",
    priceHistory: [
      { month: "May", price: 499 },
      { month: "Jun", price: 489 },
      { month: "Jul", price: 469 },
      { month: "Aug", price: 459 },
      { month: "Sep", price: 449 },
      { month: "Oct", price: 449 }
    ],
    reviews: [
      { id: 1, user: "Erik Lind", rating: 5, date: "2026-07-25", title: "Say goodbye to charging every single night", comment: "I went on a two-week vacation without packing the charger and still had 25% battery left." },
      { id: 2, user: "Claire Dupont", rating: 5, date: "2026-08-19", title: "Body Battery helped me spot fatigue", comment: "Extremely accurate correlation between how rested I feel and what the watch reads." }
    ]
  },
  {
    id: "sony-alpha-7-iv",
    name: "Sony Alpha 7 IV Full-Frame Camera",
    brand: "Sony",
    category: "Cameras",
    price: 2299,
    previousPrice: 2499,
    rating: 4.9,
    reviewCount: 340,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    shortDescription: "33MP Exmor R back-illuminated sensor with 4K 60p 10-bit 4:2:2 and AI subject tracking.",
    description: "The benchmark hybrid full-frame camera. Combining 33MP high-resolution photography with broadcast-grade 4K 60p 10-bit video, real-time eye autofocus for humans, animals, and birds, and 5.5-step optical image stabilization.",
    features: [
      "33MP Full-Frame Exmor R CMOS sensor",
      "BIONZ XR image processing engine with 8x speed",
      "759 phase-detection AF points covering 94% frame",
      "4K 60p 10-bit 4:2:2 video with S-Cinetone profile",
      "Side-opening vari-angle LCD touchscreen"
    ],
    specifications: {
      sensor: "33.0 MP 35mm Full-Frame (35.9 x 23.9 mm)",
      mount: "Sony E-mount",
      video: "4K 60p, FHD 120p, 10-bit 4:2:2 All-Intra",
      viewfinder: "3.68 million-dot Quad-VGA OLED",
      stabilization: "5-axis in-body optical (5.5 stops)",
      weight: "658 g (body with battery)",
      storage: "Dual slots (CFexpress Type A / SD UHS-II)",
      connectivity: "Wi-Fi 5GHz, USB 3.2 Gen 2 (10Gbps), HDMI"
    },
    colors: [
      { name: "Matte Black", hex: "#111111" }
    ],
    storage: ["Body Only"],
    tags: ["camera", "full-frame", "hybrid", "4K60", "creator"],
    availability: "In Stock",
    releaseDate: "2023-01-15",
    popularity: 94,
    seller: "ProPhoto Hub",
    priceHistory: [
      { month: "May", price: 2499 },
      { month: "Jun", price: 2399 },
      { month: "Jul", price: 2349 },
      { month: "Aug", price: 2299 },
      { month: "Sep", price: 2299 },
      { month: "Oct", price: 2299 }
    ],
    reviews: [
      { id: 1, user: "Mateo Alvarez", rating: 5, date: "2026-08-07", title: "The autofocus feels like telepathy", comment: "Real-time eye tracking locks on running toddlers and pets without losing focus." },
      { id: 2, user: "Chloe Martin", rating: 5, date: "2026-09-18", title: "Unbeatable workhorse for wedding filmers", comment: "Dual slots and S-Cinetone colors out of camera cut post-production color grading time in half." }
    ]
  },
  {
    id: "fujifilm-x-t5",
    name: "Fujifilm X-T5 Mirrorless Camera",
    brand: "Fujifilm",
    category: "Cameras",
    price: 1699,
    previousPrice: 1799,
    rating: 4.8,
    reviewCount: 290,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",
    shortDescription: "40.2MP X-Trans CMOS 5 HR sensor with classic tactile analog dials and film simulations.",
    description: "A photographer's pure joy. The Fujifilm X-T5 houses a 40.2-megapixel sensor in a compact, weather-sealed retro body with dedicated mechanical dials for shutter speed, ISO, and exposure compensation. Includes 19 film simulation modes.",
    features: [
      "40.2MP APS-C X-Trans CMOS 5 HR sensor",
      "7.0-stop 5-axis in-body image stabilization",
      "19 iconic Fujifilm film simulation color recipes",
      "Tactile mechanical dials for ISO, shutter, and compensation",
      "Three-way tilting LCD monitor with 1.84 million dots"
    ],
    specifications: {
      sensor: "40.2 MP APS-C X-Trans 5 (23.5 x 15.6 mm)",
      mount: "Fujifilm X-mount",
      video: "6.2K 30p, 4K 60p, 10-bit 4:2:2 internal",
      viewfinder: "3.69 million-dot OLED 0.8x magnification",
      stabilization: "5-axis in-body optical (up to 7.0 stops)",
      weight: "557 g (body with battery)",
      storage: "Dual SD UHS-II slots",
      connectivity: "Wi-Fi, Bluetooth 4.2, USB-C 3.2 Gen 2"
    },
    colors: [
      { name: "Silver & Black", hex: "#C5C5C5" },
      { name: "Black", hex: "#151515" }
    ],
    storage: ["Body Only"],
    tags: ["camera", "retro", "film-simulation", "40MP", "Fujifilm"],
    availability: "In Stock",
    releaseDate: "2023-04-12",
    popularity: 92,
    seller: "CameraCraft",
    priceHistory: [
      { month: "May", price: 1799 },
      { month: "Jun", price: 1769 },
      { month: "Jul", price: 1749 },
      { month: "Aug", price: 1719 },
      { month: "Sep", price: 1699 },
      { month: "Oct", price: 1699 }
    ],
    reviews: [
      { id: 1, user: "Arthur Pendelton", rating: 5, date: "2026-07-14", title: "Film recipes make editing unnecessary", comment: "Classic Chrome and Nostalgic Neg produce straight out of camera JPEGs that look straight out of 1970s print film." },
      { id: 2, user: "Naomi Watts", rating: 4, date: "2026-08-22", title: "Dials make shooting intuitive", comment: "Being able to check shutter and ISO before even turning the camera on is unbeatable." }
    ]
  },
  {
    id: "sony-playstation-5-pro",
    name: "Sony PlayStation 5 Pro",
    brand: "Sony",
    category: "Gaming",
    price: 699,
    previousPrice: 749,
    rating: 4.8,
    reviewCount: 450,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
    shortDescription: "PlayStation Spectral Super Resolution (PSSR) with upgraded 67% larger GPU compute.",
    description: "Play your favorite PS5 games with the sharpest image fidelity and highest framerates available on console. Features PlayStation Spectral Super Resolution AI upscaling, advanced ray tracing hardware, and a spacious 2TB internal SSD.",
    features: [
      "PlayStation Spectral Super Resolution (PSSR) AI upscaling",
      "Upgraded GPU with 67% more compute units",
      "Advanced Ray Tracing delivering 2x-3x ray calculation speeds",
      "2TB ultra-fast internal solid state storage",
      "DualSense wireless controller with adaptive triggers"
    ],
    specifications: {
      processor: "AMD Zen 2 (8 cores / 16 threads, up to 3.85GHz)",
      gpu: "RDNA-based GPU with 16.7 TFLOPs compute",
      storage: "2TB Custom NVMe SSD (Expandable M.2)",
      ram: "16GB GDDR6 + 2GB DDR5 system",
      videoOutput: "HDMI 2.1, 4K 120Hz, 8K, VRR, ALLM",
      weight: "3.1 kg",
      connectivity: "Wi-Fi 7, Bluetooth 5.1, 2x USB-C front"
    },
    colors: [
      { name: "White & Black", hex: "#F3F3F3" }
    ],
    storage: ["2TB SSD"],
    tags: ["gaming", "console", "PSSR", "4K120", "ray-tracing"],
    availability: "In Stock",
    releaseDate: "2024-11-07",
    popularity: 97,
    seller: "PlayStation Direct",
    priceHistory: [
      { month: "May", price: 749 },
      { month: "Jun", price: 749 },
      { month: "Jul", price: 729 },
      { month: "Aug", price: 719 },
      { month: "Sep", price: 699 },
      { month: "Oct", price: 699 }
    ],
    reviews: [
      { id: 1, user: "Kyle Broflovski", rating: 5, date: "2026-08-10", title: "No more choosing between Performance and Fidelity", comment: "You get 60fps locked with full native ray tracing reflections in Spider-Man 2 and Gran Turismo 7." },
      { id: 2, user: "Simon Riley", rating: 4, date: "2026-09-03", title: "Smooth and silent console", comment: "The 2TB drive holds plenty of 100GB games. Fans are barely audible even in hot rooms." }
    ]
  },
  {
    id: "asus-rog-ally-x",
    name: "ASUS ROG Ally X Gaming Handheld",
    brand: "ASUS",
    category: "Gaming",
    price: 799,
    previousPrice: 849,
    rating: 4.7,
    reviewCount: 260,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Handheld PC powerhouse with 80Wh battery, 24GB LPDDR5X RAM, and AMD Ryzen Z1 Extreme.",
    description: "The ROG Ally X redefines PC gaming on the go with double the battery capacity (80Wh), redesigned ergonomic grips with Hall Effect joysticks, 24GB of ultra-fast 7500MHz RAM, and two full USB-C ports including Thunderbolt 4.",
    features: [
      "AMD Ryzen Z1 Extreme with 8 cores and RDNA 3 graphics",
      "Massive 80Wh battery for 3-4x longer gaming sessions",
      "24GB dual-channel 7500MHz LPDDR5X RAM",
      "7-inch 1080p 120Hz FreeSync Premium IPS screen",
      "Hall Effect joysticks immune to stick drift"
    ],
    specifications: {
      processor: "AMD Ryzen Z1 Extreme (8C/16T, up to 5.1GHz)",
      display: "7-inch FHD (1920x1080) 120Hz 500 nits FreeSync",
      battery: "80 Wh 4-cell Li-ion",
      storage: "1TB M.2 2280 PCIe 4.0 NVMe SSD",
      ram: "24GB LPDDR5X-7500",
      controls: "Hall effect triggers & sticks, haptics, gyro",
      weight: "678 g",
      os: "Windows 11 Home with Armoury Crate SE",
      connectivity: "Wi-Fi 6E, USB-C 4 (Thunderbolt 4), USB-C 3.2, MicroSD"
    },
    colors: [
      { name: "Matte Black", hex: "#1A1A1A" }
    ],
    storage: ["1TB SSD"],
    tags: ["handheld", "PC-gaming", "Steam", "Ryzen-Z1", "80Wh"],
    availability: "In Stock",
    releaseDate: "2024-07-22",
    popularity: 91,
    seller: "ASUS Gaming Store",
    priceHistory: [
      { month: "May", price: 849 },
      { month: "Jun", price: 829 },
      { month: "Jul", price: 819 },
      { month: "Aug", price: 799 },
      { month: "Sep", price: 799 },
      { month: "Oct", price: 799 }
    ],
    reviews: [
      { id: 1, user: "Devon Miller", rating: 5, date: "2026-07-29", title: "Finally a handheld PC with battery that lasts", comment: "I get 3.5 hours on Cyberpunk and 7+ hours on Hades and indie games. Absolute perfection." },
      { id: 2, user: "Tanya Belova", rating: 4, date: "2026-08-25", title: "Hall effect sticks feel butter smooth", comment: "No fear of stick drift down the road. Screen variable refresh rate prevents tearing." }
    ]
  },
  {
    id: "logitech-mx-master-3s",
    name: "Logitech MX Master 3S Mouse",
    brand: "Logitech",
    category: "Accessories",
    price: 99,
    previousPrice: 119,
    rating: 4.9,
    reviewCount: 1420,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Quiet clicks and 8K DPI any-surface track sensor with MagSpeed electromagnetic scrolling.",
    description: "An iconic productivity weapon. The MX Master 3S introduces Quiet Click switches reducing click sound by 90%, an 8000 DPI track-on-glass optical sensor, and the MagSpeed electromagnetic scroll wheel capable of scrolling 1000 lines a second.",
    features: [
      "MagSpeed electromagnetic scroll wheel with smart-shift",
      "8000 DPI darkfield sensor tracks on glass surfaces",
      "Quiet Click switches with 90% acoustic noise reduction",
      "Thumb wheel and gesture button for horizontal navigation",
      "Connect up to 3 devices via Bluetooth or Logi Bolt"
    ],
    specifications: {
      sensor: "Darkfield High Precision (200 - 8000 DPI)",
      battery: "500 mAh rechargeable (Up to 70 days per charge)",
      charging: "USB-C quick charge (1 min for 3 hrs use)",
      buttons: "7 customizable buttons including thumb wheel",
      weight: "141 g",
      connectivity: "Bluetooth Low Energy & Logi Bolt USB receiver",
      compatibility: "macOS, Windows, Linux, iPadOS, ChromeOS"
    },
    colors: [
      { name: "Graphite", hex: "#2E3033" },
      { name: "Pale Grey", hex: "#E3E4E8" }
    ],
    storage: ["N/A"],
    tags: ["mouse", "productivity", "ergonomic", "MagSpeed", "quiet"],
    availability: "In Stock",
    releaseDate: "2023-06-01",
    popularity: 99,
    seller: "Logitech Direct",
    priceHistory: [
      { month: "May", price: 119 },
      { month: "Jun", price: 119 },
      { month: "Jul", price: 109 },
      { month: "Aug", price: 109 },
      { month: "Sep", price: 99 },
      { month: "Oct", price: 99 }
    ],
    reviews: [
      { id: 1, user: "Philip Huang", rating: 5, date: "2026-08-02", title: "Will never use a standard mouse again", comment: "The horizontal thumb wheel for wide Excel sheets and video timelines is an absolute essential." },
      { id: 2, user: "Amber Davies", rating: 5, date: "2026-08-29", title: "Near silent clicks are so pleasant", comment: "Can click rapidly during conference calls without colleagues hearing a thing." }
    ]
  },
  {
    id: "sonos-era-300",
    name: "Sonos Era 300 Smart Speaker",
    brand: "Sonos",
    category: "Home Tech",
    price: 449,
    previousPrice: 499,
    rating: 4.8,
    reviewCount: 380,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Acoustically revolutionary speaker built for Dolby Atmos spatial audio from all angles.",
    description: "Featuring six optimally positioned drivers all around the front, sides, and top to support Dolby Atmos Music, the Era 300 bounces sound from wall to wall and floor to ceiling. Includes Trueplay room tuning and Bluetooth line-in support.",
    features: [
      "Six class-D digital amplifiers tuned to acoustic architecture",
      "Dolby Atmos Music and spatial audio support",
      "Trueplay tuning technology optimizes sound for room acoustics",
      "Wi-Fi 6 streaming and Bluetooth 5.0 line-in capability",
      "Far-field microphone array with capacitive touch controls"
    ],
    specifications: {
      drivers: "4 tweeters + 2 woofers directed forward, upward, sideways",
      audio: "Dolby Atmos, stereo spatial sound, Trueplay",
      connectivity: "Wi-Fi 6, Bluetooth 5.0, USB-C Line-In (adapter)",
      voice: "Sonos Voice Control, Amazon Alexa",
      dimensions: "160 x 260 x 185 mm",
      weight: "4.47 kg",
      power: "100-240V internal power supply"
    },
    colors: [
      { name: "Black", hex: "#111111" },
      { name: "White", hex: "#FFFFFF" }
    ],
    storage: ["N/A"],
    tags: ["smart-speaker", "Dolby-Atmos", "spatial-audio", "Sonos", "hi-fi"],
    availability: "In Stock",
    releaseDate: "2023-03-28",
    popularity: 93,
    seller: "Sonos Authorized",
    priceHistory: [
      { month: "May", price: 499 },
      { month: "Jun", price: 489 },
      { month: "Jul", price: 479 },
      { month: "Aug", price: 459 },
      { month: "Sep", price: 449 },
      { month: "Oct", price: 449 }
    ],
    reviews: [
      { id: 1, user: "Dominic Thorne", rating: 5, date: "2026-07-18", title: "Spatial audio envelopes the entire living room", comment: "Instruments sound like they are hovering in specific 3D points in the room." },
      { id: 2, user: "Leah Goldberg", rating: 4, date: "2026-08-21", title: "Incredible room filling bass", comment: "Deep, clean bass without rattling the bookshelf. Setup took under 4 minutes with the app." }
    ]
  },
  {
    id: "anker-737-power-bank",
    name: "Anker 737 Power Bank (PowerCore 24K)",
    brand: "Anker",
    category: "Accessories",
    price: 109,
    previousPrice: 149,
    rating: 4.8,
    reviewCount: 890,
    image: "https://images.unsplash.com/photo-1609592807963-71829e0b82f0?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Ultra-powerful 140W two-way fast charging with smart digital color display and 24,000mAh.",
    description: "Equipped with the latest Power Delivery 3.1 and bi-directional technology to quickly recharge the power bank itself or provide a 140W ultra-powerful charge to laptops, tablets, and phones simultaneously. Features an informative smart digital display.",
    features: [
      "140W max high-speed output and input via USB-C PD 3.1",
      "24,000mAh airline-approved flight battery capacity",
      "Smart digital display shows real-time wattage, battery %, and health",
      "Charge a MacBook Pro 16-inch to 50% in only 40 minutes",
      "ActiveShield 2.0 temperature monitoring system"
    ],
    specifications: {
      capacity: "24,000 mAh (86.4 Wh)",
      ports: "2x USB-C (140W max each), 1x USB-A (18W)",
      totalOutput: "140W combined maximum",
      display: "Color TFT smart digital screen",
      weight: "632 g",
      dimensions: "155.8 x 54.6 x 49.6 mm"
    },
    colors: [
      { name: "Matte Black", hex: "#1D1E22" }
    ],
    storage: ["24,000 mAh"],
    tags: ["power-bank", "140W", "PD-3.1", "travel", "fast-charging"],
    availability: "In Stock",
    releaseDate: "2023-02-10",
    popularity: 96,
    seller: "Anker Direct",
    priceHistory: [
      { month: "May", price: 149 },
      { month: "Jun", price: 139 },
      { month: "Jul", price: 129 },
      { month: "Aug", price: 119 },
      { month: "Sep", price: 109 },
      { month: "Oct", price: 109 }
    ],
    reviews: [
      { id: 1, user: "Greg Cooper", rating: 5, date: "2026-08-11", title: "Powers my MacBook Pro on 6-hour flights", comment: "The live display showing incoming and outgoing wattage is genuinely useful and cool." },
      { id: 2, user: "Sunita Roy", rating: 5, date: "2026-09-09", title: "Recharges itself incredibly fast", comment: "Plugged into a 100W brick, the power bank itself fills back up in under an hour." }
    ]
  },
  {
    id: "dyson-purifier-cool",
    name: "Dyson Purifier Cool Gen1",
    brand: "Dyson",
    category: "Home Tech",
    price: 399,
    previousPrice: 449,
    rating: 4.7,
    reviewCount: 310,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",
    shortDescription: "HEPA H13 filtration removes 99.97% of microscopic allergens with Air Multiplier technology.",
    description: "Dyson Purifier Cool automatically senses, captures, and traps pollutants for cleaner air throughout your home. Features 350-degree oscillation, magnetic curved remote, sleep timer, and a sealed HEPA H13 filtration core.",
    features: [
      "Fully sealed HEPA H13 and activated carbon filtration",
      "Air Multiplier technology circulates purified air through room",
      "350-degree adjustable oscillation angle",
      "Acoustically engineered for quiet night mode operation",
      "Curved magnetized remote docks neatly on top of machine"
    ],
    specifications: {
      filtration: "HEPA H13 + Activated Carbon",
      airflow: "290 liters per second maximum",
      noiseLevel: "61 dB max (ultra-quiet night mode 42 dB)",
      oscillation: "0 to 350 degrees",
      weight: "4.73 kg",
      dimensions: "1050 x 220 x 220 mm"
    },
    colors: [
      { name: "White / Silver", hex: "#EAEAEA" }
    ],
    storage: ["N/A"],
    tags: ["air-purifier", "Dyson", "HEPA", "cooling", "smart-home"],
    availability: "In Stock",
    releaseDate: "2023-09-01",
    popularity: 90,
    seller: "Dyson Official",
    priceHistory: [
      { month: "May", price: 449 },
      { month: "Jun", price: 439 },
      { month: "Jul", price: 429 },
      { month: "Aug", price: 409 },
      { month: "Sep", price: 399 },
      { month: "Oct", price: 399 }
    ],
    reviews: [
      { id: 1, user: "Helen Thorne", rating: 5, date: "2026-07-31", title: "A lifesaver for spring pollen allergies", comment: "Within 30 minutes of running in the bedroom, morning congestion disappeared." },
      { id: 2, user: "Gary Chen", rating: 4, date: "2026-08-26", title: "Quiet and elegant design", comment: "Doesn't look like an ugly box fan. Fits nicely into a modern living space." }
    ]
  }
];

export const categories = [
  { id: "all", name: "All Categories", icon: "Grid" },
  { id: "Smartphones", name: "Smartphones", icon: "Smartphone", description: "Flagship phones with pro cameras & 5G" },
  { id: "Laptops", name: "Laptops", icon: "Laptop", description: "High-performance ultrabooks & creators" },
  { id: "Headphones", name: "Headphones", icon: "Headphones", description: "Audiophile sound & active noise cancellation" },
  { id: "Smartwatches", name: "Smartwatches", icon: "Watch", description: "Fitness metrics, ECG & long endurance" },
  { id: "Cameras", name: "Cameras", icon: "Camera", description: "Hybrid full-frame & film simulation cameras" },
  { id: "Gaming", name: "Gaming", icon: "Gamepad2", description: "Next-gen consoles & handheld powerhouses" },
  { id: "Accessories", name: "Accessories", icon: "Mouse", description: "Ergonomic mice, power banks & essentials" },
  { id: "Home Tech", name: "Home Tech", icon: "Speaker", description: "Spatial speakers & smart environmental devices" }
];

export const NAV_LINKS = [
  { href: "#about", label: "Tentang" },
  { href: "#layanan", label: "Layanan" },
  { href: "#experience", label: "Pengalaman" },
  { href: "#sertifikat", label: "Sertifikat" },
  { href: "#education", label: "Pendidikan" },
  { href: "#contact", label: "Kontak" },
];

export const SKILLS = [
  "IT Support",
  "FortiGate",
  "Active Directory",
  "CCTV",
  "Networking",
  "TCP/IP",
  "Windows Server",
  "Linux",
  "Troubleshooting",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
];

export const STATS = [
  { value: "16", label: "Tahun" },
  { value: "SIJA", label: "Jurusan" },
  { value: "3+", label: "Tahun belajar" },
];

export const SERVICES = [
  {
    id: "01",
    title: "Web Development",
    category: "Web",
    year: "Front-End",
    tags: ["HTML", "CSS", "React", "Tailwind CSS"],
    cover: "/work/cover-1.webp",
    description:
      "Membangun dan merawat website — dari landing page sampai antarmuka aplikasi yang responsif dan cepat.",
  },
  {
    id: "02",
    title: "FortiGate Maintenance",
    category: "Network Security",
    year: "Firewall",
    tags: ["FortiGate", "VPN", "Security Policy", "Firewall"],
    cover: "/work/cover-2.webp",
    description:
      "Konfigurasi & perawatan firewall FortiGate: security policy, VPN, dan monitoring trafik jaringan.",
  },
  {
    id: "03",
    title: "Active Directory",
    category: "Sysadmin",
    year: "Windows Server",
    tags: ["Windows Server", "AD DS", "Group Policy", "User Management"],
    cover: "/work/cover-3.webp",
    description:
      "Manajemen user & komputer di Active Directory: pembuatan akun, group, GPO, dan pengaturan hak akses.",
  },
  {
    id: "04",
    title: "CCTV & Surveillance",
    category: "Security System",
    year: "Monitoring",
    tags: ["IP Camera", "NVR", "Cabling", "Monitoring"],
    cover: "/work/cover-4.webp",
    description:
      "Instalasi dan perawatan CCTV: penataan IP camera, NVR, pengkabelan, sampai monitoring.",
  },
];

export const EXPERIENCE = [
  {
    role: "IT Support",
    company: "PT Braja Mukti Cakra",
    mono: "bmc",
    type: "PKWT",
    note: "Dari magang",
    period: "Magang → PKWT",
    current: true,
    points: [
      "Membangun & merawat website internal",
      "Maintenance firewall FortiGate",
      "Manajemen user di Active Directory",
      "Instalasi & perawatan CCTV",
    ],
  },
];

export const EDUCATION = [
  {
    school: "SMK Negeri 26 Jakarta",
    level: "SIJA — Sistem Informasi, Jaringan & Aplikasi",
    period: "2024 — Sekarang",
    current: true,
  },
  {
    school: "SMP Negeri 158",
    level: "Sekolah Menengah Pertama",
    period: "2021 — 2024",
  },
  {
    school: "SDN Jatinegara Kaum 03",
    level: "Sekolah Dasar",
    period: "2015 — 2021",
  },
];

export const FOCUS = ["Active Directory", "FortiGate", "CCTV", "Networking"];

export const HOBBIES = ["Futsal", "Bulutangkis", "Ngoding"];

export const SOCIALS = {
  youtube: "https://www.youtube.com/@habibiwidayanto537",
  instagram: "https://www.instagram.com/hbbw_/",
  email: "habibiwidayanto@gmail.com",
};

// TODO: ganti dengan nomor WhatsApp asli (format internasional tanpa "+", mis. 62812xxxxxxx)
export const WHATSAPP = "6281234567890";

export const AVAILABILITY = {
  status: "Terbuka untuk kolaborasi",
  types: ["Magang / PKL", "Freelance", "Full-time"],
};

// TODO: ganti dengan sertifikat & pelatihan asli milikmu
export const CERTIFICATIONS = [
  {
    mono: "FG",
    title: "NSE 1 — Network Security Associate",
    issuer: "Fortinet",
    year: "2024",
  },
  {
    mono: "FG",
    title: "NSE 2 — Network Security Associate",
    issuer: "Fortinet",
    year: "2024",
  },
  {
    mono: "MT",
    title: "MTCNA — MikroTik Certified Network Associate",
    issuer: "MikroTik",
    year: "2025",
  },
  {
    mono: "CS",
    title: "IT Essentials",
    issuer: "Cisco Networking Academy",
    year: "2024",
  },
];

export const TOOLS = [
  { name: "FortiGate", mono: "FG", color: "#ee3124" },
  { name: "MikroTik", mono: "MT", color: "#8aa0ab" },
  { name: "Cisco", mono: "CS", color: "#1ba0d7" },
  { name: "Windows Server", mono: "WS", color: "#0078d4" },
  { name: "Active Directory", mono: "AD", color: "#00a4ef" },
  { name: "Linux", mono: "LX", color: "#f4c542" },
  { name: "Proxmox", mono: "PX", color: "#e57000" },
  { name: "Docker", mono: "DK", color: "#2496ed" },
  { name: "UniFi", mono: "UF", color: "#0559c9" },
  { name: "CCTV / NVR", mono: "CV", color: "#7de2d1" },
  { name: "Git", mono: "GT", color: "#f05033" },
  { name: "Figma", mono: "FG", color: "#a259ff" },
];

export const CASE_STUDIES = [
  {
    id: "01",
    title: "Segmentasi & security policy FortiGate",
    tag: "Network Security",
    problem:
      "Trafik kantor bercampur dan tanpa pembatasan, akses keluar-masuk tidak terkontrol.",
    solution:
      "Menyusun security policy per segmen, menambahkan VPN untuk akses remote, dan mengaktifkan monitoring trafik.",
    result:
      "Akses lebih terkontrol, trafik mencurigakan lebih cepat terdeteksi, remote user tetap aman.",
  },
  {
    id: "02",
    title: "Manajemen user di Active Directory",
    tag: "Sysadmin",
    problem:
      "Akun user dan komputer dikelola manual sehingga rawan salah hak akses.",
    solution:
      "Membuat struktur OU, group, dan GPO untuk menstandarkan hak akses serta kebijakan password.",
    result:
      "Onboarding user lebih cepat dan konsisten, hak akses lebih terkontrol.",
  },
  {
    id: "03",
    title: "Instalasi CCTV area gudang",
    tag: "Surveillance",
    problem: "Area gudang belum terpantau sehingga kejadian sulit ditelusuri.",
    solution:
      "Menata IP camera, NVR, dan pengkabelan, lalu mengatur monitoring serta penyimpanan rekaman.",
    result: "Area terpantau 24 jam dan rekaman mudah diakses saat dibutuhkan.",
  },
];

// Galeri: ganti gambar placeholder di public/galeri dengan foto dokumentasi asli
export const GALLERY = [
  { src: "/galeri/gal-1.webp", label: "Instalasi jaringan", tag: "Network" },
  { src: "/galeri/gal-2.webp", label: "Konfigurasi FortiGate", tag: "Security" },
  { src: "/galeri/gal-3.webp", label: "Setup server & AD", tag: "Sysadmin" },
  { src: "/galeri/gal-4.webp", label: "Instalasi CCTV", tag: "Surveillance" },
  { src: "/galeri/gal-5.webp", label: "Pengkabelan & rack", tag: "Cabling" },
  { src: "/galeri/gal-6.webp", label: "Maintenance rutin", tag: "Maintenance" },
];

// TODO: ganti dengan testimoni asli dari mentor/supervisor
export const TESTIMONIALS = [
  {
    quote:
      "Habibi cepat tanggap saat menangani masalah jaringan dan rapi dalam mendokumentasikan pekerjaan. Mau belajar hal baru dan bisa diandalkan untuk tugas IT harian.",
    name: "Supervisor IT",
    role: "PT Braja Mukti Cakra",
  },
  {
    quote:
      "Pemahaman dasarnya kuat — dari konfigurasi firewall sampai penataan CCTV. Komunikasinya jelas dan pekerjaan selesai sesuai target.",
    name: "Mentor Magang",
    role: "Divisi IT",
  },
];


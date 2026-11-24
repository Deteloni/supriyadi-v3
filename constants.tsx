import type {
  SkillCategory,
  Project,
  Achievement,
  WorkExperience,
  EducationItem,
  Certificate,
} from "./types";

// Icons
const CodeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-sky-400">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const ShieldIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-sky-400">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const DatabaseIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-sky-400">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const CogIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-sky-400">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const PressIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-sky-400">
    <rect x="3" y="4" width="18" height="12" rx="2"></rect>
    <path d="M7 20h10"></path><path d="M12 16v4"></path>
    <circle cx="8" cy="10" r="2"></circle><circle cx="16" cy="10" r="2"></circle>
  </svg>
);

// Portfolio Content
export const ABOUT_ME_TEXT =
  "Saya adalah Head Manufacturing System Engineering dengan spesialisasi di enterprise ERP integration, OT/IT integration, IT systems & automation workflow, data engineering, dan cybersecurity. Saya membangun serta mengoperasikan ekosistem aplikasi internal berskala pabrik — dari ERP, WMS, HRIS, monitoring produksi, hingga integrasi API mesin cetak (HP Indigo, Dilli, Neopicasso, Heidelberg XL 106) dengan job schedule dan performance reporting harian. Keahlian produksi saya mencakup RFID profesional, converting chip inlay, quality inspection, drawing & artwork engineering, color matching LAB/ΔE, serta PLC dan HMI basic. Keahlian IT saya mencakup Linux & server deployment, FortiGate, VLAN/VPN, network security, Python scripting, Laravel, Vue/React, dan database design.";

export const OVERVIEW_SKILLS = [
  "RFID Professional",
  "Converting Chip Inlay",
  "Quality Inspection",
  "Drawing & Artwork Engineering",
  "Color Matching LAB / ΔE",
  "HP Indigo",
  "Dilli",
  "Neopicasso",
  "Heidelberg XL 106",
  "PLC & HMI Basic",
  "IT Systems & Automation",
  "Data Engineering",
];

export const KEY_ACHIEVEMENTS: Achievement[] = [
  {
    metric: "9+",
    label: "Aplikasi Enterprise Live",
    text: "Membangun dan men-deploy lebih dari 9 sistem internal produksi (ERP, HRIS, WMS, fileserver, monitoring, reporting) yang digunakan secara company-wide via Cloudflare Tunnel.",
    detail: "ERP Integration · System Deployment · OT/IT",
  },
  {
    metric: "35%",
    label: "Keamanan Jaringan",
    text: "Meningkatkan keamanan jaringan sebesar 35% melalui implementasi FortiGate, segmentasi VLAN, VPN, dan hardening akses.",
    detail: "Network Security · FortiGate · VLAN/VPN",
  },
  {
    metric: "30%",
    label: "Kecepatan Akses Gudang",
    text: "Akses data gudang 30% lebih cepat dengan sistem inventori dan WMS real-time yang ditingkatkan.",
    detail: "WMS · RFID · Inventory",
  },
  {
    metric: "25%",
    label: "Efisiensi Analisis Forensik",
    text: "Mengurangi waktu analisis forensik sebesar 25% melalui otomatisasi script Python.",
    detail: "Cybersecurity · Digital Forensics · Python",
  },
  {
    text: "Enterprise ERP Integration: mengintegrasikan ERP, MES, WMS, dan HRIS dalam satu alur data produksi yang konsisten lintas divisi.",
    detail: "ERP · REST API · Database Design",
  },
  {
    text: "Data Engineering: membangun pipeline data dari mesin dan engine produksi ke reporting harian, termasuk job scheduling dan performance dashboard.",
    detail: "Data Pipeline · Job Scheduling · Reporting",
  },
  {
    text: "Network & Security: merancang topologi jaringan pabrik, tunnel akses remote, serta kebijakan firewall untuk memisahkan jaringan OT dan IT.",
    detail: "VLAN · VPN · Firewall · Cloudflare Tunnel",
  },
  {
    text: "OT/IT Integration: menghubungkan perangkat lantai produksi (RFID, HP Indigo press) ke sistem bisnis berbasis web secara real-time.",
    detail: "IoT · API Integration · Smart Manufacturing",
  },
  {
    text: "Mempercepat penyelesaian proyek pengembangan hingga 20% lewat standarisasi workflow, otomatisasi PDF, dan templating laporan.",
    detail: "Workflow Automation · Excel VBA · PDF",
  },
];

export const FOCUS_AREAS = [
  "Enterprise ERP Integration",
  "Data Engineering",
  "Network Engineering",
  "Network Security",
  "RFID & Converting",
  "Quality & Color Engineering",
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Infrastructure & Security",
    icon: ShieldIcon,
    description: "Membangun, mengamankan, dan mengoperasikan infrastruktur jaringan serta server produksi.",
    skills: [
      { name: "Linux (Debian / Ubuntu) Administration" },
      { name: "FortiGate Firewall Management" },
      { name: "VLAN & VPN (Site-to-Site / Remote Access)" },
      { name: "Network Design, Routing & Troubleshooting" },
      { name: "Network Security & Hardening" },
      { name: "Server Deployment & Self-hosting" },
      { name: "Cloudflare Tunnel / Zero Trust Access" },
      { name: "DNS, SPF, DKIM & Email Server Setup" },
      { name: "Cybersecurity & Digital Forensics (Kali Linux)" },
    ],
  },
  {
    title: "ERP & Manufacturing Systems",
    icon: CogIcon,
    description: "Sistem enterprise untuk produksi, gudang, dan integrasi teknologi operasional.",
    skills: [
      { name: "ERP Systems (Production, Procurement, Finance)" },
      { name: "Manufacturing Execution System (MES)" },
      { name: "Warehouse Management System (WMS)" },
      { name: "HRIS & Payroll Systems" },
      { name: "OT / IT Integration" },
      { name: "RFID Integration & Asset Tracking" },
      { name: "HP Indigo Press API Integration" },
      { name: "Smart Manufacturing & Shop-floor Data" },
    ],
  },
  {
    title: "Printing, Quality & Converting",
    icon: PressIcon,
    description: "Keahlian produksi cetak, kontrol kualitas, rekayasa artwork, dan konversi chip inlay.",
    skills: [
      { name: "Professional RFID System & Application" },
      { name: "Converting Chip Inlay" },
      { name: "Quality Inspection & Sample Checking" },
      { name: "Drawing & Artwork Engineering" },
      { name: "Color Matching: LAB & ΔE (Delta E)" },
      { name: "HP Indigo Digital Press" },
      { name: "Dilli Digital Press" },
      { name: "Neopicasso Digital Press" },
      { name: "Heidelberg Speedmaster XL 106" },
      { name: "PLC Programming & HMI (Basic)" },
    ],
  },
  {
    title: "Software & Web Development",
    icon: CodeIcon,
    description: "Full-stack development untuk aplikasi bisnis internal yang skalabel.",
    skills: [
      { name: "Python" },
      { name: "PHP (Laravel)" },
      { name: "JavaScript (Vue.js, React, jQuery)" },
      { name: "REST API Design & Integration" },
      { name: "SQL & Query Optimization" },
      { name: "Database Design (ERD, Normalisasi)" },
      { name: "SQL Server & MySQL" },
      { name: "Git & Version Control" },
    ],
  },
  {
    title: "IT Systems, Automation & Data",
    icon: DatabaseIcon,
    description: "Spesialis sistem IT, automation workflow, dan rekayasa data untuk operasi produksi.",
    skills: [
      { name: "IT System Specialist (Production Support)" },
      { name: "Automation Workflow Design" },
      { name: "Data Engineering & ETL" },
      { name: "Python Scripting & Automation" },
      { name: "Excel VBA" },
      { name: "API Integration" },
      { name: "Workflow & PDF Automation" },
      { name: "Job Scheduling & Cron" },
      { name: "Reporting & Dashboard" },
      { name: "Process Improvement (R&D)" },
    ],
  },
];

export const EXPERIENCE: WorkExperience[] = [
  {
    company: "PT. Shinwoo Global Indonesia",
    period: "01/2026 – Present",
    role: "Head of Manufacturing System Engineering",
    description:
      "Memimpin strategi, pengembangan, dan operasional seluruh sistem manufaktur perusahaan. Menanggung jawab integrasi ERP/MES/WMS, infrastruktur jaringan & server, keamanan sistem, serta pipeline data produksi lintas divisi.",
    highlights: [
      "Mengelola portofolio 9+ aplikasi internal produksi yang diakses seluruh karyawan",
      "Mendefinisikan arsitektur integrasi OT/IT dan tata kelola data produksi",
      "Membangun data pipeline dan job schedule performance harian dari engine mesin cetak",
      "Menetapkan standar keamanan jaringan, firewall, dan akses remote berbasis tunnel",
    ],
    current: true,
  },
  {
    company: "PT. Shinwoo Global Indonesia",
    period: "08/2018 – 12/2025",
    role: "R&D Engineer Production",
    description:
      "Pengembangan full-stack (frontend & backend) untuk peningkatan sistem produksi, merancang sistem manajemen firewall internal, membangun modul ERP/WMS/HRIS, dan memimpin proyek infrastruktur jaringan serta perencanaan strategis TI.",
    highlights: [
      "Membangun aplikasi manajemen produksi berbasis Laravel, Vue.js, dan SQL Server/MySQL",
      "Mengimplementasikan RFID tracking, otomasi PDF, dan integrasi API mesin produksi",
      "Menangani konfigurasi FortiGate, VLAN, VPN, dan deployment server Debian",
    ],
  },
  {
    company: "PT. Prima Kemasindo",
    period: "06/2016 – 08/2018",
    role: "R&D Checking Quality Sample",
    description:
      "Melakukan pemeriksaan kualitas sampel, otomatisasi pelaporan untuk evaluasi, serta manajemen gudang sampel dan akses data uji kualitas secara sistematis untuk memastikan integritas produk.",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Universitas Bina Nusantara",
    degree: "S1 – Computer Science",
    period: "09/2022 – 02/2026",
    gpa: "3.51 / 4.00",
    detail: "Graduated · Sarjana Komputer",
  },
  {
    institution: "Universitas Komputer Indonesia",
    degree: "S1 – Teknik Informatika",
    period: "08/2015 – 01/2016",
    detail: "Dropout",
  },
  {
    institution: "SMK NU Kaplongan",
    degree: "Teknik Komputer dan Jaringan",
    period: "2012 – 2015",
    detail: "Graduated",
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    title: "Cybersecurity 101: Foundations for Absolute Beginners",
    issuer: "School of AI · Bayt Al Hikmah",
    date: "Nov 2026",
    duration: "3.5 jam",
    file: "certificates/UC-790256c5-99f5-4654-881d-eee17b0132fc.pdf",
    verifyUrl: "https://ude.my/UC-790256c5-99f5-4654-881d-eee17b0132fc",
    category: "Security",
  },
  {
    title: "Complete jQuery Course: Learn From Beginner To Advanced",
    issuer: "Maria EduCare",
    date: "Nov 2026",
    duration: "4 jam",
    file: "certificates/UC-1ddff28f-e804-46a8-b9b9-184d3a2c0105.pdf",
    verifyUrl: "https://ude.my/UC-1ddff28f-e804-46a8-b9b9-184d3a2c0105",
    category: "Web",
  },
  {
    title: "Complete Database Course: SQL, MySQL, PostgreSQL & MongoDB",
    issuer: "Logic Labs",
    date: "Nov 2026",
    duration: "5.5 jam",
    file: "certificates/UC-21f47024-af44-45e6-a2a7-7246cedc7c5d.pdf",
    verifyUrl: "https://ude.my/UC-21f47024-af44-45e6-a2a7-7246cedc7c5d",
    category: "Database",
  },
  {
    title: "Data Engineer Foundations: Build Modern Data Systems",
    issuer: "Data Science Academy · School of AI",
    date: "Nov 2026",
    duration: "1 jam",
    file: "certificates/UC-3d904be5-4da4-4de5-b7e8-109a41621857.pdf",
    verifyUrl: "https://ude.my/UC-3d904be5-4da4-4de5-b7e8-109a41621857",
    category: "Data",
  },
  {
    title: "Certified Master in Artificial General Intelligence Systems",
    issuer: "School of AI",
    date: "Nov 2026",
    duration: "11 jam",
    file: "certificates/UC-341ce78e-cc3f-4b76-8d68-134593a79306.pdf",
    verifyUrl: "https://ude.my/UC-341ce78e-cc3f-4b76-8d68-134593a79306",
    category: "AI",
  },
];

const domain = (name: string) => `${name}.shinwooglobal.cloud`;

export const PROJECTS: Project[] = [
  // Sistem enterprise yang di-deploy (dengan preview asli)
  {
    title: "Factory Workspace Portal",
    description:
      "Portal terpusat bagi seluruh aplikasi pabrik — HR & payroll, manufacturing access, document control, dan executive dashboard dalam satu workspace yang aman.",
    techStack: "Laravel, JavaScript, Cloudflare Tunnel",
    imageUrl: "preview-apps.png",
    category: "Enterprise Systems",
    domain: domain("apps"),
    url: "https://apps.shinwooglobal.cloud",
    highlights: ["Single sign-on ke seluruh modul", "Role-based access control", "Executive KPI dashboard"],
  },
  {
    title: "Enterprise Web Platform (Main)",
    description:
      "Gerbang autentikasi enterprise workspace dengan kebijakan keamanan akun, remember-device, dan integrasi login untuk seluruh aplikasi internal.",
    techStack: "Laravel, MySQL, Security",
    imageUrl: "preview-main.png",
    category: "Enterprise Systems",
    domain: domain("main"),
    url: "https://main.shinwooglobal.cloud",
    highlights: ["Secure sign-in", "Device trust", "Terintegrasi dengan payroll & attendance"],
  },
  {
    title: "ERP — Production & Inventory",
    description:
      "Modul ERP produksi & pengadaan dengan CRUD, filter, dan laporan. Menjadi backbone alur data antara produksi, gudang, dan keuangan perusahaan.",
    techStack: "Laravel, Vue.js, MySQL",
    imageUrl: "preview-erp.png",
    category: "Enterprise Systems",
    domain: domain("erp"),
    url: "https://erp.shinwooglobal.cloud",
    highlights: ["Production & procurement", "Real-time inventory", "Reporting & analytics"],
  },
  {
    title: "HRMS — HR & Payroll System",
    description:
      "Sistem manajemen SDM untuk data karyawan, absensi, cuti, dan penggajian lengkap dengan portal karier dan FAQ internal.",
    techStack: "Laravel, JavaScript, MySQL",
    imageUrl: "preview-hr.png",
    category: "Enterprise Systems",
    domain: domain("hr"),
    url: "https://hr.shinwooglobal.cloud",
    highlights: ["Attendance & leave", "Payroll processing", "Employee self-service"],
  },
  {
    title: "WMS Pro — Warehouse Management",
    description:
      "Warehouse management system profesional untuk mengelola inbound, outbound, stok, dan pergerakan barang secara real-time di lantai gudang.",
    techStack: "Laravel, JavaScript, SQL Server",
    imageUrl: "preview-wms.png",
    category: "Enterprise Systems",
    domain: domain("wms"),
    url: "https://wms.shinwooglobal.cloud",
    highlights: ["Inbound / outbound", "Real-time stock", "Warehouse analytics"],
  },
  {
    title: "Warehouse Operations",
    description:
      "Portal akses operasional gudang yang terhubung dengan ERP dan WMS untuk memantau perpindahan material dan ketersediaan stok.",
    techStack: "Laravel, MySQL, Internal API",
    imageUrl: "preview-warehouse.png",
    category: "Enterprise Systems",
    domain: domain("warehouse"),
    url: "https://warehouse.shinwooglobal.cloud",
    highlights: ["ERP-linked stock", "Material movement", "Operational access"],
  },
  {
    title: "Document & File Server",
    description:
      "File management internal berbasis kodbox untuk penyimpanan, berbagi, dan kontrol akses dokumen operasional serta arsip produksi.",
    techStack: "Kodbox, Linux, Cloudflare Tunnel",
    imageUrl: "preview-files.png",
    category: "Infrastructure",
    domain: domain("files"),
    url: "https://files.shinwooglobal.cloud",
    highlights: ["Centralized document storage", "Permission control", "Self-hosted file explorer"],
  },
  {
    title: "Employee Movement Monitoring",
    description:
      "Sistem monitoring pergerakan dan kehadiran karyawan dengan tampilan kiosk real-time untuk area produksi.",
    techStack: "JavaScript, IoT, Realtime Dashboard",
    imageUrl: "preview-monitor.png",
    category: "Smart Manufacturing",
    domain: domain("monitor"),
    url: "https://monitor.shinwooglobal.cloud",
    highlights: ["Live kiosk display", "Employee movement tracking", "Area production visibility"],
  },
  {
    title: "Reporting & Business Intelligence",
    description:
      "Workspace reporting untuk mengonsolidasikan data produksi, gudang, dan bisnis menjadi laporan yang dapat ditindaklanjuti.",
    techStack: "Laravel, Data Pipeline, Dashboard",
    imageUrl: "preview-report.png",
    category: "Data & Reporting",
    domain: domain("report"),
    url: "https://report.shinwooglobal.cloud",
    highlights: ["Consolidated reporting", "KPI & performance", "Cross-system data"],
  },
  {
    title: "Press Line — API & Performance Integration",
    description:
      "Integrasi API engine mesin cetak (HP Indigo, Dilli, Neopicasso, Heidelberg XL 106) ke sistem report: penjadwalan job otomatis, pemantauan status engine, dan laporan performa harian. Didukung keahlian quality inspection, artwork engineering, dan color matching LAB/ΔE.",
    techStack: "API Integration, Python, Job Scheduler, Data Engineering, Color LAB/ΔE",
    imageUrl: "preview-hpwh.png",
    category: "Smart Manufacturing",
    domain: domain("hpwh"),
    url: "https://hpwh.shinwooglobal.cloud",
    highlights: ["Multi-press engine → report API pipeline", "Automated job scheduling", "Daily performance & quality reporting"],
  },

  // Proyek rekayasa & otomasi sebelumnya
  {
    title: "Excel to DB + PDF Merger",
    description:
      "Alat otomatis untuk membaca data dari Excel, menulisnya ke database, dan menggabungkan file PDF berdasarkan setiap baris data.",
    techStack: "Go, Excel VBA, Database",
    imageUrl: "pdfmerge.png",
    category: "Automation",
    highlights: ["Excel → database pipeline", "Batch PDF merging", "Process automation"],
  },
  {
    title: "Smart Inventory System",
    description:
      "Aplikasi desktop untuk pemantauan bahan/material secara real-time di lingkungan manufaktur.",
    techStack: "Go, SQL Server",
    imageUrl: "inventory.png",
    category: "Smart Manufacturing",
    highlights: ["Real-time material monitoring", "Manufacturing integration"],
  },
  {
    title: "Firewall Routing & Bypass",
    description:
      "Konfigurasi jaringan dan routing FortiGate untuk memulihkan konektivitas saat lisensi expired, termasuk tata kelola aturan akses.",
    techStack: "Fortinet, Network Routing, Security",
    imageUrl: "fortigate.png",
    category: "Infrastructure",
    highlights: ["FortiGate configuration", "Network recovery", "Access rule management"],
  },
  {
    title: "RFID Production Tracking",
    description:
      "Sistem pelacakan produksi berbasis RFID profesional untuk mendeteksi dan memperbarui data pergerakan barang otomatis, termasuk proses converting chip inlay dan quality inspection.",
    techStack: "Python, RFID, Chip Inlay Converting, IoT",
    imageUrl: "rfid.png",
    category: "Smart Manufacturing",
    highlights: ["RFID auto-detection", "Chip inlay converting", "Quality inspection", "OT/IT bridge"],
  },
];

export const CONTACT_INFO = {
  email: "supriyadi@binus.ac.id",
  phone: "089669383693",
  linkedin: "https://www.linkedin.com/in/supriyadi-supriyadi-92a841296",
  github: "https://github.com/Deteloni",
  location: "Cikarang Barat, Bekasi – Indonesia",
};

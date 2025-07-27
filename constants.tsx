
import React from 'react';
import type { SkillCategory, Project, Achievement, WorkExperience, EducationItem } from './types';

// Icons
const CodeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-sky-400">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const ShieldIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-sky-400">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const DatabaseIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-sky-400">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
);


// Portfolio Content
export const ABOUT_ME_TEXT = "Saya adalah profesional IT dengan spesialisasi di bidang cybersecurity, digital forensics, dan pengembangan perangkat lunak. Keahlian saya mencakup troubleshooting, perbaikan, dan peningkatan proses rekayasa perangkat lunak. Berpengalaman dalam analisis infrastruktur TI, manajemen database, serta forensik digital menggunakan berbagai tools. Saya memiliki semangat kolaboratif dan senantiasa mencari solusi inovatif untuk meningkatkan keamanan dan efisiensi sistem.";

export const KEY_ACHIEVEMENTS: Achievement[] = [
    { text: "Meningkatkan keamanan jaringan sebesar 35% dengan implementasi protokol baru." },
    { text: "Mempercepat penyelesaian proyek hingga 20% lebih cepat." },
    { text: "Mengurangi waktu analisis forensik sebesar 25% melalui script otomatisasi." },
    { text: "Akses gudang meningkat 30% lebih cepat dengan sistem inventori yang ditingkatkan." },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Full-stack & Automation",
    icon: CodeIcon,
    skills: [
      { name: "Laravel Full-stack" },
      { name: "Javascript" },
      { name: "Python Automation" },
      { name: "Excel VBA" },
    ],
  },
  {
    title: "Infrastructure & Security",
    icon: ShieldIcon,
    skills: [
      { name: "Firewall Management & Network Security" },
      { name: "Sysadmin Debian" },
      { name: "Cybersecurity Forensics" },
      { name: "Kali Linux" },
    ],
  },
   {
    title: "Database Management",
    icon: DatabaseIcon,
    skills: [
      { name: "SQL Server" },
      { name: "MySQL" },
      { name: "DB Design (ERD, Normalisasi)" },
    ],
  },
];

export const EXPERIENCE: WorkExperience[] = [
    {
        company: "PT. Shinwoo Global Indonesia",
        period: "08/2018 – 12/2024",
        role: "R&D Engineer Production",
        description: "Pengembangan full-stack (frontend & backend) untuk peningkatan sistem produksi, merancang sistem manajemen firewall internal, dan memimpin proyek infrastruktur jaringan serta perencanaan strategis TI."
    },
    {
        company: "PT. Prima Kemasindo",
        period: "06/2016 – 08/2018",
        role: "R&D Checking Quality Sample",
        description: "Melakukan pemeriksaan kualitas sampel, otomatisasi pelaporan untuk evaluasi, serta manajemen gudang sampel dan akses data uji kualitas secara sistematis untuk memastikan integritas produk."
    }
];

export const EDUCATION: EducationItem[] = [
    {
        institution: "Universitas Bina Nusantara",
        degree: "S1 – Computer Science (Ongoing)",
        period: "09/2022 – 02/2026"
    },
    {
        institution: "Universitas Komputer Indonesia",
        degree: "S1 – Teknik Informatika",
        period: "08/2015 – 01/2016"
    },
    {
        institution: "SMK NU Kaplongan",
        degree: "Teknik Komputer dan Jaringan",
        period: "2012 – 2015"
    }
];

export const PROJECTS: Project[] = [
    {
        title: "Excel to DB + PDF Merger",
        description: "Alat otomatis untuk membaca data dari Excel dan menggabungkan file PDF berdasarkan setiap baris data.",
        techStack: "Go, Excel VBA",
        imageUrl: "https://picsum.photos/seed/project-pdf/400/300"
    },
    {
        title: "Smart Inventory System",
        description: "Aplikasi desktop untuk pemantauan bahan/material secara real-time di lingkungan manufaktur.",
        techStack: "Go, SQL Server",
        imageUrl: "https://picsum.photos/seed/project-inventory/400/300"
    },
    {
        title: "Web-based ERP Module",
        description: "Sistem ERP untuk pengelolaan produksi & pengadaan dengan fitur CRUD, filter, dan laporan.",
        techStack: "Laravel, Javascript, MySQL",
        imageUrl: "https://picsum.photos/seed/project-erp/400/300"
    },
    {
        title: "Firewall Routing & Bypass",
        description: "Konfigurasi jaringan untuk melewati lisensi FortiGate yang expired dan memulihkan konektivitas.",
        techStack: "Fortinet, Network Routing",
        imageUrl: "https://picsum.photos/seed/project-firewall/400/300"
    },
    {
        title: "RFID Production Tracking",
        description: "Sistem pelacakan produksi berbasis RFID untuk mendeteksi dan memperbarui data pergerakan barang otomatis.",
        techStack: "Python, RFID, IoT",
        imageUrl: "https://picsum.photos/seed/project-rfid/400/300"
    }
];

export const CONTACT_INFO = {
    email: "sqr.supriyadi@gmail.com",
    phone: "089669383693",
    linkedin: "https://linkedin.com/in/supriyadi",
    github: "https://github.com/supriyadi-dev",
    location: "Cikarang Barat, Bekasi – Indonesia"
};

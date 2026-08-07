export const LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'id', label: 'ID', name: 'Bahasa Indonesia' },
]

export const DEFAULT_LANGUAGE = 'en'

export const translations = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      work: 'Work',
      experience: 'Experience',
      certificates: 'Certificates',
      contact: 'Contact',
      cta: 'Say hi',
      home: 'Back to top',
    },
    theme: {
      toLight: 'Switch to light theme',
      toDark: 'Switch to dark theme',
    },
    language: {
      switch: 'Switch language',
    },
    hero: {
      status: 'Fresh graduate — open to new opportunities',
      roles: ['Full-Stack Web Developer.'],
      bio: 'I build web and mobile applications end to end — from the database schema to the very last pixel. Informatics graduate who cares as much about logic that holds up as about interfaces people genuinely enjoy using.',
      stats: [
        { value: '3.69', label: 'GPA / 4.00' },
        { value: 'Top 10%', label: 'Coding Camp 2025' },
        { value: '4+', label: 'Projects shipped' },
      ],
      ctaWork: 'View my work',
      ctaContact: 'Get in touch',
    },
    about: {
      title: 'About Me',
      subtitle: "Who's behind the code",
      lead: 'Technology earns its keep in the least glamorous places — archives, inventories, records. The work everyone still does by hand, and nobody enjoys.',
      p1: "I'm a software developer with a Bachelor's degree in Informatics, most at home where clean backend logic meets an interface people never have to think about. Through my degree I designed and shipped web-based information systems and mobile apps — the kind that replace a spreadsheet, a notebook, or a filing cabinet with something faster and much harder to lose.",
      p2: 'I recently completed my B.Sc. in Informatics at Bhayangkara Jakarta Raya University (2022–2026) on the Software Development track, with a 3.69 GPA. My thesis was a web-based student records archive system built for a real elementary school — a working system, not a prototype.',
      p3: "Now, as a fresh graduate, I'm looking for somewhere to grow: a team that will mentor and challenge me in equal measure, and a product real people actually depend on. I learn quickly, I'm used to building from nothing, and I don't mind owning the messy parts.",
      stackLabel: 'Technologies I work with often:',
      cv: 'View my CV',
      cvMissing: 'CV coming soon',
    },
    skills: {
      title: 'Skills',
      subtitle: 'The tools I reach for',
      groups: {
        frontend: 'Frontend',
        backend: 'Backend',
        mobile: 'Mobile',
        tools: 'Tools & Other',
      },
      items: {
        security: 'Cybersecurity Fundamentals',
      },
    },
    projects: {
      title: 'Selected Work',
      subtitle: "Things I've actually shipped",
      view: 'View Project',
      items: {
        'sapu-jagat': {
          name: 'Sapu Jagat',
          description:
            'Full-stack web app built as the capstone project for Coding Camp 2025 powered by DBS Foundation — a dynamic client, an efficient server, and an integrated Machine Learning API.',
        },
        'ukm-inventory': {
          name: 'UKM Inventory Manager',
          description:
            'Mobile app for small-business (UKM) store management, built from scratch with real-time inventory tracking and sales transaction recording.',
        },
        'school-archive': {
          name: 'School Records Archive System',
          description:
            'Undergraduate thesis project — a web-based student records archive system built for an elementary school.',
        },
        'iot-balance': {
          name: 'IoT Balance Management System',
          description:
            'IoT architecture built from scratch with RFID and Arduino integration, implementing balance management logic in C.',
        },
      },
    },
    experience: {
      title: 'Experience',
      subtitle: 'How I got here',
      items: {
        'coding-camp': {
          title: 'Front-End & Back-End Developer',
          company: 'Coding Camp 2025 powered by DBS Foundation',
          date: 'Feb — Jul 2025',
          highlights: [
            'Learned end-to-end web development, from HTML/CSS/JavaScript fundamentals to more advanced concepts',
            'Built "Sapu Jagat," a full-stack web app using Vue.js, Tailwind CSS, Node.js, and Hapi.js, integrating a Machine Learning API',
            'Distinction Graduate — top 10% of the learning path',
          ],
        },
        'ukm-project': {
          title: 'Final Course Project',
          company: 'Bhayangkara Jakarta Raya University',
          date: 'Oct — Dec 2024',
          highlights: [
            'Built a store inventory management mobile app for small businesses (UKM) from scratch using Flutter',
            'Implemented core features including real-time inventory management and sales transaction recording',
          ],
        },
        infradigital: {
          title: 'Ready4AI & Security Training',
          company: 'InfraDigital Foundation',
          date: 'Feb — Aug 2024',
          highlights: [
            'Completed comprehensive cybersecurity training delivered by Microsoft via InfraDigital Foundation',
            'Studied cybersecurity fundamentals, threat landscapes, and mitigation techniques',
          ],
        },
        'iot-project': {
          title: 'Final Course Project',
          company: 'Bhayangkara Jakarta Raya University',
          date: 'Nov — Dec 2022',
          highlights: [
            'Implemented an IoT architecture from scratch integrating RFID and Arduino',
            'Implemented balance management functions on Arduino using C',
          ],
        },
        degree: {
          title: 'B.Sc. in Informatics',
          company: 'Bhayangkara Jakarta Raya University',
          date: '2022 — 2026',
          highlights: [
            'GPA: 3.69 — Software Development track',
            'Thesis: web-based student records archive system for elementary schools',
          ],
        },
      },
    },
    certificates: {
      title: 'Certificates',
      subtitle: 'Proof of the work',
      empty: 'Certificates are on their way — this shelf is being filled in.',
      hint: 'Drag or scroll to browse',
      prev: 'Previous certificate',
      next: 'Next certificate',
      preview: 'Certificate preview',
      items: {
        '01-coding-camp-2025': {
          title: 'Coding Camp 2025 — Distinction Graduate',
          issuer: 'DBS Foundation × Dicoding · Jul 2025',
        },
        '02-dasar-ai': {
          title: 'AI Fundamentals',
          issuer: 'Dicoding Indonesia · Dec 2025',
        },
        '03-backend-javascript': {
          title: 'Back-End Basics with JavaScript',
          issuer: 'Dicoding Indonesia · May 2025',
        },
        '04-web-intermediate': {
          title: 'Intermediate Web Development',
          issuer: 'Dicoding Indonesia · May 2025',
        },
        '05-frontend-fundamental': {
          title: 'Front-End Web Development Fundamentals',
          issuer: 'Dicoding Indonesia · Apr 2025',
        },
        '06-frontend-pemula': {
          title: 'Front-End Web Development for Beginners',
          issuer: 'Dicoding Indonesia · Mar 2025',
        },
        '07-javascript-dasar': {
          title: 'JavaScript Programming Basics',
          issuer: 'Dicoding Indonesia · Mar 2025',
        },
        '08-web-dasar': {
          title: 'Web Programming Basics',
          issuer: 'Dicoding Indonesia · Feb 2025',
        },
        '09-git-github': {
          title: 'Git Basics with GitHub',
          issuer: 'Dicoding Indonesia · Feb 2025',
        },
        '10-logika-pemrograman': {
          title: 'Introduction to Programming Logic',
          issuer: 'Dicoding Indonesia · Feb 2025',
        },
        '11-dasar-pemrograman': {
          title: 'Programming Basics for Aspiring Software Developers',
          issuer: 'Dicoding Indonesia · Feb 2025',
        },
        '12-uiux-kemnaker': {
          title: 'Talent & Innovation Hub — UI/UX Design Fundamentals',
          issuer: 'Indonesian Ministry of Manpower · Jul 2026',
        },
      },
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's talk",
      heading: "Let's build something together.",
      text: "I'm currently open to new opportunities — internships, junior developer roles, or freelance projects. Whether you have a role in mind, an idea you want built, or just want to talk shop, my inbox is always open and I read every message.",
    },
    modal: {
      close: 'Close',
      prev: 'Previous screenshot',
      next: 'Next screenshot',
      goTo: 'Go to screenshot',
      screenshot: 'screenshot',
      comingSoon: 'Screenshots coming soon',
    },
  },

  id: {
    nav: {
      about: 'Tentang',
      skills: 'Keahlian',
      work: 'Karya',
      experience: 'Pengalaman',
      certificates: 'Sertifikat',
      contact: 'Kontak',
      cta: 'Sapa saya',
      home: 'Kembali ke atas',
    },
    theme: {
      toLight: 'Ganti ke tema terang',
      toDark: 'Ganti ke tema gelap',
    },
    language: {
      switch: 'Ganti bahasa',
    },
    hero: {
      status: 'Fresh graduate — terbuka untuk kesempatan baru',
      roles: ['Full-Stack Web Developer.'],
      bio: 'Saya membangun aplikasi web dan mobile dari hulu ke hilir — dari skema database sampai piksel terakhir. Lulusan Informatika yang sama peduli pada logika yang kokoh dan antarmuka yang benar-benar nyaman dipakai.',
      stats: [
        { value: '3,69', label: 'IPK / 4,00' },
        { value: 'Top 10%', label: 'Coding Camp 2025' },
        { value: '4+', label: 'Proyek rampung' },
      ],
      ctaWork: 'Lihat karya saya',
      ctaContact: 'Hubungi saya',
    },
    about: {
      title: 'Tentang Saya',
      subtitle: 'Siapa di balik kodenya',
      lead: 'Bagi saya, teknologi justru paling terasa manfaatnya di pekerjaan yang tampak membosankan — arsip, inventaris, pendataan. Hal-hal yang sampai hari ini masih dikerjakan manual, dan tidak ada yang menikmatinya.',
      p1: 'Saya seorang software developer lulusan S1 Informatika, paling nyaman bekerja di titik temu antara logika backend yang rapi dan antarmuka yang tidak membuat penggunanya berpikir dua kali. Sepanjang kuliah saya merancang dan membangun sistem informasi berbasis web serta aplikasi mobile — sistem yang menggantikan spreadsheet, buku catatan, dan lemari arsip dengan sesuatu yang jauh lebih cepat dan jauh lebih sulit hilang.',
      p2: 'Saya baru saja menuntaskan S1 Informatika di Universitas Bhayangkara Jakarta Raya (2022–2026) dengan peminatan Software Development dan IPK 3,69. Skripsi saya berupa sistem arsip data siswa berbasis web yang dibangun untuk sekolah dasar sungguhan — sistem yang benar-benar berjalan, bukan sekadar purwarupa.',
      p3: 'Kini, sebagai fresh graduate, saya sedang mencari tempat untuk bertumbuh: tim yang mau membimbing sekaligus menantang, dan produk yang benar-benar diandalkan orang. Saya cepat belajar, terbiasa membangun dari nol, dan tidak keberatan menangani bagian yang paling rumit.',
      stackLabel: 'Teknologi yang sering saya pakai:',
      cv: 'Lihat CV saya',
      cvMissing: 'CV segera hadir',
    },
    skills: {
      title: 'Keahlian',
      subtitle: 'Perkakas yang saya andalkan',
      groups: {
        frontend: 'Frontend',
        backend: 'Backend',
        mobile: 'Mobile',
        tools: 'Perkakas & Lainnya',
      },
      items: {
        security: 'Dasar Keamanan Siber',
      },
    },
    projects: {
      title: 'Karya Pilihan',
      subtitle: 'Yang benar-benar saya kerjakan',
      view: 'Lihat Proyek',
      items: {
        'sapu-jagat': {
          name: 'Sapu Jagat',
          description:
            'Aplikasi web full-stack sebagai proyek akhir Coding Camp 2025 powered by DBS Foundation — sisi klien yang dinamis, server yang efisien, dan integrasi API Machine Learning.',
        },
        'ukm-inventory': {
          name: 'Aplikasi Manajemen Toko UKM',
          description:
            'Aplikasi mobile manajemen toko untuk UKM, dibangun dari nol dengan pencatatan stok secara real-time dan pencatatan transaksi penjualan.',
        },
        'school-archive': {
          name: 'Sistem Arsip Data Siswa',
          description:
            'Proyek skripsi — sistem arsip data siswa berbasis web yang dibangun untuk sekolah dasar.',
        },
        'iot-balance': {
          name: 'Sistem Manajemen Saldo IoT',
          description:
            'Arsitektur IoT yang dibangun dari nol dengan integrasi RFID dan Arduino, mengimplementasikan logika manajemen saldo dalam bahasa C.',
        },
      },
    },
    experience: {
      title: 'Pengalaman',
      subtitle: 'Bagaimana saya sampai di sini',
      items: {
        'coding-camp': {
          title: 'Front-End & Back-End Developer',
          company: 'Coding Camp 2025 powered by DBS Foundation',
          date: 'Feb — Jul 2025',
          highlights: [
            'Mempelajari pengembangan web menyeluruh, dari dasar HTML/CSS/JavaScript hingga konsep yang lebih lanjut',
            'Membangun "Sapu Jagat", aplikasi web full-stack dengan Vue.js, Tailwind CSS, Node.js, dan Hapi.js, lengkap dengan integrasi API Machine Learning',
            'Distinction Graduate — 10% teratas di jalur pembelajaran',
          ],
        },
        'ukm-project': {
          title: 'Proyek Akhir Mata Kuliah',
          company: 'Universitas Bhayangkara Jakarta Raya',
          date: 'Okt — Des 2024',
          highlights: [
            'Membangun aplikasi mobile manajemen stok toko untuk UKM dari nol menggunakan Flutter',
            'Mengimplementasikan fitur inti berupa manajemen stok real-time dan pencatatan transaksi penjualan',
          ],
        },
        infradigital: {
          title: 'Pelatihan Ready4AI & Security',
          company: 'InfraDigital Foundation',
          date: 'Feb — Agu 2024',
          highlights: [
            'Menyelesaikan pelatihan keamanan siber menyeluruh dari Microsoft melalui InfraDigital Foundation',
            'Mempelajari dasar keamanan siber, lanskap ancaman, dan teknik mitigasinya',
          ],
        },
        'iot-project': {
          title: 'Proyek Akhir Mata Kuliah',
          company: 'Universitas Bhayangkara Jakarta Raya',
          date: 'Nov — Des 2022',
          highlights: [
            'Mengimplementasikan arsitektur IoT dari nol dengan integrasi RFID dan Arduino',
            'Mengimplementasikan fungsi manajemen saldo pada Arduino menggunakan bahasa C',
          ],
        },
        degree: {
          title: 'S1 Informatika',
          company: 'Universitas Bhayangkara Jakarta Raya',
          date: '2022 — 2026',
          highlights: [
            'IPK: 3,69 — peminatan Software Development',
            'Skripsi: sistem arsip data siswa berbasis web untuk sekolah dasar',
          ],
        },
      },
    },
    certificates: {
      title: 'Sertifikat',
      subtitle: 'Bukti dari perjalanannya',
      empty: 'Sertifikat sedang disiapkan — rak ini akan segera terisi.',
      hint: 'Geser atau gulir untuk menelusuri',
      prev: 'Sertifikat sebelumnya',
      next: 'Sertifikat berikutnya',
      preview: 'Pratinjau sertifikat',
      items: {
        '01-coding-camp-2025': {
          title: 'Coding Camp 2025 — Distinction Graduate',
          issuer: 'DBS Foundation × Dicoding · Jul 2025',
        },
        '02-dasar-ai': {
          title: 'Belajar Dasar AI',
          issuer: 'Dicoding Indonesia · Des 2025',
        },
        '03-backend-javascript': {
          title: 'Belajar Back-End Pemula dengan JavaScript',
          issuer: 'Dicoding Indonesia · Mei 2025',
        },
        '04-web-intermediate': {
          title: 'Belajar Pengembangan Web Intermediate',
          issuer: 'Dicoding Indonesia · Mei 2025',
        },
        '05-frontend-fundamental': {
          title: 'Belajar Fundamental Front-End Web Development',
          issuer: 'Dicoding Indonesia · Apr 2025',
        },
        '06-frontend-pemula': {
          title: 'Belajar Membuat Front-End Web untuk Pemula',
          issuer: 'Dicoding Indonesia · Mar 2025',
        },
        '07-javascript-dasar': {
          title: 'Belajar Dasar Pemrograman JavaScript',
          issuer: 'Dicoding Indonesia · Mar 2025',
        },
        '08-web-dasar': {
          title: 'Belajar Dasar Pemrograman Web',
          issuer: 'Dicoding Indonesia · Feb 2025',
        },
        '09-git-github': {
          title: 'Belajar Dasar Git dengan GitHub',
          issuer: 'Dicoding Indonesia · Feb 2025',
        },
        '10-logika-pemrograman': {
          title: 'Pengenalan ke Logika Pemrograman',
          issuer: 'Dicoding Indonesia · Feb 2025',
        },
        '11-dasar-pemrograman': {
          title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
          issuer: 'Dicoding Indonesia · Feb 2025',
        },
        '12-uiux-kemnaker': {
          title: 'Talent & Innovation Hub — Fundamental UI/UX Design',
          issuer: 'Kementerian Ketenagakerjaan RI · Jul 2026',
        },
      },
    },
    contact: {
      title: 'Kontak',
      subtitle: 'Mari mengobrol',
      heading: 'Mari bangun sesuatu bersama.',
      text: 'Saat ini saya terbuka untuk kesempatan baru — magang, posisi junior developer, atau proyek freelance. Entah Anda punya lowongan, ide yang ingin diwujudkan, atau sekadar ingin berdiskusi, kotak masuk saya selalu terbuka dan setiap pesan saya baca.',
    },
    modal: {
      close: 'Tutup',
      prev: 'Tangkapan layar sebelumnya',
      next: 'Tangkapan layar berikutnya',
      goTo: 'Ke tangkapan layar',
      screenshot: 'tangkapan layar',
      comingSoon: 'Tangkapan layar segera hadir',
    },
  },
}

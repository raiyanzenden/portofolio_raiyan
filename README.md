# Portfolio — zenden • Raiyan Danish Aufa

Website portofolio pribadi untuk **Raiyan Danish Aufa** (`zenden`) — Siswa Rekayasa Perangkat Lunak (RPL), UI/UX Designer, Web Developer, dan Kreator.

Dirancang dengan estetika **Clean Dark Minimalist** yang elegan dengan sentuhan halus warna **ungu** (`#a855f7`), minim gradasi, bebas dari elemen klise generik, dan fokus pada kejelasan karya serta tipografi yang proporsional.

---

## 🚀 Cara Melihat & Menjalankan Website

Website ini dibangun menggunakan **Vanilla HTML, CSS, dan JavaScript murni** tanpa dependensi Node.js, npm, atau framework tambahan.

1. **Cara Paling Cepat:**
   Cukup **klik dua kali (double-click) file `index.html`** pada File Explorer Windows Anda. Website akan langsung terbuka di browser (Google Chrome, Microsoft Edge, Firefox, Brave, dll).
   *Website sudah dirancang kompatibel penuh dengan protokol lokal (`file:///`) maupun web server.*

2. **Menggunakan Local Server (Opsional):**
   Jika Anda menggunakan ekstensi seperti **Live Server** di VS Code, Anda bisa klik kanan pada `index.html` lalu pilih **"Open with Live Server"**.

---

## 📁 Struktur File & Direktori

```text
d:\KIK\portofolio\
├── index.html              — Halaman utama portofolio
├── README.md               — Panduan penggunaan & dokumentasi
├── css/
│   ├── reset.css           — CSS reset & standardisasi browser
│   ├── variables.css       — Design tokens (palet dark matte, aksen ungu, tipografi)
│   ├── base.css            — Gaya global, kartu clean, utility buttons
│   ├── nav.css             — Floating capsule navbar, brand zenden, switcher bahasa
│   ├── hero.css            — Hero intro, status pill, code snippet card
│   ├── about.css           — Bento Grid clean (bio, live clock, RPL program, aktivitas)
│   ├── projects.css        — Showcase proyek bergaya browser mockup bersih
│   ├── skills.css          — Matrix keahlian teknis
│   ├── achievement.css     — Kartu penghargaan Poco Extreme Esports
│   ├── contact.css         — Kontak hub & tombol salin email
│   └── footer.css          — Footer minimalis
├── js/
│   ├── app.js              — Bundle script mandiri (i18n, live clock, tabs, copy toast, scroll spy)
│   ├── lang.js             — Kamus terjemahan EN / ID
│   └── ...
└── assets/
    ├── images/             — Folder aset foto
    └── projects/           — Folder screenshot proyek (trip-dwk.jpg, landing-page.jpg, game-dev.jpg)
```

---

## 🛠️ Panduan Kustomisasi & Personalisasi

### 1. Menambahkan Screenshot Proyek
Tempatkan tangkapan layar proyek Anda di folder `assets/projects/` dengan nama:
- `assets/projects/trip-dwk.jpg`
- `assets/projects/landing-page.jpg`
- `assets/projects/game-dev.jpg`
*Jika file gambar belum diletakkan, kartu otomatis menampilkan mockup canvas minimalis yang tetap rapi dan bersih.*

### 2. Mengatur Tautan Kontak & Media Sosial
Buka file `index.html` dan cari bagian `#contact`:
- **GitHub:** ganti `href="https://github.com"` dengan URL profil GitHub Anda.
- **Instagram:** ganti `href="https://instagram.com"` dengan URL akun Instagram Anda.
- **LinkedIn:** ganti `href="https://linkedin.com"` dengan URL profil LinkedIn Anda.
- **WhatsApp:** ganti `href="https://wa.me/6281234567890"` dengan nomor WhatsApp Anda.
- **Email:** perbarui atribut `data-email` pada tombol salin dan tautan `mailto:`.

---

## ✨ Karakteristik Desain

1. **Matte Dark with Subtle Purple:** Menggunakan palet hitam pekat (`#08090d`, `#12141c`) dengan sentuhan warna ungu halus (`#a855f7`), tanpa gradasi warna-warni yang mencolok.
2. **Authentic Developer Presentation:** Menampilkan kartu kode bersih dan terstruktur yang menampilkan ringkasan profil dan stack teknologi, tanpa gimmick berlebihan.
3. **Clean Bento Grid:** Bagian *About* disusun secara terstruktur dengan jam digital real-time WIB (Asia/Jakarta), profil kompetensi keahlian RPL, dan tag aktivitas minat.
4. **Bilingual Switcher (EN / ID):** Dukungan penuh bahasa Inggris dan Indonesia dengan transisi instan dan penyimpanan preferensi lokal.
5. **Quick-Copy Email:** Tombol salin email praktis dengan notifikasi feedback melayang.
6. **Tipografi Modern:** Menggunakan font **Plus Jakarta Sans** untuk antarmuka yang elegan dan tidak gepeng, serta **JetBrains Mono** untuk aksen koding.

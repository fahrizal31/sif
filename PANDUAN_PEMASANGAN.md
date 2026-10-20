# SIF POINT BATARA — Paket Situs Statis (Hostinger / GitHub Pages / Vercel)

Paket ini **tidak memerlukan server atau basis data**. Seluruh isi website dibaca dari berkas CSV di folder `data/`, foto produk di folder `foto/`, dan semuanya diubah lewat halaman **`/admin.html`**.

## Isi paket

| Berkas | Fungsi |
|---|---|
| `index.html` | Website publik (termasuk Kalkulator NPV·IRR·PBP dan galeri produk Pahandep Investor) |
| `admin.html` | Admin: data tabel, mitra + unggah foto produk, arus kas triwulan, teks halaman dan menu, penerbitan |
| `data/*.csv` | Data website (peluang, titik, pabrik, kecamatan, kontak, produksi, realisasi, mitra, triwulan, konten) |
| `foto/` | Foto produk mitra (diisi otomatis oleh admin) |
| `data-config.js` | Alamat sumber data (sudah mengarah ke `data/`) |
| `vercel.json`, `.htaccess`, `.nojekyll` | Pengaturan untuk Vercel, Hostinger, dan GitHub Pages |

## 1. Pasang di salah satu layanan

### A. GitHub Pages (gratis)
1. Buat repositori baru di GitHub (publik), unggah **seluruh isi folder ini** (termasuk berkas berawalan titik seperti `.nojekyll`).
2. Settings → Pages → Source: *Deploy from a branch* → Branch `main`, folder `/ (root)` → Save.
3. Alamat: `https://AKUN.github.io/NAMA-REPO/`. Admin: `.../admin.html`.

### B. Vercel (gratis)
1. Unggah isi folder ini ke repositori GitHub (seperti di atas).
2. vercel.com → Add New → Project → Import repositori → Framework Preset: **Other** → Deploy (tanpa perintah build).
3. Setiap admin menerbitkan ke GitHub, Vercel memperbarui situs otomatis (±1 menit). Domain sendiri: Project → Settings → Domains.

### C. Hostinger
- Tanpa Git: hPanel → File Manager → `public_html` → unggah/ekstrak seluruh isi folder ini (tampilkan berkas tersembunyi agar `.htaccess` ikut).
- Otomatis: hPanel → Website → Advanced → **Git** → sambungkan ke repositori GitHub yang sama dan aktifkan auto-deploy. Admin cukup memilih "Terbitkan ke GitHub".

## 2. Sesuaikan alamat domain
Di `index.html`, `robots.txt`, dan `sitemap.xml` terdapat alamat contoh `https://sifpointbatara.id/`. Ganti dengan alamat situs sebenarnya (cari-dan-ganti), terutama untuk pratinjau media sosial dan mesin pencari.

## 3. Memakai Admin (`/admin.html`)
Semua perubahan ditampung di peramban sampai diterbitkan.

- **Data tabel**: sunting peluang, titik peta, pabrik, kecamatan, kontak (isi WhatsApp, surel, tautan formulir), produksi, realisasi. Baris hanya tampil bila kolom `terbit` = `ya`.
- **Mitra & foto produk**: tambah pelaku usaha lokal dan unggah foto (otomatis diperkecil maks. 1000 px, JPEG). Tampil di menu *Pahandep Investor* (kartu mitra dan *Galeri produk unggulan*). Mitra yang belum menyetujui profilnya tampil tidak dapat diterbitkan.
- **Arus kas triwulan**: pilih komoditas, isi arus kas aktual per triwulan; NPV/IRR/PBP langsung terhitung. Setelah diterbitkan, menu *Kalkulator Kelayakan* di website memakai angka itu menggantikan Pra-FS (sel berbingkai emas).
- **Teks halaman & menu**: ubah judul, paragraf, label tombol, dan nama menu apa pun (teks polos).
- **Terbitkan**
  - *Opsi A, GitHub*: isi pemilik, nama repositori, cabang, dan token (GitHub → Settings → Developer settings → Fine-grained tokens → pilih satu repositori → izin **Contents: Read and write**). Token hanya di memori halaman dan hilang saat tab ditutup.
  - *Opsi B, ZIP*: unduh ZIP berisi hanya berkas yang berubah, ekstrak ke `public_html` (timpa), lalu klik *Tandai sudah diunggah manual*.

## 4. Hal penting
- **Isi `data/` dan `foto/` bersifat publik.** Jangan menyimpan NIB, modal usaha, nomor telepon pribadi, atau data rahasia lain.
- **Keamanan admin.** `admin.html` dapat dibuka siapa saja, tetapi hanya pemegang token GitHub (Opsi A) yang dapat mengubah situs. Di Hostinger kunci dengan sandi (lihat komentar di `.htaccess`). Pakai token satu repositori dengan masa berlaku pendek.
- **Mode statis tidak mencatat formulir otomatis.** Formulir permintaan data dan pendaftaran mitra menghasilkan teks yang dikirim lewat WhatsApp/surel/Google Form (isi di tabel *kontak*). Pencatatan otomatis dan akun bertingkat ada di paket backend Cloudflare yang terpisah.
- **Teks yang diubah** hanya berlaku untuk elemen teks polos. Jika `index.html` kelak diganti versi baru, ubahan yang selektornya tak lagi cocok diabaikan tanpa merusak halaman.
- **Uji lokal:** jalankan `python3 -m http.server 8000` di folder ini lalu buka `http://localhost:8000/`. Klik dua kali berkas HTML tidak memuat data CSV (batasan peramban).

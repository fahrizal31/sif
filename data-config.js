/* ============================================================
   PENGATURAN SUMBER DATA SIF POINT BATARA (MODE STATIS)
   Data dibaca dari berkas CSV pada folder data/ di situs yang sama.
   Berkas CSV diubah lewat halaman admin.html lalu diterbitkan
   (ke GitHub, atau diunduh sebagai ZIP dan diunggah ke hosting).
   Hanya baris dengan kolom terbit = ya yang tampil di website.
   Bila berkas kosong/tidak ada, website memakai data bawaan.
   ============================================================ */
window.SIF_CFG = {
  api:       '',   // mode statis: tidak ada pencatatan otomatis; formulir diteruskan lewat WhatsApp/surel
  peluang:   'data/peluang.csv',
  titik:     'data/titik.csv',
  pabrik:    'data/pabrik.csv',
  kecamatan: 'data/kecamatan.csv',
  kontak:    'data/kontak.csv',
  produksi:  'data/produksi.csv',
  realisasi: 'data/realisasi.csv',
  mitra:     'data/mitra.csv',      // profil + foto produk mitra yang disetujui pelaku usaha dan terbit
  triwulan:  'data/triwulan.csv',   // arus kas triwulanan untuk kalkulator NPV/IRR/PBP
  konten:    'data/konten.csv',     // perubahan teks halaman/menu dari admin

  /* Batas wilayah resmi (GeoJSON). Simpan berkas di folder yang sama lalu tulis namanya. */
  batas_kecamatan: '',
  batas_desa:      '',
  batas_sumber:    ''
};

/* Data publik utama dari Cloudflare D1 melalui Vercel rewrite /api/*.
   Kalkulator triwulan dan teks konten masih memakai CSV lokal. */
window.SIF_CFG = {
  api:       '/api/public',
  peluang:   '/api/public/peluang.csv',
  titik:     '/api/public/titik.csv',
  pabrik:    '/api/public/pabrik.csv',
  kecamatan: '/api/public/kecamatan.csv',
  kontak:    '/api/public/kontak.csv',
  produksi:  '/api/public/produksi.csv',
  realisasi: '/api/public/realisasi.csv',
  mitra:     '/api/public/mitra.csv',
  triwulan:  'data/triwulan.csv',
  konten:    'data/konten.csv',

  /* Batas wilayah resmi (GeoJSON). Simpan berkas di folder yang sama lalu tulis namanya. */
  batas_kecamatan: '',
  batas_desa:      '',
  batas_sumber:    ''
};

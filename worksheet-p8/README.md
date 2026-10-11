# PABW — Sabrina Hani Fuaddah — 25523112

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web.

## Pertemuan 3 — Halaman Profil Saya

Topik halaman saya: Daftar Series yang pernah saya tonton.

- Judul halaman: Daftar Series yang pernah saya tonton
- Deskripsi: Daftar Series yang pernah saya tonton beserta tahun, genre dan rating pribadi saya
- Tautan navigasi: Daftar Series, Tambah Series, Tentang Saya
- Dua bagian utama: Daftar Series, Tambah Series
- Kolom tabel: Judul Series, Negara, Tahun, Genre, Rating
- Kolom form: Judul Series, Negara, Rating
- Gambar: LovelyRunner.jpg

## Catatan Penggunaan AI 

Saya menggunakan AI (ChatGPT) untuk membantu memahami instruksi worksheet, memberikan contoh struktur HTML, membantu memperbaiki kode, dan membantu mengecek aksesibilitas.

Saya mengerjakan sendiri penentuan topik, data series, rating, pemilihan gambar, pengujian halaman, serta pengecekan hasil akhir.

## Pertemuan 4 – Design Token

Pada pertemuan ini saya menentukan warna dan beberapa design token yang akan digunakan pada halaman profil.

### Warna
- Warna background: #FFF8DC
- Warna teks utama: #1F2937
- Warna surface: #FFFFFF
- Warna border: #E8DDB5
- Warna utama: #8FA8F5
- Warna danger: #C75C5C
- Warna focus: #6F8FE8

### Token lainnya
- Jarak: 0.25rem, 0.5rem, 0.75rem, 1rem, dan 1.5rem
- Radius: 0.75rem
- Radius full: 999px
- Shadow: 0 1px 3px rgba(0,0,0,.10)
- Ukuran teks: 0.875rem, 1rem, 1.5rem, dan 2.25rem

Saya memilih warna cream dan biru soft agar tampilan halaman terlihat lebih lembut, cerah dan nyaman dilihat.

### Kriteria selesai
Warna utama dapat diubah dari satu token sehingga warna tombol, tautan, judul, dan fokus dapat ikut berubah tanpa mengubah file CSS lainnya.


## Pertemuan 8 — Modern JavaScript

### Data dan Variabel
Data profil disimpan dalam object bernama `profile`.
Daftar skills disimpan dalam array, sedangkan data proyek
disimpan dalam array of objects bernama `projects`.

### Functions
- `buildIntroduction()` digunakan untuk membuat kalimat perkenalan.
- `formatSkills()` digunakan untuk menggabungkan daftar skills.
- Kedua fungsi mengembalikan hasil menggunakan `return`
  dan tidak mengubah data di luar fungsi.

### Array Methods
- `map()` digunakan untuk mengambil judul semua proyek.
- `filter()` digunakan untuk memilih proyek yang sudah selesai.
- `find()` digunakan untuk mencari proyek berdasarkan judul.

### Pengujian
JavaScript dijalankan melalui Live Server.
Hasil perkenalan, skills, dan data proyek berhasil muncul
di Console browser tanpa error.

### Catatan Penggunaan AI
ChatGPT digunakan untuk membantu memahami instruksi,
menyusun kode JavaScript, dan memeriksa error.
Saya memeriksa dan menjalankan kode secara mandiri.

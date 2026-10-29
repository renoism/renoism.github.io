# RENOISM — Website Portofolio

Website portofolio statis bilingual (Indonesia/English) untuk Renoism, dirancang dengan estetika arthouse minimalis hitam-marun. Dibuat agar dapat dipublikasikan gratis menggunakan GitHub Pages dan bisa diedit dari HP Android melalui browser.

## Struktur file

```text
renoism-portfolio/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Sebelum dipublikasikan

Cari dan ganti bagian placeholder berikut di `index.html`:

- `Judul Film Pertama` dan `Judul Film Kedua`
- Metadata `Film pendek · Tahun · Durasi`
- Sinopsis tiap film
- Poster placeholder (saat ini dibuat dengan CSS, tidak menggunakan gambar poster sungguhan)
- `[EMAIL / CONTACT LINK]`
- Bio Renoism jika ingin menyesuaikannya

Jangan menambahkan informasi kontak pribadi kecuali memang ingin dipublikasikan. Jangan menaruh file master atau film rahasia dalam repositori publik.

## Cara menambahkan poster

1. Buat folder `assets` di repositori.
2. Unggah poster, misalnya `film-01-poster.jpg`.
3. Di `index.html`, ganti elemen `<a class="poster poster-one"...>` dengan struktur seperti ini:

```html
<a class="poster poster-one" href="GANTI_DENGAN_TAUTAN_FILM" target="_blank" rel="noopener">
  <img src="assets/film-01-poster.jpg" alt="Poster film pertama">
</a>
```

4. Tambahkan CSS berikut ke `style.css` agar poster mengisi kartu:

```css
.poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
}
```

Jangan gunakan `GANTI_DENGAN_TAUTAN_FILM` apa adanya. Ganti hanya jika tautan pemutaran benar-benar sudah tersedia.

## Cara menambahkan film

Untuk tahap awal, gunakan tautan video yang benar-benar sudah dibuat. Jika ingin menyematkan YouTube, ganti area poster dengan kode embed dari YouTube Studio/Share → Embed. Untuk film privat, ingat bahwa tautan YouTube Unlisted bisa diteruskan siapa pun yang memilikinya. Website statis GitHub Pages tidak menyediakan autentikasi atau kata sandi bawaan.

## Publikasi gratis melalui GitHub Pages (HP Android)

1. Buka https://github.com/ dan masuk atau buat akun.
2. Buat repository bernama `USERNAME.github.io`, ganti `USERNAME` dengan username GitHub-mu.
3. Pilih repository → Add file → Upload files.
4. Unggah `index.html`, `style.css`, `script.js`, dan `README.md` dari folder ini. Pastikan file `index.html` berada di akar repository, bukan di dalam folder tambahan.
5. Tekan **Commit changes**.
6. Buka Settings → Pages.
7. Di bagian Build and deployment, pilih **Deploy from a branch**.
8. Pilih branch `main` dan folder `/(root)`, lalu Save.
9. Tunggu proses publikasi. Alamat website mengikuti pola `https://USERNAME.github.io/`.
10. Buka alamat tersebut di browser HP dan uji tombol bahasa, navigasi, serta tampilan layar kecil.

Panduan resmi: https://docs.github.com/en/pages/quickstart

## Catatan teknis

- Website ini tidak menggunakan backend, database, analytics, atau formulir yang mengumpulkan data.
- Google Fonts membutuhkan koneksi internet; jika font eksternal gagal dimuat, font fallback akan digunakan.
- Ganti metadata deskripsi dan judul halaman jika nama atau arah portofolio berubah.
- GitHub Pages cocok untuk portofolio publik, bukan untuk menyimpan atau melindungi film rahasia.

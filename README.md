Todo List Website — Deskripsi Proyek

Ini adalah proyek sederhana: sebuah aplikasi Todo (Daftar Tugas) berbasis web yang saya buat untuk latihan.

Fitur utama:
- Menambah todo dengan tanggal.
- Menyimpan data di `localStorage` sehingga todo tetap ada setelah refresh.
- Menampilkan daftar sebagai tabel dengan kolom "Todo" dan "Date".
- Tombol untuk menambah, membersihkan semua todo, dan memfilter berdasarkan kata kunci.

Struktur penting proyek:
- `index.html` — halaman utama dan markup (menggunakan utilitas Tailwind).
- `css/input.css` — sumber Tailwind (`@tailwind base; @tailwind components; @tailwind utilities;`).
- `css/output.css` — file CSS terkompilasi (dihasilkan oleh Tailwind CLI).
- `css/styles.css` — file override lokal (optional).
- `js/script.js` — logika aplikasi: render tabel, `addTodo`, `removeAllTodo`, `filterTodo`, dan persistensi `localStorage`.
- `tailwind.config.js` — konfigurasi Tailwind (warna kustom, content paths).
- `package.json`, `postcss.config.js` — konfigurasi build Tailwind/PostCSS.

Cara pakai (untuk pengguna):
1. Buka `index.html` di browser.
2. Ketik tugas di kolom pertama, pilih tanggal, lalu tekan "Add Todo".
3. Gunakan "Clear All Todos" untuk menghapus semua (akan meminta konfirmasi).
4. Ketik kata kunci di input dan tekan "Filter Todos" untuk melihat hasil filter.

Catatan pengembangan:
- Proyek sudah menyertakan skrip build Tailwind. Jika Anda ingin membangun CSS sendiri, jalankan:

```bash
npm install
npm run build:css
```

Setelah build, `css/output.css` akan dibuat; `index.html` sekarang sudah diatur agar menggunakan `css/output.css`.

- Jika Anda melihat peringatan lint seperti "Unknown rule at @tailwind", itu berasal dari stylelint/editor. Jangan hapus `css/input.css` — file ini diperlukan untuk proses build Tailwind. Jika perlu, tambahkan konfigurasi stylelint untuk mengabaikan at-rules Tailwind.

Jika mau, saya bisa bantu:
- Menyederhanakan README lebih jauh.
- Menambahkan skrip deploy atau contoh file `.env`.
- Membuat tombol UI untuk "Clear Storage" yang membersihkan `localStorage`.

Terima kasih — beri tahu jika Anda ingin saya commit perubahan ini ke repo.

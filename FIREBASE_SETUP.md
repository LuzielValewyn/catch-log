# Login owner dengan Google (Firebase Authentication)

Situs ini memakai **Firebase Authentication dengan akun Google** untuk mengelola catatan.
Password lama yang tertulis di kode sudah dihapus.

Penting: tombol login di halaman hanya mengatur apa yang **ditampilkan**. Yang benar-benar melindungi datamu adalah
**aturan Firestore** (`firestore.rules`). Sebelum aturan itu dipublikasikan, siapa pun yang tahu alamat
databasemu masih bisa mengubah datanya. Jadi langkah 3 di bawah tidak boleh dilewat.

## Langkah satu kali (di Firebase console, proyek `del-s-catch-log`)

1. **Aktifkan login Google**
   Authentication > Sign-in method > **Google** > Enable. Pilih *Project support email* (emailmu), lalu **Save**.
2. **Izinkan domain situsmu**
   Authentication > Settings > **Authorized domains** > Add domain, isi alamat situsmu
   (tanpa `https://`). Situs ini tayang di Vercel, jadi domainnya `del-catch-log-weld.vercel.app`.
   Alamat pratinjau Vercel untuk branch lain (`...-git-namabranch-....vercel.app`) tidak otomatis diizinkan,
   jadi tes login sebaiknya dilakukan di alamat utama.
   Kalau kamu membuka situs dari komputermu sendiri lewat `localhost`, domain itu sudah ada.
3. **Publikasikan aturan Firestore**
   Firestore Database > Rules > tempel seluruh isi file `firestore.rules`, lalu **Publish**.
   Emailmu (`mrdelvirio@gmail.com`) sudah tertulis di dalamnya. Kalau nanti mau memakai email lain, tambahkan di daftar itu
   dan di `OWNER_EMAILS` pada `index.html`, semuanya dengan huruf kecil.

## Cara memakainya

- Buka alamat situsmu dengan `?owner=1` di belakangnya, yaitu `https://del-catch-log-weld.vercel.app/?owner=1`,
  lalu klik **Sign in with Google** dan pilih akun yang emailnya kamu tulis di aturan.
- Secara bawaan kamu harus login lagi di sesi browser berikutnya. Kalau kamu mencentang
  **Keep me signed in on this device**, login tersimpan di perangkat itu. Jangan dicentang di perangkat bersama.
- Klik **Edit mode: on** untuk keluar (sign out).
- Pengunjung biasa hanya bisa melihat. Nama yang mereka isi tersimpan di koleksi `visitors` (bisa dilihat di Firebase console).
- Orang lain yang mencoba login dengan akun Google mereka sendiri akan langsung ditolak dengan pesan "That Google account isn't the owner…", dan aturan Firestore juga menolak semua penyimpanan dari akun selain emailmu.

## Kalau ada masalah

| Pesan di layar | Artinya |
|---|---|
| "Google sign-in isn't switched on in Firebase yet." | Langkah 1 belum dilakukan. |
| "This site's address isn't allowed in Firebase yet…" | Langkah 2 belum dilakukan atau alamatnya salah ketik. |
| "Your browser blocked the Google window…" | Izinkan pop-up untuk situs ini, lalu coba lagi. |
| Bisa login tapi simpan gagal ("Save failed") | Aturan Firestore belum dipublikasikan atau emailnya tidak sama dengan akun Google yang kamu pakai (langkah 3). |
| "That Google account isn't the owner…" | Kamu memilih akun Google yang bukan `mrdelvirio@gmail.com`. Pilih akun yang benar. |

Catatan: password lama masih ada di riwayat git repo publikmu. Karena gerbang lamanya sudah dihapus dan aturan Firestore
melindungi data, password itu tidak berguna lagi, tetapi jangan dipakai untuk akun lain.

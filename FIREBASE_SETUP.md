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
   (tanpa `https://`). Alamat utama situs ini adalah **`luzielure.com`** (tayang di Vercel), jadi tambahkan `luzielure.com`.
   Alamat lama `del-catch-log-weld.vercel.app` boleh tetap ada sebagai cadangan.
   Kalau nanti `www.luzielure.com` juga diaktifkan di Vercel, tambahkan juga `www.luzielure.com`.
   Alamat pratinjau Vercel untuk branch lain (`...-git-namabranch-....vercel.app`) tidak otomatis diizinkan,
   jadi tes login sebaiknya dilakukan di alamat utama.
   Jangan hapus domain bawaan Firebase (`localhost`, `<proyek>.firebaseapp.com`, `<proyek>.web.app`).
   Alamat `.firebaseapp.com` dipakai proses login Google, jadi menghapusnya bisa merusak login.
   Kalau kamu membuka situs dari komputermu sendiri lewat `localhost`, domain itu sudah ada.
3. **Publikasikan aturan Firestore**
   Firestore Database > Rules > tempel seluruh isi file `firestore.rules`, lalu **Publish**.
   Emailmu (`mrdelvirio@gmail.com`) sudah tertulis di dalamnya. Kalau nanti mau memakai email lain, tambahkan di daftar itu
   dan di `OWNER_EMAILS` pada `index.html`, semuanya dengan huruf kecil.

4. **Aturan untuk foto (kalau file `firestore.rules` berubah, publikasikan ulang seperti langkah 3)**
   Foto sekarang disimpan di koleksi `photos` (satu foto = satu dokumen), bukan di dalam dokumen utama.
   Tanpa aturan `photos` yang sudah dipublikasikan, tombol "Move photos" dan upload foto baru akan gagal.

## Keamanan data (khusus owner, tab Catch Log)

- **Download backup**: mengunduh semua catatan beserta fotonya ke satu file .json. Lakukan sesekali.
- **Move photos**: memindahkan foto lama ke dokumen terpisah (backup otomatis diunduh dulu, tiap foto dicek ulang sebelum dianggap pindah).
- Kalau tidak ada sinyal, catatan yang kamu simpan ditahan di HP dan dikirim otomatis saat sinyal kembali.
  Situs juga bisa dibuka tanpa sinyal setelah pernah dibuka sekali dengan sinyal.

## Domain sendiri (luzielure.com)

Domain dibeli di Rumahweb, sedangkan situsnya tetap di Vercel. Pengaturannya:

1. **Vercel:** proyek > Settings > Domains > Add Existing > `luzielure.com`, tersambung ke *Production*.
2. **Rumahweb:** Domain > Pengaturan > Manajemen DNS (aktifkan dulu kalau diminta), lalu tambah satu record
   **A** dengan nama kosong (atau `@`) dan nilai yang ditampilkan Vercel (saat ini `216.198.79.1`).
   Nameserver jangan diubah.
3. **Firebase:** tambahkan `luzielure.com` di Authorized domains (langkah 2 di atas).
4. Perpanjangan otomatis domain sebaiknya aktif di Rumahweb. Domain berlaku sampai 21 September 2027.
5. Data yang tersimpan di browser (nama pengunjung, pilihan *Keep me signed in*) terikat per alamat,
   jadi di alamat baru login owner perlu dilakukan sekali lagi.

## Cara memakainya

- Buka alamat situsmu dengan `?owner=1` di belakangnya, yaitu `https://luzielure.com/?owner=1`,
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

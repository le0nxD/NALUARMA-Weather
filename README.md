Berikut versi yang lebih **rapih dan estetik** dari dokumentasi tersebut, dengan tata letak yang lebih konsisten, spasi yang lega, dan gaya markdown yang bersih namun menarik:

---

<div align="center">

# 🌦️ **Naluarma Weather**

<em>✨ Prediksi Cuaca Real-Time & Interpolasi Lagrange untuk Masa Depan 🌍</em>

[🔗 Live Demo](https://naluarma-weather.netlify.app/)

<br/>

<img src="https://img.shields.io/badge/React-%5E18.2.0-61DAFB?style=for-the-badge&logo=react" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-%5E4.9.5-007ACC?style=for-the-badge&logo=typescript" alt="TypeScript" />
<img src="https://img.shields.io/badge/TailwindCSS-%5E3.3.2-38BDF8?style=for-the-badge&logo=tailwindcss" alt="TailwindCSS" />
<img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
<img src="https://img.shields.io/badge/Live-Demo-important?style=for-the-badge&logo=netlify" alt="Live Demo" />

</div>

---

## 🌟 Fitur Utama

* 🔍 **Cuaca Real-Time** — Menampilkan data cuaca terkini menggunakan API terpercaya.
* 🕒 **Prediksi Suhu** — Menggunakan *Lagrange Interpolation* untuk estimasi suhu.
* 🎨 **Antarmuka Modern** — Responsif, intuitif, dan estetis di berbagai perangkat.
* 👗 **Rekomendasi Pakaian** — Berdasarkan suhu & kualitas udara.

---

## ⚙️ Konfigurasi API

Sebelum menjalankan aplikasi, lakukan langkah berikut:

1. Ganti API key pada file `WeatherContext`:

   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
2. Gunakan API key dari salah satu layanan:

   * [WeatherAPI](https://www.weatherapi.com/)
   * [OpenWeatherMap](https://openweathermap.org/)

> ⚠️ Tanpa API key yang valid, aplikasi tidak dapat mengambil data cuaca!

---

## 🛠️ Teknologi yang Digunakan

| Teknologi       | Deskripsi                                   |
| --------------- | ------------------------------------------- |
| **React**       | Library modern untuk membangun UI.          |
| **TypeScript**  | JavaScript dengan sistem pengetikan statis. |
| **TailwindCSS** | Utility-first CSS untuk desain responsif.   |
| **Netlify**     | Platform hosting untuk aplikasi frontend.   |

---

## 📈 Prediksi Suhu: Lagrange Interpolation

Aplikasi ini memprediksi suhu menggunakan rumus:

```math
P(x) = y₀L₀(x) + y₁L₁(x) + ⋯ + yₙLₙ(x)
```

Dengan:

```math
Lᵢ(x) = ∏_{j=0, j≠i}^{n} (x - xⱼ) / (xᵢ - xⱼ)
```

---

## 🚀 Cara Menjalankan

1. Clone repositori:

   ```bash
   git clone https://github.com/le0nxD/naluarma-weather.git
   ```
2. Masuk ke direktori project:

   ```bash
   cd naluarma-weather
   ```
3. Install dependensi:

   ```bash
   npm install
   ```
4. Tambahkan API key seperti dijelaskan di atas.
5. Jalankan server:

   ```bash
   npm run dev
   ```
6. Buka di browser:

   ```
   http://localhost:3000
   ```

---

## 🤝 Kontribusi

Kami sangat terbuka terhadap kontribusi!

1. Fork repositori ini
2. Buat branch baru:

   ```bash
   git checkout -b fitur-anda
   ```
3. Lakukan perubahan dan kirim Pull Request

---

## 📜 Lisensi

Proyek ini menggunakan [MIT License](LICENSE).

---

<div align="center">
  <em>✨ Dibuat dengan 💖 oleh <a href="https://github.com/le0nxD">Naufal Darlian</a></em>
</div>

---

Apakah kamu ingin saya bantu buat versi ini dalam bentuk file `README.md` langsung?

<div align="center">
  <h1>🌦️ <strong>Naluarma Weather</strong></h1>
  <p>
    <em>✨ Prediksi Cuaca Real-Time & Interpolasi Lagrange untuk Masa Depan 🌍</em>
  </p>
  <a href="https://naluarma-weather.netlify.app/">
  </a>
  <p>
    <img src="https://img.shields.io/badge/React-%5E18.2.0-61DAFB?style=for-the-badge&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-%5E4.9.5-007ACC?style=for-the-badge&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/TailwindCSS-%5E3.3.2-38BDF8?style=for-the-badge&logo=tailwindcss" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
    <img src="https://img.shields.io/badge/Live-Demo-important?style=for-the-badge&logo=netlify" alt="Live Demo" />
  </p>
</div>

---

## 🌟 **Fitur Utama**

* 🔍 **Cuaca Real-Time**: Menampilkan data cuaca terkini menggunakan API terpercaya.
* 🕒 **Prediksi Suhu**: Menggunakan **Lagrange Interpolation** untuk estimasi suhu.
* 🎨 **Antarmuka Modern**: Responsif, intuitif, dan estetis untuk berbagai perangkat.
* 👗 **Rekomendasi Pakaian**: Berdasarkan kondisi suhu dan kualitas udara.

---

## ⚠️ **PENTING: Konfigurasi API**

Sebelum menggunakan aplikasi, lakukan langkah berikut:

1. **Ganti API Key** di file `WeatherContext`:

   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
2. Gunakan API Key dari salah satu platform berikut:

   * [WeatherAPI](https://www.weatherapi.com/)
   * [OpenWeatherMap](https://openweathermap.org/)

> ⚠️ **Tanpa API Key yang valid, aplikasi tidak dapat mengambil data cuaca!**

---

## 🛠️ **Teknologi yang Digunakan**

| Teknologi       | Deskripsi                                |
| --------------- | ---------------------------------------- |
| **React**       | Framework modern untuk frontend.         |
| **TypeScript**  | Menambahkan tipe statis pada JavaScript. |
| **TailwindCSS** | Desain responsif dengan utilitas kelas.  |
| **Netlify**     | Hosting untuk aplikasi frontend.         |

---

## 📈 **Prediksi Suhu dengan Lagrange Interpolation**

**Lagrange Interpolation** digunakan untuk memperkirakan suhu berdasarkan data waktu yang tersedia. Rumus yang digunakan:

$$
P(x) = y₀L₀(x) + y₁L₁(x) + \ldots + yₙLₙ(x)
$$

Dengan $Lᵢ(x)$:

$$
Lᵢ(x) = \prod_{j=0, j≠i}^{n} \frac{x - xⱼ}{xᵢ - xⱼ}
$$

---

## 🚀 **Cara Menggunakan**

1. Clone repository ini:

   ```bash
   git clone https://github.com/le0nxD/naluarma-weather.git
   ```

2. Masuk ke folder project:

   ```bash
   cd naluarma-weather
   ```

3. Instal dependencies:

   ```bash
   npm install
   ```

4. Tambahkan API key di file `WeatherContext` (lihat bagian **Konfigurasi API**).

5. Jalankan development server:

   ```bash
   npm run dev
   ```

6. Akses di browser:

   ```
   http://localhost:3000
   ```

---

---

## 🤝 **Kontribusi**

Kami sangat menghargai kontribusi Anda! Ikuti langkah berikut:

1. **Fork repository**.
2. **Buat branch baru** untuk fitur atau perbaikan Anda:

   ```bash
   git checkout -b fitur-anda
   ```
3. **Push perubahan** Anda dan kirim pull request.

---

## 📜 **Lisensi**

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

<div align="center">
  <em>✨ Dibuat dengan 💖 oleh [Naufal Darlian](https://github.com/le0nxD)).</em>
</div>

---

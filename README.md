<div align="center">
  <h1 class="text-4xl font-bold text-blue-600">🌦️ <strong>Naluarma Weather</strong></h1>
  <p class="text-xl text-gray-600">
    <em>✨ Prediksi Cuaca Real-Time & Interpolasi Lagrange untuk Masa Depan 🌍</em>
  </p>
  <a href="https://naluarma-weather.netlify.app/" class="text-blue-500 hover:underline mt-2 block">
    Akses Aplikasi
  </a>
  <p class="mt-4">
    <img src="https://img.shields.io/badge/React-%5E18.2.0-61DAFB?style=for-the-badge&logo=react" alt="React" class="inline-block mr-2" />
    <img src="https://img.shields.io/badge/TypeScript-%5E4.9.5-007ACC?style=for-the-badge&logo=typescript" alt="TypeScript" class="inline-block mr-2" />
    <img src="https://img.shields.io/badge/TailwindCSS-%5E3.3.2-38BDF8?style=for-the-badge&logo=tailwindcss" alt="TailwindCSS" class="inline-block mr-2" />
    <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" class="inline-block mr-2" />
    <img src="https://img.shields.io/badge/Live-Demo-important?style=for-the-badge&logo=netlify" alt="Live Demo" class="inline-block" />
  </p>
</div>

<hr class="my-8 border-t-2 border-gray-300" />

## 🌟 **Fitur Utama**

<ul class="list-disc pl-5 text-lg text-gray-800">
  <li>🔍 <strong>Cuaca Real-Time</strong>: Menampilkan data cuaca terkini menggunakan API terpercaya.</li>
  <li>🕒 <strong>Prediksi Suhu</strong>: Menggunakan <strong>Lagrange Interpolation</strong> untuk estimasi suhu.</li>
  <li>🎨 <strong>Antarmuka Modern</strong>: Responsif, intuitif, dan estetis untuk berbagai perangkat.</li>
  <li>👗 <strong>Rekomendasi Pakaian</strong>: Berdasarkan kondisi suhu dan kualitas udara.</li>
</ul>

<hr class="my-8 border-t-2 border-gray-300" />

## ⚠️ **PENTING: Konfigurasi API**

Sebelum menggunakan aplikasi, lakukan langkah berikut:

1. **Ganti API Key** di file `WeatherContext`:

   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
````

2. Gunakan API Key dari salah satu platform berikut:

   * [WeatherAPI](https://www.weatherapi.com/)
   * [OpenWeatherMap](https://openweathermap.org/)

> ⚠️ **Tanpa API Key yang valid, aplikasi tidak dapat mengambil data cuaca!**

<hr class="my-8 border-t-2 border-gray-300" />

## 🛠️ **Teknologi yang Digunakan**

<div class="overflow-x-auto">
  <table class="min-w-full table-auto text-sm text-gray-700">
    <thead class="bg-gray-100">
      <tr>
        <th class="py-2 px-4 text-left">Teknologi</th>
        <th class="py-2 px-4 text-left">Deskripsi</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="py-2 px-4">**React**</td>
        <td class="py-2 px-4">Framework modern untuk frontend.</td>
      </tr>
      <tr>
        <td class="py-2 px-4">**TypeScript**</td>
        <td class="py-2 px-4">Menambahkan tipe statis pada JavaScript.</td>
      </tr>
      <tr>
        <td class="py-2 px-4">**TailwindCSS**</td>
        <td class="py-2 px-4">Desain responsif dengan utilitas kelas.</td>
      </tr>
      <tr>
        <td class="py-2 px-4">**Netlify**</td>
        <td class="py-2 px-4">Hosting untuk aplikasi frontend.</td>
      </tr>
    </tbody>
  </table>
</div>

<hr class="my-8 border-t-2 border-gray-300" />

## 📈 **Prediksi Suhu dengan Lagrange Interpolation**

**Lagrange Interpolation** digunakan untuk memperkirakan suhu berdasarkan data waktu yang tersedia. Rumus yang digunakan:

$$
P(x) = y₀L₀(x) + y₁L₁(x) + \ldots + yₙLₙ(x)
$$

Dengan \$Lᵢ(x)\$:

$$
Lᵢ(x) = \prod_{j=0, j≠i}^{n} \frac{x - xⱼ}{xᵢ - xⱼ}
$$

<hr class="my-8 border-t-2 border-gray-300" />

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

<hr class="my-8 border-t-2 border-gray-300" />

## 🤝 **Kontribusi**

Kami sangat menghargai kontribusi Anda! Ikuti langkah berikut:

1. **Fork repository**.
2. **Buat branch baru** untuk fitur atau perbaikan Anda:

   ```bash
   git checkout -b fitur-anda
   ```
3. **Push perubahan** Anda dan kirim pull request.

<hr class="my-8 border-t-2 border-gray-300" />

## 📜 **Lisensi**

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

<hr class="my-8 border-t-2 border-gray-300" />

<div align="center">
  <em>✨ Dibuat dengan 💖 oleh [Naufal Darlian](https://github.com/le0nxD)).</em>
</div>
```

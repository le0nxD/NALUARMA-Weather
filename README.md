Berikut versi **README yang ditulis ulang dalam bahasa Inggris**, lengkap dengan **badge tambahan** untuk GitHub stars, forks, issues, commit terakhir, dan top language:

````markdown
<div align="center">

# 🌦️ **Naluarma Weather**

<em>✨ Real-Time Weather Forecast & Lagrange Interpolation for Future Predictions 🌍</em>

[🔗 Live Demo](https://naluarma-weather.netlify.app/)

<br/>

<!-- Tech Stack Badges -->
<img src="https://img.shields.io/badge/React-%5E18.2.0-61DAFB?style=for-the-badge&logo=react" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-%5E4.9.5-007ACC?style=for-the-badge&logo=typescript" alt="TypeScript" />
<img src="https://img.shields.io/badge/TailwindCSS-%5E3.3.2-38BDF8?style=for-the-badge&logo=tailwindcss" alt="TailwindCSS" />
<img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
<img src="https://img.shields.io/badge/Live-Demo-important?style=for-the-badge&logo=netlify" alt="Live Demo" />

<br/>

<!-- GitHub Repo Badges -->
<img src="https://img.shields.io/github/stars/le0nxD/naluarma-weather?style=for-the-badge&logo=github" alt="GitHub Stars" />
<img src="https://img.shields.io/github/forks/le0nxD/naluarma-weather?style=for-the-badge&logo=github" alt="GitHub Forks" />
<img src="https://img.shields.io/github/last-commit/le0nxD/naluarma-weather?style=for-the-badge" alt="Last Commit" />
<img src="https://img.shields.io/github/issues/le0nxD/naluarma-weather?style=for-the-badge" alt="GitHub Issues" />
<img src="https://img.shields.io/github/languages/top/le0nxD/naluarma-weather?style=for-the-badge" alt="Top Language" />

</div>

---

## 🌟 Key Features

* 🔍 **Real-Time Weather** — Displays current weather data from trusted APIs.
* 🕒 **Temperature Forecast** — Uses *Lagrange Interpolation* for temperature estimation.
* 🎨 **Modern UI** — Responsive, intuitive, and visually appealing across all devices.
* 👗 **Clothing Suggestions** — Based on temperature and air quality.

---

## ⚙️ API Configuration

Before running the app, follow these steps:

1. Add your API key in the `WeatherContext` file:

   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
````

2. Use an API key from one of these services:

   * [WeatherAPI](https://www.weatherapi.com/)
   * [OpenWeatherMap](https://openweathermap.org/)

> ⚠️ Without a valid API key, the app won't be able to fetch weather data!

---

## 🛠️ Technologies Used

| Technology      | Description                              |
| --------------- | ---------------------------------------- |
| **React**       | A modern library for building UIs.       |
| **TypeScript**  | JavaScript with static typing.           |
| **TailwindCSS** | Utility-first CSS framework for styling. |
| **Netlify**     | Hosting platform for modern web apps.    |

---

## 📈 Temperature Forecast: Lagrange Interpolation

This app predicts temperature using the Lagrange formula:

```math
P(x) = y₀L₀(x) + y₁L₁(x) + ⋯ + yₙLₙ(x)
```

Where:

```math
Lᵢ(x) = ∏_{j=0, j≠i}^{n} (x - xⱼ) / (xᵢ - xⱼ)
```

---

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/le0nxD/naluarma-weather.git
   ```

2. Navigate to the project directory:

   ```bash
   cd naluarma-weather
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Add your API key as described earlier.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open in your browser:

   ```
   http://localhost:3000
   ```

---

## 🤝 Contributing

We welcome contributions from the community!

1. Fork this repository

2. Create a new branch:

   ```bash
   git checkout -b your-feature
   ```

3. Make your changes and submit a Pull Request

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  <em>✨ Made with 💖 by <a href="https://github.com/le0nxD">Naufal Darlian</a></em>
</div>


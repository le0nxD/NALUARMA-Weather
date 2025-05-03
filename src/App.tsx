import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Algorithm from './pages/Algorithm';
import Team from './pages/Team';
import WeatherInfo from './pages/WeatherInfo';
import { WeatherProvider } from './contexts/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/algoritma" element={<Algorithm />} />
            <Route path="/tim" element={<Team />} />
            <Route path="/info-cuaca" element={<WeatherInfo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </WeatherProvider>
  );
}

export default App;
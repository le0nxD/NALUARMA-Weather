import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail } from 'lucide-react';
import { useWeather } from '../contexts/WeatherContext';

const Footer: React.FC = () => {
  const { weatherCondition } = useWeather();

  // Get footer background based on weather condition
  const getFooterBackground = () => {
    switch (weatherCondition) {
      case 'sunny':
        return 'bg-sunny-700 text-white';
      case 'rainy':
        return 'bg-rainy-700 text-white';
      case 'cloudy':
        return 'bg-cloudy-700 text-white';
      case 'foggy':
        return 'bg-foggy-700 text-white';
      default:
        return 'bg-primary-700 text-white';
    }
  };

  return (
    <footer className={`py-10 ${getFooterBackground()}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Prediksi Cuaca</h3>
            <p className="text-sm text-white/80">
              Aplikasi prediksi cuaca menggunakan metode interpolasi Lagrange untuk memberikan
              informasi cuaca yang akurat dan komprehensif di Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/80 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/algoritma" className="text-sm text-white/80 hover:text-white transition-colors">
                  Algoritma
                </Link>
              </li>
              <li>
                <Link to="/tim" className="text-sm text-white/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/info-cuaca" className="text-sm text-white/80 hover:text-white transition-colors">
                  Info Cuaca
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Hubungi Kami</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 text-center text-sm text-white/60">
          <p className="mb-2">© {new Date().getFullYear()} NALUARMA Weather. Semua hak dilindungi.</p>
          <p className="text-white/60">
            Data cuaca disediakan oleh{' '}
            <a 
              href="https://www.weatherapi.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/80 hover:text-white underline"
            >
              WeatherAPI.com
            </a>
            {' '}dan{' '}
            <a 
              href="https://openweathermap.org/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/80 hover:text-white underline"
            >
              OpenWeatherMap
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
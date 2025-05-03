import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cloud, Sun, Wind } from 'lucide-react';
import { useWeather } from '../contexts/WeatherContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { weatherCondition } = useWeather();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavbarBackground = () => {
    if (!isScrolled) return 'bg-white/80 backdrop-blur-sm';
    
    switch (weatherCondition) {
      case 'sunny':
        return 'bg-sunny-500/95 text-white backdrop-blur-sm';
      case 'rainy':
        return 'bg-rainy-500/95 text-white backdrop-blur-sm';
      case 'cloudy':
        return 'bg-cloudy-500/95 text-white backdrop-blur-sm';
      case 'foggy':
        return 'bg-foggy-500/95 text-white backdrop-blur-sm';
      default:
        return 'bg-primary-500/95 text-white backdrop-blur-sm';
    }
  };

  const getTextColor = () => {
    if (!isScrolled) {
      switch (weatherCondition) {
        case 'sunny':
          return 'text-sunny-900';
        case 'rainy':
          return 'text-rainy-900';
        case 'cloudy':
          return 'text-cloudy-900';
        case 'foggy':
          return 'text-foggy-900';
        default:
          return 'text-primary-900';
      }
    }
    return 'text-white';
  };

  const getNavbarShadow = () => {
    return isScrolled ? 'shadow-lg' : 'shadow-sm';
  };

  const LogoIcon = () => {
    const iconColor = !isScrolled ? `${getTextColor()}` : 'text-white';
    switch (weatherCondition) {
      case 'sunny':
        return <Sun className={`h-6 w-6 mr-2 ${iconColor}`} />;
      case 'rainy':
        return <Cloud className={`h-6 w-6 mr-2 ${iconColor}`} />;
      default:
        return <Wind className={`h-6 w-6 mr-2 ${iconColor}`} />;
    }
  };

  const navLinks = [
    { path: '/', label: 'Beranda' },
    { path: '/algoritma', label: 'Algoritma' },
    { path: '/tim', label: 'About' },
    { path: '/info-cuaca', label: 'Info Cuaca' },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-40 transition-all duration-300 ${getNavbarBackground()} ${getNavbarShadow()}`}
        style={{ 
          transform: `translateY(${isScrolled ? '0' : '0'})`,
          transition: 'all 0.3s ease-in-out'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link 
              to="/" 
              className={`flex items-center transition-opacity duration-200 hover:opacity-80 ${getTextColor()}`}
            >
              <LogoIcon />
              <span className="font-bold text-lg">NALUARMA Weather</span>
            </Link>

            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-all duration-200 hover:opacity-75 ${getTextColor()} ${
                    location.pathname === link.path 
                      ? 'font-semibold border-b-2 border-current pb-1' 
                      : 'font-medium'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 ${getTextColor()}`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64' : 'max-h-0'
          }`}
        >
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {/* Spacer div to prevent content overlap */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
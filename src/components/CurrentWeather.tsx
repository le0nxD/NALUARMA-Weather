import React from 'react';
import { useWeather } from '../contexts/WeatherContext';
import { Droplets, Wind, Thermometer, CloudRain, Loader2, Sun } from 'lucide-react';

const CurrentWeather: React.FC = () => {
  const { weatherData, isLoading, weatherCondition } = useWeather();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin h-10 w-10 text-primary-500" />
        <span className="ml-2 text-lg">Memuat data cuaca...</span>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="text-center p-6 bg-white rounded-xl shadow-md">
        <p>Data cuaca tidak tersedia. Silakan coba lagi nanti.</p>
      </div>
    );
  }

  // Get UV index description
  const getUVDescription = (uvIndex: number): { text: string; color: string } => {
    if (uvIndex <= 2) return { text: 'Rendah', color: 'text-green-500' };
    if (uvIndex <= 5) return { text: 'Sedang', color: 'text-yellow-500' };
    if (uvIndex <= 7) return { text: 'Tinggi', color: 'text-orange-500' };
    if (uvIndex <= 10) return { text: 'Sangat Tinggi', color: 'text-red-500' };
    return { text: 'Ekstrim', color: 'text-purple-500' };
  };

  // Get card classes based on weather condition
  const getCardClasses = () => {
    switch (weatherCondition) {
      case 'sunny':
        return 'bg-gradient-to-r from-sunny-500 to-amber-400 text-white';
      case 'rainy':
        return 'bg-gradient-to-r from-rainy-500 to-blue-400 text-white';
      case 'cloudy':
        return 'bg-gradient-to-r from-cloudy-500 to-slate-400 text-white';
      case 'foggy':
        return 'bg-gradient-to-r from-foggy-500 to-gray-400 text-white';
      default:
        return 'bg-gradient-to-r from-primary-500 to-indigo-400 text-white';
    }
  };

  const uvInfo = getUVDescription(weatherData.current.uv);

  return (
    <div className={`rounded-xl shadow-lg overflow-hidden animate-fade-in ${getCardClasses()}`}>
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Location and Current Temperature */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold">{weatherData.location.name}</h2>
            <p className="text-lg opacity-90">{weatherData.location.country}</p>
            <div className="flex items-center justify-center md:justify-start mt-4">
              <img 
                src={weatherData.current.condition.icon.replace('64x64', '128x128')} 
                alt={weatherData.current.condition.text}
                className="w-20 h-20"
              />
              <div className="ml-4">
                <p className="text-4xl md:text-5xl font-bold">{Math.round(weatherData.current.temp_c)}°C</p>
                <p className="text-lg">{weatherData.current.condition.text}</p>
              </div>
            </div>
          </div>

          {/* Weather Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <Thermometer className="h-5 w-5 mr-2" />
              <div>
                <p className="text-sm opacity-90">Terasa Seperti</p>
                <p className="font-semibold">{weatherData.current.feelslike_c}°C</p>
              </div>
            </div>
            <div className="flex items-center">
              <Droplets className="h-5 w-5 mr-2" />
              <div>
                <p className="text-sm opacity-90">Kelembaban</p>
                <p className="font-semibold">{weatherData.current.humidity}%</p>
              </div>
            </div>
            <div className="flex items-center">
              <Wind className="h-5 w-5 mr-2" />
              <div>
                <p className="text-sm opacity-90">Angin</p>
                <p className="font-semibold">{weatherData.current.wind_kph} km/j</p>
              </div>
            </div>
            <div className="flex items-center">
              <CloudRain className="h-5 w-5 mr-2" />
              <div>
                <p className="text-sm opacity-90">Hujan</p>
                <p className="font-semibold">
                  {weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%
                </p>
              </div>
            </div>
            <div className="flex items-center col-span-2">
              <Sun className="h-5 w-5 mr-2" />
              <div>
                <p className="text-sm opacity-90">Indeks UV</p>
                <div className="flex items-center">
                  <p className="font-semibold">{weatherData.current.uv}</p>
                  <span className={`ml-2 text-sm px-2 py-0.5 rounded-full bg-white/20`}>
                    {uvInfo.text}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
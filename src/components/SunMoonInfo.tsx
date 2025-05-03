import React from 'react';
import { useWeather } from '../contexts/WeatherContext';
import { Sunrise, Sunset, Moon } from 'lucide-react';

const SunMoonInfo: React.FC = () => {
  const { weatherData, isLoading, weatherCondition } = useWeather();

  if (isLoading || !weatherData) {
    return null;
  }

  const today = weatherData.forecast.forecastday[0];

  // Get background class based on weather condition
  const getBackgroundClass = () => {
    switch (weatherCondition) {
      case 'sunny':
        return 'bg-sunny-50 border-sunny-200';
      case 'rainy':
        return 'bg-rainy-50 border-rainy-200';
      case 'cloudy':
        return 'bg-cloudy-50 border-cloudy-200';
      case 'foggy':
        return 'bg-foggy-50 border-foggy-200';
      default:
        return 'bg-primary-50 border-primary-200';
    }
  };

  // Get icon color based on weather condition
  const getIconColor = () => {
    switch (weatherCondition) {
      case 'sunny':
        return 'text-sunny-500';
      case 'rainy':
        return 'text-rainy-500';
      case 'cloudy':
        return 'text-cloudy-500';
      case 'foggy':
        return 'text-foggy-500';
      default:
        return 'text-primary-500';
    }
  };

  return (
    <div className={`rounded-xl shadow-md border ${getBackgroundClass()} p-6 animate-fade-in`}>
      <h3 className="text-lg font-semibold mb-4">Kondisi Matahari & Bulan</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sun Info */}
        <div className="space-y-4">
          <div className="flex items-center">
            <Sunrise className={`h-5 w-5 mr-3 ${getIconColor()}`} />
            <div>
              <p className="text-sm text-gray-600">Matahari Terbit</p>
              <p className="font-medium">{today.astro.sunrise}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Sunset className={`h-5 w-5 mr-3 ${getIconColor()}`} />
            <div>
              <p className="text-sm text-gray-600">Matahari Terbenam</p>
              <p className="font-medium">{today.astro.sunset}</p>
            </div>
          </div>
        </div>
        
        {/* Moon Info */}
        <div className="space-y-4">
          <div className="flex items-center">
            <Moon className={`h-5 w-5 mr-3 ${getIconColor()}`} />
            <div>
              <p className="text-sm text-gray-600">Fase Bulan</p>
              <p className="font-medium">{today.astro.moon_phase}</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className={`h-5 w-5 mr-3 rounded-full border ${getIconColor()} border-current`}>
              <div 
                className={`h-full rounded-full ${getIconColor()} bg-current opacity-${parseInt(today.astro.moon_illumination, 10) / 10}`}
                style={{ width: `${today.astro.moon_illumination}%` }}
              ></div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Iluminasi Bulan</p>
              <p className="font-medium">{today.astro.moon_illumination}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunMoonInfo;
import React from 'react';
import { useWeather } from '../contexts/WeatherContext';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { Loader2 } from 'lucide-react';

const WeatherForecast: React.FC = () => {
  const { weatherData, isLoading, weatherCondition } = useWeather();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin h-10 w-10 text-primary-500" />
        <span className="ml-2">Memuat perkiraan cuaca...</span>
      </div>
    );
  }

  if (!weatherData) {
    return null;
  }

  // Format date
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return format(date, 'EEEE, d MMMM', { locale: id });
  };

  // Get color based on weather condition
  const getColors = () => {
    switch (weatherCondition) {
      case 'sunny':
        return {
          border: 'border-sunny-200',
          bg: 'bg-sunny-50',
          text: 'text-sunny-700',
          activeDay: 'bg-sunny-500 text-white'
        };
      case 'rainy':
        return {
          border: 'border-rainy-200',
          bg: 'bg-rainy-50',
          text: 'text-rainy-700',
          activeDay: 'bg-rainy-500 text-white'
        };
      case 'cloudy':
        return {
          border: 'border-cloudy-200',
          bg: 'bg-cloudy-50',
          text: 'text-cloudy-700',
          activeDay: 'bg-cloudy-500 text-white'
        };
      case 'foggy':
        return {
          border: 'border-foggy-200',
          bg: 'bg-foggy-50',
          text: 'text-foggy-700',
          activeDay: 'bg-foggy-500 text-white'
        };
      default:
        return {
          border: 'border-primary-200',
          bg: 'bg-primary-50',
          text: 'text-primary-700',
          activeDay: 'bg-primary-500 text-white'
        };
    }
  };

  const colors = getColors();

  return (
    <div className={`rounded-xl shadow-md ${colors.border} ${colors.bg} p-6 animate-fade-in`}>
      <h3 className="text-lg font-semibold mb-4">Perkiraan Cuaca 7 Hari</h3>
      
      <div className="space-y-4">
        {weatherData.forecast.forecastday.map((day: any, index: number) => (
          <div 
            key={day.date}
            className={`flex items-center justify-between p-3 rounded-lg ${
              index === 0 ? colors.activeDay : 'bg-white'
            }`}
          >
            <div className="flex items-center">
              <img 
                src={day.day.condition.icon} 
                alt={day.day.condition.text}
                className="w-10 h-10 mr-4"
              />
              <div>
                <p className={`font-medium ${index === 0 ? 'text-white' : ''}`}>
                  {index === 0 ? 'Hari ini' : formatDate(day.date)}
                </p>
                <p className={`text-sm ${index === 0 ? 'text-white/80' : 'text-gray-600'}`}>
                  {day.day.condition.text}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className={`font-medium ${index === 0 ? 'text-white' : ''}`}>
                {Math.round(day.day.maxtemp_c)}°C
              </p>
              <p className={`text-sm ${index === 0 ? 'text-white/80' : 'text-gray-600'}`}>
                {Math.round(day.day.mintemp_c)}°C
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
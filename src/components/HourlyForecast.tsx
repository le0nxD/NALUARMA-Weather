import React from 'react';
import { useWeather } from '../contexts/WeatherContext';

const HourlyForecast: React.FC = () => {
  const { weatherData, isLoading, weatherCondition } = useWeather();

  if (isLoading || !weatherData) {
    return null;
  }

  const hourlyData = weatherData.forecast.forecastday[0].hour;
  
  // Get current hour
  const currentHour = new Date().getHours();
  
  // Filter to show next 12 hours from current hour
  const nextHours = [...hourlyData.slice(currentHour), ...hourlyData.slice(0, currentHour)]
    .slice(0, 12);

  // Format hour
  const formatHour = (timeString: string) => {
    const date = new Date(timeString);
    return date.getHours().toString().padStart(2, '0') + ':00';
  };

  // Get styling based on weather condition
  const getStyles = () => {
    switch (weatherCondition) {
      case 'sunny':
        return {
          borderColor: 'border-sunny-200',
          activeHour: 'bg-sunny-500 text-white'
        };
      case 'rainy':
        return {
          borderColor: 'border-rainy-200',
          activeHour: 'bg-rainy-500 text-white'
        };
      case 'cloudy':
        return {
          borderColor: 'border-cloudy-200',
          activeHour: 'bg-cloudy-500 text-white'
        };
      case 'foggy':
        return {
          borderColor: 'border-foggy-200',
          activeHour: 'bg-foggy-500 text-white'
        };
      default:
        return {
          borderColor: 'border-primary-200',
          activeHour: 'bg-primary-500 text-white'
        };
    }
  };

  const styles = getStyles();

  return (
    <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in">
      <h3 className="text-lg font-semibold mb-4">Perkiraan Per Jam</h3>
      
      <div className="overflow-x-auto pb-2">
        <div className="flex space-x-4 min-w-max">
          {nextHours.map((hour, index) => (
            <div 
              key={hour.time}
              className={`flex flex-col items-center p-3 rounded-lg min-w-20 border ${
                index === 0 ? styles.activeHour : `${styles.borderColor} bg-white`
              }`}
            >
              <p className={`text-sm font-medium ${index === 0 ? 'text-white' : ''}`}>
                {formatHour(hour.time)}
              </p>
              <img 
                src={hour.condition.icon} 
                alt={hour.condition.text}
                className="w-10 h-10 my-2"
              />
              <p className={`font-medium ${index === 0 ? 'text-white' : ''}`}>
                {Math.round(hour.temp_c)}°C
              </p>
              <p className={`text-xs mt-1 ${index === 0 ? 'text-white/80' : 'text-gray-500'}`}>
                {hour.chance_of_rain}% 💧
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
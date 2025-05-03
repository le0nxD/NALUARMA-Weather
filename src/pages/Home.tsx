import React, { useEffect } from 'react';
import CurrentWeather from '../components/CurrentWeather';
import SunMoonInfo from '../components/SunMoonInfo';
import ClothingRecommendation from '../components/ClothingRecommendation';
import WeatherMap from '../components/WeatherMap';
import TemperaturePrediction from '../components/TemperaturePrediction';
import WeatherForecast from '../components/WeatherForecast';
import LocationSearch from '../components/LocationSearch';
import HourlyForecast from '../components/HourlyForecast';
import AirQualityIndex from '../components/AirQualityIndex';
import ExportButtons from '../components/ExportButtons';
import { useWeather } from '../contexts/WeatherContext';

const Home: React.FC = () => {
  const { weatherCondition } = useWeather();

  useEffect(() => {
    const bodyClasses = document.body.classList;
    bodyClasses.remove(
      'bg-weather-sunny',
      'bg-weather-rainy',
      'bg-weather-cloudy',
      'bg-weather-foggy'
    );
    
    switch (weatherCondition) {
      case 'sunny':
        bodyClasses.add('bg-weather-sunny');
        break;
      case 'rainy':
        bodyClasses.add('bg-weather-rainy');
        break;
      case 'cloudy':
        bodyClasses.add('bg-weather-cloudy');
        break;
      case 'foggy':
        bodyClasses.add('bg-weather-foggy');
        break;
      default:
        bodyClasses.add('bg-weather-sunny');
    }
  }, [weatherCondition]);

  return (
    <div className="pt-24 pb-12 container mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
          Prediksi Cuaca Harian
        </h1>
        <div className="max-w-xl mx-auto mb-8">
          <LocationSearch />
        </div>
        <div className="flex justify-center mb-8">
          <ExportButtons />
        </div>
      </div>

      <div className="mb-8 max-w-4xl mx-auto">
        <CurrentWeather />
      </div>

      <div className="mb-8">
        <HourlyForecast />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <SunMoonInfo />
        <AirQualityIndex />
      </div>

      <div className="mb-8">
        <ClothingRecommendation />
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Peta Cuaca</h3>
        <WeatherMap height="h-64 md:h-96" />
      </div>

      <div className="mb-8">
        <TemperaturePrediction />
      </div>

      <div className="mb-8">
        <WeatherForecast />
      </div>
    </div>
  );
};

export default Home;
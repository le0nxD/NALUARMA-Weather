import React from 'react';
import { useWeather } from '../contexts/WeatherContext';
import { Wind, AlertTriangle } from 'lucide-react';

const AirQualityIndex: React.FC = () => {
  const { weatherData, isLoading, weatherCondition } = useWeather();

  if (isLoading || !weatherData || !weatherData.current.air_quality) {
    return null;
  }

  const { air_quality } = weatherData.current;
  const pm2_5 = air_quality.pm2_5;
  const pm10 = air_quality.pm10;
  const no2 = air_quality.no2;
  const o3 = air_quality.o3;
  const so2 = air_quality.so2;
  const co = air_quality.co;

  const getAQILevel = (aqi: number) => {
    if (aqi <= 50) return { level: 'Baik', color: 'text-green-500', bg: 'bg-green-100' };
    if (aqi <= 100) return { level: 'Sedang', color: 'text-yellow-500', bg: 'bg-yellow-100' };
    if (aqi <= 150) return { level: 'Tidak Sehat untuk Kelompok Sensitif', color: 'text-orange-500', bg: 'bg-orange-100' };
    if (aqi <= 200) return { level: 'Tidak Sehat', color: 'text-red-500', bg: 'bg-red-100' };
    if (aqi <= 300) return { level: 'Sangat Tidak Sehat', color: 'text-purple-500', bg: 'bg-purple-100' };
    return { level: 'Berbahaya', color: 'text-red-700', bg: 'bg-red-200' };
  };

  const getStyles = () => {
    switch (weatherCondition) {
      case 'sunny':
        return 'border-sunny-200 bg-sunny-50';
      case 'rainy':
        return 'border-rainy-200 bg-rainy-50';
      case 'cloudy':
        return 'border-cloudy-200 bg-cloudy-50';
      case 'foggy':
        return 'border-foggy-200 bg-foggy-50';
      default:
        return 'border-primary-200 bg-primary-50';
    }
  };

  const aqiLevel = getAQILevel(air_quality['us-epa-index']);

  return (
    <div className={`rounded-xl shadow-md border ${getStyles()} p-6 animate-fade-in`}>
      <div className="flex items-center mb-4">
        <Wind className="h-6 w-6 mr-2" />
        <h3 className="text-lg font-semibold">Indeks Kualitas Udara</h3>
      </div>

      <div className={`mb-6 p-4 rounded-lg ${aqiLevel.bg}`}>
        <div className="flex items-center justify-between">
          <span className="font-medium">Status:</span>
          <span className={`${aqiLevel.color} font-semibold`}>{aqiLevel.level}</span>
        </div>
        {air_quality['us-epa-index'] > 100 && (
          <div className="mt-2 flex items-center text-sm">
            <AlertTriangle className="h-4 w-4 mr-1 text-orange-500" />
            <span className="text-orange-700">Disarankan untuk membatasi aktivitas di luar ruangan</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 bg-white rounded-lg">
          <p className="text-sm text-gray-600">PM2.5</p>
          <p className="font-semibold">{pm2_5.toFixed(1)} µg/m³</p>
        </div>
        <div className="p-3 bg-white rounded-lg">
          <p className="text-sm text-gray-600">PM10</p>
          <p className="font-semibold">{pm10.toFixed(1)} µg/m³</p>
        </div>
        <div className="p-3 bg-white rounded-lg">
          <p className="text-sm text-gray-600">NO₂</p>
          <p className="font-semibold">{no2.toFixed(1)} µg/m³</p>
        </div>
        <div className="p-3 bg-white rounded-lg">
          <p className="text-sm text-gray-600">O₃</p>
          <p className="font-semibold">{o3.toFixed(1)} µg/m³</p>
        </div>
        <div className="p-3 bg-white rounded-lg">
          <p className="text-sm text-gray-600">SO₂</p>
          <p className="font-semibold">{so2.toFixed(1)} µg/m³</p>
        </div>
        <div className="p-3 bg-white rounded-lg">
          <p className="text-sm text-gray-600">CO</p>
          <p className="font-semibold">{co.toFixed(1)} mg/m³</p>
        </div>
      </div>
    </div>
  );
};

export default AirQualityIndex;
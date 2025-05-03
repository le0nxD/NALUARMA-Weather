import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useWeather } from '../contexts/WeatherContext';
import { MapPin, Loader2 } from 'lucide-react';

interface WeatherMapProps {
  height?: string;
}

const WeatherMap: React.FC<WeatherMapProps> = ({ height = 'h-96' }) => {
  const { weatherData, isLoading, weatherCondition } = useWeather();
  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    if (weatherData) {
      setIsMapReady(true);
    }
  }, [weatherData]);

  if (isLoading) {
    return (
      <div className={`flex justify-center items-center ${height} bg-gray-100 rounded-xl`}>
        <Loader2 className="animate-spin h-10 w-10 text-primary-500" />
        <span className="ml-2">Memuat peta...</span>
      </div>
    );
  }

  if (!weatherData || !isMapReady) {
    return (
      <div className={`flex justify-center items-center ${height} bg-gray-100 rounded-xl`}>
        <MapPin className="h-8 w-8 text-gray-400" />
        <span className="ml-2 text-gray-500">Peta tidak tersedia</span>
      </div>
    );
  }

  const position: [number, number] = [weatherData.location.lat, weatherData.location.lon];
  
  // Get marker icon color based on weather condition
  const getMarkerColor = () => {
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
    <div className="rounded-xl overflow-hidden shadow-md">
      <MapContainer center={position} zoom={10} className={height}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div className="p-2">
              <h3 className="font-semibold">{weatherData.location.name}</h3>
              <p className="text-sm">{Math.round(weatherData.current.temp_c)}°C</p>
              <p className="text-xs">{weatherData.current.condition.text}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default WeatherMap;
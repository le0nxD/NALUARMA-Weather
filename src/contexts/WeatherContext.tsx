import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import axios from 'axios';

// API keys
const API_KEYS = [
  'ec804be28c7d45d387a231354252804',
  '3d538670beedf2bacc1abf64a67f587f'
];

// Types
export type WeatherCondition = 'sunny' | 'rainy' | 'cloudy' | 'foggy';

interface Location {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

interface AirQuality {
  co: number;
  no2: number;
  o3: number;
  so2: number;
  pm2_5: number;
  pm10: number;
  'us-epa-index': number;
}

interface CurrentWeather {
  temp_c: number;
  temp_f: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind_kph: number;
  wind_dir: string;
  humidity: number;
  feelslike_c: number;
  uv: number;
  is_day: number;
  air_quality: AirQuality;
}

interface Forecast {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    daily_chance_of_rain: number;
  };
  astro: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: string;
  };
  hour: Array<{
    time: string;
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    chance_of_rain: number;
  }>;
}

interface WeatherData {
  location: Location;
  current: CurrentWeather;
  forecast: {
    forecastday: Forecast[];
  };
}

interface WeatherContextType {
  weatherData: WeatherData | null;
  isLoading: boolean;
  error: string | null;
  weatherCondition: WeatherCondition;
  searchLocation: (query: string) => Promise<void>;
  searchSuggestions: (query: string) => Promise<Location[]>;
}

interface ApiKeyStatus {
  key: string;
  lastFailure: number | null;
  failureCount: number;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [weatherCondition, setWeatherCondition] = useState<WeatherCondition>('sunny');
  const [apiKeys, setApiKeys] = useState<ApiKeyStatus[]>(
    API_KEYS.map(key => ({ key, lastFailure: null, failureCount: 0 }))
  );

  const FAILURE_COOLDOWN = 5 * 60 * 1000;

  const resetFailedKey = (keyIndex: number) => {
    setApiKeys(prevKeys => {
      const newKeys = [...prevKeys];
      newKeys[keyIndex] = {
        ...newKeys[keyIndex],
        failureCount: 0,
        lastFailure: null
      };
      return newKeys;
    });
  };

  const getNextApiKey = (): string | null => {
    const now = Date.now();
    
    const availableKey = apiKeys.find(({ lastFailure, failureCount }) => {
      if (!lastFailure) return true;
      if (now - lastFailure > FAILURE_COOLDOWN) {
        resetFailedKey(apiKeys.indexOf({ key: availableKey?.key || '', lastFailure, failureCount }));
        return true;
      }
      return false;
    });

    return availableKey?.key || null;
  };

  const markKeyAsFailed = (key: string) => {
    setApiKeys(prevKeys => {
      return prevKeys.map(keyStatus => {
        if (keyStatus.key === key) {
          return {
            ...keyStatus,
            failureCount: keyStatus.failureCount + 1,
            lastFailure: Date.now()
          };
        }
        return keyStatus;
      });
    });
  };

  const determineWeatherCondition = (code: number, isDay: number): WeatherCondition => {
    if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246, 1273, 1276].includes(code)) {
      return 'rainy';
    }
    
    if ([1003, 1006, 1009, 1030, 1135, 1147].includes(code)) {
      return 'cloudy';
    }
    
    if ([1030, 1135, 1147].includes(code)) {
      return 'foggy';
    }
    
    return isDay ? 'sunny' : 'cloudy';
  };

  const makeApiRequest = async (url: string): Promise<any> => {
    let attempts = 0;
    const maxAttempts = API_KEYS.length;

    while (attempts < maxAttempts) {
      const apiKey = getNextApiKey();
      
      if (!apiKey) {
        throw new Error('Semua API key sedang dalam masa cooldown. Silakan coba lagi dalam beberapa menit.');
      }

      try {
        const response = await axios.get(url.replace('API_KEY_PLACEHOLDER', apiKey));
        return response.data;
      } catch (err: any) {
        if (err.response?.status === 403) {
          markKeyAsFailed(apiKey);
          attempts++;
          continue;
        }
        throw err;
      }
    }

    throw new Error('Semua API key tidak berfungsi. Silakan coba lagi nanti.');
  };

  const searchSuggestions = async (query: string): Promise<Location[]> => {
    if (!query.trim()) return [];

    try {
      const data = await makeApiRequest(
        `https://api.weatherapi.com/v1/search.json?key=API_KEY_PLACEHOLDER&q=${query}`
      );
      
      return data.map((item: any) => ({
        name: item.name,
        country: item.country,
        lat: item.lat,
        lon: item.lon
      }));
    } catch (err) {
      console.error('Error fetching location suggestions:', err);
      return [];
    }
  };

  const fetchWeatherData = async (location: string = 'Jakarta') => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await makeApiRequest(
        `https://api.weatherapi.com/v1/forecast.json?key=API_KEY_PLACEHOLDER&q=${location}&days=7&aqi=yes&alerts=no&lang=id`
      );
      
      setWeatherData(data);
      
      if (data.current) {
        const condition = determineWeatherCondition(
          data.current.condition.code,
          data.current.is_day
        );
        setWeatherCondition(condition);
      }
    } catch (err: any) {
      console.error('Error fetching weather data:', err);
      setError(err.message || 'Terjadi kesalahan saat mengambil data cuaca.');
    } finally {
      setIsLoading(false);
    }
  };

  const searchLocation = async (query: string) => {
    if (!query.trim()) return;
    await fetchWeatherData(query);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        isLoading,
        error,
        weatherCondition,
        searchLocation,
        searchSuggestions,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};
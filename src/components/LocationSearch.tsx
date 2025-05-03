import React, { useState, useEffect, useRef } from 'react';
import { useWeather } from '../contexts/WeatherContext';
import { Search, Loader2 } from 'lucide-react';

// Flag mapping for common countries
const countryFlags: { [key: string]: string } = {
  'Indonesia': '🇮🇩',
  'Malaysia': '🇲🇾',
  'Singapore': '🇸🇬',
  'United States': '🇺🇸',
  'United Kingdom': '🇬🇧',
  'Japan': '🇯🇵',
  'China': '🇨🇳',
  'Australia': '🇦🇺',
  'India': '🇮🇳',
  'Canada': '🇨🇦',
  'Germany': '🇩🇪',
  'France': '🇫🇷',
  'Italy': '🇮🇹',
  'Spain': '🇪🇸',
  'Russia': '🇷🇺',
  'Brazil': '🇧🇷',
  'South Korea': '🇰🇷',
  'Netherlands': '🇳🇱',
  'Thailand': '🇹🇭',
  'Philippines': '🇵🇭',
  'Vietnam': '🇻🇳',
};

// Popular Indonesian locations
const popularLocations = [
  'Jakarta',
  'Surabaya',
  'Bandung',
  'Medan',
  'Semarang',
  'Yogyakarta',
  'Makassar',
  'Denpasar',
  'Palembang',
  'Malang',
  'Manado',
  'Padang',
  'Pontianak',
  'Banjarmasin',
  'Pekanbaru'
];

interface Location {
  name: string;
  country: string;
  lat?: number;
  lon?: number;
}

const LocationSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<Location[]>([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { searchLocation, searchSuggestions, weatherData, weatherCondition } = useWeather();

  // Fetch location suggestions when search query changes
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchQuery.trim().length < 2) {
        setSuggestions(popularLocations.map(location => ({ name: location, country: 'Indonesia' })));
        return;
      }

      setIsLoadingSuggestions(true);
      try {
        const results = await searchSuggestions(searchQuery);
        setSuggestions(results);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      } finally {
        setIsLoadingSuggestions(false);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery, searchSuggestions]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    await searchLocation(searchQuery);
    setIsSearching(false);
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const handleLocationClick = async (location: Location) => {
    const searchTerm = `${location.name}, ${location.country}`;
    setSearchQuery(searchTerm);
    setIsSearching(true);
    await searchLocation(searchTerm);
    setIsSearching(false);
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Get color styling based on weather condition
  const getColors = () => {
    switch (weatherCondition) {
      case 'sunny':
        return {
          button: 'bg-sunny-500 hover:bg-sunny-600',
          focus: 'focus:ring-sunny-300',
          placeholder: 'placeholder-sunny-300',
          hover: 'hover:bg-sunny-50'
        };
      case 'rainy':
        return {
          button: 'bg-rainy-500 hover:bg-rainy-600',
          focus: 'focus:ring-rainy-300',
          placeholder: 'placeholder-rainy-300',
          hover: 'hover:bg-rainy-50'
        };
      case 'cloudy':
        return {
          button: 'bg-cloudy-500 hover:bg-cloudy-600',
          focus: 'focus:ring-cloudy-300',
          placeholder: 'placeholder-cloudy-300',
          hover: 'hover:bg-cloudy-50'
        };
      case 'foggy':
        return {
          button: 'bg-foggy-500 hover:bg-foggy-600',
          focus: 'focus:ring-foggy-300',
          placeholder: 'placeholder-foggy-300',
          hover: 'hover:bg-foggy-50'
        };
      default:
        return {
          button: 'bg-primary-500 hover:bg-primary-600',
          focus: 'focus:ring-primary-300',
          placeholder: 'placeholder-primary-300',
          hover: 'hover:bg-primary-50'
        };
    }
  };

  const colors = getColors();

  return (
    <div className="w-full max-w-md mx-auto" ref={searchRef}>
      <div className="relative">
        <div className="flex">
          <input
            type="text"
            placeholder="Cari lokasi di seluruh dunia..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onKeyDown={handleKeyDown}
            onFocus={() => setShowSuggestions(true)}
            className={`w-full px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none ${colors.focus} ${colors.placeholder}`}
          />
          <button
            onClick={handleSearch}
            disabled={isSearching}
            className={`p-2 rounded-r-lg ${colors.button} text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${colors.focus}`}
          >
            {isSearching ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : (
              <Search className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Location suggestions */}
        {showSuggestions && (
          <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 py-1">
            <div className="p-2 border-b">
              <p className="text-xs text-gray-500 font-medium">
                {searchQuery.length < 2 ? 'Lokasi Populer di Indonesia' : 'Hasil Pencarian'}
              </p>
            </div>
            
            {isLoadingSuggestions ? (
              <div className="px-4 py-3 text-center">
                <Loader2 className="animate-spin h-5 w-5 mx-auto text-gray-400" />
              </div>
            ) : suggestions.length > 0 ? (
              suggestions.map((location, index) => (
                <div
                  key={`${location.name}-${location.country}-${index}`}
                  className={`px-4 py-2 cursor-pointer ${colors.hover} transition-colors duration-150`}
                  onClick={() => handleLocationClick(location)}
                >
                  <div className="flex items-center">
                    <span className="mr-2">
                      {countryFlags[location.country] || '🌍'}
                    </span>
                    <span className="font-medium">{location.name}</span>
                    <span className="ml-2 text-sm text-gray-500">{location.country}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500 text-sm">
                Tidak ada lokasi yang ditemukan
              </div>
            )}
          </div>
        )}
      </div>

      {/* Current location display */}
      {weatherData && (
        <div className="flex justify-center mt-3">
          <div className="text-gray-600 text-sm flex items-center">
            <span className="mr-1">
              {countryFlags[weatherData.location.country] || '🌍'}
            </span>
            <span>
              {weatherData.location.name}, {weatherData.location.country}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
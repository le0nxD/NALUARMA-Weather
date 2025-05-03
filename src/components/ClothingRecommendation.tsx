import React from 'react';
import { useWeather } from '../contexts/WeatherContext';
import { ShieldAlert, Wind, Thermometer, Home, VenetianMask as Mask, Shirt, AlertTriangle } from 'lucide-react';

const HealthRecommendation: React.FC = () => {
  const { weatherData, isLoading, weatherCondition } = useWeather();

  if (isLoading || !weatherData) {
    return null;
  }

  // Get current weather data
  const { current } = weatherData;
  const temperatureC = current.temp_c;
  const conditionCode = current.condition.code;
  const windSpeed = current.wind_kph;
  const aqi = current.air_quality['us-epa-index'];

  // Get recommendation based on weather conditions
  const getRecommendation = () => {
    let outdoorActivity = '';
    let ventilation = '';
    let protection = '';
    let clothing = '';
    let airPurifier = '';
    let additionalTips = '';

    // Recommendations based on AQI
    if (aqi <= 50) {
      outdoorActivity = 'Aktivitas di luar ruangan aman dilakukan.';
      ventilation = 'Buka jendela untuk sirkulasi udara yang baik.';
      protection = 'Tidak diperlukan perlindungan khusus.';
      airPurifier = 'Penggunaan penyaring udara opsional.';
    } else if (aqi <= 100) {
      outdoorActivity = 'Pertimbangkan untuk mengurangi aktivitas luar ruangan yang berkepanjangan.';
      ventilation = 'Buka jendela secara berkala untuk ventilasi.';
      protection = 'Kelompok sensitif sebaiknya membawa masker.';
      airPurifier = 'Nyalakan penyaring udara jika tersedia.';
    } else if (aqi <= 150) {
      outdoorActivity = 'Kurangi aktivitas outdoor yang berat.';
      ventilation = 'Tutup jendela saat kualitas udara buruk.';
      protection = 'Disarankan menggunakan masker saat di luar.';
      airPurifier = 'Gunakan penyaring udara dalam ruangan.';
    } else {
      outdoorActivity = 'Hindari aktivitas outdoor yang tidak penting.';
      ventilation = 'Tutup semua jendela untuk menghindari udara luar yang tercemar.';
      protection = 'Wajib menggunakan masker saat beraktivitas di luar.';
      airPurifier = 'Nyalakan penyaring udara 24/7.';
    }

    // Clothing based on temperature
    if (temperatureC >= 30) {
      clothing = 'Gunakan pakaian ringan, bernapas, dan berwarna terang. Bawa payung atau topi untuk perlindungan dari sinar matahari.';
    } else if (temperatureC >= 25) {
      clothing = 'Kenakan pakaian ringan seperti katun. Pertimbangkan membawa jaket tipis untuk ruangan ber-AC.';
    } else if (temperatureC >= 20) {
      clothing = 'Pilih pakaian berlapis seperti kemeja lengan panjang atau cardigan ringan.';
    } else {
      clothing = 'Gunakan pakaian hangat dan berlapis. Sertakan jaket atau sweater tebal.';
    }

    // Additional tips based on conditions
    if (windSpeed > 20) {
      additionalTips += 'Waspadai angin kencang, amankan barang-barang di luar ruangan. ';
    }
    if (current.uv > 7) {
      additionalTips += 'Gunakan tabir surya dan hindari paparan sinar matahari langsung. ';
    }
    if ([1063, 1180, 1183, 1186, 1189, 1192, 1195].includes(conditionCode)) {
      additionalTips += 'Bawa payung dan hindari area rawan banjir. ';
    }

    return { outdoorActivity, ventilation, protection, clothing, airPurifier, additionalTips };
  };

  const recommendation = getRecommendation();

  // Get styling based on weather condition
  const getStyles = () => {
    switch (weatherCondition) {
      case 'sunny':
        return {
          borderColor: 'border-sunny-200',
          bgColor: 'bg-sunny-50',
          iconColor: 'text-sunny-500'
        };
      case 'rainy':
        return {
          borderColor: 'border-rainy-200',
          bgColor: 'bg-rainy-50',
          iconColor: 'text-rainy-500'
        };
      case 'cloudy':
        return {
          borderColor: 'border-cloudy-200',
          bgColor: 'bg-cloudy-50',
          iconColor: 'text-cloudy-500'
        };
      case 'foggy':
        return {
          borderColor: 'border-foggy-200',
          bgColor: 'bg-foggy-50',
          iconColor: 'text-foggy-500'
        };
      default:
        return {
          borderColor: 'border-primary-200',
          bgColor: 'bg-primary-50',
          iconColor: 'text-primary-500'
        };
    }
  };

  const styles = getStyles();

  return (
    <div className={`rounded-xl shadow-md border ${styles.borderColor} ${styles.bgColor} p-6 animate-fade-in`}>
      <h3 className="text-lg font-semibold mb-4">Rekomendasi Kesehatan</h3>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <ShieldAlert className={`h-5 w-5 mr-3 mt-1 ${styles.iconColor}`} />
          <div>
            <p className="font-medium">Aktivitas Outdoor</p>
            <p className="text-sm text-gray-600">{recommendation.outdoorActivity}</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Home className={`h-5 w-5 mr-3 mt-1 ${styles.iconColor}`} />
          <div>
            <p className="font-medium">Ventilasi</p>
            <p className="text-sm text-gray-600">{recommendation.ventilation}</p>
          </div>
        </div>

        <div className="flex items-start">
          <Mask className={`h-5 w-5 mr-3 mt-1 ${styles.iconColor}`} />
          <div>
            <p className="font-medium">Perlindungan</p>
            <p className="text-sm text-gray-600">{recommendation.protection}</p>
          </div>
        </div>

        <div className="flex items-start">
          <Shirt className={`h-5 w-5 mr-3 mt-1 ${styles.iconColor}`} />
          <div>
            <p className="font-medium">Pakaian</p>
            <p className="text-sm text-gray-600">{recommendation.clothing}</p>
          </div>
        </div>

        <div className="flex items-start">
          <Wind className={`h-5 w-5 mr-3 mt-1 ${styles.iconColor}`} />
          <div>
            <p className="font-medium">Penyaring Udara</p>
            <p className="text-sm text-gray-600">{recommendation.airPurifier}</p>
          </div>
        </div>
        
        {recommendation.additionalTips && (
          <div className="flex items-start">
            <AlertTriangle className={`h-5 w-5 mr-3 mt-1 ${styles.iconColor}`} />
            <div>
              <p className="font-medium">Tips Tambahan</p>
              <p className="text-sm text-gray-600">{recommendation.additionalTips}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthRecommendation;
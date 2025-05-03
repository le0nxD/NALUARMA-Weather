import React from 'react';
import { Line } from 'react-chartjs-2';
import { useWeather } from '../contexts/WeatherContext';
import { getPredictedTemperatures } from '../utils/lagrangeInterpolation';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Loader2 } from 'lucide-react';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TemperaturePrediction: React.FC = () => {
  const { weatherData, isLoading, weatherCondition } = useWeather();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin h-10 w-10 text-primary-500" />
        <span className="ml-2">Memuat prediksi suhu...</span>
      </div>
    );
  }

  if (!weatherData) {
    return null;
  }

  // Get temperature predictions
  const predictions = getPredictedTemperatures(weatherData);
  
  // Prepare data for the chart
  const hours = predictions.map((pred) => `${pred.hour}:00`);
  const temperatures = predictions.map((pred) => pred.temperature);
  
  // Get chart colors based on weather condition
  const getChartColors = () => {
    switch (weatherCondition) {
      case 'sunny':
        return {
          bg: 'rgba(249, 115, 22, 0.2)',
          border: 'rgb(249, 115, 22)',
          gridColor: 'rgba(249, 115, 22, 0.1)',
          titleColor: 'rgb(249, 115, 22)'
        };
      case 'rainy':
        return {
          bg: 'rgba(14, 165, 233, 0.2)',
          border: 'rgb(14, 165, 233)',
          gridColor: 'rgba(14, 165, 233, 0.1)',
          titleColor: 'rgb(14, 165, 233)'
        };
      case 'cloudy':
        return {
          bg: 'rgba(100, 116, 139, 0.2)',
          border: 'rgb(100, 116, 139)',
          gridColor: 'rgba(100, 116, 139, 0.1)',
          titleColor: 'rgb(100, 116, 139)'
        };
      case 'foggy':
        return {
          bg: 'rgba(107, 114, 128, 0.2)',
          border: 'rgb(107, 114, 128)',
          gridColor: 'rgba(107, 114, 128, 0.1)',
          titleColor: 'rgb(107, 114, 128)'
        };
      default:
        return {
          bg: 'rgba(99, 102, 241, 0.2)',
          border: 'rgb(99, 102, 241)',
          gridColor: 'rgba(99, 102, 241, 0.1)',
          titleColor: 'rgb(99, 102, 241)'
        };
    }
  };

  const chartColors = getChartColors();
  
  const data = {
    labels: hours,
    datasets: [
      {
        label: 'Suhu (°C)',
        data: temperatures,
        fill: true,
        backgroundColor: chartColors.bg,
        borderColor: chartColors.border,
        tension: 0.4,
        pointRadius: 3,
        pointBackgroundColor: chartColors.border,
      },
    ],
  };
  
  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Prediksi Suhu Menggunakan Interpolasi Lagrange',
        color: chartColors.titleColor,
        font: {
          size: 16,
          weight: 'bold',
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `Suhu: ${context.parsed.y}°C`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: chartColors.gridColor,
        },
        title: {
          display: true,
          text: 'Jam',
        },
      },
      y: {
        grid: {
          color: chartColors.gridColor,
        },
        title: {
          display: true,
          text: 'Suhu (°C)',
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in">
      <Line data={data} options={options} />
      <div className="mt-4 text-sm text-gray-600">
        <p>
          Grafik ini menunjukkan prediksi suhu untuk 24 jam ke depan berdasarkan metode interpolasi Lagrange.
          Prediksi dibuat dengan menggunakan data cuaca saat ini dan historis untuk memberikan perkiraan 
          yang lebih akurat tentang perubahan suhu.
        </p>
      </div>
    </div>
  );
};

export default TemperaturePrediction;
import React from 'react';
import { FileSpreadsheet, File as FilePdf } from 'lucide-react';
import { useWeather } from '../contexts/WeatherContext';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const ExportButtons: React.FC = () => {
  const { weatherData, weatherCondition } = useWeather();

  const getButtonStyle = () => {
    switch (weatherCondition) {
      case 'sunny':
        return 'bg-sunny-500 hover:bg-sunny-600';
      case 'rainy':
        return 'bg-rainy-500 hover:bg-rainy-600';
      case 'cloudy':
        return 'bg-cloudy-500 hover:bg-cloudy-600';
      case 'foggy':
        return 'bg-foggy-500 hover:bg-foggy-600';
      default:
        return 'bg-primary-500 hover:bg-primary-600';
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const exportToExcel = () => {
    if (!weatherData) return;

    const wb = XLSX.utils.book_new();
    
    const headerStyle = {
      font: { bold: true, color: { rgb: "FFFFFF" } },
      fill: { fgColor: { rgb: "4F46E5" } },
      alignment: { horizontal: "center" }
    };

    const subHeaderStyle = {
      font: { bold: true },
      fill: { fgColor: { rgb: "E0E7FF" } }
    };

    const currentWeatherData = [
      ['NALUARMA Weather Report'],
      [],
      ['Informasi Lokasi'],
      ['Lokasi', weatherData.location.name],
      ['Negara', weatherData.location.country],
      ['Tanggal', formatDate(weatherData.location.localtime)],
      [],
      ['Kondisi Cuaca Saat Ini'],
      ['Parameter', 'Nilai'],
      ['Suhu', `${weatherData.current.temp_c}°C`],
      ['Kondisi', weatherData.current.condition.text],
      ['Kelembaban', `${weatherData.current.humidity}%`],
      ['Kecepatan Angin', `${weatherData.current.wind_kph} km/j`],
      [],
      ['Kualitas Udara'],
      ['Parameter', 'Nilai', 'Satuan'],
      ['PM2.5', weatherData.current.air_quality.pm2_5.toFixed(1), 'µg/m³'],
      ['PM10', weatherData.current.air_quality.pm10.toFixed(1), 'µg/m³'],
      ['NO₂', weatherData.current.air_quality.no2.toFixed(1), 'µg/m³'],
      ['O₃', weatherData.current.air_quality.o3.toFixed(1), 'µg/m³'],
      ['SO₂', weatherData.current.air_quality.so2.toFixed(1), 'µg/m³'],
      ['CO', weatherData.current.air_quality.co.toFixed(1), 'mg/m³'],
    ];

    const forecastData = [
      [],
      ['Prakiraan Cuaca'],
      ['Tanggal', 'Suhu Maksimum', 'Suhu Minimum', 'Kondisi', 'Peluang Hujan'],
      ...weatherData.forecast.forecastday.map(day => [
        formatDate(day.date),
        `${day.day.maxtemp_c}°C`,
        `${day.day.mintemp_c}°C`,
        day.day.condition.text,
        `${day.day.daily_chance_of_rain}%`
      ])
    ];

    const allData = [...currentWeatherData, ...forecastData];
    const ws = XLSX.utils.aoa_to_sheet(allData);
    ws['!cols'] = [{ wch: 20 }, { wch: 15 }, { wch: 15 }, { wch: 30 }, { wch: 15 }];
    
    XLSX.utils.book_append_sheet(wb, ws, 'Weather Report');
    XLSX.writeFile(wb, `NALUARMA_Weather_Report_${weatherData.location.name}.xlsx`);
  };

  const exportToPDF = () => {
    if (!weatherData) return;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    let yPos = margin;

    // Helper functions
    const addCenteredText = (text: string, y: number, size = 16, color = [0, 0, 0]) => {
      doc.setFontSize(size);
      doc.setTextColor(color[0], color[1], color[2]);
      doc.text(text, pageWidth / 2, y, { align: 'center' });
    };

    const addSectionHeader = (text: string, y: number) => {
      // Header background
      doc.setFillColor(79, 70, 229);
      doc.rect(margin, y - 6, pageWidth - (margin * 2), 10, 'F');
      
      // Header text
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(12);
      doc.text(text, pageWidth / 2, y, { align: 'center' });
      doc.setTextColor(0, 0, 0);
      return y + 15;
    };

    const addDataRow = (label: string, value: string, y: number) => {
      doc.setFontSize(10);
      doc.text(label, margin, y);
      doc.text(value, margin + 60, y);
      return y + 7;
    };

    // Add logo and title
    doc.setFillColor(79, 70, 229);
    doc.rect(0, 0, pageWidth, 40, 'F');
    
    addCenteredText('NALUARMA Weather Report', 25, 24, [255, 255, 255]);
    yPos = 50;

    // Location and date info
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    yPos = addDataRow('Lokasi:', `${weatherData.location.name}, ${weatherData.location.country}`, yPos);
    yPos = addDataRow('Tanggal:', formatDate(weatherData.location.localtime), yPos);
    yPos += 10;

    // Current Weather
    yPos = addSectionHeader('Kondisi Cuaca Saat Ini', yPos);
    yPos = addDataRow('Suhu:', `${weatherData.current.temp_c}°C`, yPos);
    yPos = addDataRow('Kondisi:', weatherData.current.condition.text, yPos);
    yPos = addDataRow('Kelembaban:', `${weatherData.current.humidity}%`, yPos);
    yPos = addDataRow('Kecepatan Angin:', `${weatherData.current.wind_kph} km/j`, yPos);
    yPos += 10;

    // Air Quality
    yPos = addSectionHeader('Kualitas Udara', yPos);
    
    const aqData = [
      ['Parameter', 'Nilai', 'Satuan'],
      ['PM2.5', weatherData.current.air_quality.pm2_5.toFixed(1), 'µg/m³'],
      ['PM10', weatherData.current.air_quality.pm10.toFixed(1), 'µg/m³'],
      ['NO₂', weatherData.current.air_quality.no2.toFixed(1), 'µg/m³'],
      ['O₃', weatherData.current.air_quality.o3.toFixed(1), 'µg/m³'],
      ['SO₂', weatherData.current.air_quality.so2.toFixed(1), 'µg/m³'],
      ['CO', weatherData.current.air_quality.co.toFixed(1), 'mg/m³']
    ];

    doc.autoTable({
      startY: yPos,
      head: [aqData[0]],
      body: aqData.slice(1),
      theme: 'grid',
      styles: {
        fontSize: 10,
        cellPadding: 5,
        lineWidth: 0.1,
        lineColor: [80, 80, 80]
      },
      headStyles: {
        fillColor: [79, 70, 229],
        textColor: [255, 255, 255],
        fontStyle: 'bold'
      },
      margin: { left: margin, right: margin }
    });

    yPos = (doc as any).lastAutoTable.finalY + 15;

    // Weather Forecast
    yPos = addSectionHeader('Prakiraan Cuaca', yPos);
    
    const forecastData = [
      ['Tanggal', 'Suhu Max', 'Suhu Min', 'Kondisi', 'Peluang Hujan'],
      ...weatherData.forecast.forecastday.map(day => [
        formatDate(day.date),
        `${day.day.maxtemp_c}°C`,
        `${day.day.mintemp_c}°C`,
        day.day.condition.text,
        `${day.day.daily_chance_of_rain}%`
      ])
    ];

    doc.autoTable({
      startY: yPos,
      head: [forecastData[0]],
      body: forecastData.slice(1),
      theme: 'grid',
      styles: {
        fontSize: 10,
        cellPadding: 5,
        lineWidth: 0.1,
        lineColor: [80, 80, 80]
      },
      headStyles: {
        fillColor: [79, 70, 229],
        textColor: [255, 255, 255],
        fontStyle: 'bold'
      },
      margin: { left: margin, right: margin }
    });

    // Add footer with page numbers
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      
      // Add footer background
      doc.setFillColor(245, 245, 245);
      doc.rect(0, pageHeight - 20, pageWidth, 20, 'F');
      
      // Add footer text
      doc.setFontSize(8);
      doc.setTextColor(128, 128, 128);
      doc.text(
        `Generated by NALUARMA Weather - Page ${i} of ${pageCount}`,
        pageWidth / 2,
        pageHeight - 10,
        { align: 'center' }
      );
    }

    doc.save(`NALUARMA_Weather_Report_${weatherData.location.name}.pdf`);
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={exportToExcel}
        className={`flex items-center px-4 py-2 rounded-lg ${getButtonStyle()} text-white transition-colors`}
      >
        <FileSpreadsheet className="h-5 w-5 mr-2" />
        Export Excel
      </button>
      <button
        onClick={exportToPDF}
        className={`flex items-center px-4 py-2 rounded-lg ${getButtonStyle()} text-white transition-colors`}
      >
        <FilePdf className="h-5 w-5 mr-2" />
        Export PDF
      </button>
    </div>
  );
};

export default ExportButtons;
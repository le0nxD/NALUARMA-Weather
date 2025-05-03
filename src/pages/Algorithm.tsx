import React from 'react';
import { FeatherIcon as MathematicsIcon, LayoutList, FunctionSquare as FileFunction, Cloud, Sun, Wind, Thermometer, Droplets, CloudLightning } from 'lucide-react';

const Algorithm: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Project Features */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-primary-600 mb-8">
            Fitur Aplikasi
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Cloud className="h-6 w-6 text-primary-500 mr-3" />
                <h3 className="text-xl font-semibold text-primary-600">Prediksi Cuaca</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  <span>Informasi cuaca real-time</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  <span>Prediksi 7 hari ke depan</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  <span>Data suhu dan kelembaban</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Wind className="h-6 w-6 text-primary-500 mr-3" />
                <h3 className="text-xl font-semibold text-primary-600">Visualisasi Data</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  <span>Grafik interaktif</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  <span>Peta cuaca</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  <span>Indikator kualitas udara</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Sun className="h-6 w-6 text-primary-500 mr-3" />
                <h3 className="text-xl font-semibold text-primary-600">Analisis Cuaca</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  <span>Interpolasi Lagrange</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  <span>Ekspor data (PDF/Excel)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  <span>Rekomendasi aktivitas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Algorithm Section */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-primary-600 mb-8">
            Metode Interpolasi Lagrange
          </h1>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-primary-600">
              <MathematicsIcon className="mr-2 text-primary-500" />
              Penjelasan Metode
            </h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Interpolasi Lagrange adalah metode interpolasi polinomial yang digunakan untuk mencari nilai
                pendekatan dari suatu fungsi pada titik tertentu berdasarkan sekumpulan titik data yang diketahui.
                Metode ini ditemukan oleh matematikawan Perancis bernama Joseph-Louis Lagrange pada abad ke-18.
              </p>
              
              <p>
                Dalam prediksi suhu, metode ini sangat berguna karena memungkinkan kita untuk mengestimasi suhu
                pada waktu yang tidak memiliki pengukuran langsung berdasarkan data suhu yang tersedia dari waktu-waktu
                lainnya.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 my-4">
                <h3 className="font-medium mb-2 text-gray-800">Prinsip Dasar:</h3>
                <p>
                  Jika kita memiliki <em>n+1</em> titik data: (x₀, y₀), (x₁, y₁), ..., (xₙ, yₙ),
                  maka polinomial interpolasi Lagrange berderajat paling banyak <em>n</em> diberikan oleh:
                </p>
                <div className="bg-white p-3 rounded-md border border-gray-200 my-2 overflow-x-auto">
                  <code className="text-primary-600">P(x) = y₀L₀(x) + y₁L₁(x) + ... + yₙLₙ(x)</code>
                </div>
                <p>di mana Lᵢ(x) adalah polinomial basis Lagrange:</p>
                <div className="bg-white p-3 rounded-md border border-gray-200 my-2 overflow-x-auto">
                  <code className="text-primary-600">
                    Lᵢ(x) = ∏(j=0, j≠i, j≤n) (x - xⱼ) / (xᵢ - xⱼ)
                  </code>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-primary-600">
              <LayoutList className="mr-2 text-primary-500" />
              Langkah-langkah Implementasi
            </h2>
            
            <ol className="list-decimal pl-5 space-y-4 text-gray-600">
              <li>
                <strong className="text-gray-800">Pengumpulan Data:</strong> Kumpulkan data suhu dari beberapa waktu pengamatan. Dalam aplikasi
                ini, kita menggunakan data dari API cuaca yang memberikan suhu pada jam-jam tertentu.
              </li>
              <li>
                <strong className="text-gray-800">Pembentukan Polinomial Basis:</strong> Untuk setiap titik data (waktu, suhu), hitung 
                polinomial basis Lagrange.
              </li>
              <li>
                <strong className="text-gray-800">Penghitungan Polinomial Interpolasi:</strong> Gabungkan semua polinomial basis untuk 
                membentuk polinomial interpolasi Lagrange.
              </li>
              <li>
                <strong className="text-gray-800">Prediksi Suhu:</strong> Gunakan polinomial yang telah dibentuk untuk memprediksi suhu 
                pada waktu yang diinginkan.
              </li>
            </ol>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-primary-600">
              <FileFunction className="mr-2 text-primary-500" />
              Implementasi Kode
            </h2>
            
            <p className="mb-4 text-gray-600">
              Berikut adalah implementasi metode Interpolasi Lagrange dalam JavaScript untuk prediksi suhu:
            </p>
            
            <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
{`// Fungsi untuk menghitung basis polinomial Lagrange
const lagrangeBasisPolynomial = (x, j, xi) => {
  let result = 1;
  
  for (let i = 0; i < x.length; i++) {
    if (i !== j) {
      result *= (xi - x[i]) / (x[j] - x[i]);
    }
  }
  
  return result;
};

// Fungsi untuk menghitung interpolasi Lagrange
const lagrangeInterpolation = (x, y, xi) => {
  if (x.length !== y.length) {
    throw new Error('Input arrays must have the same length');
  }
  
  let result = 0;
  
  for (let i = 0; i < x.length; i++) {
    result += y[i] * lagrangeBasisPolynomial(x, i, xi);
  }
  
  return result;
};

// Fungsi untuk memprediksi suhu
const predictTemperature = (hours, temperatures, targetHour) => {
  return lagrangeInterpolation(hours, temperatures, targetHour);
};`}
              </pre>
            </div>
            
            <div className="mt-6 p-4 bg-primary-50 border border-primary-200 rounded-lg">
              <h3 className="font-medium text-primary-700 mb-2">Keunggulan Metode Lagrange:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Tidak memerlukan penyelesaian sistem persamaan linear</li>
                <li>Relatif mudah diimplementasikan</li>
                <li>Memberikan hasil yang akurat jika data tersebar secara merata</li>
                <li>Efisien untuk jumlah titik data yang tidak terlalu banyak</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Algorithm;
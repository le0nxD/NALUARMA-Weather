import React from 'react';
import { Cloud, CloudRain, Sun, Wind, Thermometer, Droplets, CloudLightning } from 'lucide-react';

interface WeatherExplanation {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const WeatherInfo: React.FC = () => {
  const weatherExplanations: WeatherExplanation[] = [
    {
      title: 'Hujan',
      icon: <CloudRain className="h-8 w-8 text-primary-500" />,
      description: 'Hujan terjadi ketika uap air di atmosfer mengalami kondensasi dan membentuk tetesan air yang cukup berat untuk jatuh ke Bumi. Hujan merupakan bagian penting dari siklus air dan berperan dalam menyediakan air bersih untuk kehidupan di Bumi. Di Indonesia, hujan sangat dipengaruhi oleh angin muson dan pola cuaca regional.',
    },
    {
      title: 'Cerah',
      icon: <Sun className="h-8 w-8 text-primary-500" />,
      description: 'Cuaca cerah terjadi ketika langit sebagian besar bebas dari awan dan sinar matahari dapat mencapai permukaan Bumi dengan optimal. Kondisi ini biasanya terjadi saat tekanan udara tinggi mendominasi suatu wilayah, menghasilkan udara yang turun dan mencegah pembentukan awan. Di Indonesia, cuaca cerah paling umum terjadi selama musim kemarau.',
    },
    {
      title: 'Berawan',
      icon: <Cloud className="h-8 w-8 text-primary-500" />,
      description: 'Awan terbentuk ketika udara mengandung uap air naik dan mendingin, menyebabkan uap air mengalami kondensasi menjadi tetesan air atau kristal es kecil. Cuaca berawan terjadi ketika awan menutupi sebagian atau seluruh langit. Awan dapat mempengaruhi suhu, dengan menghalangi sinar matahari (menurunkan suhu siang) atau menahan panas (meningkatkan suhu malam).',
    },
    {
      title: 'Berangin',
      icon: <Wind className="h-8 w-8 text-primary-500" />,
      description: 'Angin adalah pergerakan udara yang terjadi akibat perbedaan tekanan atmosfer. Udara bergerak dari area bertekanan tinggi ke area bertekanan rendah. Di Indonesia, angin muson (monsun) memainkan peran penting dalam menentukan pola cuaca tahunan, dengan angin muson barat yang membawa musim hujan dan angin muson timur yang membawa musim kemarau.',
    },
    {
      title: 'Badai Petir',
      icon: <CloudLightning className="h-8 w-8 text-primary-500" />,
      description: 'Badai petir terjadi ketika awan cumulonimbus berkembang akibat udara hangat yang naik dengan cepat. Tetesan air dan kristal es di dalam awan bergesekan, menciptakan muatan listrik yang akhirnya dilepaskan sebagai petir. Badai petir sering disertai hujan deras, angin kencang, dan kadang-kadang hujan es. Di Indonesia, badai petir lebih sering terjadi selama musim pancaroba.',
    },
    {
      title: 'Suhu',
      icon: <Thermometer className="h-8 w-8 text-primary-500" />,
      description: 'Suhu adalah ukuran energi panas dalam udara, dipengaruhi oleh faktor seperti intensitas sinar matahari, ketinggian, dan kedekatan dengan badan air. Indonesia, sebagai negara tropis, memiliki suhu rata-rata relatif stabil sepanjang tahun. Wilayah pesisir cenderung memiliki fluktuasi suhu yang lebih kecil dibandingkan dengan daerah pedalaman karena efek moderasi dari lautan.',
    },
    {
      title: 'Kelembaban',
      icon: <Droplets className="h-8 w-8 text-primary-500" />,
      description: 'Kelembaban adalah jumlah uap air di udara, diukur sebagai kelembaban relatif (persentase uap air dibandingkan dengan jumlah maksimum yang dapat ditampung udara pada suhu tertentu). Indonesia memiliki kelembaban relatif tinggi sepanjang tahun karena posisinya di ekuator dan dikelilingi oleh lautan. Kelembaban tinggi dapat membuat suhu terasa lebih panas karena mengurangi efektivitas penguapan keringat.',
    },
  ];

  const airQualityInfo = [
    {
      title: 'PM2.5',
      description: 'Partikel halus dengan diameter kurang dari 2.5 mikrometer. Dapat menembus jauh ke dalam paru-paru dan menyebabkan masalah pernapasan serius. Berasal dari pembakaran bahan bakar, industri, dan kebakaran hutan.',
    },
    {
      title: 'PM10',
      description: 'Partikel dengan diameter kurang dari 10 mikrometer. Dapat masuk ke saluran pernapasan atas. Sumber utama termasuk debu jalan, konstruksi, dan aktivitas pertanian.',
    },
    {
      title: 'NO₂',
      description: 'Nitrogen Dioksida adalah gas beracun yang dihasilkan dari pembakaran bahan bakar fosil. Dapat menyebabkan peradangan saluran pernapasan dan memperburuk asma.',
    },
    {
      title: 'O₃',
      description: 'Ozon permukaan terbentuk dari reaksi kimia antara NOx dan VOC di bawah sinar matahari. Dapat menyebabkan masalah pernapasan dan memperburuk kondisi paru-paru yang ada.',
    },
    {
      title: 'SO₂',
      description: 'Sulfur Dioksida dihasilkan dari pembakaran bahan bakar yang mengandung sulfur. Dapat menyebabkan iritasi mata, hidung, dan tenggorokan, serta memperburuk asma.',
    },
    {
      title: 'CO',
      description: 'Karbon Monoksida adalah gas beracun yang dihasilkan dari pembakaran tidak sempurna. Dapat mengurangi kemampuan darah untuk membawa oksigen ke organ dan jaringan.',
    },
  ];

  const weatherTips = [
    'Pantau terus informasi cuaca terkini dari sumber terpercaya.',
    'Siapkan payung atau jas hujan saat keluar rumah, terutama saat musim hujan.',
    'Gunakan pakaian yang sesuai dengan kondisi cuaca.',
    'Hindari aktivitas di luar ruangan saat cuaca ekstrem.',
    'Pastikan untuk menjaga kesehatan dan hidrasi tubuh.',
    'Perhatikan kondisi jalan dan lingkungan sekitar saat berkendara.',
    'Jika memungkinkan, tunda perjalanan jika ada peringatan cuaca buruk.'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-primary-600 mb-6">
          Informasi Cuaca
        </h1>
        
        <p className="text-center max-w-3xl mx-auto mb-12 text-gray-600">
          Pemahaman tentang berbagai fenomena cuaca dan kualitas udara penting untuk menginterpretasikan prediksi cuaca dengan lebih baik. 
          Berikut adalah penjelasan tentang berbagai kondisi cuaca dan parameter kualitas udara yang umum diukur.
        </p>
        
        {/* Weather Explanations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {weatherExplanations.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 transition-transform hover:transform hover:translate-y-[-5px] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 p-3 bg-primary-50 rounded-full">{item.icon}</div>
                <h3 className="text-xl font-semibold text-primary-600">{item.title}</h3>
              </div>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Air Quality Parameters */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-12">
          <h2 className="text-xl font-semibold mb-6 text-primary-600">Parameter Kualitas Udara</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {airQualityInfo.map((item, index) => (
              <div key={index} className="bg-primary-50 p-4 rounded-lg">
                <h3 className="font-medium text-primary-600 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Weather Patterns in Indonesia */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-12">
          <h2 className="text-xl font-semibold mb-4 text-primary-600">Pola Cuaca di Indonesia</h2>
          
          <p className="mb-4 text-gray-600">
            Indonesia memiliki pola cuaca yang unik karena posisi geografisnya yang berada di garis khatulistiwa 
            dan dikelilingi oleh dua samudra serta banyak laut. Berikut adalah karakteristik utama pola cuaca di Indonesia:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h3 className="font-medium text-primary-600 mb-2">Musim</h3>
              <p className="text-gray-600">
                Indonesia memiliki dua musim utama: musim hujan (Oktober-April) dan musim kemarau (Mei-September). 
                Namun, karena pengaruh perubahan iklim, pola ini dapat bervariasi. Musim pancaroba terjadi 
                sebagai periode transisi antara kedua musim utama.
              </p>
            </div>
            
            <div className="bg-primary-50 p-4 rounded-lg">
              <h3 className="font-medium text-primary-600 mb-2">Angin Muson</h3>
              <p className="text-gray-600">
                Angin muson barat laut (Desember-Maret) membawa udara lembab dari Asia dan Samudra Pasifik, 
                menyebabkan curah hujan tinggi. Angin muson tenggara (Juni-September) membawa udara kering 
                dari Australia, menghasilkan musim kemarau di sebagian besar Indonesia.
              </p>
            </div>
            
            <div className="bg-primary-50 p-4 rounded-lg">
              <h3 className="font-medium text-primary-600 mb-2">Variasi Regional</h3>
              <p className="text-gray-600">
                Wilayah Indonesia timur (Papua, Maluku) sering memiliki pola cuaca yang berbeda dengan wilayah 
                barat (Sumatra, Jawa). Beberapa daerah seperti Sulawesi Utara dan sebagian Maluku memiliki pola 
                curah hujan yang berlawanan dengan pola umum Indonesia.
              </p>
            </div>
            
            <div className="bg-primary-50 p-4 rounded-lg">
              <h3 className="font-medium text-primary-600 mb-2">El Niño dan La Niña</h3>
              <p className="text-gray-600">
                Fenomena El Niño dapat menyebabkan kekeringan berkepanjangan di Indonesia, sementara La Niña 
                sering mengakibatkan curah hujan lebih tinggi dari normal dan risiko banjir. Kedua fenomena ini 
                dapat mempengaruhi pola musim normal.
              </p>
            </div>
          </div>
        </div>
        
        {/* Weather Tips */}
        <div className="bg-primary-50 rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-4 text-primary-600">Tips Menghadapi Cuaca</h2>
          
          <ul className="space-y-3">
            {weatherTips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  {index + 1}
                </span>
                <p className="text-gray-600">{tip}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
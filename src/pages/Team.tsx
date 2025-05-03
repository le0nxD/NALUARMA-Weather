import React from 'react';
import { Github, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    github?: string;
    email?: string;
  };
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Muhammad Naufal Darlian',
      role: '2370006152',
      image: 'https://i.pinimg.com/736x/44/22/84/442284f2f68a587b407fd3c7e3e8a0e2.jpg',
      bio: 'Berperan aktif dalam pengembangan aplikasi dengan fokus pada implementasi logika utama melalui WeatherContext.tsx. Mengelola state management, integrasi API, dan pengembangan komponen seperti TemperaturePrediction, WeatherForecast, dan AirQualityIndex.',
      social: {
        github: 'https://github.com/le0nxD',
        email: '237006152@student.unsil.ac.id',
      },
    },
    {
      name: 'Maulana Yusup Sutendi',
      role: '237006154',
      image: 'https://i.pinimg.com/736x/a1/78/04/a1780433c7567a1c8af650869dfb482d.jpg',
      bio: 'Berperan aktif dalam pengembangan antarmuka aplikasi. Mendesain dan mengimplementasikan komponen utama seperti Navbar, Footer, dan halaman Home. Mengembangkan fitur rekomendasi kesehatan dan memastikan tampilan responsif.',
      social: {
        github: 'https://github.com/ulmaulana',
        email: '237006154@student.unsil.ac.id',
      },
    },
    {
      name: 'Ardhi Fardan Kamil',
      role: '237006176',
      image: 'https://i.pinimg.com/736x/dc/72/7b/dc727bec0d5b0c30a4068c02736e0a7a.jpg',
      bio: 'Berperan aktif sebagai Data Visualization Specialist. Mengembangkan visualisasi data cuaca melalui grafik dan peta interaktif. Mengimplementasikan fitur ekspor laporan dan memastikan kompatibilitas lintas browser.',
      social: {
        github: 'https://github.com/Kai2446-cmyk',
        email: '237006176@student.unsil.ac.id',
      },
    },
    {
      name: 'Muhammad LuthFi Nurhakim',
      role: '237006179',
      image: 'https://i.pinimg.com/736x/74/86/4a/74864a16c2bae0d89bedfa630ed48e4f.jpg',
      bio: 'Berperan aktif sebagai Quality Assurance dan UX Enhancer. Mengembangkan komponen prediksi cuaca dan memastikan pengalaman pengguna optimal. Melakukan pengujian menyeluruh untuk memastikan aplikasi bebas dari bug.',
      social: {
        github: 'https://github.com/Oxiliya',
        email: '237006179@student.unsil.ac.id',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            TIM
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami adalah tim yang berdedikasi untuk mengembangkan solusi prediksi cuaca yang akurat dan mudah digunakan.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                <div className="flex space-x-3">
                  {member.social.github && (
                    <a 
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-600 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.email && (
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="text-gray-500 hover:text-primary-600 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Website Name Explanation */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-primary-600 mb-8">
            Arti Nama NALUARMA
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-primary-50 rounded-xl p-6 text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">NA</div>
              <p className="text-gray-700">
                <span className="font-semibold">Nau</span>fal
              </p>
            </div>
            <div className="bg-primary-50 rounded-xl p-6 text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">LU</div>
              <p className="text-gray-700">
                <span className="font-semibold">Lu</span>thfi
              </p>
            </div>
            <div className="bg-primary-50 rounded-xl p-6 text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">AR</div>
              <p className="text-gray-700">
                <span className="font-semibold">Ar</span>dhi
              </p>
            </div>
            <div className="bg-primary-50 rounded-xl p-6 text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">MA</div>
              <p className="text-gray-700">
                <span className="font-semibold">Ma</span>ulana
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-primary-50 rounded-xl px-8 py-4 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">Weather</div>
              <p className="text-gray-700">Aplikasi Prediksi Cuaca</p>
            </div>
          </div>
        </div>

        {/* Role Descriptions */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-primary-600 mb-4">
                {member.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
import React from 'react';
import { Play, Video, Clock, Eye } from 'lucide-react';

const VideosDemos = () => {
  const videos = [
    {
      id: 1,
      title: 'Demo Completo - Plataforma Merlin',
      description: 'Descubre todas las funcionalidades de nuestra plataforma de análisis de datos',
      duration: '15:30',
      views: '2.3K',
      thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Reconocimiento Facial en Tiempo Real',
      description: 'Implementación de biometría facial para autenticación empresarial',
      duration: '8:45',
      views: '1.8K',
      thumbnail: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Proceso KYC Automatizado',
      description: 'Streamline del proceso de conocimiento del cliente con IA',
      duration: '12:20',
      views: '3.1K',
      thumbnail: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Validación de Documentos con IA',
      description: 'Verificación automática de documentos de identidad',
      duration: '6:15',
      views: '1.5K',
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="videos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Videos Demos Merlin</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora nuestras demostraciones interactivas y descubre cómo nuestras soluciones 
            pueden transformar tu negocio con tecnología de vanguardia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transform hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-4">{video.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Eye className="h-4 w-4 mr-1" />
                    {video.views} visualizaciones
                  </div>
                  <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors duration-300 flex items-center">
                    <Video className="h-4 w-4 mr-2" />
                    Ver Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosDemos;
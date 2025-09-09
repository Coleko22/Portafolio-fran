import { Headphones, Play, Download, Calendar } from 'lucide-react';

const Podcasts = () => {
  const podcasts = [
    {
      id: 1,
      title: 'El Futuro de la Biometría en el Sector Financiero',
      description: 'Conversación con expertos sobre las tendencias emergentes en autenticación biométrica',
      duration: '45:20',
      date: '15 Dic 2024',
      host: 'Dr. Ana Martínez',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'KYC Digital: Transformando la Verificación de Identidad',
      description: 'Análisis profundo de las regulaciones y tecnologías en procesos KYC modernos',
      duration: '38:15',
      date: '08 Dic 2024',
      host: 'Ing. Carlos Rodriguez',
      image: 'https://images.pexels.com/photos/6913138/pexels-photo-6913138.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Calidad de Datos: El Fundamento de la IA Empresarial',
      description: 'Estrategias para mantener la integridad y calidad de datos en grandes organizaciones',
      duration: '52:30',
      date: '01 Dic 2024',
      host: 'Dra. Laura González',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="podcasts" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Podcasts Tecnológicos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente actualizado con las últimas tendencias e insights del sector tecnológico. 
            Escucha a nuestros expertos y líderes de la industria.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {podcasts.map((podcast) => (
            <div key={podcast.id} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative mb-4">
                <img 
                  src={podcast.image} 
                  alt={podcast.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm opacity-90">{podcast.duration}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 leading-tight">{podcast.title}</h3>
                <p className="text-gray-600 text-sm">{podcast.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {podcast.date}
                  </div>
                  <span>•</span>
                  <span>{podcast.host}</span>
                </div>

                <div className="flex space-x-3 pt-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300">
                    <Play className="h-4 w-4" />
                    <span>Reproducir</span>
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-lg transition-colors duration-300">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center mx-auto space-x-2 transition-colors duration-300">
            <Headphones className="h-5 w-5" />
            <span>Ver Todos los Podcasts</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Podcasts;
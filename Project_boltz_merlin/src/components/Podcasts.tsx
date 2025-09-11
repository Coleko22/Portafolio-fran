import { Play  } from 'lucide-react';

const Podcasts = () => {
  const podcasts = [
    {
      id: 1,
      title: 'Merlin vs Google Maps (English)',
      link: 'https://drive.google.com/file/d/1CZVvpNrWs9wG-pbo0uwklmwT26hnEwAw/view?usp=drive_link',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Merlin Video Verificacion de Identidad',
      link:'https://drive.google.com/file/d/1ghL3wt5hmvbEWHD5cihb6TQUfTf9Sdyj/view?usp=drive_link',
      image: 'https://images.pexels.com/photos/6913138/pexels-photo-6913138.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Merlin Presentancion',
      link:'https://drive.google.com/file/d/1qW39jB8mFpaAHBEaVuIbetCxz9VdpQSy/view?usp=drive_link',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Merlin Data Quality Servicio de Domicilios Preconfirmados',
      link:'https://drive.google.com/file/d/1eYoJC6kHIqzAks5BHMWvsBnxVUpnc4LK/view?usp=drive_link',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'Merlin Data Technical and Functional Documentation',
      link:'https://drive.google.com/file/d/1WDzvxSjdt04LOiKsO9uWWGgNOcWwLrIV/view?usp=drive_link',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'Merlin Data Technical and Functional Documentation 2025',
      link:'https://drive.google.com/file/d/11fPm6yh7Ia5DLyujo4OSEC_65tvWqxmf/view?usp=drive_link',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 7,
      title: 'Merlin Address Qualifier (MAQ)',
      link:'https://drive.google.com/file/d/1hR5JfjpiJP1yn1GS3CTvLYZXk0JWulcj/view?usp=drive_link',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 8,
      title: 'Iproov Biometric Identity Verification Explained',
      link:'https://drive.google.com/file/d/1-bAeXVUqEi84sYIlt9BJpLZFu9zvnr7V/view?usp=drive_link',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 9,
      title: 'Identidad Digital Merlin KYC',
      link:'https://drive.google.com/file/d/1l0F2WXW0yqVm4GZNJT7J2QCtV15aCOpE/view?usp=drive_link',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 10,
      title: 'Funcionalidades y modalidades de Merlin',
      link:'https://drive.google.com/file/d/1f59FD9pz4kirDZPLqyefttIkmsDozypu/view?usp=drive_link',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 11,
      title: 'Enriquecimiento de Datos: Potenciando la Inteligencia Comercial',
      link:'https://drive.google.com/file/d/1WA06t4prHBZwpYyQu_9CFPOh6I7ypWJq/view?usp=drive_link',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 12,
      title: 'Calidad de Datos como Activo Estratégico',
      link:'https://drive.google.com/file/d/1dNb2Zc6Ok2IHBLiNvvPvmEKIzM5tB5nO/view?usp=drive_link',
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
               
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 leading-tight">{podcast.title}</h3>

                <div className="flex space-x-3 pt-2 justify-center">
                  <a href={podcast.link} target="_blank" rel="noopener noreferrer">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300">
                    <Play className="h-4 w-4" />
                    <span>Reproducir</span>
                  </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Podcasts;
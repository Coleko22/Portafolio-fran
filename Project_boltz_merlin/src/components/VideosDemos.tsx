import { Play, Video, Clock, Eye } from 'lucide-react';

const VideosDemos = () => {
  const videos = [
    {
      id: 1,
      title: 'Calificador de domicilios',
      duration: '15:30',
      views: '2.3K',
      thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: 'https://drive.google.com/file/d/1vtWQso1Y2DQPAiX-UUHcS_uV1HKNqMz9/view?usp=drive_link'
    },
    {
      id: 2,
      title: 'Demo Portlet Colombia',
      duration: '8:45',
      views: '1.8K',
      thumbnail: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: 'https://drive.google.com/file/d/1_uUVR8ffRWwyb_E74CdKpxgIBr-yDGAC/view?usp=drive_link'
    },
    {
      id: 3,
      title: 'Demo Gis NSE Mexico',
      duration: '12:20',
      views: '3.1K',
      thumbnail: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: 'https://drive.google.com/file/d/1-Nf0D3XDLEdSe01zYAyMhyueYjCqP97Z/view?usp=drive_link'
    },
    {
      id: 4,
      title: 'Demo CRM Integraciones Portlet',
      duration: '6:15',
      views: '1.5K',
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: 'https://drive.google.com/file/d/1jMY64XLiaEbBBYRrMOji3uMGTKG5NXM6/view?usp=drive_link'
    },
    {
      id: 5,
      title: 'Demo Retorno de la inversion ROI',
      duration: '6:15',
      views: '1.8K',
      thumbnail: '/public/Gemini_Generated_Image_6cqwc6cqwc6cqwc6.png',
      link: 'https://drive.google.com/file/d/1hpjyBE7vXLWcgxawKCCSZdNrvY7BkPZw/view?usp=drive_link'
    },
    {
      id: 6,
      title: 'Demo Proceso por lotes',
      duration: '6:15',
      views: '1.5K',
      thumbnail: '/public/ChatGPT Image 9 sept 2025, 14_42_54.png',
      link: 'https://drive.google.com/file/d/1zkW9NSb8V9FuE6g0TumDhr5An9LQJDwU/view?usp=drive_link'
    },
    {
      id: 7,
      title: 'Demo Mexico 2024 NSE CDMX',
      duration: '6:15',
      views: '1.5K',
      thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: 'https://drive.google.com/file/d/1JJECapHL1jtK6TQLzo3wbMz-PCJlnX6j/view?usp=drive_link'
    },
    {
      id: 8,
      title: 'Demo Libreta de direcciones Musimundo',
      duration: '6:15',
      views: '1.5K',
      thumbnail: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: 'https://drive.google.com/file/d/1bnbH9QIchyfmgf7AT69wxXydZNu3eE0d/view?usp=drive_link'
    },
    {
      id: 9,
      title: 'Demo Interactivo Personas Nombres',
      duration: '6:15',
      views: '1.5K',
      thumbnail: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: 'https://drive.google.com/file/d/1RUO16eJI2RW-HXNU7WvE8CdV0LDbbcp4/view?usp=drive_link'
    },
    {
      id: 10,
      title: 'Demo CRM Integraciones Portlet',
      duration: '6:15',
      views: '1.5K',
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: 'https://drive.google.com/file/d/1jMY64XLiaEbBBYRrMOji3uMGTKG5NXM6/view?usp=drive_link'
    },
    {
      id: 11,
      title: 'Demo CRM Integraciones Portlet',
      duration: '6:15',
      views: '1.5K',
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: 'https://drive.google.com/file/d/1jMY64XLiaEbBBYRrMOji3uMGTKG5NXM6/view?usp=drive_link'
    },
    {
      id: 12,
      title: 'Demo CRM Integraciones Portlet',
      duration: '6:15',
      views: '1.5K',
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: 'https://drive.google.com/file/d/1jMY64XLiaEbBBYRrMOji3uMGTKG5NXM6/view?usp=drive_link'
    },
    {
      id: 13,
      title: 'Demo CRM Integraciones Portlet',
      duration: '6:15',
      views: '1.5K',
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: 'https://drive.google.com/file/d/1jMY64XLiaEbBBYRrMOji3uMGTKG5NXM6/view?usp=drive_link'
    },
    {
      id: 14,
      title: 'Demo CRM Integraciones Portlet',
      duration: '6:15',
      views: '1.5K',
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: 'https://drive.google.com/file/d/1jMY64XLiaEbBBYRrMOji3uMGTKG5NXM6/view?usp=drive_link'
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
                  <a target="_blank" href={video.link}><button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transform hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 ml-1" />
                  </button>
                  </a>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Eye className="h-4 w-4 mr-1" />
                    {video.views} visualizaciones
                  </div>
                  <a target="_blank" href={video.link}><button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors duration-300 flex items-center">
                    <Video className="h-4 w-4 mr-2" />
                    Ver Demo
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

export default VideosDemos;
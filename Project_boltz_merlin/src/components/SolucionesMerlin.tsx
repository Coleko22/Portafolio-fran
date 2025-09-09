import { Database, Cpu, Cloud, BarChart3, Settings, Layers } from 'lucide-react';

const SolucionesMerlin = () => {
  const solutions = [
    {
      icon: Database,
      title: 'Merlin DataQuality',
      description: 'Suite completa para gestión y calidad de datos empresariales',
      features: [
        'Limpieza automática de datos',
        'Detección de duplicados',
        'Validación en tiempo real',
        'Reportes de calidad'
      ],
      color: 'blue'
    },
    {
      icon: Cpu,
      title: 'Merlin AI Engine',
      description: 'Motor de inteligencia artificial para procesamiento avanzado',
      features: [
        'Machine Learning integrado',
        'Procesamiento de lenguaje natural',
        'Análisis predictivo',
        'Modelos personalizables'
      ],
      color: 'green'
    },
    {
      icon: Cloud,
      title: 'Merlin Cloud Platform',
      description: 'Plataforma en la nube escalable y segura',
      features: [
        'Arquitectura microservicios',
        'Auto-escalado dinámico',
        'Seguridad enterprise',
        'APIs RESTful'
      ],
      color: 'purple'
    },
    {
      icon: BarChart3,
      title: 'Merlin Analytics',
      description: 'Herramientas avanzadas de análisis y visualización',
      features: [
        'Dashboards interactivos',
        'Análisis en tiempo real',
        'Reportes automatizados',
        'Business Intelligence'
      ],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="soluciones" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Soluciones Merlin</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestro ecosistema completo de soluciones tecnológicas diseñadas 
            para impulsar la transformación digital de tu empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const colors = getColorClasses(solution.color);
            return (
              <div key={index} className={`bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 ${colors.border}`}>
                <div className="flex items-start space-x-6">
                  <div className={`${colors.bg} w-16 h-16 rounded-full flex items-center justify-center`}>
                    <solution.icon className={`h-8 w-8 ${colors.text}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className={`w-2 h-2 rounded-full mr-3 ${colors.text.replace('text-', 'bg-')}`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Arquitectura Integrada</h3>
              <p className="text-lg text-blue-100 mb-6">
                Todas nuestras soluciones trabajan en conjunto para crear un ecosistema 
                tecnológico cohesivo que maximiza el valor de sus datos y procesos.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg flex items-center">
                  <Layers className="h-4 w-4 mr-2" />
                  Microservicios
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg flex items-center">
                  <Settings className="h-4 w-4 mr-2" />
                  Configuración Flexible
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg flex items-center">
                  <Cloud className="h-4 w-4 mr-2" />
                  Cloud Native
                </div>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Arquitectura tecnológica"
                className="rounded-lg shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 transform hover:scale-105">
            Solicitar Consultoría Técnica
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolucionesMerlin;
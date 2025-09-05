import React from 'react';
import { Fingerprint, Eye, Shield, Smartphone, Lock, Users } from 'lucide-react';

const Biometria = () => {
  const services = [
    {
      icon: Fingerprint,
      title: 'Reconocimiento de Huellas Digitales',
      description: 'Tecnología de captura y verificación de huellas con precisión médica',
      features: ['Sensor óptico avanzado', 'Algoritmos propietarios', 'Base de datos encriptada']
    },
    {
      icon: Eye,
      title: 'Reconocimiento Facial',
      description: 'Identificación facial en tiempo real con detección de vida',
      features: ['IA de deep learning', 'Detección anti-spoofing', 'Múltiples ángulos de captura']
    },
    {
      icon: Smartphone,
      title: 'Biometría Móvil',
      description: 'Autenticación biométrica integrada en dispositivos móviles',
      features: ['SDK multiplataforma', 'Procesamiento local', 'Baja latencia']
    }
  ];

  const useCases = [
    {
      icon: Lock,
      title: 'Acceso Corporativo',
      description: 'Control de acceso a instalaciones y sistemas empresariales'
    },
    {
      icon: Shield,
      title: 'Seguridad Bancaria',
      description: 'Autenticación fuerte para transacciones financieras'
    },
    {
      icon: Users,
      title: 'Gestión de Personal',
      description: 'Control de asistencia y horarios laborales'
    }
  ];

  return (
    <section id="biometria" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tecnología Biométrica Avanzada</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Implementamos las más avanzadas soluciones biométricas para garantizar la máxima 
            seguridad en la identificación y autenticación de usuarios.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tecnología biométrica"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Casos de Uso Principales</h3>
              <div className="space-y-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <useCase.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h4>
                      <p className="text-gray-600">{useCase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Explorar Soluciones
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biometria;
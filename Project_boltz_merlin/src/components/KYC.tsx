import { UserCheck, FileText, Shield, CheckCircle, Clock, Zap } from 'lucide-react';

const KYC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Verificación de Documentos',
      description: 'Validación automática de documentos de identidad con IA avanzada'
    },
    {
      icon: UserCheck,
      title: 'Autenticación Biométrica',
      description: 'Reconocimiento facial y verificación de vida en tiempo real'
    },
    {
      icon: Shield,
      title: 'Cumplimiento Regulatorio',
      description: 'Adherencia total a normativas AML, PLD y regulaciones internacionales'
    },
    {
      icon: CheckCircle,
      title: 'Validación en Tiempo Real',
      description: 'Verificación instantánea con bases de datos gubernamentales'
    },
    {
      icon: Clock,
      title: 'Proceso Acelerado',
      description: 'Reducción del 85% en tiempo de onboarding de clientes'
    },
    {
      icon: Zap,
      title: 'Integración API',
      description: 'Implementación sencilla con APIs RESTful documentadas'
    }
  ];

  const stats = [
    { value: '99.2%', label: 'Precisión en Verificación' },
    { value: '3.5 seg', label: 'Tiempo Promedio de Proceso' },
    { value: '50+', label: 'Países Soportados' },
    { value: '24/7', label: 'Disponibilidad del Sistema' }
  ];

  return (
    <section id="kyc" className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Soluciones KYC Avanzadas</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Automatiza y acelera tus procesos de conocimiento del cliente con nuestra plataforma 
            de verificación de identidad basada en inteligencia artificial.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Proceso KYC"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">Transforme su Proceso de Onboarding</h3>
            <p className="text-lg text-blue-100 mb-8">
              Nuestra solución KYC utiliza tecnología de vanguardia para verificar identidades 
              de manera rápida, segura y cumpliendo con todas las regulaciones internacionales.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-blue-800 bg-opacity-50 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-green-400">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
              <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 transform hover:scale-105">
            Solicitar Demo KYC
          </button>
        </div>
      </div>
    </section>
  );
};

export default KYC;
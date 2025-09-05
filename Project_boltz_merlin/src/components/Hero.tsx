import React from 'react';
import { ArrowRight, Shield, Database, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Soluciones Avanzadas en
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Calidad de Datos
              </span>
              {' '}y Biometría
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Transformamos la seguridad digital con tecnología de vanguardia. 
              Ofrecemos soluciones integrales para KYC, biometría y gestión de datos 
              que impulsan la innovación en tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105">
                <span>Conocer Soluciones</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Ver Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Tecnología biométrica"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">99.9%</h3>
                  <p className="text-gray-600">Precisión</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
            <Database className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Calidad de Datos</h3>
            <p className="text-blue-100">Garantizamos la integridad y precisión de sus datos empresariales</p>
          </div>
          <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
            <Shield className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Seguridad Biométrica</h3>
            <p className="text-blue-100">Autenticación avanzada con reconocimiento facial y huellas digitales</p>
          </div>
          <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
            <Zap className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Procesamiento Rápido</h3>
            <p className="text-blue-100">Verificación en tiempo real con tecnología de última generación</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
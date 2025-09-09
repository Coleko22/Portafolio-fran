import { Database, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Database className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Merlin Tech</span>
            </div>
            <p className="text-gray-400 mb-6">
              Liderando la transformación digital con soluciones avanzadas 
              en calidad de datos y biometría para empresas de todo el mundo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Soluciones</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Calidad de Datos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Biometría</a></li>
              <li><a href="#" className="hover:text-white transition-colors">KYC Digital</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Análisis IA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Platform</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Recursos</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Videos Demo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Podcasts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentación</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Casos de Estudio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog Técnico</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3" />
                <span>mportela@merlindataquality.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3" />
                <span>+541135963642</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3" />
                <span>Nuñez, CABA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Merlin Tech. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
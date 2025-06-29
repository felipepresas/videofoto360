import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/videofoto360/',
      icon: 'instagram',
      ariaLabel: 'Síguenos en Instagram'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@VideoFoto360',
      icon: 'youtube',
      ariaLabel: 'Visita nuestro canal de YouTube'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/videofoto360pontevedra/',
      icon: 'facebook',
      ariaLabel: 'Visítanos en Facebook'
    },
    {
      name: 'WhatsApp',
      url: 'https://api.whatsapp.com/send/?phone=%2B34622200599&text&type=phone_number&app_absent=0',
      icon: 'whatsapp',
      ariaLabel: 'Contáctanos por WhatsApp'
    }
  ];

  const footerLinks = [
    { title: 'Servicios', links: [
      { name: 'Fotografía de Eventos', path: '/services#eventos' },
      { name: 'Fotografía Inmobiliaria', path: '/services#inmobiliaria' },
      { name: 'Sesiones Personales', path: '/services#sesiones' },
      { name: 'Edición Profesional', path: '/services#edicion' },
    ]},
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="contentinfo" aria-label="Pie de página">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo y descripción */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                VideoFoto360
              </span>
            </Link>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Capturando momentos inolvidables con profesionalismo y atención al detalle. Especialistas en fotografía y video 360° en Pontevedra.
            </p>
            <div className="flex space-x-5 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="text-gray-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{social.name}</span>
                  <i className={`fab fa-${social.icon} text-xl`}></i>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Enlaces de servicios */}
          <div className="lg:pl-8">
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-700 inline-block">
              Nuestros Servicios
            </h3>
            <ul className="space-y-3">
              {footerLinks[0].links.map((link) => (
                <li key={link.name} className="group">
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group-hover:translate-x-1 duration-200"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="lg:pl-8">
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-700 inline-block">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-500/10 p-2 rounded-lg mr-4">
                  <i className="fas fa-envelope text-blue-400 text-lg"></i>
                </div>
                <div>
                  <span className="block text-sm text-gray-400">Email</span>
                  <a href="mailto:antonio@videofoto360.com" className="text-white hover:text-blue-300 transition-colors">
                    antonio@videofoto360.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500/10 p-2 rounded-lg mr-4">
                  <i className="fas fa-phone-alt text-blue-400 text-lg"></i>
                </div>
                <div>
                  <span className="block text-sm text-gray-400">Teléfono</span>
                  <a href="tel:+34622200599" className="text-white hover:text-blue-300 transition-colors">
                    +34 622 200 599
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500/10 p-2 rounded-lg mr-4">
                  <i className="fas fa-map-marker-alt text-blue-400 text-lg"></i>
                </div>
                <div>
                  <span className="block text-sm text-gray-400">Ubicación</span>
                  <span className="text-white">Pontevedra, España</span>
                </div>
              </li>
            </ul>/
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="mt-16 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 text-center md:text-left mb-4 md:mb-0">
              &copy; {currentYear} VideoFoto360. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="/politica-privacidad" className="text-sm text-gray-400 hover:text-white transition-colors">
                Política de privacidad
              </a>
              <a href="/terminos" className="text-sm text-gray-400 hover:text-white transition-colors">
                Términos y condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
    { title: 'Enlaces Rápidos', links: [
      { name: 'Inicio', path: '/' },
      { name: 'Sobre Mí', path: '/about' },
      { name: 'Servicios', path: '/services' },
      { name: 'Portafolio', path: '/portfolio' },
      { name: 'Contacto', path: '/contact' },
    ]},
    { title: 'Servicios', links: [
      { name: 'Fotografía de Eventos', path: '/services#eventos' },
      { name: 'Fotografía Inmobiliaria', path: '/services#inmobiliaria' },
      { name: 'Sesiones Personales', path: '/services#sesiones' },
      { name: 'Edición Profesional', path: '/services#edicion' },
    ]},
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="contentinfo" aria-label="Pie de página">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-white inline-block">
              FotoPro
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Capturando momentos inolvidables con profesionalismo y atención al detalle.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{social.name}</span>
                  <i className={`fab fa-${social.icon} text-lg`}></i>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Enlaces */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-medium text-white tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-medium text-white tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-envelope text-gray-400 mt-1 mr-3 text-sm"></i>
                <span className="text-sm text-gray-400">info@fotopro.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone text-gray-400 mt-1 mr-3 text-sm"></i>
                <span className="text-sm text-gray-400">+34 123 456 789</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-gray-400 mt-1 mr-3 text-sm"></i>
                <span className="text-sm text-gray-400">Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="mt-12 pt-6 border-t border-gray-800">
          <p className="text-center text-gray-500 text-xs">
            &copy; {currentYear} FotoPro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

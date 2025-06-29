import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: 'Instagram', 
      url: 'https://instagram.com', 
      icon: 'instagram',
      ariaLabel: 'Síguenos en Instagram' 
    },
    { 
      name: 'Facebook', 
      url: 'https://facebook.com', 
      icon: 'facebook',
      ariaLabel: 'Visítanos en Facebook' 
    },
    { 
      name: 'Vimeo', 
      url: 'https://vimeo.com', 
      icon: 'vimeo',
      ariaLabel: 'Mira nuestros videos en Vimeo' 
    },
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
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="contentinfo" aria-label="Pie de página">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="text-2xl font-display font-bold text-white mb-4 inline-block">
              FotoPro
            </Link>
            <p className="mt-4 text-gray-300">
              Capturando momentos inolvidables con pasión y profesionalismo. Especialistas en fotografía de eventos e inmobiliaria.
            </p>
            <div className="mt-6 flex space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-full p-1"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  whileFocus={{ y: -2 }}
                >
                  <span className="sr-only">{social.name}</span>
                  <i className={`fab fa-${social.icon} text-xl`}></i>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Enlaces */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-base text-gray-300 hover:text-white transition-colors"
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
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <i className="fas fa-envelope text-gray-300 mt-1 mr-3"></i>
                <span>info@fotopro.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone text-gray-300 mt-1 mr-3"></i>
                <span>+34 123 456 789</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-gray-300 mt-1 mr-3"></i>
                <span>Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            &copy; {currentYear} FotoPro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

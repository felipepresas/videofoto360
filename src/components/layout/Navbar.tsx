import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '@/assets/Logo VideoFoto360.svg';
import { scrollTo } from '@/utils/scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { 
      name: 'Sobre Mí', 
      path: '/about',
      ariaLabel: 'Ir a la sección Sobre Mí'
    },
    { 
      name: 'Servicios', 
      path: '/services',
      ariaLabel: 'Ver nuestros servicios de fotografía y video'
    },
    { 
      name: 'Portafolio', 
      path: '/portfolio',
      ariaLabel: 'Ver nuestro portafolio de trabajos'
    },
    { 
      name: 'Contacto', 
      path: '/contact',
      ariaLabel: 'Contáctanos para más información'
    },
  ];

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/videofoto360/', icon: 'instagram', ariaLabel: 'Síguenos en Instagram' },
    { name: 'YouTube', url: 'https://www.youtube.com/@VideoFoto360', icon: 'youtube', ariaLabel: 'Visita nuestro canal de YouTube' },
    { name: 'Facebook', url: 'https://www.facebook.com/videofoto360pontevedra/', icon: 'facebook', ariaLabel: 'Visítanos en Facebook' },
    { name: 'WhatsApp', url: 'https://api.whatsapp.com/send/?phone=%2B34622200599&text&type=phone_number&app_absent=0', icon: 'whatsapp', ariaLabel: 'Contáctanos por WhatsApp' }
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle smooth scrolling for anchor links
  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const id = path.substring(1);
      if (location.pathname !== '/') {
        navigate(`/#${id}`);
      } else {
        scrollTo(id);
      }
    }
  };

  return (
    <header 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="VideoFoto360 Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center">
              {/* Navigation Links */}
              <div className="flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    aria-label={link.ariaLabel}
                    onClick={(e) => {
                      handleNavClick(e, link.path);
                      setIsOpen(false);
                    }}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 ${
                      location.pathname === link.path.split('#')[0]
                        ? 'text-accent font-semibold'
                        : 'text-gray-700 hover:text-accent'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${
                        location.pathname === link.path.split('#')[0] ? 'w-full' : ''
                      }`}
                    />
                  </Link>
                ))}
              </div>
              {/* Divider */}
              <div className="ml-6 pl-6 border-l border-gray-300 flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="text-gray-500 hover:text-accent transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="sr-only">{social.name}</span>
                    <i className={`fab fa-${social.icon} text-lg`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-accent focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 backdrop-blur-sm overflow-hidden shadow-lg"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => {
                    handleNavClick(e, link.path);
                    setIsOpen(false);
                  }}
                  className={`block px-6 py-3 text-base font-medium transition-colors ${
                    location.pathname === link.path.split('#')[0]
                      ? 'bg-gray-50 text-accent border-r-4 border-accent'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-accent'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {/* Social Links for Mobile */}
              <div className="pt-4 pb-2 px-6">
                <div className="border-t border-gray-200"></div>
                <div className="flex justify-center items-center space-x-6 mt-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      className="text-gray-500 hover:text-accent transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="sr-only">{social.name}</span>
                      <i className={`fab fa-${social.icon} text-2xl`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

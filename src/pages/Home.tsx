
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

// Componente de carga mejorado con accesibilidad
const ImageLoader = () => (
  <div className="flex justify-center items-center h-64" aria-hidden="true">
    <div
      className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"
      role="status"
    >
      <span className="sr-only">Cargando...</span>
    </div>
  </div>
);

const Home = () => {
  // Precarga de imágenes críticas con manejo de errores
  useEffect(() => {
    const preloadImages = [
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1974&auto=format&fit=crop'
    ];

    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onerror = () => console.warn(`Error al cargar imagen: ${src}`);
    });
  }, []);

  // Función para scroll suave mejorada
  const smoothScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Mejora de accesibilidad: mover foco al elemento
      setTimeout(() => {
        element.setAttribute('tabindex', '-1');
        element.focus();
      }, 1000);
    }
  };

  return (
    <div className='w-full min-h-[calc(100vh-5rem)] overflow-hidden'>
      {/* Hero Section - Mejorado con más semántica y ARIA */}
      <section
        className='relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-black'
        aria-labelledby="main-heading"
      >
        {/* Background image container */}
        <div className='absolute inset-0 z-0'>
          <motion.div
            className='w-full h-full overflow-hidden'
            animate={{
              y: [0, 20],
              transition: {
                y: {
                  repeat: Infinity,
                  repeatType: 'reverse' as const,
                  duration: 10,
                  ease: 'easeInOut',
                },
              },
            }}
            aria-hidden="true"
          >
            <LazyLoadImage
              src='https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop&auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt='Fotografía profesional de un evento'
              effect='opacity'
              placeholder={<ImageLoader />}
              className='w-full h-full object-cover scale-110'
              style={{
                transform: 'scale(1.1)',
                willChange: 'transform',
              }}
              wrapperClassName='w-full h-full'
              loading="eager"
            />
          </motion.div>

          {/* Gradient overlays */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent' aria-hidden="true"></div>
          <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent' aria-hidden="true"></div>
        </div>

        {/* Content */}
        <div className='relative z-10 w-full px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='max-w-4xl mx-auto py-20 sm:py-24 lg:py-28 text-center md:text-left'
            >
              <h1
                id="main-heading"
                className='text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight'
              >
                Capturando momentos{' '}
                <span className='text-accent'>inolvidables</span>
              </h1>
              <motion.p
                className='text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Especialistas en fotografía de eventos e inmobiliaria.
                Transformamos momentos ordinarios en recuerdos extraordinarios.
              </motion.p>
              <motion.div
                className='flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Link
                  to='/portfolio'
                  className='px-6 py-3 sm:px-8 sm:py-4 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-accent/30 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black/50'
                  aria-label="Ver portafolio de trabajos"
                >
                  Ver Portafolio
                </Link>
                <Link
                  to='/contact'
                  className='px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50'
                  aria-label="Contactar al fotógrafo"
                >
                  Contáctame
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className='absolute bottom-10 left-0 right-0 flex justify-center z-20'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <button
            onClick={smoothScroll('servicios')}
            className='flex flex-col items-center group focus:outline-none'
            aria-label="Desplazarse a la sección de servicios"
          >
            <span className='text-sm text-gray-300 mb-2 opacity-0 group-hover:opacity-100 transition-opacity'>
              Desplazarse hacia abajo
            </span>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
              className='text-white'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 group-hover:text-accent transition-colors'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden="true"
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 14l-7 7m0 0l-7-7m7 7V3'
                />
              </svg>
            </motion.div>
          </button>
        </motion.div>
      </section>

      {/* Featured Services - Mejor estructura semántica */}
      <section
        id='servicios'
        className='py-16 sm:py-20 lg:py-24 bg-gray-50 scroll-mt-20'
        aria-labelledby="services-heading"
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2
              id="services-heading"
              className='text-3xl font-display font-bold text-gray-900 sm:text-4xl'
            >
              Servicios Destacados
            </h2>
            <p className='mt-3 sm:mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto'>
              Ofrecemos una amplia gama de servicios fotográficos profesionales
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {[
              {
                title: 'Fotografía 360°',
                description:
                  'Impresiona a tus clientes con recorridos virtuales interactivos en 360° de tus espacios.',
                icon: 'camera',
                link: '/services#360',
                image:
                  'https://images.unsplash.com/photo-1581093196270-4c24150e20ab?q=80&w=1470&auto=format&fit=crop',
                features: [
                  'Ideal para bienes raíces',
                  'Hoteles y restaurantes',
                  'Espacios comerciales',
                ],
              },
              {
                title: 'Video 360°',
                description:
                  'Crea experiencias inmersivas con nuestros videos esféricos en 360°.',
                icon: 'video',
                link: '/services#video360',
                image:
                  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop',
                features: [
                  'Eventos en vivo',
                  'Tours virtuales',
                  'Contenido para redes sociales',
                ],
              },
              {
                title: 'Realidad Virtual',
                description:
                  'Soluciones de realidad virtual personalizadas para una experiencia inmersiva total.',
                icon: 'vr-cardboard',
                link: '/services#vr',
                image:
                  'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop',
                features: [
                  'Aplicaciones VR personalizadas',
                  'Experiencias interactivas',
                  'Soluciones corporativas',
                ],
              },
            ].map((service, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className='group bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2'
                tabIndex={0}
              >
                <div className='h-48 sm:h-56 md:h-64 bg-gray-100 overflow-hidden'>
                  <LazyLoadImage
                    src={service.image}
                    alt={`Imagen representativa del servicio ${service.title}`}
                    effect='opacity'
                    placeholder={<ImageLoader />}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                    wrapperClassName='w-full h-full'
                  />
                </div>
                <div className='p-5 sm:p-6'>
                  <div className='flex items-center mb-3'>
                    <div className='w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3'>
                      <i className={`fas fa-${service.icon} text-blue-600 text-sm sm:text-base`}></i>
                    </div>
                    <h3 className='text-lg sm:text-xl font-display font-semibold text-gray-900'>
                      {service.title}
                    </h3>
                  </div>
                  <p className='text-gray-600 mb-4 text-sm sm:text-base'>{service.description}</p>
                  <ul className='space-y-2 text-sm text-gray-600'>
                    {service.features.map((feature, i) => (
                      <li key={i} className='flex items-center'>
                        <svg
                          className='w-4 h-4 text-green-500 mr-2'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className='mt-6 text-center'>
                    <Link
                      to={service.link}
                      className='text-blue-600 font-medium hover:text-blue-800 transition-colors inline-flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded'
                      aria-label={`Más información sobre ${service.title}`}
                    >
                      Más información
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 ml-1'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className='mt-10 sm:mt-12 text-center'>
            <Link
              to='/contact'
              className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-accent hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2'
              aria-label="Contactar para más información sobre servicios"
            >
              Contáctanos para más información
              <svg
                className='ml-2 -mr-1 w-5 h-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden="true"
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Mejorado con lazy loading */}
      <section
        className='py-16 sm:py-20 bg-white'
        aria-labelledby="portfolio-heading"
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2
              id="portfolio-heading"
              className='text-3xl font-display font-bold text-gray-900 sm:text-4xl'
            >
              Nuestro Trabajo
            </h2>
            <p className='mt-3 sm:mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto'>
              Algunos de nuestros proyectos más recientes
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8'>
            {[
              {
                id: 1,
                title: 'Boda en la playa',
                category: 'Bodas',
                image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1974&auto=format&fit=crop',
              },
              {
                id: 2,
                title: 'Apartamento moderno',
                category: 'Inmobiliaria',
                image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop',
              },
              {
                id: 3,
                title: 'Conferencia corporativa',
                category: 'Eventos',
                image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
              },
            ].map((project) => (
              <motion.figure
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className='group relative overflow-hidden rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300'
                tabIndex={0}
              >
                <div className='aspect-w-4 aspect-h-3'>
                  <LazyLoadImage
                    src={project.image}
                    alt={`Proyecto: ${project.title}`}
                    effect='opacity'
                    placeholder={<ImageLoader />}
                    className='w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105'
                    wrapperClassName='w-full h-full'
                  />
                </div>
                <figcaption className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-5 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <span className='text-accent text-sm sm:text-base font-medium'>
                    {project.category}
                  </span>
                  <h3 className='text-white text-lg sm:text-xl font-bold mt-1'>
                    {project.title}
                  </h3>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <div className='mt-10 sm:mt-12 text-center'>
            <Link
              to='/portfolio'
              className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2'
              aria-label="Ver portafolio completo de trabajos"
            >
              Ver más proyectos
              <svg
                className='ml-2 -mr-1 w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden="true"
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Estructura semántica mejorada */}
      <section
        className='py-16 sm:py-20 bg-gray-50'
        aria-labelledby="testimonials-heading"
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2
              id="testimonials-heading"
              className='text-3xl font-display font-bold text-gray-900 sm:text-4xl'
            >
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
            {[
              {
                id: 1,
                quote:
                  'Las fotos de nuestra boda fueron increíbles. Capturaron cada momento especial de manera perfecta.',
                author: 'María G.',
                role: 'Novia',
                rating: 5
              },
              {
                id: 2,
                quote:
                  'El trabajo fotográfico para nuestra propiedad fue excepcional. Las fotos mostraron el espacio de manera increíble.',
                author: 'Carlos M.',
                role: 'Agente Inmobiliario',
                rating: 5
              },
              {
                id: 3,
                quote:
                  'Profesionalismo y creatividad en cada sesión. ¡Totalmente recomendado!',
                author: 'Ana L.',
                role: 'Cliente frecuente',
                rating: 5
              },
            ].map((testimonial) => (
              <motion.blockquote
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className='bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
              >
                <div className='mb-5 text-yellow-400' aria-hidden="true">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className='text-lg'>★</span>
                  ))}
                </div>
                <p className='text-gray-600 italic mb-6 text-sm sm:text-base'>
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className='font-bold text-gray-900'>
                    {testimonial.author}
                  </p>
                  <p className='text-sm text-gray-500'>{testimonial.role}</p>
                </div>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Final - Más accesible */}
      <section
        className='relative py-16 sm:py-20 overflow-hidden'
        aria-labelledby="final-cta-heading"
      >
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-black/60'></div>
          <div
            className='w-full h-full bg-cover bg-center'
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1974&auto=format&fit=crop")',
            }}
            aria-hidden="true"
          ></div>
        </div>

        <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2
            id="final-cta-heading"
            className='text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-4 sm:mb-6'
          >
            ¿Listo para capturar tus momentos especiales?
          </h2>
          <p className='text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto'>
            Contáctame hoy para discutir tu proyecto y cómo puedo ayudarte a
            preservar tus recuerdos más preciados.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4'>
            <Link
              to='/contact'
              className='px-6 py-3 sm:px-8 sm:py-3 bg-accent text-white font-medium rounded-md hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black/50'
              aria-label="Solicitar presupuesto de servicios fotográficos"
            >
              Solicitar Presupuesto
              <svg
                className='ml-2 -mr-1 w-5 h-5 inline'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden="true"
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </Link>
            <Link
              to='/portfolio'
              className='px-6 py-3 sm:px-8 sm:py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50'
              aria-label="Explorar portafolio de trabajos"
            >
              Ver Portafolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Home;

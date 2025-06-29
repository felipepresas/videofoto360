import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 'eventos',
      title: 'Fotografía de Eventos',
      description: 'Capturamos los momentos más especiales de tus eventos, desde bodas y cumpleaños hasta conferencias corporativas. Nuestro enfoque discreto y profesional garantiza imágenes auténticas que cuentan la historia completa de tu evento.',
      features: [
        'Cobertura completa del evento',
        'Sesiones de retrato espontáneas',
        'Fotografía de detalles y decoración',
        'Entrega digital de alta resolución',
        'Álbumes fotográficos personalizados'
      ],
      image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 'inmobiliaria',
      title: 'Fotografía Inmobiliaria',
      description: 'Mostramos las propiedades en su mejor luz para maximizar su atractivo en el mercado. Utilizamos técnicas profesionales de iluminación y composición para resaltar las mejores características de cada espacio.',
      features: [
        'Fotografía de interiores y exteriores',
        'Tours virtuales en 360°',
        'Fotografía aérea con dron',
        'Edición profesional de imágenes',
        'Entrega rápida de material'
      ],
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 'sesiones',
      title: 'Sesiones Personales',
      description: 'Sesiones fotográficas personalizadas que capturan tu esencia y personalidad. Ya sea para tu perfil profesional, redes sociales o simplemente para conservar un recuerdo especial.',
      features: [
        'Sesiones en localización o estudio',
        'Asesoría de vestuario y maquillaje',
        'Múltiples cambios de look',
        'Selección de las mejores imágenes',
        'Retoque profesional'
      ],
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 'producto',
      title: 'Fotografía de Producto',
      description: 'Imágenes profesionales que destacan las características y beneficios de tus productos, ideales para catálogos, e-commerce y material publicitario.',
      features: [
        'Fotografía en estudio con iluminación controlada',
        'Fondos blancos y personalizados',
        'Detalles y texturas',
        'Estilismo de producto',
        'Edición profesional'
      ],
      image: 'https://images.unsplash.com/photo-1602147576418-ff9a2d8e8b9d?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 'corporativa',
      title: 'Fotografía Corporativa',
      description: 'Imágenes profesionales para empresas que desean fortalecer su identidad de marca y presencia en línea.',
      features: [
        'Retratos ejecutivos',
        'Fotografía de equipo',
        'Cobertura de eventos corporativos',
        'Fotografía de instalaciones',
        'Reportajes corporativos'
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 'dron',
      title: 'Fotografía Aérea con Dron',
      description: 'Vistas espectaculares desde el cielo para proyectos inmobiliarios, eventos o paisajes. Ofrecemos perspectivas únicas que solo son posibles desde las alturas.',
      features: [
        'Fotografía y video aéreo',
        'Vistas panorámicas de 360°',
        'Imágenes en alta resolución',
        'Edición profesional',
        'Entrega en múltiples formatos'
      ],
      image: 'https://images.unsplash.com/photo-1508700215404-6181d9fbe1da?q=80&w=1974&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
          <div 
            className="w-full h-full bg-cover bg-center opacity-10"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop)'
            }}
          ></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nuestros Servicios
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Servicios profesionales de fotografía adaptados a tus necesidades
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={`/contact?service=${service.id}`}
                    className="inline-block px-6 py-2 border-2 border-accent text-accent font-medium rounded-md hover:bg-accent hover:text-white transition-colors"
                  >
                    Solicitar Información
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-gray-900 sm:text-4xl mb-4">
              Paquetes y Precios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones adaptadas a tus necesidades y presupuesto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Básico',
                price: '299',
                description: 'Ideal para eventos pequeños o sesiones cortas',
                features: [
                  '2 horas de cobertura',
                  '50+ fotos editadas',
                  'Entrega digital',
                  'Álbum digital',
                  'Soporte por email'
                ],
                popular: false
              },
              {
                name: 'Estándar',
                price: '599',
                description: 'Perfecto para la mayoría de eventos y sesiones',
                features: [
                  '4 horas de cobertura',
                  '150+ fotos editadas',
                  'Entrega digital',
                  'Álbum digital premium',
                  'Soporte prioritario',
                  '10 impresiones 15x23cm'
                ],
                popular: true
              },
              {
                name: 'Premium',
                price: '999',
                description: 'Cobertura completa para eventos importantes',
                features: [
                  '8+ horas de cobertura',
                  '300+ fotos editadas',
                  'Entrega en USB premium',
                  'Álbum de lujo',
                  'Soporte 24/7',
                  '20 impresiones 20x30cm',
                  'Sesión de retrato incluida'
                ],
                popular: false
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-2 ring-accent' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-accent text-white text-xs font-semibold px-4 py-1 rounded-bl-lg">
                    MÁS POPULAR
                  </div>
                )}
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="mt-2 text-gray-600">{plan.description}</p>
                  <div className="mt-6">
                    <p className="text-4xl font-bold text-gray-900">
                      ${plan.price}
                      <span className="text-base font-normal text-gray-500">/sesión</span>
                    </p>
                  </div>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <a
                    href="/contact"
                    className={`block w-full text-center px-4 py-3 rounded-md font-medium ${
                      plan.popular
                        ? 'bg-accent text-white hover:bg-accent/90'
                        : 'border-2 border-accent text-accent hover:bg-accent/10'
                    } transition-colors`}
                  >
                    Contratar Ahora
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              ¿Necesitas un paquete personalizado?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors"
            >
              <span>Solicitar Cotización Personalizada</span>
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
          <div 
            className="w-full h-full bg-cover bg-center opacity-10"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop)'
            }}
          ></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            ¿Listo para reservar tu sesión?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Contáctame hoy para discutir tus necesidades y cómo puedo ayudarte a capturar momentos inolvidables.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent/90 transition-colors"
            >
              Contáctame Ahora
            </a>
            <a 
              href="tel:+34123456789" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +34 123 456 789
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

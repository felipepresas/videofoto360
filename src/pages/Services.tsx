import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 'inmobiliaria',
      title: 'Fotografía y Vídeo Inmobiliario',
      description: 'Maximizamos el potencial de cada propiedad. Creamos imágenes y vídeos que no solo muestran espacios, sino que evocan el deseo de vivir en ellos, acelerando el proceso de venta o alquiler.',
      features: [
        'Fotografía de alta calidad con gran angular',
        'Vídeos cinematográficos del inmueble',
        'Tours virtuales 360° inmersivos',
        'Fotografía y vídeo aéreo con dron',
        'Edición profesional para resaltar cada detalle'
      ],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'interiorismo',
      title: 'Fotografía de Interiorismo',
      description: 'Capturamos la esencia y el carácter de tus diseños. Nuestro objetivo es resaltar la belleza, la funcionalidad y la atmósfera de cada espacio, creando un portfolio visual que enamore a tus clientes.',
      features: [
        'Composición y estilismo cuidado',
        'Técnicas de iluminación avanzadas',
        'Enfoque en texturas, materiales y detalles',
        'Imágenes perfectas para portfolios, revistas y web',
        'Colaboración estrecha con diseñadores y arquitectos'
      ],
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 'marcas',
      title: 'Contenido Visual para Marcas',
      description: 'Impulsamos la identidad visual de tu negocio. Desde fotografía de producto hasta contenido para redes sociales, creamos imágenes y vídeos que conectan con tu audiencia y comunican tus valores.',
      features: [
        'Fotografía de producto para e-commerce y catálogos',
        'Creación de contenido para redes sociales (Reels, Stories)',
        'Vídeos corporativos y de marca',
        'Retratos profesionales para equipos',
        'Desarrollo de un banco de imágenes personalizado'
      ],
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gray-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60"></div>
          <div 
            className="w-full h-full bg-cover bg-center opacity-20"
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
            Servicios Profesionales
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Soluciones visuales para inmobiliarias, interiorismo y marcas que buscan destacar.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={`/contact?service=${service.id}`}
                    className="inline-block mt-auto px-6 py-3 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent hover:text-white transition-colors text-center"
                  >
                    Solicitar Información
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 sm:text-4xl mb-4">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Cada proyecto es una colaboración. Contáctame para hablar sobre tus ideas y te prepararé un presupuesto personalizado sin ningún compromiso.
          </p>
          <a 
            href="/contact"
            className="inline-block px-10 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-transform transform hover:scale-105 shadow-lg"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;

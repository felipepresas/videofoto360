import { motion } from 'framer-motion';

const About = () => {
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
              backgroundImage: 'url("https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop")'
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
            Sobre Mí
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Conoce la historia y la pasión detrás de cada fotografía
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" 
                  alt="Fotógrafo profesional" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full z-0 hidden lg:block"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full z-0 hidden lg:block"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Hola, soy <span className="text-accent">Antonio Presas Martinez</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Apasionado fotógrafo profesional con más de 10 años de experiencia capturando momentos únicos y creando recuerdos que perduran para siempre. Mi viaje en la fotografía comenzó cuando era solo un adolescente con una cámara prestada, y desde entonces no he dejado de explorar y perfeccionar mi arte.
              </p>
              <p className="text-gray-600 mb-8">
                Especializado en fotografía de eventos e inmobiliaria, mi objetivo es ir más allá de simplemente tomar fotos. Busco contar historias a través de mis imágenes, capturando la esencia, las emociones y la belleza en cada encuadre.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { number: '500+', label: 'Eventos' },
                  { number: '1000+', label: 'Clientes' },
                  { number: '50+', label: 'Premios' },
                  { number: '10+', label: 'Años de Experiencia' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-accent mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent/90 transition-colors"
                >
                  Contáctame
                </a>
                <a 
                  href="#portfolio" 
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
                >
                  Ver Trabajos
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-gray-900 sm:text-4xl mb-4">
              Mi Enfoque
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cómo trabajo para capturar momentos inolvidables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'lightbulb',
                title: 'Concepto',
                description: 'Trabajo contigo para entender tu visión y objetivos, creando un concepto único para cada sesión.'
              },
              {
                icon: 'camera',
                title: 'Sesión',
                description: 'Capturo momentos auténticos con un ojo en los detalles y la composición perfecta.'
              },
              {
                icon: 'magic',
                title: 'Edición',
                description: 'Cada imagen se edita cuidadosamente para resaltar su belleza natural y contar tu historia.'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className={`fas fa-${item.icon} text-2xl text-accent`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-gray-900 sm:text-4xl mb-4">
              Lo que dicen mis clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiencias reales de personas que han trabajado conmigo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Trabajar con Antonio Presas Martinez fue una experiencia increíble. Las fotos de nuestra boda superaron todas nuestras expectativas.",
                author: "Ana y Carlos",
                role: "Boda"
              },
              {
                quote: "Las fotos profesionales de nuestra propiedad nos ayudaron a venderla en tiempo récord. ¡Gracias por capturar cada detalle!",
                author: "Laura M.",
                role: "Propietaria"
              },
              {
                quote: "Profesionalismo, creatividad y atención al detalle. No podría estar más contento con los resultados.",
                author: "David R.",
                role: "Cliente Corporativo"
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <div className="mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
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
              backgroundImage: 'url("https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1974&auto=format&fit=crop")'
            }}
          ></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            ¿Listo para crear algo increíble juntos?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Contáctame hoy para discutir tu proyecto y cómo puedo ayudarte a capturar momentos inolvidables.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent/90 transition-colors"
          >
            Hablemos de tu Proyecto
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;

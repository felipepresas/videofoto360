import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbox } from 'react-modal-image';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'todos', name: 'Todos los Proyectos' },
    { id: 'bodas', name: 'Bodas' },
    { id: 'inmobiliaria', name: 'Inmobiliaria' },
    { id: 'eventos', name: 'Eventos' },
    { id: 'retratos', name: 'Retratos' },
    { id: 'producto', name: 'Producto' },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Boda de Ana y Carlos',
      category: 'bodas',
      image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1974&auto=format&fit=crop',
      description: 'Una boda íntima celebrada en la costa mediterránea con un atardecer mágico.'
    },
    {
      id: 2,
      title: 'Apartamento en el Centro',
      category: 'inmobiliaria',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop',
      description: 'Moderno apartamento en el corazón de la ciudad con acabados de lujo.'
    },
    {
      id: 3,
      title: 'Conferencia Tech 2023',
      category: 'eventos',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
      description: 'Cobertura completa del mayor evento tecnológico del año.'
    },
    {
      id: 4,
      title: 'Sesión de Retrato Urbano',
      category: 'retratos',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop',
      description: 'Retratos profesionales con un toque urbano y moderno.'
    },
    {
      id: 5,
      title: 'Línea de Joyería',
      category: 'producto',
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1935&auto=format&fit=crop',
      description: 'Fotografía profesional de joyería fina para catálogo.'
    },
    {
      id: 6,
      title: 'Boda en la Montaña',
      category: 'bodas',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
      description: 'Celebración íntima en un entorno natural espectacular.'
    },
    {
      id: 7,
      title: 'Casa Familiar con Piscina',
      category: 'inmobiliaria',
      image: 'https://images.unsplash.com/photo-1582261956944-38a0a8a13eb3?q=80&w=2070&auto=format&fit=crop',
      description: 'Amplia casa familiar con jardín y piscina en zona residencial.'
    },
    {
      id: 8,
      title: 'Festival de Música',
      category: 'eventos',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop',
      description: 'Cobertura completa del festival de música más importante del verano.'
    },
    {
      id: 9,
      title: 'Retrato Corporativo',
      category: 'retratos',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
      description: 'Sesión de retratos profesionales para ejecutivos.'
    },
    {
      id: 10,
      title: 'Línea de Cosmética',
      category: 'producto',
      image: 'https://images.unsplash.com/photo-1625772452859-1c18313806ac?q=80&w=2070&auto=format&fit=crop',
      description: 'Fotografía publicitaria para línea de productos de belleza.'
    },
    {
      id: 11,
      title: 'Boda en la Playa',
      category: 'bodas',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070&auto=format&fit=crop',
      description: 'Ceremonia al atardecer en una playa paradisíaca.'
    },
    {
      id: 12,
      title: 'Ático de Lujo',
      category: 'inmobiliaria',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
      description: 'Exclusivo ático con vistas panorámicas a la ciudad.'
    },
  ];

  const filteredItems = selectedCategory === 'todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openLightbox = (image: PortfolioItem) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

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
              backgroundImage: 'url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop)'
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
            Portafolio
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Una selección de nuestros mejores trabajos y proyectos
          </motion.p>
        </div>
      </section>

      {/* Portfolio Filters */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  onClick={() => openLightbox(item)}
                >
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-200 text-sm">{item.description}</p>
                    <div className="mt-2">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-accent text-white rounded-full">
                        {categories.find(cat => cat.id === item.category)?.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
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
              backgroundImage: 'url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop)'
            }}
          ></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            ¿Te gusta lo que ves?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Contáctame para hablar sobre tu próximo proyecto fotográfico.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent/90 transition-colors"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50">
          <Lightbox
            medium={selectedImage.image}
            large={selectedImage.image}
            alt={selectedImage.title}
            onClose={closeLightbox}
            hideDownload={true}
            hideZoom={false}
            showRotate={true}
            imageBackgroundColor="#1f2937"
          />
        </div>
      )}
    </div>
  );
};

export default Portfolio;

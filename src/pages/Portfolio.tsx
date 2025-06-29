import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbox } from 'react-modal-image';

interface PortfolioItem {
  id: number;
  title: string;
  category: 'inmobiliaria' | 'interiorismo' | 'marcas';
  image: string;
  description: string;
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'inmobiliaria', name: 'Inmobiliaria' },
    { id: 'interiorismo', name: 'Interiorismo' },
    { id: 'marcas', name: 'Marcas' },
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Villa de Lujo en la Costa',
      category: 'inmobiliaria',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      description: 'Fotografía completa para la venta de una villa exclusiva con vistas al mar.'
    },
    {
      id: 2,
      title: 'Diseño Nórdico Minimalista',
      category: 'interiorismo',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1974&auto=format&fit=crop',
      description: 'Sesión fotográfica para estudio de interiorismo, destacando la luz y los materiales.'
    },
    {
      id: 3,
      title: 'Campaña para Marca de Moda',
      category: 'marcas',
      image: 'https://images.unsplash.com/photo-1492707892479-7a8949165d83?q=80&w=1964&auto=format&fit=crop',
      description: 'Contenido visual para el lanzamiento de la nueva colección de una marca de ropa local.'
    },
    {
      id: 4,
      title: 'Apartamento Urbano Moderno',
      category: 'inmobiliaria',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
      description: 'Imágenes para alquiler de corta estancia, resaltando la funcionalidad y el diseño.'
    },
    {
      id: 5,
      title: 'Restaurante de Autor',
      category: 'interiorismo',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop',
      description: 'Fotografía de los espacios de un nuevo restaurante para su inauguración y material de prensa.'
    },
    {
      id: 6,
      title: 'Branding para Cafetería',
      category: 'marcas',
      image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1974&auto=format&fit=crop',
      description: 'Creación de un banco de imágenes para redes sociales y web de una cafetería de especialidad.'
    },
    {
      id: 7,
      title: 'Chalet en la Montaña',
      category: 'inmobiliaria',
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop',
      description: 'Reportaje fotográfico y de vídeo para la venta de una propiedad rústica.'
    },
    {
      id: 8,
      title: 'Oficina Corporativa',
      category: 'interiorismo',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
      description: 'Fotografía de las nuevas oficinas de una empresa tecnológica para su web y comunicación interna.'
    },
    {
      id: 9,
      title: 'Línea de Cosmética Natural',
      category: 'marcas',
      image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1974&auto=format&fit=crop',
      description: 'Fotografía de producto y bodegones para el lanzamiento de una marca de cosmética.'
    }
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
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gray-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60"></div>
          <div 
            className="w-full h-full bg-cover bg-center opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop)'
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
            Nuestro Trabajo
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explora una selección de nuestros proyectos en fotografía inmobiliaria, de interiorismo y para marcas.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Filters */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-accent text-white shadow-md'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => openLightbox(item)}
                >
                  <div className="aspect-w-16 aspect-h-10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold transform-gpu translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                    <p className="text-accent text-sm font-semibold uppercase tracking-wider transform-gpu translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {selectedImage && (
        <Lightbox
          medium={selectedImage.image}
          large={selectedImage.image}
          alt={selectedImage.title}
          onClose={closeLightbox}
          hideDownload={true}
          showRotate={false}
        />
      )}
    </div>
  );
};

export default Portfolio;

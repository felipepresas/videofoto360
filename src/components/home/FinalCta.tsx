
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import ImageLoader from '../ui/ImageLoader';

export const FinalCta = () => {
  return (
    <section className='relative py-16 sm:py-20 overflow-hidden bg-black' aria-labelledby="final-cta-heading">
      <div className='absolute inset-0 z-0'>
        <LazyLoadImage
          src='https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1974&auto=format&fit=crop'
          alt="Cámara profesional en un trípode"
          effect="opacity"
          placeholder={<ImageLoader />}
          className='w-full h-full object-cover'
          wrapperClassName='w-full h-full'
        />
        <div className='absolute inset-0 bg-black/70' aria-hidden="true"></div>
      </div>
      <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h2 id="final-cta-heading" className='text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-4 sm:mb-6'>
          ¿Listo para capturar tus momentos especiales?
        </h2>
        <p className='text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto'>
          Contáctame hoy para discutir tu proyecto y cómo puedo ayudarte a preservar tus recuerdos más preciados.
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4'>
          <Link
            to='/contact'
            className='px-6 py-3 sm:px-8 sm:py-3 bg-accent text-white font-medium rounded-md hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black/50'
            aria-label="Solicitar presupuesto de servicios fotográficos"
          >
            Solicitar Presupuesto
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
  );
};

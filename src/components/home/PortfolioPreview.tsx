import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import type { Project } from '../../types';
import ImageLoader from '../ui/ImageLoader';

interface PortfolioPreviewProps {
  projects: Project[];
}

export const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({ projects }) => {
  return (
    <section id="portafolio" className='py-16 sm:py-20' aria-labelledby="portfolio-heading">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12 sm:mb-16'>
          <h2 id="portfolio-heading" className='text-3xl font-display font-bold text-gray-900 sm:text-4xl'>
            Nuestro Trabajo
          </h2>
          <p className='mt-3 sm:mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto'>
            Un vistazo a algunos de nuestros proyectos más recientes y destacados.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Link to={`/portafolio/${project.slug}`} className='group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1'>
                <div className='relative h-64 w-full'>
                  <LazyLoadImage
                    src={project.imageUrl}
                    alt={`Proyecto ${project.title}`}
                    effect='opacity'
                    placeholder={<ImageLoader />}
                    className='w-full h-full object-cover'
                    wrapperClassName='w-full h-full'
                  />
                  <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4'>
                    <div className='text-center'>
                      <h3 className='text-white text-xl font-bold'>{project.title}</h3>
                      <p className='text-gray-300 mt-1'>{project.category}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className='mt-12 sm:mt-16 text-center'>
          <Link
            to='/portafolio'
            className='inline-block bg-accent text-white font-bold py-3 px-8 rounded-lg hover:bg-accent/90 transition-transform duration-300 transform hover:scale-105'
          >
            Ver todo el portafolio
          </Link>
        </div>
      </div>
    </section>
  );
};

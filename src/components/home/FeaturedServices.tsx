import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { Service } from '../../types';
import ImageLoader from '../ui/ImageLoader';

interface FeaturedServicesProps {
  services: Service[];
}

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({ services }) => {
  return (
    <section id="servicios" className='py-16 sm:py-20 bg-gray-50' aria-labelledby="services-heading">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12 sm:mb-16'>
          <h2 id="services-heading" className='text-3xl font-display font-bold text-gray-900 sm:text-4xl'>
            Nuestros Servicios
          </h2>
          <p className='mt-3 sm:mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto'>
            Ofrecemos soluciones visuales de alta calidad para destacar tus proyectos y eventos.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className='flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
            >
              <div className='relative h-56 w-full overflow-hidden'>
                <LazyLoadImage
                  src={service.image}
                  alt={`Servicio de ${service.title}`}
                  effect='opacity'
                  placeholder={<ImageLoader />}
                  className='w-full h-full object-cover'
                  wrapperClassName='w-full h-full'
                />
              </div>
              <div className='p-6 flex-grow flex flex-col'>
                <div className='flex items-center mb-3'>
                  <FontAwesomeIcon icon={service.icon as IconProp} className='text-accent text-2xl mr-4' />
                  <h3 className='text-xl font-bold text-gray-900'>{service.title}</h3>
                </div>
                <p className='text-gray-600 mb-4 flex-grow'>{service.description}</p>
                <ul className='space-y-2 mb-6 text-sm text-gray-500'>
                  {service.features.map(feature => (
                    <li key={feature} className='flex items-center'>
                      <FontAwesomeIcon icon={['fas', 'check']} className='text-green-500 mr-2' />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className='mt-auto pt-4 border-t border-gray-100'>
                  <Link
                    to={service.link}
                    className='text-accent font-semibold hover:text-accent/80 transition-colors duration-300'
                  >
                    Saber más &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

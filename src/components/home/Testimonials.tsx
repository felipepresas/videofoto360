import React from 'react';
import { motion } from 'framer-motion';
import type { Testimonial } from '../../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="testimonials-heading" className='text-3xl font-display font-bold text-gray-900 sm:text-4xl'>
            Lo que dicen nuestros clientes
          </h2>
           <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Historias de éxito y colaboraciones que nos enorgullecen.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className='bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
            >
              <div className='mb-5 text-yellow-400' aria-hidden="true">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className='text-lg'>★</span>
                ))}
              </div>
              <p className='text-gray-600 italic mb-6 text-sm sm:text-base'>
                {`"${testimonial.quote}"`}
              </p>
              <footer>
                <p className='font-bold text-gray-900'>{testimonial.author}</p>
                <p className='text-sm text-gray-500'>{testimonial.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex items-start justify-center text-center overflow-hidden pt-40" aria-labelledby="hero-heading">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          src="/Final-Edit-PUBLI-REEL-VideoFoto360-1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 p-4 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-display leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          El Arte de la Primera Impresión
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Fotografía y vídeo para inmobiliarias y marcas. Transformamos tus espacios en imágenes cautivadoras que venden.
        </motion.p>
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/portfolio" className="btn btn-primary btn-wide">
            Ver Portafolio
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

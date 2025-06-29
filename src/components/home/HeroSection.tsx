import React from 'react';
import { motion } from 'framer-motion';

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
      </motion.div>
    </section>
  );
};

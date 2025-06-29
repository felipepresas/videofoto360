import React from 'react'
import { motion } from 'framer-motion'

export const HeroSection: React.FC = () => {
  return (
    <section
      id='hero'
      className='relative w-full h-[85vh] min-h-[500px] flex items-start justify-center text-center overflow-hidden pt-20 md:pt-28'
      aria-labelledby='hero-heading'
    >
      {/* Background Video */}
      <div className='absolute top-0 left-0 w-full h-full'>
        <video
          src='/Final-Edit-PUBLI-REEL-VideoFoto360-1.mp4'
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-full object-cover'
          aria-hidden='true'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-black/50'></div>
      </div>

      {/* Content */}
      <motion.div
        className='relative z-10 p-4 text-white w-full max-w-6xl mx-auto'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Content will go here */}
      </motion.div>
    </section>
  )
}

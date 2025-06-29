import React, { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturedServices } from '../components/home/FeaturedServices';
import { PortfolioPreview } from '../components/home/PortfolioPreview';
import { Testimonials } from '../components/home/Testimonials';
import { FinalCta } from '../components/home/FinalCta';
import type { Service, Project, Testimonial } from '../types';

// --- DATOS DE EJEMPLO ---
// En una aplicación real, estos datos vendrían de una API.

const servicesData: Service[] = [
  {
    title: 'Fotografía de Eventos',
    icon: 'camera-retro',
    description: 'Capturamos los momentos más importantes de tus eventos con un estilo único y profesional.',
    features: ['Cobertura completa', 'Edición profesional', 'Entrega rápida'],
    link: '/servicios/fotografia-eventos',
    image: 'https://images.unsplash.com/photo-1542042161-d19f5b493212?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Producción de Video',
    icon: 'video',
    description: 'Creamos videos corporativos, promocionales y para redes sociales que conectan con tu audiencia.',
    features: ['Guion y pre-producción', 'Grabación 4K', 'Post-producción y efectos'],
    link: '/servicios/produccion-video',
    image: 'https://images.unsplash.com/photo-1574717024688-34f3a4a4d745?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Sesiones de Retrato',
    icon: 'user-circle',
    description: 'Realizamos sesiones de retratos personales y profesionales que resaltan tu mejor versión.',
    features: ['Asesoramiento de imagen', 'Múltiples localizaciones', 'Retoque digital de alta gama'],
    link: '/servicios/sesiones-retrato',
    image: 'https://images.unsplash.com/photo-1599577181262-2995b635392e?q=80&w=1974&auto=format&fit=crop',
  },
];

const projectsData: Project[] = [
  {
    id: 1,
    slug: 'boda-en-la-playa',
    title: 'Boda en la Playa',
    category: 'Fotografía de Eventos',
    imageUrl: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    slug: 'video-corporativo-tech',
    title: 'Video Corporativo Tech',
    category: 'Producción de Video',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2134&auto=format&fit=crop',
  },
  {
    id: 3,
    slug: 'retratos-urbanos',
    title: 'Retratos Urbanos',
    category: 'Sesiones de Retrato',
    imageUrl: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=80&w=1930&auto=format&fit=crop',
  },
];

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote: 'El equipo capturó la esencia de nuestra boda a la perfección. Las fotos son espectaculares y el trato fue inmejorable.',
    author: 'Ana y Carlos',
    role: 'Clientes de Boda',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
  },
  {
    id: 2,
    quote: 'El video promocional que produjeron para nuestra startup ha tenido un impacto increíble. ¡Profesionalismo y creatividad puros!',
    author: 'Javier Gómez',
    role: 'CEO de Tech Solutions',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
  },
  {
    id: 3,
    quote: 'Mi sesión de retratos fue una experiencia maravillosa. Me sentí cómoda y el resultado final superó todas mis expectativas.',
    author: 'Sofía López',
    role: 'Modelo Profesional',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
  },
];

const Home: React.FC = () => {
  useEffect(() => {
    // Precarga de imágenes críticas para mejorar la experiencia del usuario
    const preloadImages = [
      'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop', // Hero
      'https://images.unsplash.com/photo-1542042161-d19f5b493212?q=80&w=2070&auto=format&fit=crop', // Service 1
    ];
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <main className='w-full min-h-screen overflow-x-hidden bg-base-100'>
      <HeroSection />
      <FeaturedServices services={servicesData} />
      <PortfolioPreview projects={projectsData} />
      <Testimonials testimonials={testimonialsData} />
      <FinalCta />
    </main>
  );
};

export default Home;

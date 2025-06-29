import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface IntroVideoProps {
  onVideoEnd: () => void;
}

const IntroVideo: React.FC<IntroVideoProps> = ({ onVideoEnd }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Silenciamos el video para permitir la reproducción automática en la mayoría de los navegadores
      video.muted = true;
      // Intentamos reproducir el video
      video.play().catch(error => {
        console.error('Error al intentar reproducir el video automáticamente:', error);
        // Si la reproducción automática falla, consideramos que el video ha "terminado" para no bloquear al usuario.
        onVideoEnd();
      });
    }
  }, [onVideoEnd]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <video
        ref={videoRef}
        src="/Logo animado VideoFoto360 2.mp4"
        onEnded={onVideoEnd}
        playsInline
        muted // Es importante mantenerlo muteado para el autoplay
        className="w-auto h-auto max-w-full max-h-full"
        aria-label="Video de introducción del logo"
      />
    </motion.div>
  );
};

export default IntroVideo;

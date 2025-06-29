// @ts-check
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#1e293b',
        accent: '#3b82f6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  // Configuración de purga para producción (usando la sintaxis de Tailwind CSS v3)
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  corePlugins: {
    preflight: true,
  },
  // Deshabilitar el modo JIT para evitar conflictos
  mode: 'jit'
}

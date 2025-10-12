/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInToUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInFromUp: {
          '0%': {opacity: '0', transform: 'translateY(8px) scale(.98)'},
          '100%': {opacity: '1', transform: 'translateY(0) scale(1)'},
        },
        warmGlow: {
          '0%':   { background: 'radial-gradient(rgba(255,196,64))', transform: 'scale(0.98)', filter: 'blur(18px)' },
          '25%':  { background: 'radial-gradient(rgba(255,179,90))', transform: 'scale(1.00)' },
          '50%':  { background: 'radial-gradient(rgba(255,157,106))', transform: 'scale(1.02)', filter: 'blur(26px)'},
          '75%':  { background: 'radial-gradient(rgba(255,179,90))', transform: 'scale(1.00)' },
          '100%': { background: 'radial-gradient(rgba(255,196,64))', transform: 'scale(0.98)', filter: 'blur(18px)' },
        },
      },
      animation: {
        fadeInToUp: 'fadeInToUp 0.5s ease-out',
        fadeInFromUp: 'fadeInFromUp 0.5s ease-out forwards',
        warmGlow: 'warmGlow 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}


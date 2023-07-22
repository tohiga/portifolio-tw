/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
    animation: {
      gradient: 'gradient 5s ease-in-out infinite',
      'fade-in': 'fade-in 2s ease-out forwards',
      'slide-in-right': 'slide-in-right 1s ease-out',
      'fade-in-delay': 'fade-in 2s ease-out forwards 1s',
    },
    keyframes: {
      'fade-in': {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      'slide-in-right': {
        '0%': { transform: 'translateX(-200px)', opacity: 0 },
        '100%': { transform: 'translateX(0)', opacity: 1 },
      },
      gradient: {
        '0%, 100%': {
          'background-size': '400% 400%',
          'background-position': '0% 50%',
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': '100% 50%',
        },
      },
    },
  },
  plugins: [],
};

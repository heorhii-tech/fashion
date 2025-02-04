/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Укажите пути к вашим HTML и JS файлам
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Добавляем шрифт
      },
      colors: {
        'primary-yellow': '#e6c744', // Добавляем цвет
      },
      
        animation: {
          'spin-slow': 'spin 5s linear infinite',
          'move-slow': 'move 5s infinite alternate',
        
      },
      keyframes: {
        slideSmall: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        'wave-xxsmall': {
          '0%': { transform: 'scale(1)',  opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        'wave-xsmall': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale(1.87)', opacity: '0' },
        },
        'wave-small': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale(2.083)', opacity: '0' },
        },
        'wave-medium': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale(2.695)', opacity: '0' },
        },
        'wave-large': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale(2.385)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

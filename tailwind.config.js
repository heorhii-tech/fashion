/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}', // Укажите пути к вашим HTML и JS файлам
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Добавляем шрифт
      },
      colors: {
        'primary-yellow': '#EBD96B', // Добавляем цвет
      },
      animation: {
        slideSmall: "slideSmall 5s linear infinite",
      },
      keyframes: {
        slideSmall: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        burtons: 'burtons',
        poppins: 'Poppins',
      },
      gridTemplateColumns: {
        '20/80': '20% 80%',
        fixed: '40px 260px',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Purple: '#6D16C5',
        White: '#FFFFFF',
        LightGrey: '#EDEEF0',
        MediumGrey: '#8C8FA6',
        DarkGrey: '#2B2A2D',
        Cream: '#FFE8E5',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

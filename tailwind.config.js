/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Purple: '#671EDE',
        White: '#FFFFFF',
        LightGrey: '#EDEEF0',
        MediumGrey: '#8C8FA6',
        DarkGrey: '#2B2A2D',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

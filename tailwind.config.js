/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F6F9',
          100: '#CDEDF3',
          200: '#9BDCE7',
          300: '#69CBDC',
          400: '#37BAD0',
          500: '#00819A', // MAIN
          600: '#00738A',
          700: '#00657A',
          800: '#00576A',
          900: '#00495A',
        },
        secondary: {
          50: '#E9F7EF',
          100: '#D3F0DF',
          200: '#A7E1BF',
          300: '#7BD29F',
          400: '#4FC37F',
          500: '#0A9F39', // MAIN
          600: '#098F33',
          700: '#087F2D',
          800: '#076F27',
          900: '#065F21',
        },
        tertiary: {
          50: '#F5F5F5',
          100: '#E6E6E6',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#303030',
          600: '#2A2A2A',
          700: '#242424',
          800: '#1E1E1E',
          900: '#181818',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
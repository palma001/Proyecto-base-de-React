/** @type {import('tailwindcss').Config} */

import { nextui } from '@nextui-org/react';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        poppins: ['Poppins', 'sans-serif'], 
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
      colors: {
        quanto: '#8B5DFF',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
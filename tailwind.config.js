/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dab: "#b8b9ba",
        dag: "#c3c5c7",
        pdb: "#bdbbbf"
      }
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1025px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '768px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' }
      // => @media (max-width: 639px) { ... }
    }
  },

  plugins: []
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      Lobster: [ 'Lobster', 'cursive'],
     Roboto: ['Roboto Slab', 'serif'],
     Cour : ['Courgette', 'cursive'],
     Poppins : ['Poppins', 'sans-serif'],
  

      },
    
    },
  },
  plugins: [],
}
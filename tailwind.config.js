/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        kenia: ['Kenia', 'cursive']
      },
      colors:{
        'base-blue':'#242F44',
        'secondary': '#3db2b0',
        'charcoal': '#4a4a4a',
        'white': '#fff',
        'black': '#000',
        'grey':'#323F4A',
        'light-grey': '#7d8fa0',
        'mid-grey':'#b7c9cc',
        'extra-light-blue': '#eaf0fe',
        'light-blue':'#fbfcfe',
        'special-blue': '#293FCC',
        'mid-blue': '#202a77',
        'dark-blue': '#184e77',
        'green': '#42C299',
        'dark-green': '#187737',
        'panel':'#fbfbfd',
        'success': '#1BA94C',
         'danger':'#D11534'
      },
    },
  },
  plugins: [],
}

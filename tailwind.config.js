/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "mainBg": "#FDFDFD",
        "brand-color": "#306BB1",
        "brand-blue": "#0582FA"

      },
      backgroundImage:{
        "hero": "url(/images/bg-contact.png)",
        "herosmall": "url(/images/bg-contact-small.png)",
        "balanceBg": "url(/images/balance.png)",

      }
    },
  },
  plugins: [],
}
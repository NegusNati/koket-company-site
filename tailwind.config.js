/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
      
        navy: 'var(--brand-navy)',
        gold: 'var(--brand-gold)',
        aqua: 'var(--brand-aqua)',
        cantaloupe: 'var(--brand-cantaloupe)',
        chetwode: 'var(--brand-chetwode)',
        ecru: 'var(--brand-ecru)',
      },
    
    },
  },
  plugins: [require("tailwindcss-animate")],
};

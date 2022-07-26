/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // backgroundImage: {
    //   hero: "url('../public/images/hero.jpg')",
    // },
    extend: {
      colors: {
        brand: {
          accent: "#1da1f2",
          "button-hover": "#1877F2",
          button: "#1560bd",
        },
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};

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
        },
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};

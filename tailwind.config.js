/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    container: {
      padding: {
        DEFAULT: "2rem",
        md: "4rem",
        lg: "6rem",
      },
      screens: {
        lg: "1024px",
      },
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
};

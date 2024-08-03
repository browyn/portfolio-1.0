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
        sm: "720px",
        md: "1024px",
        lg: "1200px",
      },
      center: true,
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
};

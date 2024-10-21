/** @type {import('tailwindcss').Config} */ module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-custom": "#00927c",
        "secondary-custom": "#EAF0F1",
      },
      //TODO REMOVE THIS, ADDED IT FOR DEVELOPMENT
      // screens: {
      //   lg: "770px",
      // },
    },
  },
  plugins: [],
};

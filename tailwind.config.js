/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#0F6E56",
        brandDark: "#085041",
        brandMid: "#1D9E75",
        brandLight: "#E1F5EE",
        background: "#F5F4F0",
      },
    },
  },
  plugins: [],
};

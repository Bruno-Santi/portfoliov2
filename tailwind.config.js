/** @type {import(tailwindcss').Config */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        agbalumo: ["Agbalumo", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

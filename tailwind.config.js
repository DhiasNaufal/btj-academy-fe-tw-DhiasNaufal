/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#352f64",
          300: "#403b68",
        },
        secondary: {
          DEFAULT: "#cfddf9",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

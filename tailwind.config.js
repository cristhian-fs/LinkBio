/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          0: "#FFFFFF",
          100: "#F6F8FA",
          200: "#E2E4E9",
          300: "#CDD0D5",
          400: "#868C98",
          500: "#525866",
          600: "#31353F",
          700: "#20232D",
          800: "#161922",
          900: "#06080D",
        },
        blue: {
          lighter: "#EBF1FF",
          light: "#C2D6FF",
          base: "#375DFB",
          dark: "#253EA7",
          darker: "#162664",
        },
      },
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
};

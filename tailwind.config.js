/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EAF4FF",
        accent: "#3986D7",
        action: {
          DEFAULT: "#1E5A96",
          dark: "#184B7C",
        },
        ink: "#172B46",
        muted: "#4F6275",
        canvas: "#F7FAFE",
        line: "#D5E2EF",
      },
      boxShadow: {
        sheet: "0 18px 40px -30px rgba(23, 43, 70, 0.55)",
      },
    },
  },
  plugins: [],
};

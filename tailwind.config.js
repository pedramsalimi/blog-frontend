module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ef3f48",
      },

      zIndex: {
        backdrop: 1003,
        progress: 1031,
      },
    },
    fontFamily: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

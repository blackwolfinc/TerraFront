/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#1C3737",
        primary: "#2E4D4D",
        accent: "#EE7B36",
      },
      fontFamily: {
        amstelvar: ["AmstelvarAlpha", "serif"],
        baijamjuree: ["Bai Jamjuree", "sans-serif"],
        bevietnampro: ["Be Vietnam Pro", "sans-serif"],
        damion: ["Damion", "cursive"],
        arimo: ["Arimo", "sans-serif"],
        dmserif: ["DM Serif Text", "serif"],
        brygada: ["Brygada 1918", "sans-serif"],
      },
      boxShadow: {
        custom1: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};

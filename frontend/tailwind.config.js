/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        audiowide: ["Audiowide", "cursive"],
        exo2: ["Exo 2", "sans-serif"],
        sharetech: ["Share Tech Mono", "monospace"],
        russo: ["Russo One", "sans-serif"],
        major: ["Major Mono Display", "monospace"],
        quantico: ["Quantico", "sans-serif"],
      },
    },
  },
  plugins: [],
};

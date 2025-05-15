/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
        colors: {
        space:     "#0F172A",
        star:      "#F8FAFC",
        accent:    "#7DD3FC",      // Galactic Blue
        secondary: "#E2E8F0",      // Starlight Silver
        highlight: "#C084FC",      // Nebula Purple
        },
      backgroundImage: {
        'star-gradient': 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
      },
      animation: {
        spinSlow:    "spin 20s linear infinite",
        spinReverse: "spinReverse 30s linear infinite",
      },
      keyframes: {
        spinReverse: {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
}

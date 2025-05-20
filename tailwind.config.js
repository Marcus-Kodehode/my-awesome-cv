// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // core
        space: "#0F172A",
        "space-light": "#1E293B",
        star: "#F8FAFC",
        accent: "#7DD3FC",
        secondary: "#E2E8F0",
        highlight: "#C084FC",
      },
      backgroundImage: {
        "base-gradient": "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)",
        "star-gradient": "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)",
        "about-gradient": "linear-gradient(180deg, #1E293B 0%, #374151 100%)",
      },
      animation: {
        spinSlow: "spin 20s linear infinite",
        spinReverse: "spinReverse 30s linear infinite",
        marquee: "marquee 20s linear infinite", // ✅ korrekt animasjon for sømløs loop
      },
    },
  },
  plugins: [],
};

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
        space:        "#0F172A",
        "space-light":"#1E293B",    // 20% lysere enn `space`
        star:         "#F8FAFC",
        accent:       "#7DD3FC",     // Galactic Blue
        secondary:    "#E2E8F0",     // Starlight Silver
        highlight:    "#C084FC",     // Nebula Purple
      },
      backgroundImage: {
        // Mørk → medium gradient (brukes i både Home og About for sømløs overgang)
        "base-gradient":  "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)",
        // Eksisterende navngitte gradient (kan fortsatt brukes der du ønsker dem)
        "star-gradient":  "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)",
        // Lysere variant om du ønsker litt mer kontrast under About-kortet
        "about-gradient": "linear-gradient(180deg, #1E293B 0%, #374151 100%)",
      },
      animation: {
        spinSlow:     "spin 20s linear infinite",
        spinReverse:  "spinReverse 30s linear infinite",
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

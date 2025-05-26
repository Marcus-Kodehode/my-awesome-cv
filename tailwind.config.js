/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
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
        "experience-gradient": "linear-gradient(180deg, #1E293B 0%, #334155 30%, #475569 100%)",
        "contact-gradient": "linear-gradient(180deg, #1E293B 0%, #334155 65%, #fbbf24 100%)",
        "footer-sunrise": "linear-gradient(to top, #fbbf24 0%, transparent 100%)",
      },
      keyframes: {
        pulseGravity: {
          "0%": { transform: "scale(1)", opacity: "0.3" },
          "50%": { transform: "scale(1.1)", opacity: "0.5" },
          "100%": { transform: "scale(1)", opacity: "0.3" },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        pulseShadow: {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(192,132,252, 0.4)"
          },
          "50%": {
            boxShadow: "0 0 0 10px rgba(192,132,252, 0)"
          }
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 }
        },
        bounceIn: {
          "0%": {
            opacity: 0,
            transform: "scale(0.3)"
          },
          "50%": {
            opacity: 1,
            transform: "scale(1.05)"
          },
          "70%": {
            transform: "scale(0.9)"
          },
          "100%": {
            transform: "scale(1)"
          }
        },
      },
      animation: {
        spinSlow: "spin 20s linear infinite",
        spinReverse: "spinReverse 30s linear infinite",
        marquee: "marquee 20s linear infinite",
        pulseGravity: "pulseGravity 6s ease-in-out infinite",
        "slide-in": "slideIn 0.3s ease-out forwards",
        pulseShadow: "pulseShadow 2s infinite",
        fadeIn: "fadeIn 0.6s ease-out forwards",
        fadeOut: "fadeOut 0.6s ease-out forwards",
        bounceIn: "bounceIn 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

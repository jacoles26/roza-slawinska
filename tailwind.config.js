/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm editorial palette — paper, ink, taupe, dusty terracotta accent
        paper: "#F7F3EC",
        "paper-deep": "#EFE8DC",
        cream: "#FDFBF7",
        ink: "#1C1812",
        "ink-soft": "#3A332A",
        taupe: "#8C8170",
        "taupe-light": "#B6AC9C",
        clay: "#B5654A", // dusty terracotta accent
        "clay-soft": "#C98A72",
        sage: "#7C8270",
      },
      fontFamily: {
        display: ['"Fraunces Variable"', "Fraunces", "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans Variable"', "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.28em",
      },
      maxWidth: {
        editorial: "78rem",
      },
      boxShadow: {
        soft: "0 24px 60px -28px rgba(28, 24, 18, 0.35)",
        lift: "0 40px 90px -40px rgba(28, 24, 18, 0.45)",
        "inset-hi": "inset 0 1px 1px rgba(255,255,255,0.5)",
      },
      borderRadius: {
        squircle: "2rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(2rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1.15)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "ken-burns": "ken-burns 18s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

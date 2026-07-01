/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm-rose editorial palette — a play on "Róża" (rose). Warm rose-tinted ivory,
        // deep warm ink, an inviting rose primary and a soft blush. (`clay` is kept as the
        // accent token name so every existing accent picks up the new rose automatically.)
        paper: "#FBF6F2",
        "paper-deep": "#F1E7E2",
        cream: "#FFFFFF",
        ink: "#1A1410",
        "ink-soft": "#41382F",
        taupe: "#8C8175",
        "taupe-light": "#C0B3AC",
        clay: "#BC4B57", // inviting rose — primary accent
        "clay-soft": "#C96270", // rose hover
        blush: "#E7C9CB", // soft blush — warm fills / highlights
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

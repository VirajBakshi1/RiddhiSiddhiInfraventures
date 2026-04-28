/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
      },
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        brand: {
          orange: "#F05A28",
          "orange-soft": "#F8784A",
          "orange-deep": "#D94A1B",
          green: "#1E7F4F",
          "green-soft": "#2A9C63",
          "green-deep": "#155F3B",
        },
        ivory: {
          50: "#FDFBF7",
          100: "#FAF7F2",
          200: "#F5EFE6",
          300: "#EDE5D6",
        },
        ink: {
          900: "#15161A",
          800: "#22242B",
          700: "#3A3D46",
          600: "#5A5E69",
          500: "#797E8A",
          400: "#A3A7B0",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "tight-2": "-0.02em",
        "tight-3": "-0.03em",
        "wide-3": "0.18em",
      },
      boxShadow: {
        soft: "0 6px 24px -8px rgba(20, 20, 30, 0.08)",
        card: "0 18px 50px -22px rgba(20, 20, 30, 0.18)",
        glow: "0 0 0 1px rgba(240, 90, 40, 0.15)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "ivory-fade":
          "linear-gradient(180deg, #FDFBF7 0%, #FAF7F2 60%, #F5EFE6 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

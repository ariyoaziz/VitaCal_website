// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E7D32",
        secondary: "#D7A86E",
        lightPrimary: "#E8F5E9",
        darkPrimary: "#1B5E20",
        cream: "#F5E6CA",
        screen: "#FAFAFA",
        darkGrey: "#4E4E4E",
        mediumGrey: "#8B8B8B",
        lightGrey: "#E0E0E0",
        white: "#FFFFFF",
        infoBlue: "#2196F3",
        successGreen: "#4CAF50",
        warningOrange: "#FF9800",
        errorRed: "#F44336",
        extraDarkGrey: "#2A2A2A",
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        zoomIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSlow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.05)", opacity: "0.9" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "80%": { opacity: "1", transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        // Animasi baru: Slide in from bottom (untuk elemen yang muncul dari bawah)
        slideInUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-down": "fadeInDown 0.5s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-in-left": "fadeInLeft 1s ease-out forwards",
        "fade-in-right": "fadeInRight 1s ease-out forwards",
        "zoom-in": "zoomIn 0.8s ease-out forwards",
        "bounce-slow": "bounceSlow 1.5s ease-in-out infinite",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
        "pop-in": "popIn 0.6s ease-out forwards",
        "slide-in-up": "slideInUp 0.7s ease-out forwards", // Animasi baru
      },
      backgroundImage: {
        "gradient-green-vitacal":
          "linear-gradient(to bottom, #2E7D32 33%, #66A15A 100%)",
        "gradient-to-r-primary-darkPrimary":
          "linear-gradient(to right, var(--tw-gradient-stops))",
        "gradient-highlight-primary":
          "linear-gradient(to right, #2E7D32, #1B5E20)",
        "gradient-highlight-secondary":
          "linear-gradient(to right, #D7A86E, #B58A5C)",
        // Gradien baru untuk teks atau highlight
        "gradient-to-tr-cream-secondary":
          "linear-gradient(to top right, #F5E6CA, #D7A86E)",
        // Gradien untuk highlight baris teks
        "gradient-text-subtle-primary":
          "linear-gradient(to right, #2E7D32, #66A15A)",
        "gradient-text-subtle-secondary":
          "linear-gradient(to right, #D7A86E, #F5E6CA)",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".bg-clip-text": {
          "background-clip": "text",
          "-webkit-background-clip": "text",
        },
        ".text-fill-transparent": {
          color: "transparent",
          "background-image": theme(
            "backgroundImage.gradient-to-r-primary-darkPrimary"
          ),
          "-webkit-text-fill-color": "transparent",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

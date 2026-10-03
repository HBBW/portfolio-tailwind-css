/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        ink: "#0A0A0B",
        coal: "#101013",
        surface: "#16161A",
        line: "rgba(255,255,255,0.08)",
        accent: {
          DEFAULT: "#D6FF4B",
          soft: "#EAFFA6",
          deep: "#A8CC1F",
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "sans-serif"],
        serif: ['"Instrument Serif"', "serif"],
        sans: ['"Inter"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "spin-slow": "spin-slow 22s linear infinite",
        float: "float 6s ease-in-out infinite",
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};

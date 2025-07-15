import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./client/index.html", 
    "./client/src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Custom IndoSup color theme
        primary: {
          DEFAULT: "#FFC600",
          foreground: "#031D33",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
          foreground: "#031D33",
        },
        accent: {
          DEFAULT: "#031D33",
          foreground: "#FFFFFF",
        },
        neutral: {
          dark: "#222629",
          base: "#919191",
        },
        border: "#E5E5E5",
        input: "#F5F5F5",
        ring: "#FFC600",
        background: "#FFFFFF",
        foreground: "#031D33",
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F5F5F5",
          foreground: "#919191",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#031D33",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#031D33",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        poppins: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        inter: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'plus-jakarta': ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

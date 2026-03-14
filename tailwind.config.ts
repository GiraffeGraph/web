import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background scale — derived from Deep Space Blue
        "bg-base": "#0B1624",
        "bg-surface": "#1D2E47",
        "bg-elevated": "#243650",
        "bg-hover": "#324155",

        // Border scale
        "border-subtle": "#1A2F44",
        "border-default": "#253D5A",
        "border-accent": "#E9AE3F",

        // Brand — Honey Bronze
        primary: "#E9AE3F",
        "primary-bright": "#F0C468",
        "primary-dark": "#C4893A",

        // Secondary — Pale Slate
        secondary: "#A7ADB3",

        // Accents
        "accent-teal": "#52C4A4",
        "accent-amber": "#E9AE3F",
        "accent-blue": "#7BA7CC",
        "accent-warm": "#D4785A",

        // Text
        "text-primary": "#FFFFFF",
        "text-secondary": "#A7ADB3",
        "text-muted": "#5A6A7E",
        "text-inverse": "#1D2E47",

        // Palette raw
        "slate-pale": "#A7ADB3",
        "space-blue": "#1D2E47",
        "honey-bronze": "#E9AE3F",
        "charcoal-blue": "#324155",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular", "monospace"],
        display: [
          "Galaxie Copernicus",
          "Palatino Linotype",
          "Book Antiqua",
          "Georgia",
          "serif",
        ],
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #E9AE3F 0%, #C4893A 100%)",
        "gradient-bronze":
          "linear-gradient(135deg, #F0C468 0%, #E9AE3F 60%, #C4893A 100%)",
        "gradient-card":
          "linear-gradient(135deg, #1D2E47 0%, #202F4A 100%)",
        "gradient-hero":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(233,174,63,0.18) 0%, transparent 60%)",
        "gradient-glow":
          "radial-gradient(circle at center, rgba(233,174,63,0.4) 0%, transparent 70%)",
        "gradient-slate":
          "linear-gradient(135deg, #A7ADB3 0%, #E9AE3F 100%)",
        "mesh-grid":
          "linear-gradient(rgba(167,173,179,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(167,173,179,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        "glow-bronze": "0 0 24px rgba(233,174,63,0.35)",
        "glow-bronze-lg": "0 0 48px rgba(233,174,63,0.25)",
        "glow-card": "0 8px 32px rgba(0,0,0,0.4)",
        "glow-hero":
          "0 32px 80px rgba(0,0,0,0.6), 0 0 80px rgba(233,174,63,0.08)",
        "pricing-featured": "0 0 40px rgba(233,174,63,0.15)",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },
      animation: {
        "float-slow": "float 12s ease-in-out infinite",
        "float-medium": "float 9s ease-in-out infinite",
        "float-fast": "float 7s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.5s cubic-bezier(0.4,0,0.6,1) infinite",
        shimmer: "shimmer 3s linear infinite",
        "dash-flow": "dash-flow 4s linear infinite",
        "dot-travel": "dot-travel 4s linear infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-ring": {
          "0%": { opacity: "0.6", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(1.8)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "dash-flow": {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
        "dot-travel": {
          "0%": { offsetDistance: "0%" },
          "100%": { offsetDistance: "100%" },
        },
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.02em",
        snug: "-0.01em",
        wide: "0.05em",
        wider: "0.08em",
        widest: "0.12em",
      },
    },
  },
  plugins: [],
};

export default config;

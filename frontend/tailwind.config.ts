import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#D61F2A",
          black: "#0B0B0C",
          white: "#F5F5F5",
          green: "#0AE05C",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(214,31,42,0.35), 0 8px 32px rgba(214,31,42,0.18)",
      },
      backgroundImage: {
        'red-glass': "radial-gradient(1200px 800px at 0% 0%, rgba(214,31,42,0.25), transparent 60%), radial-gradient(800px 600px at 100% 100%, rgba(214,31,42,0.15), transparent 60%)",
      }
    },
  },
  plugins: [],
};
export default config;

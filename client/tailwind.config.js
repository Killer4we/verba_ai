/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F19",
        card: "#111827",
        primary: "#6366F1",
        secondary: "#38BDF8",
        text: "#E5E7EB",
        muted: "#9CA3AF",
      },
    },
  },
  plugins: [],
};

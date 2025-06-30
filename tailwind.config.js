/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React project file scan
    "./public/index.html",        // optional if you're using static HTML
  ],

  theme: {
    // ✅ Custom screen sizes (you can change these)
    screens: {
      mobile: "480px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },

    // ✅ Custom colors or other extensions
    extend: {
      colors: {
        primary: "#111827",        // Dark gray
        secondary: "#3b82f6",      // Blue
        accent: "#f59e0b",         // Amber
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      borderRadius: {
        xl: "1rem",        // 16px
        "2xl": "1.5rem",   // 24px
      },
    },
  },

  plugins: [],
}

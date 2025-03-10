/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        custom: '0 0 10px rgba(0, 0, 0, 0.3)',
        customHover: '0 0 10px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}


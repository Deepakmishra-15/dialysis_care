/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'medical-blue': '#1a56db',
        'soft-blue': '#eff6ff',
        'subtle-teal': '#0f766e',
        'teal-light': '#f0fdfa',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

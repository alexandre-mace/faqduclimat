/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fpurple': {
          100: 'rgb(170,165,215)',
          500: '#111827',
          // 100: 'rgb(170,165,215)',
          // 500: '#474376',
        },
        'fdark': {
          200: '#9ca3af',
          300: '#1F2937',
          400: '#171E2A',
          500: '#030507'
        },
        'fyellow': {
          500: '#FFFFFF',
          // 500: '#b5b986',
        }
      },
    },
  },
  plugins: [],
}

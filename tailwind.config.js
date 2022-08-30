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
          300: '#3e3c73',
          400: '#2a2954',
          500: '#111827',
          // 100: 'rgb(170,165,215)',
          // 500: '#474376',
        },
        'fdark': {
          200: '#2A364E',
          300: '#1F2941',
          400: '#182136',
          500: '#121826'
        },
        'fyellow': {
          500: '#FFFFFF',
          // 500: '#b5b986',
        },
        'fred': {
          500: '#FF2048',
          // 500: '#b5b986',
        },
        'forange': {
          500: '#FF9900',
          // 500: '#b5b986',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

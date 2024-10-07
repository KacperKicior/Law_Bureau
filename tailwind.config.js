/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  plugins: [require('tailwindcss'),require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f3f4f6",

          "secondary": "#818cf8",

          "accent": "#fef08a",

          "neutral": "#f3f4f6",

          "base-100": "#f3f4f6",

          "info": "#93c5fd",

          "success": "#bbf7d0",

          "warning": "#fb923c",

          "error": "#ef4444",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],

}
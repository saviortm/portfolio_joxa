/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'pale-white': '#E5E5E5',
            'pale-gold': '#DEBA6C',
            'dark-black': '#18171D',
            'color-title': '#F9D168'
        },
        backgroundImage: {
            'service-pattern': "url('/images/services')",
        }
    },
  },
  plugins: [],
}

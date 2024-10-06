/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // keyframes: {
      //   fadeDown: {
      //     '0%': { opacity: 0, transform: 'translateY(-20px)' },
      //     '100%': { opacity: 1, transform: 'translateY(0)' },
      //   },
      //   fadeUp: {
      //     '0%': { opacity: 0, transform: 'translateY(20px)' },
      //     '100%': { opacity: 1, transform: 'translateY(0)' },
      //   },
      // },
      // animation: {
      //   slide: 'slide 20s linear infinite',
      //   fadeDown: 'fadeDown 1s ease-out',
      //   fadeUp: 'fadeUp 1s ease-out',
      // },
      // keyframes: {
      //   slide: {
      //     '0%': { transform: 'translateX(0)' },
      //     '100%': { transform: 'translateX(-100%)' },
      //   },
      // },
    },
  },
  plugins: [],
}


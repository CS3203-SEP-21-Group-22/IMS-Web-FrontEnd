/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('daisyui'),
  ],
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn .5s ease-in-out',
        'fade-out': 'fadeOut .5s ease-in-out',
        'glowAnimation': 'glowAnimation 3s infinite',
        'scaleAnimation': 'scaleAnimation 3s infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        glowAnimation: {
          '0%': { boxShadow: '0 0 5px #000000' },
          '50%': { boxShadow: '0 0 10px #000000, 0 0 15px #0f169d, 0 0 20px #1a1f7b' },
          '100%': { boxShadow: '0 0 5px #000000' },
        },
        scaleAnimation: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  
}

 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'white' },
        },
      },
      animation: {
        'typewriter': 'typewriter 3s steps(30) 1s forwards',
        'blink': 'blink 0.7s steps(2, start) infinite',
        'fade-in': 'fade-in 1s ease-out forwards',
        'fade-in-delay-1': 'fade-in 1s ease-out 0.3s forwards',
        'fade-in-delay-2': 'fade-in 1s ease-out 0.6s forwards',
        'typing': 'typing 2.5s steps(12) forwards',
        'blink': 'blink 0.75s step-end infinite',
      },

    },
  },
  plugins: [],
}
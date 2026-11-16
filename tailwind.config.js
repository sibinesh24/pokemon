/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        poke: {
          dark: '#0a0d14',
          card: '#121722',
          surface: '#182030',
          border: '#232d42',
          electric: '#f5c518',
          fire: '#ff5349',
          water: '#3b82f6',
          psychic: '#a855f7',
          grass: '#10b981',
          gold: '#ffd700',
          holo: '#7000ff'
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite ease-in-out',
        'float-slow': 'float 6s ease-in-out infinite',
        'holo-shimmer': 'holoShimmer 4s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(245, 197, 24, 0.4))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 30px rgba(245, 197, 24, 0.8))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        holoShimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        }
      }
    },
  },
  plugins: [],
}

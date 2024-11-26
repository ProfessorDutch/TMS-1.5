/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        patriot: {
          navy: '#2A3E55',
          red: '#A94442',
          cream: '#F5F2E9',
          blue: '#7A9BBA',
          gray: '#4A5568',
          crimson: '#8B3635'
        }
      },
      fontSize: {
        'senior': '1.25rem',
        'senior-lg': '1.5rem',
        'senior-xl': '2rem',
        'senior-2xl': '2.5rem',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'grow': 'grow 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        grow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }
        }
      }
    },
  },
  plugins: [],
};
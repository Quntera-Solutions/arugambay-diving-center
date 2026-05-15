import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        sand: {
          50: '#fdfcf8',
          100: '#faf7ee',
          200: '#f3edd9',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'wave-slow': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-25%)' },
        },
        'wave-fast': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-15%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bubble: {
          '0%': { transform: 'translateY(0) scale(0.8)', opacity: '0' },
          '20%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-120vh) scale(1.2)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'wave-slow': 'wave-slow 14s ease-in-out infinite',
        'wave-fast': 'wave-fast 9s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 1.2s ease-out forwards',
        bubble: 'bubble 8s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0ea5e9 100%)',
        'soft-gradient': 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)',
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 60px rgba(0, 212, 255, 0.25)',
        panel: '0 20px 80px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(0,212,255,0.18), transparent 30%), linear-gradient(180deg, rgba(11,24,48,1), rgba(7,17,32,1))',
      },
      colors: {
        navy: '#f5fbff',
        electric: '#0099FF',
        neon: '#0284c7',
        premium: '#0284c7',
        cyan: {
          50: '#0f172a',
          100: '#1e293b',
          200: '#0099FF', // Sky Blue primary
          300: '#0284c7',
          400: '#0ea5e9',
          500: '#0099FF',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#ffffff',
        },
        purple: {
          50: '#0f172a',
          100: '#1e293b',
          200: '#4f46e5',
          300: '#4f46e5',
          400: '#6366f1',
          500: '#4f46e5',
          600: '#4338ca',
          700: '#3730a3',
          800: '#312e81',
          900: '#1e1b4b',
          950: '#ffffff',
        },
        teal: {
          50: '#0f172a',
          100: '#1e293b',
          200: '#0d9488',
          300: '#0d9488',
          400: '#14b8a6',
          500: '#0d9488',
          600: '#0f766e',
          700: '#115e59',
          800: '#134e4a',
          900: '#115e59',
          950: '#ffffff',
        },
        violet: {
          50: '#0f172a',
          100: '#1e293b',
          200: '#6d28d9',
          300: '#7c3aed',
          400: '#8b5cf6',
          500: '#6d28d9',
          600: '#5b21b6',
          700: '#4c1d95',
          800: '#2e1065',
          900: '#4c1d95',
          950: '#ffffff',
        },
        slate: {
          50: '#020617', // Dark slate text
          100: '#0f172a',
          200: '#1e293b',
          300: '#334155', // text-slate-300 becomes dark charcoal
          400: '#475569',
          500: '#64748b',
          600: '#94a3b8',
          700: '#d6f0ff', // Light sky blue background
          800: '#e3f2fd', // Lighter background
          900: '#f5fbff', // Very light background
          950: '#ffffff', // Pure white background
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.88' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;

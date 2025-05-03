/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#1E293B',
        accent: '#6366F1',
        accentDark: '#4F46E5',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        dark: '#020617',
        light: '#F8FAFC',
        muted: '#94A3B8',
        surface: '#1E293B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      animation: {
        'bounce': 'bounce 1.5s infinite',
        'fadeIn': 'fadeIn 0.5s ease-in forwards',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'url("/src/assets/grid-pattern.svg")',
      },
      boxShadow: {
        'glow': '0 0 15px 5px rgba(99, 102, 241, 0.25)',
        'card': '0 10px 30px -5px rgba(2, 6, 23, 0.3)',
      },
    },
  },
  plugins: [],
};
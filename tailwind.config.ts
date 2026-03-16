import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1320px',
      },
    },
    extend: {
      spacing: {
        section: '7rem',
        'section-sm': '4rem',
      },
      colors: {
        accent: {
          DEFAULT: '#a3e635',
          50: '#f5fce8',
          100: '#e8f8c5',
          200: '#d4f291',
          300: '#bae857',
          400: '#a3e635',
          500: '#81cd14',
          600: '#62a30c',
          700: '#4a7c0d',
          800: '#3c6211',
          900: '#335312',
        },
        background: '#09090b',
        surface: '#18181b',
        'surface-light': '#27272a',
        border: '#3f3f46',
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(163, 230, 53, 0.2), 0 0 40px rgba(163, 230, 53, 0.05)' },
          '50%': { boxShadow: '0 0 30px rgba(163, 230, 53, 0.5), 0 0 60px rgba(163, 230, 53, 0.15)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

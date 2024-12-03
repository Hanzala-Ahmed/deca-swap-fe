import { error } from 'console';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primaryRed: 'var(--primary-red)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        gray: 'var(--border-primary)',
        white72: 'var(--white72)',
        white12: 'var(--white12)',
        white30: 'var(--white30)',
        white1: 'var(--white1)',
        white005: 'var(--white005)',
        white14: 'var(--white14)',
        white52: 'var(--white52)',
        ongoing: 'var(--ongoing)',
        scheduled: 'var(--scheduled)',
        gradientText: 'var(--gradient-text)',
      },
      backgroundImage: {
        primaryGradient: 'var(--primary-gradient)',
        blackGradient: 'var(--black-gradient)',
        successGradient: 'var(--success-gradient)',
        gradientText: 'var(--gradient-text)',
      },
      borderColor: {
        primary: 'var(--border-primary)',
        success: 'var(--primary)',
        error: 'var(--primary-red)',
        borderBottom: 'var(--border-bottom)',
      },
      textColor: {
        gray: 'var(--text-gray)',
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './styles/**/*.{css}'],
  theme: {
    extend: {
      colors: {
        canvas: '#EFEBE0',
        sage: '#8A9A5B',
        terracotta: '#B05B3B',
        ink: '#3E4C31'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(62, 76, 49, 0.08)'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        code: ['JetBrains Mono', 'ui-monospace', 'monospace']
      }
    }
  },
  plugins: []
};

export default config;

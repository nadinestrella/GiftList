import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: '#56bfbf',
        background2: '#f0f9e8',
        background3: '#048c8c',
        nextBtn: '#f2d377',
        pink: '#f29bc4',
        arrow: '#d9a08b',
      },
      width: {
        tablet: '43.75rem',
      },
      keyframes: {
        heartbeat: {
          '0%, 50%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '25%, 75%': { transform: 'scale(1.1)', opacity: '1' },
        },
      },
      animation: {
        heartbeat: 'heartbeat 2s infinite',
      },
      objectPosition: {
        'custom-1': '25% 75%', // X 25%, Y 75%
        'custom-2': '65% 60%', // X 65%, Y 60%
      },
    },
  },
  plugins: [],
};
export default config;

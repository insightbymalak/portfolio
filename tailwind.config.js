/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'honey-milk': '#ffe3b3',
        'honey-deep': '#f4c97a',
        'crystal-blue': '#86bada',
        'crystal-deep': '#5a9bc1',
        'dreamy-lilac': '#9f99d1',
        'lilac-deep': '#7a73b8',
        'fairy-pink': '#dbaad7',
        'pink-deep': '#c388be',
        'ink': '#3b3148',
        'ink-soft': '#6b5f7c',
      },
      fontFamily: {
        sans: ['"Inter"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'pill': '0 4px 12px rgba(159, 153, 209, 0.25), inset 0 1px 0 rgba(255,255,255,0.6)',
        'pill-pressed': 'inset 0 2px 6px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.04)',
        'recess': 'inset 0 2px 6px rgba(0,0,0,0.08), inset 0 -1px 0 rgba(255,255,255,0.5)',
        'panel': '0 12px 32px rgba(123, 100, 160, 0.18), 0 2px 6px rgba(123, 100, 160, 0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
        'card': '0 8px 22px rgba(123, 100, 160, 0.15), inset 0 1px 0 rgba(255,255,255,0.7)',
        'glow-blue': '0 0 24px rgba(134, 186, 218, 0.45)',
        'glow-pink': '0 0 24px rgba(219, 170, 215, 0.45)',
      },
      backgroundImage: {
        'watercolor-noise': "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.95  0 0 0 0 0.85  0 0 0 0 0.7  0 0 0 0.08 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
      },
      animation: {
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: 0.85 },
          '50%': { opacity: 1 },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
};

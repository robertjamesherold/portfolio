import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: '#080D12', 1: '#080D12', 2: '#0E1118', 3: '#141824' },
        grouped: { 1: '#11131A', 2: '#171C28', 3: '#1C2333' },
        ink: { 1: '#F4F6FB', 2: '#B8C0D1', 3: '#94A3B8', off: '#303134' },
        line: { DEFAULT: '#232B3D', subtle: '#1B2232' },
        accent: { DEFAULT: '#615FFF', soft: '#7C7AFF' },
        crit: '#FB2C36', high: '#FFA609', medium: '#FFF347', low: '#22C55E',
        err: '#FF4A53', warn: '#FBBF24', info: '#38BDF8', ok: '#BCF85B',
        quality: '#60A5FA', security: '#22D3EE', perf: '#8B5CF6',
      },
      fontFamily: {
        sans: ['Figtree', 'system-ui', 'sans-serif'],
        mono: ['"Azeret Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { container: '1600px', site: '1920px' },
      letterSpacing: { tightish: '-0.01em', tighter2: '-0.02em', tighter25: '-0.025em' },
    },
  },
  plugins: [],
} satisfies Config;

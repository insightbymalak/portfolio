import { motion } from 'framer-motion';

/**
 * SVG-generated watercolor-style cover. Each project gets a deterministic look
 * driven by `theme` (odoo / hr / data / generic) so colors match the ERP context.
 */
const THEMES = {
  odoo: {
    base: '#9f99d1',
    accent: '#86bada',
    spot: '#dbaad7',
    bg: 'from-dreamy-lilac/40 via-crystal-blue/30 to-honey-milk',
  },
  hr: {
    base: '#dbaad7',
    accent: '#ffe3b3',
    spot: '#9f99d1',
    bg: 'from-fairy-pink/45 via-honey-milk to-dreamy-lilac/30',
  },
  data: {
    base: '#86bada',
    accent: '#9f99d1',
    spot: '#dbaad7',
    bg: 'from-crystal-blue/45 via-honey-milk to-dreamy-lilac/30',
  },
  generic: {
    base: '#f4c97a',
    accent: '#dbaad7',
    spot: '#86bada',
    bg: 'from-honey-milk via-fairy-pink/30 to-crystal-blue/30',
  },
};

export default function WatercolorCover({ theme = 'generic', label, status }) {
  const t = THEMES[theme] ?? THEMES.generic;

  return (
    <div
      className={`relative w-full h-40 rounded-2xl overflow-hidden bg-gradient-to-br ${t.bg} shadow-recess`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 320 160"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <radialGradient id={`g1-${theme}`} cx="30%" cy="40%" r="55%">
            <stop offset="0%" stopColor={t.base} stopOpacity="0.55" />
            <stop offset="100%" stopColor={t.base} stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`g2-${theme}`} cx="75%" cy="65%" r="45%">
            <stop offset="0%" stopColor={t.accent} stopOpacity="0.5" />
            <stop offset="100%" stopColor={t.accent} stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`g3-${theme}`} cx="55%" cy="20%" r="30%">
            <stop offset="0%" stopColor={t.spot} stopOpacity="0.6" />
            <stop offset="100%" stopColor={t.spot} stopOpacity="0" />
          </radialGradient>
          <filter id={`blur-${theme}`}>
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        <motion.ellipse
          cx="100" cy="70" rx="120" ry="70"
          fill={`url(#g1-${theme})`}
          filter={`url(#blur-${theme})`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
        <motion.ellipse
          cx="240" cy="100" rx="100" ry="60"
          fill={`url(#g2-${theme})`}
          filter={`url(#blur-${theme})`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.1, ease: 'easeOut' }}
        />
        <motion.ellipse
          cx="180" cy="40" rx="60" ry="40"
          fill={`url(#g3-${theme})`}
          filter={`url(#blur-${theme})`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: 'easeOut' }}
        />

        {/* faint grid lines — gives the "system console" hint */}
        <g stroke="rgba(59,49,72,0.08)" strokeWidth="0.5">
          {[40, 80, 120].map((y) => (
            <line key={`h-${y}`} x1="0" y1={y} x2="320" y2={y} />
          ))}
          {[64, 128, 192, 256].map((x) => (
            <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="160" />
          ))}
        </g>
      </svg>

      <div className="absolute inset-0 bg-watercolor-noise opacity-60 mix-blend-multiply pointer-events-none" />

      {label && (
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/60 bg-honey-milk/70 backdrop-blur px-2 py-1 rounded-full shadow-pill">
            {label}
          </span>
          {status && (
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.15em] px-2 py-1 rounded-full shadow-pill ${
                status === 'done'
                  ? 'bg-crystal-blue/80 text-ink'
                  : status === 'in-progress'
                  ? 'bg-fairy-pink/80 text-ink'
                  : 'bg-dreamy-lilac/60 text-ink/70'
              }`}
            >
              {status === 'done' ? '● live' : status === 'in-progress' ? '◐ active' : '○ planned'}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

import { motion } from 'framer-motion';
import { Gauge, Code2, Wrench, Workflow } from 'lucide-react';
import { gauges, skills } from '../data/portfolioData.js';

const COLOR_HEX = {
  'crystal-blue': '#86bada',
  'dreamy-lilac': '#9f99d1',
  'fairy-pink': '#dbaad7',
  'honey-deep': '#f4c97a',
};

function RadialGauge({ label, value, color = 'crystal-blue', note }) {
  const stroke = COLOR_HEX[color] ?? '#86bada';
  const radius = 52;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative rounded-2xl bg-honey-milk shadow-card p-4 flex flex-col items-center text-center">
      <div className="relative w-32 h-32">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          {/* track */}
          <circle
            cx="60" cy="60" r={radius}
            fill="none"
            stroke="rgba(59,49,72,0.08)"
            strokeWidth="10"
          />
          {/* fill */}
          <motion.circle
            cx="60" cy="60" r={radius}
            fill="none"
            stroke={stroke}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference * (1 - value / 100) }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-display font-extrabold text-2xl text-ink"
          >
            {value}
            <span className="text-sm font-mono text-ink-soft ml-0.5">%</span>
          </motion.span>
        </div>
      </div>
      <p className="font-display font-semibold text-sm text-ink mt-2">{label}</p>
      {note && <p className="text-xs text-ink-soft mt-1 leading-snug">{note}</p>}
    </div>
  );
}

const BUCKET_META = {
  Operations: { icon: Workflow, tint: 'bg-fairy-pink/30', accent: 'bg-fairy-pink' },
  Tools: { icon: Wrench, tint: 'bg-crystal-blue/30', accent: 'bg-crystal-blue' },
  Code: { icon: Code2, tint: 'bg-dreamy-lilac/30', accent: 'bg-dreamy-lilac' },
};

function SkillBucket({ name, items }) {
  const meta = BUCKET_META[name] ?? BUCKET_META.Operations;
  const Icon = meta.icon;
  return (
    <div className="rounded-2xl bg-honey-milk shadow-card p-4">
      <header className="flex items-center gap-2 mb-3">
        <span className={`w-8 h-8 rounded-xl ${meta.tint} grid place-items-center shadow-recess`}>
          <Icon className="w-4 h-4 text-ink" />
        </span>
        <h3 className="font-display font-bold text-ink">{name}</h3>
      </header>
      <ul className="space-y-2">
        {items.map((s) => (
          <li key={s.name}>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-medium text-ink">{s.name}</span>
              <span className="font-mono text-ink-soft">{s.level}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-ink/5 overflow-hidden shadow-recess">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className={`h-full ${meta.accent} rounded-full`}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillGauges() {
  return (
    <section id="skills" className="space-y-4">
      <header className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-crystal-blue/40 grid place-items-center shadow-recess">
          <Gauge className="w-5 h-5 text-ink" />
        </div>
        <div>
          <h2 className="font-display font-bold text-2xl text-ink">Operational Dashboard</h2>
          <p className="text-sm text-ink-soft">Server-monitor gauges for the things I ship.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {gauges.map((g) => (
          <RadialGauge key={g.id} {...g} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {Object.entries(skills).map(([bucket, items]) => (
          <SkillBucket key={bucket} name={bucket} items={items} />
        ))}
      </div>
    </section>
  );
}

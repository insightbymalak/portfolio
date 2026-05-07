import { motion } from 'framer-motion';
import {
  Settings, Database, BarChart2, GitBranch, Users, FileText,
  Handshake,
} from 'lucide-react';
import { capabilities, stats } from '../data/portfolioData.js';

const ICON_MAP = {
  Settings, Database, BarChart2, GitBranch, Users, FileText,
};

const CARD_TINTS = [
  'bg-dreamy-lilac/25 border-dreamy-lilac/30',
  'bg-crystal-blue/25 border-crystal-blue/30',
  'bg-fairy-pink/25  border-fairy-pink/30',
  'bg-honey-deep/30  border-honey-deep/40',
  'bg-crystal-blue/25 border-crystal-blue/30',
  'bg-dreamy-lilac/25 border-dreamy-lilac/30',
];

export default function WhatICanHelpWith() {
  return (
    <section id="help" className="space-y-4">
      {/* section header */}
      <header className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-2xl bg-dreamy-lilac/40 grid place-items-center shadow-recess shrink-0 mt-0.5">
          <Handshake className="w-5 h-5 text-ink" />
        </div>
        <div>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-ink">
            What I Can Help With
          </h2>
          <p className="text-xs sm:text-sm text-ink-soft">
            Practical ways I can contribute — today, at an entry level, honestly.
          </p>
        </div>
      </header>

      {/* stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="rounded-2xl bg-honey-milk shadow-card p-3 sm:p-4 text-center"
          >
            <p className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
              {s.value}
            </p>
            <p className="font-medium text-xs sm:text-sm text-ink mt-0.5 leading-snug">
              {s.label}
            </p>
            <p className="font-mono text-[10px] text-ink-soft/70 mt-1 leading-snug">
              {s.note}
            </p>
          </motion.div>
        ))}
      </div>

      {/* capability cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {capabilities.map((cap, i) => {
          const Icon = ICON_MAP[cap.icon] ?? Settings;
          const tint = CARD_TINTS[i % CARD_TINTS.length];
          return (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`rounded-2xl border ${tint} bg-honey-milk shadow-card p-4 space-y-2`}
            >
              <div className="flex items-center gap-2">
                <span className="w-9 h-9 rounded-xl bg-honey-milk shadow-recess grid place-items-center shrink-0">
                  <Icon className="w-4 h-4 text-ink" />
                </span>
                <h3 className="font-display font-bold text-sm text-ink leading-tight">
                  {cap.title}
                </h3>
              </div>
              <p className="text-xs text-ink/80 leading-relaxed">{cap.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

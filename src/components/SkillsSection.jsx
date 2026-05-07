import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import { skills } from '../data/portfolioData.js';

const CATEGORY_STYLE = {
  'Comfortable With': {
    headerBg: 'bg-crystal-blue/40',
    chipBg:   'bg-crystal-blue/20 text-ink',
    border:   'border-crystal-blue/40',
    badge:    'bg-crystal-blue text-white',
    icon:     '🟢',
  },
  'Working Knowledge': {
    headerBg: 'bg-dreamy-lilac/40',
    chipBg:   'bg-dreamy-lilac/20 text-ink',
    border:   'border-dreamy-lilac/40',
    badge:    'bg-dreamy-lilac text-white',
    icon:     '🟡',
  },
  'Currently Learning': {
    headerBg: 'bg-fairy-pink/40',
    chipBg:   'bg-fairy-pink/20 text-ink',
    border:   'border-fairy-pink/40',
    badge:    'bg-fairy-pink text-ink',
    icon:     '🔵',
  },
  'Practical Exposure': {
    headerBg: 'bg-honey-deep/40',
    chipBg:   'bg-honey-deep/20 text-ink',
    border:   'border-honey-deep/40',
    badge:    'bg-honey-deep text-ink',
    icon:     '⚪',
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="space-y-4">
      <header className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-2xl bg-crystal-blue/40 grid place-items-center shadow-recess shrink-0 mt-0.5">
          <Layers className="w-5 h-5 text-ink" />
        </div>
        <div>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-ink">
            Technical Exposure & Skills
          </h2>
          <p className="text-xs sm:text-sm text-ink-soft">
            Honest self-assessment — no fake percentages, no exaggerated claims.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {Object.entries(skills).map(([category, { items }], i) => {
          const style = CATEGORY_STYLE[category];
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`rounded-2xl border ${style.border} bg-honey-milk shadow-card overflow-hidden`}
            >
              {/* category header */}
              <div className={`${style.headerBg} px-4 py-3 flex items-center gap-2`}>
                <span className="text-base leading-none" aria-hidden="true">
                  {style.icon}
                </span>
                <span className="font-display font-bold text-sm text-ink">
                  {category}
                </span>
              </div>

              {/* skill chips */}
              <div className="p-3 flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs font-medium px-2.5 py-1 rounded-full shadow-pill ${style.chipBg}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}

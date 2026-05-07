import { motion } from 'framer-motion';
import { BookOpen, CircleDot, Circle } from 'lucide-react';
import { learning } from '../data/portfolioData.js';

export default function LearningJourney() {
  return (
    <section id="learning" className="space-y-4">
      <header className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-2xl bg-fairy-pink/40 grid place-items-center shadow-recess shrink-0 mt-0.5">
          <BookOpen className="w-5 h-5 text-ink" />
        </div>
        <div>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-ink">
            Current Learning Journey
          </h2>
          <p className="text-xs sm:text-sm text-ink-soft">
            What I'm actively studying — because ERP work is learned through doing.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {learning.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-2xl bg-honey-milk shadow-card p-4 space-y-2 border border-fairy-pink/20"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display font-bold text-sm text-ink leading-tight">
                {item.topic}
              </h3>
              <span
                className={`shrink-0 flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-full ${
                  item.status === 'active'
                    ? 'bg-crystal-blue/30 text-ink'
                    : 'bg-honey-deep/30 text-ink'
                }`}
              >
                {item.status === 'active' ? (
                  <CircleDot className="w-2.5 h-2.5 text-crystal-deep" />
                ) : (
                  <Circle className="w-2.5 h-2.5 text-ink-soft" />
                )}
                {item.status}
              </span>
            </div>

            <p className="text-xs text-ink/80 leading-relaxed">{item.description}</p>

            <div className="flex items-start gap-1.5 pt-1 border-t border-ink/6">
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft shrink-0 mt-0.5">
                via
              </span>
              <p className="font-mono text-[10px] text-ink-soft leading-snug">{item.resources}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

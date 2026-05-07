import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Workflow, ChevronRight, ChevronDown } from 'lucide-react';
import { flowChart } from '../data/portfolioData.js';

/**
 * Responsive flow chart:
 *  - Mobile: vertical stack with down-arrows between stages
 *  - md+:    horizontal row, equal-flex boxes that grow with their content
 *  - Each box uses flex layout so label + sub-text always fit, no clipping
 *  - Stagger animation gives the "path drawing" feel without hardcoded SVG widths
 */
export default function FlowChart() {
  const stages = flowChart.stages;

  return (
    <section id="flow" className="space-y-4">
      <header className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-dreamy-lilac/40 grid place-items-center shadow-recess shrink-0">
          <Workflow className="w-5 h-5 text-ink" />
        </div>
        <div className="min-w-0">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-ink leading-tight">
            {flowChart.title}
          </h2>
          <p className="text-xs sm:text-sm text-ink-soft">
            How data moves: input → cleaning → validation → ERP → reporting.
          </p>
        </div>
      </header>

      <div className="rounded-3xl bg-honey-milk/70 shadow-recess p-3 sm:p-4 md:p-6">
        <ol className="flex flex-col md:flex-row md:items-stretch gap-2 md:gap-1.5">
          {stages.map((stage, i) => (
            <Fragment key={stage.id}>
              <motion.li
                initial={{ opacity: 0, scale: 0.92, y: 8 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.18, ease: 'easeOut' }}
                className="flex-1 min-w-0"
              >
                <div className="h-full rounded-2xl bg-honey-milk shadow-card p-3 sm:p-4 flex flex-col items-center justify-center text-center gap-1 min-h-[78px] relative overflow-hidden">
                  {/* stage number — tiny corner badge */}
                  <span
                    className="absolute top-1.5 left-2 font-mono text-[9px] uppercase tracking-[0.15em] text-ink-soft/60"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-display font-semibold text-sm sm:text-base text-ink leading-tight break-words">
                    {stage.label}
                  </p>
                  <p className="font-mono text-[10px] sm:text-[11px] text-ink-soft leading-snug break-words">
                    {stage.sub}
                  </p>
                </div>
              </motion.li>

              {i < stages.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3, delay: i * 0.18 + 0.15 }}
                  className="self-center text-dreamy-lilac flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <ChevronDown className="w-5 h-5 md:hidden" />
                  <ChevronRight className="hidden md:block w-5 h-5" />
                </motion.div>
              )}
            </Fragment>
          ))}
        </ol>
      </div>
    </section>
  );
}

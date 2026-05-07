import { motion } from 'framer-motion';

const STATUS_DOT = {
  done: 'bg-crystal-deep',
  'in-progress': 'bg-fairy-pink ring-4 ring-fairy-pink/30 animate-pulse-soft',
  planned: 'bg-dreamy-lilac/60',
};

export default function AgileTimeline({ items }) {
  // Dynamic min-width: only force horizontal scroll when there are enough items
  // to actually need it. With 1–2 items, fit naturally to viewport.
  const minWidth = items.length >= 3 ? `${items.length * 220}px` : 'auto';

  return (
    <div className="relative overflow-x-auto pb-2">
      <div className="relative" style={{ minWidth }}>
        {/* horizontal track */}
        <div className="absolute left-0 right-0 top-12 h-1.5 rounded-full bg-ink/5 shadow-recess" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{ originX: 0 }}
          className="absolute left-0 right-0 top-12 h-1.5 rounded-full bg-gradient-to-r from-crystal-blue via-dreamy-lilac to-fairy-pink"
        />

        <ol className="relative grid grid-flow-col auto-cols-fr gap-4 pt-4">
          {items.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="relative pt-12"
            >
              <span
                className={`absolute top-10 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${
                  STATUS_DOT[item.status] ?? STATUS_DOT.planned
                } shadow-card`}
                aria-hidden="true"
              />
              <div className="rounded-2xl bg-honey-milk shadow-card p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                  {item.period}
                </p>
                <h4 className="font-display font-bold text-ink mt-1">{item.role}</h4>
                <p className="text-sm text-ink-soft">{item.company}</p>
                <ul className="mt-2 space-y-1">
                  {item.bullets.slice(0, 2).map((b, idx) => (
                    <li key={idx} className="text-xs text-ink/80 leading-relaxed">
                      • {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-1">
                  {item.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-dreamy-lilac/30 text-ink shadow-pill"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}

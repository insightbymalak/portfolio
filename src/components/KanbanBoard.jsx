import { motion } from 'framer-motion';

const COLUMNS = [
  { id: 'planned', label: 'Backlog', tint: 'bg-dreamy-lilac/30', accent: 'bg-dreamy-lilac' },
  { id: 'in-progress', label: 'In Progress', tint: 'bg-fairy-pink/30', accent: 'bg-fairy-pink' },
  { id: 'done', label: 'Shipped', tint: 'bg-crystal-blue/30', accent: 'bg-crystal-blue' },
];

export default function KanbanBoard({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {COLUMNS.map((col, ci) => {
        const cards = items.filter((i) => i.status === col.id);
        return (
          <motion.div
            key={col.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
            className={`rounded-2xl ${col.tint} shadow-recess p-3 min-h-[200px]`}
            style={{ perspective: '1000px' }}
          >
            <header className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${col.accent}`} aria-hidden="true" />
                <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
                  {col.label}
                </h4>
              </div>
              <span className="font-mono text-[10px] text-ink-soft">{cards.length}</span>
            </header>

            <ul className="space-y-2">
              {cards.length === 0 ? (
                <li className="rounded-xl border-2 border-dashed border-ink/10 p-4 text-center text-xs text-ink-soft/70">
                  empty lane
                </li>
              ) : (
                cards.map((item, i) => (
                  <motion.li
                    key={item.id}
                    layout
                    initial={{ opacity: 0, rotateX: -10, y: 10 }}
                    whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    whileHover={{ y: -3, rotateX: 4, rotateY: -2 }}
                    className="rounded-xl bg-honey-milk shadow-card p-3"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                      {item.period}
                    </p>
                    <p className="font-display font-bold text-sm text-ink mt-1 leading-tight">
                      {item.role}
                    </p>
                    <p className="text-xs text-ink-soft">{item.company}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {item.stack.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          className="font-mono text-[9px] px-1.5 py-0.5 rounded-full bg-ink/5 text-ink"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.li>
                ))
              )}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
}

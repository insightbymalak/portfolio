import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, KanbanSquare, Briefcase } from 'lucide-react';
import { experience } from '../data/portfolioData.js';
import AgileTimeline from './AgileTimeline.jsx';
import KanbanBoard from './KanbanBoard.jsx';

const VIEWS = [
  { id: 'timeline', label: 'Agile Timeline', icon: GitBranch },
  { id: 'kanban', label: 'Kanban Board', icon: KanbanSquare },
];

export default function WorkHistory() {
  const [view, setView] = useState('timeline');

  return (
    <section id="experience" className="space-y-4">
      <header className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-honey-deep/50 grid place-items-center shadow-recess">
            <Briefcase className="w-5 h-5 text-ink" />
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl text-ink">Work History</h2>
            <p className="text-sm text-ink-soft">
              Toggle the methodology — same data, different lens.
            </p>
          </div>
        </div>

        <div className="inline-flex bg-honey-milk shadow-recess rounded-full p-1" role="tablist">
          {VIEWS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setView(id)}
              role="tab"
              aria-selected={view === id}
              className={`relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                view === id ? 'text-ink' : 'text-ink-soft hover:text-ink'
              }`}
            >
              {view === id && (
                <motion.span
                  layoutId="view-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-crystal-blue to-dreamy-lilac shadow-pill"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <Icon className="relative w-3.5 h-3.5" />
              <span className="relative">{label}</span>
            </button>
          ))}
        </div>
      </header>

      <div className="rounded-3xl bg-honey-milk/60 shadow-recess p-4 md:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {view === 'timeline' ? (
              <AgileTimeline items={experience} />
            ) : (
              <KanbanBoard items={experience} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

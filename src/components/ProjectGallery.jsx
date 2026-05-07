import { AnimatePresence, motion } from 'framer-motion';
import { FolderKanban, X } from 'lucide-react';
import ProjectCard from './ProjectCard.jsx';

export default function ProjectGallery({ projects, activeCert, onClearFilter }) {
  return (
    <section id="projects" className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-dreamy-lilac/40 grid place-items-center shadow-recess">
            <FolderKanban className="w-5 h-5 text-ink" />
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl text-ink">Project Gallery</h2>
            <p className="text-sm text-ink-soft">
              {activeCert
                ? `Filtered by: ${activeCert.name}`
                : 'Modular project engine — fed by projects.json'}
            </p>
          </div>
        </div>

        {activeCert && (
          <button
            onClick={onClearFilter}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-ink/5 hover:bg-ink/10 text-ink transition-colors shadow-pill"
          >
            <X className="w-3.5 h-3.5" /> Clear filter
          </button>
        )}
      </div>

      {projects.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-3xl bg-honey-milk/60 shadow-recess p-10 text-center"
        >
          <p className="font-mono text-sm text-ink-soft">
            No projects tagged with <strong className="text-ink">{activeCert?.name}</strong> yet.
          </p>
          <p className="text-xs text-ink-soft/80 mt-1">
            Add the cert id to a project's <code className="bg-ink/5 px-1.5 py-0.5 rounded">appliedCerts</code> in projects.json.
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
}

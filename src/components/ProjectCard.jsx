import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import WatercolorCover from './WatercolorCover.jsx';

const TECH_TINT = {
  Python: 'bg-crystal-blue/30 text-ink',
  Django: 'bg-dreamy-lilac/30 text-ink',
  'React.js': 'bg-fairy-pink/30 text-ink',
  SQL: 'bg-crystal-blue/40 text-ink',
  Excel: 'bg-honey-deep/40 text-ink',
  Odoo: 'bg-dreamy-lilac/40 text-ink',
  XML: 'bg-honey-milk text-ink',
  PostgreSQL: 'bg-crystal-blue/40 text-ink',
  'Power BI': 'bg-honey-deep/40 text-ink',
  'Power Query': 'bg-fairy-pink/30 text-ink',
  Pandas: 'bg-dreamy-lilac/30 text-ink',
};

const ERP_BADGE = {
  Odoo: 'bg-dreamy-lilac text-white shadow-glow-pink',
  SAP: 'bg-crystal-deep text-white shadow-glow-blue',
  'Workflow Automation': 'bg-fairy-pink text-ink shadow-glow-pink',
  Data: 'bg-crystal-blue text-ink shadow-glow-blue',
};

export default function ProjectCard({ project, index = 0 }) {
  const erpClass = ERP_BADGE[project.erpContext] ?? 'bg-honey-deep text-ink';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`group relative bg-honey-milk/80 backdrop-blur-sm rounded-3xl p-4 shadow-card hover:shadow-panel transition-shadow ${
        project.status === 'planned' ? 'opacity-75' : ''
      }`}
    >
      <WatercolorCover
        theme={project.coverTheme}
        label={project.date}
        status={project.status}
      />

      <header className="flex items-start justify-between gap-3 mt-4">
        <div className="min-w-0">
          <h3 className="font-display font-bold text-lg text-ink leading-tight truncate">
            {project.title}
          </h3>
          <p className="text-sm text-ink-soft mt-0.5">{project.subtitle}</p>
        </div>
        <span
          className={`shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full ${erpClass}`}
        >
          {project.erpContext}
        </span>
      </header>

      <p className="text-sm text-ink/80 mt-3 leading-relaxed line-clamp-3">
        {project.summary}
      </p>

      {project.highlights?.length > 0 && (
        <ul className="mt-3 space-y-1">
          {project.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="text-xs text-ink-soft flex items-start gap-1.5">
              <Sparkles className="w-3 h-3 mt-0.5 shrink-0 text-dreamy-lilac" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className={`font-mono text-[10px] px-2 py-0.5 rounded-full shadow-pill ${
              TECH_TINT[tech] ?? 'bg-honey-deep/40 text-ink'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.links?.repo || project.links?.demo) && (
        <footer className="mt-4 pt-3 border-t border-ink/10 flex gap-2">
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-ink/5 hover:bg-ink/10 text-ink transition-colors"
            >
              <Github className="w-3.5 h-3.5" /> Repo
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-crystal-blue/30 hover:bg-crystal-blue/50 text-ink transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Demo
            </a>
          )}
        </footer>
      )}
    </motion.article>
  );
}

import { motion } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData.js';

const TINT = {
  'crystal-blue': { bg: 'bg-crystal-blue/30', ring: 'ring-crystal-deep', dot: 'bg-crystal-deep' },
  'dreamy-lilac': { bg: 'bg-dreamy-lilac/30', ring: 'ring-lilac-deep', dot: 'bg-lilac-deep' },
  'fairy-pink': { bg: 'bg-fairy-pink/30', ring: 'ring-pink-deep', dot: 'bg-pink-deep' },
  'honey-deep': { bg: 'bg-honey-deep/40', ring: 'ring-honey-deep', dot: 'bg-honey-deep' },
};

export default function CertificationHub({ activeCertId, onToggle }) {
  return (
    <section id="certifications" className="space-y-4">
      <header className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-fairy-pink/40 grid place-items-center shadow-recess shrink-0">
          <ShieldCheck className="w-5 h-5 text-ink" />
        </div>
        <div className="min-w-0">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-ink">Certification Hub</h2>
          <p className="text-xs sm:text-sm text-ink-soft">
            Click a cert to filter projects · click the arrow icon to verify it.
          </p>
        </div>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {certifications.map((cert, i) => {
          const isActive = cert.id === activeCertId;
          const tint = TINT[cert.color] ?? TINT['dreamy-lilac'];
          return (
            <motion.li
              key={cert.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative"
            >
              <button
                onClick={() => onToggle(cert.id)}
                aria-pressed={isActive}
                className={`group w-full text-left rounded-2xl p-4 ${
                  cert.link ? 'pr-12' : ''
                } flex items-start gap-3 transition-all ${
                  isActive
                    ? `bg-honey-milk shadow-panel ring-2 ${tint.ring}`
                    : `${tint.bg} shadow-pill hover:shadow-panel hover:-translate-y-0.5`
                }`}
              >
                <span
                  className={`w-10 h-10 shrink-0 rounded-xl bg-honey-milk shadow-recess grid place-items-center ${
                    isActive ? 'ring-2 ' + tint.ring : ''
                  }`}
                >
                  <Award className="w-4 h-4 text-ink" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display font-semibold text-ink leading-tight break-words">
                    {cert.name}
                  </span>
                  <span className="block text-xs text-ink-soft mt-0.5">{cert.issuer}</span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft/80 mt-1">
                    {cert.date}
                  </span>
                </span>
                <span
                  className={`w-2.5 h-2.5 rounded-full mt-2 shrink-0 ${tint.dot} ${
                    isActive ? 'animate-pulse-soft' : 'opacity-50'
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Optional credential link — sibling of the button so clicks
                  don't trigger the filter. Only rendered if cert.link is set. */}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Verify ${cert.name} credential`}
                  title="View credential"
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-honey-milk shadow-pill grid place-items-center text-ink-soft hover:text-ink hover:shadow-panel hover:-translate-y-0.5 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}

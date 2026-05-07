import { motion } from 'framer-motion';
import { MapPin, Quote, Briefcase } from 'lucide-react';
import { identity } from '../data/portfolioData.js';

export default function Hero() {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="rounded-3xl bg-gradient-to-br from-honey-milk via-fairy-pink/20 to-crystal-blue/30 shadow-panel p-5 sm:p-6 md:p-10 overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-watercolor-noise opacity-40 mix-blend-multiply pointer-events-none" />

        {/* availability pill */}
        <div className="relative flex items-center gap-2 mb-4 sm:mb-5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-pulse-soft absolute inline-flex h-full w-full rounded-full bg-crystal-blue opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-crystal-deep" />
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-ink-soft">
            {identity.availability}
          </span>
        </div>

        <h1 className="relative font-display font-extrabold text-3xl sm:text-4xl md:text-6xl text-ink leading-[1.05] tracking-tight break-words">
          {identity.name}
        </h1>

        <p className="relative font-display font-semibold text-base sm:text-lg md:text-xl text-dreamy-lilac mt-2">
          {identity.title}
        </p>

        <div className="relative flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
          <span className="flex items-center gap-1.5 text-xs sm:text-sm text-ink-soft/80">
            <MapPin className="w-3.5 h-3.5" />
            {identity.location}
          </span>
          <span className="flex items-center gap-1.5 text-xs sm:text-sm text-ink-soft/80">
            <Briefcase className="w-3.5 h-3.5" />
            Information Systems Graduate
          </span>
        </div>

        <p className="relative font-display text-lg sm:text-xl md:text-2xl text-ink mt-5 sm:mt-6 max-w-3xl leading-snug">
          {identity.tagline}
        </p>

        <div className="relative mt-4 sm:mt-5 max-w-3xl rounded-2xl bg-honey-milk/70 backdrop-blur-sm shadow-recess p-4 sm:p-5 flex gap-3">
          <Quote className="w-5 h-5 text-dreamy-lilac shrink-0 mt-0.5" />
          <p className="text-sm md:text-base text-ink/85 leading-relaxed">
            {identity.goalStatement}
          </p>
        </div>
      </motion.div>
    </section>
  );
}

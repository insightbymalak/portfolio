import projectsData from './data/projects.json';
import { certifications } from './data/portfolioData.js';
import { useFilter } from './hooks/useFilter.js';

import Sidebar from './components/Sidebar.jsx';
import Hero from './components/Hero.jsx';
import WhatICanHelpWith from './components/WhatICanHelpWith.jsx';
import CertificationHub from './components/CertificationHub.jsx';
import ProjectGallery from './components/ProjectGallery.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import WorkHistory from './components/WorkHistory.jsx';
import LearningJourney from './components/LearningJourney.jsx';
import FlowChart from './components/FlowChart.jsx';

export default function App() {
  const { activeCert, activeCertId, filtered, toggle, clear } = useFilter(
    projectsData,
    certifications,
  );

  return (
    <div className="min-h-screen px-3 sm:px-4 md:px-8 py-4 sm:py-6 md:py-10 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] gap-4 sm:gap-6">
        <Sidebar />

        <main className="space-y-6 sm:space-y-8 md:space-y-10 min-w-0">

          {/* About / Hero */}
          <Hero />

          {/* Stats + What I Can Help With */}
          <WhatICanHelpWith />

          {/* Technical Exposure & Skills */}
          <SkillsSection />

          {/* Current Learning Journey */}
          <LearningJourney />

          {/* Certifications & Training */}
          <CertificationHub activeCertId={activeCertId} onToggle={toggle} />

          {/* ERP & Workflow Projects */}
          <ProjectGallery
            projects={filtered}
            activeCert={activeCert}
            onClearFilter={clear}
          />

          {/* Practical Experience */}
          <WorkHistory />

          {/* How I Think About Workflow Improvement */}
          <FlowChart />

          <footer className="pt-6 pb-4 text-center text-xs text-ink-soft/60 font-mono">
            Malak Hussein · Junior ERP & Operations Associate · Cairo
            <span className="mx-2">·</span>
            Built with React · Vite · Tailwind
          </footer>
        </main>
      </div>
    </div>
  );
}

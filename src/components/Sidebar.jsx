import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, GraduationCap, MessageCircle, Cpu } from 'lucide-react';
import { contact, education, identity } from '../data/portfolioData.js';

const links = [
  { id: 'email', icon: Mail, label: 'Email', href: `mailto:${contact.email}`, value: contact.email, tint: 'bg-fairy-pink/40' },
  { id: 'phone', icon: Phone, label: 'Phone', href: `tel:${contact.phone}`, value: contact.phone, tint: 'bg-honey-deep/40' },
  { id: 'whatsapp', icon: MessageCircle, label: 'WhatsApp', href: contact.whatsapp, value: 'Chat on WhatsApp', tint: 'bg-crystal-blue/40' },
  { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: contact.linkedin, value: 'malak-hussein', tint: 'bg-dreamy-lilac/40' },
  { id: 'github', icon: Github, label: 'GitHub', href: contact.github, value: 'insightbymalak', tint: 'bg-ink/10' },
];

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:overflow-auto rounded-3xl bg-honey-milk/80 backdrop-blur-sm shadow-panel p-5 space-y-5"
    >
      {/* header */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-crystal-blue to-dreamy-lilac grid place-items-center shadow-pill">
          <Cpu className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
            System Control Center
          </p>
          <p className="font-display font-bold text-ink">{identity.name.split(' ')[0]}'s ops</p>
        </div>
      </div>

      {/* contact list */}
      <ul className="space-y-2">
        {links.map(({ id, icon: Icon, label, href, value, tint }) => (
          <li key={id}>
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="group flex items-center gap-3 rounded-2xl px-3 py-2.5 bg-honey-milk hover:bg-honey-milk/60 transition-colors shadow-pill hover:shadow-panel"
            >
              <span className={`w-9 h-9 rounded-xl ${tint} grid place-items-center shadow-recess`}>
                <Icon className="w-4 h-4 text-ink" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[10px] font-mono uppercase tracking-[0.15em] text-ink-soft">
                  {label}
                </span>
                <span className="block text-sm font-medium text-ink truncate">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* education */}
      <div className="rounded-2xl bg-dreamy-lilac/20 shadow-recess p-4 space-y-3">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-lilac-deep" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
            Education
          </span>
        </div>
        {education.map((e) => (
          <div key={e.school} className="text-sm">
            <p className="font-semibold text-ink leading-tight">{e.school}</p>
            <p className="text-ink-soft text-xs mt-0.5">{e.degree}</p>
            <p className="text-ink-soft/80 text-xs font-mono mt-0.5">{e.period}</p>
          </div>
        ))}
      </div>
    </motion.aside>
  );
}

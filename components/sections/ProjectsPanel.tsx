'use client';
import { PROJECTS } from '@/lib/data';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';

export default function ProjectsPanel() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      <p className="text-white/70 text-sm">Selected satellites orbiting Earth. Tap to expand.</p>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {PROJECTS.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setOpen(i)}
            className="text-left glass hud-border rounded-lg p-4 hover:border-cosmos-glow/40 transition"
          >
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-cosmos-glow">Sat 0{i + 1}</p>
            <p className="mt-2 font-display text-lg text-white">{p.title}</p>
            <p className="text-xs text-white/60">{p.tagline}</p>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 40 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass hud-border rounded-2xl max-w-2xl w-full p-8 relative"
            >
              <button onClick={() => setOpen(null)} className="absolute top-4 right-4 text-white/60 hover:text-white">
                <FiX size={20} />
              </button>
              <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-cosmos-glow">Satellite Log</p>
              <h3 className="mt-2 text-2xl font-display text-white">{PROJECTS[open].title}</h3>
              <p className="text-white/60">{PROJECTS[open].tagline}</p>
              <p className="mt-4 text-white/80 text-sm">{PROJECTS[open].description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {PROJECTS[open].tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded bg-white/5 text-white/70">{t}</span>
                ))}
              </div>

              <div className="mt-4 grid sm:grid-cols-2 gap-4 text-xs text-white/70">
                <div>
                  <p className="font-mono text-cosmos-glow mb-1 tracking-widest">FEATURES</p>
                  <ul className="space-y-1">{PROJECTS[open].features.map(f => <li key={f}>· {f}</li>)}</ul>
                </div>
                <div>
                  <p className="font-mono text-cosmos-glow mb-1 tracking-widest">CHALLENGES</p>
                  <p>{PROJECTS[open].challenges}</p>
                  <p className="font-mono text-cosmos-glow mt-3 mb-1 tracking-widest">LEARNING</p>
                  <p>{PROJECTS[open].learning}</p>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                {PROJECTS[open].github && (
                  <a href={PROJECTS[open].github} target="_blank" rel="noreferrer" className="glass rounded-full px-4 py-2 text-xs font-mono tracking-widest uppercase flex items-center gap-2">
                    <FiGithub /> Code
                  </a>
                )}
                {PROJECTS[open].demo && (
                  <a href={PROJECTS[open].demo} target="_blank" rel="noreferrer" className="glass rounded-full px-4 py-2 text-xs font-mono tracking-widest uppercase flex items-center gap-2">
                    <FiExternalLink /> Live
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

'use client';
import { CERTIFICATIONS } from '@/lib/data';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

export default function CertificationsPanel() {
  const [i, setI] = useState<number | null>(null);
  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-3">
        {CERTIFICATIONS.map((c, idx) => (
          <button key={c.name} onClick={() => setI(idx)}
            className="text-left glass hud-border rounded-lg p-4 hover:border-cosmos-glow/40 transition">
            <p className="font-mono text-[10px] tracking-widest uppercase text-cosmos-glow">{c.year}</p>
            <p className="mt-2 text-white text-sm font-display">{c.name}</p>
            <p className="text-xs text-white/60">{c.issuer}</p>
          </button>
        ))}
      </div>
      <AnimatePresence>
        {i !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setI(null)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="glass hud-border rounded-2xl max-w-md w-full p-6 relative">
              <button onClick={() => setI(null)} className="absolute top-3 right-3 text-white/60"><FiX /></button>
              <p className="font-mono text-[10px] tracking-widest uppercase text-cosmos-glow">Certificate</p>
              <p className="mt-2 text-white text-lg font-display">{CERTIFICATIONS[i].name}</p>
              <p className="text-white/70 text-sm">{CERTIFICATIONS[i].issuer} · {CERTIFICATIONS[i].year}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

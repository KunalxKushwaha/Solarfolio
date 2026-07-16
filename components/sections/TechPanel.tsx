'use client';
import { TECH } from '@/lib/data';
import { useState } from 'react';

export default function TechPanel() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <div>
      <p className="text-white/70 text-sm">
        Tools I reach for daily. Hover any node to inspect experience.
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {TECH.map((t, i) => (
          <button
            key={t.name}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            className="glass hud-border rounded-full px-3 py-1.5 text-xs font-mono tracking-widest uppercase text-white/80 hover:text-white transition"
          >
            {t.name}
          </button>
        ))}
      </div>
      <div className="mt-6 h-16 font-mono text-xs text-white/70">
        {hover !== null && (
          <div>
            <p><span className="text-cosmos-glow">{TECH[hover].name}</span> — {TECH[hover].years} yrs</p>
            <div className="mt-2 h-1 w-full bg-white/10 rounded">
              <div className="h-full bg-gradient-to-r from-cosmos-glow to-cosmos-plasma rounded" style={{ width: `${TECH[hover].level}%` }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

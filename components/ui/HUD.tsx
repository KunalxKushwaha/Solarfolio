'use client';
import { PLANETS } from '@/lib/planets.config';
import useScrollProgress from '@/hooks/useScrollProgress';
import { PROFILE } from '@/lib/data';

export default function HUD() {
  const p = useScrollProgress();
  const idx = Math.min(PLANETS.length - 1, Math.floor(p * PLANETS.length));
  const current = PLANETS[idx];

  return (
    <>
      <div className="fixed top-6 left-6 z-50 glass hud-border rounded-md px-4 py-3">
        <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/60">{PROFILE.name}</p>
        <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-cosmos-glow mt-1">
          {current.label} / {current.sectionTitle}
        </p>
      </div>
      <div className="fixed top-6 right-6 z-50 glass hud-border rounded-md px-4 py-3 hidden md:block">
        <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/60">
          Coord · {(p * 100).toFixed(1)}%
        </p>
      </div>
      {/* progress rail */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        {PLANETS.map((pl, i) => (
          <div key={pl.id} className="flex items-center gap-3">
            <div className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? 'bg-cosmos-glow scale-150' : 'bg-white/25'}`} />
            <span className={`font-mono text-[10px] tracking-[0.3em] uppercase transition-opacity ${i === idx ? 'text-white' : 'text-white/40'}`}>{pl.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}

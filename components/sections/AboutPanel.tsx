import { ABOUT } from '@/lib/data';

export default function AboutPanel() {
  return (
    <div className="space-y-4">
      <p>{ABOUT.intro}</p>
      <p className="text-white/70">{ABOUT.story}</p>
      <div className="grid grid-cols-2 gap-3 pt-3">
        {ABOUT.facts.map((f) => (
          <div key={f} className="font-mono text-[11px] tracking-widest uppercase text-white/70">• {f}</div>
        ))}
      </div>
      <div className="pt-3 border-t border-white/10">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-cosmos-glow mb-2">Education</p>
        {ABOUT.education.map((e) => (
          <p key={e.school} className="text-sm text-white/80">
            {e.degree} — <span className="text-white/60">{e.school}, {e.years}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

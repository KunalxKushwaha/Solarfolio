import { EXPERIENCE } from '@/lib/data';
export default function ExperiencePanel() {
  return (
    <div className="space-y-4">
      {EXPERIENCE.map((e) => (
        <div key={e.role} className="relative pl-5 border-l border-white/15">
          <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-cosmos-glow shadow-[0_0_12px_#7bb0ff]" />
          <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-cosmos-glow">{e.period}</p>
          <p className="mt-1 text-white font-display">{e.role} — <span className="text-white/70">{e.company}</span></p>
          <ul className="mt-2 text-xs text-white/70 space-y-1">
            {e.points.map(p => <li key={p}>· {p}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

import { STRENGTHS } from '@/lib/data';
export default function StrengthsPanel() {
  return (
    <div className="space-y-3">
      {STRENGTHS.map((s) => (
        <div key={s.name}>
          <div className="flex justify-between text-xs font-mono tracking-widest uppercase text-white/80">
            <span>{s.name}</span><span className="text-cosmos-glow">{s.level}</span>
          </div>
          <div className="mt-1.5 h-1 bg-white/10 rounded overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cosmos-glow via-white to-cosmos-plasma"
                 style={{ width: `${s.level}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

import { ACHIEVEMENTS } from '@/lib/data';
import { HiOutlineTrophy } from 'react-icons/hi2';
export default function AchievementsPanel() {
  return (
    <div className="space-y-3">
      {ACHIEVEMENTS.map((a) => (
        <div key={a.title} className="flex gap-3 items-start">
          <HiOutlineTrophy className="mt-0.5 text-cosmos-glow shrink-0" size={20} />
          <div>
            <p className="text-white font-display">{a.title}</p>
            <p className="text-white/70 text-xs">{a.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

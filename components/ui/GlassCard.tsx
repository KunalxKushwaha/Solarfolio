import { cn } from '@/lib/utils';
export default function GlassCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('glass hud-border rounded-xl p-4', className)}>{children}</div>;
}

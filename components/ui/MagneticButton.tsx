'use client';
import { useRef, MouseEvent } from 'react';
import gsap from 'gsap';

export default function MagneticButton({
  children, onClick
}: { children: React.ReactNode; onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);

  const onMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    gsap.to(ref.current, { x: x * 0.25, y: y * 0.35, duration: 0.6, ease: 'power3.out' });
  };
  const onLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1,0.4)' });
  };

  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      className="group relative px-10 py-4 font-mono text-xs tracking-[0.35em] uppercase text-white glass rounded-full hud-border overflow-hidden"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-cosmos-glow/0 via-cosmos-glow/30 to-cosmos-plasma/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </button>
  );
}

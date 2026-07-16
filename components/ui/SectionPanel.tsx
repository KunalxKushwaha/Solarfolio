'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PlanetConfig } from '@/lib/planets.config';

export default function SectionPanel({
  index, planet, children
}: { index: number; planet: PlanetConfig; children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const align = index % 2 === 0 ? 'md:ml-auto md:mr-16' : 'md:mr-auto md:ml-16';

  return (
    <section ref={ref} className="relative min-h-screen w-full flex items-center px-6 md:px-12 z-10">
      <motion.div style={{ opacity, y }} className={`max-w-xl w-full ${align}`}>
        <div className="glass hud-border rounded-2xl p-8">
          <p className="font-mono text-[10px] tracking-[0.5em] uppercase text-cosmos-glow">
            {planet.label} · {planet.name}
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-medium text-white">
            {planet.sectionTitle}
          </h2>
          <div className="mt-6 text-white/80 leading-relaxed text-sm md:text-base">
            {children}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

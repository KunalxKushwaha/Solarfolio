'use client';
import { motion } from 'framer-motion';
import { PROFILE } from '@/lib/data';

export default function Ending() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 z-10">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2 }}
        className="font-mono text-xs tracking-[0.5em] uppercase text-white/60"
      >
        End of Journey
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        className="mt-6 text-3xl md:text-5xl font-display text-shimmer text-center max-w-3xl"
      >
        Thanks for visiting my universe.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-6 text-white/60 text-sm"
      >
        — {PROFILE.name}
      </motion.p>
    </section>
  );
}

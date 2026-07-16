'use client';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { PROFILE } from '@/lib/data';

export default function Hero({ onStart }: { onStart: () => void }) {
  return (
    <div className="fixed inset-0 z-40 flex flex-col items-center justify-center pointer-events-none">
      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="font-mono text-xs tracking-[0.5em] text-white/60 uppercase"
      >
        Welcome, Explorer
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-6 font-display text-lg md:text-xl text-white/80 tracking-[0.2em] uppercase"
      >
        My Universe
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, letterSpacing: '0.5em' }}
        animate={{ opacity: 1, letterSpacing: '0.02em' }}
        transition={{ delay: 1.4, duration: 1.4, ease: 'easeOut' }}
        className="mt-4 text-5xl md:text-7xl lg:text-8xl font-display font-semibold text-shimmer"
      >
        {PROFILE.name}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="mt-5 font-mono text-xs md:text-sm tracking-[0.3em] text-white/70 uppercase"
      >
        {PROFILE.role}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.2, duration: 0.8 }}
        className="mt-14 pointer-events-auto"
      >
        <MagneticButton onClick={onStart}>Start Journey</MagneticButton>
      </motion.div>
    </div>
  );
}

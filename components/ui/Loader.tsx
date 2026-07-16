'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onReady }: { onReady: () => void }) {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

 useEffect(() => {
  let progress = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 8 + 2;

    if (progress >= 100) {
      progress = 100;
      setPct(100);

      clearInterval(interval);

      setTimeout(() => {
        setDone(true);

        setTimeout(() => {
          onReady();
        }, 900);
      }, 400);

      return;
    }

    setPct(Math.floor(progress));
  }, 40);

  return () => clearInterval(interval);
}, [onReady]);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cosmos-void"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          <div className="relative w-64 h-64 mb-10">
            <motion.div
              className="absolute inset-0 rounded-full border border-white/10"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-6 rounded-full border border-cosmos-glow/30"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-12 rounded-full bg-gradient-to-br from-cosmos-glow/40 to-cosmos-plasma/30 blur-xl"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 2.4 }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-4xl tabular-nums text-white">{pct}</span>
            </div>
          </div>
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-white/60">
            Calibrating Universe
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

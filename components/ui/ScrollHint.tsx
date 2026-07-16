'use client';
import { motion } from 'framer-motion';

export default function ScrollHint() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{ duration: 5, times: [0, 0.2, 0.7, 1] }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 font-mono text-[10px] tracking-[0.4em] text-white/60 uppercase"
    >
      Scroll to Travel
    </motion.div>
  );
}

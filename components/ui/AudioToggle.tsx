'use client';
import { useEffect, useRef, useState } from 'react';
import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from 'react-icons/hi2';

export default function AudioToggle() {
  const audio = useRef<HTMLAudioElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    audio.current = new Audio('/audio/ambient.mp3');
    audio.current.loop = true;
    audio.current.volume = 0.35;
  }, []);

  const toggle = async () => {
    if (!audio.current) return;
    if (on) { audio.current.pause(); setOn(false); }
    else    { try { await audio.current.play(); setOn(true); } catch {} }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle ambient sound"
      className="fixed bottom-6 right-6 z-[60] glass rounded-full p-3 hud-border"
    >
      {on ? <HiMiniSpeakerWave size={18} /> : <HiMiniSpeakerXMark size={18} />}
    </button>
  );
}

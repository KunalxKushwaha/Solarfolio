'use client';
import dynamic from 'next/dynamic';
import { Suspense, useState } from 'react';
import Loader from '@/components/ui/Loader';
import Hero from '@/components/ui/Hero';
import HUD from '@/components/ui/HUD';
import Cursor from '@/components/ui/Cursor';
import AudioToggle from '@/components/ui/AudioToggle';
import ScrollHint from '@/components/ui/ScrollHint';
import Ending from '@/components/ui/Ending';
import useLenis from '@/hooks/useLenis';
import { PLANETS } from '@/lib/planets.config';
import SectionPanel from '@/components/ui/SectionPanel';
import AboutPanel from '@/components/sections/AboutPanel';
import TechPanel from '@/components/sections/TechPanel';
import ProjectsPanel from '@/components/sections/ProjectsPanel';
import ExperiencePanel from '@/components/sections/ExperiencePanel';
import StrengthsPanel from '@/components/sections/StrengthsPanel';
import CertificationsPanel from '@/components/sections/CertificationsPanel';
import ContactPanel from '@/components/sections/ContactPanel';
import AchievementsPanel from '@/components/sections/AchievementsPanel';

const Universe = dynamic<{ started: boolean }>(() => import('@/components/canvas/Universe'), {
  ssr: false,
  loading: () => null
});

const PANELS = [
  AboutPanel, TechPanel, ProjectsPanel, ExperiencePanel,
  StrengthsPanel, CertificationsPanel, AchievementsPanel, ContactPanel
];

export default function Page() {
  const [ready, setReady] = useState(false);
  const [started, setStarted] = useState(false);
  useLenis(started);

  return (
    <main className="relative">
      {!ready && <Loader onReady={() => setReady(true)} />}
      <Cursor />
      <AudioToggle />

      {/* Fixed WebGL universe */}
      <div className="fixed inset-0 z-0">
        <Suspense fallback={null}>
          <Universe started={started} />
        </Suspense>
      </div>

      {/* Hero overlay */}
      {ready && !started && <Hero onStart={() => setStarted(true)} />}

      {/* Scroll content — one screen per planet + ending */}
      {started && (
        <>
          <HUD />
          <ScrollHint />
          {PLANETS.map((p, i) => {
            const Panel = PANELS[i];
            return (
              <SectionPanel key={p.id} index={i} planet={p}>
                <Panel />
              </SectionPanel>
            );
          })}
          <Ending />
        </>
      )}
    </main>
  );
}

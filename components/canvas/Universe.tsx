'use client';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr, AdaptiveEvents, Preload } from '@react-three/drei';
import { Suspense } from 'react';
import CameraRig from './CameraRig';
import Starfield from './Starfield';
import Nebula from './Nebula';
import DustParticles from './DustParticles';
import ShootingStars from './ShootingStars';
import Sun from './Sun';
import Mercury from './planets/Mercury';
import Venus from './planets/Venus';
import Earth from './planets/Earth';
import Mars from './planets/Mars';
import Jupiter from './planets/Jupiter';
import Saturn from './planets/Saturn';
import Uranus from './planets/Uranus';
import Neptune from './planets/Neptune';
import useIsMobile from '@/hooks/useIsMobile';
import AsteroidBelt from './AstroidBelt';
import Effects from './Effects';

export default function Universe({ started }: { started: boolean }) {
  const mobile = useIsMobile();
  return (
    <Canvas
      dpr={mobile ? [1, 1.2] : [1, 1.8]}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      camera={{ position: [0, 1.2, 8], fov: 55, near: 0.1, far: 2000 }}
      onCreated={({ gl }) => { gl.setClearColor('#03040a', 1); }}
    >
      <fog attach="fog" args={['#03040a', 40, 700]} />
      <ambientLight intensity={0.15} />
      <pointLight position={[0, 0, 0]} intensity={4} color="#ffb26b" distance={200} decay={1.2} />

      <Suspense fallback={null}>
        <Starfield count={mobile ? 3000 : 8000} />
        <Nebula />
        <DustParticles count={mobile ? 400 : 1200} />
        <ShootingStars />

        <Sun />
        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <AsteroidBelt count={mobile ? 200 : 600} />
        <Jupiter />
        <Saturn />
        <Uranus />
        <Neptune />

        <CameraRig started={started} />
        <Effects mobile={mobile} />
        <Preload all />
      </Suspense>

      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
    </Canvas>
  );
}

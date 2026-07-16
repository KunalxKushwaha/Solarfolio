'use client';
import Planet from './Planet';
import { PLANETS } from '@/lib/planets.config';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const cfg = PLANETS[3];

export default function Mars() {
  const rocket = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!rocket.current) return;
    const t = s.clock.elapsedTime;
    rocket.current.position.set(-6 + (t * 3) % 12, Math.sin(t) * 0.5, 0);
    rocket.current.rotation.z = -0.4;
  });
  return (
    <Planet config={cfg}>
      <mesh ref={rocket}>
        <coneGeometry args={[0.15, 0.6, 12]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffb26b" emissiveIntensity={0.6} />
      </mesh>
    </Planet>
  );
}

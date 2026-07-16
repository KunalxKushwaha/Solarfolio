'use client';
import Planet from './Planet';
import { PLANETS } from '@/lib/planets.config';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const cfg = PLANETS[0];

export default function Mercury() {
  const sat = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!sat.current) return;
    const t = s.clock.elapsedTime;
    sat.current.position.set(Math.cos(t) * 1.8, 0.2, Math.sin(t) * 1.8);
  });
  return (
    <Planet config={cfg}>
      <mesh ref={sat}>
        <boxGeometry args={[0.15, 0.15, 0.15]} />
        <meshStandardMaterial color="#7bb0ff" emissive="#7bb0ff" emissiveIntensity={0.8} />
      </mesh>
    </Planet>
  );
}

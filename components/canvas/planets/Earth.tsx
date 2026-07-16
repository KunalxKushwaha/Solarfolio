'use client';
import Planet from './Planet';
import { PLANETS } from '@/lib/planets.config';
import { PROJECTS } from '@/lib/data';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const cfg = PLANETS[2];

export default function Earth() {
  const group = useRef<THREE.Group>(null);
  const sats = useMemo(() => PROJECTS.map((_, i) => ({ a: (i / PROJECTS.length) * Math.PI * 2, r: 3 + i * 0.15 })), []);
  useFrame((s) => { if (group.current) group.current.rotation.y = s.clock.elapsedTime * 0.25; });
  return (
    <Planet config={cfg}>
      <group ref={group}>
        {sats.map((sat, i) => (
          <mesh key={i} position={[Math.cos(sat.a) * sat.r, 0, Math.sin(sat.a) * sat.r]}>
            <boxGeometry args={[0.18, 0.08, 0.32]} />
            <meshStandardMaterial color="#e6ecff" emissive="#7bb0ff" emissiveIntensity={0.9} />
          </mesh>
        ))}
      </group>
      {/* Moon */}
      <mesh position={[3.5, 0.3, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#c0c4d0" roughness={0.9} />
      </mesh>
    </Planet>
  );
}

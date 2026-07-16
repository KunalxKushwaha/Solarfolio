'use client';
import Planet from './Planet';
import { PLANETS } from '@/lib/planets.config';
import { ACHIEVEMENTS } from '@/lib/data';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const cfg = PLANETS[6];

export default function Uranus() {
  const group = useRef<THREE.Group>(null);
  const items = useMemo(() => ACHIEVEMENTS, []);
  useFrame((s) => { if (group.current) group.current.rotation.z = s.clock.elapsedTime * 0.1; });
  return (
    <Planet config={cfg}>
      <group ref={group}>
        {items.map((_, i) => {
          const a = (i / items.length) * Math.PI * 2;
          const r = 2.6;
          return (
            <mesh key={i} position={[Math.cos(a) * r, Math.sin(a) * 0.5, Math.sin(a) * r]}>
              <octahedronGeometry args={[0.2, 0]} />
              <meshStandardMaterial color="#a67bff" emissive="#a67bff" emissiveIntensity={0.9} />
            </mesh>
          );
        })}
      </group>
    </Planet>
  );
}

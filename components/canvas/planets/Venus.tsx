'use client';
import Planet from './Planet';
import { PLANETS } from '@/lib/planets.config';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { TECH } from '@/lib/data';

const cfg = PLANETS[1];

export default function Venus() {
  const group = useRef<THREE.Group>(null);
  const items = useMemo(() => TECH.slice(0, 12), []);
  useFrame((s) => { if (group.current) group.current.rotation.y = s.clock.elapsedTime * 0.15; });
  return (
    <Planet config={cfg}>
      <group ref={group}>
        {items.map((_, i) => {
          const a = (i / items.length) * Math.PI * 2;
          const r = 2.4;
          return (
            <mesh key={i} position={[Math.cos(a) * r, Math.sin(a * 2) * 0.4, Math.sin(a) * r]}>
              <icosahedronGeometry args={[0.14, 0]} />
              <meshStandardMaterial color="#ffd7a1" emissive="#ff8a3a" emissiveIntensity={0.6} />
            </mesh>
          );
        })}
      </group>
    </Planet>
  );
}

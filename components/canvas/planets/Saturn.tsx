'use client';
import Planet from './Planet';
import { PLANETS } from '@/lib/planets.config';
import { CERTIFICATIONS } from '@/lib/data';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const cfg = PLANETS[5];

export default function Saturn() {
  const group = useRef<THREE.Group>(null);
  const certs = useMemo(() => CERTIFICATIONS, []);
  useFrame((s) => { if (group.current) group.current.rotation.y = s.clock.elapsedTime * 0.18; });
  return (
    <Planet config={cfg}>
      <group ref={group}>
        {certs.map((_, i) => {
          const a = (i / certs.length) * Math.PI * 2;
          const r = cfg.size * 1.9;
          return (
            <mesh key={i} position={[Math.cos(a) * r, 0, Math.sin(a) * r]}>
              <planeGeometry args={[0.4, 0.28]} />
              <meshBasicMaterial color="#e6ecff" transparent opacity={0.85} side={THREE.DoubleSide} />
            </mesh>
          );
        })}
      </group>
    </Planet>
  );
}

'use client';
import Planet from './Planet';
import { PLANETS } from '@/lib/planets.config';
import * as THREE from 'three';

const cfg = PLANETS[4];

export default function Jupiter() {
  return (
    <Planet config={cfg}>
      {[1.3, 1.55, 1.8].map((k, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.2, 0, i * 0.4]}>
          <torusGeometry args={[cfg.size * k, 0.04, 12, 96]} />
          <meshBasicMaterial color="#ffd7a1" transparent opacity={0.6 - i * 0.15} blending={THREE.AdditiveBlending} />
        </mesh>
      ))}
    </Planet>
  );
}

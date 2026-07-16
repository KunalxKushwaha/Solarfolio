'use client';
import Planet from './Planet';
import { PLANETS } from '@/lib/planets.config';
import * as THREE from 'three';

const cfg = PLANETS[7];

export default function Neptune() {
  return (
    <Planet config={cfg}>
      {/* space-station scaffolding */}
      <group position={[2.6, 0, 0]}>
        <mesh>
          <torusGeometry args={[0.6, 0.05, 12, 48]} />
          <meshStandardMaterial color="#e6ecff" emissive="#7bb0ff" emissiveIntensity={0.7} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 1.4, 8]} />
          <meshStandardMaterial color="#c0c4d0" />
        </mesh>
      </group>
    </Planet>
  );
}

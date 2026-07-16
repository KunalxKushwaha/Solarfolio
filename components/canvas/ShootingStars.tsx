'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type Star = { pos: THREE.Vector3; vel: THREE.Vector3; life: number };

export default function ShootingStars() {
  const ref = useRef<THREE.Group>(null);
  const stars = useRef<Star[]>([]);

  useFrame((state, d) => {
    if (Math.random() < 0.008 && stars.current.length < 6) {
      stars.current.push({
        pos: new THREE.Vector3((Math.random() - 0.5) * 200, 20 + Math.random() * 20, -100 - Math.random() * 200),
        vel: new THREE.Vector3(-8 - Math.random() * 6, -6, -2),
        life: 1
      });
    }
    if (!ref.current) return;
    ref.current.clear();
    stars.current = stars.current.filter(s => s.life > 0);
    for (const s of stars.current) {
      s.pos.addScaledVector(s.vel, d);
      s.life -= d * 0.6;
      const g = new THREE.BufferGeometry();
      const tail = s.pos.clone().addScaledVector(s.vel, 0.3);
      g.setFromPoints([s.pos, tail]);
      const m = new THREE.LineBasicMaterial({ color: '#ffffff', transparent: true, opacity: s.life });
      ref.current.add(new THREE.Line(g, m));
    }
  });

  return <group ref={ref} />;
}

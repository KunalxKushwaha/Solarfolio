'use client';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function AsteroidBelt({ count = 600 }: { count?: number }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const data = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      r: 22 + Math.random() * 10,
      a: Math.random() * Math.PI * 2,
      y: (Math.random() - 0.5) * 2,
      s: 0.05 + Math.random() * 0.2,
      speed: 0.02 + Math.random() * 0.05
    }));
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    data.forEach((d, i) => {
      const a = d.a + t * d.speed;
      dummy.position.set(Math.cos(a) * d.r, d.y, -145 + Math.sin(a) * d.r);
      dummy.rotation.set(a, a * 0.7, 0);
      dummy.scale.setScalar(d.s);
      dummy.updateMatrix();
      ref.current!.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#8a7d6a" roughness={0.9} metalness={0.1} />
    </instancedMesh>
  );
}

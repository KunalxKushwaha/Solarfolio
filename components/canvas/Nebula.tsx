'use client';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Nebula() {
  const ref = useRef<THREE.Group>(null);
  const clouds = useMemo(() => {
    return Array.from({ length: 6 }).map((_, i) => ({
      color: ['#7bb0ff', '#a67bff', '#ff6b9d', '#ffb26b'][i % 4],
      pos: [
        (Math.random() - 0.5) * 400,
        (Math.random() - 0.5) * 200,
        -200 - i * 60
      ] as [number, number, number],
      scale: 90 + Math.random() * 80
    }));
  }, []);

  useFrame((_, d) => { if (ref.current) ref.current.rotation.z += d * 0.002; });

  return (
    <group ref={ref}>
      {clouds.map((c, i) => (
        <mesh key={i} position={c.pos}>
          <planeGeometry args={[c.scale, c.scale]} />
          <meshBasicMaterial
            color={c.color}
            transparent
            opacity={0.08}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

'use client';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';
import { PLANETS, JOURNEY_END } from '@/lib/planets.config';
import useScrollProgress from '@/hooks/useScrollProgress';

export default function CameraRig({ started }: { started: boolean }) {
  const { camera, mouse } = useThree();
  const progress = useScrollProgress();
  const target = useRef(new THREE.Vector3(0, 1.2, 8));
  const look = useRef(new THREE.Vector3(0, 0, 0));

  // Trigger entrance flight on start
  useEffect(() => {
    if (!started) return;
    gsap.to(camera.position, {
      z: 4, duration: 2.4, ease: 'power3.inOut'
    });
  }, [started, camera]);

  useFrame((_, delta) => {
    // total journey: from z=4 down to JOURNEY_END-10, passing each planet
    const startZ = 4;
    const endZ = JOURNEY_END - 20;
    const z = THREE.MathUtils.lerp(startZ, endZ, progress);

    // find nearest planet for cinematic side-glance
    let closest = PLANETS[0]; let bestDist = Infinity;
    for (const p of PLANETS) {
      const d = Math.abs(z - p.distance);
      if (d < bestDist) { bestDist = d; closest = p; }
    }
    // proximity 0..1 (1 when right at planet)
    const proximity = THREE.MathUtils.clamp(1 - bestDist / 25, 0, 1);

    // side offset makes the camera drift beside the planet, not into it
    const side = Math.sin(progress * Math.PI * 4) * 3.2;
    target.current.set(
      side * proximity + mouse.x * 0.6,
      1.0 + closest.yOffset * proximity + mouse.y * 0.3,
      z + 6 // camera sits 6 units in front of the "focus point"
    );

    // look at closest planet when near, otherwise ahead
    const lookZ = z - 8;
    look.current.set(
      closest.distance === z ? 0 : side * proximity * 0.5,
      closest.yOffset * proximity,
      lookZ
    );

    camera.position.lerp(target.current, Math.min(1, delta * 2.5));
    camera.lookAt(look.current);
  });

  return null;
}

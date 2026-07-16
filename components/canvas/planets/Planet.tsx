'use client';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PlanetConfig } from '@/lib/planets.config';
import atmVert from '@/shaders/atmosphere.vert';
import atmFrag from '@/shaders/atmosphere.frag';

type Props = {
  config: PlanetConfig;
  children?: React.ReactNode;
};

export default function Planet({ config, children }: Props) {
  const group = useRef<THREE.Group>(null);
  const body = useRef<THREE.Mesh>(null);

  const atmUniforms = useMemo(() => ({
    uColor: { value: new THREE.Color(config.color) }
  }), [config.color]);

  useFrame((_, d) => {
    if (body.current) body.current.rotation.y += d * config.rotationSpeed;
    if (group.current) group.current.rotation.y += d * 0.02;
  });

  return (
    <group ref={group} position={[0, config.yOffset, config.distance]}>
      <mesh ref={body}>
        <sphereGeometry args={[config.size, 64, 64]} />
        <meshStandardMaterial
          color={config.color}
          emissive={config.emissive}
          emissiveIntensity={0.25}
          roughness={0.75}
          metalness={0.05}
        />
      </mesh>

      {config.atmosphere && (
        <mesh scale={1.08}>
          <sphereGeometry args={[config.size, 48, 48]} />
          <shaderMaterial
            vertexShader={atmVert}
            fragmentShader={atmFrag}
            uniforms={atmUniforms}
            transparent
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
            depthWrite={false}
          />
        </mesh>
      )}

      {config.rings && (
        <mesh rotation={[Math.PI / 2.3, 0, 0]}>
          <ringGeometry args={[config.size * 1.4, config.size * 2.2, 96]} />
          <meshBasicMaterial color="#e0c68a" side={THREE.DoubleSide} transparent opacity={0.55} />
        </mesh>
      )}

      {children}
    </group>
  );
}

// 'use client';
// import { useRef, useMemo } from 'react';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import vert from '@/shaders/sun.vert';
// import frag from '@/shaders/sun.frag';
// import { useTexture } from '@react-three/drei';

// export default function Sun() {
//   const mat = useRef<THREE.ShaderMaterial>(null);
//   const mesh = useRef<THREE.Mesh>(null);
//   const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

//   const sunTexture = useTexture('/textures/sun/8k_sun.jpg');

//   useFrame((state) => {
//     uniforms.uTime.value = state.clock.elapsedTime;
//     if (mesh.current) mesh.current.rotation.y += 0.001;
//   });

//   return (
//     <group position={[0, 0, 0]}>
//       <mesh ref={mesh}>
//         <sphereGeometry args={[3.2, 96, 96]} />
//         <shaderMaterial ref={mat} vertexShader={vert} fragmentShader={frag} uniforms={uniforms} />
//       </mesh>
//       {/* corona */}
//       <mesh>
//         <sphereGeometry args={[3.9, 48, 48]} />
//         <meshBasicMaterial color="#ffb26b" transparent opacity={0.15} blending={THREE.AdditiveBlending} />
//       </mesh>
//       <pointLight intensity={3} color="#ffd7a1" distance={80} />
//     </group>
//   );
// }
'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

import vert from '@/shaders/sun.vert';
import frag from '@/shaders/sun.frag';

export default function Sun() {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.ShaderMaterial>(null);

  // Load NASA Sun texture
  const sunTexture = useTexture('/textures/sun/8k_sun.jpg');

  // Improve texture quality
  sunTexture.colorSpace = THREE.SRGBColorSpace;
  sunTexture.wrapS = THREE.RepeatWrapping;
  sunTexture.wrapT = THREE.RepeatWrapping;
  sunTexture.anisotropy = 16;

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uTexture: { value: sunTexture }
    }),
    [sunTexture]
  );

  useFrame((state, delta) => {
    uniforms.uTime.value = state.clock.elapsedTime;

    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Main Sun */}
      <mesh ref={mesh}>
        <sphereGeometry args={[3.2, 256, 256]} />
        <shaderMaterial
          ref={material}
          vertexShader={vert}
          fragmentShader={frag}
          uniforms={uniforms}
        />
      </mesh>

      {/* Soft Corona */}
      <mesh scale={1.15}>
        <sphereGeometry args={[3.2, 128, 128]} />
        <meshBasicMaterial
          color="#ffbb66"
          transparent
          opacity={0.28}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* Sun Light */}
      <pointLight
        color="#ffd38a"
        intensity={8}
        distance={180}
        decay={1.5}
      />
    </group>
  );
}
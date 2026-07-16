'use client';
import { EffectComposer, Bloom, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { Vector2 } from 'three';

export default function Effects({ mobile }: { mobile: boolean }) {
  return (
    <EffectComposer multisampling={mobile ? 0 : 2} enableNormalPass={false}>
      <Bloom
        intensity={mobile ? 0.6 : 1.1}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.8}
        mipmapBlur
      />
      {mobile ? <></> : (
        <ChromaticAberration
          offset={new Vector2(0.0008, 0.0008)}
          radialModulation={false}
          modulationOffset={0}
        />
      )}
      <Vignette eskil={false} offset={0.2} darkness={0.85} blendFunction={BlendFunction.NORMAL} />
    </EffectComposer>
  );
}

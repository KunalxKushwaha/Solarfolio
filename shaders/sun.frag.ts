export default /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vPos;
  uniform float uTime;
  uniform sampler2D uTexture;

varying vec2 vUv;

  // simple hash noise
  float hash(vec3 p){ p=fract(p*0.3183099+.1); p*=17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
  float noise(vec3 x){
    vec3 p=floor(x); vec3 f=fract(x); f=f*f*(3.0-2.0*f);
    return mix(mix(mix(hash(p+vec3(0,0,0)),hash(p+vec3(1,0,0)),f.x),
                   mix(hash(p+vec3(0,1,0)),hash(p+vec3(1,1,0)),f.x),f.y),
               mix(mix(hash(p+vec3(0,0,1)),hash(p+vec3(1,0,1)),f.x),
                   mix(hash(p+vec3(0,1,1)),hash(p+vec3(1,1,1)),f.x),f.y),f.z);
  }

  void main() {
    float n = noise(vPos * 1.2 + uTime * 0.15);
    n += 0.5 * noise(vPos * 3.0 - uTime * 0.25);
   vec2 uv = vUv;

uv.x += uTime * 0.005;

vec3 tex = texture2D(uTexture,uv).rgb;

vec3 hot = vec3(1.0,0.9,0.6);

vec3 cool = vec3(1.0,0.45,0.15);

vec3 plasma = mix(cool,hot,smoothstep(0.3,1.1,n));

vec3 col = tex * plasma;
    float fres = pow(1.0 - max(dot(vNormal, vec3(0,0,1)), 0.0), 2.0);
    col += fres * vec3(1.2,0.8,0.35) * 1.5;
    gl_FragColor = vec4(col, 1.0);
  }
`;

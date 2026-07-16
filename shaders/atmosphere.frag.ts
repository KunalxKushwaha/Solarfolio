export default /* glsl */ `
  varying vec3 vNormal;
  uniform vec3 uColor;
  void main(){
    float intensity = pow(0.75 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
    gl_FragColor = vec4(uColor, 1.0) * intensity;
  }
`;

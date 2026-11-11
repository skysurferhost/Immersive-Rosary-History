/** Smooth, spatial timeline. All motion is a pure function of journey progress. */
export function createTimeline(T, curve, worlds) {
  const parametricCurve=new T.Curve();
  parametricCurve.getPoint=(t,target)=>curve.getPoint(t,target);
  parametricCurve.getPointAt=(t,target)=>curve.getPoint(t,target);
  parametricCurve.getTangentAt=(t,target)=>curve.getTangent(t,target);
  const group = new T.Group();
  group.name = 'Golden historical thread';
  group.position.y = -3.6;
  worlds.add(group);
  const lengths=curve.getLengths(3000);
  const distanceAt=p=>{const f=Math.max(0,Math.min(15,p))/15*3000,i=Math.min(2999,Math.floor(f));return lengths[i]+(lengths[i+1]-lengths[i])*(f-i);};
  const uniforms = { journey: { value: 0 }, journeyDistance:{value:0}, quiet: { value: 0 } };
  const vertexShader = `
    attribute float pathDistance;
    varying float route;
    varying float distanceAlong;
    varying vec2 tubeUV;
    void main() {
      route = uv.x * 15.0;
      distanceAlong=pathDistance;
      tubeUV = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`;
  const windowGLSL = `
    float leading(float distanceAlong) {
      float d = distanceAlong - journeyDistance;
      return smoothstep(1.0, 3.0, d) * (1.0 - smoothstep(17.0, 25.0, d));
    }
    float destination(float p) {
      float nearMilestone = pow(0.5 + 0.5 * cos(p * 6.2831853), 10.0);
      return 0.82 + nearMilestone * 0.18;
    }`;
  function thread(radius, base, intensity, color, additive) {
    const material = new T.ShaderMaterial({
      uniforms: { ...uniforms, tint: { value: new T.Color(color) }, base: { value: base }, intensity: { value: intensity } },
      vertexShader,
      fragmentShader: `
        uniform float journey;
        uniform float journeyDistance;
        uniform float base;
        uniform float intensity;
        uniform vec3 tint;
        varying float route;
        varying float distanceAlong;
        varying vec2 tubeUV;
        ${windowGLSL}
        void main() {
          float lead = leading(distanceAlong) * destination(route);
          float behind=1.0-smoothstep(0.0,10.0,distanceAlong-journeyDistance);
          float alpha = base + behind*base*0.3 + lead * intensity;
          gl_FragColor = vec4(tint, alpha);
        }`,
      transparent: true,
      depthWrite: false,
      blending: additive ? T.AdditiveBlending : T.NormalBlending,
      toneMapped: false,
    });
    // Three's TubeGeometry longitudinal UV coordinate follows curve t exactly.
    const tube=new T.TubeGeometry(parametricCurve,1200,radius,6,false);
    tube.setAttribute('pathDistance',new T.Float32BufferAttribute(Array.from({length:tube.attributes.position.count},(_,i)=>distanceAt(tube.attributes.uv.getX(i)*15)),1));
    const mesh = new T.Mesh(tube, material);
    mesh.frustumCulled = false;
    group.add(mesh);
    return mesh;
  }
  const outerHalo = thread(.19, .001, .075, 0xc48b3e, true);
  const innerHalo = thread(.075, .008, .20, 0xe3b56a, true);
  const core = thread(.025, .24, .76, 0xf5dba2, false);
  const positions = [], routes = [], strengths = [];
  // Stable irregular points prevent the decorative, timed blinking effect.
  let seed = 7419;
  const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  for (let i = 0; i < 108; i++) {
    const p = (i + .2 + random() * .6) / 108 * 15;
    const pos = curve.getPoint(p / 15);
    pos.x += (random() - .5) * .23;
    pos.y += (random() - .5) * .23;
    pos.z += (random() - .5) * .12;
    positions.push(...pos.toArray());
    routes.push(distanceAt(p));
    strengths.push(.55 + random() * .45);
  }
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('routePosition', new T.Float32BufferAttribute(routes, 1));
  geometry.setAttribute('strength', new T.Float32BufferAttribute(strengths, 1));
  const material = new T.ShaderMaterial({
    uniforms,
    vertexShader: `
      attribute float routePosition;
      attribute float strength;
      uniform float journey;
        uniform float journeyDistance;
      uniform float quiet;
      varying float brightness;
      ${windowGLSL}
      void main() {
        float lead = leading(routePosition);
        // The shimmer follows spatial progress, so reverse travel retraces it.
        float shimmer = mix(0.85, 0.72 + 0.28 * sin(routePosition * .7 + journeyDistance * .15), 1.0 - quiet);
        brightness = lead * strength * shimmer;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp(85.0 / max(1.0, -mv.z), 2.0, 5.0) * strength;
      }`,
    fragmentShader: `
      varying float brightness;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5)) * 2.0;
        float halo = exp(-d * d * 5.0) * (1.0 - smoothstep(0.75, 1.0, d));
        gl_FragColor = vec4(1.0, 0.80, 0.45, halo * brightness * 0.8);
      }`,
    transparent: true,
    depthWrite: false,
    blending: T.AdditiveBlending,
    toneMapped: false,
  });
  const sparkles = new T.Points(geometry, material);
  sparkles.frustumCulled = false;
  group.add(sparkles);
  return {
    group,
    update(progress, elapsed = 0, reduced = false) {
      uniforms.journey.value = Math.max(0, Math.min(15, progress));
      uniforms.journeyDistance.value=distanceAt(progress);
      uniforms.quiet.value = reduced ? 1 : 0;
    },
    dispose() {
      group.traverse(object => { object.geometry?.dispose(); object.material?.dispose(); });
      worlds.remove(group);
    },
  };
}

// Art-directed local focal coordinates, reviewed against the actual chapter assets.
// Entrance/exit offsets are relative to the focal point; distance prevents plane crossing.
export const cameraAnchors=[
 {subject:[0,.6,0],entrance:[-.8,.6],exit:[.3,.15],distance:17,safe:14},
 {subject:[0,1,2.2],entrance:[0,.4],exit:[0,0],distance:17,safe:13},
 {subject:[-.25,.7,0],entrance:[-1,.8],exit:[.2,.2],distance:17,safe:13},
 {subject:[0,.5,0],entrance:[.8,1],exit:[-.2,.3],distance:17,safe:14},
 {subject:[.4,.5,0],entrance:[-.6,.2],exit:[.3,.5],distance:17,safe:14},
 {subject:[.5,.6,0],entrance:[-.5,.5],exit:[.1,.2],distance:17,safe:13},
 {subject:[0,-.3,-1],entrance:[0,1.3],exit:[0,.2],distance:20,safe:17},
 {subject:[0,.6,0],entrance:[.8,.4],exit:[1,.2],distance:18,safe:15},
 {subject:[.25,.9,0],entrance:[-.7,-.4],exit:[.1,.6],distance:17,safe:13},
 {subject:[0,1,2.2],entrance:[0,.5],exit:[0,0],distance:18,safe:14},
 {subject:[0,.7,0],entrance:[.6,.5],exit:[-.2,.3],distance:17,safe:13},
 {subject:[-.4,.5,0],entrance:[.8,.3],exit:[.2,.1],distance:18,safe:14},
 {subject:[0,0,0],entrance:[.6,.7],exit:[0,1],distance:17,safe:18},
 {subject:[.4,.6,0],entrance:[-.6,.2],exit:[.3,.4],distance:18,safe:16}
];
const widths=[11,10,8.5,10,11,8.7,15,9,8,12,9.3,9.6,9,11];
const smooth=t=>t*t*t*(t*(t*6-15)+10);
export function cameraPose(T,curve,progress,isMobile=false,aspect=isMobile?.46:1.78){
 const p=Math.max(0,Math.min(15,progress)),i=Math.min(14,Math.floor(p)),f=p-i;
 function anchor(station,phase){
  const origin=curve.getPoint(station/15);
  if(station===0)return {position:origin.clone().add(new T.Vector3(0,0,isMobile?23:15)),look:origin.clone()};
  if(station===15)return {position:origin.clone().add(new T.Vector3(0,0,isMobile?23:19)),look:origin.clone().add(new T.Vector3(0,isMobile?2.3:0,-2))};
  const j=station-1,s=cameraAnchors[j],panorama=[1,6,9,12].includes(j),right=[2,5,8,10].includes(j);
  const scale=isMobile?(j===6?.49:.65):panorama?.86:1;
  const center=origin.clone().add(new T.Vector3(isMobile?0:right?-3.5:panorama?0:3.8,isMobile?5.2:panorama?1.8:0,0));
  const focal=center.add(new T.Vector3(...s.subject).multiplyScalar(scale));
  // Portrait framing reserves the lower screen for chapter text and fits both figures.
  const fit=widths[j]*scale/(2*Math.tan(43*Math.PI/360)*Math.max(.3,aspect)) * 1.12;
  const distance=Math.max(phase==='exit'?s.safe:s.distance,fit)+(phase==='entrance'?2:0);
  const offset=phase==='entrance'?s.entrance:phase==='exit'?s.exit:[0,0];
  const aim=focal.clone();
  if(isMobile)aim.y-=2.6;
  else if(!panorama&&phase!=='exit')aim.x-=(right?-1:1)*2.8;
  const position=aim.clone().add(new T.Vector3(offset[0],offset[1],distance));
  return {position,look:aim};
 }
 // Focus first; then leave after the environment has dissolved, never through a plane.
 let a,b,t;
 if(f<.28){a=anchor(i,'main');b=anchor(i,'exit');t=f/.28;}
 else if(f<.66){a=anchor(i,'exit');b=anchor(i+1,'entrance');t=(f-.28)/.38;}
 else{a=anchor(i+1,'entrance');b=anchor(i+1,'main');t=(f-.66)/.34;}
 const u=smooth(t);
 // Curvature only in the celestial bridge, after the focused approach.
 const bend=f>=.28&&f<.66?Math.sin(Math.PI*t)**4:0;
 const position=a.position.clone().lerp(b.position,u);
 position.y+=bend*([3,8,11].includes(i)?1.2:.45);
 return {position,look:a.look.clone().lerp(b.look,u),origin:curve.getPoint(p/15)};
}

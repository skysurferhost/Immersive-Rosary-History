import {devotionalDetails} from './rosary-details.js';
import {geographicPoint} from './globe-controls.js';
// Original procedural meshes. 59 prayer beads; connectors are not prayer beads.
export function createRosary(T) {
  const group = new T.Group(); group.name='rosary';
  const gold=new T.MeshStandardMaterial({color:0xd3ad69,metalness:.58,roughness:.31,emissive:0x35210c,emissiveIntensity:.16});
  const darkGold=new T.MeshStandardMaterial({color:0x94713f,metalness:.48,roughness:.38});
  const woodCanvas=document.createElement('canvas');woodCanvas.width=256;woodCanvas.height=128;
  const ctx=woodCanvas.getContext('2d');ctx.fillStyle='#542c18';ctx.fillRect(0,0,256,128);
  for(let x=0;x<256;x++){const shade=Math.round(47+17*Math.sin(x*.17)+8*Math.sin(x*.71));ctx.strokeStyle=`rgba(${shade+57},${shade+14},${shade-12},.65)`;ctx.beginPath();for(let y=0;y<=128;y++) {let xx=x+3*Math.sin(y*.07+x*.02); y?ctx.lineTo(xx,y):ctx.moveTo(xx,y);}ctx.stroke();}
  const texture=new T.CanvasTexture(woodCanvas);texture.colorSpace=T.SRGBColorSpace;
  const wood=new T.MeshStandardMaterial({color:0xe1bb91,map:texture,bumpMap:texture,bumpScale:.012,roughness:.32,metalness:.02});
  const staticParts=[];const beads=[];const small=new T.SphereGeometry(.135,24,16),large=new T.SphereGeometry(.19,28,20);
  function bead(p,big,decade){const mesh=new T.Mesh(big?large:small,wood.clone());mesh.position.copy(p);mesh.scale.y=1.08;mesh.userData={prayer:big?'ourFather':'hailMary',index:beads.length,decade};mesh.name=`prayer-bead-${beads.length+1}`;group.add(mesh);beads.push(mesh);for(let s of [-1,1]){const cap=new T.Mesh(new T.SphereGeometry(big?.052:.038,12,8),gold);cap.position.copy(p);const axis=p.x===0?new T.Vector3(0,1,0):new T.Vector3(-3.5*(p.y-.75)/3.15,3.15*p.x/3.5,0).normalize();cap.position.addScaledVector(axis,s*(big?.198:.142));cap.scale.y=.5;cap.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),axis);staticParts.push(cap);}return mesh;}
  function chain(a,b){const d=a.distanceTo(b),count=Math.max(2,Math.ceil(d/.065));for(let j=0;j<count;j++){let p=a.clone().lerp(b,(j+.5)/count);const ring=new T.Mesh(new T.TorusGeometry(.035,.008,4,10),gold);ring.position.copy(p);ring.rotation.z=Math.atan2(b.y-a.y,b.x-a.x);ring.rotation.y=(j%2)*Math.PI/2;staticParts.push(ring);}}
  // PDF topology: 54 loop beads, five pendant beads, separate centerpiece.
  // Stable IDs retain decade ordering: bead 0 is the first-decade Our Father.
  bead(new T.Vector3(0,-3.15,0),true,1);
  let points=[];for(let i=1;i<55;i++){const a=-Math.PI/2+.17+(Math.PI*2-.34)*(i-1)/53;const p=new T.Vector3(3.5*Math.cos(a),.75+3.15*Math.sin(a),.10*Math.cos(a*2));points.push(p);bead(p,i%11===0,Math.floor(i/11)+1);if(i>1)chain(points[i-2],p);}
  const {centerpiece,crucifix}=devotionalDetails(T,gold,darkGold);group.add(centerpiece,crucifix);
  chain(points[0],centerpiece.position);chain(points[53],centerpiece.position);
  chain(centerpiece.position,beads[0].position);
  let prev=beads[0].position;for(let i=0;i<4;i++){const p=new T.Vector3(0,-3.72-i*.46,0);bead(p,i===3,0);chain(prev,p);prev=p;}
  chain(prev,new T.Vector3(0,-5.47,0));
  // Bake the hundreds of tiny links and bead caps into one static draw call.
  const baked=staticParts.map(mesh=>{mesh.updateMatrix();const g=mesh.geometry.toNonIndexed();g.applyMatrix4(mesh.matrix);mesh.geometry.dispose();return g;});
  const merged=new T.BufferGeometry();
  for(const key of ['position','normal','uv']){const size=key==='uv'?2:3;const total=baked.reduce((n,g)=>n+g.attributes[key].array.length,0);const values=new Float32Array(total);let offset=0;for(const g of baked){values.set(g.attributes[key].array,offset);offset+=g.attributes[key].array.length;}merged.setAttribute(key,new T.BufferAttribute(values,size));}
  merged.computeBoundingSphere();for(const geometry of baked)geometry.dispose();
  const hardware=new T.Mesh(merged,gold);hardware.name='Merged rosary chain and caps';group.add(hardware);
  if(beads.length!==59||beads.filter(b=>b.userData.prayer==='ourFather').length!==6)throw new Error('Rosary topology invalid');
  group.userData={prayerBeadCount:59,hailMaryBeads:53,ourFatherBeads:6};
  return {group,beads,crucifix,centerpiece};
}

export function createGlobe(T, locations=[]) {
  const group=new T.Group();group.name='Daylight Earth';
  const loader=new T.TextureLoader(),texture=loader.load('./assets/earth-daylight-regional.jpg');texture.colorSpace=T.SRGBColorSpace;texture.anisotropy=4;
  const earth=new T.Mesh(new T.SphereGeometry(3,80,56),new T.MeshStandardMaterial({map:texture,roughness:.72,metalness:0,emissiveMap:texture,emissive:0xffffff,emissiveIntensity:.055}));earth.name='NASA daylight surface';group.add(earth);
  const cloudMap=loader.load('./assets/earth-clouds.jpg');
  const clouds=new T.Mesh(new T.SphereGeometry(3.024,64,40),new T.MeshStandardMaterial({color:0xffffff,alphaMap:cloudMap,transparent:true,opacity:.40,depthWrite:false,roughness:1}));clouds.name='NASA Blue Marble cloud layer';group.add(clouds);
  const atmosphere=new T.Mesh(new T.SphereGeometry(3.10,64,40),new T.ShaderMaterial({transparent:true,depthWrite:false,side:T.BackSide,blending:T.AdditiveBlending,uniforms:{sunView:{value:new T.Vector3(-.28,.38,1).normalize()}},vertexShader:`varying vec3 n; varying vec3 v; void main(){vec4 p=modelViewMatrix*vec4(position,1.0); n=normalize(normalMatrix*normal); v=normalize(-p.xyz); gl_Position=projectionMatrix*p;}`,fragmentShader:`varying vec3 n; varying vec3 v; uniform vec3 sunView; void main(){float rim=pow(1.0-abs(dot(normalize(n),normalize(v))),3.5); float daylight=0.25+0.75*max(dot(normalize(n),sunView),0.0);gl_FragColor=vec4(0.33,0.57,0.78,rim*daylight*0.27);}`}));atmosphere.name='Subtle sunlit atmospheric limb';group.add(atmosphere);
  const markers=[],ink=new T.MeshBasicMaterial({color:0x121d29}),gold=new T.MeshBasicMaterial({color:0xffd384});
  for(const loc of locations){const p=geographicPoint(T,loc.lat,loc.lon),color=loc.category==='history'?0xffd384:0x9bd6ea;const marker=new T.Mesh(new T.SphereGeometry(.075,16,12),new T.MeshBasicMaterial({color}));marker.position.copy(p);marker.userData={location:loc,baseColor:color};marker.name=loc.name;group.add(marker);markers.push(marker);
   const ring=new T.Mesh(new T.TorusGeometry(.105,.025,8,28),ink);ring.position.copy(p);ring.lookAt(p.clone().multiplyScalar(2));group.add(ring);
   const edge=new T.Mesh(new T.TorusGeometry(.14,.012,8,28),new T.MeshBasicMaterial({color}));edge.position.copy(p);edge.lookAt(p.clone().multiplyScalar(2));group.add(edge);
   const halo=new T.Mesh(new T.TorusGeometry(.21,.015,8,32),new T.MeshBasicMaterial({color:0xffdf9d,transparent:true,opacity:0,depthWrite:false}));halo.position.copy(p.clone().multiplyScalar(1.008));halo.lookAt(p.clone().multiplyScalar(2));group.add(halo);marker.userData.halo=halo;marker.userData.accents=[ring,edge,halo];
  }
  group.rotation.y=-Math.PI/2;
  group.userData.clouds=clouds;
  return {group,markers,earth,clouds};
}

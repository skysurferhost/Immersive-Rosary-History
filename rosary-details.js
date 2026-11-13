import {GLTFLoader} from './vendor/GLTFLoader.js';
/** Devotional hardware with an attributed museum corpus; the inset icon is public domain. */
export function devotionalDetails(T,gold,darkGold){
 const centerpiece=new T.Group();centerpiece.name='Our Lady of Perpetual Help centerpiece';centerpiece.userData.prayer='hailHolyQueen';centerpiece.position.set(0,-2.65,0);
 const backing=new T.Mesh(new T.BoxGeometry(.38,.49,.065),gold);centerpiece.add(backing);
 for(const [x,y,w,h] of [[-.178,0,.023,.46],[.178,0,.023,.46],[0,.225,.36,.023],[0,-.225,.36,.023]]){const rim=new T.Mesh(new T.BoxGeometry(w,h,.025),darkGold);rim.position.set(x,y,.04);centerpiece.add(rim);}
 // A rectangular inset preserves the complete icon, including both angels.
 const iconMat=new T.MeshStandardMaterial({color:0xffffff,roughness:.48,metalness:.1,emissive:0xffffff,emissiveIntensity:.12});
 const inset=new T.Mesh(new T.PlaneGeometry(.32,.39),iconMat);inset.position.z=.04;centerpiece.add(inset);
 if(typeof document.createElementNS==='function')new T.TextureLoader().load('assets/our-lady-perpetual-help.webp',t=>{t.colorSpace=T.SRGBColorSpace;iconMat.map=iconMat.emissiveMap=t;iconMat.needsUpdate=true;});
 const crucifix=new T.Group();crucifix.name='Antique gold crucifix with INRI';crucifix.userData.prayer='creed';crucifix.position.set(0,-6.05,0);
 const shape=new T.Shape();const points=[[-.09,-.59],[.09,-.59],[.09,.15],[.39,.15],[.39,.31],[.09,.31],[.09,.61],[-.09,.61],[-.09,.31],[-.39,.31],[-.39,.15],[-.09,.15]];points.forEach(([x,y],i)=>i?shape.lineTo(x,y):shape.moveTo(x,y));shape.closePath();
 const cross=new T.Mesh(new T.ExtrudeGeometry(shape,{depth:.065,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:.014,bevelThickness:.014}),gold);cross.position.z=-.04;crucifix.add(cross);
 // Licensed museum sculpture, uniformly fitted to the existing Rosary cross.
 crucifix.userData.corpusStatus='loading';
 if(typeof document.createElementNS==='function')new GLTFLoader().load('assets/crucifix-corpus.glb',gltf=>{
  const corpus=gltf.scene;corpus.name='Sculpted corpus of Christ · The Hunt Museum';
  const corpusMaterial=new T.MeshStandardMaterial({color:0xc4a477,metalness:.64,roughness:.4});
  corpus.traverse(o=>{if(o.isMesh){o.material=corpusMaterial;o.userData.prayer='creed';}});
  crucifix.add(corpus);crucifix.userData.corpusStatus='ready';
 },undefined,()=>{crucifix.userData.corpusStatus='unavailable';console.warn('The crucifix sculpture could not be loaded.');});
 // Restrained metal nail heads and shafts, fitted to the scan's palms and crossed feet.
 for(const [x,y,z] of [[-.29,.258,.105],[.291,.28,.097],[-.042,-.52,.194]]){
  const shaft=new T.Mesh(new T.CylinderGeometry(.0022,.0028,z-.025,8),darkGold);shaft.rotation.x=Math.PI/2;shaft.position.set(x,y,(z+.025)/2);crucifix.add(shaft);
  const nailHead=new T.Mesh(new T.SphereGeometry(.0046,10,6),darkGold);nailHead.scale.z=.45;nailHead.position.set(x,y,z);crucifix.add(nailHead);
 }
 const label=document.createElement('canvas');label.width=256;label.height=112;const c=label.getContext('2d');c.fillStyle='#d5bb82';c.fillRect(0,0,256,112);c.fillStyle='#322515';c.font='bold 70px Georgia';c.textAlign='center';c.fillText('INRI',128,81);const tex=new T.CanvasTexture(label);tex.colorSpace=T.SRGBColorSpace;const plaque=new T.Mesh(new T.BoxGeometry(.16,.074,.025),gold);plaque.position.set(0,.49,.065);crucifix.add(plaque);const letters=new T.Mesh(new T.PlaneGeometry(.15,.066),new T.MeshBasicMaterial({map:tex}));letters.name='INRI inscription';letters.position.set(0,.49,.079);crucifix.add(letters);
 return {centerpiece,crucifix};
}

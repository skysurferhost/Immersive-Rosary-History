import {createTerrain} from './terrain.js';
/** Layered historical environments. People remain clearly labelled sacred artwork. */
export function addEnvironment(T,index,root,hero,{texture,gold,wood,ship}){
 const layers=new T.Group();layers.name='Dimensional historical setting';root.add(layers);

 const box=(w,h,d,x,y,z,mat)=>{const m=new T.Mesh(new T.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);layers.add(m);return m;};
 const plate=(file,w,h,x,y,z)=>{const m=new T.Mesh(new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({map:texture('assets/'+file),transparent:true,side:T.DoubleSide,depthWrite:false}));m.position.set(x,y,z);layers.add(m);return m;};
 let figures,backdrop,water,fleet=[];const fadeMaterials=[];
 if(index===1||index===9){
  backdrop=plate(index===1?'nazareth-courtyard.jpg':'fatima-landscape.jpg',23,12.94,0,2,-6);
  figures=plate(index===1?'annunciation-figures.png':'fatima-figures.png',hero.geometry.parameters.width,hero.geometry.parameters.height,0,hero.position.y,1.4);
  layers.add(createTerrain(T,{radius:index===1?6.5:9,depth:index===1?4:6,y:index===1?-2.33:-3,z:0,kind:index===1?'stone':'earth'}));
  if(index===1){ // Low domestic threshold and terracotta water vessel.

   const profile=[new T.Vector2(.25,0),new T.Vector2(.54,.25),new T.Vector2(.49,.75),new T.Vector2(.21,1),new T.Vector2(.24,1.08)];
   const jar=new T.Mesh(new T.LatheGeometry(profile,24),new T.MeshStandardMaterial({color:0xa86643,roughness:.9}));jar.position.set(-4.5,-2.33,2.6);layers.add(jar);
  }else{
   // Natural vegetation remains in the existing countryside artwork.

  }
 }
 // Portraits remain artworks, without invented floors or detached furniture.
 // Dissolve only the original artwork into its matching separated scene; transforms follow scroll.
 const materials=[],seen=new Map();const register=object=>object.traverse(o=>{if(!o.material)return;const original=o.material;if(!seen.has(original)){const m=original.clone();m.onBeforeCompile=original.onBeforeCompile;m.customProgramCacheKey=original.customProgramCacheKey;m.transparent=true;seen.set(original,m);materials.push([m,m.opacity]);}o.material=seen.get(original);});register(root);root.userData.registerEnvironmentAsset=register;root.userData.environmentLayers=layers;
 root.userData.environmentUpdate=(delta,time,reduced)=>{
  const amount=1,visibility=T.MathUtils.smoothstep(delta,-.57,-.15)*(1-T.MathUtils.smoothstep(delta,.28,.43));materials.forEach(([m,base])=>m.opacity=base*visibility);const faded=new Set();layers.traverse(o=>{if(o.material&&!faded.has(o.material)){o.material.opacity*=amount;faded.add(o.material);}});
  layers.visible=amount>.005;
  if(figures){hero.visible=false;hero.material.opacity=0;figures.material.opacity=amount*visibility;backdrop.material.opacity=amount*visibility;figures.position.z=1.4+amount*.8;}

 };
 return layers;
}

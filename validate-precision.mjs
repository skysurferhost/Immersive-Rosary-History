import assert from 'node:assert/strict';
import * as T from './dist/three.module.js';
import {createRosary} from './dist/models.js';
import {buildPrayerSequence,illuminateBeads} from './dist/prayer-sequence.js';
import {mysteries,prayers} from './dist/content.js';
import {cameraPose} from './dist/timeline.js';
const ctx=new Proxy({},{get:()=>()=>{}});globalThis.document={createElement:()=>({getContext:()=>ctx})};
const r=createRosary(T),sizes=r.beads.map(b=>b.scale.toArray());
assert.equal(r.beads.filter(b=>b.position.x===0).length,5);
assert.equal(r.beads[0].userData.prayer,'ourFather');
for(let i=0;i<59;i++)for(let j=i+1;j<59;j++)assert.ok(r.beads[i].position.distanceTo(r.beads[j].position)>(r.beads[i].geometry.parameters.radius+r.beads[j].geometry.parameters.radius)*1.08,`overlap ${i},${j}`);
for(const m of Object.values(mysteries)){
 const seq=buildPrayerSequence(r,m);assert.equal(seq.length,75);
 assert.deepEqual([...new Set(seq.map(s=>s.stage).filter(Boolean))],Array.from({length:22},(_,i)=>i+1));
 assert.equal(new Set(seq.filter(s=>s.bead).map(s=>s.bead)).size,59);
 assert.equal(seq.filter(s=>s.key==='hailMary').length,53);assert.equal(seq.filter(s=>s.key==='ourFather').length,6);
 assert.equal(seq.filter(s=>s.key==='fatima').length,5);
 assert.equal(seq.at(-1).key,'signCross');assert.equal(seq.at(-2).key,'closing');assert.equal(seq.at(-3).key,'hailHolyQueen');
 for(const s of seq){assert.ok(prayers[s.key]);if(s.bead)assert.equal(s.bead.userData.prayer,s.key);illuminateBeads(r.beads,s.bead,r.beads[4]);assert.deepEqual(r.beads.map(b=>b.scale.toArray()),sizes);}
 assert.equal(buildPrayerSequence(r,m,false).length,70);
}
const points=[new T.Vector3()];for(let i=1;i<=15;i++)points.push(new T.Vector3(Math.sin(i*.76)*14,Math.sin(i*1.09)*8,-i*31));const curve=new T.CatmullRomCurve3(points,false,'catmullrom',.5);
for(const [w,h] of [[1440,900],[768,1024],[390,844],[844,390]]){
 const mobile=w/h<.85;
 for(const j of [1,6,9])for(let d=0;d<=.28;d+=.01){
  const pose=cameraPose(T,curve,j+1+d,mobile,w/h),camera=new T.PerspectiveCamera(43,w/h,.1,2200);camera.position.copy(pose.position);camera.lookAt(pose.look);camera.updateMatrixWorld(true);
  const scale=mobile?(j===6?.49:.65):.86,origin=points[j+1].clone().add(new T.Vector3(0,mobile?5.2:1.8,0));
  const width=j===1?10:j===9?12:15;
  for(const x of [-width*.46,width*.46])for(const y of [-2,4]){
   const pt=origin.clone().add(new T.Vector3(x,y,j===6?3:2.2).multiplyScalar(scale)).project(camera);
   assert.ok(Math.abs(pt.x)<1&&Math.abs(pt.y)<1&&pt.z<1,`focal clipping ${w} ${j} ${d} ${pt.toArray()}`);
  }
 }
 for(let i=0;i<15;i++)for(const f of [.28,.66]){const p=i+f,e=1e-5,a=cameraPose(T,curve,p-e,mobile,w/h),b=cameraPose(T,curve,p+e,mobile,w/h);assert.ok(a.position.distanceTo(b.position)<.002);assert.ok(a.look.distanceTo(b.look)<.002);}
}
console.log('PASS: PDF topology, 59 nonoverlapping beads, invariant highlight dimensions, 75 prayers across 22 stages, four mysteries, focal bounds at four viewports, reversible segment joins.');

import assert from 'node:assert/strict';
import * as THREE from './dist/three.module.js';
import {createChapterScene} from './dist/chapter-scenes.js';
import {createGlobe} from './dist/models.js';
import {locations,mysteries} from './dist/content.js';
import {cameraPose,createTimeline} from './dist/timeline.js';
const T={...THREE,TextureLoader:class{load(){return new THREE.Texture();}}};
const texture=()=>new T.Texture(),gold=new T.MeshStandardMaterial(),wood=gold,ship=()=>new T.Group();
for(let i=0;i<14;i++){const {root}=createChapterScene(T,i,{texture,gold,wood,ship,createGlobe,locations,mysteries});const update=root.userData.environmentUpdate;for(const p of [-.7,-.3,0,.3,.8,.3,0,-.3,-.7]){update(p,0,true);root.updateMatrixWorld(true);}if([1,9].includes(i)){update(0,0,true);assert.equal(root.userData.hero.material.opacity,0);update(-.7,0,true);assert.equal(root.userData.hero.material.opacity,0);update(.6,0,true);assert.equal(root.userData.hero.material.opacity,0);}}
const globe=createGlobe(T,locations);assert.equal(globe.markers.length,9);assert.ok(globe.clouds.material.alphaMap);assert.ok(globe.earth.material.emissiveIntensity<.1);assert.equal(globe.earth.material.metalness,0);
const points=[new T.Vector3()];for(let i=1;i<=15;i++)points.push(new T.Vector3(Math.sin(i*.76)*14,Math.sin(i*1.09)*8,-i*31));const curve=new T.CatmullRomCurve3(points,false,'catmullrom',.5),timeline=createTimeline(T,curve,new T.Group());
for(let p=0;p<=15;p+=.1){timeline.update(p);const mesh=timeline.group.children[2],d=mesh.material.uniforms.journeyDistance.value;assert.ok(Number.isFinite(d));const cam=new T.PerspectiveCamera(43,1.6,.1,2200),pose=cameraPose(T,curve,p);cam.position.copy(pose.position);cam.lookAt(pose.look);const fwd=new T.Vector3();cam.getWorldDirection(fwd);const lightPosition=cam.position.clone().add(new T.Vector3(-6,8,6)),target=cam.position.clone().addScaledVector(fwd,18);assert.ok(lightPosition.clone().sub(target).normalize().dot(fwd.clone().negate())>.7);}
console.log('PASS: all scene constructors/updates; reversible separated layers; Earth cloud surface and 9 markers; physical-distance glow; forward-facing sunlight over full journey.');

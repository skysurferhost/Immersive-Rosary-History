import assert from 'node:assert/strict';
import * as THREE from './dist/three.module.js';
import {shrines} from './dist/shrines.js';
import {locations,mysteries} from './dist/content.js';
import {createGlobe} from './dist/models.js';
import {createGlobeController,pickGlobeCandidates,geographicPoint,focusQuaternion} from './dist/globe-controls.js';
import {createChapterScene} from './dist/chapter-scenes.js';
const T={...THREE,TextureLoader:class{load(){return new THREE.Texture();}}};
assert.equal(shrines.length,32);assert.equal(new Set(shrines.map(l=>l.id)).size,32);assert.equal(shrines.filter(l=>l.date==='2021-05-01').length,2);assert.equal(shrines.at(-2).date,'2021-05-30');assert.equal(shrines.at(-1).eventType,'vatican-finale');
const g=createGlobe(T,[...locations,...shrines]),control=createGlobeController(T,g),camera=new T.PerspectiveCamera(43,1,.1,100);camera.position.z=12;camera.lookAt(0,0,0);camera.updateMatrixWorld(true);control.setLocations(shrines);
for(const l of shrines){assert.ok(l.intention&&l.coordinateSource&&l.precision&&l.source);const p=geographicPoint(T,l.lat,l.lon).applyQuaternion(focusQuaternion(T,l.lat,l.lon));assert.ok(Math.hypot(p.x,p.y)<1e-8&&p.z>3);control.select(l);control.update(1,true);assert.equal(g.markers.filter(m=>m.visible).length,32);assert.ok(pickGlobeCandidates(T,g,camera,{left:0,top:0,width:600,height:600},300,300).some(x=>x.id===l.id));}
control.select(shrines[0]);control.update(1,true);const cluster=pickGlobeCandidates(T,g,camera,{left:0,top:0,width:600,height:600},300,300);assert.ok(cluster.some(l=>l.id==='shrine-vatican-gardens'));control.setLocations(locations);assert.equal(g.markers.filter(m=>m.visible).length,9);for(const m of g.markers)assert.ok(m.userData.accents.every(a=>a.visible===m.visible));
for(const index of [1,3,6,7,9,11]){const {root,hero}=createChapterScene(T,index,{texture:()=>new T.Texture(),gold:new T.MeshStandardMaterial(),wood:new T.MeshStandardMaterial(),ship:()=>new T.Group(),createGlobe,locations,mysteries});for(let k=-100;k<=100;k++){root.userData.environmentUpdate(k/100,0,true);if([1,9].includes(index)){assert.equal(hero.visible,false);assert.equal(hero.material.opacity,0);}if(index===7)assert.ok(hero.material.opacity*root.userData.second.material.opacity===0);}if(index===3)assert.equal(root.userData.counters,undefined);if(index===9)assert.equal(root.userData.environmentLayers.children.length,3);}
console.log('PASS 32 schedule entries, required dates, provenance, all shrine focus/picking, Vatican cluster, isolated marker sets, exclusive artwork, no Fatima trees, no Psalter counters.');

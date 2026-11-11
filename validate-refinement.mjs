import assert from 'node:assert/strict';
import * as THREE from './dist/three.module.js';
import {globeZoom,markerScale} from './dist/globe-view.js';
import {createGlobeController,focusQuaternion} from './dist/globe-controls.js';
import {createGlobe} from './dist/models.js';
import {createChapterScene} from './dist/chapter-scenes.js';
import {chapters,locations,mysteries} from './dist/content.js';
import {shrines} from './dist/shrines.js';
const T={...THREE,TextureLoader:class{load(){return new THREE.Texture();}}};
for(const min of [3.65,4.2,5.2]){let d=12;for(let i=0;i<100;i++)d=globeZoom(d,-.22,min);assert.equal(d,min);assert.ok(d>3.1);for(let i=0;i<100;i++)d=globeZoom(d,.22,min);assert.equal(d,20);}
assert.ok(Math.abs(globeZoom(globeZoom(10,-.1),.1)-10)<1e-9);assert.ok(markerScale(3.65,600)<markerScale(12,600));
const globe=createGlobe(T,[...locations,...shrines]),c=createGlobeController(T,globe);c.setLocations(locations);c.select(locations[0]);c.update(1,true);c.drag(20,10);assert.equal(c.selectedId,locations[0].id);c.overview(true);assert.equal(c.selectedId,locations[0].id);c.update(1,true);assert.ok(globe.group.quaternion.angleTo(focusQuaternion(T,0,0))<1e-7);
const {root,hero}=createChapterScene(T,6,{texture:()=>new T.Texture(),gold:new T.MeshStandardMaterial(),wood:new T.MeshStandardMaterial(),ship:()=>new T.Group(),createGlobe,locations,mysteries});root.userData.environmentUpdate(0,0,true);assert.equal(hero.material.opacity,1);assert.equal(root.userData.environmentLayers.children.length,0);assert.equal(root.userData.spec.file,'lepanto-battle.jpg');assert.equal(hero.material.customProgramCacheKey(),'feathered-artwork-v2-0.065');
assert.equal(shrines.length,32);assert.equal(locations.length,9);assert.ok(shrines.every(l=>l.history&&l.historySource&&l.intention));assert.equal(chapters[11].date,'October 16, 2002');assert.ok(mysteries.Luminous.every(m=>m.scriptureUrl&&m.sourceUrl));assert.ok(mysteries.Luminous[1].body.includes("Mary's intercession"));
console.log('PASS closer zoom bounds, reversible zoom, marker scaling, retained selection, coherent battle composition, all32 shrine contexts, Luminous references.');

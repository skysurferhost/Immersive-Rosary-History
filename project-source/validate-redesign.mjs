import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
import * as T from './dist/three.module.js';
import {cameraPose,createTimeline} from './dist/timeline.js';
import {chapterVisuals} from './dist/chapter-scenes.js';
const points=[new T.Vector3()];for(let i=1;i<=15;i++)points.push(new T.Vector3(Math.sin(i*.76)*14,Math.sin(i*1.09)*8,-i*31));
const curve=new T.CatmullRomCurve3(points,false,'catmullrom',.5),world=new T.Group(),timeline=createTimeline(T,curve,world);
for(const mobile of [false,true])for(let i=1;i<15;i++){const e=1e-5,a=cameraPose(T,curve,i-e,mobile).position,b=cameraPose(T,curve,i,mobile).position,c=cameraPose(T,curve,i+e,mobile).position;assert.ok(a.distanceTo(c)<.002);assert.ok(b.clone().sub(a).divideScalar(e).distanceTo(c.clone().sub(b).divideScalar(e))<.02);}
const samples=[];for(let p=0;p<=15;p+=.125)samples.push(cameraPose(T,curve,p).position.toArray());for(let j=samples.length-1;j>=0;j--)assert.deepEqual(cameraPose(T,curve,j*.125).position.toArray(),samples[j]);
const geo=timeline.group.children[2].geometry,attr=geo.attributes.position;for(const i of [0,80,400,720,1120,1200]){const center=new T.Vector3();for(let j=0;j<6;j++)center.add(new T.Vector3().fromBufferAttribute(attr,i*7+j));center.divideScalar(6);assert.ok(center.distanceTo(curve.getPoint(i/1200))<.0001);}
for(const p of [5,9,3]){timeline.update(p);assert.equal(timeline.group.children[0].material.uniforms.journey.value,p);}
const files=chapterVisuals.map(s=>s.file).filter(Boolean);assert.equal(new Set(files).size,13);assert.ok(!files.includes('mary.jpg'));for(const file of [...files,'spread-france.jpg'])assert.ok(existsSync('dist/assets/'+file));
console.log('PASS: camera position/derivative continuity at 14 seams, deterministic reverse poses, timeline geometry alignment, reversible glow uniform, 14 unique historical art assets.');timeline.dispose();

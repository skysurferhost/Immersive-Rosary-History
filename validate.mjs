import assert from 'node:assert/strict';
import * as T from './dist/three.module.js';
import {createRosary} from './dist/models.js';
import {chapters,mysteries,prayers,locations} from './dist/content.js';
const ctx=new Proxy({},{get:()=>()=>{}});globalThis.document={createElement:()=>({width:0,height:0,getContext:()=>ctx})};
const r=createRosary(T);assert.equal(r.beads.length,59);assert.equal(r.beads.filter(b=>b.userData.prayer==='hailMary').length,53);assert.equal(r.beads.filter(b=>b.userData.prayer==='ourFather').length,6);assert.equal(new Set(r.beads.map(b=>b.userData.index)).size,59);for(let d=1;d<=5;d++)assert.equal(r.beads.filter(b=>b.userData.decade===d).length,11);assert.equal(chapters.length,14);assert.deepEqual(Object.values(mysteries).map(m=>m.length),[5,5,5,5]);assert.equal(locations.length,9);for(const c of chapters)assert.ok(c.url.startsWith('https://'));for(const k of ['creed','ourFather','hailMary','gloryBe','fatima','hailHolyQueen','closing'])assert.ok(prayers[k].length>40);console.log('PASS: 59 beads; 53 Hail Mary; 6 Our Father; 5 decades; 14 chapters; 20 mysteries; 9 locations; full prayers.');

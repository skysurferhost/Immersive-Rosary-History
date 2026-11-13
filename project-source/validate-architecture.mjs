import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const forbidden=/@splinetool|spline-viewer|(?:https?:\/\/)?(?:prod\.|my\.)?spline\.design|\.splinecode\b/i;
function visit(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())visit(p);else if(/\.(?:html|js|css|json)$/.test(p))assert(!forbidden.test(fs.readFileSync(p,'utf8')),`Unexpected Spline runtime dependency: ${p}`);}}
visit('dist');
assert(fs.readFileSync('dist/rosary-details.js','utf8').includes('new GLTFLoader().load'));
assert(fs.existsSync('dist/assets/crucifix-corpus.glb'));
console.log('PASS Three.js architecture: no Spline runtime, scene embeds or dependency URLs; optimized GLB loader retained.');

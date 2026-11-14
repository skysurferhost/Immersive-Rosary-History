import assert from 'node:assert/strict';
import {dailyMysteries,createRosarySession} from './dist/rosary-session.js';
import {execFileSync} from 'node:child_process';
const expected=['Glorious','Joyful','Sorrowful','Glorious','Luminous','Sorrowful','Joyful'];
for(let d=0;d<7;d++)assert.equal(dailyMysteries(new Date(2026,10,15+d,12)),expected[d]);
const session=createRosarySession(),mon=new Date(2026,10,16),tue=new Date(2026,10,17);
assert.equal(session.enter(mon),'Joyful');session.choose('Luminous');assert.equal(session.enter(tue),'Luminous');
for(const [tz,want] of [['America/New_York','Sorrowful'],['Asia/Tokyo','Joyful']])assert.equal(execFileSync(process.execPath,['--input-type=module','-e',"import {dailyMysteries} from './dist/rosary-session.js';console.log(dailyMysteries(new Date('2026-11-14T02:00:00Z')));"],{env:{...process.env,TZ:tz},encoding:'utf8'}).trim(),want);
console.log('PASS: all seven local weekdays, differing time zones, manual choice across midnight/re-entry');

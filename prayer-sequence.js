/** The guide's 22 numbered stages expand into individual prayers, not extra beads. */
export function buildPrayerSequence(rosary, mysteries) {
 const sequence=[];
 const add=(key,stage,label,bead=null,decade=0)=>sequence.push({key,stage,label,bead,decade,mystery:decade?mysteries[decade-1].title:null});
 add('signCross',1,'At the crucifix');add('creed',2,'At the crucifix');
 add('ourFather',3,'Introductory Our Father',rosary.beads[58]);
 [57,56,55].forEach((b,i)=>add('hailMary',4,`Introductory Hail Mary ${i+1} of 3`,rosary.beads[b]));
 add('gloryBe',5,'Between the introductory beads and the first mystery');
 for(let d=0;d<5;d++){
  add('ourFather',6+d*3,`Announce ${mysteries[d].title} · Our Father`,rosary.beads[d*11],d+1);
  for(let j=1;j<=10;j++)add('hailMary',7+d*3,`Hail Mary ${j} of 10`,rosary.beads[d*11+j],d+1);
  add('gloryBe',8+d*3,'Between beads · Glory Be',null,d+1);
  add('fatima',8+d*3,'Between beads · Fatima Prayer',null,d+1);
 }
 add('hailHolyQueen',21,'At the centerpiece');add('closing',22,'Final Prayer');
 add('signCross',null,'Concluding Sign of the Cross');
 return sequence;
}
/** Highlight light only: never change physical bead dimensions. */
export function illuminateBeads(beads,selected=null,hovered=null,decade=0){
 for(const b of beads){const color=b===selected?0x9a5c16:b===hovered?0x604018:decade&&b.userData.decade===decade?0x503009:0;b.material.emissive.setHex(color);b.material.emissiveIntensity=b===selected?1.45:b===hovered?.75:.35;b.material.color.setHex(b===selected?0xffd398:0xe1bb91);}
}

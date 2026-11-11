import {featherMaterial} from './feather-material.js';
import {addEnvironment} from './environments.js';
// Every historical destination owns its primary artwork and spatial staging.
export const chapterVisuals=[
 {file:'origins.jpg',subject:'Prayer before the Rosary',setting:'Late antique eastern Mediterranean',transition:'Approach the prayer gathering',w:11,y:.5,angle:-.05},
 {file:'annunciation.jpg',subject:'The Annunciation',setting:'Biblical Nazareth',transition:'Rise into the biblical scene',w:10,y:1,angle:.06},
 {file:'dominic.jpg',subject:'Saint Dominic',setting:'Thirteenth-century Dominican setting',transition:'A curved Dominican reveal',w:8.5,y:.3,angle:-.12},
 {file:'psalter-integrated.jpg',subject:'The Marian Psalter',setting:'Early fifteenth-century devotional practice',transition:'Prayer counters gather along the path',w:10,y:.7,angle:.10},
 {file:'alan.jpg',subject:'Blessed Alan and the confraternities',setting:'Late medieval community devotion',transition:'Pull back into a fellowship of prayer',w:11,y:.3,angle:-.04},
 {file:'pius-v.jpg',subject:'Pope Saint Pius V',setting:'Rome, 1569',transition:'Approach from the seal toward the pope',w:8.7,y:.5,angle:.12},
 {file:'lepanto-battle.jpg',subject:'Lepanto',setting:'Gulf of Patras, 1571',transition:'Descend toward the sea',w:15,y:.9,angle:0},
 {file:'spread-mexico.jpg',second:'spread-france.jpg',subject:'A devotion across centuries',setting:'Mexico c.1750 · France c.1880',transition:'Travel between two dated communities',w:9,y:.6,angle:-.08},
 {file:'leo-xiii.jpg',subject:'Pope Leo XIII',setting:'Vatican, 1883',transition:'An ascending library reveal',w:8,y:.8,angle:-.14},
 {file:'fatima.jpg',subject:'Our Lady of Fátima and the three children',setting:'Cova da Iria, 1917',transition:'Descend into the Portuguese landscape',w:12,y:1,angle:0},
 {file:'paul-vi.jpg',subject:'Pope Saint Paul VI',setting:'Vatican, 1974',transition:'A restrained lateral approach',w:9.3,y:.4,angle:.07},
 {file:'john-paul-chapel.jpg',subject:'Pope Saint John Paul II',setting:'2002 · Mysteries of Light',transition:'Orbit toward the five mysteries',w:9.6,y:.6,angle:-.06},
 {file:null,subject:'The Global Rosary',setting:'Documented communities around the world',transition:'Pull back to the living Earth',w:9,y:0,angle:0},
 {file:'rosary-today-grotto.png',aspect:1448/1086,subject:'A living community of prayer',setting:'Contemporary Catholic devotion',transition:'A peaceful concluding pullback',w:11,y:.6,angle:.03}
];
export function createChapterScene(T,index,{texture,gold,wood,createGlobe,locations,ship,mysteries}){
 const spec=chapterVisuals[index],root=new T.Group();root.name=`chapter-${index+1}-${spec.subject}`;
 const material=new T.MeshBasicMaterial({map:spec.file?texture('assets/'+spec.file):null,side:T.DoubleSide});
 featherMaterial(material,index===13?.008:.065);
 let hero,seaScreen;
 if(index===12){hero=createGlobe(T,locations).group;hero.scale.setScalar(1.12);root.add(hero);}else{
  hero=new T.Mesh(new T.PlaneGeometry(spec.w,spec.w/(spec.aspect||1.5)),material);hero.position.set(0,spec.y,0);hero.rotation.y=spec.angle;root.add(hero);
 }
 // Small supporting geometry sits below the faces, not in front of them.
 if(index===0){const count=index===0?14:40;const counters=new T.Group();for(let j=0;j<count;j++){const a=j/count*Math.PI*1.7;let b=new T.Mesh(new T.SphereGeometry(index===0?.07:.10,12,8),wood);b.position.set(Math.cos(a)*2.3,-2.8+Math.sin(a)*.32,1+Math.sin(a)*.4);counters.add(b);}root.add(counters);root.userData.counters=counters;}
 if(index===6)seaScreen=hero;
 if(index===7){const second=new T.Mesh(new T.PlaneGeometry(7.6,5.07),new T.MeshBasicMaterial({map:texture('assets/'+spec.second),side:T.DoubleSide}));second.position.copy(hero.position);second.rotation.copy(hero.rotation);root.add(second);root.userData.second=second;}
 // Accessible image medallions are composed below the portrait in the UI.

 root.userData.layout=[2,5,8,10].includes(index)?'right':[1,6,9,12].includes(index)?'panorama':'left';
 addEnvironment(T,index,root,hero,{texture,gold,wood,ship});
 if(index===7){const base=root.userData.environmentUpdate;root.userData.environmentUpdate=(delta,time,reduced)=>{base(delta,time,reduced);const opacity=hero.material.opacity;const first=1-T.MathUtils.smoothstep(delta,-.18,-.08),second=T.MathUtils.smoothstep(delta,-.08,.02);hero.material.opacity=opacity*first;hero.visible=first>.001;root.userData.second.material.opacity=opacity*second;root.userData.second.visible=second>.001;};}
 root.userData.hero=hero;root.userData.baseAngle=spec.angle;root.userData.spec=spec;return {root,hero,seaScreen};
}

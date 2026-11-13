import fs from 'node:fs';
import * as original from './dist/content.js';
import {shrines} from './dist/shrines.js';
const data=structuredClone({...original}),{chapters,mysteries,locations,sources}=data;
chapters[3].date='Medieval development · Early fifteenth century';
chapters[5].source='English Dominicans · The Rosary and Pius V';
chapters[6].date='October 7, 1571';chapters[6].body=chapters[6].body.replace(' This maritime scene is an artistic reconstruction.','');
chapters[8].date='September 1, 1883';chapters[10].date='February 2, 1974';chapters[11].date='October 16, 2002';
chapters[11].body="In Rosarium Virginis Mariae, Pope St. John Paul II proposed five Luminous Mysteries inviting us to contemplate Christ's public ministry: His Baptism in the Jordan, His first public sign at the Wedding Feast at Cana, His Proclamation of the Kingdom of God, His Transfiguration, and His Institution of the Eucharist. Explore each mystery and discover how Mary leads us to a deeper encounter with Jesus.";
const updates=[
['The Baptism of Jesus in the Jordan','Jesus is baptized by John the Baptist in the Jordan River. The Holy Spirit descends upon Him, and the Father reveals Jesus as His beloved Son, manifesting the mystery of the Holy Trinity.','Matthew 3:13–17','matthew/3'],
['The Wedding Feast at Cana',"At Mary's intercession, Jesus transforms water into wine, performing His first public sign. Mary directs the servants to obey Him, and through this miracle Jesus reveals His glory, leading His disciples to believe in Him.",'John 2:1–11','john/2'],
['The Proclamation of the Kingdom of God','Jesus proclaims the Kingdom of God and calls all people to repentance and faith in the Gospel. Through His preaching, forgiveness, and mercy, He invites sinners to conversion and new life in God.','Mark 1:14–15','mark/1'],
['The Transfiguration',"Jesus reveals His divine glory before Peter, James, and John. Moses and Elijah appear with Him, and the Father's voice calls the disciples to listen to His beloved Son.",'Matthew 17:1–8','matthew/17'],
['The Institution of the Eucharist','At the Last Supper, Jesus institutes the Holy Eucharist, giving His Body and Blood under the appearances of bread and wine as the sacrament of His saving love.','Matthew 26:26–28','matthew/26']];
updates.forEach(([title,body,scripture,path],i)=>Object.assign(mysteries.Luminous[i],{title,body,scripture,scriptureUrl:'https://bible.usccb.org/bible/'+path,sourceUrl:sources.rvm}));
for(const info of JSON.parse(fs.readFileSync('shrine-histories-7.json')))Object.assign(shrines.find(l=>l.id===info.id),{history:info.history,historySource:info.historySource});
for(const info of JSON.parse(fs.readFileSync('photo-metadata-7.json')))for(const l of [...locations,...shrines].filter(l=>[info.id,...info.also].includes(l.id)))Object.assign(l,{photo:info.file,photoAlt:info.alt,photoCredit:info.author,photoSource:info.source,photoLicense:info.license,photoLicenseUrl:info.licenseUrl});
Object.assign(locations.find(l=>l.id==='fatima'),{lat:39.63166,lon:-8.67332,coordinateSource:'https://mapcarta.com/W159968550',precision:'Chapel of the Apparitions building point'});
locations.find(l=>l.id==='lepanto').image='lepanto-battle.jpg';
fs.writeFileSync('dist/content.js',Object.entries(data).map(([k,v])=>`export const ${k} = ${JSON.stringify(v,null,2)};`).join('\n'));
fs.writeFileSync('dist/shrines.js',`export const shrines = ${JSON.stringify(shrines,null,2)};\n`);

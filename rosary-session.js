export const weekdayMysteries=Object.freeze(['Glorious','Joyful','Sorrowful','Glorious','Luminous','Sorrowful','Joyful']);
export const dailyMysteries=(date=new Date())=>weekdayMysteries[date.getDay()];
// A session survives navigation away and midnight. Only explicit actions replace its selection.
export function createRosarySession(){let selected=null;return {enter(date=new Date()){return selected??(selected=dailyMysteries(date));},choose(group){if(!weekdayMysteries.includes(group))throw new Error('Unknown mystery group');return selected=group;},get selected(){return selected;}};}

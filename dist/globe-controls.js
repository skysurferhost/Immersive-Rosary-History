export function geographicPoint(T,lat,lon,r=3.08){const a=lat*Math.PI/180,b=lon*Math.PI/180;return new T.Vector3(r*Math.cos(a)*Math.cos(b),r*Math.sin(a),-r*Math.cos(a)*Math.sin(b));}
export function focusQuaternion(T,lat,lon){return new T.Quaternion().setFromEuler(new T.Euler(lat*Math.PI/180,-lon*Math.PI/180-Math.PI/2,0,'XYZ'));}
export function createGlobeController(T,globe){
 let selectedId=null;const target=focusQuaternion(T,0,0);
 return {get selectedId(){return selectedId;},get target(){return target;},setLocations(locations){const ids=new Set(locations.map(l=>l.id));selectedId=null;for(const m of globe.markers){m.visible=ids.has(m.userData.location.id);for(const a of m.userData.accents||[])a.visible=m.visible;}},select(l){selectedId=l.id;target.copy(focusQuaternion(T,l.lat,l.lon));},overview(preserveSelection=false){if(!preserveSelection)selectedId=null;target.copy(focusQuaternion(T,0,0));},
 drag(dx,dy){target.copy(globe.group.quaternion);target.premultiply(new T.Quaternion().setFromAxisAngle(new T.Vector3(0,1,0),dx*.006));target.premultiply(new T.Quaternion().setFromAxisAngle(new T.Vector3(1,0,0),dy*.006));globe.group.quaternion.copy(target);},
 update(dt,reduced=false,idle=false,time=0){if(idle&&!selectedId&&!reduced)target.premultiply(new T.Quaternion().setFromAxisAngle(new T.Vector3(0,1,0),dt*.025));globe.group.quaternion.slerp(target,reduced?1:1-Math.exp(-6*dt));for(const m of globe.markers){const active=m.userData.location.id===selectedId;m.userData.selected=active;m.material.color.setHex(active?0xffffff:m.userData.baseColor);m.scale.setScalar(active?1.7:1);m.userData.halo.material.opacity=active?.85:0;m.userData.halo.scale.setScalar(active&&!reduced?1.1+Math.sin(time*2)*.12:1);}globe.group.updateMatrixWorld(true);}
 };
}
export function pickGlobeMarker(T,globe,camera,rect,x,y,tolerance=22){const center=globe.group.getWorldPosition(new T.Vector3());let best=null,score=tolerance;for(const m of globe.markers){if(!m.visible)continue;const p=m.getWorldPosition(new T.Vector3()),normal=p.clone().sub(center).normalize();if(normal.dot(camera.position.clone().sub(p).normalize())<=.06)continue;const ndc=p.clone().project(camera);if(ndc.z< -1||ndc.z>1)continue;const d=Math.hypot(rect.left+(ndc.x+1)*rect.width/2-x,rect.top+(1-ndc.y)*rect.height/2-y);if(d<score){best=m;score=d;}}return best;}

export function pickGlobeCandidates(T,globe,camera,rect,x,y,tolerance=22){
 const nearest=pickGlobeMarker(T,globe,camera,rect,x,y,tolerance);if(!nearest)return [];
 const anchor=nearest.getWorldPosition(new T.Vector3()).project(camera),center=globe.group.getWorldPosition(new T.Vector3());
 return globe.markers.filter(m=>{if(!m.visible)return false;const p=m.getWorldPosition(new T.Vector3());if(p.clone().sub(center).normalize().dot(camera.position.clone().sub(p).normalize())<=.06)return false;const q=p.project(camera);return Math.hypot((q.x-anchor.x)*rect.width/2,(q.y-anchor.y)*rect.height/2)<10;}).map(m=>m.userData.location);
}

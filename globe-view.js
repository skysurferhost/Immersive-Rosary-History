export function globeZoom(distance,delta,min=4.2,max=20){return Math.max(min,Math.min(max,3+(distance-3)*Math.exp(delta)));}
export function markerScale(distance,height){return Math.max(.035,Math.min(1.2,(distance-3.08)/8.92*600/Math.max(180,height)));}

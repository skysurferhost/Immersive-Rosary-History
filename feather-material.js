export function featherMaterial(material,edge=.065){material.transparent=true;material.depthWrite=false;material.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
#ifdef USE_MAP
vec2 edgeDistance=min(vMapUv,1.0-vMapUv);
diffuseColor.a*=smoothstep(0.0,${edge.toFixed(3)},edgeDistance.x)*smoothstep(0.0,${edge.toFixed(3)},edgeDistance.y);
#endif`);};material.customProgramCacheKey=()=> 'feathered-artwork-v2-'+edge;return material;}

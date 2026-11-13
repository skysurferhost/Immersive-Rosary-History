import {musicConfig} from './music-config.js';
/** One recording for the entire visit; explicit pause wins over gesture startup. */
export function createMusic({audio=new Audio(musicConfig.source),storage,root=document,raf=requestAnimationFrame,caf=cancelAnimationFrame,now=()=>performance.now()}={}){
 let preference={};try{storage??=globalThis.sessionStorage;preference=JSON.parse(storage?.getItem('rosary-music')||'{}');}catch{}
 let volume=Number.isFinite(preference.volume)?Math.max(0,Math.min(1,preference.volume)):musicConfig.volume;
 let muted=preference.muted===true,stopped=preference.paused===true,pending=false,fade=0,generation=0,level=0,lastAttempt=-Infinity;
 if(root.body&&!audio.isConnected){audio.id='music-track';audio.hidden=true;audio.setAttribute('aria-hidden','true');root.body.append(audio);}
 audio.loop=true;audio.preload='none';audio.muted=muted;audio.volume=0;
 const $=s=>root.querySelector(s);
 function save(){try{storage?.setItem('rosary-music',JSON.stringify({volume,muted,paused:stopped}));}catch{}}
 function sync(){const playing=!audio.paused;const p=$('#music-play');if(p)p.textContent=playing?'Pause':'Play';const m=$('#music-mute');if(m){m.textContent=muted?'Unmute':'Mute';m.setAttribute('aria-pressed',String(muted));}const v=$('#volume');if(v)v.value=String(volume);const status=$('#music-status');if(status)status.textContent=playing?'Playing':'Paused';$('#sound')?.setAttribute('aria-label',playing?'Music controls — playing':'Music controls — Play');}
 function cancelFade(){caf(fade);fade=0;}
 function fadeIn(){cancelFade();level=0;audio.volume=0;const began=now();const tick=()=>{if(audio.paused)return;level=Math.min(1,(now()-began)/musicConfig.fadeMs);audio.volume=volume*level;if(level<1)fade=raf(tick);};fade=raf(tick);}
 async function play(automatic=false){if(pending||!audio.paused||(automatic&&(stopped||muted||volume===0)))return;if(automatic&&now()-lastAttempt<1000)return;lastAttempt=now();pending=true;const token=++generation;if(!automatic){stopped=false;save();}try{audio.volume=0;await audio.play();if(token!==generation){audio.pause();return;}fadeIn();}catch{/* Keep Play accessible if browser policy blocks playback. */}finally{pending=false;sync();}}
 function pause(){generation++;stopped=true;cancelFade();audio.pause();save();sync();}
 function setVolume(value){volume=Math.max(0,Math.min(1,Number(value)||0));audio.volume=volume*level;save();sync();}
 function mute(){muted=!muted;audio.muted=muted;save();sync();}
 for(const event of ['play','pause','error'])audio.addEventListener(event,sync);
 return {markup:()=>`<h3 class="music-heading">Music</h3><div class="music-actions"><button id="music-play">${audio.paused?'Play':'Pause'}</button><button id="music-mute" aria-pressed="${muted}">${muted?'Unmute':'Mute'}</button></div><label class="setting">Volume <input id="volume" type="range" min="0" max="1" step=".01" value="${volume}"></label><p id="music-status" class="music-status" role="status"></p>`,bind(){sync();$('#music-play').onclick=()=>audio.paused&&!pending?play():pause();$('#music-mute').onclick=mute;$('#volume').oninput=e=>setVolume(e.target.value);},installGestures(surface){const attempt=e=>{if(e.type==='keydown'&&(e.repeat||!['Enter',' ','ArrowDown','ArrowUp','PageDown','PageUp'].includes(e.key)))return;if(e.target.closest?.('dialog,input,select,#sound,[data-action="settings"],[data-action="sources"]'))return;void play(true);};for(const type of ['pointerup','touchend','click','keydown','wheel'])surface.addEventListener(type,attempt,{passive:true});},play,pause,mute,setVolume,get state(){return {playing:!audio.paused,volume,muted,stopped,pending,currentTime:audio.currentTime};}};
}
export const music=createMusic();

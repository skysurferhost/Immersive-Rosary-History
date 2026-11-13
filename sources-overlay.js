/** Reuse the canonical source document inside the current modal, without navigation. */
export function installSourcesOverlay({panel,content,openPanel,closePanel}){
 let canonical=null;
 async function load(){if(!canonical)canonical=fetch('./sources.html').then(r=>{if(!r.ok)throw Error('Unavailable');return r.text();}).catch(e=>{canonical=null;throw e;});return canonical;}
 async function open(){openPanel('<h2 id="sources-title">Sources & Artwork Notes</h2><p role="status">Opening sources…</p>');panel.classList.add('sources-panel');panel.setAttribute('aria-labelledby','sources-title');
 try{const html=await load();if(!panel.open||!panel.classList.contains('sources-panel'))return;const doc=new DOMParser().parseFromString(html,'text/html');const wrap=document.createElement('div');wrap.className='sources-document';
 for(const tag of ['header','main','footer']){const original=doc.body.querySelector(':scope > '+tag);if(!original)continue;const section=document.createElement('div');section.className='sources-'+tag;section.innerHTML=original.innerHTML;wrap.append(section);}
 wrap.querySelector('h1').id='sources-title';wrap.querySelectorAll('a[href="./"]').forEach(a=>{a.textContent='← Return to the Journey';a.onclick=e=>{e.preventDefault();closePanel();};});wrap.querySelectorAll('a[href^="#"]').forEach(a=>a.onclick=e=>{e.preventDefault();const id=a.getAttribute('href').slice(1);[...wrap.querySelectorAll('[id]')].find(x=>x.id===id)?.scrollIntoView({behavior:'auto',block:'start'});});content.replaceChildren(wrap);panel.scrollTop=0;
 }catch{if(panel.open&&panel.classList.contains('sources-panel')){content.innerHTML='<h2 id="sources-title">Sources & Artwork Notes</h2><p>Sources could not be opened. Please try again.</p><button id="retry-sources">Try again</button><button id="return-sources">← Return to the Journey</button>';content.querySelector('#retry-sources').onclick=open;content.querySelector('#return-sources').onclick=closePanel;}}
 }
 return {open};
}

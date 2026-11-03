const phone='27720819797';
const products=[
{name:'Golden Celebration Cake',category:'cakes',img:'gold-cake',price:'Price on enquiry',desc:'Elegant two-tier custom celebration cake.'},
{name:'Kids Birthday Cake',category:'cakes',img:'paw-cake',price:'Price on enquiry',desc:'Colourful character-inspired celebration.'},
{name:'Princess Birthday Cake',category:'cakes',img:'frozen-cake',price:'Price on enquiry',desc:'A magical cake for a special birthday.'},
{name:'Honey Bear Cake',category:'cakes',img:'pooh-cake',price:'Price on enquiry',desc:'Sweet themed cake with playful details.'},
{name:'Football Fan Cake',category:'cakes',img:'sundowns-cake',price:'Price on enquiry',desc:'Personalised football-inspired celebration.'},
{name:'Cartoon Birthday Cake',category:'cakes',img:'mickey-cake',price:'Price on enquiry',desc:'A fun custom design for little ones.'},
{name:'Barbie Celebration Cake',category:'cakes',img:'barbie-cake',price:'Price on enquiry',desc:'Pink-and-gold birthday creation.'},
{name:'Cupcake Gift Box',category:'cupcakes',img:'cupcakes',price:'Confirm current price',desc:'Beautifully decorated cupcakes for gifting.'},
{name:'Freshly Baked Biscuits',category:'bakes',img:'biscuits',price:'Confirm current price',desc:'A box of freshly baked sweet treats.'},
{name:'Fresh Scones',category:'bakes',img:'scones',price:'5L R180 · 10L R350 · 20L R500*',desc:'Golden, freshly baked scones. *Advertised prices.'},
{name:'Custom Theme Cake',category:'cakes',img:'corona-cake',price:'Price on enquiry',desc:'Custom colours, themes and details.'},
{name:'Pink Celebration Cake',category:'cakes',img:'pink-cake',price:'Price on enquiry',desc:'A special cake for a memorable moment.'}
];
const whatsapp=(message)=>`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
const productsEl=document.getElementById('products');
function renderProducts(filter='all'){productsEl.innerHTML=products.filter(p=>filter==='all'||p.category===filter).map(p=>`<article class="product"><img src="assets/${p.img}.webp" alt="${p.name}" loading="lazy"><div class="product-content"><h3>${p.name}</h3><p>${p.desc}</p><div class="product-bottom"><strong>${p.price}</strong><a target="_blank" rel="noopener" href="${whatsapp('Hello Marang Sweet Treats, I would like to enquire about '+p.name+'. Please confirm availability and price.')}">Enquire ↗</a></div></div></article>`).join('')}
renderProducts();document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderProducts(b.dataset.filter)}));
const galleryNames=['gold-cake','papa-cake','paw-cake','frozen-cake','pooh-cake','mickey-cake','sundowns-cake','barbie-cake','corona-cake','cupcakes','biscuits','pink-cake'];
document.getElementById('galleryGrid').innerHTML=galleryNames.map((n,i)=>`<button aria-label="View bakery photo ${i+1}" data-image="${n}"><img src="assets/${n}.webp" loading="lazy" alt="Marang Sweet Treats bakery photo ${i+1}"></button>`).join('');
document.getElementById('galleryGrid').addEventListener('click',e=>{let b=e.target.closest('button[data-image]');if(!b)return;const layer=document.createElement('div');layer.className='lightbox';layer.setAttribute('role','dialog');layer.setAttribute('aria-label','Full size cake photo');layer.innerHTML=`<button aria-label="Close photo">×</button><img src="assets/${b.dataset.image}.webp" alt="Enlarged bakery product">`;layer.addEventListener('click',e=>{if(e.target===layer||e.target.tagName==='BUTTON')layer.remove()});document.body.append(layer);layer.querySelector('button').focus();const esc=e=>{if(e.key==='Escape'){layer.remove();document.removeEventListener('keydown',esc)}};document.addEventListener('keydown',esc)});
const menu=document.getElementById('menu'),nav=document.getElementById('nav');menu.addEventListener('click',()=>{const opened=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(opened))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const date=document.getElementById('date');date.min=new Date().toLocaleDateString('en-CA');document.getElementById('orderForm').addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('customer').value.trim(),occasion=document.getElementById('occasion').value,day=date.value,details=document.getElementById('details').value.trim();if(!name||!day)return;showDemoNotice()});
const chat=document.getElementById('chatPanel');const toggleChat=()=>{chat.hidden=!chat.hidden;if(!chat.hidden){try{sessionStorage.setItem('mst-chat-seen','yes')}catch(e){}}};document.getElementById('chatToggle').addEventListener('click',toggleChat);document.getElementById('chatClose').addEventListener('click',()=>chat.hidden=true);document.getElementById('customChat').addEventListener('click',()=>chat.hidden=true);
setTimeout(()=>{try{if(!sessionStorage.getItem('mst-chat-seen') && chat.hidden){chat.hidden=false;sessionStorage.setItem('mst-chat-seen','yes')}}catch(e){}},4500);
const cookie=document.getElementById('cookieBanner');function getChoice(){try{return localStorage.getItem('mst-cookie-choice')}catch(e){return null}}function setChoice(v){try{localStorage.setItem('mst-cookie-choice',v)}catch(e){}cookie.hidden=true}cookie.hidden=!!getChoice();document.getElementById('essential').addEventListener('click',()=>setChoice('essential'));document.getElementById('accept').addEventListener('click',()=>setChoice('all'));document.getElementById('privacySettings').addEventListener('click',()=>cookie.hidden=false);document.getElementById('year').textContent=new Date().getFullYear();

// PROPOSAL DEMO SAFETY: block all real WhatsApp links, including dynamically added products.
function showDemoNotice(){
  let notice=document.getElementById('mst-demo-notice');
  if(!notice){
    notice=document.createElement('div');notice.id='mst-demo-notice';
    notice.setAttribute('role','alertdialog');notice.setAttribute('aria-modal','true');
    notice.style.cssText='position:fixed;inset:0;z-index:99999;background:rgba(35,18,28,.65);display:flex;align-items:center;justify-content:center;padding:20px';
    notice.innerHTML='<div style="max-width:420px;width:100%;background:#fffaf8;color:#452638;padding:28px;border-radius:20px;box-shadow:0 15px 50px #0004;text-align:center;font-family:inherit"><div style="font-size:36px">🎂</div><h2 style="margin:10px 0">Website Concept — Demo Only</h2><p style="line-height:1.6">This is an unofficial website proposal. Ordering and WhatsApp enquiries are disabled until the bakery owner approves the website.</p><button type="button" id="mst-demo-close" style="border:0;border-radius:30px;background:#a82d65;color:white;padding:12px 28px;cursor:pointer;font:inherit">Understood</button></div>';
    document.body.appendChild(notice);
    notice.querySelector('button').addEventListener('click',()=>notice.remove());
    notice.addEventListener('click',e=>{if(e.target===notice)notice.remove()});
  }
  notice.querySelector('button').focus();
}
document.addEventListener('click',function(e){
  const a=e.target.closest('a[href]');
  if(a && /(?:wa\.me|api\.whatsapp\.com|web\.whatsapp\.com|whatsapp:\/?\/?)/i.test(a.getAttribute('href'))){
    e.preventDefault();e.stopImmediatePropagation();showDemoNotice();
  }
},true);
// Keep existing links from opening on keyboard activation too (click is fired by Enter).

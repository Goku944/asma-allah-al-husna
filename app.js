const N=[
{id:1,ar:"ٱلرَّحْمَـٰنُ",t:"Ar-Rahmân",fr:"Le Tout Miséricordieux",c:"mi"},
{id:2,ar:"ٱلرَّحِيمُ",t:"Ar-Rahîm",fr:"Le Très Miséricordieux",c:"mi"},
{id:3,ar:"ٱلْمَلِكُ",t:"Al-Malik",fr:"Le Souverain",c:"pu"},
{id:4,ar:"ٱلْقُدُّوسُ",t:"Al-Quddûs",fr:"Le Très Saint",c:"ma"},
{id:5,ar:"ٱلسَّلَامُ",t:"As-Salâm",fr:"La Source de la Paix",c:"mi"},
{id:6,ar:"ٱلْمُؤْمِنُ",t:"Al-Mu'min",fr:"Le Rassurant",c:"mi"},
{id:7,ar:"ٱلْمُهَيْمِنُ",t:"Al-Muhaymin",fr:"Le Protecteur",c:"pu"},
{id:8,ar:"ٱلْعَزِيزُ",t:"Al-'Azîz",fr:"Le Tout Puissant",c:"pu"},
{id:9,ar:"ٱلْجَبَّارُ",t:"Al-Jabbâr",fr:"Le Contraignant",c:"pu"},
{id:10,ar:"ٱلْمُتَكَبِّرُ",t:"Al-Mutakabbir",fr:"L'Orgueilleux Suprême",c:"ma"},
{id:11,ar:"ٱلْخَالِقُ",t:"Al-Khâliq",fr:"Le Créateur",c:"cr"},
{id:12,ar:"ٱلْبَارِئُ",t:"Al-Bâri'",fr:"Le Producteur",c:"cr"},
{id:13,ar:"ٱلْمُصَوِّرُ",t:"Al-Musawwir",fr:"Le Formateur",c:"cr"},
{id:14,ar:"ٱلْغَفَّارُ",t:"Al-Ghaffâr",fr:"L'Infini Pardonneur",c:"mi"},
{id:15,ar:"ٱلْقَهَّارُ",t:"Al-Qahhâr",fr:"Le Dominateur Suprême",c:"pu"},
{id:16,ar:"ٱلْوَهَّابُ",t:"Al-Wahhâb",fr:"Le Donateur Suprême",c:"ge"},
{id:17,ar:"ٱلرَّزَّاقُ",t:"Ar-Razzâq",fr:"Celui qui pourvoit",c:"ge"},
{id:18,ar:"ٱلْفَتَّاحُ",t:"Al-Fattâh",fr:"L'Ouvreur",c:"sa"},
{id:19,ar:"ٱلْعَلِيمُ",t:"Al-'Alîm",fr:"L'Omniscient",c:"sa"},
{id:20,ar:"ٱلْقَابِضُ",t:"Al-Qâbid",fr:"Celui qui retient",c:"pu"},
{id:21,ar:"ٱلْبَاسِطُ",t:"Al-Bâsit",fr:"Celui qui étend",c:"ge"},
{id:22,ar:"ٱلْخَافِضُ",t:"Al-Khâfid",fr:"Celui qui abaisse",c:"pu"},
{id:23,ar:"ٱلرَّافِعُ",t:"Ar-Râfi'",fr:"Celui qui élève",c:"pu"},
{id:24,ar:"ٱلْمُعِزُّ",t:"Al-Mu'izz",fr:"Celui qui honore",c:"pu"},
{id:25,ar:"ٱلْمُذِلُّ",t:"Al-Mudhill",fr:"Celui qui humilie",c:"ju"},
{id:26,ar:"ٱلسَّمِيعُ",t:"As-Samî'",fr:"L'Audient",c:"sa"},
{id:27,ar:"ٱلْبَصِيرُ",t:"Al-Basîr",fr:"Le Clairvoyant",c:"sa"},
{id:28,ar:"ٱلْحَكَمُ",t:"Al-Hakam",fr:"Le Juge",c:"ju"},
{id:29,ar:"ٱلْعَدْلُ",t:"Al-'Adl",fr:"Le Juste",c:"ju"},
{id:30,ar:"ٱللَّطِيفُ",t:"Al-Latîf",fr:"Le Subtil",c:"mi"},
{id:31,ar:"ٱلْخَبِيرُ",t:"Al-Khabîr",fr:"Le Bien-Informé",c:"sa"},
{id:32,ar:"ٱلْحَلِيمُ",t:"Al-Halîm",fr:"L'Indulgent",c:"mi"},
{id:33,ar:"ٱلْعَظِيمُ",t:"Al-'Azîm",fr:"Le Sublime",c:"ma"},
{id:34,ar:"ٱلْغَفُورُ",t:"Al-Ghafûr",fr:"Le Pardonneur",c:"mi"},
{id:35,ar:"ٱلشَّكُورُ",t:"Ash-Shakûr",fr:"Le Reconnaissant",c:"mi"},
{id:36,ar:"ٱلْعَلِيُّ",t:"Al-'Aliyy",fr:"Le Très Haut",c:"ma"},
{id:37,ar:"ٱلْكَبِيرُ",t:"Al-Kabîr",fr:"Le Grand",c:"ma"},
{id:38,ar:"ٱلْحَفِيظُ",t:"Al-Hafîz",fr:"Le Gardien",c:"pu"},
{id:39,ar:"ٱلْمُقِيتُ",t:"Al-Muqît",fr:"Le Nourricier",c:"ge"},
{id:40,ar:"ٱلْحَسِيبُ",t:"Al-Hasîb",fr:"Celui qui tient compte",c:"ju"},
{id:41,ar:"ٱلْجَلِيلُ",t:"Al-Jalîl",fr:"Le Majestueux",c:"ma"},
{id:42,ar:"ٱلْكَرِيمُ",t:"Al-Karîm",fr:"Le Généreux",c:"ge"},
{id:43,ar:"ٱلرَّقِيبُ",t:"Ar-Raqîb",fr:"Le Vigilant",c:"sa"},
{id:44,ar:"ٱلْمُجِيبُ",t:"Al-Mujîb",fr:"Celui qui exauce",c:"mi"},
{id:45,ar:"ٱلْوَاسِعُ",t:"Al-Wâsi'",fr:"L'Immense",c:"ma"},
{id:46,ar:"ٱلْحَكِيمُ",t:"Al-Hakîm",fr:"Le Sage",c:"sa"},
{id:47,ar:"ٱلْوَدُودُ",t:"Al-Wadûd",fr:"Le Bien-Aimant",c:"mi"},
{id:48,ar:"ٱلْمَجِيدُ",t:"Al-Majîd",fr:"Le Glorieux",c:"ma"},
{id:49,ar:"ٱلْبَاعِثُ",t:"Al-Bâ'ith",fr:"Celui qui ressuscite",c:"pu"},
{id:50,ar:"ٱلشَّهِيدُ",t:"Ash-Shahîd",fr:"Le Témoin",c:"sa"},
{id:51,ar:"ٱلْحَقُّ",t:"Al-Haqq",fr:"La Vérité",c:"ma"},
{id:52,ar:"ٱلْوَكِيلُ",t:"Al-Wakîl",fr:"Le Garant",c:"pu"},
{id:53,ar:"ٱلْقَوِيُّ",t:"Al-Qawiyy",fr:"Le Fort",c:"pu"},
{id:54,ar:"ٱلْمَتِينُ",t:"Al-Matîn",fr:"Le Ferme",c:"pu"},
{id:55,ar:"ٱلْوَلِيُّ",t:"Al-Waliyy",fr:"Le Protecteur",c:"mi"},
{id:56,ar:"ٱلْحَمِيدُ",t:"Al-Hamîd",fr:"Le Louable",c:"ma"},
{id:57,ar:"ٱلْمُحْصِي",t:"Al-Muhsî",fr:"Celui qui dénombre",c:"sa"},
{id:58,ar:"ٱلْمُبْدِئُ",t:"Al-Mubdi'",fr:"Celui qui commence",c:"cr"},
{id:59,ar:"ٱلْمُعِيدُ",t:"Al-Mu'îd",fr:"Celui qui reproduit",c:"cr"},
{id:60,ar:"ٱلْمُحْيِي",t:"Al-Muhyî",fr:"Celui qui donne la vie",c:"cr"},
{id:61,ar:"ٱلْمُمِيتُ",t:"Al-Mumît",fr:"Celui qui donne la mort",c:"pu"},
{id:62,ar:"ٱلْحَيُّ",t:"Al-Hayy",fr:"Le Vivant",c:"ma"},
{id:63,ar:"ٱلْقَيُّومُ",t:"Al-Qayyûm",fr:"Celui qui subsiste par Lui-même",c:"ma"},
{id:64,ar:"ٱلْوَاجِدُ",t:"Al-Wâjid",fr:"Celui qui trouve",c:"sa"},
{id:65,ar:"ٱلْمَاجِدُ",t:"Al-Mâjid",fr:"Le Noble",c:"ma"},
{id:66,ar:"ٱلْوَاحِدُ",t:"Al-Wâhid",fr:"L'Unique",c:"ma"},
{id:67,ar:"ٱلْأَحَدُ",t:"Al-Ahad",fr:"Le Seul",c:"ma"},
{id:68,ar:"ٱلصَّمَدُ",t:"As-Samad",fr:"L'Absolu",c:"ma"},
{id:69,ar:"ٱلْقَادِرُ",t:"Al-Qâdir",fr:"Le Capable",c:"pu"},
{id:70,ar:"ٱلْمُقْتَدِرُ",t:"Al-Muqtadir",fr:"Le Tout Déterminant",c:"pu"},
{id:71,ar:"ٱلْمُقَدِّمُ",t:"Al-Muqaddim",fr:"Celui qui met en avant",c:"pu"},
{id:72,ar:"ٱلْمُؤَخِّرُ",t:"Al-Mu'akhkhir",fr:"Celui qui retarde",c:"pu"},
{id:73,ar:"ٱلْأَوَّلُ",t:"Al-Awwal",fr:"Le Premier",c:"ma"},
{id:74,ar:"ٱلْآخِرُ",t:"Al-Âkhir",fr:"Le Dernier",c:"ma"},
{id:75,ar:"ٱلظَّاهِرُ",t:"Az-Zâhir",fr:"L'Apparent",c:"ma"},
{id:76,ar:"ٱلْبَاطِنُ",t:"Al-Bâtin",fr:"Le Caché",c:"ma"},
{id:77,ar:"ٱلْوَالِي",t:"Al-Wâlî",fr:"Le Maître",c:"pu"},
{id:78,ar:"ٱلْمُتَعَالِي",t:"Al-Muta'âlî",fr:"Le Très Élevé",c:"ma"},
{id:79,ar:"ٱلْبَرُّ",t:"Al-Barr",fr:"Le Charitable",c:"ge"},
{id:80,ar:"ٱلتَّوَّابُ",t:"At-Tawwâb",fr:"Celui qui accepte le repentir",c:"mi"},
{id:81,ar:"ٱلْمُنْتَقِمُ",t:"Al-Muntaqim",fr:"Le Vengeur",c:"ju"},
{id:82,ar:"ٱلْعَفُوُّ",t:"Al-'Afuww",fr:"L'Indulgent",c:"mi"},
{id:83,ar:"ٱلرَّؤُوفُ",t:"Ar-Ra'ûf",fr:"Le Compatissant",c:"mi"},
{id:84,ar:"مَالِكُ ٱلْمُلْكِ",t:"Mâlik-ul-Mulk",fr:"Possesseur du Royaume",c:"pu"},
{id:85,ar:"ذُو ٱلْجَلَالِ وَٱلْإِكْرَامِ",t:"Dhul-Jalâli wal-Ikrâm",fr:"Plein de Majesté et de Munificence",c:"ma"},
{id:86,ar:"ٱلْمُقْسِطُ",t:"Al-Muqsit",fr:"L'Équitable",c:"ju"},
{id:87,ar:"ٱلْجَامِعُ",t:"Al-Jâmi'",fr:"Celui qui rassemble",c:"pu"},
{id:88,ar:"ٱلْغَنِيُّ",t:"Al-Ghaniyy",fr:"Le Riche",c:"ma"},
{id:89,ar:"ٱلْمُغْنِي",t:"Al-Mughnî",fr:"Celui qui enrichit",c:"ge"},
{id:90,ar:"ٱلْمَانِعُ",t:"Al-Mâni'",fr:"Celui qui empêche",c:"pu"},
{id:91,ar:"ٱلضَّارُّ",t:"Ad-Dârr",fr:"Celui qui nuit",c:"pu"},
{id:92,ar:"ٱلنَّافِعُ",t:"An-Nâfi'",fr:"Celui qui accorde le profit",c:"ge"},
{id:93,ar:"ٱلنُّورُ",t:"An-Nûr",fr:"La Lumière",c:"ma"},
{id:94,ar:"ٱلْهَادِي",t:"Al-Hâdî",fr:"Le Guide",c:"sa"},
{id:95,ar:"ٱلْبَدِيعُ",t:"Al-Badî'",fr:"Le Créateur Originel",c:"cr"},
{id:96,ar:"ٱلْبَاقِي",t:"Al-Bâqî",fr:"L'Éternel",c:"ma"},
{id:97,ar:"ٱلْوَارِثُ",t:"Al-Wârith",fr:"L'Héritier",c:"pu"},
{id:98,ar:"ٱلرَّشِيدُ",t:"Ar-Rashîd",fr:"Celui qui dirige avec Sagesse",c:"sa"},
{id:99,ar:"ٱلصَّبُورُ",t:"As-Sabûr",fr:"Le Patient",c:"mi"}
];

const CAT={
  mi:{l:"Miséricorde & Pardon",i:"🤲"},
  pu:{l:"Puissance & Souveraineté",i:"⚡"},
  ma:{l:"Majesté & Grandeur",i:"👑"},
  sa:{l:"Sagesse & Savoir",i:"📖"},
  cr:{l:"Création & Vie",i:"🌱"},
  ge:{l:"Générosité & Subsistance",i:"💎"},
  ju:{l:"Justice & Jugement",i:"⚖️"}
};

const SRI=[0,1,3,7,21], SRL=['Nouveau','En cours','Révision','Acquis','Maîtrisé'];

// STATE
let mst=new Set(), st={}, sr={}, pg='learn';
let li=0, lf=false, lfi='all', slideDir='';
let qm='ar_to_fr', qq=null, qs=null, qn=0, qc=0;
let wm='ar_to_trans', wq=null, wa=false, wn=0, wc=0;
let mp=[], mro=[], msl=null, mm=new Set(), mw=null, mt=0, mi=null, mmo='ar_to_fr', mia=false;

// UTILS
function sh(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=0|Math.random()*(i+1);[b[i],b[j]]=[b[j],b[i]];}return b;}
function norm(s){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z\s]/g,'').trim();}
function sim(a,b){if(a===b)return 1;const l=a.length>b.length?a:b,s=a.length>b.length?b:a;if(!l.length)return 1;let m=0;for(let i=0;i<s.length;i++)if(s[i]===l[i])m++;return m/l.length;}
function ft(s){return(s/60|0)+':'+(s%60+'').padStart(2,'0');}
function save(){try{localStorage.setItem('a-m',JSON.stringify([...mst]));localStorage.setItem('a-s',JSON.stringify(st));localStorage.setItem('a-r',JSON.stringify(sr));}catch(e){}}
function load(){try{const a=localStorage.getItem('a-m');if(a)mst=new Set(JSON.parse(a));const b=localStorage.getItem('a-s');if(b)st=JSON.parse(b);const c=localStorage.getItem('a-r');if(c)sr=JSON.parse(c);}catch(e){}}
function gsr(id){if(!sr[id])sr[id]={b:0,n:0};return sr[id];}
function srUp(id){const s=gsr(id);s.b=Math.min(s.b+1,4);s.n=Date.now()+SRI[s.b]*864e5;save();}
function srDn(id){const s=gsr(id);s.b=Math.max(s.b-1,0);s.n=Date.now();save();}
function due(){return N.filter(n=>gsr(n.id).n<=Date.now());}
function smart(){const d=due();return d.length?d[0|Math.random()*d.length]:N[0|Math.random()*N.length];}
function gfn(){if(lfi==='mastered')return N.filter(n=>mst.has(n.id));if(lfi==='remaining')return N.filter(n=>!mst.has(n.id));if(lfi==='due')return due();return N;}
function dv(w){return`<div class="dv" style="width:${w||'30%'}"><i></i></div>`;}
function hd(t,s,p){return`<div class="ph" style="position:relative"><h1>${t}</h1>${s?`<p class="sub">${s}</p>`:''}${p?`<button class="info-btn" onclick="showInfo('${p}')">?</button>`:''}${dv()}</div>`;}

// Conditional transliteration display
function trlit(text){return showTranslit?text:'';}
function trlitHtml(text,cls){return showTranslit?`<div class="${cls}">${text}</div>`:'';}


// TAB BAR
const TB=[{id:'learn',l:'Apprendre',i:'📖'},{id:'quiz',l:'Quiz',i:'✨'},{id:'write',l:'Écrire',i:'✍️'},{id:'match',l:'Relier',i:'🔗'},{id:'categories',l:'Thèmes',i:'🏷️'},{id:'progress',l:'Progrès',i:'📊'},{id:'settings',l:'Réglages',i:'⚙️'}];
function rTB(){document.getElementById('tab-bar').innerHTML=TB.map(t=>`<button class="tb${pg===t.id?' a':''}" onclick="sp('${t.id}')"><span class="ti">${t.i}</span><span class="tl">${t.l}</span>${pg===t.id?'<div class="td"></div>':''}</button>`).join('');}
function sp(id){pg=id;document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById('page-'+id).classList.add('active');rTB();({learn:rL,quiz:rQ,write:rW,match:iM,categories:rC,progress:rP,settings:rS})[id]();}

// =============================================
// LEARN
// =============================================
function rL(){
  const ns=gfn();if(li>=ns.length)li=0;const n=ns[li];const dc=due().length;
  const rem=99-mst.size, acq=mst.size;
  let h=hd('Apprendre','Mémorise les Noms un par un','learn');
  h+='<div class="pills">';
  h+='<button class="pl'+(lfi==='all'?' a':'')+'" onclick="sLF(\'all\')">Tous (99)</button>';
  h+='<button class="pl'+(lfi==='remaining'?' a':'')+'" onclick="sLF(\'remaining\')">Restants ('+rem+')</button>';
  h+='<button class="pl'+(lfi==='mastered'?' a':'')+'" onclick="sLF(\'mastered\')">Mémorisés ('+acq+')</button>';
  h+='<button class="pl'+(lfi==='due'?' a':'')+'" onclick="sLF(\'due\')">À réviser ('+dc+')</button>';
  h+='</div>';
  if(!n||!ns.length){h+='<div class="empty">Aucun nom dans cette catégorie</div>';document.getElementById('page-learn').innerHTML=h;return;}
  const im=mst.has(n.id),s=gsr(n.id),ci=CAT[n.c];
  h+=`<div class="counter">${li+1} / ${ns.length}</div>`;
  h+=`<div class="card-wrap"><div class="card ${slideDir?'slide-'+slideDir:'fade-in'}" id="lc" onclick="tF()">`;
  h+=`<div class="co co-tl"></div><div class="co co-tr"></div><div class="co co-bl"></div><div class="co co-br"></div>`;
  h+=`<div class="c-num">N°${n.id} <span class="sr-b sr${s.b}">${SRL[s.b]}</span></div>`;
  h+=`<div class="c-ar">${n.ar}</div>`;
  if(showTranslit)h+=`<div class="c-tr">${n.t}</div>`;
  if(lf){
    h+=`<div class="c-fr" style="animation:cardFadeIn 0.25s ease">${n.fr}</div>`;
    h+=`<div class="c-cat">${ci.i} ${ci.l}</div>`;
    h+=`<button class="mbtn mbtn-off" style="margin-top:8px;font-size:0.75rem;padding:6px 14px" onclick="event.stopPropagation();showDetail(${n.id})">📖 En savoir plus</button>`;
  } else {
    h+=`<div class="c-hint">Touche pour révéler</div>`;
  }
  h+=`</div></div>`;
  h+=`<div class="ctrls"><button class="nbtn" onclick="lG(-1)">‹</button><button class="mbtn ${im?'mbtn-on':'mbtn-off'}" onclick="tM(${n.id})">${im?'✓ Mémorisé':'Je le sais'}</button><button class="nbtn" onclick="lG(1)">›</button></div>`;
  h+=`<div class="meta">← Swipe pour naviguer →</div>`;
  document.getElementById('page-learn').innerHTML=h;
  const c=document.getElementById('lc');if(c){let tx=null;c.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;});c.addEventListener('touchend',e=>{if(!tx)return;const d=tx-e.changedTouches[0].clientX;if(Math.abs(d)>50){e.preventDefault();lG(d>0?1:-1);}tx=null;});}
}
function sLF(f){lfi=f;li=0;lf=false;slideDir='';rL();}
function tF(){lf=!lf;slideDir='';rL();}
function lG(d){const ns=gfn();lf=false;slideDir=d>0?'left':'right';if(d===1)li=li<ns.length-1?li+1:0;else li=li>0?li-1:ns.length-1;rL();setTimeout(()=>{slideDir='';},350);}
function tM(id){if(mst.has(id))mst.delete(id);else{mst.add(id);checkMilestone();}save();rL();}

// =============================================
// QUIZ
// =============================================
function gQ(){const tg=smart(),wr=sh(N.filter(n=>n.id!==tg.id)).slice(0,3);qq={tg,ops:sh([tg,...wr])};qs=null;}
function rQ(){
  if(!qq)gQ();const t=qq.tg;
  let h=hd('Quiz','Répétition espacée intelligente','quiz');
  h+=`<div class="pills">${[{id:'ar_to_fr',l:'Arabe → Français'},{id:'fr_to_ar',l:'Français → Arabe'},{id:'trans_to_ar',l:'Arabe → Translit.'}].map(m=>`<button class="pl${qm===m.id?' a':''}" onclick="sQM('${m.id}')">${m.l}</button>`).join('')}</div>`;
  if(qn>0)h+=`<div class="ss">Session : ${qc}/${qn} (${Math.round(qc/qn*100)}%)</div>`;
  let d,dc,lb;
  if(qm==='ar_to_fr'){d=t.ar;dc='qd-ar';lb='Quelle est la signification ?';}
  else if(qm==='fr_to_ar'){d=t.fr;dc='qd-fr';lb='Quel est ce Nom ?';}
  else{d=t.ar;dc='qd-ar';lb='Quelle est la translittération ?';}
  h+=`<div class="qcard"><p class="qlabel">${lb}</p><div class="${dc}">${d}</div></div>`;
  h+='<div class="opts">';
  qq.ops.forEach(o=>{
    let cl='';if(qs){if(o.id===t.id)cl='ok';else if(o.id===qs)cl='ko';}
    let ol=qm==='ar_to_fr'?o.fr:o.t;
    let otr=showTranslit&&qm==='ar_to_fr'?`<div style="font-size:0.625rem;color:var(--ink-faint);margin-top:2px">${o.t}</div>`:"";

    let oa=qm==='fr_to_ar'?`<div class="oa">${o.ar}</div>`:'';
    h+=`<button class="ob ${cl}" onclick="qA(${o.id})" ${qs?'disabled':''}>${oa}<div class="ol">${ol}</div>${otr}</button>`;
  });
  h+='</div>';
  document.getElementById('page-quiz').innerHTML=h;
}
function sQM(m){qm=m;qn=0;qc=0;gQ();rQ();}
function qA(id){if(qs)return;qs=id;qn++;const ok=id===qq.tg.id;if(ok){qc++;srUp(qq.tg.id);miniConfetti();}else srDn(qq.tg.id);const tid=qq.tg.id;if(!st[tid])st[tid]={c:0,w:0};if(ok)st[tid].c++;else st[tid].w++;save();rQ();setTimeout(()=>{gQ();rQ();},ok?800:1500);}

// =============================================
// WRITE
// =============================================
function gW(){wq=smart();wa=false;}
function rW(){
  if(!wq)gW();const t=wq;
  let h=hd('Écrire','Mémoire active — tape ta réponse','write');
  h+=`<div class="pills">${[{id:'ar_to_trans',l:'Arabe → Translit.'},{id:'ar_to_fr',l:'Arabe → Français'},{id:'fr_to_trans',l:'Français → Translit.'}].map(m=>`<button class="pl${wm===m.id?' a':''}" onclick="sWM('${m.id}')">${m.l}</button>`).join('')}</div>`;
  if(wn>0)h+=`<div class="ss">Session : ${wc}/${wn} (${Math.round(wc/wn*100)}%)</div>`;
  let d,dc,lb;
  if(wm==='ar_to_trans'){d=t.ar;dc='qd-ar';lb='Écris la translittération';}
  else if(wm==='ar_to_fr'){d=t.ar;dc='qd-ar';lb='Écris la signification';}
  else{d=t.fr;dc='qd-fr';lb='Écris la translittération';}
  h+=`<div class="qcard"><p class="qlabel">${lb}</p><div class="${dc}">${d}</div></div>`;
  h+=`<div style="padding:0 20px"><input type="text" class="wi" id="wf" placeholder="Ta réponse..." autocomplete="off" autocapitalize="off" ${wa?'disabled':''} onkeydown="if(event.key==='Enter')cW()">`;
  if(!wa)h+=`<button class="wbtn" onclick="cW()">Vérifier</button>`;
  h+=`<div id="wfb"></div></div>`;
  document.getElementById('page-write').innerHTML=h;
  if(!wa)setTimeout(()=>{const f=document.getElementById('wf');if(f)f.focus();},100);
}
function sWM(m){wm=m;wn=0;wc=0;gW();rW();}
function cW(){
  if(wa)return;const f=document.getElementById('wf');if(!f||!f.value.trim())return;
  wa=true;wn++;const t=wq;
  let exp=wm==='ar_to_fr'?t.fr:t.t;
  const ua=norm(f.value);
  // Build list of accepted answers
  const accepted=[norm(exp)];
  // Add alt transliterations (without accents, with common variants)
  if(wm!=='ar_to_fr'){
    accepted.push(norm(exp.replace(/â/g,'a').replace(/î/g,'i').replace(/û/g,'u').replace(/'/g,"'").replace(/'/g,'')));
    accepted.push(norm(exp.replace(/-/g,' ')));
    accepted.push(norm(exp.replace(/al-/gi,'')));
    accepted.push(norm(exp.replace(/^(al|ar|as|ash|at|ad|az|an|adh|dhul)-?/i,'')));
  }
  // Add alt French (with/without article)
  if(wm==='ar_to_fr'){
    accepted.push(norm(exp.replace(/^(le |la |l'|les |celui qui |celle qui )/i,'')));
  }
  // Check exact match in any variant
  const ok=accepted.some(a=>a===ua);
  // Check close match (Levenshtein)
  const bestSim=Math.max(...accepted.map(a=>sim(ua,a)));
  const cl=!ok&&bestSim>0.7;
  f.disabled=true;f.classList.add(ok||cl?'ok':'ko');
  const tid=t.id;if(!st[tid])st[tid]={c:0,w:0};
  const fb=document.getElementById('wfb');
  if(ok){wc++;st[tid].c++;srUp(tid);miniConfetti();fb.innerHTML=`<div class="wfb wfb-ok"><b>✓ Correct !</b></div>`;}
  else if(cl){wc++;st[tid].c++;srUp(tid);miniConfetti();fb.innerHTML=`<div class="wfb wfb-ok"><b>✓ Presque !</b><br><span style="font-size:12px">Exact : <b>${exp}</b></span></div>`;}
  else{st[tid].w++;srDn(tid);fb.innerHTML=`<div class="wfb wfb-ko"><b>✗ Incorrect</b><br><span style="font-size:12px">Réponse : <b>${exp}</b></span><br><span style="font-family:var(--arabic);font-size:1.125rem;direction:rtl">${t.ar}</span> — ${t.t}</div>`;}
  save();setTimeout(()=>{gW();rW();},ok?1200:2500);
}

// =============================================
// MATCH
// =============================================
function iM(){clearInterval(mi);mp=sh(N).slice(0,5);mro=sh([...mp]);msl=null;mm=new Set();mw=null;mt=0;mia=false;mi=setInterval(()=>{mt++;rMT();},1000);rM();}
function rMT(){const e=document.getElementById('mtd');if(e)e.innerHTML=`<span class="timer-v">${ft(mt)}</span><span style="font-size:0.75rem;color:var(--ink-faint);margin-left:10px">${mm.size}/5</span>`;}
function gML(p){return mmo==='fr_to_ar'?`<div class="mb-fr">${p.fr}</div>`:`<div class="mb-ar">${p.ar}</div>${showTranslit?`<div class="mb-fr" style="font-size:0.625rem;color:var(--ink-faint)">${p.t}</div>`:""}`;}
function gMR(p){if(mmo==='ar_to_fr')return`<div class="mb-fr">${p.fr}</div>`;if(mmo==='fr_to_ar')return`<div class="mb-ar">${p.ar}</div>${showTranslit?`<div class="mb-fr" style="margin-top:3px;font-size:10px">${p.t}</div>`:""}`;return`<div class="mb-fr">${p.t}</div>`;}
function rM(){
  let h=hd('Relier','Relie chaque Nom à sa signification','match');
  h+=`<div class="pills">${[{id:'ar_to_fr',l:'Arabe → Français'},{id:'fr_to_ar',l:'Français → Arabe'},{id:'ar_to_trans',l:'Arabe → Translit.'}].map(m=>`<button class="pl${mmo===m.id?' a':''}" onclick="sMM('${m.id}')">${m.l}</button>`).join('')}</div>`;
  h+=`<div class="timer-d" id="mtd"></div>`;
  if(mm.size===5){clearInterval(mi);confetti(40);h+=`<div class="done"><div class="em">✨</div><p>Terminé en ${ft(mt)} !</p>${dv()}<button class="nrb" onclick="iM()">Nouvelle série</button></div>`;}
  else{
    h+=`<div class="mg"><div class="mc">`;
    mp.forEach(p=>{let c=mm.has(p.id)?'mat':msl===p.id?'sel':'';h+=`<button class="mb ${c}" onclick="mLC(${p.id})">${gML(p)}</button>`;});
    h+=`</div><div class="mc">`;
    mro.forEach(p=>{let c=mm.has(p.id)?'mat':mw===p.id?'wrg':'';h+=`<button class="mb ${c}" onclick="mRC(${p.id})">${gMR(p)}</button>`;});
    h+=`</div></div>`;
  }
  document.getElementById('page-match').innerHTML=h;rMT();
}
function sMM(m){mmo=m;iM();}
function mLC(id){if(mm.has(id)||mia)return;msl=id;mw=null;rM();}
function mRC(id){
  if(mm.has(id)||!msl||mia)return;
  if(msl===id){mm.add(id);if(!st[id])st[id]={c:0,w:0};st[id].c++;msl=null;save();rM();}
  else{mia=true;mw=id;if(!st[msl])st[msl]={c:0,w:0};st[msl].w++;save();rM();setTimeout(()=>{mw=null;msl=null;mia=false;rM();},600);}
}

// =============================================
// CATEGORIES
// =============================================
function rC(){
  let h=hd('Thèmes','Les Noms classés par famille','categories');
  Object.entries(CAT).forEach(([k,v])=>{
    const ns=N.filter(n=>n.c===k);
    h+=`<div class="csec"><div class="ctitle">${v.i} ${v.l} <span style="font-size:0.6875rem;color:var(--ink-faint);font-weight:400">(${ns.length})</span></div><div class="cgrid">`;
    ns.forEach(n=>{h+=`<div class="ci" onclick="goN(${n.id})"><div class="ci-ar">${n.ar}</div>${showTranslit?`<div style="font-size:0.6875rem;color:var(--gold);margin:2px 0">${n.t}</div>`:""}<div class="ci-fr">${n.fr}</div></div>`;});
    h+=`</div></div>`;
  });
  document.getElementById('page-categories').innerHTML=h;
}
function goN(id){lfi='all';li=N.findIndex(n=>n.id===id);lf=true;sp('learn');}

// =============================================
// PROGRESS
// =============================================
function rP(){
  const ta=Object.values(st).reduce((a,s)=>a+s.c+s.w,0);
  const tc=Object.values(st).reduce((a,s)=>a+s.c,0);
  const acc=ta>0?Math.round(tc/ta*100):0;
  const pct=Math.round(mst.size/99*100);
  const dc=due().length;
  const sd=[0,0,0,0,0];N.forEach(n=>{sd[gsr(n.id).b]++;});
  const diff=N.map(n=>({...n,s:st[n.id]||{c:0,w:0}})).filter(n=>n.s.w>0).sort((a,b)=>b.s.w-a.s.w).slice(0,10);

  let h=hd('Progrès','Ton avancement','progress');
  h+=`<div class="sg">
    <div class="sc"><div class="sv">${mst.size}</div><div class="ssub">/ 99</div><div class="slab">Noms mémorisés</div></div>
    <div class="sc"><div class="sv">${acc}%</div><div class="ssub">${tc}/${ta}</div><div class="slab">Précision</div></div>
    <div class="sc"><div class="sv">${dc}</div><div class="ssub">noms</div><div class="slab">À réviser</div></div>
    <div class="sc"><div class="sv">${sd[3]+sd[4]}</div><div class="ssub">/ 99</div><div class="slab">Mémorisés (SR)</div></div>
  </div>`;
  h+=`<div class="psec"><div style="display:flex;justify-content:space-between;font-size:0.75rem;margin-bottom:4px"><span style="color:var(--ink-light);font-weight:600">Progression</span><span style="color:var(--gold);font-weight:700">${pct}%</span></div><div class="pbar"><div class="pfill" style="width:${pct}%"></div></div></div>`;
  // SR bar
  const cols=['var(--gold)','var(--error)','var(--ink-faint)','var(--success)','#1B4332'];
  h+=`<div style="padding:0 20px;margin-bottom:20px"><p style="font-size:0.75rem;font-weight:600;color:var(--ink-light);margin-bottom:8px">Répétition espacée</p><div class="sr-bar">`;
  sd.forEach((c,i)=>{const w=c/99*100;if(w>0)h+=`<div class="sr-seg" style="width:${w}%;background:${cols[i]}">${c}</div>`;});
  h+=`</div><div class="sr-legend"><span>Nouveau</span><span>En cours</span><span>Révision</span><span>Acquis</span><span>Maîtrisé</span></div></div>`;
  if(diff.length){
    h+=`<div class="dlist"><h3>À retravailler</h3>`;
    diff.forEach(n=>{h+=`<div class="di"><div style="display:flex;align-items:center;gap:10px"><span style="font-family:var(--arabic);font-size:1rem;color:var(--ink);direction:rtl">${n.ar}</span>${showTranslit?`<span style="font-size:0.6875rem;color:var(--ink-faint)">${n.t}</span>`:""}</div><div style="display:flex;gap:8px;font-size:10px"><span style="color:var(--success)">✓${n.s.c}</span><span style="color:var(--error)">✗${n.s.w}</span></div></div>`;});
    h+='</div>';
  }
  h+=`<div class="rst"><button class="rstb" onclick="if(confirm('Réinitialiser toute ta progression ?')){mst=new Set();st={};sr={};localStorage.clear();rP();}">Réinitialiser</button></div>`;
  document.getElementById('page-progress').innerHTML=h;
}

// =============================================
// SETTINGS
// =============================================
let darkMode = false;
let fontScale = 100;
let showTranslit = true; // Toggle transliteration display

function loadSettings(){
  try {
    const d = localStorage.getItem('a-dark'); if(d) darkMode = JSON.parse(d);
    const f = localStorage.getItem('a-font'); if(f) fontScale = JSON.parse(f);
    const t = localStorage.getItem('a-trans'); if(t !== null) showTranslit = JSON.parse(t);
  } catch(e){}
  applySettings();
}

function applySettings(){
  if(darkMode) document.body.classList.add('dark');
  else document.body.classList.remove('dark');
  document.documentElement.style.fontSize = (fontScale / 100 * 16) + 'px';
  const meta = document.querySelector('meta[name="theme-color"]');
  if(meta) meta.content = darkMode ? '#121212' : '#FAF6F0';
}

function saveSettings(){
  try {
    localStorage.setItem('a-dark', JSON.stringify(darkMode));
    localStorage.setItem('a-font', JSON.stringify(fontScale));
    localStorage.setItem('a-trans', JSON.stringify(showTranslit));
  } catch(e){}
}

function toggleDark(){
  darkMode = !darkMode;
  saveSettings(); applySettings(); rS();
}

function toggleTranslit(){
  showTranslit = !showTranslit;
  saveSettings(); rS();
}

function setFontScale(v){
  fontScale = parseInt(v);
  saveSettings(); applySettings();
  const el = document.getElementById('font-val');
  if(el) el.textContent = fontScale + '%';
}

// INFO MODALS per page
const INFO={
  learn:{t:'📖 Apprendre',d:'Parcours les 99 Noms un par un. Touche la carte pour la retourner et voir la signification en français. Tu peux filtrer par catégorie : Tous, Restants, Mémorisés, ou ceux à réviser selon le système de répétition espacée.'},
  quiz:{t:'✨ Quiz',d:'Teste ta mémoire ! Un nom t\'est présenté et tu dois choisir la bonne réponse parmi 4 propositions. 3 modes disponibles : Arabe→Français, Français→Arabe, Arabe→Translittération. Le système de répétition espacée priorise les noms que tu maîtrises le moins.'},
  write:{t:'✍️ Écrire',d:'Mémoire active : tape toi-même la réponse. Plusieurs écritures sont acceptées (avec ou sans accents, avec ou sans article al-). Le seuil de tolérance est de 70%. Idéal pour ancrer la mémorisation.'},
  match:{t:'🔗 Relier',d:'Relie chaque nom arabe à sa signification le plus vite possible. 5 paires à trouver, chronomètre en cours. Tu peux choisir le sens du matching : Arabe→Français, Français→Arabe, ou Arabe→Translittération.'},
  categories:{t:'🏷️ Thèmes',d:'Les 99 Noms classés en 7 familles thématiques : Miséricorde, Puissance, Majesté, Sagesse, Création, Générosité, Justice. Touche un nom pour l\'ouvrir dans la page Apprendre.'},
  progress:{t:'📊 Progrès',d:'Ton tableau de bord : noms mémorisés, précision, noms à réviser. La barre de répétition espacée montre la distribution de tes noms dans les 5 boîtes Leitner (Nouveau → Maîtrisé). Les noms les plus difficiles sont listés en bas.'}
};

function showInfo(page){
  const i=INFO[page];if(!i)return;
  const o=document.createElement('div');o.className='info-overlay';o.onclick=function(e){if(e.target===o)o.remove();};
  o.innerHTML='<div class="info-box"><button class="info-close" onclick="this.closest(\'.info-overlay\').remove()">✕</button><h2>'+i.t+'</h2><p>'+i.d+'</p></div>';
  document.body.appendChild(o);
}

// EN SAVOIR PLUS — descriptions des noms (source: Coran, hadiths, tafsir)
const DESC={
1:"Ar-Rahmân désigne la miséricorde absolue et universelle d'Allah, qui englobe toute la création sans distinction. Ce nom est exclusivement réservé à Allah. Cité dans la Sourate Al-Fatiha (1:1) et titre de la Sourate Ar-Rahmân (55). Racine : ر-ح-م (rahima). Hadith : « Ma miséricorde l'emporte sur Ma colère » (Bukhari).",
2:"Ar-Rahîm désigne la miséricorde spécifique d'Allah envers les croyants dans l'au-delà. Contrairement à Ar-Rahmân (universelle), Ar-Rahîm est une miséricorde récompensant la foi. Cité 114 fois dans la Basmala. Sourate Al-Baqara (2:143) : « Allah est compatissant et miséricordieux envers les hommes. »",
3:"Al-Malik signifie Le Roi, Le Souverain absolu. Allah est le Roi de toute chose, des mondes visibles et invisibles. Sourate Al-Hashr (59:23). Il est Celui qui possède tout et dirige l'univers sans associé.",
4:"Al-Quddûs signifie Le Très Saint, Le Pur. Allah est exempt de tout défaut et de toute imperfection. Cité dans la Sourate Al-Hashr (59:23) et Al-Jumu'a (62:1). Racine : ق-د-س (qadasa), la pureté.",
5:"As-Salâm signifie La Paix, Celui qui est exempt de tout défaut. Il est la source de toute paix et sécurité. Sourate Al-Hashr (59:23). Le Prophète ﷺ disait après chaque prière : « Allâhumma anta as-Salâm, wa minka as-Salâm. »",
6:"Al-Mu'min signifie Le Rassurant, Le Garant de la foi. Il est Celui qui confirme les croyants dans leur foi et leur accorde la sécurité. Sourate Al-Hashr (59:23). Racine : أ-م-ن (amina), sécurité.",
7:"Al-Muhaymin signifie Le Protecteur, Le Surveillant. Allah veille sur toute Sa création et la protège. Sourate Al-Hashr (59:23). Il observe tout et rien ne Lui échappe.",
8:"Al-'Azîz signifie Le Tout Puissant, L'Invincible. Nul ne peut Le vaincre ni s'opposer à Sa volonté. Cité 92 fois dans le Coran, souvent associé à Al-Hakîm (Le Sage).",
9:"Al-Jabbâr signifie Le Contraignant, Celui qui impose Sa volonté. Il est aussi Celui qui répare les cœurs brisés. Sourate Al-Hashr (59:23). Double sens : puissance et réparation.",
10:"Al-Mutakabbir signifie Le Superbe, Celui dont la grandeur est suprême. L'orgueil n'appartient qu'à Allah. Sourate Al-Hashr (59:23). Hadith : « L'orgueil est Mon manteau et la grandeur est Mon vêtement » (Muslim).",
};
// Generate minimal descriptions for names without detailed ones
function getDesc(id){
  if(DESC[id]) return DESC[id];
  const n=N.find(x=>x.id===id);if(!n)return '';
  const ci=CAT[n.c];
  return n.t+' ('+n.fr+') fait partie de la famille « '+ci.l+' ». Ce nom glorifie un attribut d\'Allah lié à '+ci.l.toLowerCase()+'.';
}

function showDetail(id){
  const n=N.find(x=>x.id===id);if(!n)return;
  const ci=CAT[n.c];const d=getDesc(id);
  const o=document.createElement('div');o.className='info-overlay';o.onclick=function(e){if(e.target===o)o.remove();};
  let h='<div class="info-box"><button class="info-close" onclick="this.closest(\'.info-overlay\').remove()">✕</button>';
  h+='<div style="text-align:center;margin-bottom:16px"><div style="font-family:var(--arabic);font-size:2rem;direction:rtl;color:var(--ink)">'+n.ar+'</div>';
  h+='<div style="font-size:1.125rem;color:var(--gold);font-weight:600;margin-top:4px">'+n.t+'</div>';
  h+='<div style="font-size:0.9375rem;color:var(--ink-light);font-style:italic">'+n.fr+'</div>';
  h+='<div style="margin-top:8px;display:inline-block;padding:3px 10px;border-radius:10px;font-size:0.75rem;color:var(--gold);background:var(--gold-glow)">'+ci.i+' '+ci.l+'</div></div>';
  h+='<p style="font-size:0.875rem;color:var(--ink-light);line-height:1.7">'+d+'</p>';
  h+='</div>';
  o.innerHTML=h;
  document.body.appendChild(o);
}

function rS(){
  let h = hd('Réglages','Personnalise ton expérience');
  h += '<div class="set-section">';

  // Dark mode
  h += '<div class="set-label">Apparence</div>';
  h += '<div class="set-row"><span>🌙 Mode sombre</span>';
  h += '<button class="toggle'+(darkMode?' on':'')+'" onclick="toggleDark()"></button></div>';

  // Transliteration
  h += '<div class="set-label" style="margin-top:20px">Affichage</div>';
  h += '<div class="set-row"><span>🔤 Translittération</span>';
  h += '<button class="toggle'+(showTranslit?' on':'')+'" onclick="toggleTranslit()"></button></div>';
  h += '<div style="padding:0 4px;margin-top:-6px;margin-bottom:12px;font-size:0.75rem;color:var(--ink-faint)">Affiche la prononciation sous chaque nom arabe. Désactive si tu es arabophone.</div>';

  // Font size
  h += '<div class="set-label" style="margin-top:20px">Taille du texte</div>';
  h += '<div class="set-row" style="flex-direction:column;align-items:stretch;gap:8px">';
  h += '<div style="display:flex;justify-content:space-between;align-items:center"><span>Taille</span><span class="size-val" id="font-val">'+fontScale+'%</span></div>';
  h += '<input type="range" class="size-slider" min="80" max="140" step="10" value="'+fontScale+'" oninput="setFontScale(this.value)">';
  h += '<div class="size-labels"><span>Petit</span><span>Normal</span><span>Grand</span></div>';
  h += '</div>';

  // Info
  h += '<div class="set-label" style="margin-top:20px">À propos</div>';
  h += '<div class="set-row" style="flex-direction:column;align-items:flex-start;gap:6px">';
  h += '<span style="font-weight:600;color:var(--ink)">Asma Allah Al-Husna</span>';
  h += '<span style="font-size:13px">Les 99 Noms d\'Allah — App de mémorisation</span>';
  h += '<span style="font-size:0.75rem;color:var(--ink-faint)">Version 4.0 • Données stockées localement</span>';
  h += '</div>';

  // Update instructions
  h += '<div class="set-label" style="margin-top:20px">Mise à jour</div>';
  h += '<div class="set-row" style="flex-direction:column;align-items:flex-start;gap:6px">';
  h += '<span style="font-size:0.8125rem;color:var(--ink-light);line-height:1.5">L\'app se met à jour automatiquement quand tu es connecté à Internet. Si tu ne vois pas les changements :</span>';
  h += '<span style="font-size:0.8125rem;color:var(--ink-light);line-height:1.5">1. Ferme complètement l\'app<br>2. Rouvre-la (elle re-télécharge la dernière version)<br>3. Si ça ne marche pas : Réglages Safari → Vider le cache du site</span>';
  h += '<button class="rstb" style="margin-top:8px" onclick="if(navigator.serviceWorker){navigator.serviceWorker.getRegistration().then(r=>{if(r)r.update().then(()=>location.reload())});} else location.reload()">🔄 Vérifier les mises à jour</button>';
  h += '</div>';

  h += '</div>';
  document.getElementById('page-settings').innerHTML = h;
}

// =============================================
// CONFETTI & ANIMATIONS
// =============================================
function confetti(count=30){
  const c=document.createElement('div');c.className='confetti-container';document.body.appendChild(c);
  const colors=['#B8860B','#D4A84B','#2D6A4F','#E8D5B7','#9B2226','#F5E6CC'];
  for(let i=0;i<count;i++){
    const p=document.createElement('div');p.className='confetti-piece';
    const shapes=['circle','square','diamond'];const shape=shapes[Math.floor(Math.random()*3)];
    p.style.left=Math.random()*100+'%';
    p.style.animationDelay=Math.random()*0.8+'s';
    p.style.animationDuration=(2+Math.random()*1.5)+'s';
    p.style.background=colors[Math.floor(Math.random()*colors.length)];
    if(shape==='circle')p.style.borderRadius='50%';
    else if(shape==='diamond'){p.style.transform='rotate(45deg)';p.style.width='6px';p.style.height='6px';}
    c.appendChild(p);
  }
  setTimeout(()=>c.remove(),3500);
}

function milestone(emoji,text,sub){
  const m=document.createElement('div');m.className='milestone';
  m.innerHTML='<div class="ms-emoji">'+emoji+'</div><div class="ms-text">'+text+'</div><div class="ms-sub">'+sub+'</div>';
  document.body.appendChild(m);confetti(50);
  setTimeout(()=>{m.style.transition='all 0.3s';m.style.opacity='0';m.style.transform='translate(-50%,-50%) scale(0.8)';setTimeout(()=>m.remove(),400);},2500);
}

function checkMilestone(){
  const s=mst.size;
  if(s===25)milestone('⭐','25 Noms acquis !','Quart du chemin — continue !');
  else if(s===50)milestone('🌙','50 Noms acquis !','La moitié — tu gères !');
  else if(s===75)milestone('🏆','75 Noms acquis !','Trois quarts — bientôt la fin !');
  else if(s===99)milestone('✨','99 Noms maîtrisés !','Allahu Akbar — tu les connais tous !');
}

function miniConfetti(){confetti(15);}

// INIT
load();loadSettings();rTB();rL();

// PWA — Register service worker
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js').catch(()=>{});
}
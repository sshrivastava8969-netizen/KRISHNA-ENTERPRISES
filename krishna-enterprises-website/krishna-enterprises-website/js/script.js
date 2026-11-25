function raf(f){var t=0;return function(){if(!t){t=1;requestAnimationFrame(function(){t=0;f()})}}}
var nav=document.getElementById('nav'),m=document.getElementById('menu');
var dks=[].slice.call(document.querySelectorAll('.hero,.why,.mq,footer'));
function sc(){var y=nav.offsetTop+nav.offsetHeight/2,d=dks.some(function(e){var r=e.getBoundingClientRect();return r.top<=y&&r.bottom>=y});nav.classList.toggle('dk',d)}addEventListener('scroll',raf(sc),{passive:true});sc();
document.getElementById('bg').onclick=function(){m.classList.add('on')};
document.getElementById('x').onclick=function(){m.classList.remove('on')};
m.querySelectorAll('a').forEach(function(a){a.onclick=function(){m.classList.remove('on')}});
var io=new IntersectionObserver(function(e){e.forEach(function(x){var t=x.target;if(x.intersectionRatio>=.12){t.classList.add('in')}else if(!x.isIntersecting){t.classList.remove('in');t.classList.toggle('u',x.boundingClientRect.top<0)}})},{threshold:[0,.12]});
document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
function wa(id,title,fields){var f=document.getElementById(id);f.addEventListener('submit',function(ev){ev.preventDefault();
var ln='\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500',t='*NEW '+title.toUpperCase()+'*\nKrishna Enterprises website\n'+ln+'\n';
fields.forEach(function(q){var v=document.getElementById(q[0]).value.trim();if(v)t+='*'+q[1]+':* '+v+'\n'});
t+=ln+'\nReceived: '+new Date().toLocaleString('en-IN',{dateStyle:'medium',timeStyle:'short'});
window.open('https://wa.me/919425681719?text='+encodeURIComponent(t),'_blank','noopener');
var o=f.querySelector('.ok');if(!o){o=document.createElement('p');o.className='ok';f.appendChild(o)}o.textContent='WhatsApp has opened with your details. Tap Send there to complete your request.';o.style.display='block'});}
document.querySelectorAll('.bc').forEach(function(e){e.addEventListener('pointermove',function(ev){var r=e.getBoundingClientRect();e.style.setProperty('--mx',ev.clientX-r.left+'px');e.style.setProperty('--my',ev.clientY-r.top+'px')})});
(function(){var ks=[].slice.call(document.querySelectorAll('.rk')),n=ks.length,a=0,t,shown=0,st=document.getElementById('stage'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
function lay(){ks.forEach(function(k,i){var d=i-a;if(d>n/2)d-=n;if(d<-n/2)d+=n;var ab=Math.abs(d),hid=i>=shown,off=hid||ab>2;k.style.setProperty('--d',d);k.style.setProperty('--y',(hid?110:d===0?-26:ab*12)+'px');k.classList.toggle('on',d===0&&!hid);k.classList.toggle('hid',off);k.style.zIndex=10-ab;k.setAttribute('aria-hidden',d!==0)})}
function go(x){if(shown<n)return;a=(a+x+n)%n;lay()}
function auto(){clearInterval(t);if(!rm)t=setInterval(function(){go(1)},3200)}
ks.forEach(function(k,i){k.onclick=function(){if(shown<n)return;a=i;lay();auto()}});
document.getElementById('rn').onclick=function(){go(1);auto()};document.getElementById('rp').onclick=function(){go(-1);auto()};
st.onmouseenter=function(){clearInterval(t)};st.onmouseleave=function(){if(shown>=n)auto()};
var sx=0;st.addEventListener('pointerdown',function(e){sx=e.clientX});st.addEventListener('pointerup',function(e){var d=e.clientX-sx;if(Math.abs(d)>45){go(d<0?1:-1);auto()}});
lay();
function reveal(){if(rm){shown=n;lay();return}var iv=setInterval(function(){shown++;lay();if(shown>=n){clearInterval(iv);auto()}},550)}
new IntersectionObserver(function(e,o){if(e[0].isIntersecting){o.disconnect();reveal()}},{threshold:.35}).observe(st)})();
(function(){var ps=[].slice.call(document.querySelectorAll('.ap'));function on(p){ps.forEach(function(e){e.classList.toggle('on',e===p)})}
ps.forEach(function(p){p.addEventListener('mouseenter',function(){on(p)});p.addEventListener('focus',function(){on(p)});p.addEventListener('click',function(){on(p)})})})();
(function(){var s=document.getElementById('journey'),pn=document.getElementById('jpn'),cs=[].slice.call(s.querySelectorAll('.jc')),ct=[].slice.call(s.querySelectorAll('.jct')),sl=[].slice.call(s.querySelectorAll('.jsl')),cur=-1;
function nx(i){var a=sl[i].getBoundingClientRect(),b=pn.getBoundingClientRect();pn.style.setProperty('--nx',(a.left+a.width/2-b.left)+'px')}
function up(){var r=s.getBoundingClientRect(),tot=r.height-innerHeight,p=Math.min(1,Math.max(0,-r.top/tot)),st=p<.1?0:p<.38?1:p<.66?2:3;if(st===cur)return;cur=st;
cs.forEach(function(c,i){c.classList.toggle('in',i<st)});var a=Math.max(st,1)-1;ct.forEach(function(c,i){c.classList.toggle('on',i===a)});pn.className='jpanel'+(a?' p'+a:'');s.classList.toggle('s3',st===3);nx(a)}
addEventListener('scroll',raf(up),{passive:true});addEventListener('resize',function(){cur=-1;up()});up()})();
(function(){var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
setTimeout(function(){document.body.classList.add('go')},rm?0:120);
var c=document.getElementById('hbg'),x=c.getContext('2d'),hero=c.parentNode,W,H,t=0,vis=true;
var S=.6;function rs(){W=hero.offsetWidth+120;H=hero.offsetHeight+120;S=innerWidth<700?.45:.6;c.width=Math.round(W*S);c.height=Math.round(H*S);c.style.width=W+'px';c.style.height=H+'px'}
rs();addEventListener('resize',rs);
function draw(){x.setTransform(S,0,0,S,0,0);x.clearRect(0,0,W,H);x.save();x.translate(W/2,H/2);x.rotate(-.12);x.translate(-W/2,-H/2);x.globalCompositeOperation='lighter';
function G(rgb,a,m){var g=x.createLinearGradient(0,0,W,0);[[0,0],[.22,.35],[.5,1],[.8,.85],[1,.15]].forEach(function(p){g.addColorStop(p[0],'rgba('+rgb+','+(a*p[1]*m).toFixed(3)+')')});return g}
function cv(off,ph,dy){var p=[],i,u;for(i=-60;i<=W+60;i+=14){u=i/W;p.push([i,H*.64+off+dy+Math.sin(u*Math.PI*1.2+t*.22+ph)*H*.05+Math.sin(u*Math.PI*2.6-t*.15+ph*2)*H*.015])}x.beginPath();x.moveTo(p[0][0],p[0][1]);for(i=1;i<p.length-1;i++)x.quadraticCurveTo(p[i][0],p[i][1],(p[i][0]+p[i+1][0])/2,(p[i][1]+p[i+1][1])/2);x.lineTo(p[p.length-1][0],p[p.length-1][1])}
function rib(off,ph,body,core,m){[[190,.07,60],[96,.11,30],[40,.2,14]].forEach(function(L){cv(off,ph,L[2]);x.lineWidth=L[0];x.lineCap='round';x.strokeStyle=G(body,L[1],m);x.stroke()});cv(off,ph,0);x.lineWidth=3.5;x.lineJoin='round';x.strokeStyle=G(core,.85,m);x.stroke()}
rib(0,0,'95,65,235','205,185,255',1);
rib(-H*.05,1.7,'80,55,215','190,170,255',.45);
rib(H*.14,3.1,'55,85,235','110,150,255',.7);
rib(H*.2,4.4,'150,40,90','235,70,95',.5);
x.restore();
[[.9,.95,520,'50,35,190',.17],[.86,.08,420,'90,60,210',.06],[.06,.95,420,'60,35,170',.09]].forEach(function(q){var cx=W*q[0],cy=H*q[1],r=x.createRadialGradient(cx,cy,0,cx,cy,q[2]);r.addColorStop(0,'rgba('+q[3]+','+q[4]+')');r.addColorStop(1,'rgba('+q[3]+',0)');x.fillStyle=r;x.fillRect(cx-q[2],cy-q[2],q[2]*2,q[2]*2)})}
var lt=0;function loop(ts){if(vis&&ts-lt>33){lt=ts;t+=.033;draw()}requestAnimationFrame(loop)}
draw();if(!rm)requestAnimationFrame(loop);
new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(hero);
var sp=document.getElementById('sp');addEventListener('scroll',raf(function(){var m=document.documentElement.scrollHeight-innerHeight;sp.style.transform='scaleX('+(m>0?scrollY/m:0)+')'}),{passive:true});
var io2=new IntersectionObserver(function(e){e.forEach(function(x){var t=x.target;if(x.intersectionRatio>=.12){t.classList.add('in')}else if(!x.isIntersecting){t.classList.remove('in');t.classList.toggle('u',x.boundingClientRect.top<0)}})},{threshold:[0,.12]});
document.querySelectorAll('.bc,.formcard,.tl li,footer .g>div,.jp').forEach(function(el){if(!el.classList.contains('rv')){el.classList.add('rv');var i=[].indexOf.call(el.parentNode.children,el);el.style.transitionDelay=(i*.1)+'s'}io2.observe(el)})})();
(function(){var nv=document.getElementById('nav'),L=nv.querySelector('.links'),gh=L.querySelector('.gh'),as=[].slice.call(L.querySelectorAll('a'));
as.forEach(function(a){a.setAttribute('data-t',a.textContent)});
function on(a){gh.style.left=a.offsetLeft+'px';gh.style.width=a.offsetWidth+'px';gh.style.opacity=1;as.forEach(function(x){x.classList.toggle('hv',x===a)})}
function off(){gh.style.opacity=0;as.forEach(function(x){x.classList.remove('hv')})}
as.forEach(function(a){a.addEventListener('mouseenter',function(){on(a)});a.addEventListener('mousemove',function(e){gh.style.setProperty('--hx',(e.clientX-L.getBoundingClientRect().left-a.offsetLeft)+'px')});a.addEventListener('focus',function(){on(a)});a.addEventListener('blur',off)});
L.addEventListener('mouseleave',off);nv.addEventListener('pointermove',function(e){nv.style.setProperty('--gx',(e.clientX-nv.getBoundingClientRect().left)+'px')})})();
(function(){var g=document.getElementById('f1'),hero=document.getElementById('top');if(!g||!hero)return;
function u(){var r=hero.getBoundingClientRect(),p=Math.min(1,Math.max(0,-r.top/Math.max(1,r.height)));g.style.setProperty('--lp',p.toFixed(3));if(r.bottom<0)g.setAttribute('data-off','');else g.removeAttribute('data-off')}
addEventListener('scroll',raf(u),{passive:true});u()})();
(function(){var g=document.querySelector('.ghost');if(!g)return;var o=g.querySelector('.gh2'),pts=[],last=null,raf=0,R=46,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
function eo(x){return 1-Math.pow(1-x,3)}
function rad(a){if(rm)return a<500?R:0;if(a<180)return R*eo(a/180);if(a<500)return R;if(a<750){var q=(a-500)/250;return R*(1-q*q*q)}return 0}
function paint(){var now=performance.now(),s=[],i,p,r;pts=pts.filter(function(p){return now-p.t<750});
for(i=pts.length-1;i>=0;i--){p=pts[i];r=rad(now-p.t);if(r>.5)s.push('radial-gradient(circle '+r.toFixed(1)+'px at '+p.x.toFixed(1)+'px '+p.y.toFixed(1)+'px,#000 0,#000 78%,transparent 100%)')}
var m=s.length?s.join(','):'linear-gradient(transparent,transparent)';o.style.webkitMaskImage=m;o.style.maskImage=m;raf=pts.length?requestAnimationFrame(paint):0}
function add(x,y){var now=performance.now();if(last){var dx=x-last.x,dy=y-last.y,d=Math.hypot(dx,dy),st=Math.max(8,R*.45);if(d<st)return;var n=Math.floor(d/st),k;for(k=1;k<=n;k++)pts.push({x:last.x+dx*k/n,y:last.y+dy*k/n,t:now})}else pts.push({x:x,y:y,t:now});last={x:x,y:y};if(pts.length>48)pts.splice(0,pts.length-48);if(!raf)raf=requestAnimationFrame(paint)}
function ev(e){var b=g.getBoundingClientRect();R=parseFloat(getComputedStyle(g).getPropertyValue('--gr'))||46;add(e.clientX-b.left,e.clientY-b.top)}
g.addEventListener('pointerenter',function(e){last=null;ev(e)});g.addEventListener('pointermove',ev);g.addEventListener('pointerdown',function(e){last=null;ev(e)});
g.addEventListener('pointerleave',function(){last=null})})();
(function(){var c=document.querySelector('.cta'),f=document.getElementById('contact');if(!c||!f)return;
new IntersectionObserver(function(e){c.classList.toggle('off',e[0].isIntersecting)},{rootMargin:'0px 0px -80px 0px'}).observe(f);
var hero=document.getElementById('top');function hs(){c.classList.toggle('hh',hero.getBoundingClientRect().bottom>innerHeight*.5)}
addEventListener('scroll',raf(hs),{passive:true});addEventListener('resize',hs);hs()})();
wa('f1','Service booking',[['s1','Service'],['n1','Name'],['p1','Mobile'],['a1','Area']]);
wa('f2','Appointment request',[['n2','Name'],['p2','Mobile'],['s2','Appliance'],['a2','Address'],['d2','Preferred time']]);
wa('f3','Complaint',[['n3','Name'],['p3','Mobile'],['r3','Reference'],['m3','Problem']]);
(function(){var ts=[].slice.call(document.querySelectorAll('.bt')),hi=document.getElementById('bhi'),i=0,t;
function set(n){i=n;ts.forEach(function(e,k){var on=k===n;e.classList.toggle('on',on);e.setAttribute('aria-pressed',on)});var s=ts[n].firstChild.src;if(hi.src!==s){hi.style.animation='none';hi.offsetWidth;hi.style.animation='';hi.src=s;hi.alt=ts[n].getAttribute('aria-label')}}
function go(){clearInterval(t);if(!matchMedia('(prefers-reduced-motion:reduce)').matches)t=setInterval(function(){set((i+1)%ts.length)},1800)}
ts.forEach(function(e,k){e.onclick=function(){set(k);go()};e.onmouseenter=function(){set(k);clearInterval(t)};e.onfocus=function(){set(k)}});document.getElementById('bg3').onmouseleave=go;set(0);go()})();

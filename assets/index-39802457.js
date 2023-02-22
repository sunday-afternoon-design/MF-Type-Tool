(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerpolicy&&(d.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?d.credentials="include":n.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(n){if(n.ep)return;n.ep=!0;const d=o(n);fetch(n.href,d)}})();var c=document.createElement("canvas"),N=c.getContext("2d");const U=document.getElementById("savepng");window.addEventListener("resize",function(){c.width=window.innerWidth*window.devicePixelRatio,c.height=window.innerHeight*window.devicePixelRatio});console.log(window.devicePixelRatio,2);navigator.mediaDevices.getDisplayMedia({preferCurrentTab:!0,video:!0,audio:!0}).then(function(e){var t=document.createElement("video");t.srcObject=e,t.onloadedmetadata=function(o){t.play()},U.onclick=function(){t.pause(),N.drawImage(t,0,0,c.width,c.height);var o=c.toDataURL("image/png",1),i=document.createElement("a");i.download="MF-assets.png",i.href=o,i.click(),t.play()},document.addEventListener("keydown",function(o){if(o.code==="KeyC"&&(o.ctrlKey||o.metaKey)){t.pause(),N.drawImage(t,0,0,c.width,c.height);var i=c.toDataURL("image/png",1),n=document.createElement("a");n.download="MF-assets.png",n.href=i,n.click(),t.play()}})}).catch(function(e){console.error("Error: "+e)});const K=document.getElementById("fontsizeslider"),R=document.getElementById("sizetextinput");function W(){R.value=K.value}function j(){K.value=R.value}K.addEventListener("input",W);R.addEventListener("input",j);const D=document.getElementById("fcolorInput"),A=document.getElementById("bgcolorInput"),V=document.getElementById("background"),X=document.body;function Y(){V.style.backgroundColor=A.value}function G(){X.style.color=D.value}D.addEventListener("input",G);A.addEventListener("input",Y);const p=document.getElementById("myStrengthRange"),f=document.getElementById("slanttextinput");p.addEventListener("input",function(){f.value=p.value});f.addEventListener("input",function(){p.value=f.value});const y=document.getElementById("myStrengthRangeweight"),h=document.getElementById("fieldsizetextinput");y.addEventListener("input",function(){h.value=y.value});h.addEventListener("input",function(){y.value=h.value});const v=document.getElementById("rangea"),E=document.getElementById("wAinput");v.addEventListener("input",function(){E.value=v.value});E.addEventListener("input",function(){v.value=E.value});const w=document.getElementById("rangeb"),I=document.getElementById("wBinput");w.addEventListener("input",function(){I.value=w.value});I.addEventListener("input",function(){w.value=I.value});const F=document.getElementById("swithcer");document.addEventListener("keydown",e=>{e.code==="KeyM"&&(F.checked=!F.checked)});let m,l,r,B=[];const a=document.getElementById("mftest"),L=document.getElementById("swithcer");let J=document.getElementById("randomlogo"),x=document.getElementById("hidepanel"),b=Math.random()*1500,M=Math.random()*900+100,P=Math.random()*1500,T=Math.random()*900+100,g,k;const S=document.getElementById("pointx"),z=document.getElementById("pointy"),H=document.getElementById("myStrengthRangeweight"),Q=document.getElementById("fontsizeslider"),Z=document.getElementById("myStrengthRange"),_=document.getElementById("rangea"),ee=document.getElementById("rangeb");let O=document.getElementById("editpointer");function te(){m=document.getElementById("textarea").value,l=m.split("");for(let e=0;e<l.length;e++){let t=document.createElement("span");t.classList.add("ics"),t.innerHTML=l[e],B.push(t),a.append(B[e])}}te();const q=()=>{if(r=l.length,m=document.getElementById("textarea").value,l=m.split(""),g>300?document.body.style.cursor="none":document.body.style.cursor="auto",r!=l.length){if(r<l.length){let e=document.createElement("span");e.innerHTML=m[r],e.classList.add("icsplus"),B.push(e),a.append(e)}if(r>l.length){let e=r-l.length;for(let t=0;t<e;t++)a.children[0].remove(),e--}}L.checked?(b=g,M=k,S.value=g,z.value=k,O.classList.add("hidden")):(b=S.value,M=z.value,O.classList.remove("hidden")),s?(x.value="Show the edit panel",C.classList.add("hidden")):(x.value="Hide the edit panel",C.classList.remove("hidden")),ne(),window.requestAnimationFrame(q)};function ne(){for(let e=0;e<l.length;e++){a.childNodes[e].innerHTML=l[e];let t=$(a.childNodes[e]).left,o=$(a.childNodes[e]).top,i=t-b,n=M-o,d=i/160*45*n/160,u=(1-Math.abs(i/window.innerWidth)*H.value+1-Math.abs(n/window.innerHeight)*H.value)*900;u=oe(u,_.value,ee.value),a.childNodes[e].style.setProperty("--slant",d*Z.value),a.childNodes[e].style.setProperty("--weight",u),a.childNodes[e].style.fontSize=Q.value+"px"}}function $(e){const t=e.getBoundingClientRect();return{left:t.left,top:t.top}}function oe(e,t,o){return e>o?o:e<t?t:e}document.addEventListener("mousemove",e=>{g=e.clientX,k=e.clientY});J.onclick=function(){console.log("randomlogo"),P=Math.random()*1500,T=Math.random()*900+100,S.value=Math.floor(P),z.value=Math.floor(T)};let s=!1,C=document.getElementById("editpanel");x.onclick=function(){console.log("hidepanel"),s=!s};document.addEventListener("keydown",function(e){e.code==="KeyV"&&(e.ctrlKey||e.metaKey)&&(s=!s,console.log(s))});document.addEventListener("keydown",function(e){e.code==="KeyB"&&(e.ctrlKey||e.metaKey)&&(L.checked=!L.checked)});q();

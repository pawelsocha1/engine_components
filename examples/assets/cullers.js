import{B as c,k as i,M as l}from"./web-ifc-api-z0lP7pyY.js";import{S as m}from"./stats.min-GTpOrGrX.js";import{p,C as u,i as y,n as b,k as g,a as f,T as w}from"./index-CDtayhLQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";const h=document.getElementById("container"),t=new p,x=t.get(u),e=x.create();e.scene=new y(t);e.renderer=new b(t,h);e.camera=new g(t);t.init();e.camera.controls.setLookAt(13,13,13,0,0,0);e.scene.setup();const M=t.get(f);M.create(e);e.scene.three.background=null;const k=t.get(w),o=k.create(e);o.threshold=200;o.renderDebugFrame=!0;const s=o.renderer.domElement;document.body.appendChild(s);s.style.position="fixed";s.style.left="0";s.style.bottom="0";s.style.visibility="collapse";const B=new c(2,2,2),C=new i({color:"#6528D7"});function d(a){return Math.random()*a}function U(){for(let a=0;a<300;a++){const n=new l(B,C);n.position.x=d(10),n.position.y=d(10),n.position.z=d(10),n.updateMatrix(),e.scene.three.add(n),o.add(n)}}U();o.needsUpdate=!0;e.camera.controls.addEventListener("controlend",()=>{o.needsUpdate=!0});const r=new m;r.showPanel(2);document.body.append(r.dom);r.dom.style.left="0px";r.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>r.begin());e.renderer.onAfterUpdate.add(()=>r.end());

import{q as i,S as p}from"./web-ifc-api-5J0YW9AE.js";import{p as l,C as h,s as m,k as f,d as g,h as u,T as w}from"./index-CAlyvYyy.js";import{S as y}from"./stats.min-BpIepu9J.js";import{U,E as b}from"./index-DLr66vFn.js";const d=document.getElementById("container"),t=new l,E=t.get(h),e=E.create();e.scene=new m(t);e.renderer=new U(t,d);e.camera=new f(t);t.init();e.scene.setup();e.camera.controls.setLookAt(5,5,5,0,0,0);d.appendChild(e.renderer.three2D.domElement);const S=t.get(g);S.create(e);e.scene.three.background=null;const k=t.get(u),v=await fetch("https://thatopen.github.io/engine_components/resources/road.frag"),A=await v.arrayBuffer(),B=new Uint8Array(A),r=await k.load(B);e.scene.three.add(r);const C=await fetch("https://thatopen.github.io/engine_components/resources/road.json");r.setLocalProperties(await C.json());const a=t.get(b);a.world=e;a.draw(r);const I=t.get(w),s=I.create(e);s.threshold=10;for(const o of r.children)o instanceof i&&s.add(o);s.needsUpdate=!0;e.camera.controls.addEventListener("sleep",()=>{s.needsUpdate=!0});const c=new p(void 0,20);a.onHighlight.add(({point:o})=>{c.center.copy(o),e.camera.controls.fitToSphere(c,!0)});const n=new y;n.showPanel(2);document.body.append(n.dom);n.dom.style.left="0px";n.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>n.begin());e.renderer.onAfterUpdate.add(()=>n.end());

import"./web-ifc-api-BN6RNDnz.js";import{p as s,C as a,s as r,i as c,H as d,d as i,h as m}from"./index-CS0wgiza.js";import{a as l}from"./index-inWJ6DfR.js";import{S as p}from"./stats.min-BpIepu9J.js";const f=document.getElementById("container"),t=new s,g=t.get(a),e=g.create();e.scene=new r(t);e.renderer=new c(t,f);e.camera=new d(t);t.init();e.camera.controls.setLookAt(12,6,8,0,0,-10);e.scene.setup();const h=t.get(i);h.create(e);e.scene.three.background=null;const u=new m(t),w=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),y=await w.arrayBuffer(),b=new Uint8Array(y),S=u.load(b);e.scene.three.add(S);const o=t.get(l);o.setup({world:e});o.zoomToSelection=!0;const n=new p;n.showPanel(2);document.body.append(n.dom);n.dom.style.left="0px";n.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>n.begin());e.renderer.onAfterUpdate.add(()=>n.end());

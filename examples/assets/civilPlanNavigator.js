import"./web-ifc-api-z0lP7pyY.js";import{p as h,C as g,i as f,o as w,a as u,u as v}from"./index-CDtayhLQ.js";import{p as y}from"./index-DyM33b1I.js";import{Z as C,C as b,a as A}from"./index-D3pLdVAu.js";import{S as B}from"./stats.min-GTpOrGrX.js";import{R as S}from"./renderer-with-2d-ChbkiKqX.js";import"./import-wrapper-prod-QYycmO-A.js";import"./index-BhKBO6Dw.js";import"./mark-C_hqAPZ-.js";import"./Line2-CLLb6Jgt.js";import"./index-DVRunJPb.js";import"./_commonjsHelpers-Cpj98o6Y.js";y.init();C.init();const m=document.getElementById("container"),t=new h,D=t.get(g),e=D.create();e.scene=new f(t);e.renderer=new S(t,m);e.camera=new w(t);t.init();e.scene.setup();e.camera.controls.setLookAt(5,5,5,0,0,0);m.appendChild(e.renderer.three2D.domElement);const E=t.get(u);E.create(e);const P=t.get(v),x=await fetch("https://thatopen.github.io/engine_components/resources/road.frag"),N=await x.arrayBuffer(),U=new Uint8Array(N),i=P.load(U);e.scene.three.add(i);const r=new b(t);r.world=e;r.draw(i);r.highlighter.hoverCurve.material.color.set(1,1,1);const{material:a}=r.highlighter.hoverPoints;if(Array.isArray(a)){const o=a[0];"color"in o&&o.color.set(1,1,1)}else"color"in a&&a.color.set(1,1,1);const s=document.getElementById("scene-2d"),c=new A(t);s.components=t;if(!s.world)throw new Error("World not found!");c.world=s.world;await c.draw(i);c.onHighlight.add(({mesh:o})=>{r.highlighter.select(o);const p=o.curve.index,d=o.curve.alignment.absolute[p];d.mesh.geometry.computeBoundingSphere();const l=d.mesh.geometry.boundingSphere;l&&e.camera.controls.fitToSphere(l,!0)});const n=new B;n.showPanel(2);document.body.append(n.dom);n.dom.style.left="0px";e.renderer.onBeforeUpdate.add(()=>n.begin());e.renderer.onAfterUpdate.add(()=>n.end());

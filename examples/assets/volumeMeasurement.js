var O=Object.defineProperty;var z=(i,m,e)=>m in i?O(i,m,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[m]=e;var h=(i,m,e)=>(z(i,typeof m!="symbol"?m+"":m,e),e);import{M as A,a as E,I as F,V}from"./web-ifc-api-z0lP7pyY.js";import{S}from"./stats.min-GTpOrGrX.js";import{J as B,D as I,H,u as L,O as P,p as T,C as W,i as j,k as K,a as U}from"./index-CDtayhLQ.js";import"./import-wrapper-prod-QYycmO-A.js";import{P as _}from"./index-B7ETzHmE.js";import{M as R}from"./mark-C_hqAPZ-.js";import{n as G}from"./dimension-mark-BiAWnjiH.js";import{H as J}from"./index-Bq71trb4.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./renderer-with-2d-ChbkiKqX.js";const b=class b extends B{constructor(e){super(e);h(this,"label",null);h(this,"world");h(this,"onVolumeFound",new I);h(this,"_enabled",!1);h(this,"onDisposed",new I);h(this,"create",()=>{if(!this.enabled)return;if(!this.world)throw new Error("World is needed for Volume Measurement!");const t=this.components.get(H).get(this.world).castRay();if(!t||!t.object)return;const{object:r}=t;if(r instanceof A){const a=this.getVolumeOfMesh(r);this.onVolumeFound.trigger(a)}});h(this,"onMouseMove",()=>{});h(this,"onKeydown",e=>{});this.components.add(b.uuid,this)}set enabled(e){this._enabled=e,this.setupEvents(e),e||this.cancelCreation()}get enabled(){return this._enabled}async dispose(){var e;this.setupEvents(!1),(e=this.label)==null||e.dispose(),this.onDisposed.trigger(),this.onDisposed.reset(),this.components=null}delete(){}async deleteAll(){}endCreation(){}cancelCreation(){}get(){}getVolumeFromFragments(e){const n=this.components.get(L),t=new E,r=[];for(const a in e){const s=n.list.get(a);if(!s)continue;const o=e[a];let c=0;for(const w of o){const u=s.getInstancesIDs(w);u&&(c+=u.size)}const g=new F(s.mesh.geometry,void 0,c);let l=0;for(const w of o){const u=s.getInstancesIDs(w);if(u)for(const y of u)s.mesh.getMatrixAt(y,t),g.setMatrixAt(l++,t)}r.push(g)}return this.getVolumeFromMeshes(r)}getVolumeFromMeshes(e){if(!this.world)throw new Error("World is needed for Volume Measurement!");this.label||(this.label=this.newLabel(),this.label.three.removeFromParent());let n=0;for(const c of e)n+=this.getVolumeOfMesh(c);const t=this.world.scene.three,r=this.label.three;t.add(r);const a=this.components.get(P);for(const c of e)c.geometry.computeBoundingSphere(),a.addMesh(c);const s=a.getSphere();a.reset(),r.position.copy(s.center);const o=Math.trunc(n*100)/100;return r.element.textContent=o.toString(),n}newLabel(){if(!this.world)throw new Error("World is needed for Volume Measurement!");const e=G();return new R(this.world,e)}setupEvents(e){if(!this.world)throw new Error("The volume measurement needs a world to work!");if(this.world.isDisposing)return;if(!this.world.renderer)throw new Error("The world of the volume measurement needs a renderer!");const t=this.world.renderer.three.domElement.parentElement;e?(t.addEventListener("click",this.create),t.addEventListener("mousemove",this.onMouseMove),window.addEventListener("keydown",this.onKeydown)):(t.removeEventListener("click",this.create),t.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("keydown",this.onKeydown))}getVolumeOfMesh(e){let n=0;const t=new V,r=new V,a=new V,{index:s}=e.geometry,o=e.geometry.attributes.position.array;if(!s)return console.warn("Geometry must be indexed to compute its volume!"),0;const c=[];if(e instanceof F)for(let l=0;l<e.count;l++){const w=new E;e.getMatrixAt(l,w),c.push(w)}else c.push(new E().identity());const{matrixWorld:g}=e;for(let l=0;l<s.array.length-2;l+=3)for(const w of c){const u=w.multiply(g),y=s.array[l]*3,M=s.array[l+1]*3,x=s.array[l+2]*3;t.set(o[y],o[y+1],o[y+2]).applyMatrix4(u),r.set(o[M],o[M+1],o[M+2]).applyMatrix4(u),a.set(o[x],o[x+1],o[x+2]).applyMatrix4(u),n+=this.getSignedVolumeOfTriangle(t,r,a)}return Math.abs(n)}getSignedVolumeOfTriangle(e,n,t){const r=t.x*n.y*e.z,a=n.x*t.y*e.z,s=t.x*e.y*n.z,o=e.x*t.y*n.z,c=n.x*e.y*t.z,g=e.x*n.y*t.z;return 1/6*(-r+a+s-o-c+g)}};h(b,"uuid","811da532-7af3-4635-b592-1c06ae494af5");let k=b;const D=document.getElementById("container"),f=new T,q=f.get(W),d=q.create();d.scene=new j(f);d.renderer=new _(f,D);d.camera=new K(f);f.init();d.camera.controls.setLookAt(5,5,5,0,0,0);d.scene.setup();const N=f.get(U);N.create(d);const p=new k(f);p.world=d;p.enabled=!0;const Q=new L(f),X=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),Y=await X.arrayBuffer(),Z=new Uint8Array(Y),$=Q.load(Z);d.scene.three.add($);const C=new J(f);C.setup({world:d});C.events.select.onHighlight.add(i=>{const m=p.getVolumeFromFragments(i);console.log(m)});C.events.select.onClear.add(()=>{var i;(i=p.label)==null||i.three.removeFromParent()});D.ondblclick=()=>p.create();D.oncontextmenu=()=>p.endCreation();window.onkeydown=i=>{i.code==="Delete"||i.code};const v=new S;v.showPanel(2);document.body.append(v.dom);v.dom.style.left="0px";d.renderer.onBeforeUpdate.add(()=>v.begin());d.renderer.onAfterUpdate.add(()=>v.end());

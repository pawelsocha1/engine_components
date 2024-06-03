import{B as h,b as w,M as c,d as s,L as d}from"./web-ifc-api-z0lP7pyY.js";import{S as M}from"./stats.min-GTpOrGrX.js";import{p as g,a as x,m as f}from"./index-DyM33b1I.js";import{p as y,C as k,i as P,k as v,a as C,H as B,A as $}from"./index-CDtayhLQ.js";import{C as E,E as I}from"./index-DhQCkLlE.js";import{P as D}from"./index-B7ETzHmE.js";import"./import-wrapper-prod-QYycmO-A.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./renderer-with-2d-ChbkiKqX.js";const p=document.getElementById("container"),a=new y,A=a.get(k),e=A.create();e.scene=new P(a);e.renderer=new D(a,p);e.camera=new v(a);e.renderer.postproduction.enabled=!0;e.renderer.postproduction.customEffects.outlineEnabled=!0;a.init();e.camera.controls.setLookAt(12,6,8,0,0,-10);e.scene.setup();const b=a.get(C);b.config.color.setHex(6710886);const L=b.create(e);e.renderer.postproduction.customEffects.excludedMeshes.push(L.three);const m=new h(3,3,3),u=new w({color:"#6528D7"}),n=new c(m,u);n.position.set(-2,1.5,0);e.scene.three.add(n);e.meshes.add(n);const l=new c(m,u);l.position.set(2,1.5,0);e.scene.three.add(l);e.meshes.add(l);const S=a.get(B);S.get(e);const o=a.get($);o.enabled=!0;const r=a.get(E);o.Type=I;const z=new s({color:"lightblue",side:2}),H=new d({color:"blue"}),O=new s({color:"blue",opacity:.5,side:2,transparent:!0});r.styles.create("Red lines",new Set([n]),e,H,z,O);const R=new s({color:"salmon",side:2}),F=new d({color:"red"}),G=new s({color:"red",opacity:.5,side:2,transparent:!0});r.styles.create("Blue lines",new Set([l]),e,F,R,G);p.ondblclick=()=>o.create(e);window.onkeydown=t=>{(t.code==="Delete"||t.code==="Backspace")&&o.delete(e)};const i=new M;i.showPanel(2);document.body.append(i.dom);i.dom.style.left="0px";e.renderer.onBeforeUpdate.add(()=>i.begin());e.renderer.onAfterUpdate.add(()=>i.end());g.init();const T=x.create(()=>f`
    <bim-panel label="Clipper Tutorial" style="position: fixed; top: 5px; right: 5px" active>
          <bim-panel-section fixed label="Commands" >
      
        <bim-label label="Double click: Create clipping plane"></bim-label>
        <bim-label label="Delete key: Delete clipping plane"></bim-label>
       
        
      </bim-panel-section>
      <bim-panel-section fixed label="Others" >
          
        <bim-checkbox label="Clipper enabled" checked 
          @change="${({target:t})=>{o.enabled=t.value,r.visible=t.value}}">
        </bim-checkbox>
        
        <bim-checkbox label="Clipper visible" checked 
          @change="${({target:t})=>{o.visible=t.value}}">
        </bim-checkbox>   
      
        <bim-color-input 
          label="Planes Color" color="#202932" 
          @input="${({target:t})=>{o.material.color.set(t.color)}}">
        </bim-color-input>
        
        <bim-number-input 
          slider step="0.01" label="Planes opacity" value="0.2" min="0.1" max="1"
          @change="${({target:t})=>{o.material.opacity=t.value}}">
        </bim-number-input>
        
        <bim-number-input 
          slider step="0.1" label="Planes size" value="5" min="2" max="10"
          @change="${({target:t})=>{o.size=t.value}}">
        </bim-number-input>
        
        <bim-button 
          label="Delete all" 
          @click="${()=>{o.deleteAll()}}">  
        </bim-button>        
        
        <bim-button 
          label="Rotate cubes" 
          @click="${()=>{n.rotation.x=2*Math.PI*Math.random(),n.rotation.y=2*Math.PI*Math.random(),n.rotation.z=2*Math.PI*Math.random(),n.updateMatrixWorld(),l.rotation.x=2*Math.PI*Math.random(),l.rotation.y=2*Math.PI*Math.random(),l.rotation.z=2*Math.PI*Math.random(),l.updateMatrixWorld(),r.update(!0)}}">  
        </bim-button>
       
        
      </bim-panel-section>
    </bim-panel>
    `);document.body.append(T);

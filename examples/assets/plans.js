import{b as w,L as A,C as S}from"./web-ifc-api-BN6RNDnz.js";import{p as L,C as F,s as B,n as P,d as x,h as D,T as M,A as T}from"./index-CS0wgiza.js";import{S as U,A as G,a as O,m as W}from"./index-inWJ6DfR.js";import{m as R,t as p,a as u}from"./index-tywNknxv.js";import{S as _}from"./stats.min-BpIepu9J.js";const $=document.getElementById("container"),n=new L,j=n.get(F),e=j.create();e.scene=new B(n);e.renderer=new U(n,$);e.camera=new P(n);e.camera._aaaaa="heyyyy";e.renderer.postproduction.enabled=!0;e.renderer.postproduction.customEffects.outlineEnabled=!0;n.init();e.camera.controls.setLookAt(12,6,8,0,0,-10);e.scene.setup();const y=n.get(x);y.config.color.setHex(6710886);const k=y.create(e);k.three.position.y-=1;e.renderer.postproduction.customEffects.excludedMeshes.push(k.three);e.scene.three.background=null;const f=n.get(D),v=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),N=await v.arrayBuffer(),q=new Uint8Array(N),s=f.load(q);e.scene.three.add(s);const z=await fetch("https://thatopen.github.io/engine_components/resources/small.json"),H=await z.json();s.setLocalProperties(H);const c=new _;c.showPanel(2);document.body.append(c.dom);c.dom.style.left="0px";c.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>c.begin());e.renderer.onAfterUpdate.add(()=>c.end());const i=n.get(G);i.world=e;await i.generate(s);const l=n.get(O);l.setup({world:e});const V=n.get(M),h=V.create(e);for(const t of s.items)h.add(t.mesh);h.needsUpdate=!0;e.camera.controls.addEventListener("sleep",()=>{h.needsUpdate=!0});const r=n.get(T),a=n.get(W);r.byModel(s.uuid,s);r.byEntity(s);const C=r.find({models:[s.uuid]}),g=r.find({entities:["IFCWALLSTANDARDCASE","IFCWALL"]}),b=r.find({entities:["IFCDOOR","IFCWINDOW","IFCPLATE","IFCMEMBER"]}),J=new w({color:"gray",side:2}),K=new A({color:"black"}),Q=new w({color:"black",opacity:.5,side:2,transparent:!0});a.styles.create("thick",new Set,e,K,J,Q);for(const t in g){const o=f.list.get(t);if(!o)continue;const{mesh:d}=o;a.styles.list.thick.fragments[t]=new Set(g[t]),a.styles.list.thick.meshes.add(d)}a.styles.create("thin",new Set,e);for(const t in b){const o=f.list.get(t);if(!o)continue;const{mesh:d}=o;a.styles.list.thin.fragments[t]=new Set(b[t]),a.styles.list.thin.meshes.add(d)}await a.update(!0);R.init();const E=p.create(()=>u`
  <bim-panel active label="Plans Tutorial" class="options-menu">
      <bim-panel-section collapsed name="floorPlans" label="Plan list">
      </bim-panel-section>
    </bim-panel>
    `);document.body.append(E);const X=e.renderer.postproduction.customEffects.minGloss,m=new S("white"),I=E.querySelector("bim-panel-section[name='floorPlans']");for(const t of i.list){const o=p.create(()=>u`
      <bim-button checked label="${t.name}"
        @click="${()=>{e.renderer.postproduction.customEffects.minGloss=.1,l.backupColor=m,r.setColor(C,m),e.scene.three.background=m,i.goTo(t.id)}}">
      </bim-button>
    `);I.append(o)}const Y=e.scene.three.background,Z=p.create(()=>u`
      <bim-button checked label="Exit"
        @click="${()=>{l.backupColor=null,l.clear(),e.renderer.postproduction.customEffects.minGloss=X,r.resetColor(C),e.scene.three.background=Y,i.exitPlanView()}}">
      </bim-button>
    `);I.append(Z);

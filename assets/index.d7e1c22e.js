import{r as W,o as h,c as L,d as J,a as R,b as y,e as S,f as e,w as a,v as r,u as _,i as g,g as z,p as B,h as M,j as f,k as A,F as H,l as O,m as G,n as D,q as Q,t as X,s as Y,x as Z,y as ee,z as te,A as oe}from"./vendor.8a354233.js";const le=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))t(d);new MutationObserver(d=>{for(const v of d)if(v.type==="childList")for(const o of v.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(d){const v={};return d.integrity&&(v.integrity=d.integrity),d.referrerpolicy&&(v.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?v.credentials="include":d.crossorigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function t(d){if(d.ep)return;d.ep=!0;const v=i(d);fetch(d.href,v)}};le();const ae={setup(n){return(s,i)=>{const t=W("router-view");return h(),L(t)}}},re="http://localhost:4000/api";var F={API_URL:re};const N=J("store",{state:()=>({allProduct:{},product:{},status:0}),actions:{async addProduct(n){await R.post(`${F.API_URL}/add`,n).then(s=>this.status=s.status).catch(s=>console.error(s))},async getAllProducts(n){await R.get(`${F.API_URL}/products?category=${n}`).then(s=>this.allProduct=s.data)},async updateProduct(n,s){await R.put(`${F.API_URL}/update?id=${n}`,s).then(i=>{this.status=i.status})},async deleteProduct(n,s){await R.delete(`${F.API_URL}/delete?category=${s}&id=${n}`).then(i=>{this.allProduct=i.data,this.status=i.status})},async getProductById(n,s){await R.get(`${F.API_URL}/find/?category=${s}&id=${n}`).then(i=>{this.product={},this.product=i.data})}}});var T=(n,s)=>{const i=n.__vccOpts||n;for(const[t,d]of s)i[t]=d;return i};const U=n=>(B("data-v-e3a6dafe"),n=n(),M(),n),se={class:"container"},ue=U(()=>e("h2",null,"Add Phone",-1)),ne=U(()=>e("label",{for:"name"},"Name",-1)),ie=U(()=>e("label",{for:"brand"},"Brand",-1)),de=U(()=>e("label",{for:"price"},"Price",-1)),pe=f(" $ "),_e=U(()=>e("label",{for:"img"},"Image",-1)),ce=["href"],me=U(()=>e("label",{for:"os"},"Operating System",-1)),ve=U(()=>e("label",{for:"storage"},"Storage",-1)),ye=f(" gigabytes "),ge=U(()=>e("label",{for:"memory"},"Memory",-1)),fe=f(" gigabytes "),be=U(()=>e("label",{for:"cpu"},"Processor",-1)),he=U(()=>e("label",{for:"front_cam"},"Front Camera",-1)),$e=f(" megapixels "),xe=U(()=>e("label",{for:"rear_cam"},"Rear Camera",-1)),Ue=f(" megapixels "),qe=U(()=>e("label",{for:"resolution"},"Resolution",-1)),Ve=f(" megapixels "),Pe=U(()=>e("input",{required:"",type:"submit",value:"Add"},null,-1)),ke={setup(n){const s=N();let i=y(""),t=y(""),d=y(),v=y(""),o=y(""),l=y(),b=y(null),V=y(),P=y(),k=y(),w=y();const C=async()=>{const I={category:"phone",general:{name:i.value,brand:t.value,price:d.value},image:v.value,keyspecs:{operating_system:o.value,storage:l.value,memory:b.value,processor:V.value,front_camera:P.value,rear_camera:k.value},resolution:w.value};await s.addProduct(I),j.replace("/")};return(I,c)=>(h(),S("div",se,[ue,e("form",{onSubmit:c[11]||(c[11]=z(p=>C(),["prevent"]))},[e("div",null,[ne,a(e("input",{required:"",type:"text",id:"name","onUpdate:modelValue":c[0]||(c[0]=p=>g(i)?i.value=p:i=p)},null,512),[[r,_(i)]])]),e("div",null,[ie,a(e("input",{required:"",type:"text",id:"brand","onUpdate:modelValue":c[1]||(c[1]=p=>g(t)?t.value=p:t=p)},null,512),[[r,_(t)]])]),e("div",null,[de,a(e("input",{required:"",type:"text",id:"price","onUpdate:modelValue":c[2]||(c[2]=p=>g(d)?d.value=p:d=p)},null,512),[[r,_(d)]]),pe]),e("div",null,[_e,a(e("input",{required:"",type:"text",id:"img","onUpdate:modelValue":c[3]||(c[3]=p=>g(v)?v.value=p:v=p)},null,512),[[r,_(v)]]),e("a",{href:_(v),target:"blank",class:"preview"},"Preview",8,ce)]),e("div",null,[me,a(e("input",{required:"",type:"text",id:"os","onUpdate:modelValue":c[4]||(c[4]=p=>g(o)?o.value=p:o=p)},null,512),[[r,_(o)]])]),e("div",null,[ve,a(e("input",{required:"",type:"text",id:"storage","onUpdate:modelValue":c[5]||(c[5]=p=>g(l)?l.value=p:l=p)},null,512),[[r,_(l)]]),ye]),e("div",null,[ge,a(e("input",{required:"",type:"number",id:"memory","onUpdate:modelValue":c[6]||(c[6]=p=>g(b)?b.value=p:b=p)},null,512),[[r,_(b)]]),fe]),e("div",null,[be,a(e("input",{required:"",type:"text",id:"cpu","onUpdate:modelValue":c[7]||(c[7]=p=>g(V)?V.value=p:V=p)},null,512),[[r,_(V)]])]),e("div",null,[he,a(e("input",{required:"",type:"text",id:"front_cam","onUpdate:modelValue":c[8]||(c[8]=p=>g(P)?P.value=p:P=p)},null,512),[[r,_(P)]]),$e]),e("div",null,[xe,a(e("input",{required:"",type:"text",id:"rear_cam","onUpdate:modelValue":c[9]||(c[9]=p=>g(k)?k.value=p:k=p)},null,512),[[r,_(k)]]),Ue]),e("div",null,[qe,a(e("input",{required:"",type:"text",id:"resolution","onUpdate:modelValue":c[10]||(c[10]=p=>g(w)?w.value=p:w=p)},null,512),[[r,_(w)]]),Ve]),Pe],32)]))}};var we=T(ke,[["__scopeId","data-v-e3a6dafe"]]);const $=n=>(B("data-v-5ebce4e0"),n=n(),M(),n),Se={class:"container"},Ae=$(()=>e("h2",null,"Add Laptop",-1)),Ie=$(()=>e("label",{for:"name"},"Name",-1)),Ce=$(()=>e("label",{for:"brand"},"Brand",-1)),Le=$(()=>e("label",{for:"price"},"Price",-1)),Te=f(" $ "),Re=$(()=>e("label",{for:"img"},"Image",-1)),Fe=["href"],Be=$(()=>e("label",{for:"size"},"Screen Size",-1)),Me=$(()=>e("label",{for:"resolution"},"Resolution",-1)),Ne=$(()=>e("label",{for:"cpu_model"},"Processor Model",-1)),ze=$(()=>e("label",{for:"cpu"},"Processor",-1)),Oe=$(()=>e("label",{for:"storage"},"Storage",-1)),De=$(()=>e("label",{for:"storageCap"},"Storage Capacity",-1)),He=f(" gigabytes "),Ge=$(()=>e("label",{for:"memory"},"Memory",-1)),Ee=$(()=>e("label",{for:"memory"},"Memory Capacity",-1)),je=f(" gigabytes "),Ke=$(()=>e("label",{for:"graphics_type"},"Graphics Type",-1)),We=$(()=>e("label",{for:"graphics"},"Graphics",-1)),Je=$(()=>e("input",{required:"",type:"submit",value:"Add"},null,-1)),Qe={setup(n){const s=N();let i=y(""),t=y(""),d=y(),v=y(""),o=y(),l=y(""),b=y(""),V=y(""),P=y(""),k=y(),w=y(""),C=y(),I=y(""),c=y();const p=async()=>{const K={category:"laptop",general:{name:i.value,brand:t.value,price:d.value},image:v.value,screen:{size:o.value,resolution:l.value},processor:{model:b.value,model_number:V.value},storage:{storageType:P.value,capacity:k.value},memory:{memoryType:w.value,capacity:C.value},graphics:{graphicsType:I.value,graphics:c.value}};await s.addProduct(K),j.push("/")};return(K,m)=>(h(),S("div",Se,[Ae,e("form",{onSubmit:m[14]||(m[14]=z(u=>p(),["prevent"]))},[e("div",null,[Ie,a(e("input",{required:"",type:"text",id:"name","onUpdate:modelValue":m[0]||(m[0]=u=>g(i)?i.value=u:i=u)},null,512),[[r,_(i)]])]),e("div",null,[Ce,a(e("input",{required:"",type:"text",id:"brand","onUpdate:modelValue":m[1]||(m[1]=u=>g(t)?t.value=u:t=u)},null,512),[[r,_(t)]])]),e("div",null,[Le,a(e("input",{required:"",type:"text",id:"price","onUpdate:modelValue":m[2]||(m[2]=u=>g(d)?d.value=u:d=u)},null,512),[[r,_(d)]]),Te]),e("div",null,[Re,a(e("input",{required:"",type:"text",id:"img","onUpdate:modelValue":m[3]||(m[3]=u=>g(v)?v.value=u:v=u)},null,512),[[r,_(v)]]),e("a",{href:_(v),target:"blank",class:"preview"},"Preview",8,Fe)]),e("div",null,[Be,a(e("input",{required:"",type:"text",id:"size","onUpdate:modelValue":m[4]||(m[4]=u=>g(o)?o.value=u:o=u)},null,512),[[r,_(o)]])]),e("div",null,[Me,a(e("input",{required:"",type:"text",id:"resolution","onUpdate:modelValue":m[5]||(m[5]=u=>g(l)?l.value=u:l=u)},null,512),[[r,_(l)]])]),e("div",null,[Ne,a(e("input",{required:"",type:"text",id:"cpu_model","onUpdate:modelValue":m[6]||(m[6]=u=>g(b)?b.value=u:b=u)},null,512),[[r,_(b)]])]),e("div",null,[ze,a(e("input",{required:"",type:"text",id:"cpu","onUpdate:modelValue":m[7]||(m[7]=u=>g(V)?V.value=u:V=u)},null,512),[[r,_(V)]])]),e("div",null,[Oe,a(e("input",{required:"",type:"text",id:"storage","onUpdate:modelValue":m[8]||(m[8]=u=>g(P)?P.value=u:P=u)},null,512),[[r,_(P)]])]),e("div",null,[De,a(e("input",{required:"",type:"text",id:"storageCap","onUpdate:modelValue":m[9]||(m[9]=u=>g(k)?k.value=u:k=u)},null,512),[[r,_(k)]]),He]),e("div",null,[Ge,a(e("input",{required:"",type:"text",id:"memory","onUpdate:modelValue":m[10]||(m[10]=u=>g(w)?w.value=u:w=u)},null,512),[[r,_(w)]])]),e("div",null,[Ee,a(e("input",{required:"",type:"text",id:"memory","onUpdate:modelValue":m[11]||(m[11]=u=>g(C)?C.value=u:C=u)},null,512),[[r,_(C)]]),je]),e("div",null,[Ke,a(e("input",{required:"",type:"text",id:"graphics_type","onUpdate:modelValue":m[12]||(m[12]=u=>g(I)?I.value=u:I=u)},null,512),[[r,_(I)]])]),e("div",null,[We,a(e("input",{required:"",type:"text",id:"graphics","onUpdate:modelValue":m[13]||(m[13]=u=>g(c)?c.value=u:c=u)},null,512),[[r,_(c)]])]),Je],32)]))}};var Xe=T(Qe,[["__scopeId","data-v-5ebce4e0"]]);const Ye={setup(n){const s=O();return(i,t)=>(h(),S(H,null,[_(s).query.category=="phone"?(h(),L(we,{key:0})):A("",!0),_(s).query.category=="laptop"?(h(),L(Xe,{key:1})):A("",!0)],64))}};var Ze="/assets/logo.03d6d6da.png";const E=n=>(B("data-v-636a1cce"),n=n(),M(),n),et=E(()=>e("img",{src:Ze,alt:""},null,-1)),tt=E(()=>e("button",{class:"btn"},"Add Laptop",-1)),ot=E(()=>e("button",{class:"btn"},"Add Phone",-1)),lt={class:"product-container"},at={class:"product-img"},rt=["src"],st={class:"product-name"},ut={class:"product-button"},nt={class:"btn"},it=f("Update"),dt=["onClick"],pt={setup(n){const s=N(),i=y("");G(async()=>{d()});const t=async()=>{i.value="phone",await s.getAllProducts(i.value)},d=async()=>{i.value="laptop",await s.getAllProducts(i.value)};return(v,o)=>{const l=W("router-link");return h(),S(H,null,[e("nav",{class:"navbar"},[et,e("div",{class:"navbar-link"},[e("div",{onClick:d,class:"navbar-item"},"LAPTOP"),e("div",{onClick:t,class:"navbar-item"},"PHONE")])]),i.value=="laptop"?(h(),L(l,{key:0,to:"/add?category=laptop"},{default:D(()=>[tt]),_:1})):A("",!0),i.value=="phone"?(h(),L(l,{key:1,to:"/add?category=phone"},{default:D(()=>[ot]),_:1})):A("",!0),e("ul",lt,[(h(!0),S(H,null,Q(_(s).allProduct,b=>(h(),S("li",null,[e("div",at,[e("img",{src:b.image,alt:"Product image"},null,8,rt)]),e("p",st,X(b.general.name),1),e("div",ut,[e("button",nt,[Y(l,{to:`/update?category=${b.category}&id=${b._id}`},{default:D(()=>[it]),_:2},1032,["to"])]),e("button",{onClick:V=>_(s).deleteProduct(b._id,b.category),class:"btn"}," Delete ",8,dt)])]))),256))])],64)}}};var _t=T(pt,[["__scopeId","data-v-636a1cce"]]);const x=n=>(B("data-v-3e0ef445"),n=n(),M(),n),ct={key:0,class:"container"},mt=x(()=>e("h2",null,"Update Laptop",-1)),vt=["onSubmit"],yt=x(()=>e("label",{for:"name"},"Name",-1)),gt=x(()=>e("label",{for:"brand"},"Brand",-1)),ft=x(()=>e("label",{for:"price"},"Price",-1)),bt=f(" $ "),ht=x(()=>e("label",{for:"img_lg"},"Image",-1)),$t=["href"],xt=x(()=>e("label",{for:"size"},"Screen Size",-1)),Ut=x(()=>e("label",{for:"resolution"},"Resolution",-1)),qt=x(()=>e("label",{for:"cpu_model"},"Processor Model",-1)),Vt=x(()=>e("label",{for:"cpu"},"Processor",-1)),Pt=x(()=>e("label",{for:"storage"},"Storage",-1)),kt=x(()=>e("label",{for:"storageCap"},"Storage Capacity",-1)),wt=f(" gigabytes "),St=x(()=>e("label",{for:"memory"},"Memory",-1)),At=x(()=>e("label",{for:"memory"},"Memory Capacity",-1)),It=f(" gigabytes "),Ct=x(()=>e("label",{for:"graphics_type"},"Graphics Type",-1)),Lt=x(()=>e("label",{for:"graphics"},"Graphics",-1)),Tt=x(()=>e("input",{required:"",type:"submit",value:"Update"},null,-1)),Rt={key:0},Ft={setup(n){const s=N(),i=O(),t=y();G(async()=>{await s.getProductById(i.query.id,i.query.category),t.value=s.product});const d=async()=>{await s.updateProduct(i.query.id,t.value)};return(v,o)=>t.value?(h(),S("div",ct,[mt,e("form",{onSubmit:z(d,["prevent"])},[e("div",null,[yt,a(e("input",{required:"",type:"text",id:"name","onUpdate:modelValue":o[0]||(o[0]=l=>t.value.general.name=l)},null,512),[[r,t.value.general.name]])]),e("div",null,[gt,a(e("input",{required:"",type:"text",id:"brand","onUpdate:modelValue":o[1]||(o[1]=l=>t.value.general.brand=l)},null,512),[[r,t.value.general.brand]])]),e("div",null,[ft,a(e("input",{required:"",type:"number",id:"price","onUpdate:modelValue":o[2]||(o[2]=l=>t.value.general.price=l)},null,512),[[r,t.value.general.price]]),bt]),e("div",null,[ht,a(e("input",{required:"",type:"text",id:"img_lg","onUpdate:modelValue":o[3]||(o[3]=l=>t.value.image=l)},null,512),[[r,t.value.image]]),e("a",{href:t.value.image,target:"blank",class:"preview"},"Preview",8,$t)]),e("div",null,[xt,a(e("input",{required:"",type:"text",id:"size","onUpdate:modelValue":o[4]||(o[4]=l=>t.value.screen.size=l)},null,512),[[r,t.value.screen.size]])]),e("div",null,[Ut,a(e("input",{required:"",type:"text",id:"resolution","onUpdate:modelValue":o[5]||(o[5]=l=>t.value.screen.resolution=l)},null,512),[[r,t.value.screen.resolution]])]),e("div",null,[qt,a(e("input",{required:"",type:"text",id:"cpu_model","onUpdate:modelValue":o[6]||(o[6]=l=>t.value.processor.model=l)},null,512),[[r,t.value.processor.model]])]),e("div",null,[Vt,a(e("input",{required:"",type:"text",id:"cpu","onUpdate:modelValue":o[7]||(o[7]=l=>t.value.processor.model_number=l)},null,512),[[r,t.value.processor.model_number]])]),e("div",null,[Pt,a(e("input",{required:"",type:"text",id:"storage","onUpdate:modelValue":o[8]||(o[8]=l=>t.value.storage.storageType=l)},null,512),[[r,t.value.storage.storageType]])]),e("div",null,[kt,a(e("input",{required:"",type:"number",id:"storageCap","onUpdate:modelValue":o[9]||(o[9]=l=>t.value.storage.capacity=l)},null,512),[[r,t.value.storage.capacity]]),wt]),e("div",null,[St,a(e("input",{required:"",type:"text",id:"memory","onUpdate:modelValue":o[10]||(o[10]=l=>t.value.memory.memoryType=l)},null,512),[[r,t.value.memory.memoryType]])]),e("div",null,[At,a(e("input",{required:"",type:"number",id:"memory","onUpdate:modelValue":o[11]||(o[11]=l=>t.value.memory.capacity=l)},null,512),[[r,t.value.memory.capacity]]),It]),e("div",null,[Ct,a(e("input",{required:"",type:"text",id:"graphics_type","onUpdate:modelValue":o[12]||(o[12]=l=>t.value.graphics.graphicsType=l)},null,512),[[r,t.value.graphics.graphicsType]])]),e("div",null,[Lt,a(e("input",{required:"",type:"text",id:"graphics","onUpdate:modelValue":o[13]||(o[13]=l=>t.value.graphics.graphics=l)},null,512),[[r,t.value.graphics.graphics]])]),Tt],40,vt),_(s).status==200?(h(),S("p",Rt,"Success!")):A("",!0)])):A("",!0)}};var Bt=T(Ft,[["__scopeId","data-v-3e0ef445"]]);const q=n=>(B("data-v-1633fa19"),n=n(),M(),n),Mt={key:0,class:"container"},Nt=q(()=>e("h2",null,"Update Phone",-1)),zt=q(()=>e("label",{for:"name"},"Name",-1)),Ot=q(()=>e("label",{for:"brand"},"Brand",-1)),Dt=q(()=>e("label",{for:"price"},"Price",-1)),Ht=f(" $ "),Gt=q(()=>e("label",{for:"img"},"Image",-1)),Et=["href"],jt=q(()=>e("label",{for:"os"},"Operating System",-1)),Kt=q(()=>e("label",{for:"storage"},"Storage",-1)),Wt=f(" gigabytes "),Jt=q(()=>e("label",{for:"memory"},"Memory",-1)),Qt=f(" gigabytes "),Xt=q(()=>e("label",{for:"cpu"},"Processor",-1)),Yt=q(()=>e("label",{for:"front_cam"},"Front Camera",-1)),Zt=f(" megapixels "),eo=q(()=>e("label",{for:"rear_cam"},"Rear Camera",-1)),to=f(" megapixels "),oo=q(()=>e("label",{for:"resolution"},"Resolution",-1)),lo=f(" megapixels "),ao=q(()=>e("input",{required:"",type:"submit",value:"Update"},null,-1)),ro={key:0},so={setup(n){const s=N(),i=O(),t=y();G(async()=>{await s.getProductById(i.query.id,i.query.category),t.value=s.product});const d=async()=>{await s.updateProduct(i.query.id,t.value)};return(v,o)=>t.value?(h(),S("div",Mt,[Nt,e("form",{onSubmit:o[11]||(o[11]=z(l=>d(),["prevent"]))},[e("div",null,[zt,a(e("input",{required:"",type:"text",id:"name","onUpdate:modelValue":o[0]||(o[0]=l=>t.value.general.name=l)},null,512),[[r,t.value.general.name]])]),e("div",null,[Ot,a(e("input",{required:"",type:"text",id:"brand","onUpdate:modelValue":o[1]||(o[1]=l=>t.value.general.brand=l)},null,512),[[r,t.value.general.brand]])]),e("div",null,[Dt,a(e("input",{required:"",type:"text",id:"price","onUpdate:modelValue":o[2]||(o[2]=l=>t.value.general.price=l)},null,512),[[r,t.value.general.price]]),Ht]),e("div",null,[Gt,a(e("input",{required:"",type:"text",id:"img","onUpdate:modelValue":o[3]||(o[3]=l=>t.value.image=l)},null,512),[[r,t.value.image]]),e("a",{href:t.value.image,target:"blank",class:"preview"},"Preview",8,Et)]),e("div",null,[jt,a(e("input",{required:"",type:"text",id:"os","onUpdate:modelValue":o[4]||(o[4]=l=>t.value.keyspecs.operating_system=l)},null,512),[[r,t.value.keyspecs.operating_system]])]),e("div",null,[Kt,a(e("input",{required:"",type:"text",id:"storage","onUpdate:modelValue":o[5]||(o[5]=l=>t.value.keyspecs.storage=l)},null,512),[[r,t.value.keyspecs.storage]]),Wt]),e("div",null,[Jt,a(e("input",{required:"",type:"number",id:"memory","onUpdate:modelValue":o[6]||(o[6]=l=>t.value.keyspecs.memory=l)},null,512),[[r,t.value.keyspecs.memory]]),Qt]),e("div",null,[Xt,a(e("input",{required:"",type:"text",id:"cpu","onUpdate:modelValue":o[7]||(o[7]=l=>t.value.keyspecs.processor=l)},null,512),[[r,t.value.keyspecs.processor]])]),e("div",null,[Yt,a(e("input",{required:"",type:"text",id:"front_cam","onUpdate:modelValue":o[8]||(o[8]=l=>t.value.keyspecs.front_camera=l)},null,512),[[r,t.value.keyspecs.front_camera]]),Zt]),e("div",null,[eo,a(e("input",{required:"",type:"text",id:"rear_cam","onUpdate:modelValue":o[9]||(o[9]=l=>t.value.keyspecs.rear_camera=l)},null,512),[[r,t.value.keyspecs.rear_camera]]),to]),e("div",null,[oo,a(e("input",{required:"",type:"text",id:"resolution","onUpdate:modelValue":o[10]||(o[10]=l=>t.value.resolution=l)},null,512),[[r,t.value.resolution]]),lo]),ao],32),_(s).status==200?(h(),S("p",ro,"Success!")):A("",!0)])):A("",!0)}};var uo=T(so,[["__scopeId","data-v-1633fa19"]]);const no={setup(n){const s=O();return(i,t)=>(h(),S("div",null,[_(s).query.category=="laptop"?(h(),L(Bt,{key:0})):A("",!0),_(s).query.category=="phone"?(h(),L(uo,{key:1})):A("",!0)]))}};var io=T(no,[["__scopeId","data-v-78bdd10c"]]);const po=[{path:"/",name:"Home",component:_t},{path:"/add",name:"Add",component:Ye},{path:"/update",name:"Update",component:io}],j=Z({history:ee(),routes:po}),_o=te(ae);_o.use(j).use(oe()).mount("#app");

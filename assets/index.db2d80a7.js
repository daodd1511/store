import{o as c,c as _,a as f,b as e,u as B,r as N,d as w,e as n,f as M,g as b,F as C,w as U,h as Q,i as D,t as g,j as y,k as R,l as T,m as E,n as $,p as X,q as m,v,s as j,x as O,y as G,z as Y,A as Z,B as ee,C as te}from"./vendor.986dbb7d.js";const se=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerpolicy&&(u.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?u.credentials="include":o.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function t(o){if(o.ep)return;o.ep=!0;const u=s(o);fetch(o.href,u)}};se();var I=(r,l)=>{const s=r.__vccOpts||r;for(const[t,o]of l)s[t]=o;return s};const oe={},le={class:"flex h-16 w-full items-center justify-center"},ae=f(" Made with "),ne=e("i",{class:"fa-solid fa-heart px-1 text-red-600"},null,-1),re=f(" by ducdao1511 "),ie=[ae,ne,re];function de(r,l){return c(),_("div",le,ie)}var ue=I(oe,[["render",de]]);const ce={setup(r){const l=B();return(s,t)=>{const o=N("router-view");return c(),_(C,null,[w(o),n(l).path!="/"?(c(),M(ue,{key:0})):b("",!0)],64)}}};const pe={},_e=e("button",{class:"h-screen w-1/2 bg-teal-300"},"Laptop",-1),me=e("button",{class:"h-screen w-1/2 bg-rose-300"},"Phone",-1);function ve(r,l){const s=N("router-link");return c(),_("div",null,[w(s,{to:"/laptop"},{default:U(()=>[_e]),_:1}),w(s,{to:"/phone"},{default:U(()=>[me]),_:1})])}var he=I(pe,[["render",ve]]);const ge="https://ducdao-nodejs-api.herokuapp.com/api";var F={API_URL:ge};const L=Q("store",{state:()=>({allProduct:[],product:{},status:0}),actions:{async addProduct(r){await D.post(`${F.API_URL}/add`,r).then(l=>this.status=l.status).catch(l=>console.error(l))},async getAllProducts(r){await D.get(`${F.API_URL}/products?category=${r}`).then(l=>this.allProduct=l.data)},async updateProduct(r,l){await D.put(`${F.API_URL}/update?id=${r}`,l).then(s=>{this.status=s.status})},async deleteProduct(r,l){await D.delete(`${F.API_URL}/delete?category=${l}&id=${r}`).then(s=>{this.allProduct=s.data,this.status=s.status})},async getProductById(r,l){await D.get(`${F.API_URL}/find/?category=${l}&id=${r}`).then(s=>{this.product={},this.product=s.data})}}}),ye={class:"min-h-60 mx-auto flex w-4/5 gap-8 border-b border-[#e0e6ef] py-7"},fe={class:"w-1/3"},xe=["src"],$e={class:"h-full w-2/5 text-blue-600"},be={class:"h-full w-1/5"},we={key:0,class:"text-2xl font-medium"},ke={key:1,class:"text-[13px]"},Pe={class:"text-2xl font-medium"},Ue={class:"mr-1 inline-block bg-red-700 p-1 font-medium text-white"},qe=e("button",{class:"my-6 h-8 w-full rounded bg-yellow-300 text-sm font-medium"},[e("i",{class:"fa-solid fa-cart-shopping p-2"}),f(" Add to cart ")],-1),J={props:{data:Object},setup(r){const s=r.data;return(t,o)=>{const u=N("router-link");return c(),_("div",ye,[e("div",fe,[w(u,{to:`/${n(s).category}/`+n(s)._id},{default:U(()=>[e("img",{src:n(s).image,alt:"Product Image",class:"mx-auto max-h-52 max-w-full"},null,8,xe)]),_:1},8,["to"])]),e("div",$e,[w(u,{to:`/${n(s).category}/`+n(s)._id},{default:U(()=>[f(g(n(s).general.name),1)]),_:1},8,["to"])]),e("div",be,[n(s).general.sale_price?(c(),_("div",ke,[e("p",Pe,"$"+g(n(s).general.sale_price),1),e("div",Ue," Save $"+g(n(s).general.price-n(s).general.sale_price),1),e("span",null,"Was $"+g(n(s).general.price),1)])):(c(),_("p",we," $"+g(n(s).general.price),1)),qe])])}}};var Ve="/assets/logo.03d6d6da.png";const Se={},Ae={class:"flex h-20 items-center bg-stone-900 px-5 text-white"},Ie=e("img",{src:Ve,alt:"",class:"h-16"},null,-1),Le={class:"flex gap-10 pl-24"},Ce=f("LAPTOP"),Me=f("PHONE");function Be(r,l){const s=N("router-link");return c(),_("nav",Ae,[w(s,{to:"/"},{default:U(()=>[Ie]),_:1}),e("div",Le,[e("button",null,[w(s,{to:"/laptop"},{default:U(()=>[Ce]),_:1})]),e("button",null,[w(s,{to:"/phone"},{default:U(()=>[Me]),_:1})])])])}var W=I(Se,[["render",Be]]);const Ne={setup(r){const l=L(),s=y("");R(async()=>{t()});const t=async()=>{s.value="laptop",await l.getAllProducts(s.value)};return(o,u)=>(c(),_(C,null,[w(W),(c(!0),_(C,null,T(n(l).allProduct,d=>(c(),M(J,{key:d._id,data:d},null,8,["data"]))),128))],64))}},Re={setup(r){const l=L(),s=y("");R(async()=>{t()});const t=async()=>{s.value="phone",await l.getAllProducts(s.value)};return(o,u)=>(c(),_(C,null,[w(W),(c(!0),_(C,null,T(n(l).allProduct,d=>(c(),M(J,{key:d._id,data:d},null,8,["data"]))),128))],64))}},ze={class:"mx-auto flex w-4/5 gap-14 py-7"},De={class:"w-2/3 font-medium"},Fe={class:"text-2xl font-light"},je=["src"],Oe={class:"w-1/3 pt-6"},Ge={key:0,class:"text-2xl font-medium"},He={key:1,class:"text-[13px]"},Ee={class:"text-2xl font-medium"},Te={class:"mr-1 inline-block bg-red-700 p-1 font-medium text-white"},We=e("button",{class:"my-6 h-8 w-full rounded bg-yellow-300 text-sm font-medium"},[e("i",{class:"fa-solid fa-cart-shopping p-2"}),f(" Add to cart ")],-1),Ke={class:"mx-auto w-4/5"},Je=e("button",{class:"flex w-full justify-between text-2xl font-medium"},[e("span",null,"Specifications"),e("i",{class:"fa-solid fa-angle-down"})],-1),Qe={class:"mx-auto w-2/3 py-4"},Xe={class:"flex py-2 text-[16px]"},Ye=e("div",{class:"w-1/2 font-medium"},"Product Name",-1),Ze={class:"w-1/2"},et={class:"flex py-2 text-[16px]"},tt=e("div",{class:"w-1/2 font-medium"},"Brand",-1),st={class:"w-1/2"},ot={class:"flex py-2 text-[16px]"},lt=e("div",{class:"w-1/2 font-medium"},"Price",-1),at={class:"w-1/2"},nt={class:"flex py-2 text-[16px]"},rt=e("div",{class:"w-1/2 font-medium"},"Processor",-1),it={class:"w-1/2"},dt={class:"flex py-2 text-[16px]"},ut=e("div",{class:"w-1/2 font-medium"},"Storage",-1),ct={class:"w-1/2"},pt={class:"flex py-2 text-[16px]"},_t=e("div",{class:"w-1/2 font-medium"},"Memory",-1),mt={class:"w-1/2"},vt={key:0,class:"flex py-2 text-[16px]"},ht=e("div",{class:"w-1/2 font-medium"},"Screen",-1),gt={class:"w-1/2"},yt={key:1,class:"flex py-2 text-[16px]"},ft=e("div",{class:"w-1/2 font-medium"},"Graphics",-1),xt={class:"w-1/2"},$t={key:2,class:"flex py-2 text-[16px]"},bt=e("div",{class:"w-1/2 font-medium"},"Camera",-1),wt={class:"w-1/2"},kt={key:3,class:"flex py-2 text-[16px]"},Pt=e("div",{class:"w-1/2 font-medium"},"Resolution",-1),Ut={class:"w-1/2"},qt={setup(r){const l=L(),s=B(),t=y();return R(async()=>{await l.getProductById(s.params.id,s.params.category),t.value=l.product}),(o,u)=>(c(),_(C,null,[w(W),e("div",ze,[e("div",De,[e("h2",null,g(t.value.general.brand),1),e("h1",Fe,g(t.value.general.name),1),e("img",{src:t.value.image,class:"py-12"},null,8,je)]),e("div",Oe,[t.value.general.sale_price?(c(),_("div",He,[e("p",Ee," $"+g(t.value.general.sale_price),1),e("div",Te," Save $"+g(t.value.general.price-t.value.general.sale_price),1),e("span",null,"Was $"+g(t.value.general.price),1)])):(c(),_("p",Ge," $"+g(t.value.general.price),1)),We])]),e("div",Ke,[Je,e("div",Qe,[e("ul",null,[e("li",Xe,[Ye,e("div",Ze,g(t.value.general.name),1)]),e("li",et,[tt,e("div",st,g(t.value.general.brand),1)]),e("li",ot,[lt,e("div",at,"$"+g(t.value.general.price),1)]),e("li",nt,[rt,e("div",it,g(t.value.processor),1)]),e("li",dt,[ut,e("div",ct,g(t.value.storage)+" GB",1)]),e("li",pt,[_t,e("div",mt,g(t.value.memory)+" GB",1)]),t.value.category=="laptop"?(c(),_("li",vt,[ht,e("div",gt,g(t.value.screen)+'"',1)])):b("",!0),t.value.category=="laptop"?(c(),_("li",yt,[ft,e("div",xt,g(t.value.graphics),1)])):b("",!0),t.value.category=="phone"?(c(),_("li",$t,[bt,e("div",wt,g(t.value.camera)+" MP",1)])):b("",!0),t.value.category=="phone"?(c(),_("li",kt,[Pt,e("div",Ut,g(t.value.resolution),1)])):b("",!0)])])])],64))}},Vt={},St={class:"fixed top-0 left-0 z-40 inline-block h-screen w-60 bg-gray-800"},At=e("div",{class:"flex h-14 w-full flex-1 flex-row items-center bg-gray-900 text-white dark:bg-transparent"},[e("div",{class:"flex-1 px-3"},[e("span",null,"Admin")])],-1),It=e("p",{class:"p-3 text-xs uppercase text-gray-400"},"Products",-1),Lt=e("i",{class:"fa-solid fa-laptop inline-flex h-6 w-12 flex-none items-center justify-center text-gray-300"},null,-1),Ct=e("span",{class:"grow text-gray-300"},"Laptop",-1),Mt=[Lt,Ct],Bt=e("i",{class:"fa-solid fa-mobile-screen inline-flex h-6 w-12 flex-none items-center justify-center text-gray-300"},null,-1),Nt=e("span",{class:"grow text-gray-300"},"Phone",-1),Rt=[Bt,Nt];function zt(r,l){const s=N("router-link");return c(),_("aside",St,[At,e("div",null,[It,e("ul",null,[w(s,{to:"/admin/products/laptop"},{default:U(()=>[e("li",{class:"flex cursor-pointer py-2 hover:bg-gray-600 hover:bg-opacity-50",onClick:l[0]||(l[0]=t=>r.$emit("laptop"))},Mt)]),_:1}),w(s,{to:"/admin/products/phone"},{default:U(()=>[e("li",{class:"flex cursor-pointer py-2 hover:bg-gray-600 hover:bg-opacity-50",onClick:l[1]||(l[1]=t=>r.$emit("phone"))},Rt)]),_:1})])])])}var Dt=I(Vt,[["render",zt]]);const Ft={class:"pb-16"},jt={class:"pl-60 pt-10"},Ot={emits:["laptop","phone"],setup(r,{emit:l}){const s=L(),t=B(),o=y("");R(async()=>{t.params.category=="laptop"?d():t.params.category=="phone"&&u()});const u=async()=>{o.value="phone",await s.getAllProducts(o.value)},d=async()=>{o.value="laptop",await s.getAllProducts(o.value)};return(i,h)=>{const k=N("router-view");return c(),_("main",Ft,[w(Dt,{onLaptop:d,onPhone:u}),e("div",jt,[w(k)])])}}},Gt={},Ht={id:"defaultModal",tabindex:"-1","aria-hidden":"true",class:"h-modal fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/40 md:inset-0 md:h-full"},Et={class:"relative h-full w-full max-w-2xl p-4 md:h-auto"},Tt={class:"relative rounded-lg bg-white shadow dark:bg-gray-700"},Wt={class:"flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600"},Kt={class:"text-xl font-medium text-gray-900 dark:text-white lg:text-2xl"},Jt=e("svg",{class:"h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Qt=[Jt],Xt={class:"space-y-6 p-6"};function Yt(r,l){return c(),_("div",null,[e("div",Ht,[e("div",Et,[e("div",Tt,[e("div",Wt,[e("h3",Kt,[E(r.$slots,"header")]),e("button",{type:"button",class:"ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",onClick:l[0]||(l[0]=s=>r.$emit("closeModal"))},Qt)]),e("div",Xt,[E(r.$slots,"content")]),e("div",null,[E(r.$slots,"button")])])])])])}var Zt=I(Gt,[["render",Yt]]);const es={key:0},ts={class:"relative w-full overflow-x-auto shadow-md sm:rounded-lg"},ss=X('<div class="p-4"><label for="table-search" class="sr-only">Search</label><div class="relative mt-1"><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><svg class="h-5 w-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" id="table-search" class="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Search for items"></div></div>',1),os={class:"w-full text-left text-[15px] text-gray-500 dark:text-gray-400"},ls=e("thead",{class:"bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"},"Image"),e("th",{scope:"col",class:"px-6 py-3"},"Product name"),e("th",{scope:"col",class:"px-6 py-3"},"Price"),e("th",{scope:"col",class:"px-6 py-3"},"Sale Price"),e("th",{scope:"col",class:"px-6 py-3"},[e("span",{class:"sr-only"},"Details")]),e("th",{scope:"col",class:"px-6 py-3"},[e("span",{class:"sr-only"},"Update")])])],-1),as={class:"w-28 py-4 px-4"},ns=["src"],rs={scope:"row",class:"w-1/3 whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"},is={class:"px-6 py-4"},ds={key:0,class:"px-6 py-4"},us={key:1,class:"px-6 py-4"},cs={class:"px-6 py-4 text-right"},ps=["onClick"],_s={class:"text-right text-white"},ms={class:"flex gap-2 px-6 py-4"},vs=e("button",{class:"flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 align-middle"},[e("i",{class:"fa-solid fa-wrench"})],-1),hs=["onClick"],gs=e("i",{class:"fa-solid fa-trash-can"},null,-1),ys=[gs],fs=f(" Details "),xs={class:"mx-auto py-4"},$s={class:"flex py-2 text-[16px]"},bs=e("div",{class:"w-1/3 font-medium"},"Product Name:",-1),ws={class:""},ks={class:"flex py-2 text-[16px]"},Ps=e("div",{class:"w-1/3 font-medium"},"Brand:",-1),Us={class:""},qs={class:"flex py-2 text-[16px]"},Vs=e("div",{class:"w-1/3 font-medium"},"Price:",-1),Ss={class:""},As={class:"flex py-2 text-[16px]"},Is=e("div",{class:"w-1/3 font-medium"},"Processor:",-1),Ls={class:""},Cs={class:"flex py-2 text-[16px]"},Ms=e("div",{class:"w-1/3 font-medium"},"Storage:",-1),Bs={class:""},Ns={class:"flex py-2 text-[16px]"},Rs=e("div",{class:"w-1/3 font-medium"},"Memory:",-1),zs={class:""},Ds={key:0,class:"flex py-2 text-[16px]"},Fs=e("div",{class:"w-1/3 font-medium"},"Screen:",-1),js={class:""},Os={key:1,class:"flex py-2 text-[16px]"},Gs=e("div",{class:"w-1/3 font-medium"},"Graphics:",-1),Hs={class:""},Es={key:2,class:"flex py-2 text-[16px]"},Ts=e("div",{class:"w-1/3 font-medium"},"Camera",-1),Ws={class:""},Ks={key:3,class:"flex py-2 text-[16px]"},Js=e("div",{class:"w-1/3 font-medium"},"Resolution",-1),Qs={class:""},Xs={props:{data:Array},emits:["closeModal"],setup(r,{emit:l}){const s=r,t=L();let o=y(!1),u=y({});const d=i=>{o.value=!0,u.value=t.allProduct.find(h=>h._id==i)};return(i,h)=>{const k=N("router-link");return c(),_(C,null,[s.data?(c(),_("div",es,[e("div",ts,[ss,e("table",os,[ls,e("tbody",null,[(c(!0),_(C,null,T(s.data,x=>(c(),_("tr",{key:x._id,class:"border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"},[e("td",as,[e("img",{src:x.image,alt:"Product Image",class:""},null,8,ns)]),e("th",rs,g(x.general.name),1),e("td",is,"$"+g(x.general.price),1),x.general.sale_price?(c(),_("td",ds," $"+g(x.general.sale_price),1)):(c(),_("td",us,"None")),e("td",cs,[e("button",{onClick:P=>d(x._id),class:"w-1/3 font-medium text-blue-600 hover:underline dark:text-blue-500"}," Details ",8,ps)]),e("td",_s,[e("div",ms,[w(k,{to:"/admin/update?category="+x.category+"&id="+x._id},{default:U(()=>[vs]),_:2},1032,["to"]),e("button",{class:"flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 align-middle",onClick:P=>n(t).deleteProduct(x._id,x.category)},ys,8,hs)])])]))),128))])])])])):b("",!0),n(o)?(c(),M(Zt,{key:1,onCloseModal:h[0]||(h[0]=x=>$(o)?o.value=!1:o=!1)},{header:U(()=>[fs]),content:U(()=>[e("div",xs,[e("ul",null,[e("li",$s,[bs,e("div",ws,g(n(u).general.name),1)]),e("li",ks,[Ps,e("div",Us,g(n(u).general.brand),1)]),e("li",qs,[Vs,e("div",Ss,"$"+g(n(u).general.price),1)]),e("li",As,[Is,e("div",Ls,g(n(u).processor),1)]),e("li",Cs,[Ms,e("div",Bs,g(n(u).storage)+" GB",1)]),e("li",Ns,[Rs,e("div",zs,g(n(u).memory)+" GB",1)]),n(u).category=="laptop"?(c(),_("li",Ds,[Fs,e("div",js,g(n(u).screen)+'"',1)])):b("",!0),n(u).category=="laptop"?(c(),_("li",Os,[Gs,e("div",Hs,g(n(u).graphics),1)])):b("",!0),n(u).category=="phone"?(c(),_("li",Es,[Ts,e("div",Ws,g(n(u).camera)+" MP",1)])):b("",!0),n(u).category=="phone"?(c(),_("li",Ks,[Js,e("div",Qs,g(n(u).resolution),1)])):b("",!0)])])]),_:1})):b("",!0)],64)}}},Ys={class:"mx-auto w-10/12"},Zs={setup(r){B();const l=L();return(s,t)=>(c(),_("div",Ys,[w(Xs,{data:n(l).allProduct},null,8,["data"])]))}};const q=r=>(O("data-v-dde4104e"),r=r(),G(),r),eo={class:"container"},to=q(()=>e("h1",{class:"text-2xl"},"Add Phone",-1)),so=q(()=>e("label",{for:"name"},"Name",-1)),oo=q(()=>e("label",{for:"brand"},"Brand",-1)),lo=q(()=>e("label",{for:"price"},"Price",-1)),ao=f(" $ "),no=q(()=>e("label",{for:"sale_price"},"Sale Price",-1)),ro=f(" $ "),io=q(()=>e("label",{for:"img"},"Image",-1)),uo=["href"],co=q(()=>e("label",{for:"storage"},"Storage",-1)),po=f(" gigabytes "),_o=q(()=>e("label",{for:"memory"},"Memory",-1)),mo=f(" gigabytes "),vo=q(()=>e("label",{for:"cpu"},"Processor",-1)),ho=q(()=>e("label",{for:"camera"},"Camera",-1)),go=f(" megapixels "),yo=q(()=>e("label",{for:"resolution"},"Resolution",-1)),fo=f(" megapixels "),xo=q(()=>e("input",{required:"",type:"submit",value:"Add"},null,-1)),$o={setup(r){const l=L();let s=y(""),t=y(""),o=y(),u=y(),d=y(""),i=y(),h=y(null),k=y(),x=y(),P=y();const H=async()=>{const z={category:"phone",general:{name:s.value,brand:t.value,price:o.value,sale_price:u.value},image:d.value,storage:i.value,memory:h.value,processor:k.value,camera:x.value,resolution:P.value};await l.addProduct(z),K.replace("/")};return(z,p)=>(c(),_("div",eo,[to,e("form",{onSubmit:p[10]||(p[10]=j(a=>H(),["prevent"]))},[e("div",null,[so,m(e("input",{required:"",type:"text",id:"name","onUpdate:modelValue":p[0]||(p[0]=a=>$(s)?s.value=a:s=a)},null,512),[[v,n(s)]])]),e("div",null,[oo,m(e("input",{required:"",type:"text",id:"brand","onUpdate:modelValue":p[1]||(p[1]=a=>$(t)?t.value=a:t=a)},null,512),[[v,n(t)]])]),e("div",null,[lo,m(e("input",{required:"",type:"text",id:"price","onUpdate:modelValue":p[2]||(p[2]=a=>$(o)?o.value=a:o=a)},null,512),[[v,n(o)]]),ao]),e("div",null,[no,m(e("input",{type:"text",id:"sale_price","onUpdate:modelValue":p[3]||(p[3]=a=>$(u)?u.value=a:u=a)},null,512),[[v,n(u)]]),ro]),e("div",null,[io,m(e("input",{required:"",type:"text",id:"img","onUpdate:modelValue":p[4]||(p[4]=a=>$(d)?d.value=a:d=a)},null,512),[[v,n(d)]]),e("a",{href:n(d),target:"blank",class:"preview"},"Preview",8,uo)]),e("div",null,[co,m(e("input",{required:"",type:"text",id:"storage","onUpdate:modelValue":p[5]||(p[5]=a=>$(i)?i.value=a:i=a)},null,512),[[v,n(i)]]),po]),e("div",null,[_o,m(e("input",{required:"",type:"number",id:"memory","onUpdate:modelValue":p[6]||(p[6]=a=>$(h)?h.value=a:h=a)},null,512),[[v,n(h)]]),mo]),e("div",null,[vo,m(e("input",{required:"",type:"text",id:"cpu","onUpdate:modelValue":p[7]||(p[7]=a=>$(k)?k.value=a:k=a)},null,512),[[v,n(k)]])]),e("div",null,[ho,m(e("input",{required:"",type:"text",id:"camera","onUpdate:modelValue":p[8]||(p[8]=a=>$(x)?x.value=a:x=a)},null,512),[[v,n(x)]]),go]),e("div",null,[yo,m(e("input",{required:"",type:"text",id:"resolution","onUpdate:modelValue":p[9]||(p[9]=a=>$(P)?P.value=a:P=a)},null,512),[[v,n(P)]]),fo]),xo],32)]))}};var bo=I($o,[["__scopeId","data-v-dde4104e"]]);const V=r=>(O("data-v-71a91d27"),r=r(),G(),r),wo={class:"container"},ko=V(()=>e("h1",{class:"text-2xl"},"Add Laptop",-1)),Po=V(()=>e("label",{for:"name"},"Name",-1)),Uo=V(()=>e("label",{for:"brand"},"Brand",-1)),qo=V(()=>e("label",{for:"price"},"Price",-1)),Vo=f(" $ "),So=V(()=>e("label",{for:"sale_price"},"Sale Price",-1)),Ao=f(" $ "),Io=V(()=>e("label",{for:"img"},"Image",-1)),Lo=["href"],Co=V(()=>e("label",{for:"size"},"Screen Size",-1)),Mo=V(()=>e("label",{for:"cpu"},"Processor",-1)),Bo=V(()=>e("label",{for:"storageCap"},"Storage Capacity",-1)),No=f(" gigabytes "),Ro=V(()=>e("label",{for:"memory"},"Memory Capacity",-1)),zo=f(" gigabytes "),Do=V(()=>e("label",{for:"graphics"},"Graphics",-1)),Fo=V(()=>e("input",{required:"",type:"submit",value:"Add",class:""},null,-1)),jo={setup(r){const l=L();let s=y(""),t=y(""),o=y(),u=y(),d=y(""),i=y(),h=y(""),k=y(),x=y(),P=y();const H=async()=>{const z={category:"laptop",general:{name:s.value,brand:t.value,price:o.value,sale_price:u.value},image:d.value,screen:i.value,processor:h.value,storage:k.value,memory:x.value,graphics:P.value};await l.addProduct(z),K.push("/")};return(z,p)=>(c(),_("div",wo,[ko,e("form",{onSubmit:p[10]||(p[10]=j(a=>H(),["prevent"]))},[e("div",null,[Po,m(e("input",{required:"",type:"text",id:"name","onUpdate:modelValue":p[0]||(p[0]=a=>$(s)?s.value=a:s=a)},null,512),[[v,n(s)]])]),e("div",null,[Uo,m(e("input",{required:"",type:"text",id:"brand","onUpdate:modelValue":p[1]||(p[1]=a=>$(t)?t.value=a:t=a)},null,512),[[v,n(t)]])]),e("div",null,[qo,m(e("input",{required:"",type:"text",id:"price","onUpdate:modelValue":p[2]||(p[2]=a=>$(o)?o.value=a:o=a)},null,512),[[v,n(o)]]),Vo]),e("div",null,[So,m(e("input",{type:"text",id:"sale_price","onUpdate:modelValue":p[3]||(p[3]=a=>$(u)?u.value=a:u=a)},null,512),[[v,n(u)]]),Ao]),e("div",null,[Io,m(e("input",{required:"",type:"text",id:"img","onUpdate:modelValue":p[4]||(p[4]=a=>$(d)?d.value=a:d=a)},null,512),[[v,n(d)]]),e("a",{href:n(d),target:"blank",class:"preview"},"Preview",8,Lo)]),e("div",null,[Co,m(e("input",{required:"",type:"text",id:"size","onUpdate:modelValue":p[5]||(p[5]=a=>$(i)?i.value=a:i=a)},null,512),[[v,n(i)]])]),e("div",null,[Mo,m(e("input",{required:"",type:"text",id:"cpu","onUpdate:modelValue":p[6]||(p[6]=a=>$(h)?h.value=a:h=a)},null,512),[[v,n(h)]])]),e("div",null,[Bo,m(e("input",{required:"",type:"text",id:"storageCap","onUpdate:modelValue":p[7]||(p[7]=a=>$(k)?k.value=a:k=a)},null,512),[[v,n(k)]]),No]),e("div",null,[Ro,m(e("input",{required:"",type:"text",id:"memory","onUpdate:modelValue":p[8]||(p[8]=a=>$(x)?x.value=a:x=a)},null,512),[[v,n(x)]]),zo]),e("div",null,[Do,m(e("input",{required:"",type:"text",id:"graphics","onUpdate:modelValue":p[9]||(p[9]=a=>$(P)?P.value=a:P=a)},null,512),[[v,n(P)]])]),Fo],32)]))}};var Oo=I(jo,[["__scopeId","data-v-71a91d27"]]);const Go={setup(r){const l=B();return(s,t)=>(c(),_(C,null,[n(l).query.category=="phone"?(c(),M(bo,{key:0})):b("",!0),n(l).query.category=="laptop"?(c(),M(Oo,{key:1})):b("",!0)],64))}};const S=r=>(O("data-v-0fc330ba"),r=r(),G(),r),Ho={key:0,class:"container"},Eo=S(()=>e("h1",{class:"text-2xl"},"Update Laptop",-1)),To=["onSubmit"],Wo=S(()=>e("label",{for:"name"},"Name",-1)),Ko=S(()=>e("label",{for:"brand"},"Brand",-1)),Jo=S(()=>e("label",{for:"price"},"Price",-1)),Qo=f(" $ "),Xo=S(()=>e("label",{for:"sale_price"},"Sale Price",-1)),Yo=f(" $ "),Zo=S(()=>e("label",{for:"img_lg"},"Image",-1)),el=["href"],tl=S(()=>e("label",{for:"size"},"Screen Size",-1)),sl=S(()=>e("label",{for:"cpu"},"Processor",-1)),ol=S(()=>e("label",{for:"storageCap"},"Storage Capacity",-1)),ll=f(" gigabytes "),al=S(()=>e("label",{for:"memory"},"Memory Capacity",-1)),nl=f(" gigabytes "),rl=S(()=>e("label",{for:"graphics"},"Graphics",-1)),il=S(()=>e("input",{required:"",type:"submit",value:"Update"},null,-1)),dl={key:0},ul={props:{productId:String},setup(r){const l=r,s=L(),t=B(),o=y();R(async()=>{s.status=0,o.value=s.allProduct.find(d=>d._id==l.productId)});const u=async()=>{await s.updateProduct(t.query.id,o.value)};return(d,i)=>o.value?(c(),_("div",Ho,[Eo,e("form",{onSubmit:j(u,["prevent"])},[e("div",null,[Wo,m(e("input",{required:"",type:"text",id:"name","onUpdate:modelValue":i[0]||(i[0]=h=>o.value.general.name=h)},null,512),[[v,o.value.general.name]])]),e("div",null,[Ko,m(e("input",{required:"",type:"text",id:"brand","onUpdate:modelValue":i[1]||(i[1]=h=>o.value.general.brand=h)},null,512),[[v,o.value.general.brand]])]),e("div",null,[Jo,m(e("input",{required:"",type:"number",id:"price","onUpdate:modelValue":i[2]||(i[2]=h=>o.value.general.price=h)},null,512),[[v,o.value.general.price]]),Qo]),e("div",null,[Xo,m(e("input",{type:"number",id:"sale_price","onUpdate:modelValue":i[3]||(i[3]=h=>o.value.general.sale_price=h)},null,512),[[v,o.value.general.sale_price]]),Yo]),e("div",null,[Zo,m(e("input",{required:"",type:"text",id:"img_lg","onUpdate:modelValue":i[4]||(i[4]=h=>o.value.image=h)},null,512),[[v,o.value.image]]),e("a",{href:o.value.image,target:"blank",class:"preview"},"Preview",8,el)]),e("div",null,[tl,m(e("input",{required:"",type:"text",id:"size","onUpdate:modelValue":i[5]||(i[5]=h=>o.value.screen=h)},null,512),[[v,o.value.screen]])]),e("div",null,[sl,m(e("input",{required:"",type:"text",id:"cpu","onUpdate:modelValue":i[6]||(i[6]=h=>o.value.processor=h)},null,512),[[v,o.value.processor]])]),e("div",null,[ol,m(e("input",{required:"",type:"number",id:"storageCap","onUpdate:modelValue":i[7]||(i[7]=h=>o.value.storage=h)},null,512),[[v,o.value.storage]]),ll]),e("div",null,[al,m(e("input",{required:"",type:"number",id:"memory","onUpdate:modelValue":i[8]||(i[8]=h=>o.value.memory=h)},null,512),[[v,o.value.memory]]),nl]),e("div",null,[rl,m(e("input",{required:"",type:"text",id:"graphics","onUpdate:modelValue":i[9]||(i[9]=h=>o.value.graphics=h)},null,512),[[v,o.value.graphics]])]),il],40,To),n(s).status==200?(c(),_("p",dl,"Success!")):b("",!0)])):b("",!0)}};var cl=I(ul,[["__scopeId","data-v-0fc330ba"]]);const A=r=>(O("data-v-59beb3d8"),r=r(),G(),r),pl={key:0,class:"container"},_l=A(()=>e("h1",{class:"text-2xl"},"Update Phone",-1)),ml=A(()=>e("label",{for:"name"},"Name",-1)),vl=A(()=>e("label",{for:"brand"},"Brand",-1)),hl=A(()=>e("label",{for:"price"},"Price",-1)),gl=f(" $ "),yl=A(()=>e("label",{for:"sale_price"},"Sale Price",-1)),fl=f(" $ "),xl=A(()=>e("label",{for:"img"},"Image",-1)),$l=["href"],bl=A(()=>e("label",{for:"storage"},"Storage",-1)),wl=f(" gigabytes "),kl=A(()=>e("label",{for:"memory"},"Memory",-1)),Pl=f(" gigabytes "),Ul=A(()=>e("label",{for:"cpu"},"Processor",-1)),ql=A(()=>e("label",{for:"camera"},"Camera",-1)),Vl=f(" megapixels "),Sl=A(()=>e("label",{for:"resolution"},"Resolution",-1)),Al=f(" megapixels "),Il=A(()=>e("input",{required:"",type:"submit",value:"Update"},null,-1)),Ll={key:0},Cl={setup(r){const l=L(),s=B(),t=y();R(async()=>{l.status=0,await l.getProductById(s.query.id,s.query.category),t.value=l.product});const o=async()=>{await l.updateProduct(s.query.id,t.value)};return(u,d)=>t.value?(c(),_("div",pl,[_l,e("form",{onSubmit:d[10]||(d[10]=j(i=>o(),["prevent"]))},[e("div",null,[ml,m(e("input",{required:"",type:"text",id:"name","onUpdate:modelValue":d[0]||(d[0]=i=>t.value.general.name=i)},null,512),[[v,t.value.general.name]])]),e("div",null,[vl,m(e("input",{required:"",type:"text",id:"brand","onUpdate:modelValue":d[1]||(d[1]=i=>t.value.general.brand=i)},null,512),[[v,t.value.general.brand]])]),e("div",null,[hl,m(e("input",{required:"",type:"text",id:"price","onUpdate:modelValue":d[2]||(d[2]=i=>t.value.general.price=i)},null,512),[[v,t.value.general.price]]),gl]),e("div",null,[yl,m(e("input",{type:"number",id:"sale_price","onUpdate:modelValue":d[3]||(d[3]=i=>t.value.general.sale_price=i)},null,512),[[v,t.value.general.sale_price]]),fl]),e("div",null,[xl,m(e("input",{required:"",type:"text",id:"img","onUpdate:modelValue":d[4]||(d[4]=i=>t.value.image=i)},null,512),[[v,t.value.image]]),e("a",{href:t.value.image,target:"blank",class:"preview"},"Preview",8,$l)]),e("div",null,[bl,m(e("input",{required:"",type:"text",id:"storage","onUpdate:modelValue":d[5]||(d[5]=i=>t.value.storage=i)},null,512),[[v,t.value.storage]]),wl]),e("div",null,[kl,m(e("input",{required:"",type:"number",id:"memory","onUpdate:modelValue":d[6]||(d[6]=i=>t.value.memory=i)},null,512),[[v,t.value.memory]]),Pl]),e("div",null,[Ul,m(e("input",{required:"",type:"text",id:"cpu","onUpdate:modelValue":d[7]||(d[7]=i=>t.value.processor=i)},null,512),[[v,t.value.processor]])]),e("div",null,[ql,m(e("input",{required:"",type:"text",id:"camera","onUpdate:modelValue":d[8]||(d[8]=i=>t.value.camera=i)},null,512),[[v,t.value.camera]]),Vl]),e("div",null,[Sl,m(e("input",{required:"",type:"text",id:"resolution","onUpdate:modelValue":d[9]||(d[9]=i=>t.value.resolution=i)},null,512),[[v,t.value.resolution]]),Al]),Il],32),n(l).status==200?(c(),_("p",Ll,"Success!")):b("",!0)])):b("",!0)}};var Ml=I(Cl,[["__scopeId","data-v-59beb3d8"]]);const Bl={setup(r){const l=B();return(s,t)=>(c(),_("div",null,[n(l).query.category=="laptop"?(c(),M(cl,{key:0,productId:n(l).query.id},null,8,["productId"])):b("",!0),n(l).query.category=="phone"?(c(),M(Ml,{key:1})):b("",!0)]))}};var Nl=I(Bl,[["__scopeId","data-v-28bab604"]]);const Rl=[{path:"/",name:"Home",component:he},{path:"/laptop",name:"Laptop",component:Ne},{path:"/phone",name:"Phone",component:Re},{path:"/:category/:id",name:"Product Detail",component:qt},{path:"/admin",name:"Admin Home",component:Ot,children:[{path:"products/:category",name:"Admin Product View",component:Zs},{path:"add",name:"Add",component:Go},{path:"update",name:"Update",component:Nl}]}],K=Y({history:Z(),routes:Rl}),zl=ee(ce);zl.use(K).use(te()).mount("#app");

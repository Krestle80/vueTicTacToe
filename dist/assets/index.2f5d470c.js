const Ho=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};Ho();function Ar(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const $o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yo=Ar($o);function ui(e){return!!e||e===""}function Tr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ee(r)?qo(r):Tr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ee(e))return e;if(Q(e))return e}}const Wo=/;(?![^(]*\))/g,Ko=/:(.+)/;function qo(e){const t={};return e.split(Wo).forEach(n=>{if(n){const r=n.split(Ko);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Or(e){let t="";if(ee(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=Or(e[n]);r&&(t+=r+" ")}else if(Q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Xo=e=>ee(e)?e:e==null?"":F(e)||Q(e)&&(e.toString===pi||!L(e.toString))?JSON.stringify(e,di,2):String(e),di=(e,t)=>t&&t.__v_isRef?di(e,t.value):gt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:mi(t)?{[`Set(${t.size})`]:[...t.values()]}:Q(t)&&!F(t)&&!gi(t)?String(t):t,W={},pt=[],Ie=()=>{},Vo=()=>!1,Jo=/^on[^a-z]/,xn=e=>Jo.test(e),Er=e=>e.startsWith("onUpdate:"),ie=Object.assign,Cr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Go=Object.prototype.hasOwnProperty,D=(e,t)=>Go.call(e,t),F=Array.isArray,gt=e=>wn(e)==="[object Map]",mi=e=>wn(e)==="[object Set]",L=e=>typeof e=="function",ee=e=>typeof e=="string",Ir=e=>typeof e=="symbol",Q=e=>e!==null&&typeof e=="object",hi=e=>Q(e)&&L(e.then)&&L(e.catch),pi=Object.prototype.toString,wn=e=>pi.call(e),Zo=e=>wn(e).slice(8,-1),gi=e=>wn(e)==="[object Object]",Pr=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,en=Ar(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_n=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Qo=/-(\w)/g,Pe=_n(e=>e.replace(Qo,(t,n)=>n?n.toUpperCase():"")),es=/\B([A-Z])/g,wt=_n(e=>e.replace(es,"-$1").toLowerCase()),kn=_n(e=>e.charAt(0).toUpperCase()+e.slice(1)),Dn=_n(e=>e?`on${kn(e)}`:""),ln=(e,t)=>!Object.is(e,t),Bn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},fn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ts=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let da;const ns=()=>da||(da=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Te;class rs{constructor(t){this.active=!0,this.effects=[],this.cleanups=[],!t&&Te&&(this.parent=Te,this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Te;try{return Te=this,t()}finally{Te=n}}}on(){Te=this}off(){Te=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function as(e,t=Te){t&&t.active&&t.effects.push(e)}const Sr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},vi=e=>(e.w&qe)>0,bi=e=>(e.n&qe)>0,is=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qe},os=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];vi(a)&&!bi(a)?a.delete(e):t[n++]=a,a.w&=~qe,a.n&=~qe}t.length=n}},Jn=new WeakMap;let Pt=0,qe=1;const Gn=30;let be;const tt=Symbol(""),Zn=Symbol("");class Nr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,as(this,r)}run(){if(!this.active)return this.fn();let t=be,n=We;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=be,be=this,We=!0,qe=1<<++Pt,Pt<=Gn?is(this):ma(this),this.fn()}finally{Pt<=Gn&&os(this),qe=1<<--Pt,be=this.parent,We=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){be===this?this.deferStop=!0:this.active&&(ma(this),this.onStop&&this.onStop(),this.active=!1)}}function ma(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let We=!0;const yi=[];function _t(){yi.push(We),We=!1}function kt(){const e=yi.pop();We=e===void 0?!0:e}function de(e,t,n){if(We&&be){let r=Jn.get(e);r||Jn.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Sr()),xi(a)}}function xi(e,t){let n=!1;Pt<=Gn?bi(e)||(e.n|=qe,n=!vi(e)):n=!e.has(be),n&&(e.add(be),be.deps.push(e))}function Fe(e,t,n,r,a,i){const o=Jn.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?Pr(n)&&s.push(o.get("length")):(s.push(o.get(tt)),gt(e)&&s.push(o.get(Zn)));break;case"delete":F(e)||(s.push(o.get(tt)),gt(e)&&s.push(o.get(Zn)));break;case"set":gt(e)&&s.push(o.get(tt));break}if(s.length===1)s[0]&&Qn(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);Qn(Sr(l))}}function Qn(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&ha(r);for(const r of n)r.computed||ha(r)}function ha(e,t){(e!==be||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ss=Ar("__proto__,__v_isRef,__isVue"),wi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ir)),ls=Mr(),fs=Mr(!1,!0),cs=Mr(!0),pa=us();function us(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)de(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){_t();const r=U(this)[t].apply(this,n);return kt(),r}}),e}function Mr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Es:Oi:t?Ti:Ai).get(r))return r;const o=F(r);if(!e&&o&&D(pa,a))return Reflect.get(pa,a,i);const s=Reflect.get(r,a,i);return(Ir(a)?wi.has(a):ss(a))||(e||de(r,"get",a),t)?s:ne(s)?o&&Pr(a)?s:s.value:Q(s)?e?Ei(s):Lr(s):s}}const ds=_i(),ms=_i(!0);function _i(e=!1){return function(n,r,a,i){let o=n[r];if(Bt(o)&&ne(o)&&!ne(a))return!1;if(!e&&!Bt(a)&&(er(a)||(a=U(a),o=U(o)),!F(n)&&ne(o)&&!ne(a)))return o.value=a,!0;const s=F(n)&&Pr(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?ln(a,o)&&Fe(n,"set",r,a):Fe(n,"add",r,a)),l}}function hs(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Fe(e,"delete",t,void 0),r}function ps(e,t){const n=Reflect.has(e,t);return(!Ir(t)||!wi.has(t))&&de(e,"has",t),n}function gs(e){return de(e,"iterate",F(e)?"length":tt),Reflect.ownKeys(e)}const ki={get:ls,set:ds,deleteProperty:hs,has:ps,ownKeys:gs},vs={get:cs,set(e,t){return!0},deleteProperty(e,t){return!0}},bs=ie({},ki,{get:fs,set:ms}),Fr=e=>e,An=e=>Reflect.getPrototypeOf(e);function Xt(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&de(a,"get",t),de(a,"get",i));const{has:o}=An(a),s=r?Fr:n?Dr:jr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Vt(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&de(r,"has",e),de(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Jt(e,t=!1){return e=e.__v_raw,!t&&de(U(e),"iterate",tt),Reflect.get(e,"size",e)}function ga(e){e=U(e);const t=U(this);return An(t).has.call(t,e)||(t.add(e),Fe(t,"add",e,e)),this}function va(e,t){t=U(t);const n=U(this),{has:r,get:a}=An(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?ln(t,o)&&Fe(n,"set",e,t):Fe(n,"add",e,t),this}function ba(e){const t=U(this),{has:n,get:r}=An(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Fe(t,"delete",e,void 0),i}function ya(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Fe(e,"clear",void 0,void 0),n}function Gt(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?Fr:e?Dr:jr;return!e&&de(s,"iterate",tt),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function Zt(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=gt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Fr:t?Dr:jr;return!t&&de(i,"iterate",l?Zn:tt),{next(){const{value:m,done:b}=u.next();return b?{value:m,done:b}:{value:s?[d(m[0]),d(m[1])]:d(m),done:b}},[Symbol.iterator](){return this}}}}function Ue(e){return function(...t){return e==="delete"?!1:this}}function ys(){const e={get(i){return Xt(this,i)},get size(){return Jt(this)},has:Vt,add:ga,set:va,delete:ba,clear:ya,forEach:Gt(!1,!1)},t={get(i){return Xt(this,i,!1,!0)},get size(){return Jt(this)},has:Vt,add:ga,set:va,delete:ba,clear:ya,forEach:Gt(!1,!0)},n={get(i){return Xt(this,i,!0)},get size(){return Jt(this,!0)},has(i){return Vt.call(this,i,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:Gt(!0,!1)},r={get(i){return Xt(this,i,!0,!0)},get size(){return Jt(this,!0)},has(i){return Vt.call(this,i,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:Gt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Zt(i,!1,!1),n[i]=Zt(i,!0,!1),t[i]=Zt(i,!1,!0),r[i]=Zt(i,!0,!0)}),[e,n,t,r]}const[xs,ws,_s,ks]=ys();function Rr(e,t){const n=t?e?ks:_s:e?ws:xs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const As={get:Rr(!1,!1)},Ts={get:Rr(!1,!0)},Os={get:Rr(!0,!1)},Ai=new WeakMap,Ti=new WeakMap,Oi=new WeakMap,Es=new WeakMap;function Cs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Is(e){return e.__v_skip||!Object.isExtensible(e)?0:Cs(Zo(e))}function Lr(e){return Bt(e)?e:zr(e,!1,ki,As,Ai)}function Ps(e){return zr(e,!1,bs,Ts,Ti)}function Ei(e){return zr(e,!0,vs,Os,Oi)}function zr(e,t,n,r,a){if(!Q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Is(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function vt(e){return Bt(e)?vt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function er(e){return!!(e&&e.__v_isShallow)}function Ci(e){return vt(e)||Bt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Ii(e){return fn(e,"__v_skip",!0),e}const jr=e=>Q(e)?Lr(e):e,Dr=e=>Q(e)?Ei(e):e;function Ss(e){We&&be&&(e=U(e),xi(e.dep||(e.dep=Sr())))}function Ns(e,t){e=U(e),e.dep&&Qn(e.dep)}function ne(e){return!!(e&&e.__v_isRef===!0)}function Ms(e){return ne(e)?e.value:e}const Fs={get:(e,t,n)=>Ms(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ne(a)&&!ne(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Pi(e){return vt(e)?e:new Proxy(e,Fs)}class Rs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Nr(t,()=>{this._dirty||(this._dirty=!0,Ns(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return Ss(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ls(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Ie):(r=e.get,a=e.set),new Rs(r,a,i||!a,n)}function Ke(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Tn(i,t,n)}return a}function we(e,t,n,r){if(L(e)){const i=Ke(e,t,n,r);return i&&hi(i)&&i.catch(o=>{Tn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(we(e[i],t,n,r));return a}function Tn(e,t,n,r){if(t&&t.vnode,t){let a=t.parent;const i=t.proxy,o=n;for(;a;){const l=a.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,i,o)===!1)return}a=a.parent}const s=t.appContext.config.errorHandler;if(s){Ke(s,null,10,[e,i,o]);return}}zs(e)}function zs(e,t,n,r){console.error(e)}let cn=!1,tr=!1;const ue=[];let Me=0;const Ft=[];let St=null,ct=0;const Rt=[];let $e=null,ut=0;const Si=Promise.resolve();let Br=null,nr=null;function js(e){const t=Br||Si;return e?t.then(this?e.bind(this):e):t}function Ds(e){let t=Me+1,n=ue.length;for(;t<n;){const r=t+n>>>1;Ut(ue[r])<e?t=r+1:n=r}return t}function Ni(e){(!ue.length||!ue.includes(e,cn&&e.allowRecurse?Me+1:Me))&&e!==nr&&(e.id==null?ue.push(e):ue.splice(Ds(e.id),0,e),Mi())}function Mi(){!cn&&!tr&&(tr=!0,Br=Si.then(Li))}function Bs(e){const t=ue.indexOf(e);t>Me&&ue.splice(t,1)}function Fi(e,t,n,r){F(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Mi()}function Us(e){Fi(e,St,Ft,ct)}function Hs(e){Fi(e,$e,Rt,ut)}function On(e,t=null){if(Ft.length){for(nr=t,St=[...new Set(Ft)],Ft.length=0,ct=0;ct<St.length;ct++)St[ct]();St=null,ct=0,nr=null,On(e,t)}}function Ri(e){if(On(),Rt.length){const t=[...new Set(Rt)];if(Rt.length=0,$e){$e.push(...t);return}for($e=t,$e.sort((n,r)=>Ut(n)-Ut(r)),ut=0;ut<$e.length;ut++)$e[ut]();$e=null,ut=0}}const Ut=e=>e.id==null?1/0:e.id;function Li(e){tr=!1,cn=!0,On(e),ue.sort((n,r)=>Ut(n)-Ut(r));const t=Ie;try{for(Me=0;Me<ue.length;Me++){const n=ue[Me];n&&n.active!==!1&&Ke(n,null,14)}}finally{Me=0,ue.length=0,Ri(),cn=!1,Br=null,(ue.length||Ft.length||Rt.length)&&Li(e)}}function $s(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||W;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:b}=r[d]||W;b&&(a=n.map(T=>T.trim())),m&&(a=n.map(ts))}let s,l=r[s=Dn(t)]||r[s=Dn(Pe(t))];!l&&i&&(l=r[s=Dn(wt(t))]),l&&we(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,we(u,e,6,a)}}function zi(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=u=>{const d=zi(u,t,!0);d&&(s=!0,ie(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):ie(o,i),r.set(e,o),o)}function En(e,t){return!e||!xn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,wt(t))||D(e,t))}let Ee=null,ji=null;function un(e){const t=Ee;return Ee=e,ji=e&&e.type.__scopeId||null,t}function Ys(e,t=Ee,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Pa(-1);const i=un(t),o=e(...a);return un(i),r._d&&Pa(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Un(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:b,setupState:T,ctx:R,inheritAttrs:z}=e;let S,y;const O=un(e);try{if(n.shapeFlag&4){const j=a||r;S=Oe(d.call(j,j,m,i,T,b,R)),y=l}else{const j=t;S=Oe(j.length>1?j(i,{attrs:l,slots:s,emit:u}):j(i,null)),y=t.props?l:Ws(l)}}catch(j){Lt.length=0,Tn(j,e,1),S=Z(rt)}let N=S;if(y&&z!==!1){const j=Object.keys(y),{shapeFlag:Y}=N;j.length&&Y&7&&(o&&j.some(Er)&&(y=Ks(y,o)),N=yt(N,y))}return n.dirs&&(N=yt(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),S=N,un(O),S}const Ws=e=>{let t;for(const n in e)(n==="class"||n==="style"||xn(n))&&((t||(t={}))[n]=e[n]);return t},Ks=(e,t)=>{const n={};for(const r in e)(!Er(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function qs(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?xa(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const b=d[m];if(o[b]!==r[b]&&!En(u,b))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?xa(r,o,u):!0:!!o;return!1}function xa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!En(n,i))return!0}return!1}function Xs({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Vs=e=>e.__isSuspense;function Js(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Hs(e)}function Gs(e,t){if(te){let n=te.provides;const r=te.parent&&te.parent.provides;r===n&&(n=te.provides=Object.create(r)),n[e]=t}}function Hn(e,t,n=!1){const r=te||Ee;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const wa={};function tn(e,t,n){return Di(e,t,n)}function Di(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=W){const s=te;let l,u=!1,d=!1;if(ne(e)?(l=()=>e.value,u=er(e)):vt(e)?(l=()=>e,r=!0):F(e)?(d=!0,u=e.some(y=>vt(y)||er(y)),l=()=>e.map(y=>{if(ne(y))return y.value;if(vt(y))return dt(y);if(L(y))return Ke(y,s,2)})):L(e)?t?l=()=>Ke(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),we(e,s,3,[b])}:l=Ie,t&&r){const y=l;l=()=>dt(y())}let m,b=y=>{m=S.onStop=()=>{Ke(y,s,4)}};if($t)return b=Ie,t?n&&we(t,s,3,[l(),d?[]:void 0,b]):l(),Ie;let T=d?[]:wa;const R=()=>{if(!!S.active)if(t){const y=S.run();(r||u||(d?y.some((O,N)=>ln(O,T[N])):ln(y,T)))&&(m&&m(),we(t,s,3,[y,T===wa?void 0:T,b]),T=y)}else S.run()};R.allowRecurse=!!t;let z;a==="sync"?z=R:a==="post"?z=()=>le(R,s&&s.suspense):z=()=>Us(R);const S=new Nr(l,z);return t?n?R():T=S.run():a==="post"?le(S.run.bind(S),s&&s.suspense):S.run(),()=>{S.stop(),s&&s.scope&&Cr(s.scope.effects,S)}}function Zs(e,t,n){const r=this.proxy,a=ee(e)?e.includes(".")?Bi(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=te;xt(this);const s=Di(a,i.bind(r),n);return o?xt(o):nt(),s}function Bi(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function dt(e,t){if(!Q(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ne(e))dt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)dt(e[n],t);else if(mi(e)||gt(e))e.forEach(n=>{dt(n,t)});else if(gi(e))for(const n in e)dt(e[n],t);return e}function Ur(e){return L(e)?{setup:e,name:e.name}:e}const nn=e=>!!e.type.__asyncLoader,Ui=e=>e.type.__isKeepAlive;function Qs(e,t){Hi(e,"a",t)}function el(e,t){Hi(e,"da",t)}function Hi(e,t,n=te){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Cn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Ui(a.parent.vnode)&&tl(r,t,n,a),a=a.parent}}function tl(e,t,n,r){const a=Cn(t,e,r,!0);$i(()=>{Cr(r[t],a)},n)}function Cn(e,t,n=te,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;_t(),xt(n);const s=we(t,n,e,o);return nt(),kt(),s});return r?a.unshift(i):a.push(i),i}}const je=e=>(t,n=te)=>(!$t||e==="sp")&&Cn(e,t,n),nl=je("bm"),rl=je("m"),al=je("bu"),il=je("u"),ol=je("bum"),$i=je("um"),sl=je("sp"),ll=je("rtg"),fl=je("rtc");function cl(e,t=te){Cn("ec",e,t)}function Je(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(_t(),we(l,n,8,[e.el,s,e,t]),kt())}}const Yi="components";function _a(e,t){return dl(Yi,e,!0,t)||e}const ul=Symbol();function dl(e,t,n,r=!1){const a=Ee||te;if(a){const i=a.type;if(e===Yi){const s=$l(i);if(s&&(s===t||s===Pe(t)||s===kn(Pe(t))))return i}const o=ka(a[e]||i[e],t)||ka(a.appContext[e],t);return!o&&r?i:o}}function ka(e,t){return e&&(e[t]||e[Pe(t)]||e[kn(Pe(t))])}function $n(e,t,n,r){let a;const i=n&&n[r];if(F(e)||ee(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(Q(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];a[s]=t(e[u],u,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const rr=e=>e?no(e)?Wr(e)||e.proxy:rr(e.parent):null,dn=ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>rr(e.parent),$root:e=>rr(e.root),$emit:e=>e.emit,$options:e=>Ki(e),$forceUpdate:e=>e.f||(e.f=()=>Ni(e.update)),$nextTick:e=>e.n||(e.n=js.bind(e.proxy)),$watch:e=>Zs.bind(e)}),ml={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const T=o[t];if(T!==void 0)switch(T){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==W&&D(r,t))return o[t]=1,r[t];if(a!==W&&D(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&D(u,t))return o[t]=3,i[t];if(n!==W&&D(n,t))return o[t]=4,n[t];ar&&(o[t]=0)}}const d=dn[t];let m,b;if(d)return t==="$attrs"&&de(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==W&&D(n,t))return o[t]=4,n[t];if(b=l.config.globalProperties,D(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==W&&D(a,t)?(a[t]=n,!0):r!==W&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==W&&D(e,o)||t!==W&&D(t,o)||(s=i[0])&&D(s,o)||D(r,o)||D(dn,o)||D(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ar=!0;function hl(e){const t=Ki(e),n=e.proxy,r=e.ctx;ar=!1,t.beforeCreate&&Aa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:b,beforeUpdate:T,updated:R,activated:z,deactivated:S,beforeDestroy:y,beforeUnmount:O,destroyed:N,unmounted:j,render:Y,renderTracked:re,renderTriggered:fe,errorCaptured:_e,serverPrefetch:oe,expose:Tt,inheritAttrs:ot,components:Ot,directives:Kt,filters:oa}=t;if(u&&pl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const K=o[J];L(K)&&(r[J]=K.bind(n))}if(a){const J=a.call(n,n);Q(J)&&(e.data=Lr(J))}if(ar=!0,i)for(const J in i){const K=i[J],Se=L(K)?K.bind(n,n):L(K.get)?K.get.bind(n,n):Ie,Ln=!L(K)&&L(K.set)?K.set.bind(n):Ie,Et=pe({get:Se,set:Ln});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Et.value,set:st=>Et.value=st})}if(s)for(const J in s)Wi(s[J],r,n,J);if(l){const J=L(l)?l.call(n):l;Reflect.ownKeys(J).forEach(K=>{Gs(K,J[K])})}d&&Aa(d,e,"c");function se(J,K){F(K)?K.forEach(Se=>J(Se.bind(n))):K&&J(K.bind(n))}if(se(nl,m),se(rl,b),se(al,T),se(il,R),se(Qs,z),se(el,S),se(cl,_e),se(fl,re),se(ll,fe),se(ol,O),se($i,j),se(sl,oe),F(Tt))if(Tt.length){const J=e.exposed||(e.exposed={});Tt.forEach(K=>{Object.defineProperty(J,K,{get:()=>n[K],set:Se=>n[K]=Se})})}else e.exposed||(e.exposed={});Y&&e.render===Ie&&(e.render=Y),ot!=null&&(e.inheritAttrs=ot),Ot&&(e.components=Ot),Kt&&(e.directives=Kt)}function pl(e,t,n,r=!1){F(e)&&(e=ir(e));for(const a in e){const i=e[a];let o;Q(i)?"default"in i?o=Hn(i.from||a,i.default,!0):o=Hn(i.from||a):o=Hn(i),ne(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Aa(e,t,n){we(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Wi(e,t,n,r){const a=r.includes(".")?Bi(n,r):()=>n[r];if(ee(e)){const i=t[e];L(i)&&tn(a,i)}else if(L(e))tn(a,e.bind(n));else if(Q(e))if(F(e))e.forEach(i=>Wi(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&tn(a,i,e)}}function Ki(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>mn(l,u,o,!0)),mn(l,t,o)),i.set(t,l),l}function mn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&mn(e,i,n,!0),a&&a.forEach(o=>mn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=gl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const gl={data:Ta,props:Ze,emits:Ze,methods:Ze,computed:Ze,beforeCreate:ae,created:ae,beforeMount:ae,mounted:ae,beforeUpdate:ae,updated:ae,beforeDestroy:ae,beforeUnmount:ae,destroyed:ae,unmounted:ae,activated:ae,deactivated:ae,errorCaptured:ae,serverPrefetch:ae,components:Ze,directives:Ze,watch:bl,provide:Ta,inject:vl};function Ta(e,t){return t?e?function(){return ie(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function vl(e,t){return Ze(ir(e),ir(t))}function ir(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ae(e,t){return e?[...new Set([].concat(e,t))]:t}function Ze(e,t){return e?ie(ie(Object.create(null),e),t):t}function bl(e,t){if(!e)return t;if(!t)return e;const n=ie(Object.create(null),e);for(const r in t)n[r]=ae(e[r],t[r]);return n}function yl(e,t,n,r=!1){const a={},i={};fn(i,In,1),e.propsDefaults=Object.create(null),qi(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ps(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function xl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let b=d[m];if(En(e.emitsOptions,b))continue;const T=t[b];if(l)if(D(i,b))T!==i[b]&&(i[b]=T,u=!0);else{const R=Pe(b);a[R]=or(l,s,R,T,e,!1)}else T!==i[b]&&(i[b]=T,u=!0)}}}else{qi(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!D(t,m)&&((d=wt(m))===m||!D(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=or(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!D(t,m)&&!0)&&(delete i[m],u=!0)}u&&Fe(e,"set","$attrs")}function qi(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(en(l))continue;const u=t[l];let d;a&&D(a,d=Pe(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:En(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=U(n),u=s||W;for(let d=0;d<i.length;d++){const m=i[d];n[m]=or(a,l,m,u[m],e,!D(u,m))}}return o}function or(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(xt(a),r=u[n]=l.call(null,t),nt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===wt(n))&&(r=!0))}return r}function Xi(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[b,T]=Xi(m,t,!0);ie(o,b),T&&s.push(...T)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,pt),pt;if(F(i))for(let d=0;d<i.length;d++){const m=Pe(i[d]);Oa(m)&&(o[m]=W)}else if(i)for(const d in i){const m=Pe(d);if(Oa(m)){const b=i[d],T=o[m]=F(b)||L(b)?{type:b}:b;if(T){const R=Ia(Boolean,T.type),z=Ia(String,T.type);T[0]=R>-1,T[1]=z<0||R<z,(R>-1||D(T,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function Oa(e){return e[0]!=="$"}function Ea(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ca(e,t){return Ea(e)===Ea(t)}function Ia(e,t){return F(t)?t.findIndex(n=>Ca(n,e)):L(t)&&Ca(t,e)?0:-1}const Vi=e=>e[0]==="_"||e==="$stable",Hr=e=>F(e)?e.map(Oe):[Oe(e)],wl=(e,t,n)=>{if(t._n)return t;const r=Ys((...a)=>Hr(t(...a)),n);return r._c=!1,r},Ji=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Vi(a))continue;const i=e[a];if(L(i))t[a]=wl(a,i,r);else if(i!=null){const o=Hr(i);t[a]=()=>o}}},Gi=(e,t)=>{const n=Hr(t);e.slots.default=()=>n},_l=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),fn(t,"_",n)):Ji(t,e.slots={})}else e.slots={},t&&Gi(e,t);fn(e.slots,In,1)},kl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=W;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ie(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Ji(t,a)),o=t}else t&&(Gi(e,t),o={default:1});if(i)for(const s in a)!Vi(s)&&!(s in o)&&delete a[s]};function Zi(){return{app:null,config:{isNativeTag:Vo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Al=0;function Tl(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!Q(a)&&(a=null);const i=Zi(),o=new Set;let s=!1;const l=i.app={_uid:Al++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Wl,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&L(u.install)?(o.add(u),u.install(l,...d)):L(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const b=Z(r,a);return b.appContext=i,d&&t?t(b,u):e(b,u,m),s=!0,l._container=u,u.__vue_app__=l,Wr(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function sr(e,t,n,r,a=!1){if(F(e)){e.forEach((b,T)=>sr(b,t&&(F(t)?t[T]:t),n,r,a));return}if(nn(r)&&!a)return;const i=r.shapeFlag&4?Wr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===W?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(ee(u)?(d[u]=null,D(m,u)&&(m[u]=null)):ne(u)&&(u.value=null)),L(l))Ke(l,s,12,[o,d]);else{const b=ee(l),T=ne(l);if(b||T){const R=()=>{if(e.f){const z=b?d[l]:l.value;a?F(z)&&Cr(z,i):F(z)?z.includes(i)||z.push(i):b?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else b?(d[l]=o,D(m,l)&&(m[l]=o)):ne(l)&&(l.value=o,e.k&&(d[e.k]=o))};o?(R.id=-1,le(R,n)):R()}}}const le=Js;function Ol(e){return El(e)}function El(e,t){const n=ns();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:b,setScopeId:T=Ie,cloneNode:R,insertStaticContent:z}=e,S=(f,c,h,g=null,p=null,w=null,k=!1,x=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!It(f,c)&&(g=qt(f),Be(f,p,w,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:v,ref:C,shapeFlag:E}=c;switch(v){case $r:y(f,c,h,g);break;case rt:O(f,c,h,g);break;case Yn:f==null&&N(c,h,g,k);break;case he:Kt(f,c,h,g,p,w,k,x,_);break;default:E&1?re(f,c,h,g,p,w,k,x,_):E&6?oa(f,c,h,g,p,w,k,x,_):(E&64||E&128)&&v.process(f,c,h,g,p,w,k,x,_,lt)}C!=null&&p&&sr(C,f&&f.ref,w,c||f,!c)},y=(f,c,h,g)=>{if(f==null)r(c.el=s(c.children),h,g);else{const p=c.el=f.el;c.children!==f.children&&u(p,c.children)}},O=(f,c,h,g)=>{f==null?r(c.el=l(c.children||""),h,g):c.el=f.el},N=(f,c,h,g)=>{[f.el,f.anchor]=z(f.children,c,h,g,f.el,f.anchor)},j=({el:f,anchor:c},h,g)=>{let p;for(;f&&f!==c;)p=b(f),r(f,h,g),f=p;r(c,h,g)},Y=({el:f,anchor:c})=>{let h;for(;f&&f!==c;)h=b(f),a(f),f=h;a(c)},re=(f,c,h,g,p,w,k,x,_)=>{k=k||c.type==="svg",f==null?fe(c,h,g,p,w,k,x,_):Tt(f,c,p,w,k,x,_)},fe=(f,c,h,g,p,w,k,x)=>{let _,v;const{type:C,props:E,shapeFlag:I,transition:M,patchFlag:B,dirs:H}=f;if(f.el&&R!==void 0&&B===-1)_=f.el=R(f.el);else{if(_=f.el=o(f.type,w,E&&E.is,E),I&8?d(_,f.children):I&16&&oe(f.children,_,null,g,p,w&&C!=="foreignObject",k,x),H&&Je(f,null,g,"created"),E){for(const q in E)q!=="value"&&!en(q)&&i(_,q,null,E[q],w,f.children,g,p,Ne);"value"in E&&i(_,"value",null,E.value),(v=E.onVnodeBeforeMount)&&Ae(v,g,f)}_e(_,f,f.scopeId,k,g)}H&&Je(f,null,g,"beforeMount");const $=(!p||p&&!p.pendingBranch)&&M&&!M.persisted;$&&M.beforeEnter(_),r(_,c,h),((v=E&&E.onVnodeMounted)||$||H)&&le(()=>{v&&Ae(v,g,f),$&&M.enter(_),H&&Je(f,null,g,"mounted")},p)},_e=(f,c,h,g,p)=>{if(h&&T(f,h),g)for(let w=0;w<g.length;w++)T(f,g[w]);if(p){let w=p.subTree;if(c===w){const k=p.vnode;_e(f,k,k.scopeId,k.slotScopeIds,p.parent)}}},oe=(f,c,h,g,p,w,k,x,_=0)=>{for(let v=_;v<f.length;v++){const C=f[v]=x?Ye(f[v]):Oe(f[v]);S(null,C,c,h,g,p,w,k,x)}},Tt=(f,c,h,g,p,w,k)=>{const x=c.el=f.el;let{patchFlag:_,dynamicChildren:v,dirs:C}=c;_|=f.patchFlag&16;const E=f.props||W,I=c.props||W;let M;h&&Ge(h,!1),(M=I.onVnodeBeforeUpdate)&&Ae(M,h,c,f),C&&Je(c,f,h,"beforeUpdate"),h&&Ge(h,!0);const B=p&&c.type!=="foreignObject";if(v?ot(f.dynamicChildren,v,x,h,g,B,w):k||Se(f,c,x,null,h,g,B,w,!1),_>0){if(_&16)Ot(x,c,E,I,h,g,p);else if(_&2&&E.class!==I.class&&i(x,"class",null,I.class,p),_&4&&i(x,"style",E.style,I.style,p),_&8){const H=c.dynamicProps;for(let $=0;$<H.length;$++){const q=H[$],ge=E[q],ft=I[q];(ft!==ge||q==="value")&&i(x,q,ge,ft,p,f.children,h,g,Ne)}}_&1&&f.children!==c.children&&d(x,c.children)}else!k&&v==null&&Ot(x,c,E,I,h,g,p);((M=I.onVnodeUpdated)||C)&&le(()=>{M&&Ae(M,h,c,f),C&&Je(c,f,h,"updated")},g)},ot=(f,c,h,g,p,w,k)=>{for(let x=0;x<c.length;x++){const _=f[x],v=c[x],C=_.el&&(_.type===he||!It(_,v)||_.shapeFlag&70)?m(_.el):h;S(_,v,C,null,g,p,w,k,!0)}},Ot=(f,c,h,g,p,w,k)=>{if(h!==g){for(const x in g){if(en(x))continue;const _=g[x],v=h[x];_!==v&&x!=="value"&&i(f,x,v,_,k,c.children,p,w,Ne)}if(h!==W)for(const x in h)!en(x)&&!(x in g)&&i(f,x,h[x],null,k,c.children,p,w,Ne);"value"in g&&i(f,"value",h.value,g.value)}},Kt=(f,c,h,g,p,w,k,x,_)=>{const v=c.el=f?f.el:s(""),C=c.anchor=f?f.anchor:s("");let{patchFlag:E,dynamicChildren:I,slotScopeIds:M}=c;M&&(x=x?x.concat(M):M),f==null?(r(v,h,g),r(C,h,g),oe(c.children,h,C,p,w,k,x,_)):E>0&&E&64&&I&&f.dynamicChildren?(ot(f.dynamicChildren,I,h,p,w,k,x),(c.key!=null||p&&c===p.subTree)&&Qi(f,c,!0)):Se(f,c,h,C,p,w,k,x,_)},oa=(f,c,h,g,p,w,k,x,_)=>{c.slotScopeIds=x,f==null?c.shapeFlag&512?p.ctx.activate(c,h,g,k,_):Rn(c,h,g,p,w,k,_):se(f,c,_)},Rn=(f,c,h,g,p,w,k)=>{const x=f.component=jl(f,g,p);if(Ui(f)&&(x.ctx.renderer=lt),Dl(x),x.asyncDep){if(p&&p.registerDep(x,J),!f.el){const _=x.subTree=Z(rt);O(null,_,c,h)}return}J(x,f,c,h,p,w,k)},se=(f,c,h)=>{const g=c.component=f.component;if(qs(f,c,h))if(g.asyncDep&&!g.asyncResolved){K(g,c,h);return}else g.next=c,Bs(g.update),g.update();else c.el=f.el,g.vnode=c},J=(f,c,h,g,p,w,k)=>{const x=()=>{if(f.isMounted){let{next:C,bu:E,u:I,parent:M,vnode:B}=f,H=C,$;Ge(f,!1),C?(C.el=B.el,K(f,C,k)):C=B,E&&Bn(E),($=C.props&&C.props.onVnodeBeforeUpdate)&&Ae($,M,C,B),Ge(f,!0);const q=Un(f),ge=f.subTree;f.subTree=q,S(ge,q,m(ge.el),qt(ge),f,p,w),C.el=q.el,H===null&&Xs(f,q.el),I&&le(I,p),($=C.props&&C.props.onVnodeUpdated)&&le(()=>Ae($,M,C,B),p)}else{let C;const{el:E,props:I}=c,{bm:M,m:B,parent:H}=f,$=nn(c);if(Ge(f,!1),M&&Bn(M),!$&&(C=I&&I.onVnodeBeforeMount)&&Ae(C,H,c),Ge(f,!0),E&&jn){const q=()=>{f.subTree=Un(f),jn(E,f.subTree,f,p,null)};$?c.type.__asyncLoader().then(()=>!f.isUnmounted&&q()):q()}else{const q=f.subTree=Un(f);S(null,q,h,g,f,p,w),c.el=q.el}if(B&&le(B,p),!$&&(C=I&&I.onVnodeMounted)){const q=c;le(()=>Ae(C,H,q),p)}(c.shapeFlag&256||H&&nn(H.vnode)&&H.vnode.shapeFlag&256)&&f.a&&le(f.a,p),f.isMounted=!0,c=h=g=null}},_=f.effect=new Nr(x,()=>Ni(v),f.scope),v=f.update=()=>_.run();v.id=f.uid,Ge(f,!0),v()},K=(f,c,h)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,xl(f,c.props,g,h),kl(f,c.children,h),_t(),On(void 0,f.update),kt()},Se=(f,c,h,g,p,w,k,x,_=!1)=>{const v=f&&f.children,C=f?f.shapeFlag:0,E=c.children,{patchFlag:I,shapeFlag:M}=c;if(I>0){if(I&128){Et(v,E,h,g,p,w,k,x,_);return}else if(I&256){Ln(v,E,h,g,p,w,k,x,_);return}}M&8?(C&16&&Ne(v,p,w),E!==v&&d(h,E)):C&16?M&16?Et(v,E,h,g,p,w,k,x,_):Ne(v,p,w,!0):(C&8&&d(h,""),M&16&&oe(E,h,g,p,w,k,x,_))},Ln=(f,c,h,g,p,w,k,x,_)=>{f=f||pt,c=c||pt;const v=f.length,C=c.length,E=Math.min(v,C);let I;for(I=0;I<E;I++){const M=c[I]=_?Ye(c[I]):Oe(c[I]);S(f[I],M,h,null,p,w,k,x,_)}v>C?Ne(f,p,w,!0,!1,E):oe(c,h,g,p,w,k,x,_,E)},Et=(f,c,h,g,p,w,k,x,_)=>{let v=0;const C=c.length;let E=f.length-1,I=C-1;for(;v<=E&&v<=I;){const M=f[v],B=c[v]=_?Ye(c[v]):Oe(c[v]);if(It(M,B))S(M,B,h,null,p,w,k,x,_);else break;v++}for(;v<=E&&v<=I;){const M=f[E],B=c[I]=_?Ye(c[I]):Oe(c[I]);if(It(M,B))S(M,B,h,null,p,w,k,x,_);else break;E--,I--}if(v>E){if(v<=I){const M=I+1,B=M<C?c[M].el:g;for(;v<=I;)S(null,c[v]=_?Ye(c[v]):Oe(c[v]),h,B,p,w,k,x,_),v++}}else if(v>I)for(;v<=E;)Be(f[v],p,w,!0),v++;else{const M=v,B=v,H=new Map;for(v=B;v<=I;v++){const ce=c[v]=_?Ye(c[v]):Oe(c[v]);ce.key!=null&&H.set(ce.key,v)}let $,q=0;const ge=I-B+1;let ft=!1,fa=0;const Ct=new Array(ge);for(v=0;v<ge;v++)Ct[v]=0;for(v=M;v<=E;v++){const ce=f[v];if(q>=ge){Be(ce,p,w,!0);continue}let ke;if(ce.key!=null)ke=H.get(ce.key);else for($=B;$<=I;$++)if(Ct[$-B]===0&&It(ce,c[$])){ke=$;break}ke===void 0?Be(ce,p,w,!0):(Ct[ke-B]=v+1,ke>=fa?fa=ke:ft=!0,S(ce,c[ke],h,null,p,w,k,x,_),q++)}const ca=ft?Cl(Ct):pt;for($=ca.length-1,v=ge-1;v>=0;v--){const ce=B+v,ke=c[ce],ua=ce+1<C?c[ce+1].el:g;Ct[v]===0?S(null,ke,h,ua,p,w,k,x,_):ft&&($<0||v!==ca[$]?st(ke,h,ua,2):$--)}}},st=(f,c,h,g,p=null)=>{const{el:w,type:k,transition:x,children:_,shapeFlag:v}=f;if(v&6){st(f.component.subTree,c,h,g);return}if(v&128){f.suspense.move(c,h,g);return}if(v&64){k.move(f,c,h,lt);return}if(k===he){r(w,c,h);for(let E=0;E<_.length;E++)st(_[E],c,h,g);r(f.anchor,c,h);return}if(k===Yn){j(f,c,h);return}if(g!==2&&v&1&&x)if(g===0)x.beforeEnter(w),r(w,c,h),le(()=>x.enter(w),p);else{const{leave:E,delayLeave:I,afterLeave:M}=x,B=()=>r(w,c,h),H=()=>{E(w,()=>{B(),M&&M()})};I?I(w,B,H):H()}else r(w,c,h)},Be=(f,c,h,g=!1,p=!1)=>{const{type:w,props:k,ref:x,children:_,dynamicChildren:v,shapeFlag:C,patchFlag:E,dirs:I}=f;if(x!=null&&sr(x,null,h,f,!0),C&256){c.ctx.deactivate(f);return}const M=C&1&&I,B=!nn(f);let H;if(B&&(H=k&&k.onVnodeBeforeUnmount)&&Ae(H,c,f),C&6)Uo(f.component,h,g);else{if(C&128){f.suspense.unmount(h,g);return}M&&Je(f,null,c,"beforeUnmount"),C&64?f.type.remove(f,c,h,p,lt,g):v&&(w!==he||E>0&&E&64)?Ne(v,c,h,!1,!0):(w===he&&E&384||!p&&C&16)&&Ne(_,c,h),g&&sa(f)}(B&&(H=k&&k.onVnodeUnmounted)||M)&&le(()=>{H&&Ae(H,c,f),M&&Je(f,null,c,"unmounted")},h)},sa=f=>{const{type:c,el:h,anchor:g,transition:p}=f;if(c===he){Bo(h,g);return}if(c===Yn){Y(f);return}const w=()=>{a(h),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(f.shapeFlag&1&&p&&!p.persisted){const{leave:k,delayLeave:x}=p,_=()=>k(h,w);x?x(f.el,w,_):_()}else w()},Bo=(f,c)=>{let h;for(;f!==c;)h=b(f),a(f),f=h;a(c)},Uo=(f,c,h)=>{const{bum:g,scope:p,update:w,subTree:k,um:x}=f;g&&Bn(g),p.stop(),w&&(w.active=!1,Be(k,f,c,h)),x&&le(x,c),le(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Ne=(f,c,h,g=!1,p=!1,w=0)=>{for(let k=w;k<f.length;k++)Be(f[k],c,h,g,p)},qt=f=>f.shapeFlag&6?qt(f.component.subTree):f.shapeFlag&128?f.suspense.next():b(f.anchor||f.el),la=(f,c,h)=>{f==null?c._vnode&&Be(c._vnode,null,null,!0):S(c._vnode||null,f,c,null,null,null,h),Ri(),c._vnode=f},lt={p:S,um:Be,m:st,r:sa,mt:Rn,mc:oe,pc:Se,pbc:ot,n:qt,o:e};let zn,jn;return t&&([zn,jn]=t(lt)),{render:la,hydrate:zn,createApp:Tl(la,zn)}}function Ge({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Qi(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ye(a[i]),s.el=o.el),n||Qi(o,s))}}function Cl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Il=e=>e.__isTeleport,he=Symbol(void 0),$r=Symbol(void 0),rt=Symbol(void 0),Yn=Symbol(void 0),Lt=[];let ye=null;function V(e=!1){Lt.push(ye=e?null:[])}function Pl(){Lt.pop(),ye=Lt[Lt.length-1]||null}let Ht=1;function Pa(e){Ht+=e}function eo(e){return e.dynamicChildren=Ht>0?ye||pt:null,Pl(),Ht>0&&ye&&ye.push(e),e}function G(e,t,n,r,a,i){return eo(ve(e,t,n,r,a,i,!0))}function lr(e,t,n,r,a){return eo(Z(e,t,n,r,a,!0))}function fr(e){return e?e.__v_isVNode===!0:!1}function It(e,t){return e.type===t.type&&e.key===t.key}const In="__vInternal",to=({key:e})=>e!=null?e:null,rn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ee(e)||ne(e)||L(e)?{i:Ee,r:e,k:t,f:!!n}:e:null;function ve(e,t=null,n=null,r=0,a=null,i=e===he?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&to(t),ref:t&&rn(t),scopeId:ji,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Yr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ee(n)?8:16),Ht>0&&!o&&ye&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ye.push(l),l}const Z=Sl;function Sl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===ul)&&(e=rt),fr(e)){const s=yt(e,t,!0);return n&&Yr(s,n),Ht>0&&!i&&ye&&(s.shapeFlag&6?ye[ye.indexOf(e)]=s:ye.push(s)),s.patchFlag|=-2,s}if(Yl(e)&&(e=e.__vccOpts),t){t=Nl(t);let{class:s,style:l}=t;s&&!ee(s)&&(t.class=Or(s)),Q(l)&&(Ci(l)&&!F(l)&&(l=ie({},l)),t.style=Tr(l))}const o=ee(e)?1:Vs(e)?128:Il(e)?64:Q(e)?4:L(e)?2:0;return ve(e,t,n,r,a,o,i,!0)}function Nl(e){return e?Ci(e)||In in e?ie({},e):e:null}function yt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Rl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&to(s),ref:t&&t.ref?n&&a?F(a)?a.concat(rn(t)):[a,rn(t)]:rn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==he?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&yt(e.ssContent),ssFallback:e.ssFallback&&yt(e.ssFallback),el:e.el,anchor:e.anchor}}function Ml(e=" ",t=0){return Z($r,null,e,t)}function Fl(e,t){return t?(V(),lr(rt,null,e)):Z(rt,null,e)}function Oe(e){return e==null||typeof e=="boolean"?Z(rt):F(e)?Z(he,null,e.slice()):typeof e=="object"?Ye(e):Z($r,null,String(e))}function Ye(e){return e.el===null||e.memo?e:yt(e)}function Yr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Yr(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(In in t)?t._ctx=Ee:a===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),r&64?(n=16,t=[Ml(t)]):n=8);e.children=t,e.shapeFlag|=n}function Rl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Or([t.class,r.class]));else if(a==="style")t.style=Tr([t.style,r.style]);else if(xn(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ae(e,t,n,r=null){we(e,t,7,[n,r])}const Ll=Zi();let zl=0;function jl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Ll,i={uid:zl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new rs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xi(r,a),emitsOptions:zi(r,a),emit:null,emitted:null,propsDefaults:W,inheritAttrs:r.inheritAttrs,ctx:W,data:W,props:W,attrs:W,slots:W,refs:W,setupState:W,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=$s.bind(null,i),e.ce&&e.ce(i),i}let te=null;const xt=e=>{te=e,e.scope.on()},nt=()=>{te&&te.scope.off(),te=null};function no(e){return e.vnode.shapeFlag&4}let $t=!1;function Dl(e,t=!1){$t=t;const{props:n,children:r}=e.vnode,a=no(e);yl(e,n,a,t),_l(e,r);const i=a?Bl(e,t):void 0;return $t=!1,i}function Bl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ii(new Proxy(e.ctx,ml));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Hl(e):null;xt(e),_t();const i=Ke(r,e,0,[e.props,a]);if(kt(),nt(),hi(i)){if(i.then(nt,nt),t)return i.then(o=>{Sa(e,o,t)}).catch(o=>{Tn(o,e,0)});e.asyncDep=i}else Sa(e,i,t)}else ro(e,t)}function Sa(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Q(t)&&(e.setupState=Pi(t)),ro(e,n)}let Na;function ro(e,t,n){const r=e.type;if(!e.render){if(!t&&Na&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=ie(ie({isCustomElement:i,delimiters:s},o),l);r.render=Na(a,u)}}e.render=r.render||Ie}xt(e),_t(),hl(e),kt(),nt()}function Ul(e){return new Proxy(e.attrs,{get(t,n){return de(e,"get","$attrs"),t[n]}})}function Hl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Ul(e))},slots:e.slots,emit:e.emit,expose:t}}function Wr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Pi(Ii(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in dn)return dn[n](e)}}))}function $l(e){return L(e)&&e.displayName||e.name}function Yl(e){return L(e)&&"__vccOpts"in e}const pe=(e,t)=>Ls(e,t,$t);function ao(e,t,n){const r=arguments.length;return r===2?Q(t)&&!F(t)?fr(t)?Z(e,null,[t]):Z(e,t):Z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fr(n)&&(n=[n]),Z(e,t,n))}const Wl="3.2.34",Kl="http://www.w3.org/2000/svg",Qe=typeof document!="undefined"?document:null,Ma=Qe&&Qe.createElement("template"),ql={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Qe.createElementNS(Kl,e):Qe.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Qe.createTextNode(e),createComment:e=>Qe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ma.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ma.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Xl(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Vl(e,t,n){const r=e.style,a=ee(n);if(n&&!a){for(const i in n)cr(r,i,n[i]);if(t&&!ee(t))for(const i in t)n[i]==null&&cr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Fa=/\s*!important$/;function cr(e,t,n){if(F(n))n.forEach(r=>cr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Jl(e,t);Fa.test(n)?e.setProperty(wt(r),n.replace(Fa,""),"important"):e[r]=n}}const Ra=["Webkit","Moz","ms"],Wn={};function Jl(e,t){const n=Wn[t];if(n)return n;let r=Pe(t);if(r!=="filter"&&r in e)return Wn[t]=r;r=kn(r);for(let a=0;a<Ra.length;a++){const i=Ra[a]+r;if(i in e)return Wn[t]=i}return t}const La="http://www.w3.org/1999/xlink";function Gl(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(La,t.slice(6,t.length)):e.setAttributeNS(La,t,n);else{const i=Yo(t);n==null||i&&!ui(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Zl(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ui(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[io,Ql]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let ur=0;const ef=Promise.resolve(),tf=()=>{ur=0},nf=()=>ur||(ef.then(tf),ur=io());function rf(e,t,n,r){e.addEventListener(t,n,r)}function af(e,t,n,r){e.removeEventListener(t,n,r)}function of(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=sf(t);if(r){const u=i[t]=lf(r,a);rf(e,s,u,l)}else o&&(af(e,s,o,l),i[t]=void 0)}}const za=/(?:Once|Passive|Capture)$/;function sf(e){let t;if(za.test(e)){t={};let n;for(;n=e.match(za);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[wt(e.slice(2)),t]}function lf(e,t){const n=r=>{const a=r.timeStamp||io();(Ql||a>=n.attached-1)&&we(ff(r,n.value),t,5,[r])};return n.value=e,n.attached=nf(),n}function ff(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ja=/^on[a-z]/,cf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Xl(e,r,a):t==="style"?Vl(e,n,r):xn(t)?Er(t)||of(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):uf(e,t,r,a))?Zl(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Gl(e,t,r,a))};function uf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ja.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ja.test(t)&&ee(n)?!1:t in e}const df=ie({patchProp:cf},ql);let Da;function mf(){return Da||(Da=Ol(df))}const hf=(...e)=>{const t=mf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=pf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function pf(e){return ee(e)?document.querySelector(e):e}var oo=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const gf={class:"bottomButton"},vf={name:"BottomButton",props:{name:{type:String,required:!0}},setup(e){return(t,n)=>(V(),G("button",gf,Xo(e.name),1))}};var bf=oo(vf,[["__scopeId","data-v-3e98dc0f"]]);class hn{constructor(t,n){this.cells=[["","",""],["","",""],["","",""]],this.playerTac=t,this.aiTac=n}claimTile(t,n,r){this.cells[Number(t)][Number(n)]==""&&(this.cells[t][n]=r)}scoreGameState(){let t=0;return this.threeInRow(this.playerTac)?t-=100:this.threeInRow(this.aiTac)&&(t+=100),t}threeInRow(t){for(let n=0;n<3;n++)if(this.cells[n][0]===t&&this.cells[n][1]===t&&this.cells[n][2]===t)return!0;for(let n=0;n<3;n++)if(this.cells[0][n]===t&&this.cells[1][n]===t&&this.cells[2][n]===t)return!0;return this.cells[0][0]===t&&this.cells[1][1]===t&&this.cells[2][2]===t||this.cells[0][2]===t&&this.cells[1][1]===t&&this.cells[2][0]===t}getMoves(){let t=[];for(let n=0;n<3;n++)for(let r=0;r<3;r++)this.cells[n][r]===""&&t.push({col:n,row:r});return t||!1}copyBoard(){let t=new hn;for(let n=0;n<3;n++)for(let r=0;r<3;r++)t.cells[n][r]=this.cells[n][r];return t}isGameOver(){return this.getMoves===!1||this.threeInRow("x")||this.threeInRow("y")}}const yf={data(){return{playerTac:"x",aiTac:"o",board:new hn(this.playerTac,this.aiTac),winner:""}},methods:{refresh(){this.board=new hn(this.playerTac,this.aiTac),this.winner="",this.$forceUpdate()},swapTacs(){this.playerTac=="x"?(this.playerTac="o",this.aiTac="x"):this.playerTac=="o"&&(this.playerTac="x",this.aiTac="o");for(let e=0;e<3;e++)for(let t=0;t<3;t++)this.board.cells[e][t]==="x"?this.board.cells[e][t]="o":this.board.cells[e][t]==="o"&&(this.board.cells[e][t]="x");this.$forceUpdate()},placeTac(e,t){let n=()=>{for(let a=0;a<3;a++)for(let i=0;i<3;i++)if(this.board.cells[a][i]==="")return!1;return!0};if(this.winner)return;if(this.board.claimTile(e,t,this.playerTac),this.board.threeInRow(this.playerTac)){this.winner=this.playerTac;return}n()&&(this.winner="none");let r=this.miniMax(this.board.copyBoard(),this.aiTac);if(this.board.claimTile(Number(r.move.col),Number(r.move.row),this.aiTac),this.$forceUpdate(),this.board.threeInRow(this.aiTac)){this.winner=this.aiTac;return}n()&&(this.winner="none")},miniMax(e,t,n=1){if(e.threeInRow(this.playerTac)||e.threeInRow(this.aiTac)){let o=1;return e.threeInRow(this.playerTac)&&(o-=2),{score:(100+n)*o,move:null}}let r=t===this.aiTac?-1e4:1e4,a={},i=e.getMoves();for(let o=0;o<i.length;o++){let s=i[o],l=e.copyBoard();l.claimTile(s.col,s.row,t);let u=this.miniMax(l,t===this.aiTac?this.playerTac:this.aiTac,n+1).score;(t===this.aiTac&&r<u||t===this.playerTac&&r>u)&&(r=u,a=i[o])}return{move:a,score:r}},aiFirst(){this.board.claimTile(1,1,this.aiTac)}},components:{BottomButton:bf}},xf={id:"outerShell"},wf={id:"titleHolder"},_f={key:0,class:"title"},kf={key:1,class:"title"},Af={key:2,class:"title"},Tf={key:3,class:"title"},Of={class:"gameBoard"},Ef={class:"col1"},Cf={class:"tileHolder"},If=["onClick"],Pf={key:1,class:"tile"},Sf={key:2,class:"tile"},Nf={class:"col2"},Mf={class:"tileHolder"},Ff=["onClick"],Rf={key:1,class:"tile"},Lf={key:2,class:"tile"},zf={class:"col3"},jf={class:"tileHolder"},Df=["onClick"],Bf={key:1,class:"tile"},Uf={key:2,class:"tile"};function Hf(e,t,n,r,a,i){const o=_a("font-awesome-icon"),s=_a("BottomButton");return V(),G("div",xf,[ve("div",wf,[a.winner===a.playerTac?(V(),G("h1",_f,"You Win")):a.winner===a.aiTac?(V(),G("h1",kf,"You Lose")):a.winner==="none"?(V(),G("h1",Af,"Draw")):(V(),G("h1",Tf,"Tic Tac Toe"))]),ve("main",null,[ve("div",Of,[ve("div",Ef,[ve("div",Cf,[(V(!0),G(he,null,$n(a.board.cells[0],(l,u)=>(V(),G("div",{key:u},[l===""?(V(),G("button",{key:0,class:"empty tile",onClick:d=>i.placeTac(0,u)},null,8,If)):l==="x"?(V(),G("div",Pf,[Z(o,{icon:["fas","x"],size:"6x"})])):(V(),G("div",Sf,[Z(o,{icon:["fas","o"],size:"6x"})]))]))),128)),Z(s,{onClick:i.refresh,name:"Reset"},null,8,["onClick"])])]),ve("div",Nf,[ve("div",Mf,[(V(!0),G(he,null,$n(a.board.cells[1],(l,u)=>(V(),G("div",{key:u},[l===""?(V(),G("button",{key:0,class:"empty tile",onClick:d=>i.placeTac(1,u)},null,8,Ff)):l==="x"?(V(),G("div",Rf,[Z(o,{icon:["fas","x"],size:"6x"})])):(V(),G("div",Lf,[Z(o,{icon:["fas","o"],size:"6x"})]))]))),128)),a.playerTac==="o"?(V(),lr(s,{key:0,onClick:i.swapTacs,name:"Swap To X's"},null,8,["onClick"])):a.playerTac==="x"?(V(),lr(s,{key:1,onClick:i.swapTacs,name:"Swap To O's"},null,8,["onClick"])):Fl("",!0)])]),ve("div",zf,[ve("div",jf,[(V(!0),G(he,null,$n(a.board.cells[2],(l,u)=>(V(),G("div",{key:u},[l===""?(V(),G("button",{key:0,class:"empty tile",onClick:d=>i.placeTac(2,u)},null,8,Df)):l==="tile"?(V(),G("div",Bf,[Z(o,{icon:["fas","x"],size:"6x"})])):(V(),G("div",Uf,[Z(o,{icon:["fas","o"],size:"6x"})]))]))),128)),Z(s,{onClick:i.aiFirst,name:"Ai First"},null,8,["onClick"])])])])])])}var $f=oo(yf,[["render",Hf]]);/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Ba(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ba(Object(n),!0).forEach(function(r){Kf(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ba(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pn(e){return pn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pn(e)}function Yf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ua(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Wf(e,t,n){return t&&Ua(e.prototype,t),n&&Ua(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Kf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kr(e,t){return Xf(e)||Jf(e,t)||so(e,t)||Zf()}function Pn(e){return qf(e)||Vf(e)||so(e)||Gf()}function qf(e){if(Array.isArray(e))return dr(e)}function Xf(e){if(Array.isArray(e))return e}function Vf(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Jf(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function so(e,t){if(!!e){if(typeof e=="string")return dr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return dr(e,t)}}function dr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Gf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ha=function(){},qr={},lo={},fo=null,co={mark:Ha,measure:Ha};try{typeof window!="undefined"&&(qr=window),typeof document!="undefined"&&(lo=document),typeof MutationObserver!="undefined"&&(fo=MutationObserver),typeof performance!="undefined"&&(co=performance)}catch{}var Qf=qr.navigator||{},$a=Qf.userAgent,Ya=$a===void 0?"":$a,Xe=qr,X=lo,Wa=fo,Qt=co;Xe.document;var De=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",uo=~Ya.indexOf("MSIE")||~Ya.indexOf("Trident/"),Re="___FONT_AWESOME___",mr=16,mo="fa",ho="svg-inline--fa",at="data-fa-i2svg",hr="data-fa-pseudo-element",ec="data-fa-pseudo-element-pending",Xr="data-prefix",Vr="data-icon",Ka="fontawesome-i2svg",tc="async",nc=["HTML","HEAD","STYLE","SCRIPT"],po=function(){try{return!0}catch{return!1}}(),Jr={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},gn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},go={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},rc={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},ac=/fa[srltdbk\-\ ]/,vo="fa-layers-text",ic=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,oc={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},bo=[1,2,3,4,5,6,7,8,9,10],sc=bo.concat([11,12,13,14,15,16,17,18,19,20]),lc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fc=[].concat(Pn(Object.keys(gn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",et.GROUP,et.SWAP_OPACITY,et.PRIMARY,et.SECONDARY]).concat(bo.map(function(e){return"".concat(e,"x")})).concat(sc.map(function(e){return"w-".concat(e)})),yo=Xe.FontAwesomeConfig||{};function cc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function uc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var dc=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];dc.forEach(function(e){var t=Kr(e,2),n=t[0],r=t[1],a=uc(cc(n));a!=null&&(yo[r]=a)})}var mc={familyPrefix:mo,styleDefault:"solid",replacementClass:ho,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},zt=A(A({},mc),yo);zt.autoReplaceSvg||(zt.observeMutations=!1);var P={};Object.keys(zt).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){zt[e]=n,an.forEach(function(r){return r(P)})},get:function(){return zt[e]}})});Xe.FontAwesomeConfig=P;var an=[];function hc(e){return an.push(e),function(){an.splice(an.indexOf(e),1)}}var He=mr,Ce={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pc(e){if(!(!e||!De)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var gc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Yt(){for(var e=12,t="";e-- >0;)t+=gc[Math.random()*62|0];return t}function At(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Gr(e){return e.classList?At(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function xo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(xo(e[n]),'" ')},"").trim()}function Sn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Zr(e){return e.size!==Ce.size||e.x!==Ce.x||e.y!==Ce.y||e.rotate!==Ce.rotate||e.flipX||e.flipY}function bc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function yc(e){var t=e.transform,n=e.width,r=n===void 0?mr:n,a=e.height,i=a===void 0?mr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&uo?l+="translate(".concat(t.x/He-r/2,"em, ").concat(t.y/He-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/He,"em), calc(-50% + ").concat(t.y/He,"em)) "):l+="translate(".concat(t.x/He,"em, ").concat(t.y/He,"em) "),l+="scale(".concat(t.size/He*(t.flipX?-1:1),", ").concat(t.size/He*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var xc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function wo(){var e=mo,t=ho,n=P.familyPrefix,r=P.replacementClass,a=xc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var qa=!1;function Kn(){P.autoAddCss&&!qa&&(pc(wo()),qa=!0)}var wc={mixout:function(){return{dom:{css:wo,insertCss:Kn}}},hooks:function(){return{beforeDOMElementCreation:function(){Kn()},beforeI2svg:function(){Kn()}}}},Le=Xe||{};Le[Re]||(Le[Re]={});Le[Re].styles||(Le[Re].styles={});Le[Re].hooks||(Le[Re].hooks={});Le[Re].shims||(Le[Re].shims=[]);var xe=Le[Re],_o=[],_c=function e(){X.removeEventListener("DOMContentLoaded",e),vn=1,_o.map(function(t){return t()})},vn=!1;De&&(vn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),vn||X.addEventListener("DOMContentLoaded",_c));function kc(e){!De||(vn?setTimeout(e,0):_o.push(e))}function Wt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?xo(e):"<".concat(t," ").concat(vc(r),">").concat(i.map(Wt).join(""),"</").concat(t,">")}function Xa(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ac=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},qn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Ac(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function Tc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function pr(e){var t=Tc(e);return t.length===1?t[0].toString(16):null}function Oc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Va(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function gr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Va(t);typeof xe.hooks.addPack=="function"&&!a?xe.hooks.addPack(e,Va(t)):xe.styles[e]=A(A({},xe.styles[e]||{}),i),e==="fas"&&gr("fa",t)}var jt=xe.styles,Ec=xe.shims,Cc=Object.values(go),Qr=null,ko={},Ao={},To={},Oo={},Eo={},Ic=Object.keys(Jr);function Pc(e){return~fc.indexOf(e)}function Sc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Pc(a)?a:null}var Co=function(){var t=function(i){return qn(jt,function(o,s,l){return o[l]=qn(s,i,{}),o},{})};ko=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ao=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Eo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in jt||P.autoFetchSvg,r=qn(Ec,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});To=r.names,Oo=r.unicodes,Qr=Nn(P.styleDefault)};hc(function(e){Qr=Nn(e.styleDefault)});Co();function ea(e,t){return(ko[e]||{})[t]}function Nc(e,t){return(Ao[e]||{})[t]}function mt(e,t){return(Eo[e]||{})[t]}function Io(e){return To[e]||{prefix:null,iconName:null}}function Mc(e){var t=Oo[e],n=ea("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ve(){return Qr}var ta=function(){return{prefix:null,iconName:null,rest:[]}};function Nn(e){var t=Jr[e],n=gn[e]||gn[t],r=e in xe.styles?e:null;return n||r||null}function Mn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=Sc(P.familyPrefix,s);if(jt[s]?(s=Cc.includes(s)?rc[s]:s,a=s,o.prefix=s):Ic.indexOf(s)>-1?(a=s,o.prefix=Nn(s)):l?o.iconName=l:s!==P.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?Io(o.iconName):{},d=mt(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!jt.far&&jt.fas&&!P.autoFetchSvg&&(o.prefix="fas")}return o},ta());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Ve()||"fas"),i}var Fc=function(){function e(){Yf(this,e),this.definitions={}}return Wf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),gr(s,o[s]);var l=go[s];l&&gr(l,o[s]),Co()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),Ja=[],ht={},bt={},Rc=Object.keys(bt);function Lc(e,t){var n=t.mixoutsTo;return Ja=e,ht={},Object.keys(bt).forEach(function(r){Rc.indexOf(r)===-1&&delete bt[r]}),Ja.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),pn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ht[o]||(ht[o]=[]),ht[o].push(i[o])})}r.provides&&r.provides(bt)}),n}function vr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ht[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function it(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=ht[e]||[];a.forEach(function(i){i.apply(null,n)})}function ze(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return bt[e]?bt[e].apply(null,t):void 0}function br(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ve();if(!!t)return t=mt(n,t)||t,Xa(Po.definitions,n,t)||Xa(xe.styles,n,t)}var Po=new Fc,zc=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,it("noAuto")},jc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return De?(it("beforeI2svg",t),ze("pseudoElements2svg",t),ze("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,kc(function(){Bc({autoReplaceSvgRoot:n}),it("watch",t)})}},Dc={icon:function(t){if(t===null)return null;if(pn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:mt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Nn(t[0]);return{prefix:r,iconName:mt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.familyPrefix,"-"))>-1||t.match(ac))){var a=Mn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ve(),iconName:mt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ve();return{prefix:i,iconName:mt(i,t)||t}}}},me={noAuto:zc,config:P,dom:jc,parse:Dc,library:Po,findIconDefinition:br,toHtml:Wt},Bc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(xe.styles).length>0||P.autoFetchSvg)&&De&&P.autoReplaceSvg&&me.dom.i2svg({node:r})};function Fn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Wt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!De){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Uc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Zr(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Sn(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Hc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function na(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,b=e.watchable,T=b===void 0?!1:b,R=r.found?r:n,z=R.width,S=R.height,y=a==="fak",O=[P.replacementClass,i?"".concat(P.familyPrefix,"-").concat(i):""].filter(function(oe){return m.classes.indexOf(oe)===-1}).filter(function(oe){return oe!==""||!!oe}).concat(m.classes).join(" "),N={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(S)})},j=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(z/S*16*.0625,"em")}:{};T&&(N.attributes[at]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||Yt())},children:[l]}),delete N.attributes.title);var Y=A(A({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},j),m.styles)}),re=r.found&&n.found?ze("generateAbstractMask",Y)||{children:[],attributes:{}}:ze("generateAbstractIcon",Y)||{children:[],attributes:{}},fe=re.children,_e=re.attributes;return Y.children=fe,Y.attributes=_e,s?Hc(Y):Uc(Y)}function Ga(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[at]="");var d=A({},o.styles);Zr(a)&&(d.transform=yc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Sn(d);m.length>0&&(u.style=m);var b=[];return b.push({tag:"span",attributes:u,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function $c(e){var t=e.content,n=e.title,r=e.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Sn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Xn=xe.styles;function yr(e){var t=e[0],n=e[1],r=e.slice(4),a=Kr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.familyPrefix,"-").concat(et.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(et.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(et.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Yc={found:!1,width:512,height:512};function Wc(e,t){!po&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function xr(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=Ve()),new Promise(function(r,a){if(ze("missingIconAbstract"),n==="fa"){var i=Io(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Xn[t]&&Xn[t][e]){var o=Xn[t][e];return r(yr(o))}Wc(e,t),r(A(A({},Yc),{},{icon:P.showMissingIcons&&e?ze("missingIconAbstract")||{}:{}}))})}var Za=function(){},wr=P.measurePerformance&&Qt&&Qt.mark&&Qt.measure?Qt:{mark:Za,measure:Za},Nt='FA "6.1.1"',Kc=function(t){return wr.mark("".concat(Nt," ").concat(t," begins")),function(){return So(t)}},So=function(t){wr.mark("".concat(Nt," ").concat(t," ends")),wr.measure("".concat(Nt," ").concat(t),"".concat(Nt," ").concat(t," begins"),"".concat(Nt," ").concat(t," ends"))},ra={begin:Kc,end:So},on=function(){};function Qa(e){var t=e.getAttribute?e.getAttribute(at):null;return typeof t=="string"}function qc(e){var t=e.getAttribute?e.getAttribute(Xr):null,n=e.getAttribute?e.getAttribute(Vr):null;return t&&n}function Xc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function Vc(){if(P.autoReplaceSvg===!0)return sn.replace;var e=sn[P.autoReplaceSvg];return e||sn.replace}function Jc(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function Gc(e){return X.createElement(e)}function No(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Jc:Gc:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(No(o,{ceFn:r}))}),a}function Zc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var sn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(No(a),n)}),n.getAttribute(at)===null&&P.keepOriginalSource){var r=X.createComment(Zc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Gr(n).indexOf(P.replacementClass))return sn.replace(t);var a=new RegExp("".concat(P.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Wt(s)}).join(`
`);n.setAttribute(at,""),n.innerHTML=o}};function ei(e){e()}function Mo(e,t){var n=typeof t=="function"?t:on;if(e.length===0)n();else{var r=ei;P.mutateApproach===tc&&(r=Xe.requestAnimationFrame||ei),r(function(){var a=Vc(),i=ra.begin("mutate");e.map(a),i(),n()})}}var aa=!1;function Fo(){aa=!0}function _r(){aa=!1}var bn=null;function ti(e){if(!!Wa&&!!P.observeMutations){var t=e.treeCallback,n=t===void 0?on:t,r=e.nodeCallback,a=r===void 0?on:r,i=e.pseudoElementsCallback,o=i===void 0?on:i,s=e.observeMutationsRoot,l=s===void 0?X:s;bn=new Wa(function(u){if(!aa){var d=Ve();At(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Qa(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Qa(m.target)&&~lc.indexOf(m.attributeName))if(m.attributeName==="class"&&qc(m.target)){var b=Mn(Gr(m.target)),T=b.prefix,R=b.iconName;m.target.setAttribute(Xr,T||d),R&&m.target.setAttribute(Vr,R)}else Xc(m.target)&&a(m.target)})}}),De&&bn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Qc(){!bn||bn.disconnect()}function eu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function tu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Mn(Gr(e));return a.prefix||(a.prefix=Ve()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=Nc(a.prefix,e.innerText)||ea(a.prefix,pr(e.innerText))),a}function nu(e){var t=At(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||Yt()):(t["aria-hidden"]="true",t.focusable="false")),t}function ru(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ce,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=tu(e),r=n.iconName,a=n.prefix,i=n.rest,o=nu(e),s=vr("parseNodeAttributes",{},e),l=t.styleParser?eu(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ce,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var au=xe.styles;function Ro(e){var t=P.autoReplaceSvg==="nest"?ni(e,{styleParser:!1}):ni(e);return~t.extra.classes.indexOf(vo)?ze("generateLayersText",e,t):ze("generateSvgReplacementMutation",e,t)}function ri(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!De)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(Ka,"-").concat(m))},a=function(m){return n.remove("".concat(Ka,"-").concat(m))},i=P.autoFetchSvg?Object.keys(Jr):Object.keys(au),o=[".".concat(vo,":not([").concat(at,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(at,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=At(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ra.begin("onTree"),u=s.reduce(function(d,m){try{var b=Ro(m);b&&d.push(b)}catch(T){po||T.name==="MissingIcon"&&console.error(T)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(b){Mo(b,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(b){l(),m(b)})})}function iu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ro(e).then(function(n){n&&Mo([n],t)})}function ou(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:br(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:br(a||{})),e(r,A(A({},n),{},{mask:a}))}}var su=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ce:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,b=m===void 0?null:m,T=n.titleId,R=T===void 0?null:T,z=n.classes,S=z===void 0?[]:z,y=n.attributes,O=y===void 0?{}:y,N=n.styles,j=N===void 0?{}:N;if(!!t){var Y=t.prefix,re=t.iconName,fe=t.icon;return Fn(A({type:"icon"},t),function(){return it("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(b?O["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(R||Yt()):(O["aria-hidden"]="true",O.focusable="false")),na({icons:{main:yr(fe),mask:l?yr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:re,transform:A(A({},Ce),a),symbol:o,title:b,maskId:d,titleId:R,extra:{attributes:O,styles:j,classes:S}})})}},lu={mixout:function(){return{icon:ou(su)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ri,n.nodeCallback=iu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return ri(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,b=r.extra;return new Promise(function(T,R){Promise.all([xr(a,s),d.iconName?xr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(z){var S=Kr(z,2),y=S[0],O=S[1];T([n,na({icons:{main:y,mask:O},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:b,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Sn(s);l.length>0&&(a.style=l);var u;return Zr(o)&&(u=ze("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},fu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Fn({type:"layer"},function(){it("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.familyPrefix,"-layers")].concat(Pn(i)).join(" ")},children:o}]})}}}},cu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Fn({type:"counter",content:n},function(){return it("beforeDOMElementCreation",{content:n,params:r}),$c({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(P.familyPrefix,"-layers-counter")].concat(Pn(s))}})})}}}},uu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ce:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,b=r.styles,T=b===void 0?{}:b;return Fn({type:"text",content:n},function(){return it("beforeDOMElementCreation",{content:n,params:r}),Ga({content:n,transform:A(A({},Ce),i),title:s,extra:{attributes:m,styles:T,classes:["".concat(P.familyPrefix,"-layers-text")].concat(Pn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(uo){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ga({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},du=new RegExp('"',"ug"),ai=[1105920,1112319];function mu(e){var t=e.replace(du,""),n=Oc(t,0),r=n>=ai[0]&&n<=ai[1],a=t.length===2?t[0]===t[1]:!1;return{value:pr(a?t[0]:t),isSecondary:r||a}}function ii(e,t){var n="".concat(ec).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=At(e.children),o=i.filter(function(re){return re.getAttribute(hr)===t})[0],s=Xe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(ic),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?gn[l[2].toLowerCase()]:oc[u],T=mu(m),R=T.value,z=T.isSecondary,S=l[0].startsWith("FontAwesome"),y=ea(b,R),O=y;if(S){var N=Mc(R);N.iconName&&N.prefix&&(y=N.iconName,b=N.prefix)}if(y&&!z&&(!o||o.getAttribute(Xr)!==b||o.getAttribute(Vr)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var j=ru(),Y=j.extra;Y.attributes[hr]=t,xr(y,b).then(function(re){var fe=na(A(A({},j),{},{icons:{main:re,mask:ta()},prefix:b,iconName:O,extra:Y,watchable:!0})),_e=X.createElement("svg");t==="::before"?e.insertBefore(_e,e.firstChild):e.appendChild(_e),_e.outerHTML=fe.map(function(oe){return Wt(oe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function hu(e){return Promise.all([ii(e,"::before"),ii(e,"::after")])}function pu(e){return e.parentNode!==document.head&&!~nc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(hr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function oi(e){if(!!De)return new Promise(function(t,n){var r=At(e.querySelectorAll("*")).filter(pu).map(hu),a=ra.begin("searchPseudoElements");Fo(),Promise.all(r).then(function(){a(),_r(),t()}).catch(function(){a(),_r(),n()})})}var gu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=oi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;P.searchPseudoElements&&oi(a)}}},si=!1,vu={mixout:function(){return{dom:{unwatch:function(){Fo(),si=!0}}}},hooks:function(){return{bootstrap:function(){ti(vr("mutationObserverCallbacks",{}))},noAuto:function(){Qc()},watch:function(n){var r=n.observeMutationsRoot;si?_r():ti(vr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},li=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},bu={mixout:function(){return{parse:{transform:function(n){return li(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=li(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},T={outer:s,inner:m,path:b};return{tag:"g",attributes:A({},T.outer),children:[{tag:"g",attributes:A({},T.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),T.path)}]}]}}}},Vn={x:0,y:0,width:"100%",height:"100%"};function fi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function yu(e){return e.tag==="g"?e.children:[e]}var xu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Mn(a.split(" ").map(function(o){return o.trim()})):ta();return i.prefix||(i.prefix=Ve()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,b=o.icon,T=bc({transform:l,containerWidth:m,iconWidth:u}),R={tag:"rect",attributes:A(A({},Vn),{},{fill:"white"})},z=d.children?{children:d.children.map(fi)}:{},S={tag:"g",attributes:A({},T.inner),children:[fi(A({tag:d.tag,attributes:A(A({},d.attributes),T.path)},z))]},y={tag:"g",attributes:A({},T.outer),children:[S]},O="mask-".concat(s||Yt()),N="clip-".concat(s||Yt()),j={tag:"mask",attributes:A(A({},Vn),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,y]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:yu(b)},j]};return r.push(Y,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(O,")")},Vn)}),{children:r,attributes:a}}}},wu={provides:function(t){var n=!1;Xe.matchMedia&&(n=Xe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},_u={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},ku=[wc,lu,fu,cu,uu,gu,vu,bu,xu,wu,_u];Lc(ku,{mixoutsTo:me});me.noAuto;var Lo=me.config,zo=me.library;me.dom;var jo=me.parse;me.findIconDefinition;me.toHtml;var Au=me.icon;me.layer;var Tu=me.text;me.counter;var Ou=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Eu(e,t){return t={exports:{}},e(t,t.exports),t.exports}var Cu=Eu(function(e){(function(t){var n=function(y,O,N){if(!u(O)||m(O)||b(O)||T(O)||l(O))return O;var j,Y=0,re=0;if(d(O))for(j=[],re=O.length;Y<re;Y++)j.push(n(y,O[Y],N));else{j={};for(var fe in O)Object.prototype.hasOwnProperty.call(O,fe)&&(j[y(fe,N)]=n(y,O[fe],N))}return j},r=function(y,O){O=O||{};var N=O.separator||"_",j=O.split||/(?=[A-Z])/;return y.split(j).join(N)},a=function(y){return R(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(O,N){return N?N.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var O=a(y);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(y,O){return r(y,O).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},b=function(y){return s.call(y)=="[object RegExp]"},T=function(y){return s.call(y)=="[object Boolean]"},R=function(y){return y=y-0,y===y},z=function(y,O){var N=O&&"process"in O?O.process:O;return typeof N!="function"?y:function(j,Y){return N(j,y,Y)}},S={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,O){return n(z(a,O),y)},decamelizeKeys:function(y,O){return n(z(o,O),y,O)},pascalizeKeys:function(y,O){return n(z(i,O),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(Ou)}),Iu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mt=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},yn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pu=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},kr=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function Su(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Cu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Nu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ia(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ia(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=Nu(d);break;case"style":l.style=Su(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Pu(n,["class","style"]);return ao(e.tag,yn({},t,{class:a.class,style:yn({},a.style,o)},a.attrs,s),r)}var Do=!1;try{Do=!0}catch{}function Mu(){if(!Do&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Dt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Mt({},e,t):{}}function Fu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Mt(t,"fa-"+e.size,e.size!==null),Mt(t,"fa-rotate-"+e.rotation,e.rotation!==null),Mt(t,"fa-pull-"+e.pull,e.pull!==null),Mt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ci(e){if(e===null)return null;if((typeof e=="undefined"?"undefined":Iu(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Ru=Ur({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=pe(function(){return ci(t.icon)}),i=pe(function(){return Dt("classes",Fu(t))}),o=pe(function(){return Dt("transform",typeof t.transform=="string"?jo.transform(t.transform):t.transform)}),s=pe(function(){return Dt("mask",ci(t.mask))}),l=pe(function(){return Au(a.value,yn({},i.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});tn(l,function(d){if(!d)return Mu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=pe(function(){return l.value?ia(l.value.abstract[0],{},r):null});return function(){return u.value}}});Ur({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Lo.familyPrefix,i=pe(function(){return[a+"-layers"].concat(kr(t.fixedWidth?[a+"-fw"]:[]))});return function(){return ao("div",{class:i.value},r.default?r.default():[])}}});Ur({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Lo.familyPrefix,i=pe(function(){return Dt("classes",[].concat(kr(t.counter?[a+"-layers-counter"]:[]),kr(t.position?[a+"-layers-"+t.position]:[])))}),o=pe(function(){return Dt("transform",typeof t.transform=="string"?jo.transform(t.transform):t.transform)}),s=pe(function(){var u=Tu(t.value.toString(),yn({},o.value,i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=pe(function(){return ia(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Lu={prefix:"fas",iconName:"o",icon:[448,512,[111],"4f","M224 32.01c-123.5 0-224 100.5-224 224s100.5 224 224 224s224-100.5 224-224S347.5 32.01 224 32.01zM224 416c-88.22 0-160-71.78-160-160s71.78-159.1 160-159.1s160 71.78 160 159.1S312.2 416 224 416z"]},zu={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"]};zo.add(Lu);zo.add(zu);hf($f).component("font-awesome-icon",Ru).mount("#app");

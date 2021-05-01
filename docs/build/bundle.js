var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(t)}function o(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function r(e){return null==e?"":e}let c=!1;const l=new Set;function a(e,t){c&&l.delete(t),t.parentNode!==e&&e.appendChild(t)}function u(e,t,n){c&&l.delete(t),(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function d(e){c?l.add(e):e.parentNode&&e.parentNode.removeChild(e)}function f(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function g(){return p(" ")}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}let S;function F(e){S=e}const y=[],N=[],v=[],T=[],b=Promise.resolve();let $=!1;function x(e){v.push(e)}let E=!1;const I=new Set;function k(){if(!E){E=!0;do{for(let e=0;e<y.length;e+=1){const t=y[e];F(t),_(t.$$)}for(F(null),y.length=0;N.length;)N.pop()();for(let e=0;e<v.length;e+=1){const t=v[e];I.has(t)||(I.add(t),t())}v.length=0}while(y.length);for(;T.length;)T.pop()();$=!1,E=!1,I.clear()}}function _(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}const w=new Set;function L(e,t){-1===e.$$.dirty[0]&&(y.push(e),$||($=!0,b.then(k)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function O(s,r,a,u,f,h,p=[-1]){const g=S;F(s);const m=s.$$={fragment:null,ctx:null,props:h,update:e,not_equal:f,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:r.context||[]),callbacks:n(),dirty:p,skip_bound:!1};let y=!1;if(m.ctx=a?a(s,r.props||{},((e,t,...n)=>{const i=n.length?n[0]:t;return m.ctx&&f(m.ctx[e],m.ctx[e]=i)&&(!m.skip_bound&&m.bound[e]&&m.bound[e](i),y&&L(s,e)),t})):[],m.update(),y=!0,i(m.before_update),m.fragment=!!u&&u(m.ctx),r.target){if(r.hydrate){c=!0;const e=function(e){return Array.from(e.childNodes)}(r.target);m.fragment&&m.fragment.l(e),e.forEach(d)}else m.fragment&&m.fragment.c();r.intro&&((N=s.$$.fragment)&&N.i&&(w.delete(N),N.i(v))),function(e,n,s,r){const{fragment:c,on_mount:l,on_destroy:a,after_update:u}=e.$$;c&&c.m(n,s),r||x((()=>{const n=l.map(t).filter(o);a?a.push(...n):i(n),e.$$.on_mount=[]})),u.forEach(x)}(s,r.target,r.anchor,r.customElement),function(){c=!1;for(const e of l)e.parentNode.removeChild(e);l.clear()}(),k()}var N,v;F(g)}function j(e,t,n){const i=e.slice();return i[11]=t[n],i}function A(e,t,n){const i=e.slice();return i[14]=t[n],i}function C(e){let t,n,i,o=e[14]+"";return{c(){t=h("div"),n=p(o),m(t,"class",i="sociotype "+(e[1][e[14]]?W:"")+" svelte-xdd4su"),m(t,"id",e[14])},m(e,i){u(e,t,i),a(t,n)},p(e,n){2&n&&i!==(i="sociotype "+(e[1][e[14]]?W:"")+" svelte-xdd4su")&&m(t,"class",i)},d(e){e&&d(t)}}}function H(e){let t,n,i,o,s,c=e[11]+"";function l(){return e[6](e[11])}return{c(){t=h("div"),n=p(c),m(t,"class",i=r(e[0][e[11]]?q:"")+" svelte-xdd4su")},m(e,i){var r,c,d,f;u(e,t,i),a(t,n),o||(c="click",d=l,(r=t).addEventListener(c,d,f),s=()=>r.removeEventListener(c,d,f),o=!0)},p(n,o){e=n,1&o&&i!==(i=r(e[0][e[11]]?q:"")+" svelte-xdd4su")&&m(t,"class",i)},d(e){e&&d(t),o=!1,s()}}}function M(t){let n,i,o,s,r,c,l,p,S,F,y,N,v=Object.keys(t[2]),T=[];for(let e=0;e<v.length;e+=1)T[e]=C(A(t,v,e));let b=Object.keys(t[3]),$=[];for(let e=0;e<b.length;e+=1)$[e]=H(j(t,b,e));return{c(){n=h("main"),i=h("h1"),i.textContent="Socionics typing tool",o=g(),s=h("div"),r=h("div"),r.innerHTML="<h3>Explanation</h3>\n\t\n\t\t\tThis is a simple tool to help assessing someone&#39;s socionics type.\n\t\t\tWhen doing this kind of assessment, it&#39;s common to first start by identifying which information elements you perceive in that person the most.\n\t\t\tHowever, from personal experience, this process is very error prone.\n\t\t\tA major reason is that, for example, someone who appears Fe might not be Fe base or Fe creative, but also Fe demonstrative, Fe role, Fe activating, and even Fe suggestive.\n\t\t\tMeanwhile, someone who appears Fe is very unlikely to be Fe polr or Fe ignoring. This means that if someone appears Fe, you can likely exclude the types ILI, SLI, ESI and EII out of the list.\n\t\n\t\t\t<h4>Instructions</h4>\n\t\n\t\t\tSelect information elements there&#39;s no way the person lacks. When doing so, types with this element as polr or ignoring will be removed.",c=g(),l=h("div"),p=h("div");for(let e=0;e<T.length;e+=1)T[e].c();S=g(),F=h("div");for(let e=0;e<$.length;e+=1)$[e].c();y=g(),N=h("div"),N.innerHTML='<a href="https://github.com/argit2/socionics-typing/">Github</a>',m(i,"class","svelte-xdd4su"),m(r,"class","explanation"),m(p,"class","sociotypes svelte-xdd4su"),m(F,"class","definitelyHas svelte-xdd4su"),m(l,"class","test svelte-xdd4su"),m(s,"id","gridContainer"),m(s,"class","svelte-xdd4su"),m(N,"class","githubLink svelte-xdd4su"),m(n,"class","svelte-xdd4su")},m(e,t){u(e,n,t),a(n,i),a(n,o),a(n,s),a(s,r),a(s,c),a(s,l),a(l,p);for(let e=0;e<T.length;e+=1)T[e].m(p,null);a(l,S),a(l,F);for(let e=0;e<$.length;e+=1)$[e].m(F,null);a(n,y),a(n,N)},p(e,[t]){if(6&t){let n;for(v=Object.keys(e[2]),n=0;n<v.length;n+=1){const i=A(e,v,n);T[n]?T[n].p(i,t):(T[n]=C(i),T[n].c(),T[n].m(p,null))}for(;n<T.length;n+=1)T[n].d(1);T.length=v.length}if(25&t){let n;for(b=Object.keys(e[3]),n=0;n<b.length;n+=1){const i=j(e,b,n);$[n]?$[n].p(i,t):($[n]=H(i),$[n].c(),$[n].m(F,null))}for(;n<$.length;n+=1)$[n].d(1);$.length=b.length}},i:e,o:e,d(e){e&&d(n),f(T,e),f($,e)}}}const W="toggledOff",q="toggledOn";function B(e,t,n){const i=["Ti","Te","Fi","Fe","Ni","Ne","Si","Se"],o=Object.fromEntries(i.map((e=>[e,e]))),s={LII:["Ti","Ne","Fi","Se","Fe","Si","Te","Ni"],ILE:["Ne","Ti","Se","Fi","Si","Fe","Ni","Te"],SEI:["Si","Fe","Ni","Te","Ne","Ti","Se","Fi"],ESE:["Fe","Si","Te","Ni","Ti","Ne","Fi","Se"],LSI:["Ti","Se","Fi","Ne","Fe","Ni","Te","Si"],SLE:["Se","Ti","Ne","Fi","Ni","Fe","Si","Te"],IEI:["Ni","Fe","Si","Te","Se","Ti","Ne","Fi"],EIE:["Fe","Ni","Te","Si","Ti","Se","Fi","Ne"],ILI:["Ni","Te","Si","Fe","Se","Fi","Ne","Ti"],LIE:["Te","Ni","Fe","Si","Fi","Se","Ti","Ne"],ESI:["Fi","Se","Ti","Ne","Te","Ni","Fe","Si"],SEE:["Se","Fi","Ne","Ti","Ni","Te","Si","Fe"],SLI:["Si","Te","Ni","Fe","Ne","Fi","Se","Ti"],LSE:["Te","Si","Fe","Ni","Fi","Ne","Ti","Se"],EII:["Fi","Ne","Ti","Se","Te","Si","Fe","Ni"],IEE:["Ne","Fi","Se","Ti","Si","Te","Ni","Fe"]},r=4,c=7;let l=Object.fromEntries(i.map((e=>[e,[]])));Object.entries(s).forEach((e=>{[r-1,c-1].forEach((t=>{const n=e[1][t],i=e[0];l[n].push(i)}))}));let a={},u={};function d(e){o[e]&&(a[e]?(delete a[e],n(0,a)):n(0,a[e]=e,a),console.log(a),n(1,u={}),Object.keys(a).forEach((e=>{l[e].forEach((e=>{n(1,u[e]=e,u)}))})))}return[a,u,s,l,d,"Socionics typing",e=>d(e)]}return new class extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),O(this,e,B,M,s,{name:5})}get name(){return this.$$.ctx[5]}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map

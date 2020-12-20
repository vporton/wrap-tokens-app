(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{239:function(e,t,n){},241:function(e,t,n){},252:function(e,t){},273:function(e,t){},275:function(e,t){},405:function(e,t){},407:function(e,t){},439:function(e,t){},444:function(e,t){},446:function(e,t){},453:function(e,t){},466:function(e,t){},563:function(e,t,n){"use strict";n.r(t);var r=n(12),a=n(21),s=n.n(a),c=n(231),u=n.n(c),o=(n(239),n(94)),i=n(93),p=n(6),l=n.n(p),f=n(29),b=n(15),h=(n(241),n(48)),x=n.n(h),d=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}],j=x.a.utils,y=j.toBN,m=j.fromWei,v=j.toWei,w=null,O={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan",1337:"local",122:"fuse",80001:"mumbai",137:"matic",99:"core",77:"sokol",100:"xdai",74:"idchain",56:"bsc",97:"bsctest"},k=null;function g(){return C.apply(this,arguments)}function C(){return(C=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w){e.next=2;break}return e.abrupt("return",w);case 2:return k=x.a.givenProvider,e.abrupt("return",w=k?new x.a(k):null);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return R.apply(this,arguments)}function R(){return(R=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,t.eth.getChainId();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return x.a.utils.isAddress(e)}function A(e){return/^[0-9]+$/.test(e)&&y(e).lt(y(2).pow(y(160)))}function L(e){return/^[0-9]+(\.[0-9]+)?$/.test(e)}var M=new Map,N=new Map;function _(e){return T.apply(this,arguments)}function T(){return(T=Object(b.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=M.get(t))){e.next=5;break}return e.abrupt("return",n);case 5:return e.next=7,fetch(t);case 7:return r=e.sent,n=r.json(),M.set(t,n),e.next=12,n;case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return F.apply(this,arguments)}function F(){return(F=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=N.get(t))){e.next=5;break}return e.abrupt("return",n);case 5:return e.next=7,_(t);case 7:return n=e.sent,N.set(t,n),e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){var t=Object.assign({},e);return Object(r.jsx)("span",{className:"Address",children:Object(r.jsx)("input",{type:"text",maxLength:42,size:50,value:t.value?t.value:"",onChange:t.onChange,className:S(t.value)?"":"error"})})}function G(e){var t=Object.assign({},e);return Object(r.jsx)("span",{className:"WrappedERC20",children:Object(r.jsx)("input",{type:"text",maxLength:49,size:56,value:t.value,onChange:t.onChange,className:A(t.value)?"":"error"})})}function P(e){var t=Object.assign({},e);return Object(r.jsx)("span",{className:"Amount",children:Object(r.jsx)("input",{type:"text",value:t.value?t.value:"",onChange:t.onChange,className:L(t.value)?"":"error"})})}var I=function(){var e=Object(a.useState)(!0),t=Object(f.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),u=Object(f.a)(c,2),p=u[0],h=u[1],j=Object(a.useState)(""),w=Object(f.a)(j,2),k=w[0],C=w[1],R=Object(a.useState)(""),M=Object(f.a)(R,2),N=M[0],_=M[1],T=Object(a.useState)(""),F=Object(f.a)(T,2),I=F[0],J=F[1],W=Object(a.useState)(""),z=Object(f.a)(W,2),X=z[0],Z=z[1],$=Object(a.useState)(""),q=Object(f.a)($,2),H=q[0],U=q[1],K=Object(a.useState)(""),Q=Object(f.a)(K,2),V=Q[0],Y=Q[1],ee=Object(a.useState)(""),te=Object(f.a)(ee,2),ne=te[0],re=te[1],ae=Object(a.useState)(!1),se=Object(f.a)(ae,2),ce=se[0],ue=se[1];function oe(){return ie.apply(this,arguments)}function ie(){return(ie=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{window.ethereum.enable().catch((function(){}))}catch(n){}return e.next=3,g();case 3:return t=e.sent,he().then((function(e){s(0!==e.length)})),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(){return le.apply(this,arguments)}function le(){return(le=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("abis.json");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(){return be.apply(this,arguments)}function be(){return(be=Object(b.a)(l.a.mark((function e(){var t,n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([B("addresses.json"),E()]);case 2:return t=e.sent,n=Object(f.a)(t,2),r=n[0],a=n[1],e.abrupt("return",O[a]?r[O[a]]:null);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function he(){return xe.apply(this,arguments)}function xe(){return(xe=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return t=e.sent,e.abrupt("return",t?t.eth.getAccounts():null);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var de=[null,null,null,null,null];function je(e,t,n){return ye.apply(this,arguments)}function ye(){return(ye=Object(b.a)(l.a.mark((function e(t,n,r){var a,s,c,u,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("connectEvents"),S(t)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,oe();case 5:if(null!==(a=e.sent)){e.next=8;break}return e.abrupt("return");case 8:return a.eth.clearSubscriptions(),e.next=11,he();case 11:if(s=e.sent[0]){e.next=14;break}return e.abrupt("return");case 14:if(!S(n)){e.next=21;break}return e.next=17,pe();case 17:c=e.sent.ERC1155LockedERC20,u=new a.eth.Contract(c,n),de[0]=u.events.TransferSingle({filter:{_to:s}},Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("A"),e.next=3,Re(n,r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))),de[1]=u.events.TransferBatch({filter:{_to:s}},Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Re(n,r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 21:if(!S(t)){e.next=29;break}return e.next=24,B("erc20-abi.json");case 24:o=e.sent,i=new a.eth.Contract(o,t),de[2]=i.events.Transfer({filter:{to:s}},Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ce(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),de[3]=i.events.Transfer({filter:{from:s}},Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ce(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),de[4]=i.events.Approval({filter:{owner:s,spender:I}},Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ae(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 29:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(e,t,n,r,a){return ve.apply(this,arguments)}function ve(){return(ve=Object(b.a)(l.a.mark((function e(t,n,r,a,s){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=a||{},e.next=3,oe();case 3:return e.sent,e.next=6,he();case 6:return c=e.sent[0],e.abrupt("return",n.bind(t).apply(void 0,Object(i.a)(r)).estimateGas(Object(o.a)({gas:"1000000",from:c},a)).then((function(e){var u=String(Math.floor(1.15*Number(e))+24e3);return null!==s?n.bind(t).apply(void 0,Object(i.a)(r)).send(Object(o.a)({gas:u,from:c},a),s):n.bind(t).apply(void 0,Object(i.a)(r)).send(Object(o.a)({gas:u,from:c},a))})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function we(e){return Oe.apply(this,arguments)}function Oe(){return(Oe=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(t),n="",S(t)?(n=y(t).toString(),C(n)):C(""),e.next=5,Ce(t);case 5:return e.next=7,Re(N,n);case 7:return e.next=9,je(t,N,n);case 9:return e.next=11,Ae(t);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ke(e){return ge.apply(this,arguments)}function ge(){return(ge=Object(b.a)(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C(t),!A(t)){e.next=14;break}return n=x.a.utils.toHex(t),r=n.replace(/^0x/,"0x"+"0".repeat(42-n.length)),a=x.a.utils.toChecksumAddress(r),h(a),e.next=8,Ce(a);case 8:return e.next=10,Ae(a);case 10:return e.next=12,je(a,N,t);case 12:e.next=21;break;case 14:return h(""),e.next=17,Ce("");case 17:return e.next=19,Ae("");case 19:return e.next=21,je(p,N,t);case 21:return e.next=23,Re(N,t);case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ce(e){return Ee.apply(this,arguments)}function Ee(){return(Ee=Object(b.a)(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(t)){e.next=20;break}return e.next=3,oe();case 3:if(null===(n=e.sent)){e.next=16;break}return r=new n.eth.Contract(d,t),e.next=8,he();case 8:if(a=e.sent[0]){e.next=12;break}return s(!1),e.abrupt("return");case 12:r.methods.balanceOf(a).call().then((function(e){Z(e)})).catch((function(){Z("")})),r.methods.symbol().call().then((function(e){U(e)})).catch((function(){U("")})),e.next=18;break;case 16:Z(""),U("");case 18:e.next=22;break;case 20:Z(""),U("");case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Re(e,t){return Se.apply(this,arguments)}function Se(){return(Se=Object(b.a)(l.a.mark((function e(t,n){var r,a,c,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(t)||!A(n)){e.next=22;break}return e.next=3,pe();case 3:if(!(r=e.sent.ERC1155LockedERC20)){e.next=20;break}return e.next=7,oe();case 7:if(null===(a=e.sent)){e.next=19;break}return c=new a.eth.Contract(r,t),e.next=12,he();case 12:if(u=e.sent[0]){e.next=16;break}return s(!1),e.abrupt("return");case 16:A(n)?c.methods.balanceOf(u,n).call().then((function(e){Y(e)})).catch((function(e){Y("")})):Y(""),e.next=20;break;case 19:Y("");case 20:e.next=23;break;case 22:Y("");case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ae(e){return Le.apply(this,arguments)}function Le(){return(Le=Object(b.a)(l.a.mark((function e(t){var n,r,a,s,c,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(t)){e.next=29;break}return e.next=3,oe();case 3:if(null===(n=e.sent)){e.next=26;break}return e.next=7,he();case 7:if(r=e.sent[0]){e.next=11;break}return ue(!1),e.abrupt("return");case 11:return e.prev=11,a=new n.eth.Contract(d,t),e.next=15,a.methods.allowance(r,I).call();case 15:s=e.sent,c=y(s),u=y(2).pow(y(128)),ue(!c.lt(u)),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(11),ue(!1);case 24:e.next=27;break;case 26:ue(!1);case 27:e.next=30;break;case 29:ue(!1);case 30:case"end":return e.stop()}}),e,null,[[11,21]])})))).apply(this,arguments)}function Me(e){return Ne.apply(this,arguments)}function Ne(){return(Ne=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(t),e.next=3,Re(t,k);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _e(){return(_e=Object(b.a)(l.a.mark((function e(){var t,n,r,a,c,u,o,i,f,b;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(N)||!S(p)){e.next=36;break}return e.next=3,pe();case 3:return t=e.sent.ERC1155LockedERC20,e.next=6,B("erc20-abi.json");case 6:return n=e.sent,e.next=9,oe();case 9:if(null===(r=e.sent)){e.next=36;break}return e.prev=11,a=new r.eth.Contract(t,N),c=new r.eth.Contract(n,p),e.next=16,he();case 16:if(u=e.sent[0]){e.next=20;break}return s(!1),e.abrupt("return");case 20:return e.next=22,c.methods.allowance(u,N).call();case 22:if(o=e.sent,i=y(o),f=y(2).pow(y(128)),!i.lt(f)){e.next=29;break}return b=y(2).pow(y(256)).sub(y(1)),e.next=29,me(c,c.methods.approve,[N,b],{from:u},null);case 29:return e.next=31,me(a,a.methods.borrowERC20,[p,v(ne),u,u,[]],{from:u},null).catch((function(e){return alert(e.message)}));case 31:e.next=36;break;case 33:e.prev=33,e.t0=e.catch(11),alert(e.t0.message);case 36:case"end":return e.stop()}}),e,null,[[11,33]])})))).apply(this,arguments)}function Te(){return(Te=Object(b.a)(l.a.mark((function e(){var t,n,r,a,c,u,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(p)){e.next=31;break}return e.next=3,B("erc20-abi.json");case 3:return t=e.sent,e.next=6,oe();case 6:if(null===(n=e.sent)){e.next=31;break}return e.prev=8,r=new n.eth.Contract(t,p),e.next=12,he();case 12:if(a=e.sent[0]){e.next=16;break}return s(!1),e.abrupt("return");case 16:return e.next=18,r.methods.allowance(a,I).call();case 18:if(c=e.sent,u=y(c),o=y(2).pow(y(128)),!u.lt(o)){e.next=25;break}return i=y(2).pow(y(256)).sub(y(1)),e.next=25,me(r,r.methods.approve,[I,i],{from:a},null);case 25:e.next=31;break;case 27:return e.prev=27,e.t0=e.catch(8),alert(e.t0.message),e.abrupt("return");case 31:case"end":return e.stop()}}),e,null,[[8,27]])})))).apply(this,arguments)}function Be(){return(Be=Object(b.a)(l.a.mark((function e(){var t,n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(N)||!S(p)){e.next=23;break}return e.next=3,pe();case 3:return t=e.sent.ERC1155LockedERC20,e.next=6,oe();case 6:if(null===(n=e.sent)){e.next=23;break}return e.prev=8,r=new n.eth.Contract(t,N),e.next=12,he();case 12:if(a=e.sent[0]){e.next=16;break}return s(!1),e.abrupt("return");case 16:return e.next=18,me(r,r.methods.returnToERC20,[p,v(ne),a],{from:a},null);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(8),alert(e.t0.message);case 23:case"end":return e.stop()}}),e,null,[[8,20]])})))).apply(this,arguments)}return window.ethereum&&(window.ethereum.on("chainChanged",function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe().then((function(e){e&&(Me(e.ERC1155LockedERC20.address),J(e.ERC1155OverERC20.address))}));case 2:return e.next=4,Re(N,k);case 4:return e.next=6,Ce(p);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),window.ethereum.on("accountsChanged",function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S(p)){e.next=4;break}return s(0!==t.length),e.next=4,Ce(p);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),fe().then((function(e){e&&(Me(e.ERC1155LockedERC20.address),J(e.ERC1155OverERC20.address))})),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-6ZX3GEN0J8"}),Object(r.jsxs)("script",{children:["window.dataLayer = window.dataLayer || []; function gtag()","{","dataLayer.push(arguments);","}","gtag('js', new Date()); gtag('config', 'G-6ZX3GEN0J8');"]}),Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("h1",{style:{marginBottom:0},children:"Manage Smart Crypto Funds"}),Object(r.jsx)("p",{style:{marginTop:0},children:Object(r.jsxs)("small",{children:[Object(r.jsx)("a",{href:"https://github.com/vporton/wrap-tokens",children:"Docs and source"})," ","|"," ",Object(r.jsx)("a",{href:"https://portonvictor.org",children:"Author"})," ","|"," ",Object(r.jsx)("a",{href:"https://gitcoin.co/grants/1591/science-of-the-future",children:"Donate"})]})}),Object(r.jsx)("p",{style:{display:n?"none":"block",fontSize:"50%",color:"red",fontWeight:"bold"},children:"Please connect to an Ethereum account!"}),Object(r.jsxs)("p",{children:["ERC-20 token address:"," ",Object(r.jsx)(D,{value:p,onChange:function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,we(t.target.value);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})," ",Object(r.jsxs)("span",{style:{display:ce?"none":"inline"},children:[Object(r.jsx)("button",{onClick:function(){return Te.apply(this,arguments)},disabled:!S(p),children:"Approve for ERC-1155"}),"\xa0",Object(r.jsx)("span",{style:{cursor:"help"},title:"Allow the ERC-1155 wrapper contract to transfer funds for you (only when you explicitly request a transfer).",children:"\u24d8"})]}),Object(r.jsx)("small",{style:{display:ce?"inline":"none"},children:"(approved for ERC-1155 wrapper)"})]}),Object(r.jsxs)("p",{children:["ERC-1155 ",Object(r.jsx)("small",{children:"(has bug)"})," wrapper contract address:"," ",Object(r.jsx)("code",{className:"address",children:I})]}),Object(r.jsxs)("p",{children:["ERC-1155 token ID:"," ",Object(r.jsx)(G,{value:k,onChange:function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke(t.target.value);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})]}),Object(r.jsxs)("p",{children:["ERC-1155 locker contract address:"," ",Object(r.jsx)(D,{value:N,onChange:function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Me(t.target.value);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{style:{color:"red"},children:"(Be sure to use only trustworthy locker contracts!)"})]}),Object(r.jsxs)("p",{children:["Amount on ERC-20:"," ",Object(r.jsx)("span",{children:""===X?"\u2013":m(X)})," ",Object(r.jsx)("span",{children:H})]}),Object(r.jsxs)("p",{children:["Amount locked in ERC-1155:"," ",Object(r.jsx)("span",{children:""===V?"\u2013":m(V)})]}),Object(r.jsxs)("p",{children:["Amount:"," ",Object(r.jsx)(P,{value:ne,onChange:function(e){return re(e.target.value)}})," ",Object(r.jsx)("input",{type:"button",value:"Lock ERC-20 in ERC-1155",onClick:function(){return _e.apply(this,arguments)},disabled:!S(p)||!L(ne)})," ",Object(r.jsx)("input",{type:"button",value:"Unlock ERC-1155 to ERC-20",onClick:function(){return Be.apply(this,arguments)},disabled:!S(p)||!L(ne)})]}),Object(r.jsx)("p",{children:"Locking/unlocking is 1/1 swap."})]})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,567)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};u.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(I,{})}),document.getElementById("root")),document.title="Convert ERC-1155 <-> ERC-20",J()}},[[563,1,2]]]);
//# sourceMappingURL=main.1716d22c.chunk.js.map
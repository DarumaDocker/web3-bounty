(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2447)}])},2447:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var s=t(5893);t(894),t(6745);var a=t(9008),c=t.n(a),i=t(7294),o=t(7977),r=t(5005);function l(e){let{done:n,showAlert:t}=e,[a,c]=(0,i.useState)(!1),[l,d]=(0,i.useState)(!1),[u,m]=(0,i.useState)(!1);async function h(){d(!0);try{let e=await window.ethereum.request({method:"eth_requestAccounts"});if(e&&e.length>0)n(e),m(!0);else throw"Can't get accounts"}catch(e){t({variant:"danger",message:e.toString()})}finally{d(!1)}}return(0,i.useEffect)(()=>{void 0!==window.ethereum&&window.ethereum.isMetaMask&&c(!0)}),u?(0,s.jsx)("div",{className:"text-center",children:(0,s.jsx)(o.Z,{bg:"success",children:"Connected with MetaMask"})}):a?(0,s.jsx)(r.Z,{onClick:h,variant:"primary",disabled:l,children:"Connect with MetaMask"}):(0,s.jsx)(r.Z,{variant:"outline-secondary",disabled:!0,children:"MetaMask is not installed"})}var d=t(8809);function u(e){let{params:n,hide:t}=e;return setTimeout(()=>{t()},5e3),(0,s.jsx)("div",{className:"position-absolute",style:{top:10},children:(0,s.jsx)(d.Z,{variant:n.variant,onClose:()=>t(),dismissible:!0,children:n.message})})}var m=t(478),h=t(682),x=t(4051),w=t(1555),f=t(1330);async function p(e,n){let t=[];for(let s=0;s<n.length;s++){let a=n[s],c=await fetch("".concat("https://code.flows.network/lambda/dElmOPdyu2","?account=").concat(e,"&table=").concat(a));if(!c.ok)throw"Can not search data for '".concat(a,"'");let i=await c.json();i&&i.length>0&&t.push({name:a,fields:i[0].fields})}return t}let b=[{name:"GitHub",icon:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",icon_width:45,oauth:"https://github.com/apps/web3bountydemo/installations/new?state={account}",username_field:"Login",connected:null},{name:"Twitter",icon:"https://www.wellybox.com/wp-content/uploads/2023/02/pngkey.com-twitter-logo-png-transparent-27646.png",icon_width:33,oauth:"".concat("https://code.flows.network/lambda/cmdMywuHov","?account={account}"),username_field:"Username",connected:null},{name:"Email",icon:"https://res.cloudinary.com/wasm-reactor/image/upload/v1677197797/extension/logo-gmail-png-gmail-icon-download-png-and-vector-1_jnenyj.png",icon_width:33,username_field:"Email",connected:null}];function g(e){let{account:n,showAlert:t}=e,[a,c]=(0,i.useState)(null),o=(0,i.useRef)(a);o.current=a;let[l,d]=(0,i.useState)(null),[u,g]=(0,i.useState)(""),[j,y]=(0,i.useState)(!1);function v(e){g(e.target.value)}async function N(e){if(!u.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){alert("Invalid email address");return}c(e),Z([e]);try{let e=await fetch("".concat("https://code.flows.network/lambda/5lJ6t79rsm","?to=").concat(encodeURIComponent(u),"&account=").concat(n));if(e.ok)y(!0);else throw await e.text()}catch(e){c(null),alert(e.toString())}}async function Z(e){setTimeout(async()=>{await _(e),o.current&&Z(e)},1e3)}async function _(e){try{let t=await p(n,e);t&&t.find(e=>e.name==o.current)&&c(null),d(t)}catch(e){t({variant:"danger",message:e.toString()})}}return((0,i.useEffect)(()=>{n&&_(b.map(e=>e.name))},[n]),l)?(0,s.jsx)(m.Z,{gap:4,className:"col-md-5 mx-auto my-5",children:b.map(e=>{var t;return e.connected=e.connected||l.find(n=>n.name===e.name),"Email"!==e.name?(0,s.jsx)(h.Z,{className:"".concat(e.connected?"bg-success border-success":"bg-secondary border-secondary"," border border-opacity-25 bg-gradient bg-opacity-25 rounded p-2"),children:(0,s.jsxs)(x.Z,{className:"align-items-center",children:[(0,s.jsx)(w.Z,{xs:2,children:(0,s.jsx)("div",{className:"d-flex align-items-center justify-content-center border border-1 rounded-2 overflow-hidden bg-white",style:{width:50,height:50},children:(0,s.jsx)(f.Z,{width:e.icon_width,src:e.icon})})}),(0,s.jsx)(w.Z,{xs:8,style:{fontSize:"0.875em"},children:e.connected?(0,s.jsxs)("span",{children:["Connected as ",(0,s.jsx)("em",{children:e.connected.fields[e.username_field]})]}):"Please connect with your ".concat(e.name," account")}),(0,s.jsx)(w.Z,{xs:2,className:"text-center",children:e.connected?(0,s.jsx)("i",{className:"fs-4 bi bi-shield-check"}):(0,s.jsx)(r.Z,{onClick:()=>{var n;c(n=e.name),Z([n])},href:null===(t=e.oauth)||void 0===t?void 0:t.replace("{account}",n),target:"_blank",variant:"primary",size:"sm",className:"rounded-circle",disabled:null!=a,children:a==e.name?(0,s.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status"}):(0,s.jsx)("i",{className:"bi bi-plus-lg"})})})]})},e.name):(0,s.jsx)(h.Z,{className:"".concat(e.connected?"bg-success border-success":"bg-secondary border-secondary"," border border-opacity-25 bg-gradient bg-opacity-25 rounded p-2"),children:(0,s.jsxs)(x.Z,{className:"align-items-center",children:[(0,s.jsx)(w.Z,{xs:2,children:(0,s.jsx)("div",{className:"d-flex align-items-center justify-content-center border border-1 rounded-2 overflow-hidden bg-white",style:{width:50,height:50},children:(0,s.jsx)(f.Z,{width:e.icon_width,src:e.icon})})}),(0,s.jsx)(w.Z,{xs:8,style:{fontSize:"0.875em"},children:e.connected?(0,s.jsxs)("span",{children:["Connected as ",(0,s.jsx)("em",{children:e.connected.fields[e.username_field]})]}):j?(0,s.jsx)("span",{children:"An email with a verification link has been sent."}):(0,s.jsx)("input",{type:"email",value:u,onChange:v,className:"form-control",maxLength:50,placeholder:"Input your email"})}),(0,s.jsx)(w.Z,{xs:2,className:"text-center",children:e.connected?(0,s.jsx)("i",{className:"fs-4 bi bi-shield-check"}):(0,s.jsx)(r.Z,{onClick:()=>{N(e.name)},variant:"primary",size:"sm",className:"rounded-circle",disabled:null!=a,children:a==e.name?(0,s.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status"}):(0,s.jsx)("i",{className:"bi bi-plus-lg"})})})]})},e.name)})}):null}let j=()=>{let[e,n]=(0,i.useState)([]),[t,a]=(0,i.useState)(!1),[o,r]=(0,i.useState)(null);async function d(e){n(e)}function f(e){r(e),a(!0)}return(0,s.jsxs)("main",{children:[(0,s.jsxs)(c(),{children:[(0,s.jsx)("title",{children:"web3-bounty"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,s.jsx)(h.Z,{children:(0,s.jsxs)(x.Z,{className:"align-items-center position-relative",style:{minHeight:"100vh"},children:[t&&(0,s.jsx)(u,{params:o,hide:function(){a(!1)}}),(0,s.jsx)(w.Z,{children:(0,s.jsxs)(h.Z,{style:{paddingBottom:"5em"},children:[(0,s.jsxs)(m.Z,{gap:2,className:"col-md-5 mx-auto",children:[(0,s.jsx)("h1",{className:"my-3 fw-bold text-center",children:"Web3 Bounty"}),(0,s.jsx)(l,{done:d,showAlert:f})]}),(0,s.jsx)(g,{account:e[0],showAlert:f})]})})]})})]})};var y=j}},function(e){e.O(0,[774,622,392,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);
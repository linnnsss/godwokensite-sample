"use strict";(self.webpackChunkgodwokensite_sample=self.webpackChunkgodwokensite_sample||[]).push([[9148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=o,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));n(4996);const a={id:"releaseNote1",title:"Godwoken V1.1 Release Note"},i=void 0,l={unversionedId:"releaseNote1",id:"version-1.2-rc1(WIP)/releaseNote1",title:"Godwoken V1.1 Release Note",description:"This release note includes the new features and major updates in Godwoken v1.1.",source:"@site/versioned_docs/version-1.2-rc1(WIP)/releaseNote1.md",sourceDirName:".",slug:"/releaseNote1",permalink:"/godwokensite-sample/releaseNote1",draft:!1,tags:[],version:"1.2-rc1(WIP)",frontMatter:{id:"releaseNote1",title:"Godwoken V1.1 Release Note"},sidebar:"sidebar2",previous:{title:"Godwoken V1.2 Release Note",permalink:"/godwokensite-sample/releaseNote"},next:{title:"Godwoken v0 vs. v1",permalink:"/godwokensite-sample/v0difv1"}},s={},p=[{value:"Ethereum Compatibility Improvements",id:"ethereum-compatibility-improvements",level:2},{value:"Other Improvements",id:"other-improvements",level:2},{value:"Godwoken Internal Changes",id:"godwoken-internal-changes",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This release note includes the new features and major updates in Godwoken v1.1."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Godwoken v1 is not an upgrade on the existing chain! Instead, v1 will be deployed as a new chain with tools to help users and developers migrate to the new chain."),(0,o.kt)("p",{parentName:"blockquote"},"Developers can use Godwoken v1 in the same way they use other Ethereum-compatible chains, by switching the network to Godwoken. ")),(0,o.kt)("h2",{id:"ethereum-compatibility-improvements"},"Ethereum Compatibility Improvements"),(0,o.kt)("p",null,"In the new version, compatibility improvements for Godwoken include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provide API level compatibility and remove the web3-provider plugin."),(0,o.kt)("li",{parentName:"ul"},"Support native ETH addresses in API and EVM, removing the concept of Godwoken addresses."),(0,o.kt)("li",{parentName:"ul"},"Support Ethereum signature format and EIP-712. Users can view the transaction before signing, rather than signing a random 32-byte message. For more details, see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/561"},"#561"),"."),(0,o.kt)("li",{parentName:"ul"},"Fix total provisioning interface for sUDT ERC-20 proxy contracts. For more details, see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/560"},"#560"),"."),(0,o.kt)("li",{parentName:"ul"},"Support interactions with Ethereum addresses that have not yet been registered with Godwoken."),(0,o.kt)("li",{parentName:"ul"},"Unify layer 2 fungible token representation as unit256."),(0,o.kt)("li",{parentName:"ul"},"Change layer 2 CKB decimal from 8 to 18, improve compatibility between MetaMask and native CKB. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/675"},"#675")),(0,o.kt)("li",{parentName:"ul"},"Remove the polyjuice-provider web3 plugin.")),(0,o.kt)("h2",{id:"other-improvements"},"Other Improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support p2p mem-pool syncing, further PRs to enable fully decentralized syncing, but this PR is a good starting. For more details, see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/642"},"#642"),"."),(0,o.kt)("li",{parentName:"ul"},"perf: optimize molecule usage.\xa0For more details, see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/640"},"#640"),"."),(0,o.kt)("li",{parentName:"ul"},"perf: use BTreeSet in FeeQueue.\xa0For more details, see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/641"},"#641"),"."),(0,o.kt)("li",{parentName:"ul"},"Change the lock of rollup cells to Omnilock. The witness field of CKB transactions cannot hold too much data due to a secp256k1 locking error. By implementing this PR, optimistic rollup can submit larger blocks, allowing the witness field to contain more data. For more details, see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/608"},"#608"),".")),(0,o.kt)("h2",{id:"godwoken-internal-changes"},"Godwoken Internal Changes"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"DApp developers are free to skip this part.")),(0,o.kt)("p",null,"This version of Godwoken introduces a new feature, the Ethereum address registry, which stores Ethereum addresses in Godwoken. When a user deposits tokens to create a new account, a corresponding Ethereum address is inserted into the contract. Godwoken will automatically map the Ethereum address and the new account. In addition, some RPCs have been adapted to support Ethereum addresses as parameters, and some Godwoken data structures have been modified to accommodate the new address format."),(0,o.kt)("p",null,"For more details about Godwoken internal changes, refer to:\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/72b6728e4315ab581282685cffe75cdbfe38670c/docs/release-notes/v1-internal-CHANGES.md"},"docs/release-notes/v1-internal-CHANGES.md"),"."))}d.isMDXComponent=!0}}]);
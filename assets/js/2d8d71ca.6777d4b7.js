"use strict";(self.webpackChunkgodwokensite_sample=self.webpackChunkgodwokensite_sample||[]).push([[1513],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),y=a,k=d["".concat(s,".").concat(y)]||d[y]||u[y]||n;return r?o.createElement(k,i(i({ref:t},p),{},{components:r})):o.createElement(k,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2483:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=r(7462),a=(r(7294),r(3905)),n=r(4996);const i={id:"extractPrivkey",title:"Extract a Privkey from MetaMask Wallet"},l=void 0,s={unversionedId:"extractPrivkey",id:"version-1.2-rc1(WIP)/extractPrivkey",title:"Extract a Privkey from MetaMask Wallet",description:"This tutorial will show you how to extract a private key from the MetaMask wallet. This will allow you to provide it to tools and services which require it to create transactions on your behalf.",source:"@site/versioned_docs/version-1.2-rc1(WIP)/extractPrivkey.md",sourceDirName:".",slug:"/extractPrivkey",permalink:"/godwokensite-sample/extractPrivkey",draft:!1,tags:[],version:"1.2-rc1(WIP)",frontMatter:{id:"extractPrivkey",title:"Extract a Privkey from MetaMask Wallet"},sidebar:"sidebar2",previous:{title:"Deposit & Fast Withdrawal to Godwoken Version 1",permalink:"/godwokensite-sample/fastWithdrawal"},next:{title:"Godwoken V1.2 Release Note",permalink:"/godwokensite-sample/releaseNote"}},c={},p=[{value:"1. Select the Account",id:"1-select-the-account",level:2},{value:"2. Open Account Details",id:"2-open-account-details",level:2},{value:"3. Click Export Private Key",id:"3-click-export-private-key",level:2},{value:"4. Enter Your MetaMask Password",id:"4-enter-your-metamask-password",level:2},{value:"5. Copy Your Private Key",id:"5-copy-your-private-key",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorial will show you how to extract a private key from the ",(0,a.kt)("a",{parentName:"p",href:"/godwokensite-sample/wallets#metamask"},"MetaMask")," wallet. This will allow you to provide it to tools and services which require it to create transactions on your behalf."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sharing your private keys with any other person or application gives them complete control of all funds on the account!")," Never provide this information for any account with real funds unless you are absolutely certain that this is something you can trust."),(0,a.kt)("p",null,"Note: If you already have MetaMask installed and use it for anything else, it is ",(0,a.kt)("strong",{parentName:"p"},"highly recommended")," you use a separate installation of MetaMask that is used only for testing purposes. This can be done by using a different profile within your browser, or reinstalling MetaMask and generating a new seed phrase, or using using a different web browser entirely. Failing to do so could compromise the accounts and all funds contained within your MetaMask installation."),(0,a.kt)("h2",{id:"1-select-the-account"},"1. Select the Account"),(0,a.kt)("p",null,"The first step is to select the account that you want to export the private key from. This is done by clicking the round icon in the right top corner of MetaMask."),(0,a.kt)("img",{src:(0,n.Z)("img/metamask-export-00.png"),width:"40%"}),(0,a.kt)("h2",{id:"2-open-account-details"},"2. Open Account Details"),(0,a.kt)("p",null,"Next, open the account details for the selected account. This is done by selecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"Account details"),' item from the Account Options menu by clicking the "three dots" button.'),(0,a.kt)("img",{src:(0,n.Z)("img/metamask-export-01.png"),width:"40%"}),(0,a.kt)("h2",{id:"3-click-export-private-key"},"3. Click Export Private Key"),(0,a.kt)("p",null,"From the Account Details screen, click the Export Private Key button."),(0,a.kt)("img",{src:(0,n.Z)("img/metamask-export-02.png"),width:"40%"}),(0,a.kt)("h2",{id:"4-enter-your-metamask-password"},"4. Enter Your MetaMask Password"),(0,a.kt)("p",null,"Enter your MetaMask password to unlock your wallet."),(0,a.kt)("img",{src:(0,n.Z)("img/metamask-export-03.png"),width:"40%"}),(0,a.kt)("h2",{id:"5-copy-your-private-key"},"5. Copy Your Private Key"),(0,a.kt)("p",null,"The private key for your account should now be displayed in hex format. Copy this value so it can be used later."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Note: You will need to prepend "0x" to the front of your private key in order for it to be used by most applications.')),(0,a.kt)("img",{src:(0,n.Z)("img/metamask-export-04.png"),width:"40%"}))}d.isMDXComponent=!0}}]);
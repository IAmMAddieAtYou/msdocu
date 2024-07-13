"use strict";(self.webpackChunkms_studio_docs=self.webpackChunkms_studio_docs||[]).push([[794],{8602:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=s(4848),t=s(8453);const l={sidebar_position:2},r="Delay Modes",o={id:"tutorial-extras/delay-mode",title:"Delay Modes",description:"In MS Studio, there are three different Delay modes available to help manage synchronization among users in a call",source:"@site/docs/tutorial-extras/delay-mode.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/delay-mode",permalink:"/msdocu/docs/tutorial-extras/delay-mode",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Host Tools",permalink:"/msdocu/docs/tutorial-extras/host-tools"}},i={},d=[{value:"1. Manual Delay",id:"1-manual-delay",level:2},{value:"Features:",id:"features",level:3},{value:"2. Auto Delay",id:"2-auto-delay",level:2},{value:"Example:",id:"example",level:3},{value:"3. Manual + Auto Delay",id:"3-manual--auto-delay",level:2},{value:"Features:",id:"features-1",level:3}];function c(e){const n={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"delay-modes",children:"Delay Modes"}),"\n",(0,a.jsxs)(n.p,{children:["In MS Studio, there are three different Delay modes available to help manage synchronization among users in a call: ",(0,a.jsx)(n.strong,{children:"Manual Delay"}),", ",(0,a.jsx)(n.strong,{children:"Auto Delay"}),", and ",(0,a.jsx)(n.strong,{children:"Manual + Auto Delay"}),". Here's a breakdown of each mode:"]}),"\n",(0,a.jsx)(n.h2,{id:"1-manual-delay",children:"1. Manual Delay"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"Manual Delay"})," mode provides small and large plus and minus buttons next to each user in the call. This allows you to increment their individual delay values easily. You can fine-tune the delay for each participant according to your needs, making it a flexible option for precise control."]}),"\n",(0,a.jsx)(n.h3,{id:"features",children:"Features:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Increment or decrement delay values using intuitive buttons."}),"\n",(0,a.jsx)(n.li,{children:"Ideal for fine adjustments based on user requirements."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Recommendation:"})," This mode is suggested for most situations where specific control over delay is needed."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"2-auto-delay",children:"2. Auto Delay"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"Auto Delay"})," mode automatically calculates delays based on the current ping of the call participants. This mode will override any manual increments made for each user. Since VRChat does not allow grabbing the current ping programmatically, the Auto Delay mode relies on the call's ping."]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If ",(0,a.jsx)(n.strong,{children:"User 0"})," has a ping of ",(0,a.jsx)(n.strong,{children:"80ms"}),", ",(0,a.jsx)(n.strong,{children:"User 1"})," has ",(0,a.jsx)(n.strong,{children:"20ms"}),", and ",(0,a.jsx)(n.strong,{children:"User 2"})," has ",(0,a.jsx)(n.strong,{children:"40ms"}),":","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["User 0: ",(0,a.jsx)(n.strong,{children:"0ms delay"})]}),"\n",(0,a.jsxs)(n.li,{children:["User 1: ",(0,a.jsx)(n.strong,{children:"60ms delay"})," (80 - 20)"]}),"\n",(0,a.jsxs)(n.li,{children:["User 2: ",(0,a.jsx)(n.strong,{children:"40ms delay"})," (80 - 40)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"This method ensures synchronization based on the network conditions of the call."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"3-manual--auto-delay",children:"3. Manual + Auto Delay"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"Manual + Auto Delay"})," mode combines both the Manual and Auto Delay features. It applies the delay set for each user in Manual Delay on top of the delay calculated by Auto Delay."]}),"\n",(0,a.jsx)(n.h3,{id:"features-1",children:"Features:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Allows for a personalized delay for each user while also adapting to network conditions automatically."}),"\n",(0,a.jsx)(n.li,{children:"Useful in scenarios where specific adjustments are necessary in addition to real-time network-based adjustments."}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.p,{children:"By understanding these three Delay modes, you can choose the most suitable option to enhance your call experience in MS Studio."})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var a=s(6540);const t={},l=a.createContext(t);function r(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);
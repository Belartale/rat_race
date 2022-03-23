"use strict";(globalThis.webpackChunkboilerplate_frontend=globalThis.webpackChunkboilerplate_frontend||[]).push([[0],{50:(e,n,t)=>{t.d(n,{Chat:()=>P,ErrorBoundary:()=>h,Keyboard:()=>X});var r,o,a,i,l,s,u,c,d,p,f,m,g=t(0),y=(r=function(e,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},r(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),h=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.state={error:null},n}return y(n,e),n.getDerivedStateFromError=function(e){return{error:e}},n.prototype.render=function(){var e=this.state.error,n=this.props.children;return e?g.createElement("div",null,"Error component"):n},n}(g.Component),x=t(11),C=t(5),b=t(2),w=t(67),v=t(13),E=t(1),k=t(14),j=t(10),O=t(3),S=t(72),M=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},I=S.default.div.withConfig({displayName:"ContainerStyled",componentId:"-qb86r9"})(o||(o=M(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: calc(100% - 20px);\n    padding: 10px;\n"],["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: calc(100% - 20px);\n    padding: 10px;\n"]))),L=S.default.div.withConfig({displayName:"WindowChat",componentId:"-1o62417"})(a||(a=M(["\n    width: 100%;\n    margin-bottom: 10px;\n    overflow-y: auto;\n    &::-webkit-scrollbar {\n        width: 0;\n    }\n"],["\n    width: 100%;\n    margin-bottom: 10px;\n    overflow-y: auto;\n    &::-webkit-scrollbar {\n        width: 0;\n    }\n"]))),A=S.default.div.withConfig({displayName:"Message",componentId:"-1g6ab56"})(i||(i=M(["\n    margin-bottom: 10px;\n    display: flex;\n    justify-content: ",";\n"],["\n    margin-bottom: 10px;\n    display: flex;\n    justify-content: ",";\n"])),(function(e){return"true"===e.isOwner?"flex-end":"flex-start"})),B=S.default.div.withConfig({displayName:"MessageBody",componentId:"-1bwyrym"})(l||(l=M(["\n    min-width: 120px;\n    display: inline-block;\n    padding: 10px;\n    border-radius: 5px;\n    background-color: ",";\n"],["\n    min-width: 120px;\n    display: inline-block;\n    padding: 10px;\n    border-radius: 5px;\n    background-color: ",";\n"])),(function(e){var n=e.theme;return"true"===e.isOwner?n.message.messageBodyIsOwner:n.message.messageBody})),R=S.default.p.withConfig({displayName:"MessageUserName",componentId:"-1snjsyq"})(s||(s=M(["\n    font-size: 12px;\n    color: ",";\n"],["\n    font-size: 12px;\n    color: ",";\n"])),(function(e){return e.theme.message.messageFontSecondary})),K=S.default.p.withConfig({displayName:"MessageText",componentId:"-h4pqs4"})(u||(u=M(["\n    color: ",";\n    font-size: 17px;\n    margin: 5px 0px;\n    word-wrap: break-word;\n"],["\n    color: ",";\n    font-size: 17px;\n    margin: 5px 0px;\n    word-wrap: break-word;\n"])),(function(e){return e.theme.message.messageFont})),N=S.default.div.withConfig({displayName:"MessageDetails",componentId:"-uh2sxo"})(c||(c=M(["\n    display: flex;\n    ","\n"],["\n    display: flex;\n    ","\n"])),(function(e){return"false"===e.direction?{justifyContent:"space-between"}:{justifyContent:"flex-end"}})),T=S.default.p.withConfig({displayName:"MessageChanged",componentId:"-1aqlmim"})(d||(d=M(["\n    font-size: 12px;\n    color: ",";\n"],["\n    font-size: 12px;\n    color: ",";\n"])),(function(e){return e.theme.message.messageFontSecondary})),_=S.default.p.withConfig({displayName:"MessageDate",componentId:"-c6p0t0"})(p||(p=M(["\n    font-size: 12px;\n    color: ",";\n"],["\n    font-size: 12px;\n    color: ",";\n"])),(function(e){return e.theme.message.messageFontSecondary})),P=function(){var e=(0,g.useRef)(null),n=(0,E.useTogglersRedux)(),t=n.togglersRedux,r=n.setTogglerListenerAction,o=(0,x.useUser)({scrollWindowChatCurrent:e.current}),a=o.user,i=o.scrollWindowChat,l=function(){var e=(0,C.useDispatch)(),n=(0,b.useSelector)((function(e){return e})).messages;return(0,g.useEffect)((function(){e(w.fetchMessagesActionAsync());var n=setInterval((function(){e(w.fetchMessagesActionAsync())}),5e3);return function(){clearInterval(n)}}),[]),{messages:n,createMessage:function(n){e(w.createMessageActionAsync(n))},deleteMessage:function(n){e(w.deleteMessageActionAsync(n))},changeMessage:function(n){e(w.changeMessageActionAsync(n))}}}(),s=l.messages,u=l.createMessage,c=l.deleteMessage,d=l.changeMessage,p=(0,v.useInputMessageRedux)(),f=p.inputMessageRedux,m=p.setInputMessageRedux,y=(0,b.useValidation)(f),h=y.isValidation,S=y.handleValidation,M=(0,g.useState)(!1),P=M[0],V=M[1],D=function(){u({text:f,username:a.username}),m(""),S(null),i(e.current)},z=function(){"string"==typeof P&&(d({_id:P,text:f}),V(!1),m(""),S(null),i(e.current))};return g.createElement(j.Card,{height:"75vh",transformationWhen:"576px",width:"500px"},g.createElement(I,null,g.createElement(L,{ref:e},s.map((function(e){var n=a.username===e.username,t=a.username!==e.username;return g.createElement(A,{isOwner:String(n),key:e._id},g.createElement(B,{isOwner:String(n)},g.createElement(k.ContainerCenter,{justifyContent:t?"space-between":"flex-end"},t?g.createElement(R,null,e.username):null,n?g.createElement(k.ContainerCenter,null,g.createElement(j.Button,{variant:"primary",onClick:function(){V(!1),m(""),c(e._id)}},"Delete"),g.createElement(j.Button,{style:{marginLeft:"10px"},variant:"primary",onClick:function(){V(e._id),m(e.text)}},"Change")):null),g.createElement(K,null,e.text),g.createElement(N,{direction:String(e.createdAt===e.updatedAt)},e.createdAt===e.updatedAt?null:g.createElement(T,null,"Changed"),g.createElement(_,null,(0,O.getSliceDate)(e.createdAt)))))}))),g.createElement("form",{onSubmit:function(e){return e.preventDefault()}},g.createElement(k.ContainerCenter,{justifyContent:"space-between"},g.createElement(j.Input,{containerWidth:"100%",direction:"row",name:"text",style:{marginRight:"20px"},type:"text",value:f,onChange:function(e){return function(e){m(e.target.value),S(f)}(e)}}),g.createElement(j.Button,{disabled:!h,padding:"5px 10px",variant:"primary",onClick:P?z:D},P?"CHANGE":"SEND"),g.createElement(j.Button,{mediaMaxWith:"490px",padding:"5px 10px",style:{marginLeft:"5px"},variant:"primary",onClick:function(){return r({type:"isKeyboard"})}},"Keyboard"))),t.isKeyboard?g.createElement(X,{isIdChangeMessage:P,isValidation:h,onChangeButton:z,onSubmitButton:D}):null))},V=t(22),D=function(e){return e.map((function(e){return{keyRuValue:e[0],keyEnValue:e[1],keyCode:e[2]}}))},z=[["1","1",49],["2","2",50],["3","3",51],["4","4",52],["5","5",53],["6","6",54],["7","7",55],["8","8",56],["9","9",57],["0","0",48],["Backspace","Backspace",8]],q=[["Tab","Tab",9],["й","q",81],["ц","w",87],["у","e",69],["к","r",82],["е","t",84],["н","y",89],["г","u",85],["ш","i",73],["щ","o",79],["з","p",80],["х","[",219],["ъ","]",221]],U=[["CapsLock","CapsLock",20],["ф","a",65],["ы","s",83],["в","d",68],["а","f",70],["п","g",71],["р","h",72],["о","j",74],["л","k",75],["д","l",76],["ж",";",186],["э","'",222]],W=[["Shift","Shift",16],["я","z",90],["ч","x",88],["с","c",67],["м","v",86],["и","b",66],["т","n",78],["ь","m",77],["б",",",188],["ю",".",190],[".","/",191]],F={firstLine:D(z),secondLine:D(q),thirdLine:D(U),forthLine:D(W),fifthLine:D([["Ру","En",0],["Space","Space",32],["Enter","Enter",13]])},G=[D(z),D(q),D(U),D(W)],H=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},J=S.default.div.withConfig({displayName:"Container",componentId:"-fwty9b"})(f||(f=H(["\n    padding-top: 10px;\n    @media (max-width: 490px) {\n        display: none;\n    }\n    section:not(:last-child) {\n        margin-bottom: 2px;\n    }\n"],["\n    padding-top: 10px;\n    @media (max-width: 490px) {\n        display: none;\n    }\n    section:not(:last-child) {\n        margin-bottom: 2px;\n    }\n"]))),Q=S.default.section.withConfig({displayName:"GridContainer",componentId:"-qkm33d"})(m||(m=H(["\n    display: grid;\n\n    button {\n        border-radius: 0px;\n    }\n    button:not(:first-child) {\n        margin-left: 2px;\n    }\n\n    ","\n"],["\n    display: grid;\n\n    button {\n        border-radius: 0px;\n    }\n    button:not(:first-child) {\n        margin-left: 2px;\n    }\n\n    ","\n"])),(function(e){return{gridTemplateColumns:e.template,order:e.order}})),X=function(e){var n=e.onSubmitButton,t=e.isIdChangeMessage,r=e.onChangeButton,o=e.isValidation,a=(0,v.useInputMessageRedux)().setInputMessageKeyboardRedux,i=(0,E.useTogglersRedux)(),l=i.togglersRedux,s=i.setTogglerAction,u=i.setTogglerListenerAction,c=(0,V.useBacklitKeyboardRedux)(),d=c.backlitKeyboardsRedux,p=c.setBacklitKeyboardActionRedux,f=c.deleteBacklitKeyboardActionRedux,m=function(e){console.log(e.keyCode);var n=O.GetKeys.get();null===n||n.includes(e.keyCode)||p(e.keyCode)},y=function(e){return f(e.keyCode)};(0,g.useEffect)((function(){return document.addEventListener("keydown",m),document.addEventListener("keyup",y),function(){document.removeEventListener("keydown",m),document.removeEventListener("keyup",y)}}),[]);var h=function(e){var n,t=e.element,r=e.isToggle,o=!0===l.isKeyboardEnglish?t.keyEnValue:t.keyRuValue;return null!==o?g.createElement(j.Button,{active:d.includes(t.keyCode),key:t.keyCode,variant:"primary"},!0===r?"Tab"!==(n=o)&&"CapsLock"!==n&&"Shift"!==n&&"Backspace"!==n&&"Space"!==n&&"Enter"!==n&&"En"!==n&&"Ру"!==n?n.toLocaleUpperCase():n:o):null};return g.createElement(J,null,g.createElement("div",{onClick:function(e){var i=e.target;"Enter"!==i.textContent||!0!==o?"En"!==i.textContent?"Ру"!==i.textContent?"CapsLock"!==i.textContent?"Shift"!==i.textContent&&"Enter"!==i.textContent&&i.textContent&&a(i.textContent):u({type:"isKeyboardCapsLock"}):s({type:"isKeyboardEnglish",value:!0}):s({type:"isKeyboardEnglish",value:!1}):t?r():n()}},G.map((function(e,n){return g.createElement(Q,{key:n,template:"repeat("+e.filter((function(e){return l.isKeyboardEnglish?null!==e.keyEnValue:null!==e.keyRuValue})).length+", 1fr)"},e.map((function(e){return h({element:e,isToggle:l.isKeyboardCapsLock})})))})),g.createElement(Q,{template:"1fr 2fr 1fr"},F.fifthLine.map((function(e){return h({element:e,isToggle:l.isKeyboardCapsLock})})))))}},14:(e,n,t)=>{t.d(n,{ContainerCenter:()=>c});var r,o=t(0),a=t(72),i=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},l=function(){return l=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},l.apply(this,arguments)},s=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},u=a.default.div.withConfig({displayName:"ContainerCenterStyled",componentId:"-4sbeoh"})(r||(r=i(["\n    display: flex;\n    flex-direction: ",";\n    align-items: ",";\n    justify-content: ",";\n    height: ",";\n"],["\n    display: flex;\n    flex-direction: ",";\n    align-items: ",";\n    justify-content: ",";\n    height: ",";\n"])),(function(e){var n=e.flexDirection;return n||"row"}),(function(e){var n=e.alignItems;return n||"center"}),(function(e){var n=e.justifyContent;return n||"center"}),(function(e){return e.fullHeight?"100%":"auto"})),c=function(e){var n=e.children,t=e.style,r=s(e,["children","style"]);return o.createElement(u,l({style:t},r),n)}},53:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var r=t(0),o=t(11),a=t(50),i=t(14),l=t(10),s=function(){var e=(0,o.useUser)().logoutUser;return r.createElement(i.ContainerCenter,{fullHeight:!0,flexDirection:"column",justifyContent:"space-around"},r.createElement(i.ContainerCenter,null,r.createElement(l.ShowUserName,null),r.createElement(l.Button,{padding:"5px 10px",style:{marginLeft:"5px"},variant:"secondary",onClick:e},"Logout")),r.createElement(a.Chat,null))};const u=function(){return r.createElement(a.ErrorBoundary,null,r.createElement(s,null))}}}]);
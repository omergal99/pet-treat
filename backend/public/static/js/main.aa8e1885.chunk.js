(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),s=a.n(o),i=a(13),c=a(21),l=a(72),u=a(78),m={msgs:[{fromUserName:"Omer",text:"hello",dateCreated:1559329928517},{fromUserName:"Amit",text:"hii",dateCreated:1560329960117}],userTyping:""},d={dog:null},g={currUser:""},p=Object(c.c)({chatStore:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"pushToMsgs":return e=JSON.parse(JSON.stringify(t)),Object.assign(e,{msgs:[].concat(Object(u.a)(e.msgs),[a.payload])});case"replaceMsgs":return e=JSON.parse(JSON.stringify(t)),Object.assign(e,{msgs:a.payload});case"changeUserTyping":return{msgs:t.msgs,userTyping:a.payload.user};default:return t}},dogsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"updateDog":return t.payload;default:return e}},userStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setUser":return{currUser:t.payload.user.name};case"nullify":return{currUser:t.payload};default:return e}}}),f=Object(c.d)(p,Object(c.a)(l.a)),h=(a(88),a(10)),v=a(11),y=a(15),b=a(12),E=a(14),N=(a(89),a(1)),w=a.n(N),k=a(4),x=a(16),O=a(20),S=a(79),U=a(73),j=a.n(U)()("");j.on("chat new msg",function(e){console.log("'".concat(e.fromUserName,"' send massage: ").concat(e.text," at ").concat(e.dateCreated)),f.dispatch(T.addMsg(e))}),j.on("other user type",function(e){e?f.dispatch(T.setUserTyping(e)):f.dispatch(T.setUserTyping(""))});var C={send:function(e){j.emit("msg sent",e)},typing:function(){j.emit("user type",f.getState().userStore.currUser)},stopTyping:function(){j.emit("user type","")}};var T={sendMsg:function(e){C.send(e)},sendUserTyping:function(){C.typing()},addMsg:function(e){return{type:"pushToMsgs",payload:e}},sendUserStop:function(){C.stopTyping()},setUserTyping:function(e){return{type:"changeUserTyping",payload:{user:e}}}},D={store:function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)},load:function(e){var t=localStorage.getItem(e);return JSON.parse(t)}};var M=a(47),L=a.n(M),A=L.a.create({withCredentials:!0});var W={get:function(){return A.get.apply(A,arguments)},post:function(){return A.post.apply(A,arguments)},put:function(){return A.put.apply(A,arguments)},delete:function(){return A.delete.apply(A,arguments)},getUrl:function(e){return"/".concat(e)},getNoCredAxios:function(){return L.a}},P=W.getUrl("users"),I="curr user";var B={getUser:function(){var e=D.load(I);return e?Promise.resolve(e):Promise.resolve({name:"",code:""})},signup:function(e){return W.post("".concat(P,"/signup"),e).then(function(e){return D.store(I,e.data),e.data})},logout:function(){D.store(I,"")}};var H={loadUser:function(){return function(){var e=Object(k.a)(w.a.mark(function e(t){var a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.getUser();case 2:a=e.sent,t({type:"setUser",payload:{user:a}});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},newUserEnter:function(e){return function(){var t=Object(k.a)(w.a.mark(function t(a){var n;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.signup(e);case 2:n=t.sent,a({type:"setUser",payload:{user:n}});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},logout:function(){return function(){var e=Object(k.a)(w.a.mark(function e(t){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.logout();case 2:t({type:"nullify",payload:""});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}},J=W.getUrl("dogs");function _(){return(_=Object(k.a)(w.a.mark(function e(t){var a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.get("".concat(J,"/").concat(t));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0,"We have an error in server - in: DogService-getByID");case 10:case"end":return e.stop()}},e,null,[[0,7]])}))).apply(this,arguments)}var F={query:function(){return W.get("".concat(J)).then(function(e){return e.data}).catch(function(e){return e})},getById:function(e){return _.apply(this,arguments)}};var R={loadDogs:function(){return F.query()},loadDog:function(e){return function(){var t=Object(k.a)(w.a.mark(function t(a){var n;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.getById(e);case 2:n=t.sent,a({type:"replaceMsgs",payload:n.msgHistory}),a({type:"updateDog",payload:n});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},G=Object(S.a)({},T,H,R);var q=r.a.memo(function(e){return e.currUser,r.a.createElement("section",{className:"home"},r.a.createElement("div",{className:"open-img"}),r.a.createElement("div",{className:"grid"},r.a.createElement(x.b,{to:"/chat"},r.a.createElement("img",{src:"assets/img/home/dog chat.png",alt:"Chat"}),r.a.createElement("label",null,"Chat")),r.a.createElement(x.b,{to:"/gallery"},r.a.createElement("img",{src:"assets/img/home/dog gallery.png",alt:"Gallery"}),r.a.createElement("label",null,"Gallery")),r.a.createElement(x.b,{to:"/forbidden-food"},r.a.createElement("img",{src:"assets/img/home/foot print forbidden.png",alt:"Forbidden"}),r.a.createElement("label",null,"Fordibben food")),r.a.createElement(x.b,{to:"/dog-love"},r.a.createElement("img",{src:"assets/img/home/foot print love.png",alt:"Love"}),r.a.createElement("label",null,"Dog love!"))))}),z=a(36),V=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(y.a)(this,Object(b.a)(t).call(this))).state={level:1,buttonTexts:["Make New Message","","Continue","Send!"],msg:{fromUserName:"",text:"",dogOptions:[!1,!1,!1,!1],dateCreated:null},familyList:[],dogList:[],dogDetails:[{_id:301,img:"assets/img/dog/icons/bonzo.png",imgName:"bonzo",text:"food is over"},{_id:302,img:"assets/img/dog/icons/food bowl.png",imgName:"food bowl",text:"got food"},{_id:303,img:"assets/img/dog/icons/poo.png",imgName:"poo",text:"did poop"},{_id:304,img:"assets/img/dog/icons/dog out.png",imgName:"dog out",text:"came out"}]},e.personSelected=e.personSelected.bind(Object(z.a)(e)),e}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.setFamilyList(),this.setDogList()}},{key:"levelUp",value:function(){var e=this.state.level;if(1!==e&&2!==e&&3!==e&&4!==e||(e+=1,this.setState({level:e})),5===e){var t=this.state.msg;t.dateCreated=Date.now(),(t.dogOptions.findIndex(function(e){return e})>=0||t.text)&&this.props.onSendMsg(t),this.initState()}}},{key:"levelDown",value:function(){var e=this.state.level-1;this.setState({level:e})}},{key:"initState",value:function(){this.setState({level:1,msg:{fromUserName:"",text:"",dogOptions:[!1,!1,!1,!1],dateCreated:null}})}},{key:"personSelected",value:function(e){var t=this.state.msg;t.fromUserName=e,this.setState({msg:t}),this.levelUp()}},{key:"msgContentChanged",value:function(e,t){var a=this.state.msg;a.dogOptions[t]=!a.dogOptions[t]&&e,this.setState({msg:a}),this.setDogList()}},{key:"updateTextHeight",value:function(e){var t=this.state.msg;t.text=e.target.value,this.setState({msg:t}),e.target.style.height="60px",e.target.scrollHeight+2<=128?e.target.style.height=e.target.scrollHeight+2+"px":e.target.style.height="128px"}},{key:"setFamilyList",value:function(){var e=this,t=["1 / 1 / 1 / 1","1 / 2 / 1 / 2","2 / 1 / 2 / 1","2 / 2 / 2 / 2"],a=this.props.family.map(function(a,n){return r.a.createElement("div",{key:a.userId,onClick:function(t){t.stopPropagation(),e.personSelected(a.userName)},style:{gridArea:"".concat(t[n])}},r.a.createElement("div",{className:"wrap-img"},r.a.createElement("img",{src:a.userImg,alt:"".concat(a.userName)})),r.a.createElement("div",{className:"name"},r.a.createElement("label",null,a.userName)))});this.setState({familyList:a})}},{key:"setDogList",value:function(){var e=this,t=this.state.dogDetails.map(function(t,a){return r.a.createElement("div",{key:t._id,onClick:function(n){n.stopPropagation(),e.msgContentChanged(t,a)},style:{gridColumn:"".concat(a+1,"/").concat(a+1)}},r.a.createElement("div",{className:"wrap-img",style:{background:e.state.msg.dogOptions[a]?"green":""}},r.a.createElement("img",{src:t.img,alt:"".concat(t.text)})),r.a.createElement("div",{className:"name"},r.a.createElement("label",null,t.text)))});this.setState({dogList:t})}},{key:"render",value:function(){var e=this.state.level,t=this.state.buttonTexts[this.state.level-1];return r.a.createElement("div",{className:"form-levels"},2===e&&r.a.createElement("div",{className:"level"},r.a.createElement("label",null,"Who are you?"),r.a.createElement("div",{className:"table-2"},this.state.familyList)),3===e&&r.a.createElement("div",{className:"level"},r.a.createElement("label",null,"Message Content"),r.a.createElement("div",{className:"table-3"},this.state.dogList)),4===e&&r.a.createElement("div",{className:"level"},r.a.createElement("label",{style:{textAlign:"left"}},"Something to add?"),r.a.createElement("div",{className:"table-4"},r.a.createElement("textarea",{type:"text",placeholder:"Write a comment",onChange:this.updateTextHeight.bind(this),value:this.state.msg.text}))),r.a.createElement("div",{className:"line-btn"},t?r.a.createElement("button",{className:"level-btn",onClick:this.levelUp.bind(this)},t):r.a.createElement("button",{className:"level-btn cancel",onClick:this.initState.bind(this)},"Cancel"),e>2&&r.a.createElement("button",{className:"back-btn",onClick:this.levelDown.bind(this)},"BACK")))}}]),t}(n.Component),K=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(y.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={typeTime:null},a.usertyped=function(e){a.setState({text:e.target.value,typeTime:Date.now()}),Date.now()-a.state.typeTime>250&&G.sendUserTyping(),setTimeout(function(){Date.now()-a.state.typeTime>1e3&&G.sendUserStop()},1200)},a.sendingMsg=function(e){G.sendMsg(e)},a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.props.loadDog("5d1e284dba30b944ba076387"),this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"scrollToBottom",value:function(){this.messagesEnd.scrollIntoView({behavior:"auto",block:"end"})}},{key:"render",value:function(){var e=this,t=this.props.currUser,a=this.props.userTyping,n=this.props.msgs.map(function(e,a){return r.a.createElement("li",{className:t===e.fromUserName?"own":"else",key:a},r.a.createElement("label",{className:"user"},e.fromUserName),r.a.createElement("label",{className:"date"},"".concat(new Date(Number(e.dateCreated)).toLocaleString())),e.dogOptions&&r.a.createElement("div",{className:"dog-doing"},e.dogOptions.map(function(e){return e?r.a.createElement("div",{key:e._id},r.a.createElement("img",{src:e.img,alt:e.imgName}),r.a.createElement("label",null,e.text)):""})),r.a.createElement("label",{className:"text"},e.text))}),o=void 0===window.orientation&&-1===navigator.userAgent.indexOf("Mobile"),s=this.props.dog.family;return r.a.createElement("section",{className:"chat"},r.a.createElement("h1",null,t,", Welcome to Chat!"),r.a.createElement("div",{className:"type-area"},a?"".concat(a," typing..."):""),s&&r.a.createElement(V,{family:s,onSendMsg:this.sendingMsg.bind(this)}),r.a.createElement("ul",{className:"msg-list",style:{overflow:o?"":"scroll"}},n,r.a.createElement("div",{ref:function(t){return e.messagesEnd=t}})))}}]),t}(n.Component);var X=Object(i.b)(function(e){return{}},G)(K);var Y=r.a.memo(function(){return r.a.createElement("section",null,r.a.createElement("p",null,"Hello Gallery"))});var $=r.a.memo(function(){return r.a.createElement("section",{className:"forbidden-food"},r.a.createElement("img",{src:"assets/img/forbidden food/food for dogs.png",alt:"food for dogs"}))});var Q=r.a.memo(function(){return r.a.createElement("section",null,r.a.createElement("p",null,"Hello DogLove"))}),Z=a(26),ee=function(e){function t(){return Object(h.a)(this,t),Object(y.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"signup"},r.a.createElement("h2",null,"Signup"),r.a.createElement(Z.c,{initialValues:{name:"",code:""},validate:function(e){var t={};return e.name.length<3&&(t.name="Name must be at least 3 characters"),e.code.length<5&&(t.code="Code must be at least 5 characters"),e.name===e.code&&(t.code="Your Code shouldn't be the same as your Name"),t},onSubmit:function(t,a){e.props.newUserEnter({name:t.name,code:t.code}).then(function(){return e.props.history.push("/")})}},function(e){return r.a.createElement(Z.b,{className:"signup-form"},r.a.createElement("div",{className:"user-details"},r.a.createElement("div",{style:{textAlign:"left",paddingLeft:"8px",fontWeight:"bold",color:"#444444"}},"Dog Name"),r.a.createElement(Z.a,{name:"name",placeholder:"Write your name",autoFocus:void 0===window.orientation&&-1===navigator.userAgent.indexOf("Mobile")}),r.a.createElement("div",{style:{color:"red",height:"20px"}},e.errors.name&&e.touched.name&&r.a.createElement("label",null,e.errors.name))),r.a.createElement("div",{className:"user-details"},r.a.createElement("div",{style:{textAlign:"left",paddingLeft:"8px",fontWeight:"bold",color:"#444444"}},"Code"),r.a.createElement(Z.a,{name:"code",placeholder:"Select a code - at least 5 Chars",type:"password"}),r.a.createElement("div",{style:{color:"red",height:"20px"}},e.errors.code&&e.touched.code&&r.a.createElement("label",null,e.errors.code))),r.a.createElement("div",{className:"approves-btn flex wrap space-between"},r.a.createElement("input",{className:"reset",type:"reset",value:"Reset",onClick:e.handleReset,disabled:!e.dirty||e.isSubmitting}),r.a.createElement("input",{className:"submit",type:"submit",value:"Enter!"})))}))}}]),t}(n.Component);var te=Object(i.b)(function(e){return{}},G)(ee),ae=a(77);var ne=r.a.memo(function(e){var t=e.isOpen,a=e.onClose,n=Object(i.c)(),o=function(){a()};return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"cover",style:{display:t?"":"none"},onClick:o.bind(this)}),r.a.createElement("div",{className:"menu",style:{right:t?"":"-82vw"}},r.a.createElement("div",{className:"head flex flex-col"},r.a.createElement("div",{className:"flex relative"},r.a.createElement("div",{className:"dog-img"},r.a.createElement("img",{src:"../assets/img/dog/messi.jpg",alt:"Messi"})),r.a.createElement("div",{className:"dog-details"},r.a.createElement("label",null,r.a.createElement("span",null,"name: "),"Messi"),r.a.createElement("label",null,r.a.createElement("span",null,"age: "),"10.5"),r.a.createElement("label",null,r.a.createElement("span",null,"species: "),"Golden and cocker spaniol")),r.a.createElement("div",{className:"close",onClick:o.bind(this)},"X")),r.a.createElement("div",{className:"dog-edit"},r.a.createElement("button",null,"Edit Details"))),r.a.createElement("div",{className:"options"},r.a.createElement("ul",null,r.a.createElement("div",null,"Options"),r.a.createElement("li",null,"Gallery"),r.a.createElement("li",null,"The Family"),r.a.createElement("li",null,"Export Chat"),r.a.createElement("hr",null),r.a.createElement("div",null,"Acount"),r.a.createElement("li",null,"Settings"),r.a.createElement("li",{onClick:function(){n(G.logout()),a()}.bind(this)},"Logout"))))))});var re=r.a.memo(function(e){var t=e.currUserName,a="assets/img/general/icons/burger.png",o="assets/img/general/icons/burger-white.png",s=Object(n.useState)(a),i=Object(ae.a)(s,2),c=i[0],l=i[1],u=function(){l(c===o?a:o)};return r.a.createElement("nav",{className:"Nav_menu"},r.a.createElement("ul",null,!t&&r.a.createElement("div",{className:"link"},r.a.createElement(x.b,{to:"/",activeClassName:"activeRoute"},"Sign Up")),t&&r.a.createElement("div",{className:"link flex space-between align-center"},r.a.createElement(x.b,{exact:!0,to:"/",activeClassName:"activeRoute"},"LOGO"),r.a.createElement("li",{className:"nav-options",onClick:u.bind(this)},r.a.createElement("img",{src:c,alt:"Menu"})))),r.a.createElement(ne,{isOpen:c===o,onClose:u.bind(this)}))}),oe=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(y.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).registerServiceWorker=Object(k.a)(w.a.mark(function e(){var t;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.register("/service-worker.js");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)})),a.requestNotificationPermission=Object(k.a)(w.a.mark(function e(){var t;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Notification.requestPermission();case 2:if("granted"===(t=e.sent)){e.next=5;break}throw new Error("Permission not granted for Notification");case 5:console.log("Permission:",t),console.log("Notification permission status:",t),"granted"===Notification.permission&&navigator.serviceWorker.getRegistration().then(function(e){console.log(e),console.log(e.active.state),e.showNotification("Hello world!",{body:"First notification!"})});case 8:case"end":return e.stop()}},e)})),a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=Object(k.a)(w.a.mark(function e(){var t;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.loadUser(),this.check(),e.next=4,this.registerServiceWorker();case 4:return t=e.sent,e.next=7,this.requestNotificationPermission();case 7:e.sent,this.showLocalNotification("This is title","this is the message",t);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"urlB64ToUint8Array",value:function(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),a=atob(t),n=new Uint8Array(a.length),r=0;r<a.length;++r)n[r]=a.charCodeAt(r);return n}},{key:"showLocalNotification",value:function(e,t,a){}},{key:"check",value:function(){if(console.log("Doing Check"),!("serviceWorker"in navigator))throw console.log("No Service Worker support!"),new Error("No Service Worker support!");if(!("PushManager"in window))throw console.log("No Push API Support!"),new Error("No Push API Support!")}},{key:"render",value:function(){var e=this,t=f.getState().userStore.currUser;return r.a.createElement(x.a,null,r.a.createElement("div",{className:"app-nav-route"},r.a.createElement("div",{className:"nav"},r.a.createElement(re,{currUserName:t})),r.a.createElement("div",{className:"route"},r.a.createElement(O.c,null,!t&&r.a.createElement(O.a,{path:"/",component:te}),r.a.createElement(O.a,{exact:!0,path:"/",render:function(){return r.a.createElement(q,{currUser:e.props.currUser})}}),r.a.createElement(O.a,{exact:!0,path:"/chat",render:function(){return r.a.createElement(X,{msgs:e.props.msgs,userTyping:e.props.userTyping,currUser:e.props.currUser,dog:e.props.dog})}}),r.a.createElement(O.a,{exact:!0,path:"/gallery",component:Y}),r.a.createElement(O.a,{exact:!0,path:"/forbidden-food",component:$}),r.a.createElement(O.a,{exact:!0,path:"/dog-love",component:Q}),r.a.createElement(O.a,{exact:!0,path:"/signup",component:te})))))}}]),t}(n.Component);var se=Object(i.b)(function(e){return{msgs:e.chatStore.msgs,userTyping:e.chatStore.userTyping,currUser:e.userStore.currUser,dog:e.dogsStore}},G)(oe),ie=function(e){function t(){return Object(h.a)(this,t),Object(y.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(se,null))}}]),t}(n.Component),ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function le(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=Object(k.a)(w.a.mark(function n(){return w.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),console.log("Content is cached for offline use22."),t&&t.onSuccess&&t.onSuccess(e)));case 1:case"end":return n.stop()}},n)})))}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(r.a.createElement(i.a,{store:f},r.a.createElement(ie,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator&&new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");ce?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):le(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){})):le(t,e)})}()},80:function(e,t,a){e.exports=a(136)},88:function(e,t,a){},89:function(e,t,a){}},[[80,1,2]]]);
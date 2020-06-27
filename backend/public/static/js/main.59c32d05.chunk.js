(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t){},140:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(30),s=n.n(o),c=n(14),i=n(22),l=n(70),u=n(75),m={msgs:[],userTyping:""},d={dog:null},p={currUser:""},f=Object(i.c)({chatStore:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"pushToMsgs":return e=JSON.parse(JSON.stringify(t)),Object.assign(e,{msgs:[].concat(Object(u.a)(e.msgs),[n.payload])});case"replaceMsgs":return e=JSON.parse(JSON.stringify(t)),Object.assign(e,{msgs:n.payload});case"changeUserTyping":return{msgs:t.msgs,userTyping:n.payload.user};default:return t}},dogsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"updateDog":return t.payload;default:return e}},userStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setUser":return{currUser:t.payload.user.name};case"nullify":return{currUser:t.payload};default:return e}}}),g=Object(i.d)(f,Object(i.a)(l.a)),v=(n(86),n(12)),h=n(13),y=n(15),b=n(16),E=n(5),N=(n(87),n(2)),w=n.n(N),x=n(7),O=n(17),k=n(3),S=n(77),j=n(71),U=n.n(j)()("");U.on("chat new msg",function(e){console.log("'".concat(e.fromUserName,"' send massage: ").concat(e.text," at ").concat(e.dateCreated)),g.dispatch(D.addMsg(e)),console.log(e)}),U.on("chat new notification",function(e){"granted"===Notification.permission&&navigator.serviceWorker.getRegistration().then(function(t){var n="".concat(e.fromUserName," send new message"),a=e.dogOptions.reduce(function(e,t){return t?e?e+", "+t.text:t.text:e},""),r={body:a};console.log(n,r),t.showNotification(n,r)})}),U.on("other user type",function(e){e?g.dispatch(D.setUserTyping(e)):g.dispatch(D.setUserTyping(""))});var C={send:function(e){U.emit("msg sent",e)},typing:function(){U.emit("user type",g.getState().userStore.currUser)},stopTyping:function(){U.emit("user type","")}};var D={sendMsg:function(e){C.send(e)},sendUserTyping:function(){C.typing()},addMsg:function(e){return{type:"pushToMsgs",payload:e}},sendUserStop:function(){C.stopTyping()},setUserTyping:function(e){return{type:"changeUserTyping",payload:{user:e}}}},R={store:function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)},load:function(e){var t=localStorage.getItem(e);return JSON.parse(t)}};var T=n(45),M=n.n(T),L=M.a.create({withCredentials:!0});var W={get:function(){return L.get.apply(L,arguments)},post:function(){return L.post.apply(L,arguments)},put:function(){return L.put.apply(L,arguments)},delete:function(){return L.delete.apply(L,arguments)},getUrl:function(e){return"/".concat(e)},getNoCredAxios:function(){return M.a}},P=W.getUrl("users"),A="curr user";var I={getUser:function(){var e=R.load(A);return e?Promise.resolve(e):Promise.resolve({name:"",code:""})},signup:function(e){return W.post("".concat(P,"/signup"),e).then(function(e){return R.store(A,e.data),e.data})},logout:function(){R.store(A,"")}};var B={loadUser:function(){return function(){var e=Object(x.a)(w.a.mark(function e(t){var n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getUser();case 2:n=e.sent,t({type:"setUser",payload:{user:n}});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},newUserEnter:function(e){return function(){var t=Object(x.a)(w.a.mark(function t(n){var a;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.signup(e);case 2:a=t.sent,n({type:"setUser",payload:{user:a}});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},logout:function(){return function(){var e=Object(x.a)(w.a.mark(function e(t){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.logout();case 2:t({type:"nullify",payload:""});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}},J=W.getUrl("dogs");function H(){return(H=Object(x.a)(w.a.mark(function e(t){var n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.get("".concat(J,"/").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0,"We have an error in server - in: DogService-getByID");case 10:case"end":return e.stop()}},e,null,[[0,7]])}))).apply(this,arguments)}var _={query:function(){return W.get("".concat(J)).then(function(e){return e.data}).catch(function(e){return e})},getById:function(e){return H.apply(this,arguments)}};var F={loadDogs:function(){return _.query()},loadDog:function(e){return function(){var t=Object(x.a)(w.a.mark(function t(n){var a;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.getById(e);case 2:a=t.sent,n({type:"replaceMsgs",payload:a.msgHistory}),n({type:"updateDog",payload:a});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},G=Object(S.a)({},D,B,F);var q=r.a.memo(function(e){return e.currUser,r.a.createElement("section",{className:"home"},r.a.createElement("div",{className:"open-img"}),r.a.createElement("div",{className:"grid"},r.a.createElement(O.b,{to:"/chat"},r.a.createElement("img",{src:"assets/img/home/dog chat.png",alt:"Chat"}),r.a.createElement("label",null,"Chat")),r.a.createElement(O.b,{to:"/gallery"},r.a.createElement("img",{src:"assets/img/home/dog gallery.png",alt:"Gallery"}),r.a.createElement("label",null,"Gallery")),r.a.createElement(O.b,{to:"/forbidden-food"},r.a.createElement("img",{src:"assets/img/home/foot print forbidden.png",alt:"Forbidden"}),r.a.createElement("label",null,"Fordibben food")),r.a.createElement(O.b,{to:"/dog-love"},r.a.createElement("img",{src:"assets/img/home/foot print love.png",alt:"Love"}),r.a.createElement("label",null,"Dog love!"))))}),z=n(32);function V(e){return function(){var t,n=Object(E.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var a=Object(E.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(b.a)(this,t)}}var K=function(e){Object(y.a)(n,e);var t=V(n);function n(){var e;return Object(v.a)(this,n),(e=t.call(this)).state={level:1,buttonTexts:["Make New Message","","Continue","Send!"],msg:{fromUserName:"",text:"",dogOptions:[!1,!1,!1,!1],dateCreated:null},familyList:[],dogList:[],dogDetails:[{_id:301,img:"assets/img/dog/icons/bonzo.png",imgName:"bonzo",text:"food is over"},{_id:302,img:"assets/img/dog/icons/food bowl.png",imgName:"food bowl",text:"got food"},{_id:303,img:"assets/img/dog/icons/poo.png",imgName:"poo",text:"did poop"},{_id:304,img:"assets/img/dog/icons/dog out.png",imgName:"dog out",text:"came out"}]},e.personSelected=e.personSelected.bind(Object(z.a)(e)),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.setFamilyList(),this.setDogList()}},{key:"levelUp",value:function(){var e=this.state.level;if(1!==e&&2!==e&&3!==e&&4!==e||(e+=1,this.setState({level:e})),5===e){var t=this.state.msg;t.dateCreated=Date.now(),t.dogOptions.findIndex(function(e){return e})>=0||t.text?this.props.onSendMsg(t):alert("No massage to sent"),this.initState()}}},{key:"levelDown",value:function(){var e=this.state.level-1;this.setState({level:e})}},{key:"initState",value:function(){var e=this;this.setState({level:1,msg:{fromUserName:"",text:"",dogOptions:[!1,!1,!1,!1],dateCreated:null}},function(){e.setDogList()})}},{key:"personSelected",value:function(e){var t=this.state.msg;t.fromUserName=e,this.setState({msg:t}),this.levelUp()}},{key:"msgContentChanged",value:function(e,t){var n=this.state.msg;n.dogOptions[t]=!n.dogOptions[t]&&e,this.setState({msg:n}),this.setDogList()}},{key:"updateTextHeight",value:function(e){var t=this.state.msg;t.text=e.target.value,this.setState({msg:t}),e.target.style.height="60px",e.target.scrollHeight+2<=128?e.target.style.height=e.target.scrollHeight+2+"px":e.target.style.height="128px"}},{key:"setFamilyList",value:function(){var e=this,t=["1 / 1 / 1 / 1","1 / 2 / 1 / 2","2 / 1 / 2 / 1","2 / 2 / 2 / 2"],n=this.props.family.map(function(n,a){return r.a.createElement("div",{key:n.userId,onClick:function(t){t.stopPropagation(),e.personSelected(n.userName)},style:{gridArea:"".concat(t[a])}},r.a.createElement("div",{className:"wrap-img"},r.a.createElement("img",{src:n.userImg,alt:"".concat(n.userName)})),r.a.createElement("div",{className:"name"},r.a.createElement("label",null,n.userName)))});this.setState({familyList:n})}},{key:"setDogList",value:function(){var e=this,t=this.state.dogDetails.map(function(t,n){return r.a.createElement("div",{key:t._id,onClick:function(a){a.stopPropagation(),e.msgContentChanged(t,n)},style:{gridColumn:"".concat(n+1,"/").concat(n+1)}},r.a.createElement("div",{className:"wrap-img",style:{background:e.state.msg.dogOptions[n]?"green":""}},r.a.createElement("img",{src:t.img,alt:"".concat(t.text)})),r.a.createElement("div",{className:"name"},r.a.createElement("label",null,t.text)))});this.setState({dogList:t})}},{key:"render",value:function(){var e=this.state.level,t=this.state.buttonTexts[this.state.level-1];return r.a.createElement("div",{className:"form-levels"},2===e&&r.a.createElement("div",{className:"level"},r.a.createElement("label",null,"Who are you?"),r.a.createElement("div",{className:"table-2"},this.state.familyList)),3===e&&r.a.createElement("div",{className:"level"},r.a.createElement("label",null,"Message Content"),r.a.createElement("div",{className:"table-3"},this.state.dogList)),4===e&&r.a.createElement("div",{className:"level"},r.a.createElement("label",{style:{textAlign:"left"}},"Something to add?"),r.a.createElement("div",{className:"table-4"},r.a.createElement("textarea",{type:"text",placeholder:"Write a comment",onChange:this.updateTextHeight.bind(this),value:this.state.msg.text}))),r.a.createElement("div",{className:"line-btn"},t?r.a.createElement("button",{className:"level-btn",onClick:this.levelUp.bind(this)},t):r.a.createElement("button",{className:"level-btn cancel",onClick:this.initState.bind(this)},"Cancel"),e>2&&r.a.createElement("button",{className:"back-btn",onClick:this.levelDown.bind(this)},"BACK")))}}]),n}(a.Component);function X(e){return function(){var t,n=Object(E.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var a=Object(E.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(b.a)(this,t)}}var Y=function(e){Object(y.a)(n,e);var t=X(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={typeTime:null},e.usertyped=function(t){e.setState({text:t.target.value,typeTime:Date.now()}),Date.now()-e.state.typeTime>250&&G.sendUserTyping(),setTimeout(function(){Date.now()-e.state.typeTime>1e3&&G.sendUserStop()},1200)},e.sendingMsg=function(e){G.sendMsg(e)},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.loadDog("5d1e284dba30b944ba076387"),this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"scrollToBottom",value:function(){this.messagesEnd.scrollIntoView({behavior:"auto",block:"end"})}},{key:"render",value:function(){var e=this,t=this.props.currUser,n=this.props.msgs.map(function(e,n){return r.a.createElement("li",{className:t===e.fromUserName?"own":"else",key:n},r.a.createElement("label",{className:"user"},e.fromUserName),r.a.createElement("label",{className:"date"},"".concat(new Date(Number(e.dateCreated)).toLocaleString())),e.dogOptions&&r.a.createElement("div",{className:"dog-doing"},e.dogOptions.map(function(e){return e?r.a.createElement("div",{key:e._id},r.a.createElement("img",{src:e.img,alt:e.imgName}),r.a.createElement("label",null,e.text)):""})),r.a.createElement("label",{className:"text"},e.text))}),a=void 0===window.orientation&&-1===navigator.userAgent.indexOf("Mobile"),o=this.props.dog.family;return r.a.createElement("section",{className:"chat"},o&&r.a.createElement(K,{family:o,onSendMsg:this.sendingMsg.bind(this)}),r.a.createElement("ul",{className:"msg-list",style:{overflow:a?"":"scroll"}},n.length?n:o?"No chat messages!":"Loading messages...",r.a.createElement("div",{ref:function(t){return e.messagesEnd=t}})))}}]),n}(a.Component);var $=Object(c.b)(function(e){return{}},G)(Y);var Q=r.a.memo(function(){return r.a.createElement("section",null,r.a.createElement("p",null,"Hello Gallery"))});var Z=r.a.memo(function(){return r.a.createElement("section",{className:"forbidden-food"},r.a.createElement("img",{src:"assets/img/forbidden food/food for dogs.png",alt:"food for dogs"}))});var ee=r.a.memo(function(){return r.a.createElement("section",null,r.a.createElement("p",null,"Hello DogLove"))}),te=n(25);function ne(e){return function(){var t,n=Object(E.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var a=Object(E.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(b.a)(this,t)}}var ae=function(e){Object(y.a)(n,e);var t=ne(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"signup"},r.a.createElement("h2",null,"Signup"),r.a.createElement(te.c,{initialValues:{name:"",code:""},validate:function(e){var t={};return e.name.length<3&&(t.name="Name must be at least 3 characters"),e.code.length<5&&(t.code="Code must be at least 5 characters"),e.name===e.code&&(t.code="Your Code shouldn't be the same as your Name"),t},onSubmit:function(t,n){e.props.newUserEnter({name:t.name,code:t.code}).then(function(){return e.props.history.push("/")})}},function(e){return r.a.createElement(te.b,{className:"signup-form"},r.a.createElement("div",{className:"user-details"},r.a.createElement("div",{style:{textAlign:"left",paddingLeft:"8px",fontWeight:"bold",color:"#444444"}},"Dog Name"),r.a.createElement(te.a,{name:"name",placeholder:"Write your name",autoFocus:void 0===window.orientation&&-1===navigator.userAgent.indexOf("Mobile")}),r.a.createElement("div",{style:{color:"red",height:"20px"}},e.errors.name&&e.touched.name&&r.a.createElement("label",null,e.errors.name))),r.a.createElement("div",{className:"user-details"},r.a.createElement("div",{style:{textAlign:"left",paddingLeft:"8px",fontWeight:"bold",color:"#444444"}},"Code"),r.a.createElement(te.a,{name:"code",placeholder:"Select a code - at least 5 Chars",type:"password"}),r.a.createElement("div",{style:{color:"red",height:"20px"}},e.errors.code&&e.touched.code&&r.a.createElement("label",null,e.errors.code))),r.a.createElement("div",{className:"approves-btn flex wrap space-between"},r.a.createElement("input",{className:"reset",type:"reset",value:"Reset",onClick:e.handleReset,disabled:!e.dirty||e.isSubmitting}),r.a.createElement("input",{className:"submit",type:"submit",value:"Enter!"})))}))}}]),n}(a.Component);var re=Object(c.b)(function(e){return{}},G)(ae),oe=n(76);var se=r.a.memo(function(e){var t=e.isOpen,n=e.onClose,a=Object(c.c)(),o=function(){n()};return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"cover",style:{display:t?"":"none"},onClick:o.bind(this)}),r.a.createElement("div",{className:"menu",style:{right:t?"":"-82vw"}},r.a.createElement("div",{className:"head flex flex-col"},r.a.createElement("div",{className:"flex relative"},r.a.createElement("div",{className:"dog-img"},r.a.createElement("img",{src:"../assets/img/dog/messi.jpg",alt:"Messi"})),r.a.createElement("div",{className:"dog-details"},r.a.createElement("label",null,r.a.createElement("span",null,"name: "),"Messi"),r.a.createElement("label",null,r.a.createElement("span",null,"age: "),"10.5"),r.a.createElement("label",null,r.a.createElement("span",null,"species: "),"Golden and cocker spaniol")),r.a.createElement("div",{className:"close",onClick:o.bind(this)},"X")),r.a.createElement("div",{className:"dog-edit"},r.a.createElement("button",null,"Edit Details"))),r.a.createElement("div",{className:"options"},r.a.createElement("ul",null,r.a.createElement("div",null,"Options"),r.a.createElement("li",null,"Gallery"),r.a.createElement("li",null,"The Family"),r.a.createElement("li",null,"Export Chat"),r.a.createElement("hr",null),r.a.createElement("div",null,"Acount"),r.a.createElement("li",null,"Settings"),r.a.createElement("li",{onClick:function(){a(G.logout()),n()}.bind(this)},"Logout"))))))});var ce=r.a.memo(function(e){var t=e.currUserName,n="assets/img/general/icons/burger.png",o="assets/img/general/icons/burger-white.png",s=Object(a.useState)(n),c=Object(oe.a)(s,2),i=c[0],l=c[1],u=function(){l(i===o?n:o)};return r.a.createElement("nav",{className:"Nav_menu"},r.a.createElement("ul",null,!t&&r.a.createElement("div",{className:"link"},r.a.createElement(O.b,{to:"/",activeClassName:"activeRoute"},"Sign Up")),t&&r.a.createElement("div",{className:"link flex space-between align-center"},r.a.createElement(O.b,{exact:!0,to:"/",activeClassName:"activeRoute"},"LOGO"),r.a.createElement("li",{className:"nav-options",onClick:u.bind(this)},r.a.createElement("img",{src:i,alt:"Menu"})))),r.a.createElement(se,{isOpen:i===o,onClose:u.bind(this)}))});function ie(e){return function(){var t,n=Object(E.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var a=Object(E.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(b.a)(this,t)}}var le=function(e){Object(y.a)(n,e);var t=ie(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).registerServiceWorker=Object(x.a)(w.a.mark(function e(){var t;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.register("/service-worker.js");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)})),e.requestNotificationPermission=Object(x.a)(w.a.mark(function e(){var t;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Notification.requestPermission();case 2:if("granted"===(t=e.sent)){e.next=5;break}throw new Error("Permission not granted for Notification");case 5:console.log("Notification permission status:",t),"granted"===Notification.permission&&navigator.serviceWorker.getRegistration().then(function(e){console.log("registration",e.active.state)});case 7:case"end":return e.stop()}},e)})),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(x.a)(w.a.mark(function e(){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.loadUser(),this.check(),e.next=4,this.registerServiceWorker();case 4:return e.next=6,this.requestNotificationPermission();case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"check",value:function(){if(console.log("Doing Check"),!("serviceWorker"in navigator))throw console.log("No Service Worker support!"),new Error("No Service Worker support!");if(!("PushManager"in window))throw console.log("No Push API Support!"),new Error("No Push API Support!")}},{key:"render",value:function(){var e=this,t=g.getState().userStore.currUser;return r.a.createElement(O.a,null,r.a.createElement("div",{className:"app-nav-route"},r.a.createElement("div",{className:"nav"},r.a.createElement(ce,{currUserName:t})),r.a.createElement("div",{className:"route"},r.a.createElement(k.c,null,!t&&r.a.createElement(k.a,{path:"/",component:re}),r.a.createElement(k.a,{exact:!0,path:"/",render:function(){return r.a.createElement(q,{currUser:e.props.currUser})}}),r.a.createElement(k.a,{exact:!0,path:"/chat",render:function(){return r.a.createElement($,{msgs:e.props.msgs,userTyping:e.props.userTyping,currUser:e.props.currUser,dog:e.props.dog})}}),r.a.createElement(k.a,{exact:!0,path:"/gallery",component:Q}),r.a.createElement(k.a,{exact:!0,path:"/forbidden-food",component:Z}),r.a.createElement(k.a,{exact:!0,path:"/dog-love",component:ee}),r.a.createElement(k.a,{exact:!0,path:"/signup",component:re})))))}}]),n}(a.Component);var ue=Object(c.b)(function(e){return{msgs:e.chatStore.msgs,userTyping:e.chatStore.userTyping,currUser:e.userStore.currUser,dog:e.dogsStore}},G)(le);function me(e){return function(){var t,n=Object(E.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var a=Object(E.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(b.a)(this,t)}}var de=function(e){Object(y.a)(n,e);var t=me(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ue,null))}}]),n}(a.Component),pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function fe(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=Object(x.a)(w.a.mark(function a(){return w.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),console.log("Content is cached for offline use22."),t&&t.onSuccess&&t.onSuccess(e)));case 1:case"end":return a.stop()}},a)})))}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(r.a.createElement(c.a,{store:g},r.a.createElement(de,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator&&new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");pe?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):fe(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){})):fe(t,e)})}()},78:function(e,t,n){e.exports=n(140)},86:function(e,t,n){},87:function(e,t,n){}},[[78,1,2]]]);
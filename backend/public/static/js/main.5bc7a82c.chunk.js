(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(34),o=a.n(s),l=a(15),c=a(18),i=a(72),u=a(78),m={msgs:[{fromUserName:"Omer",text:"hello",dateCreated:1559329928517},{fromUserName:"Amit",text:"hii",dateCreated:1560329960117}],userTyping:""},d={dog:null},p={currUser:""},g=Object(c.c)({chatStore:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"pushToMsgs":return e=JSON.parse(JSON.stringify(t)),Object.assign(e,{msgs:[].concat(Object(u.a)(e.msgs),[a.payload])});case"replaceMsgs":return e=JSON.parse(JSON.stringify(t)),Object.assign(e,{msgs:a.payload});case"changeUserTyping":return{msgs:t.msgs,userTyping:a.payload.user};default:return t}},dogsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"updateDog":return t.payload;default:return e}},userStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setUser":return console.log(t.payload.user),{currUser:t.payload.user.name};default:return e}}}),v=Object(c.d)(g,Object(c.a)(i.a)),f=(a(88),a(6)),h=a(7),b=a(10),y=a(8),E=a(9),N=(a(89),a(20)),O=a(17),w=a(79),x=a(73),k=a.n(x)()("");k.on("chat new msg",function(e){console.log("'".concat(e.fromUserName,"' send massage: ").concat(e.text," at ").concat(e.dateCreated)),v.dispatch(j.addMsg(e))}),k.on("other user type",function(e){e?v.dispatch(j.setUserTyping(e)):v.dispatch(j.setUserTyping(""))});var S={send:function(e){k.emit("msg sent",e)},typing:function(){k.emit("user type",v.getState().userStore.currUser)},stopTyping:function(){k.emit("user type","")}};var j={sendMsg:function(e){S.send(e)},sendUserTyping:function(){S.typing()},addMsg:function(e){return{type:"pushToMsgs",payload:e}},sendUserStop:function(){S.stopTyping()},setUserTyping:function(e){return{type:"changeUserTyping",payload:{user:e}}}},U=a(12),C=a.n(U),T=a(19),M={store:function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)},load:function(e){var t=localStorage.getItem(e);return JSON.parse(t)}};var D=a(47),A=a.n(D),I=A.a.create({withCredentials:!0});var B={get:function(){return I.get.apply(I,arguments)},post:function(){return I.post.apply(I,arguments)},put:function(){return I.put.apply(I,arguments)},delete:function(){return I.delete.apply(I,arguments)},getUrl:function(e){return"/".concat(e)},getNoCredAxios:function(){return A.a}},J=B.getUrl("users"),W="curr user";var _={getUser:function(){var e=M.load(W);return e?Promise.resolve(e):Promise.resolve({name:"",code:""})},signup:function(e){return B.post("".concat(J,"/signup"),e).then(function(e){return M.store(W,e.data),console.log(e.data),e.data})}};var R={loadUser:function(){return function(){var e=Object(T.a)(C.a.mark(function e(t){var a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.getUser();case 2:a=e.sent,t({type:"setUser",payload:{user:a}});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},newUserEnter:function(e){return function(){var t=Object(T.a)(C.a.mark(function t(a){var n;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.signup(e);case 2:n=t.sent,console.log(n),a({type:"setUser",payload:{user:n}});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},L=B.getUrl("dogs");function P(){return(P=Object(T.a)(C.a.mark(function e(t){var a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.get("".concat(L,"/").concat(t));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0,"We have an error in server - in: DogService-getByID");case 10:case"end":return e.stop()}},e,null,[[0,7]])}))).apply(this,arguments)}var z={query:function(){return B.get("".concat(L)).then(function(e){return e.data}).catch(function(e){return e})},getById:function(e){return P.apply(this,arguments)}};var H={loadDogs:function(){return z.query()},loadDog:function(e){return function(){var t=Object(T.a)(C.a.mark(function t(a){var n;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z.getById(e);case 2:n=t.sent,a({type:"replaceMsgs",payload:n.msgHistory}),a({type:"updateDog",payload:n});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},V=Object(w.a)({},j,R,H),q=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.scrollToTop()}},{key:"scrollToTop",value:function(){this.page.scrollIntoView({behavior:"auto",block:"start"})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"home",ref:function(t){return e.page=t}},r.a.createElement("p",null,"Hello ",this.props.currUser))}}]),t}(n.Component),F=a(36),G=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(b.a)(this,Object(y.a)(t).call(this))).state={level:4,buttonTexts:["Make New Message","","Continue","Send!"],msg:{fromUserName:"",text:"",dogOptions:[!1,!1,!1,!1],dateCreated:null},dogDetails:[{_id:301,img:"assets/img/dog/icons/bonzo.png",imgName:"bonzo",text:"food is over"},{_id:302,img:"assets/img/dog/icons/food bowl.png",imgName:"food bowl",text:"got food"},{_id:303,img:"assets/img/dog/icons/poo.png",imgName:"poo",text:"did poop"},{_id:304,img:"assets/img/dog/icons/dog out.png",imgName:"dog out",text:"came out"}]},e.personSelected=e.personSelected.bind(Object(F.a)(e)),e}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"levelUp",value:function(){var e=this.state.level;if(1!==e&&3!==e&&4!==e||this.setState({level:++e}),5===e){var t=this.state.msg;t.dateCreated=Date.now(),(t.dogOptions.findIndex(function(e){return e})>=0||t.text)&&this.props.onSendMsg(t),this.initState()}}},{key:"initState",value:function(){this.setState({level:1,msg:{fromUserName:"",text:"",dogOptions:[!1,!1,!1,!1],dateCreated:null}})}},{key:"personSelected",value:function(e){var t=this.state.msg;t.fromUserName=e,this.setState({level:++this.state.level,msg:t})}},{key:"contentToggle",value:function(e,t){var a=this.state.msg;a.dogOptions[t]=!a.dogOptions[t]&&e,this.setState({msg:a})}},{key:"updateText",value:function(e){var t=this.state.msg;t.text=e.target.value,this.setState({msg:t})}},{key:"render",value:function(){var e=this,t=this.state.level,a=this.state.buttonTexts[this.state.level-1],n=["1 / 1 / 1 / 1","1 / 2 / 1 / 2","2 / 1 / 2 / 1","2 / 2 / 2 / 2"],s=this.props.family.map(function(t,a){return r.a.createElement("div",{key:t.userId,onClick:function(a){a.stopPropagation(),e.personSelected(t.userName)},style:{gridArea:"".concat(n[a])}},r.a.createElement("div",{className:"wrap-img"},r.a.createElement("img",{src:t.userImg,alt:"".concat(t.userName)})),r.a.createElement("div",{className:"name"},r.a.createElement("label",null,t.userName)))}),o=this.state.dogDetails.map(function(t,a){return r.a.createElement("div",{key:t._id,onClick:function(n){n.stopPropagation(),e.contentToggle(t,a)},style:{gridColumn:"".concat(a+1,"/").concat(a+1)}},r.a.createElement("div",{className:"wrap-img",style:{background:e.state.msg.dogOptions[a]?"green":""}},r.a.createElement("img",{src:t.img,alt:"".concat(t.imgName)})),r.a.createElement("div",{className:"name"},r.a.createElement("label",null,t.imgName)))});return r.a.createElement("div",{className:"form-levels"},2===t&&r.a.createElement("div",{className:"level"},r.a.createElement("label",null,"Who are you?"),r.a.createElement("div",{className:"table-2"},s)),3===t&&r.a.createElement("div",{className:"level",style:{height:3===t?"128px":""}},r.a.createElement("label",null,"Message Content"),r.a.createElement("div",{className:"table-3"},o)),4===t&&r.a.createElement("div",{className:"level",style:{height:4===t?"auto":""}},r.a.createElement("div",{className:"table-4"},r.a.createElement("label",null,"Something to add?"),r.a.createElement("input",{value:this.state.msg.text,onChange:this.updateText.bind(this),type:"text"}))),r.a.createElement("div",{className:"line-btn"},a?r.a.createElement("button",{className:"level-btn",onClick:this.levelUp.bind(this)},a):r.a.createElement("button",{className:"level-btn",onClick:this.initState.bind(this),style:{backgroundColor:"#ff7676",color:"black",fontSize:"1em",border:"1.5px solid black"}},"Cancel"),t>2&&r.a.createElement("button",{className:"back-btn",onClick:function(){return e.setState({level:--e.state.level})}},"BACK")))}}]),t}(n.Component),K=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={typeTime:null},a.usertyped=function(e){a.setState({text:e.target.value,typeTime:Date.now()}),Date.now()-a.state.typeTime>250&&V.sendUserTyping(),setTimeout(function(){Date.now()-a.state.typeTime>1e3&&V.sendUserStop()},1200)},a.sendingMsg=function(e){V.sendMsg(e)},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.loadDog("5d1e284dba30b944ba076387"),this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"scrollToBottom",value:function(){this.messagesEnd.scrollIntoView({behavior:"auto",block:"end"})}},{key:"render",value:function(){var e=this,t=this.props.currUser,a=this.props.userTyping,n=this.props.msgs.map(function(e,a){return r.a.createElement("li",{className:t===e.fromUserName?"own":"else",key:a},r.a.createElement("label",{className:"user"},e.fromUserName),r.a.createElement("label",{className:"date"},"".concat(new Date(Number(e.dateCreated)).toLocaleString())),e.dogOptions&&r.a.createElement("div",{className:"dog-doing"},e.dogOptions.map(function(e){return e?r.a.createElement("div",{key:e._id},r.a.createElement("img",{src:e.img,alt:e.imgName}),r.a.createElement("label",null,e.text)):""})),r.a.createElement("label",{className:"text"},e.text))}),s=void 0===window.orientation&&-1===navigator.userAgent.indexOf("Mobile"),o=this.props.dog.family;return r.a.createElement("section",{className:"chat"},r.a.createElement("h1",null,t,", Welcome to Chat!"),r.a.createElement("div",{className:"type-area"},a?"".concat(a," typing..."):""),o&&r.a.createElement(G,{family:o,onSendMsg:this.sendingMsg.bind(this)}),r.a.createElement("ul",{className:"msg-list",style:{overflow:s?"":"scroll"}},n,r.a.createElement("div",{ref:function(t){return e.messagesEnd=t}})))}}]),t}(n.Component);var Y=Object(l.b)(function(e){return{}},V)(K),$=a(26),Q=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"signup"},r.a.createElement("h2",null,"Signup"),r.a.createElement($.c,{initialValues:{name:"",code:""},validate:function(e){var t={};return e.name.length<3&&(t.name="Name must be at least 3 characters"),e.code.length<5&&(t.code="Code must be at least 5 characters"),e.name===e.code&&(t.code="Your Code shouldn't be the same as your Name"),t},onSubmit:function(t,a){e.props.newUserEnter({name:t.name,code:t.code}).then(function(){return e.props.history.push("/")})}},function(e){return r.a.createElement($.b,{className:"signup-form"},r.a.createElement("div",{className:"user-details"},r.a.createElement("div",{style:{textAlign:"left",paddingLeft:"8px",fontWeight:"bold",color:"#444444"}},"Name"),r.a.createElement($.a,{name:"name",placeholder:"Write your name",autoFocus:void 0===window.orientation&&-1===navigator.userAgent.indexOf("Mobile")}),r.a.createElement("div",{style:{color:"red",height:"20px"}},e.errors.name&&e.touched.name&&r.a.createElement("label",null,e.errors.name))),r.a.createElement("div",{className:"user-details"},r.a.createElement("div",{style:{textAlign:"left",paddingLeft:"8px",fontWeight:"bold",color:"#444444"}},"Code"),r.a.createElement($.a,{name:"code",placeholder:"Select a code - at least 5 Chars",type:"password"}),r.a.createElement("div",{style:{color:"red",height:"20px"}},e.errors.code&&e.touched.code&&r.a.createElement("label",null,e.errors.code))),r.a.createElement("div",{className:"approves-btn flex wrap space-between"},r.a.createElement("input",{className:"reset",type:"reset",value:"Reset",onClick:e.handleReset,disabled:!e.dirty||e.isSubmitting}),r.a.createElement("input",{className:"submit",type:"submit",value:"Enter!"})))}))}}]),t}(n.Component);var X=Object(l.b)(function(e){return{}},V)(Q),Z=a(77);var ee=r.a.memo(function(e){var t=e.isOpen,a=e.onClose;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"cover",style:{display:t?"":"none"},onClick:function(){a()}.bind(this)}),r.a.createElement("div",{className:"menu",style:{right:t?"":"-80vw"}},r.a.createElement("div",{className:"head flex flex-col"},r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"dog-img"},r.a.createElement("img",{src:"../assets/img/dog/messi.jpg",alt:"Messi"})),r.a.createElement("div",{className:"dog-details"},r.a.createElement("label",null,r.a.createElement("span",null,"name: "),"Messi"),r.a.createElement("label",null,r.a.createElement("span",null,"age: "),"10.5"),r.a.createElement("label",null,r.a.createElement("span",null,"species: "),"Golden and cocker spaniol"))),r.a.createElement("div",{className:"dog-edit"},r.a.createElement("button",null,"Edit Details"))),r.a.createElement("div",{className:"options"},r.a.createElement("ul",null,r.a.createElement("div",null,"Options"),r.a.createElement("li",null,"Gallery"),r.a.createElement("li",null,"The Family"),r.a.createElement("li",null,"Export Chat"),r.a.createElement("hr",null),r.a.createElement("div",null,"Acount"),r.a.createElement("li",null,"Settings"),r.a.createElement("li",null,"Logout"))))))});var te=r.a.memo(function(e){var t=e.currUserName,a="assets/img/general/icons/burger.png",s="assets/img/general/icons/burger-white.png",o=Object(n.useState)(a),l=Object(Z.a)(o,2),c=l[0],i=l[1],u=function(){i(c===s?a:s)};return r.a.createElement("nav",{className:"Nav_menu"},r.a.createElement("ul",null,!t&&r.a.createElement("div",{className:"link"},r.a.createElement(N.b,{to:"/",activeClassName:"activeRoute"},"Sign Up")),t&&r.a.createElement("div",{className:"link flex space-between align-center"},r.a.createElement(N.b,{exact:!0,to:"/",activeClassName:"activeRoute"},"Home"),r.a.createElement(N.b,{to:"/chat",activeClassName:"activeRoute"},"Chat"),r.a.createElement(N.b,{to:"/signup",activeClassName:"activeRoute"},"Logout"),r.a.createElement("li",{className:"nav-options",onClick:u.bind(this)},r.a.createElement("img",{src:c,alt:"Menu"})))),r.a.createElement(ee,{isOpen:c===s,onClose:u.bind(this)}))}),ae=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.loadUser()}},{key:"render",value:function(){var e=this,t=v.getState().userStore.currUser;return r.a.createElement(N.a,null,r.a.createElement("div",{className:"app-nav-route"},r.a.createElement("div",{className:"nav"},r.a.createElement(te,{currUserName:t})),r.a.createElement("div",{className:"route"},r.a.createElement(O.c,null,!t&&r.a.createElement(O.a,{path:"/",component:X}),r.a.createElement(O.a,{exact:!0,path:"/",render:function(){return r.a.createElement(q,{currUser:e.props.currUser})}}),r.a.createElement(O.a,{exact:!0,path:"/chat",render:function(){return r.a.createElement(Y,{msgs:e.props.msgs,userTyping:e.props.userTyping,currUser:e.props.currUser,dog:e.props.dog})}}),r.a.createElement(O.a,{exact:!0,path:"/signup",component:X})))))}}]),t}(n.Component);var ne=Object(l.b)(function(e){return{msgs:e.chatStore.msgs,userTyping:e.chatStore.userTyping,currUser:e.userStore.currUser,dog:e.dogsStore}},V)(ae),re=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ne,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,{store:v},r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},80:function(e,t,a){e.exports=a(136)},88:function(e,t,a){},89:function(e,t,a){}},[[80,1,2]]]);
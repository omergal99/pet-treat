(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t){},134:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(34),o=n.n(s),c=n(16),u=n(19),i=n(71),l=n(76),p={msgs:[{fromUserName:"Omer",text:"hello",dateCreated:1559329928517},{fromUserName:"Amit",text:"hii",dateCreated:1560329960117}],userTyping:""},m={currUser:""},d=Object(u.c)({chatStore:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"pushToMsgs":return Object.assign(t,{msgs:[].concat(Object(l.a)(t.msgs),[n.payload])});case"replaceMsgs":return e=JSON.parse(JSON.stringify(t)),Object.assign(e,{msgs:n.payload});case"changeUserTyping":return{msgs:t.msgs,userTyping:n.payload.user};default:return t}},userStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setUser":return console.log(t.payload.user),{currUser:t.payload.user.name};default:return e}}}),g=Object(u.d)(d,Object(u.a)(i.a)),f=(n(86),n(9)),h=n(10),v=n(12),y=n(11),b=n(13),E=(n(87),n(20)),N=n(18),O=n(77),w=n(72),U=n.n(w)()("");U.on("chat new msg",function(e,t,n){console.log("'".concat(e,"' send massage: ").concat(t," at ").concat(n)),g.dispatch(x.addMsg(e,t,n))}),U.on("other user type",function(e){e?g.dispatch(x.setUserTyping(e)):g.dispatch(x.setUserTyping(""))});var j={send:function(e,t,n){U.emit("msg sent",e,t,n)},typing:function(){U.emit("user type",g.getState().userStore.currUser)},stopTyping:function(){U.emit("user type","")}};var x={sendMsg:function(e,t,n){j.send(e,t,n)},sendUserTyping:function(){j.typing()},addMsg:function(e,t,n){return{type:"pushToMsgs",payload:{fromUserName:e,text:t,dateCreated:n}}},sendUserStop:function(){j.stopTyping()},setUserTyping:function(e){return{type:"changeUserTyping",payload:{user:e}}}},k=n(3),S=n.n(k),T=n(14),C={store:function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)},load:function(e){var t=localStorage.getItem(e);return JSON.parse(t)}};var D=n(46),M=n.n(D),A=M.a.create({withCredentials:!0});var I={get:function(){return A.get.apply(A,arguments)},post:function(){return A.post.apply(A,arguments)},put:function(){return A.put.apply(A,arguments)},delete:function(){return A.delete.apply(A,arguments)},getUrl:function(e){return"/".concat(e)},getNoCredAxios:function(){return M.a}},B=I.getUrl("users"),W="curr user";var J={getUser:function(){var e=C.load(W);return Promise.resolve(e)},signup:function(e){return I.post("".concat(B,"/signup"),e).then(function(e){return C.store(W,e.data),console.log(e.data),e.data})}};var R={loadUser:function(){return function(){var e=Object(T.a)(S.a.mark(function e(t){var n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.getUser();case 2:n=e.sent,t({type:"setUser",payload:{user:n}});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},newUserEnter:function(e){return function(){var t=Object(T.a)(S.a.mark(function t(n){var a;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J.signup(e);case 2:a=t.sent,console.log(a),n({type:"setUser",payload:{user:a}});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},_=I.getUrl("dogs");function L(){return(L=Object(T.a)(S.a.mark(function e(t){var n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.get("".concat(_,"/").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0,"We have an error in server - in: DogService-getByID");case 10:case"end":return e.stop()}},e,null,[[0,7]])}))).apply(this,arguments)}var H={query:function(){return I.get("".concat(_)).then(function(e){return e.data}).catch(function(e){return e})},getById:function(e){return L.apply(this,arguments)}};var q={loadDogs:function(){return H.query()},loadDog:function(e){return function(){var t=Object(T.a)(S.a.mark(function t(n){var a;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.getById(e);case 2:a=t.sent,n({type:"replaceMsgs",payload:a.msgHistory});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},F=Object(O.a)({},x,R,q),V=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("section",{className:"home"},r.a.createElement("p",null,"Hello ",this.props.currUser))}}]),t}(a.Component),P=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={text:"",typeTime:null},n.scrollToBottom=function(){n.messagesEnd.scrollIntoView({behavior:"smooth"})},n.updateMsg=function(e){n.setState({text:e.target.value,typeTime:Date.now()}),Date.now()-n.state.typeTime>250&&F.sendUserTyping(),setTimeout(function(){Date.now()-n.state.typeTime>1e3&&F.sendUserStop()},1200)},n.imSendMsg=function(e){e.preventDefault(),n.state.text&&(F.sendMsg(n.props.currUser,n.state.text,Date.now()),n.setState({text:""}))},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.loadDog("5d1e284dba30b944ba076387"),this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"getDogs",value:function(){var e=Object(T.a)(S.a.mark(function e(){var t;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.loadDogs();case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"getDog",value:function(){console.log("WE do that on INIT")}},{key:"render",value:function(){var e=this,t=this.props.currUser,n=this.props.userTyping,a=this.props.msgs.map(function(e,n){return r.a.createElement("li",{className:t===e.fromUserName?"own":"else",key:n},r.a.createElement("label",{className:"user"},e.fromUserName),r.a.createElement("label",{className:"text"},e.text),r.a.createElement("label",{className:"date"},"".concat(new Date(Number(e.dateCreated)).toLocaleString())))}),s=void 0===window.orientation&&-1===navigator.userAgent.indexOf("Mobile");return r.a.createElement("section",{className:"chat"},r.a.createElement("h1",null,t,", Welcome to Chat!"),n&&r.a.createElement("div",{className:"type-area"},n," typing..."),!n&&r.a.createElement("div",{className:"type-area"}),r.a.createElement("form",{className:"msg-form"},r.a.createElement("input",{value:this.state.text,onChange:this.updateMsg,type:"text",autoFocus:s}),r.a.createElement("button",{onClick:this.imSendMsg},"SEND")),r.a.createElement("ul",{className:"msg-list",style:{overflow:s?"":"scroll"}},a,r.a.createElement("div",{ref:function(t){e.messagesEnd=t}})))}}]),t}(a.Component);var Y=Object(c.b)(function(e){return console.log(e),{}},F)(P),$=n(26),z=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"signup"},r.a.createElement("h2",null,"Signup"),r.a.createElement($.c,{initialValues:{name:"",code:""},validate:function(e){var t={};return e.name.length<3&&(t.name="Name must be at least 3 characters"),e.code.length<5&&(t.code="Code must be at least 5 characters"),e.name===e.code&&(t.code="Your Code shouldn't be the same as your Name"),t},onSubmit:function(t,n){e.props.newUserEnter({name:t.name,code:t.code}).then(function(){return e.props.history.push("/")})}},function(e){return r.a.createElement($.b,{className:"signup-form"},r.a.createElement("div",{className:"user-details"},r.a.createElement("div",{style:{textAlign:"left",paddingLeft:"8px",fontWeight:"bold",color:"#444444"}},"Name"),r.a.createElement($.a,{name:"name",placeholder:"Write your name",autoFocus:void 0===window.orientation&&-1===navigator.userAgent.indexOf("Mobile")}),r.a.createElement("div",{style:{color:"red",height:"20px"}},e.errors.name&&e.touched.name&&r.a.createElement("label",null,e.errors.name))),r.a.createElement("div",{className:"user-details"},r.a.createElement("div",{style:{textAlign:"left",paddingLeft:"8px",fontWeight:"bold",color:"#444444"}},"Code"),r.a.createElement($.a,{name:"code",placeholder:"Select a code - at least 5 Chars",type:"password"}),r.a.createElement("div",{style:{color:"red",height:"20px"}},e.errors.code&&e.touched.code&&r.a.createElement("label",null,e.errors.code))),r.a.createElement("div",{className:"approves-btn flex wrap space-between"},r.a.createElement("input",{className:"reset",type:"reset",value:"Reset",onClick:e.handleReset,disabled:!e.dirty||e.isSubmitting}),r.a.createElement("input",{className:"submit",type:"submit",value:"Enter!"})))}))}}]),t}(a.Component);var G=Object(c.b)(function(e){return{}},F)(z),K=function(e){var t=e.currUserName;return r.a.createElement("nav",{className:"Nav_menu"},r.a.createElement("ul",null,!t&&r.a.createElement("div",{className:"link"},r.a.createElement(E.b,{className:"Nav_link",to:"/",activeClassName:"activeRoute"},"Sign Up")),t&&r.a.createElement("div",{className:"link flex space-between align-center"},r.a.createElement(E.b,{exact:!0,className:"Nav_link",to:"/",activeClassName:"activeRoute"},"Home"),r.a.createElement(E.b,{className:"Nav_link",to:"/chat",activeClassName:"activeRoute"},"Chat"),r.a.createElement(E.b,{className:"Nav_link",to:"/signup",activeClassName:"activeRoute"},"Logout"))))},Q=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.loadUser(),console.log(this.props)}},{key:"render",value:function(){var e=this,t=g.getState().userStore.currUser;return r.a.createElement(E.a,null,r.a.createElement("div",{className:"app-nav-route"},r.a.createElement("div",{className:"nav"},r.a.createElement(K,{currUserName:t})),r.a.createElement("div",{className:"route"},r.a.createElement(N.c,null,!t&&r.a.createElement(N.a,{path:"/",component:G}),r.a.createElement(N.a,{exact:!0,path:"/",render:function(){return r.a.createElement(V,{currUser:e.props.currUser})}}),r.a.createElement(N.a,{exact:!0,path:"/chat",render:function(){return r.a.createElement(Y,{msgs:e.props.msgs,userTyping:e.props.userTyping,currUser:e.props.currUser})}}),r.a.createElement(N.a,{exact:!0,path:"/signup",component:G})))))}}]),t}(a.Component);var X=Object(c.b)(function(e){return console.log(e),{msgs:e.chatStore.msgs,userTyping:e.chatStore.userTyping,currUser:e.userStore.currUser}},F)(Q),Z=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(X,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,{store:g},r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},78:function(e,t,n){e.exports=n(134)},86:function(e,t,n){},87:function(e,t,n){}},[[78,1,2]]]);
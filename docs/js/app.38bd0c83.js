(function(t){function e(e){for(var o,u,a=e[0],s=e[1],c=e[2],l=0,p=[];l<a.length;l++)u=a[l],r[u]&&p.push(r[u][0]),r[u]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},i=[];function u(t){return a.p+"js/"+({}[t]||t)+"."+{"chunk-2d0f0c3d":"5d2e7513"}[t]+".js"}function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,o){n=r[t]=[e,o]});e.push(n[2]=o);var i,s=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=u(t),i=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,u=new Error("Loading chunk "+t+" failed.\n("+o+": "+i+")");u.type=o,u.request=i,n[1](u)}r[t]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,s.appendChild(c)}return Promise.all(e)},a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},cd49:function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),r=n("bb71");n("da64");o["default"].use(r["a"],{iconfont:"mdi"});var i=n("e1c6"),u=n("9ab4"),a=(n("98db"),function(){function t(t){this.done=!1,this.id=Math.random().toString(36).substr(2,9),this.title=t}return t}()),s=n("daf9"),c=Symbol.for("ITodoApi");function l(t,e,n){var o=n.value;return n.value=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return u["b"](this,void 0,void 0,function(){var r;return u["e"](this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),console.log("Trying "+t.constructor.name+"."+e+" with arguments",n),[4,o.apply(this,n)];case 1:return[2,i.sent()];case 2:return r=i.sent(),console.error(r.message),[3,3];case 3:return[2]}})})},n}var d=l,p=function(){function t(){this.todos=[]}return t.prototype.onReady=function(){this.list()},t.prototype.list=function(){return u["b"](this,void 0,void 0,function(){var t;return u["e"](this,function(e){switch(e.label){case 0:return t=this,[4,this._api.list()];case 1:return t.todos=e.sent(),[2]}})})},t.prototype.add=function(t){return u["b"](this,void 0,void 0,function(){var e;return u["e"](this,function(n){switch(n.label){case 0:return e=this,[4,this._api.put(new a(t))];case 1:return e.todos=n.sent(),[2]}})})},t.prototype.remove=function(t){return u["b"](this,void 0,void 0,function(){var e;return u["e"](this,function(n){switch(n.label){case 0:return e=this,[4,this._api.delete(t)];case 1:return e.todos=n.sent(),[2]}})})},t.prototype.update=function(t){return u["b"](this,void 0,void 0,function(){var e;return u["e"](this,function(n){switch(n.label){case 0:return e=this,[4,this._api.put(t)];case 1:return e.todos=n.sent(),[2]}})})},t.prototype.clear=function(){return u["b"](this,void 0,void 0,function(){var t;return u["e"](this,function(e){switch(e.label){case 0:return t=this,[4,this._api.clear()];case 1:return t.todos=e.sent(),[2]}})})},u["c"]([Object(i["inject"])(c)],t.prototype,"_api",void 0),u["c"]([s["c"]],t.prototype,"todos",void 0),u["c"]([Object(i["postConstruct"])()],t.prototype,"onReady",null),u["c"]([d],t.prototype,"list",null),u["c"]([d],t.prototype,"add",null),u["c"]([d],t.prototype,"remove",null),u["c"]([d],t.prototype,"update",null),u["c"]([d],t.prototype,"clear",null),t=u["c"]([Object(i["injectable"])()],t),t}(),f=p,h=Symbol.for("ITodoRepository"),v=n("ea05"),b=n.n(v),y=function(){function t(){var t=this;this.dbName="TodoAppDb",this.storeName="TodoStore",this.dbPromise=b.a.open(this.dbName,1,function(e){e.createObjectStore(t.storeName,{keyPath:"id"})}),this.objectStore=this.dbPromise.then(function(e){return e.transaction(t.storeName,"readwrite").objectStore(t.storeName)})}return t.prototype.getStore=function(){return u["b"](this,void 0,Promise,function(){var t;return u["e"](this,function(e){switch(e.label){case 0:return[4,this.dbPromise];case 1:return t=e.sent(),[4,t.transaction(this.storeName,"readwrite").objectStore(this.storeName)];case 2:return[2,e.sent()]}})})},t.prototype.list=function(){return u["b"](this,void 0,Promise,function(){var t;return u["e"](this,function(e){switch(e.label){case 0:return[4,this.getStore()];case 1:return t=e.sent(),[4,t.getAll()];case 2:return[2,e.sent()]}})})},t.prototype.put=function(t){return u["b"](this,void 0,Promise,function(){var e;return u["e"](this,function(n){switch(n.label){case 0:return[4,this.getStore()];case 1:return e=n.sent(),[4,e.put(t)];case 2:return n.sent(),[2,this.list()]}})})},t.prototype.delete=function(t){return u["b"](this,void 0,Promise,function(){var e;return u["e"](this,function(n){switch(n.label){case 0:return[4,this.getStore()];case 1:return e=n.sent(),[4,e.delete(t.id)];case 2:return n.sent(),[2,this.list()]}})})},t.prototype.clear=function(){return u["b"](this,void 0,Promise,function(){var t;return u["e"](this,function(e){switch(e.label){case 0:return[4,this.getStore()];case 1:return t=e.sent(),[4,t.clear()];case 2:return e.sent(),[2,this.list()]}})})},t=u["c"]([Object(i["injectable"])()],t),t}(),m=y,g=new i["Container"];g.bind(c).to(m).inSingletonScope(),g.bind(h).to(f).inSingletonScope(),o["default"].prototype.$todoRepository=g.get(h);var _=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("v-layout",{attrs:{row:"","align-center":""}},[n("v-flex",{attrs:{xs1:""}},[n("v-checkbox",{staticClass:"ma-0",attrs:{"input-value":t.value.done,"hide-details":""},on:{change:t.onDoneChanged}})],1),n("v-flex",{attrs:{xs10:""}},[t.isEditing?n("v-text-field",{attrs:{value:t.value.title,autofocus:!0},on:{change:t.onTitleChanged,blur:function(e){t.isEditing=!1}}}):n("h3",{on:{click:function(e){t.isEditing=!0}}},[t.value.done?[n("del",[t._v(t._s(t.value.title))])]:[t._v("\n            "+t._s(t.value.title)+"\n          ")]],2)],1),n("v-flex",{attrs:{xs1:""}},[n("v-btn",{attrs:{flat:"",icon:""},on:{click:function(e){t.$todoRepository.remove(t.value)}}},[n("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1)],1)},w=[],j=n("65d9"),x=n.n(j),T=n("60a3"),S=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isEditing=!1,e}return u["d"](e,t),e.prototype.onTitleChanged=function(t){this.$emit("input",u["a"]({},this.value,{title:t})),this.isEditing=!1},e.prototype.onDoneChanged=function(t){this.$emit("input",u["a"]({},this.value,{done:t}))},u["c"]([Object(T["a"])()],e.prototype,"value",void 0),e=u["c"]([x.a],e),e}(o["default"]),O=S,k=O,P=n("2877"),C=n("6544"),E=n.n(C),$=n("83366"),V=n("b0af"),N=n("99d9"),R=n("ac7c"),A=n("0e8f"),I=n("132d"),M=n("a722"),L=n("2677"),B=Object(P["a"])(k,_,w,!1,null,null,null);B.options.__file="Todo.vue";var D=B.exports;E()(B,{VBtn:$["a"],VCard:V["a"],VCardText:N["a"],VCheckbox:R["a"],VFlex:A["a"],VIcon:I["a"],VLayout:M["a"],VTextField:L["a"]});var F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{on:{click:function(e){t.$todoRepository.clear()}}},[t._v("Clear")]),t._l(t.$todoRepository.todos,function(e){return n("todo",{key:e.id,staticClass:"mb-2",attrs:{value:e},on:{input:function(e){t.$todoRepository.update(e)}}})})],2)},J=[],q=n("3172"),z=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u["d"](e,t),e=u["c"]([q["a"],x.a],e),e}(o["default"]),G=z,H=G,K=Object(P["a"])(H,F,J,!1,null,null,null);K.options.__file="TodoList.vue";var Q=K.exports;E()(K,{VBtn:$["a"]});var U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-text-field",{attrs:{placeholder:"Add new todo",solo:""},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null}},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})},W=[],X=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.title="",e}return u["d"](e,t),e.prototype.addTodo=function(){this.$todoRepository.add(this.title),this.title=""},e=u["c"]([x.a],e),e}(o["default"]),Y=X,Z=Y,tt=Object(P["a"])(Z,U,W,!1,null,null,null);tt.options.__file="TodoInput.vue";var et=tt.exports;E()(tt,{VTextField:L["a"]}),o["default"].component("Todo",D),o["default"].component("TodoList",Q),o["default"].component("TodoInput",et);var nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",[n("router-view")],1)],1)},ot=[],rt=n("7496"),it=n("549c"),ut={},at=Object(P["a"])(ut,nt,ot,!1,null,null,null);at.options.__file="App.vue";var st=at.exports;E()(at,{VApp:rt["a"],VContent:it["a"]});var ct=n("8c4f");o["default"].use(ct["a"]);var lt=new ct["a"]({routes:[{name:"home",path:"/",component:function(){return n.e("chunk-2d0f0c3d").then(n.bind(null,"9e83"))}}]}),dt=lt;o["default"].config.productionTip=!1,new o["default"]({render:function(t){return t(st)},router:dt}).$mount("#app")}});
//# sourceMappingURL=app.38bd0c83.js.map
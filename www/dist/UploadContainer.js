webpackJsonp([4],[function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},u=n(1),i=n(12),a=n(14),c=n(13),s=n(3),l=n(6),f=n(9),p=f.BaseStore({}),d={name:"file",action:"http://text.com/uploadApi.php",headers:{authorization:"authorization-text"},onChange:function(t){"uploading"!==t.file.status&&console.log(t.file,t.fileList),"done"===t.file.status?alert(t.file.name+" 上传成功。"):"error"===t.file.status&&alert(t.file.name+" 上传失败。")}},h=function(t){function e(e){t.call(this,e)}return r(e,t),e.prototype.render=function(){return u.createElement(c.AppBody,null,u.createElement(c.Panel,{title:"文件上传"},u.createElement(c.Upload,o({},d),u.createElement(c.Buttons,null,u.createElement(c.Icon,{type:"cloudupload"}),"点击上传文件"))))},e.prototype.componentDidMount=function(){var t=this.props,e=(t.MenuReducers,t.dispatch);e(s.changeActiveAction())},e.prototype.componentWillUnmount=function(){},e}(l["default"]),m=function(t){return{IndexReducers:t.IndexReducers}},y=a.connect(m)(h),v=document.getElementById("example");i.render(u.createElement(a.Provider,{store:p},u.createElement(y,null)),v)},,,,,function(t,e){"use strict";function n(t){return function(e){var n=e.dispatch,r=e.getState;return function(e){return function(o){return"function"==typeof o?o(n,r,t):e(o)}}}}e.__esModule=!0;var r=n();r.withExtraArgument=n,e["default"]=r},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(1),u=n(2),i=n(15),a=function(t){function e(e){t.call(this,e);var n=i["default"].get("cw_auth");n||(alert("请求超时,请重新登录"),u["default"].goPush("Login"))}return r(e,t),e.prototype.componentDidMount=function(){},e.prototype.componentWillUnmount=function(){},e}(o.Component);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=a},function(t,e,n){"use strict";function r(t,e){switch(void 0===t&&(t=i),e.type){case o.GET_AUTH:return u["default"].assign({},t,e.state);default:return t}}var o=n(18),u=n(2),i={LOGIN_ID:""};Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r},function(t,e,n){"use strict";function r(t,e){switch(void 0===t&&(t=i),e.type){case o.BASE_MENU:return u["default"].assign({},t,e.state);case o.SWITCH_MENU:return u["default"].assign({},t,{menuSwitch:e.menuSwitch});case o.CHANGE_ACTIVE:return u["default"].assign({},t,{active:e.active});default:return t}}var o=n(3),u=n(2),i={active:{parent:-1,child:-1},menuSwitch:!0,menuList:[]};Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r},function(t,e,n){"use strict";function r(t){if(o)return o;var e=a["default"].assign(t,{HeaderReducer:c["default"],MenuReducers:s["default"]}),n=u.combineReducers(e);return o=u.createStore(n,u.applyMiddleware(i["default"]))}var o,u=n(17),i=n(5),a=n(2),c=n(7),s=n(8);e.BaseStore=r}]);
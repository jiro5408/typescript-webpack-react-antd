webpackJsonp([10],[function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},u=n(1),o=n(12),c=n(14),i=n(3),a=n(6),s=n(9),f=s.BaseStore({}),l=function(t){function e(e){t.call(this,e),this.state={text:"hello,word"}}return r(e,t),e.prototype.render=function(){return u.createElement(AppBody,null)},e.prototype.componentDidMount=function(){var t=this.props,e=(t.MenuReducers,t.dispatch);e(i.changeActiveAction())},e.prototype.componentWillUnmount=function(){},e}(a["default"]),d=function(t){return{MenuReducers:t.MenuReducers}},p=c.connect(d)(l),h=document.getElementById("example");o.render(u.createElement(c.Provider,{store:f},u.createElement(p,null)),h)},,,,,function(t,e){"use strict";function n(t){return function(e){var n=e.dispatch,r=e.getState;return function(e){return function(u){return"function"==typeof u?u(n,r,t):e(u)}}}}e.__esModule=!0;var r=n();r.withExtraArgument=n,e["default"]=r},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},u=n(1),o=n(2),c=n(15),i=function(t){function e(e){t.call(this,e);var n=c["default"].get("cw_auth");n||(alert("请求超时,请重新登录"),o["default"].goPush("Login"))}return r(e,t),e.prototype.componentDidMount=function(){},e.prototype.componentWillUnmount=function(){},e}(u.Component);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i},function(t,e,n){"use strict";function r(t,e){switch(void 0===t&&(t=c),e.type){case u.GET_AUTH:return o["default"].assign({},t,e.state);default:return t}}var u=n(18),o=n(2),c={LOGIN_ID:""};Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r},function(t,e,n){"use strict";function r(t,e){switch(void 0===t&&(t=c),e.type){case u.BASE_MENU:return o["default"].assign({},t,e.state);case u.SWITCH_MENU:return o["default"].assign({},t,{menuSwitch:e.menuSwitch});case u.CHANGE_ACTIVE:return o["default"].assign({},t,{active:e.active});default:return t}}var u=n(3),o=n(2),c={active:{parent:-1,child:-1},menuSwitch:!0,menuList:[]};Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r},function(t,e,n){"use strict";function r(t){if(u)return u;var e=i["default"].assign(t,{HeaderReducer:a["default"],MenuReducers:s["default"]}),n=o.combineReducers(e);return u=o.createStore(n,o.applyMiddleware(c["default"]))}var u,o=n(17),c=n(5),i=n(2),a=n(7),s=n(8);e.BaseStore=r}]);
webpackJsonp([8],[function(e,t,n){"use strict";var o=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},r=n(1),u=n(12),a=n(14),c=n(13),i=n(3),s=n(6),l=n(9),p=l.BaseStore({}),f=function(e){function t(t){e.call(this,t)}return o(t,e),t.prototype.handleButton=function(){var e=this.props;e.MenuReducers,e.dispatch},t.prototype.onChange=function(e){console.log("我是当前"+e)},t.prototype.render=function(){return r.createElement(c.AppBody,null,r.createElement(c.Row,null,r.createElement(c.Col,{span:"50"},r.createElement(c.Panel,{title:"分页面板-简单分页"},r.createElement(c.Pagination,{onChange:this.onChange,total:50}))),r.createElement(c.Col,{span:"50"},r.createElement(c.Panel,{title:"分页面板2-更多分页"},r.createElement(c.Pagination,{onChange:this.onChange}))),r.createElement(c.Col,{span:"50"},r.createElement(c.Panel,{title:"分页面板2-带输入的分页"},r.createElement(c.Pagination,{showQuickJumper:!0,onChange:this.onChange})))))},t.prototype.componentDidMount=function(){var e=this.props,t=(e.MenuReducers,e.dispatch);t(i.changeActiveAction())},t.prototype.componentWillUnmount=function(){},t}(s["default"]),d=function(e){return{MenuReducers:e.MenuReducers}},h=a.connect(d)(f),m=document.getElementById("example");u.render(r.createElement(a.Provider,{store:p},r.createElement(h,null)),m)},,,,,function(e,t){"use strict";function n(e){return function(t){var n=t.dispatch,o=t.getState;return function(t){return function(r){return"function"==typeof r?r(n,o,e):t(r)}}}}t.__esModule=!0;var o=n();o.withExtraArgument=n,t["default"]=o},function(e,t,n){"use strict";var o=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},r=n(1),u=n(2),a=n(15),c=function(e){function t(t){e.call(this,t);var n=a["default"].get("cw_auth");n||(alert("请求超时,请重新登录"),u["default"].goPush("Login"))}return o(t,e),t.prototype.componentDidMount=function(){},t.prototype.componentWillUnmount=function(){},t}(r.Component);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=c},function(e,t,n){"use strict";function o(e,t){switch(void 0===e&&(e=a),t.type){case r.GET_AUTH:return u["default"].assign({},e,t.state);default:return e}}var r=n(18),u=n(2),a={LOGIN_ID:""};Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o},function(e,t,n){"use strict";function o(e,t){switch(void 0===e&&(e=a),t.type){case r.BASE_MENU:return u["default"].assign({},e,t.state);case r.SWITCH_MENU:return u["default"].assign({},e,{menuSwitch:t.menuSwitch});case r.CHANGE_ACTIVE:return u["default"].assign({},e,{active:t.active});default:return e}}var r=n(3),u=n(2),a={active:{parent:-1,child:-1},menuSwitch:!0,menuList:[]};Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o},function(e,t,n){"use strict";function o(e){if(r)return r;var t=c["default"].assign(e,{HeaderReducer:i["default"],MenuReducers:s["default"]}),n=u.combineReducers(t);return r=u.createStore(n,u.applyMiddleware(a["default"]))}var r,u=n(17),a=n(5),c=n(2),i=n(7),s=n(8);t.BaseStore=o}]);
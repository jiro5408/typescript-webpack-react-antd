webpackJsonp([15],[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},c=n(1),a=n(12),o=n(14),u=n(13),i=n(3),s=n(6),l=n(9),d=l.BaseStore({}),p=function(e){function t(t){e.call(this,t)}return r(t,e),t.prototype.render=function(){return c.createElement(u.AppBody,null,c.createElement(u.Panel,{title:"卡片"},c.createElement(u.Row,null,c.createElement(u.Col,{span:"33"},c.createElement("div",{className:"cwgj-grid"},c.createElement("div",{className:"cwgj-grid-img"},c.createElement("a",{href:"#"},c.createElement("img",{src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}))),c.createElement("div",{className:"cwgj-grid-group"},c.createElement("div",{className:"cwgj-grid-title cwgj-nowrap"},"标题"),c.createElement("div",{className:"cwgj-grid-date cwgj-nowrap cwgj-text-muted"},"啊发顺丰"),c.createElement("div",{className:"cwgj-grid-info"},"展示: ",c.createElement("span",{className:"cwgj-text-danger"},"3"),"次, 点击: ",c.createElement("span",{className:"cwgj-text-danger"},"2"),"次"),c.createElement("div",{className:"cwgj-grid-button"},c.createElement(u.Buttons,null,"按钮"))))))))},t.prototype.componentDidMount=function(){var e=this.props,t=(e.MenuReducers,e.dispatch);t(i.changeActiveAction())},t.prototype.componentWillUnmount=function(){},t}(s["default"]),f=function(e){return{MenuReducers:e.MenuReducers}},m=o.connect(f)(p),g=document.getElementById("example");a.render(c.createElement(o.Provider,{store:d},c.createElement(m,null)),g)},,,,,function(e,t){"use strict";function n(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(c){return"function"==typeof c?c(n,r,e):t(c)}}}}t.__esModule=!0;var r=n();r.withExtraArgument=n,t["default"]=r},function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},c=n(1),a=n(2),o=n(15),u=function(e){function t(t){e.call(this,t);var n=o["default"].get("cw_auth");n||(alert("请求超时,请重新登录"),a["default"].goPush("Login"))}return r(t,e),t.prototype.componentDidMount=function(){},t.prototype.componentWillUnmount=function(){},t}(c.Component);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u},function(e,t,n){"use strict";function r(e,t){switch(void 0===e&&(e=o),t.type){case c.GET_AUTH:return a["default"].assign({},e,t.state);default:return e}}var c=n(18),a=n(2),o={LOGIN_ID:""};Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},function(e,t,n){"use strict";function r(e,t){switch(void 0===e&&(e=o),t.type){case c.BASE_MENU:return a["default"].assign({},e,t.state);case c.SWITCH_MENU:return a["default"].assign({},e,{menuSwitch:t.menuSwitch});case c.CHANGE_ACTIVE:return a["default"].assign({},e,{active:t.active});default:return e}}var c=n(3),a=n(2),o={active:{parent:-1,child:-1},menuSwitch:!0,menuList:[]};Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},function(e,t,n){"use strict";function r(e){if(c)return c;var t=u["default"].assign(e,{HeaderReducer:i["default"],MenuReducers:s["default"]}),n=a.combineReducers(t);return c=a.createStore(n,a.applyMiddleware(o["default"]))}var c,a=n(17),o=n(5),u=n(2),i=n(7),s=n(8);t.BaseStore=r}]);
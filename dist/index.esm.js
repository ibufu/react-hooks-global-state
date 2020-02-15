import{useReducer as n,useEffect as t,useRef as r,useState as e,useCallback as o}from"react";function u(){return(u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n}).apply(this,arguments)}var i=function(n,t){if(!n.includes(t))throw new Error("'"+t+"' not found. It must be provided in initialState as a property key.")},c="production"!==process.env.NODE_ENV?Symbol("UPDATE_STATE"):Symbol(),a=function(a,f){var l=Object.keys(f),s=f,p=null,v={};l.forEach(function(n){v[n]=new Set});var d=function(n,t){return t.type===c?t.r?t.r(n):t.e:a(n,t)},E=function(n,t){"production"!==process.env.NODE_ENV&&i(l,n);var r=function(r){var e,o;return u({},r,((e={})[n]="function"==typeof(o=t)?o(r[n]):o,e))};if(p){var e;p(((e={type:c}).r=r,e))}else{var o=(s=r(s))[n];v[n].forEach(function(n){return n(o)})}},S=function(n,t){l.forEach(function(r){var e=t[r];n[r]!==e&&v[r].forEach(function(n){return n(e)})})};return{useGlobalStateProvider:function(){var e=n(d,s),o=e[0],u=e[1];t(function(){var n;if(p)throw new Error("Only one global state provider is allowed");return p=u,u(((n={type:c}).e=s,n)),function(){p=null}},[]);var i=r(o);S(i.current,o),i.current=o,t(function(){s=o},[o])},useGlobalState:function(n){"production"!==process.env.NODE_ENV&&i(l,n);var r=e(s[n]),u=r[0],c=r[1];return t(function(){return v[n].add(c),c(s[n]),function(){v[n].delete(c)}},[n]),[u,o(function(t){return E(n,t)},[n])]},getGlobalState:function(n){return"production"!==process.env.NODE_ENV&&i(l,n),s[n]},setGlobalState:E,getState:function(){return s},setState:function(n){var t;p?p(((t={type:c}).e=n,t)):S(s,s=n)},dispatch:function(n){if(p)p(n);else{var t=s;s=a(s,n),S(t,s)}return n}}},f=function(n){return a(function(n,t){return n},n)},l=function n(t,r,e){return void 0===r&&(r=t(void 0,{type:void 0})),e?e(n)(t,r):a(t,r)},s=function(){return window.__REDUX_DEVTOOLS_EXTENSION__?function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return t.reduce(function(n,t){return function(){return n(t.apply(void 0,arguments))}})}(function(r){return function(e,o,i){if(n=e,t=o,i)return i(r)(e,o);var c=r(e,o);return u({},c,{useGlobalState:function(n){return[c.useGlobalState(n)[0],function(){throw new Error("Update is not allowed when using DevTools")}]}})}},window.__REDUX_DEVTOOLS_EXTENSION__(),function(r){return function(e,o,i){if(i)return i(r)(e,o);var c=r(n,t),a=u({},e(o,{type:"@@redux/INIT"}),{},t),f=[];return u({},c,{getState:function(){return a},dispatch:function(n){return a=e(a,n),c.setState(a.computedStates[a.currentStateIndex].state),f.forEach(function(n){return n()}),n},subscribe:function(n){return f.push(n),function(){var t=f.indexOf(n);f.splice(t,1)}}})}}):function(n){return n};var n,t};export{f as createGlobalState,l as createStore,s as reduxDevToolsExt};
//# sourceMappingURL=index.esm.js.map
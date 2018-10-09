!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.ERedux=n():t.ERedux=n()}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=6)}([function(t,n,e){"use strict";var r=function(){return Math.random().toString(36).substring(7).split("").join(".")},o={INIT:"@@redux/INIT".concat(r()),REPLACE:"@@redux/REPLACE".concat(r()),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION".concat(r())}};n.a=o},function(t,n,e){"use strict";function r(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return 0===n.length?function(t){return t}:1===n.length?n[0]:n.reduce(function(t,n){return function(){return t(n.apply(void 0,arguments))}})}e.d(n,"a",function(){return r})},function(t,n,e){"use strict";e.d(n,"a",function(){return o});var r=e(0);function o(t){var n,e={};Object.keys(t).filter(function(n){return"function"==typeof t[n]}).forEach(function(n){e[n]=t[n]});try{!function(t){Object.keys(t).forEach(function(n){if(void 0===t[n](void 0,r.a.INIT))throw Error("reducer ".concat(n," return undefined during initialization, the initial state may not be undefined"));if(void 0===t[n](void 0,r.a.PROBE_UNKNOWN_ACTION()))throw Error("reducer ".concat(n," return undefined when probe with a random type, the initial state may not be undefined"))})}(e)}catch(t){n=t}var o=Object.keys(e);return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;if(n)throw n;var i=!1,u={};return o.forEach(function(n){var o=t[n],c=(0,e[n])(o,r);u[n]=c,i=i||c!==o}),i?u:t}}},function(t,n,e){"use strict";e.d(n,"a",function(){return u});var r=e(1);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return function(t){return function(){var e=t.apply(void 0,arguments),u=function(){throw Error("dispatching while constructing your middleware is not allowed")},c={getState:e.getState,dispatch:u},f=n.map(function(t){return t(c)});return function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){o(t,n,e[n])})}return t}({},e,{dispatch:u=r.a.apply(void 0,i(f))(e.dispatch)})}}}},function(t,n,e){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){var e=this,r=arguments;return function(){return n(t.bind(e,r))}}function i(t,n){if("function"==typeof t)return o(t,n);if("object"!==r(t)||null===t)throw Error("actionCreators should be a function");var e={};return Object.keys(t).forEach(function(r){var i=t[r];"function"==typeof i&&(e[r]=o(i,n))}),e}e.d(n,"a",function(){return i})},function(t,n,e){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=e(0);n.a=function t(n,e,i){if("function"==typeof e&&void 0===i&&(i=e,e=void 0),void 0!==i){if("function"!=typeof i)throw Error("enhancer should be a function");return i(t)(n,e)}if("function"!=typeof n)throw Error("reducer should be a function");var u=n,c=e,f=[],a=f=[],l=!1;function d(t){if(!function(t){if("object"!==r(t)||null==t)return!1;for(var n=t;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(t)===n}(t))throw Error("action should be an object");if(void 0===t.type)throw Error("action type can't be undefined");if(l)throw Error("dispatch may not execute");try{l=!0,c=u(c,t)}finally{l=!1}(f=a).forEach(function(t){return t()})}return d({type:o.a.INIT}),{dispatch:d,getState:function(){if(l)throw Error("can't call getState when dispatching");return c},subscribe:function(t){if("function"!=typeof t)throw Error("listener should be a function");f.push(t);var n=!0;return function(){if(n){if(l)throw Error("can't unsubscribe listener while dispatching");n=!1,f===a&&(a=f.slice());var e=a.indexOf(t);a.splice(e,1)}}}}}},function(t,n,e){"use strict";e.r(n),function(t){var n=e(5),r=e(2),o=e(3),i=e(4),u=e(1),c=e(0);t.exports={createStore:n.a,applyMiddleware:o.a,combineReducers:r.a,bindActionCreators:i.a,compose:u.a,__DO_NOT_USE__ActionTypes:c.a}}.call(this,e(7)(t))},function(t,n){t.exports=function(t){if(!t.webpackPolyfill){var n=Object.create(t);n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),Object.defineProperty(n,"exports",{enumerable:!0}),n.webpackPolyfill=1}return n}}])});
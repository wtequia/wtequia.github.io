_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{HMs9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n("q1tI"),a=c(r),i=c(n("17x9")),l=n("Seim"),u=c(n("tvXG")),s=c(n("PTkm")),d=c(n("uUxy"));function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var m=0,h=0,b=0,y=0,g="data-lazyload-listened",w=[],S=[],_=!1;try{var E=Object.defineProperty({},"passive",{get:function(){_=!0}});window.addEventListener("test",null,E)}catch(z){}var N=!!_&&{capture:!1,passive:!0},O=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,u.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,o=void 0,r=void 0,a=void 0,i=void 0;try{var l=t.getBoundingClientRect();o=l.top,r=l.left,a=l.height,i=l.width}catch(z){o=m,r=h,a=y,i=b}var u=window.innerHeight||document.documentElement.clientHeight,s=window.innerWidth||document.documentElement.clientWidth,d=Math.max(o,0),c=Math.max(r,0),f=Math.min(u,o+a)-d,p=Math.min(s,r+i)-c,v=void 0,g=void 0,w=void 0,S=void 0;try{var _=n.getBoundingClientRect();v=_.top,g=_.left,w=_.height,S=_.width}catch(z){v=m,g=h,w=y,S=b}var E=v-d,N=g-c,O=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return E-O[0]<=f&&E+w+O[1]>=0&&N-O[0]<=p&&N+S+O[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var r=t.getBoundingClientRect();n=r.top,o=r.height}catch(z){n=m,o=y}var a=window.innerHeight||document.documentElement.clientHeight,i=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-i[0]<=a&&n+o+i[1]>=0}(e))?e.visible||(e.props.once&&S.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},x=function(){S.forEach((function(e){var t=w.indexOf(e);-1!==t&&w.splice(t,1)})),S=[]},P=function(){for(var e=0;e<w.length;++e){var t=w[e];O(t)}x()},T=void 0,k=null,M=function(e){function t(e){f(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return v(t,e),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===T||"debounce"===T&&void 0===this.props.debounce;if(n&&((0,l.off)(e,"scroll",k,N),(0,l.off)(window,"resize",k,N),k=null),k||(void 0!==this.props.debounce?(k=(0,s.default)(P,"number"===typeof this.props.debounce?this.props.debounce:300),T="debounce"):void 0!==this.props.throttle?(k=(0,d.default)(P,"number"===typeof this.props.throttle?this.props.throttle:300),T="throttle"):k=P),this.props.overflow){var o=(0,u.default)(this.ref);if(o&&"function"===typeof o.getAttribute){var r=+o.getAttribute(g)+1;1===r&&o.addEventListener("scroll",k,N),o.setAttribute(g,r)}}else if(0===w.length||n){var a=this.props,i=a.scroll,c=a.resize;i&&(0,l.on)(e,"scroll",k,N),c&&(0,l.on)(window,"resize",k,N)}w.push(this),O(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,u.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(g)-1;0===t?(e.removeEventListener("scroll",k,N),e.removeAttribute(g)):e.setAttribute(g,t)}}var n=w.indexOf(this);-1!==n&&w.splice(n,1),0===w.length&&"undefined"!==typeof window&&((0,l.off)(window,"resize",k,N),(0,l.off)(window,"scroll",k,N))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,o=e.placeholder,r=e.classNamePrefix;return a.default.createElement("div",{className:r+"-wrapper",ref:this.setRef},this.visible?n:o||a.default.createElement("div",{style:{height:t},className:r+"-placeholder"}))}}]),t}(r.Component);M.propTypes={classNamePrefix:i.default.string,once:i.default.bool,height:i.default.oneOfType([i.default.number,i.default.string]),offset:i.default.oneOfType([i.default.number,i.default.arrayOf(i.default.number)]),overflow:i.default.bool,resize:i.default.bool,scroll:i.default.bool,children:i.default.node,throttle:i.default.oneOfType([i.default.number,i.default.bool]),debounce:i.default.oneOfType([i.default.number,i.default.bool]),placeholder:i.default.node,scrollContainer:i.default.oneOfType([i.default.string,i.default.object]),unmountIfInvisible:i.default.bool},M.defaultProps={classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var j=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function r(){f(this,r);var e=p(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.displayName="LazyLoad"+j(t),e}return v(r,n),o(r,[{key:"render",value:function(){return a.default.createElement(M,e,a.default.createElement(t,this.props))}}]),r}(r.Component)}},t.default=M,t.forceCheck=P,t.forceVisible=function(){for(var e=0;e<w.length;++e){var t=w[e];t.visible=!0,t.forceUpdate()}x()}},PTkm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,r=void 0,a=void 0,i=void 0,l=void 0,u=function u(){var s=+new Date-i;s<t&&s>=0?o=setTimeout(u,t-s):(o=null,n||(l=e.apply(a,r),o||(a=null,r=null)))};return function(){a=this,r=arguments,i=+new Date;var s=n&&!o;return o||(o=setTimeout(u,t)),s&&(l=e.apply(a,r),a=null,r=null),l}}},Seim:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},"X/Te":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/digital/formatos-estandar/banner300x600",function(){return n("xB4p")}])},tvXG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(o),a=r.position,i=r.overflow,l=r["overflow-x"],u=r["overflow-y"];if("static"===a&&t)o=o.parentNode;else{if(n.test(i)&&n.test(l)&&n.test(u))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},uUxy:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,r;return t||(t=250),function(){var a=n||this,i=+new Date,l=arguments;o&&i<o+t?(clearTimeout(r),r=setTimeout((function(){o=i,e.apply(a,l)}),t)):(o=i,e.apply(a,l))}}},xB4p:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),a=n("7vrA"),i=n("3Z9Z"),l=n("JI6e"),u=n("nz3k"),s=n("HMs9"),d=n.n(s),c=r.a.createElement;t.default=function(){return c(u.a,null,c("section",{className:"Standard"},c(a.a,null,c(i.a,null,c(l.a,{md:4},c("h1",{className:"Standard-titleSelect"},"Banner 300x600"),c("div",{className:"Standard-descriptionSelect"},c("span",null,"Desktop")),c("div",null,c("div",null),c("div",{className:"Standard-descriptionSelect"},c("span",null,"Tama\xf1o: ")," 300 x 600 ",c("br",null),c("span",null,"Peso Max: ")," 80 KB ",c("br",null),c("span",null,"Formatos: ")," JPEG, PNG o Gif ",c("br",null)))),c(l.a,{md:8},c("div",{className:"Standard-imageSectionSelect Standard-imageSectionSelect_noBackground"},c(d.a,{height:400},c("img",{className:"Standard-imageSelect Standard-imageSelect_full",src:"/images/digital/formatos-estandar/apertura_Banner-300x600.png"}))))),c(i.a,null,c(l.a,null,c("div",{className:"Standard-textSectionSelect"}," ",c("div",{className:"Standard-filter"},c("nav",null,c("ul",{className:"Standard-navigation"},c("li",null,c("a",{className:"Standard-link Standard-link_active"},"Desktop"))))),c("div",{className:"Standard-previsualizationTextSelect"},"previsualizaci\xf3n y \xe1reas seguras")))),c(i.a,null,c(l.a,null,c("div",{className:"Standard-textSectionSelect"},c("div",null,"*Ejemplos tomados de campa\xf1as implementadas en el portal"),c("div",{className:"Standard-imageSectionSelect Standard-imageSectionSelect_full"},c(d.a,{height:600},c("img",{className:"Standard-imageSelect Standard-imageSelect_full",src:"/images/digital/formatos-estandar/apertura_Banner-300x600.png"})))))))))}}},[["X/Te",1,0,2]]]);
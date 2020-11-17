/*! For license information please see component---src-pages-index-js-ecc6a512416c12cc7d1e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7W2i":function(e,t,a){var n=a("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Fxm3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){var t,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var l=+new Date;!!t&&l<t+n?(clearTimeout(a),a=setTimeout((function(){t=l,e()}),n)):(t=l,e())}};t.default=n},Ijbi:function(e,t,a){var n=a("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},Nsbk:function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(t)}e.exports=a},RIqP:function(e,t,a){var n=a("Ijbi"),l=a("EbDI"),o=a("ZhPi"),r=a("Bnag");e.exports=function(e){return n(e)||l(e)||o(e)||r()}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),o=a("7oih");function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var i=a("dI71"),s=a("YIkO"),c=a.n(s),m=a("dwco"),u=a.n(m),f=function(e){return e.children},p=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(r(t)),t}Object(i.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){u.a.polyfill()},a.handleClick=function(e){e.preventDefault();var t=0,a=!0,n=this.props,l=n.type,o=n.element,r=n.offset,i=n.timeout;if(l&&o)switch(l){case"class":a=!!(t=document.getElementsByClassName(o)[0]);break;case"id":a=!!(t=document.getElementById(o))}a?this.scrollTo(t,r,i):console.log("Element not found: "+o)},a.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout((function(){window.scroll({top:n+t,left:0,behavior:"smooth"})}),a):window.scroll({top:n+t,left:0,behavior:"smooth"})},a.render=function(){return l.a.createElement(f,null,"object"==typeof this.props.children?l.a.cloneElement(this.props.children,{onClick:this.handleClick}):l.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(l.a.Component),d=a("TUGy"),h=a.n(d),v=a("obyI"),g=a.n(v),b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={tabs:[{content:"About",href:"about"},{content:"Skills",href:"skills"},{content:"Projects",href:"projects"},{content:"Education",href:"education"},{content:"Experience",href:"experience"},{content:"Interests",href:"interests"}],isCollapsed:!0},a.toggleNavbar=a.toggleNavbar.bind(r(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.toggleNavbar=function(){this.setState({isCollapsed:!this.state.isCollapsed})},a.render=function(){var e=this.state,t=e.tabs,a=e.isCollapsed;return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},l.a.createElement("a",{className:"navbar-brand",href:"#page-top"},l.a.createElement("span",{className:"d-block d-lg-none"},g.a.firstName," ",g.a.lastName),l.a.createElement("span",{className:"d-none d-lg-block"},l.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:h.a,alt:""}))),l.a.createElement("button",{className:"navbar-toggler navbar-toggler-right "+(a?"collapsed":""),type:"button","data-toggle":"collapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:this.toggleNavbar},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse "+(a?"":"show"),id:"navbarSupportedContent"},l.a.createElement(c.a,{items:t.map((function(e){return e.href})),currentClassName:"active",offset:-300,className:"navbar-nav"},t.map((function(e,t){var a=e.href,n=e.content;return l.a.createElement("li",{className:"nav-item",key:a},l.a.createElement(p,{type:"id",element:a},l.a.createElement("a",{className:"nav-link",href:"#"+a},n)))})))))},t}(n.Component);t.default=function(){return l.a.createElement(o.a,null,l.a.createElement(b,null),l.a.createElement("div",{className:"container-fluid p-0"},l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h1",{className:"mb-0"},g.a.firstName," "," ",l.a.createElement("span",{className:"text-primary"},g.a.lastName)),l.a.createElement("div",{className:"subheading mb-5"},g.a.address," · ",g.a.phone," ·",l.a.createElement("a",{href:"mailto:"+g.a.email},g.a.email)),l.a.createElement("p",{className:"lead mb-5"},"Full Stack web developer with 9+ years of experience as a purchasing manager in the retail lumber industry. Optimizing and streamlining operations to achieve high levels of efficiency and effective resource allocation share many parallels to software design and implementation. I’m excited to utilize these skills in my career as a developer."),l.a.createElement("div",{className:"social-icons"},g.a.socialLinks.map((function(e){var t=e.icon,a=e.url;return l.a.createElement("a",{key:a,href:a},l.a.createElement("i",{className:"fab "+t}))}))))),l.a.createElement("hr",{className:"m-0"}),l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Skills"),l.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),l.a.createElement("ul",{className:"list-inline dev-icons"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-html5"}),"HTML5"),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-css3-alt"}),"CSS"),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-js-square"}),"Javascript"),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-react"}),"React"),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-node-js"}),"NodeJS"),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-sass"}),"SASS"),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-npm"}),"NPM"),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-java"}),"JAVA")),l.a.createElement("div",{className:"subheading mb-3"},"Frameworks"),l.a.createElement("ul",{className:"fa-ul mb-0"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"React JS"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Node JS"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Express JS"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Ruby On Rails"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Bootstrap"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"JQuery")))),l.a.createElement("hr",{className:"m-0"}),l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Experience"),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Head Purchaser"),l.a.createElement("div",{className:"subheading mb-3"},"Sen Western Wholesale Lumber Ltd."),l.a.createElement("ul",null,l.a.createElement("li",null,"Managed inventory of over 1000 SKUs, planning for just in time inventory to acheieve cost and space efficiencies"),l.a.createElement("li",null,"Negotiated and sourced special order products from various suppliers as requested to meet and exceed customer/business expectations"),l.a.createElement("li",null,"Organized and supervised a team for year-end inventory to ensure accurate account of all SKUs, reporting inconsistencies for investigation"),l.a.createElement("li",null,"Served as company's main point of contact for reolution of all IT related issues"),l.a.createElement("li",null,"Liaised with customers and sales team to identify delivery demands well in advance to ensure timely delivery of products"),l.a.createElement("li",null,"Mainted involvement in various  aspects of business including shipping, receiving, inside sales, forklift operations and warehousing to ensure optimal operations through peak times"))),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"October 2010 - July 2020"))))),l.a.createElement("hr",{className:"m-0"}),l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Education"),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Lighthouse Labs"),l.a.createElement("div",{className:"subheading mb-3"},"Diploma of Web Development"),l.a.createElement("div",null,"Web Development Bootcamp")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"August 2020 - November 2020"))),l.a.createElement("hr",{className:"m-0"}),l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Interests"),l.a.createElement("p",null,"Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking."),l.a.createElement("p",{className:"mb-0"},"When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world."))),l.a.createElement("hr",{className:"m-0"})))))}},SksO:function(e,t){function a(t,n){return e.exports=a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(t,n)}e.exports=a},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var r=l.apply(null,n);r&&e.push(r)}else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},TUGy:function(e,t,a){e.exports=a.p+"static/avatar-ff8ca4ac94e7eace3009849f8b1b960d.png"},W8MJ:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}},YIkO:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("pVnL")),o=n(a("lSNA")),r=n(a("RIqP")),i=n(a("lwsE")),s=n(a("a1gu")),c=n(a("Nsbk")),m=n(a("PJYZ")),u=n(a("W8MJ")),f=n(a("7W2i")),p=n(a("17x9")),d=n(a("q1tI")),h=n(a("TSYQ")),v=n(a("Fxm3"));var g=function(e){function t(e){var a;return(0,i.default)(this,t),(a=(0,s.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},a._handleSpy=a._handleSpy.bind((0,m.default)(a)),a}return(0,f.default)(t,e),(0,u.default)(t,null,[{key:"propTypes",get:function(){return{items:p.default.arrayOf(p.default.string).isRequired,currentClassName:p.default.string.isRequired,scrolledPastClassName:p.default.string,style:p.default.object,componentTag:p.default.oneOfType([p.default.string,p.default.elementType]),offset:p.default.number,rootEl:p.default.string,onUpdate:p.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,u.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var a=[],n=0,l=e.length;n<l;n++)a[n]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],n=[],l=e||this.state.targetItems,o=!1,i=0,s=l.length;i<s;i++){var c=l[i],m=!o&&this._isInView(c);m?(o=!0,t.push(c)):a.push(c);var u=i===s-1,f=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!m&&u&&f&&(a.pop(),a.push.apply(a,(0,r.default)(t)),t=[c],n=this._fillArray(n,!1),m=!0),n.push(m)}return{inView:t,outView:a,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,a=this.props,n=a.rootEl,l=a.offset;n&&(t=document.querySelector(n).getBoundingClientRect());var o=e.getBoundingClientRect(),r=n?t.height:window.innerHeight,i=this._getScrollDimension().scrollTop,s=i+r,c=n?o.top+i-t.top+l:o.top+i+l,m=c+e.offsetHeight;return c<s&&m>i}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,n=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),n=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},(function(){t._update(n)}))}},{key:"_update",value:function(e){var t,a;(t=this.state.inViewState,a=e,t.length===a.length&&t.every((function(e,t){return e===a[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,v.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,a=this.props,n=a.children,r=a.className,i=a.scrolledPastClassName,s=a.style,c=0,m=d.default.Children.map(n,(function(t,a){var n;if(!t)return null;var r=t.type,s=i&&e.state.isScrolledPast[a],m=(0,h.default)((n={},(0,o.default)(n,"".concat(t.props.className),t.props.className),(0,o.default)(n,"".concat(e.props.currentClassName),e.state.inViewState[a]),(0,o.default)(n,"".concat(e.props.scrolledPastClassName),s),n));return d.default.createElement(r,(0,l.default)({},t.props,{className:m,key:c++}),t.props.children)})),u=(0,h.default)((0,o.default)({},"".concat(r),r));return d.default.createElement(t,{className:u,style:s},m)}}]),t}(d.default.Component);t.default=g},ZhPi:function(e,t,a){var n=a("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}},a1gu:function(e,t,a){var n=a("cDf5"),l=a("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?l(e):t}},dwco:function(e,t,a){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,n=e.HTMLElement||e.Element,l={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||i,scrollIntoView:n.prototype.scrollIntoView},o=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,r=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?d.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):l.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?l.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;d.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var a=f(this),n=a.getBoundingClientRect(),o=this.getBoundingClientRect();a!==t.body?(d.call(this,a,a.scrollLeft+o.left-n.left,a.scrollTop+o.top-n.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else l.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function i(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+r<e.scrollHeight:"X"===t?e.clientWidth+r<e.scrollWidth:void 0}function m(t,a){var n=e.getComputedStyle(t,null)["overflow"+a];return"auto"===n||"scroll"===n}function u(e){var t=c(e,"Y")&&m(e,"Y"),a=c(e,"X")&&m(e,"X");return t||a}function f(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}function p(t){var a,n,l,r,i=(o()-t.startTime)/468;r=i=i>1?1:i,a=.5*(1-Math.cos(Math.PI*r)),n=t.startX+(t.x-t.startX)*a,l=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,n,l),n===t.x&&l===t.y||e.requestAnimationFrame(p.bind(e,t))}function d(a,n,r){var s,c,m,u,f=o();a===t.body?(s=e,c=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,u=l.scroll):(s=a,c=a.scrollLeft,m=a.scrollTop,u=i),p({scrollable:s,method:u,startTime:f,startX:c,startY:m,x:n,y:r})}}}}()},lSNA:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},obyI:function(e,t){e.exports={siteTitle:"Gatsby Starter Resume",manifestName:"Resume",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/resume",firstName:"Thai",lastName:"Do",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/DespoTron"},{icon:"fa-linkedin-in",name:"Linkedin",url:"www.linkedin.com/in/hdthaido"}],email:"hdthaido@gmail.com",phone:"778-997-0696",address:"Richmond, British Columbia"}}}]);
//# sourceMappingURL=component---src-pages-index-js-ecc6a512416c12cc7d1e.js.map
/*!
 * maVue v0.4.0 (https://github.com/stephenrob/modular-admin-vue)
 * (c) 2016 Stephen Robinson
 * Released under the MIT License.
 */
!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var r=n(30),i=o(r),a=n(58),u=o(a),s=n(66),d=o(s),f=n(67),c=o(f),l=n(69),p=o(l),h=n(68),m=o(h),v=n(71),y=o(v),_=n(70),b=o(_),w=n(72),x=o(w),g=n(60),F=o(g),R=n(59),j=o(R),O=n(73),S=o(O),C=n(75),P=o(C),M=n(76),k=o(M),$=n(77),D=o($),V=n(78),T=o(V),N=n(74),A=o(N),I=n(61),L=o(I),B=n(65),E=o(B),H=n(64),U=o(H),G=n(62),W=o(G),z=n(63),q=o(z),J={App:u.default,AppHeader:d.default,HeaderSearch:p.default,AppHeaderHideSidebar:c.default,HeaderNav:m.default,NotificationsDropdown:y.default,NotificationItem:b.default,ProfileDropdown:x.default,DropdownItem:F.default,DropdownDivider:j.default,Sidebar:S.default,SidebarHeader:P.default,SidebarNav:k.default,SidebarNavDropdown:D.default,SidebarNavItem:T.default,SidebarFooter:A.default,Footer:L.default,FooterButtons:E.default,FooterButton:U.default,FooterAbout:W.default,FooterAboutItem:q.default,install:function(t){var e=(0,i.default)(this);e.pop();for(var n=e.length;n--;)t.component("ma"+e[n],this[e[n]])}};"undefined"!=typeof window&&window.Vue&&(window.Vue.use(J),n(57)),t.exports=J},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports=!n(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,n){var o=n(43),r=n(6);t.exports=function(t){return o(r(t))}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modular-admin-app",data:function(){return{sidebarOpen:!1}},props:{fixedSidebar:{type:Boolean,default:!1},fixedFooter:{type:Boolean,default:!1}},methods:{bodyClick:function(){this.$root.$emit("maVue::hide::notificationsDropdown"),this.$root.$emit("maVue::hide::profileDropdown"),this.$root.$emit("maVue::hide::sidebar")}},created:function(){var t=this;this.$root.$on("maVue::collapseSidebar",function(){t.sidebarOpen=!t.sidebarOpen}),this.$root.$on("maVue::hide::sidebar",function(){t.sidebarOpen=!1})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modular-admin-dropdown-divider"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modular-admin-dropdown-item",replace:!0,props:{link:{type:String,default:""},icon:{type:String,default:""},text:{type:String,default:""}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modular-admin-footer"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modular-admin-footer-links"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modular-admin-footer-about-item"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modular-admin-footer-button",props:{link:{type:String,default:""},icon:{type:String,default:""}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modular-admin-footer-buttons"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modular-admin-app-header"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modular-admin-header-hide-sidebar",methods:{collapseSidebar:function(){this.$root.$emit("maVue::collapseSidebar")}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modular-admin-header-nav"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modular-admin-header-search",props:{icon:{type:String,default:"fa-search"},placeholderText:{type:String,default:"Search"}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modular-admin-notifications-item",replace:!0,props:{imageURL:{type:String,default:""},content:{type:String,default:""},notificationLink:{type:String,default:""}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modular-admin-notifications-dropdown",replace:!0,data:function(){return{show:!1}},props:{notificationIcon:{type:String,default:""},numberOfNotifications:{type:String,default:0},allNotificationsLink:{type:String,default:"#"},allNotificationsText:{type:String,default:"View All"}},methods:{toggle:function(){this.show=!this.show,this.show?this.$root.$emit("maVue::shown::notificationsDropdown",this):this.$root.$emit("maVue::hidden::notificationsDropdown")}},created:function(){var t=this;this.$root.$on("maVue::hide::notificationsDropdown",function(){t.show=!1}),this.$root.$on("maVue::shown::notificationsDropdown",function(e){e!==t&&(t.show=!1)}),this.$root.$on("maVue::shown::profileDropdown",function(){t.show=!1})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modular-admin-profile-dropdown",replace:!0,data:function(){return{show:!1}},computed:{dropdownToggle:function(){return this.caret?"dropdown-toggle":""}},props:{caret:{type:Boolean,default:!0},dropdown:{type:Boolean,default:!0},name:{type:String,default:""},profilePictureURL:{type:String,default:""},disabled:{type:Boolean,default:!1}},methods:{toggle:function(){this.show=!this.show,this.show?this.$root.$emit("maVue::shown::profileDropdown",this):this.$root.$emit("maVue::hidden::profileDropdown")}},created:function(){var t=this;this.$root.$on("maVue::hide::profileDropdown",function(){t.show=!1}),this.$root.$on("maVue::shown::profileDropdown",function(e){e!==t&&(t.show=!1)}),this.$root.$on("maVue::shown::notificationsDropdown",function(){t.show=!1})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modular-admin-sidebar"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modular-admin-sidebar-footer"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modular-admin-sidebar-header",props:{appName:{type:String,default:""}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modular-admin-sidebar-nav"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modular-admin-sidebar-nav-dropdown",replace:!0,data:function(){return{show:!1,isActive:!1}},props:{active:{type:Boolean,default:!1},icon:{type:String,default:""},itemText:{type:String,default:""}},methods:{toggle:function(){this.show=!this.show},childActive:function(){this.isActive=!0,this.show=!0}},created:function(){this.isActive=this.active,this.$on("maVue::sidebarItem::active",this.childActive)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modular-admin-sidebar-nav-item",replace:!0,computed:{linkContent:function(){return'<i class="fa '+this.icon+'"></i> '+this.itemText}},props:{active:{type:Boolean,default:!1},icon:{type:String,default:""},link:{type:String,default:"#"},itemText:{type:String,default:""}},created:function(){this.active&&this.$parent.$emit("maVue::sidebarItem::active")}}},function(t,e,n){t.exports={default:n(31),__esModule:!0}},function(t,e,n){n(56),t.exports=n(1).Object.keys},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var o=n(5);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var o=n(8),r=n(52),i=n(51);t.exports=function(t){return function(e,n,a){var u,s=o(e),d=r(s.length),f=i(a,d);if(t&&n!=n){for(;d>f;)if(u=s[f++],u!=u)return!0}else for(;d>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var o=n(32);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var o=n(5),r=n(4).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(4),r=n(1),i=n(36),a=n(41),u="prototype",s=function(t,e,n){var d,f,c,l=t&s.F,p=t&s.G,h=t&s.S,m=t&s.P,v=t&s.B,y=t&s.W,_=p?r:r[e]||(r[e]={}),b=_[u],w=p?o:h?o[e]:(o[e]||{})[u];p&&(n=e);for(d in n)f=!l&&w&&void 0!==w[d],f&&d in _||(c=f?w[d]:n[d],_[d]=p&&"function"!=typeof w[d]?n[d]:v&&f?i(c,o):y&&w[d]==c?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e[u]=t[u],e}(c):m&&"function"==typeof c?i(Function.call,c):c,m&&((_.virtual||(_.virtual={}))[d]=c,t&s.R&&b&&!b[d]&&a(b,d,c)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(44),r=n(48);t.exports=n(2)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(2)&&!n(3)(function(){return 7!=Object.defineProperty(n(37)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var o=n(35);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e,n){var o=n(33),r=n(42),i=n(54),a=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var o=n(40),r=n(8),i=n(34)(!1),a=n(49)("IE_PROTO");t.exports=function(t,e){var n,u=r(t),s=0,d=[];for(n in u)n!=a&&o(u,n)&&d.push(n);for(;e.length>s;)o(u,n=e[s++])&&(~i(d,n)||d.push(n));return d}},function(t,e,n){var o=n(45),r=n(38);t.exports=Object.keys||function(t){return o(t,r)}},function(t,e,n){var o=n(39),r=n(1),i=n(3);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],a={};a[t]=e(n),o(o.S+o.F*i(function(){n(1)}),"Object",a)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var o=n(50)("keys"),r=n(55);t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,e,n){var o=n(4),r="__core-js_shared__",i=o[r]||(o[r]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){var o=n(7),r=Math.max,i=Math.min;t.exports=function(t,e){return t=o(t),t<0?r(t+e,0):i(t,e)}},function(t,e,n){var o=n(7),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,e,n){var o=n(6);t.exports=function(t){return Object(o(t))}},function(t,e,n){var o=n(5);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e,n){var o=n(53),r=n(46);n(47)("keys",function(){return function(t){return r(o(t))}})},function(t,e){},function(t,e,n){var o,r;o=n(9);var i=n(82);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,r;o=n(10);var i=n(81);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,r;o=n(11);var i=n(97);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,r;o=n(12);var i=n(95);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,r;o=n(13);var i=n(88);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,r;o=n(14);var i=n(99);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,r;o=n(15);var i=n(86);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,r;o=n(16);var i=n(90);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,r;o=n(17);var i=n(92);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,r;o=n(18);var i=n(80);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,r;o=n(19);var i=n(85);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,r;o=n(20);var i=n(84);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,r;o=n(21);var i=n(79);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,r;o=n(22);var i=n(83);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,r;o=n(23);var i=n(94);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,r;o=n(24);var i=n(87);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,r;o=n(25);var i=n(91);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,r;o=n(26);var i=n(98);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,r;o=n(27);var i=n(93);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,r;o=n(28);var i=n(96);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,r;o=n(29);var i=n(89);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,t.exports=o},function(module,exports){module.exports={render:function(){with(this)return _h("li",[_h("a",{staticClass:"notification-item",attrs:{href:notificationLink}},[_h("div",{staticClass:"img-col"},[_h("div",{staticClass:"img",style:{backgroundImage:"url("+imageURL+")"}})])," ",_h("div",{staticClass:"body-col",domProps:{innerHTML:_s(content)}})])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"header-block header-block-collapse hidden-lg-up"},[_h("button",{staticClass:"collapse-btn",attrs:{id:"sidebar-collapse-btn"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),collapseSidebar(t)}}},[_m(0)])])},staticRenderFns:[function(){with(this)return _h("i",{staticClass:"fa fa-bars"})}]}},function(module,exports){module.exports={render:function(){with(this)return _m(0)},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"dropdown-divider"})}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"main-wrapper",on:{click:bodyClick}},[_h("div",{staticClass:"app",class:{"sidebar-fixed":fixedSidebar,"footer-fixed":fixedFooter,"sidebar-open":sidebarOpen}},[_t("default")])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("li",{staticClass:"notifications new",class:{open:show}},[_h("a",{attrs:{href:"#","data-toggle":"dropdown"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),toggle()}}},[_h("i",{class:["fa",notificationIcon]})," ",_h("sup",[_h("span",{staticClass:"counter"},[_s(numberOfNotifications)])])])," ",_h("div",{staticClass:"dropdown-menu notifications-dropdown-menu"},[_h("ul",{staticClass:"notifications-container"},[_t("default")])," ",_h("footer",[_h("ul",[_h("li",[_h("a",{attrs:{href:allNotificationsLink}},[_s(allNotificationsText)])])])])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"header-block header-block-search hidden-sm-down"},[_h("form",{attrs:{role:"search"}},[_h("div",{staticClass:"input-container"},[_h("i",{class:["fa",icon]})," ",_h("input",{attrs:{type:"search",placeholder:placeholderText}})," ",_m(0)])])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"underline"})}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"header-block header-block-nav"},[_h("ul",{staticClass:"nav-profile"},[_t("default")])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("a",{attrs:{href:link}},[_h("i",{class:["fa","fa-lg",icon]})])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("aside",{staticClass:"sidebar"},[_h("div",{staticClass:"sidebar-container"},[_t("default")])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"footer-block author"},[_h("ul",[_t("default")])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("li",{class:{active:active}},[_h("a",{attrs:{href:link},domProps:{innerHTML:_s(linkContent)}})," ",_t("default")])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"footer-block buttons"},[_t("default")])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("footer",{staticClass:"sidebar-footer"},[_t("default")])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("header",{staticClass:"header"},[_t("default")])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("nav",{staticClass:"menu"},[_h("ul",{staticClass:"nav",attrs:{id:"sidebar-menu"}},[_t("default")])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("li",{staticClass:"profile",class:{dropdown:dropdown,open:show}},[_h("a",{class:["nav-link",dropdownToggle],attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":[show]},on:{click:function(t){t.stopPropagation(),t.preventDefault(),toggle()}}},[profilePictureURL?_h("div",{staticClass:"img",style:{backgroundImage:"url("+profilePictureURL+")"}}):_e()," ",_h("span",{staticClass:"name",domProps:{innerHTML:_s(name)}})])," ",_h("div",{staticClass:"dropdown-menu profile-dropdown-menu",attrs:{"aria-labelledby":"dropdownMenu1"}},[_t("default")])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("footer",{staticClass:"footer"},[_t("default")])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("li",{class:{active:isActive,open:show}},[_h("a",{attrs:{href:"#"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),toggle(t)}}},[_h("i",{staticClass:"fa",class:[icon]}),"\n    "+_s(itemText)+"\n    ",_m(0)])," ",_h("ul",[_t("default")])])},staticRenderFns:[function(){with(this)return _h("i",{staticClass:"fa arrow"})}]}},function(module,exports){module.exports={render:function(){with(this)return _h("a",{staticClass:"dropdown-item",attrs:{href:link}},[_h("i",{class:["fa","icon",icon]})," "+_s(text)+" "])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"sidebar-header"},[_h("div",{staticClass:"brand"},["\n    "+_s(appName)+"\n  "])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("li",[_t("default")])},staticRenderFns:[]}}]);
//# sourceMappingURL=maVue.js.map
/*!
 * maVue v0.3.1 (https://github.com/stephenrob/modular-admin-vue)
 * (c) 2016 Stephen Robinson
 * Released under the MIT License.
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _keys = __webpack_require__(30);

	var _keys2 = _interopRequireDefault(_keys);

	var _App = __webpack_require__(58);

	var _App2 = _interopRequireDefault(_App);

	var _AppHeader = __webpack_require__(66);

	var _AppHeader2 = _interopRequireDefault(_AppHeader);

	var _HeaderHideSidebar = __webpack_require__(67);

	var _HeaderHideSidebar2 = _interopRequireDefault(_HeaderHideSidebar);

	var _HeaderSearch = __webpack_require__(69);

	var _HeaderSearch2 = _interopRequireDefault(_HeaderSearch);

	var _HeaderNav = __webpack_require__(68);

	var _HeaderNav2 = _interopRequireDefault(_HeaderNav);

	var _NotificationsDropdown = __webpack_require__(71);

	var _NotificationsDropdown2 = _interopRequireDefault(_NotificationsDropdown);

	var _NotificationItem = __webpack_require__(70);

	var _NotificationItem2 = _interopRequireDefault(_NotificationItem);

	var _ProfileDropdown = __webpack_require__(72);

	var _ProfileDropdown2 = _interopRequireDefault(_ProfileDropdown);

	var _DropdownItem = __webpack_require__(60);

	var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

	var _DropdownDivider = __webpack_require__(59);

	var _DropdownDivider2 = _interopRequireDefault(_DropdownDivider);

	var _Sidebar = __webpack_require__(73);

	var _Sidebar2 = _interopRequireDefault(_Sidebar);

	var _SidebarHeader = __webpack_require__(75);

	var _SidebarHeader2 = _interopRequireDefault(_SidebarHeader);

	var _SidebarNav = __webpack_require__(76);

	var _SidebarNav2 = _interopRequireDefault(_SidebarNav);

	var _SidebarNavDropdown = __webpack_require__(77);

	var _SidebarNavDropdown2 = _interopRequireDefault(_SidebarNavDropdown);

	var _SidebarNavItem = __webpack_require__(78);

	var _SidebarNavItem2 = _interopRequireDefault(_SidebarNavItem);

	var _SidebarFooter = __webpack_require__(74);

	var _SidebarFooter2 = _interopRequireDefault(_SidebarFooter);

	var _AppFooter = __webpack_require__(61);

	var _AppFooter2 = _interopRequireDefault(_AppFooter);

	var _FooterButtons = __webpack_require__(65);

	var _FooterButtons2 = _interopRequireDefault(_FooterButtons);

	var _FooterButton = __webpack_require__(64);

	var _FooterButton2 = _interopRequireDefault(_FooterButton);

	var _FooterAbout = __webpack_require__(62);

	var _FooterAbout2 = _interopRequireDefault(_FooterAbout);

	var _FooterAboutItem = __webpack_require__(63);

	var _FooterAboutItem2 = _interopRequireDefault(_FooterAboutItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var maVue = {
	  App: _App2.default,
	  AppHeader: _AppHeader2.default,
	  HeaderSearch: _HeaderSearch2.default,
	  AppHeaderHideSidebar: _HeaderHideSidebar2.default,
	  HeaderNav: _HeaderNav2.default,
	  NotificationsDropdown: _NotificationsDropdown2.default,
	  NotificationItem: _NotificationItem2.default,
	  ProfileDropdown: _ProfileDropdown2.default,
	  DropdownItem: _DropdownItem2.default,
	  DropdownDivider: _DropdownDivider2.default,
	  Sidebar: _Sidebar2.default,
	  SidebarHeader: _SidebarHeader2.default,
	  SidebarNav: _SidebarNav2.default,
	  SidebarNavDropdown: _SidebarNavDropdown2.default,
	  SidebarNavItem: _SidebarNavItem2.default,
	  SidebarFooter: _SidebarFooter2.default,
	  Footer: _AppFooter2.default,
	  FooterButtons: _FooterButtons2.default,
	  FooterButton: _FooterButton2.default,
	  FooterAbout: _FooterAbout2.default,
	  FooterAboutItem: _FooterAboutItem2.default,
	  install: function install(Vue) {
	    var keys = (0, _keys2.default)(this);
	    keys.pop();
	    var i = keys.length;
	    while (i--) {
	      Vue.component('ma' + keys[i], this[keys[i]]);
	    }
	  }
	};

	if (typeof window !== 'undefined' && window.Vue) {
	  window.Vue.use(maVue);
	  __webpack_require__(57);
	}

	module.exports = maVue;

/***/ },
/* 1 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(3)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(43)
	  , defined = __webpack_require__(6);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modular-admin-app',
	  data: function data() {
	    return {
	      sidebarOpen: false
	    };
	  },

	  props: {
	    fixedSidebar: {
	      type: Boolean,
	      default: false
	    },
	    fixedFooter: {
	      type: Boolean,
	      default: false
	    }
	  },
	  methods: {
	    bodyClick: function bodyClick() {
	      this.$root.$emit('hide::notificationsdropdown');
	      this.$root.$emit('hide::profiledropdown');
	      this.$root.$emit('maVue::hide::sidebar');
	      this.sidebarOpen = !this.sidebarOpen;
	    }
	  },
	  created: function created() {
	    var _this = this;

	    this.$root.$on('maVue::collapseSidebar', function () {
	      _this.sidebarOpen = !_this.sidebarOpen;
	    });
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modular-admin-dropdown-divider'
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modular-admin-dropdown-item',
	  replace: true,
	  props: {
	    link: {
	      type: String,
	      default: ''
	    },
	    icon: {
	      type: String,
	      default: ''
	    },
	    text: {
	      type: String,
	      default: ''
	    }
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modular-admin-footer'
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modular-admin-footer-links'
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modular-admin-footer-about-item'
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modular-admin-footer-button',
	  props: {
	    link: {
	      type: String,
	      default: ''
	    },
	    icon: {
	      type: String,
	      default: ''
	    }
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modular-admin-footer-buttons'
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modular-admin-app-header'
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modular-admin-header-hide-sidebar',
	  methods: {
	    collapseSidebar: function collapseSidebar() {
	      this.$root.$emit('maVue::collapseSidebar');
	    }
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modular-admin-header-nav'
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modular-admin-header-search',
	  props: {
	    icon: {
	      type: String,
	      default: 'fa-search'
	    },
	    placeholderText: {
	      type: String,
	      default: 'Search'
	    }
	  }
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modular-admin-notifications-item',
	  replace: true,
	  props: {
	    imageURL: {
	      type: String,
	      default: ''
	    },
	    content: {
	      type: String,
	      default: ''
	    },
	    notificationLink: {
	      type: String,
	      default: ''
	    }
	  }
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modular-admin-notifications-dropdown',
	  replace: true,
	  data: function data() {
	    return {
	      show: false
	    };
	  },

	  props: {
	    notificationIcon: {
	      type: String,
	      default: ''
	    },
	    numberOfNotifications: {
	      type: String,
	      default: 0
	    },
	    allNotificationsLink: {
	      type: String,
	      default: '#'
	    },
	    allNotificationsText: {
	      type: String,
	      default: 'View All'
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      this.show = !this.show;
	      if (this.show) {
	        this.$root.$emit('shown::notificationsdropdown');
	      } else {
	        this.$root.$emit('hidden::notificationsdropdown');
	      }
	    }
	  },
	  created: function created() {
	    var _this = this;

	    this.$root.$on('hide::notificationsdropdown', function () {
	      _this.show = false;
	    });
	  }
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modular-admin-profile-dropdown',
	  replace: true,
	  data: function data() {
	    return {
	      show: false
	    };
	  },

	  computed: {
	    dropdownToggle: function dropdownToggle() {
	      return this.caret ? 'dropdown-toggle' : '';
	    }
	  },
	  props: {
	    caret: {
	      type: Boolean,
	      default: true
	    },
	    dropdown: {
	      type: Boolean,
	      default: true
	    },
	    name: {
	      type: String,
	      default: ''
	    },
	    profilePictureURL: {
	      type: String,
	      default: ''
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      this.show = !this.show;
	      if (this.show) {
	        this.$root.$emit('shown::profiledropdown');
	      } else {
	        this.$root.$emit('hidden::profiledropdown');
	      }
	    }
	  },
	  created: function created() {
	    var _this = this;

	    this.$root.$on('hide::profiledropdown', function () {
	      _this.show = false;
	    });
	  }
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modular-admin-sidebar'
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modular-admin-sidebar-footer'
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modular-admin-sidebar-header',
	  props: {
	    appName: {
	      type: String,
	      default: ''
	    }
	  }
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modular-admin-sidebar-nav'
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modular-admin-sidebar-nav-dropdown',
	  replace: true,
	  data: function data() {
	    return {
	      show: false,
	      isActive: false
	    };
	  },

	  props: {
	    active: {
	      type: Boolean,
	      default: false
	    },
	    icon: {
	      type: String,
	      default: ''
	    },
	    itemText: {
	      type: String,
	      default: ''
	    }
	  },
	  methods: {
	    toggle: function toggle(e) {
	      this.show = !this.show;
	    }
	  },
	  created: function created() {
	    var _this = this;

	    this.isActive = this.active;
	    this.$on('sidebaritem::active', function () {
	      _this.isActive = true;
	      _this.show = true;
	    });
	  }
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'modular-admin-sidebar-nav-item',
	  replace: true,
	  computed: {
	    linkContent: function linkContent() {
	      return '<i class="fa ' + this.icon + '"></i> ' + this.itemText;
	    }
	  },
	  props: {
	    active: {
	      type: Boolean,
	      default: false
	    },
	    icon: {
	      type: String,
	      default: ''
	    },
	    link: {
	      type: String,
	      default: '#'
	    },
	    itemText: {
	      type: String,
	      default: ''
	    }
	  },
	  created: function created() {
	    if (this.active) {
	      this.$parent.$emit('sidebaritem::active');
	    }
	  }
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(31), __esModule: true };

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(56);
	module.exports = __webpack_require__(1).Object.keys;

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(5);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(8)
	  , toLength  = __webpack_require__(52)
	  , toIndex   = __webpack_require__(51);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(32);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(5)
	  , document = __webpack_require__(4).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(1)
	  , ctx       = __webpack_require__(36)
	  , hide      = __webpack_require__(41)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 40 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(44)
	  , createDesc = __webpack_require__(48);
	module.exports = __webpack_require__(2) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(2) && !__webpack_require__(3)(function(){
	  return Object.defineProperty(__webpack_require__(37)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(35);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(33)
	  , IE8_DOM_DEFINE = __webpack_require__(42)
	  , toPrimitive    = __webpack_require__(54)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(40)
	  , toIObject    = __webpack_require__(8)
	  , arrayIndexOf = __webpack_require__(34)(false)
	  , IE_PROTO     = __webpack_require__(49)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(45)
	  , enumBugKeys = __webpack_require__(38);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(39)
	  , core    = __webpack_require__(1)
	  , fails   = __webpack_require__(3);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(50)('keys')
	  , uid    = __webpack_require__(55);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(7)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(7)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(6);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(5);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(53)
	  , $keys    = __webpack_require__(46);

	__webpack_require__(47)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 57 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(9)

	/* template */
	var __vue_template__ = __webpack_require__(82)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(10)

	/* template */
	var __vue_template__ = __webpack_require__(81)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(11)

	/* template */
	var __vue_template__ = __webpack_require__(97)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(12)

	/* template */
	var __vue_template__ = __webpack_require__(95)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(13)

	/* template */
	var __vue_template__ = __webpack_require__(88)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(14)

	/* template */
	var __vue_template__ = __webpack_require__(99)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(15)

	/* template */
	var __vue_template__ = __webpack_require__(86)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(16)

	/* template */
	var __vue_template__ = __webpack_require__(90)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(17)

	/* template */
	var __vue_template__ = __webpack_require__(92)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(18)

	/* template */
	var __vue_template__ = __webpack_require__(80)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(19)

	/* template */
	var __vue_template__ = __webpack_require__(85)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(20)

	/* template */
	var __vue_template__ = __webpack_require__(84)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(21)

	/* template */
	var __vue_template__ = __webpack_require__(79)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(22)

	/* template */
	var __vue_template__ = __webpack_require__(83)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(23)

	/* template */
	var __vue_template__ = __webpack_require__(94)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(24)

	/* template */
	var __vue_template__ = __webpack_require__(87)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(25)

	/* template */
	var __vue_template__ = __webpack_require__(91)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(26)

	/* template */
	var __vue_template__ = __webpack_require__(98)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(27)

	/* template */
	var __vue_template__ = __webpack_require__(93)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(28)

	/* template */
	var __vue_template__ = __webpack_require__(96)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(29)

	/* template */
	var __vue_template__ = __webpack_require__(89)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('li', [_h('a', {
	    staticClass: "notification-item",
	    attrs: {
	      "href": notificationLink
	    }
	  }, [_h('div', {
	    staticClass: "img-col"
	  }, [_h('div', {
	    staticClass: "img",
	    style: ({
	      backgroundImage: 'url(' + imageURL + ')'
	    })
	  })]), " ", _h('div', {
	    staticClass: "body-col",
	    domProps: {
	      "innerHTML": _s(content)
	    }
	  })])])
	}},staticRenderFns: []}

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "header-block header-block-collapse hidden-lg-up"
	  }, [_h('button', {
	    staticClass: "collapse-btn",
	    attrs: {
	      "id": "sidebar-collapse-btn"
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        $event.preventDefault();
	        collapseSidebar($event)
	      }
	    }
	  }, [_m(0)])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('i', {
	    staticClass: "fa fa-bars"
	  })
	}}]}

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _m(0)
	}},staticRenderFns: [function (){with(this) {
	  return _h('div', {
	    staticClass: "dropdown-divider"
	  })
	}}]}

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "main-wrapper",
	    on: {
	      "click": bodyClick
	    }
	  }, [_h('div', {
	    staticClass: "app",
	    class: {
	      'sidebar-fixed': fixedSidebar, 'footer-fixed': fixedFooter, 'sidebar-open': sidebarOpen
	    }
	  }, [_t("default")])])
	}},staticRenderFns: []}

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('li', {
	    staticClass: "notifications new",
	    class: {
	      open: show
	    }
	  }, [_h('a', {
	    attrs: {
	      "href": "#",
	      "data-toggle": "dropdown"
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        $event.preventDefault();
	        toggle()
	      }
	    }
	  }, [_h('i', {
	    class: ['fa', notificationIcon]
	  }), " ", _h('sup', [_h('span', {
	    staticClass: "counter"
	  }, [_s(numberOfNotifications)])])]), " ", _h('div', {
	    staticClass: "dropdown-menu notifications-dropdown-menu"
	  }, [_h('ul', {
	    staticClass: "notifications-container"
	  }, [_t("default")]), " ", _h('footer', [_h('ul', [_h('li', [_h('a', {
	    attrs: {
	      "href": allNotificationsLink
	    }
	  }, [_s(allNotificationsText)])])])])])])
	}},staticRenderFns: []}

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "header-block header-block-search hidden-sm-down"
	  }, [_h('form', {
	    attrs: {
	      "role": "search"
	    }
	  }, [_h('div', {
	    staticClass: "input-container"
	  }, [_h('i', {
	    class: ['fa', icon]
	  }), " ", _h('input', {
	    attrs: {
	      "type": "search",
	      "placeholder": placeholderText
	    }
	  }), " ", _m(0)])])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('div', {
	    staticClass: "underline"
	  })
	}}]}

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "header-block header-block-nav"
	  }, [_h('ul', {
	    staticClass: "nav-profile"
	  }, [_t("default")])])
	}},staticRenderFns: []}

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('a', {
	    attrs: {
	      "href": link
	    }
	  }, [_h('i', {
	    class: ['fa', 'fa-lg', icon]
	  })])
	}},staticRenderFns: []}

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('aside', {
	    staticClass: "sidebar"
	  }, [_h('div', {
	    staticClass: "sidebar-container"
	  }, [_t("default")])])
	}},staticRenderFns: []}

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "footer-block author"
	  }, [_h('ul', [_t("default")])])
	}},staticRenderFns: []}

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('li', {
	    class: {
	      active: active
	    }
	  }, [_h('a', {
	    attrs: {
	      "href": link
	    },
	    domProps: {
	      "innerHTML": _s(linkContent)
	    }
	  }), " ", _t("default")])
	}},staticRenderFns: []}

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "footer-block buttons"
	  }, [_t("default")])
	}},staticRenderFns: []}

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('footer', {
	    staticClass: "sidebar-footer"
	  }, [_t("default")])
	}},staticRenderFns: []}

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('header', {
	    staticClass: "header"
	  }, [_t("default")])
	}},staticRenderFns: []}

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('nav', {
	    staticClass: "menu"
	  }, [_h('ul', {
	    staticClass: "nav",
	    attrs: {
	      "id": "sidebar-menu"
	    }
	  }, [_t("default")])])
	}},staticRenderFns: []}

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('li', {
	    staticClass: "profile",
	    class: {
	      dropdown: dropdown, open: show
	    }
	  }, [_h('a', {
	    class: ['nav-link', dropdownToggle],
	    attrs: {
	      "href": "#",
	      "role": "button",
	      "data-toggle": "dropdown",
	      "aria-haspopup": "true",
	      "aria-expanded": [show]
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        $event.preventDefault();
	        toggle()
	      }
	    }
	  }, [(profilePictureURL) ? _h('div', {
	    staticClass: "img",
	    style: ({
	      backgroundImage: 'url(' + profilePictureURL + ')'
	    })
	  }) : _e(), " ", _h('span', {
	    staticClass: "name",
	    domProps: {
	      "innerHTML": _s(name)
	    }
	  })]), " ", _h('div', {
	    staticClass: "dropdown-menu profile-dropdown-menu",
	    attrs: {
	      "aria-labelledby": "dropdownMenu1"
	    }
	  }, [_t("default")])])
	}},staticRenderFns: []}

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('footer', {
	    staticClass: "footer"
	  }, [_t("default")])
	}},staticRenderFns: []}

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('li', {
	    class: {
	      active: isActive, open: show
	    }
	  }, [_h('a', {
	    attrs: {
	      "href": "#"
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        $event.preventDefault();
	        toggle(e)
	      }
	    }
	  }, [_h('i', {
	    staticClass: "fa",
	    class: [icon]
	  }), "\n    " + _s(itemText) + "\n    ", _m(0)]), " ", _h('ul', [_t("default")])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('i', {
	    staticClass: "fa arrow"
	  })
	}}]}

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('a', {
	    staticClass: "dropdown-item",
	    attrs: {
	      "href": link
	    }
	  }, [_h('i', {
	    class: ['fa', 'icon', icon]
	  }), " " + _s(text) + " "])
	}},staticRenderFns: []}

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "sidebar-header"
	  }, [_h('div', {
	    staticClass: "brand"
	  }, ["\n    " + _s(appName) + "\n  "])])
	}},staticRenderFns: []}

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('li', [_t("default")])
	}},staticRenderFns: []}

/***/ }
/******/ ]);
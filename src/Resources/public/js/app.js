/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shopify_draggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopify/draggable */ "./node_modules/@shopify/draggable/lib/draggable.bundle.js");
/* harmony import */ var _shopify_draggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shopify_draggable__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Class to manage CMS fields with UI Elements
 */

var MbizCmsFields =
/*#__PURE__*/
function () {
  /**
   * Constructor for MbizCmsFields, see config in `src/Resources/views/Admin/app_javascript.html.twig`
   * @param config
   */
  function MbizCmsFields(config) {
    _classCallCheck(this, MbizCmsFields);

    this.config = config;
    this.templateRender = this.config.templateRender;
    this.debug = this.config.debug;
    this.targets = document.querySelectorAll(config.querySelector);
    this.uiElements = this.config.uiElements;
    this.translations = this.config.translations;
    this.uiElementContainerClass = 'component-ui-elements';

    if (this.debug) {
      this.log('Plugin configuration :', this.config);
      this.log('Matched element(s) :', this.targets.length);
    }
  }
  /**
   * Init each CMS element
   */


  _createClass(MbizCmsFields, [{
    key: "init",
    value: function init() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.targets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var target = _step.value;
          var content = target.value;
          this.log('Target\'s content :', content);
          var jsonContent = void 0;

          try {
            jsonContent = JSON.parse(content);
          } catch (e) {
            this.error('Unable to parse the CMS JSON for this content : ', content);
            continue;
          }

          this.initField(target, jsonContent);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.initDraggable();
      this.addStyles();
    }
    /**
     * Init the field depending on it's parsed content
     *
     * @param target
     * @param jsonContent [{type: "UI Element Type", fields: {}}]
     */

  }, {
    key: "initField",
    value: function initField(target, jsonContent) {
      this.log('Init field with parsed content :', jsonContent); // Hide original input

      target.setAttribute('hidden', 'true'); // Init container

      var elementsContainer = document.createElement('div');
      elementsContainer.classList.add('ui', 'segment', 'drag-list', this.uiElementContainerClass); // @TODO manage render depending on templateRender
      // Loop on UI Elements

      var error = false;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = jsonContent[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var uiElement = _step2.value;
          // Retrieve the Ui Element type
          this.log('Init UI Element :', uiElement);

          if (typeof this.uiElements[uiElement.type] === 'undefined') {
            error = true;
            this.error('Cannot find element of type ', uiElement.type);
            continue;
          } // Render Ui Element meta data


          var uiElementMetaData = this.uiElements[uiElement.type];
          this.log('Matched Ui Element with meta data :', uiElementMetaData);
          var renderedUiElementMetaData = this.renderUiElementMetaData(uiElementMetaData, this.templateRender);

          if (renderedUiElementMetaData === '') {
            error = true;
            continue;
          } // Add rendered Ui Element meta data in container


          this.log('Rendered Ui Element meta data :', renderedUiElementMetaData);
          elementsContainer.insertAdjacentHTML('beforeend', renderedUiElementMetaData);
        } // Append generated HTML to display current UI Elements of target

      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (!error) {
        target.parentNode.appendChild(elementsContainer);
      }
    }
    /**
     * Return markup to display UI Element meta data depending on render
     *
     * @param uiElementMetaData {short_description: "Short description", description: "Description", title: "Title", image: "/path/to/image.jpg"}
     */

  }, {
    key: "renderUiElementMetaData",
    value: function renderUiElementMetaData(uiElementMetaData, templateRender) {
      if (templateRender === 'sylius') {
        return "\n            <div class=\"ui segment raised drag-item\" draggable=\"true\">\n                <div class=\"ui grid\">\n                    <div class=\"four wide column\">\n                        <img class=\"ui small image\" src=\"".concat(uiElementMetaData.image, "\" alt=\"\" width=\"150\" height=\"150\">\n                    </div>\n                    <div class=\"twelve wide column\">\n                        <h2 class=\"ui header\">").concat(uiElementMetaData.title, "</h2>\n                        <p>").concat(uiElementMetaData.description, "</p>\n                        <div class=\"ui buttons\">\n                            <button class=\"ui button\" type=\"button\">").concat(this.translations.edit, "</button>\n                            <button class=\"ui button negative\" type=\"button\">").concat(this.translations["delete"], "</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ");
      }

      this.error('Cannot find render for : ', templateRender);
      return '';
    }
  }, {
    key: "initDraggable",
    value: function initDraggable() {
      var containerSelector = '.drag-item';
      var containers = document.querySelectorAll(containerSelector);
      new _shopify_draggable__WEBPACK_IMPORTED_MODULE_0__["Sortable"](containers, {
        draggable: '.drag-item',
        mirror: {
          appendTo: containerSelector,
          constrainDimensions: true
        }
      });
    }
  }, {
    key: "addStyles",
    value: function addStyles() {
      var head = document.getElementsByTagName('head')[0];
      var styleTag = document.createElement('style');
      var styles = "\n            .draggable--over {\n                opacity: .5;\n            }\n        ";
      styleTag.setAttribute('type', 'text/css');
      styleTag.appendChild(document.createTextNode(styles));
      head.appendChild(styleTag);
    }
    /**
     * Add console error if debug
     *
     * @param description
     * @param content
     */

  }, {
    key: "error",
    value: function error(description, content) {
      // If error, display original fields
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.targets[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var target = _step3.value;
          target.removeAttribute('hidden');
        } // Remove generated blocks

      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = document.querySelectorAll('.' + this.uiElementContainerClass)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _target = _step4.value;

          _target.remove();
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      if (this.debug) {
        console.error(description);
        console.error(content);
      }
    }
    /**
     * Add console log if debug is true
     *
     * @param description
     * @param content
     */

  }, {
    key: "log",
    value: function log(description, content) {
      if (this.debug) {
        console.log(description);
        console.log(content);
      }
    }
  }]);

  return MbizCmsFields;
}(); // Init the plugin


document.addEventListener('DOMContentLoaded', function () {
  var cms = new MbizCmsFields(monsieurbizCmsPluginConfig);
  cms.init();
});

/***/ }),

/***/ "./node_modules/@shopify/draggable/lib/draggable.bundle.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@shopify/draggable/lib/draggable.bundle.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractEvent = __webpack_require__(64);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AbstractEvent2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractPlugin = __webpack_require__(60);

var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AbstractPlugin2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _closest = __webpack_require__(51);

Object.defineProperty(exports, 'closest', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_closest).default;
  }
});

var _requestNextAnimationFrame = __webpack_require__(49);

Object.defineProperty(exports, 'requestNextAnimationFrame', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_requestNextAnimationFrame).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SensorEvent = __webpack_require__(44);

Object.keys(_SensorEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SensorEvent[key];
    }
  });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sensor = __webpack_require__(47);

var _Sensor2 = _interopRequireDefault(_Sensor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Sensor2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DragEvent = __webpack_require__(14);

Object.keys(_DragEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DragEvent[key];
    }
  });
});

var _DraggableEvent = __webpack_require__(13);

Object.keys(_DraggableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DraggableEvent[key];
    }
  });
});

var _Plugins = __webpack_require__(12);

Object.keys(_Plugins).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Plugins[key];
    }
  });
});

var _Sensors = __webpack_require__(6);

Object.keys(_Sensors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Sensors[key];
    }
  });
});

var _Draggable = __webpack_require__(37);

var _Draggable2 = _interopRequireDefault(_Draggable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Draggable2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sensor = __webpack_require__(4);

Object.defineProperty(exports, 'Sensor', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Sensor).default;
  }
});

var _MouseSensor = __webpack_require__(46);

Object.defineProperty(exports, 'MouseSensor', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_MouseSensor).default;
  }
});

var _TouchSensor = __webpack_require__(43);

Object.defineProperty(exports, 'TouchSensor', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_TouchSensor).default;
  }
});

var _DragSensor = __webpack_require__(41);

Object.defineProperty(exports, 'DragSensor', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_DragSensor).default;
  }
});

var _ForceTouchSensor = __webpack_require__(39);

Object.defineProperty(exports, 'ForceTouchSensor', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_ForceTouchSensor).default;
  }
});

var _SensorEvent = __webpack_require__(3);

Object.keys(_SensorEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SensorEvent[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SnappableEvent = __webpack_require__(18);

Object.keys(_SnappableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SnappableEvent[key];
    }
  });
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CollidableEvent = __webpack_require__(23);

Object.keys(_CollidableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CollidableEvent[key];
    }
  });
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SortableEvent = __webpack_require__(27);

Object.keys(_SortableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SortableEvent[key];
    }
  });
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SwappableEvent = __webpack_require__(30);

Object.keys(_SwappableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SwappableEvent[key];
    }
  });
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DroppableEvent = __webpack_require__(33);

Object.keys(_DroppableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DroppableEvent[key];
    }
  });
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Announcement = __webpack_require__(62);

Object.defineProperty(exports, 'Announcement', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Announcement).default;
  }
});
Object.defineProperty(exports, 'defaultAnnouncementOptions', {
  enumerable: true,
  get: function () {
    return _Announcement.defaultOptions;
  }
});

var _Focusable = __webpack_require__(59);

Object.defineProperty(exports, 'Focusable', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Focusable).default;
  }
});

var _Mirror = __webpack_require__(57);

Object.defineProperty(exports, 'Mirror', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Mirror).default;
  }
});
Object.defineProperty(exports, 'defaultMirrorOptions', {
  enumerable: true,
  get: function () {
    return _Mirror.defaultOptions;
  }
});

var _Scrollable = __webpack_require__(53);

Object.defineProperty(exports, 'Scrollable', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Scrollable).default;
  }
});
Object.defineProperty(exports, 'defaultScrollableOptions', {
  enumerable: true,
  get: function () {
    return _Scrollable.defaultOptions;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DraggableEvent = __webpack_require__(63);

Object.keys(_DraggableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DraggableEvent[key];
    }
  });
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DragEvent = __webpack_require__(65);

Object.keys(_DragEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DragEvent[key];
    }
  });
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _AbstractPlugin = __webpack_require__(1);

var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onSortableSorted = Symbol('onSortableSorted');

/**
 * SwapAnimation default options
 * @property {Object} defaultOptions
 * @property {Number} defaultOptions.duration
 * @property {String} defaultOptions.easingFunction
 * @property {Boolean} defaultOptions.horizontal
 * @type {Object}
 */
const defaultOptions = exports.defaultOptions = {
  duration: 150,
  easingFunction: 'ease-in-out',
  horizontal: false
};

/**
 * SwapAnimation plugin adds swap animations for sortable
 * @class SwapAnimation
 * @module SwapAnimation
 * @extends AbstractPlugin
 */
class SwapAnimation extends _AbstractPlugin2.default {
  /**
   * SwapAnimation constructor.
   * @constructs SwapAnimation
   * @param {Draggable} draggable - Draggable instance
   */
  constructor(draggable) {
    super(draggable);

    /**
     * SwapAnimation options
     * @property {Object} options
     * @property {Number} defaultOptions.duration
     * @property {String} defaultOptions.easingFunction
     * @type {Object}
     */
    this.options = _extends({}, defaultOptions, this.getOptions());

    /**
     * Last animation frame
     * @property {Number} lastAnimationFrame
     * @type {Number}
     */
    this.lastAnimationFrame = null;

    this[onSortableSorted] = this[onSortableSorted].bind(this);
  }

  /**
   * Attaches plugins event listeners
   */
  attach() {
    this.draggable.on('sortable:sorted', this[onSortableSorted]);
  }

  /**
   * Detaches plugins event listeners
   */
  detach() {
    this.draggable.off('sortable:sorted', this[onSortableSorted]);
  }

  /**
   * Returns options passed through draggable
   * @return {Object}
   */
  getOptions() {
    return this.draggable.options.swapAnimation || {};
  }

  /**
   * Sortable sorted handler
   * @param {SortableSortedEvent} sortableEvent
   * @private
   */
  [onSortableSorted]({ oldIndex, newIndex, dragEvent }) {
    const { source, over } = dragEvent;

    cancelAnimationFrame(this.lastAnimationFrame);

    // Can be done in a separate frame
    this.lastAnimationFrame = requestAnimationFrame(() => {
      if (oldIndex >= newIndex) {
        animate(source, over, this.options);
      } else {
        animate(over, source, this.options);
      }
    });
  }
}

exports.default = SwapAnimation; /**
                                  * Animates two elements
                                  * @param {HTMLElement} from
                                  * @param {HTMLElement} to
                                  * @param {Object} options
                                  * @param {Number} options.duration
                                  * @param {String} options.easingFunction
                                  * @param {String} options.horizontal
                                  * @private
                                  */

function animate(from, to, { duration, easingFunction, horizontal }) {
  for (const element of [from, to]) {
    element.style.pointerEvents = 'none';
  }

  if (horizontal) {
    const width = from.offsetWidth;
    from.style.transform = `translate3d(${width}px, 0, 0)`;
    to.style.transform = `translate3d(-${width}px, 0, 0)`;
  } else {
    const height = from.offsetHeight;
    from.style.transform = `translate3d(0, ${height}px, 0)`;
    to.style.transform = `translate3d(0, -${height}px, 0)`;
  }

  requestAnimationFrame(() => {
    for (const element of [from, to]) {
      element.addEventListener('transitionend', resetElementOnTransitionEnd);
      element.style.transition = `transform ${duration}ms ${easingFunction}`;
      element.style.transform = '';
    }
  });
}

/**
 * Resets animation style properties after animation has completed
 * @param {Event} event
 * @private
 */
function resetElementOnTransitionEnd(event) {
  event.target.style.transition = '';
  event.target.style.pointerEvents = '';
  event.target.removeEventListener('transitionend', resetElementOnTransitionEnd);
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = undefined;

var _SwapAnimation = __webpack_require__(15);

var _SwapAnimation2 = _interopRequireDefault(_SwapAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SwapAnimation2.default;
exports.defaultOptions = _SwapAnimation.defaultOptions;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractPlugin = __webpack_require__(1);

var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

var _SnappableEvent = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onDragStart = Symbol('onDragStart');
const onDragStop = Symbol('onDragStop');
const onDragOver = Symbol('onDragOver');
const onDragOut = Symbol('onDragOut');
const onMirrorCreated = Symbol('onMirrorCreated');
const onMirrorDestroy = Symbol('onMirrorDestroy');

/**
 * Snappable plugin which snaps draggable elements into place
 * @class Snappable
 * @module Snappable
 * @extends AbstractPlugin
 */
class Snappable extends _AbstractPlugin2.default {
  /**
   * Snappable constructor.
   * @constructs Snappable
   * @param {Draggable} draggable - Draggable instance
   */
  constructor(draggable) {
    super(draggable);

    /**
     * Keeps track of the first source element
     * @property {HTMLElement|null} firstSource
     */
    this.firstSource = null;

    /**
     * Keeps track of the mirror element
     * @property {HTMLElement} mirror
     */
    this.mirror = null;

    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
    this[onDragOut] = this[onDragOut].bind(this);
    this[onMirrorCreated] = this[onMirrorCreated].bind(this);
    this[onMirrorDestroy] = this[onMirrorDestroy].bind(this);
  }

  /**
   * Attaches plugins event listeners
   */
  attach() {
    this.draggable.on('drag:start', this[onDragStart]).on('drag:stop', this[onDragStop]).on('drag:over', this[onDragOver]).on('drag:out', this[onDragOut]).on('droppable:over', this[onDragOver]).on('droppable:out', this[onDragOut]).on('mirror:created', this[onMirrorCreated]).on('mirror:destroy', this[onMirrorDestroy]);
  }

  /**
   * Detaches plugins event listeners
   */
  detach() {
    this.draggable.off('drag:start', this[onDragStart]).off('drag:stop', this[onDragStop]).off('drag:over', this[onDragOver]).off('drag:out', this[onDragOut]).off('droppable:over', this[onDragOver]).off('droppable:out', this[onDragOut]).off('mirror:created', this[onMirrorCreated]).off('mirror:destroy', this[onMirrorDestroy]);
  }

  /**
   * Drag start handler
   * @private
   * @param {DragStartEvent} event - Drag start event
   */
  [onDragStart](event) {
    if (event.canceled()) {
      return;
    }

    this.firstSource = event.source;
  }

  /**
   * Drag stop handler
   * @private
   * @param {DragStopEvent} event - Drag stop event
   */
  [onDragStop]() {
    this.firstSource = null;
  }

  /**
   * Drag over handler
   * @private
   * @param {DragOverEvent|DroppableOverEvent} event - Drag over event
   */
  [onDragOver](event) {
    if (event.canceled()) {
      return;
    }

    const source = event.source || event.dragEvent.source;

    if (source === this.firstSource) {
      this.firstSource = null;
      return;
    }

    const snapInEvent = new _SnappableEvent.SnapInEvent({
      dragEvent: event,
      snappable: event.over || event.droppable
    });

    this.draggable.trigger(snapInEvent);

    if (snapInEvent.canceled()) {
      return;
    }

    if (this.mirror) {
      this.mirror.style.display = 'none';
    }

    source.classList.remove(this.draggable.getClassNameFor('source:dragging'));
    source.classList.add(this.draggable.getClassNameFor('source:placed'));

    // Need to cancel this in drag out
    setTimeout(() => {
      source.classList.remove(this.draggable.getClassNameFor('source:placed'));
    }, this.draggable.options.placedTimeout);
  }

  /**
   * Drag out handler
   * @private
   * @param {DragOutEvent|DroppableOutEvent} event - Drag out event
   */
  [onDragOut](event) {
    if (event.canceled()) {
      return;
    }

    const source = event.source || event.dragEvent.source;

    const snapOutEvent = new _SnappableEvent.SnapOutEvent({
      dragEvent: event,
      snappable: event.over || event.droppable
    });

    this.draggable.trigger(snapOutEvent);

    if (snapOutEvent.canceled()) {
      return;
    }

    if (this.mirror) {
      this.mirror.style.display = '';
    }

    source.classList.add(this.draggable.getClassNameFor('source:dragging'));
  }

  /**
   * Mirror created handler
   * @param {MirrorCreatedEvent} mirrorEvent
   * @private
   */
  [onMirrorCreated]({ mirror }) {
    this.mirror = mirror;
  }

  /**
   * Mirror destroy handler
   * @param {MirrorDestroyEvent} mirrorEvent
   * @private
   */
  [onMirrorDestroy]() {
    this.mirror = null;
  }
}
exports.default = Snappable;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SnapOutEvent = exports.SnapInEvent = exports.SnapEvent = undefined;

var _AbstractEvent = __webpack_require__(0);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base snap event
 * @class SnapEvent
 * @module SnapEvent
 * @extends AbstractEvent
 */
class SnapEvent extends _AbstractEvent2.default {

  /**
   * Drag event that triggered this snap event
   * @property dragEvent
   * @type {DragEvent}
   * @readonly
   */
  get dragEvent() {
    return this.data.dragEvent;
  }

  /**
   * Snappable element
   * @property snappable
   * @type {HTMLElement}
   * @readonly
   */
  get snappable() {
    return this.data.snappable;
  }
}

exports.SnapEvent = SnapEvent; /**
                                * Snap in event
                                * @class SnapInEvent
                                * @module SnapInEvent
                                * @extends SnapEvent
                                */

SnapEvent.type = 'snap';
class SnapInEvent extends SnapEvent {}

exports.SnapInEvent = SnapInEvent; /**
                                    * Snap out event
                                    * @class SnapOutEvent
                                    * @module SnapOutEvent
                                    * @extends SnapEvent
                                    */

SnapInEvent.type = 'snap:in';
SnapInEvent.cancelable = true;
class SnapOutEvent extends SnapEvent {}
exports.SnapOutEvent = SnapOutEvent;
SnapOutEvent.type = 'snap:out';
SnapOutEvent.cancelable = true;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SnappableEvent = __webpack_require__(7);

Object.keys(_SnappableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SnappableEvent[key];
    }
  });
});

var _Snappable = __webpack_require__(17);

var _Snappable2 = _interopRequireDefault(_Snappable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Snappable2.default;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _AbstractPlugin = __webpack_require__(1);

var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onMirrorCreated = Symbol('onMirrorCreated');
const onMirrorDestroy = Symbol('onMirrorDestroy');
const onDragOver = Symbol('onDragOver');
const resize = Symbol('resize');

/**
 * ResizeMirror default options
 * @property {Object} defaultOptions
 * @type {Object}
 */
const defaultOptions = exports.defaultOptions = {};

/**
 * The ResizeMirror plugin resizes the mirror element to the dimensions of the draggable element that the mirror is hovering over
 * @class ResizeMirror
 * @module ResizeMirror
 * @extends AbstractPlugin
 */
class ResizeMirror extends _AbstractPlugin2.default {
  /**
   * ResizeMirror constructor.
   * @constructs ResizeMirror
   * @param {Draggable} draggable - Draggable instance
   */
  constructor(draggable) {
    super(draggable);

    /**
     * ResizeMirror options
     * @property {Object} options
     * @type {Object}
     */
    this.options = _extends({}, defaultOptions, this.getOptions());

    /**
     * ResizeMirror remembers the last width when resizing the mirror
     * to avoid additional writes to the DOM
     * @property {number} lastWidth
     */
    this.lastWidth = 0;

    /**
     * ResizeMirror remembers the last height when resizing the mirror
     * to avoid additional writes to the DOM
     * @property {number} lastHeight
     */
    this.lastHeight = 0;

    /**
     * Keeps track of the mirror element
     * @property {HTMLElement} mirror
     */
    this.mirror = null;

    this[onMirrorCreated] = this[onMirrorCreated].bind(this);
    this[onMirrorDestroy] = this[onMirrorDestroy].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
  }

  /**
   * Attaches plugins event listeners
   */
  attach() {
    this.draggable.on('mirror:created', this[onMirrorCreated]).on('drag:over', this[onDragOver]).on('drag:over:container', this[onDragOver]);
  }

  /**
   * Detaches plugins event listeners
   */
  detach() {
    this.draggable.off('mirror:created', this[onMirrorCreated]).off('mirror:destroy', this[onMirrorDestroy]).off('drag:over', this[onDragOver]).off('drag:over:container', this[onDragOver]);
  }

  /**
   * Returns options passed through draggable
   * @return {Object}
   */
  getOptions() {
    return this.draggable.options.resizeMirror || {};
  }

  /**
   * Mirror created handler
   * @param {MirrorCreatedEvent} mirrorEvent
   * @private
   */
  [onMirrorCreated]({ mirror }) {
    this.mirror = mirror;
  }

  /**
   * Mirror destroy handler
   * @param {MirrorDestroyEvent} mirrorEvent
   * @private
   */
  [onMirrorDestroy]() {
    this.mirror = null;
  }

  /**
   * Drag over handler
   * @param {DragOverEvent | DragOverContainer} dragEvent
   * @private
   */
  [onDragOver](dragEvent) {
    this[resize](dragEvent);
  }

  /**
   * Resize function for
   * @param {DragOverEvent | DragOverContainer} dragEvent
   * @private
   */
  [resize]({ overContainer, over }) {
    requestAnimationFrame(() => {
      if (this.mirror.parentNode !== overContainer) {
        overContainer.appendChild(this.mirror);
      }

      const overElement = over || this.draggable.getDraggableElementsForContainer(overContainer)[0];

      if (!overElement) {
        return;
      }

      (0, _utils.requestNextAnimationFrame)(() => {
        const overRect = overElement.getBoundingClientRect();

        if (this.lastHeight === overRect.height && this.lastWidth === overRect.width) {
          return;
        }

        this.mirror.style.width = `${overRect.width}px`;
        this.mirror.style.height = `${overRect.height}px`;

        this.lastWidth = overRect.width;
        this.lastHeight = overRect.height;
      });
    });
  }
}
exports.default = ResizeMirror;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = undefined;

var _ResizeMirror = __webpack_require__(20);

var _ResizeMirror2 = _interopRequireDefault(_ResizeMirror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ResizeMirror2.default;
exports.defaultOptions = _ResizeMirror.defaultOptions;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractPlugin = __webpack_require__(1);

var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

var _utils = __webpack_require__(2);

var _CollidableEvent = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onDragMove = Symbol('onDragMove');
const onDragStop = Symbol('onDragStop');
const onRequestAnimationFrame = Symbol('onRequestAnimationFrame');

/**
 * Collidable plugin which detects colliding elements while dragging
 * @class Collidable
 * @module Collidable
 * @extends AbstractPlugin
 */
class Collidable extends _AbstractPlugin2.default {
  /**
   * Collidable constructor.
   * @constructs Collidable
   * @param {Draggable} draggable - Draggable instance
   */
  constructor(draggable) {
    super(draggable);

    /**
     * Keeps track of currently colliding elements
     * @property {HTMLElement|null} currentlyCollidingElement
     * @type {HTMLElement|null}
     */
    this.currentlyCollidingElement = null;

    /**
     * Keeps track of currently colliding elements
     * @property {HTMLElement|null} lastCollidingElement
     * @type {HTMLElement|null}
     */
    this.lastCollidingElement = null;

    /**
     * Animation frame for finding colliding elements
     * @property {Number|null} currentAnimationFrame
     * @type {Number|null}
     */
    this.currentAnimationFrame = null;

    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[onRequestAnimationFrame] = this[onRequestAnimationFrame].bind(this);
  }

  /**
   * Attaches plugins event listeners
   */
  attach() {
    this.draggable.on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
  }

  /**
   * Detaches plugins event listeners
   */
  detach() {
    this.draggable.off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
  }

  /**
   * Returns current collidables based on `collidables` option
   * @return {HTMLElement[]}
   */
  getCollidables() {
    const collidables = this.draggable.options.collidables;

    if (typeof collidables === 'string') {
      return Array.prototype.slice.call(document.querySelectorAll(collidables));
    } else if (collidables instanceof NodeList || collidables instanceof Array) {
      return Array.prototype.slice.call(collidables);
    } else if (collidables instanceof HTMLElement) {
      return [collidables];
    } else if (typeof collidables === 'function') {
      return collidables();
    } else {
      return [];
    }
  }

  /**
   * Drag move handler
   * @private
   * @param {DragMoveEvent} event - Drag move event
   */
  [onDragMove](event) {
    const target = event.sensorEvent.target;

    this.currentAnimationFrame = requestAnimationFrame(this[onRequestAnimationFrame](target));

    if (this.currentlyCollidingElement) {
      event.cancel();
    }

    const collidableInEvent = new _CollidableEvent.CollidableInEvent({
      dragEvent: event,
      collidingElement: this.currentlyCollidingElement
    });

    const collidableOutEvent = new _CollidableEvent.CollidableOutEvent({
      dragEvent: event,
      collidingElement: this.lastCollidingElement
    });

    const enteringCollidable = Boolean(this.currentlyCollidingElement && this.lastCollidingElement !== this.currentlyCollidingElement);
    const leavingCollidable = Boolean(!this.currentlyCollidingElement && this.lastCollidingElement);

    if (enteringCollidable) {
      if (this.lastCollidingElement) {
        this.draggable.trigger(collidableOutEvent);
      }

      this.draggable.trigger(collidableInEvent);
    } else if (leavingCollidable) {
      this.draggable.trigger(collidableOutEvent);
    }

    this.lastCollidingElement = this.currentlyCollidingElement;
  }

  /**
   * Drag stop handler
   * @private
   * @param {DragStopEvent} event - Drag stop event
   */
  [onDragStop](event) {
    const lastCollidingElement = this.currentlyCollidingElement || this.lastCollidingElement;
    const collidableOutEvent = new _CollidableEvent.CollidableOutEvent({
      dragEvent: event,
      collidingElement: lastCollidingElement
    });

    if (lastCollidingElement) {
      this.draggable.trigger(collidableOutEvent);
    }

    this.lastCollidingElement = null;
    this.currentlyCollidingElement = null;
  }

  /**
   * Animation frame function
   * @private
   * @param {HTMLElement} target - Current move target
   * @return {Function}
   */
  [onRequestAnimationFrame](target) {
    return () => {
      const collidables = this.getCollidables();
      this.currentlyCollidingElement = (0, _utils.closest)(target, element => collidables.includes(element));
    };
  }
}
exports.default = Collidable;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollidableOutEvent = exports.CollidableInEvent = exports.CollidableEvent = undefined;

var _AbstractEvent = __webpack_require__(0);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base collidable event
 * @class CollidableEvent
 * @module CollidableEvent
 * @extends AbstractEvent
 */
class CollidableEvent extends _AbstractEvent2.default {

  /**
   * Drag event that triggered this colliable event
   * @property dragEvent
   * @type {DragEvent}
   * @readonly
   */
  get dragEvent() {
    return this.data.dragEvent;
  }
}

exports.CollidableEvent = CollidableEvent; /**
                                            * Collidable in event
                                            * @class CollidableInEvent
                                            * @module CollidableInEvent
                                            * @extends CollidableEvent
                                            */

CollidableEvent.type = 'collidable';
class CollidableInEvent extends CollidableEvent {

  /**
   * Element you are currently colliding with
   * @property collidingElement
   * @type {HTMLElement}
   * @readonly
   */
  get collidingElement() {
    return this.data.collidingElement;
  }
}

exports.CollidableInEvent = CollidableInEvent; /**
                                                * Collidable out event
                                                * @class CollidableOutEvent
                                                * @module CollidableOutEvent
                                                * @extends CollidableEvent
                                                */

CollidableInEvent.type = 'collidable:in';
class CollidableOutEvent extends CollidableEvent {

  /**
   * Element you were previously colliding with
   * @property collidingElement
   * @type {HTMLElement}
   * @readonly
   */
  get collidingElement() {
    return this.data.collidingElement;
  }
}
exports.CollidableOutEvent = CollidableOutEvent;
CollidableOutEvent.type = 'collidable:out';

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CollidableEvent = __webpack_require__(8);

Object.keys(_CollidableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CollidableEvent[key];
    }
  });
});

var _Collidable = __webpack_require__(22);

var _Collidable2 = _interopRequireDefault(_Collidable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Collidable2.default;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Collidable = __webpack_require__(24);

Object.defineProperty(exports, 'Collidable', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Collidable).default;
  }
});

var _ResizeMirror = __webpack_require__(21);

Object.defineProperty(exports, 'ResizeMirror', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_ResizeMirror).default;
  }
});
Object.defineProperty(exports, 'defaultResizeMirrorOptions', {
  enumerable: true,
  get: function () {
    return _ResizeMirror.defaultOptions;
  }
});

var _Snappable = __webpack_require__(19);

Object.defineProperty(exports, 'Snappable', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Snappable).default;
  }
});

var _SwapAnimation = __webpack_require__(16);

Object.defineProperty(exports, 'SwapAnimation', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_SwapAnimation).default;
  }
});
Object.defineProperty(exports, 'defaultSwapAnimationOptions', {
  enumerable: true,
  get: function () {
    return _SwapAnimation.defaultOptions;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Draggable = __webpack_require__(5);

var _Draggable2 = _interopRequireDefault(_Draggable);

var _SortableEvent = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onDragStart = Symbol('onDragStart');
const onDragOverContainer = Symbol('onDragOverContainer');
const onDragOver = Symbol('onDragOver');
const onDragStop = Symbol('onDragStop');

/**
 * Returns announcement message when a Draggable element has been sorted with another Draggable element
 * or moved into a new container
 * @param {SortableSortedEvent} sortableEvent
 * @return {String}
 */
function onSortableSortedDefaultAnnouncement({ dragEvent }) {
  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'sortable element';

  if (dragEvent.over) {
    const overText = dragEvent.over.textContent.trim() || dragEvent.over.id || 'sortable element';
    const isFollowing = dragEvent.source.compareDocumentPosition(dragEvent.over) & Node.DOCUMENT_POSITION_FOLLOWING;

    if (isFollowing) {
      return `Placed ${sourceText} after ${overText}`;
    } else {
      return `Placed ${sourceText} before ${overText}`;
    }
  } else {
    // need to figure out how to compute container name
    return `Placed ${sourceText} into a different container`;
  }
}

/**
 * @const {Object} defaultAnnouncements
 * @const {Function} defaultAnnouncements['sortable:sorted']
 */
const defaultAnnouncements = {
  'sortable:sorted': onSortableSortedDefaultAnnouncement
};

/**
 * Sortable is built on top of Draggable and allows sorting of draggable elements. Sortable will keep
 * track of the original index and emits the new index as you drag over draggable elements.
 * @class Sortable
 * @module Sortable
 * @extends Draggable
 */
class Sortable extends _Draggable2.default {
  /**
   * Sortable constructor.
   * @constructs Sortable
   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Sortable containers
   * @param {Object} options - Options for Sortable
   */
  constructor(containers = [], options = {}) {
    super(containers, _extends({}, options, {
      announcements: _extends({}, defaultAnnouncements, options.announcements || {})
    }));

    /**
     * start index of source on drag start
     * @property startIndex
     * @type {Number}
     */
    this.startIndex = null;

    /**
     * start container on drag start
     * @property startContainer
     * @type {HTMLElement}
     * @default null
     */
    this.startContainer = null;

    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragOverContainer] = this[onDragOverContainer].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);

    this.on('drag:start', this[onDragStart]).on('drag:over:container', this[onDragOverContainer]).on('drag:over', this[onDragOver]).on('drag:stop', this[onDragStop]);
  }

  /**
   * Destroys Sortable instance.
   */
  destroy() {
    super.destroy();

    this.off('drag:start', this[onDragStart]).off('drag:over:container', this[onDragOverContainer]).off('drag:over', this[onDragOver]).off('drag:stop', this[onDragStop]);
  }

  /**
   * Returns true index of element within its container during drag operation, i.e. excluding mirror and original source
   * @param {HTMLElement} element - An element
   * @return {Number}
   */
  index(element) {
    return this.getDraggableElementsForContainer(element.parentNode).indexOf(element);
  }

  /**
   * Drag start handler
   * @private
   * @param {DragStartEvent} event - Drag start event
   */
  [onDragStart](event) {
    this.startContainer = event.source.parentNode;
    this.startIndex = this.index(event.source);

    const sortableStartEvent = new _SortableEvent.SortableStartEvent({
      dragEvent: event,
      startIndex: this.startIndex,
      startContainer: this.startContainer
    });

    this.trigger(sortableStartEvent);

    if (sortableStartEvent.canceled()) {
      event.cancel();
    }
  }

  /**
   * Drag over container handler
   * @private
   * @param {DragOverContainerEvent} event - Drag over container event
   */
  [onDragOverContainer](event) {
    if (event.canceled()) {
      return;
    }

    const { source, over, overContainer } = event;
    const oldIndex = this.index(source);

    const sortableSortEvent = new _SortableEvent.SortableSortEvent({
      dragEvent: event,
      currentIndex: oldIndex,
      source,
      over
    });

    this.trigger(sortableSortEvent);

    if (sortableSortEvent.canceled()) {
      return;
    }

    const children = this.getDraggableElementsForContainer(overContainer);
    const moves = move({ source, over, overContainer, children });

    if (!moves) {
      return;
    }

    const { oldContainer, newContainer } = moves;
    const newIndex = this.index(event.source);

    const sortableSortedEvent = new _SortableEvent.SortableSortedEvent({
      dragEvent: event,
      oldIndex,
      newIndex,
      oldContainer,
      newContainer
    });

    this.trigger(sortableSortedEvent);
  }

  /**
   * Drag over handler
   * @private
   * @param {DragOverEvent} event - Drag over event
   */
  [onDragOver](event) {
    if (event.over === event.originalSource || event.over === event.source) {
      return;
    }

    const { source, over, overContainer } = event;
    const oldIndex = this.index(source);

    const sortableSortEvent = new _SortableEvent.SortableSortEvent({
      dragEvent: event,
      currentIndex: oldIndex,
      source,
      over
    });

    this.trigger(sortableSortEvent);

    if (sortableSortEvent.canceled()) {
      return;
    }

    const children = this.getDraggableElementsForContainer(overContainer);
    const moves = move({ source, over, overContainer, children });

    if (!moves) {
      return;
    }

    const { oldContainer, newContainer } = moves;
    const newIndex = this.index(source);

    const sortableSortedEvent = new _SortableEvent.SortableSortedEvent({
      dragEvent: event,
      oldIndex,
      newIndex,
      oldContainer,
      newContainer
    });

    this.trigger(sortableSortedEvent);
  }

  /**
   * Drag stop handler
   * @private
   * @param {DragStopEvent} event - Drag stop event
   */
  [onDragStop](event) {
    const sortableStopEvent = new _SortableEvent.SortableStopEvent({
      dragEvent: event,
      oldIndex: this.startIndex,
      newIndex: this.index(event.source),
      oldContainer: this.startContainer,
      newContainer: event.source.parentNode
    });

    this.trigger(sortableStopEvent);

    this.startIndex = null;
    this.startContainer = null;
  }
}

exports.default = Sortable;
function index(element) {
  return Array.prototype.indexOf.call(element.parentNode.children, element);
}

function move({ source, over, overContainer, children }) {
  const emptyOverContainer = !children.length;
  const differentContainer = source.parentNode !== overContainer;
  const sameContainer = over && !differentContainer;

  if (emptyOverContainer) {
    return moveInsideEmptyContainer(source, overContainer);
  } else if (sameContainer) {
    return moveWithinContainer(source, over);
  } else if (differentContainer) {
    return moveOutsideContainer(source, over, overContainer);
  } else {
    return null;
  }
}

function moveInsideEmptyContainer(source, overContainer) {
  const oldContainer = source.parentNode;

  overContainer.appendChild(source);

  return { oldContainer, newContainer: overContainer };
}

function moveWithinContainer(source, over) {
  const oldIndex = index(source);
  const newIndex = index(over);

  if (oldIndex < newIndex) {
    source.parentNode.insertBefore(source, over.nextElementSibling);
  } else {
    source.parentNode.insertBefore(source, over);
  }

  return { oldContainer: source.parentNode, newContainer: source.parentNode };
}

function moveOutsideContainer(source, over, overContainer) {
  const oldContainer = source.parentNode;

  if (over) {
    over.parentNode.insertBefore(source, over);
  } else {
    // need to figure out proper position
    overContainer.appendChild(source);
  }

  return { oldContainer, newContainer: source.parentNode };
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortableStopEvent = exports.SortableSortedEvent = exports.SortableSortEvent = exports.SortableStartEvent = exports.SortableEvent = undefined;

var _AbstractEvent = __webpack_require__(0);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base sortable event
 * @class SortableEvent
 * @module SortableEvent
 * @extends AbstractEvent
 */
class SortableEvent extends _AbstractEvent2.default {

  /**
   * Original drag event that triggered this sortable event
   * @property dragEvent
   * @type {DragEvent}
   * @readonly
   */
  get dragEvent() {
    return this.data.dragEvent;
  }
}

exports.SortableEvent = SortableEvent; /**
                                        * Sortable start event
                                        * @class SortableStartEvent
                                        * @module SortableStartEvent
                                        * @extends SortableEvent
                                        */

SortableEvent.type = 'sortable';
class SortableStartEvent extends SortableEvent {

  /**
   * Start index of source on sortable start
   * @property startIndex
   * @type {Number}
   * @readonly
   */
  get startIndex() {
    return this.data.startIndex;
  }

  /**
   * Start container on sortable start
   * @property startContainer
   * @type {HTMLElement}
   * @readonly
   */
  get startContainer() {
    return this.data.startContainer;
  }
}

exports.SortableStartEvent = SortableStartEvent; /**
                                                  * Sortable sort event
                                                  * @class SortableSortEvent
                                                  * @module SortableSortEvent
                                                  * @extends SortableEvent
                                                  */

SortableStartEvent.type = 'sortable:start';
SortableStartEvent.cancelable = true;
class SortableSortEvent extends SortableEvent {

  /**
   * Index of current draggable element
   * @property currentIndex
   * @type {Number}
   * @readonly
   */
  get currentIndex() {
    return this.data.currentIndex;
  }

  /**
   * Draggable element you are hovering over
   * @property over
   * @type {HTMLElement}
   * @readonly
   */
  get over() {
    return this.data.oldIndex;
  }

  /**
   * Draggable container element you are hovering over
   * @property overContainer
   * @type {HTMLElement}
   * @readonly
   */
  get overContainer() {
    return this.data.newIndex;
  }
}

exports.SortableSortEvent = SortableSortEvent; /**
                                                * Sortable sorted event
                                                * @class SortableSortedEvent
                                                * @module SortableSortedEvent
                                                * @extends SortableEvent
                                                */

SortableSortEvent.type = 'sortable:sort';
SortableSortEvent.cancelable = true;
class SortableSortedEvent extends SortableEvent {

  /**
   * Index of last sorted event
   * @property oldIndex
   * @type {Number}
   * @readonly
   */
  get oldIndex() {
    return this.data.oldIndex;
  }

  /**
   * New index of this sorted event
   * @property newIndex
   * @type {Number}
   * @readonly
   */
  get newIndex() {
    return this.data.newIndex;
  }

  /**
   * Old container of draggable element
   * @property oldContainer
   * @type {HTMLElement}
   * @readonly
   */
  get oldContainer() {
    return this.data.oldContainer;
  }

  /**
   * New container of draggable element
   * @property newContainer
   * @type {HTMLElement}
   * @readonly
   */
  get newContainer() {
    return this.data.newContainer;
  }
}

exports.SortableSortedEvent = SortableSortedEvent; /**
                                                    * Sortable stop event
                                                    * @class SortableStopEvent
                                                    * @module SortableStopEvent
                                                    * @extends SortableEvent
                                                    */

SortableSortedEvent.type = 'sortable:sorted';
class SortableStopEvent extends SortableEvent {

  /**
   * Original index on sortable start
   * @property oldIndex
   * @type {Number}
   * @readonly
   */
  get oldIndex() {
    return this.data.oldIndex;
  }

  /**
   * New index of draggable element
   * @property newIndex
   * @type {Number}
   * @readonly
   */
  get newIndex() {
    return this.data.newIndex;
  }

  /**
   * Original container of draggable element
   * @property oldContainer
   * @type {HTMLElement}
   * @readonly
   */
  get oldContainer() {
    return this.data.oldContainer;
  }

  /**
   * New container of draggable element
   * @property newContainer
   * @type {HTMLElement}
   * @readonly
   */
  get newContainer() {
    return this.data.newContainer;
  }
}
exports.SortableStopEvent = SortableStopEvent;
SortableStopEvent.type = 'sortable:stop';

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SortableEvent = __webpack_require__(9);

Object.keys(_SortableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SortableEvent[key];
    }
  });
});

var _Sortable = __webpack_require__(26);

var _Sortable2 = _interopRequireDefault(_Sortable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Sortable2.default;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Draggable = __webpack_require__(5);

var _Draggable2 = _interopRequireDefault(_Draggable);

var _SwappableEvent = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onDragStart = Symbol('onDragStart');
const onDragOver = Symbol('onDragOver');
const onDragStop = Symbol('onDragStop');

/**
 * Returns an announcement message when the Draggable element is swapped with another draggable element
 * @param {SwappableSwappedEvent} swappableEvent
 * @return {String}
 */
function onSwappableSwappedDefaultAnnouncement({ dragEvent, swappedElement }) {
  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'swappable element';
  const overText = swappedElement.textContent.trim() || swappedElement.id || 'swappable element';

  return `Swapped ${sourceText} with ${overText}`;
}

/**
 * @const {Object} defaultAnnouncements
 * @const {Function} defaultAnnouncements['swappabled:swapped']
 */
const defaultAnnouncements = {
  'swappabled:swapped': onSwappableSwappedDefaultAnnouncement
};

/**
 * Swappable is built on top of Draggable and allows swapping of draggable elements.
 * Order is irrelevant to Swappable.
 * @class Swappable
 * @module Swappable
 * @extends Draggable
 */
class Swappable extends _Draggable2.default {
  /**
   * Swappable constructor.
   * @constructs Swappable
   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Swappable containers
   * @param {Object} options - Options for Swappable
   */
  constructor(containers = [], options = {}) {
    super(containers, _extends({}, options, {
      announcements: _extends({}, defaultAnnouncements, options.announcements || {})
    }));

    /**
     * Last draggable element that was dragged over
     * @property lastOver
     * @type {HTMLElement}
     */
    this.lastOver = null;

    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);

    this.on('drag:start', this[onDragStart]).on('drag:over', this[onDragOver]).on('drag:stop', this[onDragStop]);
  }

  /**
   * Destroys Swappable instance.
   */
  destroy() {
    super.destroy();

    this.off('drag:start', this._onDragStart).off('drag:over', this._onDragOver).off('drag:stop', this._onDragStop);
  }

  /**
   * Drag start handler
   * @private
   * @param {DragStartEvent} event - Drag start event
   */
  [onDragStart](event) {
    const swappableStartEvent = new _SwappableEvent.SwappableStartEvent({
      dragEvent: event
    });

    this.trigger(swappableStartEvent);

    if (swappableStartEvent.canceled()) {
      event.cancel();
    }
  }

  /**
   * Drag over handler
   * @private
   * @param {DragOverEvent} event - Drag over event
   */
  [onDragOver](event) {
    if (event.over === event.originalSource || event.over === event.source || event.canceled()) {
      return;
    }

    const swappableSwapEvent = new _SwappableEvent.SwappableSwapEvent({
      dragEvent: event,
      over: event.over,
      overContainer: event.overContainer
    });

    this.trigger(swappableSwapEvent);

    if (swappableSwapEvent.canceled()) {
      return;
    }

    // swap originally swapped element back
    if (this.lastOver && this.lastOver !== event.over) {
      swap(this.lastOver, event.source);
    }

    if (this.lastOver === event.over) {
      this.lastOver = null;
    } else {
      this.lastOver = event.over;
    }

    swap(event.source, event.over);

    const swappableSwappedEvent = new _SwappableEvent.SwappableSwappedEvent({
      dragEvent: event,
      swappedElement: event.over
    });

    this.trigger(swappableSwappedEvent);
  }

  /**
   * Drag stop handler
   * @private
   * @param {DragStopEvent} event - Drag stop event
   */
  [onDragStop](event) {
    const swappableStopEvent = new _SwappableEvent.SwappableStopEvent({
      dragEvent: event
    });

    this.trigger(swappableStopEvent);
    this.lastOver = null;
  }
}

exports.default = Swappable;
function withTempElement(callback) {
  const tmpElement = document.createElement('div');
  callback(tmpElement);
  tmpElement.parentNode.removeChild(tmpElement);
}

function swap(source, over) {
  const overParent = over.parentNode;
  const sourceParent = source.parentNode;

  withTempElement(tmpElement => {
    sourceParent.insertBefore(tmpElement, source);
    overParent.insertBefore(source, over);
    sourceParent.insertBefore(over, tmpElement);
  });
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwappableStopEvent = exports.SwappableSwappedEvent = exports.SwappableSwapEvent = exports.SwappableStartEvent = exports.SwappableEvent = undefined;

var _AbstractEvent = __webpack_require__(0);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base swappable event
 * @class SwappableEvent
 * @module SwappableEvent
 * @extends AbstractEvent
 */
class SwappableEvent extends _AbstractEvent2.default {

  /**
   * Original drag event that triggered this swappable event
   * @property dragEvent
   * @type {DragEvent}
   * @readonly
   */
  get dragEvent() {
    return this.data.dragEvent;
  }
}

exports.SwappableEvent = SwappableEvent; /**
                                          * Swappable start event
                                          * @class SwappableStartEvent
                                          * @module SwappableStartEvent
                                          * @extends SwappableEvent
                                          */

SwappableEvent.type = 'swappable';
class SwappableStartEvent extends SwappableEvent {}

exports.SwappableStartEvent = SwappableStartEvent; /**
                                                    * Swappable swap event
                                                    * @class SwappableSwapEvent
                                                    * @module SwappableSwapEvent
                                                    * @extends SwappableEvent
                                                    */

SwappableStartEvent.type = 'swappable:start';
SwappableStartEvent.cancelable = true;
class SwappableSwapEvent extends SwappableEvent {

  /**
   * Draggable element you are over
   * @property over
   * @type {HTMLElement}
   * @readonly
   */
  get over() {
    return this.data.over;
  }

  /**
   * Draggable container you are over
   * @property overContainer
   * @type {HTMLElement}
   * @readonly
   */
  get overContainer() {
    return this.data.overContainer;
  }
}

exports.SwappableSwapEvent = SwappableSwapEvent; /**
                                                  * Swappable swapped event
                                                  * @class SwappableSwappedEvent
                                                  * @module SwappableSwappedEvent
                                                  * @extends SwappableEvent
                                                  */

SwappableSwapEvent.type = 'swappable:swap';
SwappableSwapEvent.cancelable = true;
class SwappableSwappedEvent extends SwappableEvent {

  /**
   * The draggable element that you swapped with
   * @property swappedElement
   * @type {HTMLElement}
   * @readonly
   */
  get swappedElement() {
    return this.data.swappedElement;
  }
}

exports.SwappableSwappedEvent = SwappableSwappedEvent; /**
                                                        * Swappable stop event
                                                        * @class SwappableStopEvent
                                                        * @module SwappableStopEvent
                                                        * @extends SwappableEvent
                                                        */

SwappableSwappedEvent.type = 'swappable:swapped';
class SwappableStopEvent extends SwappableEvent {}
exports.SwappableStopEvent = SwappableStopEvent;
SwappableStopEvent.type = 'swappable:stop';

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SwappableEvent = __webpack_require__(10);

Object.keys(_SwappableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SwappableEvent[key];
    }
  });
});

var _Swappable = __webpack_require__(29);

var _Swappable2 = _interopRequireDefault(_Swappable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Swappable2.default;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(2);

var _Draggable = __webpack_require__(5);

var _Draggable2 = _interopRequireDefault(_Draggable);

var _DroppableEvent = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onDragStart = Symbol('onDragStart');
const onDragMove = Symbol('onDragMove');
const onDragStop = Symbol('onDragStop');
const dropInDropzone = Symbol('dropInDropZone');
const returnToOriginalDropzone = Symbol('returnToOriginalDropzone');
const closestDropzone = Symbol('closestDropzone');
const getDropzones = Symbol('getDropzones');

/**
 * Returns an announcement message when the Draggable element is dropped into a dropzone element
 * @param {DroppableDroppedEvent} droppableEvent
 * @return {String}
 */
function onDroppableDroppedDefaultAnnouncement({ dragEvent, dropzone }) {
  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'draggable element';
  const dropzoneText = dropzone.textContent.trim() || dropzone.id || 'droppable element';

  return `Dropped ${sourceText} into ${dropzoneText}`;
}

/**
 * Returns an announcement message when the Draggable element has returned to its original dropzone element
 * @param {DroppableReturnedEvent} droppableEvent
 * @return {String}
 */
function onDroppableReturnedDefaultAnnouncement({ dragEvent, dropzone }) {
  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'draggable element';
  const dropzoneText = dropzone.textContent.trim() || dropzone.id || 'droppable element';

  return `Returned ${sourceText} from ${dropzoneText}`;
}

/**
 * @const {Object} defaultAnnouncements
 * @const {Function} defaultAnnouncements['droppable:dropped']
 * @const {Function} defaultAnnouncements['droppable:returned']
 */
const defaultAnnouncements = {
  'droppable:dropped': onDroppableDroppedDefaultAnnouncement,
  'droppable:returned': onDroppableReturnedDefaultAnnouncement
};

const defaultClasses = {
  'droppable:active': 'draggable-dropzone--active',
  'droppable:occupied': 'draggable-dropzone--occupied'
};

const defaultOptions = {
  dropzone: '.draggable-droppable'
};

/**
 * Droppable is built on top of Draggable and allows dropping draggable elements
 * into dropzone element
 * @class Droppable
 * @module Droppable
 * @extends Draggable
 */
class Droppable extends _Draggable2.default {
  /**
   * Droppable constructor.
   * @constructs Droppable
   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Droppable containers
   * @param {Object} options - Options for Droppable
   */
  constructor(containers = [], options = {}) {
    super(containers, _extends({}, defaultOptions, options, {
      classes: _extends({}, defaultClasses, options.classes || {}),
      announcements: _extends({}, defaultAnnouncements, options.announcements || {})
    }));

    /**
     * All dropzone elements on drag start
     * @property dropzones
     * @type {HTMLElement[]}
     */
    this.dropzones = null;

    /**
     * Last dropzone element that the source was dropped into
     * @property lastDropzone
     * @type {HTMLElement}
     */
    this.lastDropzone = null;

    /**
     * Initial dropzone element that the source was drag from
     * @property initialDropzone
     * @type {HTMLElement}
     */
    this.initialDropzone = null;

    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);

    this.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
  }

  /**
   * Destroys Droppable instance.
   */
  destroy() {
    super.destroy();

    this.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
  }

  /**
   * Drag start handler
   * @private
   * @param {DragStartEvent} event - Drag start event
   */
  [onDragStart](event) {
    if (event.canceled()) {
      return;
    }

    this.dropzones = [...this[getDropzones]()];
    const dropzone = (0, _utils.closest)(event.sensorEvent.target, this.options.dropzone);

    if (!dropzone) {
      event.cancel();
      return;
    }

    const droppableStartEvent = new _DroppableEvent.DroppableStartEvent({
      dragEvent: event,
      dropzone
    });

    this.trigger(droppableStartEvent);

    if (droppableStartEvent.canceled()) {
      event.cancel();
      return;
    }

    this.initialDropzone = dropzone;

    for (const dropzoneElement of this.dropzones) {
      if (dropzoneElement.classList.contains(this.getClassNameFor('droppable:occupied'))) {
        continue;
      }

      dropzoneElement.classList.add(this.getClassNameFor('droppable:active'));
    }
  }

  /**
   * Drag move handler
   * @private
   * @param {DragMoveEvent} event - Drag move event
   */
  [onDragMove](event) {
    if (event.canceled()) {
      return;
    }

    const dropzone = this[closestDropzone](event.sensorEvent.target);
    const overEmptyDropzone = dropzone && !dropzone.classList.contains(this.getClassNameFor('droppable:occupied'));

    if (overEmptyDropzone && this[dropInDropzone](event, dropzone)) {
      this.lastDropzone = dropzone;
    } else if ((!dropzone || dropzone === this.initialDropzone) && this.lastDropzone) {
      this[returnToOriginalDropzone](event);
      this.lastDropzone = null;
    }
  }

  /**
   * Drag stop handler
   * @private
   * @param {DragStopEvent} event - Drag stop event
   */
  [onDragStop](event) {
    const droppableStopEvent = new _DroppableEvent.DroppableStopEvent({
      dragEvent: event,
      dropzone: this.lastDropzone || this.initialDropzone
    });

    this.trigger(droppableStopEvent);

    const occupiedClass = this.getClassNameFor('droppable:occupied');

    for (const dropzone of this.dropzones) {
      dropzone.classList.remove(this.getClassNameFor('droppable:active'));
    }

    if (this.lastDropzone && this.lastDropzone !== this.initialDropzone) {
      this.initialDropzone.classList.remove(occupiedClass);
    }

    this.dropzones = null;
    this.lastDropzone = null;
    this.initialDropzone = null;
  }

  /**
   * Drops a draggable element into a dropzone element
   * @private
   * @param {DragMoveEvent} event - Drag move event
   * @param {HTMLElement} dropzone - Dropzone element to drop draggable into
   */
  [dropInDropzone](event, dropzone) {
    const droppableDroppedEvent = new _DroppableEvent.DroppableDroppedEvent({
      dragEvent: event,
      dropzone
    });

    this.trigger(droppableDroppedEvent);

    if (droppableDroppedEvent.canceled()) {
      return false;
    }

    const occupiedClass = this.getClassNameFor('droppable:occupied');

    if (this.lastDropzone) {
      this.lastDropzone.classList.remove(occupiedClass);
    }

    dropzone.appendChild(event.source);
    dropzone.classList.add(occupiedClass);

    return true;
  }

  /**
   * Moves the previously dropped element back into its original dropzone
   * @private
   * @param {DragMoveEvent} event - Drag move event
   */
  [returnToOriginalDropzone](event) {
    const droppableReturnedEvent = new _DroppableEvent.DroppableReturnedEvent({
      dragEvent: event,
      dropzone: this.lastDropzone
    });

    this.trigger(droppableReturnedEvent);

    if (droppableReturnedEvent.canceled()) {
      return;
    }

    this.initialDropzone.appendChild(event.source);
    this.lastDropzone.classList.remove(this.getClassNameFor('droppable:occupied'));
  }

  /**
   * Returns closest dropzone element for even target
   * @private
   * @param {HTMLElement} target - Event target
   * @return {HTMLElement|null}
   */
  [closestDropzone](target) {
    if (!this.dropzones) {
      return null;
    }

    return (0, _utils.closest)(target, this.dropzones);
  }

  /**
   * Returns all current dropzone elements for this draggable instance
   * @private
   * @return {NodeList|HTMLElement[]|Array}
   */
  [getDropzones]() {
    const dropzone = this.options.dropzone;

    if (typeof dropzone === 'string') {
      return document.querySelectorAll(dropzone);
    } else if (dropzone instanceof NodeList || dropzone instanceof Array) {
      return dropzone;
    } else if (typeof dropzone === 'function') {
      return dropzone();
    } else {
      return [];
    }
  }
}
exports.default = Droppable;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DroppableStopEvent = exports.DroppableReturnedEvent = exports.DroppableDroppedEvent = exports.DroppableStartEvent = exports.DroppableEvent = undefined;

var _AbstractEvent = __webpack_require__(0);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base droppable event
 * @class DroppableEvent
 * @module DroppableEvent
 * @extends AbstractEvent
 */
class DroppableEvent extends _AbstractEvent2.default {

  /**
   * Original drag event that triggered this droppable event
   * @property dragEvent
   * @type {DragEvent}
   * @readonly
   */
  get dragEvent() {
    return this.data.dragEvent;
  }
}

exports.DroppableEvent = DroppableEvent; /**
                                          * Droppable start event
                                          * @class DroppableStartEvent
                                          * @module DroppableStartEvent
                                          * @extends DroppableEvent
                                          */

DroppableEvent.type = 'droppable';
class DroppableStartEvent extends DroppableEvent {

  /**
   * The initial dropzone element of the currently dragging draggable element
   * @property dropzone
   * @type {HTMLElement}
   * @readonly
   */
  get dropzone() {
    return this.data.dropzone;
  }
}

exports.DroppableStartEvent = DroppableStartEvent; /**
                                                    * Droppable dropped event
                                                    * @class DroppableDroppedEvent
                                                    * @module DroppableDroppedEvent
                                                    * @extends DroppableEvent
                                                    */

DroppableStartEvent.type = 'droppable:start';
DroppableStartEvent.cancelable = true;
class DroppableDroppedEvent extends DroppableEvent {

  /**
   * The dropzone element you dropped the draggable element into
   * @property dropzone
   * @type {HTMLElement}
   * @readonly
   */
  get dropzone() {
    return this.data.dropzone;
  }
}

exports.DroppableDroppedEvent = DroppableDroppedEvent; /**
                                                        * Droppable returned event
                                                        * @class DroppableReturnedEvent
                                                        * @module DroppableReturnedEvent
                                                        * @extends DroppableEvent
                                                        */

DroppableDroppedEvent.type = 'droppable:dropped';
DroppableDroppedEvent.cancelable = true;
class DroppableReturnedEvent extends DroppableEvent {

  /**
   * The dropzone element you dragged away from
   * @property dropzone
   * @type {HTMLElement}
   * @readonly
   */
  get dropzone() {
    return this.data.dropzone;
  }
}

exports.DroppableReturnedEvent = DroppableReturnedEvent; /**
                                                          * Droppable stop event
                                                          * @class DroppableStopEvent
                                                          * @module DroppableStopEvent
                                                          * @extends DroppableEvent
                                                          */

DroppableReturnedEvent.type = 'droppable:returned';
DroppableReturnedEvent.cancelable = true;
class DroppableStopEvent extends DroppableEvent {

  /**
   * The final dropzone element of the draggable element
   * @property dropzone
   * @type {HTMLElement}
   * @readonly
   */
  get dropzone() {
    return this.data.dropzone;
  }
}
exports.DroppableStopEvent = DroppableStopEvent;
DroppableStopEvent.type = 'droppable:stop';
DroppableStopEvent.cancelable = true;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DroppableEvent = __webpack_require__(11);

Object.keys(_DroppableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DroppableEvent[key];
    }
  });
});

var _Droppable = __webpack_require__(32);

var _Droppable2 = _interopRequireDefault(_Droppable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Droppable2.default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * The Emitter is a simple emitter class that provides you with `on()`, `off()` and `trigger()` methods
 * @class Emitter
 * @module Emitter
 */
class Emitter {
  constructor() {
    this.callbacks = {};
  }

  /**
   * Registers callbacks by event name
   * @param {String} type
   * @param {...Function} callbacks
   */
  on(type, ...callbacks) {
    if (!this.callbacks[type]) {
      this.callbacks[type] = [];
    }

    this.callbacks[type].push(...callbacks);

    return this;
  }

  /**
   * Unregisters callbacks by event name
   * @param {String} type
   * @param {Function} callback
   */
  off(type, callback) {
    if (!this.callbacks[type]) {
      return null;
    }

    const copy = this.callbacks[type].slice(0);

    for (let i = 0; i < copy.length; i++) {
      if (callback === copy[i]) {
        this.callbacks[type].splice(i, 1);
      }
    }

    return this;
  }

  /**
   * Triggers event callbacks by event object
   * @param {AbstractEvent} event
   */
  trigger(event) {
    if (!this.callbacks[event.type]) {
      return null;
    }

    const callbacks = [...this.callbacks[event.type]];
    const caughtErrors = [];

    for (let i = callbacks.length - 1; i >= 0; i--) {
      const callback = callbacks[i];

      try {
        callback(event);
      } catch (error) {
        caughtErrors.push(error);
      }
    }

    if (caughtErrors.length) {
      /* eslint-disable no-console */
      console.error(`Draggable caught errors while triggering '${event.type}'`, caughtErrors);
      /* eslint-disable no-console */
    }

    return this;
  }
}
exports.default = Emitter;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Emitter = __webpack_require__(35);

var _Emitter2 = _interopRequireDefault(_Emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Emitter2.default;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(2);

var _Plugins = __webpack_require__(12);

var _Emitter = __webpack_require__(36);

var _Emitter2 = _interopRequireDefault(_Emitter);

var _Sensors = __webpack_require__(6);

var _DraggableEvent = __webpack_require__(13);

var _DragEvent = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onDragStart = Symbol('onDragStart');
const onDragMove = Symbol('onDragMove');
const onDragStop = Symbol('onDragStop');
const onDragPressure = Symbol('onDragPressure');

/**
 * @const {Object} defaultAnnouncements
 * @const {Function} defaultAnnouncements['drag:start']
 * @const {Function} defaultAnnouncements['drag:stop']
 */
const defaultAnnouncements = {
  'drag:start': event => `Picked up ${event.source.textContent.trim() || event.source.id || 'draggable element'}`,
  'drag:stop': event => `Released ${event.source.textContent.trim() || event.source.id || 'draggable element'}`
};

const defaultClasses = {
  'container:dragging': 'draggable-container--is-dragging',
  'source:dragging': 'draggable-source--is-dragging',
  'source:placed': 'draggable-source--placed',
  'container:placed': 'draggable-container--placed',
  'body:dragging': 'draggable--is-dragging',
  'draggable:over': 'draggable--over',
  'container:over': 'draggable-container--over',
  'source:original': 'draggable--original',
  mirror: 'draggable-mirror'
};

const defaultOptions = exports.defaultOptions = {
  draggable: '.draggable-source',
  handle: null,
  delay: 100,
  placedTimeout: 800,
  plugins: [],
  sensors: []
};

/**
 * This is the core draggable library that does the heavy lifting
 * @class Draggable
 * @module Draggable
 */
class Draggable {

  /**
   * Draggable constructor.
   * @constructs Draggable
   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Draggable containers
   * @param {Object} options - Options for draggable
   */
  constructor(containers = [document.body], options = {}) {
    /**
     * Draggable containers
     * @property containers
     * @type {HTMLElement[]}
     */
    if (containers instanceof NodeList || containers instanceof Array) {
      this.containers = [...containers];
    } else if (containers instanceof HTMLElement) {
      this.containers = [containers];
    } else {
      throw new Error('Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`');
    }

    this.options = _extends({}, defaultOptions, options, {
      classes: _extends({}, defaultClasses, options.classes || {}),
      announcements: _extends({}, defaultAnnouncements, options.announcements || {})
    });

    /**
     * Draggables event emitter
     * @property emitter
     * @type {Emitter}
     */
    this.emitter = new _Emitter2.default();

    /**
     * Current drag state
     * @property dragging
     * @type {Boolean}
     */
    this.dragging = false;

    /**
     * Active plugins
     * @property plugins
     * @type {Plugin[]}
     */
    this.plugins = [];

    /**
     * Active sensors
     * @property sensors
     * @type {Sensor[]}
     */
    this.sensors = [];

    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[onDragPressure] = this[onDragPressure].bind(this);

    document.addEventListener('drag:start', this[onDragStart], true);
    document.addEventListener('drag:move', this[onDragMove], true);
    document.addEventListener('drag:stop', this[onDragStop], true);
    document.addEventListener('drag:pressure', this[onDragPressure], true);

    const defaultPlugins = Object.values(Draggable.Plugins).map(Plugin => Plugin);
    const defaultSensors = [_Sensors.MouseSensor, _Sensors.TouchSensor];

    this.addPlugin(...[...defaultPlugins, ...this.options.plugins]);
    this.addSensor(...[...defaultSensors, ...this.options.sensors]);

    const draggableInitializedEvent = new _DraggableEvent.DraggableInitializedEvent({
      draggable: this
    });

    this.on('mirror:created', ({ mirror }) => this.mirror = mirror);
    this.on('mirror:destroy', () => this.mirror = null);

    this.trigger(draggableInitializedEvent);
  }

  /**
   * Destroys Draggable instance. This removes all internal event listeners and
   * deactivates sensors and plugins
   */

  /**
   * Default plugins draggable uses
   * @static
   * @property {Object} Plugins
   * @property {Announcement} Plugins.Announcement
   * @property {Focusable} Plugins.Focusable
   * @property {Mirror} Plugins.Mirror
   * @property {Scrollable} Plugins.Scrollable
   * @type {Object}
   */
  destroy() {
    document.removeEventListener('drag:start', this[onDragStart], true);
    document.removeEventListener('drag:move', this[onDragMove], true);
    document.removeEventListener('drag:stop', this[onDragStop], true);
    document.removeEventListener('drag:pressure', this[onDragPressure], true);

    const draggableDestroyEvent = new _DraggableEvent.DraggableDestroyEvent({
      draggable: this
    });

    this.trigger(draggableDestroyEvent);

    this.removePlugin(...this.plugins.map(plugin => plugin.constructor));
    this.removeSensor(...this.sensors.map(sensor => sensor.constructor));
  }

  /**
   * Adds plugin to this draggable instance. This will end up calling the attach method of the plugin
   * @param {...typeof Plugin} plugins - Plugins that you want attached to draggable
   * @return {Draggable}
   * @example draggable.addPlugin(CustomA11yPlugin, CustomMirrorPlugin)
   */
  addPlugin(...plugins) {
    const activePlugins = plugins.map(Plugin => new Plugin(this));

    activePlugins.forEach(plugin => plugin.attach());
    this.plugins = [...this.plugins, ...activePlugins];

    return this;
  }

  /**
   * Removes plugins that are already attached to this draggable instance. This will end up calling
   * the detach method of the plugin
   * @param {...typeof Plugin} plugins - Plugins that you want detached from draggable
   * @return {Draggable}
   * @example draggable.removePlugin(MirrorPlugin, CustomMirrorPlugin)
   */
  removePlugin(...plugins) {
    const removedPlugins = this.plugins.filter(plugin => plugins.includes(plugin.constructor));

    removedPlugins.forEach(plugin => plugin.detach());
    this.plugins = this.plugins.filter(plugin => !plugins.includes(plugin.constructor));

    return this;
  }

  /**
   * Adds sensors to this draggable instance. This will end up calling the attach method of the sensor
   * @param {...typeof Sensor} sensors - Sensors that you want attached to draggable
   * @return {Draggable}
   * @example draggable.addSensor(ForceTouchSensor, CustomSensor)
   */
  addSensor(...sensors) {
    const activeSensors = sensors.map(Sensor => new Sensor(this.containers, this.options));

    activeSensors.forEach(sensor => sensor.attach());
    this.sensors = [...this.sensors, ...activeSensors];

    return this;
  }

  /**
   * Removes sensors that are already attached to this draggable instance. This will end up calling
   * the detach method of the sensor
   * @param {...typeof Sensor} sensors - Sensors that you want attached to draggable
   * @return {Draggable}
   * @example draggable.removeSensor(TouchSensor, DragSensor)
   */
  removeSensor(...sensors) {
    const removedSensors = this.sensors.filter(sensor => sensors.includes(sensor.constructor));

    removedSensors.forEach(sensor => sensor.detach());
    this.sensors = this.sensors.filter(sensor => !sensors.includes(sensor.constructor));

    return this;
  }

  /**
   * Adds container to this draggable instance
   * @param {...HTMLElement} containers - Containers you want to add to draggable
   * @return {Draggable}
   * @example draggable.addContainer(document.body)
   */
  addContainer(...containers) {
    this.containers = [...this.containers, ...containers];
    this.sensors.forEach(sensor => sensor.addContainer(...containers));
    return this;
  }

  /**
   * Removes container from this draggable instance
   * @param {...HTMLElement} containers - Containers you want to remove from draggable
   * @return {Draggable}
   * @example draggable.removeContainer(document.body)
   */
  removeContainer(...containers) {
    this.containers = this.containers.filter(container => !containers.includes(container));
    this.sensors.forEach(sensor => sensor.removeContainer(...containers));
    return this;
  }

  /**
   * Adds listener for draggable events
   * @param {String} type - Event name
   * @param {...Function} callbacks - Event callbacks
   * @return {Draggable}
   * @example draggable.on('drag:start', (dragEvent) => dragEvent.cancel());
   */
  on(type, ...callbacks) {
    this.emitter.on(type, ...callbacks);
    return this;
  }

  /**
   * Removes listener from draggable
   * @param {String} type - Event name
   * @param {Function} callback - Event callback
   * @return {Draggable}
   * @example draggable.off('drag:start', handlerFunction);
   */
  off(type, callback) {
    this.emitter.off(type, callback);
    return this;
  }

  /**
   * Triggers draggable event
   * @param {AbstractEvent} event - Event instance
   * @return {Draggable}
   * @example draggable.trigger(event);
   */
  trigger(event) {
    this.emitter.trigger(event);
    return this;
  }

  /**
   * Returns class name for class identifier
   * @param {String} name - Name of class identifier
   * @return {String|null}
   */
  getClassNameFor(name) {
    return this.options.classes[name];
  }

  /**
   * Returns true if this draggable instance is currently dragging
   * @return {Boolean}
   */
  isDragging() {
    return Boolean(this.dragging);
  }

  /**
   * Returns all draggable elements
   * @return {HTMLElement[]}
   */
  getDraggableElements() {
    return this.containers.reduce((current, container) => {
      return [...current, ...this.getDraggableElementsForContainer(container)];
    }, []);
  }

  /**
   * Returns draggable elements for a given container, excluding the mirror and
   * original source element if present
   * @param {HTMLElement} container
   * @return {HTMLElement[]}
   */
  getDraggableElementsForContainer(container) {
    const allDraggableElements = container.querySelectorAll(this.options.draggable);

    return [...allDraggableElements].filter(childElement => {
      return childElement !== this.originalSource && childElement !== this.mirror;
    });
  }

  /**
   * Drag start handler
   * @private
   * @param {Event} event - DOM Drag event
   */
  [onDragStart](event) {
    const sensorEvent = getSensorEvent(event);
    const { target, container } = sensorEvent;

    if (!this.containers.includes(container)) {
      return;
    }

    if (this.options.handle && target && !(0, _utils.closest)(target, this.options.handle)) {
      sensorEvent.cancel();
      return;
    }

    // Find draggable source element
    this.originalSource = (0, _utils.closest)(target, this.options.draggable);
    this.sourceContainer = container;

    if (!this.originalSource) {
      sensorEvent.cancel();
      return;
    }

    if (this.lastPlacedSource && this.lastPlacedContainer) {
      clearTimeout(this.placedTimeoutID);
      this.lastPlacedSource.classList.remove(this.getClassNameFor('source:placed'));
      this.lastPlacedContainer.classList.remove(this.getClassNameFor('container:placed'));
    }

    this.source = this.originalSource.cloneNode(true);
    this.originalSource.parentNode.insertBefore(this.source, this.originalSource);
    this.originalSource.style.display = 'none';

    const dragEvent = new _DragEvent.DragStartEvent({
      source: this.source,
      originalSource: this.originalSource,
      sourceContainer: container,
      sensorEvent
    });

    this.trigger(dragEvent);

    this.dragging = !dragEvent.canceled();

    if (dragEvent.canceled()) {
      this.source.parentNode.removeChild(this.source);
      this.originalSource.style.display = null;
      return;
    }

    this.originalSource.classList.add(this.getClassNameFor('source:original'));
    this.source.classList.add(this.getClassNameFor('source:dragging'));
    this.sourceContainer.classList.add(this.getClassNameFor('container:dragging'));
    document.body.classList.add(this.getClassNameFor('body:dragging'));
    applyUserSelect(document.body, 'none');

    requestAnimationFrame(() => {
      const oldSensorEvent = getSensorEvent(event);
      const newSensorEvent = oldSensorEvent.clone({ target: this.source });

      this[onDragMove](_extends({}, event, {
        detail: newSensorEvent
      }));
    });
  }

  /**
   * Drag move handler
   * @private
   * @param {Event} event - DOM Drag event
   */
  [onDragMove](event) {
    if (!this.dragging) {
      return;
    }

    const sensorEvent = getSensorEvent(event);
    const { container } = sensorEvent;
    let target = sensorEvent.target;

    const dragMoveEvent = new _DragEvent.DragMoveEvent({
      source: this.source,
      originalSource: this.originalSource,
      sourceContainer: container,
      sensorEvent
    });

    this.trigger(dragMoveEvent);

    if (dragMoveEvent.canceled()) {
      sensorEvent.cancel();
    }

    target = (0, _utils.closest)(target, this.options.draggable);
    const withinCorrectContainer = (0, _utils.closest)(sensorEvent.target, this.containers);
    const overContainer = sensorEvent.overContainer || withinCorrectContainer;
    const isLeavingContainer = this.currentOverContainer && overContainer !== this.currentOverContainer;
    const isLeavingDraggable = this.currentOver && target !== this.currentOver;
    const isOverContainer = overContainer && this.currentOverContainer !== overContainer;
    const isOverDraggable = withinCorrectContainer && target && this.currentOver !== target;

    if (isLeavingDraggable) {
      const dragOutEvent = new _DragEvent.DragOutEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        over: this.currentOver
      });

      this.currentOver.classList.remove(this.getClassNameFor('draggable:over'));
      this.currentOver = null;

      this.trigger(dragOutEvent);
    }

    if (isLeavingContainer) {
      const dragOutContainerEvent = new _DragEvent.DragOutContainerEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        overContainer: this.currentOverContainer
      });

      this.currentOverContainer.classList.remove(this.getClassNameFor('container:over'));
      this.currentOverContainer = null;

      this.trigger(dragOutContainerEvent);
    }

    if (isOverContainer) {
      overContainer.classList.add(this.getClassNameFor('container:over'));

      const dragOverContainerEvent = new _DragEvent.DragOverContainerEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        overContainer
      });

      this.currentOverContainer = overContainer;

      this.trigger(dragOverContainerEvent);
    }

    if (isOverDraggable) {
      target.classList.add(this.getClassNameFor('draggable:over'));

      const dragOverEvent = new _DragEvent.DragOverEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        overContainer,
        over: target
      });

      this.currentOver = target;

      this.trigger(dragOverEvent);
    }
  }

  /**
   * Drag stop handler
   * @private
   * @param {Event} event - DOM Drag event
   */
  [onDragStop](event) {
    if (!this.dragging) {
      return;
    }

    this.dragging = false;

    const dragStopEvent = new _DragEvent.DragStopEvent({
      source: this.source,
      originalSource: this.originalSource,
      sensorEvent: event.sensorEvent,
      sourceContainer: this.sourceContainer
    });

    this.trigger(dragStopEvent);

    this.source.parentNode.insertBefore(this.originalSource, this.source);
    this.source.parentNode.removeChild(this.source);
    this.originalSource.style.display = '';

    this.source.classList.remove(this.getClassNameFor('source:dragging'));
    this.originalSource.classList.remove(this.getClassNameFor('source:original'));
    this.originalSource.classList.add(this.getClassNameFor('source:placed'));
    this.sourceContainer.classList.add(this.getClassNameFor('container:placed'));
    this.sourceContainer.classList.remove(this.getClassNameFor('container:dragging'));
    document.body.classList.remove(this.getClassNameFor('body:dragging'));
    applyUserSelect(document.body, '');

    if (this.currentOver) {
      this.currentOver.classList.remove(this.getClassNameFor('draggable:over'));
    }

    if (this.currentOverContainer) {
      this.currentOverContainer.classList.remove(this.getClassNameFor('container:over'));
    }

    this.lastPlacedSource = this.originalSource;
    this.lastPlacedContainer = this.sourceContainer;

    this.placedTimeoutID = setTimeout(() => {
      if (this.lastPlacedSource) {
        this.lastPlacedSource.classList.remove(this.getClassNameFor('source:placed'));
      }

      if (this.lastPlacedContainer) {
        this.lastPlacedContainer.classList.remove(this.getClassNameFor('container:placed'));
      }

      this.lastPlacedSource = null;
      this.lastPlacedContainer = null;
    }, this.options.placedTimeout);

    this.source = null;
    this.originalSource = null;
    this.currentOverContainer = null;
    this.currentOver = null;
    this.sourceContainer = null;
  }

  /**
   * Drag pressure handler
   * @private
   * @param {Event} event - DOM Drag event
   */
  [onDragPressure](event) {
    if (!this.dragging) {
      return;
    }

    const sensorEvent = getSensorEvent(event);
    const source = this.source || (0, _utils.closest)(sensorEvent.originalEvent.target, this.options.draggable);

    const dragPressureEvent = new _DragEvent.DragPressureEvent({
      sensorEvent,
      source,
      pressure: sensorEvent.pressure
    });

    this.trigger(dragPressureEvent);
  }
}

exports.default = Draggable;
Draggable.Plugins = { Announcement: _Plugins.Announcement, Focusable: _Plugins.Focusable, Mirror: _Plugins.Mirror, Scrollable: _Plugins.Scrollable };
function getSensorEvent(event) {
  return event.detail;
}

function applyUserSelect(element, value) {
  element.style.webkitUserSelect = value;
  element.style.mozUserSelect = value;
  element.style.msUserSelect = value;
  element.style.oUserSelect = value;
  element.style.userSelect = value;
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sensor = __webpack_require__(4);

var _Sensor2 = _interopRequireDefault(_Sensor);

var _SensorEvent = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onMouseForceWillBegin = Symbol('onMouseForceWillBegin');
const onMouseForceDown = Symbol('onMouseForceDown');
const onMouseDown = Symbol('onMouseDown');
const onMouseForceChange = Symbol('onMouseForceChange');
const onMouseMove = Symbol('onMouseMove');
const onMouseUp = Symbol('onMouseUp');
const onMouseForceGlobalChange = Symbol('onMouseForceGlobalChange');

/**
 * This sensor picks up native force touch events and dictates drag operations
 * @class ForceTouchSensor
 * @module ForceTouchSensor
 * @extends Sensor
 */
class ForceTouchSensor extends _Sensor2.default {
  /**
   * ForceTouchSensor constructor.
   * @constructs ForceTouchSensor
   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
   * @param {Object} options - Options
   */
  constructor(containers = [], options = {}) {
    super(containers, options);

    /**
     * Draggable element needs to be remembered to unset the draggable attribute after drag operation has completed
     * @property mightDrag
     * @type {Boolean}
     */
    this.mightDrag = false;

    this[onMouseForceWillBegin] = this[onMouseForceWillBegin].bind(this);
    this[onMouseForceDown] = this[onMouseForceDown].bind(this);
    this[onMouseDown] = this[onMouseDown].bind(this);
    this[onMouseForceChange] = this[onMouseForceChange].bind(this);
    this[onMouseMove] = this[onMouseMove].bind(this);
    this[onMouseUp] = this[onMouseUp].bind(this);
  }

  /**
   * Attaches sensors event listeners to the DOM
   */
  attach() {
    for (const container of this.containers) {
      container.addEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);
      container.addEventListener('webkitmouseforcedown', this[onMouseForceDown], false);
      container.addEventListener('mousedown', this[onMouseDown], true);
      container.addEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);
    }

    document.addEventListener('mousemove', this[onMouseMove]);
    document.addEventListener('mouseup', this[onMouseUp]);
  }

  /**
   * Detaches sensors event listeners to the DOM
   */
  detach() {
    for (const container of this.containers) {
      container.removeEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);
      container.removeEventListener('webkitmouseforcedown', this[onMouseForceDown], false);
      container.removeEventListener('mousedown', this[onMouseDown], true);
      container.removeEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);
    }

    document.removeEventListener('mousemove', this[onMouseMove]);
    document.removeEventListener('mouseup', this[onMouseUp]);
  }

  /**
   * Mouse force will begin handler
   * @private
   * @param {Event} event - Mouse force will begin event
   */
  [onMouseForceWillBegin](event) {
    event.preventDefault();
    this.mightDrag = true;
  }

  /**
   * Mouse force down handler
   * @private
   * @param {Event} event - Mouse force down event
   */
  [onMouseForceDown](event) {
    if (this.dragging) {
      return;
    }

    const target = document.elementFromPoint(event.clientX, event.clientY);
    const container = event.currentTarget;

    const dragStartEvent = new _SensorEvent.DragStartSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container,
      originalEvent: event
    });

    this.trigger(container, dragStartEvent);

    this.currentContainer = container;
    this.dragging = !dragStartEvent.canceled();
    this.mightDrag = false;
  }

  /**
   * Mouse up handler
   * @private
   * @param {Event} event - Mouse up event
   */
  [onMouseUp](event) {
    if (!this.dragging) {
      return;
    }

    const dragStopEvent = new _SensorEvent.DragStopSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target: null,
      container: this.currentContainer,
      originalEvent: event
    });

    this.trigger(this.currentContainer, dragStopEvent);

    this.currentContainer = null;
    this.dragging = false;
    this.mightDrag = false;
  }

  /**
   * Mouse down handler
   * @private
   * @param {Event} event - Mouse down event
   */
  [onMouseDown](event) {
    if (!this.mightDrag) {
      return;
    }

    // Need workaround for real click
    // Cancel potential drag events
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();
  }

  /**
   * Mouse move handler
   * @private
   * @param {Event} event - Mouse force will begin event
   */
  [onMouseMove](event) {
    if (!this.dragging) {
      return;
    }

    const target = document.elementFromPoint(event.clientX, event.clientY);

    const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });

    this.trigger(this.currentContainer, dragMoveEvent);
  }

  /**
   * Mouse force change handler
   * @private
   * @param {Event} event - Mouse force change event
   */
  [onMouseForceChange](event) {
    if (this.dragging) {
      return;
    }

    const target = event.target;
    const container = event.currentTarget;

    const dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({
      pressure: event.webkitForce,
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container,
      originalEvent: event
    });

    this.trigger(container, dragPressureEvent);
  }

  /**
   * Mouse force global change handler
   * @private
   * @param {Event} event - Mouse force global change event
   */
  [onMouseForceGlobalChange](event) {
    if (!this.dragging) {
      return;
    }

    const target = event.target;

    const dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({
      pressure: event.webkitForce,
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });

    this.trigger(this.currentContainer, dragPressureEvent);
  }
}
exports.default = ForceTouchSensor;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ForceTouchSensor = __webpack_require__(38);

var _ForceTouchSensor2 = _interopRequireDefault(_ForceTouchSensor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ForceTouchSensor2.default;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(2);

var _Sensor = __webpack_require__(4);

var _Sensor2 = _interopRequireDefault(_Sensor);

var _SensorEvent = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onMouseDown = Symbol('onMouseDown');
const onMouseUp = Symbol('onMouseUp');
const onDragStart = Symbol('onDragStart');
const onDragOver = Symbol('onDragOver');
const onDragEnd = Symbol('onDragEnd');
const onDrop = Symbol('onDrop');
const reset = Symbol('reset');

/**
 * This sensor picks up native browser drag events and dictates drag operations
 * @class DragSensor
 * @module DragSensor
 * @extends Sensor
 */
class DragSensor extends _Sensor2.default {
  /**
   * DragSensor constructor.
   * @constructs DragSensor
   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
   * @param {Object} options - Options
   */
  constructor(containers = [], options = {}) {
    super(containers, options);

    /**
     * Mouse down timer which will end up setting the draggable attribute, unless canceled
     * @property mouseDownTimeout
     * @type {Number}
     */
    this.mouseDownTimeout = null;

    /**
     * Draggable element needs to be remembered to unset the draggable attribute after drag operation has completed
     * @property draggableElement
     * @type {HTMLElement}
     */
    this.draggableElement = null;

    /**
     * Native draggable element could be links or images, their draggable state will be disabled during drag operation
     * @property nativeDraggableElement
     * @type {HTMLElement}
     */
    this.nativeDraggableElement = null;

    this[onMouseDown] = this[onMouseDown].bind(this);
    this[onMouseUp] = this[onMouseUp].bind(this);
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
    this[onDragEnd] = this[onDragEnd].bind(this);
    this[onDrop] = this[onDrop].bind(this);
  }

  /**
   * Attaches sensors event listeners to the DOM
   */
  attach() {
    document.addEventListener('mousedown', this[onMouseDown], true);
  }

  /**
   * Detaches sensors event listeners to the DOM
   */
  detach() {
    document.removeEventListener('mousedown', this[onMouseDown], true);
  }

  /**
   * Drag start handler
   * @private
   * @param {Event} event - Drag start event
   */
  [onDragStart](event) {
    // Need for firefox. "text" key is needed for IE
    event.dataTransfer.setData('text', '');
    event.dataTransfer.effectAllowed = this.options.type;

    const target = document.elementFromPoint(event.clientX, event.clientY);
    this.currentContainer = (0, _utils.closest)(event.target, this.containers);

    if (!this.currentContainer) {
      return;
    }

    const dragStartEvent = new _SensorEvent.DragStartSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });

    // Workaround
    setTimeout(() => {
      this.trigger(this.currentContainer, dragStartEvent);

      if (dragStartEvent.canceled()) {
        this.dragging = false;
      } else {
        this.dragging = true;
      }
    }, 0);
  }

  /**
   * Drag over handler
   * @private
   * @param {Event} event - Drag over event
   */
  [onDragOver](event) {
    if (!this.dragging) {
      return;
    }

    const target = document.elementFromPoint(event.clientX, event.clientY);
    const container = this.currentContainer;

    const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container,
      originalEvent: event
    });

    this.trigger(container, dragMoveEvent);

    if (!dragMoveEvent.canceled()) {
      event.preventDefault();
      event.dataTransfer.dropEffect = this.options.type;
    }
  }

  /**
   * Drag end handler
   * @private
   * @param {Event} event - Drag end event
   */
  [onDragEnd](event) {
    if (!this.dragging) {
      return;
    }

    document.removeEventListener('mouseup', this[onMouseUp], true);

    const target = document.elementFromPoint(event.clientX, event.clientY);
    const container = this.currentContainer;

    const dragStopEvent = new _SensorEvent.DragStopSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container,
      originalEvent: event
    });

    this.trigger(container, dragStopEvent);

    this.dragging = false;

    this[reset]();
  }

  /**
   * Drop handler
   * @private
   * @param {Event} event - Drop event
   */
  [onDrop](event) {
    // eslint-disable-line class-methods-use-this
    event.preventDefault();
  }

  /**
   * Mouse down handler
   * @private
   * @param {Event} event - Mouse down event
   */
  [onMouseDown](event) {
    // Firefox bug for inputs within draggables https://bugzilla.mozilla.org/show_bug.cgi?id=739071
    if (event.target && (event.target.form || event.target.contenteditable)) {
      return;
    }

    const nativeDraggableElement = (0, _utils.closest)(event.target, element => element.draggable);

    if (nativeDraggableElement) {
      nativeDraggableElement.draggable = false;
      this.nativeDraggableElement = nativeDraggableElement;
    }

    document.addEventListener('mouseup', this[onMouseUp], true);
    document.addEventListener('dragstart', this[onDragStart], false);
    document.addEventListener('dragover', this[onDragOver], false);
    document.addEventListener('dragend', this[onDragEnd], false);
    document.addEventListener('drop', this[onDrop], false);

    const target = (0, _utils.closest)(event.target, this.options.draggable);

    if (!target) {
      return;
    }

    this.mouseDownTimeout = setTimeout(() => {
      target.draggable = true;
      this.draggableElement = target;
    }, this.options.delay);
  }

  /**
   * Mouse up handler
   * @private
   * @param {Event} event - Mouse up event
   */
  [onMouseUp]() {
    this[reset]();
  }

  /**
   * Mouse up handler
   * @private
   * @param {Event} event - Mouse up event
   */
  [reset]() {
    clearTimeout(this.mouseDownTimeout);

    document.removeEventListener('mouseup', this[onMouseUp], true);
    document.removeEventListener('dragstart', this[onDragStart], false);
    document.removeEventListener('dragover', this[onDragOver], false);
    document.removeEventListener('dragend', this[onDragEnd], false);
    document.removeEventListener('drop', this[onDrop], false);

    if (this.nativeDraggableElement) {
      this.nativeDraggableElement.draggable = true;
      this.nativeDraggableElement = null;
    }

    if (this.draggableElement) {
      this.draggableElement.draggable = false;
      this.draggableElement = null;
    }
  }
}
exports.default = DragSensor;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DragSensor = __webpack_require__(40);

var _DragSensor2 = _interopRequireDefault(_DragSensor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DragSensor2.default;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(2);

var _Sensor = __webpack_require__(4);

var _Sensor2 = _interopRequireDefault(_Sensor);

var _SensorEvent = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onTouchStart = Symbol('onTouchStart');
const onTouchHold = Symbol('onTouchHold');
const onTouchEnd = Symbol('onTouchEnd');
const onTouchMove = Symbol('onTouchMove');

/**
 * Prevents scrolling when set to true
 * @var {Boolean} preventScrolling
 */
let preventScrolling = false;

// WebKit requires cancelable `touchmove` events to be added as early as possible
window.addEventListener('touchmove', event => {
  if (!preventScrolling) {
    return;
  }

  // Prevent scrolling
  event.preventDefault();
}, { passive: false });

/**
 * This sensor picks up native browser touch events and dictates drag operations
 * @class TouchSensor
 * @module TouchSensor
 * @extends Sensor
 */
class TouchSensor extends _Sensor2.default {
  /**
   * TouchSensor constructor.
   * @constructs TouchSensor
   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
   * @param {Object} options - Options
   */
  constructor(containers = [], options = {}) {
    super(containers, options);

    /**
     * Closest scrollable container so accidental scroll can cancel long touch
     * @property currentScrollableParent
     * @type {HTMLElement}
     */
    this.currentScrollableParent = null;

    /**
     * TimeoutID for long touch
     * @property tapTimeout
     * @type {Number}
     */
    this.tapTimeout = null;

    /**
     * touchMoved indicates if touch has moved during tapTimeout
     * @property touchMoved
     * @type {Boolean}
     */
    this.touchMoved = false;

    this[onTouchStart] = this[onTouchStart].bind(this);
    this[onTouchHold] = this[onTouchHold].bind(this);
    this[onTouchEnd] = this[onTouchEnd].bind(this);
    this[onTouchMove] = this[onTouchMove].bind(this);
  }

  /**
   * Attaches sensors event listeners to the DOM
   */
  attach() {
    document.addEventListener('touchstart', this[onTouchStart]);
  }

  /**
   * Detaches sensors event listeners to the DOM
   */
  detach() {
    document.removeEventListener('touchstart', this[onTouchStart]);
  }

  /**
   * Touch start handler
   * @private
   * @param {Event} event - Touch start event
   */
  [onTouchStart](event) {
    const container = (0, _utils.closest)(event.target, this.containers);

    if (!container) {
      return;
    }

    document.addEventListener('touchmove', this[onTouchMove]);
    document.addEventListener('touchend', this[onTouchEnd]);
    document.addEventListener('touchcancel', this[onTouchEnd]);
    container.addEventListener('contextmenu', onContextMenu);

    this.currentContainer = container;
    this.tapTimeout = setTimeout(this[onTouchHold](event, container), this.options.delay);
  }

  /**
   * Touch hold handler
   * @private
   * @param {Event} event - Touch start event
   * @param {HTMLElement} container - Container element
   */
  [onTouchHold](event, container) {
    return () => {
      if (this.touchMoved) {
        return;
      }

      const touch = event.touches[0] || event.changedTouches[0];
      const target = event.target;

      const dragStartEvent = new _SensorEvent.DragStartSensorEvent({
        clientX: touch.pageX,
        clientY: touch.pageY,
        target,
        container,
        originalEvent: event
      });

      this.trigger(container, dragStartEvent);

      this.dragging = !dragStartEvent.canceled();
      preventScrolling = this.dragging;
    };
  }

  /**
   * Touch move handler
   * @private
   * @param {Event} event - Touch move event
   */
  [onTouchMove](event) {
    this.touchMoved = true;

    if (!this.dragging) {
      return;
    }

    const touch = event.touches[0] || event.changedTouches[0];
    const target = document.elementFromPoint(touch.pageX - window.scrollX, touch.pageY - window.scrollY);

    const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
      clientX: touch.pageX,
      clientY: touch.pageY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });

    this.trigger(this.currentContainer, dragMoveEvent);
  }

  /**
   * Touch end handler
   * @private
   * @param {Event} event - Touch end event
   */
  [onTouchEnd](event) {
    this.touchMoved = false;
    preventScrolling = false;

    document.removeEventListener('touchend', this[onTouchEnd]);
    document.removeEventListener('touchcancel', this[onTouchEnd]);
    document.removeEventListener('touchmove', this[onTouchMove]);

    if (this.currentContainer) {
      this.currentContainer.removeEventListener('contextmenu', onContextMenu);
    }

    clearTimeout(this.tapTimeout);

    if (!this.dragging) {
      return;
    }

    const touch = event.touches[0] || event.changedTouches[0];
    const target = document.elementFromPoint(touch.pageX - window.scrollX, touch.pageY - window.scrollY);

    event.preventDefault();

    const dragStopEvent = new _SensorEvent.DragStopSensorEvent({
      clientX: touch.pageX,
      clientY: touch.pageY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });

    this.trigger(this.currentContainer, dragStopEvent);

    this.currentContainer = null;
    this.dragging = false;
  }
}

exports.default = TouchSensor;
function onContextMenu(event) {
  event.preventDefault();
  event.stopPropagation();
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TouchSensor = __webpack_require__(42);

var _TouchSensor2 = _interopRequireDefault(_TouchSensor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TouchSensor2.default;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DragPressureSensorEvent = exports.DragStopSensorEvent = exports.DragMoveSensorEvent = exports.DragStartSensorEvent = exports.SensorEvent = undefined;

var _AbstractEvent = __webpack_require__(0);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base sensor event
 * @class SensorEvent
 * @module SensorEvent
 * @extends AbstractEvent
 */
class SensorEvent extends _AbstractEvent2.default {
  /**
   * Original browser event that triggered a sensor
   * @property originalEvent
   * @type {Event}
   * @readonly
   */
  get originalEvent() {
    return this.data.originalEvent;
  }

  /**
   * Normalized clientX for both touch and mouse events
   * @property clientX
   * @type {Number}
   * @readonly
   */
  get clientX() {
    return this.data.clientX;
  }

  /**
   * Normalized clientY for both touch and mouse events
   * @property clientY
   * @type {Number}
   * @readonly
   */
  get clientY() {
    return this.data.clientY;
  }

  /**
   * Normalized target for both touch and mouse events
   * Returns the element that is behind cursor or touch pointer
   * @property target
   * @type {HTMLElement}
   * @readonly
   */
  get target() {
    return this.data.target;
  }

  /**
   * Container that initiated the sensor
   * @property container
   * @type {HTMLElement}
   * @readonly
   */
  get container() {
    return this.data.container;
  }

  /**
   * Trackpad pressure
   * @property pressure
   * @type {Number}
   * @readonly
   */
  get pressure() {
    return this.data.pressure;
  }
}

exports.SensorEvent = SensorEvent; /**
                                    * Drag start sensor event
                                    * @class DragStartSensorEvent
                                    * @module DragStartSensorEvent
                                    * @extends SensorEvent
                                    */

class DragStartSensorEvent extends SensorEvent {}

exports.DragStartSensorEvent = DragStartSensorEvent; /**
                                                      * Drag move sensor event
                                                      * @class DragMoveSensorEvent
                                                      * @module DragMoveSensorEvent
                                                      * @extends SensorEvent
                                                      */

DragStartSensorEvent.type = 'drag:start';
class DragMoveSensorEvent extends SensorEvent {}

exports.DragMoveSensorEvent = DragMoveSensorEvent; /**
                                                    * Drag stop sensor event
                                                    * @class DragStopSensorEvent
                                                    * @module DragStopSensorEvent
                                                    * @extends SensorEvent
                                                    */

DragMoveSensorEvent.type = 'drag:move';
class DragStopSensorEvent extends SensorEvent {}

exports.DragStopSensorEvent = DragStopSensorEvent; /**
                                                    * Drag pressure sensor event
                                                    * @class DragPressureSensorEvent
                                                    * @module DragPressureSensorEvent
                                                    * @extends SensorEvent
                                                    */

DragStopSensorEvent.type = 'drag:stop';
class DragPressureSensorEvent extends SensorEvent {}
exports.DragPressureSensorEvent = DragPressureSensorEvent;
DragPressureSensorEvent.type = 'drag:pressure';

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(2);

var _Sensor = __webpack_require__(4);

var _Sensor2 = _interopRequireDefault(_Sensor);

var _SensorEvent = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onContextMenuWhileDragging = Symbol('onContextMenuWhileDragging');
const onMouseDown = Symbol('onMouseDown');
const onMouseMove = Symbol('onMouseMove');
const onMouseUp = Symbol('onMouseUp');

/**
 * This sensor picks up native browser mouse events and dictates drag operations
 * @class MouseSensor
 * @module MouseSensor
 * @extends Sensor
 */
class MouseSensor extends _Sensor2.default {
  /**
   * MouseSensor constructor.
   * @constructs MouseSensor
   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
   * @param {Object} options - Options
   */
  constructor(containers = [], options = {}) {
    super(containers, options);

    /**
     * Indicates if mouse button is still down
     * @property mouseDown
     * @type {Boolean}
     */
    this.mouseDown = false;

    /**
     * Mouse down timer which will end up triggering the drag start operation
     * @property mouseDownTimeout
     * @type {Number}
     */
    this.mouseDownTimeout = null;

    /**
     * Indicates if context menu has been opened during drag operation
     * @property openedContextMenu
     * @type {Boolean}
     */
    this.openedContextMenu = false;

    this[onContextMenuWhileDragging] = this[onContextMenuWhileDragging].bind(this);
    this[onMouseDown] = this[onMouseDown].bind(this);
    this[onMouseMove] = this[onMouseMove].bind(this);
    this[onMouseUp] = this[onMouseUp].bind(this);
  }

  /**
   * Attaches sensors event listeners to the DOM
   */
  attach() {
    document.addEventListener('mousedown', this[onMouseDown], true);
  }

  /**
   * Detaches sensors event listeners to the DOM
   */
  detach() {
    document.removeEventListener('mousedown', this[onMouseDown], true);
  }

  /**
   * Mouse down handler
   * @private
   * @param {Event} event - Mouse down event
   */
  [onMouseDown](event) {
    if (event.button !== 0 || event.ctrlKey || event.metaKey) {
      return;
    }

    document.addEventListener('mouseup', this[onMouseUp]);

    const target = document.elementFromPoint(event.clientX, event.clientY);
    const container = (0, _utils.closest)(target, this.containers);

    if (!container) {
      return;
    }

    document.addEventListener('dragstart', preventNativeDragStart);

    this.mouseDown = true;

    clearTimeout(this.mouseDownTimeout);
    this.mouseDownTimeout = setTimeout(() => {
      if (!this.mouseDown) {
        return;
      }

      const dragStartEvent = new _SensorEvent.DragStartSensorEvent({
        clientX: event.clientX,
        clientY: event.clientY,
        target,
        container,
        originalEvent: event
      });

      this.trigger(container, dragStartEvent);

      this.currentContainer = container;
      this.dragging = !dragStartEvent.canceled();

      if (this.dragging) {
        document.addEventListener('contextmenu', this[onContextMenuWhileDragging]);
        document.addEventListener('mousemove', this[onMouseMove]);
      }
    }, this.options.delay);
  }

  /**
   * Mouse move handler
   * @private
   * @param {Event} event - Mouse move event
   */
  [onMouseMove](event) {
    if (!this.dragging) {
      return;
    }

    const target = document.elementFromPoint(event.clientX, event.clientY);

    const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });

    this.trigger(this.currentContainer, dragMoveEvent);
  }

  /**
   * Mouse up handler
   * @private
   * @param {Event} event - Mouse up event
   */
  [onMouseUp](event) {
    this.mouseDown = Boolean(this.openedContextMenu);

    if (this.openedContextMenu) {
      this.openedContextMenu = false;
      return;
    }

    document.removeEventListener('mouseup', this[onMouseUp]);
    document.removeEventListener('dragstart', preventNativeDragStart);

    if (!this.dragging) {
      return;
    }

    const target = document.elementFromPoint(event.clientX, event.clientY);

    const dragStopEvent = new _SensorEvent.DragStopSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });

    this.trigger(this.currentContainer, dragStopEvent);

    document.removeEventListener('contextmenu', this[onContextMenuWhileDragging]);
    document.removeEventListener('mousemove', this[onMouseMove]);

    this.currentContainer = null;
    this.dragging = false;
  }

  /**
   * Context menu handler
   * @private
   * @param {Event} event - Context menu event
   */
  [onContextMenuWhileDragging](event) {
    event.preventDefault();
    this.openedContextMenu = true;
  }
}

exports.default = MouseSensor;
function preventNativeDragStart(event) {
  event.preventDefault();
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MouseSensor = __webpack_require__(45);

var _MouseSensor2 = _interopRequireDefault(_MouseSensor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MouseSensor2.default;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Base sensor class. Extend from this class to create a new or custom sensor
 * @class Sensor
 * @module Sensor
 */
class Sensor {
  /**
   * Sensor constructor.
   * @constructs Sensor
   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
   * @param {Object} options - Options
   */
  constructor(containers = [], options = {}) {
    /**
     * Current containers
     * @property containers
     * @type {HTMLElement[]}
     */
    this.containers = [...containers];

    /**
     * Current options
     * @property options
     * @type {Object}
     */
    this.options = _extends({}, options);

    /**
     * Current drag state
     * @property dragging
     * @type {Boolean}
     */
    this.dragging = false;

    /**
     * Current container
     * @property currentContainer
     * @type {HTMLElement}
     */
    this.currentContainer = null;
  }

  /**
   * Attaches sensors event listeners to the DOM
   * @return {Sensor}
   */
  attach() {
    return this;
  }

  /**
   * Detaches sensors event listeners to the DOM
   * @return {Sensor}
   */
  detach() {
    return this;
  }

  /**
   * Adds container to this sensor instance
   * @param {...HTMLElement} containers - Containers you want to add to this sensor
   * @example draggable.addContainer(document.body)
   */
  addContainer(...containers) {
    this.containers = [...this.containers, ...containers];
  }

  /**
   * Removes container from this sensor instance
   * @param {...HTMLElement} containers - Containers you want to remove from this sensor
   * @example draggable.removeContainer(document.body)
   */
  removeContainer(...containers) {
    this.containers = this.containers.filter(container => !containers.includes(container));
  }

  /**
   * Triggers event on target element
   * @param {HTMLElement} element - Element to trigger event on
   * @param {SensorEvent} sensorEvent - Sensor event to trigger
   */
  trigger(element, sensorEvent) {
    const event = document.createEvent('Event');
    event.detail = sensorEvent;
    event.initEvent(sensorEvent.type, true, true);
    element.dispatchEvent(event);
    this.lastEvent = sensorEvent;

    return sensorEvent;
  }
}
exports.default = Sensor;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requestNextAnimationFrame;
function requestNextAnimationFrame(callback) {
  return requestAnimationFrame(() => {
    requestAnimationFrame(callback);
  });
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestNextAnimationFrame = __webpack_require__(48);

var _requestNextAnimationFrame2 = _interopRequireDefault(_requestNextAnimationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _requestNextAnimationFrame2.default;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = closest;
const matchFunction = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;

/**
 * Get the closest parent element of a given element that matches the given
 * selector string or matching function
 *
 * @param {Element} element The child element to find a parent of
 * @param {String|Function} selector The string or function to use to match
 *     the parent element
 * @return {Element|null}
 */
function closest(element, value) {
  if (!element) {
    return null;
  }

  const selector = value;
  const callback = value;
  const nodeList = value;
  const singleElement = value;

  const isSelector = Boolean(typeof value === 'string');
  const isFunction = Boolean(typeof value === 'function');
  const isNodeList = Boolean(value instanceof NodeList || value instanceof Array);
  const isElement = Boolean(value instanceof HTMLElement);

  function conditionFn(currentElement) {
    if (!currentElement) {
      return currentElement;
    } else if (isSelector) {
      return matchFunction.call(currentElement, selector);
    } else if (isNodeList) {
      return [...nodeList].includes(currentElement);
    } else if (isElement) {
      return singleElement === currentElement;
    } else if (isFunction) {
      return callback(currentElement);
    } else {
      return null;
    }
  }

  let current = element;

  do {
    current = current.correspondingUseElement || current.correspondingElement || current;

    if (conditionFn(current)) {
      return current;
    }

    current = current.parentNode;
  } while (current && current !== document.body && current !== document);

  return null;
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _closest = __webpack_require__(50);

var _closest2 = _interopRequireDefault(_closest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _closest2.default;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = exports.scroll = exports.onDragStop = exports.onDragMove = exports.onDragStart = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _AbstractPlugin = __webpack_require__(1);

var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onDragStart = exports.onDragStart = Symbol('onDragStart');
const onDragMove = exports.onDragMove = Symbol('onDragMove');
const onDragStop = exports.onDragStop = Symbol('onDragStop');
const scroll = exports.scroll = Symbol('scroll');

/**
 * Scrollable default options
 * @property {Object} defaultOptions
 * @property {Number} defaultOptions.speed
 * @property {Number} defaultOptions.sensitivity
 * @property {HTMLElement[]} defaultOptions.scrollableElements
 * @type {Object}
 */
const defaultOptions = exports.defaultOptions = {
  speed: 6,
  sensitivity: 50,
  scrollableElements: []
};

/**
 * Scrollable plugin which scrolls the closest scrollable parent
 * @class Scrollable
 * @module Scrollable
 * @extends AbstractPlugin
 */
class Scrollable extends _AbstractPlugin2.default {
  /**
   * Scrollable constructor.
   * @constructs Scrollable
   * @param {Draggable} draggable - Draggable instance
   */
  constructor(draggable) {
    super(draggable);

    /**
     * Scrollable options
     * @property {Object} options
     * @property {Number} options.speed
     * @property {Number} options.sensitivity
     * @property {HTMLElement[]} options.scrollableElements
     * @type {Object}
     */
    this.options = _extends({}, defaultOptions, this.getOptions());

    /**
     * Keeps current mouse position
     * @property {Object} currentMousePosition
     * @property {Number} currentMousePosition.clientX
     * @property {Number} currentMousePosition.clientY
     * @type {Object|null}
     */
    this.currentMousePosition = null;

    /**
     * Scroll animation frame
     * @property scrollAnimationFrame
     * @type {Number|null}
     */
    this.scrollAnimationFrame = null;

    /**
     * Closest scrollable element
     * @property scrollableElement
     * @type {HTMLElement|null}
     */
    this.scrollableElement = null;

    /**
     * Animation frame looking for the closest scrollable element
     * @property findScrollableElementFrame
     * @type {Number|null}
     */
    this.findScrollableElementFrame = null;

    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[scroll] = this[scroll].bind(this);
  }

  /**
   * Attaches plugins event listeners
   */
  attach() {
    this.draggable.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
  }

  /**
   * Detaches plugins event listeners
   */
  detach() {
    this.draggable.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
  }

  /**
   * Returns options passed through draggable
   * @return {Object}
   */
  getOptions() {
    return this.draggable.options.scrollable || {};
  }

  /**
   * Returns closest scrollable elements by element
   * @param {HTMLElement} target
   * @return {HTMLElement}
   */
  getScrollableElement(target) {
    if (this.hasDefinedScrollableElements()) {
      return (0, _utils.closest)(target, this.options.scrollableElements) || document.documentElement;
    } else {
      return closestScrollableElement(target);
    }
  }

  /**
   * Returns true if at least one scrollable element have been defined via options
   * @param {HTMLElement} target
   * @return {Boolean}
   */
  hasDefinedScrollableElements() {
    return Boolean(this.options.scrollableElements.length !== 0);
  }

  /**
   * Drag start handler. Finds closest scrollable parent in separate frame
   * @param {DragStartEvent} dragEvent
   * @private
   */
  [onDragStart](dragEvent) {
    this.findScrollableElementFrame = requestAnimationFrame(() => {
      this.scrollableElement = this.getScrollableElement(dragEvent.source);
    });
  }

  /**
   * Drag move handler. Remembers mouse position and initiates scrolling
   * @param {DragMoveEvent} dragEvent
   * @private
   */
  [onDragMove](dragEvent) {
    this.findScrollableElementFrame = requestAnimationFrame(() => {
      this.scrollableElement = this.getScrollableElement(dragEvent.sensorEvent.target);
    });

    if (!this.scrollableElement) {
      return;
    }

    const sensorEvent = dragEvent.sensorEvent;
    const scrollOffset = { x: 0, y: 0 };

    if ('ontouchstart' in window) {
      scrollOffset.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      scrollOffset.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    }

    this.currentMousePosition = {
      clientX: sensorEvent.clientX - scrollOffset.x,
      clientY: sensorEvent.clientY - scrollOffset.y
    };

    this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
  }

  /**
   * Drag stop handler. Cancels scroll animations and resets state
   * @private
   */
  [onDragStop]() {
    cancelAnimationFrame(this.scrollAnimationFrame);
    cancelAnimationFrame(this.findScrollableElementFrame);

    this.scrollableElement = null;
    this.scrollAnimationFrame = null;
    this.findScrollableElementFrame = null;
    this.currentMousePosition = null;
  }

  /**
   * Scroll function that does the heavylifting
   * @private
   */
  [scroll]() {
    if (!this.scrollableElement || !this.currentMousePosition) {
      return;
    }

    cancelAnimationFrame(this.scrollAnimationFrame);

    const { speed, sensitivity } = this.options;

    const rect = this.scrollableElement.getBoundingClientRect();
    const bottomCutOff = rect.bottom > window.innerHeight;
    const topCutOff = rect.top < 0;
    const cutOff = topCutOff || bottomCutOff;

    const documentScrollingElement = getDocumentScrollingElement();
    const scrollableElement = this.scrollableElement;
    const clientX = this.currentMousePosition.clientX;
    const clientY = this.currentMousePosition.clientY;

    if (scrollableElement !== document.body && scrollableElement !== document.documentElement && !cutOff) {
      const { offsetHeight, offsetWidth } = scrollableElement;

      if (rect.top + offsetHeight - clientY < sensitivity) {
        scrollableElement.scrollTop += speed;
      } else if (clientY - rect.top < sensitivity) {
        scrollableElement.scrollTop -= speed;
      }

      if (rect.left + offsetWidth - clientX < sensitivity) {
        scrollableElement.scrollLeft += speed;
      } else if (clientX - rect.left < sensitivity) {
        scrollableElement.scrollLeft -= speed;
      }
    } else {
      const { innerHeight, innerWidth } = window;

      if (clientY < sensitivity) {
        documentScrollingElement.scrollTop -= speed;
      } else if (innerHeight - clientY < sensitivity) {
        documentScrollingElement.scrollTop += speed;
      }

      if (clientX < sensitivity) {
        documentScrollingElement.scrollLeft -= speed;
      } else if (innerWidth - clientX < sensitivity) {
        documentScrollingElement.scrollLeft += speed;
      }
    }

    this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
  }
}

exports.default = Scrollable; /**
                               * Returns true if the passed element has overflow
                               * @param {HTMLElement} element
                               * @return {Boolean}
                               * @private
                               */

function hasOverflow(element) {
  const overflowRegex = /(auto|scroll)/;
  const computedStyles = getComputedStyle(element, null);

  const overflow = computedStyles.getPropertyValue('overflow') + computedStyles.getPropertyValue('overflow-y') + computedStyles.getPropertyValue('overflow-x');

  return overflowRegex.test(overflow);
}

/**
 * Returns true if the passed element is statically positioned
 * @param {HTMLElement} element
 * @return {Boolean}
 * @private
 */
function isStaticallyPositioned(element) {
  const position = getComputedStyle(element).getPropertyValue('position');
  return position === 'static';
}

/**
 * Finds closest scrollable element
 * @param {HTMLElement} element
 * @return {HTMLElement}
 * @private
 */
function closestScrollableElement(element) {
  if (!element) {
    return getDocumentScrollingElement();
  }

  const position = getComputedStyle(element).getPropertyValue('position');
  const excludeStaticParents = position === 'absolute';

  const scrollableElement = (0, _utils.closest)(element, parent => {
    if (excludeStaticParents && isStaticallyPositioned(parent)) {
      return false;
    }
    return hasOverflow(parent);
  });

  if (position === 'fixed' || !scrollableElement) {
    return getDocumentScrollingElement();
  } else {
    return scrollableElement;
  }
}

/**
 * Returns element that scrolls document
 * @return {HTMLElement}
 * @private
 */
function getDocumentScrollingElement() {
  return document.scrollingElement || document.documentElement;
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = undefined;

var _Scrollable = __webpack_require__(52);

var _Scrollable2 = _interopRequireDefault(_Scrollable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Scrollable2.default;
exports.defaultOptions = _Scrollable.defaultOptions;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MirrorDestroyEvent = exports.MirrorMoveEvent = exports.MirrorAttachedEvent = exports.MirrorCreatedEvent = exports.MirrorCreateEvent = exports.MirrorEvent = undefined;

var _AbstractEvent = __webpack_require__(0);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base mirror event
 * @class MirrorEvent
 * @module MirrorEvent
 * @extends AbstractEvent
 */
class MirrorEvent extends _AbstractEvent2.default {
  /**
   * Draggables source element
   * @property source
   * @type {HTMLElement}
   * @readonly
   */
  get source() {
    return this.data.source;
  }

  /**
   * Draggables original source element
   * @property originalSource
   * @type {HTMLElement}
   * @readonly
   */
  get originalSource() {
    return this.data.originalSource;
  }

  /**
   * Draggables source container element
   * @property sourceContainer
   * @type {HTMLElement}
   * @readonly
   */
  get sourceContainer() {
    return this.data.sourceContainer;
  }

  /**
   * Sensor event
   * @property sensorEvent
   * @type {SensorEvent}
   * @readonly
   */
  get sensorEvent() {
    return this.data.sensorEvent;
  }

  /**
   * Drag event
   * @property dragEvent
   * @type {DragEvent}
   * @readonly
   */
  get dragEvent() {
    return this.data.dragEvent;
  }

  /**
   * Original event that triggered sensor event
   * @property originalEvent
   * @type {Event}
   * @readonly
   */
  get originalEvent() {
    if (this.sensorEvent) {
      return this.sensorEvent.originalEvent;
    }

    return null;
  }
}

exports.MirrorEvent = MirrorEvent; /**
                                    * Mirror create event
                                    * @class MirrorCreateEvent
                                    * @module MirrorCreateEvent
                                    * @extends MirrorEvent
                                    */

class MirrorCreateEvent extends MirrorEvent {}

exports.MirrorCreateEvent = MirrorCreateEvent; /**
                                                * Mirror created event
                                                * @class MirrorCreatedEvent
                                                * @module MirrorCreatedEvent
                                                * @extends MirrorEvent
                                                */

MirrorCreateEvent.type = 'mirror:create';
class MirrorCreatedEvent extends MirrorEvent {

  /**
   * Draggables mirror element
   * @property mirror
   * @type {HTMLElement}
   * @readonly
   */
  get mirror() {
    return this.data.mirror;
  }
}

exports.MirrorCreatedEvent = MirrorCreatedEvent; /**
                                                  * Mirror attached event
                                                  * @class MirrorAttachedEvent
                                                  * @module MirrorAttachedEvent
                                                  * @extends MirrorEvent
                                                  */

MirrorCreatedEvent.type = 'mirror:created';
class MirrorAttachedEvent extends MirrorEvent {

  /**
   * Draggables mirror element
   * @property mirror
   * @type {HTMLElement}
   * @readonly
   */
  get mirror() {
    return this.data.mirror;
  }
}

exports.MirrorAttachedEvent = MirrorAttachedEvent; /**
                                                    * Mirror move event
                                                    * @class MirrorMoveEvent
                                                    * @module MirrorMoveEvent
                                                    * @extends MirrorEvent
                                                    */

MirrorAttachedEvent.type = 'mirror:attached';
class MirrorMoveEvent extends MirrorEvent {

  /**
   * Draggables mirror element
   * @property mirror
   * @type {HTMLElement}
   * @readonly
   */
  get mirror() {
    return this.data.mirror;
  }
}

exports.MirrorMoveEvent = MirrorMoveEvent; /**
                                            * Mirror destroy event
                                            * @class MirrorDestroyEvent
                                            * @module MirrorDestroyEvent
                                            * @extends MirrorEvent
                                            */

MirrorMoveEvent.type = 'mirror:move';
MirrorMoveEvent.cancelable = true;
class MirrorDestroyEvent extends MirrorEvent {

  /**
   * Draggables mirror element
   * @property mirror
   * @type {HTMLElement}
   * @readonly
   */
  get mirror() {
    return this.data.mirror;
  }
}
exports.MirrorDestroyEvent = MirrorDestroyEvent;
MirrorDestroyEvent.type = 'mirror:destroy';
MirrorDestroyEvent.cancelable = true;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MirrorEvent = __webpack_require__(54);

Object.keys(_MirrorEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MirrorEvent[key];
    }
  });
});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = exports.getAppendableContainer = exports.onScroll = exports.onMirrorMove = exports.onMirrorCreated = exports.onDragStop = exports.onDragMove = exports.onDragStart = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _AbstractPlugin = __webpack_require__(1);

var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

var _MirrorEvent = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const onDragStart = exports.onDragStart = Symbol('onDragStart');
const onDragMove = exports.onDragMove = Symbol('onDragMove');
const onDragStop = exports.onDragStop = Symbol('onDragStop');
const onMirrorCreated = exports.onMirrorCreated = Symbol('onMirrorCreated');
const onMirrorMove = exports.onMirrorMove = Symbol('onMirrorMove');
const onScroll = exports.onScroll = Symbol('onScroll');
const getAppendableContainer = exports.getAppendableContainer = Symbol('getAppendableContainer');

/**
 * Mirror default options
 * @property {Object} defaultOptions
 * @property {Boolean} defaultOptions.constrainDimensions
 * @property {Boolean} defaultOptions.xAxis
 * @property {Boolean} defaultOptions.yAxis
 * @property {null} defaultOptions.cursorOffsetX
 * @property {null} defaultOptions.cursorOffsetY
 * @type {Object}
 */
const defaultOptions = exports.defaultOptions = {
  constrainDimensions: false,
  xAxis: true,
  yAxis: true,
  cursorOffsetX: null,
  cursorOffsetY: null
};

/**
 * Mirror plugin which controls the mirror positioning while dragging
 * @class Mirror
 * @module Mirror
 * @extends AbstractPlugin
 */
class Mirror extends _AbstractPlugin2.default {
  /**
   * Mirror constructor.
   * @constructs Mirror
   * @param {Draggable} draggable - Draggable instance
   */
  constructor(draggable) {
    super(draggable);

    /**
     * Mirror options
     * @property {Object} options
     * @property {Boolean} options.constrainDimensions
     * @property {Boolean} options.xAxis
     * @property {Boolean} options.yAxis
     * @property {Number|null} options.cursorOffsetX
     * @property {Number|null} options.cursorOffsetY
     * @property {String|HTMLElement|Function} options.appendTo
     * @type {Object}
     */
    this.options = _extends({}, defaultOptions, this.getOptions());

    /**
     * Scroll offset for touch devices because the mirror is positioned fixed
     * @property {Object} scrollOffset
     * @property {Number} scrollOffset.x
     * @property {Number} scrollOffset.y
     */
    this.scrollOffset = { x: 0, y: 0 };

    /**
     * Initial scroll offset for touch devices because the mirror is positioned fixed
     * @property {Object} scrollOffset
     * @property {Number} scrollOffset.x
     * @property {Number} scrollOffset.y
     */
    this.initialScrollOffset = {
      x: window.scrollX,
      y: window.scrollY
    };

    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[onMirrorCreated] = this[onMirrorCreated].bind(this);
    this[onMirrorMove] = this[onMirrorMove].bind(this);
    this[onScroll] = this[onScroll].bind(this);
  }

  /**
   * Attaches plugins event listeners
   */
  attach() {
    this.draggable.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]).on('mirror:created', this[onMirrorCreated]).on('mirror:move', this[onMirrorMove]);
  }

  /**
   * Detaches plugins event listeners
   */
  detach() {
    this.draggable.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]).off('mirror:created', this[onMirrorCreated]).off('mirror:move', this[onMirrorMove]);
  }

  /**
   * Returns options passed through draggable
   * @return {Object}
   */
  getOptions() {
    return this.draggable.options.mirror || {};
  }

  [onDragStart](dragEvent) {
    if (dragEvent.canceled()) {
      return;
    }

    if ('ontouchstart' in window) {
      document.addEventListener('scroll', this[onScroll], true);
    }

    this.initialScrollOffset = {
      x: window.scrollX,
      y: window.scrollY
    };

    const { source, originalSource, sourceContainer, sensorEvent } = dragEvent;

    const mirrorCreateEvent = new _MirrorEvent.MirrorCreateEvent({
      source,
      originalSource,
      sourceContainer,
      sensorEvent,
      dragEvent
    });

    this.draggable.trigger(mirrorCreateEvent);

    if (isNativeDragEvent(sensorEvent) || mirrorCreateEvent.canceled()) {
      return;
    }

    const appendableContainer = this[getAppendableContainer](source) || sourceContainer;
    this.mirror = source.cloneNode(true);

    const mirrorCreatedEvent = new _MirrorEvent.MirrorCreatedEvent({
      source,
      originalSource,
      sourceContainer,
      sensorEvent,
      dragEvent,
      mirror: this.mirror
    });

    const mirrorAttachedEvent = new _MirrorEvent.MirrorAttachedEvent({
      source,
      originalSource,
      sourceContainer,
      sensorEvent,
      dragEvent,
      mirror: this.mirror
    });

    this.draggable.trigger(mirrorCreatedEvent);
    appendableContainer.appendChild(this.mirror);
    this.draggable.trigger(mirrorAttachedEvent);
  }

  [onDragMove](dragEvent) {
    if (!this.mirror || dragEvent.canceled()) {
      return;
    }

    const { source, originalSource, sourceContainer, sensorEvent } = dragEvent;

    const mirrorMoveEvent = new _MirrorEvent.MirrorMoveEvent({
      source,
      originalSource,
      sourceContainer,
      sensorEvent,
      dragEvent,
      mirror: this.mirror
    });

    this.draggable.trigger(mirrorMoveEvent);
  }

  [onDragStop](dragEvent) {
    if ('ontouchstart' in window) {
      document.removeEventListener('scroll', this[onScroll], true);
    }

    this.initialScrollOffset = { x: 0, y: 0 };
    this.scrollOffset = { x: 0, y: 0 };

    if (!this.mirror) {
      return;
    }

    const { source, sourceContainer, sensorEvent } = dragEvent;

    const mirrorDestroyEvent = new _MirrorEvent.MirrorDestroyEvent({
      source,
      mirror: this.mirror,
      sourceContainer,
      sensorEvent,
      dragEvent
    });

    this.draggable.trigger(mirrorDestroyEvent);

    if (!mirrorDestroyEvent.canceled()) {
      this.mirror.parentNode.removeChild(this.mirror);
    }
  }

  [onScroll]() {
    this.scrollOffset = {
      x: window.scrollX - this.initialScrollOffset.x,
      y: window.scrollY - this.initialScrollOffset.y
    };
  }

  /**
   * Mirror created handler
   * @param {MirrorCreatedEvent} mirrorEvent
   * @return {Promise}
   * @private
   */
  [onMirrorCreated]({ mirror, source, sensorEvent }) {
    const mirrorClass = this.draggable.getClassNameFor('mirror');

    const setState = (_ref) => {
      let { mirrorOffset, initialX, initialY } = _ref,
          args = _objectWithoutProperties(_ref, ['mirrorOffset', 'initialX', 'initialY']);

      this.mirrorOffset = mirrorOffset;
      this.initialX = initialX;
      this.initialY = initialY;
      return _extends({ mirrorOffset, initialX, initialY }, args);
    };

    const initialState = {
      mirror,
      source,
      sensorEvent,
      mirrorClass,
      scrollOffset: this.scrollOffset,
      options: this.options
    };

    return Promise.resolve(initialState)
    // Fix reflow here
    .then(computeMirrorDimensions).then(calculateMirrorOffset).then(resetMirror).then(addMirrorClasses).then(positionMirror({ initial: true })).then(removeMirrorID).then(setState);
  }

  /**
   * Mirror move handler
   * @param {MirrorMoveEvent} mirrorEvent
   * @return {Promise|null}
   * @private
   */
  [onMirrorMove](mirrorEvent) {
    if (mirrorEvent.canceled()) {
      return null;
    }

    const initialState = {
      mirror: mirrorEvent.mirror,
      sensorEvent: mirrorEvent.sensorEvent,
      mirrorOffset: this.mirrorOffset,
      options: this.options,
      initialX: this.initialX,
      initialY: this.initialY,
      scrollOffset: this.scrollOffset
    };

    return Promise.resolve(initialState).then(positionMirror({ raf: true }));
  }

  /**
   * Returns appendable container for mirror based on the appendTo option
   * @private
   * @param {Object} options
   * @param {HTMLElement} options.source - Current source
   * @return {HTMLElement}
   */
  [getAppendableContainer](source) {
    const appendTo = this.options.appendTo;

    if (typeof appendTo === 'string') {
      return document.querySelector(appendTo);
    } else if (appendTo instanceof HTMLElement) {
      return appendTo;
    } else if (typeof appendTo === 'function') {
      return appendTo(source);
    } else {
      return source.parentNode;
    }
  }
}

exports.default = Mirror; /**
                           * Computes mirror dimensions based on the source element
                           * Adds sourceRect to state
                           * @param {Object} state
                           * @param {HTMLElement} state.source
                           * @return {Promise}
                           * @private
                           */

function computeMirrorDimensions(_ref2) {
  let { source } = _ref2,
      args = _objectWithoutProperties(_ref2, ['source']);

  return withPromise(resolve => {
    const sourceRect = source.getBoundingClientRect();
    resolve(_extends({ source, sourceRect }, args));
  });
}

/**
 * Calculates mirror offset
 * Adds mirrorOffset to state
 * @param {Object} state
 * @param {SensorEvent} state.sensorEvent
 * @param {DOMRect} state.sourceRect
 * @return {Promise}
 * @private
 */
function calculateMirrorOffset(_ref3) {
  let { sensorEvent, sourceRect, options } = _ref3,
      args = _objectWithoutProperties(_ref3, ['sensorEvent', 'sourceRect', 'options']);

  return withPromise(resolve => {
    const top = options.cursorOffsetY === null ? sensorEvent.clientY - sourceRect.top : options.cursorOffsetY;
    const left = options.cursorOffsetX === null ? sensorEvent.clientX - sourceRect.left : options.cursorOffsetX;

    const mirrorOffset = { top, left };

    resolve(_extends({ sensorEvent, sourceRect, mirrorOffset, options }, args));
  });
}

/**
 * Applys mirror styles
 * @param {Object} state
 * @param {HTMLElement} state.mirror
 * @param {HTMLElement} state.source
 * @param {Object} state.options
 * @return {Promise}
 * @private
 */
function resetMirror(_ref4) {
  let { mirror, source, options } = _ref4,
      args = _objectWithoutProperties(_ref4, ['mirror', 'source', 'options']);

  return withPromise(resolve => {
    let offsetHeight;
    let offsetWidth;

    if (options.constrainDimensions) {
      const computedSourceStyles = getComputedStyle(source);
      offsetHeight = computedSourceStyles.getPropertyValue('height');
      offsetWidth = computedSourceStyles.getPropertyValue('width');
    }

    mirror.style.position = 'fixed';
    mirror.style.pointerEvents = 'none';
    mirror.style.top = 0;
    mirror.style.left = 0;
    mirror.style.margin = 0;

    if (options.constrainDimensions) {
      mirror.style.height = offsetHeight;
      mirror.style.width = offsetWidth;
    }

    resolve(_extends({ mirror, source, options }, args));
  });
}

/**
 * Applys mirror class on mirror element
 * @param {Object} state
 * @param {HTMLElement} state.mirror
 * @param {String} state.mirrorClass
 * @return {Promise}
 * @private
 */
function addMirrorClasses(_ref5) {
  let { mirror, mirrorClass } = _ref5,
      args = _objectWithoutProperties(_ref5, ['mirror', 'mirrorClass']);

  return withPromise(resolve => {
    mirror.classList.add(mirrorClass);
    resolve(_extends({ mirror, mirrorClass }, args));
  });
}

/**
 * Removes source ID from cloned mirror element
 * @param {Object} state
 * @param {HTMLElement} state.mirror
 * @return {Promise}
 * @private
 */
function removeMirrorID(_ref6) {
  let { mirror } = _ref6,
      args = _objectWithoutProperties(_ref6, ['mirror']);

  return withPromise(resolve => {
    mirror.removeAttribute('id');
    delete mirror.id;
    resolve(_extends({ mirror }, args));
  });
}

/**
 * Positions mirror with translate3d
 * @param {Object} state
 * @param {HTMLElement} state.mirror
 * @param {SensorEvent} state.sensorEvent
 * @param {Object} state.mirrorOffset
 * @param {Number} state.initialY
 * @param {Number} state.initialX
 * @param {Object} state.options
 * @return {Promise}
 * @private
 */
function positionMirror({ withFrame = false, initial = false } = {}) {
  return (_ref7) => {
    let { mirror, sensorEvent, mirrorOffset, initialY, initialX, scrollOffset, options } = _ref7,
        args = _objectWithoutProperties(_ref7, ['mirror', 'sensorEvent', 'mirrorOffset', 'initialY', 'initialX', 'scrollOffset', 'options']);

    return withPromise(resolve => {
      const result = _extends({
        mirror,
        sensorEvent,
        mirrorOffset,
        options
      }, args);

      if (mirrorOffset) {
        const x = sensorEvent.clientX - mirrorOffset.left - scrollOffset.x;
        const y = sensorEvent.clientY - mirrorOffset.top - scrollOffset.y;

        if (options.xAxis && options.yAxis || initial) {
          mirror.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        } else if (options.xAxis && !options.yAxis) {
          mirror.style.transform = `translate3d(${x}px, ${initialY}px, 0)`;
        } else if (options.yAxis && !options.xAxis) {
          mirror.style.transform = `translate3d(${initialX}px, ${y}px, 0)`;
        }

        if (initial) {
          result.initialX = x;
          result.initialY = y;
        }
      }

      resolve(result);
    }, { frame: withFrame });
  };
}

/**
 * Wraps functions in promise with potential animation frame option
 * @param {Function} callback
 * @param {Object} options
 * @param {Boolean} options.raf
 * @return {Promise}
 * @private
 */
function withPromise(callback, { raf = false } = {}) {
  return new Promise((resolve, reject) => {
    if (raf) {
      requestAnimationFrame(() => {
        callback(resolve, reject);
      });
    } else {
      callback(resolve, reject);
    }
  });
}

/**
 * Returns true if the sensor event was triggered by a native browser drag event
 * @param {SensorEvent} sensorEvent
 */
function isNativeDragEvent(sensorEvent) {
  return (/^drag/.test(sensorEvent.originalEvent.type)
  );
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = undefined;

var _Mirror = __webpack_require__(56);

var _Mirror2 = _interopRequireDefault(_Mirror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Mirror2.default;
exports.defaultOptions = _Mirror.defaultOptions;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _AbstractPlugin = __webpack_require__(1);

var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onInitialize = Symbol('onInitialize');
const onDestroy = Symbol('onDestroy');

/**
 * Focusable default options
 * @property {Object} defaultOptions
 * @type {Object}
 */
const defaultOptions = {};

/**
 * Focusable plugin
 * @class Focusable
 * @module Focusable
 * @extends AbstractPlugin
 */
class Focusable extends _AbstractPlugin2.default {
  /**
   * Focusable constructor.
   * @constructs Focusable
   * @param {Draggable} draggable - Draggable instance
   */
  constructor(draggable) {
    super(draggable);

    /**
     * Focusable options
     * @property {Object} options
     * @type {Object}
     */
    this.options = _extends({}, defaultOptions, this.getOptions());

    this[onInitialize] = this[onInitialize].bind(this);
    this[onDestroy] = this[onDestroy].bind(this);
  }

  /**
   * Attaches listeners to draggable
   */
  attach() {
    this.draggable.on('draggable:initialize', this[onInitialize]).on('draggable:destroy', this[onDestroy]);
  }

  /**
   * Detaches listeners from draggable
   */
  detach() {
    this.draggable.off('draggable:initialize', this[onInitialize]).off('draggable:destroy', this[onDestroy]);
  }

  /**
   * Returns options passed through draggable
   * @return {Object}
   */
  getOptions() {
    return this.draggable.options.focusable || {};
  }

  /**
   * Returns draggable containers and elements
   * @return {HTMLElement[]}
   */
  getElements() {
    return [...this.draggable.containers, ...this.draggable.getDraggableElements()];
  }

  /**
   * Intialize handler
   * @private
   */
  [onInitialize]() {
    // Can wait until the next best frame is available
    requestAnimationFrame(() => {
      this.getElements().forEach(element => decorateElement(element));
    });
  }

  /**
   * Destroy handler
   * @private
   */
  [onDestroy]() {
    // Can wait until the next best frame is available
    requestAnimationFrame(() => {
      this.getElements().forEach(element => stripElement(element));
    });
  }
}

exports.default = Focusable; /**
                              * Keeps track of all the elements that are missing tabindex attributes
                              * so they can be reset when draggable gets destroyed
                              * @const {HTMLElement[]} elementsWithMissingTabIndex
                              */

const elementsWithMissingTabIndex = [];

/**
 * Decorates element with tabindex attributes
 * @param {HTMLElement} element
 * @return {Object}
 * @private
 */
function decorateElement(element) {
  const hasMissingTabIndex = Boolean(!element.getAttribute('tabindex') && element.tabIndex === -1);

  if (hasMissingTabIndex) {
    elementsWithMissingTabIndex.push(element);
    element.tabIndex = 0;
  }
}

/**
 * Removes elements tabindex attributes
 * @param {HTMLElement} element
 * @private
 */
function stripElement(element) {
  const tabIndexElementPosition = elementsWithMissingTabIndex.indexOf(element);

  if (tabIndexElementPosition !== -1) {
    element.tabIndex = -1;
    elementsWithMissingTabIndex.splice(tabIndexElementPosition, 1);
  }
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Focusable = __webpack_require__(58);

var _Focusable2 = _interopRequireDefault(_Focusable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Focusable2.default;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * All draggable plugins inherit from this class.
 * @abstract
 * @class AbstractPlugin
 * @module AbstractPlugin
 */
class AbstractPlugin {
  /**
   * AbstractPlugin constructor.
   * @constructs AbstractPlugin
   * @param {Draggable} draggable - Draggable instance
   */
  constructor(draggable) {
    /**
     * Draggable instance
     * @property draggable
     * @type {Draggable}
     */
    this.draggable = draggable;
  }

  /**
   * Override to add listeners
   * @abstract
   */
  attach() {
    throw new Error('Not Implemented');
  }

  /**
   * Override to remove listeners
   * @abstract
   */
  detach() {
    throw new Error('Not Implemented');
  }
}
exports.default = AbstractPlugin;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _AbstractPlugin = __webpack_require__(1);

var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onInitialize = Symbol('onInitialize');
const onDestroy = Symbol('onDestroy');
const announceEvent = Symbol('announceEvent');
const announceMessage = Symbol('announceMessage');

const ARIA_RELEVANT = 'aria-relevant';
const ARIA_ATOMIC = 'aria-atomic';
const ARIA_LIVE = 'aria-live';
const ROLE = 'role';

/**
 * Announcement default options
 * @property {Object} defaultOptions
 * @property {Number} defaultOptions.expire
 * @type {Object}
 */
const defaultOptions = exports.defaultOptions = {
  expire: 7000
};

/**
 * Announcement plugin
 * @class Announcement
 * @module Announcement
 * @extends AbstractPlugin
 */
class Announcement extends _AbstractPlugin2.default {
  /**
   * Announcement constructor.
   * @constructs Announcement
   * @param {Draggable} draggable - Draggable instance
   */
  constructor(draggable) {
    super(draggable);

    /**
     * Plugin options
     * @property options
     * @type {Object}
     */
    this.options = _extends({}, defaultOptions, this.getOptions());

    /**
     * Original draggable trigger method. Hack until we have onAll or on('all')
     * @property originalTriggerMethod
     * @type {Function}
     */
    this.originalTriggerMethod = this.draggable.trigger;

    this[onInitialize] = this[onInitialize].bind(this);
    this[onDestroy] = this[onDestroy].bind(this);
  }

  /**
   * Attaches listeners to draggable
   */
  attach() {
    this.draggable.on('draggable:initialize', this[onInitialize]);
  }

  /**
   * Detaches listeners from draggable
   */
  detach() {
    this.draggable.off('draggable:destroy', this[onDestroy]);
  }

  /**
   * Returns passed in options
   */
  getOptions() {
    return this.draggable.options.announcements || {};
  }

  /**
   * Announces event
   * @private
   * @param {AbstractEvent} event
   */
  [announceEvent](event) {
    const message = this.options[event.type];

    if (message && typeof message === 'string') {
      this[announceMessage](message);
    }

    if (message && typeof message === 'function') {
      this[announceMessage](message(event));
    }
  }

  /**
   * Announces message to screen reader
   * @private
   * @param {String} message
   */
  [announceMessage](message) {
    announce(message, { expire: this.options.expire });
  }

  /**
   * Initialize hander
   * @private
   */
  [onInitialize]() {
    // Hack until there is an api for listening for all events
    this.draggable.trigger = event => {
      try {
        this[announceEvent](event);
      } finally {
        // Ensure that original trigger is called
        this.originalTriggerMethod.call(this.draggable, event);
      }
    };
  }

  /**
   * Destroy hander
   * @private
   */
  [onDestroy]() {
    this.draggable.trigger = this.originalTriggerMethod;
  }
}

exports.default = Announcement; /**
                                 * @const {HTMLElement} liveRegion
                                 */

const liveRegion = createRegion();

/**
 * Announces message via live region
 * @param {String} message
 * @param {Object} options
 * @param {Number} options.expire
 */
function announce(message, { expire }) {
  const element = document.createElement('div');

  element.textContent = message;
  liveRegion.appendChild(element);

  return setTimeout(() => {
    liveRegion.removeChild(element);
  }, expire);
}

/**
 * Creates region element
 * @return {HTMLElement}
 */
function createRegion() {
  const element = document.createElement('div');

  element.setAttribute('id', 'draggable-live-region');
  element.setAttribute(ARIA_RELEVANT, 'additions');
  element.setAttribute(ARIA_ATOMIC, 'true');
  element.setAttribute(ARIA_LIVE, 'assertive');
  element.setAttribute(ROLE, 'log');

  element.style.position = 'fixed';
  element.style.width = '1px';
  element.style.height = '1px';
  element.style.top = '-1px';
  element.style.overflow = 'hidden';

  return element;
}

// Append live region element as early as possible
document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(liveRegion);
});

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = undefined;

var _Announcement = __webpack_require__(61);

var _Announcement2 = _interopRequireDefault(_Announcement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Announcement2.default;
exports.defaultOptions = _Announcement.defaultOptions;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DraggableDestroyEvent = exports.DraggableInitializedEvent = exports.DraggableEvent = undefined;

var _AbstractEvent = __webpack_require__(0);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base draggable event
 * @class DraggableEvent
 * @module DraggableEvent
 * @extends AbstractEvent
 */
class DraggableEvent extends _AbstractEvent2.default {

  /**
   * Draggable instance
   * @property draggable
   * @type {Draggable}
   * @readonly
   */
  get draggable() {
    return this.data.draggable;
  }
}

exports.DraggableEvent = DraggableEvent; /**
                                          * Draggable initialized event
                                          * @class DraggableInitializedEvent
                                          * @module DraggableInitializedEvent
                                          * @extends DraggableEvent
                                          */

DraggableEvent.type = 'draggable';
class DraggableInitializedEvent extends DraggableEvent {}

exports.DraggableInitializedEvent = DraggableInitializedEvent; /**
                                                                * Draggable destory event
                                                                * @class DraggableInitializedEvent
                                                                * @module DraggableDestroyEvent
                                                                * @extends DraggableDestroyEvent
                                                                */

DraggableInitializedEvent.type = 'draggable:initialize';
class DraggableDestroyEvent extends DraggableEvent {}
exports.DraggableDestroyEvent = DraggableDestroyEvent;
DraggableDestroyEvent.type = 'draggable:destroy';

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const canceled = Symbol('canceled');

/**
 * All events fired by draggable inherit this class. You can call `cancel()` to
 * cancel a specific event or you can check if an event has been canceled by
 * calling `canceled()`.
 * @abstract
 * @class AbstractEvent
 * @module AbstractEvent
 */
class AbstractEvent {

  /**
   * AbstractEvent constructor.
   * @constructs AbstractEvent
   * @param {object} data - Event data
   */

  /**
   * Event type
   * @static
   * @abstract
   * @property type
   * @type {String}
   */
  constructor(data) {
    this[canceled] = false;
    this.data = data;
  }

  /**
   * Read-only type
   * @abstract
   * @return {String}
   */


  /**
   * Event cancelable
   * @static
   * @abstract
   * @property cancelable
   * @type {Boolean}
   */
  get type() {
    return this.constructor.type;
  }

  /**
   * Read-only cancelable
   * @abstract
   * @return {Boolean}
   */
  get cancelable() {
    return this.constructor.cancelable;
  }

  /**
   * Cancels the event instance
   * @abstract
   */
  cancel() {
    this[canceled] = true;
  }

  /**
   * Check if event has been canceled
   * @abstract
   * @return {Boolean}
   */
  canceled() {
    return Boolean(this[canceled]);
  }

  /**
   * Returns new event instance with existing event data.
   * This method allows for overriding of event data.
   * @param {Object} data
   * @return {AbstractEvent}
   */
  clone(data) {
    return new this.constructor(_extends({}, this.data, data));
  }
}
exports.default = AbstractEvent;
AbstractEvent.type = 'event';
AbstractEvent.cancelable = false;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DragStopEvent = exports.DragPressureEvent = exports.DragOutContainerEvent = exports.DragOverContainerEvent = exports.DragOutEvent = exports.DragOverEvent = exports.DragMoveEvent = exports.DragStartEvent = exports.DragEvent = undefined;

var _AbstractEvent = __webpack_require__(0);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base drag event
 * @class DragEvent
 * @module DragEvent
 * @extends AbstractEvent
 */
class DragEvent extends _AbstractEvent2.default {

  /**
   * Draggables source element
   * @property source
   * @type {HTMLElement}
   * @readonly
   */
  get source() {
    return this.data.source;
  }

  /**
   * Draggables original source element
   * @property originalSource
   * @type {HTMLElement}
   * @readonly
   */
  get originalSource() {
    return this.data.originalSource;
  }

  /**
   * Draggables mirror element
   * @property mirror
   * @type {HTMLElement}
   * @readonly
   */
  get mirror() {
    return this.data.mirror;
  }

  /**
   * Draggables source container element
   * @property sourceContainer
   * @type {HTMLElement}
   * @readonly
   */
  get sourceContainer() {
    return this.data.sourceContainer;
  }

  /**
   * Sensor event
   * @property sensorEvent
   * @type {SensorEvent}
   * @readonly
   */
  get sensorEvent() {
    return this.data.sensorEvent;
  }

  /**
   * Original event that triggered sensor event
   * @property originalEvent
   * @type {Event}
   * @readonly
   */
  get originalEvent() {
    if (this.sensorEvent) {
      return this.sensorEvent.originalEvent;
    }

    return null;
  }
}

exports.DragEvent = DragEvent; /**
                                * Drag start event
                                * @class DragStartEvent
                                * @module DragStartEvent
                                * @extends DragEvent
                                */

DragEvent.type = 'drag';
class DragStartEvent extends DragEvent {}

exports.DragStartEvent = DragStartEvent; /**
                                          * Drag move event
                                          * @class DragMoveEvent
                                          * @module DragMoveEvent
                                          * @extends DragEvent
                                          */

DragStartEvent.type = 'drag:start';
DragStartEvent.cancelable = true;
class DragMoveEvent extends DragEvent {}

exports.DragMoveEvent = DragMoveEvent; /**
                                        * Drag over event
                                        * @class DragOverEvent
                                        * @module DragOverEvent
                                        * @extends DragEvent
                                        */

DragMoveEvent.type = 'drag:move';
class DragOverEvent extends DragEvent {

  /**
   * Draggable container you are over
   * @property overContainer
   * @type {HTMLElement}
   * @readonly
   */
  get overContainer() {
    return this.data.overContainer;
  }

  /**
   * Draggable element you are over
   * @property over
   * @type {HTMLElement}
   * @readonly
   */
  get over() {
    return this.data.over;
  }
}

exports.DragOverEvent = DragOverEvent; /**
                                        * Drag out event
                                        * @class DragOutEvent
                                        * @module DragOutEvent
                                        * @extends DragEvent
                                        */

DragOverEvent.type = 'drag:over';
DragOverEvent.cancelable = true;
class DragOutEvent extends DragEvent {

  /**
   * Draggable container you are over
   * @property overContainer
   * @type {HTMLElement}
   * @readonly
   */
  get overContainer() {
    return this.data.overContainer;
  }

  /**
   * Draggable element you left
   * @property over
   * @type {HTMLElement}
   * @readonly
   */
  get over() {
    return this.data.over;
  }
}

exports.DragOutEvent = DragOutEvent; /**
                                      * Drag over container event
                                      * @class DragOverContainerEvent
                                      * @module DragOverContainerEvent
                                      * @extends DragEvent
                                      */

DragOutEvent.type = 'drag:out';
class DragOverContainerEvent extends DragEvent {

  /**
   * Draggable container you are over
   * @property overContainer
   * @type {HTMLElement}
   * @readonly
   */
  get overContainer() {
    return this.data.overContainer;
  }
}

exports.DragOverContainerEvent = DragOverContainerEvent; /**
                                                          * Drag out container event
                                                          * @class DragOutContainerEvent
                                                          * @module DragOutContainerEvent
                                                          * @extends DragEvent
                                                          */

DragOverContainerEvent.type = 'drag:over:container';
class DragOutContainerEvent extends DragEvent {

  /**
   * Draggable container you left
   * @property overContainer
   * @type {HTMLElement}
   * @readonly
   */
  get overContainer() {
    return this.data.overContainer;
  }
}

exports.DragOutContainerEvent = DragOutContainerEvent; /**
                                                        * Drag pressure event
                                                        * @class DragPressureEvent
                                                        * @module DragPressureEvent
                                                        * @extends DragEvent
                                                        */

DragOutContainerEvent.type = 'drag:out:container';
class DragPressureEvent extends DragEvent {

  /**
   * Pressure applied on draggable element
   * @property pressure
   * @type {Number}
   * @readonly
   */
  get pressure() {
    return this.data.pressure;
  }
}

exports.DragPressureEvent = DragPressureEvent; /**
                                                * Drag stop event
                                                * @class DragStopEvent
                                                * @module DragStopEvent
                                                * @extends DragEvent
                                                */

DragPressureEvent.type = 'drag:pressure';
class DragStopEvent extends DragEvent {}
exports.DragStopEvent = DragStopEvent;
DragStopEvent.type = 'drag:stop';

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plugins = exports.Sensors = exports.Sortable = exports.Swappable = exports.Droppable = exports.Draggable = exports.BasePlugin = exports.BaseEvent = undefined;

var _Draggable = __webpack_require__(5);

Object.defineProperty(exports, 'Draggable', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Draggable).default;
  }
});

var _Droppable = __webpack_require__(34);

Object.defineProperty(exports, 'Droppable', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Droppable).default;
  }
});

var _Swappable = __webpack_require__(31);

Object.defineProperty(exports, 'Swappable', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Swappable).default;
  }
});

var _Sortable = __webpack_require__(28);

Object.defineProperty(exports, 'Sortable', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Sortable).default;
  }
});

var _AbstractEvent = __webpack_require__(0);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

var _AbstractPlugin = __webpack_require__(1);

var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

var _Sensors = __webpack_require__(6);

var Sensors = _interopRequireWildcard(_Sensors);

var _Plugins = __webpack_require__(25);

var Plugins = _interopRequireWildcard(_Plugins);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BaseEvent = _AbstractEvent2.default;
exports.BasePlugin = _AbstractPlugin2.default;
exports.Sensors = Sensors;
exports.Plugins = Plugins;

/***/ })
/******/ ]);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2xpYi9kcmFnZ2FibGUuYnVuZGxlLmpzIl0sIm5hbWVzIjpbIk1iaXpDbXNGaWVsZHMiLCJjb25maWciLCJ0ZW1wbGF0ZVJlbmRlciIsImRlYnVnIiwidGFyZ2V0cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInF1ZXJ5U2VsZWN0b3IiLCJ1aUVsZW1lbnRzIiwidHJhbnNsYXRpb25zIiwidWlFbGVtZW50Q29udGFpbmVyQ2xhc3MiLCJsb2ciLCJsZW5ndGgiLCJ0YXJnZXQiLCJjb250ZW50IiwidmFsdWUiLCJqc29uQ29udGVudCIsIkpTT04iLCJwYXJzZSIsImUiLCJlcnJvciIsImluaXRGaWVsZCIsImluaXREcmFnZ2FibGUiLCJhZGRTdHlsZXMiLCJzZXRBdHRyaWJ1dGUiLCJlbGVtZW50c0NvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ1aUVsZW1lbnQiLCJ0eXBlIiwidWlFbGVtZW50TWV0YURhdGEiLCJyZW5kZXJlZFVpRWxlbWVudE1ldGFEYXRhIiwicmVuZGVyVWlFbGVtZW50TWV0YURhdGEiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJwYXJlbnROb2RlIiwiYXBwZW5kQ2hpbGQiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJlZGl0IiwiY29udGFpbmVyU2VsZWN0b3IiLCJjb250YWluZXJzIiwiU29ydGFibGUiLCJkcmFnZ2FibGUiLCJtaXJyb3IiLCJhcHBlbmRUbyIsImNvbnN0cmFpbkRpbWVuc2lvbnMiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZVRhZyIsInN0eWxlcyIsImNyZWF0ZVRleHROb2RlIiwicmVtb3ZlQXR0cmlidXRlIiwicmVtb3ZlIiwiY29uc29sZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbXMiLCJtb25zaWV1cmJpekNtc1BsdWdpbkNvbmZpZyIsImluaXQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFFQTs7OztJQUdNQSxhOzs7QUFFRjs7OztBQUlBLHlCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2hCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsS0FBS0QsTUFBTCxDQUFZQyxjQUFsQztBQUNBLFNBQUtDLEtBQUwsR0FBYSxLQUFLRixNQUFMLENBQVlFLEtBQXpCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQyxRQUFRLENBQUNDLGdCQUFULENBQTBCTCxNQUFNLENBQUNNLGFBQWpDLENBQWY7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEtBQUtQLE1BQUwsQ0FBWU8sVUFBOUI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLEtBQUtSLE1BQUwsQ0FBWVEsWUFBaEM7QUFDQSxTQUFLQyx1QkFBTCxHQUErQix1QkFBL0I7O0FBQ0EsUUFBSSxLQUFLUCxLQUFULEVBQWdCO0FBQ1osV0FBS1EsR0FBTCxDQUFTLHdCQUFULEVBQW1DLEtBQUtWLE1BQXhDO0FBQ0EsV0FBS1UsR0FBTCxDQUFTLHNCQUFULEVBQWlDLEtBQUtQLE9BQUwsQ0FBYVEsTUFBOUM7QUFDSDtBQUNKO0FBRUQ7Ozs7Ozs7MkJBR087QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDSCw2QkFBbUIsS0FBS1IsT0FBeEIsOEhBQWlDO0FBQUEsY0FBeEJTLE1BQXdCO0FBQzdCLGNBQUlDLE9BQU8sR0FBR0QsTUFBTSxDQUFDRSxLQUFyQjtBQUNBLGVBQUtKLEdBQUwsQ0FBUyxxQkFBVCxFQUFnQ0csT0FBaEM7QUFDQSxjQUFJRSxXQUFXLFNBQWY7O0FBQ0EsY0FBSTtBQUNBQSx1QkFBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osT0FBWCxDQUFkO0FBQ0gsV0FGRCxDQUVFLE9BQU1LLENBQU4sRUFBUztBQUNQLGlCQUFLQyxLQUFMLENBQVcsa0RBQVgsRUFBK0ROLE9BQS9EO0FBQ0E7QUFDSDs7QUFDRCxlQUFLTyxTQUFMLENBQWVSLE1BQWYsRUFBdUJHLFdBQXZCO0FBQ0g7QUFaRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWNILFdBQUtNLGFBQUw7QUFDQSxXQUFLQyxTQUFMO0FBQ0g7QUFFRDs7Ozs7Ozs7OzhCQU1VVixNLEVBQVFHLFcsRUFBYTtBQUMzQixXQUFLTCxHQUFMLENBQVMsa0NBQVQsRUFBNkNLLFdBQTdDLEVBRDJCLENBRzNCOztBQUNBSCxZQUFNLENBQUNXLFlBQVAsQ0FBb0IsUUFBcEIsRUFBOEIsTUFBOUIsRUFKMkIsQ0FNM0I7O0FBQ0EsVUFBTUMsaUJBQWlCLEdBQUdwQixRQUFRLENBQUNxQixhQUFULENBQXVCLEtBQXZCLENBQTFCO0FBQ0FELHVCQUFpQixDQUFDRSxTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsSUFBaEMsRUFBc0MsU0FBdEMsRUFBaUQsV0FBakQsRUFBOEQsS0FBS2xCLHVCQUFuRSxFQVIyQixDQVFrRTtBQUU3Rjs7QUFDQSxVQUFJVSxLQUFLLEdBQUcsS0FBWjtBQVgyQjtBQUFBO0FBQUE7O0FBQUE7QUFZM0IsOEJBQXNCSixXQUF0QixtSUFBbUM7QUFBQSxjQUExQmEsU0FBMEI7QUFDL0I7QUFDQSxlQUFLbEIsR0FBTCxDQUFTLG1CQUFULEVBQThCa0IsU0FBOUI7O0FBQ0EsY0FBSSxPQUFPLEtBQUtyQixVQUFMLENBQWdCcUIsU0FBUyxDQUFDQyxJQUExQixDQUFQLEtBQTJDLFdBQS9DLEVBQTREO0FBQ3hEVixpQkFBSyxHQUFHLElBQVI7QUFDQSxpQkFBS0EsS0FBTCxDQUFXLDhCQUFYLEVBQTJDUyxTQUFTLENBQUNDLElBQXJEO0FBQ0E7QUFDSCxXQVA4QixDQVMvQjs7O0FBQ0EsY0FBSUMsaUJBQWlCLEdBQUcsS0FBS3ZCLFVBQUwsQ0FBZ0JxQixTQUFTLENBQUNDLElBQTFCLENBQXhCO0FBQ0EsZUFBS25CLEdBQUwsQ0FBUyxxQ0FBVCxFQUFnRG9CLGlCQUFoRDtBQUNBLGNBQUlDLHlCQUF5QixHQUFHLEtBQUtDLHVCQUFMLENBQTZCRixpQkFBN0IsRUFBZ0QsS0FBSzdCLGNBQXJELENBQWhDOztBQUNBLGNBQUk4Qix5QkFBeUIsS0FBSyxFQUFsQyxFQUFzQztBQUNsQ1osaUJBQUssR0FBRyxJQUFSO0FBQ0E7QUFDSCxXQWhCOEIsQ0FrQi9COzs7QUFDQSxlQUFLVCxHQUFMLENBQVMsaUNBQVQsRUFBNENxQix5QkFBNUM7QUFDQVAsMkJBQWlCLENBQUNTLGtCQUFsQixDQUFxQyxXQUFyQyxFQUFrREYseUJBQWxEO0FBQ0gsU0FqQzBCLENBbUMzQjs7QUFuQzJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBb0MzQixVQUFJLENBQUNaLEtBQUwsRUFBWTtBQUNSUCxjQUFNLENBQUNzQixVQUFQLENBQWtCQyxXQUFsQixDQUE4QlgsaUJBQTlCO0FBQ0g7QUFDSjtBQUVEOzs7Ozs7Ozs0Q0FLd0JNLGlCLEVBQW1CN0IsYyxFQUFnQjtBQUN2RCxVQUFJQSxjQUFjLEtBQUssUUFBdkIsRUFBaUM7QUFDN0Isa1FBSStDNkIsaUJBQWlCLENBQUNNLEtBSmpFLDRMQU9vQ04saUJBQWlCLENBQUNPLEtBUHRELCtDQVFpQlAsaUJBQWlCLENBQUNRLFdBUm5DLCtJQVUwRCxLQUFLOUIsWUFBTCxDQUFrQitCLElBVjVFLHlHQVdtRSxLQUFLL0IsWUFBTCxVQVhuRTtBQWlCSDs7QUFFRCxXQUFLVyxLQUFMLENBQVcsMkJBQVgsRUFBd0NsQixjQUF4QztBQUNBLGFBQU8sRUFBUDtBQUNIOzs7b0NBRWU7QUFDWixVQUFNdUMsaUJBQWlCLEdBQUcsWUFBMUI7QUFDQSxVQUFNQyxVQUFVLEdBQUdyQyxRQUFRLENBQUNDLGdCQUFULENBQTBCbUMsaUJBQTFCLENBQW5CO0FBRUEsVUFBSUUsMkRBQUosQ0FBYUQsVUFBYixFQUF5QjtBQUNyQkUsaUJBQVMsRUFBRSxZQURVO0FBRXJCQyxjQUFNLEVBQUU7QUFDSkMsa0JBQVEsRUFBRUwsaUJBRE47QUFFSk0sNkJBQW1CLEVBQUU7QUFGakI7QUFGYSxPQUF6QjtBQU9IOzs7Z0NBRVc7QUFDUixVQUFNQyxJQUFJLEdBQUczQyxRQUFRLENBQUM0QyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxDQUFiO0FBQ0EsVUFBTUMsUUFBUSxHQUFHN0MsUUFBUSxDQUFDcUIsYUFBVCxDQUF1QixPQUF2QixDQUFqQjtBQUNBLFVBQU15QixNQUFNLDRGQUFaO0FBTUFELGNBQVEsQ0FBQzFCLFlBQVQsQ0FBc0IsTUFBdEIsRUFBOEIsVUFBOUI7QUFDQTBCLGNBQVEsQ0FBQ2QsV0FBVCxDQUFxQi9CLFFBQVEsQ0FBQytDLGNBQVQsQ0FBd0JELE1BQXhCLENBQXJCO0FBRUFILFVBQUksQ0FBQ1osV0FBTCxDQUFpQmMsUUFBakI7QUFDSDtBQUVEOzs7Ozs7Ozs7MEJBTU1YLFcsRUFBYXpCLE8sRUFBUztBQUN4QjtBQUR3QjtBQUFBO0FBQUE7O0FBQUE7QUFFeEIsOEJBQW1CLEtBQUtWLE9BQXhCLG1JQUFpQztBQUFBLGNBQXhCUyxNQUF3QjtBQUM3QkEsZ0JBQU0sQ0FBQ3dDLGVBQVAsQ0FBdUIsUUFBdkI7QUFDSCxTQUp1QixDQUt4Qjs7QUFMd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFNeEIsOEJBQW1CaEQsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixNQUFNLEtBQUtJLHVCQUFyQyxDQUFuQixtSUFBa0Y7QUFBQSxjQUF6RUcsT0FBeUU7O0FBQzlFQSxpQkFBTSxDQUFDeUMsTUFBUDtBQUNIO0FBUnVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVXhCLFVBQUksS0FBS25ELEtBQVQsRUFBZ0I7QUFDWm9ELGVBQU8sQ0FBQ25DLEtBQVIsQ0FBY21CLFdBQWQ7QUFDQWdCLGVBQU8sQ0FBQ25DLEtBQVIsQ0FBY04sT0FBZDtBQUNIO0FBQ0o7QUFFRDs7Ozs7Ozs7O3dCQU1JeUIsVyxFQUFhekIsTyxFQUFTO0FBQ3RCLFVBQUksS0FBS1gsS0FBVCxFQUFnQjtBQUNab0QsZUFBTyxDQUFDNUMsR0FBUixDQUFZNEIsV0FBWjtBQUNBZ0IsZUFBTyxDQUFDNUMsR0FBUixDQUFZRyxPQUFaO0FBQ0g7QUFDSjs7OztLQUdMOzs7QUFDQVQsUUFBUSxDQUFDbUQsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQsTUFBSUMsR0FBRyxHQUFHLElBQUl6RCxhQUFKLENBQWtCMEQsMEJBQWxCLENBQVY7QUFDQUQsS0FBRyxDQUFDRSxJQUFKO0FBQ0gsQ0FIRCxFOzs7Ozs7Ozs7OztBQzVMQTtBQUNBLElBQUksSUFBeUQ7QUFDN0Q7QUFDQSxNQUFNLEVBSzBCO0FBQ2hDLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0NBQWdDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxrQkFBa0I7QUFDbEY7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQ0FBaUM7QUFDbEYsd0hBQXdILG1CQUFtQixFQUFFO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRCx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELCtEQUErRDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rjs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELHNDQUFz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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rjs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsWUFBWTtBQUNaO0FBQ0EsZ0RBQWdELDRCQUE0QjtBQUM1RTtBQUNBOztBQUVBLG9CQUFvQixXQUFXLFFBQVEsU0FBUztBQUNoRDs7QUFFQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hELGFBQWEsT0FBTztBQUNwQjtBQUNBLDJDQUEyQztBQUMzQyxpQ0FBaUM7QUFDakMsZ0NBQWdDLG1EQUFtRDtBQUNuRixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGVBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVELG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsWUFBWTtBQUNaO0FBQ0EsZ0RBQWdELHNCQUFzQjtBQUN0RTtBQUNBOztBQUVBLG9CQUFvQixXQUFXLFFBQVEsYUFBYTtBQUNwRDs7QUFFQTtBQUNBO0FBQ0EsV0FBVyx1QkFBdUI7QUFDbEMsWUFBWTtBQUNaO0FBQ0EsaURBQWlELHNCQUFzQjtBQUN2RTtBQUNBOztBQUVBLHFCQUFxQixXQUFXLFFBQVEsYUFBYTtBQUNyRDs7QUFFQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRCxhQUFhLE9BQU87QUFDcEI7QUFDQSwyQ0FBMkM7QUFDM0MsaUNBQWlDO0FBQ2pDLDBCQUEwQix1Q0FBdUM7QUFDakUsZ0NBQWdDLG1EQUFtRDtBQUNuRixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGVBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0IsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9B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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRCxhQUFhLE9BQU87QUFDcEI7QUFDQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hELGFBQWEsT0FBTztBQUNwQjtBQUNBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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O0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLDhDQUE4QyxpQkFBaUIscUJBQXFCLG9DQUFvQyw2REFBNkQsb0JBQW9CLEVBQUUsZUFBZTs7QUFFMU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLEtBQUs7QUFDbkIsY0FBYyxLQUFLO0FBQ25CLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsa0JBQWtCLFFBQVE7QUFDMUIsa0JBQWtCLFFBQVE7QUFDMUIsa0JBQWtCLFFBQVE7QUFDMUIsa0JBQWtCLFlBQVk7QUFDOUIsa0JBQWtCLFlBQVk7QUFDOUIsa0JBQWtCLDRCQUE0QjtBQUM5QyxjQUFjO0FBQ2Q7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QixrQkFBa0IsT0FBTztBQUN6QixrQkFBa0IsT0FBTztBQUN6QjtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLGtCQUFrQixPQUFPO0FBQ3pCLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLHVEQUF1RDs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsdURBQXVEOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7QUFDaEMseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUEsV0FBVyx1Q0FBdUM7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQyxjQUFjO0FBQ2Q7QUFDQTtBQUNBLHFCQUFxQiw4QkFBOEI7QUFDbkQ7O0FBRUE7QUFDQSxXQUFXLG1DQUFtQztBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUNBQW1DO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZIQUE2SCxnQkFBZ0I7QUFDN0k7O0FBRUE7QUFDQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhEQUE4RCxZQUFZO0FBQzFFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLFlBQVk7QUFDekIsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUMscUNBQXFDLFlBQVk7QUFDakQsc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLFNBQVM7QUFDaEI7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0MsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFlBQVk7QUFDdkIsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxPQUFPLG1DQUFtQztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCOztBQUUxQixzQkFBc0IsaURBQWlEO0FBQ3ZFLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsWUFBWTtBQUN2QixXQUFXLFlBQVk7QUFDdkIsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxPQUFPLDBCQUEwQjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQiwwQkFBMEI7QUFDaEQsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxZQUFZO0FBQ3ZCLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsT0FBTyxzQkFBc0I7QUFDN0I7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixzQkFBc0I7QUFDNUMsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxZQUFZO0FBQ3ZCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxPQUFPLFNBQVM7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQVM7QUFDL0IsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxZQUFZO0FBQ3ZCLFdBQVcsWUFBWTtBQUN2QixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQSx5QkFBeUIscUNBQXFDLEtBQUs7QUFDbkU7QUFDQSxTQUFTLCtFQUErRTtBQUN4Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCxFQUFFLE1BQU0sRUFBRTtBQUM1RCxTQUFTO0FBQ1Qsa0RBQWtELEVBQUUsTUFBTSxTQUFTO0FBQ25FLFNBQVM7QUFDVCxrREFBa0QsU0FBUyxNQUFNLEVBQUU7QUFDbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUssR0FBRyxtQkFBbUI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQSxnQ0FBZ0MsY0FBYyxLQUFLO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLGNBQWM7QUFDZDtBQUNBLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0Esd0NBQXdDLGNBQWM7QUFDdEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rjs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxjQUFjO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQSx1QkFBdUIsOEJBQThCO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCO0FBQy9CLDJDQUEyQyxZQUFZO0FBQ3ZEOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBLDRCQUE0QixTQUFTO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVELG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNRLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQSxDQUFDLEUiLCJmaWxlIjoianMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvcHVibGljL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9hcHAuanNcIik7XG4iLCJpbXBvcnQge1NvcnRhYmxlfSBmcm9tICdAc2hvcGlmeS9kcmFnZ2FibGUnO1xuXG4vKipcbiAqIENsYXNzIHRvIG1hbmFnZSBDTVMgZmllbGRzIHdpdGggVUkgRWxlbWVudHNcbiAqL1xuY2xhc3MgTWJpekNtc0ZpZWxkcyB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBmb3IgTWJpekNtc0ZpZWxkcywgc2VlIGNvbmZpZyBpbiBgc3JjL1Jlc291cmNlcy92aWV3cy9BZG1pbi9hcHBfamF2YXNjcmlwdC5odG1sLnR3aWdgXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVJlbmRlciA9IHRoaXMuY29uZmlnLnRlbXBsYXRlUmVuZGVyO1xuICAgICAgICB0aGlzLmRlYnVnID0gdGhpcy5jb25maWcuZGVidWc7XG4gICAgICAgIHRoaXMudGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLnF1ZXJ5U2VsZWN0b3IpO1xuICAgICAgICB0aGlzLnVpRWxlbWVudHMgPSB0aGlzLmNvbmZpZy51aUVsZW1lbnRzO1xuICAgICAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IHRoaXMuY29uZmlnLnRyYW5zbGF0aW9ucztcbiAgICAgICAgdGhpcy51aUVsZW1lbnRDb250YWluZXJDbGFzcyA9ICdjb21wb25lbnQtdWktZWxlbWVudHMnO1xuICAgICAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgICAgICAgdGhpcy5sb2coJ1BsdWdpbiBjb25maWd1cmF0aW9uIDonLCB0aGlzLmNvbmZpZyk7XG4gICAgICAgICAgICB0aGlzLmxvZygnTWF0Y2hlZCBlbGVtZW50KHMpIDonLCB0aGlzLnRhcmdldHMubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgZWFjaCBDTVMgZWxlbWVudFxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIGZvciAobGV0IHRhcmdldCBvZiB0aGlzLnRhcmdldHMpIHtcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gdGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5sb2coJ1RhcmdldFxcJ3MgY29udGVudCA6JywgY29udGVudCk7XG4gICAgICAgICAgICBsZXQganNvbkNvbnRlbnQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGpzb25Db250ZW50ID0gSlNPTi5wYXJzZShjb250ZW50KTtcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoJ1VuYWJsZSB0byBwYXJzZSB0aGUgQ01TIEpTT04gZm9yIHRoaXMgY29udGVudCA6ICcsIGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbml0RmllbGQodGFyZ2V0LCBqc29uQ29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXREcmFnZ2FibGUoKTtcbiAgICAgICAgdGhpcy5hZGRTdHlsZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IHRoZSBmaWVsZCBkZXBlbmRpbmcgb24gaXQncyBwYXJzZWQgY29udGVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqIEBwYXJhbSBqc29uQ29udGVudCBbe3R5cGU6IFwiVUkgRWxlbWVudCBUeXBlXCIsIGZpZWxkczoge319XVxuICAgICAqL1xuICAgIGluaXRGaWVsZCh0YXJnZXQsIGpzb25Db250ZW50KSB7XG4gICAgICAgIHRoaXMubG9nKCdJbml0IGZpZWxkIHdpdGggcGFyc2VkIGNvbnRlbnQgOicsIGpzb25Db250ZW50KTtcblxuICAgICAgICAvLyBIaWRlIG9yaWdpbmFsIGlucHV0XG4gICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgLy8gSW5pdCBjb250YWluZXJcbiAgICAgICAgY29uc3QgZWxlbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndWknLCAnc2VnbWVudCcsICdkcmFnLWxpc3QnLCB0aGlzLnVpRWxlbWVudENvbnRhaW5lckNsYXNzKTsgLy8gQFRPRE8gbWFuYWdlIHJlbmRlciBkZXBlbmRpbmcgb24gdGVtcGxhdGVSZW5kZXJcblxuICAgICAgICAvLyBMb29wIG9uIFVJIEVsZW1lbnRzXG4gICAgICAgIGxldCBlcnJvciA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCB1aUVsZW1lbnQgb2YganNvbkNvbnRlbnQpIHtcbiAgICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBVaSBFbGVtZW50IHR5cGVcbiAgICAgICAgICAgIHRoaXMubG9nKCdJbml0IFVJIEVsZW1lbnQgOicsIHVpRWxlbWVudCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudWlFbGVtZW50c1t1aUVsZW1lbnQudHlwZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoJ0Nhbm5vdCBmaW5kIGVsZW1lbnQgb2YgdHlwZSAnLCB1aUVsZW1lbnQudHlwZSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlbmRlciBVaSBFbGVtZW50IG1ldGEgZGF0YVxuICAgICAgICAgICAgbGV0IHVpRWxlbWVudE1ldGFEYXRhID0gdGhpcy51aUVsZW1lbnRzW3VpRWxlbWVudC50eXBlXTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdNYXRjaGVkIFVpIEVsZW1lbnQgd2l0aCBtZXRhIGRhdGEgOicsIHVpRWxlbWVudE1ldGFEYXRhKTtcbiAgICAgICAgICAgIGxldCByZW5kZXJlZFVpRWxlbWVudE1ldGFEYXRhID0gdGhpcy5yZW5kZXJVaUVsZW1lbnRNZXRhRGF0YSh1aUVsZW1lbnRNZXRhRGF0YSwgdGhpcy50ZW1wbGF0ZVJlbmRlcik7XG4gICAgICAgICAgICBpZiAocmVuZGVyZWRVaUVsZW1lbnRNZXRhRGF0YSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCByZW5kZXJlZCBVaSBFbGVtZW50IG1ldGEgZGF0YSBpbiBjb250YWluZXJcbiAgICAgICAgICAgIHRoaXMubG9nKCdSZW5kZXJlZCBVaSBFbGVtZW50IG1ldGEgZGF0YSA6JywgcmVuZGVyZWRVaUVsZW1lbnRNZXRhRGF0YSk7XG4gICAgICAgICAgICBlbGVtZW50c0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHJlbmRlcmVkVWlFbGVtZW50TWV0YURhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXBwZW5kIGdlbmVyYXRlZCBIVE1MIHRvIGRpc3BsYXkgY3VycmVudCBVSSBFbGVtZW50cyBvZiB0YXJnZXRcbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZWxlbWVudHNDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIG1hcmt1cCB0byBkaXNwbGF5IFVJIEVsZW1lbnQgbWV0YSBkYXRhIGRlcGVuZGluZyBvbiByZW5kZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1aUVsZW1lbnRNZXRhRGF0YSB7c2hvcnRfZGVzY3JpcHRpb246IFwiU2hvcnQgZGVzY3JpcHRpb25cIiwgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb25cIiwgdGl0bGU6IFwiVGl0bGVcIiwgaW1hZ2U6IFwiL3BhdGgvdG8vaW1hZ2UuanBnXCJ9XG4gICAgICovXG4gICAgcmVuZGVyVWlFbGVtZW50TWV0YURhdGEodWlFbGVtZW50TWV0YURhdGEsIHRlbXBsYXRlUmVuZGVyKSB7XG4gICAgICAgIGlmICh0ZW1wbGF0ZVJlbmRlciA9PT0gJ3N5bGl1cycpIHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgc2VnbWVudCByYWlzZWQgZHJhZy1pdGVtXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3VyIHdpZGUgY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwidWkgc21hbGwgaW1hZ2VcIiBzcmM9XCIke3VpRWxlbWVudE1ldGFEYXRhLmltYWdlfVwiIGFsdD1cIlwiIHdpZHRoPVwiMTUwXCIgaGVpZ2h0PVwiMTUwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHdlbHZlIHdpZGUgY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ1aSBoZWFkZXJcIj4ke3VpRWxlbWVudE1ldGFEYXRhLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3VpRWxlbWVudE1ldGFEYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBidXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVpIGJ1dHRvblwiIHR5cGU9XCJidXR0b25cIj4ke3RoaXMudHJhbnNsYXRpb25zLmVkaXR9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVpIGJ1dHRvbiBuZWdhdGl2ZVwiIHR5cGU9XCJidXR0b25cIj4ke3RoaXMudHJhbnNsYXRpb25zLmRlbGV0ZX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXJyb3IoJ0Nhbm5vdCBmaW5kIHJlbmRlciBmb3IgOiAnLCB0ZW1wbGF0ZVJlbmRlcik7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpbml0RHJhZ2dhYmxlKCkge1xuICAgICAgICBjb25zdCBjb250YWluZXJTZWxlY3RvciA9ICcuZHJhZy1pdGVtJztcbiAgICAgICAgY29uc3QgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29udGFpbmVyU2VsZWN0b3IpO1xuXG4gICAgICAgIG5ldyBTb3J0YWJsZShjb250YWluZXJzLCB7XG4gICAgICAgICAgICBkcmFnZ2FibGU6ICcuZHJhZy1pdGVtJyxcbiAgICAgICAgICAgIG1pcnJvcjoge1xuICAgICAgICAgICAgICAgIGFwcGVuZFRvOiBjb250YWluZXJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICBjb25zdHJhaW5EaW1lbnNpb25zOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkU3R5bGVzKCkge1xuICAgICAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgICAgY29uc3Qgc3R5bGVUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBjb25zdCBzdHlsZXMgPSBgXG4gICAgICAgICAgICAuZHJhZ2dhYmxlLS1vdmVyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYDtcblxuICAgICAgICBzdHlsZVRhZy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgICAgc3R5bGVUYWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3R5bGVzKSk7XG5cbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZVRhZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGNvbnNvbGUgZXJyb3IgaWYgZGVidWdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSBjb250ZW50XG4gICAgICovXG4gICAgZXJyb3IoZGVzY3JpcHRpb24sIGNvbnRlbnQpIHtcbiAgICAgICAgLy8gSWYgZXJyb3IsIGRpc3BsYXkgb3JpZ2luYWwgZmllbGRzXG4gICAgICAgIGZvciAobGV0IHRhcmdldCBvZiB0aGlzLnRhcmdldHMpIHtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSBnZW5lcmF0ZWQgYmxvY2tzXG4gICAgICAgIGZvciAobGV0IHRhcmdldCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMudWlFbGVtZW50Q29udGFpbmVyQ2xhc3MpKSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihkZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGNvbnNvbGUgbG9nIGlmIGRlYnVnIGlzIHRydWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSBjb250ZW50XG4gICAgICovXG4gICAgbG9nKGRlc2NyaXB0aW9uLCBjb250ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlYnVnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gSW5pdCB0aGUgcGx1Z2luXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGxldCBjbXMgPSBuZXcgTWJpekNtc0ZpZWxkcyhtb25zaWV1cmJpekNtc1BsdWdpbkNvbmZpZyk7XG4gICAgY21zLmluaXQoKTtcbn0pO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJEcmFnZ2FibGVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRHJhZ2dhYmxlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkRyYWdnYWJsZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2Nik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfQWJzdHJhY3RFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oNjQpO1xuXG52YXIgX0Fic3RyYWN0RXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWJzdHJhY3RFdmVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9BYnN0cmFjdEV2ZW50Mi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9BYnN0cmFjdFBsdWdpbiA9IF9fd2VicGFja19yZXF1aXJlX18oNjApO1xuXG52YXIgX0Fic3RyYWN0UGx1Z2luMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Fic3RyYWN0UGx1Z2luKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX0Fic3RyYWN0UGx1Z2luMi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jbG9zZXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1MSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2xvc2VzdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nsb3Nlc3QpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3JlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ5KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVxdWVzdE5leHRBbmltYXRpb25GcmFtZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1NlbnNvckV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0NCk7XG5cbk9iamVjdC5rZXlzKF9TZW5zb3JFdmVudCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX1NlbnNvckV2ZW50W2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9TZW5zb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ3KTtcblxudmFyIF9TZW5zb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2Vuc29yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1NlbnNvcjIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfRHJhZ0V2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cbk9iamVjdC5rZXlzKF9EcmFnRXZlbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9EcmFnRXZlbnRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfRHJhZ2dhYmxlRXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblxuT2JqZWN0LmtleXMoX0RyYWdnYWJsZUV2ZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfRHJhZ2dhYmxlRXZlbnRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfUGx1Z2lucyA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXG5PYmplY3Qua2V5cyhfUGx1Z2lucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX1BsdWdpbnNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfU2Vuc29ycyA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cbk9iamVjdC5rZXlzKF9TZW5zb3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfU2Vuc29yc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9EcmFnZ2FibGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM3KTtcblxudmFyIF9EcmFnZ2FibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJhZ2dhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX0RyYWdnYWJsZTIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfU2Vuc29yID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTZW5zb3InLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TZW5zb3IpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX01vdXNlU2Vuc29yID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Nik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTW91c2VTZW5zb3InLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb3VzZVNlbnNvcikuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfVG91Y2hTZW5zb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQzKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdUb3VjaFNlbnNvcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RvdWNoU2Vuc29yKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9EcmFnU2Vuc29yID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRHJhZ1NlbnNvcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0RyYWdTZW5zb3IpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0ZvcmNlVG91Y2hTZW5zb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM5KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JjZVRvdWNoU2Vuc29yJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9yY2VUb3VjaFNlbnNvcikuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfU2Vuc29yRXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG5PYmplY3Qua2V5cyhfU2Vuc29yRXZlbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9TZW5zb3JFdmVudFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfU25hcHBhYmxlRXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcblxuT2JqZWN0LmtleXMoX1NuYXBwYWJsZUV2ZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfU25hcHBhYmxlRXZlbnRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0NvbGxpZGFibGVFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpO1xuXG5PYmplY3Qua2V5cyhfQ29sbGlkYWJsZUV2ZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfQ29sbGlkYWJsZUV2ZW50W2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG4vKioqLyB9KSxcbi8qIDkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9Tb3J0YWJsZUV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNyk7XG5cbk9iamVjdC5rZXlzKF9Tb3J0YWJsZUV2ZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfU29ydGFibGVFdmVudFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxuLyoqKi8gfSksXG4vKiAxMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1N3YXBwYWJsZUV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMCk7XG5cbk9iamVjdC5rZXlzKF9Td2FwcGFibGVFdmVudCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX1N3YXBwYWJsZUV2ZW50W2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG4vKioqLyB9KSxcbi8qIDExICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfRHJvcHBhYmxlRXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKTtcblxuT2JqZWN0LmtleXMoX0Ryb3BwYWJsZUV2ZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfRHJvcHBhYmxlRXZlbnRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbi8qKiovIH0pLFxuLyogMTIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9Bbm5vdW5jZW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYyKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdBbm5vdW5jZW1lbnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Bbm5vdW5jZW1lbnQpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdkZWZhdWx0QW5ub3VuY2VtZW50T3B0aW9ucycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9Bbm5vdW5jZW1lbnQuZGVmYXVsdE9wdGlvbnM7XG4gIH1cbn0pO1xuXG52YXIgX0ZvY3VzYWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oNTkpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0ZvY3VzYWJsZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZvY3VzYWJsZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfTWlycm9yID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWlycm9yJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWlycm9yKS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZGVmYXVsdE1pcnJvck9wdGlvbnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfTWlycm9yLmRlZmF1bHRPcHRpb25zO1xuICB9XG59KTtcblxudmFyIF9TY3JvbGxhYmxlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Myk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsYWJsZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Njcm9sbGFibGUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdkZWZhdWx0U2Nyb2xsYWJsZU9wdGlvbnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfU2Nyb2xsYWJsZS5kZWZhdWx0T3B0aW9ucztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKiovIH0pLFxuLyogMTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9EcmFnZ2FibGVFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oNjMpO1xuXG5PYmplY3Qua2V5cyhfRHJhZ2dhYmxlRXZlbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9EcmFnZ2FibGVFdmVudFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxuLyoqKi8gfSksXG4vKiAxNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0RyYWdFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oNjUpO1xuXG5PYmplY3Qua2V5cyhfRHJhZ0V2ZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfRHJhZ0V2ZW50W2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG4vKioqLyB9KSxcbi8qIDE1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHRPcHRpb25zID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX0Fic3RyYWN0UGx1Z2luID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9BYnN0cmFjdFBsdWdpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BYnN0cmFjdFBsdWdpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IG9uU29ydGFibGVTb3J0ZWQgPSBTeW1ib2woJ29uU29ydGFibGVTb3J0ZWQnKTtcblxuLyoqXG4gKiBTd2FwQW5pbWF0aW9uIGRlZmF1bHQgb3B0aW9uc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRlZmF1bHRPcHRpb25zXG4gKiBAcHJvcGVydHkge051bWJlcn0gZGVmYXVsdE9wdGlvbnMuZHVyYXRpb25cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBkZWZhdWx0T3B0aW9ucy5lYXNpbmdGdW5jdGlvblxuICogQHByb3BlcnR5IHtCb29sZWFufSBkZWZhdWx0T3B0aW9ucy5ob3Jpem9udGFsXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IGV4cG9ydHMuZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGR1cmF0aW9uOiAxNTAsXG4gIGVhc2luZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnLFxuICBob3Jpem9udGFsOiBmYWxzZVxufTtcblxuLyoqXG4gKiBTd2FwQW5pbWF0aW9uIHBsdWdpbiBhZGRzIHN3YXAgYW5pbWF0aW9ucyBmb3Igc29ydGFibGVcbiAqIEBjbGFzcyBTd2FwQW5pbWF0aW9uXG4gKiBAbW9kdWxlIFN3YXBBbmltYXRpb25cbiAqIEBleHRlbmRzIEFic3RyYWN0UGx1Z2luXG4gKi9cbmNsYXNzIFN3YXBBbmltYXRpb24gZXh0ZW5kcyBfQWJzdHJhY3RQbHVnaW4yLmRlZmF1bHQge1xuICAvKipcbiAgICogU3dhcEFuaW1hdGlvbiBjb25zdHJ1Y3Rvci5cbiAgICogQGNvbnN0cnVjdHMgU3dhcEFuaW1hdGlvblxuICAgKiBAcGFyYW0ge0RyYWdnYWJsZX0gZHJhZ2dhYmxlIC0gRHJhZ2dhYmxlIGluc3RhbmNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGUpIHtcbiAgICBzdXBlcihkcmFnZ2FibGUpO1xuXG4gICAgLyoqXG4gICAgICogU3dhcEFuaW1hdGlvbiBvcHRpb25zXG4gICAgICogQHByb3BlcnR5IHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcHJvcGVydHkge051bWJlcn0gZGVmYXVsdE9wdGlvbnMuZHVyYXRpb25cbiAgICAgKiBAcHJvcGVydHkge1N0cmluZ30gZGVmYXVsdE9wdGlvbnMuZWFzaW5nRnVuY3Rpb25cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucywgdGhpcy5nZXRPcHRpb25zKCkpO1xuXG4gICAgLyoqXG4gICAgICogTGFzdCBhbmltYXRpb24gZnJhbWVcbiAgICAgKiBAcHJvcGVydHkge051bWJlcn0gbGFzdEFuaW1hdGlvbkZyYW1lXG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmxhc3RBbmltYXRpb25GcmFtZSA9IG51bGw7XG5cbiAgICB0aGlzW29uU29ydGFibGVTb3J0ZWRdID0gdGhpc1tvblNvcnRhYmxlU29ydGVkXS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIHBsdWdpbnMgZXZlbnQgbGlzdGVuZXJzXG4gICAqL1xuICBhdHRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub24oJ3NvcnRhYmxlOnNvcnRlZCcsIHRoaXNbb25Tb3J0YWJsZVNvcnRlZF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaGVzIHBsdWdpbnMgZXZlbnQgbGlzdGVuZXJzXG4gICAqL1xuICBkZXRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub2ZmKCdzb3J0YWJsZTpzb3J0ZWQnLCB0aGlzW29uU29ydGFibGVTb3J0ZWRdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIG9wdGlvbnMgcGFzc2VkIHRocm91Z2ggZHJhZ2dhYmxlXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGdldE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlLm9wdGlvbnMuc3dhcEFuaW1hdGlvbiB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTb3J0YWJsZSBzb3J0ZWQgaGFuZGxlclxuICAgKiBAcGFyYW0ge1NvcnRhYmxlU29ydGVkRXZlbnR9IHNvcnRhYmxlRXZlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIFtvblNvcnRhYmxlU29ydGVkXSh7IG9sZEluZGV4LCBuZXdJbmRleCwgZHJhZ0V2ZW50IH0pIHtcbiAgICBjb25zdCB7IHNvdXJjZSwgb3ZlciB9ID0gZHJhZ0V2ZW50O1xuXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXN0QW5pbWF0aW9uRnJhbWUpO1xuXG4gICAgLy8gQ2FuIGJlIGRvbmUgaW4gYSBzZXBhcmF0ZSBmcmFtZVxuICAgIHRoaXMubGFzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGlmIChvbGRJbmRleCA+PSBuZXdJbmRleCkge1xuICAgICAgICBhbmltYXRlKHNvdXJjZSwgb3ZlciwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuaW1hdGUob3Zlciwgc291cmNlLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFN3YXBBbmltYXRpb247IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQW5pbWF0ZXMgdHdvIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmcm9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLmR1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5lYXNpbmdGdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMuaG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5mdW5jdGlvbiBhbmltYXRlKGZyb20sIHRvLCB7IGR1cmF0aW9uLCBlYXNpbmdGdW5jdGlvbiwgaG9yaXpvbnRhbCB9KSB7XG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBbZnJvbSwgdG9dKSB7XG4gICAgZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICB9XG5cbiAgaWYgKGhvcml6b250YWwpIHtcbiAgICBjb25zdCB3aWR0aCA9IGZyb20ub2Zmc2V0V2lkdGg7XG4gICAgZnJvbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt3aWR0aH1weCwgMCwgMClgO1xuICAgIHRvLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgtJHt3aWR0aH1weCwgMCwgMClgO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGhlaWdodCA9IGZyb20ub2Zmc2V0SGVpZ2h0O1xuICAgIGZyb20uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsICR7aGVpZ2h0fXB4LCAwKWA7XG4gICAgdG8uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsIC0ke2hlaWdodH1weCwgMClgO1xuICB9XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW2Zyb20sIHRvXSkge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgcmVzZXRFbGVtZW50T25UcmFuc2l0aW9uRW5kKTtcbiAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGB0cmFuc2Zvcm0gJHtkdXJhdGlvbn1tcyAke2Vhc2luZ0Z1bmN0aW9ufWA7XG4gICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogUmVzZXRzIGFuaW1hdGlvbiBzdHlsZSBwcm9wZXJ0aWVzIGFmdGVyIGFuaW1hdGlvbiBoYXMgY29tcGxldGVkXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVzZXRFbGVtZW50T25UcmFuc2l0aW9uRW5kKGV2ZW50KSB7XG4gIGV2ZW50LnRhcmdldC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gIGV2ZW50LnRhcmdldC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJyc7XG4gIGV2ZW50LnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgcmVzZXRFbGVtZW50T25UcmFuc2l0aW9uRW5kKTtcbn1cblxuLyoqKi8gfSksXG4vKiAxNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IHVuZGVmaW5lZDtcblxudmFyIF9Td2FwQW5pbWF0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XG5cbnZhciBfU3dhcEFuaW1hdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Td2FwQW5pbWF0aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1N3YXBBbmltYXRpb24yLmRlZmF1bHQ7XG5leHBvcnRzLmRlZmF1bHRPcHRpb25zID0gX1N3YXBBbmltYXRpb24uZGVmYXVsdE9wdGlvbnM7XG5cbi8qKiovIH0pLFxuLyogMTcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9BYnN0cmFjdFBsdWdpbiA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfQWJzdHJhY3RQbHVnaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWJzdHJhY3RQbHVnaW4pO1xuXG52YXIgX1NuYXBwYWJsZUV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3Qgb25EcmFnU3RhcnQgPSBTeW1ib2woJ29uRHJhZ1N0YXJ0Jyk7XG5jb25zdCBvbkRyYWdTdG9wID0gU3ltYm9sKCdvbkRyYWdTdG9wJyk7XG5jb25zdCBvbkRyYWdPdmVyID0gU3ltYm9sKCdvbkRyYWdPdmVyJyk7XG5jb25zdCBvbkRyYWdPdXQgPSBTeW1ib2woJ29uRHJhZ091dCcpO1xuY29uc3Qgb25NaXJyb3JDcmVhdGVkID0gU3ltYm9sKCdvbk1pcnJvckNyZWF0ZWQnKTtcbmNvbnN0IG9uTWlycm9yRGVzdHJveSA9IFN5bWJvbCgnb25NaXJyb3JEZXN0cm95Jyk7XG5cbi8qKlxuICogU25hcHBhYmxlIHBsdWdpbiB3aGljaCBzbmFwcyBkcmFnZ2FibGUgZWxlbWVudHMgaW50byBwbGFjZVxuICogQGNsYXNzIFNuYXBwYWJsZVxuICogQG1vZHVsZSBTbmFwcGFibGVcbiAqIEBleHRlbmRzIEFic3RyYWN0UGx1Z2luXG4gKi9cbmNsYXNzIFNuYXBwYWJsZSBleHRlbmRzIF9BYnN0cmFjdFBsdWdpbjIuZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBTbmFwcGFibGUgY29uc3RydWN0b3IuXG4gICAqIEBjb25zdHJ1Y3RzIFNuYXBwYWJsZVxuICAgKiBAcGFyYW0ge0RyYWdnYWJsZX0gZHJhZ2dhYmxlIC0gRHJhZ2dhYmxlIGluc3RhbmNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGUpIHtcbiAgICBzdXBlcihkcmFnZ2FibGUpO1xuXG4gICAgLyoqXG4gICAgICogS2VlcHMgdHJhY2sgb2YgdGhlIGZpcnN0IHNvdXJjZSBlbGVtZW50XG4gICAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudHxudWxsfSBmaXJzdFNvdXJjZVxuICAgICAqL1xuICAgIHRoaXMuZmlyc3RTb3VyY2UgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogS2VlcHMgdHJhY2sgb2YgdGhlIG1pcnJvciBlbGVtZW50XG4gICAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gbWlycm9yXG4gICAgICovXG4gICAgdGhpcy5taXJyb3IgPSBudWxsO1xuXG4gICAgdGhpc1tvbkRyYWdTdGFydF0gPSB0aGlzW29uRHJhZ1N0YXJ0XS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnU3RvcF0gPSB0aGlzW29uRHJhZ1N0b3BdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdPdmVyXSA9IHRoaXNbb25EcmFnT3Zlcl0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ091dF0gPSB0aGlzW29uRHJhZ091dF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uTWlycm9yQ3JlYXRlZF0gPSB0aGlzW29uTWlycm9yQ3JlYXRlZF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uTWlycm9yRGVzdHJveV0gPSB0aGlzW29uTWlycm9yRGVzdHJveV0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyBwbHVnaW5zIGV2ZW50IGxpc3RlbmVyc1xuICAgKi9cbiAgYXR0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9uKCdkcmFnOnN0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0pLm9uKCdkcmFnOnN0b3AnLCB0aGlzW29uRHJhZ1N0b3BdKS5vbignZHJhZzpvdmVyJywgdGhpc1tvbkRyYWdPdmVyXSkub24oJ2RyYWc6b3V0JywgdGhpc1tvbkRyYWdPdXRdKS5vbignZHJvcHBhYmxlOm92ZXInLCB0aGlzW29uRHJhZ092ZXJdKS5vbignZHJvcHBhYmxlOm91dCcsIHRoaXNbb25EcmFnT3V0XSkub24oJ21pcnJvcjpjcmVhdGVkJywgdGhpc1tvbk1pcnJvckNyZWF0ZWRdKS5vbignbWlycm9yOmRlc3Ryb3knLCB0aGlzW29uTWlycm9yRGVzdHJveV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaGVzIHBsdWdpbnMgZXZlbnQgbGlzdGVuZXJzXG4gICAqL1xuICBkZXRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub2ZmKCdkcmFnOnN0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0pLm9mZignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSkub2ZmKCdkcmFnOm92ZXInLCB0aGlzW29uRHJhZ092ZXJdKS5vZmYoJ2RyYWc6b3V0JywgdGhpc1tvbkRyYWdPdXRdKS5vZmYoJ2Ryb3BwYWJsZTpvdmVyJywgdGhpc1tvbkRyYWdPdmVyXSkub2ZmKCdkcm9wcGFibGU6b3V0JywgdGhpc1tvbkRyYWdPdXRdKS5vZmYoJ21pcnJvcjpjcmVhdGVkJywgdGhpc1tvbk1pcnJvckNyZWF0ZWRdKS5vZmYoJ21pcnJvcjpkZXN0cm95JywgdGhpc1tvbk1pcnJvckRlc3Ryb3ldKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIHN0YXJ0IGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtEcmFnU3RhcnRFdmVudH0gZXZlbnQgLSBEcmFnIHN0YXJ0IGV2ZW50XG4gICAqL1xuICBbb25EcmFnU3RhcnRdKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmZpcnN0U291cmNlID0gZXZlbnQuc291cmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgc3RvcCBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RHJhZ1N0b3BFdmVudH0gZXZlbnQgLSBEcmFnIHN0b3AgZXZlbnRcbiAgICovXG4gIFtvbkRyYWdTdG9wXSgpIHtcbiAgICB0aGlzLmZpcnN0U291cmNlID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIG92ZXIgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0RyYWdPdmVyRXZlbnR8RHJvcHBhYmxlT3ZlckV2ZW50fSBldmVudCAtIERyYWcgb3ZlciBldmVudFxuICAgKi9cbiAgW29uRHJhZ092ZXJdKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzb3VyY2UgPSBldmVudC5zb3VyY2UgfHwgZXZlbnQuZHJhZ0V2ZW50LnNvdXJjZTtcblxuICAgIGlmIChzb3VyY2UgPT09IHRoaXMuZmlyc3RTb3VyY2UpIHtcbiAgICAgIHRoaXMuZmlyc3RTb3VyY2UgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNuYXBJbkV2ZW50ID0gbmV3IF9TbmFwcGFibGVFdmVudC5TbmFwSW5FdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgc25hcHBhYmxlOiBldmVudC5vdmVyIHx8IGV2ZW50LmRyb3BwYWJsZVxuICAgIH0pO1xuXG4gICAgdGhpcy5kcmFnZ2FibGUudHJpZ2dlcihzbmFwSW5FdmVudCk7XG5cbiAgICBpZiAoc25hcEluRXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1pcnJvcikge1xuICAgICAgdGhpcy5taXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBzb3VyY2UuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRyYWdnYWJsZS5nZXRDbGFzc05hbWVGb3IoJ3NvdXJjZTpkcmFnZ2luZycpKTtcbiAgICBzb3VyY2UuY2xhc3NMaXN0LmFkZCh0aGlzLmRyYWdnYWJsZS5nZXRDbGFzc05hbWVGb3IoJ3NvdXJjZTpwbGFjZWQnKSk7XG5cbiAgICAvLyBOZWVkIHRvIGNhbmNlbCB0aGlzIGluIGRyYWcgb3V0XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzb3VyY2UuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRyYWdnYWJsZS5nZXRDbGFzc05hbWVGb3IoJ3NvdXJjZTpwbGFjZWQnKSk7XG4gICAgfSwgdGhpcy5kcmFnZ2FibGUub3B0aW9ucy5wbGFjZWRUaW1lb3V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIG91dCBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RHJhZ091dEV2ZW50fERyb3BwYWJsZU91dEV2ZW50fSBldmVudCAtIERyYWcgb3V0IGV2ZW50XG4gICAqL1xuICBbb25EcmFnT3V0XShldmVudCkge1xuICAgIGlmIChldmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlID0gZXZlbnQuc291cmNlIHx8IGV2ZW50LmRyYWdFdmVudC5zb3VyY2U7XG5cbiAgICBjb25zdCBzbmFwT3V0RXZlbnQgPSBuZXcgX1NuYXBwYWJsZUV2ZW50LlNuYXBPdXRFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgc25hcHBhYmxlOiBldmVudC5vdmVyIHx8IGV2ZW50LmRyb3BwYWJsZVxuICAgIH0pO1xuXG4gICAgdGhpcy5kcmFnZ2FibGUudHJpZ2dlcihzbmFwT3V0RXZlbnQpO1xuXG4gICAgaWYgKHNuYXBPdXRFdmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWlycm9yKSB7XG4gICAgICB0aGlzLm1pcnJvci5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfVxuXG4gICAgc291cmNlLmNsYXNzTGlzdC5hZGQodGhpcy5kcmFnZ2FibGUuZ2V0Q2xhc3NOYW1lRm9yKCdzb3VyY2U6ZHJhZ2dpbmcnKSk7XG4gIH1cblxuICAvKipcbiAgICogTWlycm9yIGNyZWF0ZWQgaGFuZGxlclxuICAgKiBAcGFyYW0ge01pcnJvckNyZWF0ZWRFdmVudH0gbWlycm9yRXZlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIFtvbk1pcnJvckNyZWF0ZWRdKHsgbWlycm9yIH0pIHtcbiAgICB0aGlzLm1pcnJvciA9IG1pcnJvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNaXJyb3IgZGVzdHJveSBoYW5kbGVyXG4gICAqIEBwYXJhbSB7TWlycm9yRGVzdHJveUV2ZW50fSBtaXJyb3JFdmVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgW29uTWlycm9yRGVzdHJveV0oKSB7XG4gICAgdGhpcy5taXJyb3IgPSBudWxsO1xuICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBTbmFwcGFibGU7XG5cbi8qKiovIH0pLFxuLyogMTggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuU25hcE91dEV2ZW50ID0gZXhwb3J0cy5TbmFwSW5FdmVudCA9IGV4cG9ydHMuU25hcEV2ZW50ID0gdW5kZWZpbmVkO1xuXG52YXIgX0Fic3RyYWN0RXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX0Fic3RyYWN0RXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWJzdHJhY3RFdmVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQmFzZSBzbmFwIGV2ZW50XG4gKiBAY2xhc3MgU25hcEV2ZW50XG4gKiBAbW9kdWxlIFNuYXBFdmVudFxuICogQGV4dGVuZHMgQWJzdHJhY3RFdmVudFxuICovXG5jbGFzcyBTbmFwRXZlbnQgZXh0ZW5kcyBfQWJzdHJhY3RFdmVudDIuZGVmYXVsdCB7XG5cbiAgLyoqXG4gICAqIERyYWcgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhpcyBzbmFwIGV2ZW50XG4gICAqIEBwcm9wZXJ0eSBkcmFnRXZlbnRcbiAgICogQHR5cGUge0RyYWdFdmVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgZHJhZ0V2ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuZHJhZ0V2ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFNuYXBwYWJsZSBlbGVtZW50XG4gICAqIEBwcm9wZXJ0eSBzbmFwcGFibGVcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBzbmFwcGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zbmFwcGFibGU7XG4gIH1cbn1cblxuZXhwb3J0cy5TbmFwRXZlbnQgPSBTbmFwRXZlbnQ7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFNuYXAgaW4gZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgU25hcEluRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIFNuYXBJbkV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGV4dGVuZHMgU25hcEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblNuYXBFdmVudC50eXBlID0gJ3NuYXAnO1xuY2xhc3MgU25hcEluRXZlbnQgZXh0ZW5kcyBTbmFwRXZlbnQge31cblxuZXhwb3J0cy5TbmFwSW5FdmVudCA9IFNuYXBJbkV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogU25hcCBvdXQgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIFNuYXBPdXRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIFNuYXBPdXRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXh0ZW5kcyBTbmFwRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblNuYXBJbkV2ZW50LnR5cGUgPSAnc25hcDppbic7XG5TbmFwSW5FdmVudC5jYW5jZWxhYmxlID0gdHJ1ZTtcbmNsYXNzIFNuYXBPdXRFdmVudCBleHRlbmRzIFNuYXBFdmVudCB7fVxuZXhwb3J0cy5TbmFwT3V0RXZlbnQgPSBTbmFwT3V0RXZlbnQ7XG5TbmFwT3V0RXZlbnQudHlwZSA9ICdzbmFwOm91dCc7XG5TbmFwT3V0RXZlbnQuY2FuY2VsYWJsZSA9IHRydWU7XG5cbi8qKiovIH0pLFxuLyogMTkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9TbmFwcGFibGVFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cbk9iamVjdC5rZXlzKF9TbmFwcGFibGVFdmVudCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX1NuYXBwYWJsZUV2ZW50W2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX1NuYXBwYWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xuXG52YXIgX1NuYXBwYWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TbmFwcGFibGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfU25hcHBhYmxlMi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcbi8qIDIwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHRPcHRpb25zID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX0Fic3RyYWN0UGx1Z2luID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9BYnN0cmFjdFBsdWdpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BYnN0cmFjdFBsdWdpbik7XG5cbnZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBvbk1pcnJvckNyZWF0ZWQgPSBTeW1ib2woJ29uTWlycm9yQ3JlYXRlZCcpO1xuY29uc3Qgb25NaXJyb3JEZXN0cm95ID0gU3ltYm9sKCdvbk1pcnJvckRlc3Ryb3knKTtcbmNvbnN0IG9uRHJhZ092ZXIgPSBTeW1ib2woJ29uRHJhZ092ZXInKTtcbmNvbnN0IHJlc2l6ZSA9IFN5bWJvbCgncmVzaXplJyk7XG5cbi8qKlxuICogUmVzaXplTWlycm9yIGRlZmF1bHQgb3B0aW9uc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRlZmF1bHRPcHRpb25zXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IGV4cG9ydHMuZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBUaGUgUmVzaXplTWlycm9yIHBsdWdpbiByZXNpemVzIHRoZSBtaXJyb3IgZWxlbWVudCB0byB0aGUgZGltZW5zaW9ucyBvZiB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQgdGhhdCB0aGUgbWlycm9yIGlzIGhvdmVyaW5nIG92ZXJcbiAqIEBjbGFzcyBSZXNpemVNaXJyb3JcbiAqIEBtb2R1bGUgUmVzaXplTWlycm9yXG4gKiBAZXh0ZW5kcyBBYnN0cmFjdFBsdWdpblxuICovXG5jbGFzcyBSZXNpemVNaXJyb3IgZXh0ZW5kcyBfQWJzdHJhY3RQbHVnaW4yLmRlZmF1bHQge1xuICAvKipcbiAgICogUmVzaXplTWlycm9yIGNvbnN0cnVjdG9yLlxuICAgKiBAY29uc3RydWN0cyBSZXNpemVNaXJyb3JcbiAgICogQHBhcmFtIHtEcmFnZ2FibGV9IGRyYWdnYWJsZSAtIERyYWdnYWJsZSBpbnN0YW5jZVxuICAgKi9cbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlKSB7XG4gICAgc3VwZXIoZHJhZ2dhYmxlKTtcblxuICAgIC8qKlxuICAgICAqIFJlc2l6ZU1pcnJvciBvcHRpb25zXG4gICAgICogQHByb3BlcnR5IHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucywgdGhpcy5nZXRPcHRpb25zKCkpO1xuXG4gICAgLyoqXG4gICAgICogUmVzaXplTWlycm9yIHJlbWVtYmVycyB0aGUgbGFzdCB3aWR0aCB3aGVuIHJlc2l6aW5nIHRoZSBtaXJyb3JcbiAgICAgKiB0byBhdm9pZCBhZGRpdGlvbmFsIHdyaXRlcyB0byB0aGUgRE9NXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGxhc3RXaWR0aFxuICAgICAqL1xuICAgIHRoaXMubGFzdFdpZHRoID0gMDtcblxuICAgIC8qKlxuICAgICAqIFJlc2l6ZU1pcnJvciByZW1lbWJlcnMgdGhlIGxhc3QgaGVpZ2h0IHdoZW4gcmVzaXppbmcgdGhlIG1pcnJvclxuICAgICAqIHRvIGF2b2lkIGFkZGl0aW9uYWwgd3JpdGVzIHRvIHRoZSBET01cbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gbGFzdEhlaWdodFxuICAgICAqL1xuICAgIHRoaXMubGFzdEhlaWdodCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBLZWVwcyB0cmFjayBvZiB0aGUgbWlycm9yIGVsZW1lbnRcbiAgICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBtaXJyb3JcbiAgICAgKi9cbiAgICB0aGlzLm1pcnJvciA9IG51bGw7XG5cbiAgICB0aGlzW29uTWlycm9yQ3JlYXRlZF0gPSB0aGlzW29uTWlycm9yQ3JlYXRlZF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uTWlycm9yRGVzdHJveV0gPSB0aGlzW29uTWlycm9yRGVzdHJveV0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ092ZXJdID0gdGhpc1tvbkRyYWdPdmVyXS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIHBsdWdpbnMgZXZlbnQgbGlzdGVuZXJzXG4gICAqL1xuICBhdHRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub24oJ21pcnJvcjpjcmVhdGVkJywgdGhpc1tvbk1pcnJvckNyZWF0ZWRdKS5vbignZHJhZzpvdmVyJywgdGhpc1tvbkRyYWdPdmVyXSkub24oJ2RyYWc6b3Zlcjpjb250YWluZXInLCB0aGlzW29uRHJhZ092ZXJdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2hlcyBwbHVnaW5zIGV2ZW50IGxpc3RlbmVyc1xuICAgKi9cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9mZignbWlycm9yOmNyZWF0ZWQnLCB0aGlzW29uTWlycm9yQ3JlYXRlZF0pLm9mZignbWlycm9yOmRlc3Ryb3knLCB0aGlzW29uTWlycm9yRGVzdHJveV0pLm9mZignZHJhZzpvdmVyJywgdGhpc1tvbkRyYWdPdmVyXSkub2ZmKCdkcmFnOm92ZXI6Y29udGFpbmVyJywgdGhpc1tvbkRyYWdPdmVyXSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBvcHRpb25zIHBhc3NlZCB0aHJvdWdoIGRyYWdnYWJsZVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBnZXRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZS5vcHRpb25zLnJlc2l6ZU1pcnJvciB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNaXJyb3IgY3JlYXRlZCBoYW5kbGVyXG4gICAqIEBwYXJhbSB7TWlycm9yQ3JlYXRlZEV2ZW50fSBtaXJyb3JFdmVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgW29uTWlycm9yQ3JlYXRlZF0oeyBtaXJyb3IgfSkge1xuICAgIHRoaXMubWlycm9yID0gbWlycm9yO1xuICB9XG5cbiAgLyoqXG4gICAqIE1pcnJvciBkZXN0cm95IGhhbmRsZXJcbiAgICogQHBhcmFtIHtNaXJyb3JEZXN0cm95RXZlbnR9IG1pcnJvckV2ZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBbb25NaXJyb3JEZXN0cm95XSgpIHtcbiAgICB0aGlzLm1pcnJvciA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBvdmVyIGhhbmRsZXJcbiAgICogQHBhcmFtIHtEcmFnT3ZlckV2ZW50IHwgRHJhZ092ZXJDb250YWluZXJ9IGRyYWdFdmVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgW29uRHJhZ092ZXJdKGRyYWdFdmVudCkge1xuICAgIHRoaXNbcmVzaXplXShkcmFnRXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2l6ZSBmdW5jdGlvbiBmb3JcbiAgICogQHBhcmFtIHtEcmFnT3ZlckV2ZW50IHwgRHJhZ092ZXJDb250YWluZXJ9IGRyYWdFdmVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgW3Jlc2l6ZV0oeyBvdmVyQ29udGFpbmVyLCBvdmVyIH0pIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubWlycm9yLnBhcmVudE5vZGUgIT09IG92ZXJDb250YWluZXIpIHtcbiAgICAgICAgb3ZlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1pcnJvcik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG92ZXJFbGVtZW50ID0gb3ZlciB8fCB0aGlzLmRyYWdnYWJsZS5nZXREcmFnZ2FibGVFbGVtZW50c0ZvckNvbnRhaW5lcihvdmVyQ29udGFpbmVyKVswXTtcblxuICAgICAgaWYgKCFvdmVyRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICgwLCBfdXRpbHMucmVxdWVzdE5leHRBbmltYXRpb25GcmFtZSkoKCkgPT4ge1xuICAgICAgICBjb25zdCBvdmVyUmVjdCA9IG92ZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmxhc3RIZWlnaHQgPT09IG92ZXJSZWN0LmhlaWdodCAmJiB0aGlzLmxhc3RXaWR0aCA9PT0gb3ZlclJlY3Qud2lkdGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1pcnJvci5zdHlsZS53aWR0aCA9IGAke292ZXJSZWN0LndpZHRofXB4YDtcbiAgICAgICAgdGhpcy5taXJyb3Iuc3R5bGUuaGVpZ2h0ID0gYCR7b3ZlclJlY3QuaGVpZ2h0fXB4YDtcblxuICAgICAgICB0aGlzLmxhc3RXaWR0aCA9IG92ZXJSZWN0LndpZHRoO1xuICAgICAgICB0aGlzLmxhc3RIZWlnaHQgPSBvdmVyUmVjdC5oZWlnaHQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUmVzaXplTWlycm9yO1xuXG4vKioqLyB9KSxcbi8qIDIxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHRPcHRpb25zID0gdW5kZWZpbmVkO1xuXG52YXIgX1Jlc2l6ZU1pcnJvciA9IF9fd2VicGFja19yZXF1aXJlX18oMjApO1xuXG52YXIgX1Jlc2l6ZU1pcnJvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZXNpemVNaXJyb3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfUmVzaXplTWlycm9yMi5kZWZhdWx0O1xuZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IF9SZXNpemVNaXJyb3IuZGVmYXVsdE9wdGlvbnM7XG5cbi8qKiovIH0pLFxuLyogMjIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9BYnN0cmFjdFBsdWdpbiA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfQWJzdHJhY3RQbHVnaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWJzdHJhY3RQbHVnaW4pO1xuXG52YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9Db2xsaWRhYmxlRXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBvbkRyYWdNb3ZlID0gU3ltYm9sKCdvbkRyYWdNb3ZlJyk7XG5jb25zdCBvbkRyYWdTdG9wID0gU3ltYm9sKCdvbkRyYWdTdG9wJyk7XG5jb25zdCBvblJlcXVlc3RBbmltYXRpb25GcmFtZSA9IFN5bWJvbCgnb25SZXF1ZXN0QW5pbWF0aW9uRnJhbWUnKTtcblxuLyoqXG4gKiBDb2xsaWRhYmxlIHBsdWdpbiB3aGljaCBkZXRlY3RzIGNvbGxpZGluZyBlbGVtZW50cyB3aGlsZSBkcmFnZ2luZ1xuICogQGNsYXNzIENvbGxpZGFibGVcbiAqIEBtb2R1bGUgQ29sbGlkYWJsZVxuICogQGV4dGVuZHMgQWJzdHJhY3RQbHVnaW5cbiAqL1xuY2xhc3MgQ29sbGlkYWJsZSBleHRlbmRzIF9BYnN0cmFjdFBsdWdpbjIuZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBDb2xsaWRhYmxlIGNvbnN0cnVjdG9yLlxuICAgKiBAY29uc3RydWN0cyBDb2xsaWRhYmxlXG4gICAqIEBwYXJhbSB7RHJhZ2dhYmxlfSBkcmFnZ2FibGUgLSBEcmFnZ2FibGUgaW5zdGFuY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZSkge1xuICAgIHN1cGVyKGRyYWdnYWJsZSk7XG5cbiAgICAvKipcbiAgICAgKiBLZWVwcyB0cmFjayBvZiBjdXJyZW50bHkgY29sbGlkaW5nIGVsZW1lbnRzXG4gICAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudHxudWxsfSBjdXJyZW50bHlDb2xsaWRpbmdFbGVtZW50XG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fG51bGx9XG4gICAgICovXG4gICAgdGhpcy5jdXJyZW50bHlDb2xsaWRpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEtlZXBzIHRyYWNrIG9mIGN1cnJlbnRseSBjb2xsaWRpbmcgZWxlbWVudHNcbiAgICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fG51bGx9IGxhc3RDb2xsaWRpbmdFbGVtZW50XG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fG51bGx9XG4gICAgICovXG4gICAgdGhpcy5sYXN0Q29sbGlkaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBbmltYXRpb24gZnJhbWUgZm9yIGZpbmRpbmcgY29sbGlkaW5nIGVsZW1lbnRzXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ8bnVsbH0gY3VycmVudEFuaW1hdGlvbkZyYW1lXG4gICAgICogQHR5cGUge051bWJlcnxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbkZyYW1lID0gbnVsbDtcblxuICAgIHRoaXNbb25EcmFnTW92ZV0gPSB0aGlzW29uRHJhZ01vdmVdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdTdG9wXSA9IHRoaXNbb25EcmFnU3RvcF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uUmVxdWVzdEFuaW1hdGlvbkZyYW1lXSA9IHRoaXNbb25SZXF1ZXN0QW5pbWF0aW9uRnJhbWVdLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgcGx1Z2lucyBldmVudCBsaXN0ZW5lcnNcbiAgICovXG4gIGF0dGFjaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgdGhpc1tvbkRyYWdNb3ZlXSkub24oJ2RyYWc6c3RvcCcsIHRoaXNbb25EcmFnU3RvcF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaGVzIHBsdWdpbnMgZXZlbnQgbGlzdGVuZXJzXG4gICAqL1xuICBkZXRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub2ZmKCdkcmFnOm1vdmUnLCB0aGlzW29uRHJhZ01vdmVdKS5vZmYoJ2RyYWc6c3RvcCcsIHRoaXNbb25EcmFnU3RvcF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY3VycmVudCBjb2xsaWRhYmxlcyBiYXNlZCBvbiBgY29sbGlkYWJsZXNgIG9wdGlvblxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudFtdfVxuICAgKi9cbiAgZ2V0Q29sbGlkYWJsZXMoKSB7XG4gICAgY29uc3QgY29sbGlkYWJsZXMgPSB0aGlzLmRyYWdnYWJsZS5vcHRpb25zLmNvbGxpZGFibGVzO1xuXG4gICAgaWYgKHR5cGVvZiBjb2xsaWRhYmxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbGxpZGFibGVzKSk7XG4gICAgfSBlbHNlIGlmIChjb2xsaWRhYmxlcyBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGNvbGxpZGFibGVzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjb2xsaWRhYmxlcyk7XG4gICAgfSBlbHNlIGlmIChjb2xsaWRhYmxlcyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICByZXR1cm4gW2NvbGxpZGFibGVzXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb2xsaWRhYmxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNvbGxpZGFibGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBtb3ZlIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtEcmFnTW92ZUV2ZW50fSBldmVudCAtIERyYWcgbW92ZSBldmVudFxuICAgKi9cbiAgW29uRHJhZ01vdmVdKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQuc2Vuc29yRXZlbnQudGFyZ2V0O1xuXG4gICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpc1tvblJlcXVlc3RBbmltYXRpb25GcmFtZV0odGFyZ2V0KSk7XG5cbiAgICBpZiAodGhpcy5jdXJyZW50bHlDb2xsaWRpbmdFbGVtZW50KSB7XG4gICAgICBldmVudC5jYW5jZWwoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb2xsaWRhYmxlSW5FdmVudCA9IG5ldyBfQ29sbGlkYWJsZUV2ZW50LkNvbGxpZGFibGVJbkV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBjb2xsaWRpbmdFbGVtZW50OiB0aGlzLmN1cnJlbnRseUNvbGxpZGluZ0VsZW1lbnRcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbGxpZGFibGVPdXRFdmVudCA9IG5ldyBfQ29sbGlkYWJsZUV2ZW50LkNvbGxpZGFibGVPdXRFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgY29sbGlkaW5nRWxlbWVudDogdGhpcy5sYXN0Q29sbGlkaW5nRWxlbWVudFxuICAgIH0pO1xuXG4gICAgY29uc3QgZW50ZXJpbmdDb2xsaWRhYmxlID0gQm9vbGVhbih0aGlzLmN1cnJlbnRseUNvbGxpZGluZ0VsZW1lbnQgJiYgdGhpcy5sYXN0Q29sbGlkaW5nRWxlbWVudCAhPT0gdGhpcy5jdXJyZW50bHlDb2xsaWRpbmdFbGVtZW50KTtcbiAgICBjb25zdCBsZWF2aW5nQ29sbGlkYWJsZSA9IEJvb2xlYW4oIXRoaXMuY3VycmVudGx5Q29sbGlkaW5nRWxlbWVudCAmJiB0aGlzLmxhc3RDb2xsaWRpbmdFbGVtZW50KTtcblxuICAgIGlmIChlbnRlcmluZ0NvbGxpZGFibGUpIHtcbiAgICAgIGlmICh0aGlzLmxhc3RDb2xsaWRpbmdFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXIoY29sbGlkYWJsZU91dEV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kcmFnZ2FibGUudHJpZ2dlcihjb2xsaWRhYmxlSW5FdmVudCk7XG4gICAgfSBlbHNlIGlmIChsZWF2aW5nQ29sbGlkYWJsZSkge1xuICAgICAgdGhpcy5kcmFnZ2FibGUudHJpZ2dlcihjb2xsaWRhYmxlT3V0RXZlbnQpO1xuICAgIH1cblxuICAgIHRoaXMubGFzdENvbGxpZGluZ0VsZW1lbnQgPSB0aGlzLmN1cnJlbnRseUNvbGxpZGluZ0VsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBzdG9wIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtEcmFnU3RvcEV2ZW50fSBldmVudCAtIERyYWcgc3RvcCBldmVudFxuICAgKi9cbiAgW29uRHJhZ1N0b3BdKGV2ZW50KSB7XG4gICAgY29uc3QgbGFzdENvbGxpZGluZ0VsZW1lbnQgPSB0aGlzLmN1cnJlbnRseUNvbGxpZGluZ0VsZW1lbnQgfHwgdGhpcy5sYXN0Q29sbGlkaW5nRWxlbWVudDtcbiAgICBjb25zdCBjb2xsaWRhYmxlT3V0RXZlbnQgPSBuZXcgX0NvbGxpZGFibGVFdmVudC5Db2xsaWRhYmxlT3V0RXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudCxcbiAgICAgIGNvbGxpZGluZ0VsZW1lbnQ6IGxhc3RDb2xsaWRpbmdFbGVtZW50XG4gICAgfSk7XG5cbiAgICBpZiAobGFzdENvbGxpZGluZ0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXIoY29sbGlkYWJsZU91dEV2ZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLmxhc3RDb2xsaWRpbmdFbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRseUNvbGxpZGluZ0VsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbiBmcmFtZSBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgLSBDdXJyZW50IG1vdmUgdGFyZ2V0XG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICAgKi9cbiAgW29uUmVxdWVzdEFuaW1hdGlvbkZyYW1lXSh0YXJnZXQpIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY29sbGlkYWJsZXMgPSB0aGlzLmdldENvbGxpZGFibGVzKCk7XG4gICAgICB0aGlzLmN1cnJlbnRseUNvbGxpZGluZ0VsZW1lbnQgPSAoMCwgX3V0aWxzLmNsb3Nlc3QpKHRhcmdldCwgZWxlbWVudCA9PiBjb2xsaWRhYmxlcy5pbmNsdWRlcyhlbGVtZW50KSk7XG4gICAgfTtcbiAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ29sbGlkYWJsZTtcblxuLyoqKi8gfSksXG4vKiAyMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Db2xsaWRhYmxlT3V0RXZlbnQgPSBleHBvcnRzLkNvbGxpZGFibGVJbkV2ZW50ID0gZXhwb3J0cy5Db2xsaWRhYmxlRXZlbnQgPSB1bmRlZmluZWQ7XG5cbnZhciBfQWJzdHJhY3RFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfQWJzdHJhY3RFdmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BYnN0cmFjdEV2ZW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBCYXNlIGNvbGxpZGFibGUgZXZlbnRcbiAqIEBjbGFzcyBDb2xsaWRhYmxlRXZlbnRcbiAqIEBtb2R1bGUgQ29sbGlkYWJsZUV2ZW50XG4gKiBAZXh0ZW5kcyBBYnN0cmFjdEV2ZW50XG4gKi9cbmNsYXNzIENvbGxpZGFibGVFdmVudCBleHRlbmRzIF9BYnN0cmFjdEV2ZW50Mi5kZWZhdWx0IHtcblxuICAvKipcbiAgICogRHJhZyBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGlzIGNvbGxpYWJsZSBldmVudFxuICAgKiBAcHJvcGVydHkgZHJhZ0V2ZW50XG4gICAqIEB0eXBlIHtEcmFnRXZlbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IGRyYWdFdmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmRyYWdFdmVudDtcbiAgfVxufVxuXG5leHBvcnRzLkNvbGxpZGFibGVFdmVudCA9IENvbGxpZGFibGVFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQ29sbGlkYWJsZSBpbiBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzcyBDb2xsaWRhYmxlSW5FdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtb2R1bGUgQ29sbGlkYWJsZUluRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXh0ZW5kcyBDb2xsaWRhYmxlRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuQ29sbGlkYWJsZUV2ZW50LnR5cGUgPSAnY29sbGlkYWJsZSc7XG5jbGFzcyBDb2xsaWRhYmxlSW5FdmVudCBleHRlbmRzIENvbGxpZGFibGVFdmVudCB7XG5cbiAgLyoqXG4gICAqIEVsZW1lbnQgeW91IGFyZSBjdXJyZW50bHkgY29sbGlkaW5nIHdpdGhcbiAgICogQHByb3BlcnR5IGNvbGxpZGluZ0VsZW1lbnRcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBjb2xsaWRpbmdFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuY29sbGlkaW5nRWxlbWVudDtcbiAgfVxufVxuXG5leHBvcnRzLkNvbGxpZGFibGVJbkV2ZW50ID0gQ29sbGlkYWJsZUluRXZlbnQ7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBDb2xsaWRhYmxlIG91dCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgQ29sbGlkYWJsZU91dEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtb2R1bGUgQ29sbGlkYWJsZU91dEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIENvbGxpZGFibGVFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuQ29sbGlkYWJsZUluRXZlbnQudHlwZSA9ICdjb2xsaWRhYmxlOmluJztcbmNsYXNzIENvbGxpZGFibGVPdXRFdmVudCBleHRlbmRzIENvbGxpZGFibGVFdmVudCB7XG5cbiAgLyoqXG4gICAqIEVsZW1lbnQgeW91IHdlcmUgcHJldmlvdXNseSBjb2xsaWRpbmcgd2l0aFxuICAgKiBAcHJvcGVydHkgY29sbGlkaW5nRWxlbWVudFxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IGNvbGxpZGluZ0VsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5jb2xsaWRpbmdFbGVtZW50O1xuICB9XG59XG5leHBvcnRzLkNvbGxpZGFibGVPdXRFdmVudCA9IENvbGxpZGFibGVPdXRFdmVudDtcbkNvbGxpZGFibGVPdXRFdmVudC50eXBlID0gJ2NvbGxpZGFibGU6b3V0JztcblxuLyoqKi8gfSksXG4vKiAyNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0NvbGxpZGFibGVFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cbk9iamVjdC5rZXlzKF9Db2xsaWRhYmxlRXZlbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9Db2xsaWRhYmxlRXZlbnRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfQ29sbGlkYWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpO1xuXG52YXIgX0NvbGxpZGFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sbGlkYWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9Db2xsaWRhYmxlMi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcbi8qIDI1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfQ29sbGlkYWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0NvbGxpZGFibGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xsaWRhYmxlKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9SZXNpemVNaXJyb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZXNpemVNaXJyb3InLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZXNpemVNaXJyb3IpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdkZWZhdWx0UmVzaXplTWlycm9yT3B0aW9ucycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9SZXNpemVNaXJyb3IuZGVmYXVsdE9wdGlvbnM7XG4gIH1cbn0pO1xuXG52YXIgX1NuYXBwYWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NuYXBwYWJsZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NuYXBwYWJsZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfU3dhcEFuaW1hdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1N3YXBBbmltYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Td2FwQW5pbWF0aW9uKS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZGVmYXVsdFN3YXBBbmltYXRpb25PcHRpb25zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX1N3YXBBbmltYXRpb24uZGVmYXVsdE9wdGlvbnM7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKioqLyB9KSxcbi8qIDI2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfRHJhZ2dhYmxlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxudmFyIF9EcmFnZ2FibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJhZ2dhYmxlKTtcblxudmFyIF9Tb3J0YWJsZUV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3Qgb25EcmFnU3RhcnQgPSBTeW1ib2woJ29uRHJhZ1N0YXJ0Jyk7XG5jb25zdCBvbkRyYWdPdmVyQ29udGFpbmVyID0gU3ltYm9sKCdvbkRyYWdPdmVyQ29udGFpbmVyJyk7XG5jb25zdCBvbkRyYWdPdmVyID0gU3ltYm9sKCdvbkRyYWdPdmVyJyk7XG5jb25zdCBvbkRyYWdTdG9wID0gU3ltYm9sKCdvbkRyYWdTdG9wJyk7XG5cbi8qKlxuICogUmV0dXJucyBhbm5vdW5jZW1lbnQgbWVzc2FnZSB3aGVuIGEgRHJhZ2dhYmxlIGVsZW1lbnQgaGFzIGJlZW4gc29ydGVkIHdpdGggYW5vdGhlciBEcmFnZ2FibGUgZWxlbWVudFxuICogb3IgbW92ZWQgaW50byBhIG5ldyBjb250YWluZXJcbiAqIEBwYXJhbSB7U29ydGFibGVTb3J0ZWRFdmVudH0gc29ydGFibGVFdmVudFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBvblNvcnRhYmxlU29ydGVkRGVmYXVsdEFubm91bmNlbWVudCh7IGRyYWdFdmVudCB9KSB7XG4gIGNvbnN0IHNvdXJjZVRleHQgPSBkcmFnRXZlbnQuc291cmNlLnRleHRDb250ZW50LnRyaW0oKSB8fCBkcmFnRXZlbnQuc291cmNlLmlkIHx8ICdzb3J0YWJsZSBlbGVtZW50JztcblxuICBpZiAoZHJhZ0V2ZW50Lm92ZXIpIHtcbiAgICBjb25zdCBvdmVyVGV4dCA9IGRyYWdFdmVudC5vdmVyLnRleHRDb250ZW50LnRyaW0oKSB8fCBkcmFnRXZlbnQub3Zlci5pZCB8fCAnc29ydGFibGUgZWxlbWVudCc7XG4gICAgY29uc3QgaXNGb2xsb3dpbmcgPSBkcmFnRXZlbnQuc291cmNlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGRyYWdFdmVudC5vdmVyKSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HO1xuXG4gICAgaWYgKGlzRm9sbG93aW5nKSB7XG4gICAgICByZXR1cm4gYFBsYWNlZCAke3NvdXJjZVRleHR9IGFmdGVyICR7b3ZlclRleHR9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGBQbGFjZWQgJHtzb3VyY2VUZXh0fSBiZWZvcmUgJHtvdmVyVGV4dH1gO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBuZWVkIHRvIGZpZ3VyZSBvdXQgaG93IHRvIGNvbXB1dGUgY29udGFpbmVyIG5hbWVcbiAgICByZXR1cm4gYFBsYWNlZCAke3NvdXJjZVRleHR9IGludG8gYSBkaWZmZXJlbnQgY29udGFpbmVyYDtcbiAgfVxufVxuXG4vKipcbiAqIEBjb25zdCB7T2JqZWN0fSBkZWZhdWx0QW5ub3VuY2VtZW50c1xuICogQGNvbnN0IHtGdW5jdGlvbn0gZGVmYXVsdEFubm91bmNlbWVudHNbJ3NvcnRhYmxlOnNvcnRlZCddXG4gKi9cbmNvbnN0IGRlZmF1bHRBbm5vdW5jZW1lbnRzID0ge1xuICAnc29ydGFibGU6c29ydGVkJzogb25Tb3J0YWJsZVNvcnRlZERlZmF1bHRBbm5vdW5jZW1lbnRcbn07XG5cbi8qKlxuICogU29ydGFibGUgaXMgYnVpbHQgb24gdG9wIG9mIERyYWdnYWJsZSBhbmQgYWxsb3dzIHNvcnRpbmcgb2YgZHJhZ2dhYmxlIGVsZW1lbnRzLiBTb3J0YWJsZSB3aWxsIGtlZXBcbiAqIHRyYWNrIG9mIHRoZSBvcmlnaW5hbCBpbmRleCBhbmQgZW1pdHMgdGhlIG5ldyBpbmRleCBhcyB5b3UgZHJhZyBvdmVyIGRyYWdnYWJsZSBlbGVtZW50cy5cbiAqIEBjbGFzcyBTb3J0YWJsZVxuICogQG1vZHVsZSBTb3J0YWJsZVxuICogQGV4dGVuZHMgRHJhZ2dhYmxlXG4gKi9cbmNsYXNzIFNvcnRhYmxlIGV4dGVuZHMgX0RyYWdnYWJsZTIuZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBTb3J0YWJsZSBjb25zdHJ1Y3Rvci5cbiAgICogQGNvbnN0cnVjdHMgU29ydGFibGVcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudFtdfE5vZGVMaXN0fEhUTUxFbGVtZW50fSBjb250YWluZXJzIC0gU29ydGFibGUgY29udGFpbmVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgZm9yIFNvcnRhYmxlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXJzID0gW10sIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKGNvbnRhaW5lcnMsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBhbm5vdW5jZW1lbnRzOiBfZXh0ZW5kcyh7fSwgZGVmYXVsdEFubm91bmNlbWVudHMsIG9wdGlvbnMuYW5ub3VuY2VtZW50cyB8fCB7fSlcbiAgICB9KSk7XG5cbiAgICAvKipcbiAgICAgKiBzdGFydCBpbmRleCBvZiBzb3VyY2Ugb24gZHJhZyBzdGFydFxuICAgICAqIEBwcm9wZXJ0eSBzdGFydEluZGV4XG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnN0YXJ0SW5kZXggPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogc3RhcnQgY29udGFpbmVyIG9uIGRyYWcgc3RhcnRcbiAgICAgKiBAcHJvcGVydHkgc3RhcnRDb250YWluZXJcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHRoaXMuc3RhcnRDb250YWluZXIgPSBudWxsO1xuXG4gICAgdGhpc1tvbkRyYWdTdGFydF0gPSB0aGlzW29uRHJhZ1N0YXJ0XS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnT3ZlckNvbnRhaW5lcl0gPSB0aGlzW29uRHJhZ092ZXJDb250YWluZXJdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdPdmVyXSA9IHRoaXNbb25EcmFnT3Zlcl0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ1N0b3BdID0gdGhpc1tvbkRyYWdTdG9wXS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vbignZHJhZzpzdGFydCcsIHRoaXNbb25EcmFnU3RhcnRdKS5vbignZHJhZzpvdmVyOmNvbnRhaW5lcicsIHRoaXNbb25EcmFnT3ZlckNvbnRhaW5lcl0pLm9uKCdkcmFnOm92ZXInLCB0aGlzW29uRHJhZ092ZXJdKS5vbignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgU29ydGFibGUgaW5zdGFuY2UuXG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcblxuICAgIHRoaXMub2ZmKCdkcmFnOnN0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0pLm9mZignZHJhZzpvdmVyOmNvbnRhaW5lcicsIHRoaXNbb25EcmFnT3ZlckNvbnRhaW5lcl0pLm9mZignZHJhZzpvdmVyJywgdGhpc1tvbkRyYWdPdmVyXSkub2ZmKCdkcmFnOnN0b3AnLCB0aGlzW29uRHJhZ1N0b3BdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaW5kZXggb2YgZWxlbWVudCB3aXRoaW4gaXRzIGNvbnRhaW5lciBkdXJpbmcgZHJhZyBvcGVyYXRpb24sIGkuZS4gZXhjbHVkaW5nIG1pcnJvciBhbmQgb3JpZ2luYWwgc291cmNlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBBbiBlbGVtZW50XG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICovXG4gIGluZGV4KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXREcmFnZ2FibGVFbGVtZW50c0ZvckNvbnRhaW5lcihlbGVtZW50LnBhcmVudE5vZGUpLmluZGV4T2YoZWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBzdGFydCBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RHJhZ1N0YXJ0RXZlbnR9IGV2ZW50IC0gRHJhZyBzdGFydCBldmVudFxuICAgKi9cbiAgW29uRHJhZ1N0YXJ0XShldmVudCkge1xuICAgIHRoaXMuc3RhcnRDb250YWluZXIgPSBldmVudC5zb3VyY2UucGFyZW50Tm9kZTtcbiAgICB0aGlzLnN0YXJ0SW5kZXggPSB0aGlzLmluZGV4KGV2ZW50LnNvdXJjZSk7XG5cbiAgICBjb25zdCBzb3J0YWJsZVN0YXJ0RXZlbnQgPSBuZXcgX1NvcnRhYmxlRXZlbnQuU29ydGFibGVTdGFydEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBzdGFydEluZGV4OiB0aGlzLnN0YXJ0SW5kZXgsXG4gICAgICBzdGFydENvbnRhaW5lcjogdGhpcy5zdGFydENvbnRhaW5lclxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKHNvcnRhYmxlU3RhcnRFdmVudCk7XG5cbiAgICBpZiAoc29ydGFibGVTdGFydEV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIGV2ZW50LmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIG92ZXIgY29udGFpbmVyIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtEcmFnT3ZlckNvbnRhaW5lckV2ZW50fSBldmVudCAtIERyYWcgb3ZlciBjb250YWluZXIgZXZlbnRcbiAgICovXG4gIFtvbkRyYWdPdmVyQ29udGFpbmVyXShldmVudCkge1xuICAgIGlmIChldmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBzb3VyY2UsIG92ZXIsIG92ZXJDb250YWluZXIgfSA9IGV2ZW50O1xuICAgIGNvbnN0IG9sZEluZGV4ID0gdGhpcy5pbmRleChzb3VyY2UpO1xuXG4gICAgY29uc3Qgc29ydGFibGVTb3J0RXZlbnQgPSBuZXcgX1NvcnRhYmxlRXZlbnQuU29ydGFibGVTb3J0RXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudCxcbiAgICAgIGN1cnJlbnRJbmRleDogb2xkSW5kZXgsXG4gICAgICBzb3VyY2UsXG4gICAgICBvdmVyXG4gICAgfSk7XG5cbiAgICB0aGlzLnRyaWdnZXIoc29ydGFibGVTb3J0RXZlbnQpO1xuXG4gICAgaWYgKHNvcnRhYmxlU29ydEV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0RHJhZ2dhYmxlRWxlbWVudHNGb3JDb250YWluZXIob3ZlckNvbnRhaW5lcik7XG4gICAgY29uc3QgbW92ZXMgPSBtb3ZlKHsgc291cmNlLCBvdmVyLCBvdmVyQ29udGFpbmVyLCBjaGlsZHJlbiB9KTtcblxuICAgIGlmICghbW92ZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IG9sZENvbnRhaW5lciwgbmV3Q29udGFpbmVyIH0gPSBtb3ZlcztcbiAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMuaW5kZXgoZXZlbnQuc291cmNlKTtcblxuICAgIGNvbnN0IHNvcnRhYmxlU29ydGVkRXZlbnQgPSBuZXcgX1NvcnRhYmxlRXZlbnQuU29ydGFibGVTb3J0ZWRFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgb2xkSW5kZXgsXG4gICAgICBuZXdJbmRleCxcbiAgICAgIG9sZENvbnRhaW5lcixcbiAgICAgIG5ld0NvbnRhaW5lclxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKHNvcnRhYmxlU29ydGVkRXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgb3ZlciBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RHJhZ092ZXJFdmVudH0gZXZlbnQgLSBEcmFnIG92ZXIgZXZlbnRcbiAgICovXG4gIFtvbkRyYWdPdmVyXShldmVudCkge1xuICAgIGlmIChldmVudC5vdmVyID09PSBldmVudC5vcmlnaW5hbFNvdXJjZSB8fCBldmVudC5vdmVyID09PSBldmVudC5zb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHNvdXJjZSwgb3Zlciwgb3ZlckNvbnRhaW5lciB9ID0gZXZlbnQ7XG4gICAgY29uc3Qgb2xkSW5kZXggPSB0aGlzLmluZGV4KHNvdXJjZSk7XG5cbiAgICBjb25zdCBzb3J0YWJsZVNvcnRFdmVudCA9IG5ldyBfU29ydGFibGVFdmVudC5Tb3J0YWJsZVNvcnRFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgY3VycmVudEluZGV4OiBvbGRJbmRleCxcbiAgICAgIHNvdXJjZSxcbiAgICAgIG92ZXJcbiAgICB9KTtcblxuICAgIHRoaXMudHJpZ2dlcihzb3J0YWJsZVNvcnRFdmVudCk7XG5cbiAgICBpZiAoc29ydGFibGVTb3J0RXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXREcmFnZ2FibGVFbGVtZW50c0ZvckNvbnRhaW5lcihvdmVyQ29udGFpbmVyKTtcbiAgICBjb25zdCBtb3ZlcyA9IG1vdmUoeyBzb3VyY2UsIG92ZXIsIG92ZXJDb250YWluZXIsIGNoaWxkcmVuIH0pO1xuXG4gICAgaWYgKCFtb3Zlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgb2xkQ29udGFpbmVyLCBuZXdDb250YWluZXIgfSA9IG1vdmVzO1xuICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5pbmRleChzb3VyY2UpO1xuXG4gICAgY29uc3Qgc29ydGFibGVTb3J0ZWRFdmVudCA9IG5ldyBfU29ydGFibGVFdmVudC5Tb3J0YWJsZVNvcnRlZEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBvbGRJbmRleCxcbiAgICAgIG5ld0luZGV4LFxuICAgICAgb2xkQ29udGFpbmVyLFxuICAgICAgbmV3Q29udGFpbmVyXG4gICAgfSk7XG5cbiAgICB0aGlzLnRyaWdnZXIoc29ydGFibGVTb3J0ZWRFdmVudCk7XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBzdG9wIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtEcmFnU3RvcEV2ZW50fSBldmVudCAtIERyYWcgc3RvcCBldmVudFxuICAgKi9cbiAgW29uRHJhZ1N0b3BdKGV2ZW50KSB7XG4gICAgY29uc3Qgc29ydGFibGVTdG9wRXZlbnQgPSBuZXcgX1NvcnRhYmxlRXZlbnQuU29ydGFibGVTdG9wRXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudCxcbiAgICAgIG9sZEluZGV4OiB0aGlzLnN0YXJ0SW5kZXgsXG4gICAgICBuZXdJbmRleDogdGhpcy5pbmRleChldmVudC5zb3VyY2UpLFxuICAgICAgb2xkQ29udGFpbmVyOiB0aGlzLnN0YXJ0Q29udGFpbmVyLFxuICAgICAgbmV3Q29udGFpbmVyOiBldmVudC5zb3VyY2UucGFyZW50Tm9kZVxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKHNvcnRhYmxlU3RvcEV2ZW50KTtcblxuICAgIHRoaXMuc3RhcnRJbmRleCA9IG51bGw7XG4gICAgdGhpcy5zdGFydENvbnRhaW5lciA9IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gU29ydGFibGU7XG5mdW5jdGlvbiBpbmRleChlbGVtZW50KSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGVsZW1lbnQucGFyZW50Tm9kZS5jaGlsZHJlbiwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG1vdmUoeyBzb3VyY2UsIG92ZXIsIG92ZXJDb250YWluZXIsIGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgZW1wdHlPdmVyQ29udGFpbmVyID0gIWNoaWxkcmVuLmxlbmd0aDtcbiAgY29uc3QgZGlmZmVyZW50Q29udGFpbmVyID0gc291cmNlLnBhcmVudE5vZGUgIT09IG92ZXJDb250YWluZXI7XG4gIGNvbnN0IHNhbWVDb250YWluZXIgPSBvdmVyICYmICFkaWZmZXJlbnRDb250YWluZXI7XG5cbiAgaWYgKGVtcHR5T3ZlckNvbnRhaW5lcikge1xuICAgIHJldHVybiBtb3ZlSW5zaWRlRW1wdHlDb250YWluZXIoc291cmNlLCBvdmVyQ29udGFpbmVyKTtcbiAgfSBlbHNlIGlmIChzYW1lQ29udGFpbmVyKSB7XG4gICAgcmV0dXJuIG1vdmVXaXRoaW5Db250YWluZXIoc291cmNlLCBvdmVyKTtcbiAgfSBlbHNlIGlmIChkaWZmZXJlbnRDb250YWluZXIpIHtcbiAgICByZXR1cm4gbW92ZU91dHNpZGVDb250YWluZXIoc291cmNlLCBvdmVyLCBvdmVyQ29udGFpbmVyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlSW5zaWRlRW1wdHlDb250YWluZXIoc291cmNlLCBvdmVyQ29udGFpbmVyKSB7XG4gIGNvbnN0IG9sZENvbnRhaW5lciA9IHNvdXJjZS5wYXJlbnROb2RlO1xuXG4gIG92ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc291cmNlKTtcblxuICByZXR1cm4geyBvbGRDb250YWluZXIsIG5ld0NvbnRhaW5lcjogb3ZlckNvbnRhaW5lciB9O1xufVxuXG5mdW5jdGlvbiBtb3ZlV2l0aGluQ29udGFpbmVyKHNvdXJjZSwgb3Zlcikge1xuICBjb25zdCBvbGRJbmRleCA9IGluZGV4KHNvdXJjZSk7XG4gIGNvbnN0IG5ld0luZGV4ID0gaW5kZXgob3Zlcik7XG5cbiAgaWYgKG9sZEluZGV4IDwgbmV3SW5kZXgpIHtcbiAgICBzb3VyY2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc291cmNlLCBvdmVyLm5leHRFbGVtZW50U2libGluZyk7XG4gIH0gZWxzZSB7XG4gICAgc291cmNlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNvdXJjZSwgb3Zlcik7XG4gIH1cblxuICByZXR1cm4geyBvbGRDb250YWluZXI6IHNvdXJjZS5wYXJlbnROb2RlLCBuZXdDb250YWluZXI6IHNvdXJjZS5wYXJlbnROb2RlIH07XG59XG5cbmZ1bmN0aW9uIG1vdmVPdXRzaWRlQ29udGFpbmVyKHNvdXJjZSwgb3Zlciwgb3ZlckNvbnRhaW5lcikge1xuICBjb25zdCBvbGRDb250YWluZXIgPSBzb3VyY2UucGFyZW50Tm9kZTtcblxuICBpZiAob3Zlcikge1xuICAgIG92ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc291cmNlLCBvdmVyKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBuZWVkIHRvIGZpZ3VyZSBvdXQgcHJvcGVyIHBvc2l0aW9uXG4gICAgb3ZlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuIHsgb2xkQ29udGFpbmVyLCBuZXdDb250YWluZXI6IHNvdXJjZS5wYXJlbnROb2RlIH07XG59XG5cbi8qKiovIH0pLFxuLyogMjcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuU29ydGFibGVTdG9wRXZlbnQgPSBleHBvcnRzLlNvcnRhYmxlU29ydGVkRXZlbnQgPSBleHBvcnRzLlNvcnRhYmxlU29ydEV2ZW50ID0gZXhwb3J0cy5Tb3J0YWJsZVN0YXJ0RXZlbnQgPSBleHBvcnRzLlNvcnRhYmxlRXZlbnQgPSB1bmRlZmluZWQ7XG5cbnZhciBfQWJzdHJhY3RFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfQWJzdHJhY3RFdmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BYnN0cmFjdEV2ZW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBCYXNlIHNvcnRhYmxlIGV2ZW50XG4gKiBAY2xhc3MgU29ydGFibGVFdmVudFxuICogQG1vZHVsZSBTb3J0YWJsZUV2ZW50XG4gKiBAZXh0ZW5kcyBBYnN0cmFjdEV2ZW50XG4gKi9cbmNsYXNzIFNvcnRhYmxlRXZlbnQgZXh0ZW5kcyBfQWJzdHJhY3RFdmVudDIuZGVmYXVsdCB7XG5cbiAgLyoqXG4gICAqIE9yaWdpbmFsIGRyYWcgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhpcyBzb3J0YWJsZSBldmVudFxuICAgKiBAcHJvcGVydHkgZHJhZ0V2ZW50XG4gICAqIEB0eXBlIHtEcmFnRXZlbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IGRyYWdFdmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmRyYWdFdmVudDtcbiAgfVxufVxuXG5leHBvcnRzLlNvcnRhYmxlRXZlbnQgPSBTb3J0YWJsZUV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFNvcnRhYmxlIHN0YXJ0IGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgU29ydGFibGVTdGFydEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIFNvcnRhYmxlU3RhcnRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGV4dGVuZHMgU29ydGFibGVFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblNvcnRhYmxlRXZlbnQudHlwZSA9ICdzb3J0YWJsZSc7XG5jbGFzcyBTb3J0YWJsZVN0YXJ0RXZlbnQgZXh0ZW5kcyBTb3J0YWJsZUV2ZW50IHtcblxuICAvKipcbiAgICogU3RhcnQgaW5kZXggb2Ygc291cmNlIG9uIHNvcnRhYmxlIHN0YXJ0XG4gICAqIEBwcm9wZXJ0eSBzdGFydEluZGV4XG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IHN0YXJ0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zdGFydEluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGNvbnRhaW5lciBvbiBzb3J0YWJsZSBzdGFydFxuICAgKiBAcHJvcGVydHkgc3RhcnRDb250YWluZXJcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBzdGFydENvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnN0YXJ0Q29udGFpbmVyO1xuICB9XG59XG5cbmV4cG9ydHMuU29ydGFibGVTdGFydEV2ZW50ID0gU29ydGFibGVTdGFydEV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBTb3J0YWJsZSBzb3J0IGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIFNvcnRhYmxlU29ydEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBTb3J0YWJsZVNvcnRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIFNvcnRhYmxlRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuU29ydGFibGVTdGFydEV2ZW50LnR5cGUgPSAnc29ydGFibGU6c3RhcnQnO1xuU29ydGFibGVTdGFydEV2ZW50LmNhbmNlbGFibGUgPSB0cnVlO1xuY2xhc3MgU29ydGFibGVTb3J0RXZlbnQgZXh0ZW5kcyBTb3J0YWJsZUV2ZW50IHtcblxuICAvKipcbiAgICogSW5kZXggb2YgY3VycmVudCBkcmFnZ2FibGUgZWxlbWVudFxuICAgKiBAcHJvcGVydHkgY3VycmVudEluZGV4XG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IGN1cnJlbnRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmN1cnJlbnRJbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnZ2FibGUgZWxlbWVudCB5b3UgYXJlIGhvdmVyaW5nIG92ZXJcbiAgICogQHByb3BlcnR5IG92ZXJcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBvdmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEub2xkSW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogRHJhZ2dhYmxlIGNvbnRhaW5lciBlbGVtZW50IHlvdSBhcmUgaG92ZXJpbmcgb3ZlclxuICAgKiBAcHJvcGVydHkgb3ZlckNvbnRhaW5lclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IG92ZXJDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5uZXdJbmRleDtcbiAgfVxufVxuXG5leHBvcnRzLlNvcnRhYmxlU29ydEV2ZW50ID0gU29ydGFibGVTb3J0RXZlbnQ7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBTb3J0YWJsZSBzb3J0ZWQgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIFNvcnRhYmxlU29ydGVkRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBTb3J0YWJsZVNvcnRlZEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIFNvcnRhYmxlRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblNvcnRhYmxlU29ydEV2ZW50LnR5cGUgPSAnc29ydGFibGU6c29ydCc7XG5Tb3J0YWJsZVNvcnRFdmVudC5jYW5jZWxhYmxlID0gdHJ1ZTtcbmNsYXNzIFNvcnRhYmxlU29ydGVkRXZlbnQgZXh0ZW5kcyBTb3J0YWJsZUV2ZW50IHtcblxuICAvKipcbiAgICogSW5kZXggb2YgbGFzdCBzb3J0ZWQgZXZlbnRcbiAgICogQHByb3BlcnR5IG9sZEluZGV4XG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IG9sZEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEub2xkSW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogTmV3IGluZGV4IG9mIHRoaXMgc29ydGVkIGV2ZW50XG4gICAqIEBwcm9wZXJ0eSBuZXdJbmRleFxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBuZXdJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm5ld0luZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIE9sZCBjb250YWluZXIgb2YgZHJhZ2dhYmxlIGVsZW1lbnRcbiAgICogQHByb3BlcnR5IG9sZENvbnRhaW5lclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IG9sZENvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm9sZENvbnRhaW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXcgY29udGFpbmVyIG9mIGRyYWdnYWJsZSBlbGVtZW50XG4gICAqIEBwcm9wZXJ0eSBuZXdDb250YWluZXJcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBuZXdDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5uZXdDb250YWluZXI7XG4gIH1cbn1cblxuZXhwb3J0cy5Tb3J0YWJsZVNvcnRlZEV2ZW50ID0gU29ydGFibGVTb3J0ZWRFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBTb3J0YWJsZSBzdG9wIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgU29ydGFibGVTdG9wRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtb2R1bGUgU29ydGFibGVTdG9wRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIFNvcnRhYmxlRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5Tb3J0YWJsZVNvcnRlZEV2ZW50LnR5cGUgPSAnc29ydGFibGU6c29ydGVkJztcbmNsYXNzIFNvcnRhYmxlU3RvcEV2ZW50IGV4dGVuZHMgU29ydGFibGVFdmVudCB7XG5cbiAgLyoqXG4gICAqIE9yaWdpbmFsIGluZGV4IG9uIHNvcnRhYmxlIHN0YXJ0XG4gICAqIEBwcm9wZXJ0eSBvbGRJbmRleFxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBvbGRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm9sZEluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIE5ldyBpbmRleCBvZiBkcmFnZ2FibGUgZWxlbWVudFxuICAgKiBAcHJvcGVydHkgbmV3SW5kZXhcbiAgICogQHR5cGUge051bWJlcn1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgbmV3SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5uZXdJbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcmlnaW5hbCBjb250YWluZXIgb2YgZHJhZ2dhYmxlIGVsZW1lbnRcbiAgICogQHByb3BlcnR5IG9sZENvbnRhaW5lclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IG9sZENvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm9sZENvbnRhaW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXcgY29udGFpbmVyIG9mIGRyYWdnYWJsZSBlbGVtZW50XG4gICAqIEBwcm9wZXJ0eSBuZXdDb250YWluZXJcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBuZXdDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5uZXdDb250YWluZXI7XG4gIH1cbn1cbmV4cG9ydHMuU29ydGFibGVTdG9wRXZlbnQgPSBTb3J0YWJsZVN0b3BFdmVudDtcblNvcnRhYmxlU3RvcEV2ZW50LnR5cGUgPSAnc29ydGFibGU6c3RvcCc7XG5cbi8qKiovIH0pLFxuLyogMjggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9Tb3J0YWJsZUV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblxuT2JqZWN0LmtleXMoX1NvcnRhYmxlRXZlbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9Tb3J0YWJsZUV2ZW50W2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX1NvcnRhYmxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNik7XG5cbnZhciBfU29ydGFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU29ydGFibGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfU29ydGFibGUyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuLyogMjkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9EcmFnZ2FibGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG52YXIgX0RyYWdnYWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EcmFnZ2FibGUpO1xuXG52YXIgX1N3YXBwYWJsZUV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IG9uRHJhZ1N0YXJ0ID0gU3ltYm9sKCdvbkRyYWdTdGFydCcpO1xuY29uc3Qgb25EcmFnT3ZlciA9IFN5bWJvbCgnb25EcmFnT3ZlcicpO1xuY29uc3Qgb25EcmFnU3RvcCA9IFN5bWJvbCgnb25EcmFnU3RvcCcpO1xuXG4vKipcbiAqIFJldHVybnMgYW4gYW5ub3VuY2VtZW50IG1lc3NhZ2Ugd2hlbiB0aGUgRHJhZ2dhYmxlIGVsZW1lbnQgaXMgc3dhcHBlZCB3aXRoIGFub3RoZXIgZHJhZ2dhYmxlIGVsZW1lbnRcbiAqIEBwYXJhbSB7U3dhcHBhYmxlU3dhcHBlZEV2ZW50fSBzd2FwcGFibGVFdmVudFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBvblN3YXBwYWJsZVN3YXBwZWREZWZhdWx0QW5ub3VuY2VtZW50KHsgZHJhZ0V2ZW50LCBzd2FwcGVkRWxlbWVudCB9KSB7XG4gIGNvbnN0IHNvdXJjZVRleHQgPSBkcmFnRXZlbnQuc291cmNlLnRleHRDb250ZW50LnRyaW0oKSB8fCBkcmFnRXZlbnQuc291cmNlLmlkIHx8ICdzd2FwcGFibGUgZWxlbWVudCc7XG4gIGNvbnN0IG92ZXJUZXh0ID0gc3dhcHBlZEVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpIHx8IHN3YXBwZWRFbGVtZW50LmlkIHx8ICdzd2FwcGFibGUgZWxlbWVudCc7XG5cbiAgcmV0dXJuIGBTd2FwcGVkICR7c291cmNlVGV4dH0gd2l0aCAke292ZXJUZXh0fWA7XG59XG5cbi8qKlxuICogQGNvbnN0IHtPYmplY3R9IGRlZmF1bHRBbm5vdW5jZW1lbnRzXG4gKiBAY29uc3Qge0Z1bmN0aW9ufSBkZWZhdWx0QW5ub3VuY2VtZW50c1snc3dhcHBhYmxlZDpzd2FwcGVkJ11cbiAqL1xuY29uc3QgZGVmYXVsdEFubm91bmNlbWVudHMgPSB7XG4gICdzd2FwcGFibGVkOnN3YXBwZWQnOiBvblN3YXBwYWJsZVN3YXBwZWREZWZhdWx0QW5ub3VuY2VtZW50XG59O1xuXG4vKipcbiAqIFN3YXBwYWJsZSBpcyBidWlsdCBvbiB0b3Agb2YgRHJhZ2dhYmxlIGFuZCBhbGxvd3Mgc3dhcHBpbmcgb2YgZHJhZ2dhYmxlIGVsZW1lbnRzLlxuICogT3JkZXIgaXMgaXJyZWxldmFudCB0byBTd2FwcGFibGUuXG4gKiBAY2xhc3MgU3dhcHBhYmxlXG4gKiBAbW9kdWxlIFN3YXBwYWJsZVxuICogQGV4dGVuZHMgRHJhZ2dhYmxlXG4gKi9cbmNsYXNzIFN3YXBwYWJsZSBleHRlbmRzIF9EcmFnZ2FibGUyLmRlZmF1bHQge1xuICAvKipcbiAgICogU3dhcHBhYmxlIGNvbnN0cnVjdG9yLlxuICAgKiBAY29uc3RydWN0cyBTd2FwcGFibGVcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudFtdfE5vZGVMaXN0fEhUTUxFbGVtZW50fSBjb250YWluZXJzIC0gU3dhcHBhYmxlIGNvbnRhaW5lcnNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zIGZvciBTd2FwcGFibGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcnMgPSBbXSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoY29udGFpbmVycywgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIGFubm91bmNlbWVudHM6IF9leHRlbmRzKHt9LCBkZWZhdWx0QW5ub3VuY2VtZW50cywgb3B0aW9ucy5hbm5vdW5jZW1lbnRzIHx8IHt9KVxuICAgIH0pKTtcblxuICAgIC8qKlxuICAgICAqIExhc3QgZHJhZ2dhYmxlIGVsZW1lbnQgdGhhdCB3YXMgZHJhZ2dlZCBvdmVyXG4gICAgICogQHByb3BlcnR5IGxhc3RPdmVyXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHRoaXMubGFzdE92ZXIgPSBudWxsO1xuXG4gICAgdGhpc1tvbkRyYWdTdGFydF0gPSB0aGlzW29uRHJhZ1N0YXJ0XS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnT3Zlcl0gPSB0aGlzW29uRHJhZ092ZXJdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdTdG9wXSA9IHRoaXNbb25EcmFnU3RvcF0uYmluZCh0aGlzKTtcblxuICAgIHRoaXMub24oJ2RyYWc6c3RhcnQnLCB0aGlzW29uRHJhZ1N0YXJ0XSkub24oJ2RyYWc6b3ZlcicsIHRoaXNbb25EcmFnT3Zlcl0pLm9uKCdkcmFnOnN0b3AnLCB0aGlzW29uRHJhZ1N0b3BdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyBTd2FwcGFibGUgaW5zdGFuY2UuXG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcblxuICAgIHRoaXMub2ZmKCdkcmFnOnN0YXJ0JywgdGhpcy5fb25EcmFnU3RhcnQpLm9mZignZHJhZzpvdmVyJywgdGhpcy5fb25EcmFnT3Zlcikub2ZmKCdkcmFnOnN0b3AnLCB0aGlzLl9vbkRyYWdTdG9wKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIHN0YXJ0IGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtEcmFnU3RhcnRFdmVudH0gZXZlbnQgLSBEcmFnIHN0YXJ0IGV2ZW50XG4gICAqL1xuICBbb25EcmFnU3RhcnRdKGV2ZW50KSB7XG4gICAgY29uc3Qgc3dhcHBhYmxlU3RhcnRFdmVudCA9IG5ldyBfU3dhcHBhYmxlRXZlbnQuU3dhcHBhYmxlU3RhcnRFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50XG4gICAgfSk7XG5cbiAgICB0aGlzLnRyaWdnZXIoc3dhcHBhYmxlU3RhcnRFdmVudCk7XG5cbiAgICBpZiAoc3dhcHBhYmxlU3RhcnRFdmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICBldmVudC5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBvdmVyIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtEcmFnT3ZlckV2ZW50fSBldmVudCAtIERyYWcgb3ZlciBldmVudFxuICAgKi9cbiAgW29uRHJhZ092ZXJdKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50Lm92ZXIgPT09IGV2ZW50Lm9yaWdpbmFsU291cmNlIHx8IGV2ZW50Lm92ZXIgPT09IGV2ZW50LnNvdXJjZSB8fCBldmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3dhcHBhYmxlU3dhcEV2ZW50ID0gbmV3IF9Td2FwcGFibGVFdmVudC5Td2FwcGFibGVTd2FwRXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudCxcbiAgICAgIG92ZXI6IGV2ZW50Lm92ZXIsXG4gICAgICBvdmVyQ29udGFpbmVyOiBldmVudC5vdmVyQ29udGFpbmVyXG4gICAgfSk7XG5cbiAgICB0aGlzLnRyaWdnZXIoc3dhcHBhYmxlU3dhcEV2ZW50KTtcblxuICAgIGlmIChzd2FwcGFibGVTd2FwRXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHN3YXAgb3JpZ2luYWxseSBzd2FwcGVkIGVsZW1lbnQgYmFja1xuICAgIGlmICh0aGlzLmxhc3RPdmVyICYmIHRoaXMubGFzdE92ZXIgIT09IGV2ZW50Lm92ZXIpIHtcbiAgICAgIHN3YXAodGhpcy5sYXN0T3ZlciwgZXZlbnQuc291cmNlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYXN0T3ZlciA9PT0gZXZlbnQub3Zlcikge1xuICAgICAgdGhpcy5sYXN0T3ZlciA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGFzdE92ZXIgPSBldmVudC5vdmVyO1xuICAgIH1cblxuICAgIHN3YXAoZXZlbnQuc291cmNlLCBldmVudC5vdmVyKTtcblxuICAgIGNvbnN0IHN3YXBwYWJsZVN3YXBwZWRFdmVudCA9IG5ldyBfU3dhcHBhYmxlRXZlbnQuU3dhcHBhYmxlU3dhcHBlZEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBzd2FwcGVkRWxlbWVudDogZXZlbnQub3ZlclxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKHN3YXBwYWJsZVN3YXBwZWRFdmVudCk7XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBzdG9wIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtEcmFnU3RvcEV2ZW50fSBldmVudCAtIERyYWcgc3RvcCBldmVudFxuICAgKi9cbiAgW29uRHJhZ1N0b3BdKGV2ZW50KSB7XG4gICAgY29uc3Qgc3dhcHBhYmxlU3RvcEV2ZW50ID0gbmV3IF9Td2FwcGFibGVFdmVudC5Td2FwcGFibGVTdG9wRXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudFxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKHN3YXBwYWJsZVN0b3BFdmVudCk7XG4gICAgdGhpcy5sYXN0T3ZlciA9IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gU3dhcHBhYmxlO1xuZnVuY3Rpb24gd2l0aFRlbXBFbGVtZW50KGNhbGxiYWNrKSB7XG4gIGNvbnN0IHRtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FsbGJhY2sodG1wRWxlbWVudCk7XG4gIHRtcEVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0bXBFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gc3dhcChzb3VyY2UsIG92ZXIpIHtcbiAgY29uc3Qgb3ZlclBhcmVudCA9IG92ZXIucGFyZW50Tm9kZTtcbiAgY29uc3Qgc291cmNlUGFyZW50ID0gc291cmNlLnBhcmVudE5vZGU7XG5cbiAgd2l0aFRlbXBFbGVtZW50KHRtcEVsZW1lbnQgPT4ge1xuICAgIHNvdXJjZVBhcmVudC5pbnNlcnRCZWZvcmUodG1wRWxlbWVudCwgc291cmNlKTtcbiAgICBvdmVyUGFyZW50Lmluc2VydEJlZm9yZShzb3VyY2UsIG92ZXIpO1xuICAgIHNvdXJjZVBhcmVudC5pbnNlcnRCZWZvcmUob3ZlciwgdG1wRWxlbWVudCk7XG4gIH0pO1xufVxuXG4vKioqLyB9KSxcbi8qIDMwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlN3YXBwYWJsZVN0b3BFdmVudCA9IGV4cG9ydHMuU3dhcHBhYmxlU3dhcHBlZEV2ZW50ID0gZXhwb3J0cy5Td2FwcGFibGVTd2FwRXZlbnQgPSBleHBvcnRzLlN3YXBwYWJsZVN0YXJ0RXZlbnQgPSBleHBvcnRzLlN3YXBwYWJsZUV2ZW50ID0gdW5kZWZpbmVkO1xuXG52YXIgX0Fic3RyYWN0RXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX0Fic3RyYWN0RXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWJzdHJhY3RFdmVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQmFzZSBzd2FwcGFibGUgZXZlbnRcbiAqIEBjbGFzcyBTd2FwcGFibGVFdmVudFxuICogQG1vZHVsZSBTd2FwcGFibGVFdmVudFxuICogQGV4dGVuZHMgQWJzdHJhY3RFdmVudFxuICovXG5jbGFzcyBTd2FwcGFibGVFdmVudCBleHRlbmRzIF9BYnN0cmFjdEV2ZW50Mi5kZWZhdWx0IHtcblxuICAvKipcbiAgICogT3JpZ2luYWwgZHJhZyBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGlzIHN3YXBwYWJsZSBldmVudFxuICAgKiBAcHJvcGVydHkgZHJhZ0V2ZW50XG4gICAqIEB0eXBlIHtEcmFnRXZlbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IGRyYWdFdmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmRyYWdFdmVudDtcbiAgfVxufVxuXG5leHBvcnRzLlN3YXBwYWJsZUV2ZW50ID0gU3dhcHBhYmxlRXZlbnQ7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBTd2FwcGFibGUgc3RhcnQgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIFN3YXBwYWJsZVN0YXJ0RXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBTd2FwcGFibGVTdGFydEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIFN3YXBwYWJsZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5Td2FwcGFibGVFdmVudC50eXBlID0gJ3N3YXBwYWJsZSc7XG5jbGFzcyBTd2FwcGFibGVTdGFydEV2ZW50IGV4dGVuZHMgU3dhcHBhYmxlRXZlbnQge31cblxuZXhwb3J0cy5Td2FwcGFibGVTdGFydEV2ZW50ID0gU3dhcHBhYmxlU3RhcnRFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBTd2FwcGFibGUgc3dhcCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIFN3YXBwYWJsZVN3YXBFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBTd2FwcGFibGVTd2FwRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIFN3YXBwYWJsZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuU3dhcHBhYmxlU3RhcnRFdmVudC50eXBlID0gJ3N3YXBwYWJsZTpzdGFydCc7XG5Td2FwcGFibGVTdGFydEV2ZW50LmNhbmNlbGFibGUgPSB0cnVlO1xuY2xhc3MgU3dhcHBhYmxlU3dhcEV2ZW50IGV4dGVuZHMgU3dhcHBhYmxlRXZlbnQge1xuXG4gIC8qKlxuICAgKiBEcmFnZ2FibGUgZWxlbWVudCB5b3UgYXJlIG92ZXJcbiAgICogQHByb3BlcnR5IG92ZXJcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBvdmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEub3ZlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnZ2FibGUgY29udGFpbmVyIHlvdSBhcmUgb3ZlclxuICAgKiBAcHJvcGVydHkgb3ZlckNvbnRhaW5lclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IG92ZXJDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vdmVyQ29udGFpbmVyO1xuICB9XG59XG5cbmV4cG9ydHMuU3dhcHBhYmxlU3dhcEV2ZW50ID0gU3dhcHBhYmxlU3dhcEV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBTd2FwcGFibGUgc3dhcHBlZCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzcyBTd2FwcGFibGVTd2FwcGVkRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIFN3YXBwYWJsZVN3YXBwZWRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIFN3YXBwYWJsZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblN3YXBwYWJsZVN3YXBFdmVudC50eXBlID0gJ3N3YXBwYWJsZTpzd2FwJztcblN3YXBwYWJsZVN3YXBFdmVudC5jYW5jZWxhYmxlID0gdHJ1ZTtcbmNsYXNzIFN3YXBwYWJsZVN3YXBwZWRFdmVudCBleHRlbmRzIFN3YXBwYWJsZUV2ZW50IHtcblxuICAvKipcbiAgICogVGhlIGRyYWdnYWJsZSBlbGVtZW50IHRoYXQgeW91IHN3YXBwZWQgd2l0aFxuICAgKiBAcHJvcGVydHkgc3dhcHBlZEVsZW1lbnRcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBzd2FwcGVkRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnN3YXBwZWRFbGVtZW50O1xuICB9XG59XG5cbmV4cG9ydHMuU3dhcHBhYmxlU3dhcHBlZEV2ZW50ID0gU3dhcHBhYmxlU3dhcHBlZEV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBTd2FwcGFibGUgc3RvcCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzcyBTd2FwcGFibGVTdG9wRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIFN3YXBwYWJsZVN0b3BFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIFN3YXBwYWJsZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblN3YXBwYWJsZVN3YXBwZWRFdmVudC50eXBlID0gJ3N3YXBwYWJsZTpzd2FwcGVkJztcbmNsYXNzIFN3YXBwYWJsZVN0b3BFdmVudCBleHRlbmRzIFN3YXBwYWJsZUV2ZW50IHt9XG5leHBvcnRzLlN3YXBwYWJsZVN0b3BFdmVudCA9IFN3YXBwYWJsZVN0b3BFdmVudDtcblN3YXBwYWJsZVN0b3BFdmVudC50eXBlID0gJ3N3YXBwYWJsZTpzdG9wJztcblxuLyoqKi8gfSksXG4vKiAzMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1N3YXBwYWJsZUV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cbk9iamVjdC5rZXlzKF9Td2FwcGFibGVFdmVudCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX1N3YXBwYWJsZUV2ZW50W2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX1N3YXBwYWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oMjkpO1xuXG52YXIgX1N3YXBwYWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Td2FwcGFibGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfU3dhcHBhYmxlMi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcbi8qIDMyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX0RyYWdnYWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbnZhciBfRHJhZ2dhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0RyYWdnYWJsZSk7XG5cbnZhciBfRHJvcHBhYmxlRXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3Qgb25EcmFnU3RhcnQgPSBTeW1ib2woJ29uRHJhZ1N0YXJ0Jyk7XG5jb25zdCBvbkRyYWdNb3ZlID0gU3ltYm9sKCdvbkRyYWdNb3ZlJyk7XG5jb25zdCBvbkRyYWdTdG9wID0gU3ltYm9sKCdvbkRyYWdTdG9wJyk7XG5jb25zdCBkcm9wSW5Ecm9wem9uZSA9IFN5bWJvbCgnZHJvcEluRHJvcFpvbmUnKTtcbmNvbnN0IHJldHVyblRvT3JpZ2luYWxEcm9wem9uZSA9IFN5bWJvbCgncmV0dXJuVG9PcmlnaW5hbERyb3B6b25lJyk7XG5jb25zdCBjbG9zZXN0RHJvcHpvbmUgPSBTeW1ib2woJ2Nsb3Nlc3REcm9wem9uZScpO1xuY29uc3QgZ2V0RHJvcHpvbmVzID0gU3ltYm9sKCdnZXREcm9wem9uZXMnKTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFubm91bmNlbWVudCBtZXNzYWdlIHdoZW4gdGhlIERyYWdnYWJsZSBlbGVtZW50IGlzIGRyb3BwZWQgaW50byBhIGRyb3B6b25lIGVsZW1lbnRcbiAqIEBwYXJhbSB7RHJvcHBhYmxlRHJvcHBlZEV2ZW50fSBkcm9wcGFibGVFdmVudFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBvbkRyb3BwYWJsZURyb3BwZWREZWZhdWx0QW5ub3VuY2VtZW50KHsgZHJhZ0V2ZW50LCBkcm9wem9uZSB9KSB7XG4gIGNvbnN0IHNvdXJjZVRleHQgPSBkcmFnRXZlbnQuc291cmNlLnRleHRDb250ZW50LnRyaW0oKSB8fCBkcmFnRXZlbnQuc291cmNlLmlkIHx8ICdkcmFnZ2FibGUgZWxlbWVudCc7XG4gIGNvbnN0IGRyb3B6b25lVGV4dCA9IGRyb3B6b25lLnRleHRDb250ZW50LnRyaW0oKSB8fCBkcm9wem9uZS5pZCB8fCAnZHJvcHBhYmxlIGVsZW1lbnQnO1xuXG4gIHJldHVybiBgRHJvcHBlZCAke3NvdXJjZVRleHR9IGludG8gJHtkcm9wem9uZVRleHR9YDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFubm91bmNlbWVudCBtZXNzYWdlIHdoZW4gdGhlIERyYWdnYWJsZSBlbGVtZW50IGhhcyByZXR1cm5lZCB0byBpdHMgb3JpZ2luYWwgZHJvcHpvbmUgZWxlbWVudFxuICogQHBhcmFtIHtEcm9wcGFibGVSZXR1cm5lZEV2ZW50fSBkcm9wcGFibGVFdmVudFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBvbkRyb3BwYWJsZVJldHVybmVkRGVmYXVsdEFubm91bmNlbWVudCh7IGRyYWdFdmVudCwgZHJvcHpvbmUgfSkge1xuICBjb25zdCBzb3VyY2VUZXh0ID0gZHJhZ0V2ZW50LnNvdXJjZS50ZXh0Q29udGVudC50cmltKCkgfHwgZHJhZ0V2ZW50LnNvdXJjZS5pZCB8fCAnZHJhZ2dhYmxlIGVsZW1lbnQnO1xuICBjb25zdCBkcm9wem9uZVRleHQgPSBkcm9wem9uZS50ZXh0Q29udGVudC50cmltKCkgfHwgZHJvcHpvbmUuaWQgfHwgJ2Ryb3BwYWJsZSBlbGVtZW50JztcblxuICByZXR1cm4gYFJldHVybmVkICR7c291cmNlVGV4dH0gZnJvbSAke2Ryb3B6b25lVGV4dH1gO1xufVxuXG4vKipcbiAqIEBjb25zdCB7T2JqZWN0fSBkZWZhdWx0QW5ub3VuY2VtZW50c1xuICogQGNvbnN0IHtGdW5jdGlvbn0gZGVmYXVsdEFubm91bmNlbWVudHNbJ2Ryb3BwYWJsZTpkcm9wcGVkJ11cbiAqIEBjb25zdCB7RnVuY3Rpb259IGRlZmF1bHRBbm5vdW5jZW1lbnRzWydkcm9wcGFibGU6cmV0dXJuZWQnXVxuICovXG5jb25zdCBkZWZhdWx0QW5ub3VuY2VtZW50cyA9IHtcbiAgJ2Ryb3BwYWJsZTpkcm9wcGVkJzogb25Ecm9wcGFibGVEcm9wcGVkRGVmYXVsdEFubm91bmNlbWVudCxcbiAgJ2Ryb3BwYWJsZTpyZXR1cm5lZCc6IG9uRHJvcHBhYmxlUmV0dXJuZWREZWZhdWx0QW5ub3VuY2VtZW50XG59O1xuXG5jb25zdCBkZWZhdWx0Q2xhc3NlcyA9IHtcbiAgJ2Ryb3BwYWJsZTphY3RpdmUnOiAnZHJhZ2dhYmxlLWRyb3B6b25lLS1hY3RpdmUnLFxuICAnZHJvcHBhYmxlOm9jY3VwaWVkJzogJ2RyYWdnYWJsZS1kcm9wem9uZS0tb2NjdXBpZWQnXG59O1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgZHJvcHpvbmU6ICcuZHJhZ2dhYmxlLWRyb3BwYWJsZSdcbn07XG5cbi8qKlxuICogRHJvcHBhYmxlIGlzIGJ1aWx0IG9uIHRvcCBvZiBEcmFnZ2FibGUgYW5kIGFsbG93cyBkcm9wcGluZyBkcmFnZ2FibGUgZWxlbWVudHNcbiAqIGludG8gZHJvcHpvbmUgZWxlbWVudFxuICogQGNsYXNzIERyb3BwYWJsZVxuICogQG1vZHVsZSBEcm9wcGFibGVcbiAqIEBleHRlbmRzIERyYWdnYWJsZVxuICovXG5jbGFzcyBEcm9wcGFibGUgZXh0ZW5kcyBfRHJhZ2dhYmxlMi5kZWZhdWx0IHtcbiAgLyoqXG4gICAqIERyb3BwYWJsZSBjb25zdHJ1Y3Rvci5cbiAgICogQGNvbnN0cnVjdHMgRHJvcHBhYmxlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnRbXXxOb2RlTGlzdHxIVE1MRWxlbWVudH0gY29udGFpbmVycyAtIERyb3BwYWJsZSBjb250YWluZXJzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyBmb3IgRHJvcHBhYmxlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXJzID0gW10sIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKGNvbnRhaW5lcnMsIF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucywge1xuICAgICAgY2xhc3NlczogX2V4dGVuZHMoe30sIGRlZmF1bHRDbGFzc2VzLCBvcHRpb25zLmNsYXNzZXMgfHwge30pLFxuICAgICAgYW5ub3VuY2VtZW50czogX2V4dGVuZHMoe30sIGRlZmF1bHRBbm5vdW5jZW1lbnRzLCBvcHRpb25zLmFubm91bmNlbWVudHMgfHwge30pXG4gICAgfSkpO1xuXG4gICAgLyoqXG4gICAgICogQWxsIGRyb3B6b25lIGVsZW1lbnRzIG9uIGRyYWcgc3RhcnRcbiAgICAgKiBAcHJvcGVydHkgZHJvcHpvbmVzXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICovXG4gICAgdGhpcy5kcm9wem9uZXMgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogTGFzdCBkcm9wem9uZSBlbGVtZW50IHRoYXQgdGhlIHNvdXJjZSB3YXMgZHJvcHBlZCBpbnRvXG4gICAgICogQHByb3BlcnR5IGxhc3REcm9wem9uZVxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICB0aGlzLmxhc3REcm9wem9uZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsIGRyb3B6b25lIGVsZW1lbnQgdGhhdCB0aGUgc291cmNlIHdhcyBkcmFnIGZyb21cbiAgICAgKiBAcHJvcGVydHkgaW5pdGlhbERyb3B6b25lXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHRoaXMuaW5pdGlhbERyb3B6b25lID0gbnVsbDtcblxuICAgIHRoaXNbb25EcmFnU3RhcnRdID0gdGhpc1tvbkRyYWdTdGFydF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ01vdmVdID0gdGhpc1tvbkRyYWdNb3ZlXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnU3RvcF0gPSB0aGlzW29uRHJhZ1N0b3BdLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uKCdkcmFnOnN0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0pLm9uKCdkcmFnOm1vdmUnLCB0aGlzW29uRHJhZ01vdmVdKS5vbignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgRHJvcHBhYmxlIGluc3RhbmNlLlxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBzdXBlci5kZXN0cm95KCk7XG5cbiAgICB0aGlzLm9mZignZHJhZzpzdGFydCcsIHRoaXNbb25EcmFnU3RhcnRdKS5vZmYoJ2RyYWc6bW92ZScsIHRoaXNbb25EcmFnTW92ZV0pLm9mZignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSk7XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBzdGFydCBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RHJhZ1N0YXJ0RXZlbnR9IGV2ZW50IC0gRHJhZyBzdGFydCBldmVudFxuICAgKi9cbiAgW29uRHJhZ1N0YXJ0XShldmVudCkge1xuICAgIGlmIChldmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kcm9wem9uZXMgPSBbLi4udGhpc1tnZXREcm9wem9uZXNdKCldO1xuICAgIGNvbnN0IGRyb3B6b25lID0gKDAsIF91dGlscy5jbG9zZXN0KShldmVudC5zZW5zb3JFdmVudC50YXJnZXQsIHRoaXMub3B0aW9ucy5kcm9wem9uZSk7XG5cbiAgICBpZiAoIWRyb3B6b25lKSB7XG4gICAgICBldmVudC5jYW5jZWwoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcm9wcGFibGVTdGFydEV2ZW50ID0gbmV3IF9Ecm9wcGFibGVFdmVudC5Ecm9wcGFibGVTdGFydEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBkcm9wem9uZVxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKGRyb3BwYWJsZVN0YXJ0RXZlbnQpO1xuXG4gICAgaWYgKGRyb3BwYWJsZVN0YXJ0RXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgZXZlbnQuY2FuY2VsKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pbml0aWFsRHJvcHpvbmUgPSBkcm9wem9uZTtcblxuICAgIGZvciAoY29uc3QgZHJvcHpvbmVFbGVtZW50IG9mIHRoaXMuZHJvcHpvbmVzKSB7XG4gICAgICBpZiAoZHJvcHpvbmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmdldENsYXNzTmFtZUZvcignZHJvcHBhYmxlOm9jY3VwaWVkJykpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBkcm9wem9uZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmdldENsYXNzTmFtZUZvcignZHJvcHBhYmxlOmFjdGl2ZScpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBtb3ZlIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtEcmFnTW92ZUV2ZW50fSBldmVudCAtIERyYWcgbW92ZSBldmVudFxuICAgKi9cbiAgW29uRHJhZ01vdmVdKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcm9wem9uZSA9IHRoaXNbY2xvc2VzdERyb3B6b25lXShldmVudC5zZW5zb3JFdmVudC50YXJnZXQpO1xuICAgIGNvbnN0IG92ZXJFbXB0eURyb3B6b25lID0gZHJvcHpvbmUgJiYgIWRyb3B6b25lLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmdldENsYXNzTmFtZUZvcignZHJvcHBhYmxlOm9jY3VwaWVkJykpO1xuXG4gICAgaWYgKG92ZXJFbXB0eURyb3B6b25lICYmIHRoaXNbZHJvcEluRHJvcHpvbmVdKGV2ZW50LCBkcm9wem9uZSkpIHtcbiAgICAgIHRoaXMubGFzdERyb3B6b25lID0gZHJvcHpvbmU7XG4gICAgfSBlbHNlIGlmICgoIWRyb3B6b25lIHx8IGRyb3B6b25lID09PSB0aGlzLmluaXRpYWxEcm9wem9uZSkgJiYgdGhpcy5sYXN0RHJvcHpvbmUpIHtcbiAgICAgIHRoaXNbcmV0dXJuVG9PcmlnaW5hbERyb3B6b25lXShldmVudCk7XG4gICAgICB0aGlzLmxhc3REcm9wem9uZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgc3RvcCBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RHJhZ1N0b3BFdmVudH0gZXZlbnQgLSBEcmFnIHN0b3AgZXZlbnRcbiAgICovXG4gIFtvbkRyYWdTdG9wXShldmVudCkge1xuICAgIGNvbnN0IGRyb3BwYWJsZVN0b3BFdmVudCA9IG5ldyBfRHJvcHBhYmxlRXZlbnQuRHJvcHBhYmxlU3RvcEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBkcm9wem9uZTogdGhpcy5sYXN0RHJvcHpvbmUgfHwgdGhpcy5pbml0aWFsRHJvcHpvbmVcbiAgICB9KTtcblxuICAgIHRoaXMudHJpZ2dlcihkcm9wcGFibGVTdG9wRXZlbnQpO1xuXG4gICAgY29uc3Qgb2NjdXBpZWRDbGFzcyA9IHRoaXMuZ2V0Q2xhc3NOYW1lRm9yKCdkcm9wcGFibGU6b2NjdXBpZWQnKTtcblxuICAgIGZvciAoY29uc3QgZHJvcHpvbmUgb2YgdGhpcy5kcm9wem9uZXMpIHtcbiAgICAgIGRyb3B6b25lLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5nZXRDbGFzc05hbWVGb3IoJ2Ryb3BwYWJsZTphY3RpdmUnKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGFzdERyb3B6b25lICYmIHRoaXMubGFzdERyb3B6b25lICE9PSB0aGlzLmluaXRpYWxEcm9wem9uZSkge1xuICAgICAgdGhpcy5pbml0aWFsRHJvcHpvbmUuY2xhc3NMaXN0LnJlbW92ZShvY2N1cGllZENsYXNzKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyb3B6b25lcyA9IG51bGw7XG4gICAgdGhpcy5sYXN0RHJvcHpvbmUgPSBudWxsO1xuICAgIHRoaXMuaW5pdGlhbERyb3B6b25lID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcm9wcyBhIGRyYWdnYWJsZSBlbGVtZW50IGludG8gYSBkcm9wem9uZSBlbGVtZW50XG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RHJhZ01vdmVFdmVudH0gZXZlbnQgLSBEcmFnIG1vdmUgZXZlbnRcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZHJvcHpvbmUgLSBEcm9wem9uZSBlbGVtZW50IHRvIGRyb3AgZHJhZ2dhYmxlIGludG9cbiAgICovXG4gIFtkcm9wSW5Ecm9wem9uZV0oZXZlbnQsIGRyb3B6b25lKSB7XG4gICAgY29uc3QgZHJvcHBhYmxlRHJvcHBlZEV2ZW50ID0gbmV3IF9Ecm9wcGFibGVFdmVudC5Ecm9wcGFibGVEcm9wcGVkRXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudCxcbiAgICAgIGRyb3B6b25lXG4gICAgfSk7XG5cbiAgICB0aGlzLnRyaWdnZXIoZHJvcHBhYmxlRHJvcHBlZEV2ZW50KTtcblxuICAgIGlmIChkcm9wcGFibGVEcm9wcGVkRXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IG9jY3VwaWVkQ2xhc3MgPSB0aGlzLmdldENsYXNzTmFtZUZvcignZHJvcHBhYmxlOm9jY3VwaWVkJyk7XG5cbiAgICBpZiAodGhpcy5sYXN0RHJvcHpvbmUpIHtcbiAgICAgIHRoaXMubGFzdERyb3B6b25lLmNsYXNzTGlzdC5yZW1vdmUob2NjdXBpZWRDbGFzcyk7XG4gICAgfVxuXG4gICAgZHJvcHpvbmUuYXBwZW5kQ2hpbGQoZXZlbnQuc291cmNlKTtcbiAgICBkcm9wem9uZS5jbGFzc0xpc3QuYWRkKG9jY3VwaWVkQ2xhc3MpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIHByZXZpb3VzbHkgZHJvcHBlZCBlbGVtZW50IGJhY2sgaW50byBpdHMgb3JpZ2luYWwgZHJvcHpvbmVcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtEcmFnTW92ZUV2ZW50fSBldmVudCAtIERyYWcgbW92ZSBldmVudFxuICAgKi9cbiAgW3JldHVyblRvT3JpZ2luYWxEcm9wem9uZV0oZXZlbnQpIHtcbiAgICBjb25zdCBkcm9wcGFibGVSZXR1cm5lZEV2ZW50ID0gbmV3IF9Ecm9wcGFibGVFdmVudC5Ecm9wcGFibGVSZXR1cm5lZEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBkcm9wem9uZTogdGhpcy5sYXN0RHJvcHpvbmVcbiAgICB9KTtcblxuICAgIHRoaXMudHJpZ2dlcihkcm9wcGFibGVSZXR1cm5lZEV2ZW50KTtcblxuICAgIGlmIChkcm9wcGFibGVSZXR1cm5lZEV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRpYWxEcm9wem9uZS5hcHBlbmRDaGlsZChldmVudC5zb3VyY2UpO1xuICAgIHRoaXMubGFzdERyb3B6b25lLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5nZXRDbGFzc05hbWVGb3IoJ2Ryb3BwYWJsZTpvY2N1cGllZCcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNsb3Nlc3QgZHJvcHpvbmUgZWxlbWVudCBmb3IgZXZlbiB0YXJnZXRcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0IC0gRXZlbnQgdGFyZ2V0XG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fG51bGx9XG4gICAqL1xuICBbY2xvc2VzdERyb3B6b25lXSh0YXJnZXQpIHtcbiAgICBpZiAoIXRoaXMuZHJvcHpvbmVzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF91dGlscy5jbG9zZXN0KSh0YXJnZXQsIHRoaXMuZHJvcHpvbmVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBjdXJyZW50IGRyb3B6b25lIGVsZW1lbnRzIGZvciB0aGlzIGRyYWdnYWJsZSBpbnN0YW5jZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJuIHtOb2RlTGlzdHxIVE1MRWxlbWVudFtdfEFycmF5fVxuICAgKi9cbiAgW2dldERyb3B6b25lc10oKSB7XG4gICAgY29uc3QgZHJvcHpvbmUgPSB0aGlzLm9wdGlvbnMuZHJvcHpvbmU7XG5cbiAgICBpZiAodHlwZW9mIGRyb3B6b25lID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZHJvcHpvbmUpO1xuICAgIH0gZWxzZSBpZiAoZHJvcHpvbmUgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBkcm9wem9uZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICByZXR1cm4gZHJvcHpvbmU7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHJvcHpvbmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBkcm9wem9uZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBEcm9wcGFibGU7XG5cbi8qKiovIH0pLFxuLyogMzMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRHJvcHBhYmxlU3RvcEV2ZW50ID0gZXhwb3J0cy5Ecm9wcGFibGVSZXR1cm5lZEV2ZW50ID0gZXhwb3J0cy5Ecm9wcGFibGVEcm9wcGVkRXZlbnQgPSBleHBvcnRzLkRyb3BwYWJsZVN0YXJ0RXZlbnQgPSBleHBvcnRzLkRyb3BwYWJsZUV2ZW50ID0gdW5kZWZpbmVkO1xuXG52YXIgX0Fic3RyYWN0RXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX0Fic3RyYWN0RXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWJzdHJhY3RFdmVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQmFzZSBkcm9wcGFibGUgZXZlbnRcbiAqIEBjbGFzcyBEcm9wcGFibGVFdmVudFxuICogQG1vZHVsZSBEcm9wcGFibGVFdmVudFxuICogQGV4dGVuZHMgQWJzdHJhY3RFdmVudFxuICovXG5jbGFzcyBEcm9wcGFibGVFdmVudCBleHRlbmRzIF9BYnN0cmFjdEV2ZW50Mi5kZWZhdWx0IHtcblxuICAvKipcbiAgICogT3JpZ2luYWwgZHJhZyBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGlzIGRyb3BwYWJsZSBldmVudFxuICAgKiBAcHJvcGVydHkgZHJhZ0V2ZW50XG4gICAqIEB0eXBlIHtEcmFnRXZlbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IGRyYWdFdmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmRyYWdFdmVudDtcbiAgfVxufVxuXG5leHBvcnRzLkRyb3BwYWJsZUV2ZW50ID0gRHJvcHBhYmxlRXZlbnQ7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBEcm9wcGFibGUgc3RhcnQgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIERyb3BwYWJsZVN0YXJ0RXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBEcm9wcGFibGVTdGFydEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIERyb3BwYWJsZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5Ecm9wcGFibGVFdmVudC50eXBlID0gJ2Ryb3BwYWJsZSc7XG5jbGFzcyBEcm9wcGFibGVTdGFydEV2ZW50IGV4dGVuZHMgRHJvcHBhYmxlRXZlbnQge1xuXG4gIC8qKlxuICAgKiBUaGUgaW5pdGlhbCBkcm9wem9uZSBlbGVtZW50IG9mIHRoZSBjdXJyZW50bHkgZHJhZ2dpbmcgZHJhZ2dhYmxlIGVsZW1lbnRcbiAgICogQHByb3BlcnR5IGRyb3B6b25lXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgZHJvcHpvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5kcm9wem9uZTtcbiAgfVxufVxuXG5leHBvcnRzLkRyb3BwYWJsZVN0YXJ0RXZlbnQgPSBEcm9wcGFibGVTdGFydEV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIERyb3BwYWJsZSBkcm9wcGVkIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgRHJvcHBhYmxlRHJvcHBlZEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIERyb3BwYWJsZURyb3BwZWRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGV4dGVuZHMgRHJvcHBhYmxlRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5Ecm9wcGFibGVTdGFydEV2ZW50LnR5cGUgPSAnZHJvcHBhYmxlOnN0YXJ0JztcbkRyb3BwYWJsZVN0YXJ0RXZlbnQuY2FuY2VsYWJsZSA9IHRydWU7XG5jbGFzcyBEcm9wcGFibGVEcm9wcGVkRXZlbnQgZXh0ZW5kcyBEcm9wcGFibGVFdmVudCB7XG5cbiAgLyoqXG4gICAqIFRoZSBkcm9wem9uZSBlbGVtZW50IHlvdSBkcm9wcGVkIHRoZSBkcmFnZ2FibGUgZWxlbWVudCBpbnRvXG4gICAqIEBwcm9wZXJ0eSBkcm9wem9uZVxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IGRyb3B6b25lKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuZHJvcHpvbmU7XG4gIH1cbn1cblxuZXhwb3J0cy5Ecm9wcGFibGVEcm9wcGVkRXZlbnQgPSBEcm9wcGFibGVEcm9wcGVkRXZlbnQ7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIERyb3BwYWJsZSByZXR1cm5lZCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzcyBEcm9wcGFibGVSZXR1cm5lZEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBEcm9wcGFibGVSZXR1cm5lZEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGV4dGVuZHMgRHJvcHBhYmxlRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuRHJvcHBhYmxlRHJvcHBlZEV2ZW50LnR5cGUgPSAnZHJvcHBhYmxlOmRyb3BwZWQnO1xuRHJvcHBhYmxlRHJvcHBlZEV2ZW50LmNhbmNlbGFibGUgPSB0cnVlO1xuY2xhc3MgRHJvcHBhYmxlUmV0dXJuZWRFdmVudCBleHRlbmRzIERyb3BwYWJsZUV2ZW50IHtcblxuICAvKipcbiAgICogVGhlIGRyb3B6b25lIGVsZW1lbnQgeW91IGRyYWdnZWQgYXdheSBmcm9tXG4gICAqIEBwcm9wZXJ0eSBkcm9wem9uZVxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IGRyb3B6b25lKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuZHJvcHpvbmU7XG4gIH1cbn1cblxuZXhwb3J0cy5Ecm9wcGFibGVSZXR1cm5lZEV2ZW50ID0gRHJvcHBhYmxlUmV0dXJuZWRFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBEcm9wcGFibGUgc3RvcCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIERyb3BwYWJsZVN0b3BFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBEcm9wcGFibGVTdG9wRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIERyb3BwYWJsZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuRHJvcHBhYmxlUmV0dXJuZWRFdmVudC50eXBlID0gJ2Ryb3BwYWJsZTpyZXR1cm5lZCc7XG5Ecm9wcGFibGVSZXR1cm5lZEV2ZW50LmNhbmNlbGFibGUgPSB0cnVlO1xuY2xhc3MgRHJvcHBhYmxlU3RvcEV2ZW50IGV4dGVuZHMgRHJvcHBhYmxlRXZlbnQge1xuXG4gIC8qKlxuICAgKiBUaGUgZmluYWwgZHJvcHpvbmUgZWxlbWVudCBvZiB0aGUgZHJhZ2dhYmxlIGVsZW1lbnRcbiAgICogQHByb3BlcnR5IGRyb3B6b25lXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgZHJvcHpvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5kcm9wem9uZTtcbiAgfVxufVxuZXhwb3J0cy5Ecm9wcGFibGVTdG9wRXZlbnQgPSBEcm9wcGFibGVTdG9wRXZlbnQ7XG5Ecm9wcGFibGVTdG9wRXZlbnQudHlwZSA9ICdkcm9wcGFibGU6c3RvcCc7XG5Ecm9wcGFibGVTdG9wRXZlbnQuY2FuY2VsYWJsZSA9IHRydWU7XG5cbi8qKiovIH0pLFxuLyogMzQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9Ecm9wcGFibGVFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXG5PYmplY3Qua2V5cyhfRHJvcHBhYmxlRXZlbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9Ecm9wcGFibGVFdmVudFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9Ecm9wcGFibGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMyKTtcblxudmFyIF9Ecm9wcGFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJvcHBhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX0Ryb3BwYWJsZTIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiAzNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXG4gKiBUaGUgRW1pdHRlciBpcyBhIHNpbXBsZSBlbWl0dGVyIGNsYXNzIHRoYXQgcHJvdmlkZXMgeW91IHdpdGggYG9uKClgLCBgb2ZmKClgIGFuZCBgdHJpZ2dlcigpYCBtZXRob2RzXG4gKiBAY2xhc3MgRW1pdHRlclxuICogQG1vZHVsZSBFbWl0dGVyXG4gKi9cbmNsYXNzIEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhbGxiYWNrcyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBjYWxsYmFja3MgYnkgZXZlbnQgbmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICAgKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBjYWxsYmFja3NcbiAgICovXG4gIG9uKHR5cGUsIC4uLmNhbGxiYWNrcykge1xuICAgIGlmICghdGhpcy5jYWxsYmFja3NbdHlwZV0pIHtcbiAgICAgIHRoaXMuY2FsbGJhY2tzW3R5cGVdID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5jYWxsYmFja3NbdHlwZV0ucHVzaCguLi5jYWxsYmFja3MpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogVW5yZWdpc3RlcnMgY2FsbGJhY2tzIGJ5IGV2ZW50IG5hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICovXG4gIG9mZih0eXBlLCBjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5jYWxsYmFja3NbdHlwZV0pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGNvcHkgPSB0aGlzLmNhbGxiYWNrc1t0eXBlXS5zbGljZSgwKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29weS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNhbGxiYWNrID09PSBjb3B5W2ldKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzW3R5cGVdLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyBldmVudCBjYWxsYmFja3MgYnkgZXZlbnQgb2JqZWN0XG4gICAqIEBwYXJhbSB7QWJzdHJhY3RFdmVudH0gZXZlbnRcbiAgICovXG4gIHRyaWdnZXIoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuY2FsbGJhY2tzW2V2ZW50LnR5cGVdKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxsYmFja3MgPSBbLi4udGhpcy5jYWxsYmFja3NbZXZlbnQudHlwZV1dO1xuICAgIGNvbnN0IGNhdWdodEVycm9ycyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IGNhbGxiYWNrcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBjYWxsYmFja3NbaV07XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNhdWdodEVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2F1Z2h0RXJyb3JzLmxlbmd0aCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgY29uc29sZS5lcnJvcihgRHJhZ2dhYmxlIGNhdWdodCBlcnJvcnMgd2hpbGUgdHJpZ2dlcmluZyAnJHtldmVudC50eXBlfSdgLCBjYXVnaHRFcnJvcnMpO1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBFbWl0dGVyO1xuXG4vKioqLyB9KSxcbi8qIDM2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfRW1pdHRlciA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpO1xuXG52YXIgX0VtaXR0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRW1pdHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9FbWl0dGVyMi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcbi8qIDM3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHRPcHRpb25zID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9QbHVnaW5zID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cbnZhciBfRW1pdHRlciA9IF9fd2VicGFja19yZXF1aXJlX18oMzYpO1xuXG52YXIgX0VtaXR0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRW1pdHRlcik7XG5cbnZhciBfU2Vuc29ycyA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cbnZhciBfRHJhZ2dhYmxlRXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblxudmFyIF9EcmFnRXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3Qgb25EcmFnU3RhcnQgPSBTeW1ib2woJ29uRHJhZ1N0YXJ0Jyk7XG5jb25zdCBvbkRyYWdNb3ZlID0gU3ltYm9sKCdvbkRyYWdNb3ZlJyk7XG5jb25zdCBvbkRyYWdTdG9wID0gU3ltYm9sKCdvbkRyYWdTdG9wJyk7XG5jb25zdCBvbkRyYWdQcmVzc3VyZSA9IFN5bWJvbCgnb25EcmFnUHJlc3N1cmUnKTtcblxuLyoqXG4gKiBAY29uc3Qge09iamVjdH0gZGVmYXVsdEFubm91bmNlbWVudHNcbiAqIEBjb25zdCB7RnVuY3Rpb259IGRlZmF1bHRBbm5vdW5jZW1lbnRzWydkcmFnOnN0YXJ0J11cbiAqIEBjb25zdCB7RnVuY3Rpb259IGRlZmF1bHRBbm5vdW5jZW1lbnRzWydkcmFnOnN0b3AnXVxuICovXG5jb25zdCBkZWZhdWx0QW5ub3VuY2VtZW50cyA9IHtcbiAgJ2RyYWc6c3RhcnQnOiBldmVudCA9PiBgUGlja2VkIHVwICR7ZXZlbnQuc291cmNlLnRleHRDb250ZW50LnRyaW0oKSB8fCBldmVudC5zb3VyY2UuaWQgfHwgJ2RyYWdnYWJsZSBlbGVtZW50J31gLFxuICAnZHJhZzpzdG9wJzogZXZlbnQgPT4gYFJlbGVhc2VkICR7ZXZlbnQuc291cmNlLnRleHRDb250ZW50LnRyaW0oKSB8fCBldmVudC5zb3VyY2UuaWQgfHwgJ2RyYWdnYWJsZSBlbGVtZW50J31gXG59O1xuXG5jb25zdCBkZWZhdWx0Q2xhc3NlcyA9IHtcbiAgJ2NvbnRhaW5lcjpkcmFnZ2luZyc6ICdkcmFnZ2FibGUtY29udGFpbmVyLS1pcy1kcmFnZ2luZycsXG4gICdzb3VyY2U6ZHJhZ2dpbmcnOiAnZHJhZ2dhYmxlLXNvdXJjZS0taXMtZHJhZ2dpbmcnLFxuICAnc291cmNlOnBsYWNlZCc6ICdkcmFnZ2FibGUtc291cmNlLS1wbGFjZWQnLFxuICAnY29udGFpbmVyOnBsYWNlZCc6ICdkcmFnZ2FibGUtY29udGFpbmVyLS1wbGFjZWQnLFxuICAnYm9keTpkcmFnZ2luZyc6ICdkcmFnZ2FibGUtLWlzLWRyYWdnaW5nJyxcbiAgJ2RyYWdnYWJsZTpvdmVyJzogJ2RyYWdnYWJsZS0tb3ZlcicsXG4gICdjb250YWluZXI6b3Zlcic6ICdkcmFnZ2FibGUtY29udGFpbmVyLS1vdmVyJyxcbiAgJ3NvdXJjZTpvcmlnaW5hbCc6ICdkcmFnZ2FibGUtLW9yaWdpbmFsJyxcbiAgbWlycm9yOiAnZHJhZ2dhYmxlLW1pcnJvcidcbn07XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0gZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IHtcbiAgZHJhZ2dhYmxlOiAnLmRyYWdnYWJsZS1zb3VyY2UnLFxuICBoYW5kbGU6IG51bGwsXG4gIGRlbGF5OiAxMDAsXG4gIHBsYWNlZFRpbWVvdXQ6IDgwMCxcbiAgcGx1Z2luczogW10sXG4gIHNlbnNvcnM6IFtdXG59O1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvcmUgZHJhZ2dhYmxlIGxpYnJhcnkgdGhhdCBkb2VzIHRoZSBoZWF2eSBsaWZ0aW5nXG4gKiBAY2xhc3MgRHJhZ2dhYmxlXG4gKiBAbW9kdWxlIERyYWdnYWJsZVxuICovXG5jbGFzcyBEcmFnZ2FibGUge1xuXG4gIC8qKlxuICAgKiBEcmFnZ2FibGUgY29uc3RydWN0b3IuXG4gICAqIEBjb25zdHJ1Y3RzIERyYWdnYWJsZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50W118Tm9kZUxpc3R8SFRNTEVsZW1lbnR9IGNvbnRhaW5lcnMgLSBEcmFnZ2FibGUgY29udGFpbmVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgZm9yIGRyYWdnYWJsZVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29udGFpbmVycyA9IFtkb2N1bWVudC5ib2R5XSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogRHJhZ2dhYmxlIGNvbnRhaW5lcnNcbiAgICAgKiBAcHJvcGVydHkgY29udGFpbmVyc1xuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGlmIChjb250YWluZXJzIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgY29udGFpbmVycyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICB0aGlzLmNvbnRhaW5lcnMgPSBbLi4uY29udGFpbmVyc107XG4gICAgfSBlbHNlIGlmIChjb250YWluZXJzIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVycyA9IFtjb250YWluZXJzXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEcmFnZ2FibGUgY29udGFpbmVycyBhcmUgZXhwZWN0ZWQgdG8gYmUgb2YgdHlwZSBgTm9kZUxpc3RgLCBgSFRNTEVsZW1lbnRbXWAgb3IgYEhUTUxFbGVtZW50YCcpO1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucywge1xuICAgICAgY2xhc3NlczogX2V4dGVuZHMoe30sIGRlZmF1bHRDbGFzc2VzLCBvcHRpb25zLmNsYXNzZXMgfHwge30pLFxuICAgICAgYW5ub3VuY2VtZW50czogX2V4dGVuZHMoe30sIGRlZmF1bHRBbm5vdW5jZW1lbnRzLCBvcHRpb25zLmFubm91bmNlbWVudHMgfHwge30pXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBEcmFnZ2FibGVzIGV2ZW50IGVtaXR0ZXJcbiAgICAgKiBAcHJvcGVydHkgZW1pdHRlclxuICAgICAqIEB0eXBlIHtFbWl0dGVyfVxuICAgICAqL1xuICAgIHRoaXMuZW1pdHRlciA9IG5ldyBfRW1pdHRlcjIuZGVmYXVsdCgpO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBkcmFnIHN0YXRlXG4gICAgICogQHByb3BlcnR5IGRyYWdnaW5nXG4gICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQWN0aXZlIHBsdWdpbnNcbiAgICAgKiBAcHJvcGVydHkgcGx1Z2luc1xuICAgICAqIEB0eXBlIHtQbHVnaW5bXX1cbiAgICAgKi9cbiAgICB0aGlzLnBsdWdpbnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEFjdGl2ZSBzZW5zb3JzXG4gICAgICogQHByb3BlcnR5IHNlbnNvcnNcbiAgICAgKiBAdHlwZSB7U2Vuc29yW119XG4gICAgICovXG4gICAgdGhpcy5zZW5zb3JzID0gW107XG5cbiAgICB0aGlzW29uRHJhZ1N0YXJ0XSA9IHRoaXNbb25EcmFnU3RhcnRdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdNb3ZlXSA9IHRoaXNbb25EcmFnTW92ZV0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ1N0b3BdID0gdGhpc1tvbkRyYWdTdG9wXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnUHJlc3N1cmVdID0gdGhpc1tvbkRyYWdQcmVzc3VyZV0uYmluZCh0aGlzKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWc6c3RhcnQnLCB0aGlzW29uRHJhZ1N0YXJ0XSwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZzptb3ZlJywgdGhpc1tvbkRyYWdNb3ZlXSwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZzpwcmVzc3VyZScsIHRoaXNbb25EcmFnUHJlc3N1cmVdLCB0cnVlKTtcblxuICAgIGNvbnN0IGRlZmF1bHRQbHVnaW5zID0gT2JqZWN0LnZhbHVlcyhEcmFnZ2FibGUuUGx1Z2lucykubWFwKFBsdWdpbiA9PiBQbHVnaW4pO1xuICAgIGNvbnN0IGRlZmF1bHRTZW5zb3JzID0gW19TZW5zb3JzLk1vdXNlU2Vuc29yLCBfU2Vuc29ycy5Ub3VjaFNlbnNvcl07XG5cbiAgICB0aGlzLmFkZFBsdWdpbiguLi5bLi4uZGVmYXVsdFBsdWdpbnMsIC4uLnRoaXMub3B0aW9ucy5wbHVnaW5zXSk7XG4gICAgdGhpcy5hZGRTZW5zb3IoLi4uWy4uLmRlZmF1bHRTZW5zb3JzLCAuLi50aGlzLm9wdGlvbnMuc2Vuc29yc10pO1xuXG4gICAgY29uc3QgZHJhZ2dhYmxlSW5pdGlhbGl6ZWRFdmVudCA9IG5ldyBfRHJhZ2dhYmxlRXZlbnQuRHJhZ2dhYmxlSW5pdGlhbGl6ZWRFdmVudCh7XG4gICAgICBkcmFnZ2FibGU6IHRoaXNcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ21pcnJvcjpjcmVhdGVkJywgKHsgbWlycm9yIH0pID0+IHRoaXMubWlycm9yID0gbWlycm9yKTtcbiAgICB0aGlzLm9uKCdtaXJyb3I6ZGVzdHJveScsICgpID0+IHRoaXMubWlycm9yID0gbnVsbCk7XG5cbiAgICB0aGlzLnRyaWdnZXIoZHJhZ2dhYmxlSW5pdGlhbGl6ZWRFdmVudCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgRHJhZ2dhYmxlIGluc3RhbmNlLiBUaGlzIHJlbW92ZXMgYWxsIGludGVybmFsIGV2ZW50IGxpc3RlbmVycyBhbmRcbiAgICogZGVhY3RpdmF0ZXMgc2Vuc29ycyBhbmQgcGx1Z2luc1xuICAgKi9cblxuICAvKipcbiAgICogRGVmYXVsdCBwbHVnaW5zIGRyYWdnYWJsZSB1c2VzXG4gICAqIEBzdGF0aWNcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IFBsdWdpbnNcbiAgICogQHByb3BlcnR5IHtBbm5vdW5jZW1lbnR9IFBsdWdpbnMuQW5ub3VuY2VtZW50XG4gICAqIEBwcm9wZXJ0eSB7Rm9jdXNhYmxlfSBQbHVnaW5zLkZvY3VzYWJsZVxuICAgKiBAcHJvcGVydHkge01pcnJvcn0gUGx1Z2lucy5NaXJyb3JcbiAgICogQHByb3BlcnR5IHtTY3JvbGxhYmxlfSBQbHVnaW5zLlNjcm9sbGFibGVcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZzpzdGFydCcsIHRoaXNbb25EcmFnU3RhcnRdLCB0cnVlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnOm1vdmUnLCB0aGlzW29uRHJhZ01vdmVdLCB0cnVlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnOnN0b3AnLCB0aGlzW29uRHJhZ1N0b3BdLCB0cnVlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnOnByZXNzdXJlJywgdGhpc1tvbkRyYWdQcmVzc3VyZV0sIHRydWUpO1xuXG4gICAgY29uc3QgZHJhZ2dhYmxlRGVzdHJveUV2ZW50ID0gbmV3IF9EcmFnZ2FibGVFdmVudC5EcmFnZ2FibGVEZXN0cm95RXZlbnQoe1xuICAgICAgZHJhZ2dhYmxlOiB0aGlzXG4gICAgfSk7XG5cbiAgICB0aGlzLnRyaWdnZXIoZHJhZ2dhYmxlRGVzdHJveUV2ZW50KTtcblxuICAgIHRoaXMucmVtb3ZlUGx1Z2luKC4uLnRoaXMucGx1Z2lucy5tYXAocGx1Z2luID0+IHBsdWdpbi5jb25zdHJ1Y3RvcikpO1xuICAgIHRoaXMucmVtb3ZlU2Vuc29yKC4uLnRoaXMuc2Vuc29ycy5tYXAoc2Vuc29yID0+IHNlbnNvci5jb25zdHJ1Y3RvcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgcGx1Z2luIHRvIHRoaXMgZHJhZ2dhYmxlIGluc3RhbmNlLiBUaGlzIHdpbGwgZW5kIHVwIGNhbGxpbmcgdGhlIGF0dGFjaCBtZXRob2Qgb2YgdGhlIHBsdWdpblxuICAgKiBAcGFyYW0gey4uLnR5cGVvZiBQbHVnaW59IHBsdWdpbnMgLSBQbHVnaW5zIHRoYXQgeW91IHdhbnQgYXR0YWNoZWQgdG8gZHJhZ2dhYmxlXG4gICAqIEByZXR1cm4ge0RyYWdnYWJsZX1cbiAgICogQGV4YW1wbGUgZHJhZ2dhYmxlLmFkZFBsdWdpbihDdXN0b21BMTF5UGx1Z2luLCBDdXN0b21NaXJyb3JQbHVnaW4pXG4gICAqL1xuICBhZGRQbHVnaW4oLi4ucGx1Z2lucykge1xuICAgIGNvbnN0IGFjdGl2ZVBsdWdpbnMgPSBwbHVnaW5zLm1hcChQbHVnaW4gPT4gbmV3IFBsdWdpbih0aGlzKSk7XG5cbiAgICBhY3RpdmVQbHVnaW5zLmZvckVhY2gocGx1Z2luID0+IHBsdWdpbi5hdHRhY2goKSk7XG4gICAgdGhpcy5wbHVnaW5zID0gWy4uLnRoaXMucGx1Z2lucywgLi4uYWN0aXZlUGx1Z2luc107XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHBsdWdpbnMgdGhhdCBhcmUgYWxyZWFkeSBhdHRhY2hlZCB0byB0aGlzIGRyYWdnYWJsZSBpbnN0YW5jZS4gVGhpcyB3aWxsIGVuZCB1cCBjYWxsaW5nXG4gICAqIHRoZSBkZXRhY2ggbWV0aG9kIG9mIHRoZSBwbHVnaW5cbiAgICogQHBhcmFtIHsuLi50eXBlb2YgUGx1Z2lufSBwbHVnaW5zIC0gUGx1Z2lucyB0aGF0IHlvdSB3YW50IGRldGFjaGVkIGZyb20gZHJhZ2dhYmxlXG4gICAqIEByZXR1cm4ge0RyYWdnYWJsZX1cbiAgICogQGV4YW1wbGUgZHJhZ2dhYmxlLnJlbW92ZVBsdWdpbihNaXJyb3JQbHVnaW4sIEN1c3RvbU1pcnJvclBsdWdpbilcbiAgICovXG4gIHJlbW92ZVBsdWdpbiguLi5wbHVnaW5zKSB7XG4gICAgY29uc3QgcmVtb3ZlZFBsdWdpbnMgPSB0aGlzLnBsdWdpbnMuZmlsdGVyKHBsdWdpbiA9PiBwbHVnaW5zLmluY2x1ZGVzKHBsdWdpbi5jb25zdHJ1Y3RvcikpO1xuXG4gICAgcmVtb3ZlZFBsdWdpbnMuZm9yRWFjaChwbHVnaW4gPT4gcGx1Z2luLmRldGFjaCgpKTtcbiAgICB0aGlzLnBsdWdpbnMgPSB0aGlzLnBsdWdpbnMuZmlsdGVyKHBsdWdpbiA9PiAhcGx1Z2lucy5pbmNsdWRlcyhwbHVnaW4uY29uc3RydWN0b3IpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgc2Vuc29ycyB0byB0aGlzIGRyYWdnYWJsZSBpbnN0YW5jZS4gVGhpcyB3aWxsIGVuZCB1cCBjYWxsaW5nIHRoZSBhdHRhY2ggbWV0aG9kIG9mIHRoZSBzZW5zb3JcbiAgICogQHBhcmFtIHsuLi50eXBlb2YgU2Vuc29yfSBzZW5zb3JzIC0gU2Vuc29ycyB0aGF0IHlvdSB3YW50IGF0dGFjaGVkIHRvIGRyYWdnYWJsZVxuICAgKiBAcmV0dXJuIHtEcmFnZ2FibGV9XG4gICAqIEBleGFtcGxlIGRyYWdnYWJsZS5hZGRTZW5zb3IoRm9yY2VUb3VjaFNlbnNvciwgQ3VzdG9tU2Vuc29yKVxuICAgKi9cbiAgYWRkU2Vuc29yKC4uLnNlbnNvcnMpIHtcbiAgICBjb25zdCBhY3RpdmVTZW5zb3JzID0gc2Vuc29ycy5tYXAoU2Vuc29yID0+IG5ldyBTZW5zb3IodGhpcy5jb250YWluZXJzLCB0aGlzLm9wdGlvbnMpKTtcblxuICAgIGFjdGl2ZVNlbnNvcnMuZm9yRWFjaChzZW5zb3IgPT4gc2Vuc29yLmF0dGFjaCgpKTtcbiAgICB0aGlzLnNlbnNvcnMgPSBbLi4udGhpcy5zZW5zb3JzLCAuLi5hY3RpdmVTZW5zb3JzXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgc2Vuc29ycyB0aGF0IGFyZSBhbHJlYWR5IGF0dGFjaGVkIHRvIHRoaXMgZHJhZ2dhYmxlIGluc3RhbmNlLiBUaGlzIHdpbGwgZW5kIHVwIGNhbGxpbmdcbiAgICogdGhlIGRldGFjaCBtZXRob2Qgb2YgdGhlIHNlbnNvclxuICAgKiBAcGFyYW0gey4uLnR5cGVvZiBTZW5zb3J9IHNlbnNvcnMgLSBTZW5zb3JzIHRoYXQgeW91IHdhbnQgYXR0YWNoZWQgdG8gZHJhZ2dhYmxlXG4gICAqIEByZXR1cm4ge0RyYWdnYWJsZX1cbiAgICogQGV4YW1wbGUgZHJhZ2dhYmxlLnJlbW92ZVNlbnNvcihUb3VjaFNlbnNvciwgRHJhZ1NlbnNvcilcbiAgICovXG4gIHJlbW92ZVNlbnNvciguLi5zZW5zb3JzKSB7XG4gICAgY29uc3QgcmVtb3ZlZFNlbnNvcnMgPSB0aGlzLnNlbnNvcnMuZmlsdGVyKHNlbnNvciA9PiBzZW5zb3JzLmluY2x1ZGVzKHNlbnNvci5jb25zdHJ1Y3RvcikpO1xuXG4gICAgcmVtb3ZlZFNlbnNvcnMuZm9yRWFjaChzZW5zb3IgPT4gc2Vuc29yLmRldGFjaCgpKTtcbiAgICB0aGlzLnNlbnNvcnMgPSB0aGlzLnNlbnNvcnMuZmlsdGVyKHNlbnNvciA9PiAhc2Vuc29ycy5pbmNsdWRlcyhzZW5zb3IuY29uc3RydWN0b3IpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY29udGFpbmVyIHRvIHRoaXMgZHJhZ2dhYmxlIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7Li4uSFRNTEVsZW1lbnR9IGNvbnRhaW5lcnMgLSBDb250YWluZXJzIHlvdSB3YW50IHRvIGFkZCB0byBkcmFnZ2FibGVcbiAgICogQHJldHVybiB7RHJhZ2dhYmxlfVxuICAgKiBAZXhhbXBsZSBkcmFnZ2FibGUuYWRkQ29udGFpbmVyKGRvY3VtZW50LmJvZHkpXG4gICAqL1xuICBhZGRDb250YWluZXIoLi4uY29udGFpbmVycykge1xuICAgIHRoaXMuY29udGFpbmVycyA9IFsuLi50aGlzLmNvbnRhaW5lcnMsIC4uLmNvbnRhaW5lcnNdO1xuICAgIHRoaXMuc2Vuc29ycy5mb3JFYWNoKHNlbnNvciA9PiBzZW5zb3IuYWRkQ29udGFpbmVyKC4uLmNvbnRhaW5lcnMpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGNvbnRhaW5lciBmcm9tIHRoaXMgZHJhZ2dhYmxlIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7Li4uSFRNTEVsZW1lbnR9IGNvbnRhaW5lcnMgLSBDb250YWluZXJzIHlvdSB3YW50IHRvIHJlbW92ZSBmcm9tIGRyYWdnYWJsZVxuICAgKiBAcmV0dXJuIHtEcmFnZ2FibGV9XG4gICAqIEBleGFtcGxlIGRyYWdnYWJsZS5yZW1vdmVDb250YWluZXIoZG9jdW1lbnQuYm9keSlcbiAgICovXG4gIHJlbW92ZUNvbnRhaW5lciguLi5jb250YWluZXJzKSB7XG4gICAgdGhpcy5jb250YWluZXJzID0gdGhpcy5jb250YWluZXJzLmZpbHRlcihjb250YWluZXIgPT4gIWNvbnRhaW5lcnMuaW5jbHVkZXMoY29udGFpbmVyKSk7XG4gICAgdGhpcy5zZW5zb3JzLmZvckVhY2goc2Vuc29yID0+IHNlbnNvci5yZW1vdmVDb250YWluZXIoLi4uY29udGFpbmVycykpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgbGlzdGVuZXIgZm9yIGRyYWdnYWJsZSBldmVudHNcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgLSBFdmVudCBuYW1lXG4gICAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGNhbGxiYWNrcyAtIEV2ZW50IGNhbGxiYWNrc1xuICAgKiBAcmV0dXJuIHtEcmFnZ2FibGV9XG4gICAqIEBleGFtcGxlIGRyYWdnYWJsZS5vbignZHJhZzpzdGFydCcsIChkcmFnRXZlbnQpID0+IGRyYWdFdmVudC5jYW5jZWwoKSk7XG4gICAqL1xuICBvbih0eXBlLCAuLi5jYWxsYmFja3MpIHtcbiAgICB0aGlzLmVtaXR0ZXIub24odHlwZSwgLi4uY2FsbGJhY2tzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGxpc3RlbmVyIGZyb20gZHJhZ2dhYmxlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIC0gRXZlbnQgbmFtZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIEV2ZW50IGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge0RyYWdnYWJsZX1cbiAgICogQGV4YW1wbGUgZHJhZ2dhYmxlLm9mZignZHJhZzpzdGFydCcsIGhhbmRsZXJGdW5jdGlvbik7XG4gICAqL1xuICBvZmYodHlwZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmVtaXR0ZXIub2ZmKHR5cGUsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyBkcmFnZ2FibGUgZXZlbnRcbiAgICogQHBhcmFtIHtBYnN0cmFjdEV2ZW50fSBldmVudCAtIEV2ZW50IGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0RyYWdnYWJsZX1cbiAgICogQGV4YW1wbGUgZHJhZ2dhYmxlLnRyaWdnZXIoZXZlbnQpO1xuICAgKi9cbiAgdHJpZ2dlcihldmVudCkge1xuICAgIHRoaXMuZW1pdHRlci50cmlnZ2VyKGV2ZW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNsYXNzIG5hbWUgZm9yIGNsYXNzIGlkZW50aWZpZXJcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBOYW1lIG9mIGNsYXNzIGlkZW50aWZpZXJcbiAgICogQHJldHVybiB7U3RyaW5nfG51bGx9XG4gICAqL1xuICBnZXRDbGFzc05hbWVGb3IobmFtZSkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2xhc3Nlc1tuYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBkcmFnZ2FibGUgaW5zdGFuY2UgaXMgY3VycmVudGx5IGRyYWdnaW5nXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBpc0RyYWdnaW5nKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuZHJhZ2dpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIGRyYWdnYWJsZSBlbGVtZW50c1xuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudFtdfVxuICAgKi9cbiAgZ2V0RHJhZ2dhYmxlRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVycy5yZWR1Y2UoKGN1cnJlbnQsIGNvbnRhaW5lcikgPT4ge1xuICAgICAgcmV0dXJuIFsuLi5jdXJyZW50LCAuLi50aGlzLmdldERyYWdnYWJsZUVsZW1lbnRzRm9yQ29udGFpbmVyKGNvbnRhaW5lcildO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGRyYWdnYWJsZSBlbGVtZW50cyBmb3IgYSBnaXZlbiBjb250YWluZXIsIGV4Y2x1ZGluZyB0aGUgbWlycm9yIGFuZFxuICAgKiBvcmlnaW5hbCBzb3VyY2UgZWxlbWVudCBpZiBwcmVzZW50XG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudFtdfVxuICAgKi9cbiAgZ2V0RHJhZ2dhYmxlRWxlbWVudHNGb3JDb250YWluZXIoY29udGFpbmVyKSB7XG4gICAgY29uc3QgYWxsRHJhZ2dhYmxlRWxlbWVudHMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCh0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlKTtcblxuICAgIHJldHVybiBbLi4uYWxsRHJhZ2dhYmxlRWxlbWVudHNdLmZpbHRlcihjaGlsZEVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIGNoaWxkRWxlbWVudCAhPT0gdGhpcy5vcmlnaW5hbFNvdXJjZSAmJiBjaGlsZEVsZW1lbnQgIT09IHRoaXMubWlycm9yO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgc3RhcnQgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIERPTSBEcmFnIGV2ZW50XG4gICAqL1xuICBbb25EcmFnU3RhcnRdKGV2ZW50KSB7XG4gICAgY29uc3Qgc2Vuc29yRXZlbnQgPSBnZXRTZW5zb3JFdmVudChldmVudCk7XG4gICAgY29uc3QgeyB0YXJnZXQsIGNvbnRhaW5lciB9ID0gc2Vuc29yRXZlbnQ7XG5cbiAgICBpZiAoIXRoaXMuY29udGFpbmVycy5pbmNsdWRlcyhjb250YWluZXIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5oYW5kbGUgJiYgdGFyZ2V0ICYmICEoMCwgX3V0aWxzLmNsb3Nlc3QpKHRhcmdldCwgdGhpcy5vcHRpb25zLmhhbmRsZSkpIHtcbiAgICAgIHNlbnNvckV2ZW50LmNhbmNlbCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEZpbmQgZHJhZ2dhYmxlIHNvdXJjZSBlbGVtZW50XG4gICAgdGhpcy5vcmlnaW5hbFNvdXJjZSA9ICgwLCBfdXRpbHMuY2xvc2VzdCkodGFyZ2V0LCB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlKTtcbiAgICB0aGlzLnNvdXJjZUNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgIGlmICghdGhpcy5vcmlnaW5hbFNvdXJjZSkge1xuICAgICAgc2Vuc29yRXZlbnQuY2FuY2VsKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGFzdFBsYWNlZFNvdXJjZSAmJiB0aGlzLmxhc3RQbGFjZWRDb250YWluZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBsYWNlZFRpbWVvdXRJRCk7XG4gICAgICB0aGlzLmxhc3RQbGFjZWRTb3VyY2UuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmdldENsYXNzTmFtZUZvcignc291cmNlOnBsYWNlZCcpKTtcbiAgICAgIHRoaXMubGFzdFBsYWNlZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZ2V0Q2xhc3NOYW1lRm9yKCdjb250YWluZXI6cGxhY2VkJykpO1xuICAgIH1cblxuICAgIHRoaXMuc291cmNlID0gdGhpcy5vcmlnaW5hbFNvdXJjZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgdGhpcy5vcmlnaW5hbFNvdXJjZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLnNvdXJjZSwgdGhpcy5vcmlnaW5hbFNvdXJjZSk7XG4gICAgdGhpcy5vcmlnaW5hbFNvdXJjZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgY29uc3QgZHJhZ0V2ZW50ID0gbmV3IF9EcmFnRXZlbnQuRHJhZ1N0YXJ0RXZlbnQoe1xuICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgIG9yaWdpbmFsU291cmNlOiB0aGlzLm9yaWdpbmFsU291cmNlLFxuICAgICAgc291cmNlQ29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICBzZW5zb3JFdmVudFxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKGRyYWdFdmVudCk7XG5cbiAgICB0aGlzLmRyYWdnaW5nID0gIWRyYWdFdmVudC5jYW5jZWxlZCgpO1xuXG4gICAgaWYgKGRyYWdFdmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICB0aGlzLnNvdXJjZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc291cmNlKTtcbiAgICAgIHRoaXMub3JpZ2luYWxTb3VyY2Uuc3R5bGUuZGlzcGxheSA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vcmlnaW5hbFNvdXJjZS5jbGFzc0xpc3QuYWRkKHRoaXMuZ2V0Q2xhc3NOYW1lRm9yKCdzb3VyY2U6b3JpZ2luYWwnKSk7XG4gICAgdGhpcy5zb3VyY2UuY2xhc3NMaXN0LmFkZCh0aGlzLmdldENsYXNzTmFtZUZvcignc291cmNlOmRyYWdnaW5nJykpO1xuICAgIHRoaXMuc291cmNlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5nZXRDbGFzc05hbWVGb3IoJ2NvbnRhaW5lcjpkcmFnZ2luZycpKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodGhpcy5nZXRDbGFzc05hbWVGb3IoJ2JvZHk6ZHJhZ2dpbmcnKSk7XG4gICAgYXBwbHlVc2VyU2VsZWN0KGRvY3VtZW50LmJvZHksICdub25lJyk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgY29uc3Qgb2xkU2Vuc29yRXZlbnQgPSBnZXRTZW5zb3JFdmVudChldmVudCk7XG4gICAgICBjb25zdCBuZXdTZW5zb3JFdmVudCA9IG9sZFNlbnNvckV2ZW50LmNsb25lKHsgdGFyZ2V0OiB0aGlzLnNvdXJjZSB9KTtcblxuICAgICAgdGhpc1tvbkRyYWdNb3ZlXShfZXh0ZW5kcyh7fSwgZXZlbnQsIHtcbiAgICAgICAgZGV0YWlsOiBuZXdTZW5zb3JFdmVudFxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgbW92ZSBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gRE9NIERyYWcgZXZlbnRcbiAgICovXG4gIFtvbkRyYWdNb3ZlXShldmVudCkge1xuICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbnNvckV2ZW50ID0gZ2V0U2Vuc29yRXZlbnQoZXZlbnQpO1xuICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSBzZW5zb3JFdmVudDtcbiAgICBsZXQgdGFyZ2V0ID0gc2Vuc29yRXZlbnQudGFyZ2V0O1xuXG4gICAgY29uc3QgZHJhZ01vdmVFdmVudCA9IG5ldyBfRHJhZ0V2ZW50LkRyYWdNb3ZlRXZlbnQoe1xuICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgIG9yaWdpbmFsU291cmNlOiB0aGlzLm9yaWdpbmFsU291cmNlLFxuICAgICAgc291cmNlQ29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICBzZW5zb3JFdmVudFxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKGRyYWdNb3ZlRXZlbnQpO1xuXG4gICAgaWYgKGRyYWdNb3ZlRXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgc2Vuc29yRXZlbnQuY2FuY2VsKCk7XG4gICAgfVxuXG4gICAgdGFyZ2V0ID0gKDAsIF91dGlscy5jbG9zZXN0KSh0YXJnZXQsIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUpO1xuICAgIGNvbnN0IHdpdGhpbkNvcnJlY3RDb250YWluZXIgPSAoMCwgX3V0aWxzLmNsb3Nlc3QpKHNlbnNvckV2ZW50LnRhcmdldCwgdGhpcy5jb250YWluZXJzKTtcbiAgICBjb25zdCBvdmVyQ29udGFpbmVyID0gc2Vuc29yRXZlbnQub3ZlckNvbnRhaW5lciB8fCB3aXRoaW5Db3JyZWN0Q29udGFpbmVyO1xuICAgIGNvbnN0IGlzTGVhdmluZ0NvbnRhaW5lciA9IHRoaXMuY3VycmVudE92ZXJDb250YWluZXIgJiYgb3ZlckNvbnRhaW5lciAhPT0gdGhpcy5jdXJyZW50T3ZlckNvbnRhaW5lcjtcbiAgICBjb25zdCBpc0xlYXZpbmdEcmFnZ2FibGUgPSB0aGlzLmN1cnJlbnRPdmVyICYmIHRhcmdldCAhPT0gdGhpcy5jdXJyZW50T3ZlcjtcbiAgICBjb25zdCBpc092ZXJDb250YWluZXIgPSBvdmVyQ29udGFpbmVyICYmIHRoaXMuY3VycmVudE92ZXJDb250YWluZXIgIT09IG92ZXJDb250YWluZXI7XG4gICAgY29uc3QgaXNPdmVyRHJhZ2dhYmxlID0gd2l0aGluQ29ycmVjdENvbnRhaW5lciAmJiB0YXJnZXQgJiYgdGhpcy5jdXJyZW50T3ZlciAhPT0gdGFyZ2V0O1xuXG4gICAgaWYgKGlzTGVhdmluZ0RyYWdnYWJsZSkge1xuICAgICAgY29uc3QgZHJhZ091dEV2ZW50ID0gbmV3IF9EcmFnRXZlbnQuRHJhZ091dEV2ZW50KHtcbiAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgICAgb3JpZ2luYWxTb3VyY2U6IHRoaXMub3JpZ2luYWxTb3VyY2UsXG4gICAgICAgIHNvdXJjZUNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgICBzZW5zb3JFdmVudCxcbiAgICAgICAgb3ZlcjogdGhpcy5jdXJyZW50T3ZlclxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY3VycmVudE92ZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmdldENsYXNzTmFtZUZvcignZHJhZ2dhYmxlOm92ZXInKSk7XG4gICAgICB0aGlzLmN1cnJlbnRPdmVyID0gbnVsbDtcblxuICAgICAgdGhpcy50cmlnZ2VyKGRyYWdPdXRFdmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTGVhdmluZ0NvbnRhaW5lcikge1xuICAgICAgY29uc3QgZHJhZ091dENvbnRhaW5lckV2ZW50ID0gbmV3IF9EcmFnRXZlbnQuRHJhZ091dENvbnRhaW5lckV2ZW50KHtcbiAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgICAgb3JpZ2luYWxTb3VyY2U6IHRoaXMub3JpZ2luYWxTb3VyY2UsXG4gICAgICAgIHNvdXJjZUNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgICBzZW5zb3JFdmVudCxcbiAgICAgICAgb3ZlckNvbnRhaW5lcjogdGhpcy5jdXJyZW50T3ZlckNvbnRhaW5lclxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY3VycmVudE92ZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmdldENsYXNzTmFtZUZvcignY29udGFpbmVyOm92ZXInKSk7XG4gICAgICB0aGlzLmN1cnJlbnRPdmVyQ29udGFpbmVyID0gbnVsbDtcblxuICAgICAgdGhpcy50cmlnZ2VyKGRyYWdPdXRDb250YWluZXJFdmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzT3ZlckNvbnRhaW5lcikge1xuICAgICAgb3ZlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuZ2V0Q2xhc3NOYW1lRm9yKCdjb250YWluZXI6b3ZlcicpKTtcblxuICAgICAgY29uc3QgZHJhZ092ZXJDb250YWluZXJFdmVudCA9IG5ldyBfRHJhZ0V2ZW50LkRyYWdPdmVyQ29udGFpbmVyRXZlbnQoe1xuICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgICBvcmlnaW5hbFNvdXJjZTogdGhpcy5vcmlnaW5hbFNvdXJjZSxcbiAgICAgICAgc291cmNlQ29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgIHNlbnNvckV2ZW50LFxuICAgICAgICBvdmVyQ29udGFpbmVyXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jdXJyZW50T3ZlckNvbnRhaW5lciA9IG92ZXJDb250YWluZXI7XG5cbiAgICAgIHRoaXMudHJpZ2dlcihkcmFnT3ZlckNvbnRhaW5lckV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNPdmVyRHJhZ2dhYmxlKSB7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCh0aGlzLmdldENsYXNzTmFtZUZvcignZHJhZ2dhYmxlOm92ZXInKSk7XG5cbiAgICAgIGNvbnN0IGRyYWdPdmVyRXZlbnQgPSBuZXcgX0RyYWdFdmVudC5EcmFnT3ZlckV2ZW50KHtcbiAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgICAgb3JpZ2luYWxTb3VyY2U6IHRoaXMub3JpZ2luYWxTb3VyY2UsXG4gICAgICAgIHNvdXJjZUNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgICBzZW5zb3JFdmVudCxcbiAgICAgICAgb3ZlckNvbnRhaW5lcixcbiAgICAgICAgb3ZlcjogdGFyZ2V0XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jdXJyZW50T3ZlciA9IHRhcmdldDtcblxuICAgICAgdGhpcy50cmlnZ2VyKGRyYWdPdmVyRXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIHN0b3AgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIERPTSBEcmFnIGV2ZW50XG4gICAqL1xuICBbb25EcmFnU3RvcF0oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cbiAgICBjb25zdCBkcmFnU3RvcEV2ZW50ID0gbmV3IF9EcmFnRXZlbnQuRHJhZ1N0b3BFdmVudCh7XG4gICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgb3JpZ2luYWxTb3VyY2U6IHRoaXMub3JpZ2luYWxTb3VyY2UsXG4gICAgICBzZW5zb3JFdmVudDogZXZlbnQuc2Vuc29yRXZlbnQsXG4gICAgICBzb3VyY2VDb250YWluZXI6IHRoaXMuc291cmNlQ29udGFpbmVyXG4gICAgfSk7XG5cbiAgICB0aGlzLnRyaWdnZXIoZHJhZ1N0b3BFdmVudCk7XG5cbiAgICB0aGlzLnNvdXJjZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLm9yaWdpbmFsU291cmNlLCB0aGlzLnNvdXJjZSk7XG4gICAgdGhpcy5zb3VyY2UucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnNvdXJjZSk7XG4gICAgdGhpcy5vcmlnaW5hbFNvdXJjZS5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cbiAgICB0aGlzLnNvdXJjZS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZ2V0Q2xhc3NOYW1lRm9yKCdzb3VyY2U6ZHJhZ2dpbmcnKSk7XG4gICAgdGhpcy5vcmlnaW5hbFNvdXJjZS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZ2V0Q2xhc3NOYW1lRm9yKCdzb3VyY2U6b3JpZ2luYWwnKSk7XG4gICAgdGhpcy5vcmlnaW5hbFNvdXJjZS5jbGFzc0xpc3QuYWRkKHRoaXMuZ2V0Q2xhc3NOYW1lRm9yKCdzb3VyY2U6cGxhY2VkJykpO1xuICAgIHRoaXMuc291cmNlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5nZXRDbGFzc05hbWVGb3IoJ2NvbnRhaW5lcjpwbGFjZWQnKSk7XG4gICAgdGhpcy5zb3VyY2VDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmdldENsYXNzTmFtZUZvcignY29udGFpbmVyOmRyYWdnaW5nJykpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmdldENsYXNzTmFtZUZvcignYm9keTpkcmFnZ2luZycpKTtcbiAgICBhcHBseVVzZXJTZWxlY3QoZG9jdW1lbnQuYm9keSwgJycpO1xuXG4gICAgaWYgKHRoaXMuY3VycmVudE92ZXIpIHtcbiAgICAgIHRoaXMuY3VycmVudE92ZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmdldENsYXNzTmFtZUZvcignZHJhZ2dhYmxlOm92ZXInKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY3VycmVudE92ZXJDb250YWluZXIpIHtcbiAgICAgIHRoaXMuY3VycmVudE92ZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmdldENsYXNzTmFtZUZvcignY29udGFpbmVyOm92ZXInKSk7XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0UGxhY2VkU291cmNlID0gdGhpcy5vcmlnaW5hbFNvdXJjZTtcbiAgICB0aGlzLmxhc3RQbGFjZWRDb250YWluZXIgPSB0aGlzLnNvdXJjZUNvbnRhaW5lcjtcblxuICAgIHRoaXMucGxhY2VkVGltZW91dElEID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5sYXN0UGxhY2VkU291cmNlKSB7XG4gICAgICAgIHRoaXMubGFzdFBsYWNlZFNvdXJjZS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZ2V0Q2xhc3NOYW1lRm9yKCdzb3VyY2U6cGxhY2VkJykpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5sYXN0UGxhY2VkQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMubGFzdFBsYWNlZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZ2V0Q2xhc3NOYW1lRm9yKCdjb250YWluZXI6cGxhY2VkJykpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxhc3RQbGFjZWRTb3VyY2UgPSBudWxsO1xuICAgICAgdGhpcy5sYXN0UGxhY2VkQ29udGFpbmVyID0gbnVsbDtcbiAgICB9LCB0aGlzLm9wdGlvbnMucGxhY2VkVGltZW91dCk7XG5cbiAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gICAgdGhpcy5vcmlnaW5hbFNvdXJjZSA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50T3ZlckNvbnRhaW5lciA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50T3ZlciA9IG51bGw7XG4gICAgdGhpcy5zb3VyY2VDb250YWluZXIgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgcHJlc3N1cmUgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIERPTSBEcmFnIGV2ZW50XG4gICAqL1xuICBbb25EcmFnUHJlc3N1cmVdKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Vuc29yRXZlbnQgPSBnZXRTZW5zb3JFdmVudChldmVudCk7XG4gICAgY29uc3Qgc291cmNlID0gdGhpcy5zb3VyY2UgfHwgKDAsIF91dGlscy5jbG9zZXN0KShzZW5zb3JFdmVudC5vcmlnaW5hbEV2ZW50LnRhcmdldCwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSk7XG5cbiAgICBjb25zdCBkcmFnUHJlc3N1cmVFdmVudCA9IG5ldyBfRHJhZ0V2ZW50LkRyYWdQcmVzc3VyZUV2ZW50KHtcbiAgICAgIHNlbnNvckV2ZW50LFxuICAgICAgc291cmNlLFxuICAgICAgcHJlc3N1cmU6IHNlbnNvckV2ZW50LnByZXNzdXJlXG4gICAgfSk7XG5cbiAgICB0aGlzLnRyaWdnZXIoZHJhZ1ByZXNzdXJlRXZlbnQpO1xuICB9XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IERyYWdnYWJsZTtcbkRyYWdnYWJsZS5QbHVnaW5zID0geyBBbm5vdW5jZW1lbnQ6IF9QbHVnaW5zLkFubm91bmNlbWVudCwgRm9jdXNhYmxlOiBfUGx1Z2lucy5Gb2N1c2FibGUsIE1pcnJvcjogX1BsdWdpbnMuTWlycm9yLCBTY3JvbGxhYmxlOiBfUGx1Z2lucy5TY3JvbGxhYmxlIH07XG5mdW5jdGlvbiBnZXRTZW5zb3JFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuZGV0YWlsO1xufVxuXG5mdW5jdGlvbiBhcHBseVVzZXJTZWxlY3QoZWxlbWVudCwgdmFsdWUpIHtcbiAgZWxlbWVudC5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gdmFsdWU7XG4gIGVsZW1lbnQuc3R5bGUubW96VXNlclNlbGVjdCA9IHZhbHVlO1xuICBlbGVtZW50LnN0eWxlLm1zVXNlclNlbGVjdCA9IHZhbHVlO1xuICBlbGVtZW50LnN0eWxlLm9Vc2VyU2VsZWN0ID0gdmFsdWU7XG4gIGVsZW1lbnQuc3R5bGUudXNlclNlbGVjdCA9IHZhbHVlO1xufVxuXG4vKioqLyB9KSxcbi8qIDM4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfU2Vuc29yID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIF9TZW5zb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2Vuc29yKTtcblxudmFyIF9TZW5zb3JFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IG9uTW91c2VGb3JjZVdpbGxCZWdpbiA9IFN5bWJvbCgnb25Nb3VzZUZvcmNlV2lsbEJlZ2luJyk7XG5jb25zdCBvbk1vdXNlRm9yY2VEb3duID0gU3ltYm9sKCdvbk1vdXNlRm9yY2VEb3duJyk7XG5jb25zdCBvbk1vdXNlRG93biA9IFN5bWJvbCgnb25Nb3VzZURvd24nKTtcbmNvbnN0IG9uTW91c2VGb3JjZUNoYW5nZSA9IFN5bWJvbCgnb25Nb3VzZUZvcmNlQ2hhbmdlJyk7XG5jb25zdCBvbk1vdXNlTW92ZSA9IFN5bWJvbCgnb25Nb3VzZU1vdmUnKTtcbmNvbnN0IG9uTW91c2VVcCA9IFN5bWJvbCgnb25Nb3VzZVVwJyk7XG5jb25zdCBvbk1vdXNlRm9yY2VHbG9iYWxDaGFuZ2UgPSBTeW1ib2woJ29uTW91c2VGb3JjZUdsb2JhbENoYW5nZScpO1xuXG4vKipcbiAqIFRoaXMgc2Vuc29yIHBpY2tzIHVwIG5hdGl2ZSBmb3JjZSB0b3VjaCBldmVudHMgYW5kIGRpY3RhdGVzIGRyYWcgb3BlcmF0aW9uc1xuICogQGNsYXNzIEZvcmNlVG91Y2hTZW5zb3JcbiAqIEBtb2R1bGUgRm9yY2VUb3VjaFNlbnNvclxuICogQGV4dGVuZHMgU2Vuc29yXG4gKi9cbmNsYXNzIEZvcmNlVG91Y2hTZW5zb3IgZXh0ZW5kcyBfU2Vuc29yMi5kZWZhdWx0IHtcbiAgLyoqXG4gICAqIEZvcmNlVG91Y2hTZW5zb3IgY29uc3RydWN0b3IuXG4gICAqIEBjb25zdHJ1Y3RzIEZvcmNlVG91Y2hTZW5zb3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudFtdfE5vZGVMaXN0fEhUTUxFbGVtZW50fSBjb250YWluZXJzIC0gQ29udGFpbmVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcnMgPSBbXSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoY29udGFpbmVycywgb3B0aW9ucyk7XG5cbiAgICAvKipcbiAgICAgKiBEcmFnZ2FibGUgZWxlbWVudCBuZWVkcyB0byBiZSByZW1lbWJlcmVkIHRvIHVuc2V0IHRoZSBkcmFnZ2FibGUgYXR0cmlidXRlIGFmdGVyIGRyYWcgb3BlcmF0aW9uIGhhcyBjb21wbGV0ZWRcbiAgICAgKiBAcHJvcGVydHkgbWlnaHREcmFnXG4gICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5taWdodERyYWcgPSBmYWxzZTtcblxuICAgIHRoaXNbb25Nb3VzZUZvcmNlV2lsbEJlZ2luXSA9IHRoaXNbb25Nb3VzZUZvcmNlV2lsbEJlZ2luXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25Nb3VzZUZvcmNlRG93bl0gPSB0aGlzW29uTW91c2VGb3JjZURvd25dLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbk1vdXNlRG93bl0gPSB0aGlzW29uTW91c2VEb3duXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25Nb3VzZUZvcmNlQ2hhbmdlXSA9IHRoaXNbb25Nb3VzZUZvcmNlQ2hhbmdlXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25Nb3VzZU1vdmVdID0gdGhpc1tvbk1vdXNlTW92ZV0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uTW91c2VVcF0gPSB0aGlzW29uTW91c2VVcF0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyBzZW5zb3JzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgRE9NXG4gICAqL1xuICBhdHRhY2goKSB7XG4gICAgZm9yIChjb25zdCBjb250YWluZXIgb2YgdGhpcy5jb250YWluZXJzKSB7XG4gICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0bW91c2Vmb3JjZXdpbGxiZWdpbicsIHRoaXNbb25Nb3VzZUZvcmNlV2lsbEJlZ2luXSwgZmFsc2UpO1xuICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdG1vdXNlZm9yY2Vkb3duJywgdGhpc1tvbk1vdXNlRm9yY2VEb3duXSwgZmFsc2UpO1xuICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXNbb25Nb3VzZURvd25dLCB0cnVlKTtcbiAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRtb3VzZWZvcmNlY2hhbmdlZCcsIHRoaXNbb25Nb3VzZUZvcmNlQ2hhbmdlXSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXNbb25Nb3VzZU1vdmVdKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpc1tvbk1vdXNlVXBdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2hlcyBzZW5zb3JzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgRE9NXG4gICAqL1xuICBkZXRhY2goKSB7XG4gICAgZm9yIChjb25zdCBjb250YWluZXIgb2YgdGhpcy5jb250YWluZXJzKSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0bW91c2Vmb3JjZXdpbGxiZWdpbicsIHRoaXNbb25Nb3VzZUZvcmNlV2lsbEJlZ2luXSwgZmFsc2UpO1xuICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdG1vdXNlZm9yY2Vkb3duJywgdGhpc1tvbk1vdXNlRm9yY2VEb3duXSwgZmFsc2UpO1xuICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXNbb25Nb3VzZURvd25dLCB0cnVlKTtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRtb3VzZWZvcmNlY2hhbmdlZCcsIHRoaXNbb25Nb3VzZUZvcmNlQ2hhbmdlXSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXNbb25Nb3VzZU1vdmVdKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpc1tvbk1vdXNlVXBdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3VzZSBmb3JjZSB3aWxsIGJlZ2luIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBNb3VzZSBmb3JjZSB3aWxsIGJlZ2luIGV2ZW50XG4gICAqL1xuICBbb25Nb3VzZUZvcmNlV2lsbEJlZ2luXShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5taWdodERyYWcgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdXNlIGZvcmNlIGRvd24gaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIE1vdXNlIGZvcmNlIGRvd24gZXZlbnRcbiAgICovXG4gIFtvbk1vdXNlRm9yY2VEb3duXShldmVudCkge1xuICAgIGlmICh0aGlzLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgY29uc3QgZHJhZ1N0YXJ0RXZlbnQgPSBuZXcgX1NlbnNvckV2ZW50LkRyYWdTdGFydFNlbnNvckV2ZW50KHtcbiAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgdGFyZ2V0LFxuICAgICAgY29udGFpbmVyLFxuICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnRcbiAgICB9KTtcblxuICAgIHRoaXMudHJpZ2dlcihjb250YWluZXIsIGRyYWdTdGFydEV2ZW50KTtcblxuICAgIHRoaXMuY3VycmVudENvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmRyYWdnaW5nID0gIWRyYWdTdGFydEV2ZW50LmNhbmNlbGVkKCk7XG4gICAgdGhpcy5taWdodERyYWcgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3VzZSB1cCBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gTW91c2UgdXAgZXZlbnRcbiAgICovXG4gIFtvbk1vdXNlVXBdKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ1N0b3BFdmVudCA9IG5ldyBfU2Vuc29yRXZlbnQuRHJhZ1N0b3BTZW5zb3JFdmVudCh7XG4gICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgIHRhcmdldDogbnVsbCxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5jdXJyZW50Q29udGFpbmVyLFxuICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnRcbiAgICB9KTtcblxuICAgIHRoaXMudHJpZ2dlcih0aGlzLmN1cnJlbnRDb250YWluZXIsIGRyYWdTdG9wRXZlbnQpO1xuXG4gICAgdGhpcy5jdXJyZW50Q29udGFpbmVyID0gbnVsbDtcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgdGhpcy5taWdodERyYWcgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3VzZSBkb3duIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBNb3VzZSBkb3duIGV2ZW50XG4gICAqL1xuICBbb25Nb3VzZURvd25dKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLm1pZ2h0RHJhZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE5lZWQgd29ya2Fyb3VuZCBmb3IgcmVhbCBjbGlja1xuICAgIC8vIENhbmNlbCBwb3RlbnRpYWwgZHJhZyBldmVudHNcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdXNlIG1vdmUgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIE1vdXNlIGZvcmNlIHdpbGwgYmVnaW4gZXZlbnRcbiAgICovXG4gIFtvbk1vdXNlTW92ZV0oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuXG4gICAgY29uc3QgZHJhZ01vdmVFdmVudCA9IG5ldyBfU2Vuc29yRXZlbnQuRHJhZ01vdmVTZW5zb3JFdmVudCh7XG4gICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgIHRhcmdldCxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5jdXJyZW50Q29udGFpbmVyLFxuICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnRcbiAgICB9KTtcblxuICAgIHRoaXMudHJpZ2dlcih0aGlzLmN1cnJlbnRDb250YWluZXIsIGRyYWdNb3ZlRXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdXNlIGZvcmNlIGNoYW5nZSBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gTW91c2UgZm9yY2UgY2hhbmdlIGV2ZW50XG4gICAqL1xuICBbb25Nb3VzZUZvcmNlQ2hhbmdlXShldmVudCkge1xuICAgIGlmICh0aGlzLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cbiAgICBjb25zdCBkcmFnUHJlc3N1cmVFdmVudCA9IG5ldyBfU2Vuc29yRXZlbnQuRHJhZ1ByZXNzdXJlU2Vuc29yRXZlbnQoe1xuICAgICAgcHJlc3N1cmU6IGV2ZW50LndlYmtpdEZvcmNlLFxuICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICB0YXJnZXQsXG4gICAgICBjb250YWluZXIsXG4gICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKGNvbnRhaW5lciwgZHJhZ1ByZXNzdXJlRXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdXNlIGZvcmNlIGdsb2JhbCBjaGFuZ2UgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIE1vdXNlIGZvcmNlIGdsb2JhbCBjaGFuZ2UgZXZlbnRcbiAgICovXG4gIFtvbk1vdXNlRm9yY2VHbG9iYWxDaGFuZ2VdKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgY29uc3QgZHJhZ1ByZXNzdXJlRXZlbnQgPSBuZXcgX1NlbnNvckV2ZW50LkRyYWdQcmVzc3VyZVNlbnNvckV2ZW50KHtcbiAgICAgIHByZXNzdXJlOiBldmVudC53ZWJraXRGb3JjZSxcbiAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgdGFyZ2V0LFxuICAgICAgY29udGFpbmVyOiB0aGlzLmN1cnJlbnRDb250YWluZXIsXG4gICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKHRoaXMuY3VycmVudENvbnRhaW5lciwgZHJhZ1ByZXNzdXJlRXZlbnQpO1xuICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBGb3JjZVRvdWNoU2Vuc29yO1xuXG4vKioqLyB9KSxcbi8qIDM5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfRm9yY2VUb3VjaFNlbnNvciA9IF9fd2VicGFja19yZXF1aXJlX18oMzgpO1xuXG52YXIgX0ZvcmNlVG91Y2hTZW5zb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9yY2VUb3VjaFNlbnNvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9Gb3JjZVRvdWNoU2Vuc29yMi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcbi8qIDQwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX1NlbnNvciA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbnZhciBfU2Vuc29yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NlbnNvcik7XG5cbnZhciBfU2Vuc29yRXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBvbk1vdXNlRG93biA9IFN5bWJvbCgnb25Nb3VzZURvd24nKTtcbmNvbnN0IG9uTW91c2VVcCA9IFN5bWJvbCgnb25Nb3VzZVVwJyk7XG5jb25zdCBvbkRyYWdTdGFydCA9IFN5bWJvbCgnb25EcmFnU3RhcnQnKTtcbmNvbnN0IG9uRHJhZ092ZXIgPSBTeW1ib2woJ29uRHJhZ092ZXInKTtcbmNvbnN0IG9uRHJhZ0VuZCA9IFN5bWJvbCgnb25EcmFnRW5kJyk7XG5jb25zdCBvbkRyb3AgPSBTeW1ib2woJ29uRHJvcCcpO1xuY29uc3QgcmVzZXQgPSBTeW1ib2woJ3Jlc2V0Jyk7XG5cbi8qKlxuICogVGhpcyBzZW5zb3IgcGlja3MgdXAgbmF0aXZlIGJyb3dzZXIgZHJhZyBldmVudHMgYW5kIGRpY3RhdGVzIGRyYWcgb3BlcmF0aW9uc1xuICogQGNsYXNzIERyYWdTZW5zb3JcbiAqIEBtb2R1bGUgRHJhZ1NlbnNvclxuICogQGV4dGVuZHMgU2Vuc29yXG4gKi9cbmNsYXNzIERyYWdTZW5zb3IgZXh0ZW5kcyBfU2Vuc29yMi5kZWZhdWx0IHtcbiAgLyoqXG4gICAqIERyYWdTZW5zb3IgY29uc3RydWN0b3IuXG4gICAqIEBjb25zdHJ1Y3RzIERyYWdTZW5zb3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudFtdfE5vZGVMaXN0fEhUTUxFbGVtZW50fSBjb250YWluZXJzIC0gQ29udGFpbmVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcnMgPSBbXSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoY29udGFpbmVycywgb3B0aW9ucyk7XG5cbiAgICAvKipcbiAgICAgKiBNb3VzZSBkb3duIHRpbWVyIHdoaWNoIHdpbGwgZW5kIHVwIHNldHRpbmcgdGhlIGRyYWdnYWJsZSBhdHRyaWJ1dGUsIHVubGVzcyBjYW5jZWxlZFxuICAgICAqIEBwcm9wZXJ0eSBtb3VzZURvd25UaW1lb3V0XG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLm1vdXNlRG93blRpbWVvdXQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogRHJhZ2dhYmxlIGVsZW1lbnQgbmVlZHMgdG8gYmUgcmVtZW1iZXJlZCB0byB1bnNldCB0aGUgZHJhZ2dhYmxlIGF0dHJpYnV0ZSBhZnRlciBkcmFnIG9wZXJhdGlvbiBoYXMgY29tcGxldGVkXG4gICAgICogQHByb3BlcnR5IGRyYWdnYWJsZUVsZW1lbnRcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgdGhpcy5kcmFnZ2FibGVFbGVtZW50ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIE5hdGl2ZSBkcmFnZ2FibGUgZWxlbWVudCBjb3VsZCBiZSBsaW5rcyBvciBpbWFnZXMsIHRoZWlyIGRyYWdnYWJsZSBzdGF0ZSB3aWxsIGJlIGRpc2FibGVkIGR1cmluZyBkcmFnIG9wZXJhdGlvblxuICAgICAqIEBwcm9wZXJ0eSBuYXRpdmVEcmFnZ2FibGVFbGVtZW50XG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHRoaXMubmF0aXZlRHJhZ2dhYmxlRWxlbWVudCA9IG51bGw7XG5cbiAgICB0aGlzW29uTW91c2VEb3duXSA9IHRoaXNbb25Nb3VzZURvd25dLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbk1vdXNlVXBdID0gdGhpc1tvbk1vdXNlVXBdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdTdGFydF0gPSB0aGlzW29uRHJhZ1N0YXJ0XS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnT3Zlcl0gPSB0aGlzW29uRHJhZ092ZXJdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdFbmRdID0gdGhpc1tvbkRyYWdFbmRdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyb3BdID0gdGhpc1tvbkRyb3BdLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgc2Vuc29ycyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIERPTVxuICAgKi9cbiAgYXR0YWNoKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXNbb25Nb3VzZURvd25dLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2hlcyBzZW5zb3JzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgRE9NXG4gICAqL1xuICBkZXRhY2goKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpc1tvbk1vdXNlRG93bl0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgc3RhcnQgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIERyYWcgc3RhcnQgZXZlbnRcbiAgICovXG4gIFtvbkRyYWdTdGFydF0oZXZlbnQpIHtcbiAgICAvLyBOZWVkIGZvciBmaXJlZm94LiBcInRleHRcIiBrZXkgaXMgbmVlZGVkIGZvciBJRVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJycpO1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gdGhpcy5vcHRpb25zLnR5cGU7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIHRoaXMuY3VycmVudENvbnRhaW5lciA9ICgwLCBfdXRpbHMuY2xvc2VzdCkoZXZlbnQudGFyZ2V0LCB0aGlzLmNvbnRhaW5lcnMpO1xuXG4gICAgaWYgKCF0aGlzLmN1cnJlbnRDb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnU3RhcnRFdmVudCA9IG5ldyBfU2Vuc29yRXZlbnQuRHJhZ1N0YXJ0U2Vuc29yRXZlbnQoe1xuICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICB0YXJnZXQsXG4gICAgICBjb250YWluZXI6IHRoaXMuY3VycmVudENvbnRhaW5lcixcbiAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50XG4gICAgfSk7XG5cbiAgICAvLyBXb3JrYXJvdW5kXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRyaWdnZXIodGhpcy5jdXJyZW50Q29udGFpbmVyLCBkcmFnU3RhcnRFdmVudCk7XG5cbiAgICAgIGlmIChkcmFnU3RhcnRFdmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgb3ZlciBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gRHJhZyBvdmVyIGV2ZW50XG4gICAqL1xuICBbb25EcmFnT3Zlcl0oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY3VycmVudENvbnRhaW5lcjtcblxuICAgIGNvbnN0IGRyYWdNb3ZlRXZlbnQgPSBuZXcgX1NlbnNvckV2ZW50LkRyYWdNb3ZlU2Vuc29yRXZlbnQoe1xuICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICB0YXJnZXQsXG4gICAgICBjb250YWluZXIsXG4gICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKGNvbnRhaW5lciwgZHJhZ01vdmVFdmVudCk7XG5cbiAgICBpZiAoIWRyYWdNb3ZlRXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gdGhpcy5vcHRpb25zLnR5cGU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgZW5kIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBEcmFnIGVuZCBldmVudFxuICAgKi9cbiAgW29uRHJhZ0VuZF0oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpc1tvbk1vdXNlVXBdLCB0cnVlKTtcblxuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jdXJyZW50Q29udGFpbmVyO1xuXG4gICAgY29uc3QgZHJhZ1N0b3BFdmVudCA9IG5ldyBfU2Vuc29yRXZlbnQuRHJhZ1N0b3BTZW5zb3JFdmVudCh7XG4gICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgIHRhcmdldCxcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50XG4gICAgfSk7XG5cbiAgICB0aGlzLnRyaWdnZXIoY29udGFpbmVyLCBkcmFnU3RvcEV2ZW50KTtcblxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIHRoaXNbcmVzZXRdKCk7XG4gIH1cblxuICAvKipcbiAgICogRHJvcCBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gRHJvcCBldmVudFxuICAgKi9cbiAgW29uRHJvcF0oZXZlbnQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdXNlIGRvd24gaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIE1vdXNlIGRvd24gZXZlbnRcbiAgICovXG4gIFtvbk1vdXNlRG93bl0oZXZlbnQpIHtcbiAgICAvLyBGaXJlZm94IGJ1ZyBmb3IgaW5wdXRzIHdpdGhpbiBkcmFnZ2FibGVzIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTczOTA3MVxuICAgIGlmIChldmVudC50YXJnZXQgJiYgKGV2ZW50LnRhcmdldC5mb3JtIHx8IGV2ZW50LnRhcmdldC5jb250ZW50ZWRpdGFibGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmF0aXZlRHJhZ2dhYmxlRWxlbWVudCA9ICgwLCBfdXRpbHMuY2xvc2VzdCkoZXZlbnQudGFyZ2V0LCBlbGVtZW50ID0+IGVsZW1lbnQuZHJhZ2dhYmxlKTtcblxuICAgIGlmIChuYXRpdmVEcmFnZ2FibGVFbGVtZW50KSB7XG4gICAgICBuYXRpdmVEcmFnZ2FibGVFbGVtZW50LmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5uYXRpdmVEcmFnZ2FibGVFbGVtZW50ID0gbmF0aXZlRHJhZ2dhYmxlRWxlbWVudDtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpc1tvbk1vdXNlVXBdLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzW29uRHJhZ1N0YXJ0XSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpc1tvbkRyYWdPdmVyXSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzW29uRHJhZ0VuZF0sIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpc1tvbkRyb3BdLCBmYWxzZSk7XG5cbiAgICBjb25zdCB0YXJnZXQgPSAoMCwgX3V0aWxzLmNsb3Nlc3QpKGV2ZW50LnRhcmdldCwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubW91c2VEb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGFyZ2V0LmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICB0aGlzLmRyYWdnYWJsZUVsZW1lbnQgPSB0YXJnZXQ7XG4gICAgfSwgdGhpcy5vcHRpb25zLmRlbGF5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3VzZSB1cCBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gTW91c2UgdXAgZXZlbnRcbiAgICovXG4gIFtvbk1vdXNlVXBdKCkge1xuICAgIHRoaXNbcmVzZXRdKCk7XG4gIH1cblxuICAvKipcbiAgICogTW91c2UgdXAgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIE1vdXNlIHVwIGV2ZW50XG4gICAqL1xuICBbcmVzZXRdKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLm1vdXNlRG93blRpbWVvdXQpO1xuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXNbb25Nb3VzZVVwXSwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0sIGZhbHNlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXNbb25EcmFnT3Zlcl0sIGZhbHNlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpc1tvbkRyYWdFbmRdLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXNbb25Ecm9wXSwgZmFsc2UpO1xuXG4gICAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlRWxlbWVudCkge1xuICAgICAgdGhpcy5uYXRpdmVEcmFnZ2FibGVFbGVtZW50LmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICB0aGlzLm5hdGl2ZURyYWdnYWJsZUVsZW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRyYWdnYWJsZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlRWxlbWVudC5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlRWxlbWVudCA9IG51bGw7XG4gICAgfVxuICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBEcmFnU2Vuc29yO1xuXG4vKioqLyB9KSxcbi8qIDQxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfRHJhZ1NlbnNvciA9IF9fd2VicGFja19yZXF1aXJlX18oNDApO1xuXG52YXIgX0RyYWdTZW5zb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJhZ1NlbnNvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9EcmFnU2Vuc29yMi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcbi8qIDQyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX1NlbnNvciA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbnZhciBfU2Vuc29yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NlbnNvcik7XG5cbnZhciBfU2Vuc29yRXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBvblRvdWNoU3RhcnQgPSBTeW1ib2woJ29uVG91Y2hTdGFydCcpO1xuY29uc3Qgb25Ub3VjaEhvbGQgPSBTeW1ib2woJ29uVG91Y2hIb2xkJyk7XG5jb25zdCBvblRvdWNoRW5kID0gU3ltYm9sKCdvblRvdWNoRW5kJyk7XG5jb25zdCBvblRvdWNoTW92ZSA9IFN5bWJvbCgnb25Ub3VjaE1vdmUnKTtcblxuLyoqXG4gKiBQcmV2ZW50cyBzY3JvbGxpbmcgd2hlbiBzZXQgdG8gdHJ1ZVxuICogQHZhciB7Qm9vbGVhbn0gcHJldmVudFNjcm9sbGluZ1xuICovXG5sZXQgcHJldmVudFNjcm9sbGluZyA9IGZhbHNlO1xuXG4vLyBXZWJLaXQgcmVxdWlyZXMgY2FuY2VsYWJsZSBgdG91Y2htb3ZlYCBldmVudHMgdG8gYmUgYWRkZWQgYXMgZWFybHkgYXMgcG9zc2libGVcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBldmVudCA9PiB7XG4gIGlmICghcHJldmVudFNjcm9sbGluZykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFByZXZlbnQgc2Nyb2xsaW5nXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59LCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuXG4vKipcbiAqIFRoaXMgc2Vuc29yIHBpY2tzIHVwIG5hdGl2ZSBicm93c2VyIHRvdWNoIGV2ZW50cyBhbmQgZGljdGF0ZXMgZHJhZyBvcGVyYXRpb25zXG4gKiBAY2xhc3MgVG91Y2hTZW5zb3JcbiAqIEBtb2R1bGUgVG91Y2hTZW5zb3JcbiAqIEBleHRlbmRzIFNlbnNvclxuICovXG5jbGFzcyBUb3VjaFNlbnNvciBleHRlbmRzIF9TZW5zb3IyLmRlZmF1bHQge1xuICAvKipcbiAgICogVG91Y2hTZW5zb3IgY29uc3RydWN0b3IuXG4gICAqIEBjb25zdHJ1Y3RzIFRvdWNoU2Vuc29yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnRbXXxOb2RlTGlzdHxIVE1MRWxlbWVudH0gY29udGFpbmVycyAtIENvbnRhaW5lcnNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXJzID0gW10sIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKGNvbnRhaW5lcnMsIG9wdGlvbnMpO1xuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzdCBzY3JvbGxhYmxlIGNvbnRhaW5lciBzbyBhY2NpZGVudGFsIHNjcm9sbCBjYW4gY2FuY2VsIGxvbmcgdG91Y2hcbiAgICAgKiBAcHJvcGVydHkgY3VycmVudFNjcm9sbGFibGVQYXJlbnRcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgdGhpcy5jdXJyZW50U2Nyb2xsYWJsZVBhcmVudCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaW1lb3V0SUQgZm9yIGxvbmcgdG91Y2hcbiAgICAgKiBAcHJvcGVydHkgdGFwVGltZW91dFxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy50YXBUaW1lb3V0ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIHRvdWNoTW92ZWQgaW5kaWNhdGVzIGlmIHRvdWNoIGhhcyBtb3ZlZCBkdXJpbmcgdGFwVGltZW91dFxuICAgICAqIEBwcm9wZXJ0eSB0b3VjaE1vdmVkXG4gICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy50b3VjaE1vdmVkID0gZmFsc2U7XG5cbiAgICB0aGlzW29uVG91Y2hTdGFydF0gPSB0aGlzW29uVG91Y2hTdGFydF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uVG91Y2hIb2xkXSA9IHRoaXNbb25Ub3VjaEhvbGRdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvblRvdWNoRW5kXSA9IHRoaXNbb25Ub3VjaEVuZF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uVG91Y2hNb3ZlXSA9IHRoaXNbb25Ub3VjaE1vdmVdLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgc2Vuc29ycyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIERPTVxuICAgKi9cbiAgYXR0YWNoKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzW29uVG91Y2hTdGFydF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaGVzIHNlbnNvcnMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBET01cbiAgICovXG4gIGRldGFjaCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpc1tvblRvdWNoU3RhcnRdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb3VjaCBzdGFydCBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gVG91Y2ggc3RhcnQgZXZlbnRcbiAgICovXG4gIFtvblRvdWNoU3RhcnRdKGV2ZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gKDAsIF91dGlscy5jbG9zZXN0KShldmVudC50YXJnZXQsIHRoaXMuY29udGFpbmVycyk7XG5cbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXNbb25Ub3VjaE1vdmVdKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXNbb25Ub3VjaEVuZF0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpc1tvblRvdWNoRW5kXSk7XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSk7XG5cbiAgICB0aGlzLmN1cnJlbnRDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy50YXBUaW1lb3V0ID0gc2V0VGltZW91dCh0aGlzW29uVG91Y2hIb2xkXShldmVudCwgY29udGFpbmVyKSwgdGhpcy5vcHRpb25zLmRlbGF5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb3VjaCBob2xkIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUb3VjaCBzdGFydCBldmVudFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgLSBDb250YWluZXIgZWxlbWVudFxuICAgKi9cbiAgW29uVG91Y2hIb2xkXShldmVudCwgY29udGFpbmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnRvdWNoTW92ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF0gfHwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cbiAgICAgIGNvbnN0IGRyYWdTdGFydEV2ZW50ID0gbmV3IF9TZW5zb3JFdmVudC5EcmFnU3RhcnRTZW5zb3JFdmVudCh7XG4gICAgICAgIGNsaWVudFg6IHRvdWNoLnBhZ2VYLFxuICAgICAgICBjbGllbnRZOiB0b3VjaC5wYWdlWSxcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50XG4gICAgICB9KTtcblxuICAgICAgdGhpcy50cmlnZ2VyKGNvbnRhaW5lciwgZHJhZ1N0YXJ0RXZlbnQpO1xuXG4gICAgICB0aGlzLmRyYWdnaW5nID0gIWRyYWdTdGFydEV2ZW50LmNhbmNlbGVkKCk7XG4gICAgICBwcmV2ZW50U2Nyb2xsaW5nID0gdGhpcy5kcmFnZ2luZztcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRvdWNoIG1vdmUgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRvdWNoIG1vdmUgZXZlbnRcbiAgICovXG4gIFtvblRvdWNoTW92ZV0oZXZlbnQpIHtcbiAgICB0aGlzLnRvdWNoTW92ZWQgPSB0cnVlO1xuXG4gICAgaWYgKCF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdG91Y2ggPSBldmVudC50b3VjaGVzWzBdIHx8IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQodG91Y2gucGFnZVggLSB3aW5kb3cuc2Nyb2xsWCwgdG91Y2gucGFnZVkgLSB3aW5kb3cuc2Nyb2xsWSk7XG5cbiAgICBjb25zdCBkcmFnTW92ZUV2ZW50ID0gbmV3IF9TZW5zb3JFdmVudC5EcmFnTW92ZVNlbnNvckV2ZW50KHtcbiAgICAgIGNsaWVudFg6IHRvdWNoLnBhZ2VYLFxuICAgICAgY2xpZW50WTogdG91Y2gucGFnZVksXG4gICAgICB0YXJnZXQsXG4gICAgICBjb250YWluZXI6IHRoaXMuY3VycmVudENvbnRhaW5lcixcbiAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50XG4gICAgfSk7XG5cbiAgICB0aGlzLnRyaWdnZXIodGhpcy5jdXJyZW50Q29udGFpbmVyLCBkcmFnTW92ZUV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb3VjaCBlbmQgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRvdWNoIGVuZCBldmVudFxuICAgKi9cbiAgW29uVG91Y2hFbmRdKGV2ZW50KSB7XG4gICAgdGhpcy50b3VjaE1vdmVkID0gZmFsc2U7XG4gICAgcHJldmVudFNjcm9sbGluZyA9IGZhbHNlO1xuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzW29uVG91Y2hFbmRdKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXNbb25Ub3VjaEVuZF0pO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXNbb25Ub3VjaE1vdmVdKTtcblxuICAgIGlmICh0aGlzLmN1cnJlbnRDb250YWluZXIpIHtcbiAgICAgIHRoaXMuY3VycmVudENvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUpO1xuICAgIH1cblxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRhcFRpbWVvdXQpO1xuXG4gICAgaWYgKCF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdG91Y2ggPSBldmVudC50b3VjaGVzWzBdIHx8IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQodG91Y2gucGFnZVggLSB3aW5kb3cuc2Nyb2xsWCwgdG91Y2gucGFnZVkgLSB3aW5kb3cuc2Nyb2xsWSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZHJhZ1N0b3BFdmVudCA9IG5ldyBfU2Vuc29yRXZlbnQuRHJhZ1N0b3BTZW5zb3JFdmVudCh7XG4gICAgICBjbGllbnRYOiB0b3VjaC5wYWdlWCxcbiAgICAgIGNsaWVudFk6IHRvdWNoLnBhZ2VZLFxuICAgICAgdGFyZ2V0LFxuICAgICAgY29udGFpbmVyOiB0aGlzLmN1cnJlbnRDb250YWluZXIsXG4gICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKHRoaXMuY3VycmVudENvbnRhaW5lciwgZHJhZ1N0b3BFdmVudCk7XG5cbiAgICB0aGlzLmN1cnJlbnRDb250YWluZXIgPSBudWxsO1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBUb3VjaFNlbnNvcjtcbmZ1bmN0aW9uIG9uQ29udGV4dE1lbnUoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cbi8qKiovIH0pLFxuLyogNDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9Ub3VjaFNlbnNvciA9IF9fd2VicGFja19yZXF1aXJlX18oNDIpO1xuXG52YXIgX1RvdWNoU2Vuc29yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RvdWNoU2Vuc29yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1RvdWNoU2Vuc29yMi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcbi8qIDQ0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkRyYWdQcmVzc3VyZVNlbnNvckV2ZW50ID0gZXhwb3J0cy5EcmFnU3RvcFNlbnNvckV2ZW50ID0gZXhwb3J0cy5EcmFnTW92ZVNlbnNvckV2ZW50ID0gZXhwb3J0cy5EcmFnU3RhcnRTZW5zb3JFdmVudCA9IGV4cG9ydHMuU2Vuc29yRXZlbnQgPSB1bmRlZmluZWQ7XG5cbnZhciBfQWJzdHJhY3RFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfQWJzdHJhY3RFdmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BYnN0cmFjdEV2ZW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBCYXNlIHNlbnNvciBldmVudFxuICogQGNsYXNzIFNlbnNvckV2ZW50XG4gKiBAbW9kdWxlIFNlbnNvckV2ZW50XG4gKiBAZXh0ZW5kcyBBYnN0cmFjdEV2ZW50XG4gKi9cbmNsYXNzIFNlbnNvckV2ZW50IGV4dGVuZHMgX0Fic3RyYWN0RXZlbnQyLmRlZmF1bHQge1xuICAvKipcbiAgICogT3JpZ2luYWwgYnJvd3NlciBldmVudCB0aGF0IHRyaWdnZXJlZCBhIHNlbnNvclxuICAgKiBAcHJvcGVydHkgb3JpZ2luYWxFdmVudFxuICAgKiBAdHlwZSB7RXZlbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IG9yaWdpbmFsRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vcmlnaW5hbEV2ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZWQgY2xpZW50WCBmb3IgYm90aCB0b3VjaCBhbmQgbW91c2UgZXZlbnRzXG4gICAqIEBwcm9wZXJ0eSBjbGllbnRYXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IGNsaWVudFgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5jbGllbnRYO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZWQgY2xpZW50WSBmb3IgYm90aCB0b3VjaCBhbmQgbW91c2UgZXZlbnRzXG4gICAqIEBwcm9wZXJ0eSBjbGllbnRZXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IGNsaWVudFkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5jbGllbnRZO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZWQgdGFyZ2V0IGZvciBib3RoIHRvdWNoIGFuZCBtb3VzZSBldmVudHNcbiAgICogUmV0dXJucyB0aGUgZWxlbWVudCB0aGF0IGlzIGJlaGluZCBjdXJzb3Igb3IgdG91Y2ggcG9pbnRlclxuICAgKiBAcHJvcGVydHkgdGFyZ2V0XG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgdGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEudGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciB0aGF0IGluaXRpYXRlZCB0aGUgc2Vuc29yXG4gICAqIEBwcm9wZXJ0eSBjb250YWluZXJcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5jb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogVHJhY2twYWQgcHJlc3N1cmVcbiAgICogQHByb3BlcnR5IHByZXNzdXJlXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IHByZXNzdXJlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEucHJlc3N1cmU7XG4gIH1cbn1cblxuZXhwb3J0cy5TZW5zb3JFdmVudCA9IFNlbnNvckV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogRHJhZyBzdGFydCBzZW5zb3IgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIERyYWdTdGFydFNlbnNvckV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtb2R1bGUgRHJhZ1N0YXJ0U2Vuc29yRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGV4dGVuZHMgU2Vuc29yRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbmNsYXNzIERyYWdTdGFydFNlbnNvckV2ZW50IGV4dGVuZHMgU2Vuc29yRXZlbnQge31cblxuZXhwb3J0cy5EcmFnU3RhcnRTZW5zb3JFdmVudCA9IERyYWdTdGFydFNlbnNvckV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogRHJhZyBtb3ZlIHNlbnNvciBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgRHJhZ01vdmVTZW5zb3JFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIERyYWdNb3ZlU2Vuc29yRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGV4dGVuZHMgU2Vuc29yRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbkRyYWdTdGFydFNlbnNvckV2ZW50LnR5cGUgPSAnZHJhZzpzdGFydCc7XG5jbGFzcyBEcmFnTW92ZVNlbnNvckV2ZW50IGV4dGVuZHMgU2Vuc29yRXZlbnQge31cblxuZXhwb3J0cy5EcmFnTW92ZVNlbnNvckV2ZW50ID0gRHJhZ01vdmVTZW5zb3JFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBEcmFnIHN0b3Agc2Vuc29yIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgRHJhZ1N0b3BTZW5zb3JFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBEcmFnU3RvcFNlbnNvckV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXh0ZW5kcyBTZW5zb3JFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbkRyYWdNb3ZlU2Vuc29yRXZlbnQudHlwZSA9ICdkcmFnOm1vdmUnO1xuY2xhc3MgRHJhZ1N0b3BTZW5zb3JFdmVudCBleHRlbmRzIFNlbnNvckV2ZW50IHt9XG5cbmV4cG9ydHMuRHJhZ1N0b3BTZW5zb3JFdmVudCA9IERyYWdTdG9wU2Vuc29yRXZlbnQ7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogRHJhZyBwcmVzc3VyZSBzZW5zb3IgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzcyBEcmFnUHJlc3N1cmVTZW5zb3JFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBEcmFnUHJlc3N1cmVTZW5zb3JFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGV4dGVuZHMgU2Vuc29yRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5EcmFnU3RvcFNlbnNvckV2ZW50LnR5cGUgPSAnZHJhZzpzdG9wJztcbmNsYXNzIERyYWdQcmVzc3VyZVNlbnNvckV2ZW50IGV4dGVuZHMgU2Vuc29yRXZlbnQge31cbmV4cG9ydHMuRHJhZ1ByZXNzdXJlU2Vuc29yRXZlbnQgPSBEcmFnUHJlc3N1cmVTZW5zb3JFdmVudDtcbkRyYWdQcmVzc3VyZVNlbnNvckV2ZW50LnR5cGUgPSAnZHJhZzpwcmVzc3VyZSc7XG5cbi8qKiovIH0pLFxuLyogNDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfU2Vuc29yID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIF9TZW5zb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2Vuc29yKTtcblxudmFyIF9TZW5zb3JFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IG9uQ29udGV4dE1lbnVXaGlsZURyYWdnaW5nID0gU3ltYm9sKCdvbkNvbnRleHRNZW51V2hpbGVEcmFnZ2luZycpO1xuY29uc3Qgb25Nb3VzZURvd24gPSBTeW1ib2woJ29uTW91c2VEb3duJyk7XG5jb25zdCBvbk1vdXNlTW92ZSA9IFN5bWJvbCgnb25Nb3VzZU1vdmUnKTtcbmNvbnN0IG9uTW91c2VVcCA9IFN5bWJvbCgnb25Nb3VzZVVwJyk7XG5cbi8qKlxuICogVGhpcyBzZW5zb3IgcGlja3MgdXAgbmF0aXZlIGJyb3dzZXIgbW91c2UgZXZlbnRzIGFuZCBkaWN0YXRlcyBkcmFnIG9wZXJhdGlvbnNcbiAqIEBjbGFzcyBNb3VzZVNlbnNvclxuICogQG1vZHVsZSBNb3VzZVNlbnNvclxuICogQGV4dGVuZHMgU2Vuc29yXG4gKi9cbmNsYXNzIE1vdXNlU2Vuc29yIGV4dGVuZHMgX1NlbnNvcjIuZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBNb3VzZVNlbnNvciBjb25zdHJ1Y3Rvci5cbiAgICogQGNvbnN0cnVjdHMgTW91c2VTZW5zb3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudFtdfE5vZGVMaXN0fEhUTUxFbGVtZW50fSBjb250YWluZXJzIC0gQ29udGFpbmVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcnMgPSBbXSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoY29udGFpbmVycywgb3B0aW9ucyk7XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgaWYgbW91c2UgYnV0dG9uIGlzIHN0aWxsIGRvd25cbiAgICAgKiBAcHJvcGVydHkgbW91c2VEb3duXG4gICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIE1vdXNlIGRvd24gdGltZXIgd2hpY2ggd2lsbCBlbmQgdXAgdHJpZ2dlcmluZyB0aGUgZHJhZyBzdGFydCBvcGVyYXRpb25cbiAgICAgKiBAcHJvcGVydHkgbW91c2VEb3duVGltZW91dFxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5tb3VzZURvd25UaW1lb3V0ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiBjb250ZXh0IG1lbnUgaGFzIGJlZW4gb3BlbmVkIGR1cmluZyBkcmFnIG9wZXJhdGlvblxuICAgICAqIEBwcm9wZXJ0eSBvcGVuZWRDb250ZXh0TWVudVxuICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAqL1xuICAgIHRoaXMub3BlbmVkQ29udGV4dE1lbnUgPSBmYWxzZTtcblxuICAgIHRoaXNbb25Db250ZXh0TWVudVdoaWxlRHJhZ2dpbmddID0gdGhpc1tvbkNvbnRleHRNZW51V2hpbGVEcmFnZ2luZ10uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uTW91c2VEb3duXSA9IHRoaXNbb25Nb3VzZURvd25dLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbk1vdXNlTW92ZV0gPSB0aGlzW29uTW91c2VNb3ZlXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25Nb3VzZVVwXSA9IHRoaXNbb25Nb3VzZVVwXS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIHNlbnNvcnMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBET01cbiAgICovXG4gIGF0dGFjaCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzW29uTW91c2VEb3duXSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoZXMgc2Vuc29ycyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIERPTVxuICAgKi9cbiAgZGV0YWNoKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXNbb25Nb3VzZURvd25dLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3VzZSBkb3duIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBNb3VzZSBkb3duIGV2ZW50XG4gICAqL1xuICBbb25Nb3VzZURvd25dKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpc1tvbk1vdXNlVXBdKTtcblxuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgY29uc3QgY29udGFpbmVyID0gKDAsIF91dGlscy5jbG9zZXN0KSh0YXJnZXQsIHRoaXMuY29udGFpbmVycyk7XG5cbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHByZXZlbnROYXRpdmVEcmFnU3RhcnQpO1xuXG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMubW91c2VEb3duVGltZW91dCk7XG4gICAgdGhpcy5tb3VzZURvd25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMubW91c2VEb3duKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZHJhZ1N0YXJ0RXZlbnQgPSBuZXcgX1NlbnNvckV2ZW50LkRyYWdTdGFydFNlbnNvckV2ZW50KHtcbiAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50XG4gICAgICB9KTtcblxuICAgICAgdGhpcy50cmlnZ2VyKGNvbnRhaW5lciwgZHJhZ1N0YXJ0RXZlbnQpO1xuXG4gICAgICB0aGlzLmN1cnJlbnRDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICB0aGlzLmRyYWdnaW5nID0gIWRyYWdTdGFydEV2ZW50LmNhbmNlbGVkKCk7XG5cbiAgICAgIGlmICh0aGlzLmRyYWdnaW5nKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgdGhpc1tvbkNvbnRleHRNZW51V2hpbGVEcmFnZ2luZ10pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzW29uTW91c2VNb3ZlXSk7XG4gICAgICB9XG4gICAgfSwgdGhpcy5vcHRpb25zLmRlbGF5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3VzZSBtb3ZlIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBNb3VzZSBtb3ZlIGV2ZW50XG4gICAqL1xuICBbb25Nb3VzZU1vdmVdKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcblxuICAgIGNvbnN0IGRyYWdNb3ZlRXZlbnQgPSBuZXcgX1NlbnNvckV2ZW50LkRyYWdNb3ZlU2Vuc29yRXZlbnQoe1xuICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICB0YXJnZXQsXG4gICAgICBjb250YWluZXI6IHRoaXMuY3VycmVudENvbnRhaW5lcixcbiAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50XG4gICAgfSk7XG5cbiAgICB0aGlzLnRyaWdnZXIodGhpcy5jdXJyZW50Q29udGFpbmVyLCBkcmFnTW92ZUV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3VzZSB1cCBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gTW91c2UgdXAgZXZlbnRcbiAgICovXG4gIFtvbk1vdXNlVXBdKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBCb29sZWFuKHRoaXMub3BlbmVkQ29udGV4dE1lbnUpO1xuXG4gICAgaWYgKHRoaXMub3BlbmVkQ29udGV4dE1lbnUpIHtcbiAgICAgIHRoaXMub3BlbmVkQ29udGV4dE1lbnUgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpc1tvbk1vdXNlVXBdKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBwcmV2ZW50TmF0aXZlRHJhZ1N0YXJ0KTtcblxuICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG5cbiAgICBjb25zdCBkcmFnU3RvcEV2ZW50ID0gbmV3IF9TZW5zb3JFdmVudC5EcmFnU3RvcFNlbnNvckV2ZW50KHtcbiAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgdGFyZ2V0LFxuICAgICAgY29udGFpbmVyOiB0aGlzLmN1cnJlbnRDb250YWluZXIsXG4gICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKHRoaXMuY3VycmVudENvbnRhaW5lciwgZHJhZ1N0b3BFdmVudCk7XG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIHRoaXNbb25Db250ZXh0TWVudVdoaWxlRHJhZ2dpbmddKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzW29uTW91c2VNb3ZlXSk7XG5cbiAgICB0aGlzLmN1cnJlbnRDb250YWluZXIgPSBudWxsO1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250ZXh0IG1lbnUgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIENvbnRleHQgbWVudSBldmVudFxuICAgKi9cbiAgW29uQ29udGV4dE1lbnVXaGlsZURyYWdnaW5nXShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5vcGVuZWRDb250ZXh0TWVudSA9IHRydWU7XG4gIH1cbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gTW91c2VTZW5zb3I7XG5mdW5jdGlvbiBwcmV2ZW50TmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbi8qKiovIH0pLFxuLyogNDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9Nb3VzZVNlbnNvciA9IF9fd2VicGFja19yZXF1aXJlX18oNDUpO1xuXG52YXIgX01vdXNlU2Vuc29yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vdXNlU2Vuc29yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX01vdXNlU2Vuc29yMi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcbi8qIDQ3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbi8qKlxuICogQmFzZSBzZW5zb3IgY2xhc3MuIEV4dGVuZCBmcm9tIHRoaXMgY2xhc3MgdG8gY3JlYXRlIGEgbmV3IG9yIGN1c3RvbSBzZW5zb3JcbiAqIEBjbGFzcyBTZW5zb3JcbiAqIEBtb2R1bGUgU2Vuc29yXG4gKi9cbmNsYXNzIFNlbnNvciB7XG4gIC8qKlxuICAgKiBTZW5zb3IgY29uc3RydWN0b3IuXG4gICAqIEBjb25zdHJ1Y3RzIFNlbnNvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50W118Tm9kZUxpc3R8SFRNTEVsZW1lbnR9IGNvbnRhaW5lcnMgLSBDb250YWluZXJzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IoY29udGFpbmVycyA9IFtdLCBvcHRpb25zID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBDdXJyZW50IGNvbnRhaW5lcnNcbiAgICAgKiBAcHJvcGVydHkgY29udGFpbmVyc1xuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIHRoaXMuY29udGFpbmVycyA9IFsuLi5jb250YWluZXJzXTtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgb3B0aW9uc1xuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgb3B0aW9ucyk7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IGRyYWcgc3RhdGVcbiAgICAgKiBAcHJvcGVydHkgZHJhZ2dpbmdcbiAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IGNvbnRhaW5lclxuICAgICAqIEBwcm9wZXJ0eSBjdXJyZW50Q29udGFpbmVyXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHRoaXMuY3VycmVudENvbnRhaW5lciA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgc2Vuc29ycyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIERPTVxuICAgKiBAcmV0dXJuIHtTZW5zb3J9XG4gICAqL1xuICBhdHRhY2goKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoZXMgc2Vuc29ycyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIERPTVxuICAgKiBAcmV0dXJuIHtTZW5zb3J9XG4gICAqL1xuICBkZXRhY2goKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBjb250YWluZXIgdG8gdGhpcyBzZW5zb3IgaW5zdGFuY2VcbiAgICogQHBhcmFtIHsuLi5IVE1MRWxlbWVudH0gY29udGFpbmVycyAtIENvbnRhaW5lcnMgeW91IHdhbnQgdG8gYWRkIHRvIHRoaXMgc2Vuc29yXG4gICAqIEBleGFtcGxlIGRyYWdnYWJsZS5hZGRDb250YWluZXIoZG9jdW1lbnQuYm9keSlcbiAgICovXG4gIGFkZENvbnRhaW5lciguLi5jb250YWluZXJzKSB7XG4gICAgdGhpcy5jb250YWluZXJzID0gWy4uLnRoaXMuY29udGFpbmVycywgLi4uY29udGFpbmVyc107XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBjb250YWluZXIgZnJvbSB0aGlzIHNlbnNvciBpbnN0YW5jZVxuICAgKiBAcGFyYW0gey4uLkhUTUxFbGVtZW50fSBjb250YWluZXJzIC0gQ29udGFpbmVycyB5b3Ugd2FudCB0byByZW1vdmUgZnJvbSB0aGlzIHNlbnNvclxuICAgKiBAZXhhbXBsZSBkcmFnZ2FibGUucmVtb3ZlQ29udGFpbmVyKGRvY3VtZW50LmJvZHkpXG4gICAqL1xuICByZW1vdmVDb250YWluZXIoLi4uY29udGFpbmVycykge1xuICAgIHRoaXMuY29udGFpbmVycyA9IHRoaXMuY29udGFpbmVycy5maWx0ZXIoY29udGFpbmVyID0+ICFjb250YWluZXJzLmluY2x1ZGVzKGNvbnRhaW5lcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIGV2ZW50IG9uIHRhcmdldCBlbGVtZW50XG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHRvIHRyaWdnZXIgZXZlbnQgb25cbiAgICogQHBhcmFtIHtTZW5zb3JFdmVudH0gc2Vuc29yRXZlbnQgLSBTZW5zb3IgZXZlbnQgdG8gdHJpZ2dlclxuICAgKi9cbiAgdHJpZ2dlcihlbGVtZW50LCBzZW5zb3JFdmVudCkge1xuICAgIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgZXZlbnQuZGV0YWlsID0gc2Vuc29yRXZlbnQ7XG4gICAgZXZlbnQuaW5pdEV2ZW50KHNlbnNvckV2ZW50LnR5cGUsIHRydWUsIHRydWUpO1xuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgdGhpcy5sYXN0RXZlbnQgPSBzZW5zb3JFdmVudDtcblxuICAgIHJldHVybiBzZW5zb3JFdmVudDtcbiAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU2Vuc29yO1xuXG4vKioqLyB9KSxcbi8qIDQ4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSByZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lO1xuZnVuY3Rpb24gcmVxdWVzdE5leHRBbmltYXRpb25GcmFtZShjYWxsYmFjaykge1xuICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICB9KTtcbn1cblxuLyoqKi8gfSksXG4vKiA0OSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ4KTtcblxudmFyIF9yZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfcmVxdWVzdE5leHRBbmltYXRpb25GcmFtZTIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiA1MCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2xvc2VzdDtcbmNvbnN0IG1hdGNoRnVuY3Rpb24gPSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3I7XG5cbi8qKlxuICogR2V0IHRoZSBjbG9zZXN0IHBhcmVudCBlbGVtZW50IG9mIGEgZ2l2ZW4gZWxlbWVudCB0aGF0IG1hdGNoZXMgdGhlIGdpdmVuXG4gKiBzZWxlY3RvciBzdHJpbmcgb3IgbWF0Y2hpbmcgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgVGhlIGNoaWxkIGVsZW1lbnQgdG8gZmluZCBhIHBhcmVudCBvZlxuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHNlbGVjdG9yIFRoZSBzdHJpbmcgb3IgZnVuY3Rpb24gdG8gdXNlIHRvIG1hdGNoXG4gKiAgICAgdGhlIHBhcmVudCBlbGVtZW50XG4gKiBAcmV0dXJuIHtFbGVtZW50fG51bGx9XG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgdmFsdWUpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBzZWxlY3RvciA9IHZhbHVlO1xuICBjb25zdCBjYWxsYmFjayA9IHZhbHVlO1xuICBjb25zdCBub2RlTGlzdCA9IHZhbHVlO1xuICBjb25zdCBzaW5nbGVFbGVtZW50ID0gdmFsdWU7XG5cbiAgY29uc3QgaXNTZWxlY3RvciA9IEJvb2xlYW4odHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyk7XG4gIGNvbnN0IGlzRnVuY3Rpb24gPSBCb29sZWFuKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyk7XG4gIGNvbnN0IGlzTm9kZUxpc3QgPSBCb29sZWFuKHZhbHVlIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgdmFsdWUgaW5zdGFuY2VvZiBBcnJheSk7XG4gIGNvbnN0IGlzRWxlbWVudCA9IEJvb2xlYW4odmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCk7XG5cbiAgZnVuY3Rpb24gY29uZGl0aW9uRm4oY3VycmVudEVsZW1lbnQpIHtcbiAgICBpZiAoIWN1cnJlbnRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gY3VycmVudEVsZW1lbnQ7XG4gICAgfSBlbHNlIGlmIChpc1NlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gbWF0Y2hGdW5jdGlvbi5jYWxsKGN1cnJlbnRFbGVtZW50LCBzZWxlY3Rvcik7XG4gICAgfSBlbHNlIGlmIChpc05vZGVMaXN0KSB7XG4gICAgICByZXR1cm4gWy4uLm5vZGVMaXN0XS5pbmNsdWRlcyhjdXJyZW50RWxlbWVudCk7XG4gICAgfSBlbHNlIGlmIChpc0VsZW1lbnQpIHtcbiAgICAgIHJldHVybiBzaW5nbGVFbGVtZW50ID09PSBjdXJyZW50RWxlbWVudDtcbiAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24pIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhjdXJyZW50RWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGxldCBjdXJyZW50ID0gZWxlbWVudDtcblxuICBkbyB7XG4gICAgY3VycmVudCA9IGN1cnJlbnQuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQgfHwgY3VycmVudC5jb3JyZXNwb25kaW5nRWxlbWVudCB8fCBjdXJyZW50O1xuXG4gICAgaWYgKGNvbmRpdGlvbkZuKGN1cnJlbnQpKSB7XG4gICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9XG5cbiAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlO1xuICB9IHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IGRvY3VtZW50LmJvZHkgJiYgY3VycmVudCAhPT0gZG9jdW1lbnQpO1xuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKioqLyB9KSxcbi8qIDUxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY2xvc2VzdCA9IF9fd2VicGFja19yZXF1aXJlX18oNTApO1xuXG52YXIgX2Nsb3Nlc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xvc2VzdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9jbG9zZXN0Mi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcbi8qIDUyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHRPcHRpb25zID0gZXhwb3J0cy5zY3JvbGwgPSBleHBvcnRzLm9uRHJhZ1N0b3AgPSBleHBvcnRzLm9uRHJhZ01vdmUgPSBleHBvcnRzLm9uRHJhZ1N0YXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX0Fic3RyYWN0UGx1Z2luID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9BYnN0cmFjdFBsdWdpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BYnN0cmFjdFBsdWdpbik7XG5cbnZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBvbkRyYWdTdGFydCA9IGV4cG9ydHMub25EcmFnU3RhcnQgPSBTeW1ib2woJ29uRHJhZ1N0YXJ0Jyk7XG5jb25zdCBvbkRyYWdNb3ZlID0gZXhwb3J0cy5vbkRyYWdNb3ZlID0gU3ltYm9sKCdvbkRyYWdNb3ZlJyk7XG5jb25zdCBvbkRyYWdTdG9wID0gZXhwb3J0cy5vbkRyYWdTdG9wID0gU3ltYm9sKCdvbkRyYWdTdG9wJyk7XG5jb25zdCBzY3JvbGwgPSBleHBvcnRzLnNjcm9sbCA9IFN5bWJvbCgnc2Nyb2xsJyk7XG5cbi8qKlxuICogU2Nyb2xsYWJsZSBkZWZhdWx0IG9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkZWZhdWx0T3B0aW9uc1xuICogQHByb3BlcnR5IHtOdW1iZXJ9IGRlZmF1bHRPcHRpb25zLnNwZWVkXG4gKiBAcHJvcGVydHkge051bWJlcn0gZGVmYXVsdE9wdGlvbnMuc2Vuc2l0aXZpdHlcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnRbXX0gZGVmYXVsdE9wdGlvbnMuc2Nyb2xsYWJsZUVsZW1lbnRzXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IGV4cG9ydHMuZGVmYXVsdE9wdGlvbnMgPSB7XG4gIHNwZWVkOiA2LFxuICBzZW5zaXRpdml0eTogNTAsXG4gIHNjcm9sbGFibGVFbGVtZW50czogW11cbn07XG5cbi8qKlxuICogU2Nyb2xsYWJsZSBwbHVnaW4gd2hpY2ggc2Nyb2xscyB0aGUgY2xvc2VzdCBzY3JvbGxhYmxlIHBhcmVudFxuICogQGNsYXNzIFNjcm9sbGFibGVcbiAqIEBtb2R1bGUgU2Nyb2xsYWJsZVxuICogQGV4dGVuZHMgQWJzdHJhY3RQbHVnaW5cbiAqL1xuY2xhc3MgU2Nyb2xsYWJsZSBleHRlbmRzIF9BYnN0cmFjdFBsdWdpbjIuZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBTY3JvbGxhYmxlIGNvbnN0cnVjdG9yLlxuICAgKiBAY29uc3RydWN0cyBTY3JvbGxhYmxlXG4gICAqIEBwYXJhbSB7RHJhZ2dhYmxlfSBkcmFnZ2FibGUgLSBEcmFnZ2FibGUgaW5zdGFuY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZSkge1xuICAgIHN1cGVyKGRyYWdnYWJsZSk7XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGxhYmxlIG9wdGlvbnNcbiAgICAgKiBAcHJvcGVydHkge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBvcHRpb25zLnNwZWVkXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IG9wdGlvbnMuc2Vuc2l0aXZpdHlcbiAgICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50W119IG9wdGlvbnMuc2Nyb2xsYWJsZUVsZW1lbnRzXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdGlvbnMsIHRoaXMuZ2V0T3B0aW9ucygpKTtcblxuICAgIC8qKlxuICAgICAqIEtlZXBzIGN1cnJlbnQgbW91c2UgcG9zaXRpb25cbiAgICAgKiBAcHJvcGVydHkge09iamVjdH0gY3VycmVudE1vdXNlUG9zaXRpb25cbiAgICAgKiBAcHJvcGVydHkge051bWJlcn0gY3VycmVudE1vdXNlUG9zaXRpb24uY2xpZW50WFxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBjdXJyZW50TW91c2VQb3NpdGlvbi5jbGllbnRZXG4gICAgICogQHR5cGUge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuY3VycmVudE1vdXNlUG9zaXRpb24gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIGFuaW1hdGlvbiBmcmFtZVxuICAgICAqIEBwcm9wZXJ0eSBzY3JvbGxBbmltYXRpb25GcmFtZVxuICAgICAqIEB0eXBlIHtOdW1iZXJ8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnNjcm9sbEFuaW1hdGlvbkZyYW1lID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIENsb3Nlc3Qgc2Nyb2xsYWJsZSBlbGVtZW50XG4gICAgICogQHByb3BlcnR5IHNjcm9sbGFibGVFbGVtZW50XG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fG51bGx9XG4gICAgICovXG4gICAgdGhpcy5zY3JvbGxhYmxlRWxlbWVudCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBbmltYXRpb24gZnJhbWUgbG9va2luZyBmb3IgdGhlIGNsb3Nlc3Qgc2Nyb2xsYWJsZSBlbGVtZW50XG4gICAgICogQHByb3BlcnR5IGZpbmRTY3JvbGxhYmxlRWxlbWVudEZyYW1lXG4gICAgICogQHR5cGUge051bWJlcnxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuZmluZFNjcm9sbGFibGVFbGVtZW50RnJhbWUgPSBudWxsO1xuXG4gICAgdGhpc1tvbkRyYWdTdGFydF0gPSB0aGlzW29uRHJhZ1N0YXJ0XS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnTW92ZV0gPSB0aGlzW29uRHJhZ01vdmVdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdTdG9wXSA9IHRoaXNbb25EcmFnU3RvcF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW3Njcm9sbF0gPSB0aGlzW3Njcm9sbF0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyBwbHVnaW5zIGV2ZW50IGxpc3RlbmVyc1xuICAgKi9cbiAgYXR0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9uKCdkcmFnOnN0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0pLm9uKCdkcmFnOm1vdmUnLCB0aGlzW29uRHJhZ01vdmVdKS5vbignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoZXMgcGx1Z2lucyBldmVudCBsaXN0ZW5lcnNcbiAgICovXG4gIGRldGFjaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS5vZmYoJ2RyYWc6c3RhcnQnLCB0aGlzW29uRHJhZ1N0YXJ0XSkub2ZmKCdkcmFnOm1vdmUnLCB0aGlzW29uRHJhZ01vdmVdKS5vZmYoJ2RyYWc6c3RvcCcsIHRoaXNbb25EcmFnU3RvcF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgb3B0aW9ucyBwYXNzZWQgdGhyb3VnaCBkcmFnZ2FibGVcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgZ2V0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGUub3B0aW9ucy5zY3JvbGxhYmxlIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY2xvc2VzdCBzY3JvbGxhYmxlIGVsZW1lbnRzIGJ5IGVsZW1lbnRcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgZ2V0U2Nyb2xsYWJsZUVsZW1lbnQodGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuaGFzRGVmaW5lZFNjcm9sbGFibGVFbGVtZW50cygpKSB7XG4gICAgICByZXR1cm4gKDAsIF91dGlscy5jbG9zZXN0KSh0YXJnZXQsIHRoaXMub3B0aW9ucy5zY3JvbGxhYmxlRWxlbWVudHMpIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNsb3Nlc3RTY3JvbGxhYmxlRWxlbWVudCh0YXJnZXQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYXQgbGVhc3Qgb25lIHNjcm9sbGFibGUgZWxlbWVudCBoYXZlIGJlZW4gZGVmaW5lZCB2aWEgb3B0aW9uc1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGhhc0RlZmluZWRTY3JvbGxhYmxlRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5vcHRpb25zLnNjcm9sbGFibGVFbGVtZW50cy5sZW5ndGggIT09IDApO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgc3RhcnQgaGFuZGxlci4gRmluZHMgY2xvc2VzdCBzY3JvbGxhYmxlIHBhcmVudCBpbiBzZXBhcmF0ZSBmcmFtZVxuICAgKiBAcGFyYW0ge0RyYWdTdGFydEV2ZW50fSBkcmFnRXZlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIFtvbkRyYWdTdGFydF0oZHJhZ0V2ZW50KSB7XG4gICAgdGhpcy5maW5kU2Nyb2xsYWJsZUVsZW1lbnRGcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnNjcm9sbGFibGVFbGVtZW50ID0gdGhpcy5nZXRTY3JvbGxhYmxlRWxlbWVudChkcmFnRXZlbnQuc291cmNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIG1vdmUgaGFuZGxlci4gUmVtZW1iZXJzIG1vdXNlIHBvc2l0aW9uIGFuZCBpbml0aWF0ZXMgc2Nyb2xsaW5nXG4gICAqIEBwYXJhbSB7RHJhZ01vdmVFdmVudH0gZHJhZ0V2ZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBbb25EcmFnTW92ZV0oZHJhZ0V2ZW50KSB7XG4gICAgdGhpcy5maW5kU2Nyb2xsYWJsZUVsZW1lbnRGcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnNjcm9sbGFibGVFbGVtZW50ID0gdGhpcy5nZXRTY3JvbGxhYmxlRWxlbWVudChkcmFnRXZlbnQuc2Vuc29yRXZlbnQudGFyZ2V0KTtcbiAgICB9KTtcblxuICAgIGlmICghdGhpcy5zY3JvbGxhYmxlRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbnNvckV2ZW50ID0gZHJhZ0V2ZW50LnNlbnNvckV2ZW50O1xuICAgIGNvbnN0IHNjcm9sbE9mZnNldCA9IHsgeDogMCwgeTogMCB9O1xuXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgc2Nyb2xsT2Zmc2V0LnkgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwO1xuICAgICAgc2Nyb2xsT2Zmc2V0LnggPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0IHx8IDA7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50TW91c2VQb3NpdGlvbiA9IHtcbiAgICAgIGNsaWVudFg6IHNlbnNvckV2ZW50LmNsaWVudFggLSBzY3JvbGxPZmZzZXQueCxcbiAgICAgIGNsaWVudFk6IHNlbnNvckV2ZW50LmNsaWVudFkgLSBzY3JvbGxPZmZzZXQueVxuICAgIH07XG5cbiAgICB0aGlzLnNjcm9sbEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXNbc2Nyb2xsXSk7XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBzdG9wIGhhbmRsZXIuIENhbmNlbHMgc2Nyb2xsIGFuaW1hdGlvbnMgYW5kIHJlc2V0cyBzdGF0ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgW29uRHJhZ1N0b3BdKCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc2Nyb2xsQW5pbWF0aW9uRnJhbWUpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZmluZFNjcm9sbGFibGVFbGVtZW50RnJhbWUpO1xuXG4gICAgdGhpcy5zY3JvbGxhYmxlRWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5zY3JvbGxBbmltYXRpb25GcmFtZSA9IG51bGw7XG4gICAgdGhpcy5maW5kU2Nyb2xsYWJsZUVsZW1lbnRGcmFtZSA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50TW91c2VQb3NpdGlvbiA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xsIGZ1bmN0aW9uIHRoYXQgZG9lcyB0aGUgaGVhdnlsaWZ0aW5nXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBbc2Nyb2xsXSgpIHtcbiAgICBpZiAoIXRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQgfHwgIXRoaXMuY3VycmVudE1vdXNlUG9zaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnNjcm9sbEFuaW1hdGlvbkZyYW1lKTtcblxuICAgIGNvbnN0IHsgc3BlZWQsIHNlbnNpdGl2aXR5IH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBjb25zdCByZWN0ID0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBib3R0b21DdXRPZmYgPSByZWN0LmJvdHRvbSA+IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjb25zdCB0b3BDdXRPZmYgPSByZWN0LnRvcCA8IDA7XG4gICAgY29uc3QgY3V0T2ZmID0gdG9wQ3V0T2ZmIHx8IGJvdHRvbUN1dE9mZjtcblxuICAgIGNvbnN0IGRvY3VtZW50U2Nyb2xsaW5nRWxlbWVudCA9IGdldERvY3VtZW50U2Nyb2xsaW5nRWxlbWVudCgpO1xuICAgIGNvbnN0IHNjcm9sbGFibGVFbGVtZW50ID0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudDtcbiAgICBjb25zdCBjbGllbnRYID0gdGhpcy5jdXJyZW50TW91c2VQb3NpdGlvbi5jbGllbnRYO1xuICAgIGNvbnN0IGNsaWVudFkgPSB0aGlzLmN1cnJlbnRNb3VzZVBvc2l0aW9uLmNsaWVudFk7XG5cbiAgICBpZiAoc2Nyb2xsYWJsZUVsZW1lbnQgIT09IGRvY3VtZW50LmJvZHkgJiYgc2Nyb2xsYWJsZUVsZW1lbnQgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiAhY3V0T2ZmKSB7XG4gICAgICBjb25zdCB7IG9mZnNldEhlaWdodCwgb2Zmc2V0V2lkdGggfSA9IHNjcm9sbGFibGVFbGVtZW50O1xuXG4gICAgICBpZiAocmVjdC50b3AgKyBvZmZzZXRIZWlnaHQgLSBjbGllbnRZIDwgc2Vuc2l0aXZpdHkpIHtcbiAgICAgICAgc2Nyb2xsYWJsZUVsZW1lbnQuc2Nyb2xsVG9wICs9IHNwZWVkO1xuICAgICAgfSBlbHNlIGlmIChjbGllbnRZIC0gcmVjdC50b3AgPCBzZW5zaXRpdml0eSkge1xuICAgICAgICBzY3JvbGxhYmxlRWxlbWVudC5zY3JvbGxUb3AgLT0gc3BlZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWN0LmxlZnQgKyBvZmZzZXRXaWR0aCAtIGNsaWVudFggPCBzZW5zaXRpdml0eSkge1xuICAgICAgICBzY3JvbGxhYmxlRWxlbWVudC5zY3JvbGxMZWZ0ICs9IHNwZWVkO1xuICAgICAgfSBlbHNlIGlmIChjbGllbnRYIC0gcmVjdC5sZWZ0IDwgc2Vuc2l0aXZpdHkpIHtcbiAgICAgICAgc2Nyb2xsYWJsZUVsZW1lbnQuc2Nyb2xsTGVmdCAtPSBzcGVlZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBpbm5lckhlaWdodCwgaW5uZXJXaWR0aCB9ID0gd2luZG93O1xuXG4gICAgICBpZiAoY2xpZW50WSA8IHNlbnNpdGl2aXR5KSB7XG4gICAgICAgIGRvY3VtZW50U2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgLT0gc3BlZWQ7XG4gICAgICB9IGVsc2UgaWYgKGlubmVySGVpZ2h0IC0gY2xpZW50WSA8IHNlbnNpdGl2aXR5KSB7XG4gICAgICAgIGRvY3VtZW50U2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgKz0gc3BlZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChjbGllbnRYIDwgc2Vuc2l0aXZpdHkpIHtcbiAgICAgICAgZG9jdW1lbnRTY3JvbGxpbmdFbGVtZW50LnNjcm9sbExlZnQgLT0gc3BlZWQ7XG4gICAgICB9IGVsc2UgaWYgKGlubmVyV2lkdGggLSBjbGllbnRYIDwgc2Vuc2l0aXZpdHkpIHtcbiAgICAgICAgZG9jdW1lbnRTY3JvbGxpbmdFbGVtZW50LnNjcm9sbExlZnQgKz0gc3BlZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGxBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzW3Njcm9sbF0pO1xuICB9XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNjcm9sbGFibGU7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgZWxlbWVudCBoYXMgb3ZlcmZsb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbmZ1bmN0aW9uIGhhc092ZXJmbG93KGVsZW1lbnQpIHtcbiAgY29uc3Qgb3ZlcmZsb3dSZWdleCA9IC8oYXV0b3xzY3JvbGwpLztcbiAgY29uc3QgY29tcHV0ZWRTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpO1xuXG4gIGNvbnN0IG92ZXJmbG93ID0gY29tcHV0ZWRTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnb3ZlcmZsb3cnKSArIGNvbXB1dGVkU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ292ZXJmbG93LXknKSArIGNvbXB1dGVkU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ292ZXJmbG93LXgnKTtcblxuICByZXR1cm4gb3ZlcmZsb3dSZWdleC50ZXN0KG92ZXJmbG93KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCBlbGVtZW50IGlzIHN0YXRpY2FsbHkgcG9zaXRpb25lZFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzU3RhdGljYWxseVBvc2l0aW9uZWQoZWxlbWVudCkge1xuICBjb25zdCBwb3NpdGlvbiA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKTtcbiAgcmV0dXJuIHBvc2l0aW9uID09PSAnc3RhdGljJztcbn1cblxuLyoqXG4gKiBGaW5kcyBjbG9zZXN0IHNjcm9sbGFibGUgZWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjbG9zZXN0U2Nyb2xsYWJsZUVsZW1lbnQoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0RG9jdW1lbnRTY3JvbGxpbmdFbGVtZW50KCk7XG4gIH1cblxuICBjb25zdCBwb3NpdGlvbiA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgZXhjbHVkZVN0YXRpY1BhcmVudHMgPSBwb3NpdGlvbiA9PT0gJ2Fic29sdXRlJztcblxuICBjb25zdCBzY3JvbGxhYmxlRWxlbWVudCA9ICgwLCBfdXRpbHMuY2xvc2VzdCkoZWxlbWVudCwgcGFyZW50ID0+IHtcbiAgICBpZiAoZXhjbHVkZVN0YXRpY1BhcmVudHMgJiYgaXNTdGF0aWNhbGx5UG9zaXRpb25lZChwYXJlbnQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBoYXNPdmVyZmxvdyhwYXJlbnQpO1xuICB9KTtcblxuICBpZiAocG9zaXRpb24gPT09ICdmaXhlZCcgfHwgIXNjcm9sbGFibGVFbGVtZW50KSB7XG4gICAgcmV0dXJuIGdldERvY3VtZW50U2Nyb2xsaW5nRWxlbWVudCgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzY3JvbGxhYmxlRWxlbWVudDtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgZWxlbWVudCB0aGF0IHNjcm9sbHMgZG9jdW1lbnRcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0RG9jdW1lbnRTY3JvbGxpbmdFbGVtZW50KCkge1xuICByZXR1cm4gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG59XG5cbi8qKiovIH0pLFxuLyogNTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdE9wdGlvbnMgPSB1bmRlZmluZWQ7XG5cbnZhciBfU2Nyb2xsYWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oNTIpO1xuXG52YXIgX1Njcm9sbGFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2Nyb2xsYWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9TY3JvbGxhYmxlMi5kZWZhdWx0O1xuZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IF9TY3JvbGxhYmxlLmRlZmF1bHRPcHRpb25zO1xuXG4vKioqLyB9KSxcbi8qIDU0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLk1pcnJvckRlc3Ryb3lFdmVudCA9IGV4cG9ydHMuTWlycm9yTW92ZUV2ZW50ID0gZXhwb3J0cy5NaXJyb3JBdHRhY2hlZEV2ZW50ID0gZXhwb3J0cy5NaXJyb3JDcmVhdGVkRXZlbnQgPSBleHBvcnRzLk1pcnJvckNyZWF0ZUV2ZW50ID0gZXhwb3J0cy5NaXJyb3JFdmVudCA9IHVuZGVmaW5lZDtcblxudmFyIF9BYnN0cmFjdEV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9BYnN0cmFjdEV2ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Fic3RyYWN0RXZlbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIEJhc2UgbWlycm9yIGV2ZW50XG4gKiBAY2xhc3MgTWlycm9yRXZlbnRcbiAqIEBtb2R1bGUgTWlycm9yRXZlbnRcbiAqIEBleHRlbmRzIEFic3RyYWN0RXZlbnRcbiAqL1xuY2xhc3MgTWlycm9yRXZlbnQgZXh0ZW5kcyBfQWJzdHJhY3RFdmVudDIuZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBEcmFnZ2FibGVzIHNvdXJjZSBlbGVtZW50XG4gICAqIEBwcm9wZXJ0eSBzb3VyY2VcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBzb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zb3VyY2U7XG4gIH1cblxuICAvKipcbiAgICogRHJhZ2dhYmxlcyBvcmlnaW5hbCBzb3VyY2UgZWxlbWVudFxuICAgKiBAcHJvcGVydHkgb3JpZ2luYWxTb3VyY2VcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBvcmlnaW5hbFNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm9yaWdpbmFsU291cmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWdnYWJsZXMgc291cmNlIGNvbnRhaW5lciBlbGVtZW50XG4gICAqIEBwcm9wZXJ0eSBzb3VyY2VDb250YWluZXJcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBzb3VyY2VDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zb3VyY2VDb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogU2Vuc29yIGV2ZW50XG4gICAqIEBwcm9wZXJ0eSBzZW5zb3JFdmVudFxuICAgKiBAdHlwZSB7U2Vuc29yRXZlbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IHNlbnNvckV2ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuc2Vuc29yRXZlbnQ7XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBldmVudFxuICAgKiBAcHJvcGVydHkgZHJhZ0V2ZW50XG4gICAqIEB0eXBlIHtEcmFnRXZlbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IGRyYWdFdmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmRyYWdFdmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcmlnaW5hbCBldmVudCB0aGF0IHRyaWdnZXJlZCBzZW5zb3IgZXZlbnRcbiAgICogQHByb3BlcnR5IG9yaWdpbmFsRXZlbnRcbiAgICogQHR5cGUge0V2ZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBvcmlnaW5hbEV2ZW50KCkge1xuICAgIGlmICh0aGlzLnNlbnNvckV2ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZW5zb3JFdmVudC5vcmlnaW5hbEV2ZW50O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMuTWlycm9yRXZlbnQgPSBNaXJyb3JFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIE1pcnJvciBjcmVhdGUgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIE1pcnJvckNyZWF0ZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtb2R1bGUgTWlycm9yQ3JlYXRlRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGV4dGVuZHMgTWlycm9yRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbmNsYXNzIE1pcnJvckNyZWF0ZUV2ZW50IGV4dGVuZHMgTWlycm9yRXZlbnQge31cblxuZXhwb3J0cy5NaXJyb3JDcmVhdGVFdmVudCA9IE1pcnJvckNyZWF0ZUV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogTWlycm9yIGNyZWF0ZWQgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIE1pcnJvckNyZWF0ZWRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIE1pcnJvckNyZWF0ZWRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXh0ZW5kcyBNaXJyb3JFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuTWlycm9yQ3JlYXRlRXZlbnQudHlwZSA9ICdtaXJyb3I6Y3JlYXRlJztcbmNsYXNzIE1pcnJvckNyZWF0ZWRFdmVudCBleHRlbmRzIE1pcnJvckV2ZW50IHtcblxuICAvKipcbiAgICogRHJhZ2dhYmxlcyBtaXJyb3IgZWxlbWVudFxuICAgKiBAcHJvcGVydHkgbWlycm9yXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgbWlycm9yKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubWlycm9yO1xuICB9XG59XG5cbmV4cG9ydHMuTWlycm9yQ3JlYXRlZEV2ZW50ID0gTWlycm9yQ3JlYXRlZEV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBNaXJyb3IgYXR0YWNoZWQgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgTWlycm9yQXR0YWNoZWRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtb2R1bGUgTWlycm9yQXR0YWNoZWRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIE1pcnJvckV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbk1pcnJvckNyZWF0ZWRFdmVudC50eXBlID0gJ21pcnJvcjpjcmVhdGVkJztcbmNsYXNzIE1pcnJvckF0dGFjaGVkRXZlbnQgZXh0ZW5kcyBNaXJyb3JFdmVudCB7XG5cbiAgLyoqXG4gICAqIERyYWdnYWJsZXMgbWlycm9yIGVsZW1lbnRcbiAgICogQHByb3BlcnR5IG1pcnJvclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IG1pcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm1pcnJvcjtcbiAgfVxufVxuXG5leHBvcnRzLk1pcnJvckF0dGFjaGVkRXZlbnQgPSBNaXJyb3JBdHRhY2hlZEV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIE1pcnJvciBtb3ZlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgTWlycm9yTW92ZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIE1pcnJvck1vdmVFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGV4dGVuZHMgTWlycm9yRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5NaXJyb3JBdHRhY2hlZEV2ZW50LnR5cGUgPSAnbWlycm9yOmF0dGFjaGVkJztcbmNsYXNzIE1pcnJvck1vdmVFdmVudCBleHRlbmRzIE1pcnJvckV2ZW50IHtcblxuICAvKipcbiAgICogRHJhZ2dhYmxlcyBtaXJyb3IgZWxlbWVudFxuICAgKiBAcHJvcGVydHkgbWlycm9yXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgbWlycm9yKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubWlycm9yO1xuICB9XG59XG5cbmV4cG9ydHMuTWlycm9yTW92ZUV2ZW50ID0gTWlycm9yTW92ZUV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBNaXJyb3IgZGVzdHJveSBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzcyBNaXJyb3JEZXN0cm95RXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIE1pcnJvckRlc3Ryb3lFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIE1pcnJvckV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbk1pcnJvck1vdmVFdmVudC50eXBlID0gJ21pcnJvcjptb3ZlJztcbk1pcnJvck1vdmVFdmVudC5jYW5jZWxhYmxlID0gdHJ1ZTtcbmNsYXNzIE1pcnJvckRlc3Ryb3lFdmVudCBleHRlbmRzIE1pcnJvckV2ZW50IHtcblxuICAvKipcbiAgICogRHJhZ2dhYmxlcyBtaXJyb3IgZWxlbWVudFxuICAgKiBAcHJvcGVydHkgbWlycm9yXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgbWlycm9yKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubWlycm9yO1xuICB9XG59XG5leHBvcnRzLk1pcnJvckRlc3Ryb3lFdmVudCA9IE1pcnJvckRlc3Ryb3lFdmVudDtcbk1pcnJvckRlc3Ryb3lFdmVudC50eXBlID0gJ21pcnJvcjpkZXN0cm95Jztcbk1pcnJvckRlc3Ryb3lFdmVudC5jYW5jZWxhYmxlID0gdHJ1ZTtcblxuLyoqKi8gfSksXG4vKiA1NSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX01pcnJvckV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1NCk7XG5cbk9iamVjdC5rZXlzKF9NaXJyb3JFdmVudCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX01pcnJvckV2ZW50W2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG4vKioqLyB9KSxcbi8qIDU2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHRPcHRpb25zID0gZXhwb3J0cy5nZXRBcHBlbmRhYmxlQ29udGFpbmVyID0gZXhwb3J0cy5vblNjcm9sbCA9IGV4cG9ydHMub25NaXJyb3JNb3ZlID0gZXhwb3J0cy5vbk1pcnJvckNyZWF0ZWQgPSBleHBvcnRzLm9uRHJhZ1N0b3AgPSBleHBvcnRzLm9uRHJhZ01vdmUgPSBleHBvcnRzLm9uRHJhZ1N0YXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX0Fic3RyYWN0UGx1Z2luID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9BYnN0cmFjdFBsdWdpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BYnN0cmFjdFBsdWdpbik7XG5cbnZhciBfTWlycm9yRXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU1KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5jb25zdCBvbkRyYWdTdGFydCA9IGV4cG9ydHMub25EcmFnU3RhcnQgPSBTeW1ib2woJ29uRHJhZ1N0YXJ0Jyk7XG5jb25zdCBvbkRyYWdNb3ZlID0gZXhwb3J0cy5vbkRyYWdNb3ZlID0gU3ltYm9sKCdvbkRyYWdNb3ZlJyk7XG5jb25zdCBvbkRyYWdTdG9wID0gZXhwb3J0cy5vbkRyYWdTdG9wID0gU3ltYm9sKCdvbkRyYWdTdG9wJyk7XG5jb25zdCBvbk1pcnJvckNyZWF0ZWQgPSBleHBvcnRzLm9uTWlycm9yQ3JlYXRlZCA9IFN5bWJvbCgnb25NaXJyb3JDcmVhdGVkJyk7XG5jb25zdCBvbk1pcnJvck1vdmUgPSBleHBvcnRzLm9uTWlycm9yTW92ZSA9IFN5bWJvbCgnb25NaXJyb3JNb3ZlJyk7XG5jb25zdCBvblNjcm9sbCA9IGV4cG9ydHMub25TY3JvbGwgPSBTeW1ib2woJ29uU2Nyb2xsJyk7XG5jb25zdCBnZXRBcHBlbmRhYmxlQ29udGFpbmVyID0gZXhwb3J0cy5nZXRBcHBlbmRhYmxlQ29udGFpbmVyID0gU3ltYm9sKCdnZXRBcHBlbmRhYmxlQ29udGFpbmVyJyk7XG5cbi8qKlxuICogTWlycm9yIGRlZmF1bHQgb3B0aW9uc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRlZmF1bHRPcHRpb25zXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGRlZmF1bHRPcHRpb25zLmNvbnN0cmFpbkRpbWVuc2lvbnNcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGVmYXVsdE9wdGlvbnMueEF4aXNcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGVmYXVsdE9wdGlvbnMueUF4aXNcbiAqIEBwcm9wZXJ0eSB7bnVsbH0gZGVmYXVsdE9wdGlvbnMuY3Vyc29yT2Zmc2V0WFxuICogQHByb3BlcnR5IHtudWxsfSBkZWZhdWx0T3B0aW9ucy5jdXJzb3JPZmZzZXRZXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IGV4cG9ydHMuZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGNvbnN0cmFpbkRpbWVuc2lvbnM6IGZhbHNlLFxuICB4QXhpczogdHJ1ZSxcbiAgeUF4aXM6IHRydWUsXG4gIGN1cnNvck9mZnNldFg6IG51bGwsXG4gIGN1cnNvck9mZnNldFk6IG51bGxcbn07XG5cbi8qKlxuICogTWlycm9yIHBsdWdpbiB3aGljaCBjb250cm9scyB0aGUgbWlycm9yIHBvc2l0aW9uaW5nIHdoaWxlIGRyYWdnaW5nXG4gKiBAY2xhc3MgTWlycm9yXG4gKiBAbW9kdWxlIE1pcnJvclxuICogQGV4dGVuZHMgQWJzdHJhY3RQbHVnaW5cbiAqL1xuY2xhc3MgTWlycm9yIGV4dGVuZHMgX0Fic3RyYWN0UGx1Z2luMi5kZWZhdWx0IHtcbiAgLyoqXG4gICAqIE1pcnJvciBjb25zdHJ1Y3Rvci5cbiAgICogQGNvbnN0cnVjdHMgTWlycm9yXG4gICAqIEBwYXJhbSB7RHJhZ2dhYmxlfSBkcmFnZ2FibGUgLSBEcmFnZ2FibGUgaW5zdGFuY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZSkge1xuICAgIHN1cGVyKGRyYWdnYWJsZSk7XG5cbiAgICAvKipcbiAgICAgKiBNaXJyb3Igb3B0aW9uc1xuICAgICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSBvcHRpb25zLmNvbnN0cmFpbkRpbWVuc2lvbnNcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IG9wdGlvbnMueEF4aXNcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IG9wdGlvbnMueUF4aXNcbiAgICAgKiBAcHJvcGVydHkge051bWJlcnxudWxsfSBvcHRpb25zLmN1cnNvck9mZnNldFhcbiAgICAgKiBAcHJvcGVydHkge051bWJlcnxudWxsfSBvcHRpb25zLmN1cnNvck9mZnNldFlcbiAgICAgKiBAcHJvcGVydHkge1N0cmluZ3xIVE1MRWxlbWVudHxGdW5jdGlvbn0gb3B0aW9ucy5hcHBlbmRUb1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5vcHRpb25zID0gX2V4dGVuZHMoe30sIGRlZmF1bHRPcHRpb25zLCB0aGlzLmdldE9wdGlvbnMoKSk7XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgb2Zmc2V0IGZvciB0b3VjaCBkZXZpY2VzIGJlY2F1c2UgdGhlIG1pcnJvciBpcyBwb3NpdGlvbmVkIGZpeGVkXG4gICAgICogQHByb3BlcnR5IHtPYmplY3R9IHNjcm9sbE9mZnNldFxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBzY3JvbGxPZmZzZXQueFxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBzY3JvbGxPZmZzZXQueVxuICAgICAqL1xuICAgIHRoaXMuc2Nyb2xsT2Zmc2V0ID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsIHNjcm9sbCBvZmZzZXQgZm9yIHRvdWNoIGRldmljZXMgYmVjYXVzZSB0aGUgbWlycm9yIGlzIHBvc2l0aW9uZWQgZml4ZWRcbiAgICAgKiBAcHJvcGVydHkge09iamVjdH0gc2Nyb2xsT2Zmc2V0XG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHNjcm9sbE9mZnNldC54XG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHNjcm9sbE9mZnNldC55XG4gICAgICovXG4gICAgdGhpcy5pbml0aWFsU2Nyb2xsT2Zmc2V0ID0ge1xuICAgICAgeDogd2luZG93LnNjcm9sbFgsXG4gICAgICB5OiB3aW5kb3cuc2Nyb2xsWVxuICAgIH07XG5cbiAgICB0aGlzW29uRHJhZ1N0YXJ0XSA9IHRoaXNbb25EcmFnU3RhcnRdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdNb3ZlXSA9IHRoaXNbb25EcmFnTW92ZV0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ1N0b3BdID0gdGhpc1tvbkRyYWdTdG9wXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25NaXJyb3JDcmVhdGVkXSA9IHRoaXNbb25NaXJyb3JDcmVhdGVkXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25NaXJyb3JNb3ZlXSA9IHRoaXNbb25NaXJyb3JNb3ZlXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25TY3JvbGxdID0gdGhpc1tvblNjcm9sbF0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyBwbHVnaW5zIGV2ZW50IGxpc3RlbmVyc1xuICAgKi9cbiAgYXR0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9uKCdkcmFnOnN0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0pLm9uKCdkcmFnOm1vdmUnLCB0aGlzW29uRHJhZ01vdmVdKS5vbignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSkub24oJ21pcnJvcjpjcmVhdGVkJywgdGhpc1tvbk1pcnJvckNyZWF0ZWRdKS5vbignbWlycm9yOm1vdmUnLCB0aGlzW29uTWlycm9yTW92ZV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaGVzIHBsdWdpbnMgZXZlbnQgbGlzdGVuZXJzXG4gICAqL1xuICBkZXRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub2ZmKCdkcmFnOnN0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0pLm9mZignZHJhZzptb3ZlJywgdGhpc1tvbkRyYWdNb3ZlXSkub2ZmKCdkcmFnOnN0b3AnLCB0aGlzW29uRHJhZ1N0b3BdKS5vZmYoJ21pcnJvcjpjcmVhdGVkJywgdGhpc1tvbk1pcnJvckNyZWF0ZWRdKS5vZmYoJ21pcnJvcjptb3ZlJywgdGhpc1tvbk1pcnJvck1vdmVdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIG9wdGlvbnMgcGFzc2VkIHRocm91Z2ggZHJhZ2dhYmxlXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGdldE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlLm9wdGlvbnMubWlycm9yIHx8IHt9O1xuICB9XG5cbiAgW29uRHJhZ1N0YXJ0XShkcmFnRXZlbnQpIHtcbiAgICBpZiAoZHJhZ0V2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzW29uU2Nyb2xsXSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0aWFsU2Nyb2xsT2Zmc2V0ID0ge1xuICAgICAgeDogd2luZG93LnNjcm9sbFgsXG4gICAgICB5OiB3aW5kb3cuc2Nyb2xsWVxuICAgIH07XG5cbiAgICBjb25zdCB7IHNvdXJjZSwgb3JpZ2luYWxTb3VyY2UsIHNvdXJjZUNvbnRhaW5lciwgc2Vuc29yRXZlbnQgfSA9IGRyYWdFdmVudDtcblxuICAgIGNvbnN0IG1pcnJvckNyZWF0ZUV2ZW50ID0gbmV3IF9NaXJyb3JFdmVudC5NaXJyb3JDcmVhdGVFdmVudCh7XG4gICAgICBzb3VyY2UsXG4gICAgICBvcmlnaW5hbFNvdXJjZSxcbiAgICAgIHNvdXJjZUNvbnRhaW5lcixcbiAgICAgIHNlbnNvckV2ZW50LFxuICAgICAgZHJhZ0V2ZW50XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyYWdnYWJsZS50cmlnZ2VyKG1pcnJvckNyZWF0ZUV2ZW50KTtcblxuICAgIGlmIChpc05hdGl2ZURyYWdFdmVudChzZW5zb3JFdmVudCkgfHwgbWlycm9yQ3JlYXRlRXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcGVuZGFibGVDb250YWluZXIgPSB0aGlzW2dldEFwcGVuZGFibGVDb250YWluZXJdKHNvdXJjZSkgfHwgc291cmNlQ29udGFpbmVyO1xuICAgIHRoaXMubWlycm9yID0gc291cmNlLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIGNvbnN0IG1pcnJvckNyZWF0ZWRFdmVudCA9IG5ldyBfTWlycm9yRXZlbnQuTWlycm9yQ3JlYXRlZEV2ZW50KHtcbiAgICAgIHNvdXJjZSxcbiAgICAgIG9yaWdpbmFsU291cmNlLFxuICAgICAgc291cmNlQ29udGFpbmVyLFxuICAgICAgc2Vuc29yRXZlbnQsXG4gICAgICBkcmFnRXZlbnQsXG4gICAgICBtaXJyb3I6IHRoaXMubWlycm9yXG4gICAgfSk7XG5cbiAgICBjb25zdCBtaXJyb3JBdHRhY2hlZEV2ZW50ID0gbmV3IF9NaXJyb3JFdmVudC5NaXJyb3JBdHRhY2hlZEV2ZW50KHtcbiAgICAgIHNvdXJjZSxcbiAgICAgIG9yaWdpbmFsU291cmNlLFxuICAgICAgc291cmNlQ29udGFpbmVyLFxuICAgICAgc2Vuc29yRXZlbnQsXG4gICAgICBkcmFnRXZlbnQsXG4gICAgICBtaXJyb3I6IHRoaXMubWlycm9yXG4gICAgfSk7XG5cbiAgICB0aGlzLmRyYWdnYWJsZS50cmlnZ2VyKG1pcnJvckNyZWF0ZWRFdmVudCk7XG4gICAgYXBwZW5kYWJsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1pcnJvcik7XG4gICAgdGhpcy5kcmFnZ2FibGUudHJpZ2dlcihtaXJyb3JBdHRhY2hlZEV2ZW50KTtcbiAgfVxuXG4gIFtvbkRyYWdNb3ZlXShkcmFnRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMubWlycm9yIHx8IGRyYWdFdmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBzb3VyY2UsIG9yaWdpbmFsU291cmNlLCBzb3VyY2VDb250YWluZXIsIHNlbnNvckV2ZW50IH0gPSBkcmFnRXZlbnQ7XG5cbiAgICBjb25zdCBtaXJyb3JNb3ZlRXZlbnQgPSBuZXcgX01pcnJvckV2ZW50Lk1pcnJvck1vdmVFdmVudCh7XG4gICAgICBzb3VyY2UsXG4gICAgICBvcmlnaW5hbFNvdXJjZSxcbiAgICAgIHNvdXJjZUNvbnRhaW5lcixcbiAgICAgIHNlbnNvckV2ZW50LFxuICAgICAgZHJhZ0V2ZW50LFxuICAgICAgbWlycm9yOiB0aGlzLm1pcnJvclxuICAgIH0pO1xuXG4gICAgdGhpcy5kcmFnZ2FibGUudHJpZ2dlcihtaXJyb3JNb3ZlRXZlbnQpO1xuICB9XG5cbiAgW29uRHJhZ1N0b3BdKGRyYWdFdmVudCkge1xuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXNbb25TY3JvbGxdLCB0cnVlKTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRpYWxTY3JvbGxPZmZzZXQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICB0aGlzLnNjcm9sbE9mZnNldCA9IHsgeDogMCwgeTogMCB9O1xuXG4gICAgaWYgKCF0aGlzLm1pcnJvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgc291cmNlLCBzb3VyY2VDb250YWluZXIsIHNlbnNvckV2ZW50IH0gPSBkcmFnRXZlbnQ7XG5cbiAgICBjb25zdCBtaXJyb3JEZXN0cm95RXZlbnQgPSBuZXcgX01pcnJvckV2ZW50Lk1pcnJvckRlc3Ryb3lFdmVudCh7XG4gICAgICBzb3VyY2UsXG4gICAgICBtaXJyb3I6IHRoaXMubWlycm9yLFxuICAgICAgc291cmNlQ29udGFpbmVyLFxuICAgICAgc2Vuc29yRXZlbnQsXG4gICAgICBkcmFnRXZlbnRcbiAgICB9KTtcblxuICAgIHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXIobWlycm9yRGVzdHJveUV2ZW50KTtcblxuICAgIGlmICghbWlycm9yRGVzdHJveUV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHRoaXMubWlycm9yLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5taXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIFtvblNjcm9sbF0oKSB7XG4gICAgdGhpcy5zY3JvbGxPZmZzZXQgPSB7XG4gICAgICB4OiB3aW5kb3cuc2Nyb2xsWCAtIHRoaXMuaW5pdGlhbFNjcm9sbE9mZnNldC54LFxuICAgICAgeTogd2luZG93LnNjcm9sbFkgLSB0aGlzLmluaXRpYWxTY3JvbGxPZmZzZXQueVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTWlycm9yIGNyZWF0ZWQgaGFuZGxlclxuICAgKiBAcGFyYW0ge01pcnJvckNyZWF0ZWRFdmVudH0gbWlycm9yRXZlbnRcbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIFtvbk1pcnJvckNyZWF0ZWRdKHsgbWlycm9yLCBzb3VyY2UsIHNlbnNvckV2ZW50IH0pIHtcbiAgICBjb25zdCBtaXJyb3JDbGFzcyA9IHRoaXMuZHJhZ2dhYmxlLmdldENsYXNzTmFtZUZvcignbWlycm9yJyk7XG5cbiAgICBjb25zdCBzZXRTdGF0ZSA9IChfcmVmKSA9PiB7XG4gICAgICBsZXQgeyBtaXJyb3JPZmZzZXQsIGluaXRpYWxYLCBpbml0aWFsWSB9ID0gX3JlZixcbiAgICAgICAgICBhcmdzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnbWlycm9yT2Zmc2V0JywgJ2luaXRpYWxYJywgJ2luaXRpYWxZJ10pO1xuXG4gICAgICB0aGlzLm1pcnJvck9mZnNldCA9IG1pcnJvck9mZnNldDtcbiAgICAgIHRoaXMuaW5pdGlhbFggPSBpbml0aWFsWDtcbiAgICAgIHRoaXMuaW5pdGlhbFkgPSBpbml0aWFsWTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7IG1pcnJvck9mZnNldCwgaW5pdGlhbFgsIGluaXRpYWxZIH0sIGFyZ3MpO1xuICAgIH07XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgICBtaXJyb3IsXG4gICAgICBzb3VyY2UsXG4gICAgICBzZW5zb3JFdmVudCxcbiAgICAgIG1pcnJvckNsYXNzLFxuICAgICAgc2Nyb2xsT2Zmc2V0OiB0aGlzLnNjcm9sbE9mZnNldCxcbiAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9uc1xuICAgIH07XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGluaXRpYWxTdGF0ZSlcbiAgICAvLyBGaXggcmVmbG93IGhlcmVcbiAgICAudGhlbihjb21wdXRlTWlycm9yRGltZW5zaW9ucykudGhlbihjYWxjdWxhdGVNaXJyb3JPZmZzZXQpLnRoZW4ocmVzZXRNaXJyb3IpLnRoZW4oYWRkTWlycm9yQ2xhc3NlcykudGhlbihwb3NpdGlvbk1pcnJvcih7IGluaXRpYWw6IHRydWUgfSkpLnRoZW4ocmVtb3ZlTWlycm9ySUQpLnRoZW4oc2V0U3RhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1pcnJvciBtb3ZlIGhhbmRsZXJcbiAgICogQHBhcmFtIHtNaXJyb3JNb3ZlRXZlbnR9IG1pcnJvckV2ZW50XG4gICAqIEByZXR1cm4ge1Byb21pc2V8bnVsbH1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIFtvbk1pcnJvck1vdmVdKG1pcnJvckV2ZW50KSB7XG4gICAgaWYgKG1pcnJvckV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgIG1pcnJvcjogbWlycm9yRXZlbnQubWlycm9yLFxuICAgICAgc2Vuc29yRXZlbnQ6IG1pcnJvckV2ZW50LnNlbnNvckV2ZW50LFxuICAgICAgbWlycm9yT2Zmc2V0OiB0aGlzLm1pcnJvck9mZnNldCxcbiAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgIGluaXRpYWxYOiB0aGlzLmluaXRpYWxYLFxuICAgICAgaW5pdGlhbFk6IHRoaXMuaW5pdGlhbFksXG4gICAgICBzY3JvbGxPZmZzZXQ6IHRoaXMuc2Nyb2xsT2Zmc2V0XG4gICAgfTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaW5pdGlhbFN0YXRlKS50aGVuKHBvc2l0aW9uTWlycm9yKHsgcmFmOiB0cnVlIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFwcGVuZGFibGUgY29udGFpbmVyIGZvciBtaXJyb3IgYmFzZWQgb24gdGhlIGFwcGVuZFRvIG9wdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBvcHRpb25zLnNvdXJjZSAtIEN1cnJlbnQgc291cmNlXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgW2dldEFwcGVuZGFibGVDb250YWluZXJdKHNvdXJjZSkge1xuICAgIGNvbnN0IGFwcGVuZFRvID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvO1xuXG4gICAgaWYgKHR5cGVvZiBhcHBlbmRUbyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGFwcGVuZFRvKTtcbiAgICB9IGVsc2UgaWYgKGFwcGVuZFRvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBhcHBlbmRUbztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcHBlbmRUbyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGFwcGVuZFRvKHNvdXJjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzb3VyY2UucGFyZW50Tm9kZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gTWlycm9yOyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICogQ29tcHV0ZXMgbWlycm9yIGRpbWVuc2lvbnMgYmFzZWQgb24gdGhlIHNvdXJjZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqIEFkZHMgc291cmNlUmVjdCB0byBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gc3RhdGUuc291cmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5mdW5jdGlvbiBjb21wdXRlTWlycm9yRGltZW5zaW9ucyhfcmVmMikge1xuICBsZXQgeyBzb3VyY2UgfSA9IF9yZWYyLFxuICAgICAgYXJncyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMiwgWydzb3VyY2UnXSk7XG5cbiAgcmV0dXJuIHdpdGhQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGNvbnN0IHNvdXJjZVJlY3QgPSBzb3VyY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmVzb2x2ZShfZXh0ZW5kcyh7IHNvdXJjZSwgc291cmNlUmVjdCB9LCBhcmdzKSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgbWlycm9yIG9mZnNldFxuICogQWRkcyBtaXJyb3JPZmZzZXQgdG8gc3RhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtTZW5zb3JFdmVudH0gc3RhdGUuc2Vuc29yRXZlbnRcbiAqIEBwYXJhbSB7RE9NUmVjdH0gc3RhdGUuc291cmNlUmVjdFxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNhbGN1bGF0ZU1pcnJvck9mZnNldChfcmVmMykge1xuICBsZXQgeyBzZW5zb3JFdmVudCwgc291cmNlUmVjdCwgb3B0aW9ucyB9ID0gX3JlZjMsXG4gICAgICBhcmdzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYzLCBbJ3NlbnNvckV2ZW50JywgJ3NvdXJjZVJlY3QnLCAnb3B0aW9ucyddKTtcblxuICByZXR1cm4gd2l0aFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgY29uc3QgdG9wID0gb3B0aW9ucy5jdXJzb3JPZmZzZXRZID09PSBudWxsID8gc2Vuc29yRXZlbnQuY2xpZW50WSAtIHNvdXJjZVJlY3QudG9wIDogb3B0aW9ucy5jdXJzb3JPZmZzZXRZO1xuICAgIGNvbnN0IGxlZnQgPSBvcHRpb25zLmN1cnNvck9mZnNldFggPT09IG51bGwgPyBzZW5zb3JFdmVudC5jbGllbnRYIC0gc291cmNlUmVjdC5sZWZ0IDogb3B0aW9ucy5jdXJzb3JPZmZzZXRYO1xuXG4gICAgY29uc3QgbWlycm9yT2Zmc2V0ID0geyB0b3AsIGxlZnQgfTtcblxuICAgIHJlc29sdmUoX2V4dGVuZHMoeyBzZW5zb3JFdmVudCwgc291cmNlUmVjdCwgbWlycm9yT2Zmc2V0LCBvcHRpb25zIH0sIGFyZ3MpKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQXBwbHlzIG1pcnJvciBzdHlsZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gc3RhdGUubWlycm9yXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBzdGF0ZS5zb3VyY2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZS5vcHRpb25zXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVzZXRNaXJyb3IoX3JlZjQpIHtcbiAgbGV0IHsgbWlycm9yLCBzb3VyY2UsIG9wdGlvbnMgfSA9IF9yZWY0LFxuICAgICAgYXJncyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmNCwgWydtaXJyb3InLCAnc291cmNlJywgJ29wdGlvbnMnXSk7XG5cbiAgcmV0dXJuIHdpdGhQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGxldCBvZmZzZXRIZWlnaHQ7XG4gICAgbGV0IG9mZnNldFdpZHRoO1xuXG4gICAgaWYgKG9wdGlvbnMuY29uc3RyYWluRGltZW5zaW9ucykge1xuICAgICAgY29uc3QgY29tcHV0ZWRTb3VyY2VTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKHNvdXJjZSk7XG4gICAgICBvZmZzZXRIZWlnaHQgPSBjb21wdXRlZFNvdXJjZVN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKTtcbiAgICAgIG9mZnNldFdpZHRoID0gY29tcHV0ZWRTb3VyY2VTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKTtcbiAgICB9XG5cbiAgICBtaXJyb3Iuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIG1pcnJvci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIG1pcnJvci5zdHlsZS50b3AgPSAwO1xuICAgIG1pcnJvci5zdHlsZS5sZWZ0ID0gMDtcbiAgICBtaXJyb3Iuc3R5bGUubWFyZ2luID0gMDtcblxuICAgIGlmIChvcHRpb25zLmNvbnN0cmFpbkRpbWVuc2lvbnMpIHtcbiAgICAgIG1pcnJvci5zdHlsZS5oZWlnaHQgPSBvZmZzZXRIZWlnaHQ7XG4gICAgICBtaXJyb3Iuc3R5bGUud2lkdGggPSBvZmZzZXRXaWR0aDtcbiAgICB9XG5cbiAgICByZXNvbHZlKF9leHRlbmRzKHsgbWlycm9yLCBzb3VyY2UsIG9wdGlvbnMgfSwgYXJncykpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBcHBseXMgbWlycm9yIGNsYXNzIG9uIG1pcnJvciBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHN0YXRlLm1pcnJvclxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlLm1pcnJvckNsYXNzXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkTWlycm9yQ2xhc3NlcyhfcmVmNSkge1xuICBsZXQgeyBtaXJyb3IsIG1pcnJvckNsYXNzIH0gPSBfcmVmNSxcbiAgICAgIGFyZ3MgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjUsIFsnbWlycm9yJywgJ21pcnJvckNsYXNzJ10pO1xuXG4gIHJldHVybiB3aXRoUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBtaXJyb3IuY2xhc3NMaXN0LmFkZChtaXJyb3JDbGFzcyk7XG4gICAgcmVzb2x2ZShfZXh0ZW5kcyh7IG1pcnJvciwgbWlycm9yQ2xhc3MgfSwgYXJncykpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIHNvdXJjZSBJRCBmcm9tIGNsb25lZCBtaXJyb3IgZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBzdGF0ZS5taXJyb3JcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZW1vdmVNaXJyb3JJRChfcmVmNikge1xuICBsZXQgeyBtaXJyb3IgfSA9IF9yZWY2LFxuICAgICAgYXJncyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmNiwgWydtaXJyb3InXSk7XG5cbiAgcmV0dXJuIHdpdGhQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIG1pcnJvci5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgZGVsZXRlIG1pcnJvci5pZDtcbiAgICByZXNvbHZlKF9leHRlbmRzKHsgbWlycm9yIH0sIGFyZ3MpKTtcbiAgfSk7XG59XG5cbi8qKlxuICogUG9zaXRpb25zIG1pcnJvciB3aXRoIHRyYW5zbGF0ZTNkXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHN0YXRlLm1pcnJvclxuICogQHBhcmFtIHtTZW5zb3JFdmVudH0gc3RhdGUuc2Vuc29yRXZlbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZS5taXJyb3JPZmZzZXRcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0ZS5pbml0aWFsWVxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXRlLmluaXRpYWxYXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUub3B0aW9uc1xuICogQHJldHVybiB7UHJvbWlzZX1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHBvc2l0aW9uTWlycm9yKHsgd2l0aEZyYW1lID0gZmFsc2UsIGluaXRpYWwgPSBmYWxzZSB9ID0ge30pIHtcbiAgcmV0dXJuIChfcmVmNykgPT4ge1xuICAgIGxldCB7IG1pcnJvciwgc2Vuc29yRXZlbnQsIG1pcnJvck9mZnNldCwgaW5pdGlhbFksIGluaXRpYWxYLCBzY3JvbGxPZmZzZXQsIG9wdGlvbnMgfSA9IF9yZWY3LFxuICAgICAgICBhcmdzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWY3LCBbJ21pcnJvcicsICdzZW5zb3JFdmVudCcsICdtaXJyb3JPZmZzZXQnLCAnaW5pdGlhbFknLCAnaW5pdGlhbFgnLCAnc2Nyb2xsT2Zmc2V0JywgJ29wdGlvbnMnXSk7XG5cbiAgICByZXR1cm4gd2l0aFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBfZXh0ZW5kcyh7XG4gICAgICAgIG1pcnJvcixcbiAgICAgICAgc2Vuc29yRXZlbnQsXG4gICAgICAgIG1pcnJvck9mZnNldCxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgfSwgYXJncyk7XG5cbiAgICAgIGlmIChtaXJyb3JPZmZzZXQpIHtcbiAgICAgICAgY29uc3QgeCA9IHNlbnNvckV2ZW50LmNsaWVudFggLSBtaXJyb3JPZmZzZXQubGVmdCAtIHNjcm9sbE9mZnNldC54O1xuICAgICAgICBjb25zdCB5ID0gc2Vuc29yRXZlbnQuY2xpZW50WSAtIG1pcnJvck9mZnNldC50b3AgLSBzY3JvbGxPZmZzZXQueTtcblxuICAgICAgICBpZiAob3B0aW9ucy54QXhpcyAmJiBvcHRpb25zLnlBeGlzIHx8IGluaXRpYWwpIHtcbiAgICAgICAgICBtaXJyb3Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAwKWA7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy54QXhpcyAmJiAhb3B0aW9ucy55QXhpcykge1xuICAgICAgICAgIG1pcnJvci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt4fXB4LCAke2luaXRpYWxZfXB4LCAwKWA7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy55QXhpcyAmJiAhb3B0aW9ucy54QXhpcykge1xuICAgICAgICAgIG1pcnJvci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtpbml0aWFsWH1weCwgJHt5fXB4LCAwKWA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5pdGlhbCkge1xuICAgICAgICAgIHJlc3VsdC5pbml0aWFsWCA9IHg7XG4gICAgICAgICAgcmVzdWx0LmluaXRpYWxZID0geTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgfSwgeyBmcmFtZTogd2l0aEZyYW1lIH0pO1xuICB9O1xufVxuXG4vKipcbiAqIFdyYXBzIGZ1bmN0aW9ucyBpbiBwcm9taXNlIHdpdGggcG90ZW50aWFsIGFuaW1hdGlvbiBmcmFtZSBvcHRpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLnJhZlxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHdpdGhQcm9taXNlKGNhbGxiYWNrLCB7IHJhZiA9IGZhbHNlIH0gPSB7fSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChyYWYpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2socmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc2Vuc29yIGV2ZW50IHdhcyB0cmlnZ2VyZWQgYnkgYSBuYXRpdmUgYnJvd3NlciBkcmFnIGV2ZW50XG4gKiBAcGFyYW0ge1NlbnNvckV2ZW50fSBzZW5zb3JFdmVudFxuICovXG5mdW5jdGlvbiBpc05hdGl2ZURyYWdFdmVudChzZW5zb3JFdmVudCkge1xuICByZXR1cm4gKC9eZHJhZy8udGVzdChzZW5zb3JFdmVudC5vcmlnaW5hbEV2ZW50LnR5cGUpXG4gICk7XG59XG5cbi8qKiovIH0pLFxuLyogNTcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdE9wdGlvbnMgPSB1bmRlZmluZWQ7XG5cbnZhciBfTWlycm9yID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nik7XG5cbnZhciBfTWlycm9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01pcnJvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9NaXJyb3IyLmRlZmF1bHQ7XG5leHBvcnRzLmRlZmF1bHRPcHRpb25zID0gX01pcnJvci5kZWZhdWx0T3B0aW9ucztcblxuLyoqKi8gfSksXG4vKiA1OCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX0Fic3RyYWN0UGx1Z2luID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9BYnN0cmFjdFBsdWdpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BYnN0cmFjdFBsdWdpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IG9uSW5pdGlhbGl6ZSA9IFN5bWJvbCgnb25Jbml0aWFsaXplJyk7XG5jb25zdCBvbkRlc3Ryb3kgPSBTeW1ib2woJ29uRGVzdHJveScpO1xuXG4vKipcbiAqIEZvY3VzYWJsZSBkZWZhdWx0IG9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkZWZhdWx0T3B0aW9uc1xuICogQHR5cGUge09iamVjdH1cbiAqL1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBGb2N1c2FibGUgcGx1Z2luXG4gKiBAY2xhc3MgRm9jdXNhYmxlXG4gKiBAbW9kdWxlIEZvY3VzYWJsZVxuICogQGV4dGVuZHMgQWJzdHJhY3RQbHVnaW5cbiAqL1xuY2xhc3MgRm9jdXNhYmxlIGV4dGVuZHMgX0Fic3RyYWN0UGx1Z2luMi5kZWZhdWx0IHtcbiAgLyoqXG4gICAqIEZvY3VzYWJsZSBjb25zdHJ1Y3Rvci5cbiAgICogQGNvbnN0cnVjdHMgRm9jdXNhYmxlXG4gICAqIEBwYXJhbSB7RHJhZ2dhYmxlfSBkcmFnZ2FibGUgLSBEcmFnZ2FibGUgaW5zdGFuY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZSkge1xuICAgIHN1cGVyKGRyYWdnYWJsZSk7XG5cbiAgICAvKipcbiAgICAgKiBGb2N1c2FibGUgb3B0aW9uc1xuICAgICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdGlvbnMsIHRoaXMuZ2V0T3B0aW9ucygpKTtcblxuICAgIHRoaXNbb25Jbml0aWFsaXplXSA9IHRoaXNbb25Jbml0aWFsaXplXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EZXN0cm95XSA9IHRoaXNbb25EZXN0cm95XS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIGxpc3RlbmVycyB0byBkcmFnZ2FibGVcbiAgICovXG4gIGF0dGFjaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS5vbignZHJhZ2dhYmxlOmluaXRpYWxpemUnLCB0aGlzW29uSW5pdGlhbGl6ZV0pLm9uKCdkcmFnZ2FibGU6ZGVzdHJveScsIHRoaXNbb25EZXN0cm95XSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoZXMgbGlzdGVuZXJzIGZyb20gZHJhZ2dhYmxlXG4gICAqL1xuICBkZXRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub2ZmKCdkcmFnZ2FibGU6aW5pdGlhbGl6ZScsIHRoaXNbb25Jbml0aWFsaXplXSkub2ZmKCdkcmFnZ2FibGU6ZGVzdHJveScsIHRoaXNbb25EZXN0cm95XSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBvcHRpb25zIHBhc3NlZCB0aHJvdWdoIGRyYWdnYWJsZVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBnZXRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZS5vcHRpb25zLmZvY3VzYWJsZSB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGRyYWdnYWJsZSBjb250YWluZXJzIGFuZCBlbGVtZW50c1xuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudFtdfVxuICAgKi9cbiAgZ2V0RWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmRyYWdnYWJsZS5jb250YWluZXJzLCAuLi50aGlzLmRyYWdnYWJsZS5nZXREcmFnZ2FibGVFbGVtZW50cygpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRpYWxpemUgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgW29uSW5pdGlhbGl6ZV0oKSB7XG4gICAgLy8gQ2FuIHdhaXQgdW50aWwgdGhlIG5leHQgYmVzdCBmcmFtZSBpcyBhdmFpbGFibGVcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5nZXRFbGVtZW50cygpLmZvckVhY2goZWxlbWVudCA9PiBkZWNvcmF0ZUVsZW1lbnQoZWxlbWVudCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgW29uRGVzdHJveV0oKSB7XG4gICAgLy8gQ2FuIHdhaXQgdW50aWwgdGhlIG5leHQgYmVzdCBmcmFtZSBpcyBhdmFpbGFibGVcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5nZXRFbGVtZW50cygpLmZvckVhY2goZWxlbWVudCA9PiBzdHJpcEVsZW1lbnQoZWxlbWVudCkpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZvY3VzYWJsZTsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEtlZXBzIHRyYWNrIG9mIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBhcmUgbWlzc2luZyB0YWJpbmRleCBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHNvIHRoZXkgY2FuIGJlIHJlc2V0IHdoZW4gZHJhZ2dhYmxlIGdldHMgZGVzdHJveWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjb25zdCB7SFRNTEVsZW1lbnRbXX0gZWxlbWVudHNXaXRoTWlzc2luZ1RhYkluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5jb25zdCBlbGVtZW50c1dpdGhNaXNzaW5nVGFiSW5kZXggPSBbXTtcblxuLyoqXG4gKiBEZWNvcmF0ZXMgZWxlbWVudCB3aXRoIHRhYmluZGV4IGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGRlY29yYXRlRWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IGhhc01pc3NpbmdUYWJJbmRleCA9IEJvb2xlYW4oIWVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpICYmIGVsZW1lbnQudGFiSW5kZXggPT09IC0xKTtcblxuICBpZiAoaGFzTWlzc2luZ1RhYkluZGV4KSB7XG4gICAgZWxlbWVudHNXaXRoTWlzc2luZ1RhYkluZGV4LnB1c2goZWxlbWVudCk7XG4gICAgZWxlbWVudC50YWJJbmRleCA9IDA7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGVsZW1lbnRzIHRhYmluZGV4IGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHN0cmlwRWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IHRhYkluZGV4RWxlbWVudFBvc2l0aW9uID0gZWxlbWVudHNXaXRoTWlzc2luZ1RhYkluZGV4LmluZGV4T2YoZWxlbWVudCk7XG5cbiAgaWYgKHRhYkluZGV4RWxlbWVudFBvc2l0aW9uICE9PSAtMSkge1xuICAgIGVsZW1lbnQudGFiSW5kZXggPSAtMTtcbiAgICBlbGVtZW50c1dpdGhNaXNzaW5nVGFiSW5kZXguc3BsaWNlKHRhYkluZGV4RWxlbWVudFBvc2l0aW9uLCAxKTtcbiAgfVxufVxuXG4vKioqLyB9KSxcbi8qIDU5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfRm9jdXNhYmxlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1OCk7XG5cbnZhciBfRm9jdXNhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZvY3VzYWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9Gb2N1c2FibGUyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuLyogNjAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8qKlxuICogQWxsIGRyYWdnYWJsZSBwbHVnaW5zIGluaGVyaXQgZnJvbSB0aGlzIGNsYXNzLlxuICogQGFic3RyYWN0XG4gKiBAY2xhc3MgQWJzdHJhY3RQbHVnaW5cbiAqIEBtb2R1bGUgQWJzdHJhY3RQbHVnaW5cbiAqL1xuY2xhc3MgQWJzdHJhY3RQbHVnaW4ge1xuICAvKipcbiAgICogQWJzdHJhY3RQbHVnaW4gY29uc3RydWN0b3IuXG4gICAqIEBjb25zdHJ1Y3RzIEFic3RyYWN0UGx1Z2luXG4gICAqIEBwYXJhbSB7RHJhZ2dhYmxlfSBkcmFnZ2FibGUgLSBEcmFnZ2FibGUgaW5zdGFuY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZSkge1xuICAgIC8qKlxuICAgICAqIERyYWdnYWJsZSBpbnN0YW5jZVxuICAgICAqIEBwcm9wZXJ0eSBkcmFnZ2FibGVcbiAgICAgKiBAdHlwZSB7RHJhZ2dhYmxlfVxuICAgICAqL1xuICAgIHRoaXMuZHJhZ2dhYmxlID0gZHJhZ2dhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRvIGFkZCBsaXN0ZW5lcnNcbiAgICogQGFic3RyYWN0XG4gICAqL1xuICBhdHRhY2goKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgSW1wbGVtZW50ZWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0byByZW1vdmUgbGlzdGVuZXJzXG4gICAqIEBhYnN0cmFjdFxuICAgKi9cbiAgZGV0YWNoKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IEltcGxlbWVudGVkJyk7XG4gIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEFic3RyYWN0UGx1Z2luO1xuXG4vKioqLyB9KSxcbi8qIDYxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHRPcHRpb25zID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX0Fic3RyYWN0UGx1Z2luID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9BYnN0cmFjdFBsdWdpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BYnN0cmFjdFBsdWdpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IG9uSW5pdGlhbGl6ZSA9IFN5bWJvbCgnb25Jbml0aWFsaXplJyk7XG5jb25zdCBvbkRlc3Ryb3kgPSBTeW1ib2woJ29uRGVzdHJveScpO1xuY29uc3QgYW5ub3VuY2VFdmVudCA9IFN5bWJvbCgnYW5ub3VuY2VFdmVudCcpO1xuY29uc3QgYW5ub3VuY2VNZXNzYWdlID0gU3ltYm9sKCdhbm5vdW5jZU1lc3NhZ2UnKTtcblxuY29uc3QgQVJJQV9SRUxFVkFOVCA9ICdhcmlhLXJlbGV2YW50JztcbmNvbnN0IEFSSUFfQVRPTUlDID0gJ2FyaWEtYXRvbWljJztcbmNvbnN0IEFSSUFfTElWRSA9ICdhcmlhLWxpdmUnO1xuY29uc3QgUk9MRSA9ICdyb2xlJztcblxuLyoqXG4gKiBBbm5vdW5jZW1lbnQgZGVmYXVsdCBvcHRpb25zXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGVmYXVsdE9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBkZWZhdWx0T3B0aW9ucy5leHBpcmVcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0gZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IHtcbiAgZXhwaXJlOiA3MDAwXG59O1xuXG4vKipcbiAqIEFubm91bmNlbWVudCBwbHVnaW5cbiAqIEBjbGFzcyBBbm5vdW5jZW1lbnRcbiAqIEBtb2R1bGUgQW5ub3VuY2VtZW50XG4gKiBAZXh0ZW5kcyBBYnN0cmFjdFBsdWdpblxuICovXG5jbGFzcyBBbm5vdW5jZW1lbnQgZXh0ZW5kcyBfQWJzdHJhY3RQbHVnaW4yLmRlZmF1bHQge1xuICAvKipcbiAgICogQW5ub3VuY2VtZW50IGNvbnN0cnVjdG9yLlxuICAgKiBAY29uc3RydWN0cyBBbm5vdW5jZW1lbnRcbiAgICogQHBhcmFtIHtEcmFnZ2FibGV9IGRyYWdnYWJsZSAtIERyYWdnYWJsZSBpbnN0YW5jZVxuICAgKi9cbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlKSB7XG4gICAgc3VwZXIoZHJhZ2dhYmxlKTtcblxuICAgIC8qKlxuICAgICAqIFBsdWdpbiBvcHRpb25zXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnNcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucywgdGhpcy5nZXRPcHRpb25zKCkpO1xuXG4gICAgLyoqXG4gICAgICogT3JpZ2luYWwgZHJhZ2dhYmxlIHRyaWdnZXIgbWV0aG9kLiBIYWNrIHVudGlsIHdlIGhhdmUgb25BbGwgb3Igb24oJ2FsbCcpXG4gICAgICogQHByb3BlcnR5IG9yaWdpbmFsVHJpZ2dlck1ldGhvZFxuICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLm9yaWdpbmFsVHJpZ2dlck1ldGhvZCA9IHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXI7XG5cbiAgICB0aGlzW29uSW5pdGlhbGl6ZV0gPSB0aGlzW29uSW5pdGlhbGl6ZV0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRGVzdHJveV0gPSB0aGlzW29uRGVzdHJveV0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyBsaXN0ZW5lcnMgdG8gZHJhZ2dhYmxlXG4gICAqL1xuICBhdHRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub24oJ2RyYWdnYWJsZTppbml0aWFsaXplJywgdGhpc1tvbkluaXRpYWxpemVdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2hlcyBsaXN0ZW5lcnMgZnJvbSBkcmFnZ2FibGVcbiAgICovXG4gIGRldGFjaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS5vZmYoJ2RyYWdnYWJsZTpkZXN0cm95JywgdGhpc1tvbkRlc3Ryb3ldKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHBhc3NlZCBpbiBvcHRpb25zXG4gICAqL1xuICBnZXRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZS5vcHRpb25zLmFubm91bmNlbWVudHMgfHwge307XG4gIH1cblxuICAvKipcbiAgICogQW5ub3VuY2VzIGV2ZW50XG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7QWJzdHJhY3RFdmVudH0gZXZlbnRcbiAgICovXG4gIFthbm5vdW5jZUV2ZW50XShldmVudCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLm9wdGlvbnNbZXZlbnQudHlwZV07XG5cbiAgICBpZiAobWVzc2FnZSAmJiB0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXNbYW5ub3VuY2VNZXNzYWdlXShtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZSAmJiB0eXBlb2YgbWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpc1thbm5vdW5jZU1lc3NhZ2VdKG1lc3NhZ2UoZXZlbnQpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQW5ub3VuY2VzIG1lc3NhZ2UgdG8gc2NyZWVuIHJlYWRlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgKi9cbiAgW2Fubm91bmNlTWVzc2FnZV0obWVzc2FnZSkge1xuICAgIGFubm91bmNlKG1lc3NhZ2UsIHsgZXhwaXJlOiB0aGlzLm9wdGlvbnMuZXhwaXJlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgaGFuZGVyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBbb25Jbml0aWFsaXplXSgpIHtcbiAgICAvLyBIYWNrIHVudGlsIHRoZXJlIGlzIGFuIGFwaSBmb3IgbGlzdGVuaW5nIGZvciBhbGwgZXZlbnRzXG4gICAgdGhpcy5kcmFnZ2FibGUudHJpZ2dlciA9IGV2ZW50ID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXNbYW5ub3VuY2VFdmVudF0oZXZlbnQpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgb3JpZ2luYWwgdHJpZ2dlciBpcyBjYWxsZWRcbiAgICAgICAgdGhpcy5vcmlnaW5hbFRyaWdnZXJNZXRob2QuY2FsbCh0aGlzLmRyYWdnYWJsZSwgZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSBoYW5kZXJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIFtvbkRlc3Ryb3ldKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXIgPSB0aGlzLm9yaWdpbmFsVHJpZ2dlck1ldGhvZDtcbiAgfVxufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBBbm5vdW5jZW1lbnQ7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY29uc3Qge0hUTUxFbGVtZW50fSBsaXZlUmVnaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5jb25zdCBsaXZlUmVnaW9uID0gY3JlYXRlUmVnaW9uKCk7XG5cbi8qKlxuICogQW5ub3VuY2VzIG1lc3NhZ2UgdmlhIGxpdmUgcmVnaW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBvcHRpb25zLmV4cGlyZVxuICovXG5mdW5jdGlvbiBhbm5vdW5jZShtZXNzYWdlLCB7IGV4cGlyZSB9KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBlbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgbGl2ZVJlZ2lvbi5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbGl2ZVJlZ2lvbi5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgfSwgZXhwaXJlKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIHJlZ2lvbiBlbGVtZW50XG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUmVnaW9uKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RyYWdnYWJsZS1saXZlLXJlZ2lvbicpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShBUklBX1JFTEVWQU5ULCAnYWRkaXRpb25zJyk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKEFSSUFfQVRPTUlDLCAndHJ1ZScpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShBUklBX0xJVkUsICdhc3NlcnRpdmUnKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoUk9MRSwgJ2xvZycpO1xuXG4gIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICBlbGVtZW50LnN0eWxlLndpZHRoID0gJzFweCc7XG4gIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzFweCc7XG4gIGVsZW1lbnQuc3R5bGUudG9wID0gJy0xcHgnO1xuICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8vIEFwcGVuZCBsaXZlIHJlZ2lvbiBlbGVtZW50IGFzIGVhcmx5IGFzIHBvc3NpYmxlXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpdmVSZWdpb24pO1xufSk7XG5cbi8qKiovIH0pLFxuLyogNjIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdE9wdGlvbnMgPSB1bmRlZmluZWQ7XG5cbnZhciBfQW5ub3VuY2VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2MSk7XG5cbnZhciBfQW5ub3VuY2VtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Fubm91bmNlbWVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9Bbm5vdW5jZW1lbnQyLmRlZmF1bHQ7XG5leHBvcnRzLmRlZmF1bHRPcHRpb25zID0gX0Fubm91bmNlbWVudC5kZWZhdWx0T3B0aW9ucztcblxuLyoqKi8gfSksXG4vKiA2MyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5EcmFnZ2FibGVEZXN0cm95RXZlbnQgPSBleHBvcnRzLkRyYWdnYWJsZUluaXRpYWxpemVkRXZlbnQgPSBleHBvcnRzLkRyYWdnYWJsZUV2ZW50ID0gdW5kZWZpbmVkO1xuXG52YXIgX0Fic3RyYWN0RXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX0Fic3RyYWN0RXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWJzdHJhY3RFdmVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQmFzZSBkcmFnZ2FibGUgZXZlbnRcbiAqIEBjbGFzcyBEcmFnZ2FibGVFdmVudFxuICogQG1vZHVsZSBEcmFnZ2FibGVFdmVudFxuICogQGV4dGVuZHMgQWJzdHJhY3RFdmVudFxuICovXG5jbGFzcyBEcmFnZ2FibGVFdmVudCBleHRlbmRzIF9BYnN0cmFjdEV2ZW50Mi5kZWZhdWx0IHtcblxuICAvKipcbiAgICogRHJhZ2dhYmxlIGluc3RhbmNlXG4gICAqIEBwcm9wZXJ0eSBkcmFnZ2FibGVcbiAgICogQHR5cGUge0RyYWdnYWJsZX1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgZHJhZ2dhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuZHJhZ2dhYmxlO1xuICB9XG59XG5cbmV4cG9ydHMuRHJhZ2dhYmxlRXZlbnQgPSBEcmFnZ2FibGVFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIERyYWdnYWJsZSBpbml0aWFsaXplZCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgRHJhZ2dhYmxlSW5pdGlhbGl6ZWRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIERyYWdnYWJsZUluaXRpYWxpemVkRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGV4dGVuZHMgRHJhZ2dhYmxlRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbkRyYWdnYWJsZUV2ZW50LnR5cGUgPSAnZHJhZ2dhYmxlJztcbmNsYXNzIERyYWdnYWJsZUluaXRpYWxpemVkRXZlbnQgZXh0ZW5kcyBEcmFnZ2FibGVFdmVudCB7fVxuXG5leHBvcnRzLkRyYWdnYWJsZUluaXRpYWxpemVkRXZlbnQgPSBEcmFnZ2FibGVJbml0aWFsaXplZEV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIERyYWdnYWJsZSBkZXN0b3J5IGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgRHJhZ2dhYmxlSW5pdGlhbGl6ZWRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBEcmFnZ2FibGVEZXN0cm95RXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIERyYWdnYWJsZURlc3Ryb3lFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbkRyYWdnYWJsZUluaXRpYWxpemVkRXZlbnQudHlwZSA9ICdkcmFnZ2FibGU6aW5pdGlhbGl6ZSc7XG5jbGFzcyBEcmFnZ2FibGVEZXN0cm95RXZlbnQgZXh0ZW5kcyBEcmFnZ2FibGVFdmVudCB7fVxuZXhwb3J0cy5EcmFnZ2FibGVEZXN0cm95RXZlbnQgPSBEcmFnZ2FibGVEZXN0cm95RXZlbnQ7XG5EcmFnZ2FibGVEZXN0cm95RXZlbnQudHlwZSA9ICdkcmFnZ2FibGU6ZGVzdHJveSc7XG5cbi8qKiovIH0pLFxuLyogNjQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuY29uc3QgY2FuY2VsZWQgPSBTeW1ib2woJ2NhbmNlbGVkJyk7XG5cbi8qKlxuICogQWxsIGV2ZW50cyBmaXJlZCBieSBkcmFnZ2FibGUgaW5oZXJpdCB0aGlzIGNsYXNzLiBZb3UgY2FuIGNhbGwgYGNhbmNlbCgpYCB0b1xuICogY2FuY2VsIGEgc3BlY2lmaWMgZXZlbnQgb3IgeW91IGNhbiBjaGVjayBpZiBhbiBldmVudCBoYXMgYmVlbiBjYW5jZWxlZCBieVxuICogY2FsbGluZyBgY2FuY2VsZWQoKWAuXG4gKiBAYWJzdHJhY3RcbiAqIEBjbGFzcyBBYnN0cmFjdEV2ZW50XG4gKiBAbW9kdWxlIEFic3RyYWN0RXZlbnRcbiAqL1xuY2xhc3MgQWJzdHJhY3RFdmVudCB7XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0RXZlbnQgY29uc3RydWN0b3IuXG4gICAqIEBjb25zdHJ1Y3RzIEFic3RyYWN0RXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBFdmVudCBkYXRhXG4gICAqL1xuXG4gIC8qKlxuICAgKiBFdmVudCB0eXBlXG4gICAqIEBzdGF0aWNcbiAgICogQGFic3RyYWN0XG4gICAqIEBwcm9wZXJ0eSB0eXBlXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpc1tjYW5jZWxlZF0gPSBmYWxzZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQtb25seSB0eXBlXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuXG5cbiAgLyoqXG4gICAqIEV2ZW50IGNhbmNlbGFibGVcbiAgICogQHN0YXRpY1xuICAgKiBAYWJzdHJhY3RcbiAgICogQHByb3BlcnR5IGNhbmNlbGFibGVcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci50eXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQtb25seSBjYW5jZWxhYmxlXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgZ2V0IGNhbmNlbGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuY2FuY2VsYWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWxzIHRoZSBldmVudCBpbnN0YW5jZVxuICAgKiBAYWJzdHJhY3RcbiAgICovXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzW2NhbmNlbGVkXSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgZXZlbnQgaGFzIGJlZW4gY2FuY2VsZWRcbiAgICogQGFic3RyYWN0XG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBjYW5jZWxlZCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzW2NhbmNlbGVkXSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBuZXcgZXZlbnQgaW5zdGFuY2Ugd2l0aCBleGlzdGluZyBldmVudCBkYXRhLlxuICAgKiBUaGlzIG1ldGhvZCBhbGxvd3MgZm9yIG92ZXJyaWRpbmcgb2YgZXZlbnQgZGF0YS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICogQHJldHVybiB7QWJzdHJhY3RFdmVudH1cbiAgICovXG4gIGNsb25lKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoX2V4dGVuZHMoe30sIHRoaXMuZGF0YSwgZGF0YSkpO1xuICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBBYnN0cmFjdEV2ZW50O1xuQWJzdHJhY3RFdmVudC50eXBlID0gJ2V2ZW50JztcbkFic3RyYWN0RXZlbnQuY2FuY2VsYWJsZSA9IGZhbHNlO1xuXG4vKioqLyB9KSxcbi8qIDY1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkRyYWdTdG9wRXZlbnQgPSBleHBvcnRzLkRyYWdQcmVzc3VyZUV2ZW50ID0gZXhwb3J0cy5EcmFnT3V0Q29udGFpbmVyRXZlbnQgPSBleHBvcnRzLkRyYWdPdmVyQ29udGFpbmVyRXZlbnQgPSBleHBvcnRzLkRyYWdPdXRFdmVudCA9IGV4cG9ydHMuRHJhZ092ZXJFdmVudCA9IGV4cG9ydHMuRHJhZ01vdmVFdmVudCA9IGV4cG9ydHMuRHJhZ1N0YXJ0RXZlbnQgPSBleHBvcnRzLkRyYWdFdmVudCA9IHVuZGVmaW5lZDtcblxudmFyIF9BYnN0cmFjdEV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9BYnN0cmFjdEV2ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Fic3RyYWN0RXZlbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIEJhc2UgZHJhZyBldmVudFxuICogQGNsYXNzIERyYWdFdmVudFxuICogQG1vZHVsZSBEcmFnRXZlbnRcbiAqIEBleHRlbmRzIEFic3RyYWN0RXZlbnRcbiAqL1xuY2xhc3MgRHJhZ0V2ZW50IGV4dGVuZHMgX0Fic3RyYWN0RXZlbnQyLmRlZmF1bHQge1xuXG4gIC8qKlxuICAgKiBEcmFnZ2FibGVzIHNvdXJjZSBlbGVtZW50XG4gICAqIEBwcm9wZXJ0eSBzb3VyY2VcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBzb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zb3VyY2U7XG4gIH1cblxuICAvKipcbiAgICogRHJhZ2dhYmxlcyBvcmlnaW5hbCBzb3VyY2UgZWxlbWVudFxuICAgKiBAcHJvcGVydHkgb3JpZ2luYWxTb3VyY2VcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBvcmlnaW5hbFNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm9yaWdpbmFsU291cmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWdnYWJsZXMgbWlycm9yIGVsZW1lbnRcbiAgICogQHByb3BlcnR5IG1pcnJvclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IG1pcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm1pcnJvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnZ2FibGVzIHNvdXJjZSBjb250YWluZXIgZWxlbWVudFxuICAgKiBAcHJvcGVydHkgc291cmNlQ29udGFpbmVyXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgc291cmNlQ29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuc291cmNlQ29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbnNvciBldmVudFxuICAgKiBAcHJvcGVydHkgc2Vuc29yRXZlbnRcbiAgICogQHR5cGUge1NlbnNvckV2ZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBzZW5zb3JFdmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnNlbnNvckV2ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIE9yaWdpbmFsIGV2ZW50IHRoYXQgdHJpZ2dlcmVkIHNlbnNvciBldmVudFxuICAgKiBAcHJvcGVydHkgb3JpZ2luYWxFdmVudFxuICAgKiBAdHlwZSB7RXZlbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IG9yaWdpbmFsRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMuc2Vuc29yRXZlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbnNvckV2ZW50Lm9yaWdpbmFsRXZlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0cy5EcmFnRXZlbnQgPSBEcmFnRXZlbnQ7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIERyYWcgc3RhcnQgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgRHJhZ1N0YXJ0RXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIERyYWdTdGFydEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGV4dGVuZHMgRHJhZ0V2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbkRyYWdFdmVudC50eXBlID0gJ2RyYWcnO1xuY2xhc3MgRHJhZ1N0YXJ0RXZlbnQgZXh0ZW5kcyBEcmFnRXZlbnQge31cblxuZXhwb3J0cy5EcmFnU3RhcnRFdmVudCA9IERyYWdTdGFydEV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogRHJhZyBtb3ZlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzcyBEcmFnTW92ZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtb2R1bGUgRHJhZ01vdmVFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXh0ZW5kcyBEcmFnRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbkRyYWdTdGFydEV2ZW50LnR5cGUgPSAnZHJhZzpzdGFydCc7XG5EcmFnU3RhcnRFdmVudC5jYW5jZWxhYmxlID0gdHJ1ZTtcbmNsYXNzIERyYWdNb3ZlRXZlbnQgZXh0ZW5kcyBEcmFnRXZlbnQge31cblxuZXhwb3J0cy5EcmFnTW92ZUV2ZW50ID0gRHJhZ01vdmVFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBEcmFnIG92ZXIgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzcyBEcmFnT3ZlckV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIERyYWdPdmVyRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIERyYWdFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbkRyYWdNb3ZlRXZlbnQudHlwZSA9ICdkcmFnOm1vdmUnO1xuY2xhc3MgRHJhZ092ZXJFdmVudCBleHRlbmRzIERyYWdFdmVudCB7XG5cbiAgLyoqXG4gICAqIERyYWdnYWJsZSBjb250YWluZXIgeW91IGFyZSBvdmVyXG4gICAqIEBwcm9wZXJ0eSBvdmVyQ29udGFpbmVyXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgb3ZlckNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm92ZXJDb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogRHJhZ2dhYmxlIGVsZW1lbnQgeW91IGFyZSBvdmVyXG4gICAqIEBwcm9wZXJ0eSBvdmVyXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgb3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm92ZXI7XG4gIH1cbn1cblxuZXhwb3J0cy5EcmFnT3ZlckV2ZW50ID0gRHJhZ092ZXJFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBEcmFnIG91dCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIERyYWdPdXRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBEcmFnT3V0RXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIERyYWdFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbkRyYWdPdmVyRXZlbnQudHlwZSA9ICdkcmFnOm92ZXInO1xuRHJhZ092ZXJFdmVudC5jYW5jZWxhYmxlID0gdHJ1ZTtcbmNsYXNzIERyYWdPdXRFdmVudCBleHRlbmRzIERyYWdFdmVudCB7XG5cbiAgLyoqXG4gICAqIERyYWdnYWJsZSBjb250YWluZXIgeW91IGFyZSBvdmVyXG4gICAqIEBwcm9wZXJ0eSBvdmVyQ29udGFpbmVyXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgb3ZlckNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm92ZXJDb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogRHJhZ2dhYmxlIGVsZW1lbnQgeW91IGxlZnRcbiAgICogQHByb3BlcnR5IG92ZXJcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBvdmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEub3ZlcjtcbiAgfVxufVxuXG5leHBvcnRzLkRyYWdPdXRFdmVudCA9IERyYWdPdXRFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogRHJhZyBvdmVyIGNvbnRhaW5lciBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzcyBEcmFnT3ZlckNvbnRhaW5lckV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBEcmFnT3ZlckNvbnRhaW5lckV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGV4dGVuZHMgRHJhZ0V2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbkRyYWdPdXRFdmVudC50eXBlID0gJ2RyYWc6b3V0JztcbmNsYXNzIERyYWdPdmVyQ29udGFpbmVyRXZlbnQgZXh0ZW5kcyBEcmFnRXZlbnQge1xuXG4gIC8qKlxuICAgKiBEcmFnZ2FibGUgY29udGFpbmVyIHlvdSBhcmUgb3ZlclxuICAgKiBAcHJvcGVydHkgb3ZlckNvbnRhaW5lclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IG92ZXJDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vdmVyQ29udGFpbmVyO1xuICB9XG59XG5cbmV4cG9ydHMuRHJhZ092ZXJDb250YWluZXJFdmVudCA9IERyYWdPdmVyQ29udGFpbmVyRXZlbnQ7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogRHJhZyBvdXQgY29udGFpbmVyIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgRHJhZ091dENvbnRhaW5lckV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIERyYWdPdXRDb250YWluZXJFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGV4dGVuZHMgRHJhZ0V2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuRHJhZ092ZXJDb250YWluZXJFdmVudC50eXBlID0gJ2RyYWc6b3Zlcjpjb250YWluZXInO1xuY2xhc3MgRHJhZ091dENvbnRhaW5lckV2ZW50IGV4dGVuZHMgRHJhZ0V2ZW50IHtcblxuICAvKipcbiAgICogRHJhZ2dhYmxlIGNvbnRhaW5lciB5b3UgbGVmdFxuICAgKiBAcHJvcGVydHkgb3ZlckNvbnRhaW5lclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IG92ZXJDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vdmVyQ29udGFpbmVyO1xuICB9XG59XG5cbmV4cG9ydHMuRHJhZ091dENvbnRhaW5lckV2ZW50ID0gRHJhZ091dENvbnRhaW5lckV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBEcmFnIHByZXNzdXJlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIERyYWdQcmVzc3VyZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBEcmFnUHJlc3N1cmVFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIERyYWdFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5EcmFnT3V0Q29udGFpbmVyRXZlbnQudHlwZSA9ICdkcmFnOm91dDpjb250YWluZXInO1xuY2xhc3MgRHJhZ1ByZXNzdXJlRXZlbnQgZXh0ZW5kcyBEcmFnRXZlbnQge1xuXG4gIC8qKlxuICAgKiBQcmVzc3VyZSBhcHBsaWVkIG9uIGRyYWdnYWJsZSBlbGVtZW50XG4gICAqIEBwcm9wZXJ0eSBwcmVzc3VyZVxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBwcmVzc3VyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnByZXNzdXJlO1xuICB9XG59XG5cbmV4cG9ydHMuRHJhZ1ByZXNzdXJlRXZlbnQgPSBEcmFnUHJlc3N1cmVFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIERyYWcgc3RvcCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgRHJhZ1N0b3BFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIERyYWdTdG9wRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGV4dGVuZHMgRHJhZ0V2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5EcmFnUHJlc3N1cmVFdmVudC50eXBlID0gJ2RyYWc6cHJlc3N1cmUnO1xuY2xhc3MgRHJhZ1N0b3BFdmVudCBleHRlbmRzIERyYWdFdmVudCB7fVxuZXhwb3J0cy5EcmFnU3RvcEV2ZW50ID0gRHJhZ1N0b3BFdmVudDtcbkRyYWdTdG9wRXZlbnQudHlwZSA9ICdkcmFnOnN0b3AnO1xuXG4vKioqLyB9KSxcbi8qIDY2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlBsdWdpbnMgPSBleHBvcnRzLlNlbnNvcnMgPSBleHBvcnRzLlNvcnRhYmxlID0gZXhwb3J0cy5Td2FwcGFibGUgPSBleHBvcnRzLkRyb3BwYWJsZSA9IGV4cG9ydHMuRHJhZ2dhYmxlID0gZXhwb3J0cy5CYXNlUGx1Z2luID0gZXhwb3J0cy5CYXNlRXZlbnQgPSB1bmRlZmluZWQ7XG5cbnZhciBfRHJhZ2dhYmxlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdEcmFnZ2FibGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EcmFnZ2FibGUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0Ryb3BwYWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oMzQpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Ryb3BwYWJsZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Ryb3BwYWJsZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfU3dhcHBhYmxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU3dhcHBhYmxlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3dhcHBhYmxlKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9Tb3J0YWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NvcnRhYmxlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU29ydGFibGUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0Fic3RyYWN0RXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX0Fic3RyYWN0RXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWJzdHJhY3RFdmVudCk7XG5cbnZhciBfQWJzdHJhY3RQbHVnaW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX0Fic3RyYWN0UGx1Z2luMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Fic3RyYWN0UGx1Z2luKTtcblxudmFyIF9TZW5zb3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxudmFyIFNlbnNvcnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfU2Vuc29ycyk7XG5cbnZhciBfUGx1Z2lucyA9IF9fd2VicGFja19yZXF1aXJlX18oMjUpO1xuXG52YXIgUGx1Z2lucyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9QbHVnaW5zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5CYXNlRXZlbnQgPSBfQWJzdHJhY3RFdmVudDIuZGVmYXVsdDtcbmV4cG9ydHMuQmFzZVBsdWdpbiA9IF9BYnN0cmFjdFBsdWdpbjIuZGVmYXVsdDtcbmV4cG9ydHMuU2Vuc29ycyA9IFNlbnNvcnM7XG5leHBvcnRzLlBsdWdpbnMgPSBQbHVnaW5zO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9
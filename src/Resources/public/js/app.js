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

    // Configuration of plugin
    this.config = config;
    this.templateRender = this.config.templateRender;
    this.debug = this.config.debug;
    this.targets = document.querySelectorAll(config.querySelector);
    this.uiElements = this.config.uiElements;
    this.translations = this.config.translations;

    if (this.debug) {
      this.log('Plugin configuration :', this.config);
      this.log('Matched element(s) :', this.targets.length);
    } // Internal attributes


    this.classes = {
      uiElementContainer: 'mbiz-cms-component-ui-elements',
      draggableContainer: 'mbiz-cms-draggable-container',
      draggableItem: 'mbiz-cms-draggable-item',
      draggableItemHandler: 'mbiz-cms-draggable-item-handler'
    };
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
      elementsContainer.classList.add(this.classes.draggableContainer, this.classes.uiElementContainer);

      if (this.templateRender === 'sylius') {
        elementsContainer.classList.add('ui', 'segment', this.classes.draggableContainer, this.classes.uiElementContainer);
      } // Loop on UI Elements


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
        this.initDraggable(elementsContainer);
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
        return "\n            <div class=\"ui segment raised ".concat(this.classes.draggableItem, "\">\n                <button class=\"ui right floated massive button icon ").concat(this.classes.draggableItemHandler, "\"><i class=\"icon arrows alternate\"></i></button>\n                <div class=\"ui grid\">\n                    <div class=\"four wide column\">\n                        <img class=\"ui small image\" src=\"").concat(uiElementMetaData.image, "\" alt=\"\" width=\"150\" height=\"150\">\n                    </div>\n                    <div class=\"twelve wide column\">\n                        <h2 class=\"ui header\">").concat(uiElementMetaData.title, "</h2>\n                        <p>").concat(uiElementMetaData.description, "</p>\n                        <div class=\"ui buttons\">\n                            <button class=\"ui button\" type=\"button\">").concat(this.translations.edit, "</button>\n                            <button class=\"ui button negative\" type=\"button\">").concat(this.translations["delete"], "</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ");
      }

      this.error('Cannot find render for : ', templateRender);
      return '';
    }
    /**
     * Init draggable elements for a container
     *
     * @param elementsContainer
     */

  }, {
    key: "initDraggable",
    value: function initDraggable(elementsContainer) {
      new _shopify_draggable__WEBPACK_IMPORTED_MODULE_0__["Sortable"](elementsContainer, {
        handle: '.' + this.classes.draggableItemHandler,
        draggable: '.' + this.classes.draggableItem,
        mirror: {
          constrainDimensions: true
        }
      });
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
        for (var _iterator4 = document.querySelectorAll('.' + this.classes.uiElementContainer)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvZHJhZ2dhYmxlL2xpYi9kcmFnZ2FibGUuYnVuZGxlLmpzIl0sIm5hbWVzIjpbIk1iaXpDbXNGaWVsZHMiLCJjb25maWciLCJ0ZW1wbGF0ZVJlbmRlciIsImRlYnVnIiwidGFyZ2V0cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInF1ZXJ5U2VsZWN0b3IiLCJ1aUVsZW1lbnRzIiwidHJhbnNsYXRpb25zIiwibG9nIiwibGVuZ3RoIiwiY2xhc3NlcyIsInVpRWxlbWVudENvbnRhaW5lciIsImRyYWdnYWJsZUNvbnRhaW5lciIsImRyYWdnYWJsZUl0ZW0iLCJkcmFnZ2FibGVJdGVtSGFuZGxlciIsInRhcmdldCIsImNvbnRlbnQiLCJ2YWx1ZSIsImpzb25Db250ZW50IiwiSlNPTiIsInBhcnNlIiwiZSIsImVycm9yIiwiaW5pdEZpZWxkIiwic2V0QXR0cmlidXRlIiwiZWxlbWVudHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidWlFbGVtZW50IiwidHlwZSIsInVpRWxlbWVudE1ldGFEYXRhIiwicmVuZGVyZWRVaUVsZW1lbnRNZXRhRGF0YSIsInJlbmRlclVpRWxlbWVudE1ldGFEYXRhIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwicGFyZW50Tm9kZSIsImFwcGVuZENoaWxkIiwiaW5pdERyYWdnYWJsZSIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImVkaXQiLCJTb3J0YWJsZSIsImhhbmRsZSIsImRyYWdnYWJsZSIsIm1pcnJvciIsImNvbnN0cmFpbkRpbWVuc2lvbnMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZW1vdmUiLCJjb25zb2xlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNtcyIsIm1vbnNpZXVyYml6Q21zUGx1Z2luQ29u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O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixPQUFPO0FBQ1A7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QUFDQSxhQUFhLGVBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0IsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FB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QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtB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QixlQUFlLEVBQUU7O0FBRTNRLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQSxDQUFDLEUiLCJmaWxlIjoianMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvcHVibGljL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9hcHAuanNcIik7XG4iLCJpbXBvcnQge1NvcnRhYmxlfSBmcm9tICdAc2hvcGlmeS9kcmFnZ2FibGUnO1xuXG4vKipcbiAqIENsYXNzIHRvIG1hbmFnZSBDTVMgZmllbGRzIHdpdGggVUkgRWxlbWVudHNcbiAqL1xuY2xhc3MgTWJpekNtc0ZpZWxkcyB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBmb3IgTWJpekNtc0ZpZWxkcywgc2VlIGNvbmZpZyBpbiBgc3JjL1Jlc291cmNlcy92aWV3cy9BZG1pbi9hcHBfamF2YXNjcmlwdC5odG1sLnR3aWdgXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICAvLyBDb25maWd1cmF0aW9uIG9mIHBsdWdpblxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVJlbmRlciA9IHRoaXMuY29uZmlnLnRlbXBsYXRlUmVuZGVyO1xuICAgICAgICB0aGlzLmRlYnVnID0gdGhpcy5jb25maWcuZGVidWc7XG4gICAgICAgIHRoaXMudGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLnF1ZXJ5U2VsZWN0b3IpO1xuICAgICAgICB0aGlzLnVpRWxlbWVudHMgPSB0aGlzLmNvbmZpZy51aUVsZW1lbnRzO1xuICAgICAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IHRoaXMuY29uZmlnLnRyYW5zbGF0aW9ucztcbiAgICAgICAgaWYgKHRoaXMuZGVidWcpIHtcbiAgICAgICAgICAgIHRoaXMubG9nKCdQbHVnaW4gY29uZmlndXJhdGlvbiA6JywgdGhpcy5jb25maWcpO1xuICAgICAgICAgICAgdGhpcy5sb2coJ01hdGNoZWQgZWxlbWVudChzKSA6JywgdGhpcy50YXJnZXRzLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnRlcm5hbCBhdHRyaWJ1dGVzXG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IHtcbiAgICAgICAgICAgIHVpRWxlbWVudENvbnRhaW5lcjogJ21iaXotY21zLWNvbXBvbmVudC11aS1lbGVtZW50cycsXG4gICAgICAgICAgICBkcmFnZ2FibGVDb250YWluZXI6ICdtYml6LWNtcy1kcmFnZ2FibGUtY29udGFpbmVyJyxcbiAgICAgICAgICAgIGRyYWdnYWJsZUl0ZW06ICdtYml6LWNtcy1kcmFnZ2FibGUtaXRlbScsXG4gICAgICAgICAgICBkcmFnZ2FibGVJdGVtSGFuZGxlcjogJ21iaXotY21zLWRyYWdnYWJsZS1pdGVtLWhhbmRsZXInLFxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGVhY2ggQ01TIGVsZW1lbnRcbiAgICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgICBmb3IgKGxldCB0YXJnZXQgb2YgdGhpcy50YXJnZXRzKSB7XG4gICAgICAgICAgICBsZXQgY29udGVudCA9IHRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdUYXJnZXRcXCdzIGNvbnRlbnQgOicsIGNvbnRlbnQpO1xuICAgICAgICAgICAgbGV0IGpzb25Db250ZW50O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBqc29uQ29udGVudCA9IEpTT04ucGFyc2UoY29udGVudCk7XG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCdVbmFibGUgdG8gcGFyc2UgdGhlIENNUyBKU09OIGZvciB0aGlzIGNvbnRlbnQgOiAnLCBjb250ZW50KTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5pdEZpZWxkKHRhcmdldCwganNvbkNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCB0aGUgZmllbGQgZGVwZW5kaW5nIG9uIGl0J3MgcGFyc2VkIGNvbnRlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0YXJnZXRcbiAgICAgKiBAcGFyYW0ganNvbkNvbnRlbnQgW3t0eXBlOiBcIlVJIEVsZW1lbnQgVHlwZVwiLCBmaWVsZHM6IHt9fV1cbiAgICAgKi9cbiAgICBpbml0RmllbGQodGFyZ2V0LCBqc29uQ29udGVudCkge1xuICAgICAgICB0aGlzLmxvZygnSW5pdCBmaWVsZCB3aXRoIHBhcnNlZCBjb250ZW50IDonLCBqc29uQ29udGVudCk7XG5cbiAgICAgICAgLy8gSGlkZSBvcmlnaW5hbCBpbnB1dFxuICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgIC8vIEluaXQgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmRyYWdnYWJsZUNvbnRhaW5lciwgdGhpcy5jbGFzc2VzLnVpRWxlbWVudENvbnRhaW5lcik7XG5cbiAgICAgICAgaWYgKHRoaXMudGVtcGxhdGVSZW5kZXIgPT09ICdzeWxpdXMnKSB7XG4gICAgICAgICAgICBlbGVtZW50c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd1aScsICdzZWdtZW50JywgdGhpcy5jbGFzc2VzLmRyYWdnYWJsZUNvbnRhaW5lciwgdGhpcy5jbGFzc2VzLnVpRWxlbWVudENvbnRhaW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMb29wIG9uIFVJIEVsZW1lbnRzXG4gICAgICAgIGxldCBlcnJvciA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCB1aUVsZW1lbnQgb2YganNvbkNvbnRlbnQpIHtcbiAgICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBVaSBFbGVtZW50IHR5cGVcbiAgICAgICAgICAgIHRoaXMubG9nKCdJbml0IFVJIEVsZW1lbnQgOicsIHVpRWxlbWVudCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudWlFbGVtZW50c1t1aUVsZW1lbnQudHlwZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoJ0Nhbm5vdCBmaW5kIGVsZW1lbnQgb2YgdHlwZSAnLCB1aUVsZW1lbnQudHlwZSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlbmRlciBVaSBFbGVtZW50IG1ldGEgZGF0YVxuICAgICAgICAgICAgbGV0IHVpRWxlbWVudE1ldGFEYXRhID0gdGhpcy51aUVsZW1lbnRzW3VpRWxlbWVudC50eXBlXTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdNYXRjaGVkIFVpIEVsZW1lbnQgd2l0aCBtZXRhIGRhdGEgOicsIHVpRWxlbWVudE1ldGFEYXRhKTtcbiAgICAgICAgICAgIGxldCByZW5kZXJlZFVpRWxlbWVudE1ldGFEYXRhID0gdGhpcy5yZW5kZXJVaUVsZW1lbnRNZXRhRGF0YSh1aUVsZW1lbnRNZXRhRGF0YSwgdGhpcy50ZW1wbGF0ZVJlbmRlcik7XG4gICAgICAgICAgICBpZiAocmVuZGVyZWRVaUVsZW1lbnRNZXRhRGF0YSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCByZW5kZXJlZCBVaSBFbGVtZW50IG1ldGEgZGF0YSBpbiBjb250YWluZXJcbiAgICAgICAgICAgIHRoaXMubG9nKCdSZW5kZXJlZCBVaSBFbGVtZW50IG1ldGEgZGF0YSA6JywgcmVuZGVyZWRVaUVsZW1lbnRNZXRhRGF0YSk7XG4gICAgICAgICAgICBlbGVtZW50c0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHJlbmRlcmVkVWlFbGVtZW50TWV0YURhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXBwZW5kIGdlbmVyYXRlZCBIVE1MIHRvIGRpc3BsYXkgY3VycmVudCBVSSBFbGVtZW50cyBvZiB0YXJnZXRcbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZWxlbWVudHNDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy5pbml0RHJhZ2dhYmxlKGVsZW1lbnRzQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBtYXJrdXAgdG8gZGlzcGxheSBVSSBFbGVtZW50IG1ldGEgZGF0YSBkZXBlbmRpbmcgb24gcmVuZGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdWlFbGVtZW50TWV0YURhdGEge3Nob3J0X2Rlc2NyaXB0aW9uOiBcIlNob3J0IGRlc2NyaXB0aW9uXCIsIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uXCIsIHRpdGxlOiBcIlRpdGxlXCIsIGltYWdlOiBcIi9wYXRoL3RvL2ltYWdlLmpwZ1wifVxuICAgICAqL1xuICAgIHJlbmRlclVpRWxlbWVudE1ldGFEYXRhKHVpRWxlbWVudE1ldGFEYXRhLCB0ZW1wbGF0ZVJlbmRlcikge1xuICAgICAgICBpZiAodGVtcGxhdGVSZW5kZXIgPT09ICdzeWxpdXMnKSB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIHNlZ21lbnQgcmFpc2VkICR7dGhpcy5jbGFzc2VzLmRyYWdnYWJsZUl0ZW19XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVpIHJpZ2h0IGZsb2F0ZWQgbWFzc2l2ZSBidXR0b24gaWNvbiAke3RoaXMuY2xhc3Nlcy5kcmFnZ2FibGVJdGVtSGFuZGxlcn1cIj48aSBjbGFzcz1cImljb24gYXJyb3dzIGFsdGVybmF0ZVwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm91ciB3aWRlIGNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInVpIHNtYWxsIGltYWdlXCIgc3JjPVwiJHt1aUVsZW1lbnRNZXRhRGF0YS5pbWFnZX1cIiBhbHQ9XCJcIiB3aWR0aD1cIjE1MFwiIGhlaWdodD1cIjE1MFwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInR3ZWx2ZSB3aWRlIGNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidWkgaGVhZGVyXCI+JHt1aUVsZW1lbnRNZXRhRGF0YS50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHt1aUVsZW1lbnRNZXRhRGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1aSBidXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+JHt0aGlzLnRyYW5zbGF0aW9ucy5lZGl0fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1aSBidXR0b24gbmVnYXRpdmVcIiB0eXBlPVwiYnV0dG9uXCI+JHt0aGlzLnRyYW5zbGF0aW9ucy5kZWxldGV9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVycm9yKCdDYW5ub3QgZmluZCByZW5kZXIgZm9yIDogJywgdGVtcGxhdGVSZW5kZXIpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBkcmFnZ2FibGUgZWxlbWVudHMgZm9yIGEgY29udGFpbmVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudHNDb250YWluZXJcbiAgICAgKi9cbiAgICBpbml0RHJhZ2dhYmxlKGVsZW1lbnRzQ29udGFpbmVyKSB7XG4gICAgICAgIG5ldyBTb3J0YWJsZShlbGVtZW50c0NvbnRhaW5lciwge1xuICAgICAgICAgICAgaGFuZGxlOiAnLicgKyB0aGlzLmNsYXNzZXMuZHJhZ2dhYmxlSXRlbUhhbmRsZXIsXG4gICAgICAgICAgICBkcmFnZ2FibGU6ICcuJyArIHRoaXMuY2xhc3Nlcy5kcmFnZ2FibGVJdGVtLFxuICAgICAgICAgICAgbWlycm9yOiB7XG4gICAgICAgICAgICAgICAgY29uc3RyYWluRGltZW5zaW9uczogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBjb25zb2xlIGVycm9yIGlmIGRlYnVnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0gY29udGVudFxuICAgICAqL1xuICAgIGVycm9yKGRlc2NyaXB0aW9uLCBjb250ZW50KSB7XG4gICAgICAgIC8vIElmIGVycm9yLCBkaXNwbGF5IG9yaWdpbmFsIGZpZWxkc1xuICAgICAgICBmb3IgKGxldCB0YXJnZXQgb2YgdGhpcy50YXJnZXRzKSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgZ2VuZXJhdGVkIGJsb2Nrc1xuICAgICAgICBmb3IgKGxldCB0YXJnZXQgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLmNsYXNzZXMudWlFbGVtZW50Q29udGFpbmVyKSkge1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGVidWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihjb250ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBjb25zb2xlIGxvZyBpZiBkZWJ1ZyBpcyB0cnVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0gY29udGVudFxuICAgICAqL1xuICAgIGxvZyhkZXNjcmlwdGlvbiwgY29udGVudCkge1xuICAgICAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY29udGVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEluaXQgdGhlIHBsdWdpblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBsZXQgY21zID0gbmV3IE1iaXpDbXNGaWVsZHMobW9uc2lldXJiaXpDbXNQbHVnaW5Db25maWcpO1xuICAgIGNtcy5pbml0KCk7XG59KTtcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiRHJhZ2dhYmxlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkRyYWdnYWJsZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJEcmFnZ2FibGVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNjYpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0Fic3RyYWN0RXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDY0KTtcblxudmFyIF9BYnN0cmFjdEV2ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Fic3RyYWN0RXZlbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfQWJzdHJhY3RFdmVudDIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfQWJzdHJhY3RQbHVnaW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYwKTtcblxudmFyIF9BYnN0cmFjdFBsdWdpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BYnN0cmFjdFBsdWdpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9BYnN0cmFjdFBsdWdpbjIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY2xvc2VzdCA9IF9fd2VicGFja19yZXF1aXJlX18oNTEpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2Nsb3Nlc3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbG9zZXN0KS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9yZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVxdWVzdE5leHRBbmltYXRpb25GcmFtZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9TZW5zb3JFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oNDQpO1xuXG5PYmplY3Qua2V5cyhfU2Vuc29yRXZlbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9TZW5zb3JFdmVudFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfU2Vuc29yID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Nyk7XG5cbnZhciBfU2Vuc29yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NlbnNvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9TZW5zb3IyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0RyYWdFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xuXG5PYmplY3Qua2V5cyhfRHJhZ0V2ZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfRHJhZ0V2ZW50W2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX0RyYWdnYWJsZUV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG5cbk9iamVjdC5rZXlzKF9EcmFnZ2FibGVFdmVudCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX0RyYWdnYWJsZUV2ZW50W2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX1BsdWdpbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcblxuT2JqZWN0LmtleXMoX1BsdWdpbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9QbHVnaW5zW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX1NlbnNvcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5PYmplY3Qua2V5cyhfU2Vuc29ycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX1NlbnNvcnNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfRHJhZ2dhYmxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNyk7XG5cbnZhciBfRHJhZ2dhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0RyYWdnYWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9EcmFnZ2FibGUyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1NlbnNvciA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Vuc29yJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2Vuc29yKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9Nb3VzZVNlbnNvciA9IF9fd2VicGFja19yZXF1aXJlX18oNDYpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01vdXNlU2Vuc29yJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTW91c2VTZW5zb3IpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX1RvdWNoU2Vuc29yID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Myk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnVG91Y2hTZW5zb3InLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ub3VjaFNlbnNvcikuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfRHJhZ1NlbnNvciA9IF9fd2VicGFja19yZXF1aXJlX18oNDEpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0RyYWdTZW5zb3InLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EcmFnU2Vuc29yKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9Gb3JjZVRvdWNoU2Vuc29yID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9yY2VUb3VjaFNlbnNvcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZvcmNlVG91Y2hTZW5zb3IpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX1NlbnNvckV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxuT2JqZWN0LmtleXMoX1NlbnNvckV2ZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfU2Vuc29yRXZlbnRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1NuYXBwYWJsZUV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XG5cbk9iamVjdC5rZXlzKF9TbmFwcGFibGVFdmVudCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX1NuYXBwYWJsZUV2ZW50W2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9Db2xsaWRhYmxlRXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKTtcblxuT2JqZWN0LmtleXMoX0NvbGxpZGFibGVFdmVudCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX0NvbGxpZGFibGVFdmVudFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxuLyoqKi8gfSksXG4vKiA5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfU29ydGFibGVFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMjcpO1xuXG5PYmplY3Qua2V5cyhfU29ydGFibGVFdmVudCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX1NvcnRhYmxlRXZlbnRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbi8qKiovIH0pLFxuLyogMTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9Td2FwcGFibGVFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMzApO1xuXG5PYmplY3Qua2V5cyhfU3dhcHBhYmxlRXZlbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9Td2FwcGFibGVFdmVudFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxuLyoqKi8gfSksXG4vKiAxMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0Ryb3BwYWJsZUV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMyk7XG5cbk9iamVjdC5rZXlzKF9Ecm9wcGFibGVFdmVudCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX0Ryb3BwYWJsZUV2ZW50W2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG4vKioqLyB9KSxcbi8qIDEyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfQW5ub3VuY2VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2Mik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnQW5ub3VuY2VtZW50Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQW5ub3VuY2VtZW50KS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZGVmYXVsdEFubm91bmNlbWVudE9wdGlvbnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfQW5ub3VuY2VtZW50LmRlZmF1bHRPcHRpb25zO1xuICB9XG59KTtcblxudmFyIF9Gb2N1c2FibGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU5KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb2N1c2FibGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Gb2N1c2FibGUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX01pcnJvciA9IF9fd2VicGFja19yZXF1aXJlX18oNTcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01pcnJvcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01pcnJvcikuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2RlZmF1bHRNaXJyb3JPcHRpb25zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX01pcnJvci5kZWZhdWx0T3B0aW9ucztcbiAgfVxufSk7XG5cbnZhciBfU2Nyb2xsYWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oNTMpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbGFibGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TY3JvbGxhYmxlKS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZGVmYXVsdFNjcm9sbGFibGVPcHRpb25zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX1Njcm9sbGFibGUuZGVmYXVsdE9wdGlvbnM7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKioqLyB9KSxcbi8qIDEzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfRHJhZ2dhYmxlRXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYzKTtcblxuT2JqZWN0LmtleXMoX0RyYWdnYWJsZUV2ZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfRHJhZ2dhYmxlRXZlbnRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbi8qKiovIH0pLFxuLyogMTQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9EcmFnRXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDY1KTtcblxuT2JqZWN0LmtleXMoX0RyYWdFdmVudCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX0RyYWdFdmVudFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxuLyoqKi8gfSksXG4vKiAxNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9BYnN0cmFjdFBsdWdpbiA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfQWJzdHJhY3RQbHVnaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWJzdHJhY3RQbHVnaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBvblNvcnRhYmxlU29ydGVkID0gU3ltYm9sKCdvblNvcnRhYmxlU29ydGVkJyk7XG5cbi8qKlxuICogU3dhcEFuaW1hdGlvbiBkZWZhdWx0IG9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkZWZhdWx0T3B0aW9uc1xuICogQHByb3BlcnR5IHtOdW1iZXJ9IGRlZmF1bHRPcHRpb25zLmR1cmF0aW9uXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZGVmYXVsdE9wdGlvbnMuZWFzaW5nRnVuY3Rpb25cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGVmYXVsdE9wdGlvbnMuaG9yaXpvbnRhbFxuICogQHR5cGUge09iamVjdH1cbiAqL1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBleHBvcnRzLmRlZmF1bHRPcHRpb25zID0ge1xuICBkdXJhdGlvbjogMTUwLFxuICBlYXNpbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0JyxcbiAgaG9yaXpvbnRhbDogZmFsc2Vcbn07XG5cbi8qKlxuICogU3dhcEFuaW1hdGlvbiBwbHVnaW4gYWRkcyBzd2FwIGFuaW1hdGlvbnMgZm9yIHNvcnRhYmxlXG4gKiBAY2xhc3MgU3dhcEFuaW1hdGlvblxuICogQG1vZHVsZSBTd2FwQW5pbWF0aW9uXG4gKiBAZXh0ZW5kcyBBYnN0cmFjdFBsdWdpblxuICovXG5jbGFzcyBTd2FwQW5pbWF0aW9uIGV4dGVuZHMgX0Fic3RyYWN0UGx1Z2luMi5kZWZhdWx0IHtcbiAgLyoqXG4gICAqIFN3YXBBbmltYXRpb24gY29uc3RydWN0b3IuXG4gICAqIEBjb25zdHJ1Y3RzIFN3YXBBbmltYXRpb25cbiAgICogQHBhcmFtIHtEcmFnZ2FibGV9IGRyYWdnYWJsZSAtIERyYWdnYWJsZSBpbnN0YW5jZVxuICAgKi9cbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlKSB7XG4gICAgc3VwZXIoZHJhZ2dhYmxlKTtcblxuICAgIC8qKlxuICAgICAqIFN3YXBBbmltYXRpb24gb3B0aW9uc1xuICAgICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGRlZmF1bHRPcHRpb25zLmR1cmF0aW9uXG4gICAgICogQHByb3BlcnR5IHtTdHJpbmd9IGRlZmF1bHRPcHRpb25zLmVhc2luZ0Z1bmN0aW9uXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdGlvbnMsIHRoaXMuZ2V0T3B0aW9ucygpKTtcblxuICAgIC8qKlxuICAgICAqIExhc3QgYW5pbWF0aW9uIGZyYW1lXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGxhc3RBbmltYXRpb25GcmFtZVxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5sYXN0QW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuXG4gICAgdGhpc1tvblNvcnRhYmxlU29ydGVkXSA9IHRoaXNbb25Tb3J0YWJsZVNvcnRlZF0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyBwbHVnaW5zIGV2ZW50IGxpc3RlbmVyc1xuICAgKi9cbiAgYXR0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9uKCdzb3J0YWJsZTpzb3J0ZWQnLCB0aGlzW29uU29ydGFibGVTb3J0ZWRdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2hlcyBwbHVnaW5zIGV2ZW50IGxpc3RlbmVyc1xuICAgKi9cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9mZignc29ydGFibGU6c29ydGVkJywgdGhpc1tvblNvcnRhYmxlU29ydGVkXSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBvcHRpb25zIHBhc3NlZCB0aHJvdWdoIGRyYWdnYWJsZVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBnZXRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZS5vcHRpb25zLnN3YXBBbmltYXRpb24gfHwge307XG4gIH1cblxuICAvKipcbiAgICogU29ydGFibGUgc29ydGVkIGhhbmRsZXJcbiAgICogQHBhcmFtIHtTb3J0YWJsZVNvcnRlZEV2ZW50fSBzb3J0YWJsZUV2ZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBbb25Tb3J0YWJsZVNvcnRlZF0oeyBvbGRJbmRleCwgbmV3SW5kZXgsIGRyYWdFdmVudCB9KSB7XG4gICAgY29uc3QgeyBzb3VyY2UsIG92ZXIgfSA9IGRyYWdFdmVudDtcblxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGFzdEFuaW1hdGlvbkZyYW1lKTtcblxuICAgIC8vIENhbiBiZSBkb25lIGluIGEgc2VwYXJhdGUgZnJhbWVcbiAgICB0aGlzLmxhc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBpZiAob2xkSW5kZXggPj0gbmV3SW5kZXgpIHtcbiAgICAgICAgYW5pbWF0ZShzb3VyY2UsIG92ZXIsIHRoaXMub3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmltYXRlKG92ZXIsIHNvdXJjZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBTd2FwQW5pbWF0aW9uOyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEFuaW1hdGVzIHR3byBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZnJvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5kdXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMuZWFzaW5nRnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmhvcml6b250YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuZnVuY3Rpb24gYW5pbWF0ZShmcm9tLCB0bywgeyBkdXJhdGlvbiwgZWFzaW5nRnVuY3Rpb24sIGhvcml6b250YWwgfSkge1xuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW2Zyb20sIHRvXSkge1xuICAgIGVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgfVxuXG4gIGlmIChob3Jpem9udGFsKSB7XG4gICAgY29uc3Qgd2lkdGggPSBmcm9tLm9mZnNldFdpZHRoO1xuICAgIGZyb20uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7d2lkdGh9cHgsIDAsIDApYDtcbiAgICB0by5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoLSR7d2lkdGh9cHgsIDAsIDApYDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBoZWlnaHQgPSBmcm9tLm9mZnNldEhlaWdodDtcbiAgICBmcm9tLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLCAke2hlaWdodH1weCwgMClgO1xuICAgIHRvLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLCAtJHtoZWlnaHR9cHgsIDApYDtcbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtmcm9tLCB0b10pIHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHJlc2V0RWxlbWVudE9uVHJhbnNpdGlvbkVuZCk7XG4gICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgdHJhbnNmb3JtICR7ZHVyYXRpb259bXMgJHtlYXNpbmdGdW5jdGlvbn1gO1xuICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFJlc2V0cyBhbmltYXRpb24gc3R5bGUgcHJvcGVydGllcyBhZnRlciBhbmltYXRpb24gaGFzIGNvbXBsZXRlZFxuICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlc2V0RWxlbWVudE9uVHJhbnNpdGlvbkVuZChldmVudCkge1xuICBldmVudC50YXJnZXQuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICBldmVudC50YXJnZXQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICcnO1xuICBldmVudC50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHJlc2V0RWxlbWVudE9uVHJhbnNpdGlvbkVuZCk7XG59XG5cbi8qKiovIH0pLFxuLyogMTYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdE9wdGlvbnMgPSB1bmRlZmluZWQ7XG5cbnZhciBfU3dhcEFuaW1hdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xuXG52YXIgX1N3YXBBbmltYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3dhcEFuaW1hdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9Td2FwQW5pbWF0aW9uMi5kZWZhdWx0O1xuZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IF9Td2FwQW5pbWF0aW9uLmRlZmF1bHRPcHRpb25zO1xuXG4vKioqLyB9KSxcbi8qIDE3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfQWJzdHJhY3RQbHVnaW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX0Fic3RyYWN0UGx1Z2luMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Fic3RyYWN0UGx1Z2luKTtcblxudmFyIF9TbmFwcGFibGVFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IG9uRHJhZ1N0YXJ0ID0gU3ltYm9sKCdvbkRyYWdTdGFydCcpO1xuY29uc3Qgb25EcmFnU3RvcCA9IFN5bWJvbCgnb25EcmFnU3RvcCcpO1xuY29uc3Qgb25EcmFnT3ZlciA9IFN5bWJvbCgnb25EcmFnT3ZlcicpO1xuY29uc3Qgb25EcmFnT3V0ID0gU3ltYm9sKCdvbkRyYWdPdXQnKTtcbmNvbnN0IG9uTWlycm9yQ3JlYXRlZCA9IFN5bWJvbCgnb25NaXJyb3JDcmVhdGVkJyk7XG5jb25zdCBvbk1pcnJvckRlc3Ryb3kgPSBTeW1ib2woJ29uTWlycm9yRGVzdHJveScpO1xuXG4vKipcbiAqIFNuYXBwYWJsZSBwbHVnaW4gd2hpY2ggc25hcHMgZHJhZ2dhYmxlIGVsZW1lbnRzIGludG8gcGxhY2VcbiAqIEBjbGFzcyBTbmFwcGFibGVcbiAqIEBtb2R1bGUgU25hcHBhYmxlXG4gKiBAZXh0ZW5kcyBBYnN0cmFjdFBsdWdpblxuICovXG5jbGFzcyBTbmFwcGFibGUgZXh0ZW5kcyBfQWJzdHJhY3RQbHVnaW4yLmRlZmF1bHQge1xuICAvKipcbiAgICogU25hcHBhYmxlIGNvbnN0cnVjdG9yLlxuICAgKiBAY29uc3RydWN0cyBTbmFwcGFibGVcbiAgICogQHBhcmFtIHtEcmFnZ2FibGV9IGRyYWdnYWJsZSAtIERyYWdnYWJsZSBpbnN0YW5jZVxuICAgKi9cbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlKSB7XG4gICAgc3VwZXIoZHJhZ2dhYmxlKTtcblxuICAgIC8qKlxuICAgICAqIEtlZXBzIHRyYWNrIG9mIHRoZSBmaXJzdCBzb3VyY2UgZWxlbWVudFxuICAgICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR8bnVsbH0gZmlyc3RTb3VyY2VcbiAgICAgKi9cbiAgICB0aGlzLmZpcnN0U291cmNlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEtlZXBzIHRyYWNrIG9mIHRoZSBtaXJyb3IgZWxlbWVudFxuICAgICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IG1pcnJvclxuICAgICAqL1xuICAgIHRoaXMubWlycm9yID0gbnVsbDtcblxuICAgIHRoaXNbb25EcmFnU3RhcnRdID0gdGhpc1tvbkRyYWdTdGFydF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ1N0b3BdID0gdGhpc1tvbkRyYWdTdG9wXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnT3Zlcl0gPSB0aGlzW29uRHJhZ092ZXJdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdPdXRdID0gdGhpc1tvbkRyYWdPdXRdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbk1pcnJvckNyZWF0ZWRdID0gdGhpc1tvbk1pcnJvckNyZWF0ZWRdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbk1pcnJvckRlc3Ryb3ldID0gdGhpc1tvbk1pcnJvckRlc3Ryb3ldLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgcGx1Z2lucyBldmVudCBsaXN0ZW5lcnNcbiAgICovXG4gIGF0dGFjaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS5vbignZHJhZzpzdGFydCcsIHRoaXNbb25EcmFnU3RhcnRdKS5vbignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSkub24oJ2RyYWc6b3ZlcicsIHRoaXNbb25EcmFnT3Zlcl0pLm9uKCdkcmFnOm91dCcsIHRoaXNbb25EcmFnT3V0XSkub24oJ2Ryb3BwYWJsZTpvdmVyJywgdGhpc1tvbkRyYWdPdmVyXSkub24oJ2Ryb3BwYWJsZTpvdXQnLCB0aGlzW29uRHJhZ091dF0pLm9uKCdtaXJyb3I6Y3JlYXRlZCcsIHRoaXNbb25NaXJyb3JDcmVhdGVkXSkub24oJ21pcnJvcjpkZXN0cm95JywgdGhpc1tvbk1pcnJvckRlc3Ryb3ldKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2hlcyBwbHVnaW5zIGV2ZW50IGxpc3RlbmVyc1xuICAgKi9cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9mZignZHJhZzpzdGFydCcsIHRoaXNbb25EcmFnU3RhcnRdKS5vZmYoJ2RyYWc6c3RvcCcsIHRoaXNbb25EcmFnU3RvcF0pLm9mZignZHJhZzpvdmVyJywgdGhpc1tvbkRyYWdPdmVyXSkub2ZmKCdkcmFnOm91dCcsIHRoaXNbb25EcmFnT3V0XSkub2ZmKCdkcm9wcGFibGU6b3ZlcicsIHRoaXNbb25EcmFnT3Zlcl0pLm9mZignZHJvcHBhYmxlOm91dCcsIHRoaXNbb25EcmFnT3V0XSkub2ZmKCdtaXJyb3I6Y3JlYXRlZCcsIHRoaXNbb25NaXJyb3JDcmVhdGVkXSkub2ZmKCdtaXJyb3I6ZGVzdHJveScsIHRoaXNbb25NaXJyb3JEZXN0cm95XSk7XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBzdGFydCBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RHJhZ1N0YXJ0RXZlbnR9IGV2ZW50IC0gRHJhZyBzdGFydCBldmVudFxuICAgKi9cbiAgW29uRHJhZ1N0YXJ0XShldmVudCkge1xuICAgIGlmIChldmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5maXJzdFNvdXJjZSA9IGV2ZW50LnNvdXJjZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIHN0b3AgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0RyYWdTdG9wRXZlbnR9IGV2ZW50IC0gRHJhZyBzdG9wIGV2ZW50XG4gICAqL1xuICBbb25EcmFnU3RvcF0oKSB7XG4gICAgdGhpcy5maXJzdFNvdXJjZSA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBvdmVyIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtEcmFnT3ZlckV2ZW50fERyb3BwYWJsZU92ZXJFdmVudH0gZXZlbnQgLSBEcmFnIG92ZXIgZXZlbnRcbiAgICovXG4gIFtvbkRyYWdPdmVyXShldmVudCkge1xuICAgIGlmIChldmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlID0gZXZlbnQuc291cmNlIHx8IGV2ZW50LmRyYWdFdmVudC5zb3VyY2U7XG5cbiAgICBpZiAoc291cmNlID09PSB0aGlzLmZpcnN0U291cmNlKSB7XG4gICAgICB0aGlzLmZpcnN0U291cmNlID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzbmFwSW5FdmVudCA9IG5ldyBfU25hcHBhYmxlRXZlbnQuU25hcEluRXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudCxcbiAgICAgIHNuYXBwYWJsZTogZXZlbnQub3ZlciB8fCBldmVudC5kcm9wcGFibGVcbiAgICB9KTtcblxuICAgIHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXIoc25hcEluRXZlbnQpO1xuXG4gICAgaWYgKHNuYXBJbkV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5taXJyb3IpIHtcbiAgICAgIHRoaXMubWlycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgc291cmNlLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kcmFnZ2FibGUuZ2V0Q2xhc3NOYW1lRm9yKCdzb3VyY2U6ZHJhZ2dpbmcnKSk7XG4gICAgc291cmNlLmNsYXNzTGlzdC5hZGQodGhpcy5kcmFnZ2FibGUuZ2V0Q2xhc3NOYW1lRm9yKCdzb3VyY2U6cGxhY2VkJykpO1xuXG4gICAgLy8gTmVlZCB0byBjYW5jZWwgdGhpcyBpbiBkcmFnIG91dFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc291cmNlLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kcmFnZ2FibGUuZ2V0Q2xhc3NOYW1lRm9yKCdzb3VyY2U6cGxhY2VkJykpO1xuICAgIH0sIHRoaXMuZHJhZ2dhYmxlLm9wdGlvbnMucGxhY2VkVGltZW91dCk7XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBvdXQgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0RyYWdPdXRFdmVudHxEcm9wcGFibGVPdXRFdmVudH0gZXZlbnQgLSBEcmFnIG91dCBldmVudFxuICAgKi9cbiAgW29uRHJhZ091dF0oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZSA9IGV2ZW50LnNvdXJjZSB8fCBldmVudC5kcmFnRXZlbnQuc291cmNlO1xuXG4gICAgY29uc3Qgc25hcE91dEV2ZW50ID0gbmV3IF9TbmFwcGFibGVFdmVudC5TbmFwT3V0RXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudCxcbiAgICAgIHNuYXBwYWJsZTogZXZlbnQub3ZlciB8fCBldmVudC5kcm9wcGFibGVcbiAgICB9KTtcblxuICAgIHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXIoc25hcE91dEV2ZW50KTtcblxuICAgIGlmIChzbmFwT3V0RXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1pcnJvcikge1xuICAgICAgdGhpcy5taXJyb3Iuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH1cblxuICAgIHNvdXJjZS5jbGFzc0xpc3QuYWRkKHRoaXMuZHJhZ2dhYmxlLmdldENsYXNzTmFtZUZvcignc291cmNlOmRyYWdnaW5nJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1pcnJvciBjcmVhdGVkIGhhbmRsZXJcbiAgICogQHBhcmFtIHtNaXJyb3JDcmVhdGVkRXZlbnR9IG1pcnJvckV2ZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBbb25NaXJyb3JDcmVhdGVkXSh7IG1pcnJvciB9KSB7XG4gICAgdGhpcy5taXJyb3IgPSBtaXJyb3I7XG4gIH1cblxuICAvKipcbiAgICogTWlycm9yIGRlc3Ryb3kgaGFuZGxlclxuICAgKiBAcGFyYW0ge01pcnJvckRlc3Ryb3lFdmVudH0gbWlycm9yRXZlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIFtvbk1pcnJvckRlc3Ryb3ldKCkge1xuICAgIHRoaXMubWlycm9yID0gbnVsbDtcbiAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU25hcHBhYmxlO1xuXG4vKioqLyB9KSxcbi8qIDE4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlNuYXBPdXRFdmVudCA9IGV4cG9ydHMuU25hcEluRXZlbnQgPSBleHBvcnRzLlNuYXBFdmVudCA9IHVuZGVmaW5lZDtcblxudmFyIF9BYnN0cmFjdEV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9BYnN0cmFjdEV2ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Fic3RyYWN0RXZlbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIEJhc2Ugc25hcCBldmVudFxuICogQGNsYXNzIFNuYXBFdmVudFxuICogQG1vZHVsZSBTbmFwRXZlbnRcbiAqIEBleHRlbmRzIEFic3RyYWN0RXZlbnRcbiAqL1xuY2xhc3MgU25hcEV2ZW50IGV4dGVuZHMgX0Fic3RyYWN0RXZlbnQyLmRlZmF1bHQge1xuXG4gIC8qKlxuICAgKiBEcmFnIGV2ZW50IHRoYXQgdHJpZ2dlcmVkIHRoaXMgc25hcCBldmVudFxuICAgKiBAcHJvcGVydHkgZHJhZ0V2ZW50XG4gICAqIEB0eXBlIHtEcmFnRXZlbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IGRyYWdFdmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmRyYWdFdmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTbmFwcGFibGUgZWxlbWVudFxuICAgKiBAcHJvcGVydHkgc25hcHBhYmxlXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgc25hcHBhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuc25hcHBhYmxlO1xuICB9XG59XG5cbmV4cG9ydHMuU25hcEV2ZW50ID0gU25hcEV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBTbmFwIGluIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIFNuYXBJbkV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBTbmFwSW5FdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIFNuYXBFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5TbmFwRXZlbnQudHlwZSA9ICdzbmFwJztcbmNsYXNzIFNuYXBJbkV2ZW50IGV4dGVuZHMgU25hcEV2ZW50IHt9XG5cbmV4cG9ydHMuU25hcEluRXZlbnQgPSBTbmFwSW5FdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFNuYXAgb3V0IGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzcyBTbmFwT3V0RXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBTbmFwT3V0RXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGV4dGVuZHMgU25hcEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5TbmFwSW5FdmVudC50eXBlID0gJ3NuYXA6aW4nO1xuU25hcEluRXZlbnQuY2FuY2VsYWJsZSA9IHRydWU7XG5jbGFzcyBTbmFwT3V0RXZlbnQgZXh0ZW5kcyBTbmFwRXZlbnQge31cbmV4cG9ydHMuU25hcE91dEV2ZW50ID0gU25hcE91dEV2ZW50O1xuU25hcE91dEV2ZW50LnR5cGUgPSAnc25hcDpvdXQnO1xuU25hcE91dEV2ZW50LmNhbmNlbGFibGUgPSB0cnVlO1xuXG4vKioqLyB9KSxcbi8qIDE5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfU25hcHBhYmxlRXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXG5PYmplY3Qua2V5cyhfU25hcHBhYmxlRXZlbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9TbmFwcGFibGVFdmVudFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9TbmFwcGFibGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcblxudmFyIF9TbmFwcGFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU25hcHBhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1NuYXBwYWJsZTIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiAyMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9BYnN0cmFjdFBsdWdpbiA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfQWJzdHJhY3RQbHVnaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWJzdHJhY3RQbHVnaW4pO1xuXG52YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3Qgb25NaXJyb3JDcmVhdGVkID0gU3ltYm9sKCdvbk1pcnJvckNyZWF0ZWQnKTtcbmNvbnN0IG9uTWlycm9yRGVzdHJveSA9IFN5bWJvbCgnb25NaXJyb3JEZXN0cm95Jyk7XG5jb25zdCBvbkRyYWdPdmVyID0gU3ltYm9sKCdvbkRyYWdPdmVyJyk7XG5jb25zdCByZXNpemUgPSBTeW1ib2woJ3Jlc2l6ZScpO1xuXG4vKipcbiAqIFJlc2l6ZU1pcnJvciBkZWZhdWx0IG9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkZWZhdWx0T3B0aW9uc1xuICogQHR5cGUge09iamVjdH1cbiAqL1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBleHBvcnRzLmRlZmF1bHRPcHRpb25zID0ge307XG5cbi8qKlxuICogVGhlIFJlc2l6ZU1pcnJvciBwbHVnaW4gcmVzaXplcyB0aGUgbWlycm9yIGVsZW1lbnQgdG8gdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGRyYWdnYWJsZSBlbGVtZW50IHRoYXQgdGhlIG1pcnJvciBpcyBob3ZlcmluZyBvdmVyXG4gKiBAY2xhc3MgUmVzaXplTWlycm9yXG4gKiBAbW9kdWxlIFJlc2l6ZU1pcnJvclxuICogQGV4dGVuZHMgQWJzdHJhY3RQbHVnaW5cbiAqL1xuY2xhc3MgUmVzaXplTWlycm9yIGV4dGVuZHMgX0Fic3RyYWN0UGx1Z2luMi5kZWZhdWx0IHtcbiAgLyoqXG4gICAqIFJlc2l6ZU1pcnJvciBjb25zdHJ1Y3Rvci5cbiAgICogQGNvbnN0cnVjdHMgUmVzaXplTWlycm9yXG4gICAqIEBwYXJhbSB7RHJhZ2dhYmxlfSBkcmFnZ2FibGUgLSBEcmFnZ2FibGUgaW5zdGFuY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZSkge1xuICAgIHN1cGVyKGRyYWdnYWJsZSk7XG5cbiAgICAvKipcbiAgICAgKiBSZXNpemVNaXJyb3Igb3B0aW9uc1xuICAgICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdGlvbnMsIHRoaXMuZ2V0T3B0aW9ucygpKTtcblxuICAgIC8qKlxuICAgICAqIFJlc2l6ZU1pcnJvciByZW1lbWJlcnMgdGhlIGxhc3Qgd2lkdGggd2hlbiByZXNpemluZyB0aGUgbWlycm9yXG4gICAgICogdG8gYXZvaWQgYWRkaXRpb25hbCB3cml0ZXMgdG8gdGhlIERPTVxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsYXN0V2lkdGhcbiAgICAgKi9cbiAgICB0aGlzLmxhc3RXaWR0aCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBSZXNpemVNaXJyb3IgcmVtZW1iZXJzIHRoZSBsYXN0IGhlaWdodCB3aGVuIHJlc2l6aW5nIHRoZSBtaXJyb3JcbiAgICAgKiB0byBhdm9pZCBhZGRpdGlvbmFsIHdyaXRlcyB0byB0aGUgRE9NXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGxhc3RIZWlnaHRcbiAgICAgKi9cbiAgICB0aGlzLmxhc3RIZWlnaHQgPSAwO1xuXG4gICAgLyoqXG4gICAgICogS2VlcHMgdHJhY2sgb2YgdGhlIG1pcnJvciBlbGVtZW50XG4gICAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gbWlycm9yXG4gICAgICovXG4gICAgdGhpcy5taXJyb3IgPSBudWxsO1xuXG4gICAgdGhpc1tvbk1pcnJvckNyZWF0ZWRdID0gdGhpc1tvbk1pcnJvckNyZWF0ZWRdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbk1pcnJvckRlc3Ryb3ldID0gdGhpc1tvbk1pcnJvckRlc3Ryb3ldLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdPdmVyXSA9IHRoaXNbb25EcmFnT3Zlcl0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyBwbHVnaW5zIGV2ZW50IGxpc3RlbmVyc1xuICAgKi9cbiAgYXR0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9uKCdtaXJyb3I6Y3JlYXRlZCcsIHRoaXNbb25NaXJyb3JDcmVhdGVkXSkub24oJ2RyYWc6b3ZlcicsIHRoaXNbb25EcmFnT3Zlcl0pLm9uKCdkcmFnOm92ZXI6Y29udGFpbmVyJywgdGhpc1tvbkRyYWdPdmVyXSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoZXMgcGx1Z2lucyBldmVudCBsaXN0ZW5lcnNcbiAgICovXG4gIGRldGFjaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS5vZmYoJ21pcnJvcjpjcmVhdGVkJywgdGhpc1tvbk1pcnJvckNyZWF0ZWRdKS5vZmYoJ21pcnJvcjpkZXN0cm95JywgdGhpc1tvbk1pcnJvckRlc3Ryb3ldKS5vZmYoJ2RyYWc6b3ZlcicsIHRoaXNbb25EcmFnT3Zlcl0pLm9mZignZHJhZzpvdmVyOmNvbnRhaW5lcicsIHRoaXNbb25EcmFnT3Zlcl0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgb3B0aW9ucyBwYXNzZWQgdGhyb3VnaCBkcmFnZ2FibGVcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgZ2V0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGUub3B0aW9ucy5yZXNpemVNaXJyb3IgfHwge307XG4gIH1cblxuICAvKipcbiAgICogTWlycm9yIGNyZWF0ZWQgaGFuZGxlclxuICAgKiBAcGFyYW0ge01pcnJvckNyZWF0ZWRFdmVudH0gbWlycm9yRXZlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIFtvbk1pcnJvckNyZWF0ZWRdKHsgbWlycm9yIH0pIHtcbiAgICB0aGlzLm1pcnJvciA9IG1pcnJvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNaXJyb3IgZGVzdHJveSBoYW5kbGVyXG4gICAqIEBwYXJhbSB7TWlycm9yRGVzdHJveUV2ZW50fSBtaXJyb3JFdmVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgW29uTWlycm9yRGVzdHJveV0oKSB7XG4gICAgdGhpcy5taXJyb3IgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgb3ZlciBoYW5kbGVyXG4gICAqIEBwYXJhbSB7RHJhZ092ZXJFdmVudCB8IERyYWdPdmVyQ29udGFpbmVyfSBkcmFnRXZlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIFtvbkRyYWdPdmVyXShkcmFnRXZlbnQpIHtcbiAgICB0aGlzW3Jlc2l6ZV0oZHJhZ0V2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNpemUgZnVuY3Rpb24gZm9yXG4gICAqIEBwYXJhbSB7RHJhZ092ZXJFdmVudCB8IERyYWdPdmVyQ29udGFpbmVyfSBkcmFnRXZlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIFtyZXNpemVdKHsgb3ZlckNvbnRhaW5lciwgb3ZlciB9KSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLm1pcnJvci5wYXJlbnROb2RlICE9PSBvdmVyQ29udGFpbmVyKSB7XG4gICAgICAgIG92ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5taXJyb3IpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvdmVyRWxlbWVudCA9IG92ZXIgfHwgdGhpcy5kcmFnZ2FibGUuZ2V0RHJhZ2dhYmxlRWxlbWVudHNGb3JDb250YWluZXIob3ZlckNvbnRhaW5lcilbMF07XG5cbiAgICAgIGlmICghb3ZlckVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAoMCwgX3V0aWxzLnJlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUpKCgpID0+IHtcbiAgICAgICAgY29uc3Qgb3ZlclJlY3QgPSBvdmVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBpZiAodGhpcy5sYXN0SGVpZ2h0ID09PSBvdmVyUmVjdC5oZWlnaHQgJiYgdGhpcy5sYXN0V2lkdGggPT09IG92ZXJSZWN0LndpZHRoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5taXJyb3Iuc3R5bGUud2lkdGggPSBgJHtvdmVyUmVjdC53aWR0aH1weGA7XG4gICAgICAgIHRoaXMubWlycm9yLnN0eWxlLmhlaWdodCA9IGAke292ZXJSZWN0LmhlaWdodH1weGA7XG5cbiAgICAgICAgdGhpcy5sYXN0V2lkdGggPSBvdmVyUmVjdC53aWR0aDtcbiAgICAgICAgdGhpcy5sYXN0SGVpZ2h0ID0gb3ZlclJlY3QuaGVpZ2h0O1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJlc2l6ZU1pcnJvcjtcblxuLyoqKi8gfSksXG4vKiAyMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IHVuZGVmaW5lZDtcblxudmFyIF9SZXNpemVNaXJyb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKTtcblxudmFyIF9SZXNpemVNaXJyb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVzaXplTWlycm9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1Jlc2l6ZU1pcnJvcjIuZGVmYXVsdDtcbmV4cG9ydHMuZGVmYXVsdE9wdGlvbnMgPSBfUmVzaXplTWlycm9yLmRlZmF1bHRPcHRpb25zO1xuXG4vKioqLyB9KSxcbi8qIDIyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfQWJzdHJhY3RQbHVnaW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX0Fic3RyYWN0UGx1Z2luMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Fic3RyYWN0UGx1Z2luKTtcblxudmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfQ29sbGlkYWJsZUV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3Qgb25EcmFnTW92ZSA9IFN5bWJvbCgnb25EcmFnTW92ZScpO1xuY29uc3Qgb25EcmFnU3RvcCA9IFN5bWJvbCgnb25EcmFnU3RvcCcpO1xuY29uc3Qgb25SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBTeW1ib2woJ29uUmVxdWVzdEFuaW1hdGlvbkZyYW1lJyk7XG5cbi8qKlxuICogQ29sbGlkYWJsZSBwbHVnaW4gd2hpY2ggZGV0ZWN0cyBjb2xsaWRpbmcgZWxlbWVudHMgd2hpbGUgZHJhZ2dpbmdcbiAqIEBjbGFzcyBDb2xsaWRhYmxlXG4gKiBAbW9kdWxlIENvbGxpZGFibGVcbiAqIEBleHRlbmRzIEFic3RyYWN0UGx1Z2luXG4gKi9cbmNsYXNzIENvbGxpZGFibGUgZXh0ZW5kcyBfQWJzdHJhY3RQbHVnaW4yLmRlZmF1bHQge1xuICAvKipcbiAgICogQ29sbGlkYWJsZSBjb25zdHJ1Y3Rvci5cbiAgICogQGNvbnN0cnVjdHMgQ29sbGlkYWJsZVxuICAgKiBAcGFyYW0ge0RyYWdnYWJsZX0gZHJhZ2dhYmxlIC0gRHJhZ2dhYmxlIGluc3RhbmNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGUpIHtcbiAgICBzdXBlcihkcmFnZ2FibGUpO1xuXG4gICAgLyoqXG4gICAgICogS2VlcHMgdHJhY2sgb2YgY3VycmVudGx5IGNvbGxpZGluZyBlbGVtZW50c1xuICAgICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR8bnVsbH0gY3VycmVudGx5Q29sbGlkaW5nRWxlbWVudFxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudHxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuY3VycmVudGx5Q29sbGlkaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBLZWVwcyB0cmFjayBvZiBjdXJyZW50bHkgY29sbGlkaW5nIGVsZW1lbnRzXG4gICAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudHxudWxsfSBsYXN0Q29sbGlkaW5nRWxlbWVudFxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudHxudWxsfVxuICAgICAqL1xuICAgIHRoaXMubGFzdENvbGxpZGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQW5pbWF0aW9uIGZyYW1lIGZvciBmaW5kaW5nIGNvbGxpZGluZyBlbGVtZW50c1xuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfG51bGx9IGN1cnJlbnRBbmltYXRpb25GcmFtZVxuICAgICAqIEB0eXBlIHtOdW1iZXJ8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSA9IG51bGw7XG5cbiAgICB0aGlzW29uRHJhZ01vdmVdID0gdGhpc1tvbkRyYWdNb3ZlXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnU3RvcF0gPSB0aGlzW29uRHJhZ1N0b3BdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvblJlcXVlc3RBbmltYXRpb25GcmFtZV0gPSB0aGlzW29uUmVxdWVzdEFuaW1hdGlvbkZyYW1lXS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIHBsdWdpbnMgZXZlbnQgbGlzdGVuZXJzXG4gICAqL1xuICBhdHRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsIHRoaXNbb25EcmFnTW92ZV0pLm9uKCdkcmFnOnN0b3AnLCB0aGlzW29uRHJhZ1N0b3BdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2hlcyBwbHVnaW5zIGV2ZW50IGxpc3RlbmVyc1xuICAgKi9cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9mZignZHJhZzptb3ZlJywgdGhpc1tvbkRyYWdNb3ZlXSkub2ZmKCdkcmFnOnN0b3AnLCB0aGlzW29uRHJhZ1N0b3BdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGN1cnJlbnQgY29sbGlkYWJsZXMgYmFzZWQgb24gYGNvbGxpZGFibGVzYCBvcHRpb25cbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnRbXX1cbiAgICovXG4gIGdldENvbGxpZGFibGVzKCkge1xuICAgIGNvbnN0IGNvbGxpZGFibGVzID0gdGhpcy5kcmFnZ2FibGUub3B0aW9ucy5jb2xsaWRhYmxlcztcblxuICAgIGlmICh0eXBlb2YgY29sbGlkYWJsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjb2xsaWRhYmxlcykpO1xuICAgIH0gZWxzZSBpZiAoY29sbGlkYWJsZXMgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBjb2xsaWRhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY29sbGlkYWJsZXMpO1xuICAgIH0gZWxzZSBpZiAoY29sbGlkYWJsZXMgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgcmV0dXJuIFtjb2xsaWRhYmxlc107XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29sbGlkYWJsZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjb2xsaWRhYmxlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgbW92ZSBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RHJhZ01vdmVFdmVudH0gZXZlbnQgLSBEcmFnIG1vdmUgZXZlbnRcbiAgICovXG4gIFtvbkRyYWdNb3ZlXShldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnNlbnNvckV2ZW50LnRhcmdldDtcblxuICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXNbb25SZXF1ZXN0QW5pbWF0aW9uRnJhbWVdKHRhcmdldCkpO1xuXG4gICAgaWYgKHRoaXMuY3VycmVudGx5Q29sbGlkaW5nRWxlbWVudCkge1xuICAgICAgZXZlbnQuY2FuY2VsKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29sbGlkYWJsZUluRXZlbnQgPSBuZXcgX0NvbGxpZGFibGVFdmVudC5Db2xsaWRhYmxlSW5FdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgY29sbGlkaW5nRWxlbWVudDogdGhpcy5jdXJyZW50bHlDb2xsaWRpbmdFbGVtZW50XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb2xsaWRhYmxlT3V0RXZlbnQgPSBuZXcgX0NvbGxpZGFibGVFdmVudC5Db2xsaWRhYmxlT3V0RXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudCxcbiAgICAgIGNvbGxpZGluZ0VsZW1lbnQ6IHRoaXMubGFzdENvbGxpZGluZ0VsZW1lbnRcbiAgICB9KTtcblxuICAgIGNvbnN0IGVudGVyaW5nQ29sbGlkYWJsZSA9IEJvb2xlYW4odGhpcy5jdXJyZW50bHlDb2xsaWRpbmdFbGVtZW50ICYmIHRoaXMubGFzdENvbGxpZGluZ0VsZW1lbnQgIT09IHRoaXMuY3VycmVudGx5Q29sbGlkaW5nRWxlbWVudCk7XG4gICAgY29uc3QgbGVhdmluZ0NvbGxpZGFibGUgPSBCb29sZWFuKCF0aGlzLmN1cnJlbnRseUNvbGxpZGluZ0VsZW1lbnQgJiYgdGhpcy5sYXN0Q29sbGlkaW5nRWxlbWVudCk7XG5cbiAgICBpZiAoZW50ZXJpbmdDb2xsaWRhYmxlKSB7XG4gICAgICBpZiAodGhpcy5sYXN0Q29sbGlkaW5nRWxlbWVudCkge1xuICAgICAgICB0aGlzLmRyYWdnYWJsZS50cmlnZ2VyKGNvbGxpZGFibGVPdXRFdmVudCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXIoY29sbGlkYWJsZUluRXZlbnQpO1xuICAgIH0gZWxzZSBpZiAobGVhdmluZ0NvbGxpZGFibGUpIHtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXIoY29sbGlkYWJsZU91dEV2ZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLmxhc3RDb2xsaWRpbmdFbGVtZW50ID0gdGhpcy5jdXJyZW50bHlDb2xsaWRpbmdFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgc3RvcCBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RHJhZ1N0b3BFdmVudH0gZXZlbnQgLSBEcmFnIHN0b3AgZXZlbnRcbiAgICovXG4gIFtvbkRyYWdTdG9wXShldmVudCkge1xuICAgIGNvbnN0IGxhc3RDb2xsaWRpbmdFbGVtZW50ID0gdGhpcy5jdXJyZW50bHlDb2xsaWRpbmdFbGVtZW50IHx8IHRoaXMubGFzdENvbGxpZGluZ0VsZW1lbnQ7XG4gICAgY29uc3QgY29sbGlkYWJsZU91dEV2ZW50ID0gbmV3IF9Db2xsaWRhYmxlRXZlbnQuQ29sbGlkYWJsZU91dEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBjb2xsaWRpbmdFbGVtZW50OiBsYXN0Q29sbGlkaW5nRWxlbWVudFxuICAgIH0pO1xuXG4gICAgaWYgKGxhc3RDb2xsaWRpbmdFbGVtZW50KSB7XG4gICAgICB0aGlzLmRyYWdnYWJsZS50cmlnZ2VyKGNvbGxpZGFibGVPdXRFdmVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0Q29sbGlkaW5nRWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50bHlDb2xsaWRpbmdFbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb24gZnJhbWUgZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0IC0gQ3VycmVudCBtb3ZlIHRhcmdldFxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICovXG4gIFtvblJlcXVlc3RBbmltYXRpb25GcmFtZV0odGFyZ2V0KSB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbGxpZGFibGVzID0gdGhpcy5nZXRDb2xsaWRhYmxlcygpO1xuICAgICAgdGhpcy5jdXJyZW50bHlDb2xsaWRpbmdFbGVtZW50ID0gKDAsIF91dGlscy5jbG9zZXN0KSh0YXJnZXQsIGVsZW1lbnQgPT4gY29sbGlkYWJsZXMuaW5jbHVkZXMoZWxlbWVudCkpO1xuICAgIH07XG4gIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENvbGxpZGFibGU7XG5cbi8qKiovIH0pLFxuLyogMjMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuQ29sbGlkYWJsZU91dEV2ZW50ID0gZXhwb3J0cy5Db2xsaWRhYmxlSW5FdmVudCA9IGV4cG9ydHMuQ29sbGlkYWJsZUV2ZW50ID0gdW5kZWZpbmVkO1xuXG52YXIgX0Fic3RyYWN0RXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX0Fic3RyYWN0RXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWJzdHJhY3RFdmVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQmFzZSBjb2xsaWRhYmxlIGV2ZW50XG4gKiBAY2xhc3MgQ29sbGlkYWJsZUV2ZW50XG4gKiBAbW9kdWxlIENvbGxpZGFibGVFdmVudFxuICogQGV4dGVuZHMgQWJzdHJhY3RFdmVudFxuICovXG5jbGFzcyBDb2xsaWRhYmxlRXZlbnQgZXh0ZW5kcyBfQWJzdHJhY3RFdmVudDIuZGVmYXVsdCB7XG5cbiAgLyoqXG4gICAqIERyYWcgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhpcyBjb2xsaWFibGUgZXZlbnRcbiAgICogQHByb3BlcnR5IGRyYWdFdmVudFxuICAgKiBAdHlwZSB7RHJhZ0V2ZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBkcmFnRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5kcmFnRXZlbnQ7XG4gIH1cbn1cblxuZXhwb3J0cy5Db2xsaWRhYmxlRXZlbnQgPSBDb2xsaWRhYmxlRXZlbnQ7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIENvbGxpZGFibGUgaW4gZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgQ29sbGlkYWJsZUluRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIENvbGxpZGFibGVJbkV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGV4dGVuZHMgQ29sbGlkYWJsZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbkNvbGxpZGFibGVFdmVudC50eXBlID0gJ2NvbGxpZGFibGUnO1xuY2xhc3MgQ29sbGlkYWJsZUluRXZlbnQgZXh0ZW5kcyBDb2xsaWRhYmxlRXZlbnQge1xuXG4gIC8qKlxuICAgKiBFbGVtZW50IHlvdSBhcmUgY3VycmVudGx5IGNvbGxpZGluZyB3aXRoXG4gICAqIEBwcm9wZXJ0eSBjb2xsaWRpbmdFbGVtZW50XG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgY29sbGlkaW5nRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmNvbGxpZGluZ0VsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0cy5Db2xsaWRhYmxlSW5FdmVudCA9IENvbGxpZGFibGVJbkV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQ29sbGlkYWJsZSBvdXQgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIENvbGxpZGFibGVPdXRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIENvbGxpZGFibGVPdXRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXh0ZW5kcyBDb2xsaWRhYmxlRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbkNvbGxpZGFibGVJbkV2ZW50LnR5cGUgPSAnY29sbGlkYWJsZTppbic7XG5jbGFzcyBDb2xsaWRhYmxlT3V0RXZlbnQgZXh0ZW5kcyBDb2xsaWRhYmxlRXZlbnQge1xuXG4gIC8qKlxuICAgKiBFbGVtZW50IHlvdSB3ZXJlIHByZXZpb3VzbHkgY29sbGlkaW5nIHdpdGhcbiAgICogQHByb3BlcnR5IGNvbGxpZGluZ0VsZW1lbnRcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBjb2xsaWRpbmdFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuY29sbGlkaW5nRWxlbWVudDtcbiAgfVxufVxuZXhwb3J0cy5Db2xsaWRhYmxlT3V0RXZlbnQgPSBDb2xsaWRhYmxlT3V0RXZlbnQ7XG5Db2xsaWRhYmxlT3V0RXZlbnQudHlwZSA9ICdjb2xsaWRhYmxlOm91dCc7XG5cbi8qKiovIH0pLFxuLyogMjQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9Db2xsaWRhYmxlRXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXG5PYmplY3Qua2V5cyhfQ29sbGlkYWJsZUV2ZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfQ29sbGlkYWJsZUV2ZW50W2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX0NvbGxpZGFibGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKTtcblxudmFyIF9Db2xsaWRhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbGxpZGFibGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfQ29sbGlkYWJsZTIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiAyNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0NvbGxpZGFibGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdDb2xsaWRhYmxlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sbGlkYWJsZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfUmVzaXplTWlycm9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVzaXplTWlycm9yJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVzaXplTWlycm9yKS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZGVmYXVsdFJlc2l6ZU1pcnJvck9wdGlvbnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfUmVzaXplTWlycm9yLmRlZmF1bHRPcHRpb25zO1xuICB9XG59KTtcblxudmFyIF9TbmFwcGFibGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTbmFwcGFibGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TbmFwcGFibGUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX1N3YXBBbmltYXRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTd2FwQW5pbWF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3dhcEFuaW1hdGlvbikuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2RlZmF1bHRTd2FwQW5pbWF0aW9uT3B0aW9ucycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9Td2FwQW5pbWF0aW9uLmRlZmF1bHRPcHRpb25zO1xuICB9XG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqKi8gfSksXG4vKiAyNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX0RyYWdnYWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbnZhciBfRHJhZ2dhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0RyYWdnYWJsZSk7XG5cbnZhciBfU29ydGFibGVFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IG9uRHJhZ1N0YXJ0ID0gU3ltYm9sKCdvbkRyYWdTdGFydCcpO1xuY29uc3Qgb25EcmFnT3ZlckNvbnRhaW5lciA9IFN5bWJvbCgnb25EcmFnT3ZlckNvbnRhaW5lcicpO1xuY29uc3Qgb25EcmFnT3ZlciA9IFN5bWJvbCgnb25EcmFnT3ZlcicpO1xuY29uc3Qgb25EcmFnU3RvcCA9IFN5bWJvbCgnb25EcmFnU3RvcCcpO1xuXG4vKipcbiAqIFJldHVybnMgYW5ub3VuY2VtZW50IG1lc3NhZ2Ugd2hlbiBhIERyYWdnYWJsZSBlbGVtZW50IGhhcyBiZWVuIHNvcnRlZCB3aXRoIGFub3RoZXIgRHJhZ2dhYmxlIGVsZW1lbnRcbiAqIG9yIG1vdmVkIGludG8gYSBuZXcgY29udGFpbmVyXG4gKiBAcGFyYW0ge1NvcnRhYmxlU29ydGVkRXZlbnR9IHNvcnRhYmxlRXZlbnRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gb25Tb3J0YWJsZVNvcnRlZERlZmF1bHRBbm5vdW5jZW1lbnQoeyBkcmFnRXZlbnQgfSkge1xuICBjb25zdCBzb3VyY2VUZXh0ID0gZHJhZ0V2ZW50LnNvdXJjZS50ZXh0Q29udGVudC50cmltKCkgfHwgZHJhZ0V2ZW50LnNvdXJjZS5pZCB8fCAnc29ydGFibGUgZWxlbWVudCc7XG5cbiAgaWYgKGRyYWdFdmVudC5vdmVyKSB7XG4gICAgY29uc3Qgb3ZlclRleHQgPSBkcmFnRXZlbnQub3Zlci50ZXh0Q29udGVudC50cmltKCkgfHwgZHJhZ0V2ZW50Lm92ZXIuaWQgfHwgJ3NvcnRhYmxlIGVsZW1lbnQnO1xuICAgIGNvbnN0IGlzRm9sbG93aW5nID0gZHJhZ0V2ZW50LnNvdXJjZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihkcmFnRXZlbnQub3ZlcikgJiBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORztcblxuICAgIGlmIChpc0ZvbGxvd2luZykge1xuICAgICAgcmV0dXJuIGBQbGFjZWQgJHtzb3VyY2VUZXh0fSBhZnRlciAke292ZXJUZXh0fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgUGxhY2VkICR7c291cmNlVGV4dH0gYmVmb3JlICR7b3ZlclRleHR9YDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gbmVlZCB0byBmaWd1cmUgb3V0IGhvdyB0byBjb21wdXRlIGNvbnRhaW5lciBuYW1lXG4gICAgcmV0dXJuIGBQbGFjZWQgJHtzb3VyY2VUZXh0fSBpbnRvIGEgZGlmZmVyZW50IGNvbnRhaW5lcmA7XG4gIH1cbn1cblxuLyoqXG4gKiBAY29uc3Qge09iamVjdH0gZGVmYXVsdEFubm91bmNlbWVudHNcbiAqIEBjb25zdCB7RnVuY3Rpb259IGRlZmF1bHRBbm5vdW5jZW1lbnRzWydzb3J0YWJsZTpzb3J0ZWQnXVxuICovXG5jb25zdCBkZWZhdWx0QW5ub3VuY2VtZW50cyA9IHtcbiAgJ3NvcnRhYmxlOnNvcnRlZCc6IG9uU29ydGFibGVTb3J0ZWREZWZhdWx0QW5ub3VuY2VtZW50XG59O1xuXG4vKipcbiAqIFNvcnRhYmxlIGlzIGJ1aWx0IG9uIHRvcCBvZiBEcmFnZ2FibGUgYW5kIGFsbG93cyBzb3J0aW5nIG9mIGRyYWdnYWJsZSBlbGVtZW50cy4gU29ydGFibGUgd2lsbCBrZWVwXG4gKiB0cmFjayBvZiB0aGUgb3JpZ2luYWwgaW5kZXggYW5kIGVtaXRzIHRoZSBuZXcgaW5kZXggYXMgeW91IGRyYWcgb3ZlciBkcmFnZ2FibGUgZWxlbWVudHMuXG4gKiBAY2xhc3MgU29ydGFibGVcbiAqIEBtb2R1bGUgU29ydGFibGVcbiAqIEBleHRlbmRzIERyYWdnYWJsZVxuICovXG5jbGFzcyBTb3J0YWJsZSBleHRlbmRzIF9EcmFnZ2FibGUyLmRlZmF1bHQge1xuICAvKipcbiAgICogU29ydGFibGUgY29uc3RydWN0b3IuXG4gICAqIEBjb25zdHJ1Y3RzIFNvcnRhYmxlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnRbXXxOb2RlTGlzdHxIVE1MRWxlbWVudH0gY29udGFpbmVycyAtIFNvcnRhYmxlIGNvbnRhaW5lcnNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zIGZvciBTb3J0YWJsZVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29udGFpbmVycyA9IFtdLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihjb250YWluZXJzLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgYW5ub3VuY2VtZW50czogX2V4dGVuZHMoe30sIGRlZmF1bHRBbm5vdW5jZW1lbnRzLCBvcHRpb25zLmFubm91bmNlbWVudHMgfHwge30pXG4gICAgfSkpO1xuXG4gICAgLyoqXG4gICAgICogc3RhcnQgaW5kZXggb2Ygc291cmNlIG9uIGRyYWcgc3RhcnRcbiAgICAgKiBAcHJvcGVydHkgc3RhcnRJbmRleFxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5zdGFydEluZGV4ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIHN0YXJ0IGNvbnRhaW5lciBvbiBkcmFnIHN0YXJ0XG4gICAgICogQHByb3BlcnR5IHN0YXJ0Q29udGFpbmVyXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICB0aGlzLnN0YXJ0Q29udGFpbmVyID0gbnVsbDtcblxuICAgIHRoaXNbb25EcmFnU3RhcnRdID0gdGhpc1tvbkRyYWdTdGFydF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ092ZXJDb250YWluZXJdID0gdGhpc1tvbkRyYWdPdmVyQ29udGFpbmVyXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnT3Zlcl0gPSB0aGlzW29uRHJhZ092ZXJdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdTdG9wXSA9IHRoaXNbb25EcmFnU3RvcF0uYmluZCh0aGlzKTtcblxuICAgIHRoaXMub24oJ2RyYWc6c3RhcnQnLCB0aGlzW29uRHJhZ1N0YXJ0XSkub24oJ2RyYWc6b3Zlcjpjb250YWluZXInLCB0aGlzW29uRHJhZ092ZXJDb250YWluZXJdKS5vbignZHJhZzpvdmVyJywgdGhpc1tvbkRyYWdPdmVyXSkub24oJ2RyYWc6c3RvcCcsIHRoaXNbb25EcmFnU3RvcF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIFNvcnRhYmxlIGluc3RhbmNlLlxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBzdXBlci5kZXN0cm95KCk7XG5cbiAgICB0aGlzLm9mZignZHJhZzpzdGFydCcsIHRoaXNbb25EcmFnU3RhcnRdKS5vZmYoJ2RyYWc6b3Zlcjpjb250YWluZXInLCB0aGlzW29uRHJhZ092ZXJDb250YWluZXJdKS5vZmYoJ2RyYWc6b3ZlcicsIHRoaXNbb25EcmFnT3Zlcl0pLm9mZignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGluZGV4IG9mIGVsZW1lbnQgd2l0aGluIGl0cyBjb250YWluZXIgZHVyaW5nIGRyYWcgb3BlcmF0aW9uLCBpLmUuIGV4Y2x1ZGluZyBtaXJyb3IgYW5kIG9yaWdpbmFsIHNvdXJjZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gQW4gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAqL1xuICBpbmRleChlbGVtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RHJhZ2dhYmxlRWxlbWVudHNGb3JDb250YWluZXIoZWxlbWVudC5wYXJlbnROb2RlKS5pbmRleE9mKGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgc3RhcnQgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0RyYWdTdGFydEV2ZW50fSBldmVudCAtIERyYWcgc3RhcnQgZXZlbnRcbiAgICovXG4gIFtvbkRyYWdTdGFydF0oZXZlbnQpIHtcbiAgICB0aGlzLnN0YXJ0Q29udGFpbmVyID0gZXZlbnQuc291cmNlLnBhcmVudE5vZGU7XG4gICAgdGhpcy5zdGFydEluZGV4ID0gdGhpcy5pbmRleChldmVudC5zb3VyY2UpO1xuXG4gICAgY29uc3Qgc29ydGFibGVTdGFydEV2ZW50ID0gbmV3IF9Tb3J0YWJsZUV2ZW50LlNvcnRhYmxlU3RhcnRFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgc3RhcnRJbmRleDogdGhpcy5zdGFydEluZGV4LFxuICAgICAgc3RhcnRDb250YWluZXI6IHRoaXMuc3RhcnRDb250YWluZXJcbiAgICB9KTtcblxuICAgIHRoaXMudHJpZ2dlcihzb3J0YWJsZVN0YXJ0RXZlbnQpO1xuXG4gICAgaWYgKHNvcnRhYmxlU3RhcnRFdmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICBldmVudC5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBvdmVyIGNvbnRhaW5lciBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RHJhZ092ZXJDb250YWluZXJFdmVudH0gZXZlbnQgLSBEcmFnIG92ZXIgY29udGFpbmVyIGV2ZW50XG4gICAqL1xuICBbb25EcmFnT3ZlckNvbnRhaW5lcl0oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgc291cmNlLCBvdmVyLCBvdmVyQ29udGFpbmVyIH0gPSBldmVudDtcbiAgICBjb25zdCBvbGRJbmRleCA9IHRoaXMuaW5kZXgoc291cmNlKTtcblxuICAgIGNvbnN0IHNvcnRhYmxlU29ydEV2ZW50ID0gbmV3IF9Tb3J0YWJsZUV2ZW50LlNvcnRhYmxlU29ydEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBjdXJyZW50SW5kZXg6IG9sZEluZGV4LFxuICAgICAgc291cmNlLFxuICAgICAgb3ZlclxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKHNvcnRhYmxlU29ydEV2ZW50KTtcblxuICAgIGlmIChzb3J0YWJsZVNvcnRFdmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldERyYWdnYWJsZUVsZW1lbnRzRm9yQ29udGFpbmVyKG92ZXJDb250YWluZXIpO1xuICAgIGNvbnN0IG1vdmVzID0gbW92ZSh7IHNvdXJjZSwgb3Zlciwgb3ZlckNvbnRhaW5lciwgY2hpbGRyZW4gfSk7XG5cbiAgICBpZiAoIW1vdmVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBvbGRDb250YWluZXIsIG5ld0NvbnRhaW5lciB9ID0gbW92ZXM7XG4gICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLmluZGV4KGV2ZW50LnNvdXJjZSk7XG5cbiAgICBjb25zdCBzb3J0YWJsZVNvcnRlZEV2ZW50ID0gbmV3IF9Tb3J0YWJsZUV2ZW50LlNvcnRhYmxlU29ydGVkRXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudCxcbiAgICAgIG9sZEluZGV4LFxuICAgICAgbmV3SW5kZXgsXG4gICAgICBvbGRDb250YWluZXIsXG4gICAgICBuZXdDb250YWluZXJcbiAgICB9KTtcblxuICAgIHRoaXMudHJpZ2dlcihzb3J0YWJsZVNvcnRlZEV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIG92ZXIgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0RyYWdPdmVyRXZlbnR9IGV2ZW50IC0gRHJhZyBvdmVyIGV2ZW50XG4gICAqL1xuICBbb25EcmFnT3Zlcl0oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQub3ZlciA9PT0gZXZlbnQub3JpZ2luYWxTb3VyY2UgfHwgZXZlbnQub3ZlciA9PT0gZXZlbnQuc291cmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBzb3VyY2UsIG92ZXIsIG92ZXJDb250YWluZXIgfSA9IGV2ZW50O1xuICAgIGNvbnN0IG9sZEluZGV4ID0gdGhpcy5pbmRleChzb3VyY2UpO1xuXG4gICAgY29uc3Qgc29ydGFibGVTb3J0RXZlbnQgPSBuZXcgX1NvcnRhYmxlRXZlbnQuU29ydGFibGVTb3J0RXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudCxcbiAgICAgIGN1cnJlbnRJbmRleDogb2xkSW5kZXgsXG4gICAgICBzb3VyY2UsXG4gICAgICBvdmVyXG4gICAgfSk7XG5cbiAgICB0aGlzLnRyaWdnZXIoc29ydGFibGVTb3J0RXZlbnQpO1xuXG4gICAgaWYgKHNvcnRhYmxlU29ydEV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0RHJhZ2dhYmxlRWxlbWVudHNGb3JDb250YWluZXIob3ZlckNvbnRhaW5lcik7XG4gICAgY29uc3QgbW92ZXMgPSBtb3ZlKHsgc291cmNlLCBvdmVyLCBvdmVyQ29udGFpbmVyLCBjaGlsZHJlbiB9KTtcblxuICAgIGlmICghbW92ZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IG9sZENvbnRhaW5lciwgbmV3Q29udGFpbmVyIH0gPSBtb3ZlcztcbiAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMuaW5kZXgoc291cmNlKTtcblxuICAgIGNvbnN0IHNvcnRhYmxlU29ydGVkRXZlbnQgPSBuZXcgX1NvcnRhYmxlRXZlbnQuU29ydGFibGVTb3J0ZWRFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgb2xkSW5kZXgsXG4gICAgICBuZXdJbmRleCxcbiAgICAgIG9sZENvbnRhaW5lcixcbiAgICAgIG5ld0NvbnRhaW5lclxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKHNvcnRhYmxlU29ydGVkRXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgc3RvcCBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RHJhZ1N0b3BFdmVudH0gZXZlbnQgLSBEcmFnIHN0b3AgZXZlbnRcbiAgICovXG4gIFtvbkRyYWdTdG9wXShldmVudCkge1xuICAgIGNvbnN0IHNvcnRhYmxlU3RvcEV2ZW50ID0gbmV3IF9Tb3J0YWJsZUV2ZW50LlNvcnRhYmxlU3RvcEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBvbGRJbmRleDogdGhpcy5zdGFydEluZGV4LFxuICAgICAgbmV3SW5kZXg6IHRoaXMuaW5kZXgoZXZlbnQuc291cmNlKSxcbiAgICAgIG9sZENvbnRhaW5lcjogdGhpcy5zdGFydENvbnRhaW5lcixcbiAgICAgIG5ld0NvbnRhaW5lcjogZXZlbnQuc291cmNlLnBhcmVudE5vZGVcbiAgICB9KTtcblxuICAgIHRoaXMudHJpZ2dlcihzb3J0YWJsZVN0b3BFdmVudCk7XG5cbiAgICB0aGlzLnN0YXJ0SW5kZXggPSBudWxsO1xuICAgIHRoaXMuc3RhcnRDb250YWluZXIgPSBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNvcnRhYmxlO1xuZnVuY3Rpb24gaW5kZXgoZWxlbWVudCkge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChlbGVtZW50LnBhcmVudE5vZGUuY2hpbGRyZW4sIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBtb3ZlKHsgc291cmNlLCBvdmVyLCBvdmVyQ29udGFpbmVyLCBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IGVtcHR5T3ZlckNvbnRhaW5lciA9ICFjaGlsZHJlbi5sZW5ndGg7XG4gIGNvbnN0IGRpZmZlcmVudENvbnRhaW5lciA9IHNvdXJjZS5wYXJlbnROb2RlICE9PSBvdmVyQ29udGFpbmVyO1xuICBjb25zdCBzYW1lQ29udGFpbmVyID0gb3ZlciAmJiAhZGlmZmVyZW50Q29udGFpbmVyO1xuXG4gIGlmIChlbXB0eU92ZXJDb250YWluZXIpIHtcbiAgICByZXR1cm4gbW92ZUluc2lkZUVtcHR5Q29udGFpbmVyKHNvdXJjZSwgb3ZlckNvbnRhaW5lcik7XG4gIH0gZWxzZSBpZiAoc2FtZUNvbnRhaW5lcikge1xuICAgIHJldHVybiBtb3ZlV2l0aGluQ29udGFpbmVyKHNvdXJjZSwgb3Zlcik7XG4gIH0gZWxzZSBpZiAoZGlmZmVyZW50Q29udGFpbmVyKSB7XG4gICAgcmV0dXJuIG1vdmVPdXRzaWRlQ29udGFpbmVyKHNvdXJjZSwgb3Zlciwgb3ZlckNvbnRhaW5lcik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW92ZUluc2lkZUVtcHR5Q29udGFpbmVyKHNvdXJjZSwgb3ZlckNvbnRhaW5lcikge1xuICBjb25zdCBvbGRDb250YWluZXIgPSBzb3VyY2UucGFyZW50Tm9kZTtcblxuICBvdmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvdXJjZSk7XG5cbiAgcmV0dXJuIHsgb2xkQ29udGFpbmVyLCBuZXdDb250YWluZXI6IG92ZXJDb250YWluZXIgfTtcbn1cblxuZnVuY3Rpb24gbW92ZVdpdGhpbkNvbnRhaW5lcihzb3VyY2UsIG92ZXIpIHtcbiAgY29uc3Qgb2xkSW5kZXggPSBpbmRleChzb3VyY2UpO1xuICBjb25zdCBuZXdJbmRleCA9IGluZGV4KG92ZXIpO1xuXG4gIGlmIChvbGRJbmRleCA8IG5ld0luZGV4KSB7XG4gICAgc291cmNlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNvdXJjZSwgb3Zlci5uZXh0RWxlbWVudFNpYmxpbmcpO1xuICB9IGVsc2Uge1xuICAgIHNvdXJjZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzb3VyY2UsIG92ZXIpO1xuICB9XG5cbiAgcmV0dXJuIHsgb2xkQ29udGFpbmVyOiBzb3VyY2UucGFyZW50Tm9kZSwgbmV3Q29udGFpbmVyOiBzb3VyY2UucGFyZW50Tm9kZSB9O1xufVxuXG5mdW5jdGlvbiBtb3ZlT3V0c2lkZUNvbnRhaW5lcihzb3VyY2UsIG92ZXIsIG92ZXJDb250YWluZXIpIHtcbiAgY29uc3Qgb2xkQ29udGFpbmVyID0gc291cmNlLnBhcmVudE5vZGU7XG5cbiAgaWYgKG92ZXIpIHtcbiAgICBvdmVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNvdXJjZSwgb3Zlcik7XG4gIH0gZWxzZSB7XG4gICAgLy8gbmVlZCB0byBmaWd1cmUgb3V0IHByb3BlciBwb3NpdGlvblxuICAgIG92ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiB7IG9sZENvbnRhaW5lciwgbmV3Q29udGFpbmVyOiBzb3VyY2UucGFyZW50Tm9kZSB9O1xufVxuXG4vKioqLyB9KSxcbi8qIDI3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlNvcnRhYmxlU3RvcEV2ZW50ID0gZXhwb3J0cy5Tb3J0YWJsZVNvcnRlZEV2ZW50ID0gZXhwb3J0cy5Tb3J0YWJsZVNvcnRFdmVudCA9IGV4cG9ydHMuU29ydGFibGVTdGFydEV2ZW50ID0gZXhwb3J0cy5Tb3J0YWJsZUV2ZW50ID0gdW5kZWZpbmVkO1xuXG52YXIgX0Fic3RyYWN0RXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX0Fic3RyYWN0RXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWJzdHJhY3RFdmVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQmFzZSBzb3J0YWJsZSBldmVudFxuICogQGNsYXNzIFNvcnRhYmxlRXZlbnRcbiAqIEBtb2R1bGUgU29ydGFibGVFdmVudFxuICogQGV4dGVuZHMgQWJzdHJhY3RFdmVudFxuICovXG5jbGFzcyBTb3J0YWJsZUV2ZW50IGV4dGVuZHMgX0Fic3RyYWN0RXZlbnQyLmRlZmF1bHQge1xuXG4gIC8qKlxuICAgKiBPcmlnaW5hbCBkcmFnIGV2ZW50IHRoYXQgdHJpZ2dlcmVkIHRoaXMgc29ydGFibGUgZXZlbnRcbiAgICogQHByb3BlcnR5IGRyYWdFdmVudFxuICAgKiBAdHlwZSB7RHJhZ0V2ZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBkcmFnRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5kcmFnRXZlbnQ7XG4gIH1cbn1cblxuZXhwb3J0cy5Tb3J0YWJsZUV2ZW50ID0gU29ydGFibGVFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBTb3J0YWJsZSBzdGFydCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIFNvcnRhYmxlU3RhcnRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBTb3J0YWJsZVN0YXJ0RXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIFNvcnRhYmxlRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5Tb3J0YWJsZUV2ZW50LnR5cGUgPSAnc29ydGFibGUnO1xuY2xhc3MgU29ydGFibGVTdGFydEV2ZW50IGV4dGVuZHMgU29ydGFibGVFdmVudCB7XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGluZGV4IG9mIHNvdXJjZSBvbiBzb3J0YWJsZSBzdGFydFxuICAgKiBAcHJvcGVydHkgc3RhcnRJbmRleFxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBzdGFydEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuc3RhcnRJbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCBjb250YWluZXIgb24gc29ydGFibGUgc3RhcnRcbiAgICogQHByb3BlcnR5IHN0YXJ0Q29udGFpbmVyXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgc3RhcnRDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zdGFydENvbnRhaW5lcjtcbiAgfVxufVxuXG5leHBvcnRzLlNvcnRhYmxlU3RhcnRFdmVudCA9IFNvcnRhYmxlU3RhcnRFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogU29ydGFibGUgc29ydCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzcyBTb3J0YWJsZVNvcnRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtb2R1bGUgU29ydGFibGVTb3J0RXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXh0ZW5kcyBTb3J0YWJsZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblNvcnRhYmxlU3RhcnRFdmVudC50eXBlID0gJ3NvcnRhYmxlOnN0YXJ0JztcblNvcnRhYmxlU3RhcnRFdmVudC5jYW5jZWxhYmxlID0gdHJ1ZTtcbmNsYXNzIFNvcnRhYmxlU29ydEV2ZW50IGV4dGVuZHMgU29ydGFibGVFdmVudCB7XG5cbiAgLyoqXG4gICAqIEluZGV4IG9mIGN1cnJlbnQgZHJhZ2dhYmxlIGVsZW1lbnRcbiAgICogQHByb3BlcnR5IGN1cnJlbnRJbmRleFxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBjdXJyZW50SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5jdXJyZW50SW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogRHJhZ2dhYmxlIGVsZW1lbnQgeW91IGFyZSBob3ZlcmluZyBvdmVyXG4gICAqIEBwcm9wZXJ0eSBvdmVyXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgb3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm9sZEluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWdnYWJsZSBjb250YWluZXIgZWxlbWVudCB5b3UgYXJlIGhvdmVyaW5nIG92ZXJcbiAgICogQHByb3BlcnR5IG92ZXJDb250YWluZXJcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBvdmVyQ29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubmV3SW5kZXg7XG4gIH1cbn1cblxuZXhwb3J0cy5Tb3J0YWJsZVNvcnRFdmVudCA9IFNvcnRhYmxlU29ydEV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogU29ydGFibGUgc29ydGVkIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzcyBTb3J0YWJsZVNvcnRlZEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtb2R1bGUgU29ydGFibGVTb3J0ZWRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXh0ZW5kcyBTb3J0YWJsZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5Tb3J0YWJsZVNvcnRFdmVudC50eXBlID0gJ3NvcnRhYmxlOnNvcnQnO1xuU29ydGFibGVTb3J0RXZlbnQuY2FuY2VsYWJsZSA9IHRydWU7XG5jbGFzcyBTb3J0YWJsZVNvcnRlZEV2ZW50IGV4dGVuZHMgU29ydGFibGVFdmVudCB7XG5cbiAgLyoqXG4gICAqIEluZGV4IG9mIGxhc3Qgc29ydGVkIGV2ZW50XG4gICAqIEBwcm9wZXJ0eSBvbGRJbmRleFxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBvbGRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm9sZEluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIE5ldyBpbmRleCBvZiB0aGlzIHNvcnRlZCBldmVudFxuICAgKiBAcHJvcGVydHkgbmV3SW5kZXhcbiAgICogQHR5cGUge051bWJlcn1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgbmV3SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5uZXdJbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbGQgY29udGFpbmVyIG9mIGRyYWdnYWJsZSBlbGVtZW50XG4gICAqIEBwcm9wZXJ0eSBvbGRDb250YWluZXJcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBvbGRDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vbGRDb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogTmV3IGNvbnRhaW5lciBvZiBkcmFnZ2FibGUgZWxlbWVudFxuICAgKiBAcHJvcGVydHkgbmV3Q29udGFpbmVyXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgbmV3Q29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubmV3Q29udGFpbmVyO1xuICB9XG59XG5cbmV4cG9ydHMuU29ydGFibGVTb3J0ZWRFdmVudCA9IFNvcnRhYmxlU29ydGVkRXZlbnQ7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogU29ydGFibGUgc3RvcCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIFNvcnRhYmxlU3RvcEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIFNvcnRhYmxlU3RvcEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXh0ZW5kcyBTb3J0YWJsZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuU29ydGFibGVTb3J0ZWRFdmVudC50eXBlID0gJ3NvcnRhYmxlOnNvcnRlZCc7XG5jbGFzcyBTb3J0YWJsZVN0b3BFdmVudCBleHRlbmRzIFNvcnRhYmxlRXZlbnQge1xuXG4gIC8qKlxuICAgKiBPcmlnaW5hbCBpbmRleCBvbiBzb3J0YWJsZSBzdGFydFxuICAgKiBAcHJvcGVydHkgb2xkSW5kZXhcbiAgICogQHR5cGUge051bWJlcn1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgb2xkSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vbGRJbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXcgaW5kZXggb2YgZHJhZ2dhYmxlIGVsZW1lbnRcbiAgICogQHByb3BlcnR5IG5ld0luZGV4XG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IG5ld0luZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubmV3SW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogT3JpZ2luYWwgY29udGFpbmVyIG9mIGRyYWdnYWJsZSBlbGVtZW50XG4gICAqIEBwcm9wZXJ0eSBvbGRDb250YWluZXJcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBvbGRDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vbGRDb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogTmV3IGNvbnRhaW5lciBvZiBkcmFnZ2FibGUgZWxlbWVudFxuICAgKiBAcHJvcGVydHkgbmV3Q29udGFpbmVyXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgbmV3Q29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEubmV3Q29udGFpbmVyO1xuICB9XG59XG5leHBvcnRzLlNvcnRhYmxlU3RvcEV2ZW50ID0gU29ydGFibGVTdG9wRXZlbnQ7XG5Tb3J0YWJsZVN0b3BFdmVudC50eXBlID0gJ3NvcnRhYmxlOnN0b3AnO1xuXG4vKioqLyB9KSxcbi8qIDI4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfU29ydGFibGVFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cbk9iamVjdC5rZXlzKF9Tb3J0YWJsZUV2ZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfU29ydGFibGVFdmVudFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9Tb3J0YWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oMjYpO1xuXG52YXIgX1NvcnRhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NvcnRhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1NvcnRhYmxlMi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcbi8qIDI5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfRHJhZ2dhYmxlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxudmFyIF9EcmFnZ2FibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJhZ2dhYmxlKTtcblxudmFyIF9Td2FwcGFibGVFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBvbkRyYWdTdGFydCA9IFN5bWJvbCgnb25EcmFnU3RhcnQnKTtcbmNvbnN0IG9uRHJhZ092ZXIgPSBTeW1ib2woJ29uRHJhZ092ZXInKTtcbmNvbnN0IG9uRHJhZ1N0b3AgPSBTeW1ib2woJ29uRHJhZ1N0b3AnKTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFubm91bmNlbWVudCBtZXNzYWdlIHdoZW4gdGhlIERyYWdnYWJsZSBlbGVtZW50IGlzIHN3YXBwZWQgd2l0aCBhbm90aGVyIGRyYWdnYWJsZSBlbGVtZW50XG4gKiBAcGFyYW0ge1N3YXBwYWJsZVN3YXBwZWRFdmVudH0gc3dhcHBhYmxlRXZlbnRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gb25Td2FwcGFibGVTd2FwcGVkRGVmYXVsdEFubm91bmNlbWVudCh7IGRyYWdFdmVudCwgc3dhcHBlZEVsZW1lbnQgfSkge1xuICBjb25zdCBzb3VyY2VUZXh0ID0gZHJhZ0V2ZW50LnNvdXJjZS50ZXh0Q29udGVudC50cmltKCkgfHwgZHJhZ0V2ZW50LnNvdXJjZS5pZCB8fCAnc3dhcHBhYmxlIGVsZW1lbnQnO1xuICBjb25zdCBvdmVyVGV4dCA9IHN3YXBwZWRFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSB8fCBzd2FwcGVkRWxlbWVudC5pZCB8fCAnc3dhcHBhYmxlIGVsZW1lbnQnO1xuXG4gIHJldHVybiBgU3dhcHBlZCAke3NvdXJjZVRleHR9IHdpdGggJHtvdmVyVGV4dH1gO1xufVxuXG4vKipcbiAqIEBjb25zdCB7T2JqZWN0fSBkZWZhdWx0QW5ub3VuY2VtZW50c1xuICogQGNvbnN0IHtGdW5jdGlvbn0gZGVmYXVsdEFubm91bmNlbWVudHNbJ3N3YXBwYWJsZWQ6c3dhcHBlZCddXG4gKi9cbmNvbnN0IGRlZmF1bHRBbm5vdW5jZW1lbnRzID0ge1xuICAnc3dhcHBhYmxlZDpzd2FwcGVkJzogb25Td2FwcGFibGVTd2FwcGVkRGVmYXVsdEFubm91bmNlbWVudFxufTtcblxuLyoqXG4gKiBTd2FwcGFibGUgaXMgYnVpbHQgb24gdG9wIG9mIERyYWdnYWJsZSBhbmQgYWxsb3dzIHN3YXBwaW5nIG9mIGRyYWdnYWJsZSBlbGVtZW50cy5cbiAqIE9yZGVyIGlzIGlycmVsZXZhbnQgdG8gU3dhcHBhYmxlLlxuICogQGNsYXNzIFN3YXBwYWJsZVxuICogQG1vZHVsZSBTd2FwcGFibGVcbiAqIEBleHRlbmRzIERyYWdnYWJsZVxuICovXG5jbGFzcyBTd2FwcGFibGUgZXh0ZW5kcyBfRHJhZ2dhYmxlMi5kZWZhdWx0IHtcbiAgLyoqXG4gICAqIFN3YXBwYWJsZSBjb25zdHJ1Y3Rvci5cbiAgICogQGNvbnN0cnVjdHMgU3dhcHBhYmxlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnRbXXxOb2RlTGlzdHxIVE1MRWxlbWVudH0gY29udGFpbmVycyAtIFN3YXBwYWJsZSBjb250YWluZXJzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyBmb3IgU3dhcHBhYmxlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXJzID0gW10sIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKGNvbnRhaW5lcnMsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBhbm5vdW5jZW1lbnRzOiBfZXh0ZW5kcyh7fSwgZGVmYXVsdEFubm91bmNlbWVudHMsIG9wdGlvbnMuYW5ub3VuY2VtZW50cyB8fCB7fSlcbiAgICB9KSk7XG5cbiAgICAvKipcbiAgICAgKiBMYXN0IGRyYWdnYWJsZSBlbGVtZW50IHRoYXQgd2FzIGRyYWdnZWQgb3ZlclxuICAgICAqIEBwcm9wZXJ0eSBsYXN0T3ZlclxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICB0aGlzLmxhc3RPdmVyID0gbnVsbDtcblxuICAgIHRoaXNbb25EcmFnU3RhcnRdID0gdGhpc1tvbkRyYWdTdGFydF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ092ZXJdID0gdGhpc1tvbkRyYWdPdmVyXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnU3RvcF0gPSB0aGlzW29uRHJhZ1N0b3BdLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uKCdkcmFnOnN0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0pLm9uKCdkcmFnOm92ZXInLCB0aGlzW29uRHJhZ092ZXJdKS5vbignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgU3dhcHBhYmxlIGluc3RhbmNlLlxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBzdXBlci5kZXN0cm95KCk7XG5cbiAgICB0aGlzLm9mZignZHJhZzpzdGFydCcsIHRoaXMuX29uRHJhZ1N0YXJ0KS5vZmYoJ2RyYWc6b3ZlcicsIHRoaXMuX29uRHJhZ092ZXIpLm9mZignZHJhZzpzdG9wJywgdGhpcy5fb25EcmFnU3RvcCk7XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBzdGFydCBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RHJhZ1N0YXJ0RXZlbnR9IGV2ZW50IC0gRHJhZyBzdGFydCBldmVudFxuICAgKi9cbiAgW29uRHJhZ1N0YXJ0XShldmVudCkge1xuICAgIGNvbnN0IHN3YXBwYWJsZVN0YXJ0RXZlbnQgPSBuZXcgX1N3YXBwYWJsZUV2ZW50LlN3YXBwYWJsZVN0YXJ0RXZlbnQoe1xuICAgICAgZHJhZ0V2ZW50OiBldmVudFxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKHN3YXBwYWJsZVN0YXJ0RXZlbnQpO1xuXG4gICAgaWYgKHN3YXBwYWJsZVN0YXJ0RXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgZXZlbnQuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgb3ZlciBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RHJhZ092ZXJFdmVudH0gZXZlbnQgLSBEcmFnIG92ZXIgZXZlbnRcbiAgICovXG4gIFtvbkRyYWdPdmVyXShldmVudCkge1xuICAgIGlmIChldmVudC5vdmVyID09PSBldmVudC5vcmlnaW5hbFNvdXJjZSB8fCBldmVudC5vdmVyID09PSBldmVudC5zb3VyY2UgfHwgZXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN3YXBwYWJsZVN3YXBFdmVudCA9IG5ldyBfU3dhcHBhYmxlRXZlbnQuU3dhcHBhYmxlU3dhcEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBvdmVyOiBldmVudC5vdmVyLFxuICAgICAgb3ZlckNvbnRhaW5lcjogZXZlbnQub3ZlckNvbnRhaW5lclxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKHN3YXBwYWJsZVN3YXBFdmVudCk7XG5cbiAgICBpZiAoc3dhcHBhYmxlU3dhcEV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzd2FwIG9yaWdpbmFsbHkgc3dhcHBlZCBlbGVtZW50IGJhY2tcbiAgICBpZiAodGhpcy5sYXN0T3ZlciAmJiB0aGlzLmxhc3RPdmVyICE9PSBldmVudC5vdmVyKSB7XG4gICAgICBzd2FwKHRoaXMubGFzdE92ZXIsIGV2ZW50LnNvdXJjZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGFzdE92ZXIgPT09IGV2ZW50Lm92ZXIpIHtcbiAgICAgIHRoaXMubGFzdE92ZXIgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxhc3RPdmVyID0gZXZlbnQub3ZlcjtcbiAgICB9XG5cbiAgICBzd2FwKGV2ZW50LnNvdXJjZSwgZXZlbnQub3Zlcik7XG5cbiAgICBjb25zdCBzd2FwcGFibGVTd2FwcGVkRXZlbnQgPSBuZXcgX1N3YXBwYWJsZUV2ZW50LlN3YXBwYWJsZVN3YXBwZWRFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgc3dhcHBlZEVsZW1lbnQ6IGV2ZW50Lm92ZXJcbiAgICB9KTtcblxuICAgIHRoaXMudHJpZ2dlcihzd2FwcGFibGVTd2FwcGVkRXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgc3RvcCBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RHJhZ1N0b3BFdmVudH0gZXZlbnQgLSBEcmFnIHN0b3AgZXZlbnRcbiAgICovXG4gIFtvbkRyYWdTdG9wXShldmVudCkge1xuICAgIGNvbnN0IHN3YXBwYWJsZVN0b3BFdmVudCA9IG5ldyBfU3dhcHBhYmxlRXZlbnQuU3dhcHBhYmxlU3RvcEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnRcbiAgICB9KTtcblxuICAgIHRoaXMudHJpZ2dlcihzd2FwcGFibGVTdG9wRXZlbnQpO1xuICAgIHRoaXMubGFzdE92ZXIgPSBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFN3YXBwYWJsZTtcbmZ1bmN0aW9uIHdpdGhUZW1wRWxlbWVudChjYWxsYmFjaykge1xuICBjb25zdCB0bXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhbGxiYWNrKHRtcEVsZW1lbnQpO1xuICB0bXBFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodG1wRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHN3YXAoc291cmNlLCBvdmVyKSB7XG4gIGNvbnN0IG92ZXJQYXJlbnQgPSBvdmVyLnBhcmVudE5vZGU7XG4gIGNvbnN0IHNvdXJjZVBhcmVudCA9IHNvdXJjZS5wYXJlbnROb2RlO1xuXG4gIHdpdGhUZW1wRWxlbWVudCh0bXBFbGVtZW50ID0+IHtcbiAgICBzb3VyY2VQYXJlbnQuaW5zZXJ0QmVmb3JlKHRtcEVsZW1lbnQsIHNvdXJjZSk7XG4gICAgb3ZlclBhcmVudC5pbnNlcnRCZWZvcmUoc291cmNlLCBvdmVyKTtcbiAgICBzb3VyY2VQYXJlbnQuaW5zZXJ0QmVmb3JlKG92ZXIsIHRtcEVsZW1lbnQpO1xuICB9KTtcbn1cblxuLyoqKi8gfSksXG4vKiAzMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Td2FwcGFibGVTdG9wRXZlbnQgPSBleHBvcnRzLlN3YXBwYWJsZVN3YXBwZWRFdmVudCA9IGV4cG9ydHMuU3dhcHBhYmxlU3dhcEV2ZW50ID0gZXhwb3J0cy5Td2FwcGFibGVTdGFydEV2ZW50ID0gZXhwb3J0cy5Td2FwcGFibGVFdmVudCA9IHVuZGVmaW5lZDtcblxudmFyIF9BYnN0cmFjdEV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9BYnN0cmFjdEV2ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Fic3RyYWN0RXZlbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIEJhc2Ugc3dhcHBhYmxlIGV2ZW50XG4gKiBAY2xhc3MgU3dhcHBhYmxlRXZlbnRcbiAqIEBtb2R1bGUgU3dhcHBhYmxlRXZlbnRcbiAqIEBleHRlbmRzIEFic3RyYWN0RXZlbnRcbiAqL1xuY2xhc3MgU3dhcHBhYmxlRXZlbnQgZXh0ZW5kcyBfQWJzdHJhY3RFdmVudDIuZGVmYXVsdCB7XG5cbiAgLyoqXG4gICAqIE9yaWdpbmFsIGRyYWcgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhpcyBzd2FwcGFibGUgZXZlbnRcbiAgICogQHByb3BlcnR5IGRyYWdFdmVudFxuICAgKiBAdHlwZSB7RHJhZ0V2ZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBkcmFnRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5kcmFnRXZlbnQ7XG4gIH1cbn1cblxuZXhwb3J0cy5Td2FwcGFibGVFdmVudCA9IFN3YXBwYWJsZUV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogU3dhcHBhYmxlIHN0YXJ0IGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzcyBTd2FwcGFibGVTdGFydEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtb2R1bGUgU3dhcHBhYmxlU3RhcnRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXh0ZW5kcyBTd2FwcGFibGVFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuU3dhcHBhYmxlRXZlbnQudHlwZSA9ICdzd2FwcGFibGUnO1xuY2xhc3MgU3dhcHBhYmxlU3RhcnRFdmVudCBleHRlbmRzIFN3YXBwYWJsZUV2ZW50IHt9XG5cbmV4cG9ydHMuU3dhcHBhYmxlU3RhcnRFdmVudCA9IFN3YXBwYWJsZVN0YXJ0RXZlbnQ7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogU3dhcHBhYmxlIHN3YXAgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzcyBTd2FwcGFibGVTd2FwRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtb2R1bGUgU3dhcHBhYmxlU3dhcEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXh0ZW5kcyBTd2FwcGFibGVFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblN3YXBwYWJsZVN0YXJ0RXZlbnQudHlwZSA9ICdzd2FwcGFibGU6c3RhcnQnO1xuU3dhcHBhYmxlU3RhcnRFdmVudC5jYW5jZWxhYmxlID0gdHJ1ZTtcbmNsYXNzIFN3YXBwYWJsZVN3YXBFdmVudCBleHRlbmRzIFN3YXBwYWJsZUV2ZW50IHtcblxuICAvKipcbiAgICogRHJhZ2dhYmxlIGVsZW1lbnQgeW91IGFyZSBvdmVyXG4gICAqIEBwcm9wZXJ0eSBvdmVyXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgb3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm92ZXI7XG4gIH1cblxuICAvKipcbiAgICogRHJhZ2dhYmxlIGNvbnRhaW5lciB5b3UgYXJlIG92ZXJcbiAgICogQHByb3BlcnR5IG92ZXJDb250YWluZXJcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBvdmVyQ29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEub3ZlckNvbnRhaW5lcjtcbiAgfVxufVxuXG5leHBvcnRzLlN3YXBwYWJsZVN3YXBFdmVudCA9IFN3YXBwYWJsZVN3YXBFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogU3dhcHBhYmxlIHN3YXBwZWQgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgU3dhcHBhYmxlU3dhcHBlZEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBTd2FwcGFibGVTd2FwcGVkRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXh0ZW5kcyBTd2FwcGFibGVFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5Td2FwcGFibGVTd2FwRXZlbnQudHlwZSA9ICdzd2FwcGFibGU6c3dhcCc7XG5Td2FwcGFibGVTd2FwRXZlbnQuY2FuY2VsYWJsZSA9IHRydWU7XG5jbGFzcyBTd2FwcGFibGVTd2FwcGVkRXZlbnQgZXh0ZW5kcyBTd2FwcGFibGVFdmVudCB7XG5cbiAgLyoqXG4gICAqIFRoZSBkcmFnZ2FibGUgZWxlbWVudCB0aGF0IHlvdSBzd2FwcGVkIHdpdGhcbiAgICogQHByb3BlcnR5IHN3YXBwZWRFbGVtZW50XG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgc3dhcHBlZEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zd2FwcGVkRWxlbWVudDtcbiAgfVxufVxuXG5leHBvcnRzLlN3YXBwYWJsZVN3YXBwZWRFdmVudCA9IFN3YXBwYWJsZVN3YXBwZWRFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogU3dhcHBhYmxlIHN0b3AgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgU3dhcHBhYmxlU3RvcEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBTd2FwcGFibGVTdG9wRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXh0ZW5kcyBTd2FwcGFibGVFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5Td2FwcGFibGVTd2FwcGVkRXZlbnQudHlwZSA9ICdzd2FwcGFibGU6c3dhcHBlZCc7XG5jbGFzcyBTd2FwcGFibGVTdG9wRXZlbnQgZXh0ZW5kcyBTd2FwcGFibGVFdmVudCB7fVxuZXhwb3J0cy5Td2FwcGFibGVTdG9wRXZlbnQgPSBTd2FwcGFibGVTdG9wRXZlbnQ7XG5Td2FwcGFibGVTdG9wRXZlbnQudHlwZSA9ICdzd2FwcGFibGU6c3RvcCc7XG5cbi8qKiovIH0pLFxuLyogMzEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9Td2FwcGFibGVFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXG5PYmplY3Qua2V5cyhfU3dhcHBhYmxlRXZlbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9Td2FwcGFibGVFdmVudFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9Td2FwcGFibGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI5KTtcblxudmFyIF9Td2FwcGFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3dhcHBhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1N3YXBwYWJsZTIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiAzMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9EcmFnZ2FibGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG52YXIgX0RyYWdnYWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EcmFnZ2FibGUpO1xuXG52YXIgX0Ryb3BwYWJsZUV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IG9uRHJhZ1N0YXJ0ID0gU3ltYm9sKCdvbkRyYWdTdGFydCcpO1xuY29uc3Qgb25EcmFnTW92ZSA9IFN5bWJvbCgnb25EcmFnTW92ZScpO1xuY29uc3Qgb25EcmFnU3RvcCA9IFN5bWJvbCgnb25EcmFnU3RvcCcpO1xuY29uc3QgZHJvcEluRHJvcHpvbmUgPSBTeW1ib2woJ2Ryb3BJbkRyb3Bab25lJyk7XG5jb25zdCByZXR1cm5Ub09yaWdpbmFsRHJvcHpvbmUgPSBTeW1ib2woJ3JldHVyblRvT3JpZ2luYWxEcm9wem9uZScpO1xuY29uc3QgY2xvc2VzdERyb3B6b25lID0gU3ltYm9sKCdjbG9zZXN0RHJvcHpvbmUnKTtcbmNvbnN0IGdldERyb3B6b25lcyA9IFN5bWJvbCgnZ2V0RHJvcHpvbmVzJyk7XG5cbi8qKlxuICogUmV0dXJucyBhbiBhbm5vdW5jZW1lbnQgbWVzc2FnZSB3aGVuIHRoZSBEcmFnZ2FibGUgZWxlbWVudCBpcyBkcm9wcGVkIGludG8gYSBkcm9wem9uZSBlbGVtZW50XG4gKiBAcGFyYW0ge0Ryb3BwYWJsZURyb3BwZWRFdmVudH0gZHJvcHBhYmxlRXZlbnRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gb25Ecm9wcGFibGVEcm9wcGVkRGVmYXVsdEFubm91bmNlbWVudCh7IGRyYWdFdmVudCwgZHJvcHpvbmUgfSkge1xuICBjb25zdCBzb3VyY2VUZXh0ID0gZHJhZ0V2ZW50LnNvdXJjZS50ZXh0Q29udGVudC50cmltKCkgfHwgZHJhZ0V2ZW50LnNvdXJjZS5pZCB8fCAnZHJhZ2dhYmxlIGVsZW1lbnQnO1xuICBjb25zdCBkcm9wem9uZVRleHQgPSBkcm9wem9uZS50ZXh0Q29udGVudC50cmltKCkgfHwgZHJvcHpvbmUuaWQgfHwgJ2Ryb3BwYWJsZSBlbGVtZW50JztcblxuICByZXR1cm4gYERyb3BwZWQgJHtzb3VyY2VUZXh0fSBpbnRvICR7ZHJvcHpvbmVUZXh0fWA7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBhbm5vdW5jZW1lbnQgbWVzc2FnZSB3aGVuIHRoZSBEcmFnZ2FibGUgZWxlbWVudCBoYXMgcmV0dXJuZWQgdG8gaXRzIG9yaWdpbmFsIGRyb3B6b25lIGVsZW1lbnRcbiAqIEBwYXJhbSB7RHJvcHBhYmxlUmV0dXJuZWRFdmVudH0gZHJvcHBhYmxlRXZlbnRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gb25Ecm9wcGFibGVSZXR1cm5lZERlZmF1bHRBbm5vdW5jZW1lbnQoeyBkcmFnRXZlbnQsIGRyb3B6b25lIH0pIHtcbiAgY29uc3Qgc291cmNlVGV4dCA9IGRyYWdFdmVudC5zb3VyY2UudGV4dENvbnRlbnQudHJpbSgpIHx8IGRyYWdFdmVudC5zb3VyY2UuaWQgfHwgJ2RyYWdnYWJsZSBlbGVtZW50JztcbiAgY29uc3QgZHJvcHpvbmVUZXh0ID0gZHJvcHpvbmUudGV4dENvbnRlbnQudHJpbSgpIHx8IGRyb3B6b25lLmlkIHx8ICdkcm9wcGFibGUgZWxlbWVudCc7XG5cbiAgcmV0dXJuIGBSZXR1cm5lZCAke3NvdXJjZVRleHR9IGZyb20gJHtkcm9wem9uZVRleHR9YDtcbn1cblxuLyoqXG4gKiBAY29uc3Qge09iamVjdH0gZGVmYXVsdEFubm91bmNlbWVudHNcbiAqIEBjb25zdCB7RnVuY3Rpb259IGRlZmF1bHRBbm5vdW5jZW1lbnRzWydkcm9wcGFibGU6ZHJvcHBlZCddXG4gKiBAY29uc3Qge0Z1bmN0aW9ufSBkZWZhdWx0QW5ub3VuY2VtZW50c1snZHJvcHBhYmxlOnJldHVybmVkJ11cbiAqL1xuY29uc3QgZGVmYXVsdEFubm91bmNlbWVudHMgPSB7XG4gICdkcm9wcGFibGU6ZHJvcHBlZCc6IG9uRHJvcHBhYmxlRHJvcHBlZERlZmF1bHRBbm5vdW5jZW1lbnQsXG4gICdkcm9wcGFibGU6cmV0dXJuZWQnOiBvbkRyb3BwYWJsZVJldHVybmVkRGVmYXVsdEFubm91bmNlbWVudFxufTtcblxuY29uc3QgZGVmYXVsdENsYXNzZXMgPSB7XG4gICdkcm9wcGFibGU6YWN0aXZlJzogJ2RyYWdnYWJsZS1kcm9wem9uZS0tYWN0aXZlJyxcbiAgJ2Ryb3BwYWJsZTpvY2N1cGllZCc6ICdkcmFnZ2FibGUtZHJvcHpvbmUtLW9jY3VwaWVkJ1xufTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGRyb3B6b25lOiAnLmRyYWdnYWJsZS1kcm9wcGFibGUnXG59O1xuXG4vKipcbiAqIERyb3BwYWJsZSBpcyBidWlsdCBvbiB0b3Agb2YgRHJhZ2dhYmxlIGFuZCBhbGxvd3MgZHJvcHBpbmcgZHJhZ2dhYmxlIGVsZW1lbnRzXG4gKiBpbnRvIGRyb3B6b25lIGVsZW1lbnRcbiAqIEBjbGFzcyBEcm9wcGFibGVcbiAqIEBtb2R1bGUgRHJvcHBhYmxlXG4gKiBAZXh0ZW5kcyBEcmFnZ2FibGVcbiAqL1xuY2xhc3MgRHJvcHBhYmxlIGV4dGVuZHMgX0RyYWdnYWJsZTIuZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBEcm9wcGFibGUgY29uc3RydWN0b3IuXG4gICAqIEBjb25zdHJ1Y3RzIERyb3BwYWJsZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50W118Tm9kZUxpc3R8SFRNTEVsZW1lbnR9IGNvbnRhaW5lcnMgLSBEcm9wcGFibGUgY29udGFpbmVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgZm9yIERyb3BwYWJsZVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29udGFpbmVycyA9IFtdLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihjb250YWluZXJzLCBfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMsIHtcbiAgICAgIGNsYXNzZXM6IF9leHRlbmRzKHt9LCBkZWZhdWx0Q2xhc3Nlcywgb3B0aW9ucy5jbGFzc2VzIHx8IHt9KSxcbiAgICAgIGFubm91bmNlbWVudHM6IF9leHRlbmRzKHt9LCBkZWZhdWx0QW5ub3VuY2VtZW50cywgb3B0aW9ucy5hbm5vdW5jZW1lbnRzIHx8IHt9KVxuICAgIH0pKTtcblxuICAgIC8qKlxuICAgICAqIEFsbCBkcm9wem9uZSBlbGVtZW50cyBvbiBkcmFnIHN0YXJ0XG4gICAgICogQHByb3BlcnR5IGRyb3B6b25lc1xuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIHRoaXMuZHJvcHpvbmVzID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIExhc3QgZHJvcHpvbmUgZWxlbWVudCB0aGF0IHRoZSBzb3VyY2Ugd2FzIGRyb3BwZWQgaW50b1xuICAgICAqIEBwcm9wZXJ0eSBsYXN0RHJvcHpvbmVcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgdGhpcy5sYXN0RHJvcHpvbmUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBkcm9wem9uZSBlbGVtZW50IHRoYXQgdGhlIHNvdXJjZSB3YXMgZHJhZyBmcm9tXG4gICAgICogQHByb3BlcnR5IGluaXRpYWxEcm9wem9uZVxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICB0aGlzLmluaXRpYWxEcm9wem9uZSA9IG51bGw7XG5cbiAgICB0aGlzW29uRHJhZ1N0YXJ0XSA9IHRoaXNbb25EcmFnU3RhcnRdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdNb3ZlXSA9IHRoaXNbb25EcmFnTW92ZV0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ1N0b3BdID0gdGhpc1tvbkRyYWdTdG9wXS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vbignZHJhZzpzdGFydCcsIHRoaXNbb25EcmFnU3RhcnRdKS5vbignZHJhZzptb3ZlJywgdGhpc1tvbkRyYWdNb3ZlXSkub24oJ2RyYWc6c3RvcCcsIHRoaXNbb25EcmFnU3RvcF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIERyb3BwYWJsZSBpbnN0YW5jZS5cbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5vZmYoJ2RyYWc6c3RhcnQnLCB0aGlzW29uRHJhZ1N0YXJ0XSkub2ZmKCdkcmFnOm1vdmUnLCB0aGlzW29uRHJhZ01vdmVdKS5vZmYoJ2RyYWc6c3RvcCcsIHRoaXNbb25EcmFnU3RvcF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgc3RhcnQgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0RyYWdTdGFydEV2ZW50fSBldmVudCAtIERyYWcgc3RhcnQgZXZlbnRcbiAgICovXG4gIFtvbkRyYWdTdGFydF0oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZHJvcHpvbmVzID0gWy4uLnRoaXNbZ2V0RHJvcHpvbmVzXSgpXTtcbiAgICBjb25zdCBkcm9wem9uZSA9ICgwLCBfdXRpbHMuY2xvc2VzdCkoZXZlbnQuc2Vuc29yRXZlbnQudGFyZ2V0LCB0aGlzLm9wdGlvbnMuZHJvcHpvbmUpO1xuXG4gICAgaWYgKCFkcm9wem9uZSkge1xuICAgICAgZXZlbnQuY2FuY2VsKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJvcHBhYmxlU3RhcnRFdmVudCA9IG5ldyBfRHJvcHBhYmxlRXZlbnQuRHJvcHBhYmxlU3RhcnRFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgZHJvcHpvbmVcbiAgICB9KTtcblxuICAgIHRoaXMudHJpZ2dlcihkcm9wcGFibGVTdGFydEV2ZW50KTtcblxuICAgIGlmIChkcm9wcGFibGVTdGFydEV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIGV2ZW50LmNhbmNlbCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdGlhbERyb3B6b25lID0gZHJvcHpvbmU7XG5cbiAgICBmb3IgKGNvbnN0IGRyb3B6b25lRWxlbWVudCBvZiB0aGlzLmRyb3B6b25lcykge1xuICAgICAgaWYgKGRyb3B6b25lRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5nZXRDbGFzc05hbWVGb3IoJ2Ryb3BwYWJsZTpvY2N1cGllZCcpKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZHJvcHpvbmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5nZXRDbGFzc05hbWVGb3IoJ2Ryb3BwYWJsZTphY3RpdmUnKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgbW92ZSBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RHJhZ01vdmVFdmVudH0gZXZlbnQgLSBEcmFnIG1vdmUgZXZlbnRcbiAgICovXG4gIFtvbkRyYWdNb3ZlXShldmVudCkge1xuICAgIGlmIChldmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJvcHpvbmUgPSB0aGlzW2Nsb3Nlc3REcm9wem9uZV0oZXZlbnQuc2Vuc29yRXZlbnQudGFyZ2V0KTtcbiAgICBjb25zdCBvdmVyRW1wdHlEcm9wem9uZSA9IGRyb3B6b25lICYmICFkcm9wem9uZS5jbGFzc0xpc3QuY29udGFpbnModGhpcy5nZXRDbGFzc05hbWVGb3IoJ2Ryb3BwYWJsZTpvY2N1cGllZCcpKTtcblxuICAgIGlmIChvdmVyRW1wdHlEcm9wem9uZSAmJiB0aGlzW2Ryb3BJbkRyb3B6b25lXShldmVudCwgZHJvcHpvbmUpKSB7XG4gICAgICB0aGlzLmxhc3REcm9wem9uZSA9IGRyb3B6b25lO1xuICAgIH0gZWxzZSBpZiAoKCFkcm9wem9uZSB8fCBkcm9wem9uZSA9PT0gdGhpcy5pbml0aWFsRHJvcHpvbmUpICYmIHRoaXMubGFzdERyb3B6b25lKSB7XG4gICAgICB0aGlzW3JldHVyblRvT3JpZ2luYWxEcm9wem9uZV0oZXZlbnQpO1xuICAgICAgdGhpcy5sYXN0RHJvcHpvbmUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIHN0b3AgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0RyYWdTdG9wRXZlbnR9IGV2ZW50IC0gRHJhZyBzdG9wIGV2ZW50XG4gICAqL1xuICBbb25EcmFnU3RvcF0oZXZlbnQpIHtcbiAgICBjb25zdCBkcm9wcGFibGVTdG9wRXZlbnQgPSBuZXcgX0Ryb3BwYWJsZUV2ZW50LkRyb3BwYWJsZVN0b3BFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgZHJvcHpvbmU6IHRoaXMubGFzdERyb3B6b25lIHx8IHRoaXMuaW5pdGlhbERyb3B6b25lXG4gICAgfSk7XG5cbiAgICB0aGlzLnRyaWdnZXIoZHJvcHBhYmxlU3RvcEV2ZW50KTtcblxuICAgIGNvbnN0IG9jY3VwaWVkQ2xhc3MgPSB0aGlzLmdldENsYXNzTmFtZUZvcignZHJvcHBhYmxlOm9jY3VwaWVkJyk7XG5cbiAgICBmb3IgKGNvbnN0IGRyb3B6b25lIG9mIHRoaXMuZHJvcHpvbmVzKSB7XG4gICAgICBkcm9wem9uZS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZ2V0Q2xhc3NOYW1lRm9yKCdkcm9wcGFibGU6YWN0aXZlJykpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhc3REcm9wem9uZSAmJiB0aGlzLmxhc3REcm9wem9uZSAhPT0gdGhpcy5pbml0aWFsRHJvcHpvbmUpIHtcbiAgICAgIHRoaXMuaW5pdGlhbERyb3B6b25lLmNsYXNzTGlzdC5yZW1vdmUob2NjdXBpZWRDbGFzcyk7XG4gICAgfVxuXG4gICAgdGhpcy5kcm9wem9uZXMgPSBudWxsO1xuICAgIHRoaXMubGFzdERyb3B6b25lID0gbnVsbDtcbiAgICB0aGlzLmluaXRpYWxEcm9wem9uZSA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRHJvcHMgYSBkcmFnZ2FibGUgZWxlbWVudCBpbnRvIGEgZHJvcHpvbmUgZWxlbWVudFxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0RyYWdNb3ZlRXZlbnR9IGV2ZW50IC0gRHJhZyBtb3ZlIGV2ZW50XG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRyb3B6b25lIC0gRHJvcHpvbmUgZWxlbWVudCB0byBkcm9wIGRyYWdnYWJsZSBpbnRvXG4gICAqL1xuICBbZHJvcEluRHJvcHpvbmVdKGV2ZW50LCBkcm9wem9uZSkge1xuICAgIGNvbnN0IGRyb3BwYWJsZURyb3BwZWRFdmVudCA9IG5ldyBfRHJvcHBhYmxlRXZlbnQuRHJvcHBhYmxlRHJvcHBlZEV2ZW50KHtcbiAgICAgIGRyYWdFdmVudDogZXZlbnQsXG4gICAgICBkcm9wem9uZVxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKGRyb3BwYWJsZURyb3BwZWRFdmVudCk7XG5cbiAgICBpZiAoZHJvcHBhYmxlRHJvcHBlZEV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBvY2N1cGllZENsYXNzID0gdGhpcy5nZXRDbGFzc05hbWVGb3IoJ2Ryb3BwYWJsZTpvY2N1cGllZCcpO1xuXG4gICAgaWYgKHRoaXMubGFzdERyb3B6b25lKSB7XG4gICAgICB0aGlzLmxhc3REcm9wem9uZS5jbGFzc0xpc3QucmVtb3ZlKG9jY3VwaWVkQ2xhc3MpO1xuICAgIH1cblxuICAgIGRyb3B6b25lLmFwcGVuZENoaWxkKGV2ZW50LnNvdXJjZSk7XG4gICAgZHJvcHpvbmUuY2xhc3NMaXN0LmFkZChvY2N1cGllZENsYXNzKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBwcmV2aW91c2x5IGRyb3BwZWQgZWxlbWVudCBiYWNrIGludG8gaXRzIG9yaWdpbmFsIGRyb3B6b25lXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RHJhZ01vdmVFdmVudH0gZXZlbnQgLSBEcmFnIG1vdmUgZXZlbnRcbiAgICovXG4gIFtyZXR1cm5Ub09yaWdpbmFsRHJvcHpvbmVdKGV2ZW50KSB7XG4gICAgY29uc3QgZHJvcHBhYmxlUmV0dXJuZWRFdmVudCA9IG5ldyBfRHJvcHBhYmxlRXZlbnQuRHJvcHBhYmxlUmV0dXJuZWRFdmVudCh7XG4gICAgICBkcmFnRXZlbnQ6IGV2ZW50LFxuICAgICAgZHJvcHpvbmU6IHRoaXMubGFzdERyb3B6b25lXG4gICAgfSk7XG5cbiAgICB0aGlzLnRyaWdnZXIoZHJvcHBhYmxlUmV0dXJuZWRFdmVudCk7XG5cbiAgICBpZiAoZHJvcHBhYmxlUmV0dXJuZWRFdmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pbml0aWFsRHJvcHpvbmUuYXBwZW5kQ2hpbGQoZXZlbnQuc291cmNlKTtcbiAgICB0aGlzLmxhc3REcm9wem9uZS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZ2V0Q2xhc3NOYW1lRm9yKCdkcm9wcGFibGU6b2NjdXBpZWQnKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjbG9zZXN0IGRyb3B6b25lIGVsZW1lbnQgZm9yIGV2ZW4gdGFyZ2V0XG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCAtIEV2ZW50IHRhcmdldFxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudHxudWxsfVxuICAgKi9cbiAgW2Nsb3Nlc3REcm9wem9uZV0odGFyZ2V0KSB7XG4gICAgaWYgKCF0aGlzLmRyb3B6b25lcykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfdXRpbHMuY2xvc2VzdCkodGFyZ2V0LCB0aGlzLmRyb3B6b25lcyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgY3VycmVudCBkcm9wem9uZSBlbGVtZW50cyBmb3IgdGhpcyBkcmFnZ2FibGUgaW5zdGFuY2VcbiAgICogQHByaXZhdGVcbiAgICogQHJldHVybiB7Tm9kZUxpc3R8SFRNTEVsZW1lbnRbXXxBcnJheX1cbiAgICovXG4gIFtnZXREcm9wem9uZXNdKCkge1xuICAgIGNvbnN0IGRyb3B6b25lID0gdGhpcy5vcHRpb25zLmRyb3B6b25lO1xuXG4gICAgaWYgKHR5cGVvZiBkcm9wem9uZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGRyb3B6b25lKTtcbiAgICB9IGVsc2UgaWYgKGRyb3B6b25lIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgZHJvcHpvbmUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgcmV0dXJuIGRyb3B6b25lO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRyb3B6b25lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZHJvcHpvbmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRHJvcHBhYmxlO1xuXG4vKioqLyB9KSxcbi8qIDMzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkRyb3BwYWJsZVN0b3BFdmVudCA9IGV4cG9ydHMuRHJvcHBhYmxlUmV0dXJuZWRFdmVudCA9IGV4cG9ydHMuRHJvcHBhYmxlRHJvcHBlZEV2ZW50ID0gZXhwb3J0cy5Ecm9wcGFibGVTdGFydEV2ZW50ID0gZXhwb3J0cy5Ecm9wcGFibGVFdmVudCA9IHVuZGVmaW5lZDtcblxudmFyIF9BYnN0cmFjdEV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9BYnN0cmFjdEV2ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Fic3RyYWN0RXZlbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIEJhc2UgZHJvcHBhYmxlIGV2ZW50XG4gKiBAY2xhc3MgRHJvcHBhYmxlRXZlbnRcbiAqIEBtb2R1bGUgRHJvcHBhYmxlRXZlbnRcbiAqIEBleHRlbmRzIEFic3RyYWN0RXZlbnRcbiAqL1xuY2xhc3MgRHJvcHBhYmxlRXZlbnQgZXh0ZW5kcyBfQWJzdHJhY3RFdmVudDIuZGVmYXVsdCB7XG5cbiAgLyoqXG4gICAqIE9yaWdpbmFsIGRyYWcgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhpcyBkcm9wcGFibGUgZXZlbnRcbiAgICogQHByb3BlcnR5IGRyYWdFdmVudFxuICAgKiBAdHlwZSB7RHJhZ0V2ZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBkcmFnRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5kcmFnRXZlbnQ7XG4gIH1cbn1cblxuZXhwb3J0cy5Ecm9wcGFibGVFdmVudCA9IERyb3BwYWJsZUV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogRHJvcHBhYmxlIHN0YXJ0IGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzcyBEcm9wcGFibGVTdGFydEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtb2R1bGUgRHJvcHBhYmxlU3RhcnRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXh0ZW5kcyBEcm9wcGFibGVFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuRHJvcHBhYmxlRXZlbnQudHlwZSA9ICdkcm9wcGFibGUnO1xuY2xhc3MgRHJvcHBhYmxlU3RhcnRFdmVudCBleHRlbmRzIERyb3BwYWJsZUV2ZW50IHtcblxuICAvKipcbiAgICogVGhlIGluaXRpYWwgZHJvcHpvbmUgZWxlbWVudCBvZiB0aGUgY3VycmVudGx5IGRyYWdnaW5nIGRyYWdnYWJsZSBlbGVtZW50XG4gICAqIEBwcm9wZXJ0eSBkcm9wem9uZVxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IGRyb3B6b25lKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuZHJvcHpvbmU7XG4gIH1cbn1cblxuZXhwb3J0cy5Ecm9wcGFibGVTdGFydEV2ZW50ID0gRHJvcHBhYmxlU3RhcnRFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBEcm9wcGFibGUgZHJvcHBlZCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIERyb3BwYWJsZURyb3BwZWRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBEcm9wcGFibGVEcm9wcGVkRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIERyb3BwYWJsZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuRHJvcHBhYmxlU3RhcnRFdmVudC50eXBlID0gJ2Ryb3BwYWJsZTpzdGFydCc7XG5Ecm9wcGFibGVTdGFydEV2ZW50LmNhbmNlbGFibGUgPSB0cnVlO1xuY2xhc3MgRHJvcHBhYmxlRHJvcHBlZEV2ZW50IGV4dGVuZHMgRHJvcHBhYmxlRXZlbnQge1xuXG4gIC8qKlxuICAgKiBUaGUgZHJvcHpvbmUgZWxlbWVudCB5b3UgZHJvcHBlZCB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQgaW50b1xuICAgKiBAcHJvcGVydHkgZHJvcHpvbmVcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBkcm9wem9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmRyb3B6b25lO1xuICB9XG59XG5cbmV4cG9ydHMuRHJvcHBhYmxlRHJvcHBlZEV2ZW50ID0gRHJvcHBhYmxlRHJvcHBlZEV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBEcm9wcGFibGUgcmV0dXJuZWQgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgRHJvcHBhYmxlUmV0dXJuZWRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtb2R1bGUgRHJvcHBhYmxlUmV0dXJuZWRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIERyb3BwYWJsZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbkRyb3BwYWJsZURyb3BwZWRFdmVudC50eXBlID0gJ2Ryb3BwYWJsZTpkcm9wcGVkJztcbkRyb3BwYWJsZURyb3BwZWRFdmVudC5jYW5jZWxhYmxlID0gdHJ1ZTtcbmNsYXNzIERyb3BwYWJsZVJldHVybmVkRXZlbnQgZXh0ZW5kcyBEcm9wcGFibGVFdmVudCB7XG5cbiAgLyoqXG4gICAqIFRoZSBkcm9wem9uZSBlbGVtZW50IHlvdSBkcmFnZ2VkIGF3YXkgZnJvbVxuICAgKiBAcHJvcGVydHkgZHJvcHpvbmVcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBkcm9wem9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmRyb3B6b25lO1xuICB9XG59XG5cbmV4cG9ydHMuRHJvcHBhYmxlUmV0dXJuZWRFdmVudCA9IERyb3BwYWJsZVJldHVybmVkRXZlbnQ7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogRHJvcHBhYmxlIHN0b3AgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzcyBEcm9wcGFibGVTdG9wRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtb2R1bGUgRHJvcHBhYmxlU3RvcEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXh0ZW5kcyBEcm9wcGFibGVFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbkRyb3BwYWJsZVJldHVybmVkRXZlbnQudHlwZSA9ICdkcm9wcGFibGU6cmV0dXJuZWQnO1xuRHJvcHBhYmxlUmV0dXJuZWRFdmVudC5jYW5jZWxhYmxlID0gdHJ1ZTtcbmNsYXNzIERyb3BwYWJsZVN0b3BFdmVudCBleHRlbmRzIERyb3BwYWJsZUV2ZW50IHtcblxuICAvKipcbiAgICogVGhlIGZpbmFsIGRyb3B6b25lIGVsZW1lbnQgb2YgdGhlIGRyYWdnYWJsZSBlbGVtZW50XG4gICAqIEBwcm9wZXJ0eSBkcm9wem9uZVxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IGRyb3B6b25lKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuZHJvcHpvbmU7XG4gIH1cbn1cbmV4cG9ydHMuRHJvcHBhYmxlU3RvcEV2ZW50ID0gRHJvcHBhYmxlU3RvcEV2ZW50O1xuRHJvcHBhYmxlU3RvcEV2ZW50LnR5cGUgPSAnZHJvcHBhYmxlOnN0b3AnO1xuRHJvcHBhYmxlU3RvcEV2ZW50LmNhbmNlbGFibGUgPSB0cnVlO1xuXG4vKioqLyB9KSxcbi8qIDM0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfRHJvcHBhYmxlRXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblxuT2JqZWN0LmtleXMoX0Ryb3BwYWJsZUV2ZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfRHJvcHBhYmxlRXZlbnRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfRHJvcHBhYmxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMik7XG5cbnZhciBfRHJvcHBhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Ryb3BwYWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9Ecm9wcGFibGUyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuLyogMzUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8qKlxuICogVGhlIEVtaXR0ZXIgaXMgYSBzaW1wbGUgZW1pdHRlciBjbGFzcyB0aGF0IHByb3ZpZGVzIHlvdSB3aXRoIGBvbigpYCwgYG9mZigpYCBhbmQgYHRyaWdnZXIoKWAgbWV0aG9kc1xuICogQGNsYXNzIEVtaXR0ZXJcbiAqIEBtb2R1bGUgRW1pdHRlclxuICovXG5jbGFzcyBFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYWxsYmFja3MgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgY2FsbGJhY2tzIGJ5IGV2ZW50IG5hbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gY2FsbGJhY2tzXG4gICAqL1xuICBvbih0eXBlLCAuLi5jYWxsYmFja3MpIHtcbiAgICBpZiAoIXRoaXMuY2FsbGJhY2tzW3R5cGVdKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrc1t0eXBlXSA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuY2FsbGJhY2tzW3R5cGVdLnB1c2goLi4uY2FsbGJhY2tzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXJzIGNhbGxiYWNrcyBieSBldmVudCBuYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqL1xuICBvZmYodHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuY2FsbGJhY2tzW3R5cGVdKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb3B5ID0gdGhpcy5jYWxsYmFja3NbdHlwZV0uc2xpY2UoMCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvcHkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjYWxsYmFjayA9PT0gY29weVtpXSkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrc1t0eXBlXS5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcnMgZXZlbnQgY2FsbGJhY2tzIGJ5IGV2ZW50IG9iamVjdFxuICAgKiBAcGFyYW0ge0Fic3RyYWN0RXZlbnR9IGV2ZW50XG4gICAqL1xuICB0cmlnZ2VyKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrc1tldmVudC50eXBlXSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY2FsbGJhY2tzID0gWy4uLnRoaXMuY2FsbGJhY2tzW2V2ZW50LnR5cGVdXTtcbiAgICBjb25zdCBjYXVnaHRFcnJvcnMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSBjYWxsYmFja3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gY2FsbGJhY2tzW2ldO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjYXVnaHRFcnJvcnMucHVzaChlcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNhdWdodEVycm9ycy5sZW5ndGgpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIGNvbnNvbGUuZXJyb3IoYERyYWdnYWJsZSBjYXVnaHQgZXJyb3JzIHdoaWxlIHRyaWdnZXJpbmcgJyR7ZXZlbnQudHlwZX0nYCwgY2F1Z2h0RXJyb3JzKTtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRW1pdHRlcjtcblxuLyoqKi8gfSksXG4vKiAzNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0VtaXR0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KTtcblxudmFyIF9FbWl0dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VtaXR0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfRW1pdHRlcjIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiAzNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfUGx1Z2lucyA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXG52YXIgX0VtaXR0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM2KTtcblxudmFyIF9FbWl0dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VtaXR0ZXIpO1xuXG52YXIgX1NlbnNvcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG52YXIgX0RyYWdnYWJsZUV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG5cbnZhciBfRHJhZ0V2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IG9uRHJhZ1N0YXJ0ID0gU3ltYm9sKCdvbkRyYWdTdGFydCcpO1xuY29uc3Qgb25EcmFnTW92ZSA9IFN5bWJvbCgnb25EcmFnTW92ZScpO1xuY29uc3Qgb25EcmFnU3RvcCA9IFN5bWJvbCgnb25EcmFnU3RvcCcpO1xuY29uc3Qgb25EcmFnUHJlc3N1cmUgPSBTeW1ib2woJ29uRHJhZ1ByZXNzdXJlJyk7XG5cbi8qKlxuICogQGNvbnN0IHtPYmplY3R9IGRlZmF1bHRBbm5vdW5jZW1lbnRzXG4gKiBAY29uc3Qge0Z1bmN0aW9ufSBkZWZhdWx0QW5ub3VuY2VtZW50c1snZHJhZzpzdGFydCddXG4gKiBAY29uc3Qge0Z1bmN0aW9ufSBkZWZhdWx0QW5ub3VuY2VtZW50c1snZHJhZzpzdG9wJ11cbiAqL1xuY29uc3QgZGVmYXVsdEFubm91bmNlbWVudHMgPSB7XG4gICdkcmFnOnN0YXJ0JzogZXZlbnQgPT4gYFBpY2tlZCB1cCAke2V2ZW50LnNvdXJjZS50ZXh0Q29udGVudC50cmltKCkgfHwgZXZlbnQuc291cmNlLmlkIHx8ICdkcmFnZ2FibGUgZWxlbWVudCd9YCxcbiAgJ2RyYWc6c3RvcCc6IGV2ZW50ID0+IGBSZWxlYXNlZCAke2V2ZW50LnNvdXJjZS50ZXh0Q29udGVudC50cmltKCkgfHwgZXZlbnQuc291cmNlLmlkIHx8ICdkcmFnZ2FibGUgZWxlbWVudCd9YFxufTtcblxuY29uc3QgZGVmYXVsdENsYXNzZXMgPSB7XG4gICdjb250YWluZXI6ZHJhZ2dpbmcnOiAnZHJhZ2dhYmxlLWNvbnRhaW5lci0taXMtZHJhZ2dpbmcnLFxuICAnc291cmNlOmRyYWdnaW5nJzogJ2RyYWdnYWJsZS1zb3VyY2UtLWlzLWRyYWdnaW5nJyxcbiAgJ3NvdXJjZTpwbGFjZWQnOiAnZHJhZ2dhYmxlLXNvdXJjZS0tcGxhY2VkJyxcbiAgJ2NvbnRhaW5lcjpwbGFjZWQnOiAnZHJhZ2dhYmxlLWNvbnRhaW5lci0tcGxhY2VkJyxcbiAgJ2JvZHk6ZHJhZ2dpbmcnOiAnZHJhZ2dhYmxlLS1pcy1kcmFnZ2luZycsXG4gICdkcmFnZ2FibGU6b3Zlcic6ICdkcmFnZ2FibGUtLW92ZXInLFxuICAnY29udGFpbmVyOm92ZXInOiAnZHJhZ2dhYmxlLWNvbnRhaW5lci0tb3ZlcicsXG4gICdzb3VyY2U6b3JpZ2luYWwnOiAnZHJhZ2dhYmxlLS1vcmlnaW5hbCcsXG4gIG1pcnJvcjogJ2RyYWdnYWJsZS1taXJyb3InXG59O1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IGV4cG9ydHMuZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGRyYWdnYWJsZTogJy5kcmFnZ2FibGUtc291cmNlJyxcbiAgaGFuZGxlOiBudWxsLFxuICBkZWxheTogMTAwLFxuICBwbGFjZWRUaW1lb3V0OiA4MDAsXG4gIHBsdWdpbnM6IFtdLFxuICBzZW5zb3JzOiBbXVxufTtcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb3JlIGRyYWdnYWJsZSBsaWJyYXJ5IHRoYXQgZG9lcyB0aGUgaGVhdnkgbGlmdGluZ1xuICogQGNsYXNzIERyYWdnYWJsZVxuICogQG1vZHVsZSBEcmFnZ2FibGVcbiAqL1xuY2xhc3MgRHJhZ2dhYmxlIHtcblxuICAvKipcbiAgICogRHJhZ2dhYmxlIGNvbnN0cnVjdG9yLlxuICAgKiBAY29uc3RydWN0cyBEcmFnZ2FibGVcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudFtdfE5vZGVMaXN0fEhUTUxFbGVtZW50fSBjb250YWluZXJzIC0gRHJhZ2dhYmxlIGNvbnRhaW5lcnNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zIGZvciBkcmFnZ2FibGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcnMgPSBbZG9jdW1lbnQuYm9keV0sIG9wdGlvbnMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIERyYWdnYWJsZSBjb250YWluZXJzXG4gICAgICogQHByb3BlcnR5IGNvbnRhaW5lcnNcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBpZiAoY29udGFpbmVycyBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGNvbnRhaW5lcnMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgdGhpcy5jb250YWluZXJzID0gWy4uLmNvbnRhaW5lcnNdO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbmVycyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICB0aGlzLmNvbnRhaW5lcnMgPSBbY29udGFpbmVyc107XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRHJhZ2dhYmxlIGNvbnRhaW5lcnMgYXJlIGV4cGVjdGVkIHRvIGJlIG9mIHR5cGUgYE5vZGVMaXN0YCwgYEhUTUxFbGVtZW50W11gIG9yIGBIVE1MRWxlbWVudGAnKTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMsIHtcbiAgICAgIGNsYXNzZXM6IF9leHRlbmRzKHt9LCBkZWZhdWx0Q2xhc3Nlcywgb3B0aW9ucy5jbGFzc2VzIHx8IHt9KSxcbiAgICAgIGFubm91bmNlbWVudHM6IF9leHRlbmRzKHt9LCBkZWZhdWx0QW5ub3VuY2VtZW50cywgb3B0aW9ucy5hbm5vdW5jZW1lbnRzIHx8IHt9KVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogRHJhZ2dhYmxlcyBldmVudCBlbWl0dGVyXG4gICAgICogQHByb3BlcnR5IGVtaXR0ZXJcbiAgICAgKiBAdHlwZSB7RW1pdHRlcn1cbiAgICAgKi9cbiAgICB0aGlzLmVtaXR0ZXIgPSBuZXcgX0VtaXR0ZXIyLmRlZmF1bHQoKTtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgZHJhZyBzdGF0ZVxuICAgICAqIEBwcm9wZXJ0eSBkcmFnZ2luZ1xuICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEFjdGl2ZSBwbHVnaW5zXG4gICAgICogQHByb3BlcnR5IHBsdWdpbnNcbiAgICAgKiBAdHlwZSB7UGx1Z2luW119XG4gICAgICovXG4gICAgdGhpcy5wbHVnaW5zID0gW107XG5cbiAgICAvKipcbiAgICAgKiBBY3RpdmUgc2Vuc29yc1xuICAgICAqIEBwcm9wZXJ0eSBzZW5zb3JzXG4gICAgICogQHR5cGUge1NlbnNvcltdfVxuICAgICAqL1xuICAgIHRoaXMuc2Vuc29ycyA9IFtdO1xuXG4gICAgdGhpc1tvbkRyYWdTdGFydF0gPSB0aGlzW29uRHJhZ1N0YXJ0XS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnTW92ZV0gPSB0aGlzW29uRHJhZ01vdmVdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdTdG9wXSA9IHRoaXNbb25EcmFnU3RvcF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ1ByZXNzdXJlXSA9IHRoaXNbb25EcmFnUHJlc3N1cmVdLmJpbmQodGhpcyk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnOnN0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0sIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWc6bW92ZScsIHRoaXNbb25EcmFnTW92ZV0sIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWc6c3RvcCcsIHRoaXNbb25EcmFnU3RvcF0sIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWc6cHJlc3N1cmUnLCB0aGlzW29uRHJhZ1ByZXNzdXJlXSwgdHJ1ZSk7XG5cbiAgICBjb25zdCBkZWZhdWx0UGx1Z2lucyA9IE9iamVjdC52YWx1ZXMoRHJhZ2dhYmxlLlBsdWdpbnMpLm1hcChQbHVnaW4gPT4gUGx1Z2luKTtcbiAgICBjb25zdCBkZWZhdWx0U2Vuc29ycyA9IFtfU2Vuc29ycy5Nb3VzZVNlbnNvciwgX1NlbnNvcnMuVG91Y2hTZW5zb3JdO1xuXG4gICAgdGhpcy5hZGRQbHVnaW4oLi4uWy4uLmRlZmF1bHRQbHVnaW5zLCAuLi50aGlzLm9wdGlvbnMucGx1Z2luc10pO1xuICAgIHRoaXMuYWRkU2Vuc29yKC4uLlsuLi5kZWZhdWx0U2Vuc29ycywgLi4udGhpcy5vcHRpb25zLnNlbnNvcnNdKTtcblxuICAgIGNvbnN0IGRyYWdnYWJsZUluaXRpYWxpemVkRXZlbnQgPSBuZXcgX0RyYWdnYWJsZUV2ZW50LkRyYWdnYWJsZUluaXRpYWxpemVkRXZlbnQoe1xuICAgICAgZHJhZ2dhYmxlOiB0aGlzXG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdtaXJyb3I6Y3JlYXRlZCcsICh7IG1pcnJvciB9KSA9PiB0aGlzLm1pcnJvciA9IG1pcnJvcik7XG4gICAgdGhpcy5vbignbWlycm9yOmRlc3Ryb3knLCAoKSA9PiB0aGlzLm1pcnJvciA9IG51bGwpO1xuXG4gICAgdGhpcy50cmlnZ2VyKGRyYWdnYWJsZUluaXRpYWxpemVkRXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIERyYWdnYWJsZSBpbnN0YW5jZS4gVGhpcyByZW1vdmVzIGFsbCBpbnRlcm5hbCBldmVudCBsaXN0ZW5lcnMgYW5kXG4gICAqIGRlYWN0aXZhdGVzIHNlbnNvcnMgYW5kIHBsdWdpbnNcbiAgICovXG5cbiAgLyoqXG4gICAqIERlZmF1bHQgcGx1Z2lucyBkcmFnZ2FibGUgdXNlc1xuICAgKiBAc3RhdGljXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBQbHVnaW5zXG4gICAqIEBwcm9wZXJ0eSB7QW5ub3VuY2VtZW50fSBQbHVnaW5zLkFubm91bmNlbWVudFxuICAgKiBAcHJvcGVydHkge0ZvY3VzYWJsZX0gUGx1Z2lucy5Gb2N1c2FibGVcbiAgICogQHByb3BlcnR5IHtNaXJyb3J9IFBsdWdpbnMuTWlycm9yXG4gICAqIEBwcm9wZXJ0eSB7U2Nyb2xsYWJsZX0gUGx1Z2lucy5TY3JvbGxhYmxlXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWc6c3RhcnQnLCB0aGlzW29uRHJhZ1N0YXJ0XSwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZzptb3ZlJywgdGhpc1tvbkRyYWdNb3ZlXSwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZzpwcmVzc3VyZScsIHRoaXNbb25EcmFnUHJlc3N1cmVdLCB0cnVlKTtcblxuICAgIGNvbnN0IGRyYWdnYWJsZURlc3Ryb3lFdmVudCA9IG5ldyBfRHJhZ2dhYmxlRXZlbnQuRHJhZ2dhYmxlRGVzdHJveUV2ZW50KHtcbiAgICAgIGRyYWdnYWJsZTogdGhpc1xuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKGRyYWdnYWJsZURlc3Ryb3lFdmVudCk7XG5cbiAgICB0aGlzLnJlbW92ZVBsdWdpbiguLi50aGlzLnBsdWdpbnMubWFwKHBsdWdpbiA9PiBwbHVnaW4uY29uc3RydWN0b3IpKTtcbiAgICB0aGlzLnJlbW92ZVNlbnNvciguLi50aGlzLnNlbnNvcnMubWFwKHNlbnNvciA9PiBzZW5zb3IuY29uc3RydWN0b3IpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHBsdWdpbiB0byB0aGlzIGRyYWdnYWJsZSBpbnN0YW5jZS4gVGhpcyB3aWxsIGVuZCB1cCBjYWxsaW5nIHRoZSBhdHRhY2ggbWV0aG9kIG9mIHRoZSBwbHVnaW5cbiAgICogQHBhcmFtIHsuLi50eXBlb2YgUGx1Z2lufSBwbHVnaW5zIC0gUGx1Z2lucyB0aGF0IHlvdSB3YW50IGF0dGFjaGVkIHRvIGRyYWdnYWJsZVxuICAgKiBAcmV0dXJuIHtEcmFnZ2FibGV9XG4gICAqIEBleGFtcGxlIGRyYWdnYWJsZS5hZGRQbHVnaW4oQ3VzdG9tQTExeVBsdWdpbiwgQ3VzdG9tTWlycm9yUGx1Z2luKVxuICAgKi9cbiAgYWRkUGx1Z2luKC4uLnBsdWdpbnMpIHtcbiAgICBjb25zdCBhY3RpdmVQbHVnaW5zID0gcGx1Z2lucy5tYXAoUGx1Z2luID0+IG5ldyBQbHVnaW4odGhpcykpO1xuXG4gICAgYWN0aXZlUGx1Z2lucy5mb3JFYWNoKHBsdWdpbiA9PiBwbHVnaW4uYXR0YWNoKCkpO1xuICAgIHRoaXMucGx1Z2lucyA9IFsuLi50aGlzLnBsdWdpbnMsIC4uLmFjdGl2ZVBsdWdpbnNdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBwbHVnaW5zIHRoYXQgYXJlIGFscmVhZHkgYXR0YWNoZWQgdG8gdGhpcyBkcmFnZ2FibGUgaW5zdGFuY2UuIFRoaXMgd2lsbCBlbmQgdXAgY2FsbGluZ1xuICAgKiB0aGUgZGV0YWNoIG1ldGhvZCBvZiB0aGUgcGx1Z2luXG4gICAqIEBwYXJhbSB7Li4udHlwZW9mIFBsdWdpbn0gcGx1Z2lucyAtIFBsdWdpbnMgdGhhdCB5b3Ugd2FudCBkZXRhY2hlZCBmcm9tIGRyYWdnYWJsZVxuICAgKiBAcmV0dXJuIHtEcmFnZ2FibGV9XG4gICAqIEBleGFtcGxlIGRyYWdnYWJsZS5yZW1vdmVQbHVnaW4oTWlycm9yUGx1Z2luLCBDdXN0b21NaXJyb3JQbHVnaW4pXG4gICAqL1xuICByZW1vdmVQbHVnaW4oLi4ucGx1Z2lucykge1xuICAgIGNvbnN0IHJlbW92ZWRQbHVnaW5zID0gdGhpcy5wbHVnaW5zLmZpbHRlcihwbHVnaW4gPT4gcGx1Z2lucy5pbmNsdWRlcyhwbHVnaW4uY29uc3RydWN0b3IpKTtcblxuICAgIHJlbW92ZWRQbHVnaW5zLmZvckVhY2gocGx1Z2luID0+IHBsdWdpbi5kZXRhY2goKSk7XG4gICAgdGhpcy5wbHVnaW5zID0gdGhpcy5wbHVnaW5zLmZpbHRlcihwbHVnaW4gPT4gIXBsdWdpbnMuaW5jbHVkZXMocGx1Z2luLmNvbnN0cnVjdG9yKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHNlbnNvcnMgdG8gdGhpcyBkcmFnZ2FibGUgaW5zdGFuY2UuIFRoaXMgd2lsbCBlbmQgdXAgY2FsbGluZyB0aGUgYXR0YWNoIG1ldGhvZCBvZiB0aGUgc2Vuc29yXG4gICAqIEBwYXJhbSB7Li4udHlwZW9mIFNlbnNvcn0gc2Vuc29ycyAtIFNlbnNvcnMgdGhhdCB5b3Ugd2FudCBhdHRhY2hlZCB0byBkcmFnZ2FibGVcbiAgICogQHJldHVybiB7RHJhZ2dhYmxlfVxuICAgKiBAZXhhbXBsZSBkcmFnZ2FibGUuYWRkU2Vuc29yKEZvcmNlVG91Y2hTZW5zb3IsIEN1c3RvbVNlbnNvcilcbiAgICovXG4gIGFkZFNlbnNvciguLi5zZW5zb3JzKSB7XG4gICAgY29uc3QgYWN0aXZlU2Vuc29ycyA9IHNlbnNvcnMubWFwKFNlbnNvciA9PiBuZXcgU2Vuc29yKHRoaXMuY29udGFpbmVycywgdGhpcy5vcHRpb25zKSk7XG5cbiAgICBhY3RpdmVTZW5zb3JzLmZvckVhY2goc2Vuc29yID0+IHNlbnNvci5hdHRhY2goKSk7XG4gICAgdGhpcy5zZW5zb3JzID0gWy4uLnRoaXMuc2Vuc29ycywgLi4uYWN0aXZlU2Vuc29yc107XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHNlbnNvcnMgdGhhdCBhcmUgYWxyZWFkeSBhdHRhY2hlZCB0byB0aGlzIGRyYWdnYWJsZSBpbnN0YW5jZS4gVGhpcyB3aWxsIGVuZCB1cCBjYWxsaW5nXG4gICAqIHRoZSBkZXRhY2ggbWV0aG9kIG9mIHRoZSBzZW5zb3JcbiAgICogQHBhcmFtIHsuLi50eXBlb2YgU2Vuc29yfSBzZW5zb3JzIC0gU2Vuc29ycyB0aGF0IHlvdSB3YW50IGF0dGFjaGVkIHRvIGRyYWdnYWJsZVxuICAgKiBAcmV0dXJuIHtEcmFnZ2FibGV9XG4gICAqIEBleGFtcGxlIGRyYWdnYWJsZS5yZW1vdmVTZW5zb3IoVG91Y2hTZW5zb3IsIERyYWdTZW5zb3IpXG4gICAqL1xuICByZW1vdmVTZW5zb3IoLi4uc2Vuc29ycykge1xuICAgIGNvbnN0IHJlbW92ZWRTZW5zb3JzID0gdGhpcy5zZW5zb3JzLmZpbHRlcihzZW5zb3IgPT4gc2Vuc29ycy5pbmNsdWRlcyhzZW5zb3IuY29uc3RydWN0b3IpKTtcblxuICAgIHJlbW92ZWRTZW5zb3JzLmZvckVhY2goc2Vuc29yID0+IHNlbnNvci5kZXRhY2goKSk7XG4gICAgdGhpcy5zZW5zb3JzID0gdGhpcy5zZW5zb3JzLmZpbHRlcihzZW5zb3IgPT4gIXNlbnNvcnMuaW5jbHVkZXMoc2Vuc29yLmNvbnN0cnVjdG9yKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGNvbnRhaW5lciB0byB0aGlzIGRyYWdnYWJsZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gey4uLkhUTUxFbGVtZW50fSBjb250YWluZXJzIC0gQ29udGFpbmVycyB5b3Ugd2FudCB0byBhZGQgdG8gZHJhZ2dhYmxlXG4gICAqIEByZXR1cm4ge0RyYWdnYWJsZX1cbiAgICogQGV4YW1wbGUgZHJhZ2dhYmxlLmFkZENvbnRhaW5lcihkb2N1bWVudC5ib2R5KVxuICAgKi9cbiAgYWRkQ29udGFpbmVyKC4uLmNvbnRhaW5lcnMpIHtcbiAgICB0aGlzLmNvbnRhaW5lcnMgPSBbLi4udGhpcy5jb250YWluZXJzLCAuLi5jb250YWluZXJzXTtcbiAgICB0aGlzLnNlbnNvcnMuZm9yRWFjaChzZW5zb3IgPT4gc2Vuc29yLmFkZENvbnRhaW5lciguLi5jb250YWluZXJzKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBjb250YWluZXIgZnJvbSB0aGlzIGRyYWdnYWJsZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gey4uLkhUTUxFbGVtZW50fSBjb250YWluZXJzIC0gQ29udGFpbmVycyB5b3Ugd2FudCB0byByZW1vdmUgZnJvbSBkcmFnZ2FibGVcbiAgICogQHJldHVybiB7RHJhZ2dhYmxlfVxuICAgKiBAZXhhbXBsZSBkcmFnZ2FibGUucmVtb3ZlQ29udGFpbmVyKGRvY3VtZW50LmJvZHkpXG4gICAqL1xuICByZW1vdmVDb250YWluZXIoLi4uY29udGFpbmVycykge1xuICAgIHRoaXMuY29udGFpbmVycyA9IHRoaXMuY29udGFpbmVycy5maWx0ZXIoY29udGFpbmVyID0+ICFjb250YWluZXJzLmluY2x1ZGVzKGNvbnRhaW5lcikpO1xuICAgIHRoaXMuc2Vuc29ycy5mb3JFYWNoKHNlbnNvciA9PiBzZW5zb3IucmVtb3ZlQ29udGFpbmVyKC4uLmNvbnRhaW5lcnMpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGxpc3RlbmVyIGZvciBkcmFnZ2FibGUgZXZlbnRzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIC0gRXZlbnQgbmFtZVxuICAgKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBjYWxsYmFja3MgLSBFdmVudCBjYWxsYmFja3NcbiAgICogQHJldHVybiB7RHJhZ2dhYmxlfVxuICAgKiBAZXhhbXBsZSBkcmFnZ2FibGUub24oJ2RyYWc6c3RhcnQnLCAoZHJhZ0V2ZW50KSA9PiBkcmFnRXZlbnQuY2FuY2VsKCkpO1xuICAgKi9cbiAgb24odHlwZSwgLi4uY2FsbGJhY2tzKSB7XG4gICAgdGhpcy5lbWl0dGVyLm9uKHR5cGUsIC4uLmNhbGxiYWNrcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBsaXN0ZW5lciBmcm9tIGRyYWdnYWJsZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAtIEV2ZW50IG5hbWVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBFdmVudCBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHtEcmFnZ2FibGV9XG4gICAqIEBleGFtcGxlIGRyYWdnYWJsZS5vZmYoJ2RyYWc6c3RhcnQnLCBoYW5kbGVyRnVuY3Rpb24pO1xuICAgKi9cbiAgb2ZmKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5lbWl0dGVyLm9mZih0eXBlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcnMgZHJhZ2dhYmxlIGV2ZW50XG4gICAqIEBwYXJhbSB7QWJzdHJhY3RFdmVudH0gZXZlbnQgLSBFdmVudCBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtEcmFnZ2FibGV9XG4gICAqIEBleGFtcGxlIGRyYWdnYWJsZS50cmlnZ2VyKGV2ZW50KTtcbiAgICovXG4gIHRyaWdnZXIoZXZlbnQpIHtcbiAgICB0aGlzLmVtaXR0ZXIudHJpZ2dlcihldmVudCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjbGFzcyBuYW1lIGZvciBjbGFzcyBpZGVudGlmaWVyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gTmFtZSBvZiBjbGFzcyBpZGVudGlmaWVyXG4gICAqIEByZXR1cm4ge1N0cmluZ3xudWxsfVxuICAgKi9cbiAgZ2V0Q2xhc3NOYW1lRm9yKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNsYXNzZXNbbmFtZV07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgZHJhZ2dhYmxlIGluc3RhbmNlIGlzIGN1cnJlbnRseSBkcmFnZ2luZ1xuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgaXNEcmFnZ2luZygpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLmRyYWdnaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBkcmFnZ2FibGUgZWxlbWVudHNcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnRbXX1cbiAgICovXG4gIGdldERyYWdnYWJsZUVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcnMucmVkdWNlKChjdXJyZW50LCBjb250YWluZXIpID0+IHtcbiAgICAgIHJldHVybiBbLi4uY3VycmVudCwgLi4udGhpcy5nZXREcmFnZ2FibGVFbGVtZW50c0ZvckNvbnRhaW5lcihjb250YWluZXIpXTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBkcmFnZ2FibGUgZWxlbWVudHMgZm9yIGEgZ2l2ZW4gY29udGFpbmVyLCBleGNsdWRpbmcgdGhlIG1pcnJvciBhbmRcbiAgICogb3JpZ2luYWwgc291cmNlIGVsZW1lbnQgaWYgcHJlc2VudFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnRbXX1cbiAgICovXG4gIGdldERyYWdnYWJsZUVsZW1lbnRzRm9yQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGFsbERyYWdnYWJsZUVsZW1lbnRzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5vcHRpb25zLmRyYWdnYWJsZSk7XG5cbiAgICByZXR1cm4gWy4uLmFsbERyYWdnYWJsZUVsZW1lbnRzXS5maWx0ZXIoY2hpbGRFbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiBjaGlsZEVsZW1lbnQgIT09IHRoaXMub3JpZ2luYWxTb3VyY2UgJiYgY2hpbGRFbGVtZW50ICE9PSB0aGlzLm1pcnJvcjtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIHN0YXJ0IGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBET00gRHJhZyBldmVudFxuICAgKi9cbiAgW29uRHJhZ1N0YXJ0XShldmVudCkge1xuICAgIGNvbnN0IHNlbnNvckV2ZW50ID0gZ2V0U2Vuc29yRXZlbnQoZXZlbnQpO1xuICAgIGNvbnN0IHsgdGFyZ2V0LCBjb250YWluZXIgfSA9IHNlbnNvckV2ZW50O1xuXG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lcnMuaW5jbHVkZXMoY29udGFpbmVyKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlICYmIHRhcmdldCAmJiAhKDAsIF91dGlscy5jbG9zZXN0KSh0YXJnZXQsIHRoaXMub3B0aW9ucy5oYW5kbGUpKSB7XG4gICAgICBzZW5zb3JFdmVudC5jYW5jZWwoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBGaW5kIGRyYWdnYWJsZSBzb3VyY2UgZWxlbWVudFxuICAgIHRoaXMub3JpZ2luYWxTb3VyY2UgPSAoMCwgX3V0aWxzLmNsb3Nlc3QpKHRhcmdldCwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSk7XG4gICAgdGhpcy5zb3VyY2VDb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICBpZiAoIXRoaXMub3JpZ2luYWxTb3VyY2UpIHtcbiAgICAgIHNlbnNvckV2ZW50LmNhbmNlbCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhc3RQbGFjZWRTb3VyY2UgJiYgdGhpcy5sYXN0UGxhY2VkQ29udGFpbmVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5wbGFjZWRUaW1lb3V0SUQpO1xuICAgICAgdGhpcy5sYXN0UGxhY2VkU291cmNlLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5nZXRDbGFzc05hbWVGb3IoJ3NvdXJjZTpwbGFjZWQnKSk7XG4gICAgICB0aGlzLmxhc3RQbGFjZWRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmdldENsYXNzTmFtZUZvcignY29udGFpbmVyOnBsYWNlZCcpKTtcbiAgICB9XG5cbiAgICB0aGlzLnNvdXJjZSA9IHRoaXMub3JpZ2luYWxTb3VyY2UuY2xvbmVOb2RlKHRydWUpO1xuICAgIHRoaXMub3JpZ2luYWxTb3VyY2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5zb3VyY2UsIHRoaXMub3JpZ2luYWxTb3VyY2UpO1xuICAgIHRoaXMub3JpZ2luYWxTb3VyY2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGNvbnN0IGRyYWdFdmVudCA9IG5ldyBfRHJhZ0V2ZW50LkRyYWdTdGFydEV2ZW50KHtcbiAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICBvcmlnaW5hbFNvdXJjZTogdGhpcy5vcmlnaW5hbFNvdXJjZSxcbiAgICAgIHNvdXJjZUNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgc2Vuc29yRXZlbnRcbiAgICB9KTtcblxuICAgIHRoaXMudHJpZ2dlcihkcmFnRXZlbnQpO1xuXG4gICAgdGhpcy5kcmFnZ2luZyA9ICFkcmFnRXZlbnQuY2FuY2VsZWQoKTtcblxuICAgIGlmIChkcmFnRXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgdGhpcy5zb3VyY2UucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnNvdXJjZSk7XG4gICAgICB0aGlzLm9yaWdpbmFsU291cmNlLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub3JpZ2luYWxTb3VyY2UuY2xhc3NMaXN0LmFkZCh0aGlzLmdldENsYXNzTmFtZUZvcignc291cmNlOm9yaWdpbmFsJykpO1xuICAgIHRoaXMuc291cmNlLmNsYXNzTGlzdC5hZGQodGhpcy5nZXRDbGFzc05hbWVGb3IoJ3NvdXJjZTpkcmFnZ2luZycpKTtcbiAgICB0aGlzLnNvdXJjZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuZ2V0Q2xhc3NOYW1lRm9yKCdjb250YWluZXI6ZHJhZ2dpbmcnKSk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRoaXMuZ2V0Q2xhc3NOYW1lRm9yKCdib2R5OmRyYWdnaW5nJykpO1xuICAgIGFwcGx5VXNlclNlbGVjdChkb2N1bWVudC5ib2R5LCAnbm9uZScpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGNvbnN0IG9sZFNlbnNvckV2ZW50ID0gZ2V0U2Vuc29yRXZlbnQoZXZlbnQpO1xuICAgICAgY29uc3QgbmV3U2Vuc29yRXZlbnQgPSBvbGRTZW5zb3JFdmVudC5jbG9uZSh7IHRhcmdldDogdGhpcy5zb3VyY2UgfSk7XG5cbiAgICAgIHRoaXNbb25EcmFnTW92ZV0oX2V4dGVuZHMoe30sIGV2ZW50LCB7XG4gICAgICAgIGRldGFpbDogbmV3U2Vuc29yRXZlbnRcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIG1vdmUgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIERPTSBEcmFnIGV2ZW50XG4gICAqL1xuICBbb25EcmFnTW92ZV0oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzZW5zb3JFdmVudCA9IGdldFNlbnNvckV2ZW50KGV2ZW50KTtcbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gc2Vuc29yRXZlbnQ7XG4gICAgbGV0IHRhcmdldCA9IHNlbnNvckV2ZW50LnRhcmdldDtcblxuICAgIGNvbnN0IGRyYWdNb3ZlRXZlbnQgPSBuZXcgX0RyYWdFdmVudC5EcmFnTW92ZUV2ZW50KHtcbiAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICBvcmlnaW5hbFNvdXJjZTogdGhpcy5vcmlnaW5hbFNvdXJjZSxcbiAgICAgIHNvdXJjZUNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgc2Vuc29yRXZlbnRcbiAgICB9KTtcblxuICAgIHRoaXMudHJpZ2dlcihkcmFnTW92ZUV2ZW50KTtcblxuICAgIGlmIChkcmFnTW92ZUV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHNlbnNvckV2ZW50LmNhbmNlbCgpO1xuICAgIH1cblxuICAgIHRhcmdldCA9ICgwLCBfdXRpbHMuY2xvc2VzdCkodGFyZ2V0LCB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlKTtcbiAgICBjb25zdCB3aXRoaW5Db3JyZWN0Q29udGFpbmVyID0gKDAsIF91dGlscy5jbG9zZXN0KShzZW5zb3JFdmVudC50YXJnZXQsIHRoaXMuY29udGFpbmVycyk7XG4gICAgY29uc3Qgb3ZlckNvbnRhaW5lciA9IHNlbnNvckV2ZW50Lm92ZXJDb250YWluZXIgfHwgd2l0aGluQ29ycmVjdENvbnRhaW5lcjtcbiAgICBjb25zdCBpc0xlYXZpbmdDb250YWluZXIgPSB0aGlzLmN1cnJlbnRPdmVyQ29udGFpbmVyICYmIG92ZXJDb250YWluZXIgIT09IHRoaXMuY3VycmVudE92ZXJDb250YWluZXI7XG4gICAgY29uc3QgaXNMZWF2aW5nRHJhZ2dhYmxlID0gdGhpcy5jdXJyZW50T3ZlciAmJiB0YXJnZXQgIT09IHRoaXMuY3VycmVudE92ZXI7XG4gICAgY29uc3QgaXNPdmVyQ29udGFpbmVyID0gb3ZlckNvbnRhaW5lciAmJiB0aGlzLmN1cnJlbnRPdmVyQ29udGFpbmVyICE9PSBvdmVyQ29udGFpbmVyO1xuICAgIGNvbnN0IGlzT3ZlckRyYWdnYWJsZSA9IHdpdGhpbkNvcnJlY3RDb250YWluZXIgJiYgdGFyZ2V0ICYmIHRoaXMuY3VycmVudE92ZXIgIT09IHRhcmdldDtcblxuICAgIGlmIChpc0xlYXZpbmdEcmFnZ2FibGUpIHtcbiAgICAgIGNvbnN0IGRyYWdPdXRFdmVudCA9IG5ldyBfRHJhZ0V2ZW50LkRyYWdPdXRFdmVudCh7XG4gICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICAgIG9yaWdpbmFsU291cmNlOiB0aGlzLm9yaWdpbmFsU291cmNlLFxuICAgICAgICBzb3VyY2VDb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgICAgc2Vuc29yRXZlbnQsXG4gICAgICAgIG92ZXI6IHRoaXMuY3VycmVudE92ZXJcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmN1cnJlbnRPdmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5nZXRDbGFzc05hbWVGb3IoJ2RyYWdnYWJsZTpvdmVyJykpO1xuICAgICAgdGhpcy5jdXJyZW50T3ZlciA9IG51bGw7XG5cbiAgICAgIHRoaXMudHJpZ2dlcihkcmFnT3V0RXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChpc0xlYXZpbmdDb250YWluZXIpIHtcbiAgICAgIGNvbnN0IGRyYWdPdXRDb250YWluZXJFdmVudCA9IG5ldyBfRHJhZ0V2ZW50LkRyYWdPdXRDb250YWluZXJFdmVudCh7XG4gICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICAgIG9yaWdpbmFsU291cmNlOiB0aGlzLm9yaWdpbmFsU291cmNlLFxuICAgICAgICBzb3VyY2VDb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgICAgc2Vuc29yRXZlbnQsXG4gICAgICAgIG92ZXJDb250YWluZXI6IHRoaXMuY3VycmVudE92ZXJDb250YWluZXJcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmN1cnJlbnRPdmVyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5nZXRDbGFzc05hbWVGb3IoJ2NvbnRhaW5lcjpvdmVyJykpO1xuICAgICAgdGhpcy5jdXJyZW50T3ZlckNvbnRhaW5lciA9IG51bGw7XG5cbiAgICAgIHRoaXMudHJpZ2dlcihkcmFnT3V0Q29udGFpbmVyRXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChpc092ZXJDb250YWluZXIpIHtcbiAgICAgIG92ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmdldENsYXNzTmFtZUZvcignY29udGFpbmVyOm92ZXInKSk7XG5cbiAgICAgIGNvbnN0IGRyYWdPdmVyQ29udGFpbmVyRXZlbnQgPSBuZXcgX0RyYWdFdmVudC5EcmFnT3ZlckNvbnRhaW5lckV2ZW50KHtcbiAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgICAgb3JpZ2luYWxTb3VyY2U6IHRoaXMub3JpZ2luYWxTb3VyY2UsXG4gICAgICAgIHNvdXJjZUNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgICBzZW5zb3JFdmVudCxcbiAgICAgICAgb3ZlckNvbnRhaW5lclxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY3VycmVudE92ZXJDb250YWluZXIgPSBvdmVyQ29udGFpbmVyO1xuXG4gICAgICB0aGlzLnRyaWdnZXIoZHJhZ092ZXJDb250YWluZXJFdmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzT3ZlckRyYWdnYWJsZSkge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQodGhpcy5nZXRDbGFzc05hbWVGb3IoJ2RyYWdnYWJsZTpvdmVyJykpO1xuXG4gICAgICBjb25zdCBkcmFnT3ZlckV2ZW50ID0gbmV3IF9EcmFnRXZlbnQuRHJhZ092ZXJFdmVudCh7XG4gICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICAgIG9yaWdpbmFsU291cmNlOiB0aGlzLm9yaWdpbmFsU291cmNlLFxuICAgICAgICBzb3VyY2VDb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgICAgc2Vuc29yRXZlbnQsXG4gICAgICAgIG92ZXJDb250YWluZXIsXG4gICAgICAgIG92ZXI6IHRhcmdldFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY3VycmVudE92ZXIgPSB0YXJnZXQ7XG5cbiAgICAgIHRoaXMudHJpZ2dlcihkcmFnT3ZlckV2ZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBzdG9wIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBET00gRHJhZyBldmVudFxuICAgKi9cbiAgW29uRHJhZ1N0b3BdKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZHJhZ1N0b3BFdmVudCA9IG5ldyBfRHJhZ0V2ZW50LkRyYWdTdG9wRXZlbnQoe1xuICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgIG9yaWdpbmFsU291cmNlOiB0aGlzLm9yaWdpbmFsU291cmNlLFxuICAgICAgc2Vuc29yRXZlbnQ6IGV2ZW50LnNlbnNvckV2ZW50LFxuICAgICAgc291cmNlQ29udGFpbmVyOiB0aGlzLnNvdXJjZUNvbnRhaW5lclxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKGRyYWdTdG9wRXZlbnQpO1xuXG4gICAgdGhpcy5zb3VyY2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5vcmlnaW5hbFNvdXJjZSwgdGhpcy5zb3VyY2UpO1xuICAgIHRoaXMuc291cmNlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5zb3VyY2UpO1xuICAgIHRoaXMub3JpZ2luYWxTb3VyY2Uuc3R5bGUuZGlzcGxheSA9ICcnO1xuXG4gICAgdGhpcy5zb3VyY2UuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmdldENsYXNzTmFtZUZvcignc291cmNlOmRyYWdnaW5nJykpO1xuICAgIHRoaXMub3JpZ2luYWxTb3VyY2UuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmdldENsYXNzTmFtZUZvcignc291cmNlOm9yaWdpbmFsJykpO1xuICAgIHRoaXMub3JpZ2luYWxTb3VyY2UuY2xhc3NMaXN0LmFkZCh0aGlzLmdldENsYXNzTmFtZUZvcignc291cmNlOnBsYWNlZCcpKTtcbiAgICB0aGlzLnNvdXJjZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuZ2V0Q2xhc3NOYW1lRm9yKCdjb250YWluZXI6cGxhY2VkJykpO1xuICAgIHRoaXMuc291cmNlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5nZXRDbGFzc05hbWVGb3IoJ2NvbnRhaW5lcjpkcmFnZ2luZycpKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5nZXRDbGFzc05hbWVGb3IoJ2JvZHk6ZHJhZ2dpbmcnKSk7XG4gICAgYXBwbHlVc2VyU2VsZWN0KGRvY3VtZW50LmJvZHksICcnKTtcblxuICAgIGlmICh0aGlzLmN1cnJlbnRPdmVyKSB7XG4gICAgICB0aGlzLmN1cnJlbnRPdmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5nZXRDbGFzc05hbWVGb3IoJ2RyYWdnYWJsZTpvdmVyJykpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmN1cnJlbnRPdmVyQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLmN1cnJlbnRPdmVyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5nZXRDbGFzc05hbWVGb3IoJ2NvbnRhaW5lcjpvdmVyJykpO1xuICAgIH1cblxuICAgIHRoaXMubGFzdFBsYWNlZFNvdXJjZSA9IHRoaXMub3JpZ2luYWxTb3VyY2U7XG4gICAgdGhpcy5sYXN0UGxhY2VkQ29udGFpbmVyID0gdGhpcy5zb3VyY2VDb250YWluZXI7XG5cbiAgICB0aGlzLnBsYWNlZFRpbWVvdXRJRCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubGFzdFBsYWNlZFNvdXJjZSkge1xuICAgICAgICB0aGlzLmxhc3RQbGFjZWRTb3VyY2UuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmdldENsYXNzTmFtZUZvcignc291cmNlOnBsYWNlZCcpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubGFzdFBsYWNlZENvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmxhc3RQbGFjZWRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmdldENsYXNzTmFtZUZvcignY29udGFpbmVyOnBsYWNlZCcpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5sYXN0UGxhY2VkU291cmNlID0gbnVsbDtcbiAgICAgIHRoaXMubGFzdFBsYWNlZENvbnRhaW5lciA9IG51bGw7XG4gICAgfSwgdGhpcy5vcHRpb25zLnBsYWNlZFRpbWVvdXQpO1xuXG4gICAgdGhpcy5zb3VyY2UgPSBudWxsO1xuICAgIHRoaXMub3JpZ2luYWxTb3VyY2UgPSBudWxsO1xuICAgIHRoaXMuY3VycmVudE92ZXJDb250YWluZXIgPSBudWxsO1xuICAgIHRoaXMuY3VycmVudE92ZXIgPSBudWxsO1xuICAgIHRoaXMuc291cmNlQ29udGFpbmVyID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIHByZXNzdXJlIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBET00gRHJhZyBldmVudFxuICAgKi9cbiAgW29uRHJhZ1ByZXNzdXJlXShldmVudCkge1xuICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbnNvckV2ZW50ID0gZ2V0U2Vuc29yRXZlbnQoZXZlbnQpO1xuICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMuc291cmNlIHx8ICgwLCBfdXRpbHMuY2xvc2VzdCkoc2Vuc29yRXZlbnQub3JpZ2luYWxFdmVudC50YXJnZXQsIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUpO1xuXG4gICAgY29uc3QgZHJhZ1ByZXNzdXJlRXZlbnQgPSBuZXcgX0RyYWdFdmVudC5EcmFnUHJlc3N1cmVFdmVudCh7XG4gICAgICBzZW5zb3JFdmVudCxcbiAgICAgIHNvdXJjZSxcbiAgICAgIHByZXNzdXJlOiBzZW5zb3JFdmVudC5wcmVzc3VyZVxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKGRyYWdQcmVzc3VyZUV2ZW50KTtcbiAgfVxufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBEcmFnZ2FibGU7XG5EcmFnZ2FibGUuUGx1Z2lucyA9IHsgQW5ub3VuY2VtZW50OiBfUGx1Z2lucy5Bbm5vdW5jZW1lbnQsIEZvY3VzYWJsZTogX1BsdWdpbnMuRm9jdXNhYmxlLCBNaXJyb3I6IF9QbHVnaW5zLk1pcnJvciwgU2Nyb2xsYWJsZTogX1BsdWdpbnMuU2Nyb2xsYWJsZSB9O1xuZnVuY3Rpb24gZ2V0U2Vuc29yRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LmRldGFpbDtcbn1cblxuZnVuY3Rpb24gYXBwbHlVc2VyU2VsZWN0KGVsZW1lbnQsIHZhbHVlKSB7XG4gIGVsZW1lbnQuc3R5bGUud2Via2l0VXNlclNlbGVjdCA9IHZhbHVlO1xuICBlbGVtZW50LnN0eWxlLm1velVzZXJTZWxlY3QgPSB2YWx1ZTtcbiAgZWxlbWVudC5zdHlsZS5tc1VzZXJTZWxlY3QgPSB2YWx1ZTtcbiAgZWxlbWVudC5zdHlsZS5vVXNlclNlbGVjdCA9IHZhbHVlO1xuICBlbGVtZW50LnN0eWxlLnVzZXJTZWxlY3QgPSB2YWx1ZTtcbn1cblxuLyoqKi8gfSksXG4vKiAzOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1NlbnNvciA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbnZhciBfU2Vuc29yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NlbnNvcik7XG5cbnZhciBfU2Vuc29yRXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBvbk1vdXNlRm9yY2VXaWxsQmVnaW4gPSBTeW1ib2woJ29uTW91c2VGb3JjZVdpbGxCZWdpbicpO1xuY29uc3Qgb25Nb3VzZUZvcmNlRG93biA9IFN5bWJvbCgnb25Nb3VzZUZvcmNlRG93bicpO1xuY29uc3Qgb25Nb3VzZURvd24gPSBTeW1ib2woJ29uTW91c2VEb3duJyk7XG5jb25zdCBvbk1vdXNlRm9yY2VDaGFuZ2UgPSBTeW1ib2woJ29uTW91c2VGb3JjZUNoYW5nZScpO1xuY29uc3Qgb25Nb3VzZU1vdmUgPSBTeW1ib2woJ29uTW91c2VNb3ZlJyk7XG5jb25zdCBvbk1vdXNlVXAgPSBTeW1ib2woJ29uTW91c2VVcCcpO1xuY29uc3Qgb25Nb3VzZUZvcmNlR2xvYmFsQ2hhbmdlID0gU3ltYm9sKCdvbk1vdXNlRm9yY2VHbG9iYWxDaGFuZ2UnKTtcblxuLyoqXG4gKiBUaGlzIHNlbnNvciBwaWNrcyB1cCBuYXRpdmUgZm9yY2UgdG91Y2ggZXZlbnRzIGFuZCBkaWN0YXRlcyBkcmFnIG9wZXJhdGlvbnNcbiAqIEBjbGFzcyBGb3JjZVRvdWNoU2Vuc29yXG4gKiBAbW9kdWxlIEZvcmNlVG91Y2hTZW5zb3JcbiAqIEBleHRlbmRzIFNlbnNvclxuICovXG5jbGFzcyBGb3JjZVRvdWNoU2Vuc29yIGV4dGVuZHMgX1NlbnNvcjIuZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBGb3JjZVRvdWNoU2Vuc29yIGNvbnN0cnVjdG9yLlxuICAgKiBAY29uc3RydWN0cyBGb3JjZVRvdWNoU2Vuc29yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnRbXXxOb2RlTGlzdHxIVE1MRWxlbWVudH0gY29udGFpbmVycyAtIENvbnRhaW5lcnNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXJzID0gW10sIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKGNvbnRhaW5lcnMsIG9wdGlvbnMpO1xuXG4gICAgLyoqXG4gICAgICogRHJhZ2dhYmxlIGVsZW1lbnQgbmVlZHMgdG8gYmUgcmVtZW1iZXJlZCB0byB1bnNldCB0aGUgZHJhZ2dhYmxlIGF0dHJpYnV0ZSBhZnRlciBkcmFnIG9wZXJhdGlvbiBoYXMgY29tcGxldGVkXG4gICAgICogQHByb3BlcnR5IG1pZ2h0RHJhZ1xuICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAqL1xuICAgIHRoaXMubWlnaHREcmFnID0gZmFsc2U7XG5cbiAgICB0aGlzW29uTW91c2VGb3JjZVdpbGxCZWdpbl0gPSB0aGlzW29uTW91c2VGb3JjZVdpbGxCZWdpbl0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uTW91c2VGb3JjZURvd25dID0gdGhpc1tvbk1vdXNlRm9yY2VEb3duXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25Nb3VzZURvd25dID0gdGhpc1tvbk1vdXNlRG93bl0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uTW91c2VGb3JjZUNoYW5nZV0gPSB0aGlzW29uTW91c2VGb3JjZUNoYW5nZV0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uTW91c2VNb3ZlXSA9IHRoaXNbb25Nb3VzZU1vdmVdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbk1vdXNlVXBdID0gdGhpc1tvbk1vdXNlVXBdLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgc2Vuc29ycyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIERPTVxuICAgKi9cbiAgYXR0YWNoKCkge1xuICAgIGZvciAoY29uc3QgY29udGFpbmVyIG9mIHRoaXMuY29udGFpbmVycykge1xuICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdG1vdXNlZm9yY2V3aWxsYmVnaW4nLCB0aGlzW29uTW91c2VGb3JjZVdpbGxCZWdpbl0sIGZhbHNlKTtcbiAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRtb3VzZWZvcmNlZG93bicsIHRoaXNbb25Nb3VzZUZvcmNlRG93bl0sIGZhbHNlKTtcbiAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzW29uTW91c2VEb3duXSwgdHJ1ZSk7XG4gICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0bW91c2Vmb3JjZWNoYW5nZWQnLCB0aGlzW29uTW91c2VGb3JjZUNoYW5nZV0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzW29uTW91c2VNb3ZlXSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXNbb25Nb3VzZVVwXSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoZXMgc2Vuc29ycyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIERPTVxuICAgKi9cbiAgZGV0YWNoKCkge1xuICAgIGZvciAoY29uc3QgY29udGFpbmVyIG9mIHRoaXMuY29udGFpbmVycykge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdG1vdXNlZm9yY2V3aWxsYmVnaW4nLCB0aGlzW29uTW91c2VGb3JjZVdpbGxCZWdpbl0sIGZhbHNlKTtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRtb3VzZWZvcmNlZG93bicsIHRoaXNbb25Nb3VzZUZvcmNlRG93bl0sIGZhbHNlKTtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzW29uTW91c2VEb3duXSwgdHJ1ZSk7XG4gICAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0bW91c2Vmb3JjZWNoYW5nZWQnLCB0aGlzW29uTW91c2VGb3JjZUNoYW5nZV0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzW29uTW91c2VNb3ZlXSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXNbb25Nb3VzZVVwXSk7XG4gIH1cblxuICAvKipcbiAgICogTW91c2UgZm9yY2Ugd2lsbCBiZWdpbiBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gTW91c2UgZm9yY2Ugd2lsbCBiZWdpbiBldmVudFxuICAgKi9cbiAgW29uTW91c2VGb3JjZVdpbGxCZWdpbl0oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMubWlnaHREcmFnID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3VzZSBmb3JjZSBkb3duIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBNb3VzZSBmb3JjZSBkb3duIGV2ZW50XG4gICAqL1xuICBbb25Nb3VzZUZvcmNlRG93bl0oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAgIGNvbnN0IGRyYWdTdGFydEV2ZW50ID0gbmV3IF9TZW5zb3JFdmVudC5EcmFnU3RhcnRTZW5zb3JFdmVudCh7XG4gICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgIHRhcmdldCxcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50XG4gICAgfSk7XG5cbiAgICB0aGlzLnRyaWdnZXIoY29udGFpbmVyLCBkcmFnU3RhcnRFdmVudCk7XG5cbiAgICB0aGlzLmN1cnJlbnRDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5kcmFnZ2luZyA9ICFkcmFnU3RhcnRFdmVudC5jYW5jZWxlZCgpO1xuICAgIHRoaXMubWlnaHREcmFnID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogTW91c2UgdXAgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIE1vdXNlIHVwIGV2ZW50XG4gICAqL1xuICBbb25Nb3VzZVVwXShldmVudCkge1xuICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYWdTdG9wRXZlbnQgPSBuZXcgX1NlbnNvckV2ZW50LkRyYWdTdG9wU2Vuc29yRXZlbnQoe1xuICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICB0YXJnZXQ6IG51bGwsXG4gICAgICBjb250YWluZXI6IHRoaXMuY3VycmVudENvbnRhaW5lcixcbiAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50XG4gICAgfSk7XG5cbiAgICB0aGlzLnRyaWdnZXIodGhpcy5jdXJyZW50Q29udGFpbmVyLCBkcmFnU3RvcEV2ZW50KTtcblxuICAgIHRoaXMuY3VycmVudENvbnRhaW5lciA9IG51bGw7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgIHRoaXMubWlnaHREcmFnID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogTW91c2UgZG93biBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gTW91c2UgZG93biBldmVudFxuICAgKi9cbiAgW29uTW91c2VEb3duXShldmVudCkge1xuICAgIGlmICghdGhpcy5taWdodERyYWcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBOZWVkIHdvcmthcm91bmQgZm9yIHJlYWwgY2xpY2tcbiAgICAvLyBDYW5jZWwgcG90ZW50aWFsIGRyYWcgZXZlbnRzXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3VzZSBtb3ZlIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBNb3VzZSBmb3JjZSB3aWxsIGJlZ2luIGV2ZW50XG4gICAqL1xuICBbb25Nb3VzZU1vdmVdKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcblxuICAgIGNvbnN0IGRyYWdNb3ZlRXZlbnQgPSBuZXcgX1NlbnNvckV2ZW50LkRyYWdNb3ZlU2Vuc29yRXZlbnQoe1xuICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICB0YXJnZXQsXG4gICAgICBjb250YWluZXI6IHRoaXMuY3VycmVudENvbnRhaW5lcixcbiAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50XG4gICAgfSk7XG5cbiAgICB0aGlzLnRyaWdnZXIodGhpcy5jdXJyZW50Q29udGFpbmVyLCBkcmFnTW92ZUV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3VzZSBmb3JjZSBjaGFuZ2UgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIE1vdXNlIGZvcmNlIGNoYW5nZSBldmVudFxuICAgKi9cbiAgW29uTW91c2VGb3JjZUNoYW5nZV0oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCBjb250YWluZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgY29uc3QgZHJhZ1ByZXNzdXJlRXZlbnQgPSBuZXcgX1NlbnNvckV2ZW50LkRyYWdQcmVzc3VyZVNlbnNvckV2ZW50KHtcbiAgICAgIHByZXNzdXJlOiBldmVudC53ZWJraXRGb3JjZSxcbiAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgdGFyZ2V0LFxuICAgICAgY29udGFpbmVyLFxuICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnRcbiAgICB9KTtcblxuICAgIHRoaXMudHJpZ2dlcihjb250YWluZXIsIGRyYWdQcmVzc3VyZUV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3VzZSBmb3JjZSBnbG9iYWwgY2hhbmdlIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBNb3VzZSBmb3JjZSBnbG9iYWwgY2hhbmdlIGV2ZW50XG4gICAqL1xuICBbb25Nb3VzZUZvcmNlR2xvYmFsQ2hhbmdlXShldmVudCkge1xuICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuICAgIGNvbnN0IGRyYWdQcmVzc3VyZUV2ZW50ID0gbmV3IF9TZW5zb3JFdmVudC5EcmFnUHJlc3N1cmVTZW5zb3JFdmVudCh7XG4gICAgICBwcmVzc3VyZTogZXZlbnQud2Via2l0Rm9yY2UsXG4gICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgIHRhcmdldCxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5jdXJyZW50Q29udGFpbmVyLFxuICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnRcbiAgICB9KTtcblxuICAgIHRoaXMudHJpZ2dlcih0aGlzLmN1cnJlbnRDb250YWluZXIsIGRyYWdQcmVzc3VyZUV2ZW50KTtcbiAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRm9yY2VUb3VjaFNlbnNvcjtcblxuLyoqKi8gfSksXG4vKiAzOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0ZvcmNlVG91Y2hTZW5zb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM4KTtcblxudmFyIF9Gb3JjZVRvdWNoU2Vuc29yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZvcmNlVG91Y2hTZW5zb3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfRm9yY2VUb3VjaFNlbnNvcjIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiA0MCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9TZW5zb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgX1NlbnNvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TZW5zb3IpO1xuXG52YXIgX1NlbnNvckV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3Qgb25Nb3VzZURvd24gPSBTeW1ib2woJ29uTW91c2VEb3duJyk7XG5jb25zdCBvbk1vdXNlVXAgPSBTeW1ib2woJ29uTW91c2VVcCcpO1xuY29uc3Qgb25EcmFnU3RhcnQgPSBTeW1ib2woJ29uRHJhZ1N0YXJ0Jyk7XG5jb25zdCBvbkRyYWdPdmVyID0gU3ltYm9sKCdvbkRyYWdPdmVyJyk7XG5jb25zdCBvbkRyYWdFbmQgPSBTeW1ib2woJ29uRHJhZ0VuZCcpO1xuY29uc3Qgb25Ecm9wID0gU3ltYm9sKCdvbkRyb3AnKTtcbmNvbnN0IHJlc2V0ID0gU3ltYm9sKCdyZXNldCcpO1xuXG4vKipcbiAqIFRoaXMgc2Vuc29yIHBpY2tzIHVwIG5hdGl2ZSBicm93c2VyIGRyYWcgZXZlbnRzIGFuZCBkaWN0YXRlcyBkcmFnIG9wZXJhdGlvbnNcbiAqIEBjbGFzcyBEcmFnU2Vuc29yXG4gKiBAbW9kdWxlIERyYWdTZW5zb3JcbiAqIEBleHRlbmRzIFNlbnNvclxuICovXG5jbGFzcyBEcmFnU2Vuc29yIGV4dGVuZHMgX1NlbnNvcjIuZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBEcmFnU2Vuc29yIGNvbnN0cnVjdG9yLlxuICAgKiBAY29uc3RydWN0cyBEcmFnU2Vuc29yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnRbXXxOb2RlTGlzdHxIVE1MRWxlbWVudH0gY29udGFpbmVycyAtIENvbnRhaW5lcnNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXJzID0gW10sIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKGNvbnRhaW5lcnMsIG9wdGlvbnMpO1xuXG4gICAgLyoqXG4gICAgICogTW91c2UgZG93biB0aW1lciB3aGljaCB3aWxsIGVuZCB1cCBzZXR0aW5nIHRoZSBkcmFnZ2FibGUgYXR0cmlidXRlLCB1bmxlc3MgY2FuY2VsZWRcbiAgICAgKiBAcHJvcGVydHkgbW91c2VEb3duVGltZW91dFxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5tb3VzZURvd25UaW1lb3V0ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIERyYWdnYWJsZSBlbGVtZW50IG5lZWRzIHRvIGJlIHJlbWVtYmVyZWQgdG8gdW5zZXQgdGhlIGRyYWdnYWJsZSBhdHRyaWJ1dGUgYWZ0ZXIgZHJhZyBvcGVyYXRpb24gaGFzIGNvbXBsZXRlZFxuICAgICAqIEBwcm9wZXJ0eSBkcmFnZ2FibGVFbGVtZW50XG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHRoaXMuZHJhZ2dhYmxlRWxlbWVudCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBOYXRpdmUgZHJhZ2dhYmxlIGVsZW1lbnQgY291bGQgYmUgbGlua3Mgb3IgaW1hZ2VzLCB0aGVpciBkcmFnZ2FibGUgc3RhdGUgd2lsbCBiZSBkaXNhYmxlZCBkdXJpbmcgZHJhZyBvcGVyYXRpb25cbiAgICAgKiBAcHJvcGVydHkgbmF0aXZlRHJhZ2dhYmxlRWxlbWVudFxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICB0aGlzLm5hdGl2ZURyYWdnYWJsZUVsZW1lbnQgPSBudWxsO1xuXG4gICAgdGhpc1tvbk1vdXNlRG93bl0gPSB0aGlzW29uTW91c2VEb3duXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25Nb3VzZVVwXSA9IHRoaXNbb25Nb3VzZVVwXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnU3RhcnRdID0gdGhpc1tvbkRyYWdTdGFydF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ092ZXJdID0gdGhpc1tvbkRyYWdPdmVyXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnRW5kXSA9IHRoaXNbb25EcmFnRW5kXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25Ecm9wXSA9IHRoaXNbb25Ecm9wXS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIHNlbnNvcnMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBET01cbiAgICovXG4gIGF0dGFjaCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzW29uTW91c2VEb3duXSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoZXMgc2Vuc29ycyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIERPTVxuICAgKi9cbiAgZGV0YWNoKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXNbb25Nb3VzZURvd25dLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIHN0YXJ0IGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBEcmFnIHN0YXJ0IGV2ZW50XG4gICAqL1xuICBbb25EcmFnU3RhcnRdKGV2ZW50KSB7XG4gICAgLy8gTmVlZCBmb3IgZmlyZWZveC4gXCJ0ZXh0XCIga2V5IGlzIG5lZWRlZCBmb3IgSUVcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICcnKTtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IHRoaXMub3B0aW9ucy50eXBlO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICB0aGlzLmN1cnJlbnRDb250YWluZXIgPSAoMCwgX3V0aWxzLmNsb3Nlc3QpKGV2ZW50LnRhcmdldCwgdGhpcy5jb250YWluZXJzKTtcblxuICAgIGlmICghdGhpcy5jdXJyZW50Q29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ1N0YXJ0RXZlbnQgPSBuZXcgX1NlbnNvckV2ZW50LkRyYWdTdGFydFNlbnNvckV2ZW50KHtcbiAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgdGFyZ2V0LFxuICAgICAgY29udGFpbmVyOiB0aGlzLmN1cnJlbnRDb250YWluZXIsXG4gICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgIH0pO1xuXG4gICAgLy8gV29ya2Fyb3VuZFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuY3VycmVudENvbnRhaW5lciwgZHJhZ1N0YXJ0RXZlbnQpO1xuXG4gICAgICBpZiAoZHJhZ1N0YXJ0RXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIG92ZXIgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIERyYWcgb3ZlciBldmVudFxuICAgKi9cbiAgW29uRHJhZ092ZXJdKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmN1cnJlbnRDb250YWluZXI7XG5cbiAgICBjb25zdCBkcmFnTW92ZUV2ZW50ID0gbmV3IF9TZW5zb3JFdmVudC5EcmFnTW92ZVNlbnNvckV2ZW50KHtcbiAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgdGFyZ2V0LFxuICAgICAgY29udGFpbmVyLFxuICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnRcbiAgICB9KTtcblxuICAgIHRoaXMudHJpZ2dlcihjb250YWluZXIsIGRyYWdNb3ZlRXZlbnQpO1xuXG4gICAgaWYgKCFkcmFnTW92ZUV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMub3B0aW9ucy50eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIGVuZCBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gRHJhZyBlbmQgZXZlbnRcbiAgICovXG4gIFtvbkRyYWdFbmRdKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXNbb25Nb3VzZVVwXSwgdHJ1ZSk7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY3VycmVudENvbnRhaW5lcjtcblxuICAgIGNvbnN0IGRyYWdTdG9wRXZlbnQgPSBuZXcgX1NlbnNvckV2ZW50LkRyYWdTdG9wU2Vuc29yRXZlbnQoe1xuICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICB0YXJnZXQsXG4gICAgICBjb250YWluZXIsXG4gICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKGNvbnRhaW5lciwgZHJhZ1N0b3BFdmVudCk7XG5cbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cbiAgICB0aGlzW3Jlc2V0XSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyb3AgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIERyb3AgZXZlbnRcbiAgICovXG4gIFtvbkRyb3BdKGV2ZW50KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3VzZSBkb3duIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBNb3VzZSBkb3duIGV2ZW50XG4gICAqL1xuICBbb25Nb3VzZURvd25dKGV2ZW50KSB7XG4gICAgLy8gRmlyZWZveCBidWcgZm9yIGlucHV0cyB3aXRoaW4gZHJhZ2dhYmxlcyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03MzkwNzFcbiAgICBpZiAoZXZlbnQudGFyZ2V0ICYmIChldmVudC50YXJnZXQuZm9ybSB8fCBldmVudC50YXJnZXQuY29udGVudGVkaXRhYmxlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5hdGl2ZURyYWdnYWJsZUVsZW1lbnQgPSAoMCwgX3V0aWxzLmNsb3Nlc3QpKGV2ZW50LnRhcmdldCwgZWxlbWVudCA9PiBlbGVtZW50LmRyYWdnYWJsZSk7XG5cbiAgICBpZiAobmF0aXZlRHJhZ2dhYmxlRWxlbWVudCkge1xuICAgICAgbmF0aXZlRHJhZ2dhYmxlRWxlbWVudC5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgIHRoaXMubmF0aXZlRHJhZ2dhYmxlRWxlbWVudCA9IG5hdGl2ZURyYWdnYWJsZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXNbb25Nb3VzZVVwXSwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0sIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXNbb25EcmFnT3Zlcl0sIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpc1tvbkRyYWdFbmRdLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXNbb25Ecm9wXSwgZmFsc2UpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gKDAsIF91dGlscy5jbG9zZXN0KShldmVudC50YXJnZXQsIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm1vdXNlRG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRhcmdldC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgdGhpcy5kcmFnZ2FibGVFbGVtZW50ID0gdGFyZ2V0O1xuICAgIH0sIHRoaXMub3B0aW9ucy5kZWxheSk7XG4gIH1cblxuICAvKipcbiAgICogTW91c2UgdXAgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIE1vdXNlIHVwIGV2ZW50XG4gICAqL1xuICBbb25Nb3VzZVVwXSgpIHtcbiAgICB0aGlzW3Jlc2V0XSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdXNlIHVwIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBNb3VzZSB1cCBldmVudFxuICAgKi9cbiAgW3Jlc2V0XSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5tb3VzZURvd25UaW1lb3V0KTtcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzW29uTW91c2VVcF0sIHRydWUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXNbb25EcmFnU3RhcnRdLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzW29uRHJhZ092ZXJdLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXNbb25EcmFnRW5kXSwgZmFsc2UpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzW29uRHJvcF0sIGZhbHNlKTtcblxuICAgIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMubmF0aXZlRHJhZ2dhYmxlRWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgdGhpcy5uYXRpdmVEcmFnZ2FibGVFbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kcmFnZ2FibGVFbGVtZW50KSB7XG4gICAgICB0aGlzLmRyYWdnYWJsZUVsZW1lbnQuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICB0aGlzLmRyYWdnYWJsZUVsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRHJhZ1NlbnNvcjtcblxuLyoqKi8gfSksXG4vKiA0MSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0RyYWdTZW5zb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQwKTtcblxudmFyIF9EcmFnU2Vuc29yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0RyYWdTZW5zb3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfRHJhZ1NlbnNvcjIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiA0MiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9TZW5zb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgX1NlbnNvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TZW5zb3IpO1xuXG52YXIgX1NlbnNvckV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3Qgb25Ub3VjaFN0YXJ0ID0gU3ltYm9sKCdvblRvdWNoU3RhcnQnKTtcbmNvbnN0IG9uVG91Y2hIb2xkID0gU3ltYm9sKCdvblRvdWNoSG9sZCcpO1xuY29uc3Qgb25Ub3VjaEVuZCA9IFN5bWJvbCgnb25Ub3VjaEVuZCcpO1xuY29uc3Qgb25Ub3VjaE1vdmUgPSBTeW1ib2woJ29uVG91Y2hNb3ZlJyk7XG5cbi8qKlxuICogUHJldmVudHMgc2Nyb2xsaW5nIHdoZW4gc2V0IHRvIHRydWVcbiAqIEB2YXIge0Jvb2xlYW59IHByZXZlbnRTY3JvbGxpbmdcbiAqL1xubGV0IHByZXZlbnRTY3JvbGxpbmcgPSBmYWxzZTtcblxuLy8gV2ViS2l0IHJlcXVpcmVzIGNhbmNlbGFibGUgYHRvdWNobW92ZWAgZXZlbnRzIHRvIGJlIGFkZGVkIGFzIGVhcmx5IGFzIHBvc3NpYmxlXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZXZlbnQgPT4ge1xuICBpZiAoIXByZXZlbnRTY3JvbGxpbmcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQcmV2ZW50IHNjcm9sbGluZ1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufSwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcblxuLyoqXG4gKiBUaGlzIHNlbnNvciBwaWNrcyB1cCBuYXRpdmUgYnJvd3NlciB0b3VjaCBldmVudHMgYW5kIGRpY3RhdGVzIGRyYWcgb3BlcmF0aW9uc1xuICogQGNsYXNzIFRvdWNoU2Vuc29yXG4gKiBAbW9kdWxlIFRvdWNoU2Vuc29yXG4gKiBAZXh0ZW5kcyBTZW5zb3JcbiAqL1xuY2xhc3MgVG91Y2hTZW5zb3IgZXh0ZW5kcyBfU2Vuc29yMi5kZWZhdWx0IHtcbiAgLyoqXG4gICAqIFRvdWNoU2Vuc29yIGNvbnN0cnVjdG9yLlxuICAgKiBAY29uc3RydWN0cyBUb3VjaFNlbnNvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50W118Tm9kZUxpc3R8SFRNTEVsZW1lbnR9IGNvbnRhaW5lcnMgLSBDb250YWluZXJzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IoY29udGFpbmVycyA9IFtdLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihjb250YWluZXJzLCBvcHRpb25zKTtcblxuICAgIC8qKlxuICAgICAqIENsb3Nlc3Qgc2Nyb2xsYWJsZSBjb250YWluZXIgc28gYWNjaWRlbnRhbCBzY3JvbGwgY2FuIGNhbmNlbCBsb25nIHRvdWNoXG4gICAgICogQHByb3BlcnR5IGN1cnJlbnRTY3JvbGxhYmxlUGFyZW50XG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHRoaXMuY3VycmVudFNjcm9sbGFibGVQYXJlbnQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGltZW91dElEIGZvciBsb25nIHRvdWNoXG4gICAgICogQHByb3BlcnR5IHRhcFRpbWVvdXRcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMudGFwVGltZW91dCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiB0b3VjaE1vdmVkIGluZGljYXRlcyBpZiB0b3VjaCBoYXMgbW92ZWQgZHVyaW5nIHRhcFRpbWVvdXRcbiAgICAgKiBAcHJvcGVydHkgdG91Y2hNb3ZlZFxuICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAqL1xuICAgIHRoaXMudG91Y2hNb3ZlZCA9IGZhbHNlO1xuXG4gICAgdGhpc1tvblRvdWNoU3RhcnRdID0gdGhpc1tvblRvdWNoU3RhcnRdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvblRvdWNoSG9sZF0gPSB0aGlzW29uVG91Y2hIb2xkXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25Ub3VjaEVuZF0gPSB0aGlzW29uVG91Y2hFbmRdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvblRvdWNoTW92ZV0gPSB0aGlzW29uVG91Y2hNb3ZlXS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIHNlbnNvcnMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBET01cbiAgICovXG4gIGF0dGFjaCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpc1tvblRvdWNoU3RhcnRdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2hlcyBzZW5zb3JzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgRE9NXG4gICAqL1xuICBkZXRhY2goKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXNbb25Ub3VjaFN0YXJ0XSk7XG4gIH1cblxuICAvKipcbiAgICogVG91Y2ggc3RhcnQgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRvdWNoIHN0YXJ0IGV2ZW50XG4gICAqL1xuICBbb25Ub3VjaFN0YXJ0XShldmVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9ICgwLCBfdXRpbHMuY2xvc2VzdCkoZXZlbnQudGFyZ2V0LCB0aGlzLmNvbnRhaW5lcnMpO1xuXG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzW29uVG91Y2hNb3ZlXSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzW29uVG91Y2hFbmRdKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXNbb25Ub3VjaEVuZF0pO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUpO1xuXG4gICAgdGhpcy5jdXJyZW50Q29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMudGFwVGltZW91dCA9IHNldFRpbWVvdXQodGhpc1tvblRvdWNoSG9sZF0oZXZlbnQsIGNvbnRhaW5lciksIHRoaXMub3B0aW9ucy5kZWxheSk7XG4gIH1cblxuICAvKipcbiAgICogVG91Y2ggaG9sZCBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gVG91Y2ggc3RhcnQgZXZlbnRcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gQ29udGFpbmVyIGVsZW1lbnRcbiAgICovXG4gIFtvblRvdWNoSG9sZF0oZXZlbnQsIGNvbnRhaW5lcikge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAodGhpcy50b3VjaE1vdmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG91Y2ggPSBldmVudC50b3VjaGVzWzBdIHx8IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICBjb25zdCBkcmFnU3RhcnRFdmVudCA9IG5ldyBfU2Vuc29yRXZlbnQuRHJhZ1N0YXJ0U2Vuc29yRXZlbnQoe1xuICAgICAgICBjbGllbnRYOiB0b3VjaC5wYWdlWCxcbiAgICAgICAgY2xpZW50WTogdG91Y2gucGFnZVksXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudHJpZ2dlcihjb250YWluZXIsIGRyYWdTdGFydEV2ZW50KTtcblxuICAgICAgdGhpcy5kcmFnZ2luZyA9ICFkcmFnU3RhcnRFdmVudC5jYW5jZWxlZCgpO1xuICAgICAgcHJldmVudFNjcm9sbGluZyA9IHRoaXMuZHJhZ2dpbmc7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb3VjaCBtb3ZlIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUb3VjaCBtb3ZlIGV2ZW50XG4gICAqL1xuICBbb25Ub3VjaE1vdmVdKGV2ZW50KSB7XG4gICAgdGhpcy50b3VjaE1vdmVkID0gdHJ1ZTtcblxuICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRvdWNoID0gZXZlbnQudG91Y2hlc1swXSB8fCBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoLnBhZ2VYIC0gd2luZG93LnNjcm9sbFgsIHRvdWNoLnBhZ2VZIC0gd2luZG93LnNjcm9sbFkpO1xuXG4gICAgY29uc3QgZHJhZ01vdmVFdmVudCA9IG5ldyBfU2Vuc29yRXZlbnQuRHJhZ01vdmVTZW5zb3JFdmVudCh7XG4gICAgICBjbGllbnRYOiB0b3VjaC5wYWdlWCxcbiAgICAgIGNsaWVudFk6IHRvdWNoLnBhZ2VZLFxuICAgICAgdGFyZ2V0LFxuICAgICAgY29udGFpbmVyOiB0aGlzLmN1cnJlbnRDb250YWluZXIsXG4gICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKHRoaXMuY3VycmVudENvbnRhaW5lciwgZHJhZ01vdmVFdmVudCk7XG4gIH1cblxuICAvKipcbiAgICogVG91Y2ggZW5kIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUb3VjaCBlbmQgZXZlbnRcbiAgICovXG4gIFtvblRvdWNoRW5kXShldmVudCkge1xuICAgIHRoaXMudG91Y2hNb3ZlZCA9IGZhbHNlO1xuICAgIHByZXZlbnRTY3JvbGxpbmcgPSBmYWxzZTtcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpc1tvblRvdWNoRW5kXSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzW29uVG91Y2hFbmRdKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzW29uVG91Y2hNb3ZlXSk7XG5cbiAgICBpZiAodGhpcy5jdXJyZW50Q29udGFpbmVyKSB7XG4gICAgICB0aGlzLmN1cnJlbnRDb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51KTtcbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy50YXBUaW1lb3V0KTtcblxuICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRvdWNoID0gZXZlbnQudG91Y2hlc1swXSB8fCBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoLnBhZ2VYIC0gd2luZG93LnNjcm9sbFgsIHRvdWNoLnBhZ2VZIC0gd2luZG93LnNjcm9sbFkpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGRyYWdTdG9wRXZlbnQgPSBuZXcgX1NlbnNvckV2ZW50LkRyYWdTdG9wU2Vuc29yRXZlbnQoe1xuICAgICAgY2xpZW50WDogdG91Y2gucGFnZVgsXG4gICAgICBjbGllbnRZOiB0b3VjaC5wYWdlWSxcbiAgICAgIHRhcmdldCxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5jdXJyZW50Q29udGFpbmVyLFxuICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnRcbiAgICB9KTtcblxuICAgIHRoaXMudHJpZ2dlcih0aGlzLmN1cnJlbnRDb250YWluZXIsIGRyYWdTdG9wRXZlbnQpO1xuXG4gICAgdGhpcy5jdXJyZW50Q29udGFpbmVyID0gbnVsbDtcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gVG91Y2hTZW5zb3I7XG5mdW5jdGlvbiBvbkNvbnRleHRNZW51KGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG4vKioqLyB9KSxcbi8qIDQzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfVG91Y2hTZW5zb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQyKTtcblxudmFyIF9Ub3VjaFNlbnNvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ub3VjaFNlbnNvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9Ub3VjaFNlbnNvcjIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiA0NCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5EcmFnUHJlc3N1cmVTZW5zb3JFdmVudCA9IGV4cG9ydHMuRHJhZ1N0b3BTZW5zb3JFdmVudCA9IGV4cG9ydHMuRHJhZ01vdmVTZW5zb3JFdmVudCA9IGV4cG9ydHMuRHJhZ1N0YXJ0U2Vuc29yRXZlbnQgPSBleHBvcnRzLlNlbnNvckV2ZW50ID0gdW5kZWZpbmVkO1xuXG52YXIgX0Fic3RyYWN0RXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX0Fic3RyYWN0RXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWJzdHJhY3RFdmVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQmFzZSBzZW5zb3IgZXZlbnRcbiAqIEBjbGFzcyBTZW5zb3JFdmVudFxuICogQG1vZHVsZSBTZW5zb3JFdmVudFxuICogQGV4dGVuZHMgQWJzdHJhY3RFdmVudFxuICovXG5jbGFzcyBTZW5zb3JFdmVudCBleHRlbmRzIF9BYnN0cmFjdEV2ZW50Mi5kZWZhdWx0IHtcbiAgLyoqXG4gICAqIE9yaWdpbmFsIGJyb3dzZXIgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgYSBzZW5zb3JcbiAgICogQHByb3BlcnR5IG9yaWdpbmFsRXZlbnRcbiAgICogQHR5cGUge0V2ZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBvcmlnaW5hbEV2ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEub3JpZ2luYWxFdmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3JtYWxpemVkIGNsaWVudFggZm9yIGJvdGggdG91Y2ggYW5kIG1vdXNlIGV2ZW50c1xuICAgKiBAcHJvcGVydHkgY2xpZW50WFxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBjbGllbnRYKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuY2xpZW50WDtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3JtYWxpemVkIGNsaWVudFkgZm9yIGJvdGggdG91Y2ggYW5kIG1vdXNlIGV2ZW50c1xuICAgKiBAcHJvcGVydHkgY2xpZW50WVxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBjbGllbnRZKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuY2xpZW50WTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3JtYWxpemVkIHRhcmdldCBmb3IgYm90aCB0b3VjaCBhbmQgbW91c2UgZXZlbnRzXG4gICAqIFJldHVybnMgdGhlIGVsZW1lbnQgdGhhdCBpcyBiZWhpbmQgY3Vyc29yIG9yIHRvdWNoIHBvaW50ZXJcbiAgICogQHByb3BlcnR5IHRhcmdldFxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnRhcmdldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250YWluZXIgdGhhdCBpbml0aWF0ZWQgdGhlIHNlbnNvclxuICAgKiBAcHJvcGVydHkgY29udGFpbmVyXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrcGFkIHByZXNzdXJlXG4gICAqIEBwcm9wZXJ0eSBwcmVzc3VyZVxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBwcmVzc3VyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnByZXNzdXJlO1xuICB9XG59XG5cbmV4cG9ydHMuU2Vuc29yRXZlbnQgPSBTZW5zb3JFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIERyYWcgc3RhcnQgc2Vuc29yIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzcyBEcmFnU3RhcnRTZW5zb3JFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIERyYWdTdGFydFNlbnNvckV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIFNlbnNvckV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5jbGFzcyBEcmFnU3RhcnRTZW5zb3JFdmVudCBleHRlbmRzIFNlbnNvckV2ZW50IHt9XG5cbmV4cG9ydHMuRHJhZ1N0YXJ0U2Vuc29yRXZlbnQgPSBEcmFnU3RhcnRTZW5zb3JFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIERyYWcgbW92ZSBzZW5zb3IgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIERyYWdNb3ZlU2Vuc29yRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBEcmFnTW92ZVNlbnNvckV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIFNlbnNvckV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5EcmFnU3RhcnRTZW5zb3JFdmVudC50eXBlID0gJ2RyYWc6c3RhcnQnO1xuY2xhc3MgRHJhZ01vdmVTZW5zb3JFdmVudCBleHRlbmRzIFNlbnNvckV2ZW50IHt9XG5cbmV4cG9ydHMuRHJhZ01vdmVTZW5zb3JFdmVudCA9IERyYWdNb3ZlU2Vuc29yRXZlbnQ7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogRHJhZyBzdG9wIHNlbnNvciBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIERyYWdTdG9wU2Vuc29yRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtb2R1bGUgRHJhZ1N0b3BTZW5zb3JFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGV4dGVuZHMgU2Vuc29yRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5EcmFnTW92ZVNlbnNvckV2ZW50LnR5cGUgPSAnZHJhZzptb3ZlJztcbmNsYXNzIERyYWdTdG9wU2Vuc29yRXZlbnQgZXh0ZW5kcyBTZW5zb3JFdmVudCB7fVxuXG5leHBvcnRzLkRyYWdTdG9wU2Vuc29yRXZlbnQgPSBEcmFnU3RvcFNlbnNvckV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIERyYWcgcHJlc3N1cmUgc2Vuc29yIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgRHJhZ1ByZXNzdXJlU2Vuc29yRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtb2R1bGUgRHJhZ1ByZXNzdXJlU2Vuc29yRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIFNlbnNvckV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuRHJhZ1N0b3BTZW5zb3JFdmVudC50eXBlID0gJ2RyYWc6c3RvcCc7XG5jbGFzcyBEcmFnUHJlc3N1cmVTZW5zb3JFdmVudCBleHRlbmRzIFNlbnNvckV2ZW50IHt9XG5leHBvcnRzLkRyYWdQcmVzc3VyZVNlbnNvckV2ZW50ID0gRHJhZ1ByZXNzdXJlU2Vuc29yRXZlbnQ7XG5EcmFnUHJlc3N1cmVTZW5zb3JFdmVudC50eXBlID0gJ2RyYWc6cHJlc3N1cmUnO1xuXG4vKioqLyB9KSxcbi8qIDQ1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX1NlbnNvciA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbnZhciBfU2Vuc29yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NlbnNvcik7XG5cbnZhciBfU2Vuc29yRXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBvbkNvbnRleHRNZW51V2hpbGVEcmFnZ2luZyA9IFN5bWJvbCgnb25Db250ZXh0TWVudVdoaWxlRHJhZ2dpbmcnKTtcbmNvbnN0IG9uTW91c2VEb3duID0gU3ltYm9sKCdvbk1vdXNlRG93bicpO1xuY29uc3Qgb25Nb3VzZU1vdmUgPSBTeW1ib2woJ29uTW91c2VNb3ZlJyk7XG5jb25zdCBvbk1vdXNlVXAgPSBTeW1ib2woJ29uTW91c2VVcCcpO1xuXG4vKipcbiAqIFRoaXMgc2Vuc29yIHBpY2tzIHVwIG5hdGl2ZSBicm93c2VyIG1vdXNlIGV2ZW50cyBhbmQgZGljdGF0ZXMgZHJhZyBvcGVyYXRpb25zXG4gKiBAY2xhc3MgTW91c2VTZW5zb3JcbiAqIEBtb2R1bGUgTW91c2VTZW5zb3JcbiAqIEBleHRlbmRzIFNlbnNvclxuICovXG5jbGFzcyBNb3VzZVNlbnNvciBleHRlbmRzIF9TZW5zb3IyLmRlZmF1bHQge1xuICAvKipcbiAgICogTW91c2VTZW5zb3IgY29uc3RydWN0b3IuXG4gICAqIEBjb25zdHJ1Y3RzIE1vdXNlU2Vuc29yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnRbXXxOb2RlTGlzdHxIVE1MRWxlbWVudH0gY29udGFpbmVycyAtIENvbnRhaW5lcnNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXJzID0gW10sIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKGNvbnRhaW5lcnMsIG9wdGlvbnMpO1xuXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIGlmIG1vdXNlIGJ1dHRvbiBpcyBzdGlsbCBkb3duXG4gICAgICogQHByb3BlcnR5IG1vdXNlRG93blxuICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAqL1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBNb3VzZSBkb3duIHRpbWVyIHdoaWNoIHdpbGwgZW5kIHVwIHRyaWdnZXJpbmcgdGhlIGRyYWcgc3RhcnQgb3BlcmF0aW9uXG4gICAgICogQHByb3BlcnR5IG1vdXNlRG93blRpbWVvdXRcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMubW91c2VEb3duVGltZW91dCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgaWYgY29udGV4dCBtZW51IGhhcyBiZWVuIG9wZW5lZCBkdXJpbmcgZHJhZyBvcGVyYXRpb25cbiAgICAgKiBAcHJvcGVydHkgb3BlbmVkQ29udGV4dE1lbnVcbiAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLm9wZW5lZENvbnRleHRNZW51ID0gZmFsc2U7XG5cbiAgICB0aGlzW29uQ29udGV4dE1lbnVXaGlsZURyYWdnaW5nXSA9IHRoaXNbb25Db250ZXh0TWVudVdoaWxlRHJhZ2dpbmddLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbk1vdXNlRG93bl0gPSB0aGlzW29uTW91c2VEb3duXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25Nb3VzZU1vdmVdID0gdGhpc1tvbk1vdXNlTW92ZV0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uTW91c2VVcF0gPSB0aGlzW29uTW91c2VVcF0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyBzZW5zb3JzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgRE9NXG4gICAqL1xuICBhdHRhY2goKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpc1tvbk1vdXNlRG93bl0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaGVzIHNlbnNvcnMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBET01cbiAgICovXG4gIGRldGFjaCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzW29uTW91c2VEb3duXSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogTW91c2UgZG93biBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gTW91c2UgZG93biBldmVudFxuICAgKi9cbiAgW29uTW91c2VEb3duXShldmVudCkge1xuICAgIGlmIChldmVudC5idXR0b24gIT09IDAgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXNbb25Nb3VzZVVwXSk7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9ICgwLCBfdXRpbHMuY2xvc2VzdCkodGFyZ2V0LCB0aGlzLmNvbnRhaW5lcnMpO1xuXG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBwcmV2ZW50TmF0aXZlRHJhZ1N0YXJ0KTtcblxuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcblxuICAgIGNsZWFyVGltZW91dCh0aGlzLm1vdXNlRG93blRpbWVvdXQpO1xuICAgIHRoaXMubW91c2VEb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLm1vdXNlRG93bikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRyYWdTdGFydEV2ZW50ID0gbmV3IF9TZW5zb3JFdmVudC5EcmFnU3RhcnRTZW5zb3JFdmVudCh7XG4gICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudHJpZ2dlcihjb250YWluZXIsIGRyYWdTdGFydEV2ZW50KTtcblxuICAgICAgdGhpcy5jdXJyZW50Q29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgdGhpcy5kcmFnZ2luZyA9ICFkcmFnU3RhcnRFdmVudC5jYW5jZWxlZCgpO1xuXG4gICAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIHRoaXNbb25Db250ZXh0TWVudVdoaWxlRHJhZ2dpbmddKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpc1tvbk1vdXNlTW92ZV0pO1xuICAgICAgfVxuICAgIH0sIHRoaXMub3B0aW9ucy5kZWxheSk7XG4gIH1cblxuICAvKipcbiAgICogTW91c2UgbW92ZSBoYW5kbGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gTW91c2UgbW92ZSBldmVudFxuICAgKi9cbiAgW29uTW91c2VNb3ZlXShldmVudCkge1xuICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG5cbiAgICBjb25zdCBkcmFnTW92ZUV2ZW50ID0gbmV3IF9TZW5zb3JFdmVudC5EcmFnTW92ZVNlbnNvckV2ZW50KHtcbiAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgdGFyZ2V0LFxuICAgICAgY29udGFpbmVyOiB0aGlzLmN1cnJlbnRDb250YWluZXIsXG4gICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgIH0pO1xuXG4gICAgdGhpcy50cmlnZ2VyKHRoaXMuY3VycmVudENvbnRhaW5lciwgZHJhZ01vdmVFdmVudCk7XG4gIH1cblxuICAvKipcbiAgICogTW91c2UgdXAgaGFuZGxlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIE1vdXNlIHVwIGV2ZW50XG4gICAqL1xuICBbb25Nb3VzZVVwXShldmVudCkge1xuICAgIHRoaXMubW91c2VEb3duID0gQm9vbGVhbih0aGlzLm9wZW5lZENvbnRleHRNZW51KTtcblxuICAgIGlmICh0aGlzLm9wZW5lZENvbnRleHRNZW51KSB7XG4gICAgICB0aGlzLm9wZW5lZENvbnRleHRNZW51ID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXNbb25Nb3VzZVVwXSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgcHJldmVudE5hdGl2ZURyYWdTdGFydCk7XG5cbiAgICBpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuXG4gICAgY29uc3QgZHJhZ1N0b3BFdmVudCA9IG5ldyBfU2Vuc29yRXZlbnQuRHJhZ1N0b3BTZW5zb3JFdmVudCh7XG4gICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgIHRhcmdldCxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5jdXJyZW50Q29udGFpbmVyLFxuICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnRcbiAgICB9KTtcblxuICAgIHRoaXMudHJpZ2dlcih0aGlzLmN1cnJlbnRDb250YWluZXIsIGRyYWdTdG9wRXZlbnQpO1xuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCB0aGlzW29uQ29udGV4dE1lbnVXaGlsZURyYWdnaW5nXSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpc1tvbk1vdXNlTW92ZV0pO1xuXG4gICAgdGhpcy5jdXJyZW50Q29udGFpbmVyID0gbnVsbDtcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ29udGV4dCBtZW51IGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBDb250ZXh0IG1lbnUgZXZlbnRcbiAgICovXG4gIFtvbkNvbnRleHRNZW51V2hpbGVEcmFnZ2luZ10oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMub3BlbmVkQ29udGV4dE1lbnUgPSB0cnVlO1xuICB9XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1vdXNlU2Vuc29yO1xuZnVuY3Rpb24gcHJldmVudE5hdGl2ZURyYWdTdGFydChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG4vKioqLyB9KSxcbi8qIDQ2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfTW91c2VTZW5zb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ1KTtcblxudmFyIF9Nb3VzZVNlbnNvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb3VzZVNlbnNvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9Nb3VzZVNlbnNvcjIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiA0NyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG4vKipcbiAqIEJhc2Ugc2Vuc29yIGNsYXNzLiBFeHRlbmQgZnJvbSB0aGlzIGNsYXNzIHRvIGNyZWF0ZSBhIG5ldyBvciBjdXN0b20gc2Vuc29yXG4gKiBAY2xhc3MgU2Vuc29yXG4gKiBAbW9kdWxlIFNlbnNvclxuICovXG5jbGFzcyBTZW5zb3Ige1xuICAvKipcbiAgICogU2Vuc29yIGNvbnN0cnVjdG9yLlxuICAgKiBAY29uc3RydWN0cyBTZW5zb3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudFtdfE5vZGVMaXN0fEhUTUxFbGVtZW50fSBjb250YWluZXJzIC0gQ29udGFpbmVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcnMgPSBbXSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogQ3VycmVudCBjb250YWluZXJzXG4gICAgICogQHByb3BlcnR5IGNvbnRhaW5lcnNcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgKi9cbiAgICB0aGlzLmNvbnRhaW5lcnMgPSBbLi4uY29udGFpbmVyc107XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IG9wdGlvbnNcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9uc1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5vcHRpb25zID0gX2V4dGVuZHMoe30sIG9wdGlvbnMpO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBkcmFnIHN0YXRlXG4gICAgICogQHByb3BlcnR5IGRyYWdnaW5nXG4gICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBjb250YWluZXJcbiAgICAgKiBAcHJvcGVydHkgY3VycmVudENvbnRhaW5lclxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICB0aGlzLmN1cnJlbnRDb250YWluZXIgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIHNlbnNvcnMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBET01cbiAgICogQHJldHVybiB7U2Vuc29yfVxuICAgKi9cbiAgYXR0YWNoKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaGVzIHNlbnNvcnMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBET01cbiAgICogQHJldHVybiB7U2Vuc29yfVxuICAgKi9cbiAgZGV0YWNoKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY29udGFpbmVyIHRvIHRoaXMgc2Vuc29yIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7Li4uSFRNTEVsZW1lbnR9IGNvbnRhaW5lcnMgLSBDb250YWluZXJzIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIHNlbnNvclxuICAgKiBAZXhhbXBsZSBkcmFnZ2FibGUuYWRkQ29udGFpbmVyKGRvY3VtZW50LmJvZHkpXG4gICAqL1xuICBhZGRDb250YWluZXIoLi4uY29udGFpbmVycykge1xuICAgIHRoaXMuY29udGFpbmVycyA9IFsuLi50aGlzLmNvbnRhaW5lcnMsIC4uLmNvbnRhaW5lcnNdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgY29udGFpbmVyIGZyb20gdGhpcyBzZW5zb3IgaW5zdGFuY2VcbiAgICogQHBhcmFtIHsuLi5IVE1MRWxlbWVudH0gY29udGFpbmVycyAtIENvbnRhaW5lcnMgeW91IHdhbnQgdG8gcmVtb3ZlIGZyb20gdGhpcyBzZW5zb3JcbiAgICogQGV4YW1wbGUgZHJhZ2dhYmxlLnJlbW92ZUNvbnRhaW5lcihkb2N1bWVudC5ib2R5KVxuICAgKi9cbiAgcmVtb3ZlQ29udGFpbmVyKC4uLmNvbnRhaW5lcnMpIHtcbiAgICB0aGlzLmNvbnRhaW5lcnMgPSB0aGlzLmNvbnRhaW5lcnMuZmlsdGVyKGNvbnRhaW5lciA9PiAhY29udGFpbmVycy5pbmNsdWRlcyhjb250YWluZXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyBldmVudCBvbiB0YXJnZXQgZWxlbWVudFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gRWxlbWVudCB0byB0cmlnZ2VyIGV2ZW50IG9uXG4gICAqIEBwYXJhbSB7U2Vuc29yRXZlbnR9IHNlbnNvckV2ZW50IC0gU2Vuc29yIGV2ZW50IHRvIHRyaWdnZXJcbiAgICovXG4gIHRyaWdnZXIoZWxlbWVudCwgc2Vuc29yRXZlbnQpIHtcbiAgICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIGV2ZW50LmRldGFpbCA9IHNlbnNvckV2ZW50O1xuICAgIGV2ZW50LmluaXRFdmVudChzZW5zb3JFdmVudC50eXBlLCB0cnVlLCB0cnVlKTtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIHRoaXMubGFzdEV2ZW50ID0gc2Vuc29yRXZlbnQ7XG5cbiAgICByZXR1cm4gc2Vuc29yRXZlbnQ7XG4gIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFNlbnNvcjtcblxuLyoqKi8gfSksXG4vKiA0OCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcmVxdWVzdE5leHRBbmltYXRpb25GcmFtZTtcbmZ1bmN0aW9uIHJlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spIHtcbiAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgfSk7XG59XG5cbi8qKiovIH0pLFxuLyogNDkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OCk7XG5cbnZhciBfcmVxdWVzdE5leHRBbmltYXRpb25GcmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXF1ZXN0TmV4dEFuaW1hdGlvbkZyYW1lKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX3JlcXVlc3ROZXh0QW5pbWF0aW9uRnJhbWUyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuLyogNTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNsb3Nlc3Q7XG5jb25zdCBtYXRjaEZ1bmN0aW9uID0gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG4vKipcbiAqIEdldCB0aGUgY2xvc2VzdCBwYXJlbnQgZWxlbWVudCBvZiBhIGdpdmVuIGVsZW1lbnQgdGhhdCBtYXRjaGVzIHRoZSBnaXZlblxuICogc2VsZWN0b3Igc3RyaW5nIG9yIG1hdGNoaW5nIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IFRoZSBjaGlsZCBlbGVtZW50IHRvIGZpbmQgYSBwYXJlbnQgb2ZcbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBzZWxlY3RvciBUaGUgc3RyaW5nIG9yIGZ1bmN0aW9uIHRvIHVzZSB0byBtYXRjaFxuICogICAgIHRoZSBwYXJlbnQgZWxlbWVudFxuICogQHJldHVybiB7RWxlbWVudHxudWxsfVxuICovXG5mdW5jdGlvbiBjbG9zZXN0KGVsZW1lbnQsIHZhbHVlKSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qgc2VsZWN0b3IgPSB2YWx1ZTtcbiAgY29uc3QgY2FsbGJhY2sgPSB2YWx1ZTtcbiAgY29uc3Qgbm9kZUxpc3QgPSB2YWx1ZTtcbiAgY29uc3Qgc2luZ2xlRWxlbWVudCA9IHZhbHVlO1xuXG4gIGNvbnN0IGlzU2VsZWN0b3IgPSBCb29sZWFuKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpO1xuICBjb25zdCBpc0Z1bmN0aW9uID0gQm9vbGVhbih0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpO1xuICBjb25zdCBpc05vZGVMaXN0ID0gQm9vbGVhbih2YWx1ZSBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpO1xuICBjb25zdCBpc0VsZW1lbnQgPSBCb29sZWFuKHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpO1xuXG4gIGZ1bmN0aW9uIGNvbmRpdGlvbkZuKGN1cnJlbnRFbGVtZW50KSB7XG4gICAgaWYgKCFjdXJyZW50RWxlbWVudCkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRFbGVtZW50O1xuICAgIH0gZWxzZSBpZiAoaXNTZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIG1hdGNoRnVuY3Rpb24uY2FsbChjdXJyZW50RWxlbWVudCwgc2VsZWN0b3IpO1xuICAgIH0gZWxzZSBpZiAoaXNOb2RlTGlzdCkge1xuICAgICAgcmV0dXJuIFsuLi5ub2RlTGlzdF0uaW5jbHVkZXMoY3VycmVudEVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAoaXNFbGVtZW50KSB7XG4gICAgICByZXR1cm4gc2luZ2xlRWxlbWVudCA9PT0gY3VycmVudEVsZW1lbnQ7XG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soY3VycmVudEVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBsZXQgY3VycmVudCA9IGVsZW1lbnQ7XG5cbiAgZG8ge1xuICAgIGN1cnJlbnQgPSBjdXJyZW50LmNvcnJlc3BvbmRpbmdVc2VFbGVtZW50IHx8IGN1cnJlbnQuY29ycmVzcG9uZGluZ0VsZW1lbnQgfHwgY3VycmVudDtcblxuICAgIGlmIChjb25kaXRpb25GbihjdXJyZW50KSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfVxuXG4gICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcbiAgfSB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSBkb2N1bWVudC5ib2R5ICYmIGN1cnJlbnQgIT09IGRvY3VtZW50KTtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqKi8gfSksXG4vKiA1MSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2Nsb3Nlc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUwKTtcblxudmFyIF9jbG9zZXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nsb3Nlc3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfY2xvc2VzdDIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiA1MiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IGV4cG9ydHMuc2Nyb2xsID0gZXhwb3J0cy5vbkRyYWdTdG9wID0gZXhwb3J0cy5vbkRyYWdNb3ZlID0gZXhwb3J0cy5vbkRyYWdTdGFydCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9BYnN0cmFjdFBsdWdpbiA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfQWJzdHJhY3RQbHVnaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWJzdHJhY3RQbHVnaW4pO1xuXG52YXIgX3V0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3Qgb25EcmFnU3RhcnQgPSBleHBvcnRzLm9uRHJhZ1N0YXJ0ID0gU3ltYm9sKCdvbkRyYWdTdGFydCcpO1xuY29uc3Qgb25EcmFnTW92ZSA9IGV4cG9ydHMub25EcmFnTW92ZSA9IFN5bWJvbCgnb25EcmFnTW92ZScpO1xuY29uc3Qgb25EcmFnU3RvcCA9IGV4cG9ydHMub25EcmFnU3RvcCA9IFN5bWJvbCgnb25EcmFnU3RvcCcpO1xuY29uc3Qgc2Nyb2xsID0gZXhwb3J0cy5zY3JvbGwgPSBTeW1ib2woJ3Njcm9sbCcpO1xuXG4vKipcbiAqIFNjcm9sbGFibGUgZGVmYXVsdCBvcHRpb25zXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGVmYXVsdE9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBkZWZhdWx0T3B0aW9ucy5zcGVlZFxuICogQHByb3BlcnR5IHtOdW1iZXJ9IGRlZmF1bHRPcHRpb25zLnNlbnNpdGl2aXR5XG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50W119IGRlZmF1bHRPcHRpb25zLnNjcm9sbGFibGVFbGVtZW50c1xuICogQHR5cGUge09iamVjdH1cbiAqL1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBleHBvcnRzLmRlZmF1bHRPcHRpb25zID0ge1xuICBzcGVlZDogNixcbiAgc2Vuc2l0aXZpdHk6IDUwLFxuICBzY3JvbGxhYmxlRWxlbWVudHM6IFtdXG59O1xuXG4vKipcbiAqIFNjcm9sbGFibGUgcGx1Z2luIHdoaWNoIHNjcm9sbHMgdGhlIGNsb3Nlc3Qgc2Nyb2xsYWJsZSBwYXJlbnRcbiAqIEBjbGFzcyBTY3JvbGxhYmxlXG4gKiBAbW9kdWxlIFNjcm9sbGFibGVcbiAqIEBleHRlbmRzIEFic3RyYWN0UGx1Z2luXG4gKi9cbmNsYXNzIFNjcm9sbGFibGUgZXh0ZW5kcyBfQWJzdHJhY3RQbHVnaW4yLmRlZmF1bHQge1xuICAvKipcbiAgICogU2Nyb2xsYWJsZSBjb25zdHJ1Y3Rvci5cbiAgICogQGNvbnN0cnVjdHMgU2Nyb2xsYWJsZVxuICAgKiBAcGFyYW0ge0RyYWdnYWJsZX0gZHJhZ2dhYmxlIC0gRHJhZ2dhYmxlIGluc3RhbmNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGUpIHtcbiAgICBzdXBlcihkcmFnZ2FibGUpO1xuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsYWJsZSBvcHRpb25zXG4gICAgICogQHByb3BlcnR5IHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcHJvcGVydHkge051bWJlcn0gb3B0aW9ucy5zcGVlZFxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBvcHRpb25zLnNlbnNpdGl2aXR5XG4gICAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudFtdfSBvcHRpb25zLnNjcm9sbGFibGVFbGVtZW50c1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5vcHRpb25zID0gX2V4dGVuZHMoe30sIGRlZmF1bHRPcHRpb25zLCB0aGlzLmdldE9wdGlvbnMoKSk7XG5cbiAgICAvKipcbiAgICAgKiBLZWVwcyBjdXJyZW50IG1vdXNlIHBvc2l0aW9uXG4gICAgICogQHByb3BlcnR5IHtPYmplY3R9IGN1cnJlbnRNb3VzZVBvc2l0aW9uXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGN1cnJlbnRNb3VzZVBvc2l0aW9uLmNsaWVudFhcbiAgICAgKiBAcHJvcGVydHkge051bWJlcn0gY3VycmVudE1vdXNlUG9zaXRpb24uY2xpZW50WVxuICAgICAqIEB0eXBlIHtPYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmN1cnJlbnRNb3VzZVBvc2l0aW9uID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCBhbmltYXRpb24gZnJhbWVcbiAgICAgKiBAcHJvcGVydHkgc2Nyb2xsQW5pbWF0aW9uRnJhbWVcbiAgICAgKiBAdHlwZSB7TnVtYmVyfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5zY3JvbGxBbmltYXRpb25GcmFtZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXN0IHNjcm9sbGFibGUgZWxlbWVudFxuICAgICAqIEBwcm9wZXJ0eSBzY3JvbGxhYmxlRWxlbWVudFxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudHxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQW5pbWF0aW9uIGZyYW1lIGxvb2tpbmcgZm9yIHRoZSBjbG9zZXN0IHNjcm9sbGFibGUgZWxlbWVudFxuICAgICAqIEBwcm9wZXJ0eSBmaW5kU2Nyb2xsYWJsZUVsZW1lbnRGcmFtZVxuICAgICAqIEB0eXBlIHtOdW1iZXJ8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmZpbmRTY3JvbGxhYmxlRWxlbWVudEZyYW1lID0gbnVsbDtcblxuICAgIHRoaXNbb25EcmFnU3RhcnRdID0gdGhpc1tvbkRyYWdTdGFydF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRHJhZ01vdmVdID0gdGhpc1tvbkRyYWdNb3ZlXS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnU3RvcF0gPSB0aGlzW29uRHJhZ1N0b3BdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tzY3JvbGxdID0gdGhpc1tzY3JvbGxdLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgcGx1Z2lucyBldmVudCBsaXN0ZW5lcnNcbiAgICovXG4gIGF0dGFjaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS5vbignZHJhZzpzdGFydCcsIHRoaXNbb25EcmFnU3RhcnRdKS5vbignZHJhZzptb3ZlJywgdGhpc1tvbkRyYWdNb3ZlXSkub24oJ2RyYWc6c3RvcCcsIHRoaXNbb25EcmFnU3RvcF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaGVzIHBsdWdpbnMgZXZlbnQgbGlzdGVuZXJzXG4gICAqL1xuICBkZXRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub2ZmKCdkcmFnOnN0YXJ0JywgdGhpc1tvbkRyYWdTdGFydF0pLm9mZignZHJhZzptb3ZlJywgdGhpc1tvbkRyYWdNb3ZlXSkub2ZmKCdkcmFnOnN0b3AnLCB0aGlzW29uRHJhZ1N0b3BdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIG9wdGlvbnMgcGFzc2VkIHRocm91Z2ggZHJhZ2dhYmxlXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGdldE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlLm9wdGlvbnMuc2Nyb2xsYWJsZSB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNsb3Nlc3Qgc2Nyb2xsYWJsZSBlbGVtZW50cyBieSBlbGVtZW50XG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIGdldFNjcm9sbGFibGVFbGVtZW50KHRhcmdldCkge1xuICAgIGlmICh0aGlzLmhhc0RlZmluZWRTY3JvbGxhYmxlRWxlbWVudHMoKSkge1xuICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY2xvc2VzdCkodGFyZ2V0LCB0aGlzLm9wdGlvbnMuc2Nyb2xsYWJsZUVsZW1lbnRzKSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjbG9zZXN0U2Nyb2xsYWJsZUVsZW1lbnQodGFyZ2V0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGF0IGxlYXN0IG9uZSBzY3JvbGxhYmxlIGVsZW1lbnQgaGF2ZSBiZWVuIGRlZmluZWQgdmlhIG9wdGlvbnNcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBoYXNEZWZpbmVkU2Nyb2xsYWJsZUVsZW1lbnRzKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMub3B0aW9ucy5zY3JvbGxhYmxlRWxlbWVudHMubGVuZ3RoICE9PSAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnIHN0YXJ0IGhhbmRsZXIuIEZpbmRzIGNsb3Nlc3Qgc2Nyb2xsYWJsZSBwYXJlbnQgaW4gc2VwYXJhdGUgZnJhbWVcbiAgICogQHBhcmFtIHtEcmFnU3RhcnRFdmVudH0gZHJhZ0V2ZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBbb25EcmFnU3RhcnRdKGRyYWdFdmVudCkge1xuICAgIHRoaXMuZmluZFNjcm9sbGFibGVFbGVtZW50RnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5zY3JvbGxhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2Nyb2xsYWJsZUVsZW1lbnQoZHJhZ0V2ZW50LnNvdXJjZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRHJhZyBtb3ZlIGhhbmRsZXIuIFJlbWVtYmVycyBtb3VzZSBwb3NpdGlvbiBhbmQgaW5pdGlhdGVzIHNjcm9sbGluZ1xuICAgKiBAcGFyYW0ge0RyYWdNb3ZlRXZlbnR9IGRyYWdFdmVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgW29uRHJhZ01vdmVdKGRyYWdFdmVudCkge1xuICAgIHRoaXMuZmluZFNjcm9sbGFibGVFbGVtZW50RnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5zY3JvbGxhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2Nyb2xsYWJsZUVsZW1lbnQoZHJhZ0V2ZW50LnNlbnNvckV2ZW50LnRhcmdldCk7XG4gICAgfSk7XG5cbiAgICBpZiAoIXRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzZW5zb3JFdmVudCA9IGRyYWdFdmVudC5zZW5zb3JFdmVudDtcbiAgICBjb25zdCBzY3JvbGxPZmZzZXQgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHtcbiAgICAgIHNjcm9sbE9mZnNldC55ID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMDtcbiAgICAgIHNjcm9sbE9mZnNldC54ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCB8fCAwO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudE1vdXNlUG9zaXRpb24gPSB7XG4gICAgICBjbGllbnRYOiBzZW5zb3JFdmVudC5jbGllbnRYIC0gc2Nyb2xsT2Zmc2V0LngsXG4gICAgICBjbGllbnRZOiBzZW5zb3JFdmVudC5jbGllbnRZIC0gc2Nyb2xsT2Zmc2V0LnlcbiAgICB9O1xuXG4gICAgdGhpcy5zY3JvbGxBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzW3Njcm9sbF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgc3RvcCBoYW5kbGVyLiBDYW5jZWxzIHNjcm9sbCBhbmltYXRpb25zIGFuZCByZXNldHMgc3RhdGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIFtvbkRyYWdTdG9wXSgpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnNjcm9sbEFuaW1hdGlvbkZyYW1lKTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmZpbmRTY3JvbGxhYmxlRWxlbWVudEZyYW1lKTtcblxuICAgIHRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuc2Nyb2xsQW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuICAgIHRoaXMuZmluZFNjcm9sbGFibGVFbGVtZW50RnJhbWUgPSBudWxsO1xuICAgIHRoaXMuY3VycmVudE1vdXNlUG9zaXRpb24gPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbCBmdW5jdGlvbiB0aGF0IGRvZXMgdGhlIGhlYXZ5bGlmdGluZ1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgW3Njcm9sbF0oKSB7XG4gICAgaWYgKCF0aGlzLnNjcm9sbGFibGVFbGVtZW50IHx8ICF0aGlzLmN1cnJlbnRNb3VzZVBvc2l0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5zY3JvbGxBbmltYXRpb25GcmFtZSk7XG5cbiAgICBjb25zdCB7IHNwZWVkLCBzZW5zaXRpdml0eSB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgY29uc3QgcmVjdCA9IHRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYm90dG9tQ3V0T2ZmID0gcmVjdC5ib3R0b20gPiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgdG9wQ3V0T2ZmID0gcmVjdC50b3AgPCAwO1xuICAgIGNvbnN0IGN1dE9mZiA9IHRvcEN1dE9mZiB8fCBib3R0b21DdXRPZmY7XG5cbiAgICBjb25zdCBkb2N1bWVudFNjcm9sbGluZ0VsZW1lbnQgPSBnZXREb2N1bWVudFNjcm9sbGluZ0VsZW1lbnQoKTtcbiAgICBjb25zdCBzY3JvbGxhYmxlRWxlbWVudCA9IHRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQ7XG4gICAgY29uc3QgY2xpZW50WCA9IHRoaXMuY3VycmVudE1vdXNlUG9zaXRpb24uY2xpZW50WDtcbiAgICBjb25zdCBjbGllbnRZID0gdGhpcy5jdXJyZW50TW91c2VQb3NpdGlvbi5jbGllbnRZO1xuXG4gICAgaWYgKHNjcm9sbGFibGVFbGVtZW50ICE9PSBkb2N1bWVudC5ib2R5ICYmIHNjcm9sbGFibGVFbGVtZW50ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgIWN1dE9mZikge1xuICAgICAgY29uc3QgeyBvZmZzZXRIZWlnaHQsIG9mZnNldFdpZHRoIH0gPSBzY3JvbGxhYmxlRWxlbWVudDtcblxuICAgICAgaWYgKHJlY3QudG9wICsgb2Zmc2V0SGVpZ2h0IC0gY2xpZW50WSA8IHNlbnNpdGl2aXR5KSB7XG4gICAgICAgIHNjcm9sbGFibGVFbGVtZW50LnNjcm9sbFRvcCArPSBzcGVlZDtcbiAgICAgIH0gZWxzZSBpZiAoY2xpZW50WSAtIHJlY3QudG9wIDwgc2Vuc2l0aXZpdHkpIHtcbiAgICAgICAgc2Nyb2xsYWJsZUVsZW1lbnQuc2Nyb2xsVG9wIC09IHNwZWVkO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjdC5sZWZ0ICsgb2Zmc2V0V2lkdGggLSBjbGllbnRYIDwgc2Vuc2l0aXZpdHkpIHtcbiAgICAgICAgc2Nyb2xsYWJsZUVsZW1lbnQuc2Nyb2xsTGVmdCArPSBzcGVlZDtcbiAgICAgIH0gZWxzZSBpZiAoY2xpZW50WCAtIHJlY3QubGVmdCA8IHNlbnNpdGl2aXR5KSB7XG4gICAgICAgIHNjcm9sbGFibGVFbGVtZW50LnNjcm9sbExlZnQgLT0gc3BlZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGggfSA9IHdpbmRvdztcblxuICAgICAgaWYgKGNsaWVudFkgPCBzZW5zaXRpdml0eSkge1xuICAgICAgICBkb2N1bWVudFNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wIC09IHNwZWVkO1xuICAgICAgfSBlbHNlIGlmIChpbm5lckhlaWdodCAtIGNsaWVudFkgPCBzZW5zaXRpdml0eSkge1xuICAgICAgICBkb2N1bWVudFNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wICs9IHNwZWVkO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2xpZW50WCA8IHNlbnNpdGl2aXR5KSB7XG4gICAgICAgIGRvY3VtZW50U2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxMZWZ0IC09IHNwZWVkO1xuICAgICAgfSBlbHNlIGlmIChpbm5lcldpZHRoIC0gY2xpZW50WCA8IHNlbnNpdGl2aXR5KSB7XG4gICAgICAgIGRvY3VtZW50U2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxMZWZ0ICs9IHNwZWVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsQW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpc1tzY3JvbGxdKTtcbiAgfVxufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBTY3JvbGxhYmxlOyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIGVsZW1lbnQgaGFzIG92ZXJmbG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5mdW5jdGlvbiBoYXNPdmVyZmxvdyhlbGVtZW50KSB7XG4gIGNvbnN0IG92ZXJmbG93UmVnZXggPSAvKGF1dG98c2Nyb2xsKS87XG4gIGNvbnN0IGNvbXB1dGVkU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKTtcblxuICBjb25zdCBvdmVyZmxvdyA9IGNvbXB1dGVkU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ292ZXJmbG93JykgKyBjb21wdXRlZFN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdvdmVyZmxvdy15JykgKyBjb21wdXRlZFN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdvdmVyZmxvdy14Jyk7XG5cbiAgcmV0dXJuIG92ZXJmbG93UmVnZXgudGVzdChvdmVyZmxvdyk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgZWxlbWVudCBpcyBzdGF0aWNhbGx5IHBvc2l0aW9uZWRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc1N0YXRpY2FsbHlQb3NpdGlvbmVkKGVsZW1lbnQpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJyk7XG4gIHJldHVybiBwb3NpdGlvbiA9PT0gJ3N0YXRpYyc7XG59XG5cbi8qKlxuICogRmluZHMgY2xvc2VzdCBzY3JvbGxhYmxlIGVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2xvc2VzdFNjcm9sbGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGdldERvY3VtZW50U2Nyb2xsaW5nRWxlbWVudCgpO1xuICB9XG5cbiAgY29uc3QgcG9zaXRpb24gPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IGV4Y2x1ZGVTdGF0aWNQYXJlbnRzID0gcG9zaXRpb24gPT09ICdhYnNvbHV0ZSc7XG5cbiAgY29uc3Qgc2Nyb2xsYWJsZUVsZW1lbnQgPSAoMCwgX3V0aWxzLmNsb3Nlc3QpKGVsZW1lbnQsIHBhcmVudCA9PiB7XG4gICAgaWYgKGV4Y2x1ZGVTdGF0aWNQYXJlbnRzICYmIGlzU3RhdGljYWxseVBvc2l0aW9uZWQocGFyZW50KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzT3ZlcmZsb3cocGFyZW50KTtcbiAgfSk7XG5cbiAgaWYgKHBvc2l0aW9uID09PSAnZml4ZWQnIHx8ICFzY3JvbGxhYmxlRWxlbWVudCkge1xuICAgIHJldHVybiBnZXREb2N1bWVudFNjcm9sbGluZ0VsZW1lbnQoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc2Nyb2xsYWJsZUVsZW1lbnQ7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGVsZW1lbnQgdGhhdCBzY3JvbGxzIGRvY3VtZW50XG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldERvY3VtZW50U2Nyb2xsaW5nRWxlbWVudCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xufVxuXG4vKioqLyB9KSxcbi8qIDUzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHRPcHRpb25zID0gdW5kZWZpbmVkO1xuXG52YXIgX1Njcm9sbGFibGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUyKTtcblxudmFyIF9TY3JvbGxhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Njcm9sbGFibGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfU2Nyb2xsYWJsZTIuZGVmYXVsdDtcbmV4cG9ydHMuZGVmYXVsdE9wdGlvbnMgPSBfU2Nyb2xsYWJsZS5kZWZhdWx0T3B0aW9ucztcblxuLyoqKi8gfSksXG4vKiA1NCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5NaXJyb3JEZXN0cm95RXZlbnQgPSBleHBvcnRzLk1pcnJvck1vdmVFdmVudCA9IGV4cG9ydHMuTWlycm9yQXR0YWNoZWRFdmVudCA9IGV4cG9ydHMuTWlycm9yQ3JlYXRlZEV2ZW50ID0gZXhwb3J0cy5NaXJyb3JDcmVhdGVFdmVudCA9IGV4cG9ydHMuTWlycm9yRXZlbnQgPSB1bmRlZmluZWQ7XG5cbnZhciBfQWJzdHJhY3RFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfQWJzdHJhY3RFdmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BYnN0cmFjdEV2ZW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBCYXNlIG1pcnJvciBldmVudFxuICogQGNsYXNzIE1pcnJvckV2ZW50XG4gKiBAbW9kdWxlIE1pcnJvckV2ZW50XG4gKiBAZXh0ZW5kcyBBYnN0cmFjdEV2ZW50XG4gKi9cbmNsYXNzIE1pcnJvckV2ZW50IGV4dGVuZHMgX0Fic3RyYWN0RXZlbnQyLmRlZmF1bHQge1xuICAvKipcbiAgICogRHJhZ2dhYmxlcyBzb3VyY2UgZWxlbWVudFxuICAgKiBAcHJvcGVydHkgc291cmNlXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgc291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuc291cmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWdnYWJsZXMgb3JpZ2luYWwgc291cmNlIGVsZW1lbnRcbiAgICogQHByb3BlcnR5IG9yaWdpbmFsU291cmNlXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgb3JpZ2luYWxTb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vcmlnaW5hbFNvdXJjZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnZ2FibGVzIHNvdXJjZSBjb250YWluZXIgZWxlbWVudFxuICAgKiBAcHJvcGVydHkgc291cmNlQ29udGFpbmVyXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgc291cmNlQ29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuc291cmNlQ29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbnNvciBldmVudFxuICAgKiBAcHJvcGVydHkgc2Vuc29yRXZlbnRcbiAgICogQHR5cGUge1NlbnNvckV2ZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBzZW5zb3JFdmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnNlbnNvckV2ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWcgZXZlbnRcbiAgICogQHByb3BlcnR5IGRyYWdFdmVudFxuICAgKiBAdHlwZSB7RHJhZ0V2ZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBkcmFnRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5kcmFnRXZlbnQ7XG4gIH1cblxuICAvKipcbiAgICogT3JpZ2luYWwgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgc2Vuc29yIGV2ZW50XG4gICAqIEBwcm9wZXJ0eSBvcmlnaW5hbEV2ZW50XG4gICAqIEB0eXBlIHtFdmVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgb3JpZ2luYWxFdmVudCgpIHtcbiAgICBpZiAodGhpcy5zZW5zb3JFdmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2Vuc29yRXZlbnQub3JpZ2luYWxFdmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnRzLk1pcnJvckV2ZW50ID0gTWlycm9yRXZlbnQ7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBNaXJyb3IgY3JlYXRlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzcyBNaXJyb3JDcmVhdGVFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIE1pcnJvckNyZWF0ZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIE1pcnJvckV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5jbGFzcyBNaXJyb3JDcmVhdGVFdmVudCBleHRlbmRzIE1pcnJvckV2ZW50IHt9XG5cbmV4cG9ydHMuTWlycm9yQ3JlYXRlRXZlbnQgPSBNaXJyb3JDcmVhdGVFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIE1pcnJvciBjcmVhdGVkIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzcyBNaXJyb3JDcmVhdGVkRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBNaXJyb3JDcmVhdGVkRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGV4dGVuZHMgTWlycm9yRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbk1pcnJvckNyZWF0ZUV2ZW50LnR5cGUgPSAnbWlycm9yOmNyZWF0ZSc7XG5jbGFzcyBNaXJyb3JDcmVhdGVkRXZlbnQgZXh0ZW5kcyBNaXJyb3JFdmVudCB7XG5cbiAgLyoqXG4gICAqIERyYWdnYWJsZXMgbWlycm9yIGVsZW1lbnRcbiAgICogQHByb3BlcnR5IG1pcnJvclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IG1pcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm1pcnJvcjtcbiAgfVxufVxuXG5leHBvcnRzLk1pcnJvckNyZWF0ZWRFdmVudCA9IE1pcnJvckNyZWF0ZWRFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogTWlycm9yIGF0dGFjaGVkIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIE1pcnJvckF0dGFjaGVkRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIE1pcnJvckF0dGFjaGVkRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXh0ZW5kcyBNaXJyb3JFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5NaXJyb3JDcmVhdGVkRXZlbnQudHlwZSA9ICdtaXJyb3I6Y3JlYXRlZCc7XG5jbGFzcyBNaXJyb3JBdHRhY2hlZEV2ZW50IGV4dGVuZHMgTWlycm9yRXZlbnQge1xuXG4gIC8qKlxuICAgKiBEcmFnZ2FibGVzIG1pcnJvciBlbGVtZW50XG4gICAqIEBwcm9wZXJ0eSBtaXJyb3JcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBtaXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5taXJyb3I7XG4gIH1cbn1cblxuZXhwb3J0cy5NaXJyb3JBdHRhY2hlZEV2ZW50ID0gTWlycm9yQXR0YWNoZWRFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBNaXJyb3IgbW92ZSBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIE1pcnJvck1vdmVFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBNaXJyb3JNb3ZlRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIE1pcnJvckV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuTWlycm9yQXR0YWNoZWRFdmVudC50eXBlID0gJ21pcnJvcjphdHRhY2hlZCc7XG5jbGFzcyBNaXJyb3JNb3ZlRXZlbnQgZXh0ZW5kcyBNaXJyb3JFdmVudCB7XG5cbiAgLyoqXG4gICAqIERyYWdnYWJsZXMgbWlycm9yIGVsZW1lbnRcbiAgICogQHByb3BlcnR5IG1pcnJvclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IG1pcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm1pcnJvcjtcbiAgfVxufVxuXG5leHBvcnRzLk1pcnJvck1vdmVFdmVudCA9IE1pcnJvck1vdmVFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogTWlycm9yIGRlc3Ryb3kgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgTWlycm9yRGVzdHJveUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBNaXJyb3JEZXN0cm95RXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXh0ZW5kcyBNaXJyb3JFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5NaXJyb3JNb3ZlRXZlbnQudHlwZSA9ICdtaXJyb3I6bW92ZSc7XG5NaXJyb3JNb3ZlRXZlbnQuY2FuY2VsYWJsZSA9IHRydWU7XG5jbGFzcyBNaXJyb3JEZXN0cm95RXZlbnQgZXh0ZW5kcyBNaXJyb3JFdmVudCB7XG5cbiAgLyoqXG4gICAqIERyYWdnYWJsZXMgbWlycm9yIGVsZW1lbnRcbiAgICogQHByb3BlcnR5IG1pcnJvclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IG1pcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm1pcnJvcjtcbiAgfVxufVxuZXhwb3J0cy5NaXJyb3JEZXN0cm95RXZlbnQgPSBNaXJyb3JEZXN0cm95RXZlbnQ7XG5NaXJyb3JEZXN0cm95RXZlbnQudHlwZSA9ICdtaXJyb3I6ZGVzdHJveSc7XG5NaXJyb3JEZXN0cm95RXZlbnQuY2FuY2VsYWJsZSA9IHRydWU7XG5cbi8qKiovIH0pLFxuLyogNTUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9NaXJyb3JFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oNTQpO1xuXG5PYmplY3Qua2V5cyhfTWlycm9yRXZlbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9NaXJyb3JFdmVudFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxuLyoqKi8gfSksXG4vKiA1NiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IGV4cG9ydHMuZ2V0QXBwZW5kYWJsZUNvbnRhaW5lciA9IGV4cG9ydHMub25TY3JvbGwgPSBleHBvcnRzLm9uTWlycm9yTW92ZSA9IGV4cG9ydHMub25NaXJyb3JDcmVhdGVkID0gZXhwb3J0cy5vbkRyYWdTdG9wID0gZXhwb3J0cy5vbkRyYWdNb3ZlID0gZXhwb3J0cy5vbkRyYWdTdGFydCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9BYnN0cmFjdFBsdWdpbiA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfQWJzdHJhY3RQbHVnaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWJzdHJhY3RQbHVnaW4pO1xuXG52YXIgX01pcnJvckV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1NSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuY29uc3Qgb25EcmFnU3RhcnQgPSBleHBvcnRzLm9uRHJhZ1N0YXJ0ID0gU3ltYm9sKCdvbkRyYWdTdGFydCcpO1xuY29uc3Qgb25EcmFnTW92ZSA9IGV4cG9ydHMub25EcmFnTW92ZSA9IFN5bWJvbCgnb25EcmFnTW92ZScpO1xuY29uc3Qgb25EcmFnU3RvcCA9IGV4cG9ydHMub25EcmFnU3RvcCA9IFN5bWJvbCgnb25EcmFnU3RvcCcpO1xuY29uc3Qgb25NaXJyb3JDcmVhdGVkID0gZXhwb3J0cy5vbk1pcnJvckNyZWF0ZWQgPSBTeW1ib2woJ29uTWlycm9yQ3JlYXRlZCcpO1xuY29uc3Qgb25NaXJyb3JNb3ZlID0gZXhwb3J0cy5vbk1pcnJvck1vdmUgPSBTeW1ib2woJ29uTWlycm9yTW92ZScpO1xuY29uc3Qgb25TY3JvbGwgPSBleHBvcnRzLm9uU2Nyb2xsID0gU3ltYm9sKCdvblNjcm9sbCcpO1xuY29uc3QgZ2V0QXBwZW5kYWJsZUNvbnRhaW5lciA9IGV4cG9ydHMuZ2V0QXBwZW5kYWJsZUNvbnRhaW5lciA9IFN5bWJvbCgnZ2V0QXBwZW5kYWJsZUNvbnRhaW5lcicpO1xuXG4vKipcbiAqIE1pcnJvciBkZWZhdWx0IG9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkZWZhdWx0T3B0aW9uc1xuICogQHByb3BlcnR5IHtCb29sZWFufSBkZWZhdWx0T3B0aW9ucy5jb25zdHJhaW5EaW1lbnNpb25zXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGRlZmF1bHRPcHRpb25zLnhBeGlzXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGRlZmF1bHRPcHRpb25zLnlBeGlzXG4gKiBAcHJvcGVydHkge251bGx9IGRlZmF1bHRPcHRpb25zLmN1cnNvck9mZnNldFhcbiAqIEBwcm9wZXJ0eSB7bnVsbH0gZGVmYXVsdE9wdGlvbnMuY3Vyc29yT2Zmc2V0WVxuICogQHR5cGUge09iamVjdH1cbiAqL1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBleHBvcnRzLmRlZmF1bHRPcHRpb25zID0ge1xuICBjb25zdHJhaW5EaW1lbnNpb25zOiBmYWxzZSxcbiAgeEF4aXM6IHRydWUsXG4gIHlBeGlzOiB0cnVlLFxuICBjdXJzb3JPZmZzZXRYOiBudWxsLFxuICBjdXJzb3JPZmZzZXRZOiBudWxsXG59O1xuXG4vKipcbiAqIE1pcnJvciBwbHVnaW4gd2hpY2ggY29udHJvbHMgdGhlIG1pcnJvciBwb3NpdGlvbmluZyB3aGlsZSBkcmFnZ2luZ1xuICogQGNsYXNzIE1pcnJvclxuICogQG1vZHVsZSBNaXJyb3JcbiAqIEBleHRlbmRzIEFic3RyYWN0UGx1Z2luXG4gKi9cbmNsYXNzIE1pcnJvciBleHRlbmRzIF9BYnN0cmFjdFBsdWdpbjIuZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBNaXJyb3IgY29uc3RydWN0b3IuXG4gICAqIEBjb25zdHJ1Y3RzIE1pcnJvclxuICAgKiBAcGFyYW0ge0RyYWdnYWJsZX0gZHJhZ2dhYmxlIC0gRHJhZ2dhYmxlIGluc3RhbmNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGUpIHtcbiAgICBzdXBlcihkcmFnZ2FibGUpO1xuXG4gICAgLyoqXG4gICAgICogTWlycm9yIG9wdGlvbnNcbiAgICAgKiBAcHJvcGVydHkge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gb3B0aW9ucy5jb25zdHJhaW5EaW1lbnNpb25zXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSBvcHRpb25zLnhBeGlzXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSBvcHRpb25zLnlBeGlzXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ8bnVsbH0gb3B0aW9ucy5jdXJzb3JPZmZzZXRYXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ8bnVsbH0gb3B0aW9ucy5jdXJzb3JPZmZzZXRZXG4gICAgICogQHByb3BlcnR5IHtTdHJpbmd8SFRNTEVsZW1lbnR8RnVuY3Rpb259IG9wdGlvbnMuYXBwZW5kVG9cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucywgdGhpcy5nZXRPcHRpb25zKCkpO1xuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIG9mZnNldCBmb3IgdG91Y2ggZGV2aWNlcyBiZWNhdXNlIHRoZSBtaXJyb3IgaXMgcG9zaXRpb25lZCBmaXhlZFxuICAgICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBzY3JvbGxPZmZzZXRcbiAgICAgKiBAcHJvcGVydHkge051bWJlcn0gc2Nyb2xsT2Zmc2V0LnhcbiAgICAgKiBAcHJvcGVydHkge051bWJlcn0gc2Nyb2xsT2Zmc2V0LnlcbiAgICAgKi9cbiAgICB0aGlzLnNjcm9sbE9mZnNldCA9IHsgeDogMCwgeTogMCB9O1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBzY3JvbGwgb2Zmc2V0IGZvciB0b3VjaCBkZXZpY2VzIGJlY2F1c2UgdGhlIG1pcnJvciBpcyBwb3NpdGlvbmVkIGZpeGVkXG4gICAgICogQHByb3BlcnR5IHtPYmplY3R9IHNjcm9sbE9mZnNldFxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBzY3JvbGxPZmZzZXQueFxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBzY3JvbGxPZmZzZXQueVxuICAgICAqL1xuICAgIHRoaXMuaW5pdGlhbFNjcm9sbE9mZnNldCA9IHtcbiAgICAgIHg6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgeTogd2luZG93LnNjcm9sbFlcbiAgICB9O1xuXG4gICAgdGhpc1tvbkRyYWdTdGFydF0gPSB0aGlzW29uRHJhZ1N0YXJ0XS5iaW5kKHRoaXMpO1xuICAgIHRoaXNbb25EcmFnTW92ZV0gPSB0aGlzW29uRHJhZ01vdmVdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRyYWdTdG9wXSA9IHRoaXNbb25EcmFnU3RvcF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uTWlycm9yQ3JlYXRlZF0gPSB0aGlzW29uTWlycm9yQ3JlYXRlZF0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uTWlycm9yTW92ZV0gPSB0aGlzW29uTWlycm9yTW92ZV0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uU2Nyb2xsXSA9IHRoaXNbb25TY3JvbGxdLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgcGx1Z2lucyBldmVudCBsaXN0ZW5lcnNcbiAgICovXG4gIGF0dGFjaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS5vbignZHJhZzpzdGFydCcsIHRoaXNbb25EcmFnU3RhcnRdKS5vbignZHJhZzptb3ZlJywgdGhpc1tvbkRyYWdNb3ZlXSkub24oJ2RyYWc6c3RvcCcsIHRoaXNbb25EcmFnU3RvcF0pLm9uKCdtaXJyb3I6Y3JlYXRlZCcsIHRoaXNbb25NaXJyb3JDcmVhdGVkXSkub24oJ21pcnJvcjptb3ZlJywgdGhpc1tvbk1pcnJvck1vdmVdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2hlcyBwbHVnaW5zIGV2ZW50IGxpc3RlbmVyc1xuICAgKi9cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9mZignZHJhZzpzdGFydCcsIHRoaXNbb25EcmFnU3RhcnRdKS5vZmYoJ2RyYWc6bW92ZScsIHRoaXNbb25EcmFnTW92ZV0pLm9mZignZHJhZzpzdG9wJywgdGhpc1tvbkRyYWdTdG9wXSkub2ZmKCdtaXJyb3I6Y3JlYXRlZCcsIHRoaXNbb25NaXJyb3JDcmVhdGVkXSkub2ZmKCdtaXJyb3I6bW92ZScsIHRoaXNbb25NaXJyb3JNb3ZlXSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBvcHRpb25zIHBhc3NlZCB0aHJvdWdoIGRyYWdnYWJsZVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBnZXRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZS5vcHRpb25zLm1pcnJvciB8fCB7fTtcbiAgfVxuXG4gIFtvbkRyYWdTdGFydF0oZHJhZ0V2ZW50KSB7XG4gICAgaWYgKGRyYWdFdmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpc1tvblNjcm9sbF0sIHRydWUpO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdGlhbFNjcm9sbE9mZnNldCA9IHtcbiAgICAgIHg6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgeTogd2luZG93LnNjcm9sbFlcbiAgICB9O1xuXG4gICAgY29uc3QgeyBzb3VyY2UsIG9yaWdpbmFsU291cmNlLCBzb3VyY2VDb250YWluZXIsIHNlbnNvckV2ZW50IH0gPSBkcmFnRXZlbnQ7XG5cbiAgICBjb25zdCBtaXJyb3JDcmVhdGVFdmVudCA9IG5ldyBfTWlycm9yRXZlbnQuTWlycm9yQ3JlYXRlRXZlbnQoe1xuICAgICAgc291cmNlLFxuICAgICAgb3JpZ2luYWxTb3VyY2UsXG4gICAgICBzb3VyY2VDb250YWluZXIsXG4gICAgICBzZW5zb3JFdmVudCxcbiAgICAgIGRyYWdFdmVudFxuICAgIH0pO1xuXG4gICAgdGhpcy5kcmFnZ2FibGUudHJpZ2dlcihtaXJyb3JDcmVhdGVFdmVudCk7XG5cbiAgICBpZiAoaXNOYXRpdmVEcmFnRXZlbnQoc2Vuc29yRXZlbnQpIHx8IG1pcnJvckNyZWF0ZUV2ZW50LmNhbmNlbGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhcHBlbmRhYmxlQ29udGFpbmVyID0gdGhpc1tnZXRBcHBlbmRhYmxlQ29udGFpbmVyXShzb3VyY2UpIHx8IHNvdXJjZUNvbnRhaW5lcjtcbiAgICB0aGlzLm1pcnJvciA9IHNvdXJjZS5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICBjb25zdCBtaXJyb3JDcmVhdGVkRXZlbnQgPSBuZXcgX01pcnJvckV2ZW50Lk1pcnJvckNyZWF0ZWRFdmVudCh7XG4gICAgICBzb3VyY2UsXG4gICAgICBvcmlnaW5hbFNvdXJjZSxcbiAgICAgIHNvdXJjZUNvbnRhaW5lcixcbiAgICAgIHNlbnNvckV2ZW50LFxuICAgICAgZHJhZ0V2ZW50LFxuICAgICAgbWlycm9yOiB0aGlzLm1pcnJvclxuICAgIH0pO1xuXG4gICAgY29uc3QgbWlycm9yQXR0YWNoZWRFdmVudCA9IG5ldyBfTWlycm9yRXZlbnQuTWlycm9yQXR0YWNoZWRFdmVudCh7XG4gICAgICBzb3VyY2UsXG4gICAgICBvcmlnaW5hbFNvdXJjZSxcbiAgICAgIHNvdXJjZUNvbnRhaW5lcixcbiAgICAgIHNlbnNvckV2ZW50LFxuICAgICAgZHJhZ0V2ZW50LFxuICAgICAgbWlycm9yOiB0aGlzLm1pcnJvclxuICAgIH0pO1xuXG4gICAgdGhpcy5kcmFnZ2FibGUudHJpZ2dlcihtaXJyb3JDcmVhdGVkRXZlbnQpO1xuICAgIGFwcGVuZGFibGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5taXJyb3IpO1xuICAgIHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXIobWlycm9yQXR0YWNoZWRFdmVudCk7XG4gIH1cblxuICBbb25EcmFnTW92ZV0oZHJhZ0V2ZW50KSB7XG4gICAgaWYgKCF0aGlzLm1pcnJvciB8fCBkcmFnRXZlbnQuY2FuY2VsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgc291cmNlLCBvcmlnaW5hbFNvdXJjZSwgc291cmNlQ29udGFpbmVyLCBzZW5zb3JFdmVudCB9ID0gZHJhZ0V2ZW50O1xuXG4gICAgY29uc3QgbWlycm9yTW92ZUV2ZW50ID0gbmV3IF9NaXJyb3JFdmVudC5NaXJyb3JNb3ZlRXZlbnQoe1xuICAgICAgc291cmNlLFxuICAgICAgb3JpZ2luYWxTb3VyY2UsXG4gICAgICBzb3VyY2VDb250YWluZXIsXG4gICAgICBzZW5zb3JFdmVudCxcbiAgICAgIGRyYWdFdmVudCxcbiAgICAgIG1pcnJvcjogdGhpcy5taXJyb3JcbiAgICB9KTtcblxuICAgIHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXIobWlycm9yTW92ZUV2ZW50KTtcbiAgfVxuXG4gIFtvbkRyYWdTdG9wXShkcmFnRXZlbnQpIHtcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzW29uU2Nyb2xsXSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0aWFsU2Nyb2xsT2Zmc2V0ID0geyB4OiAwLCB5OiAwIH07XG4gICAgdGhpcy5zY3JvbGxPZmZzZXQgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgIGlmICghdGhpcy5taXJyb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHNvdXJjZSwgc291cmNlQ29udGFpbmVyLCBzZW5zb3JFdmVudCB9ID0gZHJhZ0V2ZW50O1xuXG4gICAgY29uc3QgbWlycm9yRGVzdHJveUV2ZW50ID0gbmV3IF9NaXJyb3JFdmVudC5NaXJyb3JEZXN0cm95RXZlbnQoe1xuICAgICAgc291cmNlLFxuICAgICAgbWlycm9yOiB0aGlzLm1pcnJvcixcbiAgICAgIHNvdXJjZUNvbnRhaW5lcixcbiAgICAgIHNlbnNvckV2ZW50LFxuICAgICAgZHJhZ0V2ZW50XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyYWdnYWJsZS50cmlnZ2VyKG1pcnJvckRlc3Ryb3lFdmVudCk7XG5cbiAgICBpZiAoIW1pcnJvckRlc3Ryb3lFdmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICB0aGlzLm1pcnJvci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubWlycm9yKTtcbiAgICB9XG4gIH1cblxuICBbb25TY3JvbGxdKCkge1xuICAgIHRoaXMuc2Nyb2xsT2Zmc2V0ID0ge1xuICAgICAgeDogd2luZG93LnNjcm9sbFggLSB0aGlzLmluaXRpYWxTY3JvbGxPZmZzZXQueCxcbiAgICAgIHk6IHdpbmRvdy5zY3JvbGxZIC0gdGhpcy5pbml0aWFsU2Nyb2xsT2Zmc2V0LnlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE1pcnJvciBjcmVhdGVkIGhhbmRsZXJcbiAgICogQHBhcmFtIHtNaXJyb3JDcmVhdGVkRXZlbnR9IG1pcnJvckV2ZW50XG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBbb25NaXJyb3JDcmVhdGVkXSh7IG1pcnJvciwgc291cmNlLCBzZW5zb3JFdmVudCB9KSB7XG4gICAgY29uc3QgbWlycm9yQ2xhc3MgPSB0aGlzLmRyYWdnYWJsZS5nZXRDbGFzc05hbWVGb3IoJ21pcnJvcicpO1xuXG4gICAgY29uc3Qgc2V0U3RhdGUgPSAoX3JlZikgPT4ge1xuICAgICAgbGV0IHsgbWlycm9yT2Zmc2V0LCBpbml0aWFsWCwgaW5pdGlhbFkgfSA9IF9yZWYsXG4gICAgICAgICAgYXJncyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ21pcnJvck9mZnNldCcsICdpbml0aWFsWCcsICdpbml0aWFsWSddKTtcblxuICAgICAgdGhpcy5taXJyb3JPZmZzZXQgPSBtaXJyb3JPZmZzZXQ7XG4gICAgICB0aGlzLmluaXRpYWxYID0gaW5pdGlhbFg7XG4gICAgICB0aGlzLmluaXRpYWxZID0gaW5pdGlhbFk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoeyBtaXJyb3JPZmZzZXQsIGluaXRpYWxYLCBpbml0aWFsWSB9LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgICAgbWlycm9yLFxuICAgICAgc291cmNlLFxuICAgICAgc2Vuc29yRXZlbnQsXG4gICAgICBtaXJyb3JDbGFzcyxcbiAgICAgIHNjcm9sbE9mZnNldDogdGhpcy5zY3JvbGxPZmZzZXQsXG4gICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnNcbiAgICB9O1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpbml0aWFsU3RhdGUpXG4gICAgLy8gRml4IHJlZmxvdyBoZXJlXG4gICAgLnRoZW4oY29tcHV0ZU1pcnJvckRpbWVuc2lvbnMpLnRoZW4oY2FsY3VsYXRlTWlycm9yT2Zmc2V0KS50aGVuKHJlc2V0TWlycm9yKS50aGVuKGFkZE1pcnJvckNsYXNzZXMpLnRoZW4ocG9zaXRpb25NaXJyb3IoeyBpbml0aWFsOiB0cnVlIH0pKS50aGVuKHJlbW92ZU1pcnJvcklEKS50aGVuKHNldFN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNaXJyb3IgbW92ZSBoYW5kbGVyXG4gICAqIEBwYXJhbSB7TWlycm9yTW92ZUV2ZW50fSBtaXJyb3JFdmVudFxuICAgKiBAcmV0dXJuIHtQcm9taXNlfG51bGx9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBbb25NaXJyb3JNb3ZlXShtaXJyb3JFdmVudCkge1xuICAgIGlmIChtaXJyb3JFdmVudC5jYW5jZWxlZCgpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgICBtaXJyb3I6IG1pcnJvckV2ZW50Lm1pcnJvcixcbiAgICAgIHNlbnNvckV2ZW50OiBtaXJyb3JFdmVudC5zZW5zb3JFdmVudCxcbiAgICAgIG1pcnJvck9mZnNldDogdGhpcy5taXJyb3JPZmZzZXQsXG4gICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICBpbml0aWFsWDogdGhpcy5pbml0aWFsWCxcbiAgICAgIGluaXRpYWxZOiB0aGlzLmluaXRpYWxZLFxuICAgICAgc2Nyb2xsT2Zmc2V0OiB0aGlzLnNjcm9sbE9mZnNldFxuICAgIH07XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGluaXRpYWxTdGF0ZSkudGhlbihwb3NpdGlvbk1pcnJvcih7IHJhZjogdHJ1ZSB9KSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhcHBlbmRhYmxlIGNvbnRhaW5lciBmb3IgbWlycm9yIGJhc2VkIG9uIHRoZSBhcHBlbmRUbyBvcHRpb25cbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gb3B0aW9ucy5zb3VyY2UgLSBDdXJyZW50IHNvdXJjZVxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIFtnZXRBcHBlbmRhYmxlQ29udGFpbmVyXShzb3VyY2UpIHtcbiAgICBjb25zdCBhcHBlbmRUbyA9IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcblxuICAgIGlmICh0eXBlb2YgYXBwZW5kVG8gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhcHBlbmRUbyk7XG4gICAgfSBlbHNlIGlmIChhcHBlbmRUbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICByZXR1cm4gYXBwZW5kVG87XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYXBwZW5kVG8gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBhcHBlbmRUbyhzb3VyY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc291cmNlLnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1pcnJvcjsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqIENvbXB1dGVzIG1pcnJvciBkaW1lbnNpb25zIGJhc2VkIG9uIHRoZSBzb3VyY2UgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBBZGRzIHNvdXJjZVJlY3QgdG8gc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHN0YXRlLnNvdXJjZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuZnVuY3Rpb24gY29tcHV0ZU1pcnJvckRpbWVuc2lvbnMoX3JlZjIpIHtcbiAgbGV0IHsgc291cmNlIH0gPSBfcmVmMixcbiAgICAgIGFyZ3MgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjIsIFsnc291cmNlJ10pO1xuXG4gIHJldHVybiB3aXRoUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBjb25zdCBzb3VyY2VSZWN0ID0gc291cmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJlc29sdmUoX2V4dGVuZHMoeyBzb3VyY2UsIHNvdXJjZVJlY3QgfSwgYXJncykpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIG1pcnJvciBvZmZzZXRcbiAqIEFkZHMgbWlycm9yT2Zmc2V0IHRvIHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7U2Vuc29yRXZlbnR9IHN0YXRlLnNlbnNvckV2ZW50XG4gKiBAcGFyYW0ge0RPTVJlY3R9IHN0YXRlLnNvdXJjZVJlY3RcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjYWxjdWxhdGVNaXJyb3JPZmZzZXQoX3JlZjMpIHtcbiAgbGV0IHsgc2Vuc29yRXZlbnQsIHNvdXJjZVJlY3QsIG9wdGlvbnMgfSA9IF9yZWYzLFxuICAgICAgYXJncyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMywgWydzZW5zb3JFdmVudCcsICdzb3VyY2VSZWN0JywgJ29wdGlvbnMnXSk7XG5cbiAgcmV0dXJuIHdpdGhQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGNvbnN0IHRvcCA9IG9wdGlvbnMuY3Vyc29yT2Zmc2V0WSA9PT0gbnVsbCA/IHNlbnNvckV2ZW50LmNsaWVudFkgLSBzb3VyY2VSZWN0LnRvcCA6IG9wdGlvbnMuY3Vyc29yT2Zmc2V0WTtcbiAgICBjb25zdCBsZWZ0ID0gb3B0aW9ucy5jdXJzb3JPZmZzZXRYID09PSBudWxsID8gc2Vuc29yRXZlbnQuY2xpZW50WCAtIHNvdXJjZVJlY3QubGVmdCA6IG9wdGlvbnMuY3Vyc29yT2Zmc2V0WDtcblxuICAgIGNvbnN0IG1pcnJvck9mZnNldCA9IHsgdG9wLCBsZWZ0IH07XG5cbiAgICByZXNvbHZlKF9leHRlbmRzKHsgc2Vuc29yRXZlbnQsIHNvdXJjZVJlY3QsIG1pcnJvck9mZnNldCwgb3B0aW9ucyB9LCBhcmdzKSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEFwcGx5cyBtaXJyb3Igc3R5bGVzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHN0YXRlLm1pcnJvclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gc3RhdGUuc291cmNlXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUub3B0aW9uc1xuICogQHJldHVybiB7UHJvbWlzZX1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlc2V0TWlycm9yKF9yZWY0KSB7XG4gIGxldCB7IG1pcnJvciwgc291cmNlLCBvcHRpb25zIH0gPSBfcmVmNCxcbiAgICAgIGFyZ3MgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjQsIFsnbWlycm9yJywgJ3NvdXJjZScsICdvcHRpb25zJ10pO1xuXG4gIHJldHVybiB3aXRoUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBsZXQgb2Zmc2V0SGVpZ2h0O1xuICAgIGxldCBvZmZzZXRXaWR0aDtcblxuICAgIGlmIChvcHRpb25zLmNvbnN0cmFpbkRpbWVuc2lvbnMpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU291cmNlU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZShzb3VyY2UpO1xuICAgICAgb2Zmc2V0SGVpZ2h0ID0gY29tcHV0ZWRTb3VyY2VTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0Jyk7XG4gICAgICBvZmZzZXRXaWR0aCA9IGNvbXB1dGVkU291cmNlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJyk7XG4gICAgfVxuXG4gICAgbWlycm9yLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICBtaXJyb3Iuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICBtaXJyb3Iuc3R5bGUudG9wID0gMDtcbiAgICBtaXJyb3Iuc3R5bGUubGVmdCA9IDA7XG4gICAgbWlycm9yLnN0eWxlLm1hcmdpbiA9IDA7XG5cbiAgICBpZiAob3B0aW9ucy5jb25zdHJhaW5EaW1lbnNpb25zKSB7XG4gICAgICBtaXJyb3Iuc3R5bGUuaGVpZ2h0ID0gb2Zmc2V0SGVpZ2h0O1xuICAgICAgbWlycm9yLnN0eWxlLndpZHRoID0gb2Zmc2V0V2lkdGg7XG4gICAgfVxuXG4gICAgcmVzb2x2ZShfZXh0ZW5kcyh7IG1pcnJvciwgc291cmNlLCBvcHRpb25zIH0sIGFyZ3MpKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQXBwbHlzIG1pcnJvciBjbGFzcyBvbiBtaXJyb3IgZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBzdGF0ZS5taXJyb3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZS5taXJyb3JDbGFzc1xuICogQHJldHVybiB7UHJvbWlzZX1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZE1pcnJvckNsYXNzZXMoX3JlZjUpIHtcbiAgbGV0IHsgbWlycm9yLCBtaXJyb3JDbGFzcyB9ID0gX3JlZjUsXG4gICAgICBhcmdzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWY1LCBbJ21pcnJvcicsICdtaXJyb3JDbGFzcyddKTtcblxuICByZXR1cm4gd2l0aFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgbWlycm9yLmNsYXNzTGlzdC5hZGQobWlycm9yQ2xhc3MpO1xuICAgIHJlc29sdmUoX2V4dGVuZHMoeyBtaXJyb3IsIG1pcnJvckNsYXNzIH0sIGFyZ3MpKTtcbiAgfSk7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBzb3VyY2UgSUQgZnJvbSBjbG9uZWQgbWlycm9yIGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gc3RhdGUubWlycm9yXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlTWlycm9ySUQoX3JlZjYpIHtcbiAgbGV0IHsgbWlycm9yIH0gPSBfcmVmNixcbiAgICAgIGFyZ3MgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjYsIFsnbWlycm9yJ10pO1xuXG4gIHJldHVybiB3aXRoUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBtaXJyb3IucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuICAgIGRlbGV0ZSBtaXJyb3IuaWQ7XG4gICAgcmVzb2x2ZShfZXh0ZW5kcyh7IG1pcnJvciB9LCBhcmdzKSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFBvc2l0aW9ucyBtaXJyb3Igd2l0aCB0cmFuc2xhdGUzZFxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBzdGF0ZS5taXJyb3JcbiAqIEBwYXJhbSB7U2Vuc29yRXZlbnR9IHN0YXRlLnNlbnNvckV2ZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUubWlycm9yT2Zmc2V0XG4gKiBAcGFyYW0ge051bWJlcn0gc3RhdGUuaW5pdGlhbFlcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0ZS5pbml0aWFsWFxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlLm9wdGlvbnNcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBwb3NpdGlvbk1pcnJvcih7IHdpdGhGcmFtZSA9IGZhbHNlLCBpbml0aWFsID0gZmFsc2UgfSA9IHt9KSB7XG4gIHJldHVybiAoX3JlZjcpID0+IHtcbiAgICBsZXQgeyBtaXJyb3IsIHNlbnNvckV2ZW50LCBtaXJyb3JPZmZzZXQsIGluaXRpYWxZLCBpbml0aWFsWCwgc2Nyb2xsT2Zmc2V0LCBvcHRpb25zIH0gPSBfcmVmNyxcbiAgICAgICAgYXJncyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmNywgWydtaXJyb3InLCAnc2Vuc29yRXZlbnQnLCAnbWlycm9yT2Zmc2V0JywgJ2luaXRpYWxZJywgJ2luaXRpYWxYJywgJ3Njcm9sbE9mZnNldCcsICdvcHRpb25zJ10pO1xuXG4gICAgcmV0dXJuIHdpdGhQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gX2V4dGVuZHMoe1xuICAgICAgICBtaXJyb3IsXG4gICAgICAgIHNlbnNvckV2ZW50LFxuICAgICAgICBtaXJyb3JPZmZzZXQsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIH0sIGFyZ3MpO1xuXG4gICAgICBpZiAobWlycm9yT2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IHggPSBzZW5zb3JFdmVudC5jbGllbnRYIC0gbWlycm9yT2Zmc2V0LmxlZnQgLSBzY3JvbGxPZmZzZXQueDtcbiAgICAgICAgY29uc3QgeSA9IHNlbnNvckV2ZW50LmNsaWVudFkgLSBtaXJyb3JPZmZzZXQudG9wIC0gc2Nyb2xsT2Zmc2V0Lnk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMueEF4aXMgJiYgb3B0aW9ucy55QXhpcyB8fCBpbml0aWFsKSB7XG4gICAgICAgICAgbWlycm9yLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgMClgO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMueEF4aXMgJiYgIW9wdGlvbnMueUF4aXMpIHtcbiAgICAgICAgICBtaXJyb3Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHtpbml0aWFsWX1weCwgMClgO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMueUF4aXMgJiYgIW9wdGlvbnMueEF4aXMpIHtcbiAgICAgICAgICBtaXJyb3Iuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7aW5pdGlhbFh9cHgsICR7eX1weCwgMClgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluaXRpYWwpIHtcbiAgICAgICAgICByZXN1bHQuaW5pdGlhbFggPSB4O1xuICAgICAgICAgIHJlc3VsdC5pbml0aWFsWSA9IHk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgIH0sIHsgZnJhbWU6IHdpdGhGcmFtZSB9KTtcbiAgfTtcbn1cblxuLyoqXG4gKiBXcmFwcyBmdW5jdGlvbnMgaW4gcHJvbWlzZSB3aXRoIHBvdGVudGlhbCBhbmltYXRpb24gZnJhbWUgb3B0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5yYWZcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiB3aXRoUHJvbWlzZShjYWxsYmFjaywgeyByYWYgPSBmYWxzZSB9ID0ge30pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAocmFmKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBjYWxsYmFjayhyZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKHJlc29sdmUsIHJlamVjdCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHNlbnNvciBldmVudCB3YXMgdHJpZ2dlcmVkIGJ5IGEgbmF0aXZlIGJyb3dzZXIgZHJhZyBldmVudFxuICogQHBhcmFtIHtTZW5zb3JFdmVudH0gc2Vuc29yRXZlbnRcbiAqL1xuZnVuY3Rpb24gaXNOYXRpdmVEcmFnRXZlbnQoc2Vuc29yRXZlbnQpIHtcbiAgcmV0dXJuICgvXmRyYWcvLnRlc3Qoc2Vuc29yRXZlbnQub3JpZ2luYWxFdmVudC50eXBlKVxuICApO1xufVxuXG4vKioqLyB9KSxcbi8qIDU3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHRPcHRpb25zID0gdW5kZWZpbmVkO1xuXG52YXIgX01pcnJvciA9IF9fd2VicGFja19yZXF1aXJlX18oNTYpO1xuXG52YXIgX01pcnJvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NaXJyb3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfTWlycm9yMi5kZWZhdWx0O1xuZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IF9NaXJyb3IuZGVmYXVsdE9wdGlvbnM7XG5cbi8qKiovIH0pLFxuLyogNTggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9BYnN0cmFjdFBsdWdpbiA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfQWJzdHJhY3RQbHVnaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWJzdHJhY3RQbHVnaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBvbkluaXRpYWxpemUgPSBTeW1ib2woJ29uSW5pdGlhbGl6ZScpO1xuY29uc3Qgb25EZXN0cm95ID0gU3ltYm9sKCdvbkRlc3Ryb3knKTtcblxuLyoqXG4gKiBGb2N1c2FibGUgZGVmYXVsdCBvcHRpb25zXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGVmYXVsdE9wdGlvbnNcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbi8qKlxuICogRm9jdXNhYmxlIHBsdWdpblxuICogQGNsYXNzIEZvY3VzYWJsZVxuICogQG1vZHVsZSBGb2N1c2FibGVcbiAqIEBleHRlbmRzIEFic3RyYWN0UGx1Z2luXG4gKi9cbmNsYXNzIEZvY3VzYWJsZSBleHRlbmRzIF9BYnN0cmFjdFBsdWdpbjIuZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBGb2N1c2FibGUgY29uc3RydWN0b3IuXG4gICAqIEBjb25zdHJ1Y3RzIEZvY3VzYWJsZVxuICAgKiBAcGFyYW0ge0RyYWdnYWJsZX0gZHJhZ2dhYmxlIC0gRHJhZ2dhYmxlIGluc3RhbmNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGUpIHtcbiAgICBzdXBlcihkcmFnZ2FibGUpO1xuXG4gICAgLyoqXG4gICAgICogRm9jdXNhYmxlIG9wdGlvbnNcbiAgICAgKiBAcHJvcGVydHkge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5vcHRpb25zID0gX2V4dGVuZHMoe30sIGRlZmF1bHRPcHRpb25zLCB0aGlzLmdldE9wdGlvbnMoKSk7XG5cbiAgICB0aGlzW29uSW5pdGlhbGl6ZV0gPSB0aGlzW29uSW5pdGlhbGl6ZV0uYmluZCh0aGlzKTtcbiAgICB0aGlzW29uRGVzdHJveV0gPSB0aGlzW29uRGVzdHJveV0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyBsaXN0ZW5lcnMgdG8gZHJhZ2dhYmxlXG4gICAqL1xuICBhdHRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub24oJ2RyYWdnYWJsZTppbml0aWFsaXplJywgdGhpc1tvbkluaXRpYWxpemVdKS5vbignZHJhZ2dhYmxlOmRlc3Ryb3knLCB0aGlzW29uRGVzdHJveV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaGVzIGxpc3RlbmVycyBmcm9tIGRyYWdnYWJsZVxuICAgKi9cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9mZignZHJhZ2dhYmxlOmluaXRpYWxpemUnLCB0aGlzW29uSW5pdGlhbGl6ZV0pLm9mZignZHJhZ2dhYmxlOmRlc3Ryb3knLCB0aGlzW29uRGVzdHJveV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgb3B0aW9ucyBwYXNzZWQgdGhyb3VnaCBkcmFnZ2FibGVcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgZ2V0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGUub3B0aW9ucy5mb2N1c2FibGUgfHwge307XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBkcmFnZ2FibGUgY29udGFpbmVycyBhbmQgZWxlbWVudHNcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnRbXX1cbiAgICovXG4gIGdldEVsZW1lbnRzKCkge1xuICAgIHJldHVybiBbLi4udGhpcy5kcmFnZ2FibGUuY29udGFpbmVycywgLi4udGhpcy5kcmFnZ2FibGUuZ2V0RHJhZ2dhYmxlRWxlbWVudHMoKV07XG4gIH1cblxuICAvKipcbiAgICogSW50aWFsaXplIGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIFtvbkluaXRpYWxpemVdKCkge1xuICAgIC8vIENhbiB3YWl0IHVudGlsIHRoZSBuZXh0IGJlc3QgZnJhbWUgaXMgYXZhaWxhYmxlXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuZ2V0RWxlbWVudHMoKS5mb3JFYWNoKGVsZW1lbnQgPT4gZGVjb3JhdGVFbGVtZW50KGVsZW1lbnQpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IGhhbmRsZXJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIFtvbkRlc3Ryb3ldKCkge1xuICAgIC8vIENhbiB3YWl0IHVudGlsIHRoZSBuZXh0IGJlc3QgZnJhbWUgaXMgYXZhaWxhYmxlXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuZ2V0RWxlbWVudHMoKS5mb3JFYWNoKGVsZW1lbnQgPT4gc3RyaXBFbGVtZW50KGVsZW1lbnQpKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBGb2N1c2FibGU7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBLZWVwcyB0cmFjayBvZiBhbGwgdGhlIGVsZW1lbnRzIHRoYXQgYXJlIG1pc3NpbmcgdGFiaW5kZXggYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBzbyB0aGV5IGNhbiBiZSByZXNldCB3aGVuIGRyYWdnYWJsZSBnZXRzIGRlc3Ryb3llZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY29uc3Qge0hUTUxFbGVtZW50W119IGVsZW1lbnRzV2l0aE1pc3NpbmdUYWJJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuY29uc3QgZWxlbWVudHNXaXRoTWlzc2luZ1RhYkluZGV4ID0gW107XG5cbi8qKlxuICogRGVjb3JhdGVzIGVsZW1lbnQgd2l0aCB0YWJpbmRleCBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkZWNvcmF0ZUVsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCBoYXNNaXNzaW5nVGFiSW5kZXggPSBCb29sZWFuKCFlbGVtZW50LmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSAmJiBlbGVtZW50LnRhYkluZGV4ID09PSAtMSk7XG5cbiAgaWYgKGhhc01pc3NpbmdUYWJJbmRleCkge1xuICAgIGVsZW1lbnRzV2l0aE1pc3NpbmdUYWJJbmRleC5wdXNoKGVsZW1lbnQpO1xuICAgIGVsZW1lbnQudGFiSW5kZXggPSAwO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBlbGVtZW50cyB0YWJpbmRleCBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzdHJpcEVsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCB0YWJJbmRleEVsZW1lbnRQb3NpdGlvbiA9IGVsZW1lbnRzV2l0aE1pc3NpbmdUYWJJbmRleC5pbmRleE9mKGVsZW1lbnQpO1xuXG4gIGlmICh0YWJJbmRleEVsZW1lbnRQb3NpdGlvbiAhPT0gLTEpIHtcbiAgICBlbGVtZW50LnRhYkluZGV4ID0gLTE7XG4gICAgZWxlbWVudHNXaXRoTWlzc2luZ1RhYkluZGV4LnNwbGljZSh0YWJJbmRleEVsZW1lbnRQb3NpdGlvbiwgMSk7XG4gIH1cbn1cblxuLyoqKi8gfSksXG4vKiA1OSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0ZvY3VzYWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oNTgpO1xuXG52YXIgX0ZvY3VzYWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Gb2N1c2FibGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfRm9jdXNhYmxlMi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcbi8qIDYwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcbiAqIEFsbCBkcmFnZ2FibGUgcGx1Z2lucyBpbmhlcml0IGZyb20gdGhpcyBjbGFzcy5cbiAqIEBhYnN0cmFjdFxuICogQGNsYXNzIEFic3RyYWN0UGx1Z2luXG4gKiBAbW9kdWxlIEFic3RyYWN0UGx1Z2luXG4gKi9cbmNsYXNzIEFic3RyYWN0UGx1Z2luIHtcbiAgLyoqXG4gICAqIEFic3RyYWN0UGx1Z2luIGNvbnN0cnVjdG9yLlxuICAgKiBAY29uc3RydWN0cyBBYnN0cmFjdFBsdWdpblxuICAgKiBAcGFyYW0ge0RyYWdnYWJsZX0gZHJhZ2dhYmxlIC0gRHJhZ2dhYmxlIGluc3RhbmNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGUpIHtcbiAgICAvKipcbiAgICAgKiBEcmFnZ2FibGUgaW5zdGFuY2VcbiAgICAgKiBAcHJvcGVydHkgZHJhZ2dhYmxlXG4gICAgICogQHR5cGUge0RyYWdnYWJsZX1cbiAgICAgKi9cbiAgICB0aGlzLmRyYWdnYWJsZSA9IGRyYWdnYWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0byBhZGQgbGlzdGVuZXJzXG4gICAqIEBhYnN0cmFjdFxuICAgKi9cbiAgYXR0YWNoKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IEltcGxlbWVudGVkJyk7XG4gIH1cblxuICAvKipcbiAgICogT3ZlcnJpZGUgdG8gcmVtb3ZlIGxpc3RlbmVyc1xuICAgKiBAYWJzdHJhY3RcbiAgICovXG4gIGRldGFjaCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBJbXBsZW1lbnRlZCcpO1xuICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBBYnN0cmFjdFBsdWdpbjtcblxuLyoqKi8gfSksXG4vKiA2MSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9BYnN0cmFjdFBsdWdpbiA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfQWJzdHJhY3RQbHVnaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWJzdHJhY3RQbHVnaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCBvbkluaXRpYWxpemUgPSBTeW1ib2woJ29uSW5pdGlhbGl6ZScpO1xuY29uc3Qgb25EZXN0cm95ID0gU3ltYm9sKCdvbkRlc3Ryb3knKTtcbmNvbnN0IGFubm91bmNlRXZlbnQgPSBTeW1ib2woJ2Fubm91bmNlRXZlbnQnKTtcbmNvbnN0IGFubm91bmNlTWVzc2FnZSA9IFN5bWJvbCgnYW5ub3VuY2VNZXNzYWdlJyk7XG5cbmNvbnN0IEFSSUFfUkVMRVZBTlQgPSAnYXJpYS1yZWxldmFudCc7XG5jb25zdCBBUklBX0FUT01JQyA9ICdhcmlhLWF0b21pYyc7XG5jb25zdCBBUklBX0xJVkUgPSAnYXJpYS1saXZlJztcbmNvbnN0IFJPTEUgPSAncm9sZSc7XG5cbi8qKlxuICogQW5ub3VuY2VtZW50IGRlZmF1bHQgb3B0aW9uc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRlZmF1bHRPcHRpb25zXG4gKiBAcHJvcGVydHkge051bWJlcn0gZGVmYXVsdE9wdGlvbnMuZXhwaXJlXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IGV4cG9ydHMuZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGV4cGlyZTogNzAwMFxufTtcblxuLyoqXG4gKiBBbm5vdW5jZW1lbnQgcGx1Z2luXG4gKiBAY2xhc3MgQW5ub3VuY2VtZW50XG4gKiBAbW9kdWxlIEFubm91bmNlbWVudFxuICogQGV4dGVuZHMgQWJzdHJhY3RQbHVnaW5cbiAqL1xuY2xhc3MgQW5ub3VuY2VtZW50IGV4dGVuZHMgX0Fic3RyYWN0UGx1Z2luMi5kZWZhdWx0IHtcbiAgLyoqXG4gICAqIEFubm91bmNlbWVudCBjb25zdHJ1Y3Rvci5cbiAgICogQGNvbnN0cnVjdHMgQW5ub3VuY2VtZW50XG4gICAqIEBwYXJhbSB7RHJhZ2dhYmxlfSBkcmFnZ2FibGUgLSBEcmFnZ2FibGUgaW5zdGFuY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZSkge1xuICAgIHN1cGVyKGRyYWdnYWJsZSk7XG5cbiAgICAvKipcbiAgICAgKiBQbHVnaW4gb3B0aW9uc1xuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdGlvbnMsIHRoaXMuZ2V0T3B0aW9ucygpKTtcblxuICAgIC8qKlxuICAgICAqIE9yaWdpbmFsIGRyYWdnYWJsZSB0cmlnZ2VyIG1ldGhvZC4gSGFjayB1bnRpbCB3ZSBoYXZlIG9uQWxsIG9yIG9uKCdhbGwnKVxuICAgICAqIEBwcm9wZXJ0eSBvcmlnaW5hbFRyaWdnZXJNZXRob2RcbiAgICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vcmlnaW5hbFRyaWdnZXJNZXRob2QgPSB0aGlzLmRyYWdnYWJsZS50cmlnZ2VyO1xuXG4gICAgdGhpc1tvbkluaXRpYWxpemVdID0gdGhpc1tvbkluaXRpYWxpemVdLmJpbmQodGhpcyk7XG4gICAgdGhpc1tvbkRlc3Ryb3ldID0gdGhpc1tvbkRlc3Ryb3ldLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgbGlzdGVuZXJzIHRvIGRyYWdnYWJsZVxuICAgKi9cbiAgYXR0YWNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlLm9uKCdkcmFnZ2FibGU6aW5pdGlhbGl6ZScsIHRoaXNbb25Jbml0aWFsaXplXSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoZXMgbGlzdGVuZXJzIGZyb20gZHJhZ2dhYmxlXG4gICAqL1xuICBkZXRhY2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGUub2ZmKCdkcmFnZ2FibGU6ZGVzdHJveScsIHRoaXNbb25EZXN0cm95XSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBwYXNzZWQgaW4gb3B0aW9uc1xuICAgKi9cbiAgZ2V0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGUub3B0aW9ucy5hbm5vdW5jZW1lbnRzIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFubm91bmNlcyBldmVudFxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0Fic3RyYWN0RXZlbnR9IGV2ZW50XG4gICAqL1xuICBbYW5ub3VuY2VFdmVudF0oZXZlbnQpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5vcHRpb25zW2V2ZW50LnR5cGVdO1xuXG4gICAgaWYgKG1lc3NhZ2UgJiYgdHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzW2Fubm91bmNlTWVzc2FnZV0obWVzc2FnZSk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UgJiYgdHlwZW9mIG1lc3NhZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXNbYW5ub3VuY2VNZXNzYWdlXShtZXNzYWdlKGV2ZW50KSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFubm91bmNlcyBtZXNzYWdlIHRvIHNjcmVlbiByZWFkZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICovXG4gIFthbm5vdW5jZU1lc3NhZ2VdKG1lc3NhZ2UpIHtcbiAgICBhbm5vdW5jZShtZXNzYWdlLCB7IGV4cGlyZTogdGhpcy5vcHRpb25zLmV4cGlyZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGhhbmRlclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgW29uSW5pdGlhbGl6ZV0oKSB7XG4gICAgLy8gSGFjayB1bnRpbCB0aGVyZSBpcyBhbiBhcGkgZm9yIGxpc3RlbmluZyBmb3IgYWxsIGV2ZW50c1xuICAgIHRoaXMuZHJhZ2dhYmxlLnRyaWdnZXIgPSBldmVudCA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzW2Fubm91bmNlRXZlbnRdKGV2ZW50KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIC8vIEVuc3VyZSB0aGF0IG9yaWdpbmFsIHRyaWdnZXIgaXMgY2FsbGVkXG4gICAgICAgIHRoaXMub3JpZ2luYWxUcmlnZ2VyTWV0aG9kLmNhbGwodGhpcy5kcmFnZ2FibGUsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgaGFuZGVyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBbb25EZXN0cm95XSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZS50cmlnZ2VyID0gdGhpcy5vcmlnaW5hbFRyaWdnZXJNZXRob2Q7XG4gIH1cbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gQW5ub3VuY2VtZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNvbnN0IHtIVE1MRWxlbWVudH0gbGl2ZVJlZ2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuY29uc3QgbGl2ZVJlZ2lvbiA9IGNyZWF0ZVJlZ2lvbigpO1xuXG4vKipcbiAqIEFubm91bmNlcyBtZXNzYWdlIHZpYSBsaXZlIHJlZ2lvblxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5leHBpcmVcbiAqL1xuZnVuY3Rpb24gYW5ub3VuY2UobWVzc2FnZSwgeyBleHBpcmUgfSkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gIGxpdmVSZWdpb24uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgcmV0dXJuIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGxpdmVSZWdpb24ucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gIH0sIGV4cGlyZSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyByZWdpb24gZWxlbWVudFxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJlZ2lvbigpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdkcmFnZ2FibGUtbGl2ZS1yZWdpb24nKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoQVJJQV9SRUxFVkFOVCwgJ2FkZGl0aW9ucycpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShBUklBX0FUT01JQywgJ3RydWUnKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoQVJJQV9MSVZFLCAnYXNzZXJ0aXZlJyk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFJPTEUsICdsb2cnKTtcblxuICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcxcHgnO1xuICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxcHgnO1xuICBlbGVtZW50LnN0eWxlLnRvcCA9ICctMXB4JztcbiAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG4vLyBBcHBlbmQgbGl2ZSByZWdpb24gZWxlbWVudCBhcyBlYXJseSBhcyBwb3NzaWJsZVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaXZlUmVnaW9uKTtcbn0pO1xuXG4vKioqLyB9KSxcbi8qIDYyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHRPcHRpb25zID0gdW5kZWZpbmVkO1xuXG52YXIgX0Fubm91bmNlbWVudCA9IF9fd2VicGFja19yZXF1aXJlX18oNjEpO1xuXG52YXIgX0Fubm91bmNlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Bbm5vdW5jZW1lbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfQW5ub3VuY2VtZW50Mi5kZWZhdWx0O1xuZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IF9Bbm5vdW5jZW1lbnQuZGVmYXVsdE9wdGlvbnM7XG5cbi8qKiovIH0pLFxuLyogNjMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRHJhZ2dhYmxlRGVzdHJveUV2ZW50ID0gZXhwb3J0cy5EcmFnZ2FibGVJbml0aWFsaXplZEV2ZW50ID0gZXhwb3J0cy5EcmFnZ2FibGVFdmVudCA9IHVuZGVmaW5lZDtcblxudmFyIF9BYnN0cmFjdEV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9BYnN0cmFjdEV2ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Fic3RyYWN0RXZlbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIEJhc2UgZHJhZ2dhYmxlIGV2ZW50XG4gKiBAY2xhc3MgRHJhZ2dhYmxlRXZlbnRcbiAqIEBtb2R1bGUgRHJhZ2dhYmxlRXZlbnRcbiAqIEBleHRlbmRzIEFic3RyYWN0RXZlbnRcbiAqL1xuY2xhc3MgRHJhZ2dhYmxlRXZlbnQgZXh0ZW5kcyBfQWJzdHJhY3RFdmVudDIuZGVmYXVsdCB7XG5cbiAgLyoqXG4gICAqIERyYWdnYWJsZSBpbnN0YW5jZVxuICAgKiBAcHJvcGVydHkgZHJhZ2dhYmxlXG4gICAqIEB0eXBlIHtEcmFnZ2FibGV9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IGRyYWdnYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmRyYWdnYWJsZTtcbiAgfVxufVxuXG5leHBvcnRzLkRyYWdnYWJsZUV2ZW50ID0gRHJhZ2dhYmxlRXZlbnQ7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBEcmFnZ2FibGUgaW5pdGlhbGl6ZWQgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIERyYWdnYWJsZUluaXRpYWxpemVkRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBEcmFnZ2FibGVJbml0aWFsaXplZEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIERyYWdnYWJsZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5EcmFnZ2FibGVFdmVudC50eXBlID0gJ2RyYWdnYWJsZSc7XG5jbGFzcyBEcmFnZ2FibGVJbml0aWFsaXplZEV2ZW50IGV4dGVuZHMgRHJhZ2dhYmxlRXZlbnQge31cblxuZXhwb3J0cy5EcmFnZ2FibGVJbml0aWFsaXplZEV2ZW50ID0gRHJhZ2dhYmxlSW5pdGlhbGl6ZWRFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBEcmFnZ2FibGUgZGVzdG9yeSBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIERyYWdnYWJsZUluaXRpYWxpemVkRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtb2R1bGUgRHJhZ2dhYmxlRGVzdHJveUV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXh0ZW5kcyBEcmFnZ2FibGVEZXN0cm95RXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5EcmFnZ2FibGVJbml0aWFsaXplZEV2ZW50LnR5cGUgPSAnZHJhZ2dhYmxlOmluaXRpYWxpemUnO1xuY2xhc3MgRHJhZ2dhYmxlRGVzdHJveUV2ZW50IGV4dGVuZHMgRHJhZ2dhYmxlRXZlbnQge31cbmV4cG9ydHMuRHJhZ2dhYmxlRGVzdHJveUV2ZW50ID0gRHJhZ2dhYmxlRGVzdHJveUV2ZW50O1xuRHJhZ2dhYmxlRGVzdHJveUV2ZW50LnR5cGUgPSAnZHJhZ2dhYmxlOmRlc3Ryb3knO1xuXG4vKioqLyB9KSxcbi8qIDY0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmNvbnN0IGNhbmNlbGVkID0gU3ltYm9sKCdjYW5jZWxlZCcpO1xuXG4vKipcbiAqIEFsbCBldmVudHMgZmlyZWQgYnkgZHJhZ2dhYmxlIGluaGVyaXQgdGhpcyBjbGFzcy4gWW91IGNhbiBjYWxsIGBjYW5jZWwoKWAgdG9cbiAqIGNhbmNlbCBhIHNwZWNpZmljIGV2ZW50IG9yIHlvdSBjYW4gY2hlY2sgaWYgYW4gZXZlbnQgaGFzIGJlZW4gY2FuY2VsZWQgYnlcbiAqIGNhbGxpbmcgYGNhbmNlbGVkKClgLlxuICogQGFic3RyYWN0XG4gKiBAY2xhc3MgQWJzdHJhY3RFdmVudFxuICogQG1vZHVsZSBBYnN0cmFjdEV2ZW50XG4gKi9cbmNsYXNzIEFic3RyYWN0RXZlbnQge1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdEV2ZW50IGNvbnN0cnVjdG9yLlxuICAgKiBAY29uc3RydWN0cyBBYnN0cmFjdEV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gRXZlbnQgZGF0YVxuICAgKi9cblxuICAvKipcbiAgICogRXZlbnQgdHlwZVxuICAgKiBAc3RhdGljXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcHJvcGVydHkgdHlwZVxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXNbY2FuY2VsZWRdID0gZmFsc2U7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkLW9ubHkgdHlwZVxuICAgKiBAYWJzdHJhY3RcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cblxuXG4gIC8qKlxuICAgKiBFdmVudCBjYW5jZWxhYmxlXG4gICAqIEBzdGF0aWNcbiAgICogQGFic3RyYWN0XG4gICAqIEBwcm9wZXJ0eSBjYW5jZWxhYmxlXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IudHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkLW9ubHkgY2FuY2VsYWJsZVxuICAgKiBAYWJzdHJhY3RcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGdldCBjYW5jZWxhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmNhbmNlbGFibGU7XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VscyB0aGUgZXZlbnQgaW5zdGFuY2VcbiAgICogQGFic3RyYWN0XG4gICAqL1xuICBjYW5jZWwoKSB7XG4gICAgdGhpc1tjYW5jZWxlZF0gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGV2ZW50IGhhcyBiZWVuIGNhbmNlbGVkXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgY2FuY2VsZWQoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpc1tjYW5jZWxlZF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgbmV3IGV2ZW50IGluc3RhbmNlIHdpdGggZXhpc3RpbmcgZXZlbnQgZGF0YS5cbiAgICogVGhpcyBtZXRob2QgYWxsb3dzIGZvciBvdmVycmlkaW5nIG9mIGV2ZW50IGRhdGEuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAqIEByZXR1cm4ge0Fic3RyYWN0RXZlbnR9XG4gICAqL1xuICBjbG9uZShkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKF9leHRlbmRzKHt9LCB0aGlzLmRhdGEsIGRhdGEpKTtcbiAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQWJzdHJhY3RFdmVudDtcbkFic3RyYWN0RXZlbnQudHlwZSA9ICdldmVudCc7XG5BYnN0cmFjdEV2ZW50LmNhbmNlbGFibGUgPSBmYWxzZTtcblxuLyoqKi8gfSksXG4vKiA2NSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5EcmFnU3RvcEV2ZW50ID0gZXhwb3J0cy5EcmFnUHJlc3N1cmVFdmVudCA9IGV4cG9ydHMuRHJhZ091dENvbnRhaW5lckV2ZW50ID0gZXhwb3J0cy5EcmFnT3ZlckNvbnRhaW5lckV2ZW50ID0gZXhwb3J0cy5EcmFnT3V0RXZlbnQgPSBleHBvcnRzLkRyYWdPdmVyRXZlbnQgPSBleHBvcnRzLkRyYWdNb3ZlRXZlbnQgPSBleHBvcnRzLkRyYWdTdGFydEV2ZW50ID0gZXhwb3J0cy5EcmFnRXZlbnQgPSB1bmRlZmluZWQ7XG5cbnZhciBfQWJzdHJhY3RFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfQWJzdHJhY3RFdmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BYnN0cmFjdEV2ZW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBCYXNlIGRyYWcgZXZlbnRcbiAqIEBjbGFzcyBEcmFnRXZlbnRcbiAqIEBtb2R1bGUgRHJhZ0V2ZW50XG4gKiBAZXh0ZW5kcyBBYnN0cmFjdEV2ZW50XG4gKi9cbmNsYXNzIERyYWdFdmVudCBleHRlbmRzIF9BYnN0cmFjdEV2ZW50Mi5kZWZhdWx0IHtcblxuICAvKipcbiAgICogRHJhZ2dhYmxlcyBzb3VyY2UgZWxlbWVudFxuICAgKiBAcHJvcGVydHkgc291cmNlXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgc291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuc291cmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWdnYWJsZXMgb3JpZ2luYWwgc291cmNlIGVsZW1lbnRcbiAgICogQHByb3BlcnR5IG9yaWdpbmFsU291cmNlXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgb3JpZ2luYWxTb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vcmlnaW5hbFNvdXJjZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmFnZ2FibGVzIG1pcnJvciBlbGVtZW50XG4gICAqIEBwcm9wZXJ0eSBtaXJyb3JcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBtaXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5taXJyb3I7XG4gIH1cblxuICAvKipcbiAgICogRHJhZ2dhYmxlcyBzb3VyY2UgY29udGFpbmVyIGVsZW1lbnRcbiAgICogQHByb3BlcnR5IHNvdXJjZUNvbnRhaW5lclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IHNvdXJjZUNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnNvdXJjZUNvbnRhaW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5zb3IgZXZlbnRcbiAgICogQHByb3BlcnR5IHNlbnNvckV2ZW50XG4gICAqIEB0eXBlIHtTZW5zb3JFdmVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgc2Vuc29yRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zZW5zb3JFdmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcmlnaW5hbCBldmVudCB0aGF0IHRyaWdnZXJlZCBzZW5zb3IgZXZlbnRcbiAgICogQHByb3BlcnR5IG9yaWdpbmFsRXZlbnRcbiAgICogQHR5cGUge0V2ZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBvcmlnaW5hbEV2ZW50KCkge1xuICAgIGlmICh0aGlzLnNlbnNvckV2ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZW5zb3JFdmVudC5vcmlnaW5hbEV2ZW50O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMuRHJhZ0V2ZW50ID0gRHJhZ0V2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBEcmFnIHN0YXJ0IGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIERyYWdTdGFydEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBEcmFnU3RhcnRFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIERyYWdFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5EcmFnRXZlbnQudHlwZSA9ICdkcmFnJztcbmNsYXNzIERyYWdTdGFydEV2ZW50IGV4dGVuZHMgRHJhZ0V2ZW50IHt9XG5cbmV4cG9ydHMuRHJhZ1N0YXJ0RXZlbnQgPSBEcmFnU3RhcnRFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIERyYWcgbW92ZSBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgRHJhZ01vdmVFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIERyYWdNb3ZlRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGV4dGVuZHMgRHJhZ0V2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5EcmFnU3RhcnRFdmVudC50eXBlID0gJ2RyYWc6c3RhcnQnO1xuRHJhZ1N0YXJ0RXZlbnQuY2FuY2VsYWJsZSA9IHRydWU7XG5jbGFzcyBEcmFnTW92ZUV2ZW50IGV4dGVuZHMgRHJhZ0V2ZW50IHt9XG5cbmV4cG9ydHMuRHJhZ01vdmVFdmVudCA9IERyYWdNb3ZlRXZlbnQ7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogRHJhZyBvdmVyIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgRHJhZ092ZXJFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBEcmFnT3ZlckV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXh0ZW5kcyBEcmFnRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5EcmFnTW92ZUV2ZW50LnR5cGUgPSAnZHJhZzptb3ZlJztcbmNsYXNzIERyYWdPdmVyRXZlbnQgZXh0ZW5kcyBEcmFnRXZlbnQge1xuXG4gIC8qKlxuICAgKiBEcmFnZ2FibGUgY29udGFpbmVyIHlvdSBhcmUgb3ZlclxuICAgKiBAcHJvcGVydHkgb3ZlckNvbnRhaW5lclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IG92ZXJDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vdmVyQ29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWdnYWJsZSBlbGVtZW50IHlvdSBhcmUgb3ZlclxuICAgKiBAcHJvcGVydHkgb3ZlclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IG92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vdmVyO1xuICB9XG59XG5cbmV4cG9ydHMuRHJhZ092ZXJFdmVudCA9IERyYWdPdmVyRXZlbnQ7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogRHJhZyBvdXQgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzcyBEcmFnT3V0RXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtb2R1bGUgRHJhZ091dEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXh0ZW5kcyBEcmFnRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5EcmFnT3ZlckV2ZW50LnR5cGUgPSAnZHJhZzpvdmVyJztcbkRyYWdPdmVyRXZlbnQuY2FuY2VsYWJsZSA9IHRydWU7XG5jbGFzcyBEcmFnT3V0RXZlbnQgZXh0ZW5kcyBEcmFnRXZlbnQge1xuXG4gIC8qKlxuICAgKiBEcmFnZ2FibGUgY29udGFpbmVyIHlvdSBhcmUgb3ZlclxuICAgKiBAcHJvcGVydHkgb3ZlckNvbnRhaW5lclxuICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IG92ZXJDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vdmVyQ29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYWdnYWJsZSBlbGVtZW50IHlvdSBsZWZ0XG4gICAqIEBwcm9wZXJ0eSBvdmVyXG4gICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgb3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm92ZXI7XG4gIH1cbn1cblxuZXhwb3J0cy5EcmFnT3V0RXZlbnQgPSBEcmFnT3V0RXZlbnQ7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIERyYWcgb3ZlciBjb250YWluZXIgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAY2xhc3MgRHJhZ092ZXJDb250YWluZXJFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtb2R1bGUgRHJhZ092ZXJDb250YWluZXJFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIERyYWdFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5EcmFnT3V0RXZlbnQudHlwZSA9ICdkcmFnOm91dCc7XG5jbGFzcyBEcmFnT3ZlckNvbnRhaW5lckV2ZW50IGV4dGVuZHMgRHJhZ0V2ZW50IHtcblxuICAvKipcbiAgICogRHJhZ2dhYmxlIGNvbnRhaW5lciB5b3UgYXJlIG92ZXJcbiAgICogQHByb3BlcnR5IG92ZXJDb250YWluZXJcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBvdmVyQ29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEub3ZlckNvbnRhaW5lcjtcbiAgfVxufVxuXG5leHBvcnRzLkRyYWdPdmVyQ29udGFpbmVyRXZlbnQgPSBEcmFnT3ZlckNvbnRhaW5lckV2ZW50OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIERyYWcgb3V0IGNvbnRhaW5lciBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIERyYWdPdXRDb250YWluZXJFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBEcmFnT3V0Q29udGFpbmVyRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIERyYWdFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbkRyYWdPdmVyQ29udGFpbmVyRXZlbnQudHlwZSA9ICdkcmFnOm92ZXI6Y29udGFpbmVyJztcbmNsYXNzIERyYWdPdXRDb250YWluZXJFdmVudCBleHRlbmRzIERyYWdFdmVudCB7XG5cbiAgLyoqXG4gICAqIERyYWdnYWJsZSBjb250YWluZXIgeW91IGxlZnRcbiAgICogQHByb3BlcnR5IG92ZXJDb250YWluZXJcbiAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGdldCBvdmVyQ29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEub3ZlckNvbnRhaW5lcjtcbiAgfVxufVxuXG5leHBvcnRzLkRyYWdPdXRDb250YWluZXJFdmVudCA9IERyYWdPdXRDb250YWluZXJFdmVudDsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogRHJhZyBwcmVzc3VyZSBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBjbGFzcyBEcmFnUHJlc3N1cmVFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBtb2R1bGUgRHJhZ1ByZXNzdXJlRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZXh0ZW5kcyBEcmFnRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuRHJhZ091dENvbnRhaW5lckV2ZW50LnR5cGUgPSAnZHJhZzpvdXQ6Y29udGFpbmVyJztcbmNsYXNzIERyYWdQcmVzc3VyZUV2ZW50IGV4dGVuZHMgRHJhZ0V2ZW50IHtcblxuICAvKipcbiAgICogUHJlc3N1cmUgYXBwbGllZCBvbiBkcmFnZ2FibGUgZWxlbWVudFxuICAgKiBAcHJvcGVydHkgcHJlc3N1cmVcbiAgICogQHR5cGUge051bWJlcn1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBnZXQgcHJlc3N1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5wcmVzc3VyZTtcbiAgfVxufVxuXG5leHBvcnRzLkRyYWdQcmVzc3VyZUV2ZW50ID0gRHJhZ1ByZXNzdXJlRXZlbnQ7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBEcmFnIHN0b3AgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGNsYXNzIERyYWdTdG9wRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBEcmFnU3RvcEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBleHRlbmRzIERyYWdFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuRHJhZ1ByZXNzdXJlRXZlbnQudHlwZSA9ICdkcmFnOnByZXNzdXJlJztcbmNsYXNzIERyYWdTdG9wRXZlbnQgZXh0ZW5kcyBEcmFnRXZlbnQge31cbmV4cG9ydHMuRHJhZ1N0b3BFdmVudCA9IERyYWdTdG9wRXZlbnQ7XG5EcmFnU3RvcEV2ZW50LnR5cGUgPSAnZHJhZzpzdG9wJztcblxuLyoqKi8gfSksXG4vKiA2NiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5QbHVnaW5zID0gZXhwb3J0cy5TZW5zb3JzID0gZXhwb3J0cy5Tb3J0YWJsZSA9IGV4cG9ydHMuU3dhcHBhYmxlID0gZXhwb3J0cy5Ecm9wcGFibGUgPSBleHBvcnRzLkRyYWdnYWJsZSA9IGV4cG9ydHMuQmFzZVBsdWdpbiA9IGV4cG9ydHMuQmFzZUV2ZW50ID0gdW5kZWZpbmVkO1xuXG52YXIgX0RyYWdnYWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRHJhZ2dhYmxlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJhZ2dhYmxlKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9Ecm9wcGFibGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM0KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdEcm9wcGFibGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ecm9wcGFibGUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX1N3YXBwYWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oMzEpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1N3YXBwYWJsZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N3YXBwYWJsZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfU29ydGFibGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI4KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTb3J0YWJsZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NvcnRhYmxlKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9BYnN0cmFjdEV2ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9BYnN0cmFjdEV2ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Fic3RyYWN0RXZlbnQpO1xuXG52YXIgX0Fic3RyYWN0UGx1Z2luID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9BYnN0cmFjdFBsdWdpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BYnN0cmFjdFBsdWdpbik7XG5cbnZhciBfU2Vuc29ycyA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cbnZhciBTZW5zb3JzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX1NlbnNvcnMpO1xuXG52YXIgX1BsdWdpbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI1KTtcblxudmFyIFBsdWdpbnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfUGx1Z2lucyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuQmFzZUV2ZW50ID0gX0Fic3RyYWN0RXZlbnQyLmRlZmF1bHQ7XG5leHBvcnRzLkJhc2VQbHVnaW4gPSBfQWJzdHJhY3RQbHVnaW4yLmRlZmF1bHQ7XG5leHBvcnRzLlNlbnNvcnMgPSBTZW5zb3JzO1xuZXhwb3J0cy5QbHVnaW5zID0gUGx1Z2lucztcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
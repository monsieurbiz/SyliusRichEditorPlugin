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
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dragula */ "./node_modules/dragula/dragula.js");
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dragula__WEBPACK_IMPORTED_MODULE_0__);
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
    this.container = document.querySelector(config.containerSelector);
    this.uiElements = this.config.uiElements;
    this.translations = this.config.translations;

    if (this.debug) {
      this.log('Plugin configuration :', this.config);
      this.log('Matched element(s) :', this.targets.length);
    } // Internal attributes


    this.id = {
      uiElementContainer: 'mbiz-cms-elements-container'
    };
    this.classes = {
      uiElementContainer: 'mbiz-cms-component-ui-elements',
      dropableContainer: 'mbiz-cms-dropable-container',
      draggableContainer: 'mbiz-cms-draggable-container',
      draggableItem: 'mbiz-cms-draggable-item',
      draggableItemHandler: 'mbiz-cms-draggable-item-handler',
      deleteButton: 'mbiz-cms-delete-button'
    };
  }
  /**
   * Init each CMS element
   */


  _createClass(MbizCmsFields, [{
    key: "init",
    value: function init() {
      this.initUiElements(this.container, this.uiElements);
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
          this.initActions(target, jsonContent);
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
     * Init the UI Elements area
     *
     * @param target
     * @param uiElements
     */

  }, {
    key: "initUiElements",
    value: function initUiElements(target, uiElements) {
      this.log('Init UI Elements :', uiElements); // Init container

      var uiElementsContainer = document.createElement('div');
      uiElementsContainer.id = this.id.uiElementContainer;
      uiElementsContainer.classList.add(this.classes.dropableContainer, this.classes.uiElementContainer);

      if (this.templateRender === 'sylius') {
        uiElementsContainer.classList.add('mbiz', this.classes.dropableContainer, this.classes.uiElementContainer);
      } // Loop on UI Elements


      var error = false;

      for (var type in uiElements) {
        this.log('Init UI Element :', uiElements[type]);
        var uiElement = uiElements[type];
        var renderedUiElement = this.renderUiElement(uiElement, this.templateRender);

        if (renderedUiElement === '') {
          error = true;
          continue;
        }

        uiElementsContainer.insertAdjacentHTML('beforeend', renderedUiElement);
      } // Append generated HTML to display current UI Elements of target


      if (!error) {
        target.appendChild(uiElementsContainer);
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
        } // Prepend actions buttons in container

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

      elementsContainer.insertAdjacentHTML('afterbegin', this.renderActionsButtons(this.templateRender)); // Append generated HTML to display current UI Elements of target

      if (!error) {
        target.parentNode.appendChild(elementsContainer);
        var reorder = this.initReorder(document.getElementById(this.id.uiElementContainer), elementsContainer); // this.initDragToCopy(document.getElementById(this.id.uiElementContainer), elementsContainer);

        this.initReorderEvent(reorder, target, jsonContent);
      }
    }
    /**
     * Init action for each element, current actions are update and delete
     *
     * @param target
     * @param jsonContent
     */

  }, {
    key: "initActions",
    value: function initActions(target, jsonContent) {
      // Init Delete
      var deleteButtons = document.querySelectorAll('.' + this.classes.deleteButton);
      this.log('Init delete button(s), found : ', deleteButtons.length);
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = deleteButtons[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var deleteButton = _step3.value;
          this.initDeleteButton(deleteButton, jsonContent, target);
        } // @TODO Init update

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
    }
    /**
     * Call remove UI Element on click after confirm
     *
     * @param deleteButton
     */

  }, {
    key: "initDeleteButton",
    value: function initDeleteButton(deleteButton, jsonContent, target) {
      var _self = this;

      deleteButton.onclick = function () {
        if (confirm(_self.translations.confirm_delete)) {
          var elementToRemove = deleteButton.closest('.' + _self.classes.draggableItem);

          var removedIndex = _self.getElementIndex(elementToRemove);

          _self.removeUiElement(removedIndex, jsonContent, target);

          elementToRemove.remove();
        }
      };
    }
    /**
     * Return markup to display UI Element depending on render
     *
     * @param uiElementMetaData {short_description: "Short description", description: "Description", title: "Title", image: "/path/to/image.jpg"}
     */

  }, {
    key: "renderUiElement",
    value: function renderUiElement(uiElementMetaData, templateRender) {
      if (templateRender === 'sylius') {
        return "\n            <div>\n                <img class=\"ui small image\" src=\"".concat(uiElementMetaData.image, "\" alt=\"\" width=\"150\" height=\"150\">\n            </div>\n            ");
      }

      this.error('Cannot find render for : ', templateRender);
      return '';
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
        return "\n            <div class=\"ui segment raised ".concat(this.classes.draggableItem, "\">\n                <button class=\"ui right floated massive button icon ").concat(this.classes.draggableItemHandler, "\" type=\"button\"><i class=\"icon arrows alternate ").concat(this.classes.draggableItemHandler, "\"></i></button>\n                <div class=\"ui grid\">\n                    <div class=\"four wide column\">\n                        <img class=\"ui small image\" src=\"").concat(uiElementMetaData.image, "\" alt=\"\" width=\"150\" height=\"150\">\n                    </div>\n                    <div class=\"twelve wide column\">\n                        <h2 class=\"ui header\">").concat(uiElementMetaData.title, "</h2>\n                        <p>").concat(uiElementMetaData.description, "</p>\n                        <div class=\"ui buttons\">\n                            <button class=\"ui button\" type=\"button\">").concat(this.translations.edit, "</button>\n                            <button class=\"ui button negative ").concat(this.classes.deleteButton, "\" type=\"button\">").concat(this.translations["delete"], "</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ");
      }

      this.error('Cannot find render for : ', templateRender);
      return '';
    }
    /**
     * Return markup to display action buttons
     */

  }, {
    key: "renderActionsButtons",
    value: function renderActionsButtons(templateRender) {
      if (templateRender === 'sylius') {
        return "\n            <div class=\"field\">\n                <div class=\"ui buttons\">\n                    <button class=\"ui primary button\" type=\"button\">".concat(this.translations["new"], "</button>\n                    <button class=\"ui button\" type=\"button\">").concat(this.translations.preview, "</button>\n                </div>\n            </div>\n            ");
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
    key: "initReorder",
    value: function initReorder(UiElements, elementsContainer) {
      var _self = this;

      var drake = new dragula__WEBPACK_IMPORTED_MODULE_0___default.a([UiElements, elementsContainer], {
        copy: function copy(el, source) {
          return source === UiElements;
        },
        accepts: function accepts(el, target) {
          return target !== UiElements;
        },
        moves: function moves(el, container, handle) {
          return handle.classList.contains(_self.classes.draggableItemHandler);
        }
      });
      return drake;
    }
  }, {
    key: "initDragToCopy",
    value: function initDragToCopy(UiElements, elementsContainer) {
      var drake = new dragula__WEBPACK_IMPORTED_MODULE_0___default.a([UiElements, elementsContainer], {
        copy: function copy(el, source) {
          return source === UiElements;
        },
        accepts: function accepts(el, target) {
          return target !== UiElements;
        }
      });
      return drake;
    }
    /**
     * Init event to be able to reorder elements in it's field
     *
     * @param drake
     * @param target
     * @param jsonContent
     */

  }, {
    key: "initReorderEvent",
    value: function initReorderEvent(drake, target, jsonContent) {
      var _this = this;

      drake.on('drag', function (el, source) {
        var index = _this.getElementIndex(el);

        _this.log('Drag start : ', {
          index: index,
          el: el,
          source: source
        });

        _this.currentIndex = index;
      });
      drake.on('drop', function (el, targetElement, source, sibling) {
        var oldIndex = _this.currentIndex;

        var newIndex = _this.getElementIndex(el);

        _this.log('Drag stop : ', {
          oldIndex: oldIndex,
          newIndex: newIndex,
          el: el,
          targetElement: targetElement,
          source: source,
          sibling: sibling
        });

        _this.moveUiElement(oldIndex, newIndex, jsonContent, target);
      });
    }
    /**
     * Retrieve the index of element in UI Elements list
     *
     * @param el
     * @returns {number}
     */

  }, {
    key: "getElementIndex",
    value: function getElementIndex(el) {
      return [].slice.call(el.parentElement.children).indexOf(el);
    }
    /**
     * Update the JSON to move UI elements
     *
     * @param oldIndex
     * @param newIndex
     * @param jsonContent
     * @param target
     */

  }, {
    key: "moveUiElement",
    value: function moveUiElement(oldIndex, newIndex, jsonContent, target) {
      if (oldIndex !== newIndex) {
        this.log('Move UI Element : ', {
          oldIndex: oldIndex,
          newIndex: newIndex,
          target: target,
          beforeMoveJson: jsonContent
        });

        if (newIndex >= jsonContent.length) {
          var k = newIndex - jsonContent.length + 1;

          while (k--) {
            jsonContent.push(undefined); // @TODO define the new inserted UI Element ?
          }
        }

        jsonContent.splice(newIndex, 0, jsonContent.splice(oldIndex, 1)[0]);
        target.value = JSON.stringify(jsonContent);
        this.log('Moved UI Element : ', {
          afterMoveJson: jsonContent,
          newTargetValue: target.value
        });
      } else {
        this.log('Not moved UI Element, same index', {
          oldIndex: oldIndex,
          newIndex: newIndex,
          target: target,
          beforeMoveJson: jsonContent
        });
      }
    }
    /**
     * Update the JSON to remove UI element
     *
     * @param removedIndex
     * @param jsonContent
     * @param target
     */

  }, {
    key: "removeUiElement",
    value: function removeUiElement(removedIndex, jsonContent, target) {
      this.log('Remove UI Element : ', {
        removedIndex: removedIndex,
        target: target,
        beforeMoveJson: jsonContent
      });
      jsonContent.splice(removedIndex, 1);
      target.value = JSON.stringify(jsonContent);
      this.log('Removed UI Element : ', {
        afterMoveJson: jsonContent,
        newTargetValue: target.value
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
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this.targets[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var target = _step4.value;
          target.removeAttribute('hidden');
        } // Remove generated blocks

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

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = document.querySelectorAll('.' + this.classes.uiElementContainer)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var _target = _step5.value;

          _target.remove();
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
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

/***/ "./node_modules/atoa/atoa.js":
/*!***********************************!*\
  !*** ./node_modules/atoa/atoa.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function atoa (a, n) { return Array.prototype.slice.call(a, n); }


/***/ }),

/***/ "./node_modules/contra/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/contra/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ticky = __webpack_require__(/*! ticky */ "./node_modules/ticky/ticky-browser.js");

module.exports = function debounce (fn, args, ctx) {
  if (!fn) { return; }
  ticky(function run () {
    fn.apply(ctx || null, args || []);
  });
};


/***/ }),

/***/ "./node_modules/contra/emitter.js":
/*!****************************************!*\
  !*** ./node_modules/contra/emitter.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var atoa = __webpack_require__(/*! atoa */ "./node_modules/atoa/atoa.js");
var debounce = __webpack_require__(/*! ./debounce */ "./node_modules/contra/debounce.js");

module.exports = function emitter (thing, options) {
  var opts = options || {};
  var evt = {};
  if (thing === undefined) { thing = {}; }
  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }
    return thing;
  };
  thing.once = function (type, fn) {
    fn._once = true; // thing.off(fn) still works!
    thing.on(type, fn);
    return thing;
  };
  thing.off = function (type, fn) {
    var c = arguments.length;
    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];
      if (!et) { return thing; }
      et.splice(et.indexOf(fn), 1);
    }
    return thing;
  };
  thing.emit = function () {
    var args = atoa(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };
  thing.emitterSnapshot = function (type) {
    var et = (evt[type] || []).slice(0);
    return function () {
      var args = atoa(arguments);
      var ctx = this || thing;
      if (type === 'error' && opts.throws !== false && !et.length) { throw args.length === 1 ? args[0] : args; }
      et.forEach(function emitter (listen) {
        if (opts.async) { debounce(listen, args, ctx); } else { listen.apply(ctx, args); }
        if (listen._once) { thing.off(type, listen); }
      });
      return thing;
    };
  };
  return thing;
};


/***/ }),

/***/ "./node_modules/crossvent/src/crossvent.js":
/*!*************************************************!*\
  !*** ./node_modules/crossvent/src/crossvent.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var customEvent = __webpack_require__(/*! custom-event */ "./node_modules/custom-event/index.js");
var eventmap = __webpack_require__(/*! ./eventmap */ "./node_modules/crossvent/src/eventmap.js");
var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];

if (!global.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}

module.exports = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};

function addEventEasy (el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}

function addEventHard (el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}

function removeEventEasy (el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}

function removeEventHard (el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}

function fabricateEvent (el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
  function makeClassicEvent () {
    var e;
    if (doc.createEvent) {
      e = doc.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc.createEventObject) {
      e = doc.createEventObject();
    }
    return e;
  }
  function makeCustomEvent () {
    return new customEvent(type, { detail: model });
  }
}

function wrapperFactory (el, type, fn) {
  return function wrapper (originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
    e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}

function wrap (el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}

function unwrap (el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}

function find (el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/crossvent/src/eventmap.js":
/*!************************************************!*\
  !*** ./node_modules/crossvent/src/eventmap.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var eventmap = [];
var eventname = '';
var ron = /^on/;

for (eventname in global) {
  if (ron.test(eventname)) {
    eventmap.push(eventname.slice(2));
  }
}

module.exports = eventmap;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/custom-event/index.js":
/*!********************************************!*\
  !*** ./node_modules/custom-event/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/dragula/classes.js":
/*!*****************************************!*\
  !*** ./node_modules/dragula/classes.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';

function lookupClass (className) {
  var cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}

function addClass (el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}

function rmClass (el, className) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}

module.exports = {
  add: addClass,
  rm: rmClass
};


/***/ }),

/***/ "./node_modules/dragula/dragula.js":
/*!*****************************************!*\
  !*** ./node_modules/dragula/dragula.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var emitter = __webpack_require__(/*! contra/emitter */ "./node_modules/contra/emitter.js");
var crossvent = __webpack_require__(/*! crossvent */ "./node_modules/crossvent/src/crossvent.js");
var classes = __webpack_require__(/*! ./classes */ "./node_modules/dragula/classes.js");
var doc = document;
var documentElement = doc.documentElement;

function dragula (initialContainers, options) {
  var len = arguments.length;
  if (len === 1 && Array.isArray(initialContainers) === false) {
    options = initialContainers;
    initialContainers = [];
  }
  var _mirror; // mirror image
  var _source; // source container
  var _item; // item being dragged
  var _offsetX; // reference x
  var _offsetY; // reference y
  var _moveX; // reference move x
  var _moveY; // reference move y
  var _initialSibling; // reference sibling when grabbed
  var _currentSibling; // reference sibling now
  var _copy; // item used for copying
  var _renderTimer; // timer for setTimeout renderMirrorImage
  var _lastDropTarget = null; // last container item was over
  var _grabbed; // holds mousedown context until first mousemove

  var o = options || {};
  if (o.moves === void 0) { o.moves = always; }
  if (o.accepts === void 0) { o.accepts = always; }
  if (o.invalid === void 0) { o.invalid = invalidTarget; }
  if (o.containers === void 0) { o.containers = initialContainers || []; }
  if (o.isContainer === void 0) { o.isContainer = never; }
  if (o.copy === void 0) { o.copy = false; }
  if (o.copySortSource === void 0) { o.copySortSource = false; }
  if (o.revertOnSpill === void 0) { o.revertOnSpill = false; }
  if (o.removeOnSpill === void 0) { o.removeOnSpill = false; }
  if (o.direction === void 0) { o.direction = 'vertical'; }
  if (o.ignoreInputTextSelection === void 0) { o.ignoreInputTextSelection = true; }
  if (o.mirrorContainer === void 0) { o.mirrorContainer = doc.body; }

  var drake = emitter({
    containers: o.containers,
    start: manualStart,
    end: end,
    cancel: cancel,
    remove: remove,
    destroy: destroy,
    canMove: canMove,
    dragging: false
  });

  if (o.removeOnSpill === true) {
    drake.on('over', spillOver).on('out', spillOut);
  }

  events();

  return drake;

  function isContainer (el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }

  function events (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousedown', grab);
    touchy(documentElement, op, 'mouseup', release);
  }

  function eventualMovements (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
  }

  function movements (remove) {
    var op = remove ? 'remove' : 'add';
    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
    crossvent[op](documentElement, 'click', preventGrabbed);
  }

  function destroy () {
    events(true);
    release({});
  }

  function preventGrabbed (e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }

  function grab (e) {
    _moveX = e.clientX;
    _moveY = e.clientY;

    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
    if (ignore) {
      return; // we only care about honest-to-god left clicks and touch events
    }
    var item = e.target;
    var context = canStart(item);
    if (!context) {
      return;
    }
    _grabbed = context;
    eventualMovements();
    if (e.type === 'mousedown') {
      if (isInput(item)) { // see also: https://github.com/bevacqua/dragula/issues/208
        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
      } else {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }
  }

  function startBecauseMouseMoved (e) {
    if (!_grabbed) {
      return;
    }
    if (whichMouseButton(e) === 0) {
      release({});
      return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
    }
    // truthy check fixes #239, equality fixes #207
    if (e.clientX !== void 0 && e.clientX === _moveX && e.clientY !== void 0 && e.clientY === _moveY) {
      return;
    }
    if (o.ignoreInputTextSelection) {
      var clientX = getCoord('clientX', e);
      var clientY = getCoord('clientY', e);
      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
      if (isInput(elementBehindCursor)) {
        return;
      }
    }

    var grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);

    var offset = getOffset(_item);
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;

    classes.add(_copy || _item, 'gu-transit');
    renderMirrorImage();
    drag(e);
  }

  function canStart (item) {
    if (drake.dragging && _mirror) {
      return;
    }
    if (isContainer(item)) {
      return; // don't drag container itself
    }
    var handle = item;
    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }
      item = getParent(item); // drag target should be a top element
      if (!item) {
        return;
      }
    }
    var source = getParent(item);
    if (!source) {
      return;
    }
    if (o.invalid(item, handle)) {
      return;
    }

    var movable = o.moves(item, source, handle, nextEl(item));
    if (!movable) {
      return;
    }

    return {
      item: item,
      source: source
    };
  }

  function canMove (item) {
    return !!canStart(item);
  }

  function manualStart (item) {
    var context = canStart(item);
    if (context) {
      start(context);
    }
  }

  function start (context) {
    if (isCopy(context.item, context.source)) {
      _copy = context.item.cloneNode(true);
      drake.emit('cloned', _copy, context.item, 'copy');
    }

    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = nextEl(context.item);

    drake.dragging = true;
    drake.emit('drag', _item, _source);
  }

  function invalidTarget () {
    return false;
  }

  function end () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    drop(item, getParent(item));
  }

  function ungrab () {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }

  function release (e) {
    ungrab();

    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && ((_copy && o.copySortSource) || (!_copy || dropTarget !== _source))) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }

  function drop (item, target) {
    var parent = getParent(item);
    if (_copy && o.copySortSource && target === _source) {
      parent.removeChild(_item);
    }
    if (isInitialPlacement(target)) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, target, _source, _currentSibling);
    }
    cleanup();
  }

  function remove () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var parent = getParent(item);
    if (parent) {
      parent.removeChild(item);
    }
    drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
    cleanup();
  }

  function cancel (revert) {
    if (!drake.dragging) {
      return;
    }
    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
    var item = _copy || _item;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      if (_copy) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.insertBefore(item, _initialSibling);
      }
    }
    if (initial || reverts) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, parent, _source, _currentSibling);
    }
    cleanup();
  }

  function cleanup () {
    var item = _copy || _item;
    ungrab();
    removeMirrorImage();
    if (item) {
      classes.rm(item, 'gu-transit');
    }
    if (_renderTimer) {
      clearTimeout(_renderTimer);
    }
    drake.dragging = false;
    if (_lastDropTarget) {
      drake.emit('out', item, _lastDropTarget, _source);
    }
    drake.emit('dragend', item);
    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
  }

  function isInitialPlacement (target, s) {
    var sibling;
    if (s !== void 0) {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_copy || _item);
    }
    return target === _source && sibling === _initialSibling;
  }

  function findDropTarget (elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;

    function accepted () {
      var droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }

      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);
      if (initial) {
        return true; // should always be able to drop it right back where it was
      }
      return o.accepts(_item, target, _source, reference);
    }
  }

  function drag (e) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();

    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var x = clientX - _offsetX;
    var y = clientY - _offsetY;

    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';

    var item = _copy || _item;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      out();
      _lastDropTarget = dropTarget;
      over();
    }
    var parent = getParent(item);
    if (dropTarget === _source && _copy && !o.copySortSource) {
      if (parent) {
        parent.removeChild(item);
      }
      return;
    }
    var reference;
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else if (o.revertOnSpill === true && !_copy) {
      reference = _initialSibling;
      dropTarget = _source;
    } else {
      if (_copy && parent) {
        parent.removeChild(item);
      }
      return;
    }
    if (
      (reference === null && changed) ||
      reference !== item &&
      reference !== nextEl(item)
    ) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit('shadow', item, dropTarget, _source);
    }
    function moved (type) { drake.emit(type, item, _lastDropTarget, _source); }
    function over () { if (changed) { moved('over'); } }
    function out () { if (_lastDropTarget) { moved('out'); } }
  }

  function spillOver (el) {
    classes.rm(el, 'gu-hide');
  }

  function spillOut (el) {
    if (drake.dragging) { classes.add(el, 'gu-hide'); }
  }

  function renderMirrorImage () {
    if (_mirror) {
      return;
    }
    var rect = _item.getBoundingClientRect();
    _mirror = _item.cloneNode(true);
    _mirror.style.width = getRectWidth(rect) + 'px';
    _mirror.style.height = getRectHeight(rect) + 'px';
    classes.rm(_mirror, 'gu-transit');
    classes.add(_mirror, 'gu-mirror');
    o.mirrorContainer.appendChild(_mirror);
    touchy(documentElement, 'add', 'mousemove', drag);
    classes.add(o.mirrorContainer, 'gu-unselectable');
    drake.emit('cloned', _mirror, _item, 'mirror');
  }

  function removeMirrorImage () {
    if (_mirror) {
      classes.rm(o.mirrorContainer, 'gu-unselectable');
      touchy(documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }

  function getImmediateChild (dropTarget, target) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === documentElement) {
      return null;
    }
    return immediate;
  }

  function getReference (dropTarget, target, x, y) {
    var horizontal = o.direction === 'horizontal';
    var reference = target !== dropTarget ? inside() : outside();
    return reference;

    function outside () { // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;
      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && (rect.left + rect.width / 2) > x) { return el; }
        if (!horizontal && (rect.top + rect.height / 2) > y) { return el; }
      }
      return null;
    }

    function inside () { // faster, but only available if dropped inside a child element
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }

    function resolve (after) {
      return after ? nextEl(target) : target;
    }
  }

  function isCopy (item, container) {
    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
  }
}

function touchy (el, op, type, fn) {
  var touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove'
  };
  var pointers = {
    mouseup: 'pointerup',
    mousedown: 'pointerdown',
    mousemove: 'pointermove'
  };
  var microsoft = {
    mouseup: 'MSPointerUp',
    mousedown: 'MSPointerDown',
    mousemove: 'MSPointerMove'
  };
  if (global.navigator.pointerEnabled) {
    crossvent[op](el, pointers[type], fn);
  } else if (global.navigator.msPointerEnabled) {
    crossvent[op](el, microsoft[type], fn);
  } else {
    crossvent[op](el, touch[type], fn);
    crossvent[op](el, type, fn);
  }
}

function whichMouseButton (e) {
  if (e.touches !== void 0) { return e.touches.length; }
  if (e.which !== void 0 && e.which !== 0) { return e.which; } // see https://github.com/bevacqua/dragula/issues/261
  if (e.buttons !== void 0) { return e.buttons; }
  var button = e.button;
  if (button !== void 0) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
    return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
  }
}

function getOffset (el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  };
}

function getScroll (scrollProp, offsetProp) {
  if (typeof global[offsetProp] !== 'undefined') {
    return global[offsetProp];
  }
  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }
  return doc.body[scrollProp];
}

function getElementBehindPoint (point, x, y) {
  var p = point || {};
  var state = p.className;
  var el;
  p.className += ' gu-hide';
  el = doc.elementFromPoint(x, y);
  p.className = state;
  return el;
}

function never () { return false; }
function always () { return true; }
function getRectWidth (rect) { return rect.width || (rect.right - rect.left); }
function getRectHeight (rect) { return rect.height || (rect.bottom - rect.top); }
function getParent (el) { return el.parentNode === doc ? null : el.parentNode; }
function isInput (el) { return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el); }
function isEditable (el) {
  if (!el) { return false; } // no parents were editable
  if (el.contentEditable === 'false') { return false; } // stop the lookup
  if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain
  return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}

function nextEl (el) {
  return el.nextElementSibling || manually();
  function manually () {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}

function getEventHost (e) {
  // on touchend event, we have to use `e.changedTouches`
  // see http://stackoverflow.com/questions/7192563/touchend-event-properties
  // see https://github.com/bevacqua/dragula/issues/34
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}

function getCoord (coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: 'clientX', // IE8
    pageY: 'clientY' // IE8
  };
  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}

module.exports = dragula;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/ticky/ticky-browser.js":
/*!*********************************************!*\
  !*** ./node_modules/ticky/ticky-browser.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {var si = typeof setImmediate === 'function', tick;
if (si) {
  tick = function (fn) { setImmediate(fn); };
} else {
  tick = function (fn) { setTimeout(fn, 0); };
}

module.exports = tick;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXRvYS9hdG9hLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb250cmEvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbnRyYS9lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcm9zc3ZlbnQvc3JjL2Nyb3NzdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3Jvc3N2ZW50L3NyYy9ldmVudG1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3VzdG9tLWV2ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kcmFndWxhL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RyYWd1bGEvZHJhZ3VsYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aWNreS90aWNreS1icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOlsiTWJpekNtc0ZpZWxkcyIsImNvbmZpZyIsInRlbXBsYXRlUmVuZGVyIiwiZGVidWciLCJ0YXJnZXRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5lciIsImNvbnRhaW5lclNlbGVjdG9yIiwidWlFbGVtZW50cyIsInRyYW5zbGF0aW9ucyIsImxvZyIsImxlbmd0aCIsImlkIiwidWlFbGVtZW50Q29udGFpbmVyIiwiY2xhc3NlcyIsImRyb3BhYmxlQ29udGFpbmVyIiwiZHJhZ2dhYmxlQ29udGFpbmVyIiwiZHJhZ2dhYmxlSXRlbSIsImRyYWdnYWJsZUl0ZW1IYW5kbGVyIiwiZGVsZXRlQnV0dG9uIiwiaW5pdFVpRWxlbWVudHMiLCJ0YXJnZXQiLCJjb250ZW50IiwidmFsdWUiLCJqc29uQ29udGVudCIsIkpTT04iLCJwYXJzZSIsImUiLCJlcnJvciIsImluaXRGaWVsZCIsImluaXRBY3Rpb25zIiwidWlFbGVtZW50c0NvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0eXBlIiwidWlFbGVtZW50IiwicmVuZGVyZWRVaUVsZW1lbnQiLCJyZW5kZXJVaUVsZW1lbnQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJhcHBlbmRDaGlsZCIsInNldEF0dHJpYnV0ZSIsImVsZW1lbnRzQ29udGFpbmVyIiwidWlFbGVtZW50TWV0YURhdGEiLCJyZW5kZXJlZFVpRWxlbWVudE1ldGFEYXRhIiwicmVuZGVyVWlFbGVtZW50TWV0YURhdGEiLCJyZW5kZXJBY3Rpb25zQnV0dG9ucyIsInBhcmVudE5vZGUiLCJyZW9yZGVyIiwiaW5pdFJlb3JkZXIiLCJnZXRFbGVtZW50QnlJZCIsImluaXRSZW9yZGVyRXZlbnQiLCJkZWxldGVCdXR0b25zIiwiaW5pdERlbGV0ZUJ1dHRvbiIsIl9zZWxmIiwib25jbGljayIsImNvbmZpcm0iLCJjb25maXJtX2RlbGV0ZSIsImVsZW1lbnRUb1JlbW92ZSIsImNsb3Nlc3QiLCJyZW1vdmVkSW5kZXgiLCJnZXRFbGVtZW50SW5kZXgiLCJyZW1vdmVVaUVsZW1lbnQiLCJyZW1vdmUiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJlZGl0IiwicHJldmlldyIsIlVpRWxlbWVudHMiLCJkcmFrZSIsImRyYWd1bGEiLCJjb3B5IiwiZWwiLCJzb3VyY2UiLCJhY2NlcHRzIiwibW92ZXMiLCJoYW5kbGUiLCJjb250YWlucyIsIm9uIiwiaW5kZXgiLCJjdXJyZW50SW5kZXgiLCJ0YXJnZXRFbGVtZW50Iiwic2libGluZyIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJtb3ZlVWlFbGVtZW50Iiwic2xpY2UiLCJjYWxsIiwicGFyZW50RWxlbWVudCIsImNoaWxkcmVuIiwiaW5kZXhPZiIsImJlZm9yZU1vdmVKc29uIiwiayIsInB1c2giLCJ1bmRlZmluZWQiLCJzcGxpY2UiLCJzdHJpbmdpZnkiLCJhZnRlck1vdmVKc29uIiwibmV3VGFyZ2V0VmFsdWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjb25zb2xlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNtcyIsIm1vbnNpZXVyYml6Q21zUGx1Z2luQ29uZmlnIiwiaW5pdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUVBOzs7O0lBR01BLGE7OztBQUVGOzs7O0FBSUEseUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDaEI7QUFDQSxTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLEtBQUtELE1BQUwsQ0FBWUMsY0FBbEM7QUFDQSxTQUFLQyxLQUFMLEdBQWEsS0FBS0YsTUFBTCxDQUFZRSxLQUF6QjtBQUNBLFNBQUtDLE9BQUwsR0FBZUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQkwsTUFBTSxDQUFDTSxhQUFqQyxDQUFmO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkgsUUFBUSxDQUFDRSxhQUFULENBQXVCTixNQUFNLENBQUNRLGlCQUE5QixDQUFqQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsS0FBS1QsTUFBTCxDQUFZUyxVQUE5QjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsS0FBS1YsTUFBTCxDQUFZVSxZQUFoQzs7QUFDQSxRQUFJLEtBQUtSLEtBQVQsRUFBZ0I7QUFDWixXQUFLUyxHQUFMLENBQVMsd0JBQVQsRUFBbUMsS0FBS1gsTUFBeEM7QUFDQSxXQUFLVyxHQUFMLENBQVMsc0JBQVQsRUFBaUMsS0FBS1IsT0FBTCxDQUFhUyxNQUE5QztBQUNILEtBWmUsQ0FjaEI7OztBQUNBLFNBQUtDLEVBQUwsR0FBVTtBQUNOQyx3QkFBa0IsRUFBRTtBQURkLEtBQVY7QUFHQSxTQUFLQyxPQUFMLEdBQWU7QUFDWEQsd0JBQWtCLEVBQUUsZ0NBRFQ7QUFFWEUsdUJBQWlCLEVBQUUsNkJBRlI7QUFHWEMsd0JBQWtCLEVBQUUsOEJBSFQ7QUFJWEMsbUJBQWEsRUFBRSx5QkFKSjtBQUtYQywwQkFBb0IsRUFBRSxpQ0FMWDtBQU1YQyxrQkFBWSxFQUFFO0FBTkgsS0FBZjtBQVFIO0FBRUQ7Ozs7Ozs7MkJBR087QUFDSCxXQUFLQyxjQUFMLENBQW9CLEtBQUtkLFNBQXpCLEVBQW9DLEtBQUtFLFVBQXpDO0FBREc7QUFBQTtBQUFBOztBQUFBO0FBR0gsNkJBQW1CLEtBQUtOLE9BQXhCLDhIQUFpQztBQUFBLGNBQXhCbUIsTUFBd0I7QUFDN0IsY0FBSUMsT0FBTyxHQUFHRCxNQUFNLENBQUNFLEtBQXJCO0FBQ0EsZUFBS2IsR0FBTCxDQUFTLHFCQUFULEVBQWdDWSxPQUFoQztBQUNBLGNBQUlFLFdBQVcsU0FBZjs7QUFDQSxjQUFJO0FBQ0FBLHVCQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixPQUFYLENBQWQ7QUFDSCxXQUZELENBRUUsT0FBTUssQ0FBTixFQUFTO0FBQ1AsaUJBQUtDLEtBQUwsQ0FBVyxrREFBWCxFQUErRE4sT0FBL0Q7QUFDQTtBQUNIOztBQUNELGVBQUtPLFNBQUwsQ0FBZVIsTUFBZixFQUF1QkcsV0FBdkI7QUFDQSxlQUFLTSxXQUFMLENBQWlCVCxNQUFqQixFQUF5QkcsV0FBekI7QUFDSDtBQWZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQk47QUFFRDs7Ozs7Ozs7O21DQU1lSCxNLEVBQVFiLFUsRUFBWTtBQUMvQixXQUFLRSxHQUFMLENBQVMsb0JBQVQsRUFBK0JGLFVBQS9CLEVBRCtCLENBRy9COztBQUNBLFVBQU11QixtQkFBbUIsR0FBRzVCLFFBQVEsQ0FBQzZCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBNUI7QUFDQUQseUJBQW1CLENBQUNuQixFQUFwQixHQUF5QixLQUFLQSxFQUFMLENBQVFDLGtCQUFqQztBQUNBa0IseUJBQW1CLENBQUNFLFNBQXBCLENBQThCQyxHQUE5QixDQUFrQyxLQUFLcEIsT0FBTCxDQUFhQyxpQkFBL0MsRUFBa0UsS0FBS0QsT0FBTCxDQUFhRCxrQkFBL0U7O0FBRUEsVUFBSSxLQUFLYixjQUFMLEtBQXdCLFFBQTVCLEVBQXNDO0FBQ2xDK0IsMkJBQW1CLENBQUNFLFNBQXBCLENBQThCQyxHQUE5QixDQUFrQyxNQUFsQyxFQUEwQyxLQUFLcEIsT0FBTCxDQUFhQyxpQkFBdkQsRUFBMEUsS0FBS0QsT0FBTCxDQUFhRCxrQkFBdkY7QUFDSCxPQVY4QixDQVkvQjs7O0FBQ0EsVUFBSWUsS0FBSyxHQUFHLEtBQVo7O0FBQ0EsV0FBSyxJQUFJTyxJQUFULElBQWlCM0IsVUFBakIsRUFBNkI7QUFDekIsYUFBS0UsR0FBTCxDQUFTLG1CQUFULEVBQThCRixVQUFVLENBQUMyQixJQUFELENBQXhDO0FBRUEsWUFBSUMsU0FBUyxHQUFHNUIsVUFBVSxDQUFDMkIsSUFBRCxDQUExQjtBQUNBLFlBQUlFLGlCQUFpQixHQUFHLEtBQUtDLGVBQUwsQ0FBcUJGLFNBQXJCLEVBQWdDLEtBQUtwQyxjQUFyQyxDQUF4Qjs7QUFDQSxZQUFJcUMsaUJBQWlCLEtBQUssRUFBMUIsRUFBOEI7QUFDMUJULGVBQUssR0FBRyxJQUFSO0FBQ0E7QUFDSDs7QUFFREcsMkJBQW1CLENBQUNRLGtCQUFwQixDQUF1QyxXQUF2QyxFQUFvREYsaUJBQXBEO0FBQ0gsT0F6QjhCLENBMkIvQjs7O0FBQ0EsVUFBSSxDQUFDVCxLQUFMLEVBQVk7QUFDUlAsY0FBTSxDQUFDbUIsV0FBUCxDQUFtQlQsbUJBQW5CO0FBQ0g7QUFDSjtBQUVEOzs7Ozs7Ozs7OEJBTVVWLE0sRUFBUUcsVyxFQUFhO0FBQzNCLFdBQUtkLEdBQUwsQ0FBUyxrQ0FBVCxFQUE2Q2MsV0FBN0MsRUFEMkIsQ0FHM0I7O0FBQ0FILFlBQU0sQ0FBQ29CLFlBQVAsQ0FBb0IsUUFBcEIsRUFBOEIsTUFBOUIsRUFKMkIsQ0FNM0I7O0FBQ0EsVUFBTUMsaUJBQWlCLEdBQUd2QyxRQUFRLENBQUM2QixhQUFULENBQXVCLEtBQXZCLENBQTFCO0FBQ0FVLHVCQUFpQixDQUFDVCxTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsS0FBS3BCLE9BQUwsQ0FBYUUsa0JBQTdDLEVBQWlFLEtBQUtGLE9BQUwsQ0FBYUQsa0JBQTlFOztBQUVBLFVBQUksS0FBS2IsY0FBTCxLQUF3QixRQUE1QixFQUFzQztBQUNsQzBDLHlCQUFpQixDQUFDVCxTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsSUFBaEMsRUFBc0MsU0FBdEMsRUFBaUQsS0FBS3BCLE9BQUwsQ0FBYUUsa0JBQTlELEVBQWtGLEtBQUtGLE9BQUwsQ0FBYUQsa0JBQS9GO0FBQ0gsT0FaMEIsQ0FjM0I7OztBQUNBLFVBQUllLEtBQUssR0FBRyxLQUFaO0FBZjJCO0FBQUE7QUFBQTs7QUFBQTtBQWdCM0IsOEJBQXNCSixXQUF0QixtSUFBbUM7QUFBQSxjQUExQlksU0FBMEI7QUFDL0I7QUFDQSxlQUFLMUIsR0FBTCxDQUFTLG1CQUFULEVBQThCMEIsU0FBOUI7O0FBQ0EsY0FBSSxPQUFPLEtBQUs1QixVQUFMLENBQWdCNEIsU0FBUyxDQUFDRCxJQUExQixDQUFQLEtBQTJDLFdBQS9DLEVBQTREO0FBQ3hEUCxpQkFBSyxHQUFHLElBQVI7QUFDQSxpQkFBS0EsS0FBTCxDQUFXLDhCQUFYLEVBQTJDUSxTQUFTLENBQUNELElBQXJEO0FBQ0E7QUFDSCxXQVA4QixDQVMvQjs7O0FBQ0EsY0FBSVEsaUJBQWlCLEdBQUcsS0FBS25DLFVBQUwsQ0FBZ0I0QixTQUFTLENBQUNELElBQTFCLENBQXhCO0FBQ0EsZUFBS3pCLEdBQUwsQ0FBUyxxQ0FBVCxFQUFnRGlDLGlCQUFoRDtBQUNBLGNBQUlDLHlCQUF5QixHQUFHLEtBQUtDLHVCQUFMLENBQTZCRixpQkFBN0IsRUFBZ0QsS0FBSzNDLGNBQXJELENBQWhDOztBQUNBLGNBQUk0Qyx5QkFBeUIsS0FBSyxFQUFsQyxFQUFzQztBQUNsQ2hCLGlCQUFLLEdBQUcsSUFBUjtBQUNBO0FBQ0gsV0FoQjhCLENBa0IvQjs7O0FBQ0EsZUFBS2xCLEdBQUwsQ0FBUyxpQ0FBVCxFQUE0Q2tDLHlCQUE1QztBQUNBRiwyQkFBaUIsQ0FBQ0gsa0JBQWxCLENBQXFDLFdBQXJDLEVBQWtESyx5QkFBbEQ7QUFDSCxTQXJDMEIsQ0F1QzNCOztBQXZDMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF3QzNCRix1QkFBaUIsQ0FBQ0gsa0JBQWxCLENBQXFDLFlBQXJDLEVBQW1ELEtBQUtPLG9CQUFMLENBQTBCLEtBQUs5QyxjQUEvQixDQUFuRCxFQXhDMkIsQ0EwQzNCOztBQUNBLFVBQUksQ0FBQzRCLEtBQUwsRUFBWTtBQUNSUCxjQUFNLENBQUMwQixVQUFQLENBQWtCUCxXQUFsQixDQUE4QkUsaUJBQTlCO0FBQ0EsWUFBSU0sT0FBTyxHQUFHLEtBQUtDLFdBQUwsQ0FBaUI5QyxRQUFRLENBQUMrQyxjQUFULENBQXdCLEtBQUt0QyxFQUFMLENBQVFDLGtCQUFoQyxDQUFqQixFQUFzRTZCLGlCQUF0RSxDQUFkLENBRlEsQ0FHUjs7QUFDQSxhQUFLUyxnQkFBTCxDQUFzQkgsT0FBdEIsRUFBK0IzQixNQUEvQixFQUF1Q0csV0FBdkM7QUFDSDtBQUNKO0FBRUQ7Ozs7Ozs7OztnQ0FNWUgsTSxFQUFRRyxXLEVBQWE7QUFDN0I7QUFDQSxVQUFJNEIsYUFBYSxHQUFHakQsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixNQUFNLEtBQUtVLE9BQUwsQ0FBYUssWUFBN0MsQ0FBcEI7QUFDQSxXQUFLVCxHQUFMLENBQVMsaUNBQVQsRUFBNEMwQyxhQUFhLENBQUN6QyxNQUExRDtBQUg2QjtBQUFBO0FBQUE7O0FBQUE7QUFJN0IsOEJBQXlCeUMsYUFBekIsbUlBQXdDO0FBQUEsY0FBL0JqQyxZQUErQjtBQUNwQyxlQUFLa0MsZ0JBQUwsQ0FBc0JsQyxZQUF0QixFQUFvQ0ssV0FBcEMsRUFBaURILE1BQWpEO0FBQ0gsU0FONEIsQ0FRN0I7O0FBUjZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTaEM7QUFFRDs7Ozs7Ozs7cUNBS2lCRixZLEVBQWNLLFcsRUFBYUgsTSxFQUFRO0FBQ2hELFVBQUlpQyxLQUFLLEdBQUcsSUFBWjs7QUFDQW5DLGtCQUFZLENBQUNvQyxPQUFiLEdBQXVCLFlBQVc7QUFDOUIsWUFBSUMsT0FBTyxDQUFDRixLQUFLLENBQUM3QyxZQUFOLENBQW1CZ0QsY0FBcEIsQ0FBWCxFQUFnRDtBQUM1QyxjQUFJQyxlQUFlLEdBQUd2QyxZQUFZLENBQUN3QyxPQUFiLENBQXFCLE1BQU1MLEtBQUssQ0FBQ3hDLE9BQU4sQ0FBY0csYUFBekMsQ0FBdEI7O0FBQ0EsY0FBSTJDLFlBQVksR0FBR04sS0FBSyxDQUFDTyxlQUFOLENBQXNCSCxlQUF0QixDQUFuQjs7QUFDQUosZUFBSyxDQUFDUSxlQUFOLENBQXNCRixZQUF0QixFQUFvQ3BDLFdBQXBDLEVBQWlESCxNQUFqRDs7QUFDQXFDLHlCQUFlLENBQUNLLE1BQWhCO0FBQ0g7QUFDSixPQVBEO0FBUUg7QUFFRDs7Ozs7Ozs7b0NBS2dCcEIsaUIsRUFBbUIzQyxjLEVBQWdCO0FBQy9DLFVBQUlBLGNBQWMsS0FBSyxRQUF2QixFQUFpQztBQUM3QixrR0FFdUMyQyxpQkFBaUIsQ0FBQ3FCLEtBRnpEO0FBS0g7O0FBRUQsV0FBS3BDLEtBQUwsQ0FBVywyQkFBWCxFQUF3QzVCLGNBQXhDO0FBQ0EsYUFBTyxFQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7NENBS3dCMkMsaUIsRUFBbUIzQyxjLEVBQWdCO0FBQ3ZELFVBQUlBLGNBQWMsS0FBSyxRQUF2QixFQUFpQztBQUM3QixzRUFDZ0MsS0FBS2MsT0FBTCxDQUFhRyxhQUQ3Qyx1RkFFMEQsS0FBS0gsT0FBTCxDQUFhSSxvQkFGdkUsaUVBRThJLEtBQUtKLE9BQUwsQ0FBYUksb0JBRjNKLDBMQUsrQ3lCLGlCQUFpQixDQUFDcUIsS0FMakUsNExBUW9DckIsaUJBQWlCLENBQUNzQixLQVJ0RCwrQ0FTaUJ0QixpQkFBaUIsQ0FBQ3VCLFdBVG5DLCtJQVcwRCxLQUFLekQsWUFBTCxDQUFrQjBELElBWDVFLHVGQVlvRCxLQUFLckQsT0FBTCxDQUFhSyxZQVpqRSxnQ0FZZ0csS0FBS1YsWUFBTCxVQVpoRztBQWtCSDs7QUFFRCxXQUFLbUIsS0FBTCxDQUFXLDJCQUFYLEVBQXdDNUIsY0FBeEM7QUFDQSxhQUFPLEVBQVA7QUFDSDtBQUVEOzs7Ozs7eUNBR3FCQSxjLEVBQWdCO0FBQ2pDLFVBQUlBLGNBQWMsS0FBSyxRQUF2QixFQUFpQztBQUM3QixrTEFHMEQsS0FBS1MsWUFBTCxPQUgxRCx3RkFJa0QsS0FBS0EsWUFBTCxDQUFrQjJELE9BSnBFO0FBUUg7O0FBRUQsV0FBS3hDLEtBQUwsQ0FBVywyQkFBWCxFQUF3QzVCLGNBQXhDO0FBQ0EsYUFBTyxFQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7Z0NBS1lxRSxVLEVBQVkzQixpQixFQUFtQjtBQUN2QyxVQUFJWSxLQUFLLEdBQUcsSUFBWjs7QUFDQSxVQUFJZ0IsS0FBSyxHQUFHLElBQUlDLDhDQUFKLENBQVksQ0FBQ0YsVUFBRCxFQUFhM0IsaUJBQWIsQ0FBWixFQUE2QztBQUNyRDhCLFlBQUksRUFBRSxjQUFVQyxFQUFWLEVBQWNDLE1BQWQsRUFBc0I7QUFDeEIsaUJBQU9BLE1BQU0sS0FBS0wsVUFBbEI7QUFDSCxTQUhvRDtBQUlyRE0sZUFBTyxFQUFFLGlCQUFVRixFQUFWLEVBQWNwRCxNQUFkLEVBQXNCO0FBQzNCLGlCQUFPQSxNQUFNLEtBQUtnRCxVQUFsQjtBQUNILFNBTm9EO0FBT3JETyxhQUFLLEVBQUUsZUFBVUgsRUFBVixFQUFjbkUsU0FBZCxFQUF5QnVFLE1BQXpCLEVBQWlDO0FBQ3BDLGlCQUFPQSxNQUFNLENBQUM1QyxTQUFQLENBQWlCNkMsUUFBakIsQ0FBMEJ4QixLQUFLLENBQUN4QyxPQUFOLENBQWNJLG9CQUF4QyxDQUFQO0FBQ0g7QUFUb0QsT0FBN0MsQ0FBWjtBQVdBLGFBQU9vRCxLQUFQO0FBQ0g7OzttQ0FFY0QsVSxFQUFZM0IsaUIsRUFBbUI7QUFDMUMsVUFBSTRCLEtBQUssR0FBRyxJQUFJQyw4Q0FBSixDQUFZLENBQUNGLFVBQUQsRUFBYTNCLGlCQUFiLENBQVosRUFBNkM7QUFDckQ4QixZQUFJLEVBQUUsY0FBVUMsRUFBVixFQUFjQyxNQUFkLEVBQXNCO0FBQ3hCLGlCQUFPQSxNQUFNLEtBQUtMLFVBQWxCO0FBQ0gsU0FIb0Q7QUFJckRNLGVBQU8sRUFBRSxpQkFBVUYsRUFBVixFQUFjcEQsTUFBZCxFQUFzQjtBQUMzQixpQkFBT0EsTUFBTSxLQUFLZ0QsVUFBbEI7QUFDSDtBQU5vRCxPQUE3QyxDQUFaO0FBUUEsYUFBT0MsS0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7Ozs7cUNBT2lCQSxLLEVBQU9qRCxNLEVBQVFHLFcsRUFBYTtBQUFBOztBQUN6QzhDLFdBQUssQ0FBQ1MsRUFBTixDQUFTLE1BQVQsRUFBaUIsVUFBQ04sRUFBRCxFQUFLQyxNQUFMLEVBQWdCO0FBQzdCLFlBQU1NLEtBQUssR0FBRyxLQUFJLENBQUNuQixlQUFMLENBQXFCWSxFQUFyQixDQUFkOztBQUNBLGFBQUksQ0FBQy9ELEdBQUwsQ0FBUyxlQUFULEVBQTBCO0FBQUNzRSxlQUFLLEVBQUVBLEtBQVI7QUFBZVAsWUFBRSxFQUFFQSxFQUFuQjtBQUF1QkMsZ0JBQU0sRUFBRUE7QUFBL0IsU0FBMUI7O0FBQ0EsYUFBSSxDQUFDTyxZQUFMLEdBQW9CRCxLQUFwQjtBQUNILE9BSkQ7QUFLQVYsV0FBSyxDQUFDUyxFQUFOLENBQVMsTUFBVCxFQUFpQixVQUFDTixFQUFELEVBQUtTLGFBQUwsRUFBb0JSLE1BQXBCLEVBQTRCUyxPQUE1QixFQUF3QztBQUNyRCxZQUFNQyxRQUFRLEdBQUcsS0FBSSxDQUFDSCxZQUF0Qjs7QUFDQSxZQUFNSSxRQUFRLEdBQUcsS0FBSSxDQUFDeEIsZUFBTCxDQUFxQlksRUFBckIsQ0FBakI7O0FBQ0EsYUFBSSxDQUFDL0QsR0FBTCxDQUFTLGNBQVQsRUFBeUI7QUFBQzBFLGtCQUFRLEVBQUVBLFFBQVg7QUFBcUJDLGtCQUFRLEVBQUVBLFFBQS9CO0FBQXlDWixZQUFFLEVBQUVBLEVBQTdDO0FBQWlEUyx1QkFBYSxFQUFFQSxhQUFoRTtBQUErRVIsZ0JBQU0sRUFBRUEsTUFBdkY7QUFBK0ZTLGlCQUFPLEVBQUVBO0FBQXhHLFNBQXpCOztBQUNBLGFBQUksQ0FBQ0csYUFBTCxDQUFtQkYsUUFBbkIsRUFBNkJDLFFBQTdCLEVBQXVDN0QsV0FBdkMsRUFBb0RILE1BQXBEO0FBQ0gsT0FMRDtBQU1IO0FBRUQ7Ozs7Ozs7OztvQ0FNZ0JvRCxFLEVBQUk7QUFDaEIsYUFBTyxHQUFHYyxLQUFILENBQVNDLElBQVQsQ0FBY2YsRUFBRSxDQUFDZ0IsYUFBSCxDQUFpQkMsUUFBL0IsRUFBeUNDLE9BQXpDLENBQWlEbEIsRUFBakQsQ0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7Ozs7O2tDQVFjVyxRLEVBQVVDLFEsRUFBVTdELFcsRUFBYUgsTSxFQUFRO0FBQ25ELFVBQUkrRCxRQUFRLEtBQUtDLFFBQWpCLEVBQTJCO0FBQ3ZCLGFBQUszRSxHQUFMLENBQVMsb0JBQVQsRUFBK0I7QUFBQzBFLGtCQUFRLEVBQUVBLFFBQVg7QUFBcUJDLGtCQUFRLEVBQUVBLFFBQS9CO0FBQXlDaEUsZ0JBQU0sRUFBRUEsTUFBakQ7QUFBeUR1RSx3QkFBYyxFQUFFcEU7QUFBekUsU0FBL0I7O0FBQ0EsWUFBSTZELFFBQVEsSUFBSTdELFdBQVcsQ0FBQ2IsTUFBNUIsRUFBb0M7QUFDaEMsY0FBSWtGLENBQUMsR0FBR1IsUUFBUSxHQUFHN0QsV0FBVyxDQUFDYixNQUF2QixHQUFnQyxDQUF4Qzs7QUFDQSxpQkFBT2tGLENBQUMsRUFBUixFQUFZO0FBQ1JyRSx1QkFBVyxDQUFDc0UsSUFBWixDQUFpQkMsU0FBakIsRUFEUSxDQUNxQjtBQUNoQztBQUNKOztBQUNEdkUsbUJBQVcsQ0FBQ3dFLE1BQVosQ0FBbUJYLFFBQW5CLEVBQTZCLENBQTdCLEVBQWdDN0QsV0FBVyxDQUFDd0UsTUFBWixDQUFtQlosUUFBbkIsRUFBNkIsQ0FBN0IsRUFBZ0MsQ0FBaEMsQ0FBaEM7QUFDQS9ELGNBQU0sQ0FBQ0UsS0FBUCxHQUFlRSxJQUFJLENBQUN3RSxTQUFMLENBQWV6RSxXQUFmLENBQWY7QUFDQSxhQUFLZCxHQUFMLENBQVMscUJBQVQsRUFBZ0M7QUFBQ3dGLHVCQUFhLEVBQUUxRSxXQUFoQjtBQUE2QjJFLHdCQUFjLEVBQUU5RSxNQUFNLENBQUNFO0FBQXBELFNBQWhDO0FBQ0gsT0FYRCxNQVdPO0FBQ0gsYUFBS2IsR0FBTCxDQUFTLGtDQUFULEVBQTZDO0FBQUMwRSxrQkFBUSxFQUFFQSxRQUFYO0FBQXFCQyxrQkFBUSxFQUFFQSxRQUEvQjtBQUF5Q2hFLGdCQUFNLEVBQUVBLE1BQWpEO0FBQXlEdUUsd0JBQWMsRUFBRXBFO0FBQXpFLFNBQTdDO0FBQ0g7QUFDSjtBQUVEOzs7Ozs7Ozs7O29DQU9nQm9DLFksRUFBY3BDLFcsRUFBYUgsTSxFQUFRO0FBQy9DLFdBQUtYLEdBQUwsQ0FBUyxzQkFBVCxFQUFpQztBQUFDa0Qsb0JBQVksRUFBRUEsWUFBZjtBQUE2QnZDLGNBQU0sRUFBRUEsTUFBckM7QUFBNkN1RSxzQkFBYyxFQUFFcEU7QUFBN0QsT0FBakM7QUFDQUEsaUJBQVcsQ0FBQ3dFLE1BQVosQ0FBbUJwQyxZQUFuQixFQUFpQyxDQUFqQztBQUNBdkMsWUFBTSxDQUFDRSxLQUFQLEdBQWVFLElBQUksQ0FBQ3dFLFNBQUwsQ0FBZXpFLFdBQWYsQ0FBZjtBQUNBLFdBQUtkLEdBQUwsQ0FBUyx1QkFBVCxFQUFrQztBQUFDd0YscUJBQWEsRUFBRTFFLFdBQWhCO0FBQTZCMkUsc0JBQWMsRUFBRTlFLE1BQU0sQ0FBQ0U7QUFBcEQsT0FBbEM7QUFDSDtBQUVEOzs7Ozs7Ozs7MEJBTU0yQyxXLEVBQWE1QyxPLEVBQVM7QUFDeEI7QUFEd0I7QUFBQTtBQUFBOztBQUFBO0FBRXhCLDhCQUFtQixLQUFLcEIsT0FBeEIsbUlBQWlDO0FBQUEsY0FBeEJtQixNQUF3QjtBQUM3QkEsZ0JBQU0sQ0FBQytFLGVBQVAsQ0FBdUIsUUFBdkI7QUFDSCxTQUp1QixDQUt4Qjs7QUFMd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFNeEIsOEJBQW1CakcsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixNQUFNLEtBQUtVLE9BQUwsQ0FBYUQsa0JBQTdDLENBQW5CLG1JQUFxRjtBQUFBLGNBQTVFUSxPQUE0RTs7QUFDakZBLGlCQUFNLENBQUMwQyxNQUFQO0FBQ0g7QUFSdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVeEIsVUFBSSxLQUFLOUQsS0FBVCxFQUFnQjtBQUNab0csZUFBTyxDQUFDekUsS0FBUixDQUFjc0MsV0FBZDtBQUNBbUMsZUFBTyxDQUFDekUsS0FBUixDQUFjTixPQUFkO0FBQ0g7QUFDSjtBQUVEOzs7Ozs7Ozs7d0JBTUk0QyxXLEVBQWE1QyxPLEVBQVM7QUFDdEIsVUFBSSxLQUFLckIsS0FBVCxFQUFnQjtBQUNab0csZUFBTyxDQUFDM0YsR0FBUixDQUFZd0QsV0FBWjtBQUNBbUMsZUFBTyxDQUFDM0YsR0FBUixDQUFZWSxPQUFaO0FBQ0g7QUFDSjs7OztLQUdMOzs7QUFDQW5CLFFBQVEsQ0FBQ21HLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQUlDLEdBQUcsR0FBRyxJQUFJekcsYUFBSixDQUFrQjBHLDBCQUFsQixDQUFWO0FBQ0FELEtBQUcsQ0FBQ0UsSUFBSjtBQUNILENBSEQsRTs7Ozs7Ozs7Ozs7QUM5WUEsdUNBQXVDLHlDQUF5Qzs7Ozs7Ozs7Ozs7OztBQ0FuRTs7QUFFYixZQUFZLG1CQUFPLENBQUMsb0RBQU87O0FBRTNCO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYixXQUFXLG1CQUFPLENBQUMseUNBQU07QUFDekIsZUFBZSxtQkFBTyxDQUFDLHFEQUFZOztBQUVuQztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsWUFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLGdCQUFnQixjQUFjO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLDBDQUEwQztBQUM5RztBQUNBLHlCQUF5Qiw2QkFBNkIsRUFBRSxPQUFPLHlCQUF5QjtBQUN4RiwyQkFBMkIseUJBQXlCO0FBQ3BELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckRBLDhDQUFhOztBQUViLGtCQUFrQixtQkFBTyxDQUFDLDBEQUFjO0FBQ3hDLGVBQWUsbUJBQU8sQ0FBQyw0REFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGdCQUFnQjtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLHVCQUF1QjtBQUM5RiwwRUFBMEUsdUJBQXVCO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEdBLDhDQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ1hBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsVUFBVSxhQUFhLEVBQUU7QUFDbkU7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvQ2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQ0EsOENBQWE7O0FBRWIsY0FBYyxtQkFBTyxDQUFDLHdEQUFnQjtBQUN0QyxnQkFBZ0IsbUJBQU8sQ0FBQyw0REFBVztBQUNuQyxjQUFjLG1CQUFPLENBQUMsb0RBQVc7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsY0FBYztBQUNkLFlBQVk7QUFDWixlQUFlO0FBQ2YsZUFBZTtBQUNmLGFBQWE7QUFDYixhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0QixZQUFZO0FBQ1osbUJBQW1CO0FBQ25CLDZCQUE2QjtBQUM3QixlQUFlOztBQUVmO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3Qyw2QkFBNkIsb0JBQW9CO0FBQ2pELDZCQUE2QiwyQkFBMkI7QUFDeEQsZ0NBQWdDLHdDQUF3QztBQUN4RSxpQ0FBaUMsdUJBQXVCO0FBQ3hELDBCQUEwQixnQkFBZ0I7QUFDMUMsb0NBQW9DLDBCQUEwQjtBQUM5RCxtQ0FBbUMseUJBQXlCO0FBQzVELG1DQUFtQyx5QkFBeUI7QUFDNUQsK0JBQStCLDBCQUEwQjtBQUN6RCw4Q0FBOEMsbUNBQW1DO0FBQ2pGLHFDQUFxQyw4QkFBOEI7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLHFCQUFxQjtBQUNyQixPQUFPO0FBQ1AsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrREFBa0Q7QUFDN0Usc0JBQXNCLGVBQWUsZUFBZSxFQUFFO0FBQ3RELHFCQUFxQix1QkFBdUIsY0FBYyxFQUFFO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qiw0QkFBNEI7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBLDZEQUE2RCxXQUFXO0FBQ3hFLDhEQUE4RCxXQUFXO0FBQ3pFO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2Qix5QkFBeUI7QUFDdEQsNENBQTRDLGdCQUFnQixFQUFFO0FBQzlELDZCQUE2QixrQkFBa0I7QUFDL0M7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGNBQWM7QUFDakMsb0JBQW9CLGFBQWE7QUFDakMsOEJBQThCLCtDQUErQztBQUM3RSwrQkFBK0IsZ0RBQWdEO0FBQy9FLHlCQUF5QixxREFBcUQ7QUFDOUUsdUJBQXVCLHlHQUF5RztBQUNoSTtBQUNBLFlBQVksY0FBYyxFQUFFO0FBQzVCLHVDQUF1QyxjQUFjLEVBQUU7QUFDdkQsc0NBQXNDLGFBQWEsRUFBRTtBQUNyRCxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQy9sQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsc0JBQXNCLEVBQUU7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6TEQ7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUMsQ0FBQztBQUNELHdCQUF3QixtQkFBbUI7QUFDM0M7O0FBRUEsc0I7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxtQkFBTyxDQUFDLGlFQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoianMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvcHVibGljL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9hcHAuanNcIik7XG4iLCJpbXBvcnQgZHJhZ3VsYSBmcm9tICdkcmFndWxhJztcblxuLyoqXG4gKiBDbGFzcyB0byBtYW5hZ2UgQ01TIGZpZWxkcyB3aXRoIFVJIEVsZW1lbnRzXG4gKi9cbmNsYXNzIE1iaXpDbXNGaWVsZHMge1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgZm9yIE1iaXpDbXNGaWVsZHMsIHNlZSBjb25maWcgaW4gYHNyYy9SZXNvdXJjZXMvdmlld3MvQWRtaW4vYXBwX2phdmFzY3JpcHQuaHRtbC50d2lnYFxuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgLy8gQ29uZmlndXJhdGlvbiBvZiBwbHVnaW5cbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMudGVtcGxhdGVSZW5kZXIgPSB0aGlzLmNvbmZpZy50ZW1wbGF0ZVJlbmRlcjtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IHRoaXMuY29uZmlnLmRlYnVnO1xuICAgICAgICB0aGlzLnRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZy5xdWVyeVNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5jb250YWluZXJTZWxlY3Rvcik7XG4gICAgICAgIHRoaXMudWlFbGVtZW50cyA9IHRoaXMuY29uZmlnLnVpRWxlbWVudHM7XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb25zID0gdGhpcy5jb25maWcudHJhbnNsYXRpb25zO1xuICAgICAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgICAgICAgdGhpcy5sb2coJ1BsdWdpbiBjb25maWd1cmF0aW9uIDonLCB0aGlzLmNvbmZpZyk7XG4gICAgICAgICAgICB0aGlzLmxvZygnTWF0Y2hlZCBlbGVtZW50KHMpIDonLCB0aGlzLnRhcmdldHMubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEludGVybmFsIGF0dHJpYnV0ZXNcbiAgICAgICAgdGhpcy5pZCA9IHtcbiAgICAgICAgICAgIHVpRWxlbWVudENvbnRhaW5lcjogJ21iaXotY21zLWVsZW1lbnRzLWNvbnRhaW5lcicsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGFzc2VzID0ge1xuICAgICAgICAgICAgdWlFbGVtZW50Q29udGFpbmVyOiAnbWJpei1jbXMtY29tcG9uZW50LXVpLWVsZW1lbnRzJyxcbiAgICAgICAgICAgIGRyb3BhYmxlQ29udGFpbmVyOiAnbWJpei1jbXMtZHJvcGFibGUtY29udGFpbmVyJyxcbiAgICAgICAgICAgIGRyYWdnYWJsZUNvbnRhaW5lcjogJ21iaXotY21zLWRyYWdnYWJsZS1jb250YWluZXInLFxuICAgICAgICAgICAgZHJhZ2dhYmxlSXRlbTogJ21iaXotY21zLWRyYWdnYWJsZS1pdGVtJyxcbiAgICAgICAgICAgIGRyYWdnYWJsZUl0ZW1IYW5kbGVyOiAnbWJpei1jbXMtZHJhZ2dhYmxlLWl0ZW0taGFuZGxlcicsXG4gICAgICAgICAgICBkZWxldGVCdXR0b246ICdtYml6LWNtcy1kZWxldGUtYnV0dG9uJyxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgZWFjaCBDTVMgZWxlbWVudFxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdFVpRWxlbWVudHModGhpcy5jb250YWluZXIsIHRoaXMudWlFbGVtZW50cyk7XG5cbiAgICAgICAgZm9yIChsZXQgdGFyZ2V0IG9mIHRoaXMudGFyZ2V0cykge1xuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSB0YXJnZXQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmxvZygnVGFyZ2V0XFwncyBjb250ZW50IDonLCBjb250ZW50KTtcbiAgICAgICAgICAgIGxldCBqc29uQ29udGVudDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAganNvbkNvbnRlbnQgPSBKU09OLnBhcnNlKGNvbnRlbnQpO1xuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcignVW5hYmxlIHRvIHBhcnNlIHRoZSBDTVMgSlNPTiBmb3IgdGhpcyBjb250ZW50IDogJywgY29udGVudCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluaXRGaWVsZCh0YXJnZXQsIGpzb25Db250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuaW5pdEFjdGlvbnModGFyZ2V0LCBqc29uQ29udGVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IHRoZSBVSSBFbGVtZW50cyBhcmVhXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHVpRWxlbWVudHNcbiAgICAgKi9cbiAgICBpbml0VWlFbGVtZW50cyh0YXJnZXQsIHVpRWxlbWVudHMpIHtcbiAgICAgICAgdGhpcy5sb2coJ0luaXQgVUkgRWxlbWVudHMgOicsIHVpRWxlbWVudHMpO1xuXG4gICAgICAgIC8vIEluaXQgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IHVpRWxlbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdWlFbGVtZW50c0NvbnRhaW5lci5pZCA9IHRoaXMuaWQudWlFbGVtZW50Q29udGFpbmVyO1xuICAgICAgICB1aUVsZW1lbnRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmRyb3BhYmxlQ29udGFpbmVyLCB0aGlzLmNsYXNzZXMudWlFbGVtZW50Q29udGFpbmVyKTtcblxuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZVJlbmRlciA9PT0gJ3N5bGl1cycpIHtcbiAgICAgICAgICAgIHVpRWxlbWVudHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWJpeicsIHRoaXMuY2xhc3Nlcy5kcm9wYWJsZUNvbnRhaW5lciwgdGhpcy5jbGFzc2VzLnVpRWxlbWVudENvbnRhaW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMb29wIG9uIFVJIEVsZW1lbnRzXG4gICAgICAgIGxldCBlcnJvciA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCB0eXBlIGluIHVpRWxlbWVudHMpIHtcbiAgICAgICAgICAgIHRoaXMubG9nKCdJbml0IFVJIEVsZW1lbnQgOicsIHVpRWxlbWVudHNbdHlwZV0pO1xuXG4gICAgICAgICAgICBsZXQgdWlFbGVtZW50ID0gdWlFbGVtZW50c1t0eXBlXVxuICAgICAgICAgICAgbGV0IHJlbmRlcmVkVWlFbGVtZW50ID0gdGhpcy5yZW5kZXJVaUVsZW1lbnQodWlFbGVtZW50LCB0aGlzLnRlbXBsYXRlUmVuZGVyKTtcbiAgICAgICAgICAgIGlmIChyZW5kZXJlZFVpRWxlbWVudCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVpRWxlbWVudHNDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCByZW5kZXJlZFVpRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBcHBlbmQgZ2VuZXJhdGVkIEhUTUwgdG8gZGlzcGxheSBjdXJyZW50IFVJIEVsZW1lbnRzIG9mIHRhcmdldFxuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQodWlFbGVtZW50c0NvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IHRoZSBmaWVsZCBkZXBlbmRpbmcgb24gaXQncyBwYXJzZWQgY29udGVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqIEBwYXJhbSBqc29uQ29udGVudCBbe3R5cGU6IFwiVUkgRWxlbWVudCBUeXBlXCIsIGZpZWxkczoge319XVxuICAgICAqL1xuICAgIGluaXRGaWVsZCh0YXJnZXQsIGpzb25Db250ZW50KSB7XG4gICAgICAgIHRoaXMubG9nKCdJbml0IGZpZWxkIHdpdGggcGFyc2VkIGNvbnRlbnQgOicsIGpzb25Db250ZW50KTtcblxuICAgICAgICAvLyBIaWRlIG9yaWdpbmFsIGlucHV0XG4gICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgLy8gSW5pdCBjb250YWluZXJcbiAgICAgICAgY29uc3QgZWxlbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuZHJhZ2dhYmxlQ29udGFpbmVyLCB0aGlzLmNsYXNzZXMudWlFbGVtZW50Q29udGFpbmVyKTtcblxuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZVJlbmRlciA9PT0gJ3N5bGl1cycpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3VpJywgJ3NlZ21lbnQnLCB0aGlzLmNsYXNzZXMuZHJhZ2dhYmxlQ29udGFpbmVyLCB0aGlzLmNsYXNzZXMudWlFbGVtZW50Q29udGFpbmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExvb3Agb24gVUkgRWxlbWVudHNcbiAgICAgICAgbGV0IGVycm9yID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IHVpRWxlbWVudCBvZiBqc29uQ29udGVudCkge1xuICAgICAgICAgICAgLy8gUmV0cmlldmUgdGhlIFVpIEVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgdGhpcy5sb2coJ0luaXQgVUkgRWxlbWVudCA6JywgdWlFbGVtZW50KTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy51aUVsZW1lbnRzW3VpRWxlbWVudC50eXBlXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcignQ2Fubm90IGZpbmQgZWxlbWVudCBvZiB0eXBlICcsIHVpRWxlbWVudC50eXBlKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVuZGVyIFVpIEVsZW1lbnQgbWV0YSBkYXRhXG4gICAgICAgICAgICBsZXQgdWlFbGVtZW50TWV0YURhdGEgPSB0aGlzLnVpRWxlbWVudHNbdWlFbGVtZW50LnR5cGVdO1xuICAgICAgICAgICAgdGhpcy5sb2coJ01hdGNoZWQgVWkgRWxlbWVudCB3aXRoIG1ldGEgZGF0YSA6JywgdWlFbGVtZW50TWV0YURhdGEpO1xuICAgICAgICAgICAgbGV0IHJlbmRlcmVkVWlFbGVtZW50TWV0YURhdGEgPSB0aGlzLnJlbmRlclVpRWxlbWVudE1ldGFEYXRhKHVpRWxlbWVudE1ldGFEYXRhLCB0aGlzLnRlbXBsYXRlUmVuZGVyKTtcbiAgICAgICAgICAgIGlmIChyZW5kZXJlZFVpRWxlbWVudE1ldGFEYXRhID09PSAnJykge1xuICAgICAgICAgICAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkIHJlbmRlcmVkIFVpIEVsZW1lbnQgbWV0YSBkYXRhIGluIGNvbnRhaW5lclxuICAgICAgICAgICAgdGhpcy5sb2coJ1JlbmRlcmVkIFVpIEVsZW1lbnQgbWV0YSBkYXRhIDonLCByZW5kZXJlZFVpRWxlbWVudE1ldGFEYXRhKTtcbiAgICAgICAgICAgIGVsZW1lbnRzQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcmVuZGVyZWRVaUVsZW1lbnRNZXRhRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcmVwZW5kIGFjdGlvbnMgYnV0dG9ucyBpbiBjb250YWluZXJcbiAgICAgICAgZWxlbWVudHNDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy5yZW5kZXJBY3Rpb25zQnV0dG9ucyh0aGlzLnRlbXBsYXRlUmVuZGVyKSk7XG5cbiAgICAgICAgLy8gQXBwZW5kIGdlbmVyYXRlZCBIVE1MIHRvIGRpc3BsYXkgY3VycmVudCBVSSBFbGVtZW50cyBvZiB0YXJnZXRcbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZWxlbWVudHNDb250YWluZXIpO1xuICAgICAgICAgICAgbGV0IHJlb3JkZXIgPSB0aGlzLmluaXRSZW9yZGVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQudWlFbGVtZW50Q29udGFpbmVyKSwgZWxlbWVudHNDb250YWluZXIpO1xuICAgICAgICAgICAgLy8gdGhpcy5pbml0RHJhZ1RvQ29weShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkLnVpRWxlbWVudENvbnRhaW5lciksIGVsZW1lbnRzQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFJlb3JkZXJFdmVudChyZW9yZGVyLCB0YXJnZXQsIGpzb25Db250ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgYWN0aW9uIGZvciBlYWNoIGVsZW1lbnQsIGN1cnJlbnQgYWN0aW9ucyBhcmUgdXBkYXRlIGFuZCBkZWxldGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0YXJnZXRcbiAgICAgKiBAcGFyYW0ganNvbkNvbnRlbnRcbiAgICAgKi9cbiAgICBpbml0QWN0aW9ucyh0YXJnZXQsIGpzb25Db250ZW50KSB7XG4gICAgICAgIC8vIEluaXQgRGVsZXRlXG4gICAgICAgIGxldCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLmNsYXNzZXMuZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgdGhpcy5sb2coJ0luaXQgZGVsZXRlIGJ1dHRvbihzKSwgZm91bmQgOiAnLCBkZWxldGVCdXR0b25zLmxlbmd0aClcbiAgICAgICAgZm9yIChsZXQgZGVsZXRlQnV0dG9uIG9mIGRlbGV0ZUJ1dHRvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdERlbGV0ZUJ1dHRvbihkZWxldGVCdXR0b24sIGpzb25Db250ZW50LCB0YXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQFRPRE8gSW5pdCB1cGRhdGVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsIHJlbW92ZSBVSSBFbGVtZW50IG9uIGNsaWNrIGFmdGVyIGNvbmZpcm1cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkZWxldGVCdXR0b25cbiAgICAgKi9cbiAgICBpbml0RGVsZXRlQnV0dG9uKGRlbGV0ZUJ1dHRvbiwganNvbkNvbnRlbnQsIHRhcmdldCkge1xuICAgICAgICBsZXQgX3NlbGYgPSB0aGlzO1xuICAgICAgICBkZWxldGVCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGNvbmZpcm0oX3NlbGYudHJhbnNsYXRpb25zLmNvbmZpcm1fZGVsZXRlKSkge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50VG9SZW1vdmUgPSBkZWxldGVCdXR0b24uY2xvc2VzdCgnLicgKyBfc2VsZi5jbGFzc2VzLmRyYWdnYWJsZUl0ZW0pO1xuICAgICAgICAgICAgICAgIGxldCByZW1vdmVkSW5kZXggPSBfc2VsZi5nZXRFbGVtZW50SW5kZXgoZWxlbWVudFRvUmVtb3ZlKTtcbiAgICAgICAgICAgICAgICBfc2VsZi5yZW1vdmVVaUVsZW1lbnQocmVtb3ZlZEluZGV4LCBqc29uQ29udGVudCwgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9SZW1vdmUucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIG1hcmt1cCB0byBkaXNwbGF5IFVJIEVsZW1lbnQgZGVwZW5kaW5nIG9uIHJlbmRlclxuICAgICAqXG4gICAgICogQHBhcmFtIHVpRWxlbWVudE1ldGFEYXRhIHtzaG9ydF9kZXNjcmlwdGlvbjogXCJTaG9ydCBkZXNjcmlwdGlvblwiLCBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvblwiLCB0aXRsZTogXCJUaXRsZVwiLCBpbWFnZTogXCIvcGF0aC90by9pbWFnZS5qcGdcIn1cbiAgICAgKi9cbiAgICByZW5kZXJVaUVsZW1lbnQodWlFbGVtZW50TWV0YURhdGEsIHRlbXBsYXRlUmVuZGVyKSB7XG4gICAgICAgIGlmICh0ZW1wbGF0ZVJlbmRlciA9PT0gJ3N5bGl1cycpIHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ1aSBzbWFsbCBpbWFnZVwiIHNyYz1cIiR7dWlFbGVtZW50TWV0YURhdGEuaW1hZ2V9XCIgYWx0PVwiXCIgd2lkdGg9XCIxNTBcIiBoZWlnaHQ9XCIxNTBcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXJyb3IoJ0Nhbm5vdCBmaW5kIHJlbmRlciBmb3IgOiAnLCB0ZW1wbGF0ZVJlbmRlcik7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gbWFya3VwIHRvIGRpc3BsYXkgVUkgRWxlbWVudCBtZXRhIGRhdGEgZGVwZW5kaW5nIG9uIHJlbmRlclxuICAgICAqXG4gICAgICogQHBhcmFtIHVpRWxlbWVudE1ldGFEYXRhIHtzaG9ydF9kZXNjcmlwdGlvbjogXCJTaG9ydCBkZXNjcmlwdGlvblwiLCBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvblwiLCB0aXRsZTogXCJUaXRsZVwiLCBpbWFnZTogXCIvcGF0aC90by9pbWFnZS5qcGdcIn1cbiAgICAgKi9cbiAgICByZW5kZXJVaUVsZW1lbnRNZXRhRGF0YSh1aUVsZW1lbnRNZXRhRGF0YSwgdGVtcGxhdGVSZW5kZXIpIHtcbiAgICAgICAgaWYgKHRlbXBsYXRlUmVuZGVyID09PSAnc3lsaXVzJykge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBzZWdtZW50IHJhaXNlZCAke3RoaXMuY2xhc3Nlcy5kcmFnZ2FibGVJdGVtfVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1aSByaWdodCBmbG9hdGVkIG1hc3NpdmUgYnV0dG9uIGljb24gJHt0aGlzLmNsYXNzZXMuZHJhZ2dhYmxlSXRlbUhhbmRsZXJ9XCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiaWNvbiBhcnJvd3MgYWx0ZXJuYXRlICR7dGhpcy5jbGFzc2VzLmRyYWdnYWJsZUl0ZW1IYW5kbGVyfVwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm91ciB3aWRlIGNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInVpIHNtYWxsIGltYWdlXCIgc3JjPVwiJHt1aUVsZW1lbnRNZXRhRGF0YS5pbWFnZX1cIiBhbHQ9XCJcIiB3aWR0aD1cIjE1MFwiIGhlaWdodD1cIjE1MFwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInR3ZWx2ZSB3aWRlIGNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidWkgaGVhZGVyXCI+JHt1aUVsZW1lbnRNZXRhRGF0YS50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHt1aUVsZW1lbnRNZXRhRGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1aSBidXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+JHt0aGlzLnRyYW5zbGF0aW9ucy5lZGl0fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1aSBidXR0b24gbmVnYXRpdmUgJHt0aGlzLmNsYXNzZXMuZGVsZXRlQnV0dG9ufVwiIHR5cGU9XCJidXR0b25cIj4ke3RoaXMudHJhbnNsYXRpb25zLmRlbGV0ZX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXJyb3IoJ0Nhbm5vdCBmaW5kIHJlbmRlciBmb3IgOiAnLCB0ZW1wbGF0ZVJlbmRlcik7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gbWFya3VwIHRvIGRpc3BsYXkgYWN0aW9uIGJ1dHRvbnNcbiAgICAgKi9cbiAgICByZW5kZXJBY3Rpb25zQnV0dG9ucyh0ZW1wbGF0ZVJlbmRlcikge1xuICAgICAgICBpZiAodGVtcGxhdGVSZW5kZXIgPT09ICdzeWxpdXMnKSB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVpIHByaW1hcnkgYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPiR7dGhpcy50cmFuc2xhdGlvbnMubmV3fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPiR7dGhpcy50cmFuc2xhdGlvbnMucHJldmlld308L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXJyb3IoJ0Nhbm5vdCBmaW5kIHJlbmRlciBmb3IgOiAnLCB0ZW1wbGF0ZVJlbmRlcik7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGRyYWdnYWJsZSBlbGVtZW50cyBmb3IgYSBjb250YWluZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50c0NvbnRhaW5lclxuICAgICAqL1xuICAgIGluaXRSZW9yZGVyKFVpRWxlbWVudHMsIGVsZW1lbnRzQ29udGFpbmVyKSB7XG4gICAgICAgIGxldCBfc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBkcmFrZSA9IG5ldyBkcmFndWxhKFtVaUVsZW1lbnRzLCBlbGVtZW50c0NvbnRhaW5lcl0sIHtcbiAgICAgICAgICAgIGNvcHk6IGZ1bmN0aW9uIChlbCwgc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZSA9PT0gVWlFbGVtZW50c1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjY2VwdHM6IGZ1bmN0aW9uIChlbCwgdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCAhPT0gVWlFbGVtZW50c1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdmVzOiBmdW5jdGlvbiAoZWwsIGNvbnRhaW5lciwgaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZS5jbGFzc0xpc3QuY29udGFpbnMoX3NlbGYuY2xhc3Nlcy5kcmFnZ2FibGVJdGVtSGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZHJha2U7XG4gICAgfVxuXG4gICAgaW5pdERyYWdUb0NvcHkoVWlFbGVtZW50cywgZWxlbWVudHNDb250YWluZXIpIHtcbiAgICAgICAgbGV0IGRyYWtlID0gbmV3IGRyYWd1bGEoW1VpRWxlbWVudHMsIGVsZW1lbnRzQ29udGFpbmVyXSwge1xuICAgICAgICAgICAgY29weTogZnVuY3Rpb24gKGVsLCBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlID09PSBVaUVsZW1lbnRzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWNjZXB0czogZnVuY3Rpb24gKGVsLCB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0ICE9PSBVaUVsZW1lbnRzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZHJha2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBldmVudCB0byBiZSBhYmxlIHRvIHJlb3JkZXIgZWxlbWVudHMgaW4gaXQncyBmaWVsZFxuICAgICAqXG4gICAgICogQHBhcmFtIGRyYWtlXG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqIEBwYXJhbSBqc29uQ29udGVudFxuICAgICAqL1xuICAgIGluaXRSZW9yZGVyRXZlbnQoZHJha2UsIHRhcmdldCwganNvbkNvbnRlbnQpIHtcbiAgICAgICAgZHJha2Uub24oJ2RyYWcnLCAoZWwsIHNvdXJjZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEVsZW1lbnRJbmRleChlbCk7XG4gICAgICAgICAgICB0aGlzLmxvZygnRHJhZyBzdGFydCA6ICcsIHtpbmRleDogaW5kZXgsIGVsOiBlbCwgc291cmNlOiBzb3VyY2V9KTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgIH0pO1xuICAgICAgICBkcmFrZS5vbignZHJvcCcsIChlbCwgdGFyZ2V0RWxlbWVudCwgc291cmNlLCBzaWJsaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvbGRJbmRleCA9IHRoaXMuY3VycmVudEluZGV4O1xuICAgICAgICAgICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLmdldEVsZW1lbnRJbmRleChlbCk7XG4gICAgICAgICAgICB0aGlzLmxvZygnRHJhZyBzdG9wIDogJywge29sZEluZGV4OiBvbGRJbmRleCwgbmV3SW5kZXg6IG5ld0luZGV4LCBlbDogZWwsIHRhcmdldEVsZW1lbnQ6IHRhcmdldEVsZW1lbnQsIHNvdXJjZTogc291cmNlLCBzaWJsaW5nOiBzaWJsaW5nfSk7XG4gICAgICAgICAgICB0aGlzLm1vdmVVaUVsZW1lbnQob2xkSW5kZXgsIG5ld0luZGV4LCBqc29uQ29udGVudCwgdGFyZ2V0KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSB0aGUgaW5kZXggb2YgZWxlbWVudCBpbiBVSSBFbGVtZW50cyBsaXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldEVsZW1lbnRJbmRleChlbCkge1xuICAgICAgICByZXR1cm4gW10uc2xpY2UuY2FsbChlbC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKS5pbmRleE9mKGVsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIEpTT04gdG8gbW92ZSBVSSBlbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIG9sZEluZGV4XG4gICAgICogQHBhcmFtIG5ld0luZGV4XG4gICAgICogQHBhcmFtIGpzb25Db250ZW50XG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqL1xuICAgIG1vdmVVaUVsZW1lbnQob2xkSW5kZXgsIG5ld0luZGV4LCBqc29uQ29udGVudCwgdGFyZ2V0KSB7XG4gICAgICAgIGlmIChvbGRJbmRleCAhPT0gbmV3SW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMubG9nKCdNb3ZlIFVJIEVsZW1lbnQgOiAnLCB7b2xkSW5kZXg6IG9sZEluZGV4LCBuZXdJbmRleDogbmV3SW5kZXgsIHRhcmdldDogdGFyZ2V0LCBiZWZvcmVNb3ZlSnNvbjoganNvbkNvbnRlbnR9KTtcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA+PSBqc29uQ29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgayA9IG5ld0luZGV4IC0ganNvbkNvbnRlbnQubGVuZ3RoICsgMTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoay0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGpzb25Db250ZW50LnB1c2godW5kZWZpbmVkKTsgLy8gQFRPRE8gZGVmaW5lIHRoZSBuZXcgaW5zZXJ0ZWQgVUkgRWxlbWVudCA/XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAganNvbkNvbnRlbnQuc3BsaWNlKG5ld0luZGV4LCAwLCBqc29uQ29udGVudC5zcGxpY2Uob2xkSW5kZXgsIDEpWzBdKTtcbiAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGpzb25Db250ZW50KTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdNb3ZlZCBVSSBFbGVtZW50IDogJywge2FmdGVyTW92ZUpzb246IGpzb25Db250ZW50LCBuZXdUYXJnZXRWYWx1ZTogdGFyZ2V0LnZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvZygnTm90IG1vdmVkIFVJIEVsZW1lbnQsIHNhbWUgaW5kZXgnLCB7b2xkSW5kZXg6IG9sZEluZGV4LCBuZXdJbmRleDogbmV3SW5kZXgsIHRhcmdldDogdGFyZ2V0LCBiZWZvcmVNb3ZlSnNvbjoganNvbkNvbnRlbnR9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgSlNPTiB0byByZW1vdmUgVUkgZWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlbW92ZWRJbmRleFxuICAgICAqIEBwYXJhbSBqc29uQ29udGVudFxuICAgICAqIEBwYXJhbSB0YXJnZXRcbiAgICAgKi9cbiAgICByZW1vdmVVaUVsZW1lbnQocmVtb3ZlZEluZGV4LCBqc29uQ29udGVudCwgdGFyZ2V0KSB7XG4gICAgICAgIHRoaXMubG9nKCdSZW1vdmUgVUkgRWxlbWVudCA6ICcsIHtyZW1vdmVkSW5kZXg6IHJlbW92ZWRJbmRleCwgdGFyZ2V0OiB0YXJnZXQsIGJlZm9yZU1vdmVKc29uOiBqc29uQ29udGVudH0pO1xuICAgICAgICBqc29uQ29udGVudC5zcGxpY2UocmVtb3ZlZEluZGV4LCAxKTtcbiAgICAgICAgdGFyZ2V0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkoanNvbkNvbnRlbnQpO1xuICAgICAgICB0aGlzLmxvZygnUmVtb3ZlZCBVSSBFbGVtZW50IDogJywge2FmdGVyTW92ZUpzb246IGpzb25Db250ZW50LCBuZXdUYXJnZXRWYWx1ZTogdGFyZ2V0LnZhbHVlfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGNvbnNvbGUgZXJyb3IgaWYgZGVidWdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSBjb250ZW50XG4gICAgICovXG4gICAgZXJyb3IoZGVzY3JpcHRpb24sIGNvbnRlbnQpIHtcbiAgICAgICAgLy8gSWYgZXJyb3IsIGRpc3BsYXkgb3JpZ2luYWwgZmllbGRzXG4gICAgICAgIGZvciAobGV0IHRhcmdldCBvZiB0aGlzLnRhcmdldHMpIHtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSBnZW5lcmF0ZWQgYmxvY2tzXG4gICAgICAgIGZvciAobGV0IHRhcmdldCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuY2xhc3Nlcy51aUVsZW1lbnRDb250YWluZXIpKSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihkZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGNvbnNvbGUgbG9nIGlmIGRlYnVnIGlzIHRydWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSBjb250ZW50XG4gICAgICovXG4gICAgbG9nKGRlc2NyaXB0aW9uLCBjb250ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRlYnVnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gSW5pdCB0aGUgcGx1Z2luXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGxldCBjbXMgPSBuZXcgTWJpekNtc0ZpZWxkcyhtb25zaWV1cmJpekNtc1BsdWdpbkNvbmZpZyk7XG4gICAgY21zLmluaXQoKTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhdG9hIChhLCBuKSB7IHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhLCBuKTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdGlja3kgPSByZXF1aXJlKCd0aWNreScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlYm91bmNlIChmbiwgYXJncywgY3R4KSB7XG4gIGlmICghZm4pIHsgcmV0dXJuOyB9XG4gIHRpY2t5KGZ1bmN0aW9uIHJ1biAoKSB7XG4gICAgZm4uYXBwbHkoY3R4IHx8IG51bGwsIGFyZ3MgfHwgW10pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhdG9hID0gcmVxdWlyZSgnYXRvYScpO1xudmFyIGRlYm91bmNlID0gcmVxdWlyZSgnLi9kZWJvdW5jZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVtaXR0ZXIgKHRoaW5nLCBvcHRpb25zKSB7XG4gIHZhciBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGV2dCA9IHt9O1xuICBpZiAodGhpbmcgPT09IHVuZGVmaW5lZCkgeyB0aGluZyA9IHt9OyB9XG4gIHRoaW5nLm9uID0gZnVuY3Rpb24gKHR5cGUsIGZuKSB7XG4gICAgaWYgKCFldnRbdHlwZV0pIHtcbiAgICAgIGV2dFt0eXBlXSA9IFtmbl07XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dFt0eXBlXS5wdXNoKGZuKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaW5nO1xuICB9O1xuICB0aGluZy5vbmNlID0gZnVuY3Rpb24gKHR5cGUsIGZuKSB7XG4gICAgZm4uX29uY2UgPSB0cnVlOyAvLyB0aGluZy5vZmYoZm4pIHN0aWxsIHdvcmtzIVxuICAgIHRoaW5nLm9uKHR5cGUsIGZuKTtcbiAgICByZXR1cm4gdGhpbmc7XG4gIH07XG4gIHRoaW5nLm9mZiA9IGZ1bmN0aW9uICh0eXBlLCBmbikge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAoYyA9PT0gMSkge1xuICAgICAgZGVsZXRlIGV2dFt0eXBlXTtcbiAgICB9IGVsc2UgaWYgKGMgPT09IDApIHtcbiAgICAgIGV2dCA9IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZXQgPSBldnRbdHlwZV07XG4gICAgICBpZiAoIWV0KSB7IHJldHVybiB0aGluZzsgfVxuICAgICAgZXQuc3BsaWNlKGV0LmluZGV4T2YoZm4pLCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaW5nO1xuICB9O1xuICB0aGluZy5lbWl0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gYXRvYShhcmd1bWVudHMpO1xuICAgIHJldHVybiB0aGluZy5lbWl0dGVyU25hcHNob3QoYXJncy5zaGlmdCgpKS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbiAgdGhpbmcuZW1pdHRlclNuYXBzaG90ID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICB2YXIgZXQgPSAoZXZ0W3R5cGVdIHx8IFtdKS5zbGljZSgwKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGFyZ3MgPSBhdG9hKGFyZ3VtZW50cyk7XG4gICAgICB2YXIgY3R4ID0gdGhpcyB8fCB0aGluZztcbiAgICAgIGlmICh0eXBlID09PSAnZXJyb3InICYmIG9wdHMudGhyb3dzICE9PSBmYWxzZSAmJiAhZXQubGVuZ3RoKSB7IHRocm93IGFyZ3MubGVuZ3RoID09PSAxID8gYXJnc1swXSA6IGFyZ3M7IH1cbiAgICAgIGV0LmZvckVhY2goZnVuY3Rpb24gZW1pdHRlciAobGlzdGVuKSB7XG4gICAgICAgIGlmIChvcHRzLmFzeW5jKSB7IGRlYm91bmNlKGxpc3RlbiwgYXJncywgY3R4KTsgfSBlbHNlIHsgbGlzdGVuLmFwcGx5KGN0eCwgYXJncyk7IH1cbiAgICAgICAgaWYgKGxpc3Rlbi5fb25jZSkgeyB0aGluZy5vZmYodHlwZSwgbGlzdGVuKTsgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpbmc7XG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIHRoaW5nO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGN1c3RvbUV2ZW50ID0gcmVxdWlyZSgnY3VzdG9tLWV2ZW50Jyk7XG52YXIgZXZlbnRtYXAgPSByZXF1aXJlKCcuL2V2ZW50bWFwJyk7XG52YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xudmFyIGFkZEV2ZW50ID0gYWRkRXZlbnRFYXN5O1xudmFyIHJlbW92ZUV2ZW50ID0gcmVtb3ZlRXZlbnRFYXN5O1xudmFyIGhhcmRDYWNoZSA9IFtdO1xuXG5pZiAoIWdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gIGFkZEV2ZW50ID0gYWRkRXZlbnRIYXJkO1xuICByZW1vdmVFdmVudCA9IHJlbW92ZUV2ZW50SGFyZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFkZDogYWRkRXZlbnQsXG4gIHJlbW92ZTogcmVtb3ZlRXZlbnQsXG4gIGZhYnJpY2F0ZTogZmFicmljYXRlRXZlbnRcbn07XG5cbmZ1bmN0aW9uIGFkZEV2ZW50RWFzeSAoZWwsIHR5cGUsIGZuLCBjYXB0dXJpbmcpIHtcbiAgcmV0dXJuIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIGNhcHR1cmluZyk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50SGFyZCAoZWwsIHR5cGUsIGZuKSB7XG4gIHJldHVybiBlbC5hdHRhY2hFdmVudCgnb24nICsgdHlwZSwgd3JhcChlbCwgdHlwZSwgZm4pKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRFYXN5IChlbCwgdHlwZSwgZm4sIGNhcHR1cmluZykge1xuICByZXR1cm4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgY2FwdHVyaW5nKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRIYXJkIChlbCwgdHlwZSwgZm4pIHtcbiAgdmFyIGxpc3RlbmVyID0gdW53cmFwKGVsLCB0eXBlLCBmbik7XG4gIGlmIChsaXN0ZW5lcikge1xuICAgIHJldHVybiBlbC5kZXRhY2hFdmVudCgnb24nICsgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZhYnJpY2F0ZUV2ZW50IChlbCwgdHlwZSwgbW9kZWwpIHtcbiAgdmFyIGUgPSBldmVudG1hcC5pbmRleE9mKHR5cGUpID09PSAtMSA/IG1ha2VDdXN0b21FdmVudCgpIDogbWFrZUNsYXNzaWNFdmVudCgpO1xuICBpZiAoZWwuZGlzcGF0Y2hFdmVudCkge1xuICAgIGVsLmRpc3BhdGNoRXZlbnQoZSk7XG4gIH0gZWxzZSB7XG4gICAgZWwuZmlyZUV2ZW50KCdvbicgKyB0eXBlLCBlKTtcbiAgfVxuICBmdW5jdGlvbiBtYWtlQ2xhc3NpY0V2ZW50ICgpIHtcbiAgICB2YXIgZTtcbiAgICBpZiAoZG9jLmNyZWF0ZUV2ZW50KSB7XG4gICAgICBlID0gZG9jLmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgZS5pbml0RXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChkb2MuY3JlYXRlRXZlbnRPYmplY3QpIHtcbiAgICAgIGUgPSBkb2MuY3JlYXRlRXZlbnRPYmplY3QoKTtcbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUN1c3RvbUV2ZW50ICgpIHtcbiAgICByZXR1cm4gbmV3IGN1c3RvbUV2ZW50KHR5cGUsIHsgZGV0YWlsOiBtb2RlbCB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB3cmFwcGVyRmFjdG9yeSAoZWwsIHR5cGUsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwcGVyIChvcmlnaW5hbEV2ZW50KSB7XG4gICAgdmFyIGUgPSBvcmlnaW5hbEV2ZW50IHx8IGdsb2JhbC5ldmVudDtcbiAgICBlLnRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcbiAgICBlLnByZXZlbnREZWZhdWx0ID0gZS5wcmV2ZW50RGVmYXVsdCB8fCBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdCAoKSB7IGUucmV0dXJuVmFsdWUgPSBmYWxzZTsgfTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbiA9IGUuc3RvcFByb3BhZ2F0aW9uIHx8IGZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbiAoKSB7IGUuY2FuY2VsQnViYmxlID0gdHJ1ZTsgfTtcbiAgICBlLndoaWNoID0gZS53aGljaCB8fCBlLmtleUNvZGU7XG4gICAgZm4uY2FsbChlbCwgZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHdyYXAgKGVsLCB0eXBlLCBmbikge1xuICB2YXIgd3JhcHBlciA9IHVud3JhcChlbCwgdHlwZSwgZm4pIHx8IHdyYXBwZXJGYWN0b3J5KGVsLCB0eXBlLCBmbik7XG4gIGhhcmRDYWNoZS5wdXNoKHtcbiAgICB3cmFwcGVyOiB3cmFwcGVyLFxuICAgIGVsZW1lbnQ6IGVsLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgZm46IGZuXG4gIH0pO1xuICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZnVuY3Rpb24gdW53cmFwIChlbCwgdHlwZSwgZm4pIHtcbiAgdmFyIGkgPSBmaW5kKGVsLCB0eXBlLCBmbik7XG4gIGlmIChpKSB7XG4gICAgdmFyIHdyYXBwZXIgPSBoYXJkQ2FjaGVbaV0ud3JhcHBlcjtcbiAgICBoYXJkQ2FjaGUuc3BsaWNlKGksIDEpOyAvLyBmcmVlIHVwIGEgdGFkIG9mIG1lbW9yeVxuICAgIHJldHVybiB3cmFwcGVyO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmQgKGVsLCB0eXBlLCBmbikge1xuICB2YXIgaSwgaXRlbTtcbiAgZm9yIChpID0gMDsgaSA8IGhhcmRDYWNoZS5sZW5ndGg7IGkrKykge1xuICAgIGl0ZW0gPSBoYXJkQ2FjaGVbaV07XG4gICAgaWYgKGl0ZW0uZWxlbWVudCA9PT0gZWwgJiYgaXRlbS50eXBlID09PSB0eXBlICYmIGl0ZW0uZm4gPT09IGZuKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV2ZW50bWFwID0gW107XG52YXIgZXZlbnRuYW1lID0gJyc7XG52YXIgcm9uID0gL15vbi87XG5cbmZvciAoZXZlbnRuYW1lIGluIGdsb2JhbCkge1xuICBpZiAocm9uLnRlc3QoZXZlbnRuYW1lKSkge1xuICAgIGV2ZW50bWFwLnB1c2goZXZlbnRuYW1lLnNsaWNlKDIpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV2ZW50bWFwO1xuIiwiXG52YXIgTmF0aXZlQ3VzdG9tRXZlbnQgPSBnbG9iYWwuQ3VzdG9tRXZlbnQ7XG5cbmZ1bmN0aW9uIHVzZU5hdGl2ZSAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIHAgPSBuZXcgTmF0aXZlQ3VzdG9tRXZlbnQoJ2NhdCcsIHsgZGV0YWlsOiB7IGZvbzogJ2JhcicgfSB9KTtcbiAgICByZXR1cm4gICdjYXQnID09PSBwLnR5cGUgJiYgJ2JhcicgPT09IHAuZGV0YWlsLmZvbztcbiAgfSBjYXRjaCAoZSkge1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDcm9zcy1icm93c2VyIGBDdXN0b21FdmVudGAgY29uc3RydWN0b3IuXG4gKlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0N1c3RvbUV2ZW50LkN1c3RvbUV2ZW50XG4gKlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdXNlTmF0aXZlKCkgPyBOYXRpdmVDdXN0b21FdmVudCA6XG5cbi8vIElFID49IDlcbidmdW5jdGlvbicgPT09IHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFdmVudCA/IGZ1bmN0aW9uIEN1c3RvbUV2ZW50ICh0eXBlLCBwYXJhbXMpIHtcbiAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgaWYgKHBhcmFtcykge1xuICAgIGUuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XG4gIH0gZWxzZSB7XG4gICAgZS5pbml0Q3VzdG9tRXZlbnQodHlwZSwgZmFsc2UsIGZhbHNlLCB2b2lkIDApO1xuICB9XG4gIHJldHVybiBlO1xufSA6XG5cbi8vIElFIDw9IDhcbmZ1bmN0aW9uIEN1c3RvbUV2ZW50ICh0eXBlLCBwYXJhbXMpIHtcbiAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCgpO1xuICBlLnR5cGUgPSB0eXBlO1xuICBpZiAocGFyYW1zKSB7XG4gICAgZS5idWJibGVzID0gQm9vbGVhbihwYXJhbXMuYnViYmxlcyk7XG4gICAgZS5jYW5jZWxhYmxlID0gQm9vbGVhbihwYXJhbXMuY2FuY2VsYWJsZSk7XG4gICAgZS5kZXRhaWwgPSBwYXJhbXMuZGV0YWlsO1xuICB9IGVsc2Uge1xuICAgIGUuYnViYmxlcyA9IGZhbHNlO1xuICAgIGUuY2FuY2VsYWJsZSA9IGZhbHNlO1xuICAgIGUuZGV0YWlsID0gdm9pZCAwO1xuICB9XG4gIHJldHVybiBlO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FjaGUgPSB7fTtcbnZhciBzdGFydCA9ICcoPzpefFxcXFxzKSc7XG52YXIgZW5kID0gJyg/OlxcXFxzfCQpJztcblxuZnVuY3Rpb24gbG9va3VwQ2xhc3MgKGNsYXNzTmFtZSkge1xuICB2YXIgY2FjaGVkID0gY2FjaGVbY2xhc3NOYW1lXTtcbiAgaWYgKGNhY2hlZCkge1xuICAgIGNhY2hlZC5sYXN0SW5kZXggPSAwO1xuICB9IGVsc2Uge1xuICAgIGNhY2hlW2NsYXNzTmFtZV0gPSBjYWNoZWQgPSBuZXcgUmVnRXhwKHN0YXJ0ICsgY2xhc3NOYW1lICsgZW5kLCAnZycpO1xuICB9XG4gIHJldHVybiBjYWNoZWQ7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzIChlbCwgY2xhc3NOYW1lKSB7XG4gIHZhciBjdXJyZW50ID0gZWwuY2xhc3NOYW1lO1xuICBpZiAoIWN1cnJlbnQubGVuZ3RoKSB7XG4gICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICB9IGVsc2UgaWYgKCFsb29rdXBDbGFzcyhjbGFzc05hbWUpLnRlc3QoY3VycmVudCkpIHtcbiAgICBlbC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJtQ2xhc3MgKGVsLCBjbGFzc05hbWUpIHtcbiAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobG9va3VwQ2xhc3MoY2xhc3NOYW1lKSwgJyAnKS50cmltKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhZGQ6IGFkZENsYXNzLFxuICBybTogcm1DbGFzc1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVtaXR0ZXIgPSByZXF1aXJlKCdjb250cmEvZW1pdHRlcicpO1xudmFyIGNyb3NzdmVudCA9IHJlcXVpcmUoJ2Nyb3NzdmVudCcpO1xudmFyIGNsYXNzZXMgPSByZXF1aXJlKCcuL2NsYXNzZXMnKTtcbnZhciBkb2MgPSBkb2N1bWVudDtcbnZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG5mdW5jdGlvbiBkcmFndWxhIChpbml0aWFsQ29udGFpbmVycywgb3B0aW9ucykge1xuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgaWYgKGxlbiA9PT0gMSAmJiBBcnJheS5pc0FycmF5KGluaXRpYWxDb250YWluZXJzKSA9PT0gZmFsc2UpIHtcbiAgICBvcHRpb25zID0gaW5pdGlhbENvbnRhaW5lcnM7XG4gICAgaW5pdGlhbENvbnRhaW5lcnMgPSBbXTtcbiAgfVxuICB2YXIgX21pcnJvcjsgLy8gbWlycm9yIGltYWdlXG4gIHZhciBfc291cmNlOyAvLyBzb3VyY2UgY29udGFpbmVyXG4gIHZhciBfaXRlbTsgLy8gaXRlbSBiZWluZyBkcmFnZ2VkXG4gIHZhciBfb2Zmc2V0WDsgLy8gcmVmZXJlbmNlIHhcbiAgdmFyIF9vZmZzZXRZOyAvLyByZWZlcmVuY2UgeVxuICB2YXIgX21vdmVYOyAvLyByZWZlcmVuY2UgbW92ZSB4XG4gIHZhciBfbW92ZVk7IC8vIHJlZmVyZW5jZSBtb3ZlIHlcbiAgdmFyIF9pbml0aWFsU2libGluZzsgLy8gcmVmZXJlbmNlIHNpYmxpbmcgd2hlbiBncmFiYmVkXG4gIHZhciBfY3VycmVudFNpYmxpbmc7IC8vIHJlZmVyZW5jZSBzaWJsaW5nIG5vd1xuICB2YXIgX2NvcHk7IC8vIGl0ZW0gdXNlZCBmb3IgY29weWluZ1xuICB2YXIgX3JlbmRlclRpbWVyOyAvLyB0aW1lciBmb3Igc2V0VGltZW91dCByZW5kZXJNaXJyb3JJbWFnZVxuICB2YXIgX2xhc3REcm9wVGFyZ2V0ID0gbnVsbDsgLy8gbGFzdCBjb250YWluZXIgaXRlbSB3YXMgb3ZlclxuICB2YXIgX2dyYWJiZWQ7IC8vIGhvbGRzIG1vdXNlZG93biBjb250ZXh0IHVudGlsIGZpcnN0IG1vdXNlbW92ZVxuXG4gIHZhciBvID0gb3B0aW9ucyB8fCB7fTtcbiAgaWYgKG8ubW92ZXMgPT09IHZvaWQgMCkgeyBvLm1vdmVzID0gYWx3YXlzOyB9XG4gIGlmIChvLmFjY2VwdHMgPT09IHZvaWQgMCkgeyBvLmFjY2VwdHMgPSBhbHdheXM7IH1cbiAgaWYgKG8uaW52YWxpZCA9PT0gdm9pZCAwKSB7IG8uaW52YWxpZCA9IGludmFsaWRUYXJnZXQ7IH1cbiAgaWYgKG8uY29udGFpbmVycyA9PT0gdm9pZCAwKSB7IG8uY29udGFpbmVycyA9IGluaXRpYWxDb250YWluZXJzIHx8IFtdOyB9XG4gIGlmIChvLmlzQ29udGFpbmVyID09PSB2b2lkIDApIHsgby5pc0NvbnRhaW5lciA9IG5ldmVyOyB9XG4gIGlmIChvLmNvcHkgPT09IHZvaWQgMCkgeyBvLmNvcHkgPSBmYWxzZTsgfVxuICBpZiAoby5jb3B5U29ydFNvdXJjZSA9PT0gdm9pZCAwKSB7IG8uY29weVNvcnRTb3VyY2UgPSBmYWxzZTsgfVxuICBpZiAoby5yZXZlcnRPblNwaWxsID09PSB2b2lkIDApIHsgby5yZXZlcnRPblNwaWxsID0gZmFsc2U7IH1cbiAgaWYgKG8ucmVtb3ZlT25TcGlsbCA9PT0gdm9pZCAwKSB7IG8ucmVtb3ZlT25TcGlsbCA9IGZhbHNlOyB9XG4gIGlmIChvLmRpcmVjdGlvbiA9PT0gdm9pZCAwKSB7IG8uZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJzsgfVxuICBpZiAoby5pZ25vcmVJbnB1dFRleHRTZWxlY3Rpb24gPT09IHZvaWQgMCkgeyBvLmlnbm9yZUlucHV0VGV4dFNlbGVjdGlvbiA9IHRydWU7IH1cbiAgaWYgKG8ubWlycm9yQ29udGFpbmVyID09PSB2b2lkIDApIHsgby5taXJyb3JDb250YWluZXIgPSBkb2MuYm9keTsgfVxuXG4gIHZhciBkcmFrZSA9IGVtaXR0ZXIoe1xuICAgIGNvbnRhaW5lcnM6IG8uY29udGFpbmVycyxcbiAgICBzdGFydDogbWFudWFsU3RhcnQsXG4gICAgZW5kOiBlbmQsXG4gICAgY2FuY2VsOiBjYW5jZWwsXG4gICAgcmVtb3ZlOiByZW1vdmUsXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICBjYW5Nb3ZlOiBjYW5Nb3ZlLFxuICAgIGRyYWdnaW5nOiBmYWxzZVxuICB9KTtcblxuICBpZiAoby5yZW1vdmVPblNwaWxsID09PSB0cnVlKSB7XG4gICAgZHJha2Uub24oJ292ZXInLCBzcGlsbE92ZXIpLm9uKCdvdXQnLCBzcGlsbE91dCk7XG4gIH1cblxuICBldmVudHMoKTtcblxuICByZXR1cm4gZHJha2U7XG5cbiAgZnVuY3Rpb24gaXNDb250YWluZXIgKGVsKSB7XG4gICAgcmV0dXJuIGRyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZihlbCkgIT09IC0xIHx8IG8uaXNDb250YWluZXIoZWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXZlbnRzIChyZW1vdmUpIHtcbiAgICB2YXIgb3AgPSByZW1vdmUgPyAncmVtb3ZlJyA6ICdhZGQnO1xuICAgIHRvdWNoeShkb2N1bWVudEVsZW1lbnQsIG9wLCAnbW91c2Vkb3duJywgZ3JhYik7XG4gICAgdG91Y2h5KGRvY3VtZW50RWxlbWVudCwgb3AsICdtb3VzZXVwJywgcmVsZWFzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBldmVudHVhbE1vdmVtZW50cyAocmVtb3ZlKSB7XG4gICAgdmFyIG9wID0gcmVtb3ZlID8gJ3JlbW92ZScgOiAnYWRkJztcbiAgICB0b3VjaHkoZG9jdW1lbnRFbGVtZW50LCBvcCwgJ21vdXNlbW92ZScsIHN0YXJ0QmVjYXVzZU1vdXNlTW92ZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gbW92ZW1lbnRzIChyZW1vdmUpIHtcbiAgICB2YXIgb3AgPSByZW1vdmUgPyAncmVtb3ZlJyA6ICdhZGQnO1xuICAgIGNyb3NzdmVudFtvcF0oZG9jdW1lbnRFbGVtZW50LCAnc2VsZWN0c3RhcnQnLCBwcmV2ZW50R3JhYmJlZCk7IC8vIElFOFxuICAgIGNyb3NzdmVudFtvcF0oZG9jdW1lbnRFbGVtZW50LCAnY2xpY2snLCBwcmV2ZW50R3JhYmJlZCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICBldmVudHModHJ1ZSk7XG4gICAgcmVsZWFzZSh7fSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmV2ZW50R3JhYmJlZCAoZSkge1xuICAgIGlmIChfZ3JhYmJlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdyYWIgKGUpIHtcbiAgICBfbW92ZVggPSBlLmNsaWVudFg7XG4gICAgX21vdmVZID0gZS5jbGllbnRZO1xuXG4gICAgdmFyIGlnbm9yZSA9IHdoaWNoTW91c2VCdXR0b24oZSkgIT09IDEgfHwgZS5tZXRhS2V5IHx8IGUuY3RybEtleTtcbiAgICBpZiAoaWdub3JlKSB7XG4gICAgICByZXR1cm47IC8vIHdlIG9ubHkgY2FyZSBhYm91dCBob25lc3QtdG8tZ29kIGxlZnQgY2xpY2tzIGFuZCB0b3VjaCBldmVudHNcbiAgICB9XG4gICAgdmFyIGl0ZW0gPSBlLnRhcmdldDtcbiAgICB2YXIgY29udGV4dCA9IGNhblN0YXJ0KGl0ZW0pO1xuICAgIGlmICghY29udGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfZ3JhYmJlZCA9IGNvbnRleHQ7XG4gICAgZXZlbnR1YWxNb3ZlbWVudHMoKTtcbiAgICBpZiAoZS50eXBlID09PSAnbW91c2Vkb3duJykge1xuICAgICAgaWYgKGlzSW5wdXQoaXRlbSkpIHsgLy8gc2VlIGFsc286IGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhL2lzc3Vlcy8yMDhcbiAgICAgICAgaXRlbS5mb2N1cygpOyAvLyBmaXhlcyBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYS9pc3N1ZXMvMTc2XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIGZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhL2lzc3Vlcy8xNTVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydEJlY2F1c2VNb3VzZU1vdmVkIChlKSB7XG4gICAgaWYgKCFfZ3JhYmJlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2hpY2hNb3VzZUJ1dHRvbihlKSA9PT0gMCkge1xuICAgICAgcmVsZWFzZSh7fSk7XG4gICAgICByZXR1cm47IC8vIHdoZW4gdGV4dCBpcyBzZWxlY3RlZCBvbiBhbiBpbnB1dCBhbmQgdGhlbiBkcmFnZ2VkLCBtb3VzZXVwIGRvZXNuJ3QgZmlyZS4gdGhpcyBpcyBvdXIgb25seSBob3BlXG4gICAgfVxuICAgIC8vIHRydXRoeSBjaGVjayBmaXhlcyAjMjM5LCBlcXVhbGl0eSBmaXhlcyAjMjA3XG4gICAgaWYgKGUuY2xpZW50WCAhPT0gdm9pZCAwICYmIGUuY2xpZW50WCA9PT0gX21vdmVYICYmIGUuY2xpZW50WSAhPT0gdm9pZCAwICYmIGUuY2xpZW50WSA9PT0gX21vdmVZKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvLmlnbm9yZUlucHV0VGV4dFNlbGVjdGlvbikge1xuICAgICAgdmFyIGNsaWVudFggPSBnZXRDb29yZCgnY2xpZW50WCcsIGUpO1xuICAgICAgdmFyIGNsaWVudFkgPSBnZXRDb29yZCgnY2xpZW50WScsIGUpO1xuICAgICAgdmFyIGVsZW1lbnRCZWhpbmRDdXJzb3IgPSBkb2MuZWxlbWVudEZyb21Qb2ludChjbGllbnRYLCBjbGllbnRZKTtcbiAgICAgIGlmIChpc0lucHV0KGVsZW1lbnRCZWhpbmRDdXJzb3IpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZ3JhYmJlZCA9IF9ncmFiYmVkOyAvLyBjYWxsIHRvIGVuZCgpIHVuc2V0cyBfZ3JhYmJlZFxuICAgIGV2ZW50dWFsTW92ZW1lbnRzKHRydWUpO1xuICAgIG1vdmVtZW50cygpO1xuICAgIGVuZCgpO1xuICAgIHN0YXJ0KGdyYWJiZWQpO1xuXG4gICAgdmFyIG9mZnNldCA9IGdldE9mZnNldChfaXRlbSk7XG4gICAgX29mZnNldFggPSBnZXRDb29yZCgncGFnZVgnLCBlKSAtIG9mZnNldC5sZWZ0O1xuICAgIF9vZmZzZXRZID0gZ2V0Q29vcmQoJ3BhZ2VZJywgZSkgLSBvZmZzZXQudG9wO1xuXG4gICAgY2xhc3Nlcy5hZGQoX2NvcHkgfHwgX2l0ZW0sICdndS10cmFuc2l0Jyk7XG4gICAgcmVuZGVyTWlycm9ySW1hZ2UoKTtcbiAgICBkcmFnKGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuU3RhcnQgKGl0ZW0pIHtcbiAgICBpZiAoZHJha2UuZHJhZ2dpbmcgJiYgX21pcnJvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNDb250YWluZXIoaXRlbSkpIHtcbiAgICAgIHJldHVybjsgLy8gZG9uJ3QgZHJhZyBjb250YWluZXIgaXRzZWxmXG4gICAgfVxuICAgIHZhciBoYW5kbGUgPSBpdGVtO1xuICAgIHdoaWxlIChnZXRQYXJlbnQoaXRlbSkgJiYgaXNDb250YWluZXIoZ2V0UGFyZW50KGl0ZW0pKSA9PT0gZmFsc2UpIHtcbiAgICAgIGlmIChvLmludmFsaWQoaXRlbSwgaGFuZGxlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpdGVtID0gZ2V0UGFyZW50KGl0ZW0pOyAvLyBkcmFnIHRhcmdldCBzaG91bGQgYmUgYSB0b3AgZWxlbWVudFxuICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHNvdXJjZSA9IGdldFBhcmVudChpdGVtKTtcbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoby5pbnZhbGlkKGl0ZW0sIGhhbmRsZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbW92YWJsZSA9IG8ubW92ZXMoaXRlbSwgc291cmNlLCBoYW5kbGUsIG5leHRFbChpdGVtKSk7XG4gICAgaWYgKCFtb3ZhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICBzb3VyY2U6IHNvdXJjZVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjYW5Nb3ZlIChpdGVtKSB7XG4gICAgcmV0dXJuICEhY2FuU3RhcnQoaXRlbSk7XG4gIH1cblxuICBmdW5jdGlvbiBtYW51YWxTdGFydCAoaXRlbSkge1xuICAgIHZhciBjb250ZXh0ID0gY2FuU3RhcnQoaXRlbSk7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgIHN0YXJ0KGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0IChjb250ZXh0KSB7XG4gICAgaWYgKGlzQ29weShjb250ZXh0Lml0ZW0sIGNvbnRleHQuc291cmNlKSkge1xuICAgICAgX2NvcHkgPSBjb250ZXh0Lml0ZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgZHJha2UuZW1pdCgnY2xvbmVkJywgX2NvcHksIGNvbnRleHQuaXRlbSwgJ2NvcHknKTtcbiAgICB9XG5cbiAgICBfc291cmNlID0gY29udGV4dC5zb3VyY2U7XG4gICAgX2l0ZW0gPSBjb250ZXh0Lml0ZW07XG4gICAgX2luaXRpYWxTaWJsaW5nID0gX2N1cnJlbnRTaWJsaW5nID0gbmV4dEVsKGNvbnRleHQuaXRlbSk7XG5cbiAgICBkcmFrZS5kcmFnZ2luZyA9IHRydWU7XG4gICAgZHJha2UuZW1pdCgnZHJhZycsIF9pdGVtLCBfc291cmNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludmFsaWRUYXJnZXQgKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZCAoKSB7XG4gICAgaWYgKCFkcmFrZS5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtO1xuICAgIGRyb3AoaXRlbSwgZ2V0UGFyZW50KGl0ZW0pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuZ3JhYiAoKSB7XG4gICAgX2dyYWJiZWQgPSBmYWxzZTtcbiAgICBldmVudHVhbE1vdmVtZW50cyh0cnVlKTtcbiAgICBtb3ZlbWVudHModHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWxlYXNlIChlKSB7XG4gICAgdW5ncmFiKCk7XG5cbiAgICBpZiAoIWRyYWtlLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgdmFyIGNsaWVudFggPSBnZXRDb29yZCgnY2xpZW50WCcsIGUpO1xuICAgIHZhciBjbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKTtcbiAgICB2YXIgZWxlbWVudEJlaGluZEN1cnNvciA9IGdldEVsZW1lbnRCZWhpbmRQb2ludChfbWlycm9yLCBjbGllbnRYLCBjbGllbnRZKTtcbiAgICB2YXIgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIGNsaWVudFgsIGNsaWVudFkpO1xuICAgIGlmIChkcm9wVGFyZ2V0ICYmICgoX2NvcHkgJiYgby5jb3B5U29ydFNvdXJjZSkgfHwgKCFfY29weSB8fCBkcm9wVGFyZ2V0ICE9PSBfc291cmNlKSkpIHtcbiAgICAgIGRyb3AoaXRlbSwgZHJvcFRhcmdldCk7XG4gICAgfSBlbHNlIGlmIChvLnJlbW92ZU9uU3BpbGwpIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wIChpdGVtLCB0YXJnZXQpIHtcbiAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50KGl0ZW0pO1xuICAgIGlmIChfY29weSAmJiBvLmNvcHlTb3J0U291cmNlICYmIHRhcmdldCA9PT0gX3NvdXJjZSkge1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKF9pdGVtKTtcbiAgICB9XG4gICAgaWYgKGlzSW5pdGlhbFBsYWNlbWVudCh0YXJnZXQpKSB7XG4gICAgICBkcmFrZS5lbWl0KCdjYW5jZWwnLCBpdGVtLCBfc291cmNlLCBfc291cmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZHJha2UuZW1pdCgnZHJvcCcsIGl0ZW0sIHRhcmdldCwgX3NvdXJjZSwgX2N1cnJlbnRTaWJsaW5nKTtcbiAgICB9XG4gICAgY2xlYW51cCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlICgpIHtcbiAgICBpZiAoIWRyYWtlLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgdmFyIHBhcmVudCA9IGdldFBhcmVudChpdGVtKTtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgfVxuICAgIGRyYWtlLmVtaXQoX2NvcHkgPyAnY2FuY2VsJyA6ICdyZW1vdmUnLCBpdGVtLCBwYXJlbnQsIF9zb3VyY2UpO1xuICAgIGNsZWFudXAoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCAocmV2ZXJ0KSB7XG4gICAgaWYgKCFkcmFrZS5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcmV2ZXJ0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwID8gcmV2ZXJ0IDogby5yZXZlcnRPblNwaWxsO1xuICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgdmFyIHBhcmVudCA9IGdldFBhcmVudChpdGVtKTtcbiAgICB2YXIgaW5pdGlhbCA9IGlzSW5pdGlhbFBsYWNlbWVudChwYXJlbnQpO1xuICAgIGlmIChpbml0aWFsID09PSBmYWxzZSAmJiByZXZlcnRzKSB7XG4gICAgICBpZiAoX2NvcHkpIHtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChfY29weSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9zb3VyY2UuaW5zZXJ0QmVmb3JlKGl0ZW0sIF9pbml0aWFsU2libGluZyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpbml0aWFsIHx8IHJldmVydHMpIHtcbiAgICAgIGRyYWtlLmVtaXQoJ2NhbmNlbCcsIGl0ZW0sIF9zb3VyY2UsIF9zb3VyY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkcmFrZS5lbWl0KCdkcm9wJywgaXRlbSwgcGFyZW50LCBfc291cmNlLCBfY3VycmVudFNpYmxpbmcpO1xuICAgIH1cbiAgICBjbGVhbnVwKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwICgpIHtcbiAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtO1xuICAgIHVuZ3JhYigpO1xuICAgIHJlbW92ZU1pcnJvckltYWdlKCk7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGNsYXNzZXMucm0oaXRlbSwgJ2d1LXRyYW5zaXQnKTtcbiAgICB9XG4gICAgaWYgKF9yZW5kZXJUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KF9yZW5kZXJUaW1lcik7XG4gICAgfVxuICAgIGRyYWtlLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgaWYgKF9sYXN0RHJvcFRhcmdldCkge1xuICAgICAgZHJha2UuZW1pdCgnb3V0JywgaXRlbSwgX2xhc3REcm9wVGFyZ2V0LCBfc291cmNlKTtcbiAgICB9XG4gICAgZHJha2UuZW1pdCgnZHJhZ2VuZCcsIGl0ZW0pO1xuICAgIF9zb3VyY2UgPSBfaXRlbSA9IF9jb3B5ID0gX2luaXRpYWxTaWJsaW5nID0gX2N1cnJlbnRTaWJsaW5nID0gX3JlbmRlclRpbWVyID0gX2xhc3REcm9wVGFyZ2V0ID0gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzSW5pdGlhbFBsYWNlbWVudCAodGFyZ2V0LCBzKSB7XG4gICAgdmFyIHNpYmxpbmc7XG4gICAgaWYgKHMgIT09IHZvaWQgMCkge1xuICAgICAgc2libGluZyA9IHM7XG4gICAgfSBlbHNlIGlmIChfbWlycm9yKSB7XG4gICAgICBzaWJsaW5nID0gX2N1cnJlbnRTaWJsaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaWJsaW5nID0gbmV4dEVsKF9jb3B5IHx8IF9pdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldCA9PT0gX3NvdXJjZSAmJiBzaWJsaW5nID09PSBfaW5pdGlhbFNpYmxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kRHJvcFRhcmdldCAoZWxlbWVudEJlaGluZEN1cnNvciwgY2xpZW50WCwgY2xpZW50WSkge1xuICAgIHZhciB0YXJnZXQgPSBlbGVtZW50QmVoaW5kQ3Vyc29yO1xuICAgIHdoaWxlICh0YXJnZXQgJiYgIWFjY2VwdGVkKCkpIHtcbiAgICAgIHRhcmdldCA9IGdldFBhcmVudCh0YXJnZXQpO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuXG4gICAgZnVuY3Rpb24gYWNjZXB0ZWQgKCkge1xuICAgICAgdmFyIGRyb3BwYWJsZSA9IGlzQ29udGFpbmVyKHRhcmdldCk7XG4gICAgICBpZiAoZHJvcHBhYmxlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBpbW1lZGlhdGUgPSBnZXRJbW1lZGlhdGVDaGlsZCh0YXJnZXQsIGVsZW1lbnRCZWhpbmRDdXJzb3IpO1xuICAgICAgdmFyIHJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZSh0YXJnZXQsIGltbWVkaWF0ZSwgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICB2YXIgaW5pdGlhbCA9IGlzSW5pdGlhbFBsYWNlbWVudCh0YXJnZXQsIHJlZmVyZW5jZSk7XG4gICAgICBpZiAoaW5pdGlhbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gc2hvdWxkIGFsd2F5cyBiZSBhYmxlIHRvIGRyb3AgaXQgcmlnaHQgYmFjayB3aGVyZSBpdCB3YXNcbiAgICAgIH1cbiAgICAgIHJldHVybiBvLmFjY2VwdHMoX2l0ZW0sIHRhcmdldCwgX3NvdXJjZSwgcmVmZXJlbmNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcmFnIChlKSB7XG4gICAgaWYgKCFfbWlycm9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciBjbGllbnRYID0gZ2V0Q29vcmQoJ2NsaWVudFgnLCBlKTtcbiAgICB2YXIgY2xpZW50WSA9IGdldENvb3JkKCdjbGllbnRZJywgZSk7XG4gICAgdmFyIHggPSBjbGllbnRYIC0gX29mZnNldFg7XG4gICAgdmFyIHkgPSBjbGllbnRZIC0gX29mZnNldFk7XG5cbiAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICBfbWlycm9yLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuXG4gICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbTtcbiAgICB2YXIgZWxlbWVudEJlaGluZEN1cnNvciA9IGdldEVsZW1lbnRCZWhpbmRQb2ludChfbWlycm9yLCBjbGllbnRYLCBjbGllbnRZKTtcbiAgICB2YXIgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIGNsaWVudFgsIGNsaWVudFkpO1xuICAgIHZhciBjaGFuZ2VkID0gZHJvcFRhcmdldCAhPT0gbnVsbCAmJiBkcm9wVGFyZ2V0ICE9PSBfbGFzdERyb3BUYXJnZXQ7XG4gICAgaWYgKGNoYW5nZWQgfHwgZHJvcFRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgb3V0KCk7XG4gICAgICBfbGFzdERyb3BUYXJnZXQgPSBkcm9wVGFyZ2V0O1xuICAgICAgb3ZlcigpO1xuICAgIH1cbiAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50KGl0ZW0pO1xuICAgIGlmIChkcm9wVGFyZ2V0ID09PSBfc291cmNlICYmIF9jb3B5ICYmICFvLmNvcHlTb3J0U291cmNlKSB7XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHJlZmVyZW5jZTtcbiAgICB2YXIgaW1tZWRpYXRlID0gZ2V0SW1tZWRpYXRlQ2hpbGQoZHJvcFRhcmdldCwgZWxlbWVudEJlaGluZEN1cnNvcik7XG4gICAgaWYgKGltbWVkaWF0ZSAhPT0gbnVsbCkge1xuICAgICAgcmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlKGRyb3BUYXJnZXQsIGltbWVkaWF0ZSwgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgfSBlbHNlIGlmIChvLnJldmVydE9uU3BpbGwgPT09IHRydWUgJiYgIV9jb3B5KSB7XG4gICAgICByZWZlcmVuY2UgPSBfaW5pdGlhbFNpYmxpbmc7XG4gICAgICBkcm9wVGFyZ2V0ID0gX3NvdXJjZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKF9jb3B5ICYmIHBhcmVudCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChcbiAgICAgIChyZWZlcmVuY2UgPT09IG51bGwgJiYgY2hhbmdlZCkgfHxcbiAgICAgIHJlZmVyZW5jZSAhPT0gaXRlbSAmJlxuICAgICAgcmVmZXJlbmNlICE9PSBuZXh0RWwoaXRlbSlcbiAgICApIHtcbiAgICAgIF9jdXJyZW50U2libGluZyA9IHJlZmVyZW5jZTtcbiAgICAgIGRyb3BUYXJnZXQuaW5zZXJ0QmVmb3JlKGl0ZW0sIHJlZmVyZW5jZSk7XG4gICAgICBkcmFrZS5lbWl0KCdzaGFkb3cnLCBpdGVtLCBkcm9wVGFyZ2V0LCBfc291cmNlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbW92ZWQgKHR5cGUpIHsgZHJha2UuZW1pdCh0eXBlLCBpdGVtLCBfbGFzdERyb3BUYXJnZXQsIF9zb3VyY2UpOyB9XG4gICAgZnVuY3Rpb24gb3ZlciAoKSB7IGlmIChjaGFuZ2VkKSB7IG1vdmVkKCdvdmVyJyk7IH0gfVxuICAgIGZ1bmN0aW9uIG91dCAoKSB7IGlmIChfbGFzdERyb3BUYXJnZXQpIHsgbW92ZWQoJ291dCcpOyB9IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNwaWxsT3ZlciAoZWwpIHtcbiAgICBjbGFzc2VzLnJtKGVsLCAnZ3UtaGlkZScpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3BpbGxPdXQgKGVsKSB7XG4gICAgaWYgKGRyYWtlLmRyYWdnaW5nKSB7IGNsYXNzZXMuYWRkKGVsLCAnZ3UtaGlkZScpOyB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJNaXJyb3JJbWFnZSAoKSB7XG4gICAgaWYgKF9taXJyb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHJlY3QgPSBfaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBfbWlycm9yID0gX2l0ZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgIF9taXJyb3Iuc3R5bGUud2lkdGggPSBnZXRSZWN0V2lkdGgocmVjdCkgKyAncHgnO1xuICAgIF9taXJyb3Iuc3R5bGUuaGVpZ2h0ID0gZ2V0UmVjdEhlaWdodChyZWN0KSArICdweCc7XG4gICAgY2xhc3Nlcy5ybShfbWlycm9yLCAnZ3UtdHJhbnNpdCcpO1xuICAgIGNsYXNzZXMuYWRkKF9taXJyb3IsICdndS1taXJyb3InKTtcbiAgICBvLm1pcnJvckNvbnRhaW5lci5hcHBlbmRDaGlsZChfbWlycm9yKTtcbiAgICB0b3VjaHkoZG9jdW1lbnRFbGVtZW50LCAnYWRkJywgJ21vdXNlbW92ZScsIGRyYWcpO1xuICAgIGNsYXNzZXMuYWRkKG8ubWlycm9yQ29udGFpbmVyLCAnZ3UtdW5zZWxlY3RhYmxlJyk7XG4gICAgZHJha2UuZW1pdCgnY2xvbmVkJywgX21pcnJvciwgX2l0ZW0sICdtaXJyb3InKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZU1pcnJvckltYWdlICgpIHtcbiAgICBpZiAoX21pcnJvcikge1xuICAgICAgY2xhc3Nlcy5ybShvLm1pcnJvckNvbnRhaW5lciwgJ2d1LXVuc2VsZWN0YWJsZScpO1xuICAgICAgdG91Y2h5KGRvY3VtZW50RWxlbWVudCwgJ3JlbW92ZScsICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICAgIGdldFBhcmVudChfbWlycm9yKS5yZW1vdmVDaGlsZChfbWlycm9yKTtcbiAgICAgIF9taXJyb3IgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEltbWVkaWF0ZUNoaWxkIChkcm9wVGFyZ2V0LCB0YXJnZXQpIHtcbiAgICB2YXIgaW1tZWRpYXRlID0gdGFyZ2V0O1xuICAgIHdoaWxlIChpbW1lZGlhdGUgIT09IGRyb3BUYXJnZXQgJiYgZ2V0UGFyZW50KGltbWVkaWF0ZSkgIT09IGRyb3BUYXJnZXQpIHtcbiAgICAgIGltbWVkaWF0ZSA9IGdldFBhcmVudChpbW1lZGlhdGUpO1xuICAgIH1cbiAgICBpZiAoaW1tZWRpYXRlID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gaW1tZWRpYXRlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlIChkcm9wVGFyZ2V0LCB0YXJnZXQsIHgsIHkpIHtcbiAgICB2YXIgaG9yaXpvbnRhbCA9IG8uZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgdmFyIHJlZmVyZW5jZSA9IHRhcmdldCAhPT0gZHJvcFRhcmdldCA/IGluc2lkZSgpIDogb3V0c2lkZSgpO1xuICAgIHJldHVybiByZWZlcmVuY2U7XG5cbiAgICBmdW5jdGlvbiBvdXRzaWRlICgpIHsgLy8gc2xvd2VyLCBidXQgYWJsZSB0byBmaWd1cmUgb3V0IGFueSBwb3NpdGlvblxuICAgICAgdmFyIGxlbiA9IGRyb3BUYXJnZXQuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgdmFyIGk7XG4gICAgICB2YXIgZWw7XG4gICAgICB2YXIgcmVjdDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBlbCA9IGRyb3BUYXJnZXQuY2hpbGRyZW5baV07XG4gICAgICAgIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKGhvcml6b250YWwgJiYgKHJlY3QubGVmdCArIHJlY3Qud2lkdGggLyAyKSA+IHgpIHsgcmV0dXJuIGVsOyB9XG4gICAgICAgIGlmICghaG9yaXpvbnRhbCAmJiAocmVjdC50b3AgKyByZWN0LmhlaWdodCAvIDIpID4geSkgeyByZXR1cm4gZWw7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc2lkZSAoKSB7IC8vIGZhc3RlciwgYnV0IG9ubHkgYXZhaWxhYmxlIGlmIGRyb3BwZWQgaW5zaWRlIGEgY2hpbGQgZWxlbWVudFxuICAgICAgdmFyIHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZSh4ID4gcmVjdC5sZWZ0ICsgZ2V0UmVjdFdpZHRoKHJlY3QpIC8gMik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzb2x2ZSh5ID4gcmVjdC50b3AgKyBnZXRSZWN0SGVpZ2h0KHJlY3QpIC8gMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZSAoYWZ0ZXIpIHtcbiAgICAgIHJldHVybiBhZnRlciA/IG5leHRFbCh0YXJnZXQpIDogdGFyZ2V0O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ29weSAoaXRlbSwgY29udGFpbmVyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvLmNvcHkgPT09ICdib29sZWFuJyA/IG8uY29weSA6IG8uY29weShpdGVtLCBjb250YWluZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvdWNoeSAoZWwsIG9wLCB0eXBlLCBmbikge1xuICB2YXIgdG91Y2ggPSB7XG4gICAgbW91c2V1cDogJ3RvdWNoZW5kJyxcbiAgICBtb3VzZWRvd246ICd0b3VjaHN0YXJ0JyxcbiAgICBtb3VzZW1vdmU6ICd0b3VjaG1vdmUnXG4gIH07XG4gIHZhciBwb2ludGVycyA9IHtcbiAgICBtb3VzZXVwOiAncG9pbnRlcnVwJyxcbiAgICBtb3VzZWRvd246ICdwb2ludGVyZG93bicsXG4gICAgbW91c2Vtb3ZlOiAncG9pbnRlcm1vdmUnXG4gIH07XG4gIHZhciBtaWNyb3NvZnQgPSB7XG4gICAgbW91c2V1cDogJ01TUG9pbnRlclVwJyxcbiAgICBtb3VzZWRvd246ICdNU1BvaW50ZXJEb3duJyxcbiAgICBtb3VzZW1vdmU6ICdNU1BvaW50ZXJNb3ZlJ1xuICB9O1xuICBpZiAoZ2xvYmFsLm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZCkge1xuICAgIGNyb3NzdmVudFtvcF0oZWwsIHBvaW50ZXJzW3R5cGVdLCBmbik7XG4gIH0gZWxzZSBpZiAoZ2xvYmFsLm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkKSB7XG4gICAgY3Jvc3N2ZW50W29wXShlbCwgbWljcm9zb2Z0W3R5cGVdLCBmbik7XG4gIH0gZWxzZSB7XG4gICAgY3Jvc3N2ZW50W29wXShlbCwgdG91Y2hbdHlwZV0sIGZuKTtcbiAgICBjcm9zc3ZlbnRbb3BdKGVsLCB0eXBlLCBmbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gd2hpY2hNb3VzZUJ1dHRvbiAoZSkge1xuICBpZiAoZS50b3VjaGVzICE9PSB2b2lkIDApIHsgcmV0dXJuIGUudG91Y2hlcy5sZW5ndGg7IH1cbiAgaWYgKGUud2hpY2ggIT09IHZvaWQgMCAmJiBlLndoaWNoICE9PSAwKSB7IHJldHVybiBlLndoaWNoOyB9IC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYS9pc3N1ZXMvMjYxXG4gIGlmIChlLmJ1dHRvbnMgIT09IHZvaWQgMCkgeyByZXR1cm4gZS5idXR0b25zOyB9XG4gIHZhciBidXR0b24gPSBlLmJ1dHRvbjtcbiAgaWYgKGJ1dHRvbiAhPT0gdm9pZCAwKSB7IC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9ibG9iLzk5ZThmZjFiYWE3YWUzNDFlOTRiYjg5YzNlODQ1NzBjN2MzYWQ5ZWEvc3JjL2V2ZW50LmpzI0w1NzMtTDU3NVxuICAgIHJldHVybiBidXR0b24gJiAxID8gMSA6IGJ1dHRvbiAmIDIgPyAzIDogKGJ1dHRvbiAmIDQgPyAyIDogMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0IChlbCkge1xuICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IHJlY3QubGVmdCArIGdldFNjcm9sbCgnc2Nyb2xsTGVmdCcsICdwYWdlWE9mZnNldCcpLFxuICAgIHRvcDogcmVjdC50b3AgKyBnZXRTY3JvbGwoJ3Njcm9sbFRvcCcsICdwYWdlWU9mZnNldCcpXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbCAoc2Nyb2xsUHJvcCwgb2Zmc2V0UHJvcCkge1xuICBpZiAodHlwZW9mIGdsb2JhbFtvZmZzZXRQcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZ2xvYmFsW29mZnNldFByb3BdO1xuICB9XG4gIGlmIChkb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50RWxlbWVudFtzY3JvbGxQcm9wXTtcbiAgfVxuICByZXR1cm4gZG9jLmJvZHlbc2Nyb2xsUHJvcF07XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRCZWhpbmRQb2ludCAocG9pbnQsIHgsIHkpIHtcbiAgdmFyIHAgPSBwb2ludCB8fCB7fTtcbiAgdmFyIHN0YXRlID0gcC5jbGFzc05hbWU7XG4gIHZhciBlbDtcbiAgcC5jbGFzc05hbWUgKz0gJyBndS1oaWRlJztcbiAgZWwgPSBkb2MuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcbiAgcC5jbGFzc05hbWUgPSBzdGF0ZTtcbiAgcmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBuZXZlciAoKSB7IHJldHVybiBmYWxzZTsgfVxuZnVuY3Rpb24gYWx3YXlzICgpIHsgcmV0dXJuIHRydWU7IH1cbmZ1bmN0aW9uIGdldFJlY3RXaWR0aCAocmVjdCkgeyByZXR1cm4gcmVjdC53aWR0aCB8fCAocmVjdC5yaWdodCAtIHJlY3QubGVmdCk7IH1cbmZ1bmN0aW9uIGdldFJlY3RIZWlnaHQgKHJlY3QpIHsgcmV0dXJuIHJlY3QuaGVpZ2h0IHx8IChyZWN0LmJvdHRvbSAtIHJlY3QudG9wKTsgfVxuZnVuY3Rpb24gZ2V0UGFyZW50IChlbCkgeyByZXR1cm4gZWwucGFyZW50Tm9kZSA9PT0gZG9jID8gbnVsbCA6IGVsLnBhcmVudE5vZGU7IH1cbmZ1bmN0aW9uIGlzSW5wdXQgKGVsKSB7IHJldHVybiBlbC50YWdOYW1lID09PSAnSU5QVVQnIHx8IGVsLnRhZ05hbWUgPT09ICdURVhUQVJFQScgfHwgZWwudGFnTmFtZSA9PT0gJ1NFTEVDVCcgfHwgaXNFZGl0YWJsZShlbCk7IH1cbmZ1bmN0aW9uIGlzRWRpdGFibGUgKGVsKSB7XG4gIGlmICghZWwpIHsgcmV0dXJuIGZhbHNlOyB9IC8vIG5vIHBhcmVudHMgd2VyZSBlZGl0YWJsZVxuICBpZiAoZWwuY29udGVudEVkaXRhYmxlID09PSAnZmFsc2UnKSB7IHJldHVybiBmYWxzZTsgfSAvLyBzdG9wIHRoZSBsb29rdXBcbiAgaWYgKGVsLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnKSB7IHJldHVybiB0cnVlOyB9IC8vIGZvdW5kIGEgY29udGVudEVkaXRhYmxlIGVsZW1lbnQgaW4gdGhlIGNoYWluXG4gIHJldHVybiBpc0VkaXRhYmxlKGdldFBhcmVudChlbCkpOyAvLyBjb250ZW50RWRpdGFibGUgaXMgc2V0IHRvICdpbmhlcml0J1xufVxuXG5mdW5jdGlvbiBuZXh0RWwgKGVsKSB7XG4gIHJldHVybiBlbC5uZXh0RWxlbWVudFNpYmxpbmcgfHwgbWFudWFsbHkoKTtcbiAgZnVuY3Rpb24gbWFudWFsbHkgKCkge1xuICAgIHZhciBzaWJsaW5nID0gZWw7XG4gICAgZG8ge1xuICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgfSB3aGlsZSAoc2libGluZyAmJiBzaWJsaW5nLm5vZGVUeXBlICE9PSAxKTtcbiAgICByZXR1cm4gc2libGluZztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRFdmVudEhvc3QgKGUpIHtcbiAgLy8gb24gdG91Y2hlbmQgZXZlbnQsIHdlIGhhdmUgdG8gdXNlIGBlLmNoYW5nZWRUb3VjaGVzYFxuICAvLyBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MTkyNTYzL3RvdWNoZW5kLWV2ZW50LXByb3BlcnRpZXNcbiAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhL2lzc3Vlcy8zNFxuICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdO1xuICB9XG4gIGlmIChlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gIH1cbiAgcmV0dXJuIGU7XG59XG5cbmZ1bmN0aW9uIGdldENvb3JkIChjb29yZCwgZSkge1xuICB2YXIgaG9zdCA9IGdldEV2ZW50SG9zdChlKTtcbiAgdmFyIG1pc3NNYXAgPSB7XG4gICAgcGFnZVg6ICdjbGllbnRYJywgLy8gSUU4XG4gICAgcGFnZVk6ICdjbGllbnRZJyAvLyBJRThcbiAgfTtcbiAgaWYgKGNvb3JkIGluIG1pc3NNYXAgJiYgIShjb29yZCBpbiBob3N0KSAmJiBtaXNzTWFwW2Nvb3JkXSBpbiBob3N0KSB7XG4gICAgY29vcmQgPSBtaXNzTWFwW2Nvb3JkXTtcbiAgfVxuICByZXR1cm4gaG9zdFtjb29yZF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZHJhZ3VsYTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2kgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nLCB0aWNrO1xuaWYgKHNpKSB7XG4gIHRpY2sgPSBmdW5jdGlvbiAoZm4pIHsgc2V0SW1tZWRpYXRlKGZuKTsgfTtcbn0gZWxzZSB7XG4gIHRpY2sgPSBmdW5jdGlvbiAoZm4pIHsgc2V0VGltZW91dChmbiwgMCk7IH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGljazsiLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=
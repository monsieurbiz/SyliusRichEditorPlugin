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
/* harmony import */ var tingle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tingle.js */ "./node_modules/tingle.js/dist/tingle.min.js");
/* harmony import */ var tingle_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tingle_js__WEBPACK_IMPORTED_MODULE_1__);
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
    this.formRoute = this.config.formRoute;
    this.submitRoute = this.config.submitRoute;

    if (this.debug) {
      this.log('Plugin configuration :', this.config);
      this.log('Matched element(s) :', this.targets.length);
    } // Internal attributes


    this.id = {
      uiElementContainer: 'mbiz-cms-elements-container'
    };
    this.classes = {
      uiElementList: 'mbiz-cms-component-ui-elements',
      dropableContainer: 'mbiz-cms-dropable-container',
      draggableContainer: 'mbiz-cms-draggable-container',
      draggableItem: 'mbiz-cms-draggable-item',
      draggableItemHandler: 'mbiz-cms-draggable-item-handler',
      deleteButton: 'mbiz-cms-delete-button',
      updateButton: 'mbiz-cms-update-button',
      toggleButton: 'mbiz-cms-toggle-button',
      renderedModal: 'mbiz-cms-rendred-modal'
    };
    this.events = {
      uiElementsBuilt: new Event('uiElementsBuilt'),
      updateElement: function updateElement(modal) {
        return new CustomEvent('updateElement', {
          'detail': modal
        });
      }
    };
  }
  /**
   * Init each CMS element
   */


  _createClass(MbizCmsFields, [{
    key: "init",
    value: function init() {
      // Init only if we match at least one target
      if (this.targets.length) {
        var _self = this; // Init fields only when UI Elements are built


        this.container.addEventListener('uiElementsBuilt', function (e) {
          _self.log('Ui Elements container is built', e);

          _self.initFields();

          _self.toggleUiElementsVisibility();
        });
        this.initUiElements(this.container, this.uiElements);
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
      uiElementsContainer.classList.add(this.classes.dropableContainer, this.classes.uiElementList, 'is-expanded'); // Loop on UI Elements

      var error = false;

      for (var type in uiElements) {
        var uiElement = uiElements[type];
        this.log('Init UI Element :', uiElement);
        var renderedUiElement = this.renderUiElementMetaData(type, uiElement, this.templateRender);

        if (renderedUiElement === '') {
          error = true;
          continue;
        }

        uiElementsContainer.insertAdjacentHTML('beforeend', renderedUiElement);
      } // Append generated HTML to display current UI Elements of target


      if (!error) {
        target.insertBefore(uiElementsContainer, target.firstChild);
        this.container.dispatchEvent(this.events.uiElementsBuilt);
      }
    }
    /**
     * Init each CMS fields
     */

  }, {
    key: "initFields",
    value: function initFields() {
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
      elementsContainer.classList.add(this.classes.draggableContainer, this.classes.uiElementList);

      if (this.templateRender === 'sylius') {
        elementsContainer.classList.add('ui', 'segment', this.classes.draggableContainer, this.classes.uiElementList);
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
          var renderedUiElementMetaData = this.renderUiElementMetaData(uiElement.type, uiElementMetaData, this.templateRender);

          if (renderedUiElementMetaData === '') {
            error = true;
            continue;
          } // Add rendered Ui Element meta data in container


          this.log('Rendered Ui Element meta data :', renderedUiElementMetaData);
          elementsContainer.insertAdjacentHTML('beforeend', renderedUiElementMetaData);
        } // Add actions buttons before target

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

      target.insertAdjacentHTML('beforebegin', this.renderActionsButtons(this.templateRender)); // Append generated HTML to display current UI Elements of target

      if (!error) {
        target.parentNode.appendChild(elementsContainer);
        var reorder = this.initReorder(document.getElementById(this.id.uiElementContainer), elementsContainer);
        this.initReorderEvent(reorder, target, jsonContent);
      }
    }
    /**
     * Toggle visibility of the ui elements
     */

  }, {
    key: "toggleUiElementsVisibility",
    value: function toggleUiElementsVisibility() {
      var _this = this;

      var toggleButtons = document.querySelectorAll('.' + this.classes.toggleButton);
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = toggleButtons[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var toggleButton = _step3.value;
          toggleButton.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('#' + _this.id.uiElementContainer).classList.toggle('is-expanded');
          });
        }
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
     * Init action for each element, current actions are update and delete
     *
     * @param target
     * @param jsonContent
     */

  }, {
    key: "initActions",
    value: function initActions(target, jsonContent) {
      // Init Delete
      var deleteButtons = target.parentElement.querySelectorAll('.' + this.classes.deleteButton);
      this.log('Init delete button(s), found : ', deleteButtons.length);
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = deleteButtons[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var deleteButton = _step4.value;
          this.initDeleteButton(deleteButton, jsonContent, target);
        } // Init Update

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

      var updateButtons = target.parentElement.querySelectorAll('.' + this.classes.updateButton);
      this.log('Init update button(s), found : ', updateButtons.length);
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = updateButtons[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var updateButton = _step5.value;
          this.initUpdateButton(updateButton, jsonContent, target);
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
    }
    /**
     * Call remove UI Element on click after confirm
     *
     * @param deleteButton
     * @param jsonContent
     * @param target
     */

  }, {
    key: "initDeleteButton",
    value: function initDeleteButton(deleteButton, jsonContent, target) {
      var _self = this;

      deleteButton.onclick = function () {
        // Confirmation for delete
        if (confirm(_self.translations.confirm_delete)) {
          // Retrieve associated element of clicked button
          var elementToRemove = deleteButton.closest('.' + _self.classes.draggableItem); // Retrieve the index of the element

          var removedIndex = _self.getElementIndex(elementToRemove); // Check if index found and element exists


          if (removedIndex === false || typeof jsonContent[removedIndex] === 'undefined') {
            _self.error('Cannot find UI Element in index', {
              index: removedIndex,
              jsonContent: jsonContent
            });

            return;
          }

          _self.removeUiElement(removedIndex, jsonContent, target);

          elementToRemove.remove();
        }
      };
    }
    /**
     * Call controller to load and display form
     *
     * @param updateButton
     * @param jsonContent
     * @param target
     */

  }, {
    key: "initUpdateButton",
    value: function initUpdateButton(updateButton, jsonContent, target) {
      var _self = this;

      updateButton.onclick = function () {
        // Retrieve associated element of clicked button
        var elementToUpdate = updateButton.closest('.' + _self.classes.draggableItem); // Retrieve the index of the element

        var updateIndex = _self.getElementIndex(elementToUpdate); // Check if index found and element exists


        if (updateIndex === false || typeof jsonContent[updateIndex] === 'undefined') {
          _self.error('Cannot find UI Element in index', {
            index: updateIndex,
            jsonContent: jsonContent
          });

          return;
        }

        var uiElementToUpdate = jsonContent[updateIndex];

        _self.log('UI Element to update', uiElementToUpdate);

        _self.loadForm(uiElementToUpdate, updateIndex, jsonContent, target);
      };
    }
    /**
     * Load form for given UI Element
     *
     * @param uiElement [{type: "UI Element Type", fields: {}}]
     * @param uiElementIndex
     * @param jsonContent
     * @param target
     */

  }, {
    key: "loadForm",
    value: function loadForm(uiElement, uiElementIndex, jsonContent, target) {
      var xhr = new XMLHttpRequest();

      var _self = this;

      xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.

        var OK = 200; // status 200 is a successful return.

        if (xhr.readyState === DONE) {
          if (xhr.status === OK) {
            _self.log('Loaded form', {
              response: xhr.responseText,
              xhr: xhr
            }); // Display the modal with the form


            _self.renderModal(xhr.responseText, uiElement.type, uiElementIndex, jsonContent, target);
          } else {
            _self.log('Error during load form', {
              status: xhr.status,
              xhr: xhr
            });
          }
        }
      };

      xhr.open('GET', this.formRoute + '?data=' + encodeURIComponent(JSON.stringify(uiElement)));
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.send();
    }
    /**
     * Display modal with the given HTML
     *
     * @param html
     * @param uiElementType
     * @param uiElementIndex
     * @param jsonContent
     * @param target
     */

  }, {
    key: "renderModal",
    value: function renderModal(html, uiElementType, uiElementIndex, jsonContent, target) {
      // Init modal
      var modal = new tingle_js__WEBPACK_IMPORTED_MODULE_1___default.a.modal({
        footer: true,
        stickyFooter: false,
        closeMethods: ['overlay', 'button', 'escape'],
        cssClass: [this.classes.renderedModal],
        closeLabel: this.translations.close
      });

      var _self = this; // Add the content


      modal.setContent(html); // Init the form inside the modal

      var form = this.initModalForm(uiElementType, uiElementIndex, jsonContent, target); // Button to submit

      modal.addFooterBtn(this.translations.apply_changes, 'tingle-btn tingle-btn--primary tingle-btn--pull-right', function () {
        if (form !== false) {
          form.dispatchEvent(_self.events.updateElement(modal));
        } else {
          _self.log('No form to submit');
        }
      }); // Button to cancel

      modal.addFooterBtn(this.translations.cancel_changes, 'tingle-btn tingle-btn--secondary tingle-btn--pull-right', function () {
        modal.close();
      }); // Display the modal

      modal.open();
    }
    /**
     * Init form in modal if exists
     *
     * @param uiElementType
     * @param uiElementIndex
     * @param jsonContent
     * @param target
     * @returns {boolean|Element}
     */

  }, {
    key: "initModalForm",
    value: function initModalForm(uiElementType, uiElementIndex, jsonContent, target) {
      // Retrieve form in modal
      var form = document.querySelector('.' + this.classes.renderedModal + ' form'); // Do nothing if no form found

      if (form === null) {
        return false;
      }

      var _self = this; // Actions to perform when form is submitted


      form.addEventListener('updateElement', function (e) {
        // Check if UI Element type we want to update exists
        if (typeof _self.uiElements[uiElementType] === 'undefined') {
          _self.error('Cannot find element of type ', uiElementType);

          return;
        } // Update elements with form data and modal to close it if data is valid


        var modal = e.detail;

        _self.updateWithFormData(form, uiElementType, uiElementIndex, modal, jsonContent, target);
      }, false);
      return form;
    }
    /**
     * Update elements with form data
     *
     * @param form
     * @param uiElementType
     * @param uiElementIndex
     * @param jsonContent
     * @param target
     */

  }, {
    key: "updateWithFormData",
    value: function updateWithFormData(form, uiElementType, uiElementIndex, modal, jsonContent, target) {
      // Convert form data to an array
      var updatedElement = this.convertFormToElement(form, uiElementType, modal);
      this.log('Retrieved form element', {
        updatedElement: updatedElement
      }); // Update UI Element

      this.updateUiElement(uiElementIndex, updatedElement, jsonContent, target);
    }
    /**
     * Convert a form to an array
     *
     * @param form
     * @param uiElementType
     * @param modal
     * @returns {Array}
     */

  }, {
    key: "convertFormToElement",
    value: function convertFormToElement(form, uiElementType, modal) {
      // Initialize form data
      var formData = new FormData(form);
      formData.append('uiElementType', uiElementType); // Initialize returned element

      var element = {}; // Initialize AJAX request

      var xhr = new XMLHttpRequest();

      var _self = this;

      xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.

        var OK = 200; // status 200 is a successful return.

        var FORM_ERRORS = 406; // status 406 if form has errors.

        if (xhr.readyState === DONE) {
          if (xhr.status === OK) {
            _self.log('Data sent and validated', {
              form: form,
              response: xhr.responseText,
              xhr: xhr
            });

            var response = JSON.parse(xhr.responseText);

            if (typeof response.element !== "undefined") {
              element = response.element;
            }

            modal.close();
          } else if (xhr.status === FORM_ERRORS) {
            _self.log('Form not valid', {
              form: form,
              response: xhr.responseText,
              xhr: xhr
            });

            var _response = JSON.parse(xhr.responseText);

            if (typeof _response.errors !== "undefined") {
              for (var field in _response.errors) {
                alert(field + ' : ' + _response.errors[field].join('\n'));
              }
            }
          } else {
            _self.error('Error during file upload', {
              form: form,
              status: xhr.status,
              xhr: xhr
            });
          }
        }
      }; // Send data


      xhr.open('POST', this.submitRoute, false);
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.send(formData);
      return element;
    }
    /**
     * Return markup to display UI Element meta data depending on render
     *
     * @param type
     * @param uiElementMetaData {short_description: "Short description", description: "Description", title: "Title", image: "/path/to/image.jpg"}
     * @param templateRender
     */

  }, {
    key: "renderUiElementMetaData",
    value: function renderUiElementMetaData(type, uiElementMetaData, templateRender) {
      if (templateRender === 'sylius') {
        return "\n            <div class=\"ui segment raised ".concat(this.classes.draggableItem, "\" data-ui-element-type=\"").concat(type, "\">\n                <button class=\"ui right floated massive button icon ").concat(this.classes.draggableItemHandler, "\" type=\"button\"><i class=\"icon arrows alternate ").concat(this.classes.draggableItemHandler, "\"></i></button>\n                <div class=\"ui grid\">\n                    <div class=\"four wide column\">\n                        <img class=\"ui small image\" src=\"").concat(uiElementMetaData.image, "\" alt=\"\" width=\"150\" height=\"150\">\n                    </div>\n                    <div class=\"twelve wide column\">\n                        <h2 class=\"ui header\">").concat(uiElementMetaData.title, "</h2>\n                        <p>").concat(uiElementMetaData.description, "</p>\n                        <div class=\"ui buttons\">\n                            <button class=\"ui button ").concat(this.classes.updateButton, "\" type=\"button\">").concat(this.translations.edit, "</button>\n                            <button class=\"ui button negative ").concat(this.classes.deleteButton, "\" type=\"button\">").concat(this.translations["delete"], "</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ");
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
        return "\n            <div class=\"field\">\n                <div class=\"ui buttons\">\n                    <button class=\"ui primary button ".concat(this.classes.toggleButton, "\" type=\"button\">").concat(this.translations["new"], "</button>\n                </div>\n            </div>\n            ");
      }

      this.error('Cannot find render for : ', templateRender);
      return '';
    }
    /**
     * Init draggable elements for a container
     *
     * @param uiElements
     * @param elementsContainer
     */

  }, {
    key: "initReorder",
    value: function initReorder(uiElements, elementsContainer) {
      var _self = this; // First container is the list of UI Elements we can add, the second is the content of the field
      // We can only move elements from the `uiElements` to the `elementsContainer`


      var drake = new dragula__WEBPACK_IMPORTED_MODULE_0___default.a([uiElements, elementsContainer], {
        copy: function copy(el, source) {
          return source === uiElements;
        },
        accepts: function accepts(el, target) {
          return target !== uiElements;
        },
        moves: function moves(el, container, handle) {
          return handle.classList.contains(_self.classes.draggableItemHandler);
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
      var _this2 = this;

      drake.on('drag', function (el, source) {
        // Reorder inside the list
        if (source.id !== _this2.id.uiElementContainer) {
          var index = _this2.getElementIndex(el);

          if (index !== false) {
            _this2.log('Reorder drag start : ', {
              index: index,
              el: el,
              source: source
            });

            _this2.currentIndex = index;
          }
        } // Add a new element from top


        if (source.id === _this2.id.uiElementContainer) {
          _this2.log('Copy drag start : ', {
            el: el,
            source: source
          });
        }
      });
      drake.on('drop', function (el, targetElement, source, sibling) {
        // Reorder inside the list
        if (source.id !== _this2.id.uiElementContainer) {
          var oldIndex = _this2.currentIndex;

          var newIndex = _this2.getElementIndex(el);

          if (newIndex !== false) {
            _this2.log('Reorder drag stop : ', {
              oldIndex: oldIndex,
              newIndex: newIndex,
              el: el,
              targetElement: targetElement,
              source: source,
              sibling: sibling
            });

            _this2.moveUiElement(oldIndex, newIndex, jsonContent, target);
          }
        } // Add a new element from top to Ui Element list


        if (source.id === _this2.id.uiElementContainer && targetElement !== null && targetElement.classList.contains(_this2.classes.uiElementList)) {
          _this2.log('Copy drag stop : ', {
            el: el,
            targetElement: targetElement,
            source: source,
            sibling: sibling
          });

          var _newIndex = _this2.getElementIndex(el);

          var type = el.dataset.uiElementType;

          if (typeof type !== 'undefined') {
            _this2.addUiElement(type, _newIndex, jsonContent, target);
          } else {
            _this2.error('Cannot find `uiElementType` to add in data set', {
              dataSet: el.dataset,
              el: el
            });
          }
        }
      });
    }
    /**
     * Retrieve the index of element in UI Elements list
     *
     * @param el
     * @returns {boolean|number}
     */

  }, {
    key: "getElementIndex",
    value: function getElementIndex(el) {
      if (!el.parentElement) {
        return false;
      }

      return [].slice.call(el.parentElement.children).indexOf(el);
    }
    /**
     * Update the JSON to add an UI element
     *
     * @param type
     * @param index
     * @param jsonContent
     * @param target
     */

  }, {
    key: "addUiElement",
    value: function addUiElement(type, index, jsonContent, target) {
      this.log('Add UI Element : ', {
        type: type,
        index: index,
        target: target,
        beforeMoveJson: jsonContent
      }); // Initialize new UI Element of wanted type

      var uiElement = {
        type: type,
        fields: {}
      }; // Add the element in JSON

      jsonContent.splice(index, 0, uiElement); // Update the textarea with JSON

      target.value = JSON.stringify(jsonContent);
      this.log('Added UI Element : ', {
        afterMoveJson: jsonContent,
        newTargetValue: target.value
      }); // Initialize actions for the new UI Element, it actually recreate also events for existing elements

      this.initActions(target, jsonContent);
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
          this.error('Element moved outside the list', {
            newIndex: newIndex,
            sizeList: jsonContent.length
          });
        } // Move the UI element to the selected index and change position of others


        jsonContent.splice(newIndex, 0, jsonContent.splice(oldIndex, 1)[0]); // Update the textarea with JSON

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
     * Update the JSON for a given element
     *
     * @param index
     * @param element
     * @param jsonContent
     * @param target
     */

  }, {
    key: "updateUiElement",
    value: function updateUiElement(index, element, jsonContent, target) {
      if (typeof jsonContent[index] !== 'undefined') {
        this.log('Update UI Element : ', {
          index: index,
          element: element,
          jsonContent: jsonContent,
          target: target
        }); // Set new content for UI Element

        jsonContent[index] = element; // Update the textarea with JSON

        target.value = JSON.stringify(jsonContent);
        this.log('Updated UI Element : ', {
          index: index,
          element: element,
          jsonContent: jsonContent,
          target: target
        });
      } else {
        this.error('Cannot found element for index', {
          index: index,
          element: element,
          jsonContent: jsonContent,
          target: target
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
      }); // Remove the element for this index, it will change indexes for other elements too

      jsonContent.splice(removedIndex, 1); // Update the textarea with JSON

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
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = this.targets[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var target = _step6.value;
          target.removeAttribute('hidden');
        } // Remove generated blocks

      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
            _iterator6["return"]();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = document.querySelectorAll('.' + this.classes.uiElementList)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var _target = _step7.value;

          _target.remove();
        } // Display error

      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
            _iterator7["return"]();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      console.error(description);
      console.error(content);
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
      // Display message for debug mode
      if (this.debug) {
        console.log(description);

        if (content) {
          console.log(content);
        }
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

/***/ "./node_modules/tingle.js/dist/tingle.min.js":
/*!***************************************************!*\
  !*** ./node_modules/tingle.js/dist/tingle.min.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t,o){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (o),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){var o=!1;function t(t){this.opts=function(){for(var t=1;t<arguments.length;t++)for(var o in arguments[t])arguments[t].hasOwnProperty(o)&&(arguments[0][o]=arguments[t][o]);return arguments[0]}({},{onClose:null,onOpen:null,beforeOpen:null,beforeClose:null,stickyFooter:!1,footer:!1,cssClass:[],closeLabel:"Close",closeMethods:["overlay","button","escape"]},t),this.init()}function e(){this.modalBoxFooter&&(this.modalBoxFooter.style.width=this.modalBox.clientWidth+"px",this.modalBoxFooter.style.left=this.modalBox.offsetLeft+"px")}return t.prototype.init=function(){if(!this.modal)return function(){this.modal=document.createElement("div"),this.modal.classList.add("tingle-modal"),0!==this.opts.closeMethods.length&&-1!==this.opts.closeMethods.indexOf("overlay")||this.modal.classList.add("tingle-modal--noOverlayClose");this.modal.style.display="none",this.opts.cssClass.forEach(function(t){"string"==typeof t&&this.modal.classList.add(t)},this),-1!==this.opts.closeMethods.indexOf("button")&&(this.modalCloseBtn=document.createElement("button"),this.modalCloseBtn.type="button",this.modalCloseBtn.classList.add("tingle-modal__close"),this.modalCloseBtnIcon=document.createElement("span"),this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"),this.modalCloseBtnIcon.innerHTML='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.3 9.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3L5 6.4l3.3 3.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L6.4 5l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L5 3.6 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L3.6 5 .3 8.3c-.4.4-.4 1 0 1.4z" fill="#000" fill-rule="nonzero"/></svg>',this.modalCloseBtnLabel=document.createElement("span"),this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"),this.modalCloseBtnLabel.innerHTML=this.opts.closeLabel,this.modalCloseBtn.appendChild(this.modalCloseBtnIcon),this.modalCloseBtn.appendChild(this.modalCloseBtnLabel));this.modalBox=document.createElement("div"),this.modalBox.classList.add("tingle-modal-box"),this.modalBoxContent=document.createElement("div"),this.modalBoxContent.classList.add("tingle-modal-box__content"),this.modalBox.appendChild(this.modalBoxContent),-1!==this.opts.closeMethods.indexOf("button")&&this.modal.appendChild(this.modalCloseBtn);this.modal.appendChild(this.modalBox)}.call(this),function(){this._events={clickCloseBtn:this.close.bind(this),clickOverlay:function(t){-1!==this.opts.closeMethods.indexOf("overlay")&&!function(t,o){for(;(t=t.parentElement)&&!t.classList.contains(o););return t}(t.target,"tingle-modal")&&t.clientX<this.modal.clientWidth&&this.close()}.bind(this),resize:this.checkOverflow.bind(this),keyboardNav:function(t){-1!==this.opts.closeMethods.indexOf("escape")&&27===t.which&&this.isOpen()&&this.close()}.bind(this)},-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.addEventListener("click",this._events.clickCloseBtn);this.modal.addEventListener("mousedown",this._events.clickOverlay),window.addEventListener("resize",this._events.resize),document.addEventListener("keydown",this._events.keyboardNav)}.call(this),document.body.insertBefore(this.modal,document.body.firstChild),this.opts.footer&&this.addFooter(),this},t.prototype._busy=function(t){o=t},t.prototype._isBusy=function(){return o},t.prototype.destroy=function(){null!==this.modal&&(this.isOpen()&&this.close(!0),function(){-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.removeEventListener("click",this._events.clickCloseBtn);this.modal.removeEventListener("mousedown",this._events.clickOverlay),window.removeEventListener("resize",this._events.resize),document.removeEventListener("keydown",this._events.keyboardNav)}.call(this),this.modal.parentNode.removeChild(this.modal),this.modal=null)},t.prototype.isOpen=function(){return!!this.modal.classList.contains("tingle-modal--visible")},t.prototype.open=function(){if(!this._isBusy()){this._busy(!0);var t=this;return"function"==typeof t.opts.beforeOpen&&t.opts.beforeOpen(),this.modal.style.removeProperty?this.modal.style.removeProperty("display"):this.modal.style.removeAttribute("display"),this._scrollPosition=window.pageYOffset,document.body.classList.add("tingle-enabled"),document.body.style.top=-this._scrollPosition+"px",this.setStickyFooter(this.opts.stickyFooter),this.modal.classList.add("tingle-modal--visible"),"function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),t._busy(!1),this.checkOverflow(),this}},t.prototype.close=function(t){if(!this._isBusy()){if(this._busy(!0),!1,"function"==typeof this.opts.beforeClose)if(!this.opts.beforeClose.call(this))return void this._busy(!1);document.body.classList.remove("tingle-enabled"),window.scrollTo({top:this._scrollPosition,behavior:"instant"}),document.body.style.top=null,this.modal.classList.remove("tingle-modal--visible");var o=this;o.modal.style.display="none","function"==typeof o.opts.onClose&&o.opts.onClose.call(this),o._busy(!1)}},t.prototype.setContent=function(t){return"string"==typeof t?this.modalBoxContent.innerHTML=t:(this.modalBoxContent.innerHTML="",this.modalBoxContent.appendChild(t)),this.isOpen()&&this.checkOverflow(),this},t.prototype.getContent=function(){return this.modalBoxContent},t.prototype.addFooter=function(){return function(){this.modalBoxFooter=document.createElement("div"),this.modalBoxFooter.classList.add("tingle-modal-box__footer"),this.modalBox.appendChild(this.modalBoxFooter)}.call(this),this},t.prototype.setFooterContent=function(t){return this.modalBoxFooter.innerHTML=t,this},t.prototype.getFooterContent=function(){return this.modalBoxFooter},t.prototype.setStickyFooter=function(t){return this.isOverflow()||(t=!1),t?this.modalBox.contains(this.modalBoxFooter)&&(this.modalBox.removeChild(this.modalBoxFooter),this.modal.appendChild(this.modalBoxFooter),this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"),e.call(this),this.modalBoxContent.style["padding-bottom"]=this.modalBoxFooter.clientHeight+20+"px"):this.modalBoxFooter&&(this.modalBox.contains(this.modalBoxFooter)||(this.modal.removeChild(this.modalBoxFooter),this.modalBox.appendChild(this.modalBoxFooter),this.modalBoxFooter.style.width="auto",this.modalBoxFooter.style.left="",this.modalBoxContent.style["padding-bottom"]="",this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky"))),this},t.prototype.addFooterBtn=function(t,o,e){var s=document.createElement("button");return s.innerHTML=t,s.addEventListener("click",e),"string"==typeof o&&o.length&&o.split(" ").forEach(function(t){s.classList.add(t)}),this.modalBoxFooter.appendChild(s),s},t.prototype.resize=function(){console.warn("Resize is deprecated and will be removed in version 1.0")},t.prototype.isOverflow=function(){return window.innerHeight<=this.modalBox.clientHeight},t.prototype.checkOverflow=function(){this.modal.classList.contains("tingle-modal--visible")&&(this.isOverflow()?this.modal.classList.add("tingle-modal--overflow"):this.modal.classList.remove("tingle-modal--overflow"),!this.isOverflow()&&this.opts.stickyFooter?this.setStickyFooter(!1):this.isOverflow()&&this.opts.stickyFooter&&(e.call(this),this.setStickyFooter(!0)))},{modal:t}});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXRvYS9hdG9hLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb250cmEvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbnRyYS9lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcm9zc3ZlbnQvc3JjL2Nyb3NzdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3Jvc3N2ZW50L3NyYy9ldmVudG1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3VzdG9tLWV2ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kcmFndWxhL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RyYWd1bGEvZHJhZ3VsYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aWNreS90aWNreS1icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW5nbGUuanMvZGlzdC90aW5nbGUubWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOlsiTWJpekNtc0ZpZWxkcyIsImNvbmZpZyIsInRlbXBsYXRlUmVuZGVyIiwiZGVidWciLCJ0YXJnZXRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5lciIsImNvbnRhaW5lclNlbGVjdG9yIiwidWlFbGVtZW50cyIsInRyYW5zbGF0aW9ucyIsImZvcm1Sb3V0ZSIsInN1Ym1pdFJvdXRlIiwibG9nIiwibGVuZ3RoIiwiaWQiLCJ1aUVsZW1lbnRDb250YWluZXIiLCJjbGFzc2VzIiwidWlFbGVtZW50TGlzdCIsImRyb3BhYmxlQ29udGFpbmVyIiwiZHJhZ2dhYmxlQ29udGFpbmVyIiwiZHJhZ2dhYmxlSXRlbSIsImRyYWdnYWJsZUl0ZW1IYW5kbGVyIiwiZGVsZXRlQnV0dG9uIiwidXBkYXRlQnV0dG9uIiwidG9nZ2xlQnV0dG9uIiwicmVuZGVyZWRNb2RhbCIsImV2ZW50cyIsInVpRWxlbWVudHNCdWlsdCIsIkV2ZW50IiwidXBkYXRlRWxlbWVudCIsIm1vZGFsIiwiQ3VzdG9tRXZlbnQiLCJfc2VsZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaW5pdEZpZWxkcyIsInRvZ2dsZVVpRWxlbWVudHNWaXNpYmlsaXR5IiwiaW5pdFVpRWxlbWVudHMiLCJ0YXJnZXQiLCJ1aUVsZW1lbnRzQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImVycm9yIiwidHlwZSIsInVpRWxlbWVudCIsInJlbmRlcmVkVWlFbGVtZW50IiwicmVuZGVyVWlFbGVtZW50TWV0YURhdGEiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiZGlzcGF0Y2hFdmVudCIsImNvbnRlbnQiLCJ2YWx1ZSIsImpzb25Db250ZW50IiwiSlNPTiIsInBhcnNlIiwiaW5pdEZpZWxkIiwiaW5pdEFjdGlvbnMiLCJzZXRBdHRyaWJ1dGUiLCJlbGVtZW50c0NvbnRhaW5lciIsInVpRWxlbWVudE1ldGFEYXRhIiwicmVuZGVyZWRVaUVsZW1lbnRNZXRhRGF0YSIsInJlbmRlckFjdGlvbnNCdXR0b25zIiwicGFyZW50Tm9kZSIsImFwcGVuZENoaWxkIiwicmVvcmRlciIsImluaXRSZW9yZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbml0UmVvcmRlckV2ZW50IiwidG9nZ2xlQnV0dG9ucyIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlIiwiZGVsZXRlQnV0dG9ucyIsInBhcmVudEVsZW1lbnQiLCJpbml0RGVsZXRlQnV0dG9uIiwidXBkYXRlQnV0dG9ucyIsImluaXRVcGRhdGVCdXR0b24iLCJvbmNsaWNrIiwiY29uZmlybSIsImNvbmZpcm1fZGVsZXRlIiwiZWxlbWVudFRvUmVtb3ZlIiwiY2xvc2VzdCIsInJlbW92ZWRJbmRleCIsImdldEVsZW1lbnRJbmRleCIsImluZGV4IiwicmVtb3ZlVWlFbGVtZW50IiwicmVtb3ZlIiwiZWxlbWVudFRvVXBkYXRlIiwidXBkYXRlSW5kZXgiLCJ1aUVsZW1lbnRUb1VwZGF0ZSIsImxvYWRGb3JtIiwidWlFbGVtZW50SW5kZXgiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIkRPTkUiLCJPSyIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsInJlc3BvbnNlVGV4dCIsInJlbmRlck1vZGFsIiwib3BlbiIsImVuY29kZVVSSUNvbXBvbmVudCIsInN0cmluZ2lmeSIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwiaHRtbCIsInVpRWxlbWVudFR5cGUiLCJ0aW5nbGUiLCJmb290ZXIiLCJzdGlja3lGb290ZXIiLCJjbG9zZU1ldGhvZHMiLCJjc3NDbGFzcyIsImNsb3NlTGFiZWwiLCJjbG9zZSIsInNldENvbnRlbnQiLCJmb3JtIiwiaW5pdE1vZGFsRm9ybSIsImFkZEZvb3RlckJ0biIsImFwcGx5X2NoYW5nZXMiLCJjYW5jZWxfY2hhbmdlcyIsImRldGFpbCIsInVwZGF0ZVdpdGhGb3JtRGF0YSIsInVwZGF0ZWRFbGVtZW50IiwiY29udmVydEZvcm1Ub0VsZW1lbnQiLCJ1cGRhdGVVaUVsZW1lbnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZWxlbWVudCIsIkZPUk1fRVJST1JTIiwiZXJyb3JzIiwiZmllbGQiLCJhbGVydCIsImpvaW4iLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJlZGl0IiwiZHJha2UiLCJkcmFndWxhIiwiY29weSIsImVsIiwic291cmNlIiwiYWNjZXB0cyIsIm1vdmVzIiwiaGFuZGxlIiwiY29udGFpbnMiLCJvbiIsImN1cnJlbnRJbmRleCIsInRhcmdldEVsZW1lbnQiLCJzaWJsaW5nIiwib2xkSW5kZXgiLCJuZXdJbmRleCIsIm1vdmVVaUVsZW1lbnQiLCJkYXRhc2V0IiwiYWRkVWlFbGVtZW50IiwiZGF0YVNldCIsInNsaWNlIiwiY2FsbCIsImNoaWxkcmVuIiwiaW5kZXhPZiIsImJlZm9yZU1vdmVKc29uIiwiZmllbGRzIiwic3BsaWNlIiwiYWZ0ZXJNb3ZlSnNvbiIsIm5ld1RhcmdldFZhbHVlIiwic2l6ZUxpc3QiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjb25zb2xlIiwiY21zIiwibW9uc2lldXJiaXpDbXNQbHVnaW5Db25maWciLCJpbml0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVy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OztBQUVIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixxQkFBcUI7QUFDckIsT0FBTztBQUNQLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0RBQWtEO0FBQzdFLHNCQUFzQixlQUFlLGVBQWUsRUFB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QUE7QUFBQTtBQUFBO0FBQUEsb0dBQUMsQ0FBQyxTQUF3RCxDQUFDLGlCQUFpQixTQUFTLGNBQWMscUJBQXFCLFlBQVksbUJBQW1CLGdHQUFnRyxvQkFBb0IsR0FBRyxFQUFFLDhKQUE4SixnQkFBZ0IsYUFBYSxtSkFBbUosbUNBQW1DLGlDQUFpQyw4TkFBOE4sdUVBQXVFLGdEQUFnRCxtOEJBQW04Qix5VkFBeVYsc0NBQXNDLHVCQUF1QixjQUFjLDZEQUE2RCwrREFBK0QsS0FBSyw4Q0FBOEMsRUFBRSxTQUFTLDBFQUEwRSx5RUFBeUUseUZBQXlGLFlBQVksd0hBQXdILHVMQUF1TCxvSEFBb0gsK0JBQStCLElBQUksZ0NBQWdDLFNBQVMsZ0NBQWdDLDZEQUE2RCwwSEFBMEgsZ01BQWdNLDJFQUEyRSwrQkFBK0IsK0RBQStELDZCQUE2QixvQkFBb0IsZUFBZSxXQUFXLDhmQUE4ZiwrQkFBK0Isb0JBQW9CLDhIQUE4SCxrRUFBa0UsNENBQTRDLG9GQUFvRixXQUFXLHVHQUF1RyxvQ0FBb0MsMktBQTJLLG1DQUFtQyw0QkFBNEIsa0NBQWtDLGtCQUFrQiwrSkFBK0osaUJBQWlCLDBDQUEwQyw0Q0FBNEMseUNBQXlDLDJCQUEyQix5Q0FBeUMsOHJCQUE4ckIsMENBQTBDLHVDQUF1QyxrSEFBa0gsbUJBQW1CLHVDQUF1QywrQkFBK0Isd0VBQXdFLG1DQUFtQyxzREFBc0Qsc0NBQXNDLDRVQUE0VSxFQUFFLFNBQVMsRTs7Ozs7Ozs7Ozs7QUNBdmxPOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QyIsImZpbGUiOiJqcy9jbXMtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9wdWJsaWMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2FwcC5qc1wiKTtcbiIsImltcG9ydCBkcmFndWxhIGZyb20gJ2RyYWd1bGEnO1xuaW1wb3J0IHRpbmdsZSBmcm9tICd0aW5nbGUuanMnO1xuXG4vKipcbiAqIENsYXNzIHRvIG1hbmFnZSBDTVMgZmllbGRzIHdpdGggVUkgRWxlbWVudHNcbiAqL1xuY2xhc3MgTWJpekNtc0ZpZWxkcyB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBmb3IgTWJpekNtc0ZpZWxkcywgc2VlIGNvbmZpZyBpbiBgc3JjL1Jlc291cmNlcy92aWV3cy9BZG1pbi9hcHBfamF2YXNjcmlwdC5odG1sLnR3aWdgXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICAvLyBDb25maWd1cmF0aW9uIG9mIHBsdWdpblxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVJlbmRlciA9IHRoaXMuY29uZmlnLnRlbXBsYXRlUmVuZGVyO1xuICAgICAgICB0aGlzLmRlYnVnID0gdGhpcy5jb25maWcuZGVidWc7XG4gICAgICAgIHRoaXMudGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLnF1ZXJ5U2VsZWN0b3IpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmNvbnRhaW5lclNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy51aUVsZW1lbnRzID0gdGhpcy5jb25maWcudWlFbGVtZW50cztcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbnMgPSB0aGlzLmNvbmZpZy50cmFuc2xhdGlvbnM7XG4gICAgICAgIHRoaXMuZm9ybVJvdXRlID0gdGhpcy5jb25maWcuZm9ybVJvdXRlO1xuICAgICAgICB0aGlzLnN1Ym1pdFJvdXRlID0gdGhpcy5jb25maWcuc3VibWl0Um91dGU7XG4gICAgICAgIGlmICh0aGlzLmRlYnVnKSB7XG4gICAgICAgICAgICB0aGlzLmxvZygnUGx1Z2luIGNvbmZpZ3VyYXRpb24gOicsIHRoaXMuY29uZmlnKTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdNYXRjaGVkIGVsZW1lbnQocykgOicsIHRoaXMudGFyZ2V0cy5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW50ZXJuYWwgYXR0cmlidXRlc1xuICAgICAgICB0aGlzLmlkID0ge1xuICAgICAgICAgICAgdWlFbGVtZW50Q29udGFpbmVyOiAnbWJpei1jbXMtZWxlbWVudHMtY29udGFpbmVyJyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGFzc2VzID0ge1xuICAgICAgICAgICAgdWlFbGVtZW50TGlzdDogJ21iaXotY21zLWNvbXBvbmVudC11aS1lbGVtZW50cycsXG4gICAgICAgICAgICBkcm9wYWJsZUNvbnRhaW5lcjogJ21iaXotY21zLWRyb3BhYmxlLWNvbnRhaW5lcicsXG4gICAgICAgICAgICBkcmFnZ2FibGVDb250YWluZXI6ICdtYml6LWNtcy1kcmFnZ2FibGUtY29udGFpbmVyJyxcbiAgICAgICAgICAgIGRyYWdnYWJsZUl0ZW06ICdtYml6LWNtcy1kcmFnZ2FibGUtaXRlbScsXG4gICAgICAgICAgICBkcmFnZ2FibGVJdGVtSGFuZGxlcjogJ21iaXotY21zLWRyYWdnYWJsZS1pdGVtLWhhbmRsZXInLFxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uOiAnbWJpei1jbXMtZGVsZXRlLWJ1dHRvbicsXG4gICAgICAgICAgICB1cGRhdGVCdXR0b246ICdtYml6LWNtcy11cGRhdGUtYnV0dG9uJyxcbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbjogJ21iaXotY21zLXRvZ2dsZS1idXR0b24nLFxuICAgICAgICAgICAgcmVuZGVyZWRNb2RhbDogJ21iaXotY21zLXJlbmRyZWQtbW9kYWwnLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgICAgICAgIHVpRWxlbWVudHNCdWlsdDogbmV3IEV2ZW50KCd1aUVsZW1lbnRzQnVpbHQnKSxcbiAgICAgICAgICAgIHVwZGF0ZUVsZW1lbnQ6IGZ1bmN0aW9uKG1vZGFsKSB7IHJldHVybiBuZXcgQ3VzdG9tRXZlbnQoJ3VwZGF0ZUVsZW1lbnQnLCB7J2RldGFpbCc6IG1vZGFsfSkgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGVhY2ggQ01TIGVsZW1lbnRcbiAgICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgICAvLyBJbml0IG9ubHkgaWYgd2UgbWF0Y2ggYXQgbGVhc3Qgb25lIHRhcmdldFxuICAgICAgICBpZiAodGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IF9zZWxmID0gdGhpcztcbiAgICAgICAgICAgIC8vIEluaXQgZmllbGRzIG9ubHkgd2hlbiBVSSBFbGVtZW50cyBhcmUgYnVpbHRcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3VpRWxlbWVudHNCdWlsdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBfc2VsZi5sb2coJ1VpIEVsZW1lbnRzIGNvbnRhaW5lciBpcyBidWlsdCcsIGUpO1xuICAgICAgICAgICAgICAgIF9zZWxmLmluaXRGaWVsZHMoKTtcbiAgICAgICAgICAgICAgICBfc2VsZi50b2dnbGVVaUVsZW1lbnRzVmlzaWJpbGl0eSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmluaXRVaUVsZW1lbnRzKHRoaXMuY29udGFpbmVyLCB0aGlzLnVpRWxlbWVudHMpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IHRoZSBVSSBFbGVtZW50cyBhcmVhXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHVpRWxlbWVudHNcbiAgICAgKi9cbiAgICBpbml0VWlFbGVtZW50cyh0YXJnZXQsIHVpRWxlbWVudHMpIHtcbiAgICAgICAgdGhpcy5sb2coJ0luaXQgVUkgRWxlbWVudHMgOicsIHVpRWxlbWVudHMpO1xuXG4gICAgICAgIC8vIEluaXQgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IHVpRWxlbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdWlFbGVtZW50c0NvbnRhaW5lci5pZCA9IHRoaXMuaWQudWlFbGVtZW50Q29udGFpbmVyO1xuICAgICAgICB1aUVsZW1lbnRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmRyb3BhYmxlQ29udGFpbmVyLCB0aGlzLmNsYXNzZXMudWlFbGVtZW50TGlzdCwgJ2lzLWV4cGFuZGVkJyk7XG5cbiAgICAgICAgLy8gTG9vcCBvbiBVSSBFbGVtZW50c1xuICAgICAgICBsZXQgZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgdHlwZSBpbiB1aUVsZW1lbnRzKSB7XG4gICAgICAgICAgICBsZXQgdWlFbGVtZW50ID0gdWlFbGVtZW50c1t0eXBlXVxuICAgICAgICAgICAgdGhpcy5sb2coJ0luaXQgVUkgRWxlbWVudCA6JywgdWlFbGVtZW50KTtcblxuICAgICAgICAgICAgbGV0IHJlbmRlcmVkVWlFbGVtZW50ID0gdGhpcy5yZW5kZXJVaUVsZW1lbnRNZXRhRGF0YSh0eXBlLCB1aUVsZW1lbnQsIHRoaXMudGVtcGxhdGVSZW5kZXIpO1xuICAgICAgICAgICAgaWYgKHJlbmRlcmVkVWlFbGVtZW50ID09PSAnJykge1xuICAgICAgICAgICAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdWlFbGVtZW50c0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHJlbmRlcmVkVWlFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFwcGVuZCBnZW5lcmF0ZWQgSFRNTCB0byBkaXNwbGF5IGN1cnJlbnQgVUkgRWxlbWVudHMgb2YgdGFyZ2V0XG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUodWlFbGVtZW50c0NvbnRhaW5lciwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuZGlzcGF0Y2hFdmVudCh0aGlzLmV2ZW50cy51aUVsZW1lbnRzQnVpbHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBlYWNoIENNUyBmaWVsZHNcbiAgICAgKi9cbiAgICBpbml0RmllbGRzKCkge1xuICAgICAgICBmb3IgKGxldCB0YXJnZXQgb2YgdGhpcy50YXJnZXRzKSB7XG4gICAgICAgICAgICBsZXQgY29udGVudCA9IHRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdUYXJnZXRcXCdzIGNvbnRlbnQgOicsIGNvbnRlbnQpO1xuICAgICAgICAgICAgbGV0IGpzb25Db250ZW50O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBqc29uQ29udGVudCA9IEpTT04ucGFyc2UoY29udGVudCk7XG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCdVbmFibGUgdG8gcGFyc2UgdGhlIENNUyBKU09OIGZvciB0aGlzIGNvbnRlbnQgOiAnLCBjb250ZW50KTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5pdEZpZWxkKHRhcmdldCwganNvbkNvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy5pbml0QWN0aW9ucyh0YXJnZXQsIGpzb25Db250ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgdGhlIGZpZWxkIGRlcGVuZGluZyBvbiBpdCdzIHBhcnNlZCBjb250ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICogQHBhcmFtIGpzb25Db250ZW50IFt7dHlwZTogXCJVSSBFbGVtZW50IFR5cGVcIiwgZmllbGRzOiB7fX1dXG4gICAgICovXG4gICAgaW5pdEZpZWxkKHRhcmdldCwganNvbkNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5sb2coJ0luaXQgZmllbGQgd2l0aCBwYXJzZWQgY29udGVudCA6JywganNvbkNvbnRlbnQpO1xuXG4gICAgICAgIC8vIEhpZGUgb3JpZ2luYWwgaW5wdXRcbiAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICAvLyBJbml0IGNvbnRhaW5lclxuICAgICAgICBjb25zdCBlbGVtZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5kcmFnZ2FibGVDb250YWluZXIsIHRoaXMuY2xhc3Nlcy51aUVsZW1lbnRMaXN0KTtcblxuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZVJlbmRlciA9PT0gJ3N5bGl1cycpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3VpJywgJ3NlZ21lbnQnLCB0aGlzLmNsYXNzZXMuZHJhZ2dhYmxlQ29udGFpbmVyLCB0aGlzLmNsYXNzZXMudWlFbGVtZW50TGlzdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMb29wIG9uIFVJIEVsZW1lbnRzXG4gICAgICAgIGxldCBlcnJvciA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCB1aUVsZW1lbnQgb2YganNvbkNvbnRlbnQpIHtcbiAgICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBVaSBFbGVtZW50IHR5cGVcbiAgICAgICAgICAgIHRoaXMubG9nKCdJbml0IFVJIEVsZW1lbnQgOicsIHVpRWxlbWVudCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudWlFbGVtZW50c1t1aUVsZW1lbnQudHlwZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoJ0Nhbm5vdCBmaW5kIGVsZW1lbnQgb2YgdHlwZSAnLCB1aUVsZW1lbnQudHlwZSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlbmRlciBVaSBFbGVtZW50IG1ldGEgZGF0YVxuICAgICAgICAgICAgbGV0IHVpRWxlbWVudE1ldGFEYXRhID0gdGhpcy51aUVsZW1lbnRzW3VpRWxlbWVudC50eXBlXTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdNYXRjaGVkIFVpIEVsZW1lbnQgd2l0aCBtZXRhIGRhdGEgOicsIHVpRWxlbWVudE1ldGFEYXRhKTtcbiAgICAgICAgICAgIGxldCByZW5kZXJlZFVpRWxlbWVudE1ldGFEYXRhID0gdGhpcy5yZW5kZXJVaUVsZW1lbnRNZXRhRGF0YSh1aUVsZW1lbnQudHlwZSwgdWlFbGVtZW50TWV0YURhdGEsIHRoaXMudGVtcGxhdGVSZW5kZXIpO1xuICAgICAgICAgICAgaWYgKHJlbmRlcmVkVWlFbGVtZW50TWV0YURhdGEgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGQgcmVuZGVyZWQgVWkgRWxlbWVudCBtZXRhIGRhdGEgaW4gY29udGFpbmVyXG4gICAgICAgICAgICB0aGlzLmxvZygnUmVuZGVyZWQgVWkgRWxlbWVudCBtZXRhIGRhdGEgOicsIHJlbmRlcmVkVWlFbGVtZW50TWV0YURhdGEpO1xuICAgICAgICAgICAgZWxlbWVudHNDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCByZW5kZXJlZFVpRWxlbWVudE1ldGFEYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBhY3Rpb25zIGJ1dHRvbnMgYmVmb3JlIHRhcmdldFxuICAgICAgICB0YXJnZXQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIHRoaXMucmVuZGVyQWN0aW9uc0J1dHRvbnModGhpcy50ZW1wbGF0ZVJlbmRlcikpO1xuXG4gICAgICAgIC8vIEFwcGVuZCBnZW5lcmF0ZWQgSFRNTCB0byBkaXNwbGF5IGN1cnJlbnQgVUkgRWxlbWVudHMgb2YgdGFyZ2V0XG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIHRhcmdldC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGVsZW1lbnRzQ29udGFpbmVyKTtcbiAgICAgICAgICAgIGxldCByZW9yZGVyID0gdGhpcy5pbml0UmVvcmRlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkLnVpRWxlbWVudENvbnRhaW5lciksIGVsZW1lbnRzQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFJlb3JkZXJFdmVudChyZW9yZGVyLCB0YXJnZXQsIGpzb25Db250ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSB2aXNpYmlsaXR5IG9mIHRoZSB1aSBlbGVtZW50c1xuICAgICAqL1xuICAgIHRvZ2dsZVVpRWxlbWVudHNWaXNpYmlsaXR5KCkge1xuICAgICAgICBjb25zdCB0b2dnbGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLmNsYXNzZXMudG9nZ2xlQnV0dG9uKTtcblxuICAgICAgICBmb3IgKGxldCB0b2dnbGVCdXR0b24gb2YgdG9nZ2xlQnV0dG9ucykge1xuICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuaWQudWlFbGVtZW50Q29udGFpbmVyKS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1leHBhbmRlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGFjdGlvbiBmb3IgZWFjaCBlbGVtZW50LCBjdXJyZW50IGFjdGlvbnMgYXJlIHVwZGF0ZSBhbmQgZGVsZXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICogQHBhcmFtIGpzb25Db250ZW50XG4gICAgICovXG4gICAgaW5pdEFjdGlvbnModGFyZ2V0LCBqc29uQ29udGVudCkge1xuICAgICAgICAvLyBJbml0IERlbGV0ZVxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9ucyA9IHRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5jbGFzc2VzLmRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIHRoaXMubG9nKCdJbml0IGRlbGV0ZSBidXR0b24ocyksIGZvdW5kIDogJywgZGVsZXRlQnV0dG9ucy5sZW5ndGgpXG4gICAgICAgIGZvciAobGV0IGRlbGV0ZUJ1dHRvbiBvZiBkZWxldGVCdXR0b25zKSB7XG4gICAgICAgICAgICB0aGlzLmluaXREZWxldGVCdXR0b24oZGVsZXRlQnV0dG9uLCBqc29uQ29udGVudCwgdGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgVXBkYXRlXG4gICAgICAgIGxldCB1cGRhdGVCdXR0b25zID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLmNsYXNzZXMudXBkYXRlQnV0dG9uKTtcbiAgICAgICAgdGhpcy5sb2coJ0luaXQgdXBkYXRlIGJ1dHRvbihzKSwgZm91bmQgOiAnLCB1cGRhdGVCdXR0b25zLmxlbmd0aClcbiAgICAgICAgZm9yIChsZXQgdXBkYXRlQnV0dG9uIG9mIHVwZGF0ZUJ1dHRvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFVwZGF0ZUJ1dHRvbih1cGRhdGVCdXR0b24sIGpzb25Db250ZW50LCB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbCByZW1vdmUgVUkgRWxlbWVudCBvbiBjbGljayBhZnRlciBjb25maXJtXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGVsZXRlQnV0dG9uXG4gICAgICogQHBhcmFtIGpzb25Db250ZW50XG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqL1xuICAgIGluaXREZWxldGVCdXR0b24oZGVsZXRlQnV0dG9uLCBqc29uQ29udGVudCwgdGFyZ2V0KSB7XG4gICAgICAgIGxldCBfc2VsZiA9IHRoaXM7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBDb25maXJtYXRpb24gZm9yIGRlbGV0ZVxuICAgICAgICAgICAgaWYgKGNvbmZpcm0oX3NlbGYudHJhbnNsYXRpb25zLmNvbmZpcm1fZGVsZXRlKSkge1xuICAgICAgICAgICAgICAgIC8vIFJldHJpZXZlIGFzc29jaWF0ZWQgZWxlbWVudCBvZiBjbGlja2VkIGJ1dHRvblxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50VG9SZW1vdmUgPSBkZWxldGVCdXR0b24uY2xvc2VzdCgnLicgKyBfc2VsZi5jbGFzc2VzLmRyYWdnYWJsZUl0ZW0pO1xuICAgICAgICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBpbmRleCBvZiB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIGxldCByZW1vdmVkSW5kZXggPSBfc2VsZi5nZXRFbGVtZW50SW5kZXgoZWxlbWVudFRvUmVtb3ZlKTtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBpbmRleCBmb3VuZCBhbmQgZWxlbWVudCBleGlzdHNcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlZEluZGV4ID09PSBmYWxzZSB8fCB0eXBlb2YganNvbkNvbnRlbnRbcmVtb3ZlZEluZGV4XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgX3NlbGYuZXJyb3IoJ0Nhbm5vdCBmaW5kIFVJIEVsZW1lbnQgaW4gaW5kZXgnLCB7aW5kZXg6IHJlbW92ZWRJbmRleCwganNvbkNvbnRlbnQ6IGpzb25Db250ZW50fSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3NlbGYucmVtb3ZlVWlFbGVtZW50KHJlbW92ZWRJbmRleCwganNvbkNvbnRlbnQsIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFRvUmVtb3ZlLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGwgY29udHJvbGxlciB0byBsb2FkIGFuZCBkaXNwbGF5IGZvcm1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cGRhdGVCdXR0b25cbiAgICAgKiBAcGFyYW0ganNvbkNvbnRlbnRcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICovXG4gICAgaW5pdFVwZGF0ZUJ1dHRvbih1cGRhdGVCdXR0b24sIGpzb25Db250ZW50LCB0YXJnZXQpIHtcbiAgICAgICAgbGV0IF9zZWxmID0gdGhpcztcbiAgICAgICAgdXBkYXRlQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIFJldHJpZXZlIGFzc29jaWF0ZWQgZWxlbWVudCBvZiBjbGlja2VkIGJ1dHRvblxuICAgICAgICAgICAgbGV0IGVsZW1lbnRUb1VwZGF0ZSA9IHVwZGF0ZUJ1dHRvbi5jbG9zZXN0KCcuJyArIF9zZWxmLmNsYXNzZXMuZHJhZ2dhYmxlSXRlbSk7XG4gICAgICAgICAgICAvLyBSZXRyaWV2ZSB0aGUgaW5kZXggb2YgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgIGxldCB1cGRhdGVJbmRleCA9IF9zZWxmLmdldEVsZW1lbnRJbmRleChlbGVtZW50VG9VcGRhdGUpO1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaW5kZXggZm91bmQgYW5kIGVsZW1lbnQgZXhpc3RzXG4gICAgICAgICAgICBpZiAodXBkYXRlSW5kZXggPT09IGZhbHNlIHx8IHR5cGVvZiBqc29uQ29udGVudFt1cGRhdGVJbmRleF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgX3NlbGYuZXJyb3IoJ0Nhbm5vdCBmaW5kIFVJIEVsZW1lbnQgaW4gaW5kZXgnLCB7aW5kZXg6IHVwZGF0ZUluZGV4LCBqc29uQ29udGVudDoganNvbkNvbnRlbnR9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdWlFbGVtZW50VG9VcGRhdGUgPSBqc29uQ29udGVudFt1cGRhdGVJbmRleF07XG4gICAgICAgICAgICBfc2VsZi5sb2coJ1VJIEVsZW1lbnQgdG8gdXBkYXRlJywgdWlFbGVtZW50VG9VcGRhdGUpO1xuICAgICAgICAgICAgX3NlbGYubG9hZEZvcm0odWlFbGVtZW50VG9VcGRhdGUsIHVwZGF0ZUluZGV4LCBqc29uQ29udGVudCwgdGFyZ2V0KVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgZm9ybSBmb3IgZ2l2ZW4gVUkgRWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHVpRWxlbWVudCBbe3R5cGU6IFwiVUkgRWxlbWVudCBUeXBlXCIsIGZpZWxkczoge319XVxuICAgICAqIEBwYXJhbSB1aUVsZW1lbnRJbmRleFxuICAgICAqIEBwYXJhbSBqc29uQ29udGVudFxuICAgICAqIEBwYXJhbSB0YXJnZXRcbiAgICAgKi9cbiAgICBsb2FkRm9ybSh1aUVsZW1lbnQsIHVpRWxlbWVudEluZGV4LCBqc29uQ29udGVudCwgdGFyZ2V0KVxuICAgIHtcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICBsZXQgX3NlbGYgPSB0aGlzO1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0IERPTkUgPSA0OyAvLyByZWFkeVN0YXRlIDQgbWVhbnMgdGhlIHJlcXVlc3QgaXMgZG9uZS5cbiAgICAgICAgICAgIGNvbnN0IE9LID0gMjAwOyAvLyBzdGF0dXMgMjAwIGlzIGEgc3VjY2Vzc2Z1bCByZXR1cm4uXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IERPTkUpe1xuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSBPSykge1xuICAgICAgICAgICAgICAgICAgICBfc2VsZi5sb2coJ0xvYWRlZCBmb3JtJywge3Jlc3BvbnNlOiB4aHIucmVzcG9uc2VUZXh0LCB4aHI6IHhocn0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IHRoZSBtb2RhbCB3aXRoIHRoZSBmb3JtXG4gICAgICAgICAgICAgICAgICAgIF9zZWxmLnJlbmRlck1vZGFsKHhoci5yZXNwb25zZVRleHQsIHVpRWxlbWVudC50eXBlLCB1aUVsZW1lbnRJbmRleCwganNvbkNvbnRlbnQsIHRhcmdldClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfc2VsZi5sb2coJ0Vycm9yIGR1cmluZyBsb2FkIGZvcm0nLCB7c3RhdHVzOiB4aHIuc3RhdHVzLCB4aHI6IHhocn0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHRoaXMuZm9ybVJvdXRlICsgJz9kYXRhPScgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkodWlFbGVtZW50KSkpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3BsYXkgbW9kYWwgd2l0aCB0aGUgZ2l2ZW4gSFRNTFxuICAgICAqXG4gICAgICogQHBhcmFtIGh0bWxcbiAgICAgKiBAcGFyYW0gdWlFbGVtZW50VHlwZVxuICAgICAqIEBwYXJhbSB1aUVsZW1lbnRJbmRleFxuICAgICAqIEBwYXJhbSBqc29uQ29udGVudFxuICAgICAqIEBwYXJhbSB0YXJnZXRcbiAgICAgKi9cbiAgICByZW5kZXJNb2RhbChodG1sLCB1aUVsZW1lbnRUeXBlLCB1aUVsZW1lbnRJbmRleCwganNvbkNvbnRlbnQsIHRhcmdldCkge1xuICAgICAgICAvLyBJbml0IG1vZGFsXG4gICAgICAgIHZhciBtb2RhbCA9IG5ldyB0aW5nbGUubW9kYWwoe1xuICAgICAgICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgICAgICAgc3RpY2t5Rm9vdGVyOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb3NlTWV0aG9kczogWydvdmVybGF5JywgJ2J1dHRvbicsICdlc2NhcGUnXSxcbiAgICAgICAgICAgIGNzc0NsYXNzOiBbdGhpcy5jbGFzc2VzLnJlbmRlcmVkTW9kYWxdLFxuICAgICAgICAgICAgY2xvc2VMYWJlbDogdGhpcy50cmFuc2xhdGlvbnMuY2xvc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgX3NlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgY29udGVudFxuICAgICAgICBtb2RhbC5zZXRDb250ZW50KGh0bWwpO1xuXG4gICAgICAgIC8vIEluaXQgdGhlIGZvcm0gaW5zaWRlIHRoZSBtb2RhbFxuICAgICAgICBsZXQgZm9ybSA9IHRoaXMuaW5pdE1vZGFsRm9ybSh1aUVsZW1lbnRUeXBlLCB1aUVsZW1lbnRJbmRleCwganNvbkNvbnRlbnQsIHRhcmdldCk7XG5cbiAgICAgICAgLy8gQnV0dG9uIHRvIHN1Ym1pdFxuICAgICAgICBtb2RhbC5hZGRGb290ZXJCdG4odGhpcy50cmFuc2xhdGlvbnMuYXBwbHlfY2hhbmdlcywgJ3RpbmdsZS1idG4gdGluZ2xlLWJ0bi0tcHJpbWFyeSB0aW5nbGUtYnRuLS1wdWxsLXJpZ2h0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGZvcm0gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZm9ybS5kaXNwYXRjaEV2ZW50KF9zZWxmLmV2ZW50cy51cGRhdGVFbGVtZW50KG1vZGFsKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9zZWxmLmxvZygnTm8gZm9ybSB0byBzdWJtaXQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQnV0dG9uIHRvIGNhbmNlbFxuICAgICAgICBtb2RhbC5hZGRGb290ZXJCdG4odGhpcy50cmFuc2xhdGlvbnMuY2FuY2VsX2NoYW5nZXMsICd0aW5nbGUtYnRuIHRpbmdsZS1idG4tLXNlY29uZGFyeSB0aW5nbGUtYnRuLS1wdWxsLXJpZ2h0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRGlzcGxheSB0aGUgbW9kYWxcbiAgICAgICAgbW9kYWwub3BlbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgZm9ybSBpbiBtb2RhbCBpZiBleGlzdHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1aUVsZW1lbnRUeXBlXG4gICAgICogQHBhcmFtIHVpRWxlbWVudEluZGV4XG4gICAgICogQHBhcmFtIGpzb25Db250ZW50XG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufEVsZW1lbnR9XG4gICAgICovXG4gICAgaW5pdE1vZGFsRm9ybSh1aUVsZW1lbnRUeXBlLCB1aUVsZW1lbnRJbmRleCwganNvbkNvbnRlbnQsIHRhcmdldClcbiAgICB7XG4gICAgICAgIC8vIFJldHJpZXZlIGZvcm0gaW4gbW9kYWxcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuY2xhc3Nlcy5yZW5kZXJlZE1vZGFsICsgJyBmb3JtJyk7XG5cbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBubyBmb3JtIGZvdW5kXG4gICAgICAgIGlmIChmb3JtID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgX3NlbGYgPSB0aGlzO1xuICAgICAgICAvLyBBY3Rpb25zIHRvIHBlcmZvcm0gd2hlbiBmb3JtIGlzIHN1Ym1pdHRlZFxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3VwZGF0ZUVsZW1lbnQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBVSSBFbGVtZW50IHR5cGUgd2Ugd2FudCB0byB1cGRhdGUgZXhpc3RzXG4gICAgICAgICAgICBpZiAodHlwZW9mIF9zZWxmLnVpRWxlbWVudHNbdWlFbGVtZW50VHlwZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgX3NlbGYuZXJyb3IoJ0Nhbm5vdCBmaW5kIGVsZW1lbnQgb2YgdHlwZSAnLCB1aUVsZW1lbnRUeXBlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgZWxlbWVudHMgd2l0aCBmb3JtIGRhdGEgYW5kIG1vZGFsIHRvIGNsb3NlIGl0IGlmIGRhdGEgaXMgdmFsaWRcbiAgICAgICAgICAgIGxldCBtb2RhbCA9IGUuZGV0YWlsO1xuICAgICAgICAgICAgX3NlbGYudXBkYXRlV2l0aEZvcm1EYXRhKGZvcm0sIHVpRWxlbWVudFR5cGUsIHVpRWxlbWVudEluZGV4LCBtb2RhbCwganNvbkNvbnRlbnQsIHRhcmdldCk7XG5cbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBmb3JtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBlbGVtZW50cyB3aXRoIGZvcm0gZGF0YVxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKiBAcGFyYW0gdWlFbGVtZW50VHlwZVxuICAgICAqIEBwYXJhbSB1aUVsZW1lbnRJbmRleFxuICAgICAqIEBwYXJhbSBqc29uQ29udGVudFxuICAgICAqIEBwYXJhbSB0YXJnZXRcbiAgICAgKi9cbiAgICB1cGRhdGVXaXRoRm9ybURhdGEoZm9ybSwgdWlFbGVtZW50VHlwZSwgdWlFbGVtZW50SW5kZXgsIG1vZGFsLCBqc29uQ29udGVudCwgdGFyZ2V0KSB7XG4gICAgICAgIC8vIENvbnZlcnQgZm9ybSBkYXRhIHRvIGFuIGFycmF5XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRFbGVtZW50ID0gdGhpcy5jb252ZXJ0Rm9ybVRvRWxlbWVudChmb3JtLCB1aUVsZW1lbnRUeXBlLCBtb2RhbCk7XG4gICAgICAgIHRoaXMubG9nKCdSZXRyaWV2ZWQgZm9ybSBlbGVtZW50Jywge3VwZGF0ZWRFbGVtZW50OiB1cGRhdGVkRWxlbWVudH0pO1xuICAgICAgICAvLyBVcGRhdGUgVUkgRWxlbWVudFxuICAgICAgICB0aGlzLnVwZGF0ZVVpRWxlbWVudCh1aUVsZW1lbnRJbmRleCwgdXBkYXRlZEVsZW1lbnQsIGpzb25Db250ZW50LCB0YXJnZXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSBmb3JtIHRvIGFuIGFycmF5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEBwYXJhbSB1aUVsZW1lbnRUeXBlXG4gICAgICogQHBhcmFtIG1vZGFsXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGNvbnZlcnRGb3JtVG9FbGVtZW50KGZvcm0sIHVpRWxlbWVudFR5cGUsIG1vZGFsKVxuICAgIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBmb3JtIGRhdGFcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VpRWxlbWVudFR5cGUnLCB1aUVsZW1lbnRUeXBlKTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIHJldHVybmVkIGVsZW1lbnRcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB7fTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIEFKQVggcmVxdWVzdFxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIGxldCBfc2VsZiA9IHRoaXM7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgRE9ORSA9IDQ7IC8vIHJlYWR5U3RhdGUgNCBtZWFucyB0aGUgcmVxdWVzdCBpcyBkb25lLlxuICAgICAgICAgICAgY29uc3QgT0sgPSAyMDA7IC8vIHN0YXR1cyAyMDAgaXMgYSBzdWNjZXNzZnVsIHJldHVybi5cbiAgICAgICAgICAgIGNvbnN0IEZPUk1fRVJST1JTID0gNDA2OyAvLyBzdGF0dXMgNDA2IGlmIGZvcm0gaGFzIGVycm9ycy5cbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gRE9ORSl7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IE9LKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zZWxmLmxvZygnRGF0YSBzZW50IGFuZCB2YWxpZGF0ZWQnLCB7Zm9ybTogZm9ybSwgcmVzcG9uc2U6IHhoci5yZXNwb25zZVRleHQsIHhocjogeGhyfSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzcG9uc2UuZWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IHJlc3BvbnNlLmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoeGhyLnN0YXR1cyA9PT0gRk9STV9FUlJPUlMpIHtcbiAgICAgICAgICAgICAgICAgICAgX3NlbGYubG9nKCdGb3JtIG5vdCB2YWxpZCcsIHtmb3JtOiBmb3JtLCByZXNwb25zZTogeGhyLnJlc3BvbnNlVGV4dCwgeGhyOiB4aHJ9KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNwb25zZS5lcnJvcnMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGZpZWxkIGluIHJlc3BvbnNlLmVycm9ycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGZpZWxkICsgJyA6ICcgKyByZXNwb25zZS5lcnJvcnNbZmllbGRdLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9zZWxmLmVycm9yKCdFcnJvciBkdXJpbmcgZmlsZSB1cGxvYWQnLCB7Zm9ybTogZm9ybSwgc3RhdHVzOiB4aHIuc3RhdHVzLCB4aHI6IHhocn0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBTZW5kIGRhdGFcbiAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCB0aGlzLnN1Ym1pdFJvdXRlLCBmYWxzZSk7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG4gICAgICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gbWFya3VwIHRvIGRpc3BsYXkgVUkgRWxlbWVudCBtZXRhIGRhdGEgZGVwZW5kaW5nIG9uIHJlbmRlclxuICAgICAqXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKiBAcGFyYW0gdWlFbGVtZW50TWV0YURhdGEge3Nob3J0X2Rlc2NyaXB0aW9uOiBcIlNob3J0IGRlc2NyaXB0aW9uXCIsIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uXCIsIHRpdGxlOiBcIlRpdGxlXCIsIGltYWdlOiBcIi9wYXRoL3RvL2ltYWdlLmpwZ1wifVxuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZVJlbmRlclxuICAgICAqL1xuICAgIHJlbmRlclVpRWxlbWVudE1ldGFEYXRhKHR5cGUsIHVpRWxlbWVudE1ldGFEYXRhLCB0ZW1wbGF0ZVJlbmRlcikge1xuICAgICAgICBpZiAodGVtcGxhdGVSZW5kZXIgPT09ICdzeWxpdXMnKSB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIHNlZ21lbnQgcmFpc2VkICR7dGhpcy5jbGFzc2VzLmRyYWdnYWJsZUl0ZW19XCIgZGF0YS11aS1lbGVtZW50LXR5cGU9XCIke3R5cGV9XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVpIHJpZ2h0IGZsb2F0ZWQgbWFzc2l2ZSBidXR0b24gaWNvbiAke3RoaXMuY2xhc3Nlcy5kcmFnZ2FibGVJdGVtSGFuZGxlcn1cIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJpY29uIGFycm93cyBhbHRlcm5hdGUgJHt0aGlzLmNsYXNzZXMuZHJhZ2dhYmxlSXRlbUhhbmRsZXJ9XCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3VyIHdpZGUgY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwidWkgc21hbGwgaW1hZ2VcIiBzcmM9XCIke3VpRWxlbWVudE1ldGFEYXRhLmltYWdlfVwiIGFsdD1cIlwiIHdpZHRoPVwiMTUwXCIgaGVpZ2h0PVwiMTUwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHdlbHZlIHdpZGUgY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ1aSBoZWFkZXJcIj4ke3VpRWxlbWVudE1ldGFEYXRhLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3VpRWxlbWVudE1ldGFEYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBidXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVpIGJ1dHRvbiAke3RoaXMuY2xhc3Nlcy51cGRhdGVCdXR0b259XCIgdHlwZT1cImJ1dHRvblwiPiR7dGhpcy50cmFuc2xhdGlvbnMuZWRpdH08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uIG5lZ2F0aXZlICR7dGhpcy5jbGFzc2VzLmRlbGV0ZUJ1dHRvbn1cIiB0eXBlPVwiYnV0dG9uXCI+JHt0aGlzLnRyYW5zbGF0aW9ucy5kZWxldGV9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVycm9yKCdDYW5ub3QgZmluZCByZW5kZXIgZm9yIDogJywgdGVtcGxhdGVSZW5kZXIpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIG1hcmt1cCB0byBkaXNwbGF5IGFjdGlvbiBidXR0b25zXG4gICAgICovXG4gICAgcmVuZGVyQWN0aW9uc0J1dHRvbnModGVtcGxhdGVSZW5kZXIpIHtcbiAgICAgICAgaWYgKHRlbXBsYXRlUmVuZGVyID09PSAnc3lsaXVzJykge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBidXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1aSBwcmltYXJ5IGJ1dHRvbiAke3RoaXMuY2xhc3Nlcy50b2dnbGVCdXR0b259XCIgdHlwZT1cImJ1dHRvblwiPiR7dGhpcy50cmFuc2xhdGlvbnMubmV3fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lcnJvcignQ2Fubm90IGZpbmQgcmVuZGVyIGZvciA6ICcsIHRlbXBsYXRlUmVuZGVyKTtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgZHJhZ2dhYmxlIGVsZW1lbnRzIGZvciBhIGNvbnRhaW5lclxuICAgICAqXG4gICAgICogQHBhcmFtIHVpRWxlbWVudHNcbiAgICAgKiBAcGFyYW0gZWxlbWVudHNDb250YWluZXJcbiAgICAgKi9cbiAgICBpbml0UmVvcmRlcih1aUVsZW1lbnRzLCBlbGVtZW50c0NvbnRhaW5lcikge1xuICAgICAgICBsZXQgX3NlbGYgPSB0aGlzO1xuICAgICAgICAvLyBGaXJzdCBjb250YWluZXIgaXMgdGhlIGxpc3Qgb2YgVUkgRWxlbWVudHMgd2UgY2FuIGFkZCwgdGhlIHNlY29uZCBpcyB0aGUgY29udGVudCBvZiB0aGUgZmllbGRcbiAgICAgICAgLy8gV2UgY2FuIG9ubHkgbW92ZSBlbGVtZW50cyBmcm9tIHRoZSBgdWlFbGVtZW50c2AgdG8gdGhlIGBlbGVtZW50c0NvbnRhaW5lcmBcbiAgICAgICAgbGV0IGRyYWtlID0gbmV3IGRyYWd1bGEoW3VpRWxlbWVudHMsIGVsZW1lbnRzQ29udGFpbmVyXSwge1xuICAgICAgICAgICAgY29weTogZnVuY3Rpb24gKGVsLCBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlID09PSB1aUVsZW1lbnRzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWNjZXB0czogZnVuY3Rpb24gKGVsLCB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0ICE9PSB1aUVsZW1lbnRzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW92ZXM6IGZ1bmN0aW9uIChlbCwgY29udGFpbmVyLCBoYW5kbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhfc2VsZi5jbGFzc2VzLmRyYWdnYWJsZUl0ZW1IYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkcmFrZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGV2ZW50IHRvIGJlIGFibGUgdG8gcmVvcmRlciBlbGVtZW50cyBpbiBpdCdzIGZpZWxkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZHJha2VcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICogQHBhcmFtIGpzb25Db250ZW50XG4gICAgICovXG4gICAgaW5pdFJlb3JkZXJFdmVudChkcmFrZSwgdGFyZ2V0LCBqc29uQ29udGVudCkge1xuICAgICAgICBkcmFrZS5vbignZHJhZycsIChlbCwgc291cmNlKSA9PiB7XG4gICAgICAgICAgICAvLyBSZW9yZGVyIGluc2lkZSB0aGUgbGlzdFxuICAgICAgICAgICAgaWYgKHNvdXJjZS5pZCAhPT0gdGhpcy5pZC51aUVsZW1lbnRDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0RWxlbWVudEluZGV4KGVsKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nKCdSZW9yZGVyIGRyYWcgc3RhcnQgOiAnLCB7aW5kZXg6IGluZGV4LCBlbDogZWwsIHNvdXJjZTogc291cmNlfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGQgYSBuZXcgZWxlbWVudCBmcm9tIHRvcFxuICAgICAgICAgICAgaWYgKHNvdXJjZS5pZCA9PT0gdGhpcy5pZC51aUVsZW1lbnRDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZygnQ29weSBkcmFnIHN0YXJ0IDogJywge2VsOiBlbCwgc291cmNlOiBzb3VyY2V9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRyYWtlLm9uKCdkcm9wJywgKGVsLCB0YXJnZXRFbGVtZW50LCBzb3VyY2UsIHNpYmxpbmcpID0+IHtcbiAgICAgICAgICAgIC8vIFJlb3JkZXIgaW5zaWRlIHRoZSBsaXN0XG4gICAgICAgICAgICBpZiAoc291cmNlLmlkICE9PSB0aGlzLmlkLnVpRWxlbWVudENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZEluZGV4ID0gdGhpcy5jdXJyZW50SW5kZXg7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLmdldEVsZW1lbnRJbmRleChlbCk7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0luZGV4ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZygnUmVvcmRlciBkcmFnIHN0b3AgOiAnLCB7b2xkSW5kZXg6IG9sZEluZGV4LCBuZXdJbmRleDogbmV3SW5kZXgsIGVsOiBlbCwgdGFyZ2V0RWxlbWVudDogdGFyZ2V0RWxlbWVudCwgc291cmNlOiBzb3VyY2UsIHNpYmxpbmc6IHNpYmxpbmd9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVWlFbGVtZW50KG9sZEluZGV4LCBuZXdJbmRleCwganNvbkNvbnRlbnQsIHRhcmdldClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBhIG5ldyBlbGVtZW50IGZyb20gdG9wIHRvIFVpIEVsZW1lbnQgbGlzdFxuICAgICAgICAgICAgaWYgKHNvdXJjZS5pZCA9PT0gdGhpcy5pZC51aUVsZW1lbnRDb250YWluZXIgJiYgdGFyZ2V0RWxlbWVudCAhPT0gbnVsbCAmJiB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMudWlFbGVtZW50TGlzdCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZygnQ29weSBkcmFnIHN0b3AgOiAnLCB7ZWw6IGVsLCB0YXJnZXRFbGVtZW50OiB0YXJnZXRFbGVtZW50LCBzb3VyY2U6IHNvdXJjZSwgc2libGluZzogc2libGluZ30pO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5nZXRFbGVtZW50SW5kZXgoZWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBlbC5kYXRhc2V0LnVpRWxlbWVudFR5cGU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0eXBlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFVpRWxlbWVudCh0eXBlLCBuZXdJbmRleCwganNvbkNvbnRlbnQsIHRhcmdldClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCdDYW5ub3QgZmluZCBgdWlFbGVtZW50VHlwZWAgdG8gYWRkIGluIGRhdGEgc2V0Jywge2RhdGFTZXQ6IGVsLmRhdGFzZXQsIGVsOiBlbH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgdGhlIGluZGV4IG9mIGVsZW1lbnQgaW4gVUkgRWxlbWVudHMgbGlzdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHJldHVybnMge2Jvb2xlYW58bnVtYmVyfVxuICAgICAqL1xuICAgIGdldEVsZW1lbnRJbmRleChlbCkge1xuICAgICAgICBpZiAoIWVsLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW10uc2xpY2UuY2FsbChlbC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKS5pbmRleE9mKGVsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIEpTT04gdG8gYWRkIGFuIFVJIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICogQHBhcmFtIGpzb25Db250ZW50XG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqL1xuICAgIGFkZFVpRWxlbWVudCh0eXBlLCBpbmRleCwganNvbkNvbnRlbnQsIHRhcmdldCkge1xuICAgICAgICB0aGlzLmxvZygnQWRkIFVJIEVsZW1lbnQgOiAnLCB7dHlwZTogdHlwZSwgaW5kZXg6IGluZGV4LCB0YXJnZXQ6IHRhcmdldCwgYmVmb3JlTW92ZUpzb246IGpzb25Db250ZW50fSk7XG4gICAgICAgIC8vIEluaXRpYWxpemUgbmV3IFVJIEVsZW1lbnQgb2Ygd2FudGVkIHR5cGVcbiAgICAgICAgbGV0IHVpRWxlbWVudCA9IHt0eXBlOiB0eXBlLCBmaWVsZHM6IHt9fTtcbiAgICAgICAgLy8gQWRkIHRoZSBlbGVtZW50IGluIEpTT05cbiAgICAgICAganNvbkNvbnRlbnQuc3BsaWNlKGluZGV4LCAwLCB1aUVsZW1lbnQpO1xuICAgICAgICAvLyBVcGRhdGUgdGhlIHRleHRhcmVhIHdpdGggSlNPTlxuICAgICAgICB0YXJnZXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeShqc29uQ29udGVudCk7XG4gICAgICAgIHRoaXMubG9nKCdBZGRlZCBVSSBFbGVtZW50IDogJywge2FmdGVyTW92ZUpzb246IGpzb25Db250ZW50LCBuZXdUYXJnZXRWYWx1ZTogdGFyZ2V0LnZhbHVlfSk7XG4gICAgICAgIC8vIEluaXRpYWxpemUgYWN0aW9ucyBmb3IgdGhlIG5ldyBVSSBFbGVtZW50LCBpdCBhY3R1YWxseSByZWNyZWF0ZSBhbHNvIGV2ZW50cyBmb3IgZXhpc3RpbmcgZWxlbWVudHNcbiAgICAgICAgdGhpcy5pbml0QWN0aW9ucyh0YXJnZXQsIGpzb25Db250ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIEpTT04gdG8gbW92ZSBVSSBlbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIG9sZEluZGV4XG4gICAgICogQHBhcmFtIG5ld0luZGV4XG4gICAgICogQHBhcmFtIGpzb25Db250ZW50XG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqL1xuICAgIG1vdmVVaUVsZW1lbnQob2xkSW5kZXgsIG5ld0luZGV4LCBqc29uQ29udGVudCwgdGFyZ2V0KSB7XG4gICAgICAgIGlmIChvbGRJbmRleCAhPT0gbmV3SW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMubG9nKCdNb3ZlIFVJIEVsZW1lbnQgOiAnLCB7b2xkSW5kZXg6IG9sZEluZGV4LCBuZXdJbmRleDogbmV3SW5kZXgsIHRhcmdldDogdGFyZ2V0LCBiZWZvcmVNb3ZlSnNvbjoganNvbkNvbnRlbnR9KTtcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA+PSBqc29uQ29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCdFbGVtZW50IG1vdmVkIG91dHNpZGUgdGhlIGxpc3QnLCB7bmV3SW5kZXg6IG5ld0luZGV4LCBzaXplTGlzdDoganNvbkNvbnRlbnQubGVuZ3RofSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1vdmUgdGhlIFVJIGVsZW1lbnQgdG8gdGhlIHNlbGVjdGVkIGluZGV4IGFuZCBjaGFuZ2UgcG9zaXRpb24gb2Ygb3RoZXJzXG4gICAgICAgICAgICBqc29uQ29udGVudC5zcGxpY2UobmV3SW5kZXgsIDAsIGpzb25Db250ZW50LnNwbGljZShvbGRJbmRleCwgMSlbMF0pO1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSB0ZXh0YXJlYSB3aXRoIEpTT05cbiAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGpzb25Db250ZW50KTtcbiAgICAgICAgICAgIHRoaXMubG9nKCdNb3ZlZCBVSSBFbGVtZW50IDogJywge2FmdGVyTW92ZUpzb246IGpzb25Db250ZW50LCBuZXdUYXJnZXRWYWx1ZTogdGFyZ2V0LnZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvZygnTm90IG1vdmVkIFVJIEVsZW1lbnQsIHNhbWUgaW5kZXgnLCB7b2xkSW5kZXg6IG9sZEluZGV4LCBuZXdJbmRleDogbmV3SW5kZXgsIHRhcmdldDogdGFyZ2V0LCBiZWZvcmVNb3ZlSnNvbjoganNvbkNvbnRlbnR9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgSlNPTiBmb3IgYSBnaXZlbiBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW5kZXhcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqIEBwYXJhbSBqc29uQ29udGVudFxuICAgICAqIEBwYXJhbSB0YXJnZXRcbiAgICAgKi9cbiAgICB1cGRhdGVVaUVsZW1lbnQoaW5kZXgsIGVsZW1lbnQsIGpzb25Db250ZW50LCB0YXJnZXQpXG4gICAge1xuICAgICAgICBpZiAodHlwZW9mIGpzb25Db250ZW50W2luZGV4XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMubG9nKCdVcGRhdGUgVUkgRWxlbWVudCA6ICcsIHtpbmRleDogaW5kZXgsIGVsZW1lbnQ6IGVsZW1lbnQsIGpzb25Db250ZW50OiBqc29uQ29udGVudCwgdGFyZ2V0OiB0YXJnZXR9KTtcbiAgICAgICAgICAgIC8vIFNldCBuZXcgY29udGVudCBmb3IgVUkgRWxlbWVudFxuICAgICAgICAgICAganNvbkNvbnRlbnRbaW5kZXhdID0gZWxlbWVudDtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgdGV4dGFyZWEgd2l0aCBKU09OXG4gICAgICAgICAgICB0YXJnZXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeShqc29uQ29udGVudCk7XG4gICAgICAgICAgICB0aGlzLmxvZygnVXBkYXRlZCBVSSBFbGVtZW50IDogJywge2luZGV4OiBpbmRleCwgZWxlbWVudDogZWxlbWVudCwganNvbkNvbnRlbnQ6IGpzb25Db250ZW50LCB0YXJnZXQ6IHRhcmdldH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lcnJvcignQ2Fubm90IGZvdW5kIGVsZW1lbnQgZm9yIGluZGV4Jywge2luZGV4OiBpbmRleCwgZWxlbWVudDogZWxlbWVudCwganNvbkNvbnRlbnQ6IGpzb25Db250ZW50LCB0YXJnZXQ6IHRhcmdldH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIEpTT04gdG8gcmVtb3ZlIFVJIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZW1vdmVkSW5kZXhcbiAgICAgKiBAcGFyYW0ganNvbkNvbnRlbnRcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICovXG4gICAgcmVtb3ZlVWlFbGVtZW50KHJlbW92ZWRJbmRleCwganNvbkNvbnRlbnQsIHRhcmdldCkge1xuICAgICAgICB0aGlzLmxvZygnUmVtb3ZlIFVJIEVsZW1lbnQgOiAnLCB7cmVtb3ZlZEluZGV4OiByZW1vdmVkSW5kZXgsIHRhcmdldDogdGFyZ2V0LCBiZWZvcmVNb3ZlSnNvbjoganNvbkNvbnRlbnR9KTtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBlbGVtZW50IGZvciB0aGlzIGluZGV4LCBpdCB3aWxsIGNoYW5nZSBpbmRleGVzIGZvciBvdGhlciBlbGVtZW50cyB0b29cbiAgICAgICAganNvbkNvbnRlbnQuc3BsaWNlKHJlbW92ZWRJbmRleCwgMSk7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdGV4dGFyZWEgd2l0aCBKU09OXG4gICAgICAgIHRhcmdldC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGpzb25Db250ZW50KTtcbiAgICAgICAgdGhpcy5sb2coJ1JlbW92ZWQgVUkgRWxlbWVudCA6ICcsIHthZnRlck1vdmVKc29uOiBqc29uQ29udGVudCwgbmV3VGFyZ2V0VmFsdWU6IHRhcmdldC52YWx1ZX0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBjb25zb2xlIGVycm9yIGlmIGRlYnVnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0gY29udGVudFxuICAgICAqL1xuICAgIGVycm9yKGRlc2NyaXB0aW9uLCBjb250ZW50KSB7XG4gICAgICAgIC8vIElmIGVycm9yLCBkaXNwbGF5IG9yaWdpbmFsIGZpZWxkc1xuICAgICAgICBmb3IgKGxldCB0YXJnZXQgb2YgdGhpcy50YXJnZXRzKSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgZ2VuZXJhdGVkIGJsb2Nrc1xuICAgICAgICBmb3IgKGxldCB0YXJnZXQgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLmNsYXNzZXMudWlFbGVtZW50TGlzdCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERpc3BsYXkgZXJyb3JcbiAgICAgICAgY29uc29sZS5lcnJvcihkZXNjcmlwdGlvbik7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoY29udGVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGNvbnNvbGUgbG9nIGlmIGRlYnVnIGlzIHRydWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSBjb250ZW50XG4gICAgICovXG4gICAgbG9nKGRlc2NyaXB0aW9uLCBjb250ZW50KSB7XG4gICAgICAgIC8vIERpc3BsYXkgbWVzc2FnZSBmb3IgZGVidWcgbW9kZVxuICAgICAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gSW5pdCB0aGUgcGx1Z2luXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGxldCBjbXMgPSBuZXcgTWJpekNtc0ZpZWxkcyhtb25zaWV1cmJpekNtc1BsdWdpbkNvbmZpZyk7XG4gICAgY21zLmluaXQoKTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhdG9hIChhLCBuKSB7IHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhLCBuKTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdGlja3kgPSByZXF1aXJlKCd0aWNreScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlYm91bmNlIChmbiwgYXJncywgY3R4KSB7XG4gIGlmICghZm4pIHsgcmV0dXJuOyB9XG4gIHRpY2t5KGZ1bmN0aW9uIHJ1biAoKSB7XG4gICAgZm4uYXBwbHkoY3R4IHx8IG51bGwsIGFyZ3MgfHwgW10pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhdG9hID0gcmVxdWlyZSgnYXRvYScpO1xudmFyIGRlYm91bmNlID0gcmVxdWlyZSgnLi9kZWJvdW5jZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVtaXR0ZXIgKHRoaW5nLCBvcHRpb25zKSB7XG4gIHZhciBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGV2dCA9IHt9O1xuICBpZiAodGhpbmcgPT09IHVuZGVmaW5lZCkgeyB0aGluZyA9IHt9OyB9XG4gIHRoaW5nLm9uID0gZnVuY3Rpb24gKHR5cGUsIGZuKSB7XG4gICAgaWYgKCFldnRbdHlwZV0pIHtcbiAgICAgIGV2dFt0eXBlXSA9IFtmbl07XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dFt0eXBlXS5wdXNoKGZuKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaW5nO1xuICB9O1xuICB0aGluZy5vbmNlID0gZnVuY3Rpb24gKHR5cGUsIGZuKSB7XG4gICAgZm4uX29uY2UgPSB0cnVlOyAvLyB0aGluZy5vZmYoZm4pIHN0aWxsIHdvcmtzIVxuICAgIHRoaW5nLm9uKHR5cGUsIGZuKTtcbiAgICByZXR1cm4gdGhpbmc7XG4gIH07XG4gIHRoaW5nLm9mZiA9IGZ1bmN0aW9uICh0eXBlLCBmbikge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAoYyA9PT0gMSkge1xuICAgICAgZGVsZXRlIGV2dFt0eXBlXTtcbiAgICB9IGVsc2UgaWYgKGMgPT09IDApIHtcbiAgICAgIGV2dCA9IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZXQgPSBldnRbdHlwZV07XG4gICAgICBpZiAoIWV0KSB7IHJldHVybiB0aGluZzsgfVxuICAgICAgZXQuc3BsaWNlKGV0LmluZGV4T2YoZm4pLCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaW5nO1xuICB9O1xuICB0aGluZy5lbWl0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gYXRvYShhcmd1bWVudHMpO1xuICAgIHJldHVybiB0aGluZy5lbWl0dGVyU25hcHNob3QoYXJncy5zaGlmdCgpKS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbiAgdGhpbmcuZW1pdHRlclNuYXBzaG90ID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICB2YXIgZXQgPSAoZXZ0W3R5cGVdIHx8IFtdKS5zbGljZSgwKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGFyZ3MgPSBhdG9hKGFyZ3VtZW50cyk7XG4gICAgICB2YXIgY3R4ID0gdGhpcyB8fCB0aGluZztcbiAgICAgIGlmICh0eXBlID09PSAnZXJyb3InICYmIG9wdHMudGhyb3dzICE9PSBmYWxzZSAmJiAhZXQubGVuZ3RoKSB7IHRocm93IGFyZ3MubGVuZ3RoID09PSAxID8gYXJnc1swXSA6IGFyZ3M7IH1cbiAgICAgIGV0LmZvckVhY2goZnVuY3Rpb24gZW1pdHRlciAobGlzdGVuKSB7XG4gICAgICAgIGlmIChvcHRzLmFzeW5jKSB7IGRlYm91bmNlKGxpc3RlbiwgYXJncywgY3R4KTsgfSBlbHNlIHsgbGlzdGVuLmFwcGx5KGN0eCwgYXJncyk7IH1cbiAgICAgICAgaWYgKGxpc3Rlbi5fb25jZSkgeyB0aGluZy5vZmYodHlwZSwgbGlzdGVuKTsgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpbmc7XG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIHRoaW5nO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGN1c3RvbUV2ZW50ID0gcmVxdWlyZSgnY3VzdG9tLWV2ZW50Jyk7XG52YXIgZXZlbnRtYXAgPSByZXF1aXJlKCcuL2V2ZW50bWFwJyk7XG52YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xudmFyIGFkZEV2ZW50ID0gYWRkRXZlbnRFYXN5O1xudmFyIHJlbW92ZUV2ZW50ID0gcmVtb3ZlRXZlbnRFYXN5O1xudmFyIGhhcmRDYWNoZSA9IFtdO1xuXG5pZiAoIWdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gIGFkZEV2ZW50ID0gYWRkRXZlbnRIYXJkO1xuICByZW1vdmVFdmVudCA9IHJlbW92ZUV2ZW50SGFyZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFkZDogYWRkRXZlbnQsXG4gIHJlbW92ZTogcmVtb3ZlRXZlbnQsXG4gIGZhYnJpY2F0ZTogZmFicmljYXRlRXZlbnRcbn07XG5cbmZ1bmN0aW9uIGFkZEV2ZW50RWFzeSAoZWwsIHR5cGUsIGZuLCBjYXB0dXJpbmcpIHtcbiAgcmV0dXJuIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIGNhcHR1cmluZyk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50SGFyZCAoZWwsIHR5cGUsIGZuKSB7XG4gIHJldHVybiBlbC5hdHRhY2hFdmVudCgnb24nICsgdHlwZSwgd3JhcChlbCwgdHlwZSwgZm4pKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRFYXN5IChlbCwgdHlwZSwgZm4sIGNhcHR1cmluZykge1xuICByZXR1cm4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgY2FwdHVyaW5nKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRIYXJkIChlbCwgdHlwZSwgZm4pIHtcbiAgdmFyIGxpc3RlbmVyID0gdW53cmFwKGVsLCB0eXBlLCBmbik7XG4gIGlmIChsaXN0ZW5lcikge1xuICAgIHJldHVybiBlbC5kZXRhY2hFdmVudCgnb24nICsgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZhYnJpY2F0ZUV2ZW50IChlbCwgdHlwZSwgbW9kZWwpIHtcbiAgdmFyIGUgPSBldmVudG1hcC5pbmRleE9mKHR5cGUpID09PSAtMSA/IG1ha2VDdXN0b21FdmVudCgpIDogbWFrZUNsYXNzaWNFdmVudCgpO1xuICBpZiAoZWwuZGlzcGF0Y2hFdmVudCkge1xuICAgIGVsLmRpc3BhdGNoRXZlbnQoZSk7XG4gIH0gZWxzZSB7XG4gICAgZWwuZmlyZUV2ZW50KCdvbicgKyB0eXBlLCBlKTtcbiAgfVxuICBmdW5jdGlvbiBtYWtlQ2xhc3NpY0V2ZW50ICgpIHtcbiAgICB2YXIgZTtcbiAgICBpZiAoZG9jLmNyZWF0ZUV2ZW50KSB7XG4gICAgICBlID0gZG9jLmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgZS5pbml0RXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChkb2MuY3JlYXRlRXZlbnRPYmplY3QpIHtcbiAgICAgIGUgPSBkb2MuY3JlYXRlRXZlbnRPYmplY3QoKTtcbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUN1c3RvbUV2ZW50ICgpIHtcbiAgICByZXR1cm4gbmV3IGN1c3RvbUV2ZW50KHR5cGUsIHsgZGV0YWlsOiBtb2RlbCB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB3cmFwcGVyRmFjdG9yeSAoZWwsIHR5cGUsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwcGVyIChvcmlnaW5hbEV2ZW50KSB7XG4gICAgdmFyIGUgPSBvcmlnaW5hbEV2ZW50IHx8IGdsb2JhbC5ldmVudDtcbiAgICBlLnRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcbiAgICBlLnByZXZlbnREZWZhdWx0ID0gZS5wcmV2ZW50RGVmYXVsdCB8fCBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdCAoKSB7IGUucmV0dXJuVmFsdWUgPSBmYWxzZTsgfTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbiA9IGUuc3RvcFByb3BhZ2F0aW9uIHx8IGZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbiAoKSB7IGUuY2FuY2VsQnViYmxlID0gdHJ1ZTsgfTtcbiAgICBlLndoaWNoID0gZS53aGljaCB8fCBlLmtleUNvZGU7XG4gICAgZm4uY2FsbChlbCwgZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHdyYXAgKGVsLCB0eXBlLCBmbikge1xuICB2YXIgd3JhcHBlciA9IHVud3JhcChlbCwgdHlwZSwgZm4pIHx8IHdyYXBwZXJGYWN0b3J5KGVsLCB0eXBlLCBmbik7XG4gIGhhcmRDYWNoZS5wdXNoKHtcbiAgICB3cmFwcGVyOiB3cmFwcGVyLFxuICAgIGVsZW1lbnQ6IGVsLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgZm46IGZuXG4gIH0pO1xuICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZnVuY3Rpb24gdW53cmFwIChlbCwgdHlwZSwgZm4pIHtcbiAgdmFyIGkgPSBmaW5kKGVsLCB0eXBlLCBmbik7XG4gIGlmIChpKSB7XG4gICAgdmFyIHdyYXBwZXIgPSBoYXJkQ2FjaGVbaV0ud3JhcHBlcjtcbiAgICBoYXJkQ2FjaGUuc3BsaWNlKGksIDEpOyAvLyBmcmVlIHVwIGEgdGFkIG9mIG1lbW9yeVxuICAgIHJldHVybiB3cmFwcGVyO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmQgKGVsLCB0eXBlLCBmbikge1xuICB2YXIgaSwgaXRlbTtcbiAgZm9yIChpID0gMDsgaSA8IGhhcmRDYWNoZS5sZW5ndGg7IGkrKykge1xuICAgIGl0ZW0gPSBoYXJkQ2FjaGVbaV07XG4gICAgaWYgKGl0ZW0uZWxlbWVudCA9PT0gZWwgJiYgaXRlbS50eXBlID09PSB0eXBlICYmIGl0ZW0uZm4gPT09IGZuKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV2ZW50bWFwID0gW107XG52YXIgZXZlbnRuYW1lID0gJyc7XG52YXIgcm9uID0gL15vbi87XG5cbmZvciAoZXZlbnRuYW1lIGluIGdsb2JhbCkge1xuICBpZiAocm9uLnRlc3QoZXZlbnRuYW1lKSkge1xuICAgIGV2ZW50bWFwLnB1c2goZXZlbnRuYW1lLnNsaWNlKDIpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV2ZW50bWFwO1xuIiwiXG52YXIgTmF0aXZlQ3VzdG9tRXZlbnQgPSBnbG9iYWwuQ3VzdG9tRXZlbnQ7XG5cbmZ1bmN0aW9uIHVzZU5hdGl2ZSAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIHAgPSBuZXcgTmF0aXZlQ3VzdG9tRXZlbnQoJ2NhdCcsIHsgZGV0YWlsOiB7IGZvbzogJ2JhcicgfSB9KTtcbiAgICByZXR1cm4gICdjYXQnID09PSBwLnR5cGUgJiYgJ2JhcicgPT09IHAuZGV0YWlsLmZvbztcbiAgfSBjYXRjaCAoZSkge1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDcm9zcy1icm93c2VyIGBDdXN0b21FdmVudGAgY29uc3RydWN0b3IuXG4gKlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0N1c3RvbUV2ZW50LkN1c3RvbUV2ZW50XG4gKlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdXNlTmF0aXZlKCkgPyBOYXRpdmVDdXN0b21FdmVudCA6XG5cbi8vIElFID49IDlcbidmdW5jdGlvbicgPT09IHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFdmVudCA/IGZ1bmN0aW9uIEN1c3RvbUV2ZW50ICh0eXBlLCBwYXJhbXMpIHtcbiAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgaWYgKHBhcmFtcykge1xuICAgIGUuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XG4gIH0gZWxzZSB7XG4gICAgZS5pbml0Q3VzdG9tRXZlbnQodHlwZSwgZmFsc2UsIGZhbHNlLCB2b2lkIDApO1xuICB9XG4gIHJldHVybiBlO1xufSA6XG5cbi8vIElFIDw9IDhcbmZ1bmN0aW9uIEN1c3RvbUV2ZW50ICh0eXBlLCBwYXJhbXMpIHtcbiAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCgpO1xuICBlLnR5cGUgPSB0eXBlO1xuICBpZiAocGFyYW1zKSB7XG4gICAgZS5idWJibGVzID0gQm9vbGVhbihwYXJhbXMuYnViYmxlcyk7XG4gICAgZS5jYW5jZWxhYmxlID0gQm9vbGVhbihwYXJhbXMuY2FuY2VsYWJsZSk7XG4gICAgZS5kZXRhaWwgPSBwYXJhbXMuZGV0YWlsO1xuICB9IGVsc2Uge1xuICAgIGUuYnViYmxlcyA9IGZhbHNlO1xuICAgIGUuY2FuY2VsYWJsZSA9IGZhbHNlO1xuICAgIGUuZGV0YWlsID0gdm9pZCAwO1xuICB9XG4gIHJldHVybiBlO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FjaGUgPSB7fTtcbnZhciBzdGFydCA9ICcoPzpefFxcXFxzKSc7XG52YXIgZW5kID0gJyg/OlxcXFxzfCQpJztcblxuZnVuY3Rpb24gbG9va3VwQ2xhc3MgKGNsYXNzTmFtZSkge1xuICB2YXIgY2FjaGVkID0gY2FjaGVbY2xhc3NOYW1lXTtcbiAgaWYgKGNhY2hlZCkge1xuICAgIGNhY2hlZC5sYXN0SW5kZXggPSAwO1xuICB9IGVsc2Uge1xuICAgIGNhY2hlW2NsYXNzTmFtZV0gPSBjYWNoZWQgPSBuZXcgUmVnRXhwKHN0YXJ0ICsgY2xhc3NOYW1lICsgZW5kLCAnZycpO1xuICB9XG4gIHJldHVybiBjYWNoZWQ7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzIChlbCwgY2xhc3NOYW1lKSB7XG4gIHZhciBjdXJyZW50ID0gZWwuY2xhc3NOYW1lO1xuICBpZiAoIWN1cnJlbnQubGVuZ3RoKSB7XG4gICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICB9IGVsc2UgaWYgKCFsb29rdXBDbGFzcyhjbGFzc05hbWUpLnRlc3QoY3VycmVudCkpIHtcbiAgICBlbC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJtQ2xhc3MgKGVsLCBjbGFzc05hbWUpIHtcbiAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobG9va3VwQ2xhc3MoY2xhc3NOYW1lKSwgJyAnKS50cmltKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhZGQ6IGFkZENsYXNzLFxuICBybTogcm1DbGFzc1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVtaXR0ZXIgPSByZXF1aXJlKCdjb250cmEvZW1pdHRlcicpO1xudmFyIGNyb3NzdmVudCA9IHJlcXVpcmUoJ2Nyb3NzdmVudCcpO1xudmFyIGNsYXNzZXMgPSByZXF1aXJlKCcuL2NsYXNzZXMnKTtcbnZhciBkb2MgPSBkb2N1bWVudDtcbnZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG5mdW5jdGlvbiBkcmFndWxhIChpbml0aWFsQ29udGFpbmVycywgb3B0aW9ucykge1xuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgaWYgKGxlbiA9PT0gMSAmJiBBcnJheS5pc0FycmF5KGluaXRpYWxDb250YWluZXJzKSA9PT0gZmFsc2UpIHtcbiAgICBvcHRpb25zID0gaW5pdGlhbENvbnRhaW5lcnM7XG4gICAgaW5pdGlhbENvbnRhaW5lcnMgPSBbXTtcbiAgfVxuICB2YXIgX21pcnJvcjsgLy8gbWlycm9yIGltYWdlXG4gIHZhciBfc291cmNlOyAvLyBzb3VyY2UgY29udGFpbmVyXG4gIHZhciBfaXRlbTsgLy8gaXRlbSBiZWluZyBkcmFnZ2VkXG4gIHZhciBfb2Zmc2V0WDsgLy8gcmVmZXJlbmNlIHhcbiAgdmFyIF9vZmZzZXRZOyAvLyByZWZlcmVuY2UgeVxuICB2YXIgX21vdmVYOyAvLyByZWZlcmVuY2UgbW92ZSB4XG4gIHZhciBfbW92ZVk7IC8vIHJlZmVyZW5jZSBtb3ZlIHlcbiAgdmFyIF9pbml0aWFsU2libGluZzsgLy8gcmVmZXJlbmNlIHNpYmxpbmcgd2hlbiBncmFiYmVkXG4gIHZhciBfY3VycmVudFNpYmxpbmc7IC8vIHJlZmVyZW5jZSBzaWJsaW5nIG5vd1xuICB2YXIgX2NvcHk7IC8vIGl0ZW0gdXNlZCBmb3IgY29weWluZ1xuICB2YXIgX3JlbmRlclRpbWVyOyAvLyB0aW1lciBmb3Igc2V0VGltZW91dCByZW5kZXJNaXJyb3JJbWFnZVxuICB2YXIgX2xhc3REcm9wVGFyZ2V0ID0gbnVsbDsgLy8gbGFzdCBjb250YWluZXIgaXRlbSB3YXMgb3ZlclxuICB2YXIgX2dyYWJiZWQ7IC8vIGhvbGRzIG1vdXNlZG93biBjb250ZXh0IHVudGlsIGZpcnN0IG1vdXNlbW92ZVxuXG4gIHZhciBvID0gb3B0aW9ucyB8fCB7fTtcbiAgaWYgKG8ubW92ZXMgPT09IHZvaWQgMCkgeyBvLm1vdmVzID0gYWx3YXlzOyB9XG4gIGlmIChvLmFjY2VwdHMgPT09IHZvaWQgMCkgeyBvLmFjY2VwdHMgPSBhbHdheXM7IH1cbiAgaWYgKG8uaW52YWxpZCA9PT0gdm9pZCAwKSB7IG8uaW52YWxpZCA9IGludmFsaWRUYXJnZXQ7IH1cbiAgaWYgKG8uY29udGFpbmVycyA9PT0gdm9pZCAwKSB7IG8uY29udGFpbmVycyA9IGluaXRpYWxDb250YWluZXJzIHx8IFtdOyB9XG4gIGlmIChvLmlzQ29udGFpbmVyID09PSB2b2lkIDApIHsgby5pc0NvbnRhaW5lciA9IG5ldmVyOyB9XG4gIGlmIChvLmNvcHkgPT09IHZvaWQgMCkgeyBvLmNvcHkgPSBmYWxzZTsgfVxuICBpZiAoby5jb3B5U29ydFNvdXJjZSA9PT0gdm9pZCAwKSB7IG8uY29weVNvcnRTb3VyY2UgPSBmYWxzZTsgfVxuICBpZiAoby5yZXZlcnRPblNwaWxsID09PSB2b2lkIDApIHsgby5yZXZlcnRPblNwaWxsID0gZmFsc2U7IH1cbiAgaWYgKG8ucmVtb3ZlT25TcGlsbCA9PT0gdm9pZCAwKSB7IG8ucmVtb3ZlT25TcGlsbCA9IGZhbHNlOyB9XG4gIGlmIChvLmRpcmVjdGlvbiA9PT0gdm9pZCAwKSB7IG8uZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJzsgfVxuICBpZiAoby5pZ25vcmVJbnB1dFRleHRTZWxlY3Rpb24gPT09IHZvaWQgMCkgeyBvLmlnbm9yZUlucHV0VGV4dFNlbGVjdGlvbiA9IHRydWU7IH1cbiAgaWYgKG8ubWlycm9yQ29udGFpbmVyID09PSB2b2lkIDApIHsgby5taXJyb3JDb250YWluZXIgPSBkb2MuYm9keTsgfVxuXG4gIHZhciBkcmFrZSA9IGVtaXR0ZXIoe1xuICAgIGNvbnRhaW5lcnM6IG8uY29udGFpbmVycyxcbiAgICBzdGFydDogbWFudWFsU3RhcnQsXG4gICAgZW5kOiBlbmQsXG4gICAgY2FuY2VsOiBjYW5jZWwsXG4gICAgcmVtb3ZlOiByZW1vdmUsXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICBjYW5Nb3ZlOiBjYW5Nb3ZlLFxuICAgIGRyYWdnaW5nOiBmYWxzZVxuICB9KTtcblxuICBpZiAoby5yZW1vdmVPblNwaWxsID09PSB0cnVlKSB7XG4gICAgZHJha2Uub24oJ292ZXInLCBzcGlsbE92ZXIpLm9uKCdvdXQnLCBzcGlsbE91dCk7XG4gIH1cblxuICBldmVudHMoKTtcblxuICByZXR1cm4gZHJha2U7XG5cbiAgZnVuY3Rpb24gaXNDb250YWluZXIgKGVsKSB7XG4gICAgcmV0dXJuIGRyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZihlbCkgIT09IC0xIHx8IG8uaXNDb250YWluZXIoZWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXZlbnRzIChyZW1vdmUpIHtcbiAgICB2YXIgb3AgPSByZW1vdmUgPyAncmVtb3ZlJyA6ICdhZGQnO1xuICAgIHRvdWNoeShkb2N1bWVudEVsZW1lbnQsIG9wLCAnbW91c2Vkb3duJywgZ3JhYik7XG4gICAgdG91Y2h5KGRvY3VtZW50RWxlbWVudCwgb3AsICdtb3VzZXVwJywgcmVsZWFzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBldmVudHVhbE1vdmVtZW50cyAocmVtb3ZlKSB7XG4gICAgdmFyIG9wID0gcmVtb3ZlID8gJ3JlbW92ZScgOiAnYWRkJztcbiAgICB0b3VjaHkoZG9jdW1lbnRFbGVtZW50LCBvcCwgJ21vdXNlbW92ZScsIHN0YXJ0QmVjYXVzZU1vdXNlTW92ZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gbW92ZW1lbnRzIChyZW1vdmUpIHtcbiAgICB2YXIgb3AgPSByZW1vdmUgPyAncmVtb3ZlJyA6ICdhZGQnO1xuICAgIGNyb3NzdmVudFtvcF0oZG9jdW1lbnRFbGVtZW50LCAnc2VsZWN0c3RhcnQnLCBwcmV2ZW50R3JhYmJlZCk7IC8vIElFOFxuICAgIGNyb3NzdmVudFtvcF0oZG9jdW1lbnRFbGVtZW50LCAnY2xpY2snLCBwcmV2ZW50R3JhYmJlZCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICBldmVudHModHJ1ZSk7XG4gICAgcmVsZWFzZSh7fSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmV2ZW50R3JhYmJlZCAoZSkge1xuICAgIGlmIChfZ3JhYmJlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdyYWIgKGUpIHtcbiAgICBfbW92ZVggPSBlLmNsaWVudFg7XG4gICAgX21vdmVZID0gZS5jbGllbnRZO1xuXG4gICAgdmFyIGlnbm9yZSA9IHdoaWNoTW91c2VCdXR0b24oZSkgIT09IDEgfHwgZS5tZXRhS2V5IHx8IGUuY3RybEtleTtcbiAgICBpZiAoaWdub3JlKSB7XG4gICAgICByZXR1cm47IC8vIHdlIG9ubHkgY2FyZSBhYm91dCBob25lc3QtdG8tZ29kIGxlZnQgY2xpY2tzIGFuZCB0b3VjaCBldmVudHNcbiAgICB9XG4gICAgdmFyIGl0ZW0gPSBlLnRhcmdldDtcbiAgICB2YXIgY29udGV4dCA9IGNhblN0YXJ0KGl0ZW0pO1xuICAgIGlmICghY29udGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfZ3JhYmJlZCA9IGNvbnRleHQ7XG4gICAgZXZlbnR1YWxNb3ZlbWVudHMoKTtcbiAgICBpZiAoZS50eXBlID09PSAnbW91c2Vkb3duJykge1xuICAgICAgaWYgKGlzSW5wdXQoaXRlbSkpIHsgLy8gc2VlIGFsc286IGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhL2lzc3Vlcy8yMDhcbiAgICAgICAgaXRlbS5mb2N1cygpOyAvLyBmaXhlcyBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYS9pc3N1ZXMvMTc2XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIGZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhL2lzc3Vlcy8xNTVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydEJlY2F1c2VNb3VzZU1vdmVkIChlKSB7XG4gICAgaWYgKCFfZ3JhYmJlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2hpY2hNb3VzZUJ1dHRvbihlKSA9PT0gMCkge1xuICAgICAgcmVsZWFzZSh7fSk7XG4gICAgICByZXR1cm47IC8vIHdoZW4gdGV4dCBpcyBzZWxlY3RlZCBvbiBhbiBpbnB1dCBhbmQgdGhlbiBkcmFnZ2VkLCBtb3VzZXVwIGRvZXNuJ3QgZmlyZS4gdGhpcyBpcyBvdXIgb25seSBob3BlXG4gICAgfVxuICAgIC8vIHRydXRoeSBjaGVjayBmaXhlcyAjMjM5LCBlcXVhbGl0eSBmaXhlcyAjMjA3XG4gICAgaWYgKGUuY2xpZW50WCAhPT0gdm9pZCAwICYmIGUuY2xpZW50WCA9PT0gX21vdmVYICYmIGUuY2xpZW50WSAhPT0gdm9pZCAwICYmIGUuY2xpZW50WSA9PT0gX21vdmVZKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvLmlnbm9yZUlucHV0VGV4dFNlbGVjdGlvbikge1xuICAgICAgdmFyIGNsaWVudFggPSBnZXRDb29yZCgnY2xpZW50WCcsIGUpO1xuICAgICAgdmFyIGNsaWVudFkgPSBnZXRDb29yZCgnY2xpZW50WScsIGUpO1xuICAgICAgdmFyIGVsZW1lbnRCZWhpbmRDdXJzb3IgPSBkb2MuZWxlbWVudEZyb21Qb2ludChjbGllbnRYLCBjbGllbnRZKTtcbiAgICAgIGlmIChpc0lucHV0KGVsZW1lbnRCZWhpbmRDdXJzb3IpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZ3JhYmJlZCA9IF9ncmFiYmVkOyAvLyBjYWxsIHRvIGVuZCgpIHVuc2V0cyBfZ3JhYmJlZFxuICAgIGV2ZW50dWFsTW92ZW1lbnRzKHRydWUpO1xuICAgIG1vdmVtZW50cygpO1xuICAgIGVuZCgpO1xuICAgIHN0YXJ0KGdyYWJiZWQpO1xuXG4gICAgdmFyIG9mZnNldCA9IGdldE9mZnNldChfaXRlbSk7XG4gICAgX29mZnNldFggPSBnZXRDb29yZCgncGFnZVgnLCBlKSAtIG9mZnNldC5sZWZ0O1xuICAgIF9vZmZzZXRZID0gZ2V0Q29vcmQoJ3BhZ2VZJywgZSkgLSBvZmZzZXQudG9wO1xuXG4gICAgY2xhc3Nlcy5hZGQoX2NvcHkgfHwgX2l0ZW0sICdndS10cmFuc2l0Jyk7XG4gICAgcmVuZGVyTWlycm9ySW1hZ2UoKTtcbiAgICBkcmFnKGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuU3RhcnQgKGl0ZW0pIHtcbiAgICBpZiAoZHJha2UuZHJhZ2dpbmcgJiYgX21pcnJvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNDb250YWluZXIoaXRlbSkpIHtcbiAgICAgIHJldHVybjsgLy8gZG9uJ3QgZHJhZyBjb250YWluZXIgaXRzZWxmXG4gICAgfVxuICAgIHZhciBoYW5kbGUgPSBpdGVtO1xuICAgIHdoaWxlIChnZXRQYXJlbnQoaXRlbSkgJiYgaXNDb250YWluZXIoZ2V0UGFyZW50KGl0ZW0pKSA9PT0gZmFsc2UpIHtcbiAgICAgIGlmIChvLmludmFsaWQoaXRlbSwgaGFuZGxlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpdGVtID0gZ2V0UGFyZW50KGl0ZW0pOyAvLyBkcmFnIHRhcmdldCBzaG91bGQgYmUgYSB0b3AgZWxlbWVudFxuICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHNvdXJjZSA9IGdldFBhcmVudChpdGVtKTtcbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoby5pbnZhbGlkKGl0ZW0sIGhhbmRsZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbW92YWJsZSA9IG8ubW92ZXMoaXRlbSwgc291cmNlLCBoYW5kbGUsIG5leHRFbChpdGVtKSk7XG4gICAgaWYgKCFtb3ZhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICBzb3VyY2U6IHNvdXJjZVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjYW5Nb3ZlIChpdGVtKSB7XG4gICAgcmV0dXJuICEhY2FuU3RhcnQoaXRlbSk7XG4gIH1cblxuICBmdW5jdGlvbiBtYW51YWxTdGFydCAoaXRlbSkge1xuICAgIHZhciBjb250ZXh0ID0gY2FuU3RhcnQoaXRlbSk7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgIHN0YXJ0KGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0IChjb250ZXh0KSB7XG4gICAgaWYgKGlzQ29weShjb250ZXh0Lml0ZW0sIGNvbnRleHQuc291cmNlKSkge1xuICAgICAgX2NvcHkgPSBjb250ZXh0Lml0ZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgZHJha2UuZW1pdCgnY2xvbmVkJywgX2NvcHksIGNvbnRleHQuaXRlbSwgJ2NvcHknKTtcbiAgICB9XG5cbiAgICBfc291cmNlID0gY29udGV4dC5zb3VyY2U7XG4gICAgX2l0ZW0gPSBjb250ZXh0Lml0ZW07XG4gICAgX2luaXRpYWxTaWJsaW5nID0gX2N1cnJlbnRTaWJsaW5nID0gbmV4dEVsKGNvbnRleHQuaXRlbSk7XG5cbiAgICBkcmFrZS5kcmFnZ2luZyA9IHRydWU7XG4gICAgZHJha2UuZW1pdCgnZHJhZycsIF9pdGVtLCBfc291cmNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludmFsaWRUYXJnZXQgKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZCAoKSB7XG4gICAgaWYgKCFkcmFrZS5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtO1xuICAgIGRyb3AoaXRlbSwgZ2V0UGFyZW50KGl0ZW0pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuZ3JhYiAoKSB7XG4gICAgX2dyYWJiZWQgPSBmYWxzZTtcbiAgICBldmVudHVhbE1vdmVtZW50cyh0cnVlKTtcbiAgICBtb3ZlbWVudHModHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWxlYXNlIChlKSB7XG4gICAgdW5ncmFiKCk7XG5cbiAgICBpZiAoIWRyYWtlLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgdmFyIGNsaWVudFggPSBnZXRDb29yZCgnY2xpZW50WCcsIGUpO1xuICAgIHZhciBjbGllbnRZID0gZ2V0Q29vcmQoJ2NsaWVudFknLCBlKTtcbiAgICB2YXIgZWxlbWVudEJlaGluZEN1cnNvciA9IGdldEVsZW1lbnRCZWhpbmRQb2ludChfbWlycm9yLCBjbGllbnRYLCBjbGllbnRZKTtcbiAgICB2YXIgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIGNsaWVudFgsIGNsaWVudFkpO1xuICAgIGlmIChkcm9wVGFyZ2V0ICYmICgoX2NvcHkgJiYgby5jb3B5U29ydFNvdXJjZSkgfHwgKCFfY29weSB8fCBkcm9wVGFyZ2V0ICE9PSBfc291cmNlKSkpIHtcbiAgICAgIGRyb3AoaXRlbSwgZHJvcFRhcmdldCk7XG4gICAgfSBlbHNlIGlmIChvLnJlbW92ZU9uU3BpbGwpIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcm9wIChpdGVtLCB0YXJnZXQpIHtcbiAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50KGl0ZW0pO1xuICAgIGlmIChfY29weSAmJiBvLmNvcHlTb3J0U291cmNlICYmIHRhcmdldCA9PT0gX3NvdXJjZSkge1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKF9pdGVtKTtcbiAgICB9XG4gICAgaWYgKGlzSW5pdGlhbFBsYWNlbWVudCh0YXJnZXQpKSB7XG4gICAgICBkcmFrZS5lbWl0KCdjYW5jZWwnLCBpdGVtLCBfc291cmNlLCBfc291cmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZHJha2UuZW1pdCgnZHJvcCcsIGl0ZW0sIHRhcmdldCwgX3NvdXJjZSwgX2N1cnJlbnRTaWJsaW5nKTtcbiAgICB9XG4gICAgY2xlYW51cCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlICgpIHtcbiAgICBpZiAoIWRyYWtlLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgdmFyIHBhcmVudCA9IGdldFBhcmVudChpdGVtKTtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgfVxuICAgIGRyYWtlLmVtaXQoX2NvcHkgPyAnY2FuY2VsJyA6ICdyZW1vdmUnLCBpdGVtLCBwYXJlbnQsIF9zb3VyY2UpO1xuICAgIGNsZWFudXAoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCAocmV2ZXJ0KSB7XG4gICAgaWYgKCFkcmFrZS5kcmFnZ2luZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcmV2ZXJ0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwID8gcmV2ZXJ0IDogby5yZXZlcnRPblNwaWxsO1xuICAgIHZhciBpdGVtID0gX2NvcHkgfHwgX2l0ZW07XG4gICAgdmFyIHBhcmVudCA9IGdldFBhcmVudChpdGVtKTtcbiAgICB2YXIgaW5pdGlhbCA9IGlzSW5pdGlhbFBsYWNlbWVudChwYXJlbnQpO1xuICAgIGlmIChpbml0aWFsID09PSBmYWxzZSAmJiByZXZlcnRzKSB7XG4gICAgICBpZiAoX2NvcHkpIHtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChfY29weSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9zb3VyY2UuaW5zZXJ0QmVmb3JlKGl0ZW0sIF9pbml0aWFsU2libGluZyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpbml0aWFsIHx8IHJldmVydHMpIHtcbiAgICAgIGRyYWtlLmVtaXQoJ2NhbmNlbCcsIGl0ZW0sIF9zb3VyY2UsIF9zb3VyY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkcmFrZS5lbWl0KCdkcm9wJywgaXRlbSwgcGFyZW50LCBfc291cmNlLCBfY3VycmVudFNpYmxpbmcpO1xuICAgIH1cbiAgICBjbGVhbnVwKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwICgpIHtcbiAgICB2YXIgaXRlbSA9IF9jb3B5IHx8IF9pdGVtO1xuICAgIHVuZ3JhYigpO1xuICAgIHJlbW92ZU1pcnJvckltYWdlKCk7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGNsYXNzZXMucm0oaXRlbSwgJ2d1LXRyYW5zaXQnKTtcbiAgICB9XG4gICAgaWYgKF9yZW5kZXJUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KF9yZW5kZXJUaW1lcik7XG4gICAgfVxuICAgIGRyYWtlLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgaWYgKF9sYXN0RHJvcFRhcmdldCkge1xuICAgICAgZHJha2UuZW1pdCgnb3V0JywgaXRlbSwgX2xhc3REcm9wVGFyZ2V0LCBfc291cmNlKTtcbiAgICB9XG4gICAgZHJha2UuZW1pdCgnZHJhZ2VuZCcsIGl0ZW0pO1xuICAgIF9zb3VyY2UgPSBfaXRlbSA9IF9jb3B5ID0gX2luaXRpYWxTaWJsaW5nID0gX2N1cnJlbnRTaWJsaW5nID0gX3JlbmRlclRpbWVyID0gX2xhc3REcm9wVGFyZ2V0ID0gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzSW5pdGlhbFBsYWNlbWVudCAodGFyZ2V0LCBzKSB7XG4gICAgdmFyIHNpYmxpbmc7XG4gICAgaWYgKHMgIT09IHZvaWQgMCkge1xuICAgICAgc2libGluZyA9IHM7XG4gICAgfSBlbHNlIGlmIChfbWlycm9yKSB7XG4gICAgICBzaWJsaW5nID0gX2N1cnJlbnRTaWJsaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaWJsaW5nID0gbmV4dEVsKF9jb3B5IHx8IF9pdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldCA9PT0gX3NvdXJjZSAmJiBzaWJsaW5nID09PSBfaW5pdGlhbFNpYmxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kRHJvcFRhcmdldCAoZWxlbWVudEJlaGluZEN1cnNvciwgY2xpZW50WCwgY2xpZW50WSkge1xuICAgIHZhciB0YXJnZXQgPSBlbGVtZW50QmVoaW5kQ3Vyc29yO1xuICAgIHdoaWxlICh0YXJnZXQgJiYgIWFjY2VwdGVkKCkpIHtcbiAgICAgIHRhcmdldCA9IGdldFBhcmVudCh0YXJnZXQpO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuXG4gICAgZnVuY3Rpb24gYWNjZXB0ZWQgKCkge1xuICAgICAgdmFyIGRyb3BwYWJsZSA9IGlzQ29udGFpbmVyKHRhcmdldCk7XG4gICAgICBpZiAoZHJvcHBhYmxlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBpbW1lZGlhdGUgPSBnZXRJbW1lZGlhdGVDaGlsZCh0YXJnZXQsIGVsZW1lbnRCZWhpbmRDdXJzb3IpO1xuICAgICAgdmFyIHJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZSh0YXJnZXQsIGltbWVkaWF0ZSwgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgICB2YXIgaW5pdGlhbCA9IGlzSW5pdGlhbFBsYWNlbWVudCh0YXJnZXQsIHJlZmVyZW5jZSk7XG4gICAgICBpZiAoaW5pdGlhbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gc2hvdWxkIGFsd2F5cyBiZSBhYmxlIHRvIGRyb3AgaXQgcmlnaHQgYmFjayB3aGVyZSBpdCB3YXNcbiAgICAgIH1cbiAgICAgIHJldHVybiBvLmFjY2VwdHMoX2l0ZW0sIHRhcmdldCwgX3NvdXJjZSwgcmVmZXJlbmNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcmFnIChlKSB7XG4gICAgaWYgKCFfbWlycm9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciBjbGllbnRYID0gZ2V0Q29vcmQoJ2NsaWVudFgnLCBlKTtcbiAgICB2YXIgY2xpZW50WSA9IGdldENvb3JkKCdjbGllbnRZJywgZSk7XG4gICAgdmFyIHggPSBjbGllbnRYIC0gX29mZnNldFg7XG4gICAgdmFyIHkgPSBjbGllbnRZIC0gX29mZnNldFk7XG5cbiAgICBfbWlycm9yLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICBfbWlycm9yLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuXG4gICAgdmFyIGl0ZW0gPSBfY29weSB8fCBfaXRlbTtcbiAgICB2YXIgZWxlbWVudEJlaGluZEN1cnNvciA9IGdldEVsZW1lbnRCZWhpbmRQb2ludChfbWlycm9yLCBjbGllbnRYLCBjbGllbnRZKTtcbiAgICB2YXIgZHJvcFRhcmdldCA9IGZpbmREcm9wVGFyZ2V0KGVsZW1lbnRCZWhpbmRDdXJzb3IsIGNsaWVudFgsIGNsaWVudFkpO1xuICAgIHZhciBjaGFuZ2VkID0gZHJvcFRhcmdldCAhPT0gbnVsbCAmJiBkcm9wVGFyZ2V0ICE9PSBfbGFzdERyb3BUYXJnZXQ7XG4gICAgaWYgKGNoYW5nZWQgfHwgZHJvcFRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgb3V0KCk7XG4gICAgICBfbGFzdERyb3BUYXJnZXQgPSBkcm9wVGFyZ2V0O1xuICAgICAgb3ZlcigpO1xuICAgIH1cbiAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50KGl0ZW0pO1xuICAgIGlmIChkcm9wVGFyZ2V0ID09PSBfc291cmNlICYmIF9jb3B5ICYmICFvLmNvcHlTb3J0U291cmNlKSB7XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHJlZmVyZW5jZTtcbiAgICB2YXIgaW1tZWRpYXRlID0gZ2V0SW1tZWRpYXRlQ2hpbGQoZHJvcFRhcmdldCwgZWxlbWVudEJlaGluZEN1cnNvcik7XG4gICAgaWYgKGltbWVkaWF0ZSAhPT0gbnVsbCkge1xuICAgICAgcmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlKGRyb3BUYXJnZXQsIGltbWVkaWF0ZSwgY2xpZW50WCwgY2xpZW50WSk7XG4gICAgfSBlbHNlIGlmIChvLnJldmVydE9uU3BpbGwgPT09IHRydWUgJiYgIV9jb3B5KSB7XG4gICAgICByZWZlcmVuY2UgPSBfaW5pdGlhbFNpYmxpbmc7XG4gICAgICBkcm9wVGFyZ2V0ID0gX3NvdXJjZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKF9jb3B5ICYmIHBhcmVudCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChcbiAgICAgIChyZWZlcmVuY2UgPT09IG51bGwgJiYgY2hhbmdlZCkgfHxcbiAgICAgIHJlZmVyZW5jZSAhPT0gaXRlbSAmJlxuICAgICAgcmVmZXJlbmNlICE9PSBuZXh0RWwoaXRlbSlcbiAgICApIHtcbiAgICAgIF9jdXJyZW50U2libGluZyA9IHJlZmVyZW5jZTtcbiAgICAgIGRyb3BUYXJnZXQuaW5zZXJ0QmVmb3JlKGl0ZW0sIHJlZmVyZW5jZSk7XG4gICAgICBkcmFrZS5lbWl0KCdzaGFkb3cnLCBpdGVtLCBkcm9wVGFyZ2V0LCBfc291cmNlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbW92ZWQgKHR5cGUpIHsgZHJha2UuZW1pdCh0eXBlLCBpdGVtLCBfbGFzdERyb3BUYXJnZXQsIF9zb3VyY2UpOyB9XG4gICAgZnVuY3Rpb24gb3ZlciAoKSB7IGlmIChjaGFuZ2VkKSB7IG1vdmVkKCdvdmVyJyk7IH0gfVxuICAgIGZ1bmN0aW9uIG91dCAoKSB7IGlmIChfbGFzdERyb3BUYXJnZXQpIHsgbW92ZWQoJ291dCcpOyB9IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNwaWxsT3ZlciAoZWwpIHtcbiAgICBjbGFzc2VzLnJtKGVsLCAnZ3UtaGlkZScpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3BpbGxPdXQgKGVsKSB7XG4gICAgaWYgKGRyYWtlLmRyYWdnaW5nKSB7IGNsYXNzZXMuYWRkKGVsLCAnZ3UtaGlkZScpOyB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJNaXJyb3JJbWFnZSAoKSB7XG4gICAgaWYgKF9taXJyb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHJlY3QgPSBfaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBfbWlycm9yID0gX2l0ZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgIF9taXJyb3Iuc3R5bGUud2lkdGggPSBnZXRSZWN0V2lkdGgocmVjdCkgKyAncHgnO1xuICAgIF9taXJyb3Iuc3R5bGUuaGVpZ2h0ID0gZ2V0UmVjdEhlaWdodChyZWN0KSArICdweCc7XG4gICAgY2xhc3Nlcy5ybShfbWlycm9yLCAnZ3UtdHJhbnNpdCcpO1xuICAgIGNsYXNzZXMuYWRkKF9taXJyb3IsICdndS1taXJyb3InKTtcbiAgICBvLm1pcnJvckNvbnRhaW5lci5hcHBlbmRDaGlsZChfbWlycm9yKTtcbiAgICB0b3VjaHkoZG9jdW1lbnRFbGVtZW50LCAnYWRkJywgJ21vdXNlbW92ZScsIGRyYWcpO1xuICAgIGNsYXNzZXMuYWRkKG8ubWlycm9yQ29udGFpbmVyLCAnZ3UtdW5zZWxlY3RhYmxlJyk7XG4gICAgZHJha2UuZW1pdCgnY2xvbmVkJywgX21pcnJvciwgX2l0ZW0sICdtaXJyb3InKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZU1pcnJvckltYWdlICgpIHtcbiAgICBpZiAoX21pcnJvcikge1xuICAgICAgY2xhc3Nlcy5ybShvLm1pcnJvckNvbnRhaW5lciwgJ2d1LXVuc2VsZWN0YWJsZScpO1xuICAgICAgdG91Y2h5KGRvY3VtZW50RWxlbWVudCwgJ3JlbW92ZScsICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICAgIGdldFBhcmVudChfbWlycm9yKS5yZW1vdmVDaGlsZChfbWlycm9yKTtcbiAgICAgIF9taXJyb3IgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEltbWVkaWF0ZUNoaWxkIChkcm9wVGFyZ2V0LCB0YXJnZXQpIHtcbiAgICB2YXIgaW1tZWRpYXRlID0gdGFyZ2V0O1xuICAgIHdoaWxlIChpbW1lZGlhdGUgIT09IGRyb3BUYXJnZXQgJiYgZ2V0UGFyZW50KGltbWVkaWF0ZSkgIT09IGRyb3BUYXJnZXQpIHtcbiAgICAgIGltbWVkaWF0ZSA9IGdldFBhcmVudChpbW1lZGlhdGUpO1xuICAgIH1cbiAgICBpZiAoaW1tZWRpYXRlID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gaW1tZWRpYXRlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlIChkcm9wVGFyZ2V0LCB0YXJnZXQsIHgsIHkpIHtcbiAgICB2YXIgaG9yaXpvbnRhbCA9IG8uZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgdmFyIHJlZmVyZW5jZSA9IHRhcmdldCAhPT0gZHJvcFRhcmdldCA/IGluc2lkZSgpIDogb3V0c2lkZSgpO1xuICAgIHJldHVybiByZWZlcmVuY2U7XG5cbiAgICBmdW5jdGlvbiBvdXRzaWRlICgpIHsgLy8gc2xvd2VyLCBidXQgYWJsZSB0byBmaWd1cmUgb3V0IGFueSBwb3NpdGlvblxuICAgICAgdmFyIGxlbiA9IGRyb3BUYXJnZXQuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgdmFyIGk7XG4gICAgICB2YXIgZWw7XG4gICAgICB2YXIgcmVjdDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBlbCA9IGRyb3BUYXJnZXQuY2hpbGRyZW5baV07XG4gICAgICAgIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKGhvcml6b250YWwgJiYgKHJlY3QubGVmdCArIHJlY3Qud2lkdGggLyAyKSA+IHgpIHsgcmV0dXJuIGVsOyB9XG4gICAgICAgIGlmICghaG9yaXpvbnRhbCAmJiAocmVjdC50b3AgKyByZWN0LmhlaWdodCAvIDIpID4geSkgeyByZXR1cm4gZWw7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc2lkZSAoKSB7IC8vIGZhc3RlciwgYnV0IG9ubHkgYXZhaWxhYmxlIGlmIGRyb3BwZWQgaW5zaWRlIGEgY2hpbGQgZWxlbWVudFxuICAgICAgdmFyIHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZSh4ID4gcmVjdC5sZWZ0ICsgZ2V0UmVjdFdpZHRoKHJlY3QpIC8gMik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzb2x2ZSh5ID4gcmVjdC50b3AgKyBnZXRSZWN0SGVpZ2h0KHJlY3QpIC8gMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZSAoYWZ0ZXIpIHtcbiAgICAgIHJldHVybiBhZnRlciA/IG5leHRFbCh0YXJnZXQpIDogdGFyZ2V0O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ29weSAoaXRlbSwgY29udGFpbmVyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvLmNvcHkgPT09ICdib29sZWFuJyA/IG8uY29weSA6IG8uY29weShpdGVtLCBjb250YWluZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvdWNoeSAoZWwsIG9wLCB0eXBlLCBmbikge1xuICB2YXIgdG91Y2ggPSB7XG4gICAgbW91c2V1cDogJ3RvdWNoZW5kJyxcbiAgICBtb3VzZWRvd246ICd0b3VjaHN0YXJ0JyxcbiAgICBtb3VzZW1vdmU6ICd0b3VjaG1vdmUnXG4gIH07XG4gIHZhciBwb2ludGVycyA9IHtcbiAgICBtb3VzZXVwOiAncG9pbnRlcnVwJyxcbiAgICBtb3VzZWRvd246ICdwb2ludGVyZG93bicsXG4gICAgbW91c2Vtb3ZlOiAncG9pbnRlcm1vdmUnXG4gIH07XG4gIHZhciBtaWNyb3NvZnQgPSB7XG4gICAgbW91c2V1cDogJ01TUG9pbnRlclVwJyxcbiAgICBtb3VzZWRvd246ICdNU1BvaW50ZXJEb3duJyxcbiAgICBtb3VzZW1vdmU6ICdNU1BvaW50ZXJNb3ZlJ1xuICB9O1xuICBpZiAoZ2xvYmFsLm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZCkge1xuICAgIGNyb3NzdmVudFtvcF0oZWwsIHBvaW50ZXJzW3R5cGVdLCBmbik7XG4gIH0gZWxzZSBpZiAoZ2xvYmFsLm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkKSB7XG4gICAgY3Jvc3N2ZW50W29wXShlbCwgbWljcm9zb2Z0W3R5cGVdLCBmbik7XG4gIH0gZWxzZSB7XG4gICAgY3Jvc3N2ZW50W29wXShlbCwgdG91Y2hbdHlwZV0sIGZuKTtcbiAgICBjcm9zc3ZlbnRbb3BdKGVsLCB0eXBlLCBmbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gd2hpY2hNb3VzZUJ1dHRvbiAoZSkge1xuICBpZiAoZS50b3VjaGVzICE9PSB2b2lkIDApIHsgcmV0dXJuIGUudG91Y2hlcy5sZW5ndGg7IH1cbiAgaWYgKGUud2hpY2ggIT09IHZvaWQgMCAmJiBlLndoaWNoICE9PSAwKSB7IHJldHVybiBlLndoaWNoOyB9IC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYS9pc3N1ZXMvMjYxXG4gIGlmIChlLmJ1dHRvbnMgIT09IHZvaWQgMCkgeyByZXR1cm4gZS5idXR0b25zOyB9XG4gIHZhciBidXR0b24gPSBlLmJ1dHRvbjtcbiAgaWYgKGJ1dHRvbiAhPT0gdm9pZCAwKSB7IC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9ibG9iLzk5ZThmZjFiYWE3YWUzNDFlOTRiYjg5YzNlODQ1NzBjN2MzYWQ5ZWEvc3JjL2V2ZW50LmpzI0w1NzMtTDU3NVxuICAgIHJldHVybiBidXR0b24gJiAxID8gMSA6IGJ1dHRvbiAmIDIgPyAzIDogKGJ1dHRvbiAmIDQgPyAyIDogMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0IChlbCkge1xuICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IHJlY3QubGVmdCArIGdldFNjcm9sbCgnc2Nyb2xsTGVmdCcsICdwYWdlWE9mZnNldCcpLFxuICAgIHRvcDogcmVjdC50b3AgKyBnZXRTY3JvbGwoJ3Njcm9sbFRvcCcsICdwYWdlWU9mZnNldCcpXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbCAoc2Nyb2xsUHJvcCwgb2Zmc2V0UHJvcCkge1xuICBpZiAodHlwZW9mIGdsb2JhbFtvZmZzZXRQcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZ2xvYmFsW29mZnNldFByb3BdO1xuICB9XG4gIGlmIChkb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50RWxlbWVudFtzY3JvbGxQcm9wXTtcbiAgfVxuICByZXR1cm4gZG9jLmJvZHlbc2Nyb2xsUHJvcF07XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRCZWhpbmRQb2ludCAocG9pbnQsIHgsIHkpIHtcbiAgdmFyIHAgPSBwb2ludCB8fCB7fTtcbiAgdmFyIHN0YXRlID0gcC5jbGFzc05hbWU7XG4gIHZhciBlbDtcbiAgcC5jbGFzc05hbWUgKz0gJyBndS1oaWRlJztcbiAgZWwgPSBkb2MuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcbiAgcC5jbGFzc05hbWUgPSBzdGF0ZTtcbiAgcmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBuZXZlciAoKSB7IHJldHVybiBmYWxzZTsgfVxuZnVuY3Rpb24gYWx3YXlzICgpIHsgcmV0dXJuIHRydWU7IH1cbmZ1bmN0aW9uIGdldFJlY3RXaWR0aCAocmVjdCkgeyByZXR1cm4gcmVjdC53aWR0aCB8fCAocmVjdC5yaWdodCAtIHJlY3QubGVmdCk7IH1cbmZ1bmN0aW9uIGdldFJlY3RIZWlnaHQgKHJlY3QpIHsgcmV0dXJuIHJlY3QuaGVpZ2h0IHx8IChyZWN0LmJvdHRvbSAtIHJlY3QudG9wKTsgfVxuZnVuY3Rpb24gZ2V0UGFyZW50IChlbCkgeyByZXR1cm4gZWwucGFyZW50Tm9kZSA9PT0gZG9jID8gbnVsbCA6IGVsLnBhcmVudE5vZGU7IH1cbmZ1bmN0aW9uIGlzSW5wdXQgKGVsKSB7IHJldHVybiBlbC50YWdOYW1lID09PSAnSU5QVVQnIHx8IGVsLnRhZ05hbWUgPT09ICdURVhUQVJFQScgfHwgZWwudGFnTmFtZSA9PT0gJ1NFTEVDVCcgfHwgaXNFZGl0YWJsZShlbCk7IH1cbmZ1bmN0aW9uIGlzRWRpdGFibGUgKGVsKSB7XG4gIGlmICghZWwpIHsgcmV0dXJuIGZhbHNlOyB9IC8vIG5vIHBhcmVudHMgd2VyZSBlZGl0YWJsZVxuICBpZiAoZWwuY29udGVudEVkaXRhYmxlID09PSAnZmFsc2UnKSB7IHJldHVybiBmYWxzZTsgfSAvLyBzdG9wIHRoZSBsb29rdXBcbiAgaWYgKGVsLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnKSB7IHJldHVybiB0cnVlOyB9IC8vIGZvdW5kIGEgY29udGVudEVkaXRhYmxlIGVsZW1lbnQgaW4gdGhlIGNoYWluXG4gIHJldHVybiBpc0VkaXRhYmxlKGdldFBhcmVudChlbCkpOyAvLyBjb250ZW50RWRpdGFibGUgaXMgc2V0IHRvICdpbmhlcml0J1xufVxuXG5mdW5jdGlvbiBuZXh0RWwgKGVsKSB7XG4gIHJldHVybiBlbC5uZXh0RWxlbWVudFNpYmxpbmcgfHwgbWFudWFsbHkoKTtcbiAgZnVuY3Rpb24gbWFudWFsbHkgKCkge1xuICAgIHZhciBzaWJsaW5nID0gZWw7XG4gICAgZG8ge1xuICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgfSB3aGlsZSAoc2libGluZyAmJiBzaWJsaW5nLm5vZGVUeXBlICE9PSAxKTtcbiAgICByZXR1cm4gc2libGluZztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRFdmVudEhvc3QgKGUpIHtcbiAgLy8gb24gdG91Y2hlbmQgZXZlbnQsIHdlIGhhdmUgdG8gdXNlIGBlLmNoYW5nZWRUb3VjaGVzYFxuICAvLyBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MTkyNTYzL3RvdWNoZW5kLWV2ZW50LXByb3BlcnRpZXNcbiAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhL2lzc3Vlcy8zNFxuICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdO1xuICB9XG4gIGlmIChlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gIH1cbiAgcmV0dXJuIGU7XG59XG5cbmZ1bmN0aW9uIGdldENvb3JkIChjb29yZCwgZSkge1xuICB2YXIgaG9zdCA9IGdldEV2ZW50SG9zdChlKTtcbiAgdmFyIG1pc3NNYXAgPSB7XG4gICAgcGFnZVg6ICdjbGllbnRYJywgLy8gSUU4XG4gICAgcGFnZVk6ICdjbGllbnRZJyAvLyBJRThcbiAgfTtcbiAgaWYgKGNvb3JkIGluIG1pc3NNYXAgJiYgIShjb29yZCBpbiBob3N0KSAmJiBtaXNzTWFwW2Nvb3JkXSBpbiBob3N0KSB7XG4gICAgY29vcmQgPSBtaXNzTWFwW2Nvb3JkXTtcbiAgfVxuICByZXR1cm4gaG9zdFtjb29yZF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZHJhZ3VsYTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2kgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nLCB0aWNrO1xuaWYgKHNpKSB7XG4gIHRpY2sgPSBmdW5jdGlvbiAoZm4pIHsgc2V0SW1tZWRpYXRlKGZuKTsgfTtcbn0gZWxzZSB7XG4gIHRpY2sgPSBmdW5jdGlvbiAoZm4pIHsgc2V0VGltZW91dChmbiwgMCk7IH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGljazsiLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsIiFmdW5jdGlvbih0LG8pe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUobyk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9bygpOnQudGluZ2xlPW8oKX0odGhpcyxmdW5jdGlvbigpe3ZhciBvPSExO2Z1bmN0aW9uIHQodCl7dGhpcy5vcHRzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKylmb3IodmFyIG8gaW4gYXJndW1lbnRzW3RdKWFyZ3VtZW50c1t0XS5oYXNPd25Qcm9wZXJ0eShvKSYmKGFyZ3VtZW50c1swXVtvXT1hcmd1bWVudHNbdF1bb10pO3JldHVybiBhcmd1bWVudHNbMF19KHt9LHtvbkNsb3NlOm51bGwsb25PcGVuOm51bGwsYmVmb3JlT3BlbjpudWxsLGJlZm9yZUNsb3NlOm51bGwsc3RpY2t5Rm9vdGVyOiExLGZvb3RlcjohMSxjc3NDbGFzczpbXSxjbG9zZUxhYmVsOlwiQ2xvc2VcIixjbG9zZU1ldGhvZHM6W1wib3ZlcmxheVwiLFwiYnV0dG9uXCIsXCJlc2NhcGVcIl19LHQpLHRoaXMuaW5pdCgpfWZ1bmN0aW9uIGUoKXt0aGlzLm1vZGFsQm94Rm9vdGVyJiYodGhpcy5tb2RhbEJveEZvb3Rlci5zdHlsZS53aWR0aD10aGlzLm1vZGFsQm94LmNsaWVudFdpZHRoK1wicHhcIix0aGlzLm1vZGFsQm94Rm9vdGVyLnN0eWxlLmxlZnQ9dGhpcy5tb2RhbEJveC5vZmZzZXRMZWZ0K1wicHhcIil9cmV0dXJuIHQucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oKXtpZighdGhpcy5tb2RhbClyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLm1vZGFsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKFwidGluZ2xlLW1vZGFsXCIpLDAhPT10aGlzLm9wdHMuY2xvc2VNZXRob2RzLmxlbmd0aCYmLTEhPT10aGlzLm9wdHMuY2xvc2VNZXRob2RzLmluZGV4T2YoXCJvdmVybGF5XCIpfHx0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWwtLW5vT3ZlcmxheUNsb3NlXCIpO3RoaXMubW9kYWwuc3R5bGUuZGlzcGxheT1cIm5vbmVcIix0aGlzLm9wdHMuY3NzQ2xhc3MuZm9yRWFjaChmdW5jdGlvbih0KXtcInN0cmluZ1wiPT10eXBlb2YgdCYmdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKHQpfSx0aGlzKSwtMSE9PXRoaXMub3B0cy5jbG9zZU1ldGhvZHMuaW5kZXhPZihcImJ1dHRvblwiKSYmKHRoaXMubW9kYWxDbG9zZUJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpLHRoaXMubW9kYWxDbG9zZUJ0bi50eXBlPVwiYnV0dG9uXCIsdGhpcy5tb2RhbENsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWxfX2Nsb3NlXCIpLHRoaXMubW9kYWxDbG9zZUJ0bkljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiksdGhpcy5tb2RhbENsb3NlQnRuSWNvbi5jbGFzc0xpc3QuYWRkKFwidGluZ2xlLW1vZGFsX19jbG9zZUljb25cIiksdGhpcy5tb2RhbENsb3NlQnRuSWNvbi5pbm5lckhUTUw9Jzxzdmcgdmlld0JveD1cIjAgMCAxMCAxMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTS4zIDkuN2MuMi4yLjQuMy43LjMuMyAwIC41LS4xLjctLjNMNSA2LjRsMy4zIDMuM2MuMi4yLjUuMy43LjMuMiAwIC41LS4xLjctLjMuNC0uNC40LTEgMC0xLjRMNi40IDVsMy4zLTMuM2MuNC0uNC40LTEgMC0xLjQtLjQtLjQtMS0uNC0xLjQgMEw1IDMuNiAxLjcuM0MxLjMtLjEuNy0uMS4zLjNjLS40LjQtLjQgMSAwIDEuNEwzLjYgNSAuMyA4LjNjLS40LjQtLjQgMSAwIDEuNHpcIiBmaWxsPVwiIzAwMFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIi8+PC9zdmc+Jyx0aGlzLm1vZGFsQ2xvc2VCdG5MYWJlbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSx0aGlzLm1vZGFsQ2xvc2VCdG5MYWJlbC5jbGFzc0xpc3QuYWRkKFwidGluZ2xlLW1vZGFsX19jbG9zZUxhYmVsXCIpLHRoaXMubW9kYWxDbG9zZUJ0bkxhYmVsLmlubmVySFRNTD10aGlzLm9wdHMuY2xvc2VMYWJlbCx0aGlzLm1vZGFsQ2xvc2VCdG4uYXBwZW5kQ2hpbGQodGhpcy5tb2RhbENsb3NlQnRuSWNvbiksdGhpcy5tb2RhbENsb3NlQnRuLmFwcGVuZENoaWxkKHRoaXMubW9kYWxDbG9zZUJ0bkxhYmVsKSk7dGhpcy5tb2RhbEJveD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMubW9kYWxCb3guY2xhc3NMaXN0LmFkZChcInRpbmdsZS1tb2RhbC1ib3hcIiksdGhpcy5tb2RhbEJveENvbnRlbnQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLm1vZGFsQm94Q29udGVudC5jbGFzc0xpc3QuYWRkKFwidGluZ2xlLW1vZGFsLWJveF9fY29udGVudFwiKSx0aGlzLm1vZGFsQm94LmFwcGVuZENoaWxkKHRoaXMubW9kYWxCb3hDb250ZW50KSwtMSE9PXRoaXMub3B0cy5jbG9zZU1ldGhvZHMuaW5kZXhPZihcImJ1dHRvblwiKSYmdGhpcy5tb2RhbC5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQ2xvc2VCdG4pO3RoaXMubW9kYWwuYXBwZW5kQ2hpbGQodGhpcy5tb2RhbEJveCl9LmNhbGwodGhpcyksZnVuY3Rpb24oKXt0aGlzLl9ldmVudHM9e2NsaWNrQ2xvc2VCdG46dGhpcy5jbG9zZS5iaW5kKHRoaXMpLGNsaWNrT3ZlcmxheTpmdW5jdGlvbih0KXstMSE9PXRoaXMub3B0cy5jbG9zZU1ldGhvZHMuaW5kZXhPZihcIm92ZXJsYXlcIikmJiFmdW5jdGlvbih0LG8pe2Zvcig7KHQ9dC5wYXJlbnRFbGVtZW50KSYmIXQuY2xhc3NMaXN0LmNvbnRhaW5zKG8pOyk7cmV0dXJuIHR9KHQudGFyZ2V0LFwidGluZ2xlLW1vZGFsXCIpJiZ0LmNsaWVudFg8dGhpcy5tb2RhbC5jbGllbnRXaWR0aCYmdGhpcy5jbG9zZSgpfS5iaW5kKHRoaXMpLHJlc2l6ZTp0aGlzLmNoZWNrT3ZlcmZsb3cuYmluZCh0aGlzKSxrZXlib2FyZE5hdjpmdW5jdGlvbih0KXstMSE9PXRoaXMub3B0cy5jbG9zZU1ldGhvZHMuaW5kZXhPZihcImVzY2FwZVwiKSYmMjc9PT10LndoaWNoJiZ0aGlzLmlzT3BlbigpJiZ0aGlzLmNsb3NlKCl9LmJpbmQodGhpcyl9LC0xIT09dGhpcy5vcHRzLmNsb3NlTWV0aG9kcy5pbmRleE9mKFwiYnV0dG9uXCIpJiZ0aGlzLm1vZGFsQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5fZXZlbnRzLmNsaWNrQ2xvc2VCdG4pO3RoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMuX2V2ZW50cy5jbGlja092ZXJsYXkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5fZXZlbnRzLnJlc2l6ZSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0aGlzLl9ldmVudHMua2V5Ym9hcmROYXYpfS5jYWxsKHRoaXMpLGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKHRoaXMubW9kYWwsZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSx0aGlzLm9wdHMuZm9vdGVyJiZ0aGlzLmFkZEZvb3RlcigpLHRoaXN9LHQucHJvdG90eXBlLl9idXN5PWZ1bmN0aW9uKHQpe289dH0sdC5wcm90b3R5cGUuX2lzQnVzeT1mdW5jdGlvbigpe3JldHVybiBvfSx0LnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7bnVsbCE9PXRoaXMubW9kYWwmJih0aGlzLmlzT3BlbigpJiZ0aGlzLmNsb3NlKCEwKSxmdW5jdGlvbigpey0xIT09dGhpcy5vcHRzLmNsb3NlTWV0aG9kcy5pbmRleE9mKFwiYnV0dG9uXCIpJiZ0aGlzLm1vZGFsQ2xvc2VCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5fZXZlbnRzLmNsaWNrQ2xvc2VCdG4pO3RoaXMubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMuX2V2ZW50cy5jbGlja092ZXJsYXkpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5fZXZlbnRzLnJlc2l6ZSksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0aGlzLl9ldmVudHMua2V5Ym9hcmROYXYpfS5jYWxsKHRoaXMpLHRoaXMubW9kYWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm1vZGFsKSx0aGlzLm1vZGFsPW51bGwpfSx0LnByb3RvdHlwZS5pc09wZW49ZnVuY3Rpb24oKXtyZXR1cm4hIXRoaXMubW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGluZ2xlLW1vZGFsLS12aXNpYmxlXCIpfSx0LnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKCl7aWYoIXRoaXMuX2lzQnVzeSgpKXt0aGlzLl9idXN5KCEwKTt2YXIgdD10aGlzO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQub3B0cy5iZWZvcmVPcGVuJiZ0Lm9wdHMuYmVmb3JlT3BlbigpLHRoaXMubW9kYWwuc3R5bGUucmVtb3ZlUHJvcGVydHk/dGhpcy5tb2RhbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik6dGhpcy5tb2RhbC5zdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNwbGF5XCIpLHRoaXMuX3Njcm9sbFBvc2l0aW9uPXdpbmRvdy5wYWdlWU9mZnNldCxkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtZW5hYmxlZFwiKSxkb2N1bWVudC5ib2R5LnN0eWxlLnRvcD0tdGhpcy5fc2Nyb2xsUG9zaXRpb24rXCJweFwiLHRoaXMuc2V0U3RpY2t5Rm9vdGVyKHRoaXMub3B0cy5zdGlja3lGb290ZXIpLHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZChcInRpbmdsZS1tb2RhbC0tdmlzaWJsZVwiKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0Lm9wdHMub25PcGVuJiZ0Lm9wdHMub25PcGVuLmNhbGwodCksdC5fYnVzeSghMSksdGhpcy5jaGVja092ZXJmbG93KCksdGhpc319LHQucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKHQpe2lmKCF0aGlzLl9pc0J1c3koKSl7aWYodGhpcy5fYnVzeSghMCksITEsXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5vcHRzLmJlZm9yZUNsb3NlKWlmKCF0aGlzLm9wdHMuYmVmb3JlQ2xvc2UuY2FsbCh0aGlzKSlyZXR1cm4gdm9pZCB0aGlzLl9idXN5KCExKTtkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJ0aW5nbGUtZW5hYmxlZFwiKSx3aW5kb3cuc2Nyb2xsVG8oe3RvcDp0aGlzLl9zY3JvbGxQb3NpdGlvbixiZWhhdmlvcjpcImluc3RhbnRcIn0pLGRvY3VtZW50LmJvZHkuc3R5bGUudG9wPW51bGwsdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwidGluZ2xlLW1vZGFsLS12aXNpYmxlXCIpO3ZhciBvPXRoaXM7by5tb2RhbC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLFwiZnVuY3Rpb25cIj09dHlwZW9mIG8ub3B0cy5vbkNsb3NlJiZvLm9wdHMub25DbG9zZS5jYWxsKHRoaXMpLG8uX2J1c3koITEpfX0sdC5wcm90b3R5cGUuc2V0Q29udGVudD1mdW5jdGlvbih0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD90aGlzLm1vZGFsQm94Q29udGVudC5pbm5lckhUTUw9dDoodGhpcy5tb2RhbEJveENvbnRlbnQuaW5uZXJIVE1MPVwiXCIsdGhpcy5tb2RhbEJveENvbnRlbnQuYXBwZW5kQ2hpbGQodCkpLHRoaXMuaXNPcGVuKCkmJnRoaXMuY2hlY2tPdmVyZmxvdygpLHRoaXN9LHQucHJvdG90eXBlLmdldENvbnRlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2RhbEJveENvbnRlbnR9LHQucHJvdG90eXBlLmFkZEZvb3Rlcj1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbigpe3RoaXMubW9kYWxCb3hGb290ZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLm1vZGFsQm94Rm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWwtYm94X19mb290ZXJcIiksdGhpcy5tb2RhbEJveC5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQm94Rm9vdGVyKX0uY2FsbCh0aGlzKSx0aGlzfSx0LnByb3RvdHlwZS5zZXRGb290ZXJDb250ZW50PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLm1vZGFsQm94Rm9vdGVyLmlubmVySFRNTD10LHRoaXN9LHQucHJvdG90eXBlLmdldEZvb3RlckNvbnRlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2RhbEJveEZvb3Rlcn0sdC5wcm90b3R5cGUuc2V0U3RpY2t5Rm9vdGVyPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmlzT3ZlcmZsb3coKXx8KHQ9ITEpLHQ/dGhpcy5tb2RhbEJveC5jb250YWlucyh0aGlzLm1vZGFsQm94Rm9vdGVyKSYmKHRoaXMubW9kYWxCb3gucmVtb3ZlQ2hpbGQodGhpcy5tb2RhbEJveEZvb3RlciksdGhpcy5tb2RhbC5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQm94Rm9vdGVyKSx0aGlzLm1vZGFsQm94Rm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWwtYm94X19mb290ZXItLXN0aWNreVwiKSxlLmNhbGwodGhpcyksdGhpcy5tb2RhbEJveENvbnRlbnQuc3R5bGVbXCJwYWRkaW5nLWJvdHRvbVwiXT10aGlzLm1vZGFsQm94Rm9vdGVyLmNsaWVudEhlaWdodCsyMCtcInB4XCIpOnRoaXMubW9kYWxCb3hGb290ZXImJih0aGlzLm1vZGFsQm94LmNvbnRhaW5zKHRoaXMubW9kYWxCb3hGb290ZXIpfHwodGhpcy5tb2RhbC5yZW1vdmVDaGlsZCh0aGlzLm1vZGFsQm94Rm9vdGVyKSx0aGlzLm1vZGFsQm94LmFwcGVuZENoaWxkKHRoaXMubW9kYWxCb3hGb290ZXIpLHRoaXMubW9kYWxCb3hGb290ZXIuc3R5bGUud2lkdGg9XCJhdXRvXCIsdGhpcy5tb2RhbEJveEZvb3Rlci5zdHlsZS5sZWZ0PVwiXCIsdGhpcy5tb2RhbEJveENvbnRlbnQuc3R5bGVbXCJwYWRkaW5nLWJvdHRvbVwiXT1cIlwiLHRoaXMubW9kYWxCb3hGb290ZXIuY2xhc3NMaXN0LnJlbW92ZShcInRpbmdsZS1tb2RhbC1ib3hfX2Zvb3Rlci0tc3RpY2t5XCIpKSksdGhpc30sdC5wcm90b3R5cGUuYWRkRm9vdGVyQnRuPWZ1bmN0aW9uKHQsbyxlKXt2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO3JldHVybiBzLmlubmVySFRNTD10LHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZSksXCJzdHJpbmdcIj09dHlwZW9mIG8mJm8ubGVuZ3RoJiZvLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3MuY2xhc3NMaXN0LmFkZCh0KX0pLHRoaXMubW9kYWxCb3hGb290ZXIuYXBwZW5kQ2hpbGQocyksc30sdC5wcm90b3R5cGUucmVzaXplPWZ1bmN0aW9uKCl7Y29uc29sZS53YXJuKFwiUmVzaXplIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDEuMFwiKX0sdC5wcm90b3R5cGUuaXNPdmVyZmxvdz1mdW5jdGlvbigpe3JldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ8PXRoaXMubW9kYWxCb3guY2xpZW50SGVpZ2h0fSx0LnByb3RvdHlwZS5jaGVja092ZXJmbG93PWZ1bmN0aW9uKCl7dGhpcy5tb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0aW5nbGUtbW9kYWwtLXZpc2libGVcIikmJih0aGlzLmlzT3ZlcmZsb3coKT90aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWwtLW92ZXJmbG93XCIpOnRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInRpbmdsZS1tb2RhbC0tb3ZlcmZsb3dcIiksIXRoaXMuaXNPdmVyZmxvdygpJiZ0aGlzLm9wdHMuc3RpY2t5Rm9vdGVyP3RoaXMuc2V0U3RpY2t5Rm9vdGVyKCExKTp0aGlzLmlzT3ZlcmZsb3coKSYmdGhpcy5vcHRzLnN0aWNreUZvb3RlciYmKGUuY2FsbCh0aGlzKSx0aGlzLnNldFN0aWNreUZvb3RlcighMCkpKX0se21vZGFsOnR9fSk7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
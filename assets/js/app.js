// import { exec, init } from 'pell'
import Dialog from 'a11y-dialog-component';
import Mustache from 'mustache';

global.MonsieurBizRichEditorConfig = class {
  constructor(
    input,
    uielements,
    containerHtml,
    buttonAddHtml,
    elementHtml,
    elementCardHtml,
    deletionConfirmation,
    createElementFormUrl,
    editElementFormUrl
  ) {
    this.input = input;
    this.uielements = uielements;
    this.containerHtml = containerHtml;
    this.buttonAddHtml = buttonAddHtml;
    this.elementHtml = elementHtml;
    this.elementCardHtml = elementCardHtml;
    this.deletionConfirmation = deletionConfirmation;
    this.createElementFormUrl = createElementFormUrl;
    this.editElementFormUrl = editElementFormUrl;
  }

  findUiElementByCode(code) {
    if (this.uielements[code] === undefined) {
      return null;
    }
    return this.uielements[code];
  }
};

global.MonsieurBizRichEditorUiElement = class {
  constructor(config, code, data) {
    this.config = config;
    this.code = code;
    this.data = data;
  }

  toJSON() {
    return {
      code: this.code,
      data: this.data
    };
  }

  get uielement() {
    return this.config.findUiElementByCode(this.code);
  }

  get title() {
    return this.uielement.title;
  }

  get description() {
    return this.uielement.description;
  }

  get icon() {
    return this.uielement.icon;
  }

  get manager() {
    return this.config.input.manager;
  }

  edit() {
    this.manager.editUiElement(this);
  }

  up() {
    this.manager.moveUp(this);
  }

  down() {
    this.manager.moveDown(this);
  }

  delete() {
    this.manager.delete(this);
  }
};

/**
 * Rich Editor Manager
 */
global.MonsieurBizRichEditorManager = class {

  /**
   *
   */
  constructor(config) {
    this.config = config;
    try {
      this.initUiElements(JSON.parse(this.input.value.trim()));
    } catch (e) {
      this.uiElements = [];
    }
    this.initInterface();
  }

  initUiElements(stack) {
    this.uiElements = [];
    stack.forEach(function (element) {
      if (null !== this.config.findUiElementByCode(element.code)) {
        this.uiElements.push(new MonsieurBizRichEditorUiElement(
          this.config,
          element.code,
          element.data
        ));
      }
    }.bind(this));
  }

  initInterface() {
    this.initUiElementsInterface();
    this.initUiPanelsInterface();
  }

  initUiPanelsInterface() {
    this.selectionPanel = new Dialog('.js-uie-panels', {
      backdropSelector: '.js-uie-panels',
      labelledby: 'uie-heading',
      enableAutoFocus: false,
    });
    this.newPanel = new Dialog('.js-uie-panels-new', {
      backdropSelector: '.js-uie-panels-new',
      helperSelector: '.js-uie-panels-selector',
      enableAutoFocus: false,
    });
    this.editPanel = new Dialog('.js-uie-panels-edit', {
      backdropSelector: '.js-uie-panels-edit',
      enableAutoFocus: false,
    });
  }

  initUiElementsInterface() {
    this.input.type = 'hidden';
    // container first
    let containerWrapper = document.createElement('div');
    containerWrapper.innerHTML = Mustache.render(this.config.containerHtml, {});
    this.container = containerWrapper.firstElementChild;
    this.input.after(this.container);

    // Redraw all elements then
    this.drawUiElements();
  }

  drawUiElements() {
    // Elements
    let elementsContainer = this.container.querySelector('.js-uie-container');
    elementsContainer.innerHTML = '';
    this.uiElements.forEach(function (element, position) {
      elementsContainer.append(this.getNewButton(position));
      elementsContainer.append(this.getUiElement(element, position));
    }.bind(this));
    elementsContainer.append(this.getNewButton(this.uiElements.length));
  }

  getNewButton(position) {
    let buttonWrapper = document.createElement('div');
    buttonWrapper.innerHTML = Mustache.render(this.config.buttonAddHtml, {'position': position});
    let button = buttonWrapper.firstElementChild;
    button.querySelector('.js-uie-add').position = position;
    button.querySelector('.js-uie-add').manager = this;
    button.querySelector('.js-uie-add').addEventListener('click', function (e) {
      button.querySelector('.js-uie-add').manager.openSelectionPanel(
        button.querySelector('.js-uie-add').position
      );
    });
    return button;
  }

  getUiElement(element, position) {
    let elementWrapper = document.createElement('div');
    elementWrapper.innerHTML = Mustache.render(this.config.elementHtml, {'title': element.title});
    let uiElement = elementWrapper.firstElementChild;
    uiElement.element = element;
    uiElement.position = position;
    uiElement.querySelector('.js-uie-delete').addEventListener('click', function () {
      if (confirm(this.closest('.js-uie-element').element.config.deletionConfirmation)) {
        this.closest('.js-uie-element').element.delete();
      }
    });
    if (position === 0) {
      uiElement.querySelector('.js-uie-up').remove();
    } else {
      uiElement.querySelector('.js-uie-up').addEventListener('click', function () {
        this.closest('.js-uie-element').element.up();
      });
    }
    if (position === (this.uiElements.length - 1)) {
      uiElement.querySelector('.js-uie-down').remove();
    } else {
      uiElement.querySelector('.js-uie-down').addEventListener('click', function () {
        this.closest('.js-uie-element').element.down();
      });
    }
    uiElement.querySelector('.js-uie-edit').addEventListener('click', function () {
      this.closest('.js-uie-element').element.edit();
    });
    return uiElement;
  }

  getNewUiElementCard(element, position) {
    let cardWrapper = document.createElement('div');
    cardWrapper.innerHTML = Mustache.render(this.config.elementCardHtml, element);
    let button = cardWrapper.firstElementChild;
    button.element = element;
    button.position = position;
    button.manager = this;
    button.addEventListener('click', function (e) {
      let button = e.currentTarget;
      button.manager.loadUiElementCreateForm(button.element, function (progress) {
        if (this.status === 200) {
          let data = JSON.parse(this.responseText);
          button.manager.openNewPanel(data['form_html'], button.element, button.position)
        }
      });
    });
    return button;
  }

  get input() {
    return this.config.input;
  }

  openSelectionPanel(position) {
    this.selectionPanel.dialog.manager = this;
    this.selectionPanel.dialog.position = position;

    // Draw element cards
    let cardsContainer = this.selectionPanel.dialog.querySelector('.js-uie-cards-container');
    cardsContainer.innerHTML = '';
    for (let elementCode in this.config.uielements) {
      cardsContainer.append(this.getNewUiElementCard(this.config.uielements[elementCode], position));
    }
    this.selectionPanel.open();
  }

  openNewPanel(formHtml, element, position) {
    this.newPanel.dialog.manager = this;
    this.newPanel.dialog.position = position;

    // Fill the panel with the form
    let form = document.createElement('div');
    form.innerHTML = formHtml;
    this.newPanel.dialog.innerHTML = '';
    this.newPanel.dialog.append(form);

    // Form submit
    let formElement = form.querySelector('form');
    formElement.manager = this;
    formElement.position = position;
    formElement.addEventListener('submit', function (e) {
      e.preventDefault();

      const myForm = e.currentTarget;
      myForm.manager.submitUiElementForm(myForm, function() {
        if (this.status === 200) {
          let data = JSON.parse(this.responseText);
          this.form.manager.create(data.code, data.data, this.form.position);
          this.form.manager.newPanel.close();
          this.form.manager.selectionPanel.close();
        }
      });
      return false;
    });

    // Buttons
    let cancelButton = form.querySelector('.js-uie-cancel');
    cancelButton.panel = this.newPanel;
    cancelButton.addEventListener('click', function (e) {
      e.currentTarget.panel.close();
    });
    let saveButton = form.querySelector('.js-uie-save');
    saveButton.panel = this.newPanel;
    saveButton.addEventListener('click', function (e) {
      e.currentTarget.panel.dialog.querySelector('form').dispatchEvent(
        new Event('submit', { cancelable: true })
      );
    });

    this.newPanel.open();
  }

  editUiElement(uiElement) {
    this.loadUiElementEditForm(uiElement, function (progress) {
      if (this.status === 200) {
        let data = JSON.parse(this.responseText);
        uiElement.manager.openEditPanel(data['form_html'], uiElement)
      }
    });
  }

  openEditPanel(formHtml, uiElement) {
    this.editPanel.dialog.manager = this;
    this.editPanel.dialog.uiElement = uiElement;

    // Fill the panel with the form
    let form = document.createElement('div');
    form.innerHTML = formHtml;

    let formContainer = this.editPanel.dialog.querySelector('.js-uie-content');
    formContainer.innerHTML = '';
    formContainer.append(form);

    // Form submit
    let formElement = form.querySelector('form');
    formElement.manager = this;
    formElement.uiElement = uiElement;
    formElement.addEventListener('submit', function (e) {
      e.preventDefault();

      const myForm = e.currentTarget;
      myForm.manager.submitUiElementForm(myForm, function () {
        if (this.status === 200) {
          let data = JSON.parse(this.responseText);
          this.form.uiElement.data = data.data;
          this.form.manager.write();
          this.form.manager.editPanel.close();
        }
      });
      return false;
    });

    // Buttons
    let cancelButton = form.querySelector('.js-uie-cancel');
    cancelButton.panel = this.editPanel;
    cancelButton.addEventListener('click', function (e) {
      e.currentTarget.panel.close();
    });
    let saveButton = form.querySelector('.js-uie-save');
    saveButton.panel = this.editPanel;
    saveButton.addEventListener('click', function (e) {
      e.currentTarget.panel.dialog.querySelector('form').dispatchEvent(
        new Event('submit', { cancelable: true })
      );
    });

    this.editPanel.open();
  }

  write() {
    this.input.value = JSON.stringify(this.uiElements);
    this.drawUiElements();
  }

  create(code, data, position) {
    let uiElement = new MonsieurBizRichEditorUiElement(this.config, code, data);
    this.uiElements.splice(position, 0, uiElement);
    this.write();
    return uiElement;
  }

  moveUp(uiElement) {
    let position = this.uiElements.indexOf(uiElement);
    if (position === 0) {
      return;
    }
    this.uiElements.splice(position, 1);
    this.uiElements.splice(position-1, 0, uiElement);
    this.write();
  }

  moveDown(uiElement) {
    let position = this.uiElements.indexOf(uiElement);
    if (position === (this.uiElements.length - 1)) {
      return;
    }
    this.uiElements.splice(position, 1);
    this.uiElements.splice(position+1, 0, uiElement);
    this.write();
  }

  delete(uiElement) {
    let position = this.uiElements.indexOf(uiElement);
    this.uiElements.splice(position, 1);
    this.write();
  }

  loadUiElementCreateForm(element, callback) {
    let req = new XMLHttpRequest();
    req.onload = callback;
    let url = this.config.createElementFormUrl;
    req.open("get", url.replace('__CODE__', element.code), true);
    req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    req.send();
  }

  loadUiElementEditForm(element, callback) {
    let req = new XMLHttpRequest();
    req.onload = callback;
    let url = this.config.editElementFormUrl;
    req.open("post", url.replace('__CODE__', element.code), true);
    req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send(new URLSearchParams({data: JSON.stringify(element.data)}).toString());
  }

  submitUiElementForm(form, callback) {
    let req = new XMLHttpRequest();
    req.onload = callback;
    req.form = form;
    req.open("post", form.action, true);
    req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    req.send(new FormData(form));
  }
};

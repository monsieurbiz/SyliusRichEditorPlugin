// import { exec, init } from 'pell'
import Mustache from 'mustache';

global.MonsieurBizRichEditorConfig = class {
  constructor(input, uielements) {
    this.input = input;
    this.uielements = uielements;
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

  up() {
    this.manager.moveUp(this);
  }

  down() {
    this.manager.moveDown(this);
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
      this.initUiElements(JSON.parse(this.input.value));
    } catch (e) {
      this.uiElements = [];
    }
    this.write();
  }

  initUiElements(stack) {
    this.uiElements = [];
    for (let element in stack) {
      if (null !== this.config.findUiElementByCode(element.code)) {
        this.uiElements.put(new MonsieurBizRichEditorUiElement(
          this.config,
          element.code,
          element.data
        ));
      }
    }
  }

  get input() {
    return this.config.input;
  }

  write() {
    this.input.value = JSON.stringify(this.uiElements);
  }

  create(position, code) {
    let uiElement = new MonsieurBizRichEditorUiElement(this.config, code, {});
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
    this.uiElements.splice(position-1,0, uiElement);
    this.write();
  }

  moveDown(uiElement) {
    let position = this.uiElements.indexOf(uiElement);
    if (position === (this.uiElements.length - 1)) {
      return;
    }
    this.uiElements.splice(position, 1);
    this.uiElements.splice(position+1,0, uiElement);
    this.write();
  }

  delete(uiElement) {
    let position = this.uiElements.indexOf(uiElement);
    this.uiElements.splice(position, 1);
    this.write();
  }

};

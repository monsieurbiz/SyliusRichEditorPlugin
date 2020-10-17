// import { exec, init } from 'pell'

global.MonsieurBizRichEditorConfig = class {
  constructor(input) {
    this.input = input;
  }
};

global.MonsieurBizRichEditorUiElement = class {
  constructor(config, code) {
    this.config = config;
    this.code = code;
    this.data = {};
  }

  toJSON() {
    return {
      code: this.code,
      data: this.data
    };
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
      this.uiElements = JSON.parse(this.input.value);
    } catch (e) {
      this.uiElements = [];
    }
    this.write();
  }

  static init() {
    window.dispatchEvent(new Event('monsieurbiz_richeditor_init'));
  }

  get input() {
    return this.config.input;
  }

  write() {
    this.input.value = JSON.stringify(this.uiElements);
  }

  create(position, code) {
    let uiElement = new MonsieurBizRichEditorUiElement(this.config, code);
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

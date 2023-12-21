import pell from 'pell';
import Dialog from 'a11y-dialog-component';
import Mustache from 'mustache';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from "@editorjs/list";
import Hyperlink from 'editorjs-hyperlink';
import Delimiter from '@editorjs/delimiter';
import createGenericInlineTool from 'editorjs-inline-tool'
import { IconBold, IconUnderline } from '@codexteam/icons';
import {debug} from "@symfony/webpack-encore/lib/logger";

export class CustomHyperlink extends Hyperlink {
  // cf https://github.com/trinhtam/editorjs-hyperlink/issues/19#issuecomment-1814519884
  iconSvg(name, width = 14, height = 14) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('icon', 'icon--' + name);
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('viewBox', '0 0 24 24')
    svg.setAttribute('fill', 'none');
    if (name == 'link') {
      svg.innerHTML = `
        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"></path><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"></path>
      `;
    } else {
      svg.innerHTML = `
        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"></path><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"></path><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"></path><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"></path><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"></line>
      `;
    }

    return svg;
  }

  // Fix can't change hyperlink - https://github.com/trinhtam/editorjs-hyperlink/pull/22/files
  insertLink(link, target='', rel='') {
    document.execCommand(this.commandLink, false, link);
    super.insertLink(link, target, rel);
  }
}

global.MonsieurBizRichEditorWysiwyg = class {
  constructor(config) {
    this.config = config; // {actions: []}
  }

  exec() {
    return pell.exec(...arguments);
  }

  load(container) {
    const targets = container.querySelectorAll('textarea.wysiwyg-enabled');
    for (let target of targets) {
      this.setupEditor(target);
    }
  }

  setupEditor(target) {
    target.setAttribute('hidden', 'true');
    const isEditorJS = target.dataset.editorjs !== undefined && target.dataset.editorjs !== 'false';

    // Create container
    if (isEditorJS) {
      this.setupEditorJS(target);
      return;
    }
    this.setupPellEditor(target);
  }

  setupPellEditor(target) {
    const wysiwygContainer = document.createElement('div');
    wysiwygContainer.classList.add('pell');
    target.parentNode.appendChild(wysiwygContainer);

    // Init pell wysiwyg
    const editor = pell.init({
      element: wysiwygContainer,
      onChange: html => {
        target.textContent = html
      },
      defaultParagraphSeparator: 'p',
      actions: this.config.actions,
    });

    editor.addEventListener('paste', function (e) {
      e.stopPropagation();
      e.preventDefault();
      let tempContainer = document.createElement('div');
      let clipboardData = e.clipboardData || window.clipboardData;
      tempContainer.innerHTML = clipboardData.getData('Text');
      let text = tempContainer.textContent || tempContainer.innerText || "";
      pell.exec('insertText', text);
      return true;
    });

    // Populate wysiwyg with initial content
    const initialContent = target.value;
    editor.content.innerHTML = initialContent;
  }

  setupEditorJS(target) {
    const wysiwygContainer = document.createElement('div');
    wysiwygContainer.classList.add('editorjs');
    target.parentNode.appendChild(wysiwygContainer);

    const tools = this.getEditorJSTools();
    const toolbar = this.getEditorJSToolbar();

    const editor = new EditorJS({
      holder: wysiwygContainer,
      inlineToolbar: toolbar,
      tools: tools,
      onChange: (api) => {
        api.saver.save().then((outputData) => {
          target.textContent = JSON.stringify(outputData);
        }).catch((error) => {
          console.log('Saving failed: ', error)
        });
      }
    });

    editor.isReady
      .then(() => {
        if (target.value === '') {
          return;
        }
        try {
          const value = JSON.parse(target.value);
          editor.blocks.render(value);
        } catch (e) {
          editor.blocks.renderFromHTML(target.value)
        }
      })
      .catch((reason) => {
        console.log(`Editor.js initialization failed because of ${reason}`)
      })
    ;
  }

  /**
   * This method converts the config.actions into a list of EditorJS inline tools for the toolbar.
   */
  getEditorJSToolbar() {
    let toolbar = [];
    this.config.actions.forEach(function (action) {
      if (action === 'bold') {
        toolbar.push('bold');
      }
      if (action === 'italic') {
        toolbar.push('italic');
      }
      if (action === 'underline') {
        toolbar.push('underline');
      }
      if (action === 'link') {
        toolbar.push('link');
      }
    });

    return toolbar;
  }

  /**
   * This method converts the config.actions into a list of EditorJS tools.
   */
  getEditorJSTools() {
    let tools = {};
    let header = true;
    let levels = [];
    this.config.actions.forEach(function (action) {
      if (action === 'heading1') {
        header = true;
        levels.push(1);
      }
      if (action === 'heading2') {
        header = true;
        levels.push(2);
      }
      if (action instanceof Object && action.name === 'heading3') {
        header = true;
        levels.push(3);
      }
      if ((action === 'ulist' || action === 'olist') && !tools['list']) {
        tools['list'] = {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          }
        };
      }
      if (action === 'link') {
        tools['link'] = {
          class: CustomHyperlink,
          config: {
            target: '_blank',
            availableTargets: ['_blank', '_self'],
            validate: false,
          }
        };
      }
      if (action === 'bold') {
        tools['bold'] = {
          class: createGenericInlineTool({
            sanitize: {
              strong: {},
              b: {},
            },
            tagName: 'STRONG',
            toolboxIcon: IconBold
          }),
        };
      }
      if (action === 'underline') {
        tools['underline'] = {
          class: createGenericInlineTool({
            sanitize: {
              span: {
                class: "underline",
              },
            },
            tagName: 'SPAN',
            toolboxIcon: IconUnderline
          }),
        };
      }
      if (action instanceof Object && action.name === 'hr') {
        tools['delimiter'] = {
          class: Delimiter,
        };
      }
    })

    if (header) {
        tools['header'] = {
          class: Header,
          config: {
            levels: levels || [1, 2, 3, 4, 5, 6],
            defaultLevel: levels.length > 0 ? levels[0] : 1,
          }
        };
    }

    // dispatch custom event to allow project to add tools
    document.dispatchEvent(new CustomEvent('mbiz:rich-editor:editorjs:tools', {
      'detail': {'tools': tools}
    }));

    return tools;
  }
};

global.MonsieurBizRichEditorConfig = class {
  constructor(
    input,
    uielements,
    wysiwyg,
    containerHtml,
    actionsHtml,
    elementHtml,
    elementCardHtml,
    panelsHtml,
    panelsEditHtml,
    deletionConfirmation,
    createElementFormUrl,
    editElementFormUrl,
    renderElementsUrl,
    defaultUiElement,
    defaultUIElementDataField,
    errorMessage,
    unallowedUiElementMessage
  ) {
    this.input = input;
    this.uielements = uielements;
    this.wysiwyg = wysiwyg;
    this.containerHtml = containerHtml;
    this.actionsHtml = actionsHtml;
    this.elementHtml = elementHtml;
    this.elementCardHtml = elementCardHtml;
    this.panelsHtml = panelsHtml;
    this.panelsEditHtml = panelsEditHtml;
    this.deletionConfirmation = deletionConfirmation;
    this.createElementFormUrl = createElementFormUrl;
    this.editElementFormUrl = editElementFormUrl;
    this.renderElementsUrl = renderElementsUrl;
    this.defaultUiElement = defaultUiElement;
    this.defaultUIElementDataField = defaultUIElementDataField;
    this.errorMessage = errorMessage;
    this.unallowedUiElementMessage = unallowedUiElementMessage;
    this.uid = Math.random().toString(36).substring(2, 11);
  }

  findUiElementByCode(code) {
    if (this.uielements[code] === undefined) {
      return null;
    }
    return this.uielements[code];
  }
};

global.MonsieurBizRichEditorUiElement = class {
  constructor(config, code, data, previewHtml) {
    this.config = config;
    this.code = code;
    this.data = data;
    this.previewHtml = previewHtml;
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

  get enabled() {
    return this.uielement.enabled;
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

  copy(callback) {
    this.manager.saveUiElementToClipboard(this, callback);
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
  constructor(config, tags) {
    config.input.setAttribute('data-rich-editor-uid', config.uid);

    this.config = config;

    let inputValue = this.input.value.trim();

    this.tags = tags;
    this.tagsAreExclusive = false;
    for (let tag of this.tags) {
      if (!tag.startsWith('-')) {
        this.tagsAreExclusive = true;
        break;
      }
    }

    let initInterfaceCallback = function () {
      this.initInterface();
    }.bind(this);

    if (inputValue !== '') {
      try {
        this.initUiElements(JSON.parse(inputValue), initInterfaceCallback);
      } catch (e) {
        this.initUiElements(
          [{
            "code": this.config.defaultUiElement,
            "data": {
              [this.config.defaultUIElementDataField]: inputValue
            }
          }],
          initInterfaceCallback
        );
      }
    } else {
      this.uiElements = [];
      this.initInterface();
    }
  }

  initUiElements(stack, initInterfaceCallback) {
    this.uiElements = [];
    this.requestUiElementsHtml(stack, function () {
      // this = req
      if (this.status === 200) {
        let renderedElements = JSON.parse(this.responseText);
        renderedElements.forEach(function (elementHtml, position) {
          let element = stack[position];
          if (element.code === undefined && element.type !== undefined) {
            element.code = element.type;
            element.data = element.fields;
            delete element.type;
            delete element.fields;
          }
          let uiElement = this.config.findUiElementByCode(element.code);
          if (null !== uiElement) {
            this.uiElements.push(new MonsieurBizRichEditorUiElement(
              this.config,
              uiElement.code,
              element.data,
              elementHtml
            ));
          }
        }.bind(this.manager));
        initInterfaceCallback();
      }
    });
  }

  initInterface() {
    this.initUiElementsInterface();
    this.initUiPanelsInterface();
    document.dispatchEvent(new CustomEvent('mbiz:rich-editor:init-interface-complete', {
      'detail': {'editorManager': this}
    }));
    document.addEventListener('mbiz:rich-editor:uielement:copied', function (e) {
      this.container.querySelectorAll('.js-uie-paste').forEach(function (action) {
        action.classList.remove('disabled');
      }.bind(this));
    }.bind(this));
  }

  initUiPanelsInterface() {
    let panelsWrapper = document.createElement('div');
    panelsWrapper.innerHTML = Mustache.render(this.config.panelsHtml, { uid: this.config.uid });
    document.body.appendChild(panelsWrapper.firstElementChild);

    let panelsEditWrapper = document.createElement('div');
    panelsEditWrapper.innerHTML = Mustache.render(this.config.panelsEditHtml, {
      uid: this.config.uid,
    });
    document.body.appendChild(panelsEditWrapper.firstElementChild);

    this.selectionPanel = new Dialog('.js-uie-panels-' + this.config.uid, {
      labelledby: 'uie-heading-' + this.config.uid,
      enableAutoFocus: false,
      closingSelector: '.js-uie-panels-close-' + this.config.uid,
    });
    this.newPanel = new Dialog('.js-uie-panels-new-' + this.config.uid, {
      helperSelector: '.js-uie-panels-selector-' + this.config.uid,
      enableAutoFocus: false,
    });
    this.editPanel = new Dialog('.js-uie-panels-edit-' + this.config.uid, {
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

    // Redraw all elements then (using a write to keep compatibility)
    this.write();
  }

  drawUiElements() {
    // Elements
    let elementsContainer = this.container.querySelector('.js-uie-container');
    elementsContainer.innerHTML = '';
    this.uiElements.forEach(function (element, position) {
      elementsContainer.append(this.getActions(position));
      elementsContainer.append(this.getUiElement(element, position));
    }.bind(this));
    elementsContainer.append(this.getActions(this.uiElements.length));
  }

  getActions(position) {
    let actionsWrapper = document.createElement('div');
    actionsWrapper.innerHTML = Mustache.render(this.config.actionsHtml, {'position': position});

    let actions = actionsWrapper.firstElementChild;

    // Add button
    actions.querySelector('.js-uie-add').position = position;
    actions.querySelector('.js-uie-add').manager = this;
    actions.querySelector('.js-uie-add').addEventListener('click', function (e) {
      actions.querySelector('.js-uie-add').manager.openSelectionPanel(
        actions.querySelector('.js-uie-add').position
      );
    });

    // Paste clipboard button
    actions.querySelector('.js-uie-paste').position = position;
    actions.querySelector('.js-uie-paste').manager = this;
    actions.querySelector('.js-uie-paste').addEventListener('click', function (e) {
      actions.querySelector('.js-uie-paste').manager.pasteUiElementFromClipboard(
        actions.querySelector('.js-uie-paste').position
      );
    });
    // Disabled?
    if (!this.isClipboardEmpty()) {
      actions.querySelector('.js-uie-paste').classList.remove('disabled');
    }

    return actions;
  }

  getUiElement(element, position) {
    let elementWrapper = document.createElement('div');
    elementWrapper.innerHTML = Mustache.render(this.config.elementHtml, {
      'title': element.title,
      'icon': element.icon,
      'preview': element.previewHtml,
      'disabled': !element.enabled
    });
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
    uiElement.querySelector('.js-uie-copy').addEventListener('click', function (e) {
      this.closest('.js-uie-element').element.copy(function () {
        const button = e.currentTarget;
        const originalText = button.dataset.tooltip;
        button.dataset.tooltip = button.dataset.alternateText;
        window.setTimeout(function () {
          button.dataset.tooltip = originalText;
        }, 1000);
      });
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

  get wysiwyg() {
    return this.config.wysiwyg;
  }

  openSelectionPanel(position) {
    this.selectionPanel.dialog.manager = this;
    this.selectionPanel.dialog.position = position;

    // Draw element cards
    let cardsContainer = this.selectionPanel.dialog.querySelector('.js-uie-cards-container');
    cardsContainer.innerHTML = '';
    for (let elementCode in this.config.uielements) {
      if (
        this.config.uielements[elementCode].ignored // duplicates using aliases
        || !this.config.uielements[elementCode].enabled // avoid disabled elements to show up!
      ) {
        continue;
      }
      let append = true;
      if (this.tags.length > 0) {
        append = !this.tagsAreExclusive;
        for (let tagIndex in this.tags) { // We proceed tag by tag, excluding and including for every tag, so the order matters!
          let realTag = this.tags[tagIndex].replace(/^(-|\+)/, '');
          if (0 <= this.config.uielements[elementCode].tags.indexOf(realTag)) { // The element is tagged
            append = !this.tags[tagIndex].startsWith('-'); // Append only if the tag is not excluded
          }
        }
      }
      if (append) {
        cardsContainer.append(this.getNewUiElementCard(this.config.uielements[elementCode], position));
      }
    }
    this.newPanel.close();
    this.selectionPanel.open();
  }

  drawNewForm(formHtml, position) {
    this.newPanel.dialog.innerHTML = formHtml;
    let form = this.newPanel.dialog;
    this.wysiwyg.load(form);
    this.dispatchInitFormEvent(form, this);

    // Form submit
    let formElement = form.querySelector('form');
    formElement.manager = this;
    formElement.position = position;
    formElement.addEventListener('submit', function (e) {
      e.preventDefault();

      const myForm = e.currentTarget;
      myForm.manager.submitUiElementForm(myForm, function () {
        if (this.status === 200) {
          let data = JSON.parse(this.responseText);
          if (data.error) {
            this.form.manager.drawNewForm(data.form_html, this.form.position);
          } else {
            this.form.manager.create(data.code, data.data, data.previewHtml, this.form.position);
            this.form.manager.newPanel.close();
            this.form.manager.selectionPanel.close();
          }
        }
        if (this.status !== 200) {
          alert(this.form.manager.config.errorMessage);
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
        new Event('submit', {cancelable: true})
      );
    });
  }

  openNewPanel(formHtml, element, position) {
    this.newPanel.dialog.manager = this;
    this.newPanel.dialog.position = position;

    // Fill the panel with the form
    this.drawNewForm(formHtml, position);

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

  drawEditForm(formHtml, uiElement) {
    this.editPanel.dialog.querySelector('.js-uie-content').innerHTML = formHtml;
    let form = this.editPanel.dialog;

    this.wysiwyg.load(form);
    this.dispatchInitFormEvent(form, this);

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
          if (data.error) {
            this.form.manager.drawEditForm(data.form_html, this.form.uiElement);
          } else {
            this.form.uiElement.data = data.data;
            this.form.uiElement.previewHtml = data.previewHtml;
            this.form.manager.write();
            this.form.manager.editPanel.close();
          }
        }
        if (this.status !== 200) {
          alert(this.config.errorMessage);
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
        new Event('submit', {cancelable: true})
      );
    });
  }

  openEditPanel(formHtml, uiElement) {
    this.editPanel.dialog.manager = this;
    this.editPanel.dialog.uiElement = uiElement;

    // Fill the panel with the form
    this.drawEditForm(formHtml, uiElement);

    this.editPanel.open();
  }

  write() {
    this.input.value = (this.uiElements.length > 0) ? JSON.stringify(this.uiElements) : '';
    this.drawUiElements();
    document.dispatchEvent(new CustomEvent('mbiz:rich-editor:write-complete', {
      'detail': {'editorManager': this}
    }));
  }

  create(code, data, previewHtml, position) {
    let uiElement = new MonsieurBizRichEditorUiElement(this.config, code, data, previewHtml);
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
    this.uiElements.splice(position - 1, 0, uiElement);
    this.write();
  }

  moveDown(uiElement) {
    let position = this.uiElements.indexOf(uiElement);
    if (position === (this.uiElements.length - 1)) {
      return;
    }
    this.uiElements.splice(position, 1);
    this.uiElements.splice(position + 1, 0, uiElement);
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

  requestUiElementsHtml(uiElements, callback) {
    let req = new XMLHttpRequest();
    req.onload = callback;
    req.open("post", this.config.renderElementsUrl, true);
    req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    let data = new FormData();
    data.append('ui_elements', JSON.stringify(uiElements));
    if (this.input.dataset.locale) {
      data.append('locale', this.input.dataset.locale);
    }
    req.uiElements = uiElements;
    req.manager = this;
    req.send(data);
  }

  isClipboardEmpty() {
    const clipboard = window.sessionStorage.getItem('monsieurBizRichEditorClipboard');
    return null === clipboard || '' === clipboard;
  }

  saveUiElementToClipboard(uiElement, callback) {
    window.sessionStorage.setItem('monsieurBizRichEditorClipboard', JSON.stringify(uiElement));
    callback();
    document.dispatchEvent(new CustomEvent('mbiz:rich-editor:uielement:copied', {}));
  }

  pasteUiElementFromClipboard(futurePosition) {
    const clipboard = window.sessionStorage.getItem('monsieurBizRichEditorClipboard');
    if (null !== clipboard) {
      const pastedUiElement = JSON.parse(clipboard);
      const manager = this;
      manager.requestUiElementsHtml([pastedUiElement], function () {
        if (this.status === 200) {
          let renderedElements = JSON.parse(this.responseText);
          const elementHtml = renderedElements.shift();
          if (pastedUiElement.code === undefined && pastedUiElement.type !== undefined) {
            pastedUiElement.code = pastedUiElement.type;
            pastedUiElement.data = pastedUiElement.fields;
            delete pastedUiElement.type;
            delete pastedUiElement.fields;
          }
          let uiElement = manager.config.findUiElementByCode(pastedUiElement.code);
          if (null !== uiElement) {
            if (manager.tags.length > 0) {
              let copy = false;
              for (let tagIndex in manager.tags) {
                if (0 <= manager.config.uielements[uiElement.code].tags.indexOf(manager.tags[tagIndex])) {
                  copy = true;
                }
              }
              if (copy) {
                manager.create(uiElement.code, pastedUiElement.data, elementHtml, futurePosition);
              } else {
                alert(manager.config.unallowedUiElementMessage);
              }
            } else {
              manager.create(uiElement.code, pastedUiElement.data, elementHtml, futurePosition);
            }
          }
        }
      });
    }
  }

  dispatchInitFormEvent(form, manager) {
    document.dispatchEvent(new CustomEvent('monsieurBizRichEditorInitForm', {
      'detail': {'form': form, 'manager': manager}
    }));
  }
};

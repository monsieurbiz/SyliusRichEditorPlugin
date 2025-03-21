import Dialog from 'a11y-dialog-component';
import Mustache from 'mustache';
import '../css/app.scss';

import suneditor from "./editors/editors/suneditor";

const initEditors = (target) => {
    suneditor.init(target);
}

document.addEventListener('DOMContentLoaded', function () {
    const target = document.querySelector('body');
    initEditors(target);
});

document.addEventListener('rich-editor:reload', function (event) {
    const target = event.target;
    if (target === undefined) {
        return;
    }
    initEditors(target);
});

global.MonsieurBizRichEditorConfig = class {
    constructor(
        input,
        uielements,
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

  get iconHtml() {
        return this.uielement.iconHtml;
    }

    get manager() {
        return this.config.input.manager;
    }

    edit() {
        this.manager.editUiElement(this);
    }

    copy() {
        this.manager.saveUiElementToClipboard(this);
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
    constructor(config, tags, locale) {
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

        this.locale = locale;

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
        this.initUiToolsInterface();

        document.dispatchEvent(new CustomEvent('mbiz:rich-editor:init-interface-complete', {
            'detail': {'editorManager': this}
        }));
        document.addEventListener('mbiz:rich-editor:uielement:copied', function (e) {
            this.container.querySelectorAll('.js-uie-paste').forEach(function (action) {
                action.classList.remove('disabled');
            }.bind(this));
        }.bind(this));

        document.addEventListener('mbiz:rich-editor:uielements:copied', function (e) {
            this.container.querySelectorAll('.js-uie-tools-paste-all').forEach(function (action) {
                action.removeAttribute('disabled');
            }.bind(this));
        }.bind(this));

        if (window.localStorage.getItem('monsieurBizRichEditorElementsClipboard') !== null) {
            this.container.querySelectorAll('.js-uie-tools-paste-all').forEach(function (action) {
                action.removeAttribute('disabled');
            }.bind(this));
        }
    }

    initUiToolsInterface() {
        const copyAllButton = this.container.querySelector('.js-uie-tools-copy-all');
        const pasteAllButton = this.container.querySelector('.js-uie-tools-paste-all');
        const trashAllButton = this.container.querySelector('.js-uie-tools-trash-all');

        copyAllButton && copyAllButton.addEventListener('click', e => {
            this.saveUiElementsToClipboard();
        });

        pasteAllButton && pasteAllButton.addEventListener('click', e => {
            this.pasteUiElementsFromClipboard();
        });

        trashAllButton && trashAllButton.addEventListener('click', e => {
            this.resetUiElements();
        });
    }

    initTooltips(source) {
        // Retrieve all elements with data-tooltip
        source.querySelectorAll("[data-tooltip]").forEach(el => {
            // Set `title` which will be used by Bootstrap for display
            el.setAttribute("title", el.getAttribute("data-tooltip"));
        });

        // Setup the tooltips
        var tooltipTriggerList = [].slice.call(source.querySelectorAll('[data-tooltip]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            // Init the tooltip
            const tooltip = new bootstrap.Tooltip(tooltipTriggerEl);

            // Manage behaviour on click
            tooltipTriggerEl.addEventListener('click', function () {
                // An alternate text is displayed before hide (like `Copied!` when you copy an element)
                if (tooltipTriggerEl.dataset.alternateText) {
                    const originalText = tooltipTriggerEl.dataset.tooltip;
                    tooltip.setContent({ '.tooltip-inner': tooltipTriggerEl.dataset.alternateText });
                    window.setTimeout(function () {
                        tooltipTriggerEl.title = originalText;
                        tooltip.setContent({ '.tooltip-inner': originalText });
                        tooltip.hide();
                    }, 1000);

                    return;
                }

                // If no alternate text, hide the tooltip to avoid to have it kept displayed
                tooltip.hide();
            });
        });
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
        if (!this.isClipboardEmpty('monsieurBizRichEditorElementClipboard')) {
            actions.querySelector('.js-uie-paste').classList.remove('disabled');
        }

        return actions;
    }

    getUiElement(element, position) {
        let elementWrapper = document.createElement('div');
        elementWrapper.innerHTML = Mustache.render(this.config.elementHtml, {
            'title': element.title,
            'icon': element.icon,
            'iconHtml': element.iconHtml,
            'preview': element.previewHtml,
            'disabled': !element.enabled
        });
        let uiElement = elementWrapper.firstElementChild;
        uiElement.element = element;
        uiElement.position = position;
        uiElement.manager = this;
        uiElement.querySelector('.js-uie-delete').addEventListener('click', function () {
            uiElement.manager.loadUiConfirmationModal(() => { this.closest('.js-uie-element').element.delete() })
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
            this.closest('.js-uie-element').element.copy();
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
            if (
                this.config.uielements[elementCode].ignored // duplicates using aliases
                || !this.config.uielements[elementCode].enabled // avoid disabled elements to show up!
            ) {
                continue;
            }
            if (this.elementIsAllowed(this.tags, this.config.uielements[elementCode].tags, this.tagsAreExclusive)) {
                cardsContainer.append(this.getNewUiElementCard(this.config.uielements[elementCode], position));
            }
        }
        this.newPanel.close();
        this.initTooltips(cardsContainer);
        this.selectionPanel.open();
    }

    drawNewForm(formHtml, position) {
        this.newPanel.dialog.innerHTML = formHtml;
        let form = this.newPanel.dialog;
        initEditors(form);
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
                        myForm.innerHTML = '';
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
            formElement.innerHTML = '';
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

        initEditors(form);
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
                        myForm.innerHTML = '';
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
            formElement.innerHTML = '';
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
        this.initTooltips(this.container);
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
        let url = this.config.createElementFormUrl + '?locale=' + this.locale;
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
        req.send(new URLSearchParams({data: JSON.stringify(element.data), locale: this.locale}).toString());
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

    isClipboardEmpty(clipboardKey) {
        const clipboard = window.localStorage.getItem(clipboardKey);
        return null === clipboard || '' === clipboard;
    }

    resetUiElements() {
        if (this.uiElements.length === 0) {
            return;
        }

        this.loadUiConfirmationModal(() => { this.initUiElements([], () => { this.write(); }) })
    }

    loadUiConfirmationModal(callback) {
        const modalElement = document.querySelector('#monsieurbiz-rich-editor-confirmation-modal');
        const confirmButton = modalElement.querySelector('#monsieurbiz-rich-editor-confirmation-button');

        const clonedConfirmButtom = confirmButton.cloneNode(true);
        confirmButton.parentNode.replaceChild(clonedConfirmButtom, confirmButton);
        clonedConfirmButtom.addEventListener('click', () => {
            callback();
        })

        let modal = new bootstrap.Modal(modalElement);
        modal.show();
    }

    saveUiElementsToClipboard() {
        window.localStorage.setItem('monsieurBizRichEditorElementsClipboard', JSON.stringify(this.uiElements));
        document.dispatchEvent(new CustomEvent('mbiz:rich-editor:uielements:copied', {}));
    }

    pasteUiElementsFromClipboard() {
        const clipboard = window.localStorage.getItem('monsieurBizRichEditorElementsClipboard');
        if (clipboard !== null) {
            const pastedUiElements = JSON.parse(clipboard);
            let allowed = true;
            pastedUiElements.forEach((pastedUiElement) => {
                let uiElementCode = pastedUiElement.code;
                if (!this.elementIsAllowed(this.tags, this.config.uielements[uiElementCode].tags, this.tagsAreExclusive)) {
                    allowed = false;
                    return;
                }
            });

            // Show alert message if at least one element is not allowed
            if (!allowed) {
                alert(this.config.unallowedUiElementMessage);
                return;
            }

            if (this.uiElements.length > 0) {
                this.loadUiConfirmationModal(() => { this.initUiElements(pastedUiElements, () => { this.write(); }) })
            } else {
                this.initUiElements(pastedUiElements, () => { this.write(); });
            }
        }
    }

    saveUiElementToClipboard(uiElement,) {
        window.localStorage.setItem('monsieurBizRichEditorElementClipboard', JSON.stringify(uiElement));
        document.dispatchEvent(new CustomEvent('mbiz:rich-editor:uielement:copied', {}));
    }

    pasteUiElementFromClipboard(futurePosition) {
        const clipboard = window.localStorage.getItem('monsieurBizRichEditorElementClipboard');
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
                            if (manager.elementIsAllowed(manager.tags, manager.config.uielements[uiElement.code].tags, manager.tagsAreExclusive)) {
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

    elementIsAllowed(managerTags, elementTags, tagsAreExclusive) {
      let allowed = true;
      if (managerTags.length > 0) {
        allowed = !tagsAreExclusive;
        for (let tagIndex in managerTags) { // We proceed tag by tag, excluding and including for every tag, so the order matters!
          let realTag = managerTags[tagIndex].replace(/^(-|\+)/, '');
          if (0 <= elementTags.indexOf(realTag)) { // The element is tagged
            allowed = !managerTags[tagIndex].startsWith('-'); // Authorize only if the tag is not excluded
          }
        }
      }

      return allowed;
    }

    dispatchInitFormEvent(form, manager) {
        document.dispatchEvent(new CustomEvent('monsieurBizRichEditorInitForm', {
            'detail': {'form': form, 'manager': manager}
        }));
    }
};

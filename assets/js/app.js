import dragula from 'dragula';
import tingle from 'tingle.js';
import { exec, init } from 'pell'

/**
 * Class to manage Rich editor fields with UI Elements
 */
class MbizRichEditorFields {

    /**
     * Constructor for MbizRichEditorFields, see config in `src/Resources/views/Admin/app.html.twig`
     * @param config
     */
    constructor(config) {
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
            this.log('Plugin configuration:', this.config);
            this.log('Matched element(s):', this.targets.length);
        }

        // Internal attributes
        this.id = {
            uiElementsContainer: 'mbiz-rich-editor-elements-container',
            uiElementsContainerInner: 'mbiz-rich-editor-elements-container-inner',
            uiElementsContent: 'mbiz-rich-editor-elements-content',
        };
        this.classes = {
            uiElementList: 'mbiz-rich-editor-component-ui-elements',
            dropableContainer: 'mbiz-rich-editor-dropable-container',
            dropableContainerInner: 'mbiz-rich-editor-dropable-container-inner',
            draggableContainer: 'mbiz-rich-editor-draggable-container',
            draggableItem: 'mbiz-rich-editor-draggable-item',
            draggableItemHandler: 'mbiz-rich-editor-draggable-item-handler',
            draggableItemInner: 'mbiz-rich-editor-draggable-item-inner',
            draggableItemImg: 'mbiz-rich-editor-draggable-item-img',
            draggableItemContent: 'mbiz-rich-editor-draggable-item-content',
            draggableItemInfos: 'mbiz-rich-editor-draggable-item-infos',
            draggableItemTitle: 'mbiz-rich-editor-draggable-item-title',
            draggableItemActions: 'mbiz-rich-editor-draggable-item-actions',
            draggableItemButton: 'mbiz-rich-editor-draggable-item-button',
            deleteButton: 'mbiz-rich-editor-delete-button',
            updateButton: 'mbiz-rich-editor-update-button',
            toggleButton: 'mbiz-rich-editor-toggle-button',
            closeButton: 'mbiz-rich-editor-close-button',
            renderedModal: 'mbiz-rich-editor-rendred-modal',
        };
        this.events = {
            uiElementsBuilt: new Event('uiElementsBuilt'),
            updateElement: function(modal) { return new CustomEvent('updateElement', {'detail': modal}) },
        };
    }

    /**
     * Init each Rich Editor element
     */
    init() {
        // Init only if we match at least one target
        if (this.targets.length) {
            let _self = this;
            // Init fields only when UI Elements are built
            this.container.addEventListener('uiElementsBuilt', function(e) {
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
    initUiElements(target, uiElements) {
        this.log('Init UI Elements:', uiElements);

        // Init container
        const uiElementsContainer = document.createElement('div');
        uiElementsContainer.id = this.id.uiElementsContainer;
        uiElementsContainer.classList.add(this.classes.dropableContainer, this.classes.uiElementList);

        // Init close container button
        const uiElementsContainerClose = `<button type="button" class="${this.classes.closeButton} ${this.classes.toggleButton}">${this.translations.close}</button>`;
        uiElementsContainer.insertAdjacentHTML('beforeend', uiElementsContainerClose);

        // Init container inner
        const uiElementsContainerInner = document.createElement('div');
        uiElementsContainerInner.id = this.id.uiElementsContainerInner;
        uiElementsContainerInner.classList.add(this.classes.dropableContainerInner);
        uiElementsContainer.appendChild(uiElementsContainerInner);

        // Loop on UI Elements
        let error = false;
        for (let type in uiElements) {
            let uiElement = uiElements[type];
            this.log('Init UI Element:', uiElement);

            let renderedUiElement = this.renderUiElementMetaData(type, uiElement, this.templateRender);
            if (renderedUiElement === '') {
                error = true;
                continue;
            }

            uiElementsContainerInner.insertAdjacentHTML('beforeend', renderedUiElement);
        }

        // Append generated HTML to display current UI Elements of target
        if (!error) {
            target.insertBefore(uiElementsContainer, target.firstChild);
            this.container.dispatchEvent(this.events.uiElementsBuilt);
        }
    }

    /**
     * Init each Rich Editor fields
     */
    initFields() {
        for (let target of this.targets) {
            let content = target.value;
            if (!content) {
                content = '[]';
            }
            this.log('Target\'s content:', content);
            let jsonContent;
            try {
                jsonContent = JSON.parse(content);
            } catch(e) {
                this.error('Unable to parse the Rich Content JSON for this content : ', content);
                continue;
            }
            this.initField(target, jsonContent);
            this.initActions(target, jsonContent);
        }
    }

    /**
     * Init the field depending on it's parsed content
     *
     * @param target
     * @param jsonContent [{type: "UI Element Type", fields: {}}]
     */
    initField(target, jsonContent) {
        this.log('Init field with parsed content:', jsonContent);

        // Hide original input
        target.setAttribute('hidden', 'true');

        // Init container
        const elementsContainer = document.createElement('div');
        elementsContainer.id = this.id.uiElementsContent;
        elementsContainer.classList.add(this.classes.draggableContainer, this.classes.uiElementList);
        elementsContainer.dataset.placeholder = this.translations.placeholder;

        // Loop on UI Elements
        let error = false;
        for (let uiElement of jsonContent) {
            // Retrieve the Ui Element type
            this.log('Init UI Element:', uiElement);
            if (typeof this.uiElements[uiElement.type] === 'undefined') {
                error = true;
                this.error('Cannot find element of type ', uiElement.type);
                continue;
            }

            // Render Ui Element meta data
            let uiElementMetaData = this.uiElements[uiElement.type];
            this.log('Matched Ui Element with meta data:', uiElementMetaData);
            let renderedUiElementMetaData = this.renderUiElementMetaData(uiElement.type, uiElementMetaData, this.templateRender);
            if (renderedUiElementMetaData === '') {
                error = true;
                continue;
            }

            // Add rendered Ui Element meta data in container
            this.log('Rendered Ui Element meta data:', renderedUiElementMetaData);
            elementsContainer.insertAdjacentHTML('beforeend', renderedUiElementMetaData);
        }

        // Add actions buttons before target
        target.insertAdjacentHTML('beforebegin', this.renderActionsButtons(this.templateRender));

        // Append generated HTML to display current UI Elements of target
        if (!error) {
            target.parentNode.appendChild(elementsContainer);
            let reorder = this.initReorder(document.querySelector('#' + this.id.uiElementsContainer + '> div'), elementsContainer);
            this.initReorderEvent(reorder, target, jsonContent);
        }
    }

    /**
     * Toggle visibility of the ui elements
     */
    toggleUiElementsVisibility() {
        const toggleButtons = document.querySelectorAll('.' + this.classes.toggleButton);

        for (let toggleButton of toggleButtons) {
            toggleButton.addEventListener('click', (e) => {
                e.preventDefault();

                document.querySelector('#' + this.id.uiElementsContainer).classList.toggle('is-expanded');
            });
        }
    }

    /**
     * Init action for each element, current actions are update and delete
     *
     * @param target
     * @param jsonContent
     */
    initActions(target, jsonContent) {
        // Init Delete
        let deleteButtons = target.parentElement.querySelectorAll('.' + this.classes.deleteButton);
        this.log('Init delete button(s), found : ', deleteButtons.length)
        for (let deleteButton of deleteButtons) {
            this.initDeleteButton(deleteButton, jsonContent, target);
        }

        // Init Update
        let updateButtons = target.parentElement.querySelectorAll('.' + this.classes.updateButton);
        this.log('Init update button(s), found : ', updateButtons.length)
        for (let updateButton of updateButtons) {
            this.initUpdateButton(updateButton, jsonContent, target);
        }
    }

    /**
     * Call remove UI Element on click after confirm
     *
     * @param deleteButton
     * @param jsonContent
     * @param target
     */
    initDeleteButton(deleteButton, jsonContent, target) {
        let _self = this;
        deleteButton.onclick = function() {
            // Confirmation for delete
            if (confirm(_self.translations.confirm_delete)) {
                // Retrieve associated element of clicked button
                let elementToRemove = deleteButton.closest('.' + _self.classes.draggableItem);
                // Retrieve the index of the element
                let removedIndex = _self.getElementIndex(elementToRemove);
                // Check if index found and element exists
                if (removedIndex === false || typeof jsonContent[removedIndex] === 'undefined') {
                    _self.error('Cannot find UI Element in index', {index: removedIndex, jsonContent: jsonContent});
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
    initUpdateButton(updateButton, jsonContent, target) {
        let _self = this;
        updateButton.onclick = function() {
            // Retrieve associated element of clicked button
            let elementToUpdate = updateButton.closest('.' + _self.classes.draggableItem);
            // Retrieve the index of the element
            let updateIndex = _self.getElementIndex(elementToUpdate);
            // Check if index found and element exists
            if (updateIndex === false || typeof jsonContent[updateIndex] === 'undefined') {
                _self.error('Cannot find UI Element in index', {index: updateIndex, jsonContent: jsonContent});
                return;
            }
            let uiElementToUpdate = jsonContent[updateIndex];
            _self.log('UI Element to update', uiElementToUpdate);
            _self.loadForm(uiElementToUpdate, updateIndex, jsonContent, target)
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
    loadForm(uiElement, uiElementIndex, jsonContent, target) {
        let xhr = new XMLHttpRequest();
        let _self = this;
        xhr.onreadystatechange = function(){
            const DONE = 4; // readyState 4 means the request is done.
            const OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE){
                if (xhr.status === OK) {
                    _self.log('Loaded form', {response: xhr.responseText, xhr: xhr});
                    // Display the modal with the form
                    _self.renderModal(xhr.responseText, uiElement.type, uiElementIndex, jsonContent, target)
                } else {
                    _self.log('Error during load form', {status: xhr.status, xhr: xhr});
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
    renderModal(html, uiElementType, uiElementIndex, jsonContent, target) {
        let _self = this;

        // Init modal
        const modal = new tingle.modal({
            footer: true,
            stickyFooter: false,
            closeMethods: ['overlay', 'button', 'escape'],
            cssClass: [this.classes.renderedModal],
            closeLabel: this.translations.close,
            onOpen: function() {
                _self.initWysiwyg(modal.modalBoxContent);
            },
        });

        let modalPrimaryButtonClass = 'tingle-btn tingle-btn--primary tingle-btn--pull-right';
        let modalsecondaryButtonClass = 'tingle-btn tingle-btn--secondary tingle-btn--pull-right';

        if (this.templateRender === 'sylius') {
            modalPrimaryButtonClass = 'ui button primary tingle-btn--pull-right';
            modalsecondaryButtonClass = 'ui button tingle-btn--pull-right';
        }

        // Add the content
        modal.setContent(html);

        // Init the form inside the modal
        let form = this.initModalForm(uiElementType, uiElementIndex, jsonContent, target);

        // Button to submit
        modal.addFooterBtn(this.translations.apply_changes, modalPrimaryButtonClass, function () {
            if (form !== false) {
                form.dispatchEvent(_self.events.updateElement(modal));
            } else {
                _self.log('No form to submit');
            }
        });

        // Button to cancel
        modal.addFooterBtn(this.translations.cancel_changes, modalsecondaryButtonClass, function () {
            modal.close();
        });

        // Display the modal
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
    initModalForm(uiElementType, uiElementIndex, jsonContent, target) {
        // Retrieve form in modal
        let form = document.querySelector('.' + this.classes.renderedModal + ' form');

        // Do nothing if no form found
        if (form === null) {
            return false;
        }

        let _self = this;
        // Actions to perform when form is submitted
        form.addEventListener('updateElement', function(e) {
            // Check if UI Element type we want to update exists
            if (typeof _self.uiElements[uiElementType] === 'undefined') {
                _self.error('Cannot find element of type ', uiElementType);
                return;
            }
            // Update elements with form data and modal to close it if data is valid
            let modal = e.detail;
            _self.updateWithFormData(form, uiElementType, uiElementIndex, modal, jsonContent, target);

        }, false);

        return form;
    }

    /**
     * Init wysiwyg with form content data
     *
     * @param container
     */
    initWysiwyg(container) {
        const targets = container.querySelectorAll('textarea.wysiwyg-enabled');

        for (let target of targets) {
            // Hide targeted input
            target.setAttribute('hidden', 'true');

            // Create container
            const wysiwygContainer = document.createElement('div');
            wysiwygContainer.classList.add('pell');
            target.parentNode.appendChild(wysiwygContainer);

            // Init pell wysiwyg
            const editor = init({
                element: wysiwygContainer,

                // <Function>, required
                // Use the output html, triggered by element's `oninput` event
                onChange: html => {
                    target.textContent = html
                },

                // <string>, optional, default = 'div'
                // Instructs the editor which element to inject via the return key
                defaultParagraphSeparator: 'p',

                // <Array[string | Object]>, string if overwriting, object if customizing/creating
                // action.name<string> (only required if overwriting)
                // action.icon<string> (optional if overwriting, required if custom action)
                // action.title<string> (optional)
                // action.result<Function> (required)
                // Specify the actions you specifically want (in order)
                actions: [
                    'bold',
                    'italic',
                    'underline',
                    'ulist',
                    'olist',
                    'heading1',
                    'heading2',
                    {
                        name: 'heading3',
                        icon: '<b>H<sub>3</sub></b>',
                        title: 'Heading 3',
                        result: () => exec('formatBlock', '<h3>')
                    },
                    'link'
                ],
            })

            // Populate wysiwyg with initial content
            const initialContent = target.value;
            editor.content.innerHTML = initialContent;
        }
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
    updateWithFormData(form, uiElementType, uiElementIndex, modal, jsonContent, target) {
        // Convert form data to an array
        const updatedElement = this.convertFormToElement(form, uiElementType, modal);
        this.log('Retrieved form element', {updatedElement: updatedElement});
        // Update UI Element
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
    convertFormToElement(form, uiElementType, modal) {
        // Initialize form data
        let formData = new FormData(form);
        formData.append('uiElementType', uiElementType);

        // Initialize returned element
        let element = {};

        // Initialize AJAX request
        let xhr = new XMLHttpRequest();
        let _self = this;
        xhr.onreadystatechange = function(){
            const DONE = 4; // readyState 4 means the request is done.
            const OK = 200; // status 200 is a successful return.
            const FORM_ERRORS = 406; // status 406 if form has errors.
            if (xhr.readyState === DONE){
                if (xhr.status === OK) {
                    _self.log('Data sent and validated', {form: form, response: xhr.responseText, xhr: xhr});
                    let response = JSON.parse(xhr.responseText);
                    if (typeof response.element !== "undefined") {
                        element = response.element;
                    }
                    modal.close();
                } else if(xhr.status === FORM_ERRORS) {
                    _self.log('Form not valid', {form: form, response: xhr.responseText, xhr: xhr});
                    let response = JSON.parse(xhr.responseText);
                    if (typeof response.errors !== "undefined") {
                        for (let field in response.errors) {
                            alert(field + ' : ' + response.errors[field].join('\n'));
                        }
                    }
                } else {
                    _self.error('Error during file upload', {form: form, status: xhr.status, xhr: xhr});
                }
            }
        };

        // Send data
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
     */
    renderUiElementMetaData(type, uiElementMetaData) {
        return `
        <div class="${this.classes.draggableItem}" data-ui-element-type="${type}">
            <button class="${this.classes.draggableItemHandler}" type="button">${this.translations.move}</button>
            <div class="${this.classes.draggableItemInner}">
                <div class="${this.classes.draggableItemImg}">
                    <img src="${uiElementMetaData.image}" alt="" width="90" height="90">
                </div>
                <div class="${this.classes.draggableItemContent}">
                    <div class="${this.classes.draggableItemInfos}">
                        <h2 class="${this.classes.draggableItemTitle}">${uiElementMetaData.title}</h2>
                        <p>${uiElementMetaData.description}</p>
                    </div>
                    <div class="${this.classes.draggableItemActions}">
                        <button class="${this.classes.draggableItemButton} ${this.classes.updateButton}" type="button" data-tooltip="${this.translations.edit}">${this.translations.edit}</button>
                        <button class="${this.classes.draggableItemButton} ${this.classes.deleteButton}" type="button" data-tooltip="${this.translations.delete}">${this.translations.delete}</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    /**
     * Return markup to display action buttons
     */
    renderActionsButtons(templateRender) {
        if (templateRender === 'sylius') {
            return `
            <div class="field">
                <div class="ui buttons">
                    <button class="ui primary button ${this.classes.toggleButton}" type="button">${this.translations.new}</button>
                </div>
            </div>
            `;
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
    initReorder(uiElements, elementsContainer) {
        let _self = this;
        // First container is the list of UI Elements we can add, the second is the content of the field
        // We can only move elements from the `uiElements` to the `elementsContainer`
        let drake = new dragula([uiElements, elementsContainer], {
            copy: function (el, source) {
                return source === uiElements
            },
            accepts: function (el, target) {
                return target !== uiElements
            },
            moves: function (el, container, handle) {
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
    initReorderEvent(drake, target, jsonContent) {
        drake.on('drag', (el, source) => {
            // Reorder inside the list
            if (source.id !== this.id.uiElementsContainer) {
                const index = this.getElementIndex(el);
                if (index !== false) {
                    this.log('Reorder drag start : ', {index: index, el: el, source: source});
                    this.currentIndex = index;
                }
            }

            // Add a new element from top
            if (source.id === this.id.uiElementsContainer) {
                this.log('Copy drag start : ', {el: el, source: source});
            }
        });
        drake.on('drop', (el, targetElement, source, sibling) => {
            // Reorder inside the list
            if (source.id !== this.id.uiElementsContainerInner) {
                const oldIndex = this.currentIndex;
                const newIndex = this.getElementIndex(el);
                if (newIndex !== false) {
                    this.log('Reorder drag stop : ', {oldIndex: oldIndex, newIndex: newIndex, el: el, targetElement: targetElement, source: source, sibling: sibling});
                    this.moveUiElement(oldIndex, newIndex, jsonContent, target)
                }
            }

            // Add a new element from top to Ui Element list
            if (source.id === this.id.uiElementsContainerInner && targetElement !== null && targetElement.classList.contains(this.classes.uiElementList)) {
                this.log('Copy drag stop : ', {el: el, targetElement: targetElement, source: source, sibling: sibling});
                const newIndex = this.getElementIndex(el);
                const type = el.dataset.uiElementType;
                if (typeof type !== 'undefined') {
                    this.addUiElement(type, newIndex, jsonContent, target)
                } else {
                    this.error('Cannot find `uiElementType` to add in data set', {dataSet: el.dataset, el: el});
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
    getElementIndex(el) {
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
    addUiElement(type, index, jsonContent, target) {
        this.log('Add UI Element : ', {type: type, index: index, target: target, beforeMoveJson: jsonContent});
        // Initialize new UI Element of wanted type
        let uiElement = {type: type, fields: {}};
        // Add the element in JSON
        jsonContent.splice(index, 0, uiElement);
        // Update the textarea with JSON
        target.value = JSON.stringify(jsonContent);
        this.log('Added UI Element : ', {afterMoveJson: jsonContent, newTargetValue: target.value});
        // Initialize actions for the new UI Element, it actually recreate also events for existing elements
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
    moveUiElement(oldIndex, newIndex, jsonContent, target) {
        if (oldIndex !== newIndex) {
            this.log('Move UI Element : ', {oldIndex: oldIndex, newIndex: newIndex, target: target, beforeMoveJson: jsonContent});
            if (newIndex >= jsonContent.length) {
                this.error('Element moved outside the list', {newIndex: newIndex, sizeList: jsonContent.length})
            }
            // Move the UI element to the selected index and change position of others
            jsonContent.splice(newIndex, 0, jsonContent.splice(oldIndex, 1)[0]);
            // Update the textarea with JSON
            target.value = JSON.stringify(jsonContent);
            this.log('Moved UI Element : ', {afterMoveJson: jsonContent, newTargetValue: target.value});
        } else {
            this.log('Not moved UI Element, same index', {oldIndex: oldIndex, newIndex: newIndex, target: target, beforeMoveJson: jsonContent});
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
    updateUiElement(index, element, jsonContent, target) {
        if (typeof jsonContent[index] !== 'undefined') {
            this.log('Update UI Element : ', {index: index, element: element, jsonContent: jsonContent, target: target});
            // Set new content for UI Element
            jsonContent[index] = element;
            // Update the textarea with JSON
            target.value = JSON.stringify(jsonContent);
            this.log('Updated UI Element : ', {index: index, element: element, jsonContent: jsonContent, target: target});
        } else {
            this.error('Cannot found element for index', {index: index, element: element, jsonContent: jsonContent, target: target})
        }
    }

    /**
     * Update the JSON to remove UI element
     *
     * @param removedIndex
     * @param jsonContent
     * @param target
     */
    removeUiElement(removedIndex, jsonContent, target) {
        this.log('Remove UI Element : ', {removedIndex: removedIndex, target: target, beforeMoveJson: jsonContent});
        // Remove the element for this index, it will change indexes for other elements too
        jsonContent.splice(removedIndex, 1);
        // Update the textarea with JSON
        target.value = JSON.stringify(jsonContent);
        this.log('Removed UI Element : ', {afterMoveJson: jsonContent, newTargetValue: target.value});
    }

    /**
     * Add console error if debug
     *
     * @param description
     * @param content
     */
    error(description, content) {
        // If error, display original fields
        for (let target of this.targets) {
            target.removeAttribute('hidden');
        }
        // Remove generated blocks
        for (let target of document.querySelectorAll('.' + this.classes.uiElementList)) {
            target.remove();
        }

        // Display error
        console.error(description);
        console.error(content);
    }

    /**
     * Add console log if debug is true
     *
     * @param description
     * @param content
     */
    log(description, content) {
        // Display message for debug mode
        if (this.debug) {
            console.log(description);
            if (content) {
                console.log(content);
            }
        }
    }
}

// Init the plugin
document.addEventListener('DOMContentLoaded', () => {
    let richEditor = new MbizRichEditorFields(monsieurbizRichEditorPluginConfig);
    richEditor.init();
});

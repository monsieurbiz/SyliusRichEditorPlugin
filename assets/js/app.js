import dragula from 'dragula';
import tingle from 'tingle.js';

/**
 * Class to manage CMS fields with UI Elements
 */
class MbizCmsFields {

    /**
     * Constructor for MbizCmsFields, see config in `src/Resources/views/Admin/app_javascript.html.twig`
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
        this.uploadRoute = this.config.uploadRoute;
        if (this.debug) {
            this.log('Plugin configuration :', this.config);
            this.log('Matched element(s) :', this.targets.length);
        }

        // Internal attributes
        this.id = {
            uiElementContainer: 'mbiz-cms-elements-container',
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
            renderedModal: 'mbiz-cms-rendred-modal',
        };
        this.events = {
            uiElementsBuilt: new Event('uiElementsBuilt'),
            updateElement: new Event('updateElement'),
        };
    }

    /**
     * Init each CMS element
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
        this.log('Init UI Elements :', uiElements);

        // Init container
        const uiElementsContainer = document.createElement('div');
        uiElementsContainer.id = this.id.uiElementContainer;
        uiElementsContainer.classList.add(this.classes.dropableContainer, this.classes.uiElementList);

        // Loop on UI Elements
        let error = false;
        for (let type in uiElements) {
            let uiElement = uiElements[type]
            this.log('Init UI Element :', uiElement);

            let renderedUiElement = this.renderUiElementMetaData(type, uiElement, this.templateRender);
            if (renderedUiElement === '') {
                error = true;
                continue;
            }

            uiElementsContainer.insertAdjacentHTML('beforeend', renderedUiElement);
        }

        // Append generated HTML to display current UI Elements of target
        if (!error) {
            target.appendChild(uiElementsContainer);
            this.container.dispatchEvent(this.events.uiElementsBuilt);
        }
    }

    /**
     * Init each CMS fields
     */
    initFields() {
        for (let target of this.targets) {
            let content = target.value;
            this.log('Target\'s content :', content);
            let jsonContent;
            try {
                jsonContent = JSON.parse(content);
            } catch(e) {
                this.error('Unable to parse the CMS JSON for this content : ', content);
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
        this.log('Init field with parsed content :', jsonContent);

        // Hide original input
        // target.setAttribute('hidden', 'true');

        // Init container
        const elementsContainer = document.createElement('div');
        elementsContainer.classList.add(this.classes.draggableContainer, this.classes.uiElementList);

        if (this.templateRender === 'sylius') {
            elementsContainer.classList.add('ui', 'segment', this.classes.draggableContainer, this.classes.uiElementList);
        }

        // Loop on UI Elements
        let error = false;
        for (let uiElement of jsonContent) {
            // Retrieve the Ui Element type
            this.log('Init UI Element :', uiElement);
            if (typeof this.uiElements[uiElement.type] === 'undefined') {
                error = true;
                this.error('Cannot find element of type ', uiElement.type);
                continue;
            }

            // Render Ui Element meta data
            let uiElementMetaData = this.uiElements[uiElement.type];
            this.log('Matched Ui Element with meta data :', uiElementMetaData);
            let renderedUiElementMetaData = this.renderUiElementMetaData(uiElement.type, uiElementMetaData, this.templateRender);
            if (renderedUiElementMetaData === '') {
                error = true;
                continue;
            }

            // Add rendered Ui Element meta data in container
            this.log('Rendered Ui Element meta data :', renderedUiElementMetaData);
            elementsContainer.insertAdjacentHTML('beforeend', renderedUiElementMetaData);
        }

        // Add actions buttons before target
        target.insertAdjacentHTML('beforebegin', this.renderActionsButtons(this.templateRender));

        // Append generated HTML to display current UI Elements of target
        if (!error) {
            target.parentNode.appendChild(elementsContainer);
            let reorder = this.initReorder(document.getElementById(this.id.uiElementContainer), elementsContainer);
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

                document.querySelector('#' + this.id.uiElementContainer).classList.toggle('is-expanded');
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
    loadForm(uiElement, uiElementIndex, jsonContent, target)
    {
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
        // Init modal
        var modal = new tingle.modal({
            footer: true,
            stickyFooter: false,
            closeMethods: ['overlay', 'button', 'escape'],
            cssClass: [this.classes.renderedModal],
            closeLabel: this.translations.close,
        });
        let _self = this;

        // Add the content
        modal.setContent(html);

        // Init the form inside the modal
        let form = this.initModalForm(uiElementType, uiElementIndex, jsonContent, target);

        // Button to submit
        modal.addFooterBtn(this.translations.apply_changes, 'tingle-btn tingle-btn--primary tingle-btn--pull-right', function () {
            if (form !== false) {
                form.dispatchEvent(new Event(_self.events.updateElement));
            } else {
                _self.log('No form to submit');
            }
            modal.close();
        });

        // Button to cancel
        modal.addFooterBtn(this.translations.cancel_changes, 'tingle-btn tingle-btn--secondary tingle-btn--pull-right', function () {
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
    initModalForm(uiElementType, uiElementIndex, jsonContent, target)
    {
        // Retrieve form in modal
        let form = document.querySelector('.' + this.classes.renderedModal + ' form');

        // Do nothing if no form found
        if (form === null) {
            return false;
        }

        let _self = this;
        // Actions to perform when form is submitted
        form.addEventListener(this.events.updateElement, function(e) {
            // Check if UI Element type we want to update exists
            if (typeof _self.uiElements[uiElementType] === 'undefined') {
                _self.error('Cannot find element of type ', uiElementType);
                return;
            }
            // Update elements with form data
            _self.updateWithFormData(form, uiElementType, uiElementIndex, jsonContent, target);

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
    updateWithFormData(form, uiElementType, uiElementIndex, jsonContent, target) {
        // Convert form data to an array
        const data = this.convertFormToArray(form);
        this.log('Retrieved form data', {data: data});
        let uiElement = this.uiElements[uiElementType];

        // Initialize a new UI Element of the wanted type
        let updatedElement = {type: uiElementType, fields: {}};


        // Get each field of the UI Element and get it from the form data
        for (const field of uiElement.fields) {
            // Convert the field to the form field. Ex: "content" field of "text" UI Element will have a form field named "text[content]"
            let formFieldName = uiElementType + '[' + field + ']';
            if (typeof data[formFieldName] === 'undefined') {
                // Set empty value if form field does not exists
                this.log('Field value not found, set empty', {field: field, formFieldName: formFieldName});
                updatedElement.fields[field] = '';
            } else {
                // Set form value in field
                this.log('Update field with form value', {field: field, formFieldName: formFieldName, value: data[formFieldName]});
                updatedElement.fields[field] = data[formFieldName];
            }
        }

        // Update UI Element
        this.updateUiElement(uiElementIndex, updatedElement, jsonContent, target);
    }

    /**
     * Convert a form to an array
     *
     * @param form
     * @returns {Array}
     */
    convertFormToArray(form)
    {
        // Setup our data
        let formArray = [];

        // Loop through each field in the form
        for (let i = 0; i < form.elements.length; i++) {

            let field = form.elements[i];

            // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
            if (!field.name || field.disabled || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

            // If type is file, upload the file and retrieve a string with path
            if (field.type === 'file') {
                const file = field.files[0];
                if (file) {
                    const path = this.uploadFile(file, field.name, formArray);
                    formArray[field.name] = path;
                }
            }
            // If a multi-select, get all selections
            else if (field.type === 'select-multiple') {
                let values = [];
                for (let n = 0; n < field.options.length; n++) {
                    if (!field.options[n].selected) continue;
                    values.push(field.options[n]);
                }

                formArray[field.name] = values;
            }

            // Convert field data to a query string
            else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
                formArray[field.name] = field.value
            }
        }

        return formArray;
    }

    uploadFile(file) {
        // Initialize form data
        let formData = new FormData();
        let imagePath = '';
        formData.append('file', file);

        // Initialize AJAX request
        let xhr = new XMLHttpRequest();
        let _self = this;
        xhr.onreadystatechange = function(){
            const DONE = 4; // readyState 4 means the request is done.
            const OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE){
                if (xhr.status === OK) {
                    _self.log('Uploaded file', {response: xhr.responseText, xhr: xhr});
                    imagePath = xhr.responseText;
                } else {
                    _self.error('Error during file upload', {status: xhr.status, xhr: xhr});
                    imagePath = '';
                }
            }
        };

        // Send data
        xhr.open('POST', this.uploadRoute, false);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.send(formData);

        return imagePath;
    }

    /**
     * Return markup to display UI Element meta data depending on render
     *
     * @param type
     * @param uiElementMetaData {short_description: "Short description", description: "Description", title: "Title", image: "/path/to/image.jpg"}
     * @param templateRender
     */
    renderUiElementMetaData(type, uiElementMetaData, templateRender) {
        if (templateRender === 'sylius') {
            return `
            <div class="ui segment raised ${this.classes.draggableItem}" data-ui-element-type="${type}">
                <button class="ui right floated massive button icon ${this.classes.draggableItemHandler}" type="button"><i class="icon arrows alternate ${this.classes.draggableItemHandler}"></i></button>
                <div class="ui grid">
                    <div class="four wide column">
                        <img class="ui small image" src="${uiElementMetaData.image}" alt="" width="150" height="150">
                    </div>
                    <div class="twelve wide column">
                        <h2 class="ui header">${uiElementMetaData.title}</h2>
                        <p>${uiElementMetaData.description}</p>
                        <div class="ui buttons">
                            <button class="ui button ${this.classes.updateButton}" type="button">${this.translations.edit}</button>
                            <button class="ui button negative ${this.classes.deleteButton}" type="button">${this.translations.delete}</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }

        this.error('Cannot find render for : ', templateRender);
        return '';
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
            if (source.id !== this.id.uiElementContainer) {
                const index = this.getElementIndex(el);
                if (index !== false) {
                    this.log('Reorder drag start : ', {index: index, el: el, source: source});
                    this.currentIndex = index;
                }
            }

            // Add a new element from top
            if (source.id === this.id.uiElementContainer) {
                this.log('Copy drag start : ', {el: el, source: source});
            }
        });
        drake.on('drop', (el, targetElement, source, sibling) => {
            // Reorder inside the list
            if (source.id !== this.id.uiElementContainer) {
                const oldIndex = this.currentIndex;
                const newIndex = this.getElementIndex(el);
                if (newIndex !== false) {
                    this.log('Reorder drag stop : ', {oldIndex: oldIndex, newIndex: newIndex, el: el, targetElement: targetElement, source: source, sibling: sibling});
                    this.moveUiElement(oldIndex, newIndex, jsonContent, target)
                }
            }

            // Add a new element from top to Ui Element list
            if (source.id === this.id.uiElementContainer && targetElement !== null && targetElement.classList.contains(this.classes.uiElementList)) {
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
    updateUiElement(index, element, jsonContent, target)
    {
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
    let cms = new MbizCmsFields(monsieurbizCmsPluginConfig);
    cms.init();
});

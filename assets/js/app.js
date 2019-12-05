import {Sortable} from '@shopify/draggable';

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
        this.uiElements = this.config.uiElements;
        this.translations = this.config.translations;
        if (this.debug) {
            this.log('Plugin configuration :', this.config);
            this.log('Matched element(s) :', this.targets.length);
        }

        // Internal attributes
        this.classes = {
            uiElementContainer: 'mbiz-cms-component-ui-elements',
            draggableContainer: 'mbiz-cms-draggable-container',
            draggableItem: 'mbiz-cms-draggable-item',
            draggableItemHandler: 'mbiz-cms-draggable-item-handler',
        }

    }

    /**
     * Init each CMS element
     */
    init() {
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
        target.setAttribute('hidden', 'true');

        // Init container
        const elementsContainer = document.createElement('div');
        elementsContainer.classList.add(this.classes.draggableContainer, this.classes.uiElementContainer);

        if (this.templateRender === 'sylius') {
            elementsContainer.classList.add('ui', 'segment', this.classes.draggableContainer, this.classes.uiElementContainer);
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
            let renderedUiElementMetaData = this.renderUiElementMetaData(uiElementMetaData, this.templateRender);
            if (renderedUiElementMetaData === '') {
                error = true;
                continue;
            }

            // Add rendered Ui Element meta data in container
            this.log('Rendered Ui Element meta data :', renderedUiElementMetaData);
            elementsContainer.insertAdjacentHTML('beforeend', renderedUiElementMetaData);
        }

        // Append generated HTML to display current UI Elements of target
        if (!error) {
            target.parentNode.appendChild(elementsContainer);
            let sortable = this.initSortable(elementsContainer);
            this.initSortableEvents(sortable, target, jsonContent)
        }
    }

    /**
     * Return markup to display UI Element meta data depending on render
     *
     * @param uiElementMetaData {short_description: "Short description", description: "Description", title: "Title", image: "/path/to/image.jpg"}
     */
    renderUiElementMetaData(uiElementMetaData, templateRender) {
        if (templateRender === 'sylius') {
            return `
            <div class="ui segment raised ${this.classes.draggableItem}">
                <button class="ui right floated massive button icon ${this.classes.draggableItemHandler}"><i class="icon arrows alternate"></i></button>
                <div class="ui grid">
                    <div class="four wide column">
                        <img class="ui small image" src="${uiElementMetaData.image}" alt="" width="150" height="150">
                    </div>
                    <div class="twelve wide column">
                        <h2 class="ui header">${uiElementMetaData.title}</h2>
                        <p>${uiElementMetaData.description}</p>
                        <div class="ui buttons">
                            <button class="ui button" type="button">${this.translations.edit}</button>
                            <button class="ui button negative" type="button">${this.translations.delete}</button>
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
     * Init draggable elements for a container
     *
     * @param elementsContainer
     */
    initSortable(elementsContainer) {
        let sortable = new Sortable(elementsContainer, {
            handle: '.' + this.classes.draggableItemHandler,
            draggable: '.' + this.classes.draggableItem,
            mirror: {
                constrainDimensions: true,
            },
        });
        return sortable;
    }

    initSortableEvents(sortable, target, jsonContent) {
        sortable.on('sortable:stop', (evt) => {
            this.log('Drag stop : ', evt);
            let oldIndex = evt.data.oldIndex;
            let newIndex = evt.data.newIndex;
            this.moveUiElement(oldIndex, newIndex, jsonContent, target);
        });
    }

    moveUiElement(oldIndex, newIndex, jsonContent, target) {
        if (oldIndex !== newIndex) {
            this.log('Move UI Element : ', {oldIndex: oldIndex, newIndex: newIndex, target: target, beforeMoveJson: jsonContent});
            let newElement = jsonContent[oldIndex];
            jsonContent[oldIndex] = jsonContent[newIndex];
            jsonContent[newIndex] = newElement;
            target.value = JSON.stringify(jsonContent);
            this.log('Moved UI Element : ', {afterMoveJson: jsonContent, newTargetValue: target.value});
        } else {
            this.log('Not moved UI Element, same index', {oldIndex: oldIndex, newIndex: newIndex, target: target, beforeMoveJson: jsonContent});
        }
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
        for (let target of document.querySelectorAll('.' + this.classes.uiElementContainer)) {
            target.remove();
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
    log(description, content) {
        if (this.debug) {
            console.log(description);
            console.log(content);
        }
    }
}

// Init the plugin
document.addEventListener('DOMContentLoaded', () => {
    let cms = new MbizCmsFields(monsieurbizCmsPluginConfig);
    cms.init();
});

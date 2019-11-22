const uiElements = monsieurbizCmsPlugin.uiElements;
const target = document.getElementById('app_page_translations_fr_FR_content');

function hideField() {
    target.setAttribute('hidden', 'true');
}

function displayElements(elements) {
    const elementsContainer = document.createElement('div');

    elementsContainer.classList.add('ui', 'segment', 'drag-list');

    for (let key in elements) {
        const element = `
            <div class="ui segment raised drag-item" draggable="true">
                <div class="ui grid">
                    <div class="four wide column">
                        <img class="ui small image" src="${elements[key].image}" alt="" width="150" height="150">
                    </div>
                    <div class="twelve wide column">
                        <h2 class="ui header">${elements[key].title}</h2>
                        <p>${elements[key].description}</p>
                        <div class="ui buttons">
                            <button class="ui button" type="button">Editer</button>
                            <button class="ui button negative" type="button">Supprimer</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        elementsContainer.insertAdjacentHTML('beforeend', element);
    }

    target.parentNode.appendChild(elementsContainer);
}

document.addEventListener('DOMContentLoaded', () => {
    hideField();
    displayElements(uiElements);
});

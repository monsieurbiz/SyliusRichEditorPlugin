import pell from 'pell';

class PellEditorProvider {
    constructor(config) {
        this.config = config;
    }

    init(target) {
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
        editor.content.innerHTML = target.value;
    }

    exec() {
        return pell.exec(...arguments);
    }
}

export default PellEditorProvider;

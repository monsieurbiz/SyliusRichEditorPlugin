import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from "@editorjs/list";
import Hyperlink from 'editorjs-hyperlink';
import Delimiter from '@editorjs/delimiter';
import createGenericInlineTool from 'editorjs-inline-tool'
import { IconBold, IconUnderline } from '@codexteam/icons';

class CustomHyperlink extends Hyperlink {
    // Fix icon - cf https://github.com/trinhtam/editorjs-hyperlink/issues/19#issuecomment-1814519884
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

class EditorJSProvider {
    constructor(config) {
        this.config = config;
    }

    init(target) {
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

    exec() {
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

        // dispatch custom event to allow project to add toolbar
        document.dispatchEvent(new CustomEvent('mbiz:rich-editor:editorjs:toolbar', {
            'detail': {'toolbar': toolbar}
        }));

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
}

export default EditorJSProvider;

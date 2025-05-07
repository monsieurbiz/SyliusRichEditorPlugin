import 'suneditor/src/assets/css/suneditor.css'
import 'suneditor/src/assets/css/suneditor-contents.css'
import suneditor from 'suneditor'
import lang from 'suneditor/src/lang'
import suneditorPlugins from 'suneditor/src/plugins'
import CodeMirror from 'codemirror'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/lib/codemirror.css'

const initEditor = () => {
  return suneditor.init({
    codeMirror: CodeMirror,
    height: 'auto',
    plugins: suneditorPlugins,
    buttonList: [],
    stickyToolbar: false,
  });
}

export default {
  init(target) {
    const editorModel = initEditor();
    target.querySelectorAll('[data-component="wysiwyg-editor"][data-editor-type="suneditor"]').forEach((component) => {
      const buttonList = JSON.parse(component.dataset.editorButtons);
      const height = component.dataset.editorHeight;
      const locale = component.dataset.editorLocale;
      const customConfig = JSON.parse(component.dataset.editorCustomConfig);
      const config = {
        height,
        buttonList,
        lang: lang[locale],
        linkRelDefault: {
          check_new_window: 'noreferrer noopener',
        },
        linkNoPrefix: true,
        ...customConfig
      };
      try {
        const editor = editorModel.create(component, config);
        editor.onChange = () => {
          editor.save();
          component.dispatchEvent(new Event('change', { bubbles: true }));
        };
      } catch (error) {
        console.warn(error.message.replace('Error :', ''));
      }
    })
  }
}

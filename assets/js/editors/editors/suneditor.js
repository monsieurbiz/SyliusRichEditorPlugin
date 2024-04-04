import 'suneditor/src/assets/css/suneditor.css'
import 'suneditor/src/assets/css/suneditor-contents.css'
import suneditor from 'suneditor'
import lang from 'suneditor/src/lang'
import suneditorPlugins from 'suneditor/src/plugins'
import CodeMirror from 'codemirror'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/lib/codemirror.css'

const currentEditors = [];

const initEditor = () => {
  return suneditor.init({
    codeMirror: CodeMirror,
    height: 'auto',
    plugins: suneditorPlugins,
    buttonList: []
  });
}

export default {
  init(target) {
    const editorModel = initEditor();
    target.querySelectorAll('[data-component="wysiwyg-editor"][data-editor-type="suneditor"]').forEach((component) => {

      // SundEditor is ID based, so we need to make sure that the ID is unique
      if (currentEditors.includes(component.id)) {
        component.id = `${component.id}-${Math.random().toString(36).substring(7)}`;
      }

      const buttonList = JSON.parse(component.dataset.editorButtons);
      const height = component.dataset.editorHeight;
      const locale = component.dataset.editorLocale;
      const customConfig = JSON.parse(component.dataset.editorCustomConfig);
      const config = {
        height,
        buttonList,
        lang: lang[locale],
        ...customConfig
      };
      const editor = editorModel.create(component, config);
      editor.onChange = () => {
        editor.save();
      };

      currentEditors.push(component.id);
    })
  }
}

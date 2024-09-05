import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.monsieurbiz-rich-editor-markdown pre code').forEach((block) => {
    hljs.highlightElement(block);
  });
});

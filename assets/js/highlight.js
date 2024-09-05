import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block);
  });
});

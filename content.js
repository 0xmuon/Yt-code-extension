// Function to create the code editor container
function createCodeEditor() {
  // Check if the code editor already exists
  if (document.getElementById('code-editor-container')) return;

  // Create the editor container element
  const editorContainer = document.createElement('div');
  editorContainer.id = 'code-editor-container';
  editorContainer.style.position = 'fixed';
  editorContainer.style.top = '0';
  editorContainer.style.right = '0';
  editorContainer.style.width = '400px';
  editorContainer.style.height = '100%';
  editorContainer.style.backgroundColor = '#f5f5f5';
  editorContainer.style.zIndex = '10000';
  editorContainer.style.overflow = 'auto';
  editorContainer.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';

  // Add the container to the body
  document.body.appendChild(editorContainer);

  // Create the CodeMirror editor
  const codeMirrorScript = document.createElement('script');
  codeMirrorScript.src = chrome.runtime.getURL('lib/codemirror/lib/codemirror.js');
  codeMirrorScript.onload = () => {
    const codeMirrorCSS = document.createElement('link');
    codeMirrorCSS.rel = 'stylesheet';
    codeMirrorCSS.href = chrome.runtime.getURL('lib/codemirror/lib/codemirror.css');
    document.head.appendChild(codeMirrorCSS);

    const editor = document.createElement('textarea');
    editor.id = 'code-editor';
    editorContainer.appendChild(editor);

    const cm = CodeMirror.fromTextArea(editor, {
      lineNumbers: true,
      mode: 'javascript'
    });

    cm.setSize('100%', '100%');
  };
  document.head.appendChild(codeMirrorScript);
}

// Wait for the page to load completely
window.addEventListener('load', createCodeEditor);

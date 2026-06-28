import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  document.body.innerHTML = '<h1>Root element not found</h1>';
  throw new Error('Root element not found');
}

try {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} catch (err) {
  document.body.innerHTML = `
    <pre style="
      color:red;
      background:black;
      padding:20px;
      white-space:pre-wrap;
      font-size:14px;
    ">
${err instanceof Error ? err.stack : String(err)}
    </pre>
  `;
}

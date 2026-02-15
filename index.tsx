import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

console.log("NutriFlow: Application starting...");

const startApp = () => {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    console.error("NutriFlow: Root element '#root' not found.");
    return;
  }

  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("NutriFlow: Render complete.");
  } catch (err) {
    console.error("NutriFlow: Critical render error:", err);
    rootElement.innerHTML = `
      <div style="padding: 2rem; color: #b91c1c; font-family: sans-serif;">
        <h2>Application failed to load</h2>
        <pre>${err instanceof Error ? err.stack : String(err)}</pre>
      </div>
    `;
  }
};

// Ensure DOM is ready if script isn't deferred (though module is deferred by default)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
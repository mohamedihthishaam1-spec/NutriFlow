import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

console.log("NutriFlow: Booting application...");

const container = document.getElementById('root');

if (!container) {
  throw new Error("Failed to find the root element. Ensure index.html contains <div id='root'></div>");
}

try {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("NutriFlow: Application rendered successfully.");
} catch (error) {
  console.error("NutriFlow: Critical mounting error:", error);
  container.innerHTML = `
    <div style="padding: 40px; text-align: center; font-family: sans-serif;">
      <h1 style="color: #ef4444; font-size: 24px;">Application Startup Error</h1>
      <p style="color: #64748b; margin-top: 10px;">The application failed to initialize properly in your browser.</p>
      <pre style="margin-top: 20px; background: #f1f5f9; padding: 20px; border-radius: 8px; font-size: 12px; display: inline-block; text-align: left;">${error instanceof Error ? error.message : String(error)}</pre>
    </div>
  `;
}
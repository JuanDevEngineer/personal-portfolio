import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './shared/context/ThemeContext';
import { LanguageProvider } from './shared/context/LanguageContext';
import App from './App';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </React.StrictMode>,
  );
}

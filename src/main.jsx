import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import LangProvider from './contexts/LangProvider';
import ThemeProvider from './contexts/ThemeProvider';
import 'modern-normalize';
import './index.css';

// Контекст це можливість зробити глобальний стан

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </ThemeProvider>
  </React.StrictMode>
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/global.css';

import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Load Firebase (and Analytics) only in production, lazily, so it never slows
// the dev server or the initial render.
if (import.meta.env.PROD) {
  import('./lib/firebase');
}

import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css'; // Import the global styles
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

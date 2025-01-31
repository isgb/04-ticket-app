import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { TicketApp } from './TicketApp';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TicketApp />
    </BrowserRouter>
  </React.StrictMode>
);
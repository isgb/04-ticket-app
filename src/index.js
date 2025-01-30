import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TicketApp } from './TicketApp';
import { AppRouter } from './router/AppRouter';
 
const root = createRoot(document.getElementById('root'));
 
root.render(
  <React.StrictMode>
    <AppRouter>
      <TicketApp />
    </AppRouter>
  </React.StrictMode>,
)
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { EventsProvider } from './contexts/events-context';

ReactDOM.render(
  <React.StrictMode>
    <EventsProvider>
      <App />
    </EventsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

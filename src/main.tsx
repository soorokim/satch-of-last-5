import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import App from './App';
import './index.css';
import AuthProvider from './context/AuthProvider';
import { server } from './mocks/browser';

if (process.env.NODE_ENV === 'test') {
  server.start({ onUnhandledRequest: 'bypass' });
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <AuthProvider>
          <App />
        </AuthProvider>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
);

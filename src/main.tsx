import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import App from './App';
import BottomNavigationBar from './components/BottomNavigationBar';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <App />
        <BottomNavigationBar />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
);

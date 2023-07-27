import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './style.css';
import Toggle from './Toggle';
import MainVisual from './MainVisual';
import Tap from './Tab';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="">
      <App />
      <Toggle />
      <Tap />
      <MainVisual />
    </div>
  </React.StrictMode>
);

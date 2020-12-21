import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routers from './pages/Routers';
import reportWebVitals from './config/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

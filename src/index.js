import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App texto={{chamada:'A danki é boa', chamada2:'Danki Code'}} />
  </React.StrictMode>,
  document.getElementById('root')
);

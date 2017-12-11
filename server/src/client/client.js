import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Route';

ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
  , document.querySelector('#root'));
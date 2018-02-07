import React from 'react';
import './assets/css/index.css'
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>, document.getElementById('root'));

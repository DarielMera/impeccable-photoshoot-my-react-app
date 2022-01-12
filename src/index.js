import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import App from './App';
import './index.css';
// if location is home then hide then hide the menu
// 

ReactDOM.render(

  <Router> 
    <App authorized={false}/>
  </Router>,
  document.getElementById('root')
);


import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import Home from './components/Home/Home';
import App from './App';
import './index.css';

// Create Context
// Provide this useReducer Function as the state provided
//useReducer will toggle between false / true
// if true meaning it is authorized then display app otherwise display home

// const isAuthorized = ()=> {
//    const [authorize, setAuthorize] = useState(false)
//     setAuthorize((prevAuthorize)=> !prevAuthorize)
// }
 

ReactDOM.render(
  <BrowserRouter>
   {/* {true ? <Home /> : <App />} */}
   <App />
  </BrowserRouter>,
  document.getElementById('root')
);


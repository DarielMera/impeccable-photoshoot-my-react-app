import React, { useState, createContext } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home/Home"
import App from "./App"
import Main from "./components/Main/Main"
import "./index.css"
import AvatarCreator from "./components/AvatarCreator/AvatarCreator"

// Create Context
// Provide this useReducer Function as the state provided
//useReducer will toggle between false / true
// if true meaning it is authorized then display app otherwise display home

// const isAuthorized = ()=> {
//    const [authorize, setAuthorize] = useState(false)
//     setAuthorize((prevAuthorize)=> !prevAuthorize)
// }


// let IsAuthorized = false

ReactDOM.render(
	<BrowserRouter>
		{/* {IsAuthorized ? <Navigate to='app' /> : <Navigate to='/'/>} */}
  <App />

		{/* <Routes>
  <Route path="/app" element={<App />} />
  <Route path="/app" element={ <Navigate to="/avatarcreator" />} />
  <Route path="/home" element={<Home />} />

  </Routes> */}
	</BrowserRouter>,
	document.getElementById("root")
)

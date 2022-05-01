import {Routes, Route} from 'react-router-dom'

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ResponsiveMenu from "./components/ResponsiveMenu/ResponsiveMenu";
import Main from "./components/Main/Main";
import Footer from './components/Footer/Footer';
import './App.css'
import Home from './components/Home/Home';

export function DisplayApp(){
  return(
    <main    className='container'>
    <header  className='header'>    <Header/><ResponsiveMenu/></header>
    <nav     className='navbar'>    <Navbar/>                </nav>
    <div     className='main'>      <Main/>                  </div>
    <footer  className='footer'>    <Footer/>                </footer>
  </main>

  )
}

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/app/*" element={<DisplayApp />} />
			</Routes>
		</>
	)
}

export default App;

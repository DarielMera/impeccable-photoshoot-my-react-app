

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ResponsiveMenu from "./components/ResponsiveMenu/ResponsiveMenu";
import PageTitle from './components/PageTitle/PageTitle';
import Main from "./components/Main/Main";
import Footer from './components/Footer/Footer';
import Home from '../src/components/Home/Home'

import './App.css'

function DisplayApp() {

  return (
    <div className='container'>
    <div className='header'> <Header/><ResponsiveMenu/></div>
    <div className='navbar'> <Navbar/></div>
    
    <div className='title'>  <PageTitle/></div>
    <div className='main'>   <Main /> </div>
    <div className='footer'> <Footer/></div>
  </div>

  );
}


function App(props) {
  return(
    <> 
    {props.authorized ? <DisplayApp /> :  <Home /> }
    </>
    )
    
   
   
  }


export default App;

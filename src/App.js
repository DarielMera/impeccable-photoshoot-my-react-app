
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ResponsiveMenu from "./components/ResponsiveMenu/ResponsiveMenu";
import Main from "./components/Main/Main";
import Footer from './components/Footer/Footer';
import './App.css'


function App() {

  return (
    <main    className='container'>
    <header  className='header'>    <Header/><ResponsiveMenu/></header>
    <nav     className='navbar'>    <Navbar/>                </nav>
    <div     className='main'>      <Main/>                  </div>
    <footer  className='footer'>    <Footer/>                </footer>
  </main>

  );
}


export default App;

import {Routes, Route} from "react-router-dom";
import Footer from './components/Footer/Footer';
import SuggestionList from './components/SuggestionList/SuggestionList';

function App() {

  return (
    <>
    <Routes> 
    <Route path="/" element={<SuggestionList/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;

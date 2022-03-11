import {Routes, Route} from "react-router-dom";
import Home from "../Home/Home";
import SuggestionList from '../SuggestionList/SuggestionList'
import AvatarCreator from '../AvatarCreator/AvatarCreator'
import FrameCreator from '../FrameCreator/FrameCreator'
import PhotographerView from '../PhotographerView/PhotographerView'
import './main.css'
export default function Main(){
    return (
    <section className="maincss" style={{backgroundColor:'white', opacity:'.97', paddingBottom: '100px'}}>
        <Routes> 
        <Route path="suggestionslist"  element={<SuggestionList/>} />
        <Route path="avatarcreator"    element={<AvatarCreator/>} />
        <Route path="framecreator"     element={<FrameCreator/>} />
        <Route path="photographerview" element={<PhotographerView/>} />
        </Routes>
    </section>
    )
}
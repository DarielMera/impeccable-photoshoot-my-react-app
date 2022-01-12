import {Routes, Route} from "react-router-dom";
import Home from "../Home/Home";
import SuggestionList from '../SuggestionList/SuggestionList'
import AvatarCreator from '../AvatarCreator/AvatarCreator'
import FrameCreator from '../FrameCreator/FrameCreator'
import PhotographerView from '../PhotographerView/PhotographerView'

export default function Main(){
    return (
        
        <Routes> 
        <Route path="home" element={<Home/>} />
        <Route path="suggestionslist"  element={<SuggestionList/>} />
        <Route path="avatarcreator"    element={<AvatarCreator/>} />
        <Route path="framecreator"     element={<FrameCreator/>} />
        <Route path="suggestionslist"  element={<SuggestionList/>} />
        <Route path="photographerview"  element={<PhotographerView/>} />
        </Routes>
    )
}
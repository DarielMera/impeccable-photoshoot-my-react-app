import { Routes, Route } from "react-router-dom"
import SuggestionList from "../SuggestionList/SuggestionList"
import AvatarCreator from "../AvatarCreator/AvatarCreator"
import FrameCreator from "../FrameCreator/FrameCreator"
import PhotographerView from "../PhotographerView/PhotographerView"
import Help from "../Help/Help"
import Page404 from "../Page404/Page404"

import "./main.css"
export default function Main() {
	return (
		<section
			className="maincss"
			style={{ backgroundColor: "white", opacity: ".97", paddingBottom: "100px" }}>
			<Routes>
				<Route index element={<SuggestionList />} />
				<Route path="/suggestionslist" element={<SuggestionList />} />
				<Route path="/avatarcreator" element={<AvatarCreator />} />
				<Route path="/framecreator" element={<FrameCreator />} />
				<Route path="/photographerview" element={<PhotographerView />} />
				<Route path="/help" element={<Help />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
		</section>
	)
}

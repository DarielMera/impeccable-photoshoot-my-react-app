import { suggestionList } from "./suggestionListData.js"
import Title from "../customHooks/useTitle.jsx"
import Bounce from 'react-reveal/Bounce'
import "./suggestionList.css"

const combinations = suggestionList.map((combination, i) => ({ id: i, combi: combination }))
export default function SuggestionList() {
	return (
		<>
			<Title
				title="Suggestion List"
				instructions="Use this guide as a startup point to compose your portraits"
			/>
			<Bounce bottom>
			<div className="suggestions-List-container">
				<ol>
					{combinations.map(newcombi => (
						<li key={newcombi.id}>{newcombi.combi}</li>
					))}
				</ol>
			</div>
			</Bounce>
		</>
	)
}

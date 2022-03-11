import IsPicTaken from "./IsPicTaken"
import Title from "../customHooks/useTitle.jsx"
import PhotographerFrame from "./PhotographerFrame"

export default function PhotographerView(props) {
	// console.log(props.framesData)
	return (
		<>
			<Title
				title="Photographer View"
				instructions="This is a preview list of the shots the photographer will take"
			/>

<PhotographerFrame />

			<IsPicTaken />
			{/* <h1>{framesData}</h1> */}
		</>
	)
}

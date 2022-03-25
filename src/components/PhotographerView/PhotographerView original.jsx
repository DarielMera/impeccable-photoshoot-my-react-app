import { useState, useEffect } from "react"
import useFetch from '../customHooks/useFetch'

import avatarData from './data.json'
import frameData from './dataframe.json'

import IsPicTaken from "./IsPicTaken"
import Title from "../customHooks/useTitle.jsx"
import PhotographerFrame from "./PhotographerFrame"

import brideAvatar from "../AvatarCreator/images/bride.png"
import groomAvatar from "../AvatarCreator/images/groom.png"
import femaleAvatar from "../AvatarCreator/images/female.svg"
import maleAvatar from "../AvatarCreator/images/male.png"
import girlAvatar from "../AvatarCreator/images/girl.svg"
import boyAvatar from "../AvatarCreator/images/boy.svg"

import './photographerview.css'

// function changeImage(kind) {
// 	let image
// 	switch (kind) {
// 		case "Bride":
// 			image = brideAvatar
// 			break
// 		case "Groom":
// 			image = groomAvatar
// 			break
// 		case "Female":
// 			image = femaleAvatar
// 			break
// 		case "Male":
// 			image = maleAvatar
// 			break
// 		case "Girl":
// 			image = girlAvatar
// 			break
// 		case "Boy":
// 			image = boyAvatar
// 			break
// 		default:
// 			break
// 	}
// 	return image
// }

// function SelectedImage({ kind }) {
// 	const [image, setImage] = useState("")

// 	useEffect(() => setImage(changeImage(kind)), [kind])
// 	return <img src={image} alt={`${kind} avatar`} />
// }

   















export default function PhotographerView(props) {
		//  frameData = useFetch('https://feipshoot.uk.r.appspot.com/frames')
		/* <SelectedImage kind={avatar.kind} /> */ // after div.avatar-presentation-photographer-view and before class .info-style-photographer-view

		// .map( callback function)
		function getEachElementInsideFrameId(avatar, i){
			// console.log(
			//    `
			//    Frame${i}
			// 	${avatar.kind }
			// 	${avatar.name }
			   
			//    `
			// )
			   return( 	
				   <> 
				   			

					<div  className="avatar-presentation-photographer-view">
					
						<div key={avatar._id} className="info-style-photographer-view ">
							<span>{avatar.kind}</span> 
							<span>{avatar.name} </span>
							<span>{avatar.relationship}</span>
							<span>{avatar.role}</span>
						</div>
					</div>
					</>
			   )
		}
			
		let	groupOfGuestsPerFrameOutput
		// function to be called inside the forEach callback
		let avatarsInFrame = (item, index, array)=>{ 
			let groupOfGuestsPerFrame = array[index].frameid.map(getEachElementInsideFrameId)
			console.log(groupOfGuestsPerFrame);
			groupOfGuestsPerFrameOutput = <PhotographerFrame> {groupOfGuestsPerFrame[2]} </PhotographerFrame>
			
			
		}	
			// 		let AvatarsInFrame = (item, index, array)=>{ 
				// 			const [groupOfGuestsPerFrame, setgroupOfGuestsPerFrame] = useState([])
				// 			// let groupOfGuestsPerFrame = array[index].frameid.map(getEachElementInsideFrameId)
				// 			return( 
					
					// 			 <PhotographerFrame> 
					// 				 {groupOfGuestsPerFrame}
					// 				  </PhotographerFrame> 
					
					// 			)
					
					//  }
					// console.log(groupOfGuestsPerFrame);
					
					
					frameData.forEach(iterateforEachDocumentInDataFrame)
			 
			 // .forEach( callback function)
			 function iterateforEachDocumentInDataFrame(item, index, arr) {	
				 
				  avatarsInFrame(item,index,arr);
				//  <AvatarsInFrame item={item} index={index} arr={arr}/>
				}
		

		return (
			<>
			<Title title="Photographer View" instructions="This is a preview list of the shots the photographer will take"/>
			{groupOfGuestsPerFrameOutput}

			<IsPicTaken />
		</>
	)
}


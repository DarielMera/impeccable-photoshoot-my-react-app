import { useState, useEffect, useRef } from "react"
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

function changeImage(kind) {
	let image
	switch (kind) {
		case "bride":
			image = brideAvatar
			break
		case "groom":
			image = groomAvatar
			break
		case "female":
			image = femaleAvatar
			break
		case "male":
			image = maleAvatar
			break
		case "girl":
			image = girlAvatar
			break
		case "boy":
			image = boyAvatar
			break
		default:
			break
	}
	return image
}

function SelectedImage({ kind }) {
	const [image, setImage] = useState("")

	useEffect(() => setImage(changeImage(kind)), [kind])
	return <img className="groupOfImages" src={image} alt={`${kind} avatar`} />
}

   

export default function PhotographerView(props) {
		//  frameData = useFetch('https://feipshoot.uk.r.appspot.com/frames')
		
		// .map( callback function)
		function getEachElementInsideFrameId(avatar, i){
			return( 	
				<> 
				   <div className='childrens-of-frame' > 			
				<SelectedImage kind={avatar.kind} /> 
					<div  key={i} style={{margin: '0 4rem 0 4rem'}} className="avatar-presentation-photographer-view">
					
						<div key={avatar._id} className="info-style-photographer-view ">
							<span>{avatar.name} </span>
							<span>{avatar.relationship}</span>
							<span>{avatar.role}</span>
						</div>
					</div>
					</div>
					</>
			   )
		}
			
		
					function iterateforEachDocumentInDataFrame(item, index, array) {	
												
						let avatarsInFrame = item.frameid.map(getEachElementInsideFrameId)
						return (
							<> 
						<PhotographerFrame key={array._id} frameNumber={index + 1}> {avatarsInFrame} </PhotographerFrame>
						<IsPicTaken/>
						</>

						)
						
					}	
				
				let	newArrayToBeDisplayed =	frameData.map(iterateforEachDocumentInDataFrame)
		
		return (
			<>
			<Title title="Photographer View" instructions="This is a preview list of the shots the photographer will take"/>
			{newArrayToBeDisplayed}

		</>
	)
}


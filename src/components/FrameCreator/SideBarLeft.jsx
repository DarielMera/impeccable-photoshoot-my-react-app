import { useState, useEffect } from "react"
import brideAvatar from "../AvatarCreator/images/bride.png"
import groomAvatar from "../AvatarCreator/images/groom.png"
import Zoom from 'react-reveal/Zoom'


function SelectedImage({ kind }) {
	const [image, setImage] = useState("")

	useEffect(() => setImage(() => (kind === "bride" ? brideAvatar : groomAvatar)), [kind])
	return <img src={image} alt={`${kind}`} />
}

function SideBarLeft({ data }) {
	const dragStart = e => {
		const target = e.target

		e.dataTransfer.setData("avatar_id", target.id)

		setTimeout(() => {
			target.style.display = "none"
		}, 0)
	}

	const dragOver = e => {
		e.stopPropagation()
		e.preventDefault()
	}

	const drop = e => {
		e.preventDefault()
		const avatar_id = e.dataTransfer.getData("avatar_id")

		const avatar = document.getElementById(avatar_id)
		avatar.style.display = "block"

		e.target.appendChild(avatar)
	}

	const avatars = data.map(
		(avatar) =>( 
			(avatar.kind === "bride" || avatar.kind === "groom") && (
				<div
					id={avatar._id}
					className="avatar-presentation"
					key={avatar.name}
					draggable
					onDragStart={dragStart}
					onDragOver={dragOver}>
					<SelectedImage kind={avatar.kind} draggable="true" />
					<div className="info-style">
						<span>{avatar.kind}</span>
						<span>{avatar.name}</span>
					</div>
				</div>
			)
		)	
	)

	return (
		<>
				<Zoom>
			<div className="sidebarLeft">
			<div className="bars-style"
				draggable 
				onDragStart={dragStart} 
				onDragOver={dragOver} 
				onDrop={drop}>
					{avatars}
				</div>
			</div>
					</Zoom>
		</>
	)
}

export default SideBarLeft

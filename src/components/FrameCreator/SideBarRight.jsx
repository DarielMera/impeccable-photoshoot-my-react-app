import { useEffect, useState } from "react"
import useFetch from "../customHooks/useFetch"

import femaleAvatar from "../AvatarCreator/images/female.svg"
import maleAvatar from "../AvatarCreator/images/male.png"
import girlAvatar from "../AvatarCreator/images/girl.svg"
import boyAvatar from "../AvatarCreator/images/boy.svg"

import Zoom from 'react-reveal/Zoom'


function changeImage(kind) {
	let image
	switch (kind) {
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
	return <img src={image} alt={`${kind}`} />
}

function SideBarRight({ data }) {
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

	const avatars = data && data.map(
		(avatar, i) => (   
			!(avatar.kind === "bride" || avatar.kind === "groom") && (
				<div
					id={avatar._id}
					className="avatar-presentation"
					key={avatar.name}
					draggable
					onDragStart={dragStart}
					onDragOver={dragOver}>
					<SelectedImage kind={avatar.kind} />
					<div className="info-style">
						<span>{avatar.name} </span>
						<span>{avatar.relationship}</span>
						<span>{avatar.role}</span>
					</div>
				</div>
			)
		)	
	)

	return (
		<Zoom>

		<div className="sidebarRight">
			<div className="bars-style"
				draggable onDragStart={dragStart}
				onDragOver={dragOver}
				onDrop={drop}>
					{avatars}
			
			</div>
		</div>
		</Zoom>

	)
}

export default SideBarRight

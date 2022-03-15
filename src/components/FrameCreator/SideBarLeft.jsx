import { useState, useEffect } from "react"
import brideAvatar from "../AvatarCreator/images/bride.png"
import groomAvatar from "../AvatarCreator/images/groom.png"

function SelectedImage({ kind }) {
	const [image, setImage] = useState("")

	useEffect(() => setImage(() => (kind === "Bride" ? brideAvatar : groomAvatar)), [kind])
	return <img src={image} alt={`${kind} avatar`} />
}

function SideBarLeft({ data }) {

	const dragStart = e => {
        const target = e.target

        e.dataTransfer.setData('avatar_id', target.id)

    setTimeout(()=>{
        target.style.display = 'none'
    }, 0)
}

const dragOver = e => {
    e.stopPropagation()
}

	const avatars = data.map(
		avatar =>
			(avatar.kind === "Bride" || avatar.kind === "Groom") && (
				<div
				id={avatar._id} 
				className="avatar-presentation" 
				key={avatar.name} 
				draggable
				onDragStart={dragStart}
				onDragOver={dragOver}
				>
					<SelectedImage kind={avatar.kind} draggable="false"/>
					<div className="info-style">
					<span>{avatar.kind}</span>
					<span>{avatar.name}</span>
					</div>
				</div>
			)
	)
	return (
		<>
			<div className="sidebarLeft">
				<div id="leftbar">{avatars}</div>
			</div>
		</>
	)
}

export default SideBarLeft

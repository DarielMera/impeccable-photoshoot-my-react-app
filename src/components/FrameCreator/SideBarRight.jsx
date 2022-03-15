import { useEffect, useState } from "react"
import femaleAvatar from "../AvatarCreator/images/female.svg"
import maleAvatar from "../AvatarCreator/images/male.png"
import girlAvatar from "../AvatarCreator/images/girl.svg"
import boyAvatar from "../AvatarCreator/images/boy.svg"

function changeImage(kind) {
	let image
	switch (kind) {
		case "Female":
			image = femaleAvatar
			break
		case "Male":
			image = maleAvatar
			break
		case "Girl":
			image = girlAvatar
			break
		case "Boy":
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
	return <img src={image} alt={`${kind} avatar`} />
}

function SideBarRight({ data }) {


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
		(avatar, i) =>(  
				!( (avatar.kind === "Bride") || (avatar.kind === "Groom")) && <div 
				id={avatar._id}
				className="avatar-presentation" 
				key={avatar.name} 
				draggable
				onDragStart={dragStart}
				onDragOver={dragOver}

				>
					<SelectedImage kind={avatar.kind} />
					<div className="info-style"> 
					<span>{avatar.name} </span>
					<span>{avatar.relationship}</span>
					<span>{avatar.role}</span>
					</div>
				</div>
		)
	)

	return (
		<div className="sidebarRight">
			<div id="rightbar">
				{avatars}
			</div>
		</div>
	)
}

export default SideBarRight

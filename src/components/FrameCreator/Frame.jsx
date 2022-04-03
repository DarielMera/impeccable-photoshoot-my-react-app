import SmileButton from "./SmileButton"

function Frame() {
	const drop = e => {
		e.preventDefault()
		const avatar_id = e.dataTransfer.getData("avatar_id")

		const avatar = document.getElementById(avatar_id)
		avatar.style.display = "block"

		e.target.appendChild(avatar)
	}

	const dragOver = e => {
		e.preventDefault()
	}

	const dragStart = e => {
        const target = e.target

        e.dataTransfer.setData('avatar_id', target.id)

    setTimeout(()=>{
        target.style.display = 'none'
    }, 0)

}
	return (
		<div className="frame-container">
			<div id="frame" 
			draggable 
			onDrop={drop} 
			onDragOver={dragOver}
			onDragStart={dragStart}
			>
			</div>
			<div className="frame-bottom-container">
				<SmileButton />
			</div>
		</div>
	)
}

export default Frame

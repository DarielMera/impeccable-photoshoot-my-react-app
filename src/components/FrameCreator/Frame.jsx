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

	return (
		<div className="frame-container">
			<div id="frame" 
			draggable 
			onDrop={drop} 
			onDragOver={dragOver}
			>
			
			</div>
			<div className="frame-bottom-container">
				{/* <h4 className="frame-counter">Frame: 01</h4> */}
				<button className="smileButton">smile</button>
			</div>
		</div>
	)
}

export default Frame

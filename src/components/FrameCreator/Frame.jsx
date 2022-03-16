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
// this is the code i need to get the ids of the current elements and then push them to an array 
// and then post to database (on its won endpoing),, in the photographer view i would fetch the 
// array list and load the avatars compared to the data ...so i need to pass the data as prop to the 
//phototgrapher view.


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
				{/* <h4 className="frame-counter">Frame: 01</h4> */}
				<SmileButton />
			</div>
		</div>
	)
}

export default Frame

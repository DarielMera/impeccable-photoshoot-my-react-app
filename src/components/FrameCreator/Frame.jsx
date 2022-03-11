function Frame() {
	return (
			<div class="frame-container">
				<div id="frame" draggable="true" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
				<div class="frame-bottom-container">
					<h4 class="frame-counter">Frame: 01</h4>
					<button onClick='smile' class="smileButton">
						smile
					</button>
				</div>
			</div>
	)
}

export default Frame

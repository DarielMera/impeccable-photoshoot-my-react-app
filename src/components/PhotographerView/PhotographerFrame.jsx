export default function PhotographerFrame(props) {
	return (
		<div id="frame">
			<div>{props.children}</div>
			<div class="secured" id="frame1"></div>
			<div class="frame-bottom-container">
				<h4 class="frame-counter">Frame: 01</h4>
			</div>
		</div>
	)
}

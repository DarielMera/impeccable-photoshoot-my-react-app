import './photographerview.css'

export default function PhotographerFrame(props) {

	return (

		<div className="frame-photographer-view">
			<div>{props.children}</div>
			<div className="frame-bottom-container-photographer-view">
				<h4 className="frame-counter-photographer-view ">Frame {props.frameNumber}</h4>
			</div>
		</div>
	)
}

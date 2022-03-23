import './photographerview.css'

export default function PhotographerFrame(props) {
	// const [frameCounter, setFrameCounter] = useState(0)


	return (
		<div id="frame-photographer-view">
			<div>{props.children}</div>
			<div className="frame-bottom-container-photographer-view">
				<h4 className="frame-counter-photographer-view ">Frame</h4>
			</div>
		</div>
	)
}

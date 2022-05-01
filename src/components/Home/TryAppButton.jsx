import { Link } from "react-router-dom"

function TryAppButton() {
	return (
		<>
			<Link to="app/help">
				<h1 className="tryitnow">
                    Try it Now
                    <div style={{ color: "black", fontSize: 'x-small', marginLeft: '7px' }}>Proceed as a guest</div>

                    </h1>
			</Link>
		</>
	)
}

export default TryAppButton

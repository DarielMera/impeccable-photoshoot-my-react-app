import Flip from 'react-reveal/Flip'

export default function useTitle({ title, instructions }) {
	const center = {
		textAlign: "center",
		backgroundColor: "gray",
		color: "white",
		padding: "14px",
		width: "fit-content",
		border: "solid 3px rgb(0, 0, 0, 1)",
		borderRadius: "14px 0 14px 0",
		margin: "5px auto",
		textShadow: "3px 0px 10px rgb(0, 0, 0)",
	}

	return (
		<Flip bottom> 
		<div style={center}>
			<h2 style={{ marginBottom: "5px" }}>{title}</h2>
			<p>{instructions}</p>
		</div>
		</Flip>
	)
}

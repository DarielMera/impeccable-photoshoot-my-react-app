import { useReducer } from "react"

export default function IsPicTaken() {
	let done
	const [checked, toggle] = useReducer(checked => !checked, false)
	checked && (done = "green")
	return (
		<>
			<label style={{ color: done }}>
				{" "}
				Done
				<input
				id="picture-taken-checkbox" 
				width="60px" 
				height="80px" 
				type="checkbox" 
				value={checked}
				onChange={toggle} 
				name="picture-taken-checkbox"
				 />
			</label>
		</>
	)
}



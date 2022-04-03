import { useState, useReducer, useEffect } from "react"

export default function IsPicTaken() {
const [labelColor, setLabelColor] = useState('')

	
	const [checked, toggle] = useReducer(checked => !checked, false)
	//  checked && setLabelColor('green')

	useEffect(()=>{
		checked ? setLabelColor('green') : setLabelColor('')
	}, [checked])


	return (
		<>
			<label style={{ color: labelColor }}>
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



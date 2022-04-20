import { useState, useRef } from "react";
import postData from "./postData";
import boyPic from './images/boy.svg'
import './formavatarstyle.css'

function BoyForm() {
  const [confirm, setConfirm] = useState()
  const [inputs, setInputs] = useState({
    kind: "boy",
    name: "",
    relationship: "",
    role: ""
  });

  const handleChange = (event) => {
    const {name, value} = event.target
    setInputs(prevInput => ({
      ...prevInput, 
      [name]: value
    }))
  }

  const nameRef = useRef();
  const relationshipRef = useRef();
  const roleRef = useRef();

  function clearForm(){
  nameRef.current.value = ''
  relationshipRef.current.value = ''
  roleRef.current.value = ''
  }

  function confirmation(){ 
		setConfirm("Confirmed !")
		setTimeout(() => {
			setConfirm("")
		}, 1000);
	}


  const handleSubmit = (event) => {
    event.preventDefault();
    postData(inputs)
    clearForm()
    confirmation()
  }

  return (
    <form className="form center-elements" onSubmit={handleSubmit}>
      <img 
      src={boyPic}
      style={{width:"65px",
      height: "110px"}}  
      alt="boy avatar"/>
      <section className="center-elements-column"> 
      <h3 style={{color:'gray', marginBottom: '10px', opacity:'.8'}}>{confirm}</h3>
         <input 
           className="text-input"
           type="text" 
           name="name" 
           placeholder="Participant Name"
           value={inputs.value} 
           onChange={handleChange}
           ref={nameRef}
           required
           />
        <select 
        className="text-input"
        value={inputs.relationship}
        onChange={handleChange}
        name="relationship"
        ref={relationshipRef}
        >
        <option value=""> select relationship </option>
        <option value="GroomSon"> Groom-Son </option>
        <option value="BrideSon"> Bride-son </option>
        <option value="StepSon"> StepSon </option>
        <option value="GrandSon"> GrandSon </option>
        <option value="Godson"> Godson </option>
        <option value="Uncle"> Uncle </option>
        <option value="StepBrother"> StepBrother </option>
        <option value="Brother-in-Law"> Brodther-in-Law </option>
        <option value="Cousin"> Cousin </option>
        <option value="Guest"> Guest </option>
      </select>

      <select 
        className="text-input"
        value={inputs.role}
        onChange={handleChange}
        name="role"
        ref={roleRef}
        >
        <option value="">select role</option>
        <option value="Ring-Bearer">Ring-Bearer</option>
      </select>

      <button className="button">Create Avatar</button>
      </section>
    </form>
  )
}

export default BoyForm

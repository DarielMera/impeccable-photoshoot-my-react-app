import { useState, useRef } from "react";
import postData from "./postData";
import girlPic from './images/girl.svg'

function GirlForm() {
  const [confirm, setConfirm] = useState()
  const [inputs, setInputs] = useState({
    kind: "girl",
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
      src={girlPic}
      style={{width:"65px",
      height: "110px"}}  
      alt="girl avatar"/>
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
        <option value="GroomDaughter"> Groom-daughter </option>
        <option value="BriddeDaughter"> Bride-daughter </option>
        <option value="Stepdaughter "> Stepdaughter </option>
        <option value="Granddaughter"> Granddaughter </option>
        <option value="Goddaughter"> Goddaughter </option>
        <option value="Aunt"> Aunt </option>
        <option value="StepSister"> StepSister </option>
        <option value="Sister-in-Law "> Sister-in-Law </option>
        <option value="cousin"> cousin </option>
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
        <option value="Flower-Girl">Flower-Girl</option>
      </select>

      <button className="button">Create Avatar</button>
      </section>
    </form>
  )
}

export default GirlForm

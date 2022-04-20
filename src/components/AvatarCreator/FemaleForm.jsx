import { useState, useRef } from "react";
import postData from "./postData";
import femalePic from './images/female.svg'
import useConfirmation from "../customHooks/useConfirmation";

function FemaleForm() {
  const [confirm, confirmation] = useConfirmation()
  const [inputs, setInputs] = useState({
    kind: "female",
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


  const handleSubmit = (event) => {
    event.preventDefault();
    postData(inputs)
    clearForm()
    confirmation()
  }

  return (
    <form className="form center-elements" onSubmit={handleSubmit}>
      <img 
      src={femalePic}
      style={{width:"115px",
      height: "260px"}}  
      alt="female avatar"/>
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
        <option value="G-GrandMother"> G.GrandMother </option>
        <option value="GrandMother"> GrandMother </option>
        <option value="Aunt"> Aunt </option>
        <option value="StepMother"> StepMother </option>
        <option value="StepSister"> StepSister </option>
        <option value="Sister-in-Law "> Sister-in-Law </option>
        <option value="Mother"> Mother </option>
        <option value="cousin "> cousin </option>
        <option value="Daughter "> Daughter </option>
        <option value="Stepdaughter "> Stepdaughter </option>
        <option value="Granddaughter"> Granddaughter </option>
        <option value="Goddaughter"> Goddaughter </option>
        <option value="Friend"> Friend </option>
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
        <option value="Maid-of-Honor">Maid of Honor</option>
        <option value="Matron-of-Honor">Matron of Honor</option>
        <option value="bridesmaid">Bridesmaid</option>
      </select>

      <button className="button">Create Avatar</button>
      </section>
    </form>
  )
}

export default FemaleForm

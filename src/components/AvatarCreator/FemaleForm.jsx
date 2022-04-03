import { useState, useRef } from "react";
import postData from "./postData";
import femalePic from './images/female.svg'

function FemaleForm() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    postData(inputs)
  }

  const inputElement = useRef();
  const inputElement2 = useRef();
  const inputElement3 = useRef();
  function clearForm(){
      inputElement.current.value = ''
      inputElement2.current.value = ''
      inputElement3.current.value = ''
  }


  return (
    <form className="form center-elements" onSubmit={handleSubmit}>
      <img 
      src={femalePic}
      style={{width:"115px",
      height: "260px"}}  
      alt="female avatar"/>
      <section className="center-elements-column"> 
         <input 
           className="text-input"
           type="text" 
           name="name" 
           placeholder="Participant Name"
           value={inputs.value} 
           onChange={handleChange}
           ref={inputElement}
           />
        <select 
        className="text-input"
        value={inputs.relationship}
        onChange={handleChange}
        name="relationship"
        ref={inputElement2}

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
        ref={inputElement3}

        >
        <option value="">select role</option>
        <option value="Maid-of-Honor">Maid of Honor</option>
        <option value="Matron-of-Honor">Matron of Honor</option>
      </select>

      <button onClick={clearForm} className="button">Create Avatar</button>
      </section>
    </form>
  )
}

export default FemaleForm

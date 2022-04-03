import { useState, useRef } from "react";
import postData from "./postData";
import girlPic from './images/girl.svg'

function GirlForm() {
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
      src={girlPic}
      style={{width:"65px",
      height: "110px"}}  
      alt="girl avatar"/>
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
        <option value="Daughter"> Daughter </option>
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
        ref={inputElement3}

        >
        <option value="">select role</option>
        <option value="Flower-Girl">Flower-Girl</option>
      </select>

      <button onClick={clearForm} className="button">Create Avatar</button>
      </section>
    </form>
  )
}

export default GirlForm

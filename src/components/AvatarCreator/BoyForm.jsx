import { useState, useRef } from "react";
import postData from "./postData";
import boyPic from './images/boy.svg'
import './formavatarstyle.css'

function BoyForm() {
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
      src={boyPic}
      style={{width:"65px",
      height: "110px"}}  
      alt="boy avatar"/>
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
        >
        <option value=""> select relationship </option>
        <option value="Son"> Son </option>
        <option value="StepSon"> StepSon </option>
        <option value="GrandSon"> GrandSon </option>
        <option value="Godson"> Godson </option>
        <option value="Uncle"> Uncle </option>
        <option value="StepBrother"> StepBrother </option>
        <option value="Brother-in-Law"> Law </option>
        <option value="Cousin"> Cousin </option>
        <option value="Guest"> Guest </option>
      </select>

      <select 
        className="text-input"
        value={inputs.role}
        onChange={handleChange}
        name="role"
        >
        <option value="">select role</option>
        <option value="Ring-Bearer">Ring-Bearer</option>
      </select>

      <button onClick={clearForm} className="button">Create Avatar</button>
      </section>
    </form>
  )
}

export default BoyForm

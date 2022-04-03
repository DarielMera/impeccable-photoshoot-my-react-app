import { useState, useRef } from "react";
import postData from "./postData";
import malePic from './images/male.png'

function MaleForm() {
  const [inputs, setInputs] = useState({
    kind: "male",
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
      src={malePic}
      style={{width:"115px",
      height: "270px"}}  
      alt="male avatar"/>
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
        <option value=""> select relationship</option>
        <option value="G-GrandFather"> G-GrandFather </option>
        <option value="GrandFather"> GrandFather </option>
        <option value="Uncle"> Uncle </option>
        <option value="StepFather"> StepFather </option>
        <option value="StepBrother"> StepBrother </option>
        <option value="Brother-in-Law"> Brother-in-Law </option>
        <option value="Father"> Father </option>
        <option value="cousin"> cousin </option>
        <option value="Son"> Son </option>
        <option value="StepSon"> StepSon </option>
        <option value="GrandSon"> GrandSon </option>
        <option value="GodSon"> GodSon </option>
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
        <option value="Groomsman">Groomsman</option>
        <option value="Best-man">Best Man</option>
      </select>

      <button onClick={clearForm} className="button">Create Avatar</button>
      </section>
    </form>
  )
}

export default MaleForm

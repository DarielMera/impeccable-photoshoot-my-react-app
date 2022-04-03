import { useState, useRef } from "react";
import postData from "./postData";
import bridePic from './images/bride.png'

function BrideForm() {
  const [inputs, setInputs] = useState({
    kind: "bride",
    name: "",
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
  
  function clearForm(){
      inputElement.current.value = ''
  }

  return (
    <> 
    <form className="form center-elements" onSubmit={handleSubmit}>
      <img 
      src={bridePic}
      style={{width:"160px",
      height: "280px"}}  
      alt="bride avatar"/>
      <section className="center-elements-column"> 
         <input 
           className="text-input"
           type="text" 
           name="name" 
           placeholder="Bride's Name"
           value={inputs.value} 
           onChange={handleChange}
           ref={inputElement}
         />         
         <button onClick={clearForm} className="button">Bride To Be</button>
      </section>
    </form>
    </>
  )
}

export default BrideForm
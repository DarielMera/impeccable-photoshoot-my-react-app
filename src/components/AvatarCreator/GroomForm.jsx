import { useState,useRef } from "react";
import postData from "./postData";
import groomPic from './images/groom.png'

function GroomForm() {
  const [inputs, setInputs] = useState({
    avatarType: "groom",
    name: ""
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
    <form className="form center-elements" onSubmit={handleSubmit}>
      <img 
      src={groomPic}
      style={{width:"120px",
      height: "290px"}}  
      alt="groom avatar"/>
      <section className="center-elements-column"> 
         <input 
           className="text-input"
           type="text" 
           name="name" 
           placeholder="Groom's Name"
           value={inputs.value} 
           onChange={handleChange}
           ref={inputElement}
         />
         
         <button onClick={clearForm} className="button">Groom To Be</button>
      </section>
    </form>
  )
}

export default GroomForm
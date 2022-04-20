import { useState,useRef } from "react";
import postData from "./postData";
import groomPic from './images/groom.png'

function GroomForm() {
  const [confirm, setConfirm] = useState()
  const [inputs, setInputs] = useState({
    kind: "groom",
    name: ""
  });

  const handleChange = (event) => {
    const {name, value} = event.target
    setInputs(prevInput => ({
      ...prevInput, 
      [name]: value
    }))
  }

  const nameRef = useRef();
  
  function clearForm(){
      nameRef.current.value = ''
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    postData(inputs)
    clearForm()
    confirmation()
  }

  function confirmation(){ 
		setConfirm("Confirmed !")
		setTimeout(() => {
			setConfirm("")
		}, 1000);
	}



  return (
    <form className="form center-elements" onSubmit={handleSubmit}>
      <img 
      src={groomPic}
      style={{width:"120px",
      height: "290px"}}  
      alt="groom avatar"/>
      <section className="center-elements-column"> 
      <h3 style={{color:'gray', marginBottom: '10px', opacity:'.8'}}>{confirm}</h3>
         <input 
           className="text-input"
           type="text" 
           name="name" 
           placeholder="Groom's Name"
           value={inputs.value} 
           onChange={handleChange}
           ref={nameRef}
           required
         />
         
         <button className="button">Groom To Be</button>
      </section>
    </form>
  )
}

export default GroomForm
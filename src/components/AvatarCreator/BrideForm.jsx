import { useState, useRef } from "react";
import postData from "./postData";
import bridePic from './images/bride.png'

function BrideForm() {
  const [confirm, setConfirm] = useState()
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

  const nameRef = useRef();
  
  function clearForm(){
      nameRef.current.value = ''
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
    <> 
    <form className="form center-elements" onSubmit={handleSubmit}>
      <img 
      src={bridePic}
      style={{width:"160px",
      height: "280px"}}  
      alt="bride avatar"/>
      <section className="center-elements-column">
      <h3 style={{color:'gray', marginBottom: '10px', opacity:'.8'}}>{confirm}</h3>
         <input 
           className="text-input"
           type="text" 
           name="name" 
           placeholder="Bride's Name"
           value={inputs.value} 
           onChange={handleChange}
           ref={nameRef}
           required
         />         
         <button className="button">Bride To Be</button>
      </section>
    </form>
    </>
  )
}

export default BrideForm
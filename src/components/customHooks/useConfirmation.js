import {useState}  from 'react'

export default function useConfirmation(){
      const [confirm, setConfirm] = useState()

  function confirmation(){ 
		setConfirm("Confirmed !")
		setTimeout(() => {
			setConfirm("")
		}, 1000);
	}

    return [confirm, confirmation]
}
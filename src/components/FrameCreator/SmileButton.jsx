import postData from './postData'

const frameComposition = ()=> {
    const arrayOfAvatarsIdsInPresentFrame = []
    const framer = document.getElementById("frame")
    for(let i=0; i < framer.children.length; i++){
     arrayOfAvatarsIdsInPresentFrame.push(framer.children[i].getAttributeNode("id").value)
    }
    // console.log(arrayOfAvatarsIdsInPresentFrame);
    return arrayOfAvatarsIdsInPresentFrame 
    }

    function refreshAll(){
        setTimeout(() => {
            document.location.reload()
        }, 1000)
    }
    
    function Shutter(){
      postData(frameComposition()) 
     //uncoment this line when ready to post to db
    // refreshAll()
}


export default function SmileButton() {
    // let avatarsNodeList = ;


  return (
<button 
className="smileButton"
// onClick={refreshAll}
onClick={Shutter}
>smile</button>
  )
}

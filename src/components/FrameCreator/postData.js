
export default function postData(dataToPost){
    console.log('datatopost')
console.log(dataToPost)
    const postFrameData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        frame: dataToPost
        
      }),
    };

    if(!dataToPost) return

    fetch("https://feipshoot.uk.r.appspot.com/frames", postFrameData)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

}
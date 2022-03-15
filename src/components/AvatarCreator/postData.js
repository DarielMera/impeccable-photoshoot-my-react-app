
export default function postData(dataToPost){
    console.log('datatopost')
console.log(dataToPost)
    const postAvatarData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToPost),
    };

    if(!dataToPost) return

    fetch("https://feipshoot.uk.r.appspot.com/avatars", postAvatarData)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

}
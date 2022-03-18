import {useState, useEffect} from 'react'

function UETest(){
    const [resourceType, setResouceType] = useState('posts')
    const [items, setItems] = useState([])

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((res)=>res.json())
      .then((data)=>setItems(data))
    }, [resourceType])
    
    const helloWorld = items.map(item => {
      return <pre>{JSON.stringify(item)}</pre>
    })

    return (
      <>
        <div>
          <button onClick={()=> setResouceType('posts')}>Posts</button>
          <button onClick={()=> setResouceType('users')}>Users</button>
          <button onClick={()=> setResouceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        {helloWorld}
      </>
    )
  }
export default UETest  





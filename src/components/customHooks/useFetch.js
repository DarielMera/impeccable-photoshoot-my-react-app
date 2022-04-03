
import { useState,useEffect } from "react";

export default function useFetch(uri){
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(()=>{
        if(!uri) return
        fetch(uri)
        .then((res)=> res.json())
        .then((data)=> setData(data))
        .then(()=>setLoading(false))
        .catch(setError)
    }, [uri])

    if (loading) return <h1>loading...</h1>
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
    if (data) return [data]

}
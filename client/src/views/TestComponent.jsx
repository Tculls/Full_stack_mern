import React, {useState, useEffect} from "react";
import axios from "axios"
// to get info from backend
// 1. axios to get info 
// 2. useState
// 3. UseEffect
const TestComponent = () => {
    const [message, setMessage] = useState()
    useEffect(()=>{
        axios.get(`http://localhost:8000/apitest`)
        .then(response=> {
            setMessage(response.data)
            console.log(response.data)
        })
        .catch(err=> console.log(err))
    }, [])
    return(
        <div>
        <div>Test Componenet</div>
        {
            message?
            <h1>{message}</h1>:
            <h1>Trying...</h1>
        }
        </div>
    )
}
export default TestComponent
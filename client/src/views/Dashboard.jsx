import React, {useState, useEffect} from "react";
import axios from "axios"
import {Link} from  'react-router-dom'

// to get info from backend
// 1. axios to get info 
// 2. useState
// 3. UseEffect
const Dashboard = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products`)
        .then(response=>{
            console.log(response.data)
            setProducts(response.data)
        })
        .catch(err=> console.log(err))
    },[])

    return(
        <div className="App">
        <h2>Dashboard</h2>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product, i)=>(
                        <tr key={i}>
                        <td><Link to={`/products/${product._id}`}>{product.title}</Link></td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td><Link to={`/products/${product._id}/edit`}>Edit</Link></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
        
    )
}

export default Dashboard
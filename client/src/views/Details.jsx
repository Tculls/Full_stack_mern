import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useParams} from 'react-router-dom'

export const Details = () => {
    const {id} = useParams()
    const[product, setProduct] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response=>setProduct(response.data))
        .catch(err=>console.log(err))
    }, [])


  return (
    <div>
    <div>Details</div>
    {
        product&&
        <div>
            <h5>Product Name: {product.title}</h5>
            <h5>Price: {product.price}</h5>
            <h5>Description: {product.description}</h5>
            </div>
    }
    </div>
  )
}

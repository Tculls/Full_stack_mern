import React, {useEffect, useState} from "react";
import axios from "axios"
import {useParams, useNavigate} from 'react-router-dom'

export const Update = () => {
        const[title, setTitle] = useState("")
        const[price, setPrice] = useState(1)
        const[description, setDescription] = useState("")
        const {id} = useParams()
        const navigate = useNavigate()
        
        useEffect(()=>{
          axios.get(`http://localhost:8000/api/products/${id}`)
          .then(response=>{
            const product = response.data
            setTitle(product.title)
            setPrice(product.price)
            setDescription(product.description)
          })
          .catch(err=>console.log(err))
        }, [])

        const handleSubmit = (e) =>{
          e.preventDefault()
          axios.put(`http://localhost:8000/api/products/${id}`, {title, price, description})
          .then(response=>navigate('/'))
          .catch(err=>console.log(err))
        }
      
        const handleDelete =()=>{
          axios.delete(`http://localhost:8000/api/products/${id}`)
          .then(response=>navigate(`/`))
          .catch(err=>console.log(err))
        }
    
    return (
      <div>
      <div>Update</div>
      <form onSubmit={handleSubmit}>
          <label name="title">Title:</label>
          <input type='text' name="title" value={title} onChange={e=>setTitle(e.target.value)}/>
          <label name="price">Price:</label>
          <input type='number' name='price' value={price} onChange={e=>setPrice(e.target.value)}/>
          <label name="description">Description:</label>
          <textarea name="description" type="text" rows="5" cols = "50" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
          <button type="submit">Update Product</button>
      </form>
        <button onClick={handleDelete}> Delete </button>
      </div>
    )
  }




export default Update
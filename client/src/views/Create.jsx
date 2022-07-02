import React, {useState} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Create = () => {
    const[title, setTitle] = useState("")
    const[price, setPrice] = useState(1)
    const[description, setDescription] = useState("")

    const navigate= useNavigate()

    const handleSubmit=(e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/products`, {title, price, description})
        .then(()=>navigate('/'))
        .catch(err=>console.log(err))
        
    }

    return(
        <div>
            <h1>Add a Product</h1>
        <form onSubmit={handleSubmit}>
          <label name="title">Title:</label>
          <input type='text' name="title" value={title} onChange={e=>setTitle(e.target.value)}/>
          <label name="price">Price:</label>
          <input type='number' name='price' value={price} onChange={e=>setPrice(e.target.value)}/>
          <label name="description">Description:</label>
          <textarea name="description" type="text" rows="5" cols = "50" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
          <button type="submit">Add Product</button>
        </form>
        </div>
        
    )
}

export default Create 
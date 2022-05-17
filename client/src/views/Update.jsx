import React, {useEffect, useState} from "react";
import axios from "axios"
import {useParams, useNavigate} from 'react-router-dom'




export const Update = () => {
        const[title, setTitle] = useState("")
        const[price, setPrice] = useState(1)
        const[description, setDescription] = useState("")
        const {id} = useParams()
    
    
    return (
      <div>Update</div>
    )
  }




export default Update
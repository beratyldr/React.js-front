
import React,{SyntheticEvent,useState} from "react";
import {useHistory} from "react-router-dom";


const AddProduct=()=>{

  const [name,setName]=useState('');
  const [price,setPrice]=useState('');
  const [weight,setWeight]=useState('');
  let history = useHistory();
  const submit= async (e : SyntheticEvent)=>{
    e.preventDefault();
    await fetch("http://localhost:8000/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
        name,
        price,
        weight
      })
    }).then(function(response) {
        return response.text()
    })
    history.push("/products")
  }

return (
  <form onSubmit={submit}>
    <h1 className="h3 mb-3 fw-normal">Please create new product</h1>

    <input className="form-control" placeholder="Name" required 
        onChange={e =>setName(e.target.value)}/>

    
    <input  className="form-control" placeholder="Price" required 
        onChange={e =>setPrice(e.target.value)}/>

    
    <input  className="form-control" placeholder="Weight" required 
        onChange={e =>setWeight(e.target.value)}/>
    
    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
      
  </form>
)
}
export default AddProduct;
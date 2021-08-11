
import React,{SyntheticEvent,useState} from "react";
import {useHistory} from "react-router-dom";
const EditProduct=(props)=>{
  const [data, setData] = React.useState([]);
  const [name,setName]=useState('');
  const [price,setPrice]=useState('');
  const [weight,setWeight]=useState('');
  let history = useHistory();
  const id=props.match.params.id;
  const submit= async (e : SyntheticEvent)=>{
    e.preventDefault();
    await fetch(`http://localhost:8000/edit/${id}`, {
        method: "PUT",
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
   if (!data.length)
    fetch(`http://localhost:8000/product/${id}`)
      .then(resp => resp.json())
      .then(data => setData(data));

return (
  <form onSubmit={submit}>
    <h1 className="h3 mb-3 fw-normal">Please edit product</h1>

    <input className="form-control" placeholder={data.Name} required 
        onChange={e =>setName(e.target.value)}/>

    
    <input  className="form-control" placeholder={data.Price} required 
        onChange={e =>setPrice(e.target.value)}/>

    
    <input  className="form-control" placeholder={data.Weight} required 
        onChange={e =>setWeight(e.target.value)}/>
    
    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
      
  </form>
)
}
export default EditProduct;
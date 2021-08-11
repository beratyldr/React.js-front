import React from 'react';
import ReactDOM from 'react-dom';
//import { Redirect } from "react-router-dom";
import Table from '@hesenger/react-simpletable';
import { useHistory} from "react-router-dom";

 
const List = () => {
  
  const [data, setData] = React.useState([]);
  const [current, setCurrent] = React.useState([]);
  let history = useHistory();

      if (!data.length)
           fetch('http://localhost:8000/products')
          .then(resp => resp.json())
          .then(data => setData(data));
      
     

    function Delete(id){ 
       if(id!=null){
          fetch(`http://localhost:8000/delete/${id}`,{
          method: "DELETE",
          headers: {
              "Content-Type": "application/json"
          }})
      history.push("/products")
    }

  }
  function Edit(id){
    if(id!=null){
       history.push(`/edit/${id}`)
    }
  }
  function Add(){
    history.push("/new")
  }
  return <>
    <Table data={data} onSelect={row => setCurrent(row)}>
      <Table.Col name="Name" header="Name"/>
      <Table.Col name="Price" header="Price"/>
      <Table.Col name="Weight" header="Weight"/>
      <button className="w-100 btn btn-lg btn-primary" onClick={(e)=>Delete(current.Id)}>Delete</button>
      <Table.Col name="btn1" />
      <button className="w-100 btn btn-lg btn-primary" onClick={(e)=>Edit(current.Id)}>Edit</button>
     
    </Table>
     <button className="w-100 btn btn-lg btn-primary" onClick={(e)=>Add()}>Add</button>
  </>;
  
}

ReactDOM.render(<List />, document.getElementById('root'))

export default List;
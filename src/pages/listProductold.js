import React from "react";
import {useState,useEffect} from "react";
import ReactTable from "react-table"; 
function ListProduct(){
   
   const [productData, setProductData] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
      const response = await fetch("http://localhost:8000/products",{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }})
      const data = await response.json();
      console.log(data)
      setProductData(data)
  
  }
 
 const columns = [{  
      Header: 'Name',  
      accessor: 'Name'  
      },{  
      Header: 'Price',  
      accessor: 'Price'  
      },{  
      Header: 'Weight',  
      accessor: 'Weight'  
      }]  
  /*function s(id){
        fetch(`http://localhost:8000/delete/${id}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }})
  
    console.log("silindi")
  }*/
  return (
    <div className="App">
    <h2>Product Data</h2>
    <ReactTable
     data={productData}
      columns={columns} 
      defaultPageSize={2} 
      pageSizeOptions={[2,4,6]}/>
    </div>
  );

 }    



export default ListProduct
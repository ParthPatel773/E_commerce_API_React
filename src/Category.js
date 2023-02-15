import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://akashsir.in/myapi/ecom1/api/api-view-category.php")
      .then((response) => {
        setData(response.data.category_list);
      });
  }, []);

  let navigate  = useNavigate();
  function passdata(id){
   navigate(`/subcategory/${id}`)
  }
  
  return (
    <>

    <h1>Category List</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Category ID</th>
            <th>Category Name</th>
            <th>Image</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((m , index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td> {m.category_id}</td>
                <td> {m.category_name}</td>
                <td>
                 
                  <img src={m.category_image} onClick={()=>passdata(m.category_id)} height="100"></img>
                </td>
                {/* <td>  <button onClick={()=>passdata(m.category_id)}>SubCategory</button></td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

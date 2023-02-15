import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SubCategory() {
  const [data, setData] = useState([]);

  //Get ID from Params
  let { id } = useParams();
  //Navigation  
  let navigate = useNavigate();
  function passdata(id) {
    navigate(`/product/${id}`)
  }

  useEffect(() => {
    axios
      .get(`https://akashsir.in/myapi/ecom1/api/api-subcategory-list.php?category_id=${id}`)
      .then((response) => {
        setData(response.data.sub_category_list);
      });
  }, []);


 

  return (
    <>
      <h1>Sub Category List</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Category ID</th>
            <th>Sub Category Name</th>
            <th>Image</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((s, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td> {s.category_id}</td>
                <td> {s.sub_category_name}</td>
                <td><img src={s.sub_category_image} onClick={()=>passdata(s.sub_category_id)} height="100"></img></td>
                
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}




import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Details() {
    const [data, setData] = useState([]);
    let { id } = useParams()
    //Navigation  
    let navigate = useNavigate();
     

    useEffect(() => {
        axios.get(`https://akashsir.in/myapi/ecom1/api/api-view-product.php?product_id=${id}`)
            .then((response) => {
                setData(response.data.product_list);
            });
    }, []);

    return (
        <>
            <h1>Product List</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>SubCategory ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((p, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td> {p.sub_category_id}</td>
                                <td> {p.product_name}</td>
                                <td> {p.product_price}</td>
                                 <td><img src={p.product_image} height="100"></img></td>
 
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )

}
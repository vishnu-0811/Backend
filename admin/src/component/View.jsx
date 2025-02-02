import React, { useEffect, useState } from 'react'
import "../tab.css"

const View = ({ title }) => {

    const [items,setItems] = useState([]);
    const [reload,setReload] = useState(false);

    useEffect(() => {
        debugger;
        fetch("http://localhost:4001/product",{
            method:"GET",
        })
        .then((res) => res.json())
        .then((data) =>
            {
                // console.log("first",data)
                setItems(data)
                // console.log("object",data)
            } )
        
        .catch((error) => console.log(error))
    }, [reload]);

    const deleteData = (id) => {
       
        console.log(id)

        fetch(`http://localhost:4001/product/${id}`, {
            method:"DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setReload(!reload);
            console.log(data)
        })
    }

  return (
    <div className='view'>
        <table className='content-table'>
            <thead>
            <tr> 
                <th>Category</th>
                <th>subcategory</th>
                <th>Product</th>
                <th>Price</th>
                <th>Description</th>
                <th>Image</th>
                <th>Delete</th>
            </tr>
            </thead>

            <tbody>
            {items.map((item) => (
                <tr key={item.id}> 
                    <td>{item.category?.category}</td>
                    <td>{item.subcategory?.subcategory}</td>
                    <td>{item.productname}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td> <img src={item.image} alt="" height='100px' /> </td>
                    <td> <button className='btn' onClick={() => deleteData(item._id)} > Delete </button> </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default View

import React, { useEffect, useState } from 'react'
import "../tab.css"
import { useParams } from 'react-router-dom'

const ViewCat = ({ title1 }) => {
    let {id} =useParams()
    console.log(id)

    const [items,setItems] = useState([]);
    const [reload,setReload] = useState(false);

    useEffect(() => {
        
        fetch("http://localhost:4001/category",{
            method:"GET",
        })
        .then((res) => res.json())
        .then((data) =>
            {
                console.log("first",data)
                setItems(data)
               
            } )
        
        .catch((error) => console.log(error))
    }, [reload]);

    const deleteData = (id) => {
        debugger;
        console.log(id)

        fetch(`http://localhost:4001/category/${id}`, {
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
                <th>Image</th>
                <th>Delete</th>
            </tr>
            </thead>

            <tbody>
            {items.map((item) => (
                <tr key={item.id}> 
                    <td>{item.category}</td>
                    <td> <img src={item.image} alt="" height='100px' /> </td>
                    <td> <button className='btn' onClick={() => deleteData(item._id)} > Delete </button> </td>
                </tr>
            ))}
            </tbody>
            
        </table>
    </div>
  )
}

export default ViewCat

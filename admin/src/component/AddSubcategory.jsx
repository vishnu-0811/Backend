import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddSubcategory = () => {


  
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
       category:"",
        subcategory: ""
    
    });


    const [items, setItems] = useState([])
    useEffect(() => {

        fetch("http://localhost:4001/category", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("first", data)
                setItems(data)

            })

            .catch((error) => console.log(error))
    }, []);

   


    const handleInput = (ev) => {
        const { name, value } = ev.target;
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(formData)
    }

    const onFormSubmit = (ev) => {
        ev.preventDefault()
        debugger;
        console.log(formData)
        if( formData.category && formData.subcategory )
          {
            console.log(formData)
    
            fetch("http://localhost:4001/subcat", {
              method:"POST",
              body:JSON.stringify(formData),
              headers:{
                "Content-Type":"application/json",
              }
            })
            .then((res) => res.json())
            .then((data) => {
              console.log('Data received:', data);
              if(data){
             
                console.log("object",data)
                navigate("/ViewSubcat");
              }
              else{
                alert(data.error || "unkown") 
              }
            })
            .catch((error) => {
              console.log(error)
            });
          }
          
        
      };

    return (
        <>
            <div className="wrapper">
                <form action="" onSubmit={onFormSubmit}>
                    <table className="text-center">

                        <tr>
                            <td colSpan={2}>
                                <h3>Add Sub-Category</h3>
                            </td>
                        </tr>

                        <tr>
                            <td>Category</td>

                            <td>
                                
                            <select name='category'  value={formData.category} onChange={handleInput} >
                                <option value="">select Category</option>
                                {items.map((item) => (
                                    <option key={item._id} value={item._id} >{item.category}</option>
                                ))}
                            </select>
                            </td>
                        </tr>

                        <tr>
                            <td>SubCategory</td>

                            <td>
                                <input type="text" name='subcategory' onChange={(ev) => handleInput(ev)} />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={2}>
                                <button className='btn1' type='submit' value="Save" >Submit</button>
                            </td>
                        </tr>

                    </table>
                </form>
            </div>
        </>
    )
}

export default AddSubcategory

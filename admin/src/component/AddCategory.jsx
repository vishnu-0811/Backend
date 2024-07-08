import React, { useState } from 'react'
import "../form.css"
import { useNavigate } from 'react-router-dom'

const AddCategory = () => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    category:"",
    id:"",
    image:""
    
  });

  const handleInput = (ev) => {
    const { name,value } = ev.target;
    setFormData({
      ...formData,
    
      [name]:value,
    });
    console.log(formData)
  };

  const onFormSubmit = (ev) => {
    ev.preventDefault()
    debugger;
    console.log(formData)
    if( formData.category  )
      {
        console.log(formData)

        fetch("http://localhost:4001/category", {
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
            setFormData({
              ...formData,
              id: data.id // Assuming data from server contains an 'id' field
            });
            console.log("object",data)
            navigate("/ViewCat");
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
              {formData&&

              <>
                <tr>
                <td colSpan={2}>
                    <h3>Add Category</h3>
                </td>
              </tr>

            <tr>
              <td>Category</td>
      
              <td>
                <input type="text" name='category' onChange={handleInput} />
              </td>
              </tr>

              <tr>
                <td colSpan={2}>
                  <button className='btn1' type='submit' value="Save" >Submit{formData.id}</button>
                  
                </td>
              </tr>
              </>
            
                }
           
            </table> 
        </form>
        </div> 
    </>
  )
}

export default AddCategory

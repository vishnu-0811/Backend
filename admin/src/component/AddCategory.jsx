import React, { useState } from 'react'
import "../form.css"
import { useNavigate } from 'react-router-dom'

const AddCategory = () => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    category:""
    
  });
debugger
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
    console.log(formData)
    if( formData.category  )
      {console.log(formData)

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

  // const onFormSubmit = (ev) => {
  //   if(formData.category)
  //     {
  //       const form = new FormData();
  //       form.append("category",formData.category);

  //       fetch("http://localhost:4001/category", {
  //         method:"POST",
  //         body:form,
  //       })
  //       .then((res) => res.json())
  //       .then((data) => {
  //           setFormData(data.reverse());
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //     }
  //     navigate("/ViewCat");
  // };

  return (
    <>
      <div className="wrapper">
        <form action="" onSubmit={onFormSubmit}> 
            <table className="text-center">
              <tr>
                <td colSpan={2}>
                    <h3>Add Category</h3>
                </td>
              </tr>

            <tr>
              <td>Category</td>
      
              <td>
                <input type="text" name='category' onChange={handleInput} />
                {/* <select name="category" id="" onChange={handleInput} value={formData.category}>
                  <option value="">select</option>
                  <option value="Saree">Saree</option>
                  <option value="Religious Items">Religious Item</option>
                  <option value="Toys">Toys</option>
                  <option value="Home and Living">Home and Living</option>
                  <option value="Bags">Bags</option>
                  <option value="Pootery">Pottery</option>
                </select> */}
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

export default AddCategory

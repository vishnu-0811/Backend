import React, { useState } from 'react'
import "../prod.css"
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const navigate = useNavigate();
  const [formData,setFormData] =useState({
    subcategory:"",
    productname:"",
    price:"",
    description:"",
    image:"",
  });

  const handleImage = (ev) => {
    if(ev.target.files){
      setFormData({
        ...formData,
        image:ev.target.files[0],

      });
    }
  };

  const handleInput = (ev) => {
    const { name,value } = ev.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onFormSubmit = (ev) => {
    
    if(
      formData.subcategory && formData.productname && formData.price && formData.description && formData.image
    )
    {
      const form = new FormData();
      form.append("subcategory",formData.subcategory);
      form.append("productname",formData.productname);
      form.append("price",formData.price);
      form.append("description",formData.description);
      form.append("image",formData.image);

      fetch("http://localhost:4001/product", {
        method:"POST",
        body:form, 
      })
      .then((res) => res.json())
      .then((data) => {
        setFormData(data.reverse())
    })
    .catch((error) => {
      console.log(error);
    });
    }
    navigate("/View");
  };
  return (
    <>
        <div className='main'>
            <form action="" onSubmit={onFormSubmit}>
                <div className='input'>
                    <label htmlFor="">Sub Category</label>
                    <input type="text" name='subcategory'  onChange={handleInput}/>    
                </div>  

                  <div className='input'>
                    <label htmlFor="">Product Name</label>
                    <input type="text" name='productname' onChange={handleInput} />    
                </div>  

                  <div className='input'>
                    <label htmlFor="">Price</label>
                    <input type="text" name='price' onChange={handleInput} />    
                </div>  

                  <div className='input'>
                    <label htmlFor="">Description</label>
                    <input type="text" name='description' onChange={handleInput} />    
                </div>    

                <div className='input'>
                    <label htmlFor="">Image</label>
                    <input type="file" name='image' onChange={handleImage} />    
                </div>    

                <div>
                    <button className='bttn' type='submit' value='save'>Submit</button>
                </div>

            </form>    
        </div> 
    </>
  )
}

export default AddProduct

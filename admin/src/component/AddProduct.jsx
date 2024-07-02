import React, { useEffect, useState } from 'react'
import "../prod.css"
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const navigate = useNavigate();
  const [formData,setFormData] =useState({
    category: '',
    subcategory:"",
    productname:"",
    price:"",
    description:"",
    image:""
  });

  // const [items,setItems] = useState([]);
  const [categories,setCategories] = useState([])
  useEffect(() => {
      
    fetch("http://localhost:4001/category",{
        method:"GET",
    })
    .then((res) => res.json())
    .then((data) =>
        {
            console.log("first",data)
            setCategories(data)
           
        } )
    
    .catch((error) => console.log(error))
}, []); 

  const [subcategories,setSubcategories] = useState([])

  const fetchSubcategories = (categoryId) => {
    fetch(`http://localhost:4001/subcat/${categoryId}`)
      .then((res) => res.json())
      .then((data) => {
        setSubcategories(data);
      })
      .catch((error) => console.log(error));
  };


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
  
    if (name === "category") {
      fetchSubcategories(value)
    }
    
  };

  const onFormSubmit = (ev) => {
    ev.preventDefault();
    debugger;
    if(
     formData.category && formData.subcategory && formData.productname && formData.price && formData.description && formData.image)
    {
      const form = new FormData();
      form.append('category', formData.category);
      form.append("subcategory",formData.subcategory);
      form.append("productname",formData.productname);
      form.append("price",formData.price);
      form.append("description",formData.description);
      form.append("image",formData.image);
      console.log(formData)

      fetch("http://localhost:4001/product", {
        method:"POST",
        body:form, 
      })
      .then((res) => res.json())
      .then((data) => {
        setFormData(data)
        navigate("/View");
    })
    .catch((error) => {
      console.log(error);
    });
    }
  };

  return (
    <>
        <div className='main'>
            <form action="" onSubmit={onFormSubmit}>
          
              <div className="input">
                <label htmlFor="">Category</label>
                
                <select name='category' value={formData.category} id="" onChange={handleInput}>
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id} >{category.category}</option>
                ))}
                </select>
              </div>

              <div className="input">
                <label htmlFor="">Subcategory</label>
                
                <select name='subcategory' value={formData.subcategory} id="" onChange={handleInput}>
                  <option value="">select subcategories</option>
                {subcategories.map((subcategory) => (
                  <option key={subcategory._id} value={subcategory._id} > {subcategory.subcategory} </option>
                ))}
                </select>
              
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

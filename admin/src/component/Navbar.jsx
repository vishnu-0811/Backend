import React from 'react'
import { Link } from 'react-router-dom'
import '../nav.css';

const Navbar = () => {
  return (
    <div>
      <header>
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li> <Link to ="/AddCategory" > Add Category </Link> </li>
                    <li> <Link to ="/ViewCat" > View Category </Link> </li>
                    <li> <Link to ="/AddSubcategory" > Add Subcategory </Link> </li>
                    <li> <Link to="/ViewSubcat"> View Subcategory</Link></li>
                    <li> <Link to ="/AddProduct" > Add Product </Link> </li>
                    <li> <Link to ="/View"> View Product </Link> </li>
                    <li> <Link to ="/Login"> Login </Link> </li>
                </ul>
            </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar

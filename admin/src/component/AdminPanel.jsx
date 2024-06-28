import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const AdminPanel = () => {
  return (
   <>
   
   <div>
      <Navbar/>
      <h2>Welcome To Admin Panel</h2>
    </div>

    <div><Outlet/></div>
   </>
  )
}

export default AdminPanel

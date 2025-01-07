 import React from 'react'
 import Header from '../others/header'
 import CreateTask from '../others/CreateTask'
 import AllTask from '../others/AllTask'
 const AdminDashboard = () => {
   return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header/>
        <CreateTask/>
        <AllTask/>
     </div>
   )
 }
 
 export default AdminDashboard
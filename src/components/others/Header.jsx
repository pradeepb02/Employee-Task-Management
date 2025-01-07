import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'
import { LoggedInUserContext } from '../../context/LoggedInUserProvider'
const Header = () => {

  const {user,setUser}=useContext(UserContext);
  const {loggedInUser,setLoggedInUser}=useContext(LoggedInUserContext); 

  const currentUser=JSON.parse(localStorage.getItem('loggedInUser'));
  
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    // console.log(props.changeUser)
   setUser('')
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
         
        <h1 className='text-2xl font-medium text-left'>Hello<br/> <span className='font-semibold text-3xl'>{currentUser.role==='employee'?loggedInUser.firstName:'Admin'}👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
    
  )
}

export default Header
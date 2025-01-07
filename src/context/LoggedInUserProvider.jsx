import React, { createContext, useState } from 'react'

export const LoggedInUserContext=createContext();


const LoggedInUserProvider = ({children}) => {
  const[loggedInUser,setLoggedInUser]=useState('');

  return (
    <LoggedInUserContext.Provider value={{loggedInUser,setLoggedInUser}}> 
      {children}
      </LoggedInUserContext.Provider>
  )
}

export default LoggedInUserProvider
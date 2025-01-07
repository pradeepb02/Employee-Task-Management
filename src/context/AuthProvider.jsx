import React, { createContext, useState ,useEffect} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localstorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
 
  const [userdata,setUserData]=useState("")
  useEffect(() => {
  setLocalStorage()
  const {employees}=getLocalStorage();
  setUserData(employees); //fetch data from localstorage
  }, [])
  
  return (
    <div>
      <AuthContext.Provider value={[userdata,setUserData]}> 
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
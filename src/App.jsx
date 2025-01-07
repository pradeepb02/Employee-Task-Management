import { useState,useEffect  } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'
import { UserContext } from './context/UserProvider'
import { LoggedInUserContext } from './context/LoggedInUserProvider'

function App() { 

  const {user,setUser}=useContext(UserContext);
  const {loggedInUser,setLoggedInUser}=useContext(LoggedInUserContext);  //to get the data of logged in user
  const [userData,setUserData]=useContext(AuthContext);
  
 
  useEffect(() => {
    const currentUser=localStorage.getItem('loggedInUser');
    if(currentUser){
      const loggedInUser=JSON.parse(currentUser);
    setUser(loggedInUser.role);
    setLoggedInUser(loggedInUser.data);
    }
  }, [])


  const handleLogin = (email,password) => { //handle the inputs and validate with the local data
    if(email=="admin@me.com" && password=="123"){
      setUser("admin");
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))

    }
    else if(userData){
      const employee= userData.find((e)=>email==e.email&&password==e.password);
      if(employee){
        setUser("employee");
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data:employee})) //define the role of user for further ease
        setLoggedInUser(employee);
      }
    }
    else{
      alert("invalid credentials");
    }
  }
  
  return (
    <> 
    {/* render component based on the user input and state updation */}
      {!user?<Login handleLogin={handleLogin}/>:''}
      {user=='admin'?<AdminDashboard/>:user=="employee"?<EmployeeDashboard/>:null}
    </>
  )
}

export default App

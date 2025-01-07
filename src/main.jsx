import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import UserProvider from './context/UserProvider.jsx'
import LoggedInUserProvider from './context/LoggedInUserProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoggedInUserProvider>
      <UserProvider>
       <AuthProvider>
        <App />
       </AuthProvider>
      </UserProvider>
    </LoggedInUserProvider>
  </StrictMode>

)

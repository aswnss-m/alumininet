import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import "./Assets/App.css"
import { Routes , Route } from 'react-router-dom' 
import Landing from './Pages/Landing/Landing'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
function App() {
  // localStorage.setItem('token', '1234567890')
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Landing />}/>
        <Route path={'/register'} element={<Register />}/>
        <Route path={'/login'} element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App

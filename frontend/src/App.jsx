import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import "./Assets/App.css"
import { Routes , Route } from 'react-router-dom' 
import Landing from './Pages/Landing/Landing'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import BlogPage from './Pages/BlogPage/BlogPage'
function App() {
  // localStorage.setItem('token', '1234567890')
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Landing />}/>
        <Route path={'/register'} element={<Register />}/>
        <Route path={'/login'} element={<Login />}/>
        {/* Set the following routes to show only if logged in */}
        <Route path={'/home'} element={<Home />}/>
        <Route path={'/blog/:id'} element={<BlogPage />} />
      </Routes>
    </div>
  )
}

export default App

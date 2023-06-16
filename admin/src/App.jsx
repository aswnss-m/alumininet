import React, { useEffect,useState } from 'react'
import "./assets/App.css"
import Navbar from './components/Navbar/Navbar'
import { getPassport } from './Utils/passport'
import { Routes, Route,useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/login/Login'
function App() {
  const [passport, setPassport] = useState(false)
  const nav = useNavigate()
  useEffect(() => {
     setPassport(getPassport())
     nav('/')
  }, [sessionStorage.getItem('admintoken')])

  return (
    <div>
      {
        passport ? (
          <>
          <Navbar />
          <Home />  
          </>
        ) : (
          <Login />
        )
      }
    </div>
  )
}

export default App

import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import "./Assets/App.css"
import { Routes , Route } from 'react-router-dom' 
import Landing from './Pages/Landing/Landing'
function App() {
  // localStorage.setItem('token', '1234567890')
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Landing />}/>
      </Routes>
    </div>
  )
}

export default App

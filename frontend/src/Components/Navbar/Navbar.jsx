import React from 'react'
import logo from "./cap.png"
function Navbar() {
  return (
    <div>
      <div className="navLogo">
        <img src={logo} alt="cap icon" />
        <p>AluminiNet</p>
      </div>
    </div>
  )
}

export default Navbar

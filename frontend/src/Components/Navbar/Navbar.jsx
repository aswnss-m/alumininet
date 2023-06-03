import React from 'react'
import logo from "./cap.png"
import "./Navbar.css"
import CapeLogo from '../CapeLogo/CapeLogo'
// import passport from '../../Utils/passport'
function Navbar() {
    return (
        <div className='nav'>
            <div className="navLogo">
                <span className='alumininetLogo'>
                  <img src={logo}
                      alt="cap icon"/>
                  <p className='logoName inter-800'>AluminiNet</p>
                </span>
                <CapeLogo/>
            </div>
            <div className="navLinks">
                <span class="material-symbols-rounded">
                    description
                </span>
                <span class="material-symbols-rounded">
                    groups
                </span>
            </div>
            <div className="navButtons">
              <button className='secondaryButtton'>Join now</button>
              <button className='primaryButton'>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar

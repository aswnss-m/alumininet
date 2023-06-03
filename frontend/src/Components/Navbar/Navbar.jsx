import React, { useEffect, useState } from 'react';
import logo from "./cap.png";
import "./Navbar.css";
import CapeLogo from '../CapeLogo/CapeLogo';
import { setPassport, getPassport, removePassport } from '../../Utils/passport';

function Navbar() {
  // handle navbar change for sign in and signs out
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const passport = getPassport();
    setLoggedIn(passport);
  }, []);

  const handleSignIn = () => {
    setPassport(true);
     // reload the window
     window.location.reload()
  };

  const handleLogOut = () => {
    removePassport();
    setLoggedIn(false);
  };

  return (
    <div className='nav'>
      <div className="navLogo">
        <span className='alumininetLogo'>
          <img src={logo} alt="cap icon" />
          <p className='logoName inter-800'>AluminiNet</p>
        </span>
        <CapeLogo />
      </div>
      <div className="navLinks">
        <span className="material-symbols-rounded">
          description
        </span>
        <span className="material-symbols-rounded">
          groups
        </span>
      </div>
      {!loggedIn ? (
        <div className="navButtons">
          <button className='secondaryButtton'>Join now</button>
          <button className='primaryButton' onClick={handleSignIn}>Sign In</button>
        </div>
      ) : (
        <div className="navButtons">
          <span className="material-symbols-rounded">
            person
          </span>
          <button className='primaryButton' onClick={handleLogOut}>Log out</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;

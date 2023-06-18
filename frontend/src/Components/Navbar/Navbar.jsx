import React, { useEffect, useState } from 'react';
import logo from "./cap.png";
import "./Navbar.css";
import CapeLogo from '../CapeLogo/CapeLogo';
import { setPassport, getPassport, removePassport } from '../../Utils/passport';
import { Link } from 'react-router-dom';

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
      // reload the window

      removePassport();
      setLoggedIn(false);
      window.location.reload()
      nav("/")
  };

  return (
    <div className='nav'>
      <div className="navLogo">
        <Link to={'/'} style={{
          textDecoration : 'none',
          color : 'inherit'
        }}>
          <span className='alumininetLogo'>
            <img src={logo} alt="cap icon" />
            <p className='logoName inter-800'>AluminiNet</p>
          </span>
        </Link>
      </div>
        <CapeLogo />
      {!loggedIn ? (
        <div className="navButtons">
     
          <Link to={'/register'}><button className='secondaryButton'>Join now</button></Link>
          <Link to={'/login'}><button className='primaryButton'>Sign In</button></Link>
        </div>
      ) : (
        <div className="navButtons">
             <div className="navLinks">
          {/* <span className="material-symbols-rounded">
            description
          </span>
          <span className="material-symbols-rounded">
            groups
          </span> */}
        </div>
          <Link to={'/profile'}>
            <span className="material-symbols-rounded">
              person
            </span>
          </Link>
          <button className='primaryButton' onClick={handleLogOut}>Log out</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;

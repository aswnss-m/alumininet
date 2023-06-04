import React from 'react'
import "./Landing.css"
import banner from "./banner.png"

function Landing() {
  return (
    <div className='landingPageContainer'>
      <div className="landingPageContent">
        <h1 className='inter-400'>
        Welcome to College of Engineering,
        Pathanapuram ,Alumini Net
        </h1>
        <form className='form landingPageForm'>
            <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="formGroup">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter your password" />
            </div>
            <div className="formGroup landinPageButtonGroup">
                <button className='primaryButton'>Sign In</button>
                <button className='secondaryButton'>Register</button>
            </div>
            
        </form>
      </div>
      <div className="landingPageBanner">
        <img src={banner} alt="banner-img" />
      </div>
    </div>
  )
}

export default Landing

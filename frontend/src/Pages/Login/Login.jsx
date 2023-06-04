import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='loginContainer'>
      <form action="" className="loginForm form">
        <h1>Sign Up</h1>
        <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" />
        </div>
        <div className="formGroup">
            <button className='primaryButton'>Sign In</button>
        </div>
        <p>Don't have an account ? <Link to={'/register'}> Click here</Link></p>
      </form>
    </div>
  )
}

export default Login

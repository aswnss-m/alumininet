import React from 'react'
import "./Register.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [batch, setBatch] = useState("2023");
  const [branch, setBranch] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Your registration logic here
  }

  return (
    <div className='registerContainer'>
      <form onSubmit={handleRegister} className="form registerForm">
        <h1>Register</h1>
        <div className="formGroup">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="formGroup">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div className="formGroup">
          <label htmlFor="phone">Phone no:</label>
          <input type="tel" name="phone" id="phone" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="formGroup">
          <label htmlFor="branch">Branch</label>
          <input type="text" name="branch" id="branch" placeholder="Enter your branch" value={branch} onChange={(e) => setBranch(e.target.value)} />
        </div>
        <div className="formGroup">
          <label htmlFor="batch">Batch / Graduated Year</label>
          <input type="number" min="1900" max="2099" step="1" name="batch" id="batch" value={batch} onChange={(e) => setBatch(e.target.value)} />
        </div>

        {Number(batch) < new Date().getFullYear() && (
          <>
            <div className="formGroup">
              <label htmlFor="job">Job</label>
              <input type="text" name="job" id="job" placeholder="Enter your job" value={job} onChange={(e) => setJob(e.target.value)} />
            </div>
            <div className="formGroup">
              <label htmlFor="company">Company</label>
              <input type="text" name="company" id="company" placeholder="Enter your company" value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>
            <div className="formGroup">
              <label htmlFor="designation">Designation</label>
              <input type="text" name="designation" id="designation" placeholder="Enter your designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
            </div>
            <div className="formGroup">
              <label htmlFor="skills">Skills</label>
              <input type="text" name="skills" id="skills" placeholder="Enter your skills" value={skills} onChange={(e) => setSkills(e.target.value)} />
            </div>
            <div className="formGroup">
              <label htmlFor="interests">Interests</label>
              <input type="text" name="interests" id="interests" placeholder="Enter your interests" value={interests} onChange={(e) => setInterests(e.target.value)} />
            </div>
          </>
        )}

        <div className="formGroup registerButtonGroup">
          <button className='primaryButton' type="submit">Register</button>
        </div>
        <p>Already have an account? <Link to={'/login'}>Click here</Link></p>
      </form>
    </div>
  )
}

export default Register

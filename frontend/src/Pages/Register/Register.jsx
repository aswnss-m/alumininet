import React, {useEffect} from 'react'
import "./Register.css"
import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import {API_URL} from "../../../Constants/"

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


    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return
        }
        axios.post(`${API_URL}/register`, {
            name,
            email,
            password,
            batch,
            branch,
            number: phone,
            job,
            company
        }).then((res) => {
            console.log(res);
            alert("Registered successfully");
            window.location.href = '/login'
        }).catch((err) => {
            console.log(err);
            alert("Error in registering");
        })
    }

    return (
        <div className='registerContainer'>
            <form onSubmit={handleRegister}
                className="form registerForm">
                <h1>Register</h1>
                <div className="formGroup">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name"
                        value={name}
                        autoComplete='name'
                        onChange={
                            (e) => setName(e.target.value)
                        }/>
                </div>
                <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email"
                        value={email}
                        autoComplete='email'
                        onChange={
                            (e) => setEmail(e.target.value)
                        }/>
                </div>
                <div className="formGroup">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password"
                        value={password}
                        autoComplete='new-password'
                        onChange={
                            (e) => setPassword(e.target.value)
                        }/>
                </div>
                <div className="formGroup">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password"
                        value={confirmPassword}
                        autoComplete='new-password'
                        onChange={
                            (e) => setConfirmPassword(e.target.value)
                        }/>
                </div>
                <div className="formGroup">
                    <label htmlFor="phone">Phone no:</label>
                    <input type="tel" name="phone" id="phone" placeholder="Enter your phone number"
                        value={phone}
                        autoComplete='tel'
                        onChange={
                            (e) => setPhone(e.target.value)
                        }/>
                </div>
                <div className="formGroup">
                    <label htmlFor="branch">Branch</label>
                    <input type="text" name="branch" id="branch" placeholder="Enter your branch"
                        value={branch}
                        autoCorrect='on'
                        onChange={
                            (e) => setBranch(e.target.value)
                        }/>
                </div>
                <div className="formGroup">
                    <label htmlFor="batch">Batch / Graduated Year</label>
                    <input type="number" min="1900" max="2099" step="1" name="batch" id="batch"
                        value={batch}
                        onChange={
                            (e) => setBatch(e.target.value)
                        }/>
                </div>

                {
                Number(batch) < new Date().getFullYear() && (
                    <>
                        <div className="formGroup">
                            <label htmlFor="job">Job</label>
                            <input type="text" name="job" id="job" placeholder="Enter your job"
                                value={job}
                                onChange={
                                    (e) => setJob(e.target.value)
                                }/>
                        </div>
                        <div className="formGroup">
                            <label htmlFor="company">Company</label>
                            <input type="text" name="company" id="company" placeholder="Enter your company"
                                value={company}
                                onChange={
                                    (e) => setCompany(e.target.value)
                                }/>
                        </div>

                    </>
                )
            }

                <div className="formGroup registerButtonGroup">
                    <button className='primaryButton' type="submit">Register</button>
                </div>
                <p>Already have an account?
                    <Link to={'/login'}>Click here</Link>
                </p>
            </form>
        </div>
    )
}

export default Register

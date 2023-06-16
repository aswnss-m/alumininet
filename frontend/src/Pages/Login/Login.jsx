import React, {useState} from 'react'
import "./Login.css"
import {Link} from 'react-router-dom'
import axios from 'axios'
import {API_URL} from "../../../Constants/"
import {setPassport} from '../../Utils/passport'
import {useNavigate} from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate();

    const handeSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/login`, {email, password}).then((res) => {
            if (res.status === 200) {
                setPassport(res.data.token, res.data.userId);
                nav("/")
                window.location.reload();
            }
        }).catch((err) => {
            if (err.response.status === 401) {
                alert(err.response.data.message);
            }
        });
    };

    return (
        <div className='loginContainer'>
            <form onSubmit={handeSubmit}
                className="loginForm form">
                <h1>Sign Up</h1>
                <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email"
                        value={email}
                        autoComplete='email'
                        onChange={
                            (e) => {
                                setEmail(e.target.value)
                            }
                        }/>
                </div>
            <div className="formGroup">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter your password"
                    value={password}
                    autoComplete='current-password'
                    onChange={
                        (e) => {
                            setPassword(e.target.value)
                        }
                    }/>
            </div>
        <div className="formGroup">
            <button className='primaryButton'>Sign In</button>
        </div>
        <p>Don't have an account ?
            <Link to={'/register'}>
                Click here</Link>
        </p>
    </form>
</div>
    )
}

export default Login

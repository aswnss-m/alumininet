import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import axios from 'axios';
import { setPassport } from '../../Utils/passport';
import { API_URL } from '../../Constants';

function Login() {
  const nav = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_URL}/admin/login`, {
      username,
      password
    })
      .then(res => {
           
        if (res.status === 200) {
            setPassport(res.data.token, res.data.user);
            nav('/');   
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  

  return (
    <div className='loginContainer'>
      <h1>Login</h1>
      <form className="loginForm form">
        <div className="formGroup">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoComplete={'off'}
            id="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="formGroup">
          <button className='primaryButton' onClick={handleSubmit}>Login</button>
          <button value="clear" className='secondaryButton'>Clear</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

import React, {useState} from 'react'
import "./Landing.css"
import banner from "./banner.png"
import axios from 'axios';
import {API_URL} from "../../../Constants/"
import {setPassport} from '../../Utils/passport'
function Landing() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handeSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/login`, { email, password })
          .then((res) => {
            if (res.status === 200) {  // Add a check for res object existence
              setPassport(res.data.token, res.data.userId);
              window.location.reload();
              nav("/");
            }
          })
          .catch((err) => {
            if (err && err.response && err.response.status === 401) {  // Add checks for err and err.response objects
              alert(err.response.data.message);
            }
          });
      };
      
    return (
        <div className='landingPageContainer'>
            <div className="landingPageContent">
                <h1 className='inter-400'>
                    Welcome to College of Engineering,
                            Pathanapuram ,Alumini Net
                </h1>
                <form className='form landingPageForm' onSubmit={handeSubmit}>
                    <div className="formGroup">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email"
                            value={email}
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
                        onChange={
                            (e) => {
                                setPassword(e.target.value)
                            }
                        }/>
                </div>
            <div className="formGroup landinPageButtonGroup">
                <button className='primaryButton'>Sign In</button>
                <button className='secondaryButton' onClick={
                    ()=>{
                      window.location.href = "/register"
                    }
                }>Register</button>
            </div>

        </form>
    </div>
    <div className="landingPageBanner">
        <img src={banner}
            alt="banner-img"/>
    </div>
</div>
    )
}

export default Landing

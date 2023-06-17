import React, {useEffect, useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import "./Assets/App.css"
import {Routes, Route} from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import BlogPage from './Pages/BlogPage/BlogPage'
import NewsPage from './Pages/NewsPage/NewsPage'
import ProfilePage from './Pages/User/ProfilePage'
import UserPage from './Pages/User/UserPage'
import {getPassport} from './Utils/passport'
function App() {
    const [loggedIn, setLoggedIn] = useState(getPassport());
    useEffect(() => {
        setLoggedIn(getPassport());
    }, [])
    return (
        <div>
            <Navbar/>
            <Routes> 
                {/* Specific Routes */}
                {
              // If not logged in, show landing page, register page and login page
                !loggedIn ? <>
                    <Route path={'/'}
                        element={<Landing/>}/>
                    <Route path={'/register'}
                        element={<Register/>}/>
                    <Route path={'/login'}
                        element={<Login/>}/>
                </> : <>
                    <Route path={'/'}
                        element={<Home/>}/>
                    <Route path={'/blog/:id'}
                        element={<BlogPage/>}/>
                    <Route path={'/news/:id'}
                    element = {<NewsPage/>}/>
                    <Route path={'/profile'}
                        element={<ProfilePage/>}/>
                    <Route path={'/user/:id'}
                        element={<UserPage/>}/>
                    
                </>
            } 

            </Routes>
        </div>
    )
}

export default App

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
import {getPassport,removePassport} from './Utils/passport'
function App() {
    const [loggedIn, setLoggedIn] = useState(getPassport());
    const [id, setId] = useState(localStorage.getItem('userId'));
    useEffect( () => {
         setLoggedIn(getPassport());
         let userId = localStorage.getItem('userId');
         if(!userId){
            removePassport();
            setLoggedIn(false);
            }
    }, [])
    return (
        <div>
          <Navbar />
          <Routes>
            {/* Specific Routes */}
            {!loggedIn ? (
              <>
                <Route path={'/'} element={<Landing />} />
                <Route path={'/register'} element={<Register />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'*'} element={<Landing />} />
              </>
            ) : id ? ( // Check if id is present
            <>
                <Route path={'/'} element={<Home />} />
                <Route path={'/blog/:id'} element={<BlogPage />} />
                <Route path={'/news/:id'} element={<NewsPage />} />
                <Route path={'/profile'} element={<ProfilePage />} />
                <Route path={'/user/:id'} element={<UserPage />} />
              </>
            ) : (
                // Handle the case when id is not present
                <><Route path={'/register'} element={<Register />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'*'} element={<Landing />} />
                </>
            )}
          </Routes>
        </div>
      );
            }

export default App

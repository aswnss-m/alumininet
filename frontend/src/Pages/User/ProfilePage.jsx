import React, { useEffect } from 'react'
import axios from 'axios'
import {API_URL} from '../../../Constants/index.js'
import './ProfilePage.css'
import BlogCard from '../../Components/BlogCard/BlogCard'
import StartPost from '../../Components/StartPost/StartPost'

function ProfilePage() {
  const [profile, setProfile] = React.useState({})
  const [blogs, setBlogs] = React.useState([]) // Added state for blogs
  const [id, setId] = React.useState('');
  useEffect(() => {
    setId(localStorage.getItem('userId'));
    axios.get(`${API_URL}/users/profile?id=${id}`)
      .then(res => {
        setProfile(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);
  
  return (
    <div className='profilePageContainer'>
      <div className="profilePageCard">
         <div className="profilePageCardDP">
          <img src={`https://unsplash.it/200?image=${id.slice(0,2)}`} alt="" />
         </div>
          <div className="profilePageCardInfo">
            <h2>{profile.name}</h2>
            <h3>{profile.job}</h3>
            <h4>{profile.company}</h4>
         </div>
    </div>

    <div className="profilePageCard">
      <StartPost />
    </div>
    <div className="profilePageCard">
      <h1><u>Your blogs</u></h1>
    </div>
    </div>
  )
}

export default ProfilePage

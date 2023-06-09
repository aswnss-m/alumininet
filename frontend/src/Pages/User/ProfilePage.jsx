import React from 'react'
import './ProfilePage.css'
import BlogCard from '../../Components/BlogCard/BlogCard'
import StartPost from '../../Components/StartPost/StartPost'

function ProfilePage() {
  return (
    <div className='profilePageContainer'>
      <div className="profilePageCard">
         <div className="profilePageCardDP">
          <img src="https://unsplash.it/200" alt="" />
         </div>
          <div className="profilePageCardInfo">
            <h2>Name</h2>
            <h3>Designation</h3>
            <h4>Company</h4>
         </div>
    </div>

    <div className="profilePageCard">
      <StartPost />
    </div>
    <div className="profilePageCard">
      <h1><u>Your blogs</u></h1>
    </div>
    <div className="profilePageCard">
      <BlogCard />
    </div>
    <div className="profilePageCard">
      <BlogCard />
    </div>
    <div className="profilePageCard">
      <BlogCard />
    </div>
    <div className="profilePageCard">
      <BlogCard />
    </div>
    </div>
  )
}

export default ProfilePage

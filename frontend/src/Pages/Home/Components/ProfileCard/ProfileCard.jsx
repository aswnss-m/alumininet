import React from 'react'
import "./ProfileCard.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {API_URL} from "/Constants/index.js"
function ProfileCard({profile, id}) {
  const navigate = useNavigate();
  return (
    <div className='profileCard' onClick={()=>{navigate('/profile')}}>
      <span className="profileCardBanner"></span>
      <img src={`${API_URL}/users/profile/${id}`} alt="" className="profileCardDp" />
      <div className="profileCardDetails">
        <h3 className="inter-500 profileCardName">{profile.name}</h3>
        <p className="profileCardJob inter-300">{profile.job}</p>
        <p className="profileCardCompany inter-300">{profile.company}</p>
      </div>
      <span className="profileCardBreak"></span>
      <div className="profileCardDetails2">
        <p className="profileCardBatch inter-700">
          {profile.type ? "Alumini" : "Student"}
        </p>
        {/* <p className="PrfileCardBlogNo">No of Posts</p> */}
      </div>
    </div>
  )
}

export default ProfileCard

import React from 'react'
import "./ProfileCard.css";

function ProfileCard() {
  return (
    <div className='profileCard'>
      <span className="profileCardBanner"></span>
      <img src="https://unsplash.it/300" alt="" className="profileCardDp" />
      <div className="profileCardDetails">
        <h3 className="inter-500 profileCardName">Aswin Lal M</h3>
        <p className="profileCardJob inter-300">Design Lead</p>
        <p className="profileCardCompany inter-300">IEEE RAS Kerala Chapter</p>
      </div>
      <span className="profileCardBreak"></span>
      <div className="profileCardDetails2">
        <p className="profileCardBatch inter-700">Alumini - 1990</p>
        <p className="PrfileCardBlogNo">No of Posts - 10</p>
      </div>
    </div>
  )
}

export default ProfileCard

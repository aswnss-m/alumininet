import React from 'react'
import ProfileCard from "./Components/ProfileCard/ProfileCard";
// import BlogCard from "./Components/BlogCard/BlogCard";
// import EventCard from './Components/EventCard/EventCard';
import "./Home.css";
// import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='homeContainer'>
      <div className="profileSection">
        <ProfileCard />
      </div>
      <div className="blogSection"></div>
      <div className="eventSection"></div>
    </div>
  )
}

export default Home

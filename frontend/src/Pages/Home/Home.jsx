import React from 'react'
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import BlogCard from "./Components/BlogCard/BlogCard";
import EventCard from './Components/EventCard/EventCard';
import NewsCard from './Components/NewsCard/NewsCard';
import "./Home.css";
import NewsSideCard from './Components/EventCard/NewsSideCard';
// import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='homeContainer'>
      <div className="profileSection">
        <ProfileCard />
      </div>
      <div className="blogSection">
        <NewsCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="eventSection">
        <EventCard />
        <NewsSideCard />
      </div>
    </div>
  )
}

export default Home

import React, { useEffect, useState } from 'react';
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import BlogCard from "../../Components/BlogCard/BlogCard";
import EventCard from './Components/EventCard/EventCard';
import NewsCard from './Components/NewsCard/NewsCard';
import StartPost from '../../Components/StartPost/StartPost';
import NewsSideCard from './Components/EventCard/NewsSideCard';
import { API_URL } from '../../../Constants/index.js'; // Corrected import path
import axios from 'axios';
import "./Home.css"
function Home() {
  const [blogs, setBlogs] = useState([]);
  const [profile, setProfile] = React.useState({})
  React.useEffect(() => {
    const id = localStorage.getItem('userId');
    axios.get(`${API_URL}/users/profile?id=${id}`)
      .then(res => {
        setProfile(res.data);
         ;
      })
      .catch(err => {
         ;
      });
  }, [localStorage.getItem('userId')]);

  useEffect(() => {
    axios.get(`${API_URL}/blog/all`)
      .then(res => {
        setBlogs(res.data);
         
      })
      .catch(err => {
         ;
      });
  }, []);

  return (
    <div className='homeContainer'>
      <div className="profileSection">
        <ProfileCard profile={profile}/>
      </div>
      <div className="blogSection">
        {profile.type&&<StartPost />}
        {/* <NewsCard /> */}
        {blogs.map(blog => (
          <BlogCard key={blog._id} content={blog.content} author={blog.author} id = {blog._id}/> // Added key prop
        ))}
      </div>
      <div className="eventSection">
        <EventCard />
        <NewsSideCard />
      </div>
    </div>
  );
}

export default Home;

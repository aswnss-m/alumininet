import React, {useEffect} from 'react'
import axios from 'axios'
import {API_URL} from '../../../Constants/index.js'
import './ProfilePage.css'
import BlogCard from '../../Components/BlogCard/BlogCard'
import StartPost from '../../Components/StartPost/StartPost'

function ProfilePage() {
    const [profile, setProfile] = React.useState({})
    const [blogs, setBlogs] = React.useState([]) // Added state for blogs
    const [allblogs, setAllBlogs] = React.useState([]) // Added state for blogs

    const [id, setId] = React.useState('');
    useEffect(() => {
        setId(localStorage.getItem('userId'));
        axios.get(`${API_URL}/users/profile?id=${id}`).then(res => {
            setProfile(res.data);
             ;
        }).catch(err => {
             ;
        });
    }, [id]);
    useEffect(() => {
      if (profile.type) {
        axios.get(`${API_URL}/blog/user/${id}`)
          .then(res => {
            setBlogs(res.data);
          })
          .catch(err => {
             ;
          });
      } else {
        axios.get(`${API_URL}/blog/all`)
          .then(res => {
            setAllBlogs(res.data);
          })
          .catch(err => {
             ;
          });
      }
    }, [id, profile.type]);
    

    return (
        <div className='profilePageContainer'>
            <div className="profilePageCard">
                <div className="profilePageCardDP">
                    <img src={`https://unsplash.it/200`}
                        alt=""/>
                </div>
                <div className="profilePageCardInfo">
                    <h2>{
                        profile.name
                    }</h2>
                    {
                    profile.type ? (
                        <>
                            <h3>{
                                profile.job
                            }</h3>
                            <h4>{
                                profile.company
                            }</h4>
                        </>
                    ) : (
                        <>
                            <h3>{
                                profile.batch
                            }</h3>
                            <h4>{
                                profile.branch
                            }</h4>
                        </>
                    )
                } </div>
            </div>

           {profile.type?(<>
              <div className="profilePageCard">
                  <StartPost/>
              </div>
              <div className="profileBlogCard">
                  <h4>
                      <u>Your blogs</u>
                  </h4>
                  {
                  blogs.map(blog => (
                      <BlogCard key={
                              blog._id
                          }
                          content={
                              blog.content
                          }
                          author={
                              blog.author
                          }
                          id={
                              blog._id
                          }/> // Added key prop
                  ))
              } </div>
           </>):(
            <>
            <div className="profileBlogCard">
                  <h1>
                      <u>Blogs to read</u>
                  </h1>
                  {
                  allblogs.map(blog => (
                      <BlogCard key={
                              blog._id
                          }
                          content={
                              blog.content
                          }
                          author={
                              blog.author
                          }
                          id={
                              blog._id
                          }/> // Added key prop
                  ))
              } </div>
            </>
           )}
        </div>
    )
}

export default ProfilePage

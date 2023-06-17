import React,{useState,useEffect}from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../Constants';
import BlogCard from '../../Components/BlogCard/BlogCard';
import axios from 'axios';

function UserPage() {
    const { id } = useParams();
    const [profile, setProfile] = useState({});
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        axios.get(`${API_URL}/alumini/${id}`).then(res => {
            setProfile(res.data);
        }).catch(err => {
            console.log(err);
        });
        // get blogs by the user
        axios.get(`${API_URL}/blog/user/${id}`).then(res => {
            setBlogs(res.data);
        }
        ).catch(err => {
            console.log(err);
        }
        );
    }, [id]);


  return (
    <><div className='profilePageContainer'>
      <div className="profilePageCard">
        <div className="profilePageCardDP">
          <img src={`https://unsplash.it/200`} alt="" />
        </div>
        <div className="profilePageCardInfo">
          <h2>{profile.name}</h2>
          <h3>{profile.job}</h3>
          <h4>{profile.company}</h4>
        </div>
      </div>
      <div className="profileCardContact">
          <div className="contactInfo">
            <p>Batch</p>
            <p>{profile.batch}</p>
          </div>
          <div className="contactInfo">
            <p>Branch</p>
            <p>{profile.branch}</p>
          </div>
          <div className="contactInfo">
            <p>Address</p>
            <p>{profile.email}</p>
          </div>
          <div className="contactInfo">
            <p>Phone</p>
            <p>{profile.number}</p>
          </div>
      </div>
    </div>
    <div className="blogContainer">
      <p className='inter-600'>Blogs</p>
      <div className="blogCardContainer">
        {blogs.map((blog) => { 
          return <BlogCard key={blog._id} content={blog.content} author={blog.author} id = {blog._id}/>
        })}
      </div>
    </div>
    </>

  );
}

export default UserPage;

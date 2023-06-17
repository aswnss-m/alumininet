import React from 'react'
import ReactMarkdown from 'react-markdown'
import "./BlogPage.css"
import { useParams } from 'react-router-dom';
import axios from 'axios'
import {API_URL} from "../../../Constants"
import { useEffect } from 'react';

function BlogPage() {
    const {id} = useParams();
    const [user,setUser] = React.useState({});
    const [blog, setBlog] = React.useState({});
    useEffect(() => {
        axios.get(`${API_URL}/blog/${id}`).then(res => {
            setBlog(res.data);
            axios.get(`${API_URL}/users/author/${res.data.author}`).then(res => {
                setUser(res.data);
            }
            ).catch(err => {
                 ;
            }
            );
        }).catch(err => {
             ;
        });
    }, [id]);

  return (
    <div className='blogPageContainer'>
        <div className="blogPage">
            <div className="blogWriterHeader">
                <div className="writerProfilePic">
                    <img src={`${API_URL}/users/profile/${user.userid}`} alt="" className='profilePicuture'/>
                </div>
                    <span>
                        <h3>{user.name}</h3>
                        <h5>{user.job}</h5>
                    </span>
            </div>
            <ReactMarkdown children={blog.content}  />
        </div>
    </div>
  )
}

export default BlogPage

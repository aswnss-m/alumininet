import React, { useEffect } from 'react'
import "./BlogCard.css";
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import { API_URL } from '../../../Constants';
import axios from 'axios';

function BlogCard({content,author,id}) {
  const [name, setName] = React.useState('');
  const [job, setJob] = React.useState('');
  const [userid, setUserid] = React.useState('');
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`${API_URL}/users/author/${author}`).then(res => {
      setName(res.data.name);
      setJob(res.data.job);
      setUserid(res.data.userid);
    }).catch(err => {
       ;
    });
  }, [author]);

    return (
        <div className='blogCard'>
                <div className="blogHeaderImage">
                  <img src="https://unsplash.it/100" alt=""/>
                </div>
                <div className="blogHeaderDetails">
                  <p className="inter-600">{name}</p>
                  <p className="inter-300">{job}</p>
                </div>
            <div className="blogContent">
              <ReactMarkdown children={content.slice(0,70)+"..."}/>
            </div>
                <button className='blogViewUser secondaryButton'
                  onClick={()=>{
                    navigate(`/user/${userid}`)
                  }
                }
                >View User</button>
                <button className='blogReadMore primaryButton' onClick={()=>{
                  navigate(`/blog/${id}`)
                }}>read more</button>
        </div>
    )
}

export default BlogCard

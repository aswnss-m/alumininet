import React, {useState} from 'react'
import axios  from 'axios'
import {API_URL} from "../../../Constants/"

import "./StartPost.css"
function StartPost() {
  const [row, setRow] = useState(1)
  const [post, setPost] = useState('')
  const userId = localStorage.getItem('userId')
  const handlePost = () => {
    axios.post(`${API_URL}/blog/add`, {
      userId,
      content: post
    }).then(res => {
       
      window.location.reload()
      setPost('')

    }).catch(err => {
       
    }
    )
  }
  return (
    <div className='startPost'>
      <p className='postBox'>Write a Post</p>
      <textarea name="postBox" id="" cols="30" rows={row} value={post} onFocus={()=>{
        setRow(10)
      }} onBlur={()=>{
        if(post.length === 0){
          setRow(1)
        }
      }}
      onChange={(e)=>{
        setPost(e.target.value)
      }}></textarea>
      <button className="primaryButton" onClick={()=>{
        handlePost()
      }}>Post</button>
    </div>
  )
}

export default StartPost

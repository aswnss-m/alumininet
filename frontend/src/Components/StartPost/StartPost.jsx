import React, {useState} from 'react'
import "./StartPost.css"
function StartPost() {
  const [row, setRow] = useState(1)
  const [post, setPost] = useState('')
  return (
    <div className='startPost'>
      <p className='postBox'>Write a Post</p>
      <textarea name="postBox" id="" cols="30" rows={row} onFocus={()=>{
        setRow(10)
      }} onBlur={()=>{
        if(post.length === 0){
          setRow(1)
        }
      }}
      onChange={(e)=>{
        setPost(e.target.value)
      }}></textarea>
      <button className="primaryButton">Post</button>
    </div>
  )
}

export default StartPost

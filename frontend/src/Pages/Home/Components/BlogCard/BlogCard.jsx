import React from 'react'
import "./BlogCard.css";

function BlogCard() {
    return (
        <div className='blogCard'>
                <div className="blogHeaderImage">
                  <img src="https://unsplash.it/100" alt=""/>
                </div>
                <div className="blogHeaderDetails">
                  <p className="inter-600">Aswin Lal</p>
                  <p className="inter-300">Design Lead</p>
                </div>
            <div className="blogContent">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, eius reiciendis esse hic aliquid deleniti sunt quas odit sapiente! Illo ipsa aliquid ullam a aut, error ducimus quaerat natus id?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, eius reiciendis esse hic aliquid deleniti sunt quas odit sapiente! Illo ipsa aliquid ullam a aut, error ducimus quaerat natus id?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, eius reiciendis esse hic aliquid deleniti sunt quas odit sapiente! Illo ipsa aliquid ullam a aut, error ducimus quaerat natus id?

              </p>
            </div>
                <button className='blogReadMore'>read more</button>
                <button className='blogViewUser'>View User</button>
        </div>
    )
}

export default BlogCard

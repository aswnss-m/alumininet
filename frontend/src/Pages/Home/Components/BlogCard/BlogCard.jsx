import React from 'react'
import "./BlogCard.css";
import ReactMarkdown from 'react-markdown'

function BlogCard() {
  const markdown = `
  ## This is a header
  And this is a paragraph

`
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
              <ReactMarkdown children={markdown}/>
            </div>
                <button className='blogViewUser secondaryButton'>View User</button>
                <button className='blogReadMore primaryButton'>read more</button>
        </div>
    )
}

export default BlogCard

import React from 'react'
import "./NewsCard.css"
import ReactMarkdown from 'react-markdown'
function NewsCard() {
    const newspost = "# This is a header"
    const newscontent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur dignissimos officiis vero ipsum corrupti ad blanditiis dicta, soluta dolores maxime asperiores harum ab officia, exercitationem accusantium praesentium voluptas repellat delectus."
  return (
    <div className='newsCard'>
        <ReactMarkdown className='markdown'>
            {newspost}
            {/* {newscontent} */}
        </ReactMarkdown>
        <ReactMarkdown className='markdown'>
            {newscontent}
        </ReactMarkdown>
        <button className='primaryButton'>view news</button>
    </div>
  )
}

export default NewsCard

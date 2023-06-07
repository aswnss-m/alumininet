import React from 'react'
import {Link} from 'react-router-dom'

function NewsSideCard() {
  return (
    <div className='eventCardContainer'>
      <p className="inter-800">Latest News</p>
        <div className="eventListing">
      <Link to={'#'} style={{
        textDecoration: 'none',
      }}>
          <p className="inter-800 eventListingTitle">NRI Admissions Started</p>
      </Link>
          <p className="inter-500 eventListingDate">posted on date</p>
        </div>
    
    </div>
  )
}

export default NewsSideCard

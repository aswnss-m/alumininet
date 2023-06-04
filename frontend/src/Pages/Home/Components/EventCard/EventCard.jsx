import React from 'react'
import {Link} from 'react-router-dom'
import "./EventCard.css";

function EventCard() {
  return (
    <div className='eventCardContainer'>
      <p className="inter-800">Events</p>
        <div className="eventListing">
      <Link to={'#'} style={{
        textDecoration: 'none',
      }}>
          <p className="inter-800 eventListingTitle">Alumini Meet - 10/10/10</p>
      </Link>
          <p className="inter-500 eventListingDate">posted on date</p>
        </div>
    
    </div>
  )
}

export default EventCard

import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import "./EventCard.css";
import { API_URL } from '../../../../../Constants';
import axios from 'axios';
function EventCard() {
const [events , setEvents] = useState([])
useEffect(() => {
  axios.get(`${API_URL}/admin/all/events`).then((res) => {
      console.log(res.data);
      setEvents(res.data);
      })
      .catch((err) => {
          console.log(err);
      });
  }, []);

  return (
    <div className='eventCardContainer'>
      <p className="inter-800">Events</p>
        {events.map((event)=>(<div className="eventListing" key={event._id}>
      <span style={{
        textDecoration: 'none',
      }} key={event._id}>
          <p className="inter-800 eventListingTitle">{event.title}</p>
          <p className="inter-500">{event.description}</p>
      </span>
          <p className="inter-500 eventListingDate">{event.date}</p>
        </div>))}
    
    </div>
  )
}

export default EventCard

import React, { useEffect, useState } from 'react';
import './Forms.css';
import axios from 'axios';
import { API_URL } from '../../../../Constants';

function Event() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [time, setTime] = useState('');
  const [isEventFocused, setIsEventFocused] = useState(false);
  const [events, setEvents] = useState([]);

  // Fetch all events from the database   
  useEffect(() => {
    axios.get(`${API_URL}/admin/all/events`).then((res) => {
        setEvents(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
// Add Event to the database
  const handleSubmit = (e) => {
    e.preventDefault();
    // Get the input values from stateful variables
    console.log(title, description, date, venue, time);
    const formattedDate = new Date(date).toLocaleDateString(); // Convert date to ISO 8601 format
    axios
      .post(`${API_URL}/admin/add/event`, {
        title,
        description,
        date: formattedDate,
        venue,
        time,
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    // Reset the form
    setTitle('');
    setDescription('');
    setDate('');
    setVenue('');
    setTime('');
  };

//   Delete Event
const handleDelete = (id)=>{
    axios.delete(`${API_URL}/admin/delete/event?id=${id}`).then((res)=>{
      window.location.reload();
    }
    ).catch((err)=>{
        console.log(err);
    }
    )
}
  const handleEventFocus = () => {
    setIsEventFocused(true);
  };


  return (
    <>
      <div className="form">
        <div className="formGroup">
          <label htmlFor="title">Event Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={handleEventFocus}
          />
        </div>
        {isEventFocused && (
          <>
            <div className="formGroup">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="venue">Venue</label>
              <input
                type="text"
                name="venue"
                id="venue"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
              />
            </div>
          </>
        )}
        {isEventFocused && (
          <button className="primaryButton" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
      <div className="eventCards">
        {events.map((event) => (
        <div className="eventCard" key={event._id}>
          <div className="eventTitle">{event.title}</div>
          <div className="eventDescription">
            {event.description}
            </div>
          <div className="eventDate">
            {event.date} | {event.time}
          </div>
          <div className="eventVenue">
            {event.venue}
          </div>
          <div className="eventAction">
            <button className='primaryButton' onClick={()=>{handleDelete(event._id)}}>
              <span className='material-symbols-outlined'>delete</span> Delete
            </button>
          </div>
        </div>
        ))}
      </div>
    </>
  );
}

export default Event;

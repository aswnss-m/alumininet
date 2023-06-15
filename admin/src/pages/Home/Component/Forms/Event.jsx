import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
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
        console.log(res.data);
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
        <div className="eventCard">
          <div className="eventTitle">Something</div>
          <div className="eventDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illum modi corrupti veritatis reprehenderit eaque quia tempore earum optio distinctio adipisci quidem libero ipsum debitis quas, pariatur vel rerum repudiandae.
          </div>
          <div className="eventDate">
            21/23/2324 | 12:00 PM
          </div>
          <div className="eventVenue">
            Sree Chitra Thirunal College of Engineering
          </div>
          <div className="eventAuthor">
            Gopi
          </div>
          <div className="eventAction">
            <button className='primaryButton'>
              <span className='material-symbols-outlined'>delete</span> Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;

import React, { useEffect, useState } from 'react';
import './Forms.css';
import axios from 'axios';
import { API_URL } from '../../../../Constants';

function News() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [isEventFocused, setIsEventFocused] = useState(false);
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios.get(`${API_URL}/admin/all/news`).then((res) => {
        setNews(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    
  const handleSubmit = (e) => {
    e.preventDefault();
    // Get the input values from stateful variables
    const formattedDate = new Date(date).toLocaleDateString(); // Convert date to ISO 8601 format
    axios
      .post(`${API_URL}/admin/add/news`, {
        title,
        description,
        date: formattedDate,
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
  };

  const handleEventFocus = () => {
    setIsEventFocused(true);
  };
//   Delete News
const handleDelete = (id)=>{
    axios.delete(`${API_URL}/admin/delete/news?id=${id}`).then((res)=>{
        console.log(res.data);
    }
    ).catch((err)=>{
        console.log(err);
    }
    )
}

  return (
    <>
      <div className="form">
        <div className="formGroup">
          <label htmlFor="title">News Title</label>
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
          </>
        )}
        {isEventFocused && (
          <button className="primaryButton" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
      <div className="eventCards">
        {news.map((News) => (
        <div className="eventCard" key={News._id}>
          <div className="eventTitle">{News.title}</div>
          <div className="eventDescription">
            {News.description}
            </div>
          <div className="eventDate">
            {News.date} | {News.time}
          </div>
          <div className="eventAction" onClick={()=>{handleDelete(News._id)}}>
            <button className='primaryButton'>
              <span className='material-symbols-outlined'>delete</span> Delete
            </button>
          </div>
        </div>
        ))}
      </div>
    </>
  );
}

export default News;

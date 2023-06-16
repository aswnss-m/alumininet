import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { API_URL } from '../../../../../Constants';

function NewsSideCard() {
  const [news , setNews] = useState([])
  useEffect(() => {
    axios.get(`${API_URL}/admin/all/news`).then((res) => {
        setNews(res.data);
        })
        .catch((err) => {
             ;
        });
    }, []);
  return (
    <div className='eventCardContainer'>
      <p className="inter-800">Latest News</p>
        {news.map((News)=>(<div className="eventListing" key={News._id}>
          <p className="inter-800 eventListingTitle">{News.title}</p>
          <p className="inter-400">{News.description}</p>
          <p className="inter-200 eventListingDate">posted : {News.date}</p>
        </div>
      ))}
    
    </div>
  )
}

export default NewsSideCard

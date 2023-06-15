import React from 'react'
import "./Home.css"
import Student from './Component/Forms/Student'
import MenuBar from '../../components/MenuBar/MenuBar'
import {Routes,Route} from 'react-router-dom'
import Alumini from './Component/Forms/Alumini'
import Event from './Component/Forms/Event'
import News from './Component/Forms/News'
function Home() {
  return (
    <div className='homeContainer'>
      <MenuBar />
      <div className="homeContent">
        <Routes>
          <Route path='/' element={<Student />} />
          < Route path='/alumini' element={<Alumini />} />
          < Route path='/events' element={<Event />} />
          < Route path='/news' element={<News />} />
        </Routes>
      </div>
    </div>
  )
}

export default Home

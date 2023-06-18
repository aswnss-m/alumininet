import React from 'react'
import "./MenuBar.css"
import { useNavigate } from 'react-router-dom'

function MenuBar() {
  const nav  = useNavigate()
  return (
    <div className='menuBarContainer'>
        <div className="menuBar">
            <div className="menuLink" onClick={
              () => {
                nav('/')
              }
            }>
              <span className='material-symbols-outlined'>school</span> <span className="menuLinkCaption">Students</span>
              
            </div>
            <div className="menuLink" onClick={
              () => {
                nav('/alumini')
              }
            }>
              <span className='material-symbols-outlined'>work</span> <span className="menuLinkCaption">Alumini</span>
            </div>
            <div className="menuLink" onClick={
              () => {
                nav('/events')
              }
            }>
              <span className='material-symbols-outlined'>event</span> <span className="menuLinkCaption">Events</span>
            </div>
            <div className="menuLink" onClick={
              () => {
                nav('/news')
              }
            }>
              <span className='material-symbols-outlined'>news</span> <span className="menuLinkCaption">News</span>
            </div>
            <div className="menuLink" onClick={
              () => {
                nav('/admin')
              }
            }>
              <span className='material-symbols-outlined'>shield_person</span> <span className="menuLinkCaption">Admin</span>
            </div>
            <div className="menuLink" onClick={
              () => {
                nav('/staffs')
              }
            }>
              <span className='material-symbols-outlined'>badge</span> <span className="menuLinkCaption">Staff</span>
            </div>
        </div>
      
    </div>
  )
}

export default MenuBar

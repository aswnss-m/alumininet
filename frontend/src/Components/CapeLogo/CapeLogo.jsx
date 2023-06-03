import React from 'react'
import "./CapeLogo.css"
import capelogo from "../../Assets/cape.png"
function CapeLogo() {
  return (
    <div className='capeLogo'>
        <img src={capelogo} alt="cape logo" />
        <div className="capeLogoText">
            <p className='inter-500'>College of Engineering,Pathanapuram</p>
            <p className='inter-200'>Under Cape | Govt of Kerala</p>
        </div>
    </div>
  )
}

export default CapeLogo

import React from 'react'
import resume from '../../assets/resume.png'
import './Service.css'
import Navbar from '../../components/Navbar'
const Service = () => {
  return (
    <div>
      <Navbar/>
      <h2 className='text-center tpurple'>Service</h2>
      <div className="container">
        <h5>My-resume</h5>
        <div className="row">
          <div className="col-auto mx-auto py-5">
            <div className="resume">
            <img src={resume} alt="" />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service

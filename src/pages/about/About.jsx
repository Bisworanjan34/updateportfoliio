import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './About.css'
import Navbar from '../../components/Navbar'
const About = () => {
  return (
    <div>
      <Navbar/>
      <h5 className='about-title py-4 text-center'>About me</h5>
      <div className="container about-cont">
        <div className="row">
            <div className="col-5 d-flex ms-3 gap-3  ">
               <Link to={'details'}> <button className='nested-p'>Details</button></Link>
               <Link to={'experience'}><button className='nested-p'>Experience</button></Link> 
               <Link to={'projects'}> <button className='nested-p'>Projects</button></Link>
               <Link to={'education'}> <button className='nested-p'>Education</button></Link>
            </div>
        </div>
        <div className="row outlet-about">
            <div className="col-12 p-3 mx-auto">
                   
                    <Outlet/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About

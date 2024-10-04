import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faUserCircle, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import './Contact.css'
import Navbar from '../../../components/Navbar';
const Contact = () => {
  return (
    <div className='contact-main'>
      <Navbar/>
     <div className="container contact-div">
      <div className="row my-5 pt-3 text-center align-items-center">
        <div className="col-auto col-lg-4 fw-bold ">
        <p className='display-2 tpurple'><FontAwesomeIcon icon={faUserCircle}/></p>
        <p className='tpurple'>contact no: 7978092266</p>
          
        </div>
        <div className="col-auto col-lg-4 fw-bold">
         <p className='display-2 tpurple'> <FontAwesomeIcon icon={faAt} /></p>
          <p className='tpurple'>gmail: bisworanjan34@gmail.com</p>
        </div>
        <div className="col-auto col-lg-4 fw-bold">
       <p className='display-2 tpurple'> <FontAwesomeIcon icon={faWhatsapp}/></p>
        <p className='tpurple'>contact no: 8917377258</p>
        </div>
      </div>
     </div>
     <h5 className='text-center'>Country India</h5>
     <p className='text-center'>Conditions of Use & 
         Privacy NoticeInterest-Based Ads</p>
    <p className='text-center'> © 1996-2024,Profile.com, Inc.</p>
    </div>
  )
}

export default Contact

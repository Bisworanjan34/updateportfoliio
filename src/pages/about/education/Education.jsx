import React from 'react'
import './Education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
const Education = () => {
  return (
    <div>
       <div className='education-div tpurple'>
      <h5 className='text-center '>Education<FontAwesomeIcon icon={faBook} className='ms-2'></FontAwesomeIcon></h5>
      <h5 className='twht'>Qualifications</h5>
      <div className=" container educations">
        <div className="row">
          <div className="col-auto">
      <dl>
        <dt>Btech-degree</dt>
        <dd><h5> Mechanical engineering</h5></dd>
        <dd>sophitorium engineering college,khorda</dd>
        <dd>year of pass out : 2024</dd>
      </dl>
      </div>
      <div className="col-auto">
      <dl>
        <dt>12th CHSE</dt>
        <dd><h5>Sceience</h5></dd>
        <dd>Ratanpur science college</dd>
        <dd>year of pass out : 2017</dd>
      </dl>
      </div>
      <div className="col-auto">
      <dl>
        <dt>10th BSE </dt>
        <dd>Birabhadra bidyapitha bangurigaon</dd>
        <dd>year of pass out 2015</dd>
      </dl>
      </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Education

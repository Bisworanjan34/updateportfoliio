import React from 'react'
import './Projectitem.css'
const Projectitem = ({p}) => {
    let {title,image,bgimg}=p
   
  
  return (
    <div>
        <div className="container">
            <div className="project-d rounded p-3 mb-5 " style={{backgroundImage:bgimg}}>
                <div className=" p-img ">
                    <img src={image}alt=""  className=' object-fit-cover rounded p-i'/>
                </div>
                <div className="p-title ">
                    <p className='mt-2 text-center text-white'>{title}</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Projectitem

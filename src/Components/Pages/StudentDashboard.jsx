import React from 'react'
import '../../styles/css/StudentDashboard.css'
import cardreserve from '../../styles/images/cardreserve.png'
import { Link } from 'react-router-dom'

const StudentDashboard = () => {
  return (
    <div class="student-dashboard">
      <div class="cards">
        <div class="card-left">
          <div class="left">
            {/* <img src={} alt='' className=''/> */}
            <p>VIEW YOUR BOOKINGS</p>
            <div className='line'></div>
          </div>
        </div>
        <Link to='/student-select' class="card-middle">
          <div class="middle">
            <img src={cardreserve} alt='card-reserve' className='card-reserve'/>
            <div className='line'></div>
            <p className='reserve'>RESERVE A SLOT</p>
            
          </div>
        </Link>
        <div class="card-right">
          <div class="right">
            {/* <img src={} alt='' className=''/> */}
            <div className='line'></div>
            <p>DUE ITEMS</p>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default StudentDashboard
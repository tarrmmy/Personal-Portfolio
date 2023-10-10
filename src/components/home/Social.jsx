import React from 'react'
import './home.css'

const Social = () => {
  return (
    <div className='home__social'>
        <a href="https://github.com/thatquams" className="home__social-icon" target='_blank' rel="noreferrer">
            <i class="uil uil-github-alt"></i>      
        </a>
        <a href="https://twitter.com/thatquams" className="home__social-icon" target='_blank' rel="noreferrer">
            <i class="uil uil-twitter-alt"></i>
        </a>
        <a href="https://www.linkedin.com/in/abdulraheem-quwam-b108b322b/" className="home__social-icon" target='_blank' rel="noreferrer">
            <i class="uil uil-linkedin-alt"></i>
        </a>
    </div>
  )
}

export default Social
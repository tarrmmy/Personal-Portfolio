import React from 'react'
import mouse from '../../assets/mouse.png'

const ScrollDown = () => {
  return (
    <div className='home__scroll'>
        <a href="#about" className="home__scroll-button button--flex">
            {/* <img src={mouse} /> */}
            <span className='home__scroll-name'>Scroll Down</span>
            <i class="uil uil-arrow-down"></i>
        </a>
    </div>
  )
}

export default ScrollDown
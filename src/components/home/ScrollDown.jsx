import React from 'react'

const ScrollDown = () => {
  return (
    <div className='home__scroll'>
        <a href="#about" className="home__scroll-button button--flex">
          <i class="uil uil-mouse-alt mouse-icon"></i>
          <span className='home__scroll-name'>Scroll Down</span>
          <i class="uil uil-arrow-down"></i>
        </a>
    </div>
  )
}

export default ScrollDown
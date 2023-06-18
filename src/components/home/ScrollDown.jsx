import React from 'react'
import mouse from '../../assets/mouse.png'

const ScrollDown = () => {
  return (
    <div className='home__scroll'>
        <a href="#about" className="home__scroll-button button--flex">
            <img src={mouse} />
        </a>
    </div>
  )
}

export default ScrollDown
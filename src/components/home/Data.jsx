import React from 'react'
import './home.css'
// import send  from '../../assets/solution.png'

const Data = () => {
  return (
    <div className='home__data'>
        <h1 className="home__title">Ibraheem Qomorudeen</h1>
        <h3 className="home__subtitle">Frontend Developer</h3>
        <p className="home__description">
          I am a good team player, witty and outgoing that loves to expand knowledge by teaching it and sitting under lectures.
        </p>
        <a href="#contact" className="button button--flex">
            Say Hello
            {/* <img src={send} /> */}
            <i class="uil uil-location-arrow button-icon"></i>
        </a>
    </div>
  )
}

export default Data
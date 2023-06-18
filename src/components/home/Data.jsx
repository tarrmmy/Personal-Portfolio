import React from 'react'
import './home.css'
import send  from '../../assets/send.png'

const Data = () => {
  return (
    <div className='home__data'>
        <h1 className="home__title">Ibraheem Qomorudeen</h1>
        <h3 className="home__subtitle">Frontend Developer</h3>
        <p className="home__description">
            rhwsi sksiek seeke workw skjjwi skisao wkwkj jsal ehjqi
        </p>
        <a href="#contact" className="button button--flex">
            Say Hello
            <img src={send} />
        </a>
    </div>
  )
}

export default Data
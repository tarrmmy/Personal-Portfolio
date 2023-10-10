import React from 'react'
import './home.css'
// import send  from '../../assets/solution.png'

const Data = () => {
  return (
    <div className='home__data'>
        <h1 className="home__title">Abdulraheem Quwam</h1>
        <h3 className="home__subtitle">Data Analyst</h3>
        <p className="home__description">
          Motivated and results-driven Analyst with 2 years proven track record in data analytics,
          data processing algorithms, as well as scripting language including python. Capable of
          Providing actionable business intelligence to support strategic initiatives and implement
          the solutions derived to improve return on investment.      
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
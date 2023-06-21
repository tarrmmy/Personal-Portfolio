import React from 'react'
import profile from '../../assets/profile.jpg'
import CV from '../../assets/Ibraheem.pdf'
import Info from './info'
import './about.css'

const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
            <img src={profile} alt="" className="about__img" />

            <div className="about__data">
                <Info />
                <p className="about__description">
                    I have designed and developed highly responsive websites and e-commerce 
                    solutions using advanced programming languages. 
                </p>
                <a download="" href={CV} className="button button--flex">
                    Download CV
                    <i class="uil uil-file-download" style={{marginLeft: '5px'}}></i>
                </a>
            </div>
        </div>
    </section>
  )
}

export default About
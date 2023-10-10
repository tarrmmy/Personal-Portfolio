import React from 'react'
import profile from '../../assets/quams.jpg'
// import CV from '../../assets/Ibraheem.pdf'
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
                    Facilitated and mentored over 100 students in data analytics, providing guidance,
                    knowledge, and mentorship to empower them for successful careers, and also contributed to building a strong data analytics community, actively participated in projects, presentations, and workshops to promote data literacy and drive
                    data-driven decision-making. 
                </p>
                {/* <a download="" href={CV} className="button button--flex">
                    Download CV
                    <i class="uil uil-file-download" style={{marginLeft: '5px'}}></i>
                </a> */}
            </div>
        </div>
    </section>
  )
}

export default About
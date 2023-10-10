import React from 'react'
import Frontend from './Frontend'
// import Consultant from './Consultant'
import './skill.css'

const Skill = () => {
  return (
    <section className="skills section" id='skills'>
        <h2 className="section__title" >Skills</h2>
        <span className="section__subtitle">My Technical Expertise</span>

        <div className="skills__container container grid">
            <Frontend />
            {/* <Consultant /> */}
        </div>
    </section>
  )
}

export default Skill
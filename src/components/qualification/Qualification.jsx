import React, { useState} from 'react'
import './qualification.css'

const Qualification = () => {

    const [toggleState, setToggleState] = useState (1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Qualifications</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                    className={
                        toggleState === 1 
                            ? "qualification__button qualification__active button--flex" 
                            : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div 
                    className={
                        toggleState === 2 
                            ? "qualification__button qualification__active button--flex" 
                            : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div 
                    className={
                        toggleState === 1 
                            ? "qualification__content qualification__content-active" 
                            : "qualification__content "
                    }
                >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Economics</h3>
                            <span className="qualification__subtitle">Miva Open University</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2023-2027
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">High School Diploma</h3>
                            <span className="qualification__subtitle">Talent Model College</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2013-2019
                            </div>
                        </div>

                        
                    </div>

                    {/* <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Data Analyst</h3>
                            <span className="qualification__subtitle">TechEnd</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2021-2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Consultancy</h3>
                            <span className="qualification__subtitle">  Gritty Minds Concept</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2023-Present
                            </div>
                        </div>

                        
                    </div> */}
                </div>

                <div 
                    className={
                        toggleState === 2 
                            ? "qualification__content qualification__content-active" 
                            : "qualification__content "
                    }
                >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Data Analysis Instructor</h3>
                            <span className="qualification__subtitle">Innkeeper's Hub, Magodo</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                January 2023-Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Data Analyst Associate</h3>
                            <span className="qualification__subtitle">Neo Docto Inc.</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                March 2022-August 2022
                            </div>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Freelance Data Scientist</h3>
                            <span className="qualification__subtitle"></span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                Dec 2021 - Oct 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Consultancy</h3>
                            <span className="qualification__subtitle">  Gritty Minds Concept</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2023-Present
                            </div>
                        </div>

                        
                    </div> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
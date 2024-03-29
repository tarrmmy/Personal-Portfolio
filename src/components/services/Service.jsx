import React, { useState } from 'react'
import './service.css'

const Service = () => {

    const [toggleState, setToggleState] = useState (0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="servies section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer in terms of services</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title"> Web<br />Development</h3>
                </div>

                <span className="services__button" onClick= {() => toggleTab(1)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)} ></i>
                        <h3 className="services__modal-title">Web Developer</h3>
                        <p className="services__modal-description">
                            Non harum sequi et amet suscipit eum rerum mollitia. Cum dolore placeat quo accusantium
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Cum dolore placeat quo accusantium.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Cum dolore placeat quo accusantium.</p>
                            </li>
                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Cum dolore placeat quo accusantium.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Cum dolore placeat quo accusantium.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web page development.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Responsive web design.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Bussiness <br />Consulancy</h3>
                </div>

                <span className="services__button" onClick= {() => toggleTab(2)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">UI/UX Designer</h3>
                        <p className="services__modal-description">
                            Non harum sequi et amet suscipit eum rerum mollitia. Cum dolore placeat quo accusantium
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Cum dolore placeat quo accusantium.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Cum dolore placeat quo accusantium.</p>
                            </li>
                            
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Cum dolore placeat quo accusantium.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Cum dolore placeat quo accusantium.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web page development.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Responsive web design.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Service
import React from 'react'

const Service = () => {
  return (
    <section className="servies section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">My Services</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil services__icon"></i>
                    <h3 className="services__title"></h3>
                </div>

                <span className="services__button">
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className="services__modal">
                    <div className="services__modal-cntent">
                        <i className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title"></h3>
                        <p className="services__modal-description">
                            Non harum sequi et amet suscipit eum rerum mollitia. Cum dolore placeat quo accusantium
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"></p>
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
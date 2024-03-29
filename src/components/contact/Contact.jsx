import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qfy0b44', 'template_hdtxokv', form.current, 'J3vaWSUqm37gtbka3')
        e.target.reset()
    };

  return (
    <section className="contact section" id="#contact">
        <h2 className="section__title">How to reach me</h2>
        <span className="section__subtitle">Contact</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">devquams@gmail.com</span>
                        <a href="mailto:tarrmmy@gmail.com" className="contact__button">
                            Write me<i className="bx bx-right-arrow-alt contact__button-icon"></i> 
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>
                        <h3 className="contact__card-title">Whatsapp</h3>
                        <span className="contact__card-data">+234 706 913 1702</span>
                        <a href="" className="contact__button">
                            Write me<i className="bx bx-right-arrow-alt contact__button-icon"></i> 
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-twitter contact__card-icon"></i>
                        <h3 className="contact__card-title">Twitter</h3>
                        <span className="contact__card-data">@thatquams</span>
                        <a href="" className="contact__button">
                            Write me<i className="bx bx-right-arrow-alt contact__button-icon"></i> 
                        </a>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write me your project</h3>

                <form className="contact__form" ref={form} onSubmit={sendEmail}>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input 
                            type="text" 
                            name='name' 
                            className="contact__form-input" 
                            placeholder='Insert your name'
                        />
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input 
                            type="email" 
                            name='email' 
                            className="contact__form-input" 
                            placeholder='Insert your email'
                        />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Projects</label>
                        <textarea 
                            name="project" 
                            id="" 
                            cols="30" 
                            rows="10"
                            className='contact__form-input'
                            placeholder='Write your project'
                        >

                        </textarea>
                    </div>
                    <button href="#contact" className="button button--flex">
                        Send
                        <i class="uil uil-location-arrow button-icon"></i>
                    </button>
                </form>
            </div>
        </div>


        
    </section>
  )
}

export default Contact
import React from 'react'
import Banner from '../components/Banner'
import Cover from '../components/Cover';
import { Link } from 'react-router-dom';
const ServicePage: React.FC = () => {
    return (
        <React.Fragment>
            <Cover>
                <Banner
                    title = "Our Service"
                >
                    <Link to ="/" className="btn-primary">
                        Return Home
                    </Link>
                </Banner>
            </Cover>
            <div className="container-contact-us">
            <form className="form" id="form-1">
                <h3 className="heading">CONTACT US</h3>
                <div className="note-container">
                    <h4 className="heading-note">We will get back to you personally during business hours.</h4>
                    <h4 className="heading-note">Customer Service Language : English, Spain, Russian, VietNamese</h4>
                    <h4 className="heading-note">Our business hours are from 9:00am to 6:00pm (GMT +7) Monday to Friday.</h4>
                </div>
               <div className="content-container">
                    <div className="contactus-form-1 contactus-form">
                        <label className="form-full-name">
                        Full name
                        </label>
                        <br/>
                    <input
                        id="fullname"
                        type="text"
                    />
                </div>

                <div className="contactus-form-2 contactus-form">
                <label className="form-email">
                        Email
                </label>
                <br/>
                <input
                    id="email"
                    type="email"
                />
                </div>

                <div className="contactus-form-3 contactus-form">
                <label className="form-label">
                        Subject
                </label>
                <br/>
                <input
                    id="subject"
                    type="text"
                    placeholder="Please state your problem"
                />

                
                </div>
                <div className="contactus-form-4 contactus-form">
                <label className="form-message">
                        Message
                </label>
                <br/>
                <textarea
                    id="message"
                />
                </div>
               </div>
               <button className="form-submit">Send</button>
            </form>
        </div>  
        </React.Fragment>
    )
}

export default ServicePage

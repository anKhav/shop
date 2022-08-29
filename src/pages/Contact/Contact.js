import React from 'react';

import MyForm from "../../components/MyForm/MyForm";

import './Contact.scss'

const Contact = () => {
    return (
        <section className='Contact'>
            <div className="contact">
                <div className="contact__header">
                    <h3 className="contact__title">Contact Us</h3>
                </div>
                <div className="section-inner contact__content">
                    <div className="contact__main">
                        <h4 className="title">We would love to hear from you</h4>
                        <p className="subtitle">
                            If you have any query or any type of suggestion,
                            you can contact us here. We would love to hear from you.
                        </p>
                        <MyForm/>
                    </div>
                    <div className="contact__aside">
                        <div className="aside__item">
                            <h5 className="aside__title">Visit Us</h5>
                            <p className="aside__text">
                                ET Lahore, Punjab, Pakistan
                                <br/>
                                Phone: +923039898987
                            </p>
                        </div>
                        <div className="aside__item">
                            <h5 className="aside__title">Get In Touch</h5>
                            <p className="aside__text">
                                You can get in touch with us on this provided email.
                                <br/>
                                <br/>
                                Email: hmjawad087@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
import React from 'react';

import MyBtn from "../../components/UI/MyBtn/MyBtn";


const About = () => {

    return (
        <div className='About'>
            <section className='about'>
                <div className="about__header">
                    <h2 className="about__title">About Northstar</h2>
                </div>
            </section>
            <section className="section-inner featured">
                <div className="featured__content">
                    <div className="feature">
                        <img src="/img/featured.jpg" alt="Buy now" className="feature__img"/>
                        <MyBtn className='feature__btn'>Buy Now</MyBtn>
                    </div>
                    <div className="feature">
                        <img src="/img/featured.jpg" alt="Buy now" className="feature__img"/>
                        <MyBtn className='feature__btn'>Buy Now</MyBtn>
                    </div>
                </div>
            </section>
            <section className="section-inner founders">
                <h2 className="founders__title">The Founders</h2>
                <div className="founders__content">
                    <div className="founder">
                        <img src="/img/founder.jpg" alt="Founder" className="founder__img"/>
                        <span className="founder__name">HM Jawad</span>
                    </div>
                    <div className="founder">
                        <img src="/img/founder.jpg" alt="Founder" className="founder__img"/>
                        <span className="founder__name">HM Jawad</span>
                    </div>
                    <div className="founder">
                        <img src="/img/founder.jpg" alt="Founder" className="founder__img"/>
                        <span className="founder__name">HM Jawad</span>
                    </div>
                    <div className="founder">
                        <img src="/img/founder.jpg" alt="Founder" className="founder__img"/>
                        <span className="founder__name">HM Jawad</span>
                    </div>
                </div>
            </section>
            <section className="section-inner testimonials">
                <h2 className="testimonials__title">Testimonials</h2>
                <div className="testimonials__content">
                    <div className="testimonial">
                        <div className="testimonial__img">
                            <img src="/img/testimonial.jpg" alt=""/>
                        </div>
                        <div className="testimonial__wrapper">
                            <div className="testimonial__qoutes">
                                <img src="/img/quotes.svg" alt=""/>
                            </div>
                            <p className="testimonial__text">
                                Once we ordered some accessories items and we got the products delivered in our doorstep,
                                the customer support was super helpful and they answered all my queries.
                            </p>
                            <span className="testimonial__author">Stacy</span>
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial__img">
                            <img src="/img/testimonial.jpg" alt=""/>
                        </div>
                        <div className="testimonial__wrapper">
                            <div className="testimonial__qoutes">
                                <img src="/img/quotes.svg" alt=""/>
                            </div>
                            <p className="testimonial__text">
                                Once we ordered some accessories items and we got the products delivered in our doorstep,
                                the customer support was super helpful and they answered all my queries.
                            </p>
                            <span className="testimonial__author">Stacy</span>
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial__img">
                            <img src="/img/testimonial.jpg" alt=""/>
                        </div>
                        <div className="testimonial__wrapper">
                            <div className="testimonial__qoutes">
                                <img src="/img/quotes.svg" alt=""/>
                            </div>
                            <p className="testimonial__text">
                                Once we ordered some accessories items and we got the products delivered in our doorstep,
                                the customer support was super helpful and they answered all my queries.
                            </p>
                            <span className="testimonial__author">Stacy</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
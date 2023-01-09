import React from 'react';

import './Footer.scss'

const Footer = ({className}) => {
    return (
        <footer className={className + ' Footer'}>
            <div className="section-inner footer__wrapper">
                <ul className="footer__list">
                    <h5 className="footer__title">Company Info</h5>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Latest Posts</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Shop</a></li>
                </ul>
                <ul className="footer__list">
                    <h5 className="footer__title">Help Links</h5>
                    <li><a href="#">Tracking</a></li>
                    <li><a href="#">Order Status</a></li>
                    <li><a href="#">Delivery</a></li>
                    <li><a href="#">Shipping Info</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
                <ul className="footer__list">
                    <h5 className="footer__title">Useful Links</h5>
                    <li><a href="#">Special Offers</a></li>
                    <li><a href="#">Gift Cards</a></li>
                    <li><a href="#">Advetising</a></li>
                    <li><a href="#">Terms of Use</a></li>
                </ul>
                <div className="footer__list">
                    <h5 className="footer__title">Get in the know</h5>
                    <div className="input__wrapper">
                        <input type="email" className='footer__input' placeholder='Enter email'/>
                        <div className="arr">
                            <img src="/img/arrow.svg" alt="To send arrow"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rights">
                <div className="rights__main">
                    <p className="rights__text">© 2020 NorthStar eCommerce</p>
                    <p className="rights__text">Privacy Policy Terms & Conditions</p>
                </div>
                <div className="rights__payments">
                    <img src="/img/visa.svg" alt=""/>
                    <img src="/img/visa.svg" alt=""/>
                    <img src="/img/visa.svg" alt=""/>
                    <img src="/img/visa.svg" alt=""/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
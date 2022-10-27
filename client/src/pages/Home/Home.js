import React from "react";
import {Link} from "react-router-dom";

import MyBtn from "../../components/UI/MyBtn/MyBtn";
import Products from "../../components/Products/Products";


const Benefit = ({src, alt, title, descr}) => {
    return (
        <div className='Benefit benefit'>
            <img src={src} alt={alt}/>
            <div className="benefit__content">
                <h5 className="benefit__title">{title}</h5>
                <p className="benefit__decsr">{descr}</p>
            </div>
        </div>
    );
};

const Promo = ({title, descr}) => {
    return (
        <div className='Promo promo'>
            <div className="promo__content">
                <h3 className="promo__title">{title}</h3>
                <p className="promo__descr">{descr}</p>
                <MyBtn className='promo__btn'>
                    Buy Now
                </MyBtn>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <div className="Home">
            <section className='section-outer'>
                <div className="hero">
                    <div className="hero__content">
                        <h2 className="hero__title">
                            Stylist picks beat the heat
                        </h2>
                        <MyBtn className='hero__btn'>
                            <Link  to='/shop/all'>
                                Shop now
                            </Link>
                        </MyBtn>
                    </div>
                </div>
            </section>
            <section className="section_outer">
                <div className="section-inner container new-products">
                    <h2 className="container__title new-products__title">
                        Discover NEW Arrivals
                    </h2>
                    <h4 className="container__subtitle new-products__subtitle">
                        Recently added shirts!
                    </h4>
                    <Products className='container__content new-products__content' newarr="true"/>
                </div>
            </section>
            <section className="section-outer">
                <div className="section-inner benefits">
                    <Benefit
                        src='/img/benefit_icon.svg'
                        title='Free shipping'
                        alt='Free shipping'
                        descr='Enjoy free shipping on all orders above $100'
                    />
                    <Benefit
                        src='/img/benefit_icon.svg'
                        title='Support 24/7'
                        alt='Free shipping'
                        descr='Enjoy free shipping on all orders above $100'
                    />
                    <Benefit
                        src='/img/benefit_icon.svg'
                        title='30 days return'
                        alt='Free shipping'
                        descr='Enjoy free shipping on all orders above $100'
                    />
                    <Benefit
                        src='/img/benefit_icon.svg'
                        title='100% payment secure'
                        alt='Free shipping'
                        descr='Enjoy free shipping on all orders above $100'
                    />
                </div>
            </section>
            <section className="section-inner promos">
                <Promo
                    title='Peace of mind'
                    descr='A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.'
                />
                <Promo
                    title='Buy 2 Get 1 Free'
                    descr='End of season sale. Buy any 2 items of your choice and get 1 free.'
                />
            </section>
            <section className="section-inner top-sellers-wrapper">
                <div className="container top-sellers">
                    <h3 className="container__title top-sellers__title">Top Sellers</h3>
                    <h4 className="container__subtitle top-sellers__subtitle">Browse our top selling products</h4>
                    <Products className='container__content content' best='true'/>
                    <MyBtn className='top-sellers__btn'>
                        <Link  to='/shop/all'>
                            Shop now
                        </Link>
                    </MyBtn>
                </div>
            </section>
        </div>
    );
};

export default Home;
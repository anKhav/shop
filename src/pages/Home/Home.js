import React from 'react';
import MyBtn from "../../components/UI/MyBtn/MyBtn";
import Benefit from "../../components/Benefit/Benefit";
import Promo from "../../components/Promo/Promo";
import Products from "../../components/Products/Products";
import {useSelector} from "react-redux";


import './Home.scss'

const Home = () => {
    const products = useSelector(state => state.products)
    console.log(products)
    return (
        <div className='Home'>
            <section className='section-outer'>
                <div className="hero">
                    <div className="hero__content">
                        <h2 className="hero__title">
                            Stylist picks beat the heat
                        </h2>
                        <MyBtn className={'hero__btn'}>
                            Shop now
                        </MyBtn>
                    </div>
                </div>
            </section>
            <section className="section_outer">
                <div className="section_inner container new-products">
                    <h2 className="container__title new-products__title">
                        Discover NEW Arrivals
                    </h2>
                    <h4 className="container__subtitle new-products__subtitle">
                        Recently added shirts!
                    </h4>
                    <Products className='container__content new-products__content' newarr="true"/>
                    {/*<div className="container__content new-products__content">*/}
                    {/*    <Product*/}
                    {/*        src='/img/product.jpg' alt='men t-shirt'*/}
                    {/*        name='Outcast T-Shirt'*/}
                    {/*        price='$29.00'*/}
                    {/*    />*/}
                    {/*    <Product*/}
                    {/*        src='/img/product.jpg' alt='men t-shirt'*/}
                    {/*        name='Outcast T-Shirt'*/}
                    {/*        price='$29.00'*/}
                    {/*    /><Product*/}
                    {/*    src='/img/product.jpg' alt='men t-shirt'*/}
                    {/*    name='Outcast T-Shirt'*/}
                    {/*    price='$29.00'*/}
                    {/*    />*/}
                    {/*    <Product*/}
                    {/*        src='/img/product.jpg' alt='men t-shirt'*/}
                    {/*        name='Outcast T-Shirt'*/}
                    {/*        price='$29.00'*/}
                    {/*    />*/}
                    {/*    <Product*/}
                    {/*        src='/img/product.jpg' alt='men t-shirt'*/}
                    {/*        name='Outcast T-Shirt'*/}
                    {/*        price='$29.00'*/}
                    {/*    />*/}
                    {/*    <Product*/}
                    {/*        src='/img/product.jpg' alt='men t-shirt'*/}
                    {/*        name='Outcast T-Shirt'*/}
                    {/*        price='$29.00'*/}
                    {/*    />*/}
                    {/*    <Product*/}
                    {/*        src='/img/product.jpg' alt='men t-shirt'*/}
                    {/*        name='Outcast T-Shirt'*/}
                    {/*        price='$29.00'*/}
                    {/*    />*/}
                    {/*    <Product*/}
                    {/*        src='/img/product.jpg' alt='men t-shirt'*/}
                    {/*        name='Outcast T-Shirt'*/}
                    {/*    price='$29.00'*/}
                    {/*    />*/}
                    {/*</div>*/}
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
            <section className="section-inner">
                <div className="container top-sellers">
                    <h3 className="container__title top-sellers__title">Top Sellers</h3>
                    <h4 className="container__subtitle top-sellers__subtitle">Browse our top selling products</h4>
                    <Products className='container__content content' best='true'/>
                    {/*<div className="container__content content">*/}
                    {/*    <Product*/}
                    {/*        src='/img/product.jpg' alt='men t-shirt'*/}
                    {/*        name='Red Shirt'*/}
                    {/*        price='$49.00'*/}
                    {/*    />*/}
                    {/*    <Product*/}
                    {/*        src='/img/product.jpg' alt='men t-shirt'*/}
                    {/*        name='Red Shirt'*/}
                    {/*        price='$49.00'*/}
                    {/*    />*/}
                    {/*    <Product*/}
                    {/*        src='/img/product.jpg' alt='men t-shirt'*/}
                    {/*        name='Outcast T-Shirt'*/}
                    {/*        price='$39.00'*/}
                    {/*    />*/}
                    {/*    <Product*/}
                    {/*        src='/img/product.jpg' alt='men t-shirt'*/}
                    {/*        name='Outcast T-Shirt'*/}
                    {/*        price='$24.00'*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <MyBtn
                        type='submit'
                        className="top-sellers__btn"
                    >Shop Now</MyBtn>
                </div>
            </section>
        </div>
    );
};

export default Home;
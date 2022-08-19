import React from 'react';
import MyBtn from "../../components/UI/MyBtn/MyBtn";
import Product from "../../components/Product/Product";
import Benefit from "../../components/Benefit/Benefit";
import Promo from "../../components/Promo/Promo";

const Home = () => {
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
                <div className="section_inner new-products">
                    <h2 className="new-products__title">
                        Discover NEW Arrivals
                    </h2>
                    <h4 className="new-products__subtitle">
                        Recently added shirts!
                    </h4>
                    <div className="new-products__content">
                        <Product
                            src='/img/product.jpg' alt='men t-shirt'
                            name='Outcast T-Shirt'
                            price='$29.00'
                        />
                        <Product
                            src='/img/product.jpg' alt='men t-shirt'
                            name='Outcast T-Shirt'
                            price='$29.00'
                        /><Product
                        src='/img/product.jpg' alt='men t-shirt'
                        name='Outcast T-Shirt'
                        price='$29.00'
                    /><Product
                        src='/img/product.jpg' alt='men t-shirt'
                        name='Outcast T-Shirt'
                        price='$29.00'
                    /><Product
                        src='/img/product.jpg' alt='men t-shirt'
                        name='Outcast T-Shirt'
                        price='$29.00'
                    /><Product
                        src='/img/product.jpg' alt='men t-shirt'
                        name='Outcast T-Shirt'
                        price='$29.00'
                    /><Product
                        src='/img/product.jpg' alt='men t-shirt'
                        name='Outcast T-Shirt'
                        price='$29.00'
                    /><Product
                        src='/img/product.jpg' alt='men t-shirt'
                        name='Outcast T-Shirt'
                        price='$29.00'
                    />
                    </div>
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
            <div className="section-inner promos">
                <Promo
                    title='Peace of mind'
                    descr='A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.'
                />
                <Promo
                    title='Buy 2 Get 1 Free'
                    descr='End of season sale. Buy any 2 items of your choice and get 1 free.'
                />
            </div>
        </div>
    );
};

export default Home;
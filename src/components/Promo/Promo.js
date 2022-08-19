import React from 'react';
import './Promo.scss'
import MyBtn from "../UI/MyBtn/MyBtn";

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

export default Promo;
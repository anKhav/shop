import React from 'react';
import './Benefit.scss'

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

export default Benefit;
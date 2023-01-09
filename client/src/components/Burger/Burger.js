import React, {useEffect, useState} from 'react';

import './Burger.scss'

const Burger = () => {
    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen)

    const burgerToggle = (e) => {
        e.target.classList.contains('icon__wrapper') ? setIsOpen(!isOpen) : setIsOpen(false)
    }

    return (
        <div className='burger'>
            <div className={!isOpen ? 'burger-content': 'burger-content burger-content--open'}>

            </div>
            <div className='icon__wrapper' onClick={(e) => burgerToggle(e)}>
                <div className={!isOpen ? 'burger__icon': 'burger__icon burger__icon--open'}>
            </div>
            </div>
        </div>
    );
};

export default Burger;
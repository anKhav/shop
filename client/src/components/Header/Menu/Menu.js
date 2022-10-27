import React, {useState} from 'react';
import {Link} from "react-router-dom";
import DropdownItem from "../../Dropdown/DropdownItem/DropdownItem";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='menu' onClick={(e) => {
            e.target.classList.value === 'menu' || 'menu__btn' ? setIsOpen(!isOpen) : setIsOpen(true)
        }}>
            <div className="menu__btn" ></div>
            {
                isOpen && (
                    <div className="menu__content">
                        <DropdownItem option='All'>
                            <Link to='/shop/all'>All</Link>
                        </DropdownItem>
                        <DropdownItem option='All'>
                            <Link to='/shop/men'>Men</Link>
                        </DropdownItem>
                        <DropdownItem option='All'>
                            <Link to='/shop/women'>Women</Link>
                        </DropdownItem>
                    </div>
                )
            }
        </div>
    );
};

export default Menu;
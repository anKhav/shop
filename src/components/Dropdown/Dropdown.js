import React, {useState} from 'react';
import './Dropdown.scss'
import DropdownItem from "./DropdownItem/DropdownItem";

const Dropdown = ({product, selected,setSelected}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='dropdown'>
            <div className="dropdown__btn" onClick={() => {
                setIsOpen(!isOpen)
            }}>{selected}</div>
            {
                isOpen && (
                    <div className="dropdown__content">
                        {
                            product.sizes.map(size => {
                                return (
                                    <DropdownItem onClick={() => {
                                        setSelected(size)
                                        setIsOpen(false)
                                    }} key={size} option={size}/>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Dropdown;
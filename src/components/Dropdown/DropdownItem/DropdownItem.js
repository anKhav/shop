import React from 'react';

const DropdownItem = ({option, onClick}) => {
    return (
        <div className='dropdown__item' onClick={onClick}>{option}</div>
    );
};

export default DropdownItem;
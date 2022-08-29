import React from 'react';

const DropdownItem = ({onClick,children}) => {
    return (
        <div className={'dropdown__item'} onClick={onClick}>{children}</div>
    );
};

export default DropdownItem;
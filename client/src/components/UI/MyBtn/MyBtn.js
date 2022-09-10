import React from 'react';
import './MyBtn.css'

const MyBtn = ({id,type, onClick, children,className, disabled}) => {
    return (
        <button id={id} disabled={disabled} type={type} onClick={onClick} className={className+ ' MyBtn'}>
            {children}
        </button>
    );
};

export default MyBtn;
import React from 'react';
import './MyBtn.css'

const MyBtn = ({type, onClick, children,className, disabled}) => {
    return (
        <button disabled={disabled} type={type} onClick={onClick} className={className+ ' MyBtn'}>
            {children}
        </button>
    );
};

export default MyBtn;
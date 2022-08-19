import React from 'react';
import './MyBtn.css'

const MyBtn = ({type, onClick, children,className}) => {
    return (
        <button type={type} onClick={onClick} className={className+ ' MyBtn'}>
            {children}
        </button>
    );
};

export default MyBtn;
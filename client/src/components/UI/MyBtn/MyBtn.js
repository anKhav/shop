import React from 'react';

const MyBtn = ({id,type, onClick, children,className, disabled}) => {
    return (
        <button id={id} disabled={disabled} type={type} onClick={onClick} className={className+ ' MyBtn'}>
            {children}
        </button>
    );
};

export default MyBtn;
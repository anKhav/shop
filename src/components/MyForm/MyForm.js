import React from 'react';
import MyBtn from "../UI/MyBtn/MyBtn";

import './MyForm.scss'

const MyForm = () => {
    return (
        <form className='MyForm'>
            <div className="MyForm__inputs">
                <div className="input__wrapper">
                    <label className='MyForm__label' htmlFor="name">Name</label>
                    <input className='MyForm__input' type="text" id='name'/>
                </div>
                <div className="input__wrapper">
                    <label className='MyForm__label' htmlFor="email">Email</label>
                    <input className='MyForm__input' type="text" id='email'/>
                </div>
            </div>
            <div className="input__wrapper">
                <label className='MyForm__label' htmlFor="message">Message</label>
                <textarea  className='MyForm__textarea' id='message'></textarea>
            </div>
            <MyBtn className='MyForm__btn'>Send Message</MyBtn>
        </form>
    );
};

export default MyForm;
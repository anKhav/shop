import React from 'react';
import './Auth.scss'
import MyBtn from "../../components/UI/MyBtn/MyBtn";
import {Link, useLocation} from "react-router-dom";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === '/auth'


    return (
        <div className='section-inner auth'>
            <h2 className="auth__title">{isLogin ? 'Login' : 'Sign In'}</h2>
            <div className="auth__content">
                <form className='auth__form'>
                    <div className="email">
                        <label htmlFor="email-input" className="email__label">Email</label>
                        <input type="email" className="email__input" id="email-input"/>
                    </div>
                    <div className="password">
                        <label htmlFor="password-input" className="password__label">Password</label>
                        <input type="password" className="password__input" id="password-input"/>
                    </div>
                    <div className="auth__footer">
                        {isLogin ? <div>No account? <Link className='link' to='/registration'>Sign In</Link></div>
                            :
                            <div>Have account? <Link className='link' to='/auth'>Login</Link></div>
                        }

                        <MyBtn className="auth__btn">{isLogin ? 'Login' : 'Sign In'}</MyBtn>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;
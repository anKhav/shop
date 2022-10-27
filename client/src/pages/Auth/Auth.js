import React, {useEffect, useState} from 'react';
import MyBtn from "../../components/UI/MyBtn/MyBtn";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginUser, registrationUser} from "../../feature/user/userSlice";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === '/auth'
    const dispatch = useDispatch()
    const [user, setUser] = useState({email:'',password:''})
    const navigate = useNavigate()

    const register = async (e) => {
            e.preventDefault()
            setUser({...user,isLogin: true})
            await dispatch(registrationUser(user))
            navigate("/cabinet")
    }
    const login = async (e) => {
        e.preventDefault()
        setUser({...user,isLogin: true})
        await dispatch(loginUser(user))
        navigate("/cabinet")
    }


    return (
        <div className='section-inner auth'>
            <h2 className="auth__title">{isLogin ? 'Login' : 'Sign In'}</h2>
            <div className="auth__content">
                <form className='auth__form'>
                    <div className="email">
                        <label htmlFor="email-input" className="email__label">Email</label>
                        <input value={user.email} onChange={(e) => setUser({...user, email:e.target.value})} type="email" className="email__input" id="email-input"/>
                    </div>
                    <div className="password">
                        <label htmlFor="password-input" className="password__label">Password</label>
                        <input value={user.password} onChange={(e) => setUser({...user, password:e.target.value})} type="password" className="password__input" id="password-input"/>
                    </div>
                    <div className="auth__footer">
                        {isLogin ? <div>No account? <Link className='link' to='/registration'>Sign In</Link></div>
                            :
                            <div>Have account? <Link className='link' to='/auth'>Login</Link></div>
                        }

                        <MyBtn className="auth__btn" onClick={(e) => register(e)}>{'Sign In'}</MyBtn>
                        <MyBtn className="auth__btn" onClick={(e) => login(e)}>{'Login'}</MyBtn>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;
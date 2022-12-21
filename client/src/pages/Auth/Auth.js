import React, {useEffect, useState} from 'react';
import MyBtn from "../../components/UI/MyBtn/MyBtn";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginUser, registrationUser} from "../../features/user/userSlice";

const Auth = () => {
    const res = useSelector(state => state.user.response)
    const location = useLocation()
    const isLogin = location.pathname === '/auth'
    const dispatch = useDispatch()
    const [user, setUser] = useState({email:'',password:''})
    const navigate = useNavigate()
    const [error, setError] = useState(null)


    useEffect(() => {
        res === true && navigate('/cabinet')
    },[res])

    const register = async (e) => {
            e.preventDefault()
            setUser({...user,isLogin: true})
            await dispatch(registrationUser(user))
        if (res === null){
            console.log('ok')
        }
    }
    const login = async (e) => {
        e.preventDefault()
        setUser({...user,isLogin: true})
        await dispatch(loginUser(user))

        if (error === null){
            console.log('ok')
        }
        setError(res)
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
                    {res !==null && <div className='message--error'>{res}</div>}
                    <div className="auth__footer">
                        {isLogin ? <div>No account? <Link className='link' to='/registration'>Sign In</Link></div>
                            :
                            <div>Have account? <Link className='link' to='/auth'>Login</Link></div>
                        }
                        {
                            isLogin ?
                                <MyBtn className="auth__btn" onClick={(e) => login(e)}>{'Login'}</MyBtn>
                                :
                                <MyBtn className="auth__btn" onClick={(e) => register(e)}>Register</MyBtn>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;
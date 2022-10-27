import React, {useEffect, useLayoutEffect, useState} from 'react';
import './reset.css'
import './App.scss'
import './styles/index.scss'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./components/AppRouter";
import {useDispatch} from "react-redux";
import {checkAuth} from "./feature/user/userSlice";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('token')){
            dispatch(checkAuth())
        }
    }, [])

    localStorage.removeItem('refreshToken')
    console.log(localStorage);

    return (
    <div className="App">
        {<div>
            <Header/>
            <AppRouter/>
            <Footer className='footer'/>
        </div>}
    </div>
  );
}

export default App;

import React, {useEffect} from 'react';
import './reset.css'
import './App.scss'
import './styles/index.scss'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./AppRouter";
import {useDispatch} from "react-redux";
import {checkAuth} from "./features/user/userSlice";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('token')){
            dispatch(checkAuth())
        }
    }, [])


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

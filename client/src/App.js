import React, {useEffect} from 'react';
import './reset.css'
import './App.scss'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./components/AppRouter";
import {useDispatch, useSelector} from "react-redux";
import {checkAuth} from "./feature/user/userSlice";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem('token')){
            dispatch(checkAuth())
        }
    }, [])

    const user = useSelector(state => state.user.email)

  return (
    <div className="App">
        <h1>{user}</h1>
        <Header/>
        <AppRouter/>
        <Footer className='footer'/>
    </div>
  );
}

export default App;

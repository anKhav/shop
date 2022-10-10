import React, {useEffect} from 'react';
import './reset.css'
import './App.scss'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./components/AppRouter";
import {useDispatch, useSelector} from "react-redux";
import {checkAuth, setLoadingTrue} from "./feature/user/userSlice";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem('token')){
            dispatch(checkAuth())
        }
    }, [])



    const setLoading = useSelector(state => state.setLoading)
    dispatch(setLoadingTrue())

  return (
    <div className="App">
        {setLoading ? <h1>LOADING</h1>: <div>
            <Header/>
            <AppRouter/>
            <Footer className='footer'/>
        </div>}
    </div>
  );
}

export default App;

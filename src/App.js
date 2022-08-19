import React from 'react';
import './reset.css'
import './App.scss'
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/contact"} element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;

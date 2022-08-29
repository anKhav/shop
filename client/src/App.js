import React from 'react';
import './reset.css'
import './App.scss'
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/contact"} element={<Contact/>}/>
            <Route path={"/products/:id"} element={<SingleProduct/>}/>
            <Route path={"/cart"} element={<Cart/>}/>
            <Route path={"/checkout"} element={<Checkout/>}/>
            <Route path={"/shop/:cat"} element={<Shop/>}/>
            <Route path={"/shop/:cat"} element={<Shop/>}/>
            <Route path={"/shop/:cat"} element={<Shop/>}/>
        </Routes>
        <Footer className='footer'/>
    </div>
  );
}

export default App;

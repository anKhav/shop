import React from 'react';
import './reset.css'
import './App.scss'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./components/AppRouter";

function App() {

  return (
    <div className="App">
        <Header/>
        <AppRouter/>
        <Footer className='footer'/>
    </div>
  );
}

export default App;

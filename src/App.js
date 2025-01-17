import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import './usman.css';
import Routes from './Router';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';



const App = () => {

  return (
    <>
      <Navbar/>
      <Routes />
      <Footer/>
    </>
  )
}

export default App;

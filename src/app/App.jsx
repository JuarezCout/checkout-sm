import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './home/Home';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Carrinho from './carrinho/Carrinho';
import Checkout from './checkout/Checkout';
import Routes from './Routes';


export default App;

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Header></Header>
        <Routes></Routes>
        <Footer></Footer>
      </div>
    </HashRouter>
  )
}



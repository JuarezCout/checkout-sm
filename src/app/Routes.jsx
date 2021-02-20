import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from './home/Home';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Carrinho from './carrinho/Carrinho';
import Checkout from './checkout/Checkout';

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/carrinho' component={Carrinho} />
        <Route path='/checkout' component={Checkout} />
    </Switch>
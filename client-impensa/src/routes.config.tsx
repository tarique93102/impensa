import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// pages to be routed
import Home from './app/pages/home/home';
import Auth from './app/pages/auth/auth';
import About from './app/pages/about/about';
import Payments from './app/pages/payments/payments';
import Investment from './app/pages/investment/investment';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/auth' component={Auth} />
            <Route path='/about' component={About} />
            <Route path='/payments' component={Payments} />
            <Route path='/investment' component={Investment} />
            <Redirect from='/**' to='/' />
        </Switch>
    );
};
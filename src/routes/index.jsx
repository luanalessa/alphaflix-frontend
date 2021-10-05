import React from 'react'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Login from '../pages/Login'
import Home from '../pages/Home'


export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact to="/login" from="/" />
                <PublicRoute restricted path="/login" component = { Login } />
                <PrivateRoute path="/home" component = { Home } />
            </Switch>
        </BrowserRouter>
        )
}

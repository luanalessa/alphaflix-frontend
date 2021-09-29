import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login'
import Home from '../pages/Home'


export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact to="/login" from="/" />
                <Route path="/login" component = { Login } />
                <Route path="/home" component = { Home } />

            </Switch>
        </BrowserRouter>
        )
}

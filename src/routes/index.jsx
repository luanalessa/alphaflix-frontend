import React from 'react'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Login from '../pages/Login'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import MyList from '../pages/MyList'
import Favorite from '../pages/Favorites'





export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact to="/login" from="/" />
                <PublicRoute restricted path="/login" component = { Login } />
                <PrivateRoute path="/home" component = { Home } />
                <PrivateRoute path="/cart" component = { Cart } />
                <PrivateRoute path="/mylist" component = { MyList } />
                <PrivateRoute path="/favorite" component = { Favorite } />


            </Switch>
        </BrowserRouter>
        )
}

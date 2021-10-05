import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// isAuthenticated() 
PrivateRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
    path: PropTypes.string.isRequired,
}

export default function PrivateRoute({ component: Component, path}){
    <Route 
        render = {() => ( true
            ? <Component path = {path} /> 
            : <Redirect to = "/login" />)}
    />
}


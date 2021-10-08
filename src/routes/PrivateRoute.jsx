import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { isAuthenticated  } from '../services/authentication';


const  PrivateRoute = ({ component: Component, path}) =>
(
    <Route 
        render = {() => ( isAuthenticated() 
            ? <Component path = {path} /> 
            : <Redirect to = "/login" />)}
    />
)

PrivateRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
    path: PropTypes.string.isRequired,
}

export default PrivateRoute;

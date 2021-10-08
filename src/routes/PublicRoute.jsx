import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { isAuthenticated  } from '../services/authentication';

// isAuthenticated() 


const  PublicRoute= ({ component: Component, restricted, path}) => 
(
    <Route 
        render = {() => ( isAuthenticated() && restricted
            ? <Redirect to="/home" path={path} />
            : <Component path={path} />
            
            )}
    />
)

PublicRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
    path: PropTypes.string.isRequired,
    restricted: PropTypes.bool.isRequired,
};

export default PublicRoute;
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// isAuthenticated() 


const  PublicRoute= ({ component: Component, restricted, path}) => 
{
    <Route 
        render = {() => ( restricted
            ? <Redirect to="/home" />
            : <Component path={path} />
            
            )}
    />
}

PublicRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
    path: PropTypes.string.isRequired,
    restricted: PropTypes.bool.isRequired,
};

export default PublicRoute;
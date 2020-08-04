import React from 'react';
import { Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, isAuthenticated, isLoading}) => {
    if(!isAuthenticated) {
        return <Redirect to="/login" />
    }
    return <Component />
}

export { PrivateRoute };
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../services/login.service';

const AdminRoute = ({component: Component,restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted ?<Component {...props} />:<Redirect to="/dashboard/mytask" /> 
        )} />
    );
};

const UserRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?<Component {...props} />:<Redirect to="/" /> 
        )} />
    );
};
export
{ AdminRoute,UserRoute };

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../services/login.service';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin()  ?
                <Redirect to="/dashboard/mytask" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;

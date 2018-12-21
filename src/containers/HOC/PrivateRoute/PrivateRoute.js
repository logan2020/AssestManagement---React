import { Route, Redirect } from "react-router-dom";
import React from "react";
const auth=true;
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        auth === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = props => {
  return (
    <Route {...props}>
      {(!props.authenticated)? props.children  : <Redirect to="/" />}
    </Route>
  )
};

export default PrivateRoute;



import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = props => {

  if (props.authenticated) {
    return <Redirect to="/profile"/>
  }

  return (
    <Route {...props}/>
  );
};

export default ProtectedRoute;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MainPage from '../MainPage';

const ProtectedRoute = props => {

  if (props.authenticated) {
    return <Redirect to = "recipes/:id" />
  }

  return (
    <Route {...props}/>
  );
};

export default ProtectedRoute;

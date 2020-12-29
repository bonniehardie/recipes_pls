import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import MainPage from '../MainPage';
import Profile from '../Profile';

const ProtectedRoute = props => {

  if (props.authenticated) {
    return <Redirect to="/" />
    // return <Redirect to = "profile/"/>
    // return <Redirect to = "recipes/:id" />

  }

  return (
    <Route {...props}/>
  );
};

export default ProtectedRoute;

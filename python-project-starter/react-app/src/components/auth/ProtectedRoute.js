import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import MainPage from '../MainPage';
import Profile from '../Profile';

const ProtectedRoute = props => {

    return (
      <Route {...props}>
        {(props.authenticated)? props.children  : <Redirect to="/login" />}
      </Route>
    )
    // return <Redirect to="/" />
    // return <Redirect to = "profile/"/>
    // return <Redirect to = "recipes/:id" />

}

export default ProtectedRoute;

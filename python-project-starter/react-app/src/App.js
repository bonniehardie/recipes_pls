import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from './components/MainPage';
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import PrivateRoute from "./components/auth/PrivateRoute";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { CssBaseline } from '@material-ui/core';
import Theme from './Theme';
import { authenticateThunk } from "./store/actions/user";
import './App.css';

export default function App() {
  const isNotLoggedIn = useSelector((state) => !state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticateThunk());
  }, [dispatch]);

  // const isLoaded = useSelector(state => state.loaded)

  // console.log(isLoaded)
  // if (!isLoaded) return null;
  return (
    <>
      <CssBaseline />
      <Theme>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/login" exact={true} authenticated={!isNotLoggedIn}>
              <LoginForm />
            </PrivateRoute>
            <PrivateRoute exact path = "/signup" exact={true} authenticated={!isNotLoggedIn}>
              <SignupForm />
            </PrivateRoute>
            <ProtectedRoute path="/" authenticated={!isNotLoggedIn}>
              <MainPage />
            </ProtectedRoute>
          </Switch>
        </BrowserRouter>
      </Theme>
    </>
  );
}

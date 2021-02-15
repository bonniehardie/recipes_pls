import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';
import MainPageStyles from './styles/MainPageStyles';
import RecipeContent from './RecipeContent';
import Profile from './Profile';
import RecipeView from './RecipeView';

export default function MainPage() {
  const classes = MainPageStyles();

  return (
    <Box className={ classes.mainpageContainer }>
            <Route path="/recipes/:id" >
              <RecipeView/>
            </Route>
            <Route exact path="/" >
              <Profile />
            </Route>
    </Box>
  );
}

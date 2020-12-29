import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';
import MainPageStyles from './styles/MainPageStyles';
import RecipeContent from './RecipeContent';
import Profile from './Profile';
import RecipeView from './RecipeView';

export default function MainPage() {
  const classes = MainPageStyles();

  return (
    <Box className={ classes.mainpageContainer }>
      <main className={ classes.main }>
        <Switch>
          <Route path="/">
            <Profile />
          </Route>
          <Route path="/recipes/:id" component={RecipeView}>
          </Route>
        </Switch>
      </main>
    </Box>
  );
}

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
          <Route exact path="/recipes/:id" component={RecipeView}>
            <RecipeView />
          </Route>
          <Route exact path="/">
            <Profile />
          </Route>

        </Switch>
      </main>
    </Box>
  );
}

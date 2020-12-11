import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';
import useStyles from './styles/MainPageStyles';
import RecipeContent from './RecipeContent';
import Profile from './Profile';

export default function MainPage() {
  const classes = useStyles();

  return (
    <Box className={ classes.mainpageContainer }>
      <main className={ classes.main }>
        <Switch>
          {/* <Route path="/recipes/<int:recipeid>"> */}
          <Route path="recipes">
            <RecipeContent />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </main>
    </Box>
  );
}

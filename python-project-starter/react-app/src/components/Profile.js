import React from 'react';
import { Box } from '@material-ui/core';
import ProfileStyles from './styles/ProfileStyles';
import RecipeContent from './RecipeContent';
import RecipeAppBar from './RecipeAppBar';
import RecipeCard from './RecipeCard';
import RecipeMenu from './RecipeMenu';

export default function Profile() {
  const classes = ProfileStyles();

  return (
    <Box className={classes.container}>
      <RecipeAppBar />
      {/* <Box className={classes.recipe_container}>
        <RecipeMenu /> */}
      {/* </Box> */}
      <RecipeContent />
    </Box>
  );
}

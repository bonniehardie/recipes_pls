import React from 'react';
import { Box } from '@material-ui/core';
import ProfileStyles from './styles/ProfileStyles';
import RecipeContent from './RecipeContent';
import RecipeAppBar from './RecipeAppBar';
import RecipeCard from './RecipeCard';
import RecipeMenu from './RecipeMenu';
import ProfileAppBar from './ProfileAppBar';
import RecipePicture from './RecipePicture';
import Picture from './Picture';
import Ratings from './Ratings';

export default function Profile() {
  const classes = ProfileStyles();

  return (
    <Box className={classes.profile_container}>
      <ProfileAppBar />
      <Box className={classes.recipe_container}>
        <RecipeMenu />
      </Box>
    </Box>
  );
}

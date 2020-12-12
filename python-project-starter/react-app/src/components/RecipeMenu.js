import React from 'react';
import { Box } from '@material-ui/core';
import ProfileStyles from './styles/ProfileStyles';
import RecipeCard from './RecipeCard';
import RecipeMenuStyles from './styles/RecipeMenuStyles';

export default function Profile() {
  const classes = ProfileStyles();

  return (
    <Box className={classes.container}>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
    </Box>
  );
}

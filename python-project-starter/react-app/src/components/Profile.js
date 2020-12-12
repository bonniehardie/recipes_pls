import React from 'react';
import { Box } from '@material-ui/core';
import ProfileStyles from './styles/ProfileStyles';
import RecipeContent from './RecipeContent';
import RecipeAppBar from './RecipeAppBar';

export default function Profile() {
  const classes = ProfileStyles();

  return (
    <Box >
      <RecipeAppBar />
      <RecipeContent />
    </Box>
  );
}

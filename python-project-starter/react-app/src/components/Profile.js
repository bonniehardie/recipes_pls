import React from 'react';
import { Box } from '@material-ui/core';
import ProfileStyles from './styles/ProfileStyles';
import RecipeContent from './RecipeContent';

export default function Profile() {
  const classes = ProfileStyles();

  return (
    <Box >
      <div>
          This is a profile
      </div>
      <RecipeContent />
    </Box>
  );
}

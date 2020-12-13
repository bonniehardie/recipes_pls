import React from 'react';
import { Box } from '@material-ui/core';
import RecipeContent from './RecipeContent';
import RecipeAppBar from './RecipeAppBar';
import RecipePicture from './RecipePicture';
import Picture from './Picture';
import Ratings from './Ratings';

export default function RecipeView(props) {

  return (
    <Box>
        <RecipeAppBar recipeId={props.recipeId} />
        {/* <RecipePicture />
        <Picture />
        <RecipeContent />
        <Ratings /> */}
    </Box>

  );
}

import React from 'react';
import { Box } from '@material-ui/core';
import RecipeContent from './RecipeContent';
import RecipeAppBar from './RecipeAppBar';
import RecipePicture from './RecipePicture';
import Picture from './Picture';
import Ratings from './Ratings';
import RecipeViewStyles from './styles/RecipeViewStyles';
import { useParams } from "react-router-dom";

export default function RecipeView(props) {
  const classes = RecipeViewStyles();
  const params = useParams();
  const recipeId = params.id

  return (
    <Box className={classes.box}>
        <RecipeAppBar className={classes.app_bar} recipeId={recipeId} />
        <Box className={classes.recipe_content}>
          <RecipeContent recipeId={recipeId} />
        </Box>
    </Box>

  );
}

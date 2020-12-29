import React from 'react';
import { Box } from '@material-ui/core';
import RecipeContent from './RecipeContent';
import RecipeAppBar from './RecipeAppBar';
import RecipePicture from './RecipePicture';
import Picture from './Picture';
import Ratings from './Ratings';
import RecipeViewStyles from './styles/RecipeViewStyles';


export default function RecipeView(props) {
  const classes = RecipeViewStyles();
  const recipeId = props.match.params.id

  return (
    <h1>sanity check</h1>
    // <Box className={classes.box}>
    //     <RecipeAppBar className={classes.app_bar} recipeId={recipeId} />
    //     <RecipeContent className={classes.recipe_content} recipeId={recipeId} />
    // </Box>

  );
}

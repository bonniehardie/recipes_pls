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

  return (
    <Box className={classes.box}>
        <RecipeAppBar className={classes.app_bar} recipeId={props.recipeId} />
        {/* <RecipePicture /> */}
        {/* <Picture className={classes.picture} recipeId={props.recipeId}/> */}
        <RecipeContent className={classes.recipe_content} recipeId={props.recipeId}/>
    </Box>

  );
}

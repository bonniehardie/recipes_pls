import React from 'react';
import { Box } from '@material-ui/core';
import ProfileStyles from './styles/ProfileStyles';
import RecipeCard from './RecipeCard';
import { useSelector } from 'react-redux';


export default function RecipeMenu() {
  const classes = ProfileStyles();
  const recipes = useSelector(state => state.recipes)
  if (recipes === undefined) return null;

  return (
    <Box className={classes.container}>
      { Object.keys(recipes).length ? (Object.keys(recipes).map(id => {
        return (
          <Box className={classes.card_box}>
            <RecipeCard picture={recipes[id].picture_url} name={recipes[id].name} backstory={recipes[id].backstory} href={`/recipes/${id}`}/>
          </Box>
        )})): null }
    </Box>
  );
}

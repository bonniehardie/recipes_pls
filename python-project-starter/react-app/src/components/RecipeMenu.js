import React from 'react';
import { Box } from '@material-ui/core';
import ProfileStyles from './styles/ProfileStyles';
import RecipeCard from './RecipeCard';
import RecipeMenuStyles from './styles/RecipeMenuStyles';

export default function Profile() {
  const classes = ProfileStyles();

  return (
    <div className={classes.scroll}>
        <Box className={classes.container}>
            < Box className = {classes.card_box}><RecipeCard picture={'https://recipesformen.com/wp-content/uploads/2019/10/peanutbutter-and-jelly-sandwich.jpg'}/></Box>
            <Box className={classes.card_box}><RecipeCard picture={'https://cafedelites.com/wp-content/uploads/2017/12/Perfect-Juicy-Roast-Chicken-IMAGE-28.jpg'}/></Box>
            <Box className={classes.card_box}><RecipeCard picture={'https://cafedelites.com/wp-content/uploads/2017/12/Perfect-Juicy-Roast-Chicken-IMAGE-28.jpg'}/></Box>
        </Box>
        {/* <Box className={classes.container}>
            <Box className={classes.card_box}><RecipeCard /></Box>
            <Box className={classes.card_box}><RecipeCard /></Box>
            <Box className={classes.card_box}><RecipeCard /></Box>
        </Box>
        <Box className={classes.container}>
            <Box className={classes.card_box}><RecipeCard /></Box>
            <Box className={classes.card_box}><RecipeCard /></Box>
            <Box className={classes.card_box}><RecipeCard /></Box>
        </Box> */}

    </div>
  );
}

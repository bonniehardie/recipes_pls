import React from 'react';
import { Box } from '@material-ui/core';
import ProfileStyles from './styles/ProfileStyles';
import RecipeCard from './RecipeCard';
import { useSelector } from 'react-redux';


export default function RecipeMenu() {
  const classes = ProfileStyles();
  const recipes = useSelector(state => state.recipes)
  if (recipes === undefined) return null;


  // return (
  //       <List className={classes.list}>
  //           { Object.keys(ingredients).length ? (recipe.ingredient_ids.map(id => {
  //               return (
  //                   <ListItem>
  //                       <FiberManualRecordIcon className={classes.bullet}/>
  //                       <Typography>
  //                           {`${ingredients[id].quantity} ${ingredients[id].unit} ${ingredients[id].name}` }
  //                       </Typography>
  //                   </ListItem>
  //           )})) : null }
  //       </List>
  //   );
  return (
    <div className={classes.scroll}>
      <Box className={classes.container}>
        { Object.keys(recipes).length ? (Object.keys(recipes).map(id => {
          return (
            <Box className={classes.card_box}><RecipeCard picture={recipes[id].picture_url} name={recipes[id].name} backstory={recipes[id].backstory} href={`/recipes/${id}`}/></Box>
          )})): null }
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

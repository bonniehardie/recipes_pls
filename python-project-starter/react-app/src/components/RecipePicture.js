import React from 'react';
import Paper from '@material-ui/core/Paper';
import RecipePictureStyles from './styles/RecipePictureStyles';
import { useSelector } from 'react-redux';


export default function RecipePicture() {
  // const classes = RecipePictureStyles();
  const recipe = useSelector(state => state.recipes[1])
  if (recipe === undefined) return null;

  const styles = {
    paperContainer: {
      backgroundImage: `${recipe.picture_url}`
    }
  };
    return (
      <div
      // className={classes.root}
      >
        <h1>{`here is the url ${recipe.picture_url}`}</h1>
        <Paper
        // image={`url(${recipe.picture_url})`}
        style={styles.paperContainer}
        // className={classes.paper}
        elevation={3} />
      </div>
    );
}

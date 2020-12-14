import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PictureStyles from './styles/PictureStyles';
import { useSelector } from 'react-redux';


export default function Picture(props) {
  const classes = PictureStyles();
  const recipeId = props.recipeId
  const recipe = useSelector(state => state.recipes[recipeId])
  if (recipe === undefined) return null;

  return (
    <Card className={classes.root}>
        <CardMedia
          image={`url(${recipe.picture_url})`}
        />
    </Card>
  );
}

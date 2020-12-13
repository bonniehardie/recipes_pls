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
  const recipe = useSelector(state => state.recipes[1])
  if (recipe === undefined) return null;

  return (
    <Card className={classes.root}>
      <CardActionArea>
          {recipe.picture_url}
        <CardMedia
          image={`url(${recipe.picture_url})`}
        />
      </CardActionArea>
    </Card>
  );
}

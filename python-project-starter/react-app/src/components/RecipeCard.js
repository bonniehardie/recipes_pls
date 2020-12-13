import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RecipeCardStyles from './styles/RecipeCardStyles';
import { useSelector } from 'react-redux';


export default function RecipeCard(props) {
  const classes = RecipeCardStyles();
  const recipe = useSelector(state => state.recipes[1])
  if (recipe === undefined) return null;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.picture}
          // image="https://cafedelites.com/wp-content/uploads/2017/12/Perfect-Juicy-Roast-Chicken-IMAGE-28.jpg"
          title="Recipe.name"
        />
        <CardContent>
          <Typography >
            {recipe.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {recipe.backstory}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.button}size="small" color="primary">
          let's cook!
        </Button>
      </CardActions>
    </Card>
  );
}

import React from 'react';
import RecipeContentStyles from './styles/RecipeContentStyles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector } from 'react-redux';
import IngredientList from './IngredientList';
import DirectionList from './DirectionList';
import ToolList from './ToolList';
import NewIngredient from './dialogs/NewIngredient';
import NewDirection from './dialogs/NewDirection';
import NewTool from './dialogs/NewTool';
import Ratings from './Ratings';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';


export default function RecipeContent(props) {
  const classes = RecipeContentStyles();
  const recipeId = props.recipeId
  const recipe = useSelector(state => state.recipes[recipeId])
  if (recipe === undefined) return null;
  console.log(recipe.picture_url)

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>ingredients</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <IngredientList recipeId={props.recipeId}/>
            <NewIngredient recipeId={props.recipeId}/>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>directions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DirectionList recipeId={props.recipeId}/>
            <NewDirection recipeId={props.recipeId}/>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>tools/equipment needed</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ToolList recipeId={props.recipeId}/>
            <NewTool recipeId={props.recipeId}/>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>backstory</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography>
                {recipe.backstory}
              </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://lh3.googleusercontent.com/proxy/tyx0uF_7LhDiYD57xfzA7ORJNid3Mqe6__hOurtG0OCxOsxMZLO6WAxS4TZ1hMrr1rOk3t5pBKRl-aYM4RuGV8VvbJLThkk"
          title="Paella dish"
        ></CardMedia>
        <CardContent className={classes.card_content}>
          <div className={classes.ratings}>
            <Ratings />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

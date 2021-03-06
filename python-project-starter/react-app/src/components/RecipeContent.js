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


export default function RecipeContent(props) {
  const classes = RecipeContentStyles();
  const recipeId = props.recipeId
  const recipe = useSelector(state => state.recipes[recipeId])
  if (recipe === undefined) return null;
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
      <div className={classes.ratings}>
        <Ratings />
      </div>

    </div>
  );
}

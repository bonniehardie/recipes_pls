import React from 'react';
import RecipeContentStyles from './styles/RecipeContentStyles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { useSelector } from 'react-redux';



export default function RecipeContent() {
  const classes = RecipeContentStyles();
  const recipes = useSelector(state => state.recipes)
  const recipes_dict_1 = recipes.dict[1]
  // console.log(recipes_dict_1)
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
              <List className={classes.list}>
                <ListItem>
                  <FiberManualRecordIcon className={classes.bullet}/>
                  <Typography>1 filet salmon</Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecordIcon className={classes.bullet}/>
                  <Typography>5</Typography>
                  <Typography>sprigs</Typography>
                  <Typography>fresh dill</Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecordIcon className={classes.bullet}/>
                  <Typography>1</Typography>
                  <Typography>small</Typography>
                  <Typography>lemon</Typography>
                </ListItem>
                <ListItem>
                  <FiberManualRecordIcon className={classes.bullet}/>
                  <Typography>1</Typography>
                  <Typography>clove </Typography>
                  <Typography>garlic</Typography>
                </ListItem>
              </List>
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
            <Typography >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>special equipment needed</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>back story</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography>
                {/* {recipes.dict[1].backstory} */}
              </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

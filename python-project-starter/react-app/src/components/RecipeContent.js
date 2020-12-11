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



export default function RecipeContent() {
  const classes = RecipeContentStyles();

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
                  salmon filet
                </ListItem>
                <ListItem>
                  <FiberManualRecordIcon className={classes.bullet}/>
                  fresh dill
                </ListItem>
                <ListItem>
                  <FiberManualRecordIcon className={classes.bullet}/>
                  salmon filet
                </ListItem>
                <ListItem>
                  <FiberManualRecordIcon className={classes.bullet}/>
                  fresh dill
                </ListItem>
                <ListItem>
                  <FiberManualRecordIcon className={classes.bullet}/>
                  salmon filet
                </ListItem>
                <ListItem>
                  <FiberManualRecordIcon className={classes.bullet}/>
                  fresh dill
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const useStyles = makeStyles((theme) => ({
  accordion: {
    // backgroundColor: 'white',
    // backgroundColor: '#E8D7CF',
    // color: '#E8D7CF'
    color: '#BAA6AC',
    fontFamily: 'arial',

  },
  bullet: {
    height: 10
  },
  container: {
    // backgroundColor: '#E8D7CF',
    backgroundColor: 'white',
    height: '1000px',
    width: '1000px',
    padding: '20%'
  },

  details: {

    display: 'relative',
  },
  icon: {
    color: '#BAA6AC',
      '&:hover': {
        color: '#EDE8EA'
      },
  },
  list: {
    display: 'absolute',
    left: 50
  },
  root: {
    width: '50%',
    // backgroundColor: '#E8D7CF',
    backgroundColor: 'white',
  },
  heading: {
    paddingLeft: 10,
    color: '#BAA6AC',
      '&:hover': {
        color: '#EDE8EA'
      },
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className={classes.heading}>ingredients</div>
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

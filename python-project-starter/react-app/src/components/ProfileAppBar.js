import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import AppBarStyles from './styles/AppBarStyles';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import NewRecipe from './dialogs/NewRecipe';
import LogoutButton2 from './auth/LogoutButton2';


export default function ProfileAppBar() {
  const classes = AppBarStyles();
  const user = useSelector(state => state.user)
  const today = new Date();
  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  const day_of_week = weekday[today.getDay()];

  const months = new Array(12);
  months[0] = "January";
  months[1] = "February";
  months[2] = "March";
  months[3] = "April";
  months[4] = "May";
  months[5] = "June";
  months[6] = "July";
  months[7] = "August";
  months[8] = "September";
  months[9] = "October";
  months[10] = "November";
  months[11] = "December";
  const month = months[today.getMonth()];
  const day = today.getUTCDate();
  const year = today.getFullYear();

  if (user === undefined) return null;
  return (
    <AppBar className={classes.background}>
      <Toolbar className={classes.toolbar} position='static'>
        <Typography className={classes.hello}>
          {`hello, ${user.username} :)`}
        </Typography>
        {/* <Typography className={classes.date}>
          {
            `today is ${day_of_week}, ${month} ${day}, ${year}`
          }
        </Typography> */}
        <Typography className={classes.title} noWrap>
          my recipes
        </Typography>
        <div className={classes.space}>
          <NewRecipe className={classes.button}/>
          <LogoutButton2 className={classes.button}/>
        </div>
      </Toolbar>
    </AppBar>
  );
}

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

  if (user === undefined) return null;
  return (
    <AppBar className={classes.background}>
      <Toolbar className={classes.toolbar} position='static'>
        <Typography className={classes.hello}>
          {`hello, ${user.username} :)`}
        </Typography>
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

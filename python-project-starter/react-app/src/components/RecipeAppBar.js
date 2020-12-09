import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  accent: {
    backgroundColor: 'white'
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#000300'
  },
  toolbar: {
    position: 'relative',
    top: 23,
    minHeight: 128,
    backgroundColor: '#E8D7CF',
    alignItems: 'flex-start',
    paddingTop: 5,
    paddingBottom: 15
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    fontFamily: 'arial',
    fontWeight: 200,
    fontSize: 30,
    color: 'white'
  },
  icons: {
    color: 'white',
    '&:hover': {
      color: '#adaa97'
    }

  }
}));

export default function RecipeAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar >
        <AppBar className={classes.accent} position="static">
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="open drawer"
            >
              <MenuIcon className={classes.icons}/>
            </IconButton>
            <div className={classes.title} noWrap>
              salmon and asparagus in foil packets
            </div>
            <IconButton className={classes.icons} aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton className={classes.icons} aria-label="display more actions" edge="end" color="inherit">
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </AppBar>
    </div>
  );
}

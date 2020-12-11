import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import RecipeAppBarStyles from './styles/RecipeAppBarStyles';


export default function RecipeAppBar() {
  const classes = RecipeAppBarStyles();

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

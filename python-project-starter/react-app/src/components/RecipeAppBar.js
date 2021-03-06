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
import LogoutButton from './auth/LogoutButton';

export default function RecipeAppBar(props) {
  const recipeId = props.recipeId
  const classes = AppBarStyles();
  const recipe = useSelector(state => state.recipes[recipeId])



  if (recipe === undefined) return null;
  return (
    <div className={classes.root}>
      <AppBar className={classes.background}>
          <Toolbar className={classes.toolbar} position='static'>
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="open drawer"
            >
              <MenuIcon className={classes.icons}/>
            </IconButton> */}
            <LogoutButton />
            <Typography className={classes.title} noWrap>
              {recipe.name}
            </Typography>
            <IconButton className={classes.icons} aria-label="search" color="inherit">
              {/* <SearchIcon /> */}
            </IconButton>
            <IconButton className={classes.icons} aria-label="display more actions" edge="end" color="inherit">
              {/* <MoreIcon /> */}
            </IconButton>
          </Toolbar>
      </AppBar>
    </div>
  );
}

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
import Button from '@material-ui/core/Button';
import LogoutButton2 from './auth/LogoutButton2';

export default function RecipeAppBar(props) {
  const recipeId = props.recipeId
  const classes = AppBarStyles();
  const recipe = useSelector(state => state.recipes[recipeId])
  const user = useSelector(state => state.user)

  if (user === undefined) return null;

  if (recipe === undefined) return null;
  return (
    <div className={classes.root}>
      <AppBar className={classes.background}>
        <Toolbar className={classes.toolbar} position='static'>
          <Typography className={classes.hello}>
            {`hello, ${user.username} :)`}
          </Typography>
          <div className={classes.space2}>
            <Button className={classes.button}
            // variant="outlined"
            href="/">back to recipes</Button>
            <LogoutButton2 />
          </div>
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

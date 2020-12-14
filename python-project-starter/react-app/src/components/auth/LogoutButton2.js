import React from "react";
import { logout } from "../../services/auth";
import RecipeViewStyles from '../styles/RecipeViewStyles';
import Button from '@material-ui/core/Button';


const LogoutButton2 = () => {
  const classes = RecipeViewStyles();

  const onLogout = async (e) => {
    await logout();
    // setAuthenticated(false);
  };
  return (
    <div className={classes.button_div}>
      <Button variant="outlined" onClick={onLogout}>
          logout
      </Button>
    </div>
  )
  // return <button className={classes.logout_button} onClick={onLogout}>logout</button>;
};

export default LogoutButton2;

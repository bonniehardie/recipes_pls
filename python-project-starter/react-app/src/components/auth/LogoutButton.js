import React from "react";
import { logout } from "../../services/auth";
import AppBarStyles from '../styles/AppBarStyles';
import Button from '@material-ui/core/Button';


const LogoutButton = () => {
  const classes = AppBarStyles();

  const onLogout = async (e) => {
    await logout();
    // setAuthenticated(false);
  };
  return (
    <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={onLogout}
    >
        logout
    </Button>
  )
  // return <button className={classes.logout_button} onClick={onLogout}>logout</button>;
};

export default LogoutButton;

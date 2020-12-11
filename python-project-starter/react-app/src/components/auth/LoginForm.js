import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../store/actions/user";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AuthStyles from '../styles/AuthStyles';

const LoginForm = () => {
    const classes = AuthStyles();
    
    const [email, setEmail] = useState("chef@demo.io");
    const [password, setPassword] = useState("omedfehc");
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginThunk(email, password));
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };


    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                {/* <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar> */}
                <Typography className={classes.brand}>
                    recipes pls :)
                </Typography>
                <Typography className={classes.tagline}>
                    so you can spend more time cooking
                </Typography>
                <Typography className={classes.tagline}>
                    and less time scrolling
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        type="text"
                        value={email}
                        onChange={updateEmail}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={updatePassword}
                    />
                    <div className={classes.button_div}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            continue
                        </Button>
                    </div>
                    <Grid container justify="center">
                        <Grid item className={classes.grid_item}>
                            <Typography className={classes.dont}>
                                don't have an account?
                                <Link href="/signup" className={classes.link}>
                                create account
                                </Link>
                            </Typography>

                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

export default LoginForm;

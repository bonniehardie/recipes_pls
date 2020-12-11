import React, { useState } from 'react';
import { useDispatch } from "react-redux";
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
import { signupThunk } from "../../store/actions/user";
import Whisk from "../../whisk.png"

export default function SignupForm() {
    const classes = AuthStyles();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(signupThunk(username, email, password));
    };

    const updateusername = (e) => {
        setUsername(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <Container className={classes.container} component="main" maxWidth="xs">
            <div className={classes.paper}>
                {/* <Avatar className={classes.avatar}>
                    <img src={ Whisk } className={classes.whisk}/>
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
                        autoComplete="fname"
                        name="username"
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        label="username"
                        autoFocus
                        margin="normal"
                        value={username}
                        onChange={updateusername}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="email"
                        name="email"
                        autoComplete="email"
                        type="email"
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
                            className={classes.button}
                        >
                            continue
                        </Button>
                    </div>
                    <Grid container justify="center">
                        <Grid item className={classes.grid_item}>
                            <Typography className={classes.dont}>
                                already have an account?
                                <Link href="/login" className={classes.link}>
                                sign in
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

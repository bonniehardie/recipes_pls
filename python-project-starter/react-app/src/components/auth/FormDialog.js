import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  button: {
    color: '#BAA6AC',
      '&:hover': {
        backgroundColor: 'white',
        color: '#EDE8EA'
      },
    textTransform: 'none'
  },
  text: {
    color: '#E8D7CF'
  }
}));

export default function FormDialog() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
      className={classes.button}
      onClick={handleClickOpen}>
        sign in
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle
        className={classes.text}
        id="form-dialog-title">sign in</DialogTitle>
        <DialogContent
        className={classes.text}
        >

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="email address"
            type="email"
            fullWidth
          />
          <TextField
            className={classes.text}
            autoFocus
            margin="dense"
            id="name"
            label="password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}
          className={classes.button}
          >
            cancel
          </Button>
          <Button onClick={handleClose}
          className={classes.button}
          >
            login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

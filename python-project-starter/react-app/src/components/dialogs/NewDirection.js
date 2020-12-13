import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogStyles from '../styles/DialogStyles';

export default function NewDirection() {
  const classes = DialogStyles();

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
      variant="outlined"
      onClick={handleClickOpen}>
        add direction
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">new direction</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="direction"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="step_number"
            label="step number"
            fullWidth
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            cancel
          </Button>
          <Button onClick={handleClose}>
            add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogStyles from '../styles/DialogStyles';
import { useDispatch, useSelector } from 'react-redux';
import { createDirection } from '../../store/actions/directions';


export default function NewDirection(props) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const [name, setName] = useState('');
  const [stepNumber, setStepNumber] = useState('');
  const recipeId = props.recipeId
  const classes = DialogStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    setOpen(false);
    dispatch(createDirection(user.id, recipeId, name, parseInt(stepNumber)))
  };
  const update_name = (e) => {
    setName(e.target.value)
  };
  const update_step_number = (e) => {
    setStepNumber(e.target.value)
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
            onChange={update_name}
            autoFocus
            margin="dense"
            id="name"
            label="direction"
            fullWidth
          />
          <TextField
            onChange={update_step_number}
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
          <Button onClick={handleSubmit}>
            add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

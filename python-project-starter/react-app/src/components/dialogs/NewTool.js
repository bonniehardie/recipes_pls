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
import { createTool } from '../../store/actions/tools';



export default function NewTool(props) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const [name, setName] = useState('');
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
    dispatch(createTool(user.id, recipeId, name))
  };
  const update_name = (e) => {
    setName(e.target.value)
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        add tool
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">new tool</DialogTitle>
        <DialogContent>
          <TextField
            onChange={update_name}
            autoFocus
            margin="dense"
            id="name"
            label="tool"
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

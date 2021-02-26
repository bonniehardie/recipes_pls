import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AppBarStyles from '../styles/AppBarStyles';
import { useDispatch, useSelector } from 'react-redux';
import { createRecipeThunk } from '../../store/actions/recipes';


export default function NewRecipe() {
    const classes = AppBarStyles();
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    const [name, setName] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [backstory, setBackstory] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = () => {
        setOpen(false);
        dispatch(createRecipeThunk(user.id, name, pictureUrl, backstory))
    };
    const update_name = (e) => {
        setName(e.target.value)
    };
    const update_picture_url = (e) => {
        setPictureUrl(e.target.value)
    };
    const update_backstory = (e) => {
        setBackstory(e.target.value)
    };

  return (
    <div>
      <Button className={classes.button}
      // variant="outlined"
      onClick={handleClickOpen}>
        create new recipe
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">new recipe</DialogTitle>
        <DialogContent>
          <TextField
            onChange={update_name}
            autoFocus
            margin="dense"
            id="name"
            label="title"
            fullWidth
          />
          <TextField
            onChange={update_picture_url}
            autoFocus
            margin="dense"
            id="picture_url"
            label="picture"
            fullWidth
          />
          <TextField
            onChange={update_backstory}
            autoFocus
            margin="dense"
            id="backstory"
            label="backstory"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            cancel
          </Button>
          <Button onClick={handleSubmit}>
            create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

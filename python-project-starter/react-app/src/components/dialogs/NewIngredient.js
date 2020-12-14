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
import { createIngredient } from '../../store/actions/ingredients';


export default function NewIngredient(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const recipeId = props.recipeId
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
    dispatch(createIngredient(user.id, recipeId, name, parseInt(quantity), unit))
  };
  const update_name = (e) => {
    setName(e.target.value)
  };
  const update_quantity = (e) => {
    setQuantity(e.target.value)
  };
  const update_unit = (e) => {
    setUnit(e.target.value)
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        add ingredient
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">new ingredient</DialogTitle>
        <DialogContent>
          <TextField
            onChange={update_quantity}
            autoFocus
            margin="dense"
            id="quantity"
            label="quantity"
            fullWidth
          />
          <TextField
            onChange={update_unit}
            autoFocus
            margin="dense"
            id="unit"
            label="unit"
            fullWidth
          />
          <TextField
            onChange={update_name}
            autoFocus
            margin="dense"
            id="name"
            label="ingredient name"
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
